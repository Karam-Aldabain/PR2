> Historical/preparation record: local integration and fresh-clone verification have since completed. See [current audit](final-local-audit.md). Team/conflict and remote requirements remain open.

# Part 3 compliance and verification

> Historical implementation report. The subsequent [combined audit](part2-part3-audit.md) adds test coverage, records a Part 2 error-handling fix and gives the current submission-readiness verdict.

## Specification and scope

Read locally: HÜ1.pdf page 10, sections 3.1–3.3, and 05-Praxisblock - Vertx.pdf pages 6–13 and 21–22. No existing Java/Vert.x project was present in the repository, so `echo-service/` was added directly inside its root. No nested repository was created. Part 2 runtime/source files were not edited; SHA-256 snapshots before and after implementation matched.

## Requirement mapping

| Requirement | Implementation / evidence |
| --- | --- |
| 3.1 independent Vert.x application | `echo-service/build.gradle`: application plugin, group de.thm.pi2, Java 25, Vert.x Web 5.2.3, Jackson 2.21.8; settings.gradle names echo-server |
| Lecture main-method startup | `Start.java`: Vertx instance, Router, EchoApi.appendRouting, HTTP listener on 8888, exact success message, startup-failure handling and shutdown hook |
| Modular Echo handler | `echo/api/EchoApi.java`: appendRouting and handleEcho; GET /echo, query message, 200 Echo text or exact missing-parameter 400 |
| User records and JSON route | `echo/dto/UserRequest.java` and UserResponse.java; BodyHandler before POST handler, asPojo(UserRequest.class), UUID response, Json.encode(res), 200 application/json |
| Password excluded and not stored | Only UserResponse is serialized; no user collection or persistence; password absence asserted by JUnit |
| Invalid JSON handled safely | Decoding error returns 400; incomplete input returns 400; oversized body returns 413; subsequent requests succeed |
| Real HTTP verification | JUnit uses Java HttpClient against a real ephemeral-port listener; curl checks also ran against Start on port 8888 |
| 3.2 same repository and wrapper | Source, Gradle configuration, generated official gradlew/gradlew.bat, wrapper JAR and SHA-256-pinned properties included in echo-service |
| Generated files excluded | Root .gitignore excludes echo-service/build, echo-service/.gradle and local .tools; wrapper files remain visible to Git |
| README startup instructions | Part 3 section appended to existing README; previous documentation retained |
| 3.3 HTTP walkthrough and Express comparison | docs/part3-demo-guide.md traces POST /api/todos and POST /echoUser through actual source, explains runtime/routing/JSON/status concepts and provides ten tutor questions |
| Team submission on HUE1 | Pending team review/integration; no commit, push, merge, remote change or branch switch performed in this task |

## Actual verification results

Environment: Windows, portable Eclipse Temurin **25.0.5+8**, Gradle **9.1.0**, Vert.x **5.2.3**, Jackson Databind **2.21.8**. The JDK archive and Gradle distribution were checked against their published SHA-256 values. JDK/Gradle were downloaded into ignored `.tools/`; no system installation or persistent PATH change was made.

- Official Gradle `wrapper --gradle-version 9.1.0 --distribution-type bin --gradle-distribution-sha256-sum ...`: **BUILD SUCCESSFUL**.
- `gradlew.bat clean build --no-daemon --console=plain`: **BUILD SUCCESSFUL**, including Java compilation, distributions and all four JUnit tests (no failures or skips).
- JUnit cases: Echo text/content type and decoded query; exact missing-message response; user JSON/UUID/unique ID/email/password omission; malformed/empty/incomplete JSON, content type, oversized body and recovery.
- `gradlew.bat run --no-daemon --console=plain`: printed **HTTP server started on port 8888**.
- Curl GET `/echo?message=PI2`: **200**, text/plain UTF-8, `Echo: PI2`.
- Curl GET `/echo`: **400**, `Missing 'message' parameter`.
- Curl POST `/echoUser` using tests/user.json: **200**, application/json, UUID and bob@gibts.net, no password.
- Curl POST malformed fixture: **400**, safe error text without stack trace.
- Curl GET after malformed request: **200**, `Echo: still-alive`.
- First curl attempts were made before Gradle finished startup and received connection refused; all were repeated successfully after the startup message. No API code change was required.
- No nested `.git` directory found inside echo-service. Wrapper files are visible as untracked submission files, while caches/build output are ignored. Changes remain ready for review, not committed.
- `git diff --check`: no whitespace errors (Git emits its existing Windows line-ending notices).
- Part 2 regression checks: `npm.cmd test` passed all four API groups; `npm.cmd run test:browser` passed both Chrome tests in 18.1s. The first browser run was denied permission to bind port 3000 in the sandbox; rerunning with approved permissions passed without source changes.
- The verification listener on port 8888 was stopped after the curl checks; no service was left running.

## Remaining manual work

The team must review, commit and integrate the source and Wrapper into HUE1 and publish that branch for submission. Real group contributions, access permissions and a live tutor presentation remain the team's responsibility. Tests did not use WebStorm or a human-driven browser; curl and Java integration tests verified the HTTP behavior. The service intentionally has no root UI, authentication, account management, database or password storage.

Portable `.tools/` is local-only. A fresh clone needs a JDK 25 installation and network access for the first Wrapper build; commands are in README. Gradle's official [compatibility matrix](https://docs.gradle.org/current/userguide/compatibility.html) supports Java 25 from Gradle 9.1.0. The [Vert.x Web documentation](https://vertx.io/docs/vertx-web/java/) covers the routing/body APIs used here.
