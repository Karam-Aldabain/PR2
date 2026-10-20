# Todo-Verwaltung

## JS-Dateien einbinden

Die Anwendung besteht aus zwei unterschiedlichen Implementierungen. Für die jeweilige Anwendung muss die entsprechende JS-Datei eingebunden werden:

```html
<!-- Für die prozedurale Variante (Konsolenausgabe) -->
<script src="js/todoManagement.js"></script>
```

```html
<!-- Für die objektorientierte Web-App -->
<script src="js/todoApp.js"></script>
```

- `todoManagement.ts` enthält die prozedurale Verwaltung aus Teil 1 (Tupel-Typ, CRUD-Funktionen, Filtern, Konsolenausgabe).
- `todoApp.ts` enthält die objektorientierte Verwaltung aus Teil 2/3 (Interface `Todo`, Klassen `TodoItem`/`TodoManager`, DOM-Rendering und Formularlogik).
