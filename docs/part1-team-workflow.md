# Teil 1: gemeinsamer Git-Ablauf und Abnahme

Diese Anleitung bereitet die noch ausstehenden echten Teamaktionen gemäß HÜ1.pdf 1.1–1.3 vor. Sie wurde nicht automatisch ausgeführt. Commits, Pushes und Merges benötigen die ausdrückliche Zustimmung des Benutzers. Niemand soll unter dem Namen einer anderen Person committen oder fremde Beiträge als eigene ausgeben.

## 1. Gruppe, Zugriff und SSH einrichten

Die Übungsgruppe muss in git.thm.de ihre Gruppe PI2-WS2627-FR3F und den gemeinsamen Fork todoapp-client prüfen. Der vorhandene origin verweist auf https://git.thm.de/pi2-ws2627-fr3f/todoapp-client.git. In GitLab kontrollieren: Fork des Kurs-Starters, Sichtbarkeit privat, jedes Gruppenmitglied kann Branches pushen, zuständige Übungsleitung kann das Repository lesen und bei Verwendung von Merge Requests auch diese sehen. Merge Requests sind optional; falls verwendet, muss das Feature aktiviert sein.

Jedes Mitglied richtet seinen eigenen SSH-Key gemäß dem Vorlesungsfoliensatz ein, hinterlegt nur den öffentlichen Schlüssel in GitLab und prüft die Verbindung:

```powershell
ssh -T git@git.thm.de
git remote -v
```

Der erste SSH-Verbindungsaufbau kann eine Prüfung des offiziellen Hostschlüssels erfordern. Private Schlüssel gehören weder in die Dokumentation noch ins Repository. Der aktuelle HTTPS-origin kann unverändert bleiben; die SSH-Anmeldung ist zusätzlich nach Aufgabenblatt zu prüfen.

## 2. Bestehende Arbeit zuerst gemeinsam prüfen

Im Projektstamm:

```powershell
git status --short
git diff --stat
git diff
git ls-files --others --exclude-standard
git branch -av
```

git diff zeigt neue, unversionierte Dateien noch nicht an; diese deshalb ebenfalls öffnen und prüfen. Die bisherigen lokalen Implementierungen sind noch uncommittet. Nicht blind Branches wechseln, resetten, staschen oder pauschal alles verwerfen. Die tatsächlichen Autoren müssen ihre Änderungen prüfen, mit ihrer echten Identität nachvollziehbar committen und mit dem Team abstimmen. Keine Squash-Merges und kein Force-Push verwenden.

Der lokale HUE1-Branch wurde bereits aus main angelegt, enthält aber bislang nur den Startercommit. Zunächst den gemeinsamen Basisstand mit docs/projektprofil.md nach HUE1 übernehmen und veröffentlichen. Die vorhandene, noch nicht integrierte Anwendung darf dabei nicht verloren gehen. Die Reihenfolge und Aufteilung der aktuell gemischten Arbeiten muss das Team vor den erlaubnispflichtigen Git-Aktionen festlegen.

## 3. Echte eigene Beiträge

Jedes Mitglied erstellt einen eigenen Arbeitsbranch auf Basis desselben abgestimmten HUE1-Stands. Jedes Mitglied trägt seinen tatsächlichen Namen in der README ein und übernimmt zusätzlich eine sachliche Anpassung, etwa Clone-URL, Startanleitung, Funktionsbeschreibung oder begründete .gitignore-Ergänzung. Erst nach Prüfung mit git status und git diff committen und den eigenen Branch pushen. Anschließend die geprüften Beiträge ohne Squash nach HUE1 zusammenführen.

Die Teamnamen wurden vom Benutzer angefragt und dürfen nicht aus Starterautoren oder Dateinamen geraten werden. Der Abschnitt Team darf erst dann als erfüllt gelten, wenn die echten Gruppenmitglieder genannt und ihre Beiträge anhand der History belegbar sind.

## 4. Einen echten Konflikt reproduzierbar erzeugen

Voraussetzung: Der gemeinsame HUE1-Basisstand mit der ersten Zeile von docs/projektprofil.md ist committet und veröffentlicht. Beide beteiligten Personen arbeiten in sauberen lokalen Arbeitskopien, haben ihre Git-Identität geprüft und beginnen am exakt gleichen Commit. Die Beispiele unten benennen zwei Rollen A und B; es sind keine vorgetäuschten Benutzer oder automatisch zu erzeugenden Commits.

Beide Personen vor dem ersten Merge:

```powershell
git fetch origin
git switch HUE1
git merge --ff-only origin/HUE1
git rev-parse HEAD
```

Die ausgegebene Commit-ID vergleichen und für den Nachweis festhalten. A legt feature/part1-profil-a an, B feature/part1-profil-b; beide müssen ihre Branches vor dem ersten Merge vom gemeinsamen Ausgangscommit erstellen:

```powershell
# Person A
git switch -c feature/part1-profil-a HUE1
```

```powershell
# Person B, in der eigenen Arbeitskopie am gleichen Basiscommit
git switch -c feature/part1-profil-b HUE1
```

A ersetzt ausschließlich dieselbe erste Zeile beispielsweise durch:

> Projektziel: Wir entwickeln gemeinsam eine benutzerfreundliche TypeScript-To-do-Anwendung.

B ersetzt die erste Zeile unabhängig davon beispielsweise durch:

> Projektziel: Wir entwickeln gemeinsam eine To-do-Anwendung mit Express-API und Vert.x-Echo-Service.

Jede Person prüft und committet ihre tatsächliche Änderung selbst:

```powershell
git diff -- docs/projektprofil.md
git add docs/projektprofil.md
git diff --cached
git commit -m "Beschreibe das gemeinsame Projektziel"
```

Beide pushen den eigenen Branch; A kann seinen bereits geprüften Beitrag danach nach HUE1 mergen:

```powershell
# Person A
git push -u origin feature/part1-profil-a
git switch HUE1
git merge --no-ff feature/part1-profil-a
git push origin HUE1
```

B hat den eigenen konkurrierenden Commit bereits erstellt und bleibt auf feature/part1-profil-b. Nun:

```powershell
git push -u origin feature/part1-profil-b
git fetch origin
git merge origin/HUE1
git status
git diff --cc -- docs/projektprofil.md
```

Erwartung: ein echter Inhaltskonflikt in der ersten Zeile. Die Markierungen erklären: HEAD ist B's aktueller Branch, die Gegenseite kommt aus origin/HUE1, das inzwischen A's Änderung enthält. Keine der beiden Versionen war im gemeinsamen Basiscommit enthalten. Die Meldung allein genügt nicht als Nachweis; Basiscommit, beide Änderungscommits und die gemeinsame Auflösung festhalten.

Beide einigen sich auf eine fachlich passende gemeinsame Formulierung. B entfernt sämtliche Konfliktmarkierungen, erhält den übrigen Inhalt und übernimmt die vereinbarte Zeile. Erst danach:

```powershell
git diff --check
git add docs/projektprofil.md
git diff --cached
git commit -m "Löse den Konflikt zum gemeinsamen Projektziel"
git push origin feature/part1-profil-b
```

Der Merge-Commit muss zwei Eltern haben. Den bereinigten Branch gemeinsam prüfen und ohne Squash nach HUE1 übernehmen, zum Beispiel:

```powershell
git switch HUE1
git merge --ff-only origin/HUE1
git merge --no-ff feature/part1-profil-b
git push origin HUE1
git log --graph --decorate --oneline --all
```

Nach dem echten Ablauf einen Nachweis mit den tatsächlichen Commit-IDs, der Ursache, den beiden konkurrierenden Zeilen und der gemeinsam beschlossenen Lösung ergänzen. Diese Anleitung ist kein solcher History-Nachweis. Kein künstlicher Ersatzkonflikt in einem neuen Repository erfüllt die gemeinsame Teamaufgabe.

## 5. Frischen Clone und Abgabe prüfen

Erst nach Integration und Veröffentlichung aller drei Teile in HUE1 in einem neuen, leeren Verzeichnis:

```powershell
git clone https://git.thm.de/pi2-ws2627-fr3f/todoapp-client.git
cd todoapp-client
git switch HUE1
npm.cmd ci
npm.cmd run build
npm.cmd start
```

http://localhost:3000/ öffnen, CRUD prüfen und den Server danach stoppen. Dann mit installiertem JDK 25:

```powershell
cd echo-service
.\gradlew.bat clean build
.\gradlew.bat run
```

Die README-curl-Anfragen ausführen. In einer zweiten Shell kann Express gleichzeitig laufen. Ein tatsächlich frischer Clone von HUE1 ist erst möglich, wenn die Lösung dort committet und veröffentlicht wurde; ein Export des Startercommits oder ein Kopieren uncommitteter Dateien ersetzt diesen Nachweis nicht.

Vor Abgabe: sauberes git status, keine ungelösten Konflikte (git ls-files -u), History mit eigenen Beiträgen aller Mitglieder, echter Konflikt samt Auflösung, README mit Teamnamen/URL/Startanleitung, vorhandenes docs/projektprofil.md, privates Projekt und Tutorzugriff. Die Branch-URL zu HUE1 wird durch die Gruppe in Moodle abgegeben. Nach erfolgreicher Abnahme kann HUE1 nach main übernommen werden; vorher kein automatischer Merge nach main.

## 6. Für die Abnahme erklären

- Fork: serverseitige Projektkopie; Clone: lokale Arbeitskopie desselben gemeinsamen Forks.
- Branch: benannter Zeiger auf einen Commit; bloßes Anlegen von HUE1 übernimmt keine uncommitteten Dateien.
- Commit: geprüfter Snapshot mit Autor und Eltern; Push: Übertragung von Commits/Refs zum Remote.
- Fetch aktualisiert die lokalen Remote-Tracking-Refs; Merge verbindet Entwicklungsstände.
- Der Konflikt entstand durch unabhängige Änderungen derselben Zeile aus derselben Basis, nicht durch den Branch-Namen.
- Ein Merge ohne Squash erhält die einzelnen Beiträge und erlaubt die gemeinsame Auflösung anhand der Commit-Eltern nachzuvollziehen.
