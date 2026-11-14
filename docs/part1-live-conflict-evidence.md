# Zusammenarbeit und Merge-Konflikt

## Beiträge und KI-Unterstützung

Die Anwendung, Tests und Dokumentation wurden mit Codex-Unterstützung erstellt und bearbeitet. Git-Operationen wurden vom Assistenten unter den freigegebenen Identitäten ausgeführt. Eigene Formulierungen, persönliche Prüfungen und gemeinsame Entscheidungen sind Teilnehmerangaben; Git-Metadaten authentifizieren weder die Person am Gerät noch ein GitLab-Konto. Die individuelle Erklärung des Gesamtergebnisses bleibt erforderlich.

Mazen bestätigte für den assistentenvorbereiteten PUT-Kalendertest und README-Zusatz ausdrücklich: „I personally reviewed and approve this exact patch and attribution“. Commit 78be29ca1bc74ecbddbd0044f7684b9d4966640a (Autor und Committer Mazen), Integration 07b5169. Eigenständige Implementierung dieses Patches wird nicht behauptet. Der ursprüngliche genehmigte Patch ist unter 373a934:docs/approved-mazen-review.patch erhalten; SHA-256 01dc42da64f7c48381beb6a2fe9dec2c5f4e9b575f209062fa53e2bac9282ca7. Der Test bleibt in tests/api.test.mjs.

## Tatsächlicher Konflikt

| Schritt | Commit |
| --- | --- |
| Gemeinsame HUE1-Basis beider Branches | fbbc1dee445d3fd8508a2f9fb520daa0e1664c06 |
| Karam: feature/part1-live-karam-v2 | af1480a |
| Karam nach HUE1 integriert | fa8e5a2 |
| Mazen: feature/part1-live-mazen-v2 | ca73b64 |
| HUE1 beim Merge in Mazens Branch | 0dcda52 |
| Auflösung unter Karams Identität | 49972ae |
| Bereinigten Branch nach HUE1 integriert | e6ffa17 |

Karam lieferte und genehmigte:

> Projektziel: Entwicklung einer benutzerfreundlichen To-do-Webanwendung, mit der Benutzer ihre Aufgaben erstellen, bearbeiten, verwalten und löschen können.

Mazen lieferte und genehmigte laut Gespräch:

> Projektziel: Implementierung einer webbasierten Aufgabenverwaltung mit einer REST-API, die eine einfache und zuverlässige Organisation von Aufgaben ermöglicht.

Beide Branches änderten dieselbe erste Zeile von docs/projektprofil.md aus derselben Basis. git merge HUE1 auf Mazens Branch meldete tatsächlich einen Inhaltskonflikt. HEAD war Mazens Zeile, incoming HUE1 Karams Zeile. Beide Studierenden bestätigten die gemeinsame Fassung und die Begründung; Karam genehmigte den Auflösungscommit. Diese Diskussion wurde nicht unabhängig beobachtet.

> Projektziel: Entwicklung einer benutzerfreundlichen To-do-Webanwendung mit einer REST-API, die es Benutzern ermöglicht, Aufgaben einfach zu erstellen, zu bearbeiten, zu organisieren und zu löschen.

Begründung laut Teilnehmern: benutzerfreundliche Oberfläche aus Karams Vorschlag mit der REST-API-Funktionalität aus Mazens Vorschlag verbinden. Der übrige Profilinhalt blieb erhalten. 49972ae hat die Eltern ca73b64 und 0dcda52; e6ffa17 integriert ohne Squash. Es gab keinen Force-Push oder History-Rewrite. Ein früherer technischer Konflikt 889a6d3 wurde allein unter Karam automatisiert und gilt nicht als Zwei-Personen-Nachweis.

History prüfen und den ursprünglichen Konflikt ohne Änderung der Arbeitskopie reproduzieren:

~~~powershell
git log --graph --oneline HUE1
git show af1480a -- docs/projektprofil.md
git show ca73b64 -- docs/projektprofil.md
git merge-base af1480a ca73b64
git show -s --format=%P 49972ae
git merge-tree --write-tree "49972ae^1" "49972ae^2"
git show --cc 49972ae -- docs/projektprofil.md
~~~

merge-tree liefert hier erwartungsgemäß Exitcode 1 und „CONFLICT (content): Merge conflict in docs/projektprofil.md“. Das ist die historische Konkurrenz, kein ungelöster Konflikt in HUE1. Alle genannten Beiträge und Merge-Commits bleiben erreichbar. Commit ist lokal, Merge kombiniert lokale History, Fetch holt entfernte Stände und Push veröffentlicht sie; die lokalen Nachweise ersetzen keine individuellen Remote-Schritte.

## Manuelle Prüfungen

Der Benutzer meldete VS-Code-REST-Client-Prüfungen und Chrome-DevTools-Network-Inspektion für Teil 2 als abgeschlossen. Screenshots oder detaillierte manuelle Protokolle wurden nicht eingesehen. Automatisierte Node-/Chrome-/JUnit-Prüfungen sind davon getrennt. Abschnitt 2.5 nennt ausdrücklich WebStorm; dessen Ausführung oder die Akzeptanz von VS Code durch die Übungsleitung bleibt offen. Ebenso nicht lokal belegt: individuelle mündliche Erklärung, historische Starter-/IDE-Einrichtung und externe GitLab-/Moodle-Schritte.
