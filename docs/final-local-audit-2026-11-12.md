# Final local audit — Parts 1, 2 and 3

Date: 12 November 2026. This is the latest **local-only** assessment. Earlier completion percentages also included Git/team/submission requirements and must not be compared directly with these filtered counts.

Latest requested re-audit: repeated clean root/starter npm installations and builds, TypeScript checking, all seven Node groups, all three Chrome cases (18.9s), the original-starter Chrome scenario, and a clean Gradle build with five passing Java tests (31s). All 16 automated cases/scenarios passed again. Both services were started from their freshly built production outputs; all 32 .http requests passed again, including error/recovery cases. The ten-exchange Network JSON and HTTP stdout evidence were refreshed from this actual run. Restart, independent shutdown and occupied-port checks passed. Final source/ref checks found no production or Git changes, and no temporary listeners remained. No new functional defect was found. This rerun changed only this report and refreshed the two evidence files; the remaining names/manual-tool items are unchanged.

## Scope and conclusion

**Every technically executable local check in this follow-up has passed.** No unresolved functional defect was reproduced. Actual team names could not be confirmed from project files, so the active README Team section is intentionally blank. Both .http files now have executable assertions and a reusable Node runner. Real browser Network traffic was inspected automatically using Playwright and the Chrome DevTools Protocol (CDP). WebStorm execution and manual DevTools UI inspection remain NOT VERIFIED; automated evidence is not presented as manual tool use.

Git history, branches, remotes, permissions, Moodle submission and other university administration are excluded from this score. No commits, pushes, merges, branch creation or branch switching were performed. A before/after comparison of git show-ref confirms refs were unchanged. Historical Part 1 Git work is not claimed complete; it is simply outside this run's permitted local-only scope.

## Completion table

Counts are explicitly grouped reviewer checkpoints, not official university grades. Completion means verified local checkpoints divided by in-scope local checkpoints, rounded to the nearest percent. Test counts are named automated cases/scenarios: one comprehensive original-starter Chrome scenario, seven Node groups (including actual HTTP-file execution), three Playwright cases and five JUnit cases. The two unexecuted manual Part 2 checks are excluded from the automated test denominator and are separately marked NOT VERIFIED below. The strict manual checkpoints retain their earlier denominator even though the underlying Network data is now automatically verified. Passing automated tests does not imply manual tool use or full academic compliance.

| Component | Requirements Met | Tests Passed | Completion | Status |
| --- | --- | --- | --- | --- |
| Part 1 | 8/9 local | 1/1 automated | 89% | INCOMPLETE |
| Part 2 | 30/32 local | 10/10 automated | 94% | NOT VERIFIED (manual tools only) |
| Part 3 | 15/15 local | 5/5 automated | 100% | COMPLETE |
| Entire Project | 53/56 local | 16/16 automated | 95% | INCOMPLETE (names/manual evidence) |

Additional passing checks not added to the automated-case denominator: clean installs/builds, TypeScript checking, 32 live HTTP-file requests and response handlers across both services, production coexistence/restart/shutdown tests, file/link/DOM-reference inspection and Git-ref preservation. Watch startup and direct npm start/Gradle run/curl commands were verified in the preceding audit; this follow-up reran both clean builds, all tests and the compiled production entry points.

## Documents and exact requirement scope

Read HÜ1.pdf in full (10 pages) and 05-Praxisblock - Vertx.pdf in full (23 pages), root/API/historical README files and all local project guides/reports. The lecture's dice/static-handler routes are explanatory examples, not extra assigned Echo endpoints.

- Part 1: HÜ1 sections 1.1–1.3, Git/project setup. There is no third application or additional endpoint to invent. Its original browser client was inspected from the existing main archive; Part 2 deliberately evolves that client.
- Part 2: mandatory sections 2.1–2.6, existing frontend plus Node/TypeScript/Express server. Optional 2.7 is excluded.
- Part 3: sections 3.1–3.3 and the Echo/User lecture exercises. Independent Java/Vert.x service in the same repository, not an extension of the TodoStore.
- Missing supporting documents: the referenced “VL 2 - Praxisblock - Umgang mit GitLab” slides and optional Fruit-API repetition sheet are not present. The supplied HÜ1 PDF contains the mandatory Part 1 tasks. The absent optional sheet is not counted as missing application functionality. No separately titled Praxisblock 1/2 PDFs were found; this audit does not certify unknown instructions beyond the available materials.

## Part 1 — local checks

| ID | Local requirement | Result |
| --- | --- | --- |
| L1-01 | Original source/README baseline available and understood | PASS: main c6acd6e archive and preserved historical README |
| L1-02 | Original tools/dependencies/build work | PASS: original lockfile npm ci and TypeScript build |
| L1-03 | Starter UI and sample data inspected and documented | PASS: three example Todos, all statuses, original reload behavior |
| L1-04 | Existing UI interactions and input validation work | PASS: Chrome create/edit/delete, checkbox, details, dates, statistics, blank-title rejection and empty list |
| L1-05 | Required docs/projektprofil.md exists and accurately describes the project | PASS: actual project goal and relationship of all parts |
| L1-06 | README includes clone URL, prerequisites, current purpose and startup commands | PASS: local commands/build/runtime verified; remote clone operations excluded |
| L1-07 | Ignore dependencies/settings/local credentials/output while keeping config/locks | PASS: ignore checks, source/config/lock/Wrapper retained |
| L1-08 | Active README contains real group-member names | MISSING: file search found no confirmed roster; Team intentionally blank |
| L1-09 | Required local documents/structure intact; no unresolved source conflict markers | PASS: project profile and workflow docs present, no unresolved markers or index conflict entries |

Commands executed: original starter `npm.cmd ci --offline`, `npm.cmd run build`; `node .tools/part1-audit/starter-browser.mjs`. The existing starter archive was used without changing branches or creating another repository. It is not presented as a fresh remote clone.

The comprehensive Chrome scenario verified initial three-example data and statistics, local Bootstrap, blank-title validation, creation with priority/status/date, preserved expanded details, checkbox focus, editing/date removal, deletion, reload resetting original browser-local data, empty-list display and absence of uncaught page errors.

Missing local requirement: real names in README. Searched the README files, project documentation, package metadata and application/test sources. These contain no confirmed current group roster; starter labels and upstream author identities are not evidence of current membership. Historical Mitglied1/Mitglied2 labels remain only in the intentionally preserved original README. The active rendered Team section is blank. **Required user input: the full name of every actual group member.** GitLab usernames are optional helpful identifiers, not a replacement for names; email addresses are not needed. No names were inferred from filenames or unrelated personal documents. No new Part 1 application bug was found.

## Part 2 — local checks

The individual implementation requirements and file mappings are P2-01 through P2-30 in [the detailed combined audit](part2-part3-audit.md). Each was rechecked against the current source and current test results. Their 30 passing local checkpoints cover:

1. Server-authoritative collection; original domain fields/enums; server UUID/time/initial offen; immutable server fields; RAM refresh/restart behavior; separated responsibilities.
2. All six exact endpoints with correct methods/statuses; POST Location; empty collection; PUT replacement and omitted-date removal/no upsert; PATCH supplied-fields-only and null-date removal; DELETE 204/no body/404; GET safety and idempotent domain states.
3. Required trimmed strings; valid enums/calendar dates; complete PUT and nonempty validated PATCH; malformed JSON 400; consistent safe JSON 400/404/500; atomic rejected writes; logging and recovery.
4. Express root/JS/CSS delivery; relative fetch loading/CRUD; correct PUT/PATCH selection; response.ok checks and 204 handling; understandable HTTP/network errors; preserved UI/details/statistics/focus; refresh/second-window/empty/stopped-server browser behavior.
5. Complete reproducible HTTP file covering twelve assignment scenarios and ID reuse; documented setup; prepared code/HTTP walkthrough.

The two additional tool-specific local verification checkpoints remain:

| Check | Result |
| --- | --- |
| Execute tests/todo-api.http in the required WebStorm HTTP client | NOT VERIFIED for that IDE: all 27 actual requests/handlers pass under the reusable Node runner; WebStorm/ijhttp was not available at the checked command/install locations |
| Inspect methods/URLs/payloads/statuses/responses in the human browser DevTools Network panel | NOT VERIFIED for manual UI use; **automated Network inspection PASS**: ten real requests and responses captured through Playwright and CDP, with exact payload/header/status/body assertions |

Commands executed:

```powershell
npm.cmd ci --offline
npm.cmd run typecheck
npm.cmd test
npm.cmd run test:browser
node tests/run-http-files.mjs  # with both production services running
```

Results: clean install successful (82 packages); no TypeScript errors; seven Node groups passed, including actual todo-api.http execution; three Chrome cases passed in 18.3s. Both production entry points were started by the runtime harness and stopped afterward. The previously fixed malformed-URL case still returns safe 400 without changing stored data. No new functional defect was reproduced, so production code was not changed.

### Reproducible HTTP-file verification

`tests/helpers/http-file.mjs` executes the request, variable substitution and response-handler subset actually used in these files. It checks that every request has assertions and fails on HTTP/assertion errors. It does not implement or claim the whole JetBrains HTTP-client runtime. `tests/http-file.test.mjs` executes all 27 To-do requests against an isolated real Express listener as part of npm test. `tests/run-http-files.mjs` executes both files against the running production services; its package alias is `npm.cmd run test:http`.

The Echo file now includes actual response assertions for exact Echo/missing-message text, status/content type, UUID v4, matching email, only id/email response keys, safe malformed JSON and recovery. **32/32 requests passed:** 27 To-do plus five Echo. The live run output is preserved in [HTTP-file evidence](evidence/http-file-results.txt).

### Automated browser Network inspection

The new third browser case uses real UI actions for create, edit, status change and delete, then browser fetch probes for deleted/unknown resources and invalid/malformed input. It captures ten request/response exchanges through both Playwright and Chrome's Network domain; no routes are mocked in this case.

Assertions verify the relative resource targets; all five HTTP methods; exact POST/PUT/PATCH payloads; JSON Content-Type; POST 201/Location and initial status; PUT removal of omitted dueDate; PATCH status-only body; DELETE 204/empty response; and JSON errors with 400/404. Recorded statuses are 200, 201, 204, 400 and 404. The automated API suite separately tests safe 500 handling with an injected store failure; no production 500 endpoint was added.

Full request headers, payload strings, response headers/bodies and correlated CDP request IDs are preserved in [Network evidence](evidence/part2-network.json). Playwright also writes and attaches network-evidence.json under test-results. These are actual automated captures, not manually transcribed examples. The remaining manual walkthrough is specifically to open DevTools → Network, perform the UI actions, and inspect the same Headers/Payload/Response views and error display; no unseen manual action is credited as passed.

## Part 3 — local checks

P3-01 through P3-15 in [the detailed combined audit](part2-part3-audit.md) are the fifteen passing local implementation checkpoints: Java/Gradle group/artifact, compatible dependencies/JDK, Start.main setup and success message, valid Echo response, exact missing-message response, modular handlers, records, BodyHandler ordering, asPojo/Jackson, UUID/email/JSON/no-password response, safe invalid requests/recovery, independent same-root structure, complete Wrapper/ignored output, README startup and actual-code comparison guide. Git integration and live student oral assessment are excluded here.

Verified current versions: Node 24.22.1, TypeScript 6.0.3, portable Temurin JDK 25.0.5+8, Gradle 9.1.0, Vert.x Web 5.2.3, Jackson Databind 2.21.8. No machine-wide Java installation is assumed: the root README explicitly documents the portable JDK environment used below.

Commands executed from echo-service:

```powershell
$env:JAVA_HOME = (Get-ChildItem ..\.tools\jdk -Directory | Select-Object -First 1).FullName
$env:Path = "$env:JAVA_HOME\bin;$env:Path"
$env:GRADLE_USER_HOME = Join-Path (Resolve-Path ..\.tools) 'gradle-home'
java -version
javac -version
.\gradlew.bat clean build --offline --no-daemon --console=plain
```

Results: clean compile/build/distributions successful in 20s, five JUnit tests passed with no failures/errors/skips. The freshly built distribution's Start.main printed `HTTP server started on port 8888`. Both .http files were exercised against actual running services. The earlier direct curl results below were reproduced by the Node HTTP-file assertions in this follow-up:

| Request | Actual result |
| --- | --- |
| GET /echo?message=PI2 | 200 text/plain, Echo: PI2 |
| GET /echo | 400, Missing 'message' parameter |
| POST /echoUser with tests/user.json | 200 application/json, UUID plus bob@gibts.net, no password |
| POST /echoUser with tests/malformed.json | 400, safe error text |
| GET /echo?message=still-alive after malformed JSON | 200, Echo: still-alive |

Tests also verified blank/present versus absent message, decoded query strings, unique UUIDs, incomplete/empty/null/array/trailing JSON rejection, incorrect Content-Type, oversized body and continued availability. No new production defect was found; no Java source was changed.

## Whole-project and setup evidence

- Both production applications ran together on 3000 and 8888, including once via the documented npm start and Gradle run commands.
- The runtime harness executed both actual .http files (32 requests), checked packaged Java startup and responses, verified Express restart clears RAM while Java keeps running, and verified Java shutdown leaves Express running. Duplicate Java startup on occupied 8888 exited 1 with the expected bind error.
- Part 1 is documentation/Git setup, not an additional runtime daemon. Its pre-API browser implementation is historical; the current To-do interface is supplied by Part 2, as required.
- Final structural scan: 25 required files exist, 21 local Markdown links resolve and all 14 querySelector ID references used by the UI exist in the HTML. The new runner/helper files are also loaded successfully by executed tests. Both compilers resolve imports successfully.
- No TODO/FIXME/placeholder implementation was found in production sources. Test fixtures and historical documents are identified as such, not unfinished features. The real team roster is the sole missing required local content and is intentionally blank.
- No lint command is configured; lint is NOT EXECUTED, not claimed passed. The assignment does not require adding a linter.
- No undocumented application configuration was needed. Node is installed locally; the Java environment is explicitly documented. The ignored portable JDK/cache are not submission dependencies: a different machine must install the documented JDK and allow first-use dependency downloads.
- Application source hashes and Git refs match the pre-audit snapshots. No history, branch, remote or application source changes were made. All temporary npm/Gradle services and the watch process were stopped; final port check found no audit listeners on 3000/3001/8888.

## Files modified in this audit

- README.md: blank Team section; commands and precise automated/manual testing explanation.
- package.json: npm test includes the actual HTTP-file test; added test:http alias. Dependency declarations were unchanged and npm ci succeeded with the existing lockfile.
- tests/helpers/http-file.mjs, tests/http-file.test.mjs, tests/run-http-files.mjs: reusable compatibility runner, isolated To-do-file test and two-service live runner.
- tests/browser/todo.spec.ts: added actual browser/CDP Network capture and assertions.
- echo-service/tests/echo-api.http: executable response assertions on all five requests.
- docs/evidence/part2-network.json and docs/evidence/http-file-results.txt: actual saved run evidence.
- This report; ignored .tools verification outputs refreshed. Application production code, Git refs and history were preserved. No production fix was necessary because no genuine new functional bug was reproduced. The resolved gaps were repeatable HTTP-file execution and inspectable Network evidence.

## What requires manual involvement locally

1. Provide the full name of every actual group member so the blank README Team section can be completed accurately. Optional: corresponding GitLab username. No additional personal data is needed.
2. Run tests/todo-api.http in WebStorm and confirm its assertions in that IDE. Do not mistake the already-passing compatibility harness for this exact check.
3. Perform the browser DevTools Network UI walkthrough using docs/part2-demo-guide.md. The underlying methods/payloads/headers/statuses/responses are now explicitly verified and saved by automation; manual panel interaction remains unexecuted.

These are the only local blockers identified in this run. Git workflow, repository hosting and university administration are intentionally not used to lower this local score. Separately, the university assignment names THM GitLab and HUE1; GitHub is not the specified submission destination. No external submission action was taken.

## Final answers

### PASS/FAIL and manual-verification checklist

| Check | Result | Evidence type |
| --- | --- | --- |
| Part 1 install/build/original-client scenario | PASS | Automated build and Chrome scenario |
| Part 2 install/typecheck/build/seven Node groups | PASS | Automated; actual HTTP file included |
| Part 2 three Chrome cases | PASS | Automated UI and CDP Network assertions |
| Part 3 clean build/five JUnit cases | PASS | Automated real HTTP tests |
| Every .http request in both files | PASS, 32/32 | Node runner against real production services; saved stdout |
| Browser methods/payloads/headers/statuses/bodies | PASS, ten exchanges | Playwright plus CDP; saved JSON |
| Production coexistence/restart/error recovery/shutdown | PASS | Automated production smoke checks |
| Structure/links/imports/ref preservation/server cleanup | PASS | Local executable checks |
| Required actual team names in README | FAIL / missing input | No verified roster in existing files; left blank |
| Actual WebStorm HTTP-client execution | NOT VERIFIED | Manual IDE execution required; not claimed |
| Manual DevTools Network UI inspection | NOT VERIFIED | Automated protocol evidence exists; manual panel use not claimed |

All technically executable local tasks with the available tools are complete. Remaining actions require user-provided identities or manual use of the specified IDE/browser panels, not additional application implementation.

1. Part 1 100% local? **No**: README real team names are missing; the runnable starter passed.
2. Part 2 100% locally verified? **Not yet**: implementation passes, but WebStorm and manual Network-panel evidence are NOT VERIFIED.
3. Part 3 100% local? **Yes for the available in-scope local technical requirements and executed tests.**
4. All original assignment requirements satisfied? **Not certified**: local gaps above remain; Git/team/administrative requirements are outside this run.
5. Can the software run locally? **Yes**: original starter, Express UI/API and Vert.x passed; only two current server processes are needed.
6. Missing source/dependencies/assets/functionality? **None found** in the available mandatory implementation. README team identity information is missing.
7. Anything still needed locally? **The three manual items listed above.**
8. Ready to call the whole package complete excluding Git/admin? **Not yet**, because those local documentation/verification items remain. No unresolved functional defect is known, but passing finite tests cannot prove absence of all bugs.

**NO — The project is not yet fully completed locally.**
