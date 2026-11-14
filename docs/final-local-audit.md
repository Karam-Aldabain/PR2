# Local verification and submission status

Updated 14 November 2026. Scope: HÜ1.pdf (10 pages), mandatory 1.1–1.3, 2.1–2.6 and 3.1–3.3, plus the Echo/User lecture exercises in 05-Praxisblock - Vertx.pdf (23 pages). Both original PDFs were extracted and reread during cleanup. Optional Fruit API (1.4) and hypermedia (2.7) are excluded. The separate SSH lecture is unavailable.

## Required deliverables and checks

| Requirement | Implementation / evidence | Status and limitation |
| --- | --- | --- |
| 1.1 Group fork, private visibility, member/tutor access, individual SSH and clone | README group URL; each student's actual account needed | External state not verified; local origin is not proof |
| 1.1 Original client start/functionality/sample data | [Starter observations](part1-project-start.md), [historical README](part1-readme.md), protected main | Preserved original behavior record; not proof of each student's historical setup |
| 1.1 HUE1 based on main; ignore dependencies/settings/secrets | Git ancestry, .gitignore | Locally integrated; main remains c6acd6e640ee80388ec231bc04b1f4bfaf8fd26c; publication/fetch pending |
| 1.2 Team names, additional reviewed changes and nonsquashed contributions | README; [Mazen approval](mazen-review-request.md), exact approved patch, feature history | Approved contributions preserved; authorship provenance explicit |
| 1.2 Same-base edits, actual conflict, agreed resolution | [Live conflict evidence](part1-live-conflict-evidence.md) | Student-supplied edits/approval and reported joint agreement; Git conflict/parents independently inspected by assistant |
| 1.3 Project profile, clean integration/history, fresh clone | projektprofil.md; HUE1 merges; checks below | Local history preserved; fresh published clone and tutor presentation still external |
| 2.1 Server authoritative RAM, generated IDs/timestamps/offen, immutable fields | todo_api/src/store.ts, model.ts; validation.ts; client api.ts | API tests; reload retains server data, restart resets it |
| 2.2 Six /api/todos operations, Location, empty array, PUT/PATCH/null-date semantics, idempotence | app.ts, store.ts, validation.ts; tests/api.test.mjs | Automated real-HTTP lifecycle and invalid/atomic-update checks |
| 2.2 Input/calendar/enum validation; JSON 400/404/500; recovery; no internal leakage | validation.ts, app.ts; API tests | Includes malformed URL encoding, impossible dates and captured internal-error logging |
| 2.3 Express serves root/compiled modules/Bootstrap/API | app.ts, todo.html | Static HTTP and browser checks |
| 2.4 fetch module; UI lifecycle; response.ok; 204; network errors | todo_app/src/api.ts and todoApp.ts | API/browser tests; successful responses update display cache |
| 2.5 Twelve required HTTP scenarios, generated ID reuse, recovery | tests/todo-api.http; compatibility runner | 27 sequential requests with assertions; VS Code response reference plus WebStorm scripts preserved |
| 2.6 Browser lifecycle, reload, second window, empty list, stopped-server error, Network inspection | tests/browser/todo.spec.ts; part2-demo-guide.md | Automated checks separate from user-reported manual inspection |
| 3.1 Echo/User routes and modular Java/DTO/body handling | echo-service/src/main/java; tests and HTTP fixtures | GET text/400; POST JSON UUID/email without password; error recovery |
| 3.2 Separate service, Gradle config and complete Wrapper, no nested repository | echo-service; .gitignore; README | Build output/caches ignored; Wrapper licenses retained |
| 3.3 Explain HTTP routing/body/status and Express versus Vert.x | part3-demo-guide.md | Written trace preserved; individual oral understanding not assessed |

## Evidence provenance

The user reported completing VS Code REST Client HTTP checks and Chrome DevTools Network inspection for Part 2. No screenshots or detailed manual request log were inspected by the assistant. VS Code completion is not WebStorm execution: HÜ1 section 2.5 explicitly specifies WebStorm. Perform that tool-specific check or obtain tutor acceptance; no exception is assumed. VS Code does not establish execution of the embedded WebStorm assertion scripts.

Mazen's assistant-prepared PUT test/README contribution was personally approved and committed as 78be29c, integrated as 07b5169. Preserve [approval record](mazen-review-request.md) and [exact patch](approved-mazen-review.patch); original independent implementation is not claimed.

For the later student-supplied profile exercise, common base fbbc1de, Karam edit af1480a and Mazen edit ca73b64 are retained. The real conflict was observed by the assistant, resolved under Karam as two-parent merge 49972ae and integrated as e6ffa17. Independent composition and joint discussion are participant reports, not independently observed student actions. Earlier single-author technical conflict 889a6d3 remains separately documented and is not credited as two-person participation.

Historical actual HTTP stdout and automated Chrome/CDP capture remain in docs/evidence/. They describe earlier executions; they are not new manual evidence. Current browser tests produce their own ignored report/capture.

## Cleanup verification

The cleanup changes comments and documentation only; application behavior and all test sources remain. Current execution results are recorded in [cleanup report](cleanup-report.md), including the cleaned fresh-clone verification. Earlier local clone ac5a4af passed npm installation, typecheck/build and all 9 Node groups; that earlier run is not substituted for post-cleanup checks.

## Remaining checklist

- Each student explains their contribution, the same-line conflict and joint resolution, and a full Express/Vert.x request trace. Historical official Vert.x-starter/IDE import steps are not established by final source alone.
- Verify each student's SSH/authentication, own clone, branch-push permission, required PI2-WS2627 group/shared fork, private visibility and tutor access. Optional merge-request access matters only if used.
- Complete the explicit WebStorm requirement or obtain tutor acceptance of VS Code. User-reported Chrome Network/VS Code checks remain credited within their stated scope.
- After separate authorization, publish the required named feature branches/HUE1 using appropriate student accounts, have each member fetch, and test a fresh remote HUE1 clone.
- Confirm the Moodle deadline and submit the HUE1 branch URL only with authorization. No push, Moodle submission, history rewrite, branch deletion or main change is part of cleanup.
