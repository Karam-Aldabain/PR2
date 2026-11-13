# Todo-Verwaltung

TypeScript-To-do-Anwendung mit der bestehenden Bootstrap-Oberfläche und einer Express-REST-API (Hausübung 1, Teil 2, Abschnitte 2.1–2.6). Anlegen, Bearbeiten, Statuswechsel, Details, Statistik und Tastaturbedienung bleiben erhalten. Der Server verwaltet die Daten im RAM: Neuladen erhält sie, ein Serverneustart löscht sie. Keine Datenbank und keine Dateipersistenz.

## Team

- Karam Samer Atallah Aldabain
- Alayaideh, Mazen Mohammad Yousef

## Installation und Start (Windows / VS Code)

Voraussetzung: Node.js 24 oder neuer mit npm; getestet mit Node 24.22.1 und npm 11.19.1. In PowerShell wird npm.cmd verwendet, um Probleme mit der Ausführungsrichtlinie für npm.ps1 zu vermeiden.

```powershell
git clone https://git.thm.de/pi2-ws2627-fr3f/todoapp-client.git
cd todoapp-client
git switch HUE1
npm.cmd ci
npm.cmd run build
npm.cmd start
```

Die geprüfte Lösung wird lokal über feature/hue1-express, feature/hue1-vertx und feature/hue1-documentation in HUE1 integriert. main bleibt unverändert auf dem Startercommit c6acd6e. Ein Remote-Clone setzt voraus, dass das Team den vollständigen HUE1-Stand nach ausdrücklicher Freigabe veröffentlicht; lokale Integration allein veröffentlicht nichts.

Oberfläche: http://localhost:3000/ → API: http://localhost:3000/api/todos. Ein Server genügt; HTML nicht per Doppelklick öffnen. Mit Strg+C stoppen. Optional vor dem Start: $env:PORT = '3001'.

## Entwicklung und Prüfungen

```powershell
npm.cmd run typecheck
npm.cmd test
npm.cmd run test:browser
```

build kompiliert Client und Server. test baut und führt die automatisierten API-Tests mit dem Node-Test-Runner aus. test:browser baut und startet einen eigenen Server sowie Playwright mit lokal installiertem Google Chrome; Port 3000 und für den Serverstopp-Test Port 3001 müssen frei sein. Tests löschen ihre eigenen In-Memory-Testdaten. Es ist kein Linter konfiguriert. npm.cmd run watch kompiliert ausschließlich Clientänderungen automatisch; nach Serveränderungen neu bauen und neu starten.

## Architektur

- todo_app/src/todoApp.ts: vorhandene Darstellung, Dialoge, Statistik, Fokus und lokaler Anzeigestand.
- todo_app/src/api.ts: gebündelte fetch-Aufrufe, HTTP-/Netzwerkfehler und Behandlung von 204.
- todo_api/src/app.ts: Express-Routen, statische Dateien und zentraler JSON-Fehlerhandler.
- todo_api/src/store.ts: maßgebliche In-Memory-Sammlung, UUIDs, Erstellungszeitpunkte und Änderungen.
- todo_api/src/validation.ts: vollständige Prüfung vor Änderungen.
- todo_api/src/model.ts: Server-Datentypen; der Client besitzt entsprechende JSON-Transporttypen.

Browseraktion → fetch → Express → Validierung → TodoStore → JSON-Antwort → Anzeigestand → render(). Nur erfolgreiche Antworten verändern den lokalen Anzeigestand. Anfangs ist die Sammlung leer; es werden beim öffnen keine Beispieldaten angelegt. Mehrere Fenster greifen auf dieselbe Serverinstanz zu und laden fremde Änderungen durch Neuladen. Es gibt keine automatische Synchronisierung.

## REST-Schnittstelle

| Methode | Pfad | Erfolg |
| --- | --- | --- |
| GET | /api/todos | 200, JSON-Array, auch [] |
| GET | /api/todos/:id | 200, Todo |
| POST | /api/todos | 201, Todo und Location |
| PUT | /api/todos/:id | 200, vollständig ersetzte bearbeitbare Felder |
| PATCH | /api/todos/:id | 200, teilweise aktualisiertes Todo |
| DELETE | /api/todos/:id | 204, kein Inhalt |

JSON-Felder: title und description (getrimmt, nicht leer), priority (hoch/mittel/niedrig), status (offen/in Bearbeitung/erledigt), optional dueDate (gültiges Kalenderdatum YYYY-MM-DD). id ist eine servergenerierte UUID, createdAt ein servergenerierter ISO-Zeitpunkt.

POST enthält title, description, priority und optional dueDate; status ist immer zunächst offen. PUT benötigt title, description, priority und status; ausgelassenes dueDate entfernt den bisherigen Termin. PATCH benötigt mindestens ein bearbeitbares Feld; ausgelassene Felder bleiben erhalten, dueDate: null entfernt den Termin. null ist nur bei PATCH für dueDate erlaubt. Unbekannte Felder und serververwaltete Felder werden mit 400 abgelehnt. JSON-Anfragen verwenden Content-Type: application/json; maximal 32 KiB.

Fehlerformat: {"error":"Verständliche Fehlermeldung"}. 400 bei ungültigen Eingaben/JSON, 404 bei fehlenden Ressourcen oder unbekannten API-Pfaden, 500 bei unerwarteten Fehlern (Details nur im Serverlog). PUT erstellt keine Ressource. Wiederholtes DELETE liefert nach dem ersten Löschen 404, der Zustand bleibt gelöscht.

## HTTP-Client und Browserprüfung

Server starten und tests/todo-api.http in WebStorm mit „Run All Requests“ von oben nach unten ausführen. POST speichert die erzeugte ID als globale Variable todoId; Handler speichern Vergleichszustände. Jeder Lauf erstellt ein neues Todo und löscht es am Ende. Falls PORT geändert wurde, baseUrl anpassen. Die Datei wurde hier nicht in WebStorm ausgeführt; entsprechende Fälle wurden automatisiert über echte HTTP-Verbindungen geprüft.

`npm.cmd test` führt zusätzlich die tatsächliche todo-api.http-Datei mit ihren Antwortprüfungen gegen einen isolierten Testserver aus. Für beide .http-Dateien Express auf 3000 und Vert.x auf 8888 starten und im Projektstamm `npm.cmd run test:http` ausführen. Dieser Node-Kompatibilitätsrunner unterstützt das hier verwendete Anfrage-/Handlerformat und ist keine WebStorm-Ausführung. Der Chrome-Netzwerktest schreibt Methoden, Payloads, Header, Status und Antwortinhalte nach `test-results/.../network-evidence.json` und als Playwright-Anhang. Die Aufzeichnung verwendet echte Browseranfragen und das Chrome DevTools Protocol; sie ersetzt keine behauptete manuelle DevTools-Bedienung.

Browserablauf und Tutorfragen: [Demonstrationsanleitung](docs/part2-demo-guide.md). Nachweise je Anforderung: [Prüfbericht](docs/part2-compliance.md).

## Fehlerbehebung

- EADDRINUSE: anderen Server auf dem Port stoppen oder PORT ändern; danach die passende URL öffnen.
- Server nicht erreichbar: npm.cmd start im Projektstamm prüfen, dann neu laden/erneut versuchen.
- Fehlendes JavaScript oder Modul: npm.cmd ci und npm.cmd run build ausführen.
- Daten nach Neustart leer: erwartete RAM-Speicherung. Zum Testen erneut Todos anlegen.
- Browser-Test startet nicht: Google Chrome installieren; die Playwright-Konfiguration verwendet channel: chrome.
- HUE1 fehlt im Remote-Clone oder enthält nur den Starter: Die geprüfte Lösung ist lokal integriert. Ein Remote-Clone benötigt die ausdrücklich freigegebene Veröffentlichung von HUE1; bislang wurde nichts gepusht.

## Teil 1

Teil 1 behandelt Git und Projektstart gemäß HÜ1.pdf 1.1–1.3. Es ist kein zusätzlicher Server und verlangt keine weiteren API-Endpunkte. Die ursprüngliche README mit den damaligen Startbefehlen wurde unverändert als [historische Teil-1-README](docs/part1-readme.md) erhalten; sie beschreibt den Browserstand vor der API-Anbindung.

Der [Projektstart und Ausgangsstand](docs/part1-project-start.md) dokumentiert den tatsächlich geprüften Starter mit drei Beispieltodos und den Übergang zur heutigen Anwendung. [docs/projektprofil.md](docs/projektprofil.md) enthält das geforderte gemeinsame Projektprofil. Der [Team- und Konfliktablauf](docs/part1-team-workflow.md) beschreibt die noch durchzuführenden echten Beiträge, den Merge-Konflikt und die HUE1-Abgabe. Der [Teil-1-Erfüllungsbericht](docs/part1-completion-report.md) trennt erledigte lokale Arbeit von offenen Team-/GitLab-Schritten.

Der vollständige technische Stand ist lokal in HUE1 integriert und aus einem frischen lokalen Clone geprüft. main bleibt unverändert. Beide Teamnamen sind eingetragen; die tatsächliche Beteiligung des zweiten Mitglieds, der echte Konflikt samt Lösung und Remote-Zugriffs-/Veröffentlichungsnachweise stehen noch aus. Die Anleitung ersetzt deren Durchführung nicht. Abschnitt 1.4 (Fruit-API) und 2.7 (Hypermedia) sind freiwillig und nicht zusätzlich umgesetzt.

## Part 3 — Vert.x Echo Service

Part 3 is implemented separately in `echo-service/`. Vert.x uses port **8888** and Express uses port **3000**; each starts independently, and both can run together.

Install a **JDK 25** (for example [Eclipse Temurin](https://adoptium.net/temurin/releases/?version=25)), set `JAVA_HOME` to its installation directory, and include its `bin` directory on `PATH`. Restart the VS Code terminal after installation. A JRE alone is insufficient. Gradle 9.1.0 is pinned by the included Wrapper, so a separate Gradle installation is unnecessary. The first build needs internet access to download Gradle and Maven Central dependencies.

From the repository root in PowerShell:

```powershell
cd echo-service
java -version
javac -version
.\gradlew.bat clean build
.\gradlew.bat test
.\gradlew.bat run
```

Successful startup prints `HTTP server started on port 8888`. Keep this terminal open and use a second terminal for requests. Press **Ctrl+C** to stop. The bare `/` path has no interface; use `/echo` or `/echoUser`.

From `echo-service/`, run these Windows-compatible commands (`curl.exe` avoids PowerShell's `curl` alias; JSON fixture files avoid shell quoting differences):

```powershell
curl.exe -i "http://localhost:8888/echo?message=PI2"
curl.exe -i "http://localhost:8888/echo"
curl.exe -i -X POST "http://localhost:8888/echoUser" -H "Content-Type: application/json" --data-binary "@tests/user.json"
curl.exe -i -X POST "http://localhost:8888/echoUser" -H "Content-Type: application/json" --data-binary "@tests/malformed.json"
curl.exe -i "http://localhost:8888/echo?message=still-alive"
```

Expected results, in order: **200** `text/plain` with `Echo: PI2`; **400** with `Missing 'message' parameter`; **200** `application/json` with a generated UUID `id` and `email: bob@gibts.net` (no password); **400** for malformed JSON; **200** proving the server still responds. An empty `message` is present and returns `Echo: `, as in the lecture. User JSON requires nonblank email and password; it performs no authentication, email-address verification or password storage. Bodies exceeding 32 KiB return 413.

`Start.java` initializes Vert.x, the Router, EchoApi and the HTTP listener. `echo/api/EchoApi.java` registers handlers; `echo/dto/` contains the request and response records. JUnit tests start real HTTP listeners on an available port and verify content, statuses, UUIDs and error recovery. Results are written to `echo-service/build/reports/tests/test/index.html`. An additional HTTP-client file is provided at `echo-service/tests/echo-api.http`.

The Java service runs on the JVM and uses Vert.x Router, RoutingContext and BodyHandler. Part 2 runs TypeScript compiled to JavaScript on Node.js with Express request/response objects and `express.json()`. Both select handlers by HTTP method/path and send ordinary HTTP responses; the Echo service does not manage the To-do data or serve its frontend.

If `JAVA_HOME` is missing, point it at the JDK 25 directory (not `bin`). If port 8888 is occupied, stop the other application before retrying. On macOS/Linux use `sh ./gradlew run` instead of the batch script. Build caches and output are ignored; the Wrapper scripts, JAR and properties must be committed with the source after review.

For this existing workspace only, a checksum-verified portable Temurin JDK was downloaded for verification. It is ignored and is not included in a fresh clone. To use it immediately from `echo-service/` without a system installation:

```powershell
$env:JAVA_HOME = (Get-ChildItem ..\.tools\jdk -Directory | Select-Object -First 1).FullName
$env:Path = "$env:JAVA_HOME\bin;$env:Path"
$env:GRADLE_USER_HOME = Join-Path (Resolve-Path ..\.tools) 'gradle-home'
.\gradlew.bat run
```

See [Part 3 demonstration guide](docs/part3-demo-guide.md) and [Part 3 verification report](docs/part3-compliance.md). The reviewed solution is integrated locally into `HUE1` with preserved feature merges; `main` is unchanged. Publication and Moodle submission require explicit approval.

## Combined review

The latest [final local audit](docs/final-local-audit.md) includes the mandatory local Git history and fresh-clone requirements. It records current builds, runtime/browser checks, and outstanding team, manual-tool and remote submission checks.

The latest [Part 2 and Part 3 audit](docs/part2-part3-audit.md) records the verified functionality, the malformed-URL error fix and the outstanding submission requirements. Successful automated tests do not establish HUE1 integration, actual group participation or completion of the manual WebStorm/DevTools demonstration.
