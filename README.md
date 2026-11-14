# Todo-Verwaltung und Vert.x-Echo-Service

THM Praktische Informatik 2, Hausübung 1: TypeScript-Webclient mit Bootstrap und Express-REST-API sowie ein eigenständiger Java-Vert.x-Service. Todos unterstützen Anlegen, Bearbeiten, Statuswechsel, Löschen, Details, Statistik und Tastaturbedienung. Der Express-Server hält die Daten im RAM: Neuladen erhält sie, ein Serverneustart setzt sie zurück.

## Team

- Karam Samer Atallah Aldabain — GitLab: ksaa11
- Mazen Mohammad Yousef Alayaideh — GitLab: mmya68

## Voraussetzungen und Express-Start

Node.js 24 oder neuer mit npm, für Java ein JDK 25 mit JAVA_HOME und bin im PATH. Der Gradle Wrapper ist enthalten; der erste Java-Build benötigt Internetzugriff. Browsertests benötigen installiertes Google Chrome. In PowerShell npm.cmd verwenden; unter macOS/Linux npm und sh ./gradlew verwenden.

~~~powershell
git clone https://git.thm.de/pi2-ws2627-fr3f/todoapp-client.git
cd todoapp-client
git switch HUE1
npm.cmd ci
npm.cmd run build
npm.cmd start
~~~

Oberfläche: http://localhost:3000/, API: http://localhost:3000/api/todos. HTML über den Server öffnen. Optional vor dem Start: $env:PORT = '3002'. Mit Strg+C stoppen. HUE1 ist lokal integriert; die Veröffentlichung ist ein separater Schritt.

## Vert.x starten und prüfen

Vert.x läuft unabhängig auf Port 8888. Aus dem Projektstamm:

~~~powershell
cd echo-service
java -version
javac -version
.\gradlew.bat clean build
.\gradlew.bat run
~~~

Nach „HTTP server started on port 8888“ in einem zweiten Terminal im Ordner echo-service:

~~~powershell
curl.exe -i "http://localhost:8888/echo?message=PI2"
curl.exe -i "http://localhost:8888/echo"
curl.exe -i -X POST "http://localhost:8888/echoUser" -H "Content-Type: application/json" --data-binary "@tests/user.json"
curl.exe -i -X POST "http://localhost:8888/echoUser" -H "Content-Type: application/json" --data-binary "@tests/malformed.json"
curl.exe -i "http://localhost:8888/echo?message=still-alive"
~~~

Erwartet: 200 „Echo: PI2“; 400 „Missing 'message' parameter“; 200 JSON mit UUID/id und email (ohne Passwort); 400 für fehlerhaftes JSON; anschließend 200. Der Service speichert keine Benutzerdaten und führt keine Anmeldung aus. / hat keine Oberfläche. Beide Anwendungen können gleichzeitig laufen.

## Tests und Entwicklung

Im Projektstamm:

~~~powershell
npm.cmd run build
npm.cmd run typecheck
npm.cmd test
npm.cmd run test:browser
npm.cmd run test:http
~~~

test baut und prüft API sowie die tatsächliche Todo-HTTP-Datei; test:browser startet eigene Listener auf 127.0.0.1:3000/3001 und prüft Chrome einschließlich Fehlerfällen und Netzwerkverkehr. Diese Ports müssen frei sein. test:http benötigt laufendes Express auf 3000 und Vert.x auf 8888; es führt beide HTTP-Dateien mit einem Node-Kompatibilitätsrunner aus. Es ist keine WebStorm-Ausführung. Java-Tests: im Ordner echo-service .\gradlew.bat test; Bericht unter build/reports/tests/test/index.html. npm.cmd run watch kompiliert Clientänderungen; nach Serveränderungen neu bauen und starten.

tests/todo-api.http gemäß Aufgabenblatt in WebStorm von oben nach unten ausführen. Die POST-Antwort speichert todoId und Vergleichszustände über client.global für die Folgeanfragen. In VS Code REST Client zuerst die benannte Create-Anfrage ausführen; @todoId liest deren Antwort-ID. Die eingebetteten client.test-Skripte sind für WebStorm. Bei anderem Port baseUrl anpassen. Jeder vollständige Lauf erstellt und löscht sein eigenes Todo.

## Schnittstelle und Struktur

| Methode | Pfad | Erfolg |
| --- | --- | --- |
| GET | /api/todos | 200 JSON-Array, auch [] |
| GET | /api/todos/:id | 200 Todo |
| POST | /api/todos | 201 Todo und Location |
| PUT | /api/todos/:id | 200 vollständiger Ersatz |
| PATCH | /api/todos/:id | 200 teilweise Änderung |
| DELETE | /api/todos/:id | 204 ohne Inhalt |

title und description sind getrimmte, nicht leere Zeichenketten; priority ist hoch/mittel/niedrig, status offen/in Bearbeitung/erledigt. dueDate ist optional und ein echtes Kalenderdatum YYYY-MM-DD. IDs, createdAt und anfänglich offen vergibt der Server. PUT verlangt alle bearbeitbaren Pflichtfelder einschließlich status; ein ausgelassener Termin wird entfernt. PATCH prüft mindestens ein bearbeitbares Feld; dueDate: null entfernt den Termin. Unbekannte/serververwaltete Felder werden abgelehnt. Kalender-Grenzfälle wie 2000-02-29 versus 2100-02-29 und ungültige Monatsenden werden getestet; ungültige Änderungen bleiben atomar.

JSON-Anfragen verwenden Content-Type: application/json (maximal 32 KiB). Fehlerformat: {"error":"Fehlermeldung"}; 400 bei ungültigen Eingaben/JSON, 404 bei fehlenden Ressourcen/Pfaden, 500 bei internen Fehlern ohne interne Details in der Antwort. GET verändert nichts; wiederholtes PUT bleibt fachlich gleich; wiederholtes DELETE kann 404 liefern, die Ressource bleibt gelöscht.

- todo_app/src/: Darstellung und gebündelte fetch-Aufrufe; todo_app/public/: HTML und generierte ES-Module.
- todo_api/src/: app.ts für HTTP/static, store.ts für die RAM-Map, validation.ts für Eingaben, model.ts für Typen, server.ts als Einstiegspunkt.
- echo-service/: eigener Gradle-Build, Start.java, EchoApi.java und UserRequest/UserResponse-Records.
- tests/: API-, HTTP-Datei- und Browserprüfungen. Abhängigkeiten, Build-Ausgaben, IDE-Dateien und lokale Werkzeuge sind ignoriert.

## Projektstart und Abnahme

Der ursprüngliche main-Client verwaltete Todos ausschließlich im Browser-RAM und erzeugte drei Beispiele: „Hausübung vorbereiten“ (hoch/offen, Termin morgen), „TypeScript wiederholen“ (mittel/in Bearbeitung) und „Projekt starten“ (niedrig/erledigt), beide ohne Termin. Er bot bereits Dialoge, Bearbeiten, Checkbox, Löschen, Details, Statistik und Fokusbehandlung. Neuladen setzte diesen Browserbestand zurück. Der aktuelle Express-Stand startet leer und ist serverseitig maßgeblich; ein Browserfenster sieht fremde Änderungen nach Neuladen.

Zur Browser-Demonstration: Network öffnen, Liste laden, Todo anlegen, neu laden, in einem zweiten Fenster prüfen, bearbeiten (PUT), Checkbox ändern (PATCH), löschen (204), Fehleranfragen zeigen. Methoden, URLs, Payloads, Location, Status und Antworten erklären. Bei geöffnetem Client Express stoppen und eine Aktion versuchen: verständlicher Fehler statt lokaler Erfolg; nach Neustart ist der RAM leer. fetch benötigt response.ok für HTTP-Fehler; 204 wird nicht als JSON gelesen.

Express-Trace: UI → todo_app/src/api.ts fetch → express.json() → app.post('/api/todos') → validate → TodoStore.create → Location/201 JSON → Anzeige. Vert.x-Trace: Start.main initialisiert Vertx/Router/EchoApi → POST /echoUser → BodyHandler → rc.body().asPojo(UserRequest.class) → Feldprüfung → UUID/UserResponse → Json.encode/200 JSON. Beide nutzen Methoden, Pfade, Header und Status; Express läuft als JavaScript auf Node.js, Vert.x als Java auf der JVM. Nur der Todo-Service besitzt einen Datenbestand. Passwortfelder werden weder gespeichert noch zurückgegeben; Event-Loop-Handler dürfen nicht durch lange/blockierende Arbeit aufgehalten werden.

[Projektprofil](docs/projektprofil.md) und [Zusammenarbeit, Konflikt und Herkunft](docs/part1-live-conflict-evidence.md) dokumentieren die Git-Aufgabe und KI-Unterstützung. Für die Abnahme muss jedes Mitglied eigene Beiträge, Konfliktursache/-lösung und beide Anfragepfade erklären können. Optional sind Fruit API (1.4) und Hypermedia (2.7).

Vor Veröffentlichung: gemeinsamer privater Gruppen-Fork, Tutorzugriff und individuelle SSH-/Clone-/Push-Berechtigungen prüfen; HUE1 veröffentlichen und von allen Mitgliedern holen; frischen veröffentlichten Clone starten; Moodle-Frist und HUE1-Branch-URL prüfen. Diese externen Schritte sind nicht durch lokale Commits belegt. main bleibt bis zur gesonderten Freigabe nach Abnahme unverändert. Bei EADDRINUSE Portbelegung prüfen; bei fehlendem Java JAVA_HOME auf das JDK-Verzeichnis setzen.
