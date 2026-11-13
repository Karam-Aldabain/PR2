# Actual technical merge-conflict evidence

Automated technical exercise authorized by Karam; all new commits authored/committed as Karam. No independently reviewed Mazen edit or joint student decision is claimed.

This is a real Git content conflict, but it does not complete the independent two-student academic exercise. Mazen has supplied his identity and conditional authorization for personally reviewed work; he has not reviewed this patch or authored either edit. His independent participation in this conflict remains pending. A later assistant-prepared date-test/README patch was personally approved by Mazen and committed separately as 78be29c; that approval does not reattribute this conflict.

| Event | Actual commit / branch |
| --- | --- |
| Common base | fb6706217ad7d420e186dd68c60865fd92a3234f |
| A branch | feature/hue1-technical-conflict-a |
| B branch | feature/hue1-technical-conflict-b |
| A edit | 81f1c1e7b2a97596a79827669e33788690f43797 |
| B edit | 75ad616c9589dc6d44d209b5239fd9e49e75b8ec |
| First HUE1 merge | 3e86c455452e51a6ba7676cc9a899829a8b7c028 |
| B resolution merge | 889a6d315cc4d9cb48b1b508fcad270709c01931 |
| Resolution parents | 75ad616c9589dc6d44d209b5239fd9e49e75b8ec, 3e86c455452e51a6ba7676cc9a899829a8b7c028 |
| Final HUE1 merge | e3c8af0daac8d6d04a15177d18890bdb09304f02 |

Only the first line of docs/projektprofil.md changed; all other content is preserved.

Base line:

> Projektziel: Wir entwickeln gemeinsam eine TypeScript-To-do-Anwendung mit einer Express-REST-API und ergänzen einen eigenständigen Java-Vert.x-Echo-Service.

A line:

> Projektziel: Wir entwickeln eine benutzerfreundliche To-do-Anwendung mit serverseitiger Express-Datenverwaltung.

B line:

> Projektziel: Wir verbinden einen TypeScript-Webclient mit einer Express-REST-API und ergänzen einen unabhängigen Java-Vert.x-Echo-Service.

Resolved line:

> Projektziel: Wir entwickeln eine benutzerfreundliche TypeScript-To-do-Anwendung mit serverseitiger Express-REST-API und ergänzen einen unabhängigen Java-Vert.x-Echo-Service.

Retain the usability emphasis from A and the explicit independent Express/Vert.x architecture from B. This technical resolution is agent-executed under Karam authorization, not evidence of a joint student discussion.

The branches were created before either edit from the recorded identical base. Karam-authorized edits were committed on both branches. A was merged into HUE1, then B merged the updated HUE1 and actually failed with a content conflict. The unmerged stage entries below were captured before resolution. The resolver commit has two parents; the resolved B branch was then merged into HUE1 without squash. No history rewrite or remote operation occurred.

Actual merge output:

```text
Auto-merging docs/projektprofil.md
CONFLICT (content): Merge conflict in docs/projektprofil.md
Automatic merge failed; fix conflicts and then commit the result.
```

Actual unmerged index entries before resolution:

```text
100644 aae0cc2ceb59a2b2e29d10a6b31079deba377dd5 1	docs/projektprofil.md
100644 34c3d3c71d58601084214fcf6026e746dcbdf575 2	docs/projektprofil.md
100644 1abb172caca00f60cff69911ed0c9f0681140f3f 3	docs/projektprofil.md
```

Reproduce history inspection without generating another conflict:

```powershell
git merge-base 81f1c1e7b2a97596a79827669e33788690f43797 75ad616c9589dc6d44d209b5239fd9e49e75b8ec
git show 81f1c1e7b2a97596a79827669e33788690f43797 -- docs/projektprofil.md
git show 75ad616c9589dc6d44d209b5239fd9e49e75b8ec -- docs/projektprofil.md
git show --format=fuller --cc 889a6d315cc4d9cb48b1b508fcad270709c01931 -- docs/projektprofil.md
git show -s --format=%P 889a6d315cc4d9cb48b1b508fcad270709c01931
git log --oneline --graph --all --decorate
```
