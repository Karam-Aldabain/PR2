# Part 1 local teamwork continuation

Prepared 13 November 2026. This is a procedure and checklist, not evidence of completed participation. It supersedes the old live-session branch/base instructions for the next exercise. No remote commands are part of this session. Keep main at `c6acd6e640ee80388ec231bc04b1f4bfaf8fd26c`.

The existing audit maps the outstanding work to HÜ1 sections 1.1–1.3. This update uses that recorded requirement mapping; it does not claim a fresh reading of the assignment PDF. Existing names, project profile, approved contributions, feature merges and local clean-clone evidence need not be invented or repeated as new work. Mazen's approved `78be29c` contribution is already integrated. The conflict resolved in `889a6d3` is technically real but was executed under Karam's identity; it cannot prove two-student participation.

## Next genuine local exercise

Current execution record: Karam supplied his own line in this conversation and subsequently confirmed his identity and personal approval to commit it. Both new branches were created from `fbbc1dee445d3fd8508a2f9fb520daa0e1664c06`. His exact line was committed on `feature/part1-live-karam-v2` as `af1480a`, then integrated into HUE1 without squash as `fa8e5a2`. Only the first profile line changed:

> Projektziel: Entwicklung einer benutzerfreundlichen To-do-Webanwendung, mit der Benutzer ihre Aufgaben erstellen, bearbeiten, verwalten und löschen können.

`feature/part1-live-mazen-v2` remains at the common base with no new Mazen edit or attribution. Await Mazen's own wording and personal approval. No conflict or joint resolution has occurred in this new exercise. Independent authorship of his eventual wording must be confirmed by Mazen; it cannot be inferred from this record.

1. Start from clean, committed HUE1. Record `git rev-parse HUE1` as the new common base. Check `git status --short`, `git rev-parse main` and `git worktree list`. Use new branch names, for example `feature/part1-live-karam-v2` and `feature/part1-live-mazen-v2`; do not repurpose the old prepared branches or their old bases. Create both branches from this exact base before either edit is integrated. Each student should work in their own working copy or separate local worktree; no remote access is needed for the local exercise.
2. Each student independently supplies a replacement for the first `Projektziel:` line of `docs/projektprofil.md`, before viewing the other's text. Each explains the intention and changes only that line on their own branch. Collect their actual text rather than using assistant-written alternatives. Identical changes do not establish a conflict.
3. Each student inspects `git status`, `git diff -- docs/projektprofil.md` and the staged diff, then personally approves and commits their own edit with their confirmed author AND committer identity. Check identity/environment overrides; never let Karam's default identity silently attribute Mazen's work. Existing identity records do not authorize a new unreviewed patch. Record each SHA and confirm both branches' merge base equals the recorded base.
4. On clean HUE1, merge Karam's branch with `git merge --no-ff feature/part1-live-karam-v2`. On Mazen's branch, run `git merge HUE1`. Inspect the actual outcome. Only if Git reports a real content conflict, record `git status`, `git diff --cc -- docs/projektprofil.md` and `git ls-files -u`. Do not insert conflict markers manually to simulate one.
5. Both students explain base/HEAD/incoming: HEAD is Mazen's branch; incoming HUE1 contains Karam's change; the base contains neither new line. Both discuss the alternatives and supply a jointly agreed final line and rationale. Stop at this point until that real agreement is supplied. The assistant must not invent consensus.
6. The actual resolver replaces the conflicted line with the agreed wording, preserves the rest of the file, reviews `git diff --check` and the staged resolution, and approves the merge commit under their identity. Confirm its two parents with `git show -s --format=%P HEAD`. From HUE1, merge the resolved branch with `--no-ff`, preserving the individual commits. No squash, rebase, reset, branch deletion or remote operation is necessary.
7. Record the real base, branch names, literal competing lines, edit SHAs, actual conflict output, each student's confirmation, joint wording/rationale, resolver merge SHA/parents and final HUE1 merge SHA. Clearly distinguish participant reports from assistant-observed Git output. A commit author field alone is not proof of personal participation or account authentication.
8. Verify `git ls-files -u` is empty, the resolved profile has no markers, `git diff --check` passes for the new changes, both edits are ancestors of HUE1, main is unchanged and the tree is clean. For profile-only changes, no Java rebuild is needed. Verify the final integrated snapshot in a new local clone before handoff; external publication verification remains separate.

## Remaining checklist

- [ ] Both students independently supply, explain, review and approve their own profile-line changes; preserve authentic separate commits from the same base.
- [ ] Actually reproduce and inspect the resulting content conflict; jointly choose and explain the resolution; preserve its two-parent merge and integrate into HUE1.
- [ ] Update the audit with the actual participation and Git evidence, then verify the final local clone and clean HUE1 state.
- [ ] Each student rehearses their own contribution and explains branch/commit/fetch/merge/push, the conflict cause/resolution, original client behavior, Express versus Vert.x, HTTP methods/statuses and RAM lifetime. Historical starter/IDE-import activity remains unverified unless supported by the students' accounts/evidence.
- [ ] If WebStorm itself is mandatory, complete that tool-specific check or establish the tutor's acceptance of VS Code. VS Code REST Client and Chrome Network manual checks are now user-reported complete; no screenshots or detailed manual evidence have been inspected by the assistant.
- [ ] Each student verifies their own clone, SSH configuration/authentication and branch-push permission; check the required group/shared-fork provenance, private visibility and tutor access. Optional merge-request access matters only if used. Local author metadata is not remote authentication evidence.
- [ ] Later, only with explicit authorization: publish the named feature branches and HUE1 using the appropriate students' accounts; each fetches the published HUE1 and checks its preserved history. Verify a fresh remote clone builds/runs the complete solution.
- [ ] Confirm the Moodle deadline and required HUE1 branch URL; submit only with explicit authorization. No submission occurs in this session. Keep main unchanged.

Do not mark an unchecked item complete because this procedure exists. Remote-dependent requirements remain open under the current no-push/no-submission boundary.
