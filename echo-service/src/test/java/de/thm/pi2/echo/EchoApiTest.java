package de.thm.pi2.echo;

import de.thm.pi2.echo.api.EchoApi;
import io.vertx.core.Vertx;
import io.vertx.core.http.HttpServer;
import io.vertx.core.json.JsonObject;
import io.vertx.ext.web.Router;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;
import java.util.Set;
import java.util.UUID;
import java.util.concurrent.TimeUnit;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class EchoApiTest {
    private static Vertx vertx;
    private static HttpClient client;
    private static String base;

    @BeforeAll
    static void startServer() throws Exception {
        vertx = Vertx.vertx();
        Router router = Router.router(vertx);
        new EchoApi().appendRouting(router);
        HttpServer server = vertx.createHttpServer().requestHandler(router).listen(0, "127.0.0.1")
            .toCompletionStage().toCompletableFuture().get(10, TimeUnit.SECONDS);
        base = "http://127.0.0.1:" + server.actualPort();
        client = HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build();
    }

    @AfterAll
    static void stopServer() throws Exception {
        if (client != null) client.close();
        if (vertx != null) vertx.close().toCompletionStage().toCompletableFuture().get(10, TimeUnit.SECONDS);
    }

    private HttpResponse<String> get(String path) throws Exception {
        return client.send(HttpRequest.newBuilder(URI.create(base + path)).timeout(Duration.ofSeconds(5)).GET().build(),
            HttpResponse.BodyHandlers.ofString());
    }

    private HttpResponse<String> post(String body, String contentType) throws Exception {
        return client.send(HttpRequest.newBuilder(URI.create(base + "/echoUser"))
            .timeout(Duration.ofSeconds(5)).header("Content-Type", contentType)
            .POST(HttpRequest.BodyPublishers.ofString(body)).build(), HttpResponse.BodyHandlers.ofString());
    }

    @Test
    void echoesQueryAsPlainText() throws Exception {
        var response = get("/echo?message=PI2");
        assertEquals(200, response.statusCode());
        assertEquals("Echo: PI2", response.body());
        assertTrue(response.headers().firstValue("Content-Type").orElseThrow().startsWith("text/plain"));
        assertEquals("Echo: Hallo Welt", get("/echo?message=Hallo%20Welt").body());
        assertEquals("Echo: ", get("/echo?message=").body());
    }

    @Test
    void rejectsMissingMessageExactlyAsInLecture() throws Exception {
        var response = get("/echo");
        assertEquals(400, response.statusCode());
        assertEquals("Missing 'message' parameter", response.body());
    }

    @Test
    void userResponseHasUuidAndEmailWithoutPassword() throws Exception {
        String body = "{\"email\":\"bob@gibts.net\",\"password\":\"demo-secret\"}";
        var response = post(body, "application/json; charset=utf-8");
        assertEquals(200, response.statusCode());
        assertEquals("application/json", response.headers().firstValue("Content-Type").orElseThrow());
        JsonObject json = new JsonObject(response.body());
        assertEquals(Set.of("id", "email"), json.fieldNames());
        assertEquals("bob@gibts.net", json.getString("email"));
        assertEquals(json.getString("id"), UUID.fromString(json.getString("id")).toString());
        assertFalse(response.body().contains("password"));
        assertFalse(response.body().contains("demo-secret"));
        var second = new JsonObject(post(body, "application/json").body());
        assertNotEquals(json.getString("id"), second.getString("id"));
    }

    @Test
    void malformedOrIncompleteRequestsAreSafeAndServerKeepsRunning() throws Exception {
        for (String body : new String[] { "{\"email\":", "", "null", "[]", "{}",
                "{\"email\":\"bob@gibts.net\"}", "{\"email\":\" \",\"password\":\"demo\"}" }) {
            var response = post(body, "application/json");
            assertEquals(400, response.statusCode(), body);
            assertFalse(response.body().contains("Exception"));
            assertFalse(response.body().contains("io.vertx"));
            assertEquals(200, get("/echo?message=still-alive").statusCode());
        }
        assertEquals(400, post("{}", "text/plain").statusCode());
        assertEquals(413, post("x".repeat(33 * 1024), "application/json").statusCode());
        assertEquals(200, get("/echo?message=PI2").statusCode());
    }

    @Test
    void rejectsTrailingContentAfterUserJson() throws Exception {
        String valid = "{\"email\":\"bob@gibts.net\",\"password\":\"demo\"}";
        for (String suffix : new String[] { " garbage", " {}" }) {
            assertEquals(400, post(valid + suffix, "application/json").statusCode());
        }
        assertEquals(200, post(valid, "application/json").statusCode());
    }
}
