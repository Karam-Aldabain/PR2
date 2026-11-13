# Final local completion and compliance audit

Date: 13 November 2026 (America/Los_Angeles). Verdict: **NOT LOCALLY COMPLETE — ISSUES REMAIN**.

Both applications work in the current working tree. The complete solution is absent from the committed HUE1 branch and a real local clone fails to start it. Mandatory team contribution and conflict history are missing. These local requirements are included in this audit, correcting the earlier report’s exclusion of Git requirements. Previous report retained as [historical audit](final-local-audit-2026-11-12.md); historical claims are not new execution evidence.

Sources read: all 10 pages of C:/Users/Magic Systems/Downloads/HÜ1.pdf and all 23 pages of 05-Praxisblock - Vertx.pdf, freshly extracted using local pdfjs. Requirements follow 1.1–1.3, 2.1–2.6 and 3.1–3.3 plus the lecture exercises (6–13,21–22). Dice and static Vert.x examples are explanatory, not additional mandatory endpoints. GitLab SSH lecture and optional Fruit sheet are unavailable; their exact extra instructions are not certified. No external web facts were needed.

Repository: C:/Users/Magic Systems/Desktop/PI2/todoapp-client (workspace parent is not Git root). Current branch feature/hue1-part2. main, HUE1, feature branch and existing origin/main all point to c6acd6e640ee80388ec231bc04b1f4bfaf8fd26c. Five starter commits by Dennis Priefer/Samuel Schepp provide no current-team contribution proof. No history, refs, remote settings, staging, commits, pushes or merges changed. The deliberate separate clone under ignored .tools is a verification fixture, not a nested submitted application repository.

Counts are reviewer checkpoints, not university grading weights. Each row has exactly one status: PASS 72; FAIL 3; MISSING 3; NOT TESTED 4; REMOTE CHECK 7; OPTIONAL 2. All mandatory gaps remain visible; optional rows are excluded from mandatory totals.

| Requirement | Status | Evidence | Test Result | Remaining Action |
| --- | --- | --- | --- | --- |
| 1.1 Existing group repository and origin URL | PASS | git rev-parse; git remote -v | Root todoapp-client; origin https://git.thm.de/pi2-ws2627-fr3f/todoapp-client.git | None |
| 1.1 THM group name and common fork provenance | REMOTE CHECK | Local origin/ref names cannot prove server/account state | Not remotely verified | Verify in THM GitLab / Moodle; use each member’s account |
| 1.1 Private project visibility | REMOTE CHECK | Local origin/ref names cannot prove server/account state | Not remotely verified | Verify in THM GitLab / Moodle; use each member’s account |
| 1.1 All members can push branches | REMOTE CHECK | Local origin/ref names cannot prove server/account state | Not remotely verified | Verify in THM GitLab / Moodle; use each member’s account |
| 1.1 Tutor repository / optional MR access | REMOTE CHECK | Local origin/ref names cannot prove server/account state | Not remotely verified | Verify in THM GitLab / Moodle; use each member’s account |
| 1.1 Each member cloned and configured SSH; authentication tested | REMOTE CHECK | Local origin/ref names cannot prove server/account state | Not remotely verified | Verify in THM GitLab / Moodle; use each member’s account |
| 1.1 HUE1 published and fetched by all members | REMOTE CHECK | Local origin/ref names cannot prove server/account state | Not remotely verified | Verify in THM GitLab / Moodle; use each member’s account |
| Submission HUE1 branch URL and deadline in Moodle | REMOTE CHECK | Local origin/ref names cannot prove server/account state | Not remotely verified | Verify in THM GitLab / Moodle; use each member’s account |
| 1.1 Starter behavior and sample-data documentation | PASS | docs/part1-project-start.md; git show main:todo_app/src/todoApp.ts | Starter has browser RAM and three examples; current browser tested | None |
| 1.1 Local HUE1 based on main | PASS | git show-ref | HUE1 and main both c6acd6e640ee80388ec231bc04b1f4bfaf8fd26c | None |
| 1.1 Ignore generated output, secrets and personal IDE files | PASS |  .gitignore; git ls-files | node_modules, .tools, .env, .idea, .vscode, compiled JS, Gradle output ignored; lockfile and Wrapper retained | None |
| 1.2 Each member’s feature branch, own contribution and meaningful commits | MISSING | git branch -a; git log --all --graph | Only five starter commits; feature/hue1-part2 has no new commit | Members must perform and preserve their real contributions |
| 1.2 README actual team names | PASS | README.md Team | User supplied Karam Samer Aldabain and Alayaideh, Mazen Mohammad Yousef; both added | None |
| 1.2 README clone URL, purpose, prerequisites and startup | PASS | README.md; package.json | Working-tree commands build and run; publication caveat explicit | None |
| 1.2 Reviewed contributions integrated without squash | MISSING | git log --all --graph; git show-ref | No team commits or merges | Team review, commit and integrate; no Git mutation authorized here |
| 1.2 Project profile exists | PASS | docs/projektprofil.md | Project goal and both applications described | None |
| 1.2 Real same-base conflicting edits and agreed resolution in history | MISSING | git log --all --graph; docs/part1-team-workflow.md | No merge commit; workflow guide is not evidence of execution | Team performs real conflict exercise; record actual commits and rationale |
| 1.3 Intended changes present in HUE1 (also 2 and 3.2) | FAIL | git show-ref; git ls-tree -r HUE1; git status --short | HUE1 is starter; most required source/docs/tests/Wrapper untracked | Review and commit files, then integrate HUE1 outside this audit |
| 1.3 No unresolved conflict entries or markers | PASS | git ls-files -u; anchored rg scan | No index conflicts; no conflict markers in application, Java sources, docs or README | None |
| 1.3 Fresh HUE1 clone starts complete solution from README | FAIL | .tools/audit-2026-11-13-clone | Clone/install/starter build pass; npm start fails: Missing script start; backend, docs and echo-service absent | Commit/integrate implementation, then repeat clean clone |
| 1.3 All required deliverables included in versioned submission | FAIL | git ls-files (8 tracked files); git status --short | Required files exist in working tree but are absent from commit | Review all untracked files; stage/commit only with separate authorization |
| 2.1 Server authoritative RAM collection; no database | PASS | todo_api/src/store.ts TodoStore | Executed Node/Chrome/runtime checks pass; see command results below | None |
| 2.1 Server-generated unique IDs, timestamps and initial offen | PASS | todo_api/src/store.ts TodoStore create | Executed Node/Chrome/runtime checks pass; see command results below | None |
| 2.1 Model fields, priority/status values and optional due date | PASS | todo_api/src/model.ts; todo_api/src/validation.ts validate | Executed Node/Chrome/runtime checks pass; see command results below | None |
| 2.1 Immutable IDs and creation times | PASS | todo_api/src/store.ts TodoStore update; todo_api/src/validation.ts validate | Executed Node/Chrome/runtime checks pass; see command results below | None |
| 2.1 Browser refresh preserves data; restart can clear RAM | PASS | todo_api/src/store.ts TodoStore; tests/browser/todo.spec.ts | Executed Node/Chrome/runtime checks pass; see command results below | None |
| 2.1 Separate client, HTTP and storage responsibilities | PASS | todo_app/src/api.ts request/api; todo_api/src/app.ts createApp; todo_api/src/store.ts TodoStore | Executed Node/Chrome/runtime checks pass; see command results below | None |
| 2.2 GET collection 200 JSON including [] | PASS | todo_api/src/app.ts createApp; todo_api/src/store.ts TodoStore all | Executed Node/Chrome/runtime checks pass; see command results below | None |
| 2.2 GET individual 200 JSON without mutation | PASS | todo_api/src/app.ts createApp; todo_api/src/store.ts TodoStore get | Executed Node/Chrome/runtime checks pass; see command results below | None |
| 2.2 POST 201 JSON and Location; server fields | PASS | todo_api/src/app.ts createApp post; todo_api/src/store.ts TodoStore create | Executed Node/Chrome/runtime checks pass; see command results below | None |
| 2.2 PUT 200 replaces all editable fields; omitted date removed | PASS | todo_api/src/app.ts createApp put; todo_api/src/store.ts TodoStore update | Executed Node/Chrome/runtime checks pass; see command results below | None |
| 2.2 PUT missing resource 404; no upsert | PASS | todo_api/src/app.ts createApp store.get before validate | Executed Node/Chrome/runtime checks pass; see command results below | None |
| 2.2 PATCH supplied fields only; null removes date | PASS | todo_api/src/validation.ts validate; todo_api/src/store.ts TodoStore update | Executed Node/Chrome/runtime checks pass; see command results below | None |
| 2.2 DELETE 204 empty body; repeat leaves deleted resource | PASS | todo_api/src/app.ts createApp delete | Executed Node/Chrome/runtime checks pass; see command results below | None |
| 2.2 Safe GET and identical PUT domain idempotence | PASS | tests/api.test.mjs lifecycle | Executed Node/Chrome/runtime checks pass; see command results below | None |
| 2.2 Appropriate JSON Content-Type | PASS | todo_api/src/app.ts createApp express.json/res.json; todo_app/src/api.ts request/api | Executed Node/Chrome/runtime checks pass; see command results below | None |
| 2.2 Trimmed nonempty string title and description | PASS | todo_api/src/validation.ts validate | Executed Node/Chrome/runtime checks pass; see command results below | None |
| 2.2 Types, enums and valid calendar dates | PASS | todo_api/src/validation.ts validate | Executed Node/Chrome/runtime checks pass; see command results below | None |
| 2.2 PUT mandatory fields; PATCH nonempty allowed properties | PASS | todo_api/src/validation.ts validate | Executed Node/Chrome/runtime checks pass; see command results below | None |
| 2.2 Reject immutable and unknown properties | PASS | todo_api/src/validation.ts validate | Executed Node/Chrome/runtime checks pass; see command results below | None |
| 2.2 Malformed JSON 400; missing resources/paths 404 | PASS | todo_api/src/app.ts createApp errors/API fallback | Executed Node/Chrome/runtime checks pass; see command results below | None |
| 2.2 Unexpected errors safe JSON 500 and internal logging | PASS | todo_api/src/app.ts createApp errors; tests/api.test.mjs FailingStore | Executed Node/Chrome/runtime checks pass; see command results below | None |
| 2.2 Failed mutations atomic; server operational after errors | PASS | todo_api/src/validation.ts validate before store mutation | Executed Node/Chrome/runtime checks pass; see command results below | None |
| 2.3 Express serves /, compiled JS and local CSS; API still works | PASS | todo_api/src/app.ts createApp static routes | Executed Node/Chrome/runtime checks pass; see command results below | None |
| 2.3 Production requires only Express; relative API URLs | PASS | todo_app/src/api.ts request/api; package.json start | Executed Node/Chrome/runtime checks pass; see command results below | None |
| 2.4 Existing UI and interaction preserved | PASS | todo_app/public/todo.html; todo_app/src/todoApp.ts TodoManager | Executed Node/Chrome/runtime checks pass; see command results below | None |
| 2.4 fetch module loads/creates/reads/updates/deletes server data | PASS | todo_app/src/api.ts request/api; todo_app/src/todoApp.ts TodoManager | Executed Node/Chrome/runtime checks pass; see command results below | None |
| 2.4 PUT full edit and PATCH status change | PASS | todo_app/src/api.ts request/api replace/patch; todo_app/src/todoApp.ts TodoManager | Executed Node/Chrome/runtime checks pass; see command results below | None |
| 2.4 HTTP response.ok and network errors in existing error area | PASS | todo_app/src/api.ts request/api request; todoApp.ts showError | Executed Node/Chrome/runtime checks pass; see command results below | None |
| 2.4 DELETE 204 is not parsed as JSON | PASS | todo_app/src/api.ts request/api request | Executed Node/Chrome/runtime checks pass; see command results below | None |
| 2.4 Display updates after successful server response; no independent browser persistence | PASS | todo_app/src/todoApp.ts TodoManager | Executed Node/Chrome/runtime checks pass; see command results below | None |
| 2.6 Initial load, empty state and static assets | PASS | tests/browser/todo.spec.ts; tests/api.test.mjs | Executed Node/Chrome/runtime checks pass; see command results below | None |
| 2.6 Browser create/edit/status/delete and refresh | PASS | tests/browser/todo.spec.ts UI lifecycle | Executed Node/Chrome/runtime checks pass; see command results below | None |
| 2.6 Second window sees changes after refresh | PASS | tests/browser/todo.spec.ts UI lifecycle | Executed Node/Chrome/runtime checks pass; see command results below | None |
| 2.6 Stopped-server request displays understandable error | PASS | tests/browser/todo.spec.ts stopped server | Executed Node/Chrome/runtime checks pass; see command results below | None |
| 2.6 Automated methods/URLs/payload/status/body network inspection | PASS | tests/browser/todo.spec.ts Network; docs/evidence/part2-network.json | Executed Node/Chrome/runtime checks pass; see command results below | None |
| 2.6 README setup and complete action/code walkthrough | PASS | README.md; docs/part2-demo-guide.md | Executed Node/Chrome/runtime checks pass; see command results below | None |
| 2.5 Required HTTP scenario 1: Collection 200 | PASS | tests/todo-api.http; tests/http-file.test.mjs | Actual request handlers pass in Node compatibility runner | None |
| 2.5 Required HTTP scenario 2: Create 201, ID and Location | PASS | tests/todo-api.http; tests/http-file.test.mjs | Actual request handlers pass in Node compatibility runner | None |
| 2.5 Required HTTP scenario 3: Read created ID 200 | PASS | tests/todo-api.http; tests/http-file.test.mjs | Actual request handlers pass in Node compatibility runner | None |
| 2.5 Required HTTP scenario 4: PUT then GET | PASS | tests/todo-api.http; tests/http-file.test.mjs | Actual request handlers pass in Node compatibility runner | None |
| 2.5 Required HTTP scenario 5: Status-only PATCH then unchanged-fields GET | PASS | tests/todo-api.http; tests/http-file.test.mjs | Actual request handlers pass in Node compatibility runner | None |
| 2.5 Required HTTP scenario 6: PATCH dueDate null | PASS | tests/todo-api.http; tests/http-file.test.mjs | Actual request handlers pass in Node compatibility runner | None |
| 2.5 Required HTTP scenario 7: DELETE 204 then GET 404 | PASS | tests/todo-api.http; tests/http-file.test.mjs | Actual request handlers pass in Node compatibility runner | None |
| 2.5 Required HTTP scenario 8: Missing GET/PUT/PATCH/DELETE 404 | PASS | tests/todo-api.http; tests/http-file.test.mjs | Actual request handlers pass in Node compatibility runner | None |
| 2.5 Required HTTP scenario 9: Missing/invalid POST 400 | PASS | tests/todo-api.http; tests/http-file.test.mjs | Actual request handlers pass in Node compatibility runner | None |
| 2.5 Required HTTP scenario 10: Invalid PUT/PATCH atomicity | PASS | tests/todo-api.http; tests/http-file.test.mjs | Actual request handlers pass in Node compatibility runner | None |
| 2.5 Required HTTP scenario 11: Malformed JSON 400 | PASS | tests/todo-api.http; tests/http-file.test.mjs | Actual request handlers pass in Node compatibility runner | None |
| 2.5 Required HTTP scenario 12: Unknown API path 404 JSON | PASS | tests/todo-api.http; tests/http-file.test.mjs | Actual request handlers pass in Node compatibility runner | None |
| 2.5 Reused generated ID, expected statuses, recovery and repeatability | PASS | tests/todo-api.http client.global; tests/helpers/http-file.mjs | 27 requests pass; healthy request after invalid inputs | None |
| 2.5 Execute HTTP file in WebStorm itself | NOT TESTED | tests/todo-api.http; WebStorm/ijhttp not found on PATH | Node compatibility execution does not establish WebStorm execution | Run All Requests in WebStorm and inspect assertions |
| 2.6 Manual browser DevTools Network panel inspection | NOT TESTED | docs/part2-demo-guide.md; automated CDP evidence available | No human panel interaction performed | Open Network; inspect create/edit/status/delete and error Headers/Payload/Response |
| 3.1 Gradle/JDK/Web/Jackson/entry-point configuration | PASS | echo-service/build.gradle; settings.gradle; gradle/wrapper/gradle-wrapper.properties | Clean build, five JUnit tests and production HTTP checks pass; comparison source-reviewed | None |
| 3.1 Java main, Vertx, Router, EchoApi registration, port 8888 and startup message | PASS | echo-service/src/main/java/de/thm/pi2/echo/Start.java main | Clean build, five JUnit tests and production HTTP checks pass; comparison source-reviewed | None |
| 3.1 Modular appendRouting and handleEcho | PASS | echo-service/src/main/java/de/thm/pi2/echo/api/EchoApi.java | Clean build, five JUnit tests and production HTTP checks pass; comparison source-reviewed | None |
| 3.1 GET /echo?message=PI2 returns 200 Echo: PI2 | PASS | EchoApi.handleEcho; EchoApiTest.echoesQueryAsPlainText | Clean build, five JUnit tests and production HTTP checks pass; comparison source-reviewed | None |
| 3.1 GET /echo returns 400 Missing message parameter exact lecture text | PASS | EchoApi.handleEcho; EchoApiTest.rejectsMissingMessageExactlyAsInLecture | Clean build, five JUnit tests and production HTTP checks pass; comparison source-reviewed | None |
| 3.1 UserRequest and UserResponse records in echo/dto | PASS | echo-service/src/main/java/de/thm/pi2/echo/dto/*.java | Clean build, five JUnit tests and production HTTP checks pass; comparison source-reviewed | None |
| 3.1 POST /echoUser BodyHandler before deserialization | PASS | EchoApi.appendRouting/handleEchoUser | Clean build, five JUnit tests and production HTTP checks pass; comparison source-reviewed | None |
| 3.1 asPojo, UUID and Json.encode; application/json; no returned password | PASS | EchoApi.handleEchoUser; EchoApiTest.userResponseHasUuidAndEmailWithoutPassword | Clean build, five JUnit tests and production HTTP checks pass; comparison source-reviewed | None |
| 3.1 Malformed JSON safe rejection and subsequent request succeeds | PASS | EchoApiTest.malformedOrIncompleteRequestsAreSafeAndServerKeepsRunning | Clean build, five JUnit tests and production HTTP checks pass; comparison source-reviewed | None |
| 3.1 Independent server and Windows run commands | PASS | README.md; runtime coexistence/restart/shutdown probes | Clean build, five JUnit tests and production HTTP checks pass; comparison source-reviewed | None |
| 3.2 Single repository and own echo-service subdirectory | PASS | echo-service/; no echo-service/.git; git ls-files | Clean build, five JUnit tests and production HTTP checks pass; comparison source-reviewed | None |
| 3.2 Source, Gradle configuration and complete Wrapper present locally | PASS | echo-service/src; build.gradle; settings.gradle; gradlew; gradlew.bat; gradle/wrapper | Clean build, five JUnit tests and production HTTP checks pass; comparison source-reviewed | None |
| 3.2 Build/IDE output excluded and Java startup documented | PASS | .gitignore; README.md | Clean build, five JUnit tests and production HTTP checks pass; comparison source-reviewed | None |
| 3.3 Actual-route request/response comparison, methods and statuses | PASS | docs/part3-demo-guide.md comparison and traces | Clean build, five JUnit tests and production HTTP checks pass; comparison source-reviewed | None |
| 3.3 TypeScript/Java, Node/JVM and event-driven differences | PASS | docs/part3-demo-guide.md | Clean build, five JUnit tests and production HTTP checks pass; comparison source-reviewed | None |
| 3.1 Historical use of official starter and IDE import | NOT TESTED | Final Gradle project exists; no provenance artifact verifies generation steps | Final configuration verified; historical generation/import not provable | If requested, demonstrate Gradle import and explain starter workflow |
| 1.3 / 2.6 / 3.3 Each member can explain full solution orally | NOT TESTED | docs/part1-team-workflow.md; part2-demo-guide.md; part3-demo-guide.md | Preparation supplied; individual understanding cannot be certified by automated tests | Each member rehearses contribution/conflict and both request traces |
| 1.4 Fruit API repetition | OPTIONAL | Assignment p4 | Explicitly excluded from mandatory grading | None |
| 2.7 Hypermedia/HATEOAS | OPTIONAL | Assignment p9 | Explicitly excluded from mandatory grading | None |

## Commands and actual results

Commands below ran in the repository root unless noted. Tests use isolated RAM stores; no database or external service was modified.

| Command / check | Actual result on this audit |
| --- | --- |
| `npm.cmd ci --offline` | 82 packages installed; npm reported 0 vulnerabilities using available local data; this is not a fresh online security advisory check |
| `npm.cmd run typecheck` | Client and server strict TypeScript checks exit 0 |
| `npm.cmd test` | Both production compilations pass; 7 Node test groups pass, 0 failures; includes all 27 actual To-do HTTP-file requests |
| `npm.cmd run test:browser` | 3 Chrome scenarios pass in 19.6s; CRUD, refresh, second window, HTTP rejection, stopped server, real CDP traffic |
| `echo-service: .\gradlew.bat clean build installDist --offline --no-daemon --console=plain` | Initial sandbox run denied cache access; same command with approved sandbox escalation passes in 16s; all 9 tasks execute and all 5 JUnit tests pass |
| `node .tools/current-runtime.mjs` | Freshly built Java installDist and compiled Express entry points run together on 8888/3000; all 32 HTTP-file requests pass; restart clears Express RAM, other server stays alive; independent shutdown and occupied-port failure pass |
| `node tests/run-http-files.mjs` (called by runtime harness) | 27 To-do + 5 Echo requests pass; stdout saved in docs/evidence/http-file-results.txt |
| `node .tools/final-local-audit/check-structure.mjs` | 25 required technical files and 14 DOM selectors verified; local Markdown links resolve |
| `git diff --check`, `git ls-files -u`, conflict-marker source scan | No whitespace errors, unmerged entries or unresolved markers; normal Windows LF/CRLF notices only |
| Lint | No configured lint command; not executed, not a mandatory assignment gap |

Java environment used, from echo-service:

```powershell
$env:JAVA_HOME = (Get-ChildItem ..\.tools\jdk -Directory | Select-Object -First 1).FullName
$env:Path = "$env:JAVA_HOME\bin;$env:Path"
$env:GRADLE_USER_HOME = Join-Path (Resolve-Path ..\.tools) 'gradle-home'
.\gradlew.bat clean build installDist --offline --no-daemon --console=plain
```

The portable JDK and Gradle caches are ignored verification tools, not submitted dependencies. README requires a separately installed JDK 25; Wrapper pins Gradle 9.1.0 and distribution SHA-256. Successful execution establishes compatibility for the tested environment. Offline installation/build establishes cached dependency availability, not first-time network download behavior on every machine.

The runtime harness was adapted from the existing verification harness to use **echo-service/build/install/echo-server/lib/** from this clean build, avoiding credit for an older packaged JAR. Runtime processes were stopped in its finally block. Safe 500 coverage uses an isolated injected failing store; no production failure endpoint or destructive fault was introduced.

[HTTP stdout](evidence/http-file-results.txt) and [Chrome Network capture](evidence/part2-network.json) were refreshed from this run. The latter contains real methods, URLs, JSON payloads, headers and responses. CDP verification does not establish manual browser-panel use. Node HTTP-file compatibility execution does not establish WebStorm execution.

## Fresh-clone verification and exact missing publication state

Executed without altering the original repository:

```powershell
git clone --no-hardlinks --branch HUE1 . .tools/audit-2026-11-13-clone
cd .tools/audit-2026-11-13-clone
npm.cmd ci --offline
npm.cmd run build
npm.cmd start
```

Clone succeeds, 3 starter packages install and the starter frontend builds. **npm start fails with Missing script: start.** `Test-Path echo-service`, `Test-Path todo_api/src`, and `Test-Path docs/projektprofil.md` each return False. A Java build/server test in that clone cannot execute because the project is absent. This is a confirmed local deliverable failure, not merely a remote verification uncertainty. Copying working-tree files into that clone would conceal the problem and is not credited as a fresh-clone success.

Only eight paths are tracked in the original commit: .gitignore, README.md, package-lock.json, package.json, todo_api/README.md, todo_app/public/todo.html, todo_app/src/todoApp.ts and todo_app/tsconfig.json. Their working-tree modifications are also uncommitted. Untracked required content includes docs/, echo-service/ (including Wrapper), tests/, playwright.config.ts, todo_api/src/, todo_api/tsconfig.json and todo_app/src/api.ts. These must be reviewed and versioned before cloning can reproduce the solution. No ignored tool/cache is needed by application source; node_modules and compiled output are regenerated by the documented builds.

## Fixes and preservation

- Added the actual group names supplied during this audit to README Team: Karam Samer Aldabain and Alayaideh, Mazen Mohammad Yousef. Names were not inferred from starter authors.
- Corrected README's audit-scope description: mandatory local Git and clone requirements are included.
- Replaced the active audit with the requested evidence/status matrix and explicit submission failures; preserved the previous report as docs/final-local-audit-2026-11-12.md.
- Refreshed both saved evidence files; verification scripts/logs and the safe clone remain under ignored .tools.
- No new application defect was reproduced, so no production code or test behavior was changed. Existing user modifications were preserved. Build cache access was an environment restriction, resolved by approved execution; dependencies/tests were not weakened.

## Remaining actions

1. Each real group member completes identifiable commits and the real same-base merge-conflict/resolution exercise. Use docs/part1-team-workflow.md; preserve contributions without squash/force-push.
2. Review every modified and untracked deliverable, commit the reviewed solution and integrate it into HUE1. These actions were explicitly prohibited for this audit and were not performed.
3. Repeat the actual HUE1 clean-clone build/start and both servers' HTTP checks after integration. Publish HUE1 only through the authorized team workflow.
4. Run tests/todo-api.http in WebStorm with Run All Requests. Open browser DevTools Network, perform CRUD, and inspect Headers/Payload/Response and invalid-input behavior. Automated equivalents already pass.
5. Verify group/fork naming, privacy, every member's branch-push permission, tutor access, SSH authentication and published branch remotely. Confirm Moodle deadline and submit the actual HUE1 URL. If using optional Merge Requests, ensure that feature and tutor access are enabled.
6. Every member rehearses the Git contribution/conflict explanation and one Express/Vert.x request trace. Historical starter/IDE setup cannot be inferred solely from final source.

## Explicit final answers

1. **Part 1 locally complete? No.** Team names are now present, but contributions, conflict history, integration and clone reproducibility fail or are missing.
2. **Part 2 locally complete? Functional working-tree implementation passes.** Full mandatory verification/integration remains incomplete: WebStorm, manual Network inspection, HUE1 and clone.
3. **Part 3 locally complete? Functional working-tree implementation passes.** Mandatory HUE1 inclusion is incomplete; historical starter/import and individual oral understanding are not certified.
4. **Both servers build? Yes in the working tree.** TypeScript production build and clean Gradle build pass.
5. **Required API endpoints work? Yes.** Six To-do endpoints, GET /echo and POST /echoUser pass success/error checks.
6. **Required files present? Yes on disk; no in committed HUE1.** Team names now included.
7. **Mandatory HTTP tests implemented? Yes.** All twelve scenarios covered; 27 executable To-do requests pass under Node compatibility execution.
8. **Frontend works? Yes in automated Chrome verification.** All three scenarios pass; manual developer-tool use remains unexecuted.
9. **Fresh clone starts full project? No.** Confirmed missing npm start/backend/Java project in actual HUE1 clone.
10. **Unresolved bugs? No reproduced functional application bug.** Confirmed delivery/history gaps remain; finite tests cannot prove absence of all bugs.
11. **Missing assignment requirements? Yes.** Real contribution/conflict history, HUE1 integration and reproducible complete clone; additional manual/remote checks remain.
12. **Local implementation 100% complete? No under the requested full compliance scope.** Passing runtime tests do not complete the mandatory Git work.
13. **Remote GitLab/Moodle steps?** Verify the seven REMOTE CHECK rows, publish reviewed HUE1 after team integration, and submit its URL by the verified deadline.
14. **Ready for tutor demonstration? Runtime demos are ready; the complete assignment is not ready.** Git history, fresh-clone proof and the remaining tool/member checks must be completed.

**NOT LOCALLY COMPLETE — ISSUES REMAIN**

## Git integration preparation update — 13 November 2026

Current readiness: **NOT READY — ISSUES REMAIN**. The newer request authorizes local feature commits and HUE1 merges after backup; it prohibits every main mutation and all pushes. Earlier statements that Git integration was unauthorized refer to the earlier audit only. No integration commit is yet created: Git user.name/user.email are unset, and the operator’s exact author identity has been requested but not confirmed. The supplied prompt also requires each student’s personal review/approval; that has not been replaced by automated attribution.

Backup outside repository: C:\Users\Magic Systems\Desktop\PI2\HUE1-backup-2026-11-13T10-59-03-464Z. All 110 copied files verified by SHA-256; manifest includes source, configuration, tests, documentation, Wrapper and Git metadata. Exclusions are regenerable dependencies/build caches/JDK downloads/temporary clones only. See [concrete integration handoff](hue1-integration-handoff.md) for exclusions, proposed reviews, safe branch/commit/conflict steps and exact publication commands.

Created feature/hue1-express, feature/hue1-vertx and feature/hue1-documentation from existing HUE1. No commits, staging, branch switches, merges or pushes performed. No real team/conflict contribution evidence exists yet; branch pointers are not evidence of participation. Both students’ identities/authentication must remain distinct.

Repeated full available quality checks in the existing working tree: npm test passes 7/7 groups; typecheck passes; browser tests pass 3/3 in 23.3s; clean Gradle build passes with 5/5 JUnit tests in 20s (approved execution required to access the existing cache). No implementation change was required. The complete committed-HUE1 clone verification remains blocked by absent integration commits; the earlier actual starter-only clone failure remains valid because HUE1 is unchanged.

Original and final main hash: **c6acd6e640ee80388ec231bc04b1f4bfaf8fd26c**. Final HUE1 still equals that starter commit. Required final branch/log/status/diff checks were executed; main..HUE1 stat is empty, accurately showing no integration yet. No remote access, privacy/authentication verification, push or Moodle submission was attempted. Target branch URL prepared from origin: https://git.thm.de/pi2-ws2627-fr3f/todoapp-client/-/tree/HUE1 (remote existence not verified).

Files changed in this preparation: docs/hue1-integration-handoff.md (new) and docs/final-local-audit.md (this update). Ignored verification scripts/state under .tools were added; original implementation files retained. All prior PASS/FAIL/MISSING/NOT TESTED/REMOTE CHECK/OPTIONAL counts remain unchanged because no missing Git evidence has been manufactured.
