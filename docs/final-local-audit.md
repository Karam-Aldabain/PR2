# Current status update — 14 November 2026

**Fresh local clone checked after teamwork integration:** cloned HUE1 at `ac5a4af` without hardlinks to `C:/Users/Magic Systems/Desktop/PI2/HUE1-teamwork-final-verification-2026-11-14`. Assistant executed `npm.cmd ci --offline`, `npm.cmd run typecheck`, and `npm.cmd test`: installation, TypeScript checks/build and all 9 Node test groups passed. This includes real API/static HTTP and 27 HTTP-file requests through the compatibility runner. No new manual browser, Chrome automation or Java execution is claimed. This later evidence-only documentation update does not change application files.

**Latest teamwork outcome:** Both student-supplied profile edits and the agreed resolution are now integrated locally into HUE1. Karam edit `af1480a`, Mazen edit `ca73b64`, two-parent resolution under Karam `49972ae`, final integration `e6ffa17`. [Evidence](part1-live-conflict-evidence.md) records participant-reported authorship/agreement separately from assistant-observed conflict and history checks. This supersedes the pending local conflict conclusions below and in the historical audit. It does not certify independently observed composition/discussion, oral understanding, GitLab account access, publication or submission. main remains unchanged; no push or Moodle submission occurred.

This update supersedes the manual-verification and remaining-action conclusions of the historical independent audit below. Its original execution results and checkpoint counts describe that earlier audit, not a new full audit. Current teamwork procedure and remaining checklist: [local teamwork continuation](part1-local-continuation.md).

**User-reported manual verification:** The user stated: “I have now manually completed both the VS Code REST Client HTTP checks and the Chrome DevTools Network inspection for Part 2.” Record these two activities as completed according to the user's confirmation. The assistant has not inspected screenshots, a manual request-by-request log, or detailed DevTools evidence for this report, and does not independently certify their coverage or results. The report does not claim that WebStorm was used. If the assignment requires WebStorm specifically, that exact-tool requirement remains unverified; VS Code use alone does not establish an exception.

**Assistant-executed checks in this conversation:** `npm.cmd run typecheck` passed. `npm.cmd test` passed after the HTTP-client corrections: TypeScript production build and all 9 Node test groups, including the actual 27-request HTTP file through the Node compatibility runner. These are automated checks, not the user's manual session. No new Chrome/Java/fresh-clone execution is claimed in this update; those results below are historical.

**Corrections:** Restored the first three request separators; added a named create request and `@todoId` response reference for VS Code REST Client; taught the compatibility runner to skip request-name metadata. WebStorm response scripts remain in the file. VS Code response-variable support does not establish execution of those WebStorm assertion scripts by VS Code.

**Part 1:** Existing approved contributions and the single-author technical conflict remain valid within their recorded scope. Independent edits by both students and their joint conflict-resolution decision are still pending. No new Mazen-attributed work or joint decision is inferred from this manual-check confirmation. Both students must supply their own conflicting profile edits, inspect the conflict, agree on the final wording, and approve their actual contributions before attribution. See the linked procedure.

**Boundaries:** Authorized fixes and documentation are committed locally on HUE1 using the existing repository identity. No main modification, GitLab push or Moodle submission is authorized or performed. Remaining checks include genuine teamwork, individual explanation, exact-tool clarification if applicable, and external account/publication/submission requirements. A clean local technical snapshot does not certify complete academic submission.

---

# Historical independent final local audit — THM HÜ1

Date: 13 November 2026 (America/Los_Angeles). **VERDICT B — LOCAL WORK COMPLETE, BUT MANUAL OR TEAM VERIFICATION REMAINS**.

No functional application defect was reproduced. Technical source, tests, builds, committed integration and fresh-clone runtime pass. Pushing is **not** the only remaining requirement: independent two-student conflict participation, specified manual tools, oral understanding and external GitLab/Moodle state are not fully verified. No 100% completion percentage is assigned.

Initial audited HUE1: f4cef998bbd0b88d14ea9afb48c7893c71ea4f1a. Protected main: c6acd6e640ee80388ec231bc04b1f4bfaf8fd26c. Source was inspected before any edits; application code and tests were not changed in this audit. Documentation corrections and this report are committed under Karam's previously authorized repository-local identity on feature/hue1-independent-final-audit and merged only to HUE1. No push, remote modification, branch deletion/rewrite, Mazen-attributed new commit or Moodle submission.

## Authoritative documents and method

Freshly extracted/read all 10 pages of C:/Users/Magic Systems/Downloads/HÜ1.pdf and all 23 pages of 05-Praxisblock - Vertx.pdf using local pdfjs (parser emitted font warnings, text extraction succeeded). Checklist covers mandatory HÜ1 1.1–1.3, 2.1–2.6, 3.1–3.3 and lecture Echo/User exercises. Read actual frontend/backend/Java source, both .http files and runner, browser/Node/JUnit tests, Gradle/Wrapper/npm configurations, README and comparison guide. Earlier test claims were not accepted as current execution evidence. Previous report retained as [pre-independent audit](final-local-audit-before-independent-review.md).

The referenced separate GitLab SSH lecture is unavailable. Optional Fruit API (1.4) and Hypermedia (2.7) are excluded; lecture dice/static-handler examples are not extra assigned endpoints. Historical official-starter generation/IDE-import steps cannot be proved from final source.

## Requirement checklist

Statuses for this audit: PASS, FAIL, NOT VERIFIED. Counts: PASS 78; FAIL 0; NOT VERIFIED 12; optional tasks excluded. These are reviewer checkpoints, not university grading weights.

| Requirement | Status | Relevant source / evidence | Current verification result | Gap / remaining action |
| --- | --- | --- | --- | --- |
| 1.1 Existing group repository and origin URL | PASS | git rev-parse; git remote -v | Root todoapp-client; origin https://git.thm.de/pi2-ws2627-fr3f/todoapp-client.git | None |
| 1.1 THM group name and common fork provenance | NOT VERIFIED | Local origin/ref names cannot prove server/account state | Not remotely verified | Verify in THM GitLab / Moodle; use each member’s account |
| 1.1 Private project visibility | NOT VERIFIED | Local origin/ref names cannot prove server/account state | Not remotely verified | Verify in THM GitLab / Moodle; use each member’s account |
| 1.1 All members can push branches | NOT VERIFIED | Local origin/ref names cannot prove server/account state | Not remotely verified | Verify in THM GitLab / Moodle; use each member’s account |
| 1.1 Tutor repository / optional MR access | NOT VERIFIED | Local origin/ref names cannot prove server/account state | Not remotely verified | Verify in THM GitLab / Moodle; use each member’s account |
| 1.1 Each member cloned and configured SSH; authentication tested | NOT VERIFIED | Local origin/ref names cannot prove server/account state | Not remotely verified | Verify in THM GitLab / Moodle; use each member’s account |
| 1.1 HUE1 published and fetched by all members | NOT VERIFIED | Local origin/ref names cannot prove server/account state | Not remotely verified | Verify in THM GitLab / Moodle; use each member’s account |
| Submission HUE1 branch URL and deadline in Moodle | NOT VERIFIED | Local origin/ref names cannot prove server/account state | Not remotely verified | Verify in THM GitLab / Moodle; use each member’s account |
| 1.1 Starter behavior and sample-data documentation | PASS | docs/part1-project-start.md; git show main:todo_app/src/todoApp.ts | Starter has browser RAM and three examples; current browser tested | None |
| 1.1 Local HUE1 based on main | PASS | git merge-base main HUE1; git log | main is unchanged starter ancestor; HUE1 now contains feature merges | None |
| 1.1 Ignore generated output, secrets and personal IDE files | PASS | .gitignore; git ls-files | node_modules, .tools, .env, .idea, .vscode, compiled JS, Gradle output ignored; lockfile and Wrapper retained | None |
| 1.2 Each member’s feature branch, reviewed contribution and meaningful commits | PASS | Karam feature commits; Mazen 78be29c on feature/hue1-teammate-review; docs/mazen-review-request.md | Mazen personally approved the exact assistant-prepared test/README patch; author and committer verified; merged as 07b5169 | No additional approval needed for this exact patch; independent implementation and joint conflict exercise are not inferred |
| 1.2 README actual team names | PASS | README.md Team | Karam Samer Atallah Aldabain (confirmed Git identity); Mazen Mohammad Yousef Alayaideh (personally supplied identity) | None |
| 1.2 README clone URL, purpose, prerequisites and startup | PASS | README.md; package.json | Working-tree commands build and run; publication caveat explicit | None |
| 1.2 Reviewed contributions integrated without squash | PASS | 0296a12, 203bca5, c937733; merges 4fcd46d, 210c40d, 2b2068c | Approved work integrated without squash under confirmed Karam identity; teammate-specific requirement remains separate | None |
| 1.2 Project profile exists | PASS | docs/projektprofil.md | Project goal and both applications described | None |
| 1.2 Independent two-student edits and jointly agreed conflict resolution | NOT VERIFIED | git log; git merge-tree --write-tree 75ad616 3e86c45; resolution 889a6d3 | Real technical conflict independently reproduced; both edits/resolution authored as Karam; no independent second-student conflict edit or joint decision established | Complete genuine student review/contribution and explain the joint exercise; do not credit automation as two-person participation |
| Authorized technical same-base conflict and two-parent resolution | PASS | docs/technical-conflict-evidence.md; resolution 889a6d3; final merge e3c8af0 | Independently reproduced merge-tree content conflict (exit 1 expected); base and resolution parents checked directly | None for technical exercise |
| 1.3 Intended changes present in HUE1 (also 2 and 3.2) | PASS | git ls-tree -r HUE1; feature merge commits | Frontend/backend, tests, documentation and Gradle Wrapper are versioned in HUE1; generated output absent from final tree | None |
| 1.3 No unresolved conflict entries or markers | PASS | git ls-files -u; anchored rg scan | git ls-files -u empty; tracked active source/profile scan has no unresolved markers (historical evidence excluded) | None |
| 1.3 Fresh HUE1 clone starts complete solution from README | PASS | Independent clone C:/Users/Magic Systems/Desktop/PI2/HUE1-independent-audit-2026-11-13 at f4cef998bbd0b88d14ea9afb48c7893c71ea4f1a | This audit: install, typecheck, build, 9 Node groups, 3 Chrome cases, 5 Java tests, actual production/static/HTTP/restart checks pass | None |
| 1.3 All required deliverables included in versioned submission | PASS | git ls-tree -r HUE1; feature merge commits | Frontend/backend, tests, documentation and Gradle Wrapper are versioned in HUE1; generated output absent from final tree | None |
| 2.1 Server authoritative RAM collection; no database | PASS | todo_api/src/store.ts TodoStore | Re-executed in this independent audit: relevant Node/Chrome/live HTTP assertions pass; commands below | None |
| 2.1 Server-generated unique IDs, timestamps and initial offen | PASS | todo_api/src/store.ts TodoStore create | Re-executed in this independent audit: relevant Node/Chrome/live HTTP assertions pass; commands below | None |
| 2.1 Model fields, priority/status values and optional due date | PASS | todo_api/src/model.ts; todo_api/src/validation.ts validate | Re-executed in this independent audit: relevant Node/Chrome/live HTTP assertions pass; commands below | None |
| 2.1 Immutable IDs and creation times | PASS | todo_api/src/store.ts TodoStore update; todo_api/src/validation.ts validate | Re-executed in this independent audit: relevant Node/Chrome/live HTTP assertions pass; commands below | None |
| 2.1 Browser refresh preserves data; restart can clear RAM | PASS | todo_api/src/store.ts TodoStore; tests/browser/todo.spec.ts | Re-executed in this independent audit: relevant Node/Chrome/live HTTP assertions pass; commands below | None |
| 2.1 Separate client, HTTP and storage responsibilities | PASS | todo_app/src/api.ts request/api; todo_api/src/app.ts createApp; todo_api/src/store.ts TodoStore | Re-executed in this independent audit: relevant Node/Chrome/live HTTP assertions pass; commands below | None |
| 2.2 GET collection 200 JSON including [] | PASS | todo_api/src/app.ts createApp; todo_api/src/store.ts TodoStore all | Re-executed in this independent audit: relevant Node/Chrome/live HTTP assertions pass; commands below | None |
| 2.2 GET individual 200 JSON without mutation | PASS | todo_api/src/app.ts createApp; todo_api/src/store.ts TodoStore get | Re-executed in this independent audit: relevant Node/Chrome/live HTTP assertions pass; commands below | None |
| 2.2 POST 201 JSON and Location; server fields | PASS | todo_api/src/app.ts createApp post; todo_api/src/store.ts TodoStore create | Re-executed in this independent audit: relevant Node/Chrome/live HTTP assertions pass; commands below | None |
| 2.2 PUT 200 replaces all editable fields; omitted date removed | PASS | todo_api/src/app.ts createApp put; todo_api/src/store.ts TodoStore update | Re-executed in this independent audit: relevant Node/Chrome/live HTTP assertions pass; commands below | None |
| 2.2 PUT missing resource 404; no upsert | PASS | todo_api/src/app.ts createApp store.get before validate | Re-executed in this independent audit: relevant Node/Chrome/live HTTP assertions pass; commands below | None |
| 2.2 PATCH supplied fields only; null removes date | PASS | todo_api/src/validation.ts validate; todo_api/src/store.ts TodoStore update | Re-executed in this independent audit: relevant Node/Chrome/live HTTP assertions pass; commands below | None |
| 2.2 DELETE 204 empty body; repeat leaves deleted resource | PASS | todo_api/src/app.ts createApp delete | Re-executed in this independent audit: relevant Node/Chrome/live HTTP assertions pass; commands below | None |
| 2.2 Safe GET and identical PUT domain idempotence | PASS | tests/api.test.mjs lifecycle | Re-executed in this independent audit: relevant Node/Chrome/live HTTP assertions pass; commands below | None |
| 2.2 Appropriate JSON Content-Type | PASS | todo_api/src/app.ts createApp express.json/res.json; todo_app/src/api.ts request/api | Re-executed in this independent audit: relevant Node/Chrome/live HTTP assertions pass; commands below | None |
| 2.2 Trimmed nonempty string title and description | PASS | todo_api/src/validation.ts validate | Re-executed in this independent audit: relevant Node/Chrome/live HTTP assertions pass; commands below | None |
| 2.2 Types, enums and valid calendar dates | PASS | todo_api/src/validation.ts validate | Re-executed in this independent audit: relevant Node/Chrome/live HTTP assertions pass; commands below | None |
| 2.2 PUT mandatory fields; PATCH nonempty allowed properties | PASS | todo_api/src/validation.ts validate | Re-executed in this independent audit: relevant Node/Chrome/live HTTP assertions pass; commands below | None |
| 2.2 Reject immutable and unknown properties | PASS | todo_api/src/validation.ts validate | Re-executed in this independent audit: relevant Node/Chrome/live HTTP assertions pass; commands below | None |
| 2.2 Malformed JSON 400; missing resources/paths 404 | PASS | todo_api/src/app.ts createApp errors/API fallback | Re-executed in this independent audit: relevant Node/Chrome/live HTTP assertions pass; commands below | None |
| 2.2 Unexpected errors safe JSON 500 and internal logging | PASS | todo_api/src/app.ts createApp errors; tests/api.test.mjs FailingStore | Re-executed in this independent audit: relevant Node/Chrome/live HTTP assertions pass; commands below | None |
| 2.2 Failed mutations atomic; server operational after errors | PASS | todo_api/src/validation.ts validate before store mutation | Re-executed in this independent audit: relevant Node/Chrome/live HTTP assertions pass; commands below | None |
| 2.3 Express serves /, compiled JS and local CSS; API still works | PASS | todo_api/src/app.ts createApp static routes | Re-executed in this independent audit: relevant Node/Chrome/live HTTP assertions pass; commands below | None |
| 2.3 Production requires only Express; relative API URLs | PASS | todo_app/src/api.ts request/api; package.json start | Re-executed in this independent audit: relevant Node/Chrome/live HTTP assertions pass; commands below | None |
| 2.4 Existing UI and interaction preserved | PASS | todo_app/public/todo.html; todo_app/src/todoApp.ts TodoManager | Re-executed in this independent audit: relevant Node/Chrome/live HTTP assertions pass; commands below | None |
| 2.4 fetch module loads/creates/reads/updates/deletes server data | PASS | todo_app/src/api.ts request/api; todo_app/src/todoApp.ts TodoManager | Re-executed in this independent audit: relevant Node/Chrome/live HTTP assertions pass; commands below | None |
| 2.4 PUT full edit and PATCH status change | PASS | todo_app/src/api.ts request/api replace/patch; todo_app/src/todoApp.ts TodoManager | Re-executed in this independent audit: relevant Node/Chrome/live HTTP assertions pass; commands below | None |
| 2.4 HTTP response.ok and network errors in existing error area | PASS | todo_app/src/api.ts request/api request; todoApp.ts showError | Re-executed in this independent audit: relevant Node/Chrome/live HTTP assertions pass; commands below | None |
| 2.4 DELETE 204 is not parsed as JSON | PASS | todo_app/src/api.ts request/api request | Re-executed in this independent audit: relevant Node/Chrome/live HTTP assertions pass; commands below | None |
| 2.4 Display updates after successful server response; no independent browser persistence | PASS | todo_app/src/todoApp.ts TodoManager | Re-executed in this independent audit: relevant Node/Chrome/live HTTP assertions pass; commands below | None |
| 2.6 Initial load, empty state and static assets | PASS | tests/browser/todo.spec.ts; tests/api.test.mjs | Re-executed in this independent audit: relevant Node/Chrome/live HTTP assertions pass; commands below | None |
| 2.6 Browser create/edit/status/delete and refresh | PASS | tests/browser/todo.spec.ts UI lifecycle | Re-executed in this independent audit: relevant Node/Chrome/live HTTP assertions pass; commands below | None |
| 2.6 Second window sees changes after refresh | PASS | tests/browser/todo.spec.ts UI lifecycle | Re-executed in this independent audit: relevant Node/Chrome/live HTTP assertions pass; commands below | None |
| 2.6 Stopped-server request displays understandable error | PASS | tests/browser/todo.spec.ts stopped server | Re-executed in this independent audit: relevant Node/Chrome/live HTTP assertions pass; commands below | None |
| 2.6 Automated methods/URLs/payload/status/body network inspection | PASS | tests/browser/todo.spec.ts Network; docs/evidence/part2-network.json | Re-executed in this independent audit: relevant Node/Chrome/live HTTP assertions pass; commands below | None |
| 2.6 README setup and complete action/code walkthrough | PASS | README.md; docs/part2-demo-guide.md | Re-executed in this independent audit: relevant Node/Chrome/live HTTP assertions pass; commands below | None |
| 2.5 Required HTTP scenario 1: Collection 200 | PASS | tests/todo-api.http; tests/http-file.test.mjs | Actual .http sequence executed again against clone production Express; response handler passed | None |
| 2.5 Required HTTP scenario 2: Create 201, ID and Location | PASS | tests/todo-api.http; tests/http-file.test.mjs | Actual .http sequence executed again against clone production Express; response handler passed | None |
| 2.5 Required HTTP scenario 3: Read created ID 200 | PASS | tests/todo-api.http; tests/http-file.test.mjs | Actual .http sequence executed again against clone production Express; response handler passed | None |
| 2.5 Required HTTP scenario 4: PUT then GET | PASS | tests/todo-api.http; tests/http-file.test.mjs | Actual .http sequence executed again against clone production Express; response handler passed | None |
| 2.5 Required HTTP scenario 5: Status-only PATCH then unchanged-fields GET | PASS | tests/todo-api.http; tests/http-file.test.mjs | Actual .http sequence executed again against clone production Express; response handler passed | None |
| 2.5 Required HTTP scenario 6: PATCH dueDate null | PASS | tests/todo-api.http; tests/http-file.test.mjs | Actual .http sequence executed again against clone production Express; response handler passed | None |
| 2.5 Required HTTP scenario 7: DELETE 204 then GET 404 | PASS | tests/todo-api.http; tests/http-file.test.mjs | Actual .http sequence executed again against clone production Express; response handler passed | None |
| 2.5 Required HTTP scenario 8: Missing GET/PUT/PATCH/DELETE 404 | PASS | tests/todo-api.http; tests/http-file.test.mjs | Actual .http sequence executed again against clone production Express; response handler passed | None |
| 2.5 Required HTTP scenario 9: Missing/invalid POST 400 | PASS | tests/todo-api.http; tests/http-file.test.mjs | Actual .http sequence executed again against clone production Express; response handler passed | None |
| 2.5 Required HTTP scenario 10: Invalid PUT/PATCH atomicity | PASS | tests/todo-api.http; tests/http-file.test.mjs | Actual .http sequence executed again against clone production Express; response handler passed | None |
| 2.5 Required HTTP scenario 11: Malformed JSON 400 | PASS | tests/todo-api.http; tests/http-file.test.mjs | Actual .http sequence executed again against clone production Express; response handler passed | None |
| 2.5 Required HTTP scenario 12: Unknown API path 404 JSON | PASS | tests/todo-api.http; tests/http-file.test.mjs | Actual .http sequence executed again against clone production Express; response handler passed | None |
| 2.5 Reused generated ID, expected statuses, recovery and repeatability | PASS | tests/todo-api.http client.global; tests/helpers/http-file.mjs | 27 requests pass; healthy request after invalid inputs | None |
| 2.5 Execute HTTP file in WebStorm itself | NOT VERIFIED | tests/todo-api.http; WebStorm/ijhttp not found on PATH | Node compatibility execution does not establish WebStorm execution | Run All Requests in WebStorm and inspect assertions |
| 2.6 Manual browser DevTools Network panel inspection | NOT VERIFIED | docs/part2-demo-guide.md; automated CDP evidence available | No human panel interaction performed | Open Network; inspect create/edit/status/delete and error Headers/Payload/Response |
| 3.1 Gradle/JDK/Web/Jackson/entry-point configuration | PASS | echo-service/build.gradle; settings.gradle; gradle/wrapper/gradle-wrapper.properties | Current Java source inspected; clean Gradle/JUnit build and real clone endpoint requests pass | None |
| 3.1 Java main, Vertx, Router, EchoApi registration, port 8888 and startup message | PASS | echo-service/src/main/java/de/thm/pi2/echo/Start.java main | Current Java source inspected; clean Gradle/JUnit build and real clone endpoint requests pass | None |
| 3.1 Modular appendRouting and handleEcho | PASS | echo-service/src/main/java/de/thm/pi2/echo/api/EchoApi.java | Current Java source inspected; clean Gradle/JUnit build and real clone endpoint requests pass | None |
| 3.1 GET /echo?message=PI2 returns 200 Echo: PI2 | PASS | EchoApi.handleEcho; EchoApiTest.echoesQueryAsPlainText | Current Java source inspected; clean Gradle/JUnit build and real clone endpoint requests pass | None |
| 3.1 GET /echo returns 400 Missing message parameter exact lecture text | PASS | EchoApi.handleEcho; EchoApiTest.rejectsMissingMessageExactlyAsInLecture | Current Java source inspected; clean Gradle/JUnit build and real clone endpoint requests pass | None |
| 3.1 UserRequest and UserResponse records in echo/dto | PASS | echo-service/src/main/java/de/thm/pi2/echo/dto/*.java | Current Java source inspected; clean Gradle/JUnit build and real clone endpoint requests pass | None |
| 3.1 POST /echoUser BodyHandler before deserialization | PASS | EchoApi.appendRouting/handleEchoUser | Current Java source inspected; clean Gradle/JUnit build and real clone endpoint requests pass | None |
| 3.1 asPojo, UUID and Json.encode; application/json; no returned password | PASS | EchoApi.handleEchoUser; EchoApiTest.userResponseHasUuidAndEmailWithoutPassword | Current Java source inspected; clean Gradle/JUnit build and real clone endpoint requests pass | None |
| 3.1 Malformed JSON safe rejection and subsequent request succeeds | PASS | EchoApiTest.malformedOrIncompleteRequestsAreSafeAndServerKeepsRunning | Current Java source inspected; clean Gradle/JUnit build and real clone endpoint requests pass | None |
| 3.1 Independent server and Windows run commands | PASS | README.md; runtime coexistence/restart/shutdown probes | Current Java source inspected; clean Gradle/JUnit build and real clone endpoint requests pass | None |
| 3.2 Single repository and own echo-service subdirectory | PASS | echo-service/; no echo-service/.git; git ls-files | Clean build, five JUnit tests and production HTTP checks pass; comparison source-reviewed | None |
| 3.2 Source, Gradle configuration and complete Wrapper present locally | PASS | echo-service/src; build.gradle; settings.gradle; gradlew; gradlew.bat; gradle/wrapper | Clean build, five JUnit tests and production HTTP checks pass; comparison source-reviewed | None |
| 3.2 Build/IDE output excluded and Java startup documented | PASS | .gitignore; README.md | Clean build, five JUnit tests and production HTTP checks pass; comparison source-reviewed | None |
| 3.3 Actual-route request/response comparison, methods and statuses | PASS | docs/part3-demo-guide.md comparison and traces | Clean build, five JUnit tests and production HTTP checks pass; comparison source-reviewed | None |
| 3.3 TypeScript/Java, Node/JVM and event-driven differences | PASS | docs/part3-demo-guide.md | Clean build, five JUnit tests and production HTTP checks pass; comparison source-reviewed | None |
| 3.1 Historical use of official starter and IDE import | NOT VERIFIED | Final Gradle project exists; no provenance artifact verifies generation steps | Final configuration verified; historical generation/import not provable | If requested, demonstrate Gradle import and explain starter workflow |
| 1.3 / 2.6 / 3.3 Each member can explain full solution orally | NOT VERIFIED | docs/part1-team-workflow.md; part2-demo-guide.md; part3-demo-guide.md | Preparation supplied; individual understanding cannot be certified by automated tests | Each member rehearses contribution/conflict and both request traces |

## Completion scorecard

| Category | Status | Evidence |
| --- | --- | --- |
| Part 1 — Git workflow | PASS | Feature branches, preserved non-squashed merges, full HUE1 tree, clean initial status; main unchanged |
| Part 1 — Team contributions | PASS | Karam commits and Mazen 78be29c; personally approved exact patch and author/committer verified; independent original implementation not claimed |
| Part 1 — Merge conflict | NOT VERIFIED | Technical conflict/resolution PASS, but assignment's independent student edits/joint agreement not established |
| Part 2 — REST API | PASS | Six routes inspected and executed through Node and live HTTP-file requests |
| Part 2 — Frontend | PASS | Chrome CRUD, refresh, second window and stopped-server scenarios |
| Part 2 — Validation | PASS | Types, enums, immutable fields, calendar boundaries, PUT/PATCH atomic rejection and recovery |
| Part 2 — HTTP tests | PASS | All twelve scenarios implemented; all 27 actual requests pass; WebStorm UI execution remains separately unverified |
| Part 3 — Vert.x | PASS | Actual Start/EchoApi/records inspected; five JUnit cases and live responses |
| Part 3 — Gradle | PASS | Clean Wrapper build, JDK 25, Gradle 9.1.0, Web/Jackson dependencies, tests and packaged runtime |
| Part 3 — HTTP tests | PASS | Five actual Echo/User HTTP-file requests pass against clean-built production listener |
| Browser verification | PASS | Three real Chrome cases including Network/CDP; manual DevTools UI use not claimed |
| Fresh-clone verification | PASS | New local HUE1 clone, dependency install, builds/tests/production endpoints; no untracked application files copied |
| Git main protection | PASS | Exact original SHA c6acd6e640ee80388ec231bc04b1f4bfaf8fd26c before/after |
| HUE1 readiness | NOT VERIFIED | Technical snapshot can be published; full academic/manual/remote compliance not certified |

## Independently executed commands and results

Initial root was todoapp-client, not its parent workspace. `git status --short` was empty. Executed `git branch -avv`, `git log --all --graph --decorate --oneline`, `git log HUE1 --format="%h | %an <%ae> | %s"`, `git rev-parse main`, `git rev-parse HUE1`, `git diff main HUE1 --stat` and `git diff --check`. Inspected full tracked-file inventory and relevant commits directly. No uncommitted required file was found.

Fresh clone:

```powershell
git clone --no-hardlinks --branch HUE1 . ..\HUE1-independent-audit-2026-11-13
```

From `C:/Users/Magic Systems/Desktop/PI2/HUE1-independent-audit-2026-11-13`:

```powershell
npm.cmd ci --offline
npm.cmd run typecheck
npm.cmd test
npm.cmd run build
npm.cmd run test:browser
```

Results: dependency install succeeds (82 packages); strict frontend/backend typechecks pass; nine Node groups pass; production frontend/backend build passes; **3 Chrome scenarios pass in 19.2s**. No test failed/skipped. npm's offline audit output reported zero vulnerabilities, but this is not a current online security advisory verification. A linter is not configured; no lint pass is claimed or required.

From clone echo-service:

```powershell
$env:JAVA_HOME = (Get-ChildItem 'C:\Users\Magic Systems\Desktop\PI2\todoapp-client\.tools\jdk' -Directory | Select-Object -First 1).FullName
$env:Path = "$env:JAVA_HOME\bin;$env:Path"
$env:GRADLE_USER_HOME = 'C:\Users\Magic Systems\Desktop\PI2\todoapp-client\.tools\gradle-home'
.\gradlew.bat clean build installDist --offline --no-daemon --console=plain
```

Result: **BUILD SUCCESSFUL in 19s; all 5 Java tests pass**. The existing JDK installation and dependency cache supply documented prerequisites. Approved sandbox escalation was used for Gradle cache access. No source/test weakening occurred. Offline success proves cached installation/build, not first-time internet downloads on a different machine.

Production verification: external audit harness `.tools/independent-audit-runtime.mjs` launched the clone's compiled `todo_api/dist/server.js` with Node and `de.thm.pi2.echo.Start` with the freshly built `echo-service/build/install/echo-server/lib/*` classpath. Both run on ports 3000 and 8888; HTML, JS modules and Bootstrap CSS return 200. It executes the clone's `node tests/run-http-files.mjs`, which sends **27 To-do + 5 Echo/User requests, all passing**. It then creates a To-do, stops/restarts Express, verifies the collection is empty and Java remains operational, stops Java and verifies Express remains operational. Both children are stopped in finally. No hidden application files were copied into the clone.

**Exact automated total: 17 passed, 0 failed (9 Node + 3 Chrome + 5 Java).** The 32 production HTTP requests and restart/static smoke checks are additional checks, not double-counted named test cases. [Current HTTP stdout](evidence/http-file-results.txt) and [current Chrome/CDP traffic](evidence/part2-network.json) were saved from this new run, not reused from an earlier audit.

Specific mandatory date assertions executed: 2000-02-29 accepted; 2100-02-29 and 2027-04-31 rejected with 400; 2027-04-30/2027-01-31/2100-02-28 accepted; invalid mixed-field PATCH and PUT leave the stored resource unchanged; subsequent valid requests succeed. Existing tests also execute empty collection, Location/id/time/initial status, no-upsert PUT, omitted-date replacement removal, null-date PATCH removal, immutable/unknown-field rejection, malformed JSON, missing paths/resources, GET safety, PUT/DELETE idempotent resource state, safe JSON errors and isolated injected 500 handling. No dangerous production failure was induced.

## Git, real conflict and personal contribution evidence

Directly inspected 81f1c1e and 75ad616 profile diffs, their actual common base `fb6706217ad7d420e186dd68c60865fd92a3234f`, and resolution commit `889a6d315cc4d9cb48b1b508fcad270709c01931`. Its parents are `75ad616c9589dc6d44d209b5239fd9e49e75b8ec` and `3e86c455452e51a6ba7676cc9a899829a8b7c028`; final resolved integration is e3c8af0.

Independently executed:

```powershell
git merge-base 81f1c1e 75ad616
git merge-tree --write-tree 75ad616 3e86c45
git show --cc 889a6d3 -- docs/projektprofil.md
git show -s --format='%H %P' 889a6d3
```

`merge-tree` returns **1 as expected for an actual content conflict**, with three unmerged stages for docs/projektprofil.md and `CONFLICT (content)`. This operation does not switch/reset branches or leave the index conflicted. The stored resolution preserves a combined goal. Thus there is stronger evidence than merely two different texts. All conflict edits/resolution are attributed to Karam; the [technical conflict record](technical-conflict-evidence.md) is accurate on that scope. Neither the history nor the present request establishes independent Mazen conflict edits or a joint student decision. That academic requirement remains NOT VERIFIED.

Mazen commit `78be29ca1bc74ecbddbd0044f7684b9d4966640a` has his confirmed name/email as author and committer. The actual diff adds 18 test lines and four README lines; the commit body states assistant preparation/personal review. His explicit response in this session approved the exact patch and attribution. [Approval record](mazen-review-request.md) and [reviewed patch](approved-mazen-review.patch) corroborate the scope. Commit is retained on feature/hue1-teammate-review and merged as 07b5169. This is a verified reviewed contribution, not evidence of independently writing every line or performing the conflict. No new commit under his identity was created in this audit.

## Structure, secrets, preservation and defects

Initial inventory: **58 tracked paths**, all required technical source/config/test/Wrapper/doc files present. No final-tree node_modules, .tools, Gradle caches/build output, compiled frontend/backend output, private-key paths or .env files tracked. A limited content scan for private-key headers and common AWS/GitLab credential patterns found no matches; this is not a proof against every possible secret. Demo passwords in Echo fixtures are identified test values, not account credentials. No nested application repository exists; the outside linked review worktree is legitimate Git metadata, not submitted nested .git.

Earlier history contains generated Gradle output accidentally added in 6d19cd3 and removed from tracking by 203bca5. Final tree excludes it. It was not concealed by rewriting history. `git diff --check` on the initial working tree passes; `git diff main HUE1 --check` reports one trailing space in docs/approved-mazen-review.patch. That is a required blank-context prefix in the literal unified-diff evidence, not application whitespace or an unresolved conflict. The exact approved evidence is preserved instead of silently changing its bytes.

Recorded documentation defects before correction:

1. README said Mazen's contribution and the real technical conflict were still pending. Corrected to cite the approved contribution and actual technical conflict while retaining the unverified two-student distinction.
2. docs/mazen-review-request.md still contained “awaiting review”, “not reviewed” and “no commit created” wording above its completed approval record. Corrected those contradictory current-state statements without changing the approved patch or commit.

No functional implementation defect was reproduced. No application source or test changes were needed during this audit. Initial audit review preceded edits. Corrections/report/evidence updates use feature/hue1-independent-final-audit and Karam's confirmed identity; preserve all existing work/history. Backup verified before branch work: `C:/Users/Magic Systems/Desktop/PI2/HUE1-backup-2026-11-13T11-47-00-015Z`, **425 copied files SHA-256 verified**; source, docs, tests, Wrapper and Git metadata included, regenerable dependency/build/JDK/temporary-clone output excluded.

## Remaining actions and limitations

- Genuine two-student conflict participation/joint explanation: not established by the single-author automated exercise. Both students must perform/understand the assigned independent edits and agreed resolution; no fake replacement history is created.
- Exact WebStorm execution: NOT VERIFIED. WebStorm/ijhttp absent from PATH/checked program locations. IntelliJ IDEA is installed, which does not establish WebStorm use. Run tests/todo-api.http with WebStorm Run All Requests, inspect the documented statuses and assertions. The actual HTTP file already passed through the Node compatibility runner.
- Manual DevTools panel interaction: NOT VERIFIED. Chrome/CDP automated traffic is tested; the human Network panel was not operated. Open Network with Preserve log, perform create/edit/status/delete/errors and inspect Headers/Payload/Response. No desktop interaction tool was available to certify that exact action.
- Each student's oral understanding and historical official-starter/IDE-import steps: NOT VERIFIED from final code alone. Comparison guide traces actual Express POST and Vert.x POST code; individual demonstration is still needed.
- THM GitLab group/fork provenance/private visibility, per-student clone/SSH/authentication/push access, tutor access, published/fetched HUE1 and Moodle deadline/link submission require external verification. Author identities are not authentication proof. Optional Merge Request feature/access matters only if used.

No further personal approval is needed for Mazen's already committed exact patch. Future Mazen-attributed changes require their own approval. Fruit repetition and HATEOAS are explicitly optional and not counted as missing functionality.

## Explicit final answers

1. **Part 1 completely finished locally? No:** technical Git integration/conflict passes; independent two-student conflict participation and explanation are unverified.
2. **Part 2 completely finished locally? Implementation yes; exact manual verification incomplete:** APIs, validation and Chrome pass, WebStorm/manual Network remain unverified.
3. **Part 3 completely finished locally? Runtime implementation yes:** clean build/JUnit/live routes pass; historical starter/import and oral understanding are not certified.
4. **All mandatory assignment requirements satisfied? Not certified:** team/manual/external gaps remain.
5. **All tests passing? Yes:** 17 executed named cases/groups, 0 failures, plus 32 passing live HTTP requests. Unexecuted manual checks are not called passed.
6. **Both students' genuine contributions verified? Yes for authorized reviewed contributions:** actual identities/patch/approval/history checked; independent original implementation and joint conflict involvement not inferred.
7. **Real merge-conflict exercise completed? Technically yes, independently reproduced and resolved in history; two-student academic execution not verified.**
8. **HUE1 fully committed? Yes after the documentation-only audit commit/merge:** no missing untracked deliverable required for runtime.
9. **Working tree clean? Yes at final handoff:** report and corrections committed; final status printed.
10. **main completely unchanged? Yes:** c6acd6e640ee80388ec231bc04b1f4bfaf8fd26c.
11. **Fresh clone builds/tests/runs? Yes:** new local clone verified in this audit; final documentation-only merge fast-forwarded afterward with unchanged application hashes.
12. **Remaining automatable local implementation tasks? None identified:** no unresolved functional defect; the required team/manual checks remain actual work.
13. **Remaining personal approvals/manual checks? No pending approval for existing Mazen patch; joint participation, exact tool actions and oral understanding remain.**
14. **Ready for GitLab publication? The complete technical snapshot can be published by the user; full academic readiness is not certified.**
15. **Is pushing HUE1 truly the only remaining technical step? No:** exact tool checks and genuine joint exercise/verification remain, plus external access/submission requirements.

## Commands for later user-controlled publication

No push command (including dry-run) or remote modification was executed. No Moodle submission was made. When the user decides to publish, confirm the target and clean HUE1 first:

```powershell
cd 'C:\Users\Magic Systems\Desktop\PI2\todoapp-client'
git branch --show-current
git status
git rev-parse main
git remote get-url origin
git push -u origin HUE1:refs/heads/HUE1
```

If publishing Mazen's approved feature history separately, authenticate with his own THM account and use:

```powershell
git push -u origin feature/hue1-teammate-review:refs/heads/feature/hue1-teammate-review
```

Publish any other required feature evidence with explicit named refs, never --all/--mirror/--force or a main refspec. Verify published content/privacy/tutor access and Moodle deadline; prepared branch URL: https://git.thm.de/pi2-ws2627-fr3f/todoapp-client/-/tree/HUE1 . Submit only with user authorization.

**VERDICT B — LOCAL WORK COMPLETE, BUT MANUAL OR TEAM VERIFICATION REMAINS**
