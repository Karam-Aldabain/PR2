package de.thm.pi2.echo.api;

import de.thm.pi2.echo.dto.UserRequest;
import de.thm.pi2.echo.dto.UserResponse;
import io.vertx.core.json.DecodeException;
import io.vertx.core.json.Json;
import io.vertx.ext.web.Router;
import io.vertx.ext.web.RoutingContext;
import io.vertx.ext.web.handler.BodyHandler;
import java.util.UUID;

public final class EchoApi {
    public void appendRouting(Router router) {
        router.get("/echo").handler(this::handleEcho);
        router.post("/echoUser")
            .handler(BodyHandler.create().setBodyLimit(32 * 1024).setHandleFileUploads(false))
            .handler(this::handleEchoUser);
        router.route().failureHandler(this::handleFailure);
    }

    public void handleEcho(RoutingContext rc) {
        String message = rc.request().getParam("message");
        rc.response().putHeader("Content-Type", "text/plain; charset=utf-8");
        if (message == null) {
            rc.response().setStatusCode(400).end("Missing 'message' parameter");
        } else {
            rc.response().setStatusCode(200).end("Echo: " + message);
        }
    }

    private void handleEchoUser(RoutingContext rc) {
        String contentType = rc.request().getHeader("Content-Type");
        if (contentType == null || !contentType.split(";", 2)[0].trim().equalsIgnoreCase("application/json")) {
            rc.response().setStatusCode(400).putHeader("Content-Type", "text/plain; charset=utf-8")
                .end("Expected Content-Type: application/json");
            return;
        }

        UserRequest req;
        try {
            req = rc.body().asPojo(UserRequest.class);
        } catch (DecodeException | IllegalArgumentException error) {
            badRequest(rc);
            return;
        }
        if (req == null || req.email() == null || req.email().isBlank()
                || req.password() == null || req.password().isBlank()) {
            badRequest(rc);
            return;
        }

        // Only this response DTO is serialized; passwords are neither stored nor returned.
        UserResponse res = new UserResponse(UUID.randomUUID().toString(), req.email());
        rc.response().setStatusCode(200).putHeader("Content-Type", "application/json")
            .end(Json.encode(res));
    }

    private void badRequest(RoutingContext rc) {
        rc.response().setStatusCode(400).putHeader("Content-Type", "text/plain; charset=utf-8")
            .end("Invalid JSON user request: email and password are required");
    }

    private void handleFailure(RoutingContext rc) {
        int status = rc.statusCode();
        if (status >= 400 && status < 500) {
            rc.response().setStatusCode(status).putHeader("Content-Type", "text/plain; charset=utf-8")
                .end(status == 413 ? "Request body too large" : "Invalid request");
            return;
        }
        // Do not log the request body, which may contain a password.
        System.err.println("Unexpected Echo API failure: "
            + (rc.failure() == null ? "unknown error" : rc.failure().getClass().getSimpleName()));
        rc.response().setStatusCode(500).putHeader("Content-Type", "text/plain; charset=utf-8")
            .end("Internal server error");
    }
}
