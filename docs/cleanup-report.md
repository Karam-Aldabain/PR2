# Cleanup record — 14 November 2026

Scope: tracked todoapp-client submission on HUE1. Verified backup before deletions: C:/Users/Magic Systems/Desktop/PI2/HUE1-backup-2026-11-14T08-07-59-644Z; 490 files SHA-256 checked, including Git metadata and all tracked deliverables. BACKUP-MANIFEST.json records regenerable exclusions. Other sibling working copies/backups and feature branches are preserved.

## Source comments

Four redundant comments removed from todo_app/src/todoApp.ts: checkbox focus (covered by helper explanation), line-break loop, disappearing delete button and dialog-reset events. One useful server/display-cache comment moved to the cache field it describes. No executable code changed. Validation/time-zone, DOM replacement/focus, password-safety and runner/tooling explanations remain. Wrapper licenses, HTTP separators/descriptions/request-name metadata and academic evidence remain unchanged. All authored Java/TypeScript/JavaScript/HTML/configuration/test files were inspected; no authored CSS file exists. Dependencies and generated output are not hand-edited.

## Deleted tracked files and reasons

- docs/final-local-audit-2026-11-12.md: Superseded pre-integration audit; current requirement mapping and verification are consolidated in final-local-audit.md; original captures retained.
- docs/final-local-audit-before-final-automation.md: Superseded intermediate audit and preparation status; no unique approval or conflict artifact is removed.
- docs/final-local-audit-before-independent-review.md: Duplicate integration/approval summary; actual approval record, exact patch and conflict evidence remain.
- docs/final-local-audit-before-integration.md: Obsolete uncommitted/starter-only findings; implementation and current history supersede them.
- docs/final-local-audit-before-mazen-approval.md: Obsolete pre-approval status; completed personal approval record and exact patch remain.
- docs/hue1-integration-handoff.md: Unexecuted preparation commands with outdated branch/state assumptions; current teamwork summary and actual history replace this plan.
- docs/part1-completion-report.md: Obsolete preparation counts and missing-name/uncommitted claims; original-client observations and current remaining requirements retained elsewhere.
- docs/part1-live-teamwork.md: Superseded preparation procedure with obsolete base/tasks; actual student conflict and approval evidence retained.
- docs/part1-local-continuation.md: Duplicate step-by-step procedure with completed and pending versions interleaved; actual evidence and concise teamwork guide replace it.
- docs/part2-compliance.md: Old checkpoint table and test counts; all mandatory Part 2 categories mapped in consolidated current audit and executable tests retained.
- docs/part3-compliance.md: Old checkpoint table/uncommitted claims; mandatory Java deliverables mapped in consolidated audit; lecture walkthrough retained.
- docs/part2-part3-audit.md: Superseded combined report; malformed-URL fix remains in source/tests; current mapping, remaining requirements and runtime verification consolidated.

Before removing these reports, their contents and references were reviewed and their bytes checked against the verified backup. Current findings were consolidated, incoming links repaired, and original Git history retained. Removed reports remain reconstructable from Git and backup. No actual approval patch, conflict record or captured HTTP/network evidence was deleted.

## Preserved deliverables and evidence

README.md (team, group clone URL, setup, API contract and separate Java start), docs/projektprofil.md, starter observations/historical README, both demonstration guides, concise teamwork guide and current audit remain. Preserve docs/mazen-review-request.md, approved-mazen-review.patch, part1-live-conflict-evidence.md, technical-conflict-evidence.md and docs/evidence/ captures. All source, tests/HTTP fixtures, npm manifest/lockfile, TypeScript configs, Playwright config, Gradle config and full licensed Wrapper remain.

Ignored .tools contains the portable verification JDK, dependency cache and historical local scripts/evidence. Its heterogeneous contents are retained as uncertain/local verification material; none is part of the submission tree. Installed dependencies and regenerated test/build outputs remain ignored. No speculative recursive cleanup or sibling-worktree deletion is performed.

## Verification

Working-copy checks passed: npm.cmd ci; npm.cmd run build; npm.cmd run typecheck; npm.cmd test (9 groups); npm.cmd run test:browser (3 Chrome tests); Gradle clean build test installDist (5 JUnit tests); npm.cmd run test:http (27 Todo plus 5 Echo requests); compiled production/static routes; curl Echo/User; invalid-request recovery; Express RAM reset on restart and independent service shutdown. Verification servers were stopped afterward.

Initial restricted browser/Gradle runs failed on local listener/cache permissions; approved execution passed without application changes. Integrity checks found 28 valid local documentation links, identical comment-stripped TypeScript output before/after cleanup, preserved approval/evidence bytes and teamwork ancestors, no unmerged entries and unchanged main. git diff --check passed. No linter is configured.

Fresh clone: C:/Users/Magic Systems/Desktop/PI2/HUE1-cleanup-verification-2026-11-14, cloned locally without hardlinks from cleaned HUE1 commit ea31da2. npm.cmd ci, build, typecheck, test (9 groups), test:browser (3 Chrome tests), Gradle clean build test installDist (5 JUnit tests), test:http, curl Echo/User, compiled static/API routes, error recovery, RAM restart and service-independence checks all passed. It built only versioned application sources; external prerequisites were Node/npm/Chrome, the existing portable JDK 25 and Gradle dependency cache. No untracked application source or generated build output was copied into it. The following documentation-only verification record adds no runtime dependency.

Runtime qualification: a pre-existing Express process on port 3000 was preserved. The default npm test:http command used that listener and the newly built Java listener on 8888. To verify cleaned application provenance independently, both working-copy and fresh-clone compiled server.js entry points were started on isolated port 3002; each passed all 27 Todo HTTP-file requests using its own compatibility runner with a base URL override, static assets and restart/reset checks. The first smoke harness encountered the pre-existing listener; its two identified verification processes were stopped, the harness was corrected, and both isolated runs completed successfully. Only the successful repeats establish the restart results. All listeners started by cleanup were stopped; the user's pre-existing process was left intact.

User-reported manual checks remain separate from assistant-executed checks; see final-local-audit.md. No remote publication or Moodle submission was performed. main remains c6acd6e640ee80388ec231bc04b1f4bfaf8fd26c; all cleanup commits use Karam's authorized identity. Individual explanation, WebStorm-specific verification/tutor acceptance and external GitLab/Moodle requirements remain open; this cleanup is not a certification of full academic acceptance.
