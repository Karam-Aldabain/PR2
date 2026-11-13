> Superseded preparation status: date tests and the authorized single-author technical conflict exercise are complete. See [current audit](final-local-audit.md) and [actual conflict evidence](technical-conflict-evidence.md). Genuine independent teammate participation remains pending.

> Historical/preparation record: local integration and fresh-clone verification have since completed. See [current audit](final-local-audit.md). Team/conflict and remote requirements remain open.

﻿# HUE1 integration handoff — 13 November 2026

This is a preparation record, not evidence that either student authored existing code. Two students worked on the same laptop. Each student must review and approve their actual changes and use their own confirmed Git name/email and account authentication. Do not infer authorship from the division below.

## Safety and verified backup

Original main: `c6acd6e640ee80388ec231bc04b1f4bfaf8fd26c`. Never commit, merge, push, reset, rebase, delete or rewrite main. All integration targets HUE1. Before every commit or merge, run `git branch --show-current` and require the intended feature branch or HUE1 respectively. Recheck main before and after each integration.

Backup: `C:/Users/Magic Systems/Desktop/PI2/HUE1-backup-2026-11-13T10-59-03-464Z`. All 110 copied files were verified by SHA-256; BACKUP-MANIFEST.json lists paths/hashes and explicit regenerable exclusions. It includes .git, every deliverable, the Wrapper JAR, and local audit scripts/evidence. Dependency/build caches, JDK downloads and temporary clone/starter output were excluded. Original files were preserved.

Prepared local branches from existing HUE1: feature/hue1-express, feature/hue1-vertx, feature/hue1-documentation. These branch pointers alone do not contain new work or establish student contributions. No branch switch, staging or commit occurred during preparation because no author name/email was configured or confirmed.

## Proposed real reviews

- Karam Samer Aldabain: review Express input validation, API lifecycle and HTTP-file assertions; make a concrete improvement or add a verified explanation of one actual request trace on feature/hue1-express.
- Alayaideh, Mazen Mohammad Yousef: review Vert.x BodyHandler/deserialization/password omission and Java HTTP tests; make a concrete improvement or add a verified explanation on feature/hue1-vertx.
- These are proposed responsibilities, not claims of original code authorship. Either student can choose the other review scope. Each must personally approve their contribution before it is attributed to them.

The integration operator must first confirm their exact Git author name/email. Then review and preserve the existing complete solution on the appropriate branch(es); commit the existing jointly developed baseline with a message that does not falsely assign earlier work. Never add a Co-authored-by trailer or switch identity without the relevant student's confirmation. Do not stage ignored directories. Review both `git diff` and untracked file contents; `git diff` alone omits untracked files.

At the current dirty state do not run the branch-switch commands below until the existing implementation has been safely reviewed/versioned. No reset, clean or discard is needed. Work on dependent package/build files must remain together so the integrated solution builds.

For an approved contribution, run interactively on its intended feature branch:

```powershell
git branch --show-current
git status --short
git diff
# Inspect untracked files too; select only reviewed paths.
$authorName = Read-Host 'Your confirmed full Git name'
$authorEmail = Read-Host 'Your confirmed Git email'
# git add <explicit reviewed paths> -- do not literally paste placeholders.
# Immediately before committing, verify the branch again:
git branch --show-current
# Then commit with per-command identity (does not change the other student's config):
git -c "user.name=$authorName" -c "user.email=$authorEmail" commit -m 'Describe the actual reviewed contribution'
```

Git author identity is not GitLab authentication. A local commit proves neither account ownership nor push permission. Each student must authenticate their own account when remote work is approved; never share passwords or private keys. No email address is to be guessed from a name or GitLab account pattern.

## Real conflict exercise after baseline integration

Once the full baseline and docs/projektprofil.md are committed to HUE1 and the working tree is clean, both students choose the same exact HUE1 base. Create both branches before either contribution is merged:

```powershell
git rev-parse main
git rev-parse HUE1
git branch feature/hue1-conflict-karam HUE1
git branch feature/hue1-conflict-mazen HUE1
```

Each student separately switches to their branch, independently changes the same first project-goal line in docs/projektprofil.md, reviews the diff and commits using their own confirmed identity and the branch check above. Do not dictate both final lines or create both commits as one student. On a shared laptop, finish the first student's commit and leave a clean tree before switching students/branches.

Integrate the first approved branch into HUE1 with an explicit merge commit; check the branch immediately before the merge:

```powershell
git switch HUE1
if ((git rev-parse main) -ne 'c6acd6e640ee80388ec231bc04b1f4bfaf8fd26c') { throw 'main changed' }
git branch --show-current
# Use the confirmed integration operator identity for the merge commit.
git merge --no-ff feature/hue1-conflict-karam
```

Then the second student, on feature/hue1-conflict-mazen, merges the updated HUE1 into their branch. Check `git branch --show-current` immediately before `git merge HUE1`. Git should report a real conflict because the two committed edits changed the same line from the same base. Inspect `git diff --cc -- docs/projektprofil.md` and agree the combined wording together. Preserve all other content, remove markers, run `git diff --check`, stage only the resolved file, check the current branch and commit as the actual resolver. Integrate that approved branch into HUE1 using `--no-ff`; never merge into main.

Record actual base, both edit commit hashes, branch names, conflicting lines, resolution rationale and both merge hashes in a conflict-evidence document. No evidence exists until these real actions occur. Local exercise evidence does not establish the assignment's remote push/fetch steps; perform those only after explicit push approval.

## Final integration and reproducibility gates

After approved feature merges, ensure a clean tree, all source/tests/docs/Wrapper versioned, and no unresolved entries (`git ls-files -u`). Execute:

```powershell
git branch -a
git log --oneline --graph --all --decorate
git status
git diff main HUE1 --stat
if ((git rev-parse main) -ne 'c6acd6e640ee80388ec231bc04b1f4bfaf8fd26c') { throw 'main changed' }
```

Clone HUE1 into a new directory outside this repository, without copying any untracked files. In that clone execute README installation/build, typecheck, npm test, browser tests and clean Gradle build/test; start Express and Vert.x and run npm run test:http against both. Use an installed JDK 25 and documented prerequisites. Never credit a copy of the dirty working tree as a clean clone.

## Remote publication — commands prepared, NOT authorized or executed

Configured origin: https://git.thm.de/pi2-ws2627-fr3f/todoapp-client.git. Confirm group fork provenance/privacy, both students' permissions/authentication, tutor access and Moodle deadline in the actual accounts. A local URL is insufficient proof. After all gates pass and explicit push approval arrives, publish only named branches. Do not use --all, --mirror, --force or any main refspec.

```powershell
git remote get-url origin
git push --dry-run origin HUE1:refs/heads/HUE1
git push -u origin HUE1:refs/heads/HUE1
```

Publish each student's feature branches as required using explicit branch refspecs, each with their account and approval. Target Moodle branch URL derived from configured origin: https://git.thm.de/pi2-ws2627-fr3f/todoapp-client/-/tree/HUE1. This URL is prepared, not remotely verified or submitted.
