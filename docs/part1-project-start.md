# Teil 1: Projektstart und Ausgangsstand

## Maßgebliche Aufgabenstellung

HÜ1.pdf, Seiten 2–4, Abschnitte 1.1–1.3: GitLab-Gruppenprojekt, lokaler Start, eigene Beiträge über Branches, echter Merge-Konflikt und überprüfbare Git-Historie. Abschnitt 1.4 (Fruit-API-Wiederholung) ist ausdrücklich freiwillig. Für Teil 1 sind keine zusätzlichen REST-Endpunkte oder neuen Oberflächenelemente vorgeschrieben.

Der im Aufgabenblatt erwähnte Foliensatz „VL 2 - Praxisblock - Umgang mit GitLab“ liegt hier nicht vor. Die vollständigen verbindlichen Aufgaben für Teil 1 stehen jedoch im vorhandenen HÜ1.pdf; es fehlen keine wesentlichen Umsetzungsvorgaben. Die optionale Fruit-API-Unterlage ist nicht vorhanden und wird nicht als Pflichtaufgabe ergänzt.

## Repository und Ausgangsstand

- Gemeinsames Projekt laut vorhandenem origin: https://git.thm.de/pi2-ws2627-fr3f/todoapp-client.git
- Repositorywurzel: todoapp-client, innerhalb des geöffneten PI2-Arbeitsbereichs.
- Vorhandener main-Ausgangscommit: c6acd6e („Add Team section in Redme“).
- Die bisherigen Commits stammen aus dem Starterprojekt; sie belegen keine eigenen Beiträge der aktuellen Übungsgruppe.
- Der bisherige lokale Arbeitsbranch heißt feature/hue1-part2 und enthält noch nicht committete Arbeiten zu Teil 2 und Teil 3.
- HUE1 wurde während der Teil-1-Bearbeitung lokal am unveränderten main-Commit angelegt. Das ist nur der gemeinsame Ausgangspunkt: Die neuen Dateien sind dadurch noch nicht nach HUE1 übernommen oder veröffentlicht.
- Es wurde kein zweites Repository eingerichtet und weder main noch die bestehende Commit-Historie verändert.

Die Gruppe muss selbst bestätigen, dass origin tatsächlich ihr gemeinsamer Fork ist, das Projekt privat ist und alle Mitglieder sowie die Übungsleitung die geforderten Rechte besitzen. Eine passend aussehende URL allein beweist diese Eigenschaften nicht.

## Ursprünglicher Client aus Teil 1

Der Starterstand wurde mit git archive aus main in einen ignorierten Prüfungsordner unter .tools/part1-audit/starter exportiert. Dort wurden die ursprünglichen Lockdatei-Abhängigkeiten installiert und der ursprüngliche Build ausgeführt. Das Arbeitsverzeichnis der aktuellen Anwendung wurde dabei nicht zurückgesetzt.

Technologien: TypeScript, native DOM-APIs und lokal geladenes Bootstrap; kein zusätzliches Frontend-Framework. Der historische Start besteht aus npm ci, npm run build und dem Öffnen von todo_app/public/todo.html als Datei.

Der ursprüngliche Client bietet:

- Anlegen und Bearbeiten über einen Dialog mit Titel, Beschreibung, Priorität, Status und optionalem Fälligkeitsdatum;
- Validierung leerer Titel/Beschreibungen und ungültiger Termine;
- Statuswechsel über Checkbox beziehungsweise Bearbeitungsdialog;
- Löschen, aufklappbare Details, Statistiken und Fokusbehandlung;
- ausschließlich browserlokalen Arbeitsspeicher; eigene Änderungen verschwinden beim Neuladen.

Beim Start werden drei Beispiele erzeugt: „Hausübung vorbereiten“ (hoch, offen, Termin morgen), „TypeScript wiederholen“ (mittel, in Bearbeitung, kein Termin) und „Projekt starten“ (niedrig, erledigt, kein Termin). IDs und Zeiten werden damals im Browser erzeugt. Beim Neuladen erscheinen neue Beispielobjekte; es handelt sich nicht um persistierte Benutzerdaten.

## Heutiger Start mit Teil 2 und Teil 3

Die historische Anleitung ist in part1-readme.md unverändert erhalten. Für den aktuellen Stand gilt die Haupt-README: npm.cmd ci, npm.cmd run build, npm.cmd start und http://localhost:3000/. HTML nicht mehr direkt als Datei öffnen, da der aktuelle Client fetch gegen die Express-API verwendet.

Der aktuelle Express-Server startet mit einer leeren Sammlung. Browserneuladen erhält die Serverdaten; Serverneustart darf sie löschen. Der Java-Service wird separat aus echo-service mit dem Gradle Wrapper gestartet. Teil 1 ist die Git-/Projektgrundlage für beide Anwendungen und kein dritter Laufzeitdienst.

## Nächste Schritte

Der konkrete Ablauf für echte Teambeiträge, den Konflikt und den frischen HUE1-Clone steht in [part1-team-workflow.md](part1-team-workflow.md). Der Erfüllungsstand einschließlich echter Prüfresultate steht in [part1-completion-report.md](part1-completion-report.md). Dokumentierte Schritte sind keine Behauptung, dass die noch erforderlichen Commits, Pushes und Merges bereits ausgeführt wurden.
