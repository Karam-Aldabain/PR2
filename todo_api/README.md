# Todo-REST-API

Implementierung von Hausübung 1, Teil 2 (2.1–2.6), mit Node.js, TypeScript und Express.
Installation, Build und Start erfolgen im übergeordneten Projektstamm, nicht in diesem Ordner:

```powershell
npm.cmd ci
npm.cmd run build
npm.cmd start
```

Siehe [Projekt-README](../README.md) für API-Vertrag, Struktur und Tests. src/app.ts stellt API und Client bereit; src/store.ts verwaltet den Arbeitsspeicher, src/validation.ts prüft alle Eingaben. dist/ wird beim Build erzeugt und nicht versioniert.
