package de.thm.pi2.echo;

import de.thm.pi2.echo.api.EchoApi;
import io.vertx.core.Vertx;
import io.vertx.ext.web.Router;

public final class Start {
    private Start() { }

    public static void main(String[] args) {
        int port = 8888;
        Vertx vertx = Vertx.vertx();
        Router router = Router.router(vertx);
        EchoApi api = new EchoApi();
        api.appendRouting(router);

        vertx.createHttpServer()
            .requestHandler(router)
            .listen(port)
            .onSuccess(server -> System.out.println("HTTP server started on port 8888"))
            .onFailure(error -> {
                System.err.println("Could not start HTTP server on port 8888: " + error.getMessage());
                vertx.close().onComplete(result -> System.exit(1));
            });

        Runtime.getRuntime().addShutdownHook(new Thread(() ->
            vertx.close().toCompletionStage().toCompletableFuture().join(), "vertx-shutdown"));
    }
}
