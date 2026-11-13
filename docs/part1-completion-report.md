> Historical/preparation record: local integration and fresh-clone verification have since completed. See [current audit](final-local-audit.md). Team/conflict and remote requirements remain open.

# Part 1 completion report

Date: 12 November 2026. Authority: HÜ1.pdf pages 2–4, mandatory sections 1.1–1.3. Optional section 1.4 is excluded. Part 1 is a Git/team/project-start assignment, not a missing application service.

## Outcome

**Local preparation has been completed within the permitted scope. Overall Part 1 is not complete.** The task requires real individual contributions, a genuine conflict and resolution in shared history, GitLab permissions and a published HUE1 branch. These cannot be replaced by documentation or fabricated activity. The user explicitly prohibited commits, pushes and merges without permission; none were performed.

There are **24 grouped mandatory checkpoints** below: **8 verified satisfied, 16 pending or not verified**, giving **33% verified completion** (8/24 rounded). This is a transparent reviewer checklist, not an official course percentage or an estimate of effort. Requirements repeated in the final 1.3 checklist are counted once.

## Requirement-by-requirement assessment

| ID | Requirement | Result / evidence |
| --- | --- | --- |
| P1-01 | Each member has an SSH key and tests GitLab SSH access | NOT VERIFIED: credentials were not inspected or created; SSH test requires each member's account |
| P1-02 | Required PI2-WS2627 group exists | NOT VERIFIED: origin has group slug pi2-ws2627-fr3f, but live group metadata was not authenticated |
| P1-03 | One shared fork of the starter, private visibility | NOT VERIFIED: local URL alone does not prove fork relationship or visibility |
| P1-04 | All members can push branches; tutor has required access | NOT VERIFIED: requires GitLab account/permission review; merge requests remain optional |
| P1-05 | Every member clones the same group fork | NOT VERIFIED: only this workspace can be inspected |
| P1-06 | Local origin points to the intended group-project path | PASS: git remote -v shows https://git.thm.de/pi2-ws2627-fr3f/todoapp-client.git |
| P1-07 | Read README, install tools/dependencies and start original client | PASS: archived main starter, npm.cmd ci --offline, npm.cmd run build, Chrome file-page load |
| P1-08 | Inspect browser UI and document initial functionality/sample data | PASS: original client browser checks; docs/part1-project-start.md describes the three real examples |
| P1-09 | Create HUE1 from main | PASS: local HUE1 and main both point to c6acd6e; current workbranch unchanged |
| P1-10 | Publish HUE1 and have every member fetch it | PENDING: no push authorized; no published current solution established |
| P1-11 | Ignore dependencies, personal settings/secrets and generated output; retain config/lockfiles | PASS: existing ignore rules checked, .vscode/ added; package-lock, TypeScript configuration and Gradle Wrapper retained |
| P1-12 | Work on genuine individual branches based on HUE1 | PENDING TEAM WORK: existing feature/hue1-part2 shares the baseline, but each member's own branch/contribution is not established |
| P1-13 | Each member enters their name and makes an additional specified documentation change | PENDING USER/TEAM INPUT: real names requested; no names invented; clone URL/start/purpose/ignore documentation prepared |
| P1-14 | Review status and diff before committing | PASS for this preparation: git status, diff, untracked files and history inspected; no commit performed |
| P1-15 | Meaningful, authentic commits from every member | PENDING PERMISSION/TEAM WORK: only starter history exists; uncommitted local implementations are not member-history evidence |
| P1-16 | Merge reviewed contributions into HUE1 without squash | PENDING PERMISSION: no merge performed; exact workflow documented |
| P1-17 | Create docs/projektprofil.md with a project description | PASS for the file: real current project goal and structure added; committing it into HUE1 remains part of P1-16 |
| P1-18 | Create two own branches from the same HUE1 commit and competing changes to the same line | PENDING PERMISSION/TEAM WORK: exact first-line exercise and common-base checks prepared |
| P1-19 | Perform actual merge that produces and inspect the conflict | PENDING PERMISSION: no artificial substitute or new demonstration repository created |
| P1-20 | Agree on resolution, finish merge, push and integrate resolved branch | PENDING PERMISSION/TEAM WORK: no consensus or resolution falsely claimed |
| P1-21 | Start the complete solution from a fresh published HUE1 clone | NOT VERIFIED: starter archive was tested, but it is not a fresh clone containing the uncommitted solution |
| P1-22 | No unresolved conflict entries or conflict-marker lines in current project source | PASS: git ls-files -u empty; source/configuration scan found no unresolved marker lines |
| P1-23 | History preserves every member's contribution and real conflict/resolution | PENDING: no relevant group commits/merge history yet; original history preserved |
| P1-24 | Present individual contribution and explain local/remote changes and conflict | NOT VERIFIED for people: concrete explanation/demo workflow prepared; each member must demonstrate understanding |

## Implementation and files

- Created local branch HUE1 from main without switching away from feature/hue1-part2, changing main, or creating a commit.
- Added docs/projektprofil.md: the required actual project-profile artifact.
- Added docs/part1-project-start.md: authoritative scope, initial client capabilities, sample data and relation to Parts 2/3.
- Added docs/part1-team-workflow.md: executable team procedure after approval, SSH/GitLab checks, authentic individual work, same-base conflict exercise, resolution, fresh clone and presentation guidance.
- Added this report with explicit evidence and remaining requirements.
- Updated README: Part 1 documentation links, truthful local HUE1 status, current startup context; removed fake Team member labels without substituting guessed identities.
- Updated .gitignore to exclude personal .vscode settings; kept the existing ignore rules and lock/config files.
- Added a subsequent-status note to docs/part2-part3-audit.md so its earlier missing-HUE1 observation is not mistaken for the current local branch state.

The historical docs/part1-readme.md was preserved, including its original starter placeholders as historical material. The active README no longer presents them as actual team members. No application source, build configuration, dependencies or tests from Parts 2/3 were changed by this Part 1 work.

## Actual verification

### Original Part 1 client

Exported git archive main at c6acd6e into ignored .tools/part1-audit/starter. This keeps the original pre-API browser application separate from the current working application without modifying history or creating another repository.

- npm.cmd ci --offline: PASS, original lockfile installed three packages.
- npm.cmd run build: PASS, original TypeScript build.
- Chrome loaded the original HTML as a file with compiled JavaScript and local Bootstrap: PASS.
- Three original example Todos and all three initial statuses/statistics: PASS.
- Blank title rejected without inserting a Todo: PASS.
- Create with priority, status, description and due date: PASS.
- Expanded details preserved during status toggle; checkbox focus retained: PASS.
- Edit title and remove due date: PASS.
- Delete and empty-list/zero-statistics behavior: PASS.
- Reload clears user-created browser-local data and regenerates the three examples: PASS.
- No uncaught page errors: PASS.

Local audit evidence is retained under ignored .tools/part1-audit: starter-browser.mjs, starter-browser-result.json and starter-empty.png. These are local verification aids, not fabricated commit-history evidence or additional submission prerequisites.

### Parts 2 and 3 regression

- npm.cmd run typecheck: PASS.
- npm.cmd test: PASS, production build and all six API test groups.
- npm.cmd run test:browser: PASS, both Chrome tests in 18.0 seconds.
- echo-service/gradlew.bat clean build --offline --no-daemon --console=plain: PASS, five Java tests, no failures/errors/skips, distribution built.
- Production coexistence: PASS. The runtime audit started Express and the freshly packaged Java service together on 3000/8888, passed all 27 todo-api.http requests/response handlers in the Node compatibility harness, verified Express restart/reset and independent shutdown, and confirmed occupied-port Java startup exits 1. Both verification services were stopped afterward. This is not a WebStorm run.
- Part 2/3 source/configuration SHA-256 snapshots were compared before and after the Part 1 changes; no application changes were required.

No linter is configured. No human WebStorm, GitLab-permissions or tutor-presentation result is claimed.

## Bugs and limitations

No new application bug was discovered in the original starter or regression tests. The missing project-profile file, missing local HUE1 baseline and absent current Part 1 workflow documentation were addressed. The active README's stale HUE1 statement and fake member labels were corrected.

The missing real merge-conflict history is not a code defect that can be honestly fixed by writing a report. It needs authorized commits/merges and real team participation. The missing team names remain a required input, not permission to infer identities from downloaded filenames or starter commits.

## Final submission tasks

The full procedure is in part1-team-workflow.md. Before submission: confirm actual team names, live group/fork/privacy/tutor permissions, individual SSH and clone checks; review and authorize authentic contributions/commits; publish HUE1; perform and document the real same-line merge conflict without squash or force-push; integrate all parts; test an actual fresh HUE1 clone; then demonstrate and submit the branch URL through Moodle.

**Final verdict:** Part 1 preparation and the tested original client work, Parts 2/3 regressions pass, but Part 1 and the complete university handoff cannot be called finished until the required team/history/remote steps are actually performed. No commit, push or merge was executed.
