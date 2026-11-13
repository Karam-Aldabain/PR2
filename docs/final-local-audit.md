# Final local completion and compliance audit

Date: 13 November 2026 (America/Los_Angeles). **NOT READY — ISSUES REMAIN** for the full assignment; the complete technical solution is integrated and tested locally in HUE1. The remaining mandatory team contribution/conflict requirements cannot be substituted by one student’s integration work.

main remains exactly **c6acd6e640ee80388ec231bc04b1f4bfaf8fd26c**. All new commits use the explicitly confirmed repository-local identity Karam Samer Atallah Aldabain <Karam.Samer.Atallah.Aldabain@mni.thm.de> (GitLab username supplied: ksaa11). This records authorization to integrate reviewed existing work, not proof of who originally wrote every line. No teammate attribution, fabricated conflict, rewritten history, push or Moodle submission.

Sources: complete local HÜ1.pdf (10 pages) and 05-Praxisblock - Vertx.pdf (23 pages), read during the preceding audit; mandatory 1.1–1.3, 2.1–2.6, 3.1–3.3 and Echo/User lecture exercises. Optional Fruit/HATEOAS excluded. The separate GitLab SSH lecture is unavailable. [Pre-integration audit](final-local-audit-before-integration.md) preserves earlier findings; those starter-only failures are superseded below.

Counts: PASS 77; FAIL 0; MISSING 2; NOT TESTED 4; REMOTE CHECK 7; OPTIONAL 2. Checkpoints are not grading weights.

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
| 1.1 Local HUE1 based on main | PASS | git merge-base main HUE1; git log | main is unchanged starter ancestor; HUE1 now contains feature merges | None |
| 1.1 Ignore generated output, secrets and personal IDE files | PASS | .gitignore; git ls-files | node_modules, .tools, .env, .idea, .vscode, compiled JS, Gradle output ignored; lockfile and Wrapper retained | None |
| 1.2 Each member’s feature branch, own contribution and meaningful commits | MISSING | git log HUE1 --format=fuller | Karam-authorized commits exist. Mazen supplied identity and conditional authorization, but has not reviewed or approved an actual patch | Teammate reviews and authors a genuine contribution under their confirmed identity |
| 1.2 README actual team names | PASS | README.md Team | Karam Samer Atallah Aldabain (confirmed Git identity); Mazen Mohammad Yousef Alayaideh (personally supplied identity) | None |
| 1.2 README clone URL, purpose, prerequisites and startup | PASS | README.md; package.json | Working-tree commands build and run; publication caveat explicit | None |
| 1.2 Reviewed contributions integrated without squash | PASS | 0296a12, 203bca5, c937733; merges 4fcd46d, 210c40d, 2b2068c | Approved work integrated without squash under confirmed Karam identity; teammate-specific requirement remains separate | None |
| 1.2 Project profile exists | PASS | docs/projektprofil.md | Project goal and both applications described | None |
| 1.2 Independent two-student edits and jointly agreed conflict resolution | MISSING | docs/technical-conflict-evidence.md; git log --format=fuller | Real automated conflict exists under Karam only; independent Mazen edit and joint student decision are not established | Complete genuine student review/contribution and explain the joint exercise; do not credit automation as two-person participation |
| Authorized technical same-base conflict and two-parent resolution | PASS | docs/technical-conflict-evidence.md; resolution 889a6d3; final merge e3c8af0 | Actual Git CONFLICT and unmerged index captured; resolved without squash or rewrite | None for technical exercise |
| 1.3 Intended changes present in HUE1 (also 2 and 3.2) | PASS | git ls-tree -r HUE1; feature merge commits | Frontend/backend, tests, documentation and Gradle Wrapper are versioned in HUE1; generated output absent from final tree | None |
| 1.3 No unresolved conflict entries or markers | PASS | git ls-files -u; anchored rg scan | No index conflicts; no conflict markers in application, Java sources, docs or README | None |
| 1.3 Fresh HUE1 clone starts complete solution from README | PASS | C:/Users/Magic Systems/Desktop/PI2/HUE1-final-verification-2026-11-13, cloned at 4ee3de1 | Clean clone install, builds, browser, Java and production HTTP checks pass; no application files copied | None |
| 1.3 All required deliverables included in versioned submission | PASS | git ls-tree -r HUE1; feature merge commits | Frontend/backend, tests, documentation and Gradle Wrapper are versioned in HUE1; generated output absent from final tree | None |
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


## Final automation results — 13 November 2026

**Technical implementation complete and tested; full assignment NOT READY — ISSUES REMAIN.** All automatable implementation, test, local commit, integration and technical conflict work requested has completed. Only publication is left for transferring this local technical snapshot; publication alone does not establish the missing student participation, manual tool actions or external permissions.

Verified pre-operation backup: `C:/Users/Magic Systems/Desktop/PI2/HUE1-backup-2026-11-13T11-34-29-613Z`, 326 copied files verified by SHA-256. BACKUP-MANIFEST.json records all included paths/hashes and regenerable exclusions. Source, tests, docs, Wrapper and Git metadata preserved. main is unchanged at `c6acd6e640ee80388ec231bc04b1f4bfaf8fd26c`.

### Files changed in this final automation

- tests/api.test.mjs: HTTP date-boundary test using fixture(t), accepted 2000 leap day/valid month ends, rejected 2100 leap day/April 31, atomic POST/PATCH rejection and subsequent successful update.
- README.md: accurate date-validation/test explanation and Mazen's personally confirmed name; no claim that he reviewed the added patch.
- docs/projektprofil.md: resolved first project-goal line; all other profile content preserved.
- docs/technical-conflict-evidence.md: actual hashes, lines, merge output, unmerged index entries and resolution rationale; explicitly single-author automation.
- docs/final-local-audit.md: current matrix/results; docs/final-local-audit-before-final-automation.md preserves earlier report.
- docs/part1-live-teamwork.md and docs/hue1-integration-handoff.md: preparation status marked superseded by current results.
- docs/evidence/http-file-results.txt and docs/evidence/part2-network.json: refreshed from the actual fresh-clone run.
- Local-only verification scripts/results are under ignored .tools; dependencies/build output are not versioned in the final tree.

No production source change was needed. Tests and business rules were not weakened. All new commits use Karam's confirmed identity; no commit is attributed to Mazen. Original main and existing history are preserved.

### Actual commits and merges in this final automation

| Commit | Branch / action |
| --- | --- |
| a7e3cee | feature/hue1-final-validation: date tests and README explanation |
| fb67062 | HUE1 merge of final-validation |
| 81f1c1e | feature/hue1-technical-conflict-a: first authorized project-goal edit |
| 75ad616 | feature/hue1-technical-conflict-b: second authorized project-goal edit |
| 3e86c45 | HUE1 merge of first technical perspective |
| 889a6d3 | Actual two-parent resolution on technical-conflict-b after Git reports CONFLICT |
| e3c8af0 | HUE1 merge of resolved technical exercise |
| 16f3a2f | feature/hue1-final-evidence: actual conflict evidence |
| 4ee3de1 | HUE1 merge of actual evidence; clean-clone tested snapshot |

Final report/evidence updates are committed on feature/hue1-final-evidence and merged into HUE1 afterward; their resulting hashes are shown by the final git log. All feature pointers retained, including unused teammate/independent-student exercise branches; pointers alone are not contribution evidence. Earlier integration history includes one corrected generated-output staging mistake (6d19cd3, corrected by 203bca5); final tree excludes it and history was not rewritten.

### Real conflict verification

[Actual evidence](technical-conflict-evidence.md) records common base fb6706217ad7d420e186dd68c60865fd92a3234f, both independent branch tips, competing literal project-goal lines, Git's actual content-conflict output, and all three unmerged index stages. Resolution 889a6d3 has parents 75ad616c9589dc6d44d209b5239fd9e49e75b8ec and 3e86c455452e51a6ba7676cc9a899829a8b7c028. The resolution preserves usability and the independent Express/Vert.x architecture. It was executed by the assistant under Karam authorization, not a jointly reviewed student decision. The technical exercise passes; the academic two-student checkpoint remains MISSING.

### Fresh-clone checks

Fresh path: `C:/Users/Magic Systems/Desktop/PI2/HUE1-final-verification-2026-11-13`. Created using `git clone --no-hardlinks --branch HUE1 . ..\HUE1-final-verification-2026-11-13`; no untracked application files copied. Installed runtimes/browser and existing dependency caches supply the documented prerequisites. Offline success does not establish first-use internet downloads.

| Executed in fresh clone | Result |
| --- | --- |
| npm.cmd ci --offline | 82 packages installed; exit 0; cached dependency install |
| npm.cmd run typecheck | Frontend/backend pass |
| npm.cmd test | Production build and 8 Node test groups pass, 0 failures |
| npm.cmd run test:browser | 3 Chrome cases pass in 18.9s; CRUD, refresh, second window, error display, stopped-server and CDP traffic |
| npm.cmd run build | Final frontend/backend production compilation passes |
| echo-service: .\gradlew.bat clean build installDist --offline --no-daemon --console=plain | BUILD SUCCESSFUL in 20s; 5 Java tests pass, 0 failures |
| Production Express and Vert.x startup | Both real clean-built entry points start independently/together on 3000/8888 |
| node tests/run-http-files.mjs with both alive | 27 To-do plus 5 Echo/User requests pass; all 32 response handlers pass |
| Static delivery | /, compiled JS modules and Bootstrap CSS return 200 |

Total named automated tests: **16 passed (8 Node + 3 Chrome + 5 Java), 0 failed**. The 32 live HTTP requests are additional executed checks, not added again as named test cases. [Saved HTTP output](evidence/http-file-results.txt) and [saved browser/CDP capture](evidence/part2-network.json) come from this clone. Runtime verification harness remained outside the clone, supplied no application code and stopped both spawned production servers in finally. Gradle used documented JDK 25, explicit JAVA_HOME/PATH and existing GRADLE_USER_HOME cache; approved execution was required for cache access.

Final documentation-only merges can be brought into the verification clone by fetching from the local filesystem origin and fast-forwarding; no GitLab fetch/push is involved. Relevant Node checks are repeated after the final documentation/evidence update; the tested application source remains identical.

### What cannot be credited as executed

- WebStorm/ijhttp not found on PATH or checked application locations. IntelliJ IDEA exists, but that does not establish actual execution in WebStorm. NOT TESTED: start Express, open tests/todo-api.http in WebStorm, run all requests in order, inspect assertions. The actual file passes through the Node compatibility runner.
- Manual browser DevTools panel interaction is NOT TESTED. Chrome automation and CDP capture verify methods, URLs, headers, JSON payloads, statuses and bodies. To complete the exact manual requirement: open the page, DevTools Network, enable Preserve log, perform create/edit/status/delete, inspect Headers/Payload/Response, then verify error handling. Available tools do not supply desktop interaction for that panel.
- Each student's oral understanding and historical official-starter generation/IDE-import steps are not established by current source/tests.
- Mazen personally supplied his identity and conditional permission only for patches he reviewed/approved. This new automatically implemented patch has not received his actual review. Neither his email nor a branch pointer is evidence of a contribution. Genuine personal review and independent teamwork remain required.

### Publication and Moodle — commands prepared only

No git push (including dry-run), remote Merge Request, GitLab modification or Moodle submission was executed. The configured remote is https://git.thm.de/pi2-ws2627-fr3f/todoapp-client.git; privacy, fork provenance, both students' authentication/push rights, tutor access, published HUE1 state and Moodle deadline still require external verification. If using optional Merge Requests, verify their feature/access as well.

After all missing academic/manual checks are addressed and the user chooses to publish, the user can execute these exact named-ref commands:

```powershell
cd 'C:\Users\Magic Systems\Desktop\PI2\todoapp-client'
git branch --show-current
git status
git rev-parse main
git remote get-url origin
git push -u origin HUE1:refs/heads/HUE1
```

If feature branches must also be published as exercise evidence, publish explicitly named branches under the appropriate student's account; do not use --all, --mirror, --force or any main refspec. A future genuine teammate exercise needs that student's actual reviewed branch and account, not the single-author technical branch as a substitute.

Prepared Moodle branch URL: https://git.thm.de/pi2-ws2627-fr3f/todoapp-client/-/tree/HUE1 . Verify the published content and access before submission. No assertion is made that the current remote already contains this local work.

### Explicit final verdict

Parts 2 and 3 are implemented, versioned, built, and runtime/browser tested from a fresh clone. Required files and all twelve mandatory HTTP scenarios are present. No unresolved functional defect was reproduced. Part 1 local Git integration and the authorized technical conflict exercise are complete; independent teammate contribution and joint academic participation remain unproven. Manual tool actions and seven remote checkpoints remain open. main is unchanged, all authorized work is committed to HUE1, and no remote publication occurred.

**NOT READY — ISSUES REMAIN** for full university compliance. The local technical snapshot is complete and tested, but “only push remains” would omit genuine participation and unexecuted manual/external checks.
