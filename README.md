# Todo-Verwaltung

Die App verwendet TypeScript, native DOM-APIs und das bereits vorhandene Bootstrap.

## Starten

Voraussetzungen: Node.js mit npm und Python 3 für den lokalen HTTP-Server.

```sh
npm install
npm start
```

Die App ist unter http://localhost:8080/public/todo.html erreichbar.
Die fünf Beispiel-Todos werden beim Laden neu angelegt. Änderungen bleiben im Arbeitsspeicher und
werden beim Neuladen verworfen.

```sh
npm run build
npm run typecheck
```

`build` kompiliert die TypeScript-Dateien aus `src` mit dem Target `es2024` und der Moduleinstellung
`commonjs` nach `public/js`. Nach Quellcodeänderungen muss neu kompiliert werden.

Die Dateien verwenden TypeScript-Namespaces statt Modulimporten. Dadurch enthalten die erzeugten
Browser-Skripte keine CommonJS-Aufrufe wie `require()` oder `exports`. Die HTML-Seite lädt sie mit
`defer` in der Reihenfolge `todoManagement.js`, `todoApp.js`, `script.js`.

## Aufbau

- `src/todoManagement.ts`: Teil 1 mit Tupel-Typ, Beispielen, CRUD-Funktionen, Filtern und Konsolenausgabe.
- `src/todoApp.ts`: Teile 2 und 3 mit Interface `Todo`, `TodoItem` und `TodoManager` einschließlich Rendering.
- `src/script.ts`: Initialisierung und Submit-Event-Handler mit Eingabevalidierung.
- `public/todo.html`: Oberfläche mit Formular, Karten und Statistik.
- `public/todo.css`: ausgeblendete Details und Darstellung erledigter Aufgaben.

Das objektorientierte Interface `Todo` enthält genau die sechs Eigenschaften aus Teil 2:
`id`, `title`, `description`, `status`, `createdAt` und das optionale `dueDate`.
`TodoItem` implementiert dieses Interface. Der Konstruktor und `TodoManager.add()` nehmen nur
Titel, Beschreibung und das optionale Fälligkeitsdatum entgegen. IDs werden automatisch als
eindeutige Zeichenketten vergeben, der Anfangsstatus ist `offen`.

Die interne Liste des Managers ist vom Interface-Typ `Todo[]`; auch passende Objekte ohne
`TodoItem`-Instanz können über den Konstruktor übergeben werden. `filterOverdue()` berücksichtigt
jedes gesetzte Fälligkeitsdatum vor dem aktuellen Zeitpunkt, unabhängig vom Status.
`printStats()` gibt Gesamtanzahl, Anzahl je Status und Anzahl ohne Fälligkeitsdatum aus.
Die Priorität bleibt Bestandteil der prozeduralen Verwaltung aus Teil 1.

## Event-Verhalten für die Abnahme

Alle Interaktionen werden mit `addEventListener()` registriert. Es gibt keine Inline-Event-Attribute.

Ein Klick auf die Checkbox wird zunächst dort verarbeitet und steigt anschließend zu den
übergeordneten Elementen auf. Dieses Verhalten heißt Event Bubbling. Ohne Gegenmaßnahme würde
auch der Klick-Handler der Todo-Karte ausgeführt und die Detailansicht umgeschaltet.
Der Klick-Handler der Checkbox ruft deshalb `event.stopPropagation()` auf. Der separate
`change`-Handler übernimmt den Statuswechsel zwischen `offen` und `erledigt` und aktualisiert die
Darstellung. Der Öffnungszustand der Details bleibt dabei erhalten. Auch die Bedienelemente in
den Details verhindern das Weiterreichen ihrer Klicks an die Karte.

Ein Formular wird standardmäßig vom Browser an seine Zieladresse abgesendet. Ohne angegebenes
`action` ist dies die aktuelle Seite; die Navigation lädt die Seite neu und würde den Zustand der
App verwerfen. Der Submit-Handler ruft deshalb zuerst `event.preventDefault()` auf. Er validiert
anschließend die Eingaben, zeigt Fehler in `#error-msg` an und aktualisiert bei Erfolg die Liste.
`novalidate` am Formular überlässt die Fehlermeldungen vollständig diesem Handler.

`stopPropagation()` verhindert die Weitergabe an Vorfahren; `preventDefault()` verhindert eine
Standardaktion des Browsers. Die Methoden erfüllen unterschiedliche Aufgaben.
