> Historical/preparation record: local integration and fresh-clone verification have since completed. See [current audit](final-local-audit.md). Team/conflict and remote requirements remain open.

# Part 2 requirement audit

> Historical implementation report. For the subsequent combined audit, URL-error fix, current test counts and outstanding submission checkpoints, see [Part 2 and Part 3 audit](part2-part3-audit.md).

Specification: supplied HÜ1.pdf, pages 5–9, sections 2.1–2.6. The complete PDF was extracted and read locally. Optional 2.7 and Part 3 are excluded.

| Section / requirement | Implementation | Verification |
| --- | --- | --- |
| 2.1 server owns collection | todo_api/src/store.ts: per-app in-memory Map | API lifecycle and two-window browser test |
| Server-generated UUID, createdAt, initial offen | store.ts create; validation.ts rejects client overrides | API creation and invalid-field assertions |
| Preserve ID and createdAt | store.ts update | PUT lifecycle assertion; PATCH full-state comparison |
| Model and permitted German values | model.ts, validation.ts, client api.ts | Valid/invalid API cases |
| Separate HTTP, store, validation and client API | app.ts, store.ts, validation.ts, todo_app/src/api.ts | Code review and both TypeScript compilations |
| 2.2 six endpoints and exact resource paths | app.ts | Real HTTP lifecycle tests |
| Empty collection is 200 and [] | app.ts GET | API and browser empty-list tests |
| POST 201 and Location | app.ts POST | Location and generated-resource assertions |
| PUT replaces all editable fields, requires status, removes omitted dueDate, no upsert | validation.ts and store.ts update | Replacement, repeated PUT, missing fields and missing-resource tests |
| PATCH preserves omitted fields, validates every field, requires at least one, supports null date | validation.ts and store.ts update | Status-only comparison, null removal, empty/invalid PATCH tests |
| DELETE 204 without body; repeat is 404 | app.ts and store.ts | Body and missing-resource assertions |
| GET does not mutate; PUT and DELETE domain idempotence | store.ts | Repeated GET/PUT, deleted-resource requests |
| Trim nonempty strings, enums, valid calendar dates | validation.ts | Invalid primitives, empty strings, invalid enums, impossible dates, leap day |
| No partial changes on failure | validate completes before store update | GET equality after every rejected PUT/PATCH |
| Unknown and immutable fields rejected | validation.ts | 400 assertions for extra fields, id, createdAt and POST status |
| JSON errors: 400, 404, 500; no internal detail leakage | app.ts central error middleware | Malformed/oversized JSON, missing API path, injected store failure and captured server log |
| Server remains usable after failures | app.ts | Valid GET after error cases |
| 2.3 one Express server serves root, JS, CSS and API | app.ts, todo.html, package.json | HTTP content-type tests and Chrome lifecycle |
| Relative fetch URLs | todo_app/src/api.ts | Browser response waits for GET/POST/PUT/PATCH/DELETE |
| 2.4 existing interface and interactions | todoApp.ts, todo.html | Chrome create/edit/checkbox/delete, expanded details, statistics, refresh and second window |
| UI changes only after success; checks response.ok, handles 204 | api.ts and async UI handlers | HTTP rejection restores checkbox; rejected deletion retains card; DELETE succeeds without JSON parse |
| Understandable network errors in existing error area | api.ts, todoApp.ts showError | Aborted request and closed-server browser cases |
| 2.5 reproducible WebStorm sequence with captured ID and assertions | tests/todo-api.http | File reviewed; equivalent HTTP cases executed in tests/api.test.mjs; WebStorm itself not executed |
| 2.6 browser verification and startup documentation | tests/browser/todo.spec.ts, README.md | Automated Chrome integration; clean npm ci, typecheck and production build |
| Demo and explanation | docs/part2-demo-guide.md | Written code walkthrough, manual network checklist and tutor questions |

## Verification record

- Node.js 24.22.1, npm 11.19.1, Windows; locally installed Google Chrome.
- `npm.cmd ci`: successful clean dependency installation.
- `npm.cmd run typecheck`: passed for frontend and backend.
- `npm.cmd test`: production build and four API integration test groups passed.
- `npm.cmd run test:browser`: **2 passed (18.1s)**. Chrome integration tests cover the UI lifecycle and an already loaded client after its real Express listener is closed. The test closes the listener without terminating the test worker; this reproduces unavailable-server behavior without Windows child-process cleanup issues.
- `npm.cmd start`: successfully launched the compiled server; a separate HTTP request confirmed `/` returns 200 HTML and `/api/todos` returns the empty collection. The verification server was stopped afterward.
- No linter is configured; no lint result is claimed.
- WebStorm execution and a human inspection of the browser Network panel remain manual. The guide supplies the exact steps. Automated tests observe real HTTP responses and browser behavior.
- Generated JavaScript, server dist, dependencies, browser reports, local environment files and IDE files are ignored. `git diff --check` was run.

## Repository and handoff limitations

Only main and origin/main were available; work is on feature/hue1-part2 from the existing commit. No changes were pushed, merged or committed. The team must review and integrate into HUE1 before the documented fresh-clone HUE1 workflow can be used remotely. Existing Team placeholders were preserved. Genuine individual contributions, the Part 1 conflict exercise, repository privacy and tutor access cannot be fabricated or established by this implementation. The original Part 1 README is preserved verbatim in docs/part1-readme.md.

RAM data is intentionally lost on restart. There is no authentication, database, automatic cross-window synchronization or optional hypermedia extension; these are outside sections 2.1–2.6.
