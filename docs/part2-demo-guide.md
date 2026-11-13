# Teil 2 vorführen

1. Im Projektstamm npm.cmd ci, npm.cmd run build, npm.cmd start ausführen. http://localhost:3000 öffnen. Die zunächst leere Liste und Statistik zeigen.
2. Entwicklertools → Netzwerk öffnen, nach /api/todos filtern. Neues Todo mit Titel, Beschreibung, Priorität und Termin erstellen. POST-JSON, Status 201, Location und Antwort zeigen: UUID, createdAt und offen stammen vom Server.
3. Seite neu laden: GET liefert dasselbe Todo. Zweites Fenster öffnen. Im ersten Fenster bearbeiten, dann das zweite neu laden: derselbe Serverbestand erscheint.
4. Bearbeiten öffnet ein aktuelles Todo per GET. Titel, Status und Termin ändern und speichern. PUT überträgt alle Pflichtfelder; ein leerer Termin wird ausgelassen und dadurch entfernt.
5. Checkbox betätigen: PATCH enthält ausschließlich status. ID, createdAt, Titel und Beschreibung bleiben gleich. Details und Statistik zeigen.
6. tests/todo-api.http in WebStorm öffnen und die Reihenfolge ausführen. PATCH mit dueDate: null entfernt den Termin. Ungültiges PUT/PATCH liefert 400; GET zeigt den unveränderten Zustand. Fehlerhaftes JSON und unbekannte API-Pfade zeigen.
7. Löschen: DELETE liefert 204 ohne JSON-Inhalt. GET derselben ID liefert danach 404. Leere Liste zeigen.
8. Bei offenem Client Server mit Strg+C stoppen. Ein Todo anlegen oder einen vorhandenen Eintrag ändern: verständlicher Fehler im vorhandenen Dialogbereich; keine erfolgreiche lokale Änderung. Server neu starten, Seite laden: Sammlung wieder leer.

## Code erklären

Eine Checkbox ruft TodoManager.setStatus auf. api.patch sendet fetch mit PATCH und JSON. Express findet die Route anhand Methode und Pfad. validate prüft alle Felder, bevor TodoStore.update den neuen Zustand speichert. Die Antwort enthält das aktualisierte Todo. Erst danach ersetzt der Client seinen Anzeigestand und rendert die Karten neu.

- Warum bleibt ein Todo beim Neuladen erhalten? Der Browser lädt nur neu; der Node-Prozess mit seiner Map läuft weiter.
- Warum geht es beim Serverneustart verloren? Die Map lebt ausschließlich im Prozessspeicher.
- PUT versus PATCH? PUT ersetzt alle bearbeitbaren Eigenschaften; PATCH ändert nur übertragene Eigenschaften. Ein ausgelassener PUT-Termin wird gelöscht; PATCH benötigt dafür explizit null.
- Warum ist DELETE idempotent, wenn der zweite Aufruf 404 ergibt? Der fachliche Zustand bleibt gelöscht; Antworten müssen nicht identisch sein.
- Warum response.ok prüfen? fetch lehnt HTTP-Fehlerstatus nicht automatisch ab; Netzwerkfehler dagegen schon.
- Warum 204 nicht als JSON lesen? Die Antwort hat keinen Inhalt.
- Warum validieren wir auch auf dem Server? Andere Clients können die Browserprüfung umgehen. Fehlgeschlagene Prüfungen dürfen nichts ändern.
- Wer erzeugt IDs und Zeitpunkte? TodoStore mit randomUUID und new Date().toISOString(); Clientfelder hierfür werden abgelehnt.
- Wo liegt die Oberfläche? todo_app/public mit generierten ES-Modulen und lokaler Bootstrap-CSS; Express liefert sie unter / aus.
- Werden Fenster live synchronisiert? Nein, jedes Fenster hält einen Anzeigestand; Neuladen fragt denselben Serverbestand ab.

## Prüfgrenzen

Automatisierte Tests ersetzen nicht das gemeinsame Erklären. WebStorm-Anfragen und die Sichtkontrolle im Netzwerkbereich vor der Abnahme selbst ausführen. Beim Durchsprechen jedes Gruppenmitglied eine vollständige Aktion anhand UI, Netzwerk, Route, Validierung und Store erklären lassen.
