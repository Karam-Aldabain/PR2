> Superseded preparation status: date tests and the authorized single-author technical conflict exercise are complete. See [current audit](final-local-audit.md) and [actual conflict evidence](technical-conflict-evidence.md). Genuine independent teammate participation remains pending.

﻿# Part 1 live teamwork session

Prepared 13 November 2026. This document prepares real actions; it is not proof that the teammate contributed or a conflict occurred.

## Preserved baseline

- Original main, which must never change: `c6acd6e640ee80388ec231bc04b1f4bfaf8fd26c`.
- Common exercise base: `0af78294026e2429647aba40491b946d9ec933ed` (complete tested HUE1 solution).
- Verified backup outside repository: `C:/Users/Magic Systems/Desktop/PI2/HUE1-backup-2026-11-13T11-10-32-802Z`. All 312 copied files verified by SHA-256; manifest records paths, hashes and regenerable exclusions. Git metadata and all source/tests/docs/Wrapper are included.
- Created from that exact base: `feature/hue1-teammate-review`, `feature/hue1-conflict-karam`, `feature/hue1-conflict-mazen`.
- Preparation documentation is on `feature/hue1-teamwork-preparation`; merging it into HUE1 does not change docs/projektprofil.md or the two exercise branch bases.

The conflict branches deliberately share the original base. Do not advance either to a later HUE1 before both independent line edits are committed. Routine non-conflicting documentation merges do not count as the assignment's real conflict exercise.

## Teammate task — implement personally after confirming identity

Scope: review calendar-date validation in `todo_api/src/validation.ts`, add a meaningful boundary-case API test to `tests/api.test.mjs`, and add a concise README explanation of the observed date behavior and how to run the test. Review/update your own Team entry to your personally confirmed spelling. These are future responsibilities, not claims about original code authorship.

Suggested acceptance criteria for the independently written test:

- A due date of 2000-02-29 is accepted (century divisible by 400).
- A due date of 2100-02-29 is rejected with 400 (century not divisible by 400).
- April 31 is rejected; a valid month-end date is accepted.
- An invalid update leaves the previous resource unchanged and a subsequent valid request still succeeds.
- Use the existing isolated HTTP fixture; do not modify production date rules merely to satisfy tests.

Run `npm.cmd test` and `npm.cmd run typecheck`. Inspect actual responses and explain the Gregorian rule and the validation path in your own words. Do not claim a passing result before running the command. The code is intentionally not prewritten here: the teammate must produce/review the actual change, then explicitly approve the final diff before attribution.

On this shared laptop, finish each person's clean commit before switching branches. Existing dependencies/build outputs may remain ignored. No destructive cleanup is needed.

## Identity and commit safeguards

Karam's confirmed repository-local identity remains configured. That setting must not silently author the teammate's commit. Before a teammate commit, obtain their exact name/email and personal approval of the actual diff. Use explicit per-command identity for their commit, including matching committer identity, without changing Karam's repository-local setting:

```powershell
# Run only after the actual teammate is present and confirms these values.
$teamAuthorName = Read-Host 'Your confirmed full Git author name'
$teamAuthorEmail = Read-Host 'Your confirmed Git author email'
# Do not guess email addresses or enter Karam’s credentials for the teammate.
```

The supervised workflow will set those confirmed values with `git -c "user.name=$teamAuthorName" -c "user.email=$teamAuthorEmail" commit ...` for each approved teammate commit. Check that GIT_AUTHOR_* and GIT_COMMITTER_* environment overrides are absent or agree with that confirmed identity before execution. Local authorship does not prove GitLab authentication; each student's remote account is verified separately when authorized.

Before every commit/merge, display `git branch --show-current`, enforce the intended branch, and check main:

```powershell
$expectedMain = 'c6acd6e640ee80388ec231bc04b1f4bfaf8fd26c'
if ((git rev-parse main) -ne $expectedMain) { throw 'main changed; stop' }
git branch --show-current
```

For the review contribution, switch to `feature/hue1-teammate-review` only from a clean tree. Inspect `git status --short`, `git diff` and any untracked files, run the tests, stage only README.md and tests/api.test.mjs (plus a genuine required fix if discovered), show `git diff --cached`, obtain the teammate's final approval and commit under their confirmed identity. Record the actual hash. Do not create an empty or invented historical contribution.

## Real same-base conflict — supervised sequence

1. Both students independently choose their own replacement for the first `Projektziel:` line in docs/projektprofil.md, from the common base. Collect each wording before showing the other student's edit. Different wording is necessary; if they independently choose identical text, discuss distinct real perspectives before committing, rather than claim a conflict.
2. Karam reviews his exact wording on `feature/hue1-conflict-karam`, authorizes it and commits it using his confirmed identity. Preserve every other profile line.
3. The teammate reviews their own wording on `feature/hue1-conflict-mazen`, authorizes it and commits using their confirmed identity. Preserve every other profile line. Both commits descend from the recorded same base.
4. From clean HUE1, check the branch and main, then merge the approved Karam branch with `git merge --no-ff feature/hue1-conflict-karam`. This creates a genuine merge commit, not yet a conflict.
5. Switch to `feature/hue1-conflict-mazen`, check that exact branch and main, then `git merge HUE1`. Its independently edited first line now competes with Karam's committed line; Git must actually report a conflict before credit is given.
6. Inspect `git status`, `git diff --cc -- docs/projektprofil.md` and `git ls-files -u`. Explain HEAD (teammate's line), incoming HUE1 (Karam's line), and the original base. Record the actual competing commit hashes and literal lines.
7. Both students discuss and supply the agreed final line and rationale. Pause for that agreement; the assistant must not invent it. Resolve only the conflict, preserve other content, run `git diff --check`, stage the resolved profile, and show the final diff. The actual resolver approves and commits under their identity, completing the two-parent merge.
8. Switch to HUE1, check branch/main and merge the approved teammate conflict branch with `--no-ff`. Merge their approved review branch as well. Keep all feature branches and individual commits; never squash, reset, rebase or force-push.
9. Write a conflict evidence record only after the conflict and resolution actually exist: base SHA, branch names, each edit SHA/text, conflict inspection output, joint resolution decision, resolver merge SHA (two parents) and final HUE1 merge SHA. A prepared plan is not evidence.

These local operations establish only local teamwork/conflict evidence. The assignment also describes remote push/fetch publication; that remains a remote action requiring explicit approval.

## Verification after actual contributions

- `npm.cmd test` and `npm.cmd run typecheck` for the new validation tests; run any additional check justified by a genuine production fix.
- Profile-only changes require conflict-marker, whitespace and history verification; they do not require rebuilding unchanged Java code.
- `git ls-files -u` must be empty. Search production/docs for unresolved conflict markers.
- Verify both approved student identities in `git log --format=fuller`, real merge parents and common base.
- Execute `git branch -a`, `git log --oneline --graph --all --decorate`, `git status`, `git diff main HUE1 --stat` and verify the unchanged main SHA.
- Update docs/final-local-audit.md with evidence; do not mark teammate/conflict requirements PASS before completion. The existing technical clean-clone results remain valid for unchanged applications; verify the final contribution in a clean clone before publication.

## Publication and Moodle — not executed

1. Both students verify their own THM GitLab authentication, project membership and branch-push permission. Verify common fork/group naming, private visibility, tutor access and any optional Merge Request access.
2. Confirm the Moodle deadline. Complete manual WebStorm HTTP-client execution, browser DevTools Network inspection and each student's explanation rehearsal.
3. After all local evidence and clean-clone checks pass, obtain explicit push approval. Publish only named feature branches and HUE1, using each student's own account. Never push main or use --all/--mirror/--force.
4. Prepared HUE1 command (not permission to execute): `git push -u origin HUE1:refs/heads/HUE1`.
5. Inspect the published branch and its actual history. Submit this branch URL to Moodle only after explicit submission approval: https://git.thm.de/pi2-ws2627-fr3f/todoapp-client/-/tree/HUE1 . Local remote configuration does not establish that the URL currently exposes the complete solution.
