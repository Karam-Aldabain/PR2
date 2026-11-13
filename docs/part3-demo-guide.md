# Part 3 demonstration guide

## Run the demonstration

1. Open `echo-service/` in a terminal. Verify JDK 25 with `java -version` and `javac -version`.
2. Run `.\gradlew.bat clean build`, then `.\gradlew.bat run`. Show the successful startup message on port 8888.
3. In another terminal run the README's `curl.exe -i` commands. Explain 200 and 400, text versus JSON, and the generated UUID. Show that the response contains only id and email.
4. Send the malformed JSON fixture, then a valid GET to show recovery. Open the JUnit HTML report for the automated checks.
5. Walk through `Start.java`, `EchoApi.java`, `UserRequest.java` and `UserResponse.java` while tracing a request.
6. Start Part 2 independently from the repository root with `npm.cmd start` after its normal build. Compare a POST to `/api/todos` on port 3000 with POST `/echoUser` on 8888. Stop each server with Ctrl+C.

## Explain the actual implementation

Vert.x is an asynchronous toolkit for JVM applications. Its event loops dispatch I/O events and handlers. The handlers here perform small operations and end responses without waiting for external resources. Blocking operations such as `Thread.sleep`, blocking database calls or long computations must not run on an event-loop thread. Vert.x can use multiple event loops; this does not mean every handler runs simultaneously on one thread.

`de.thm.pi2.echo.Start.main()` calls `Vertx.vertx()` and `Router.router(vertx)`, creates `EchoApi`, and calls `appendRouting(router)`. `createHttpServer().requestHandler(router).listen(8888)` asynchronously binds the listener. Only `onSuccess` prints the successful startup message. Failure prints an error, closes Vert.x and exits unsuccessfully. A JVM shutdown hook closes Vert.x when the application stops.

`EchoApi.appendRouting()` registers `router.get("/echo")` and `router.post("/echoUser")`. The Router selects a handler using method and path. A `RoutingContext` represents the current request and its processing context: it provides the request, response, parsed body and failure state.

`handleEcho()` reads `rc.request().getParam("message")`. A missing value produces status 400 and the lecture's exact error string; a present value produces status 200 and `Echo: ` plus the message. `putHeader` sets plain-text UTF-8 content and `end()` completes the response.

On `/echoUser`, `BodyHandler.create()` runs before the custom handler. It asynchronously collects the body, limits it to 32 KiB and makes it available through `rc.body()`. `rc.body().asPojo(UserRequest.class)` uses Jackson to deserialize JSON into the Java record. Malformed or incomplete input receives 400. A valid request creates `new UserResponse(UUID.randomUUID().toString(), req.email())`. `Json.encode(res)` serializes this response record, which has no password component. Nothing stores the request or password. It is an echo exercise, not a login system.

The failure handler returns safe text for middleware failures, such as 413 for oversized bodies; unexpected errors return 500. Internal request bodies are not logged. The JUnit tests wait for asynchronous startup outside the event loop and use Java HttpClient against real HTTP listeners.

## Compare with this repository's Express code

| Concept | Part 2 Express | Part 3 Vert.x |
| --- | --- | --- |
| Runtime / language | Node.js / TypeScript compiled to JavaScript | JVM / compiled Java 25 |
| Entry point | `todo_api/src/server.ts` | `echo-service/src/main/java/de/thm/pi2/echo/Start.java` |
| Route | `app.post("/api/todos", ...)` in app.ts | `router.post("/echoUser")` in EchoApi.java |
| Request context | `req` and `res`, plus `next` for middleware | `RoutingContext rc` |
| Body collection | `express.json()` | `BodyHandler.create()` |
| JSON input | `req.body`, checked by `validate()` | `rc.body().asPojo(UserRequest.class)`, then field checks |
| JSON output | `res.status(201).json(todo)` | `rc.response().setStatusCode(200).end(Json.encode(res))` |
| State | authoritative RAM Map in TodoStore | no persistent state or user collection |
| Error flow | centralized Express error middleware | explicit decoding handling and Router failure handler |
| Build | npm / TypeScript compiler | Gradle Wrapper / Java compiler |

Trace the Express route: POST `/api/todos` → `express.json()` → `validate(req.body, "POST")` → `store.create()` → Location plus 201 JSON → client updates its display cache. Trace the Java route: POST `/echoUser` → BodyHandler → `asPojo` → field checks → response record → 200 JSON. The HTTP concepts (methods, paths, headers, bodies and status codes) are shared; the libraries and runtime APIs differ. The 201 versus 200 reflects creating a stored Todo versus returning an educational echo response.

## Ten likely tutor questions

1. **What is Vert.x?** An asynchronous toolkit for networked applications on the JVM; this service uses Vert.x Web for routing.
2. **What does the event loop do?** It dispatches events and runs handlers. Keep handlers short and avoid blocking work.
3. **How is a handler selected?** The Router matches the HTTP method and path registered in `appendRouting`.
4. **What is RoutingContext?** The per-request context exposing request, response, collected body and routing/failure state.
5. **Why is BodyHandler registered first?** The body must be collected before `rc.body().asPojo(...)` can deserialize it.
6. **What is a record?** A Java data carrier whose components define accessors and generated equality/hash/string behavior. Here Jackson maps JSON to its canonical constructor.
7. **Why is the password absent?** `UserResponse` has only id and email, and only that object is serialized. `UserRequest` is never serialized or logged.
8. **What happens after malformed JSON?** Decoding fails, the handler returns 400 without internal details, and subsequent valid requests still work.
9. **How do Express and Vert.x produce the same kind of response?** Both set status, headers and a body; HTTP is independent of language and framework.
10. **Why are these two independent applications?** They have separate entry points, dependency/build tools and ports. Echo does not change the TodoStore, and starting Express does not start Vert.x.

## Reference checks

The assignment and lecture PDFs were read locally: HÜ1 page 10 and Vert.x lecture pages 6–13, 21–22. [Vert.x Web documentation](https://vertx.io/docs/vertx-web/java/) describes Router, RoutingContext and BodyHandler. [Gradle's compatibility matrix](https://docs.gradle.org/current/userguide/compatibility.html) lists Java 25 support from Gradle 9.1.0.
