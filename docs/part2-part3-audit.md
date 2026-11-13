> Historical/preparation record: local integration and fresh-clone verification have since completed. See [current audit](final-local-audit.md). Team/conflict and remote requirements remain open.

# Independent requirement audit: Part 2 and Part 3

> Subsequent Part 1 work created the local HUE1 baseline from main without committing or integrating the working changes. See [the Part 1 report](part1-completion-report.md) for that newer branch/setup status; the submission and team-evidence gaps below remain unresolved.

Audit date: 12 November 2026. Scope: the current working tree, not a published submission. Earlier reports describe earlier runs; this report is the current combined assessment.

## Verdict and scoring method

**The tested application functionality passes after one confirmed defect was fixed. The university submission is not complete.**

Percentages below are counts of explicitly grouped reviewer checkpoints, not official university grades, an estimate of effort remaining or a guarantee of bug-free software. Missing and unverified checkpoints do not count as satisfied. Grouping is shown below so the denominator is reviewable.

| Part | Satisfied | Missing | Not verified | Verified compliance | Overall status |
| --- | --- | --- | --- | --- | --- |
| Part 2 | 30 / 34 | 1 | 3 | 88% (30/34 rounded) | INCOMPLETE: submission and manual evidence pending |
| Part 3 | 15 / 17 | 1 | 1 | 88% (15/17 rounded) | INCOMPLETE: submission and team evidence pending |

The technical implementation checkpoints pass: Part 2 P2-01 through P2-30 and Part 3 P3-01 through P3-15. This is deliberately separate from asserting that every academic/process requirement is fulfilled.

## Requirements read and interpretation

- HÜ1.pdf pages 5–9: mandatory sections 2.1–2.6. Page 9's 2.7 hypermedia work is explicitly optional and excluded from scoring.
- HÜ1.pdf page 10: sections 3.1–3.3. Part 3 is an independent Vert.x application in the same Git repository. It does **not** extend or replace the Express API and does not share its TodoStore.
- 05-Praxisblock - Vertx.pdf: project configuration and startup on pages 6–13, modular EchoApi on page 21, records/Jackson/echoUser on page 22.
- Remaining lecture pages were also reviewed (23 pages total). Static-file and dice routes on pages 15–20 are explanatory examples, not additional assigned Echo/User endpoints; they are not counted as missing features.
- Both earlier user implementation requests, root and API README files, preserved Part 1 README, both demo guides and both compliance reports.

Original PDFs were extracted and read locally. No database, authentication, automatic cross-window updates, frontend redesign, root UI for Echo or additional Echo CRUD routes were invented as assignment requirements. The YYYY-MM-DD wire format, rejection of unknown input fields, 32 KiB body limits and nonblank Echo user fields are documented implementation choices, not additional university deliverables.

## Part 2: individual checkpoints

Paths in this table are relative to the repository root. API tests refer to `tests/api.test.mjs`; browser tests refer to `tests/browser/todo.spec.ts`.

| ID | Required behavior / evidence checkpoint | Result | Implementation and verification |
| --- | --- | --- | --- |
| P2-01 | Server owns all authoritative data | PASS | todo_api/src/store.ts Map; all browser writes call api.ts fetch |
| P2-02 | Original fields and German domain values retained | PASS | model.ts and api.ts; valid priority/status permutations tested |
| P2-03 | Server creates UUID, timestamp and initial offen | PASS | store.ts create; POST assertions and browser response |
| P2-04 | ID and creation time survive edits | PASS | store.ts update; full-state PUT/PATCH assertions, immutable-field rejection |
| P2-05 | RAM storage, refresh persistence, restart may clear | PASS | Chrome reload/second window; actual Node process restart returned [] |
| P2-06 | Client, API communication, handlers and store separated | PASS | todo_app/src/api.ts and todoApp.ts; todo_api/src/app.ts/store.ts/validation.ts; code review |
| P2-07 | GET collection is 200 JSON array, including [] | PASS | app.ts; lifecycle, browser empty state, runtime request-file sequence |
| P2-08 | GET item is 200, missing item 404 | PASS | app.ts; lifecycle and missing-resource cases |
| P2-09 | POST is 201 with created object and Location | PASS | app.ts; UUID/timestamp/status/Location assertions |
| P2-10 | PUT replaces all editable fields, removes omitted dueDate, never upserts | PASS | validation.ts/store.ts; replacement, missing-resource and repeated PUT tests |
| P2-11 | PATCH changes only supplied fields, null removes due date | PASS | validation.ts/store.ts; status-only equality, date set/remove and all editable fields tested |
| P2-12 | DELETE is 204 without body, absent item 404 | PASS | app.ts; body assertion and repeated deletion |
| P2-13 | GET safe; repeated PUT/DELETE domain-idempotent | PASS | store.ts; repeated HTTP requests and equality assertions |
| P2-14 | Required title/description strings nonempty after trimming | PASS | validation.ts; invalid types/blank strings and trimmed results |
| P2-15 | Priorities/statuses restricted; due date valid | PASS | validation.ts; all enum values, invalid enums and impossible/leap dates |
| P2-16 | PUT requires every mandatory editable field; PATCH nonempty and validates every supplied field | PASS | validation.ts; each omitted PUT field and invalid PATCH field tested |
| P2-17 | Malformed JSON returns 400 | PASS | Express parser/error middleware; automated and actual HTTP-file cases |
| P2-18 | Consistent JSON errors with 400/404/500 | PASS after fix | app.ts; invalid data, malformed URL, unknown path, missing items and injected internal failure |
| P2-19 | Rejected writes leave data intact | PASS | validate before store mutation; GET equality after every rejected update |
| P2-20 | Internal errors logged safely; server survives errors | PASS | app.ts; captured error log and safe 500; valid request after error cases |
| P2-21 | Express serves /, JavaScript and CSS alongside API | PASS | app.ts/todo.html; static content-type tests and actual production entry-point checks |
| P2-22 | Client initially loads and performs CRUD via relative fetch | PASS | api.ts and todoApp.ts; Chrome create/edit/status/delete and API responses |
| P2-23 | PUT for full form edits, PATCH for checkbox status | PASS | todoApp.ts; browser waits for actual methods, API tests inspect semantics |
| P2-24 | HTTP failure checked; successful 204 not parsed as JSON | PASS | api.ts response.ok and 204 branch; rejected response and successful delete browser cases |
| P2-25 | Network/HTTP errors understandable in existing error area | PASS | api.ts/showError; aborted request and real closed listener, rejected UI write retained |
| P2-26 | Existing details, statistics, dialog and focus behavior preserved | PASS | todoApp.ts/todo.html; Chrome checks details remain open, stats and checkbox focus |
| P2-27 | Empty list, refresh, second window and stopped-server scenarios work | PASS | both Chrome tests, real process restart and independent-server runtime checks |
| P2-28 | tests/todo-api.http covers all 12 scenarios, reuses ID, verifies state/recovery | PASS for artifact and sequence | all 27 requests and their response handlers executed by local Node compatibility harness; IDE execution separate below |
| P2-29 | README contains prerequisites, install/build/start commands and URLs | PASS for local source instructions | clean npm ci, typecheck/build, compiled entry point and asset checks; published HUE1 clone blocked by P2-33 |
| P2-30 | A complete UI/HTTP/code action is prepared for explanation | PASS for documentation | docs/part2-demo-guide.md; actual route/store/client code reviewed |
| P2-31 | Required WebStorm HTTP-client use is demonstrated | NOT VERIFIED | WebStorm was not executed; compatibility harness is useful evidence but not the specified IDE |
| P2-32 | Human browser DevTools Network inspection is completed | NOT VERIFIED | automated Chrome behavior and real HTTP communication pass; no human DevTools demonstration is claimed |
| P2-33 | Feature work integrated into HUE1 for shared submission | MISSING | current branch feature/hue1-part2; no local or cached origin/HUE1; implementation files uncommitted/untracked |
| P2-34 | All group members visibly participate and can explain the complete result | NOT VERIFIED | existing history does not establish these new contributions; README still contains team placeholders; individual understanding requires live review |

## Part 3: individual checkpoints

| ID | Required behavior / evidence checkpoint | Result | Implementation and verification |
| --- | --- | --- | --- |
| P3-01 | Java Gradle project with requested group/artifact | PASS | echo-service/build.gradle and settings.gradle; compiled/distributed echo-server 1.0.0 |
| P3-02 | Compatible JDK, Vert.x Web and lecture Jackson dependency | PASS | JDK 25.0.5+8, Gradle 9.1.0, Vert.x Web 5.2.3, Jackson 2.21.8; clean real build |
| P3-03 | Start.main creates Vertx, Router and EchoApi, listens on 8888, prints success | PASS | Start.java; packaged production startup log; occupied-port start exited 1 with safe error |
| P3-04 | GET /echo reads message and returns 200 Echo text | PASS | EchoApi.handleEcho; JUnit and production runtime requests |
| P3-05 | Missing message returns exact lecture 400 text | PASS | JUnit and runtime; empty provided message correctly differs from missing |
| P3-06 | appendRouting and handleEcho in separate echo/api class | PASS | EchoApi.java; Start only initializes and starts server |
| P3-07 | UserRequest and UserResponse Java records in echo/dto | PASS | record source reviewed; live Jackson conversion |
| P3-08 | POST /echoUser registers BodyHandler first | PASS | appendRouting; valid/invalid bodies and size-limit test |
| P3-09 | User JSON deserialized with asPojo(UserRequest.class) | PASS | EchoApi.java; JUnit fixtures including malformed/trailing JSON |
| P3-10 | Response UUID/email, Json.encode, JSON content type, status 200, password excluded | PASS | exact response key set, UUID validity/uniqueness, email and password absence assertions |
| P3-11 | App started and real HTTP responses checked, invalid request recovery | PASS | five JUnit tests plus packaged runtime checks; normal console contains expected startup only |
| P3-12 | Independent application inside same repository, no nested .git | PASS | folder scan; production processes run together; stopping either leaves other working |
| P3-13 | Source/config/Wrapper present; generated output and IDE files excluded | PASS for working-tree artifacts | gradlew, gradlew.bat, wrapper JAR/properties reviewed; build/.gradle/.tools ignored; not yet committed (P3-16) |
| P3-14 | Root README explains location, Java requirement, start/build/test | PASS | Part 3 README section; commands/build and portable-JDK instructions verified |
| P3-15 | Actual Express and Vert.x route walkthrough/comparison prepared | PASS for documentation | docs/part3-demo-guide.md covers method/path, data/body, status, runtime and structure with ten questions |
| P3-16 | Completed implementation integrated into HUE1 | MISSING | same branch/uncommitted handoff gap as P2-33 |
| P3-17 | Group can present and explain the comparison and implementation | NOT VERIFIED | written guide is prepared; a live explanation by each member cannot be established by automated tests |

## Confirmed defect and direct fix

**Malformed URL encoding incorrectly classified as an internal error (Part 2).**

Before the fix, GET `/api/todos/%ZZ` and `/api/todos/%E0%A4%A` produced HTTP 500. Express's parameter decoder raised URIError with status 400, but the central handler treated it as an unexpected failure. This is invalid client input, not an internal server failure.

`todo_api/src/app.ts` now maps URIError to 400 with `{ "error": "Ungültige URL-Kodierung." }`. The new API regression test verifies both malformed paths, safe JSON error output, no data mutation and continued collection availability. All API tests pass after the fix.

No Part 3 production-code defect was reproduced. Additional tests confirmed trailing garbage/extra JSON is rejected and occupied-port startup fails safely. Checkbox focus restoration also passed; it was not changed. The root README's obsolete claim that Part 3 was not implemented and two spelling errors were corrected without removing earlier documentation.

## Actual test execution

| Command / check | Result |
| --- | --- |
| npm.cmd ci | PASS; 82 packages installed from lockfile |
| npm.cmd run typecheck | PASS; client and API TypeScript |
| npm.cmd test | PASS; production build and 6 real-HTTP API test groups |
| npm.cmd run test:browser | PASS; 2 Chrome integration tests, including actual stopped listener and status-checkbox focus |
| gradlew.bat clean build --offline --no-daemon --console=plain | PASS with cached dependencies; 5 JUnit tests, 0 failures/errors/skips; distributions built |
| Actual todo-api.http sequence | PASS; 27 requests/response handlers through Node compatibility harness, NOT a WebStorm execution |
| Compiled Express server.ts entry point | PASS; root HTML, compiled modules, local Bootstrap and API |
| Packaged Java distribution's Start.main entry point | PASS; exact startup message and Echo/User responses |
| Both production applications together | PASS; ports 3000/8888, no cross-runtime dependency |
| Express process restart | PASS; collection becomes [] while Java remains available |
| Java shutdown while Express stays up | PASS; Express API continues returning 200 |
| Duplicate Java startup with occupied 8888 | PASS; exits 1 and prints expected bind failure; original servers stay healthy |
| Console review | PASS; only startup lines during normal smoke run; expected bind error isolated to deliberate duplicate-start case |
| Git/ignore/nested repository checks | source uncommitted; generated files ignored; no nested echo-service/.git |

The first Gradle attempt in the restricted sandbox failed with AccessDeniedException on its cached Vert.x JAR. The same clean build passed under approved permissions; no dependency or application workaround was needed. The reported tests include the successful repeat, not a claim that the denied run passed. No linter is configured, so no lint result is claimed.

The local runtime harness and its console summary are retained under ignored `.tools/audit-runtime.mjs` and `.tools/audit-runtime-results.json` for this workspace. They are audit tools, not a portable test prerequisite; the checked-in-intended API/JUnit/browser sources remain the reproducible project tests. Java's standard test report is in echo-service/build/reports/tests/test/index.html.

## Remaining submission work and uncertainty

1. Review and commit the intended sources, tests, documentation and complete Gradle Wrapper. Files merely present in the working tree are not included in a Git submission.
2. Integrate the reviewed feature work into HUE1 and publish it to the shared repository. Prior instructions prohibit automatic commit/push/merge, so this audit did not perform them.
3. Test the README workflow from an actual fresh clone of the published HUE1 branch. Clean dependency installation/build in this working tree passed, but the remote submission workflow cannot pass with this uncommitted implementation.
4. Run tests/todo-api.http in WebStorm and perform the requested DevTools Network demonstration. The actual HTTP sequence and automated browser behavior are already verified; the specific manual tools have not been used here.
5. Replace team-name placeholders with real contributors, ensure genuine contributions are recorded, and have every member explain both implementations. Do not manufacture commit history.
6. Repository privacy, tutor access and remote branch contents were not checked through GitLab; current cached local refs cannot establish live remote state.

No unresolved functional defect is known in the tested requirements after the URL fix. This is not a proof that no bugs exist. In particular, manual IDE behavior, published-clone readiness and individual student understanding remain outside the verified evidence. **Do not submit this as “100% finished” until those handoff requirements are resolved.**
