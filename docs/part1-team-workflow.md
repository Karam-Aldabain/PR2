# Team history and presentation

The local exercise is complete within the participant-report and Git-evidence scope recorded in [live conflict evidence](part1-live-conflict-evidence.md). Do not repeat the exercise or treat this guide as new participation evidence.

Karam and Mazen supplied different first-line project descriptions from base fbbc1de. Their commits af1480a and ca73b64 changed the same line. After Karam's edit entered HUE1, merging HUE1 into Mazen's branch caused a real conflict. HEAD contained Mazen's line; incoming HUE1 contained Karam's. Both students reported agreeing on a combined line and rationale. Karam's two-parent resolution 49972ae and integration e6ffa17 preserve both contributions without squash. The assistant executed Git operations under approved identities; identity metadata does not authenticate GitLab accounts.

For the presentation, each student should inspect and explain:

~~~powershell
git log --graph --decorate --oneline HUE1
git show af1480a -- docs/projektprofil.md
git show ca73b64 -- docs/projektprofil.md
git merge-base af1480a ca73b64
git show --cc 49972ae -- docs/projektprofil.md
git show -s --format=%P 49972ae
git status --short
git ls-files -u
git rev-parse main
~~~

Explain why the competing same-line edits conflicted, why the combined wording was chosen, and which branch each operation changed. A branch names a commit; a commit is local history; fetch updates remote-tracking refs; merge combines histories; push publishes refs. Local commits do not prove remote publication or individual authentication.

Both members must also explain their reviewed contributions, the original starter behavior, the complete application and Express/Vert.x request paths. See [Part 2 demo](part2-demo-guide.md), [Part 3 demo](part3-demo-guide.md), [current audit and remaining external checklist](final-local-audit.md). Verify group/fork/privacy/tutor access, each member's own SSH/clone/push access, eventual publication/fetch and fresh remote clone. No remote operation is authorized by this document. main stays unchanged until separately authorized after successful acceptance.
