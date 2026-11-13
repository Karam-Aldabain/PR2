Projektziel: Wir entwickeln gemeinsam eine TypeScript-To-do-Anwendung mit einer Express-REST-API und ergänzen einen eigenständigen Java-Vert.x-Echo-Service.

Die bestehende Oberfläche unterstützt das Anlegen, Anzeigen, Bearbeiten und Löschen von Todos sowie Statuswechsel, optionale Termine, aufklappbare Details und Statistiken.

Teil 1 behandelt das gemeinsame GitLab-Projekt, den lokalen Projektstart, nachvollziehbare Beiträge über Arbeitsbranches und das gemeinsame Lösen eines echten Merge-Konflikts. Teil 2 verlagert die maßgeblichen To-do-Daten in den Arbeitsspeicher des Express-Servers. Teil 3 ergänzt den unabhängigen Echo-Service im Unterordner echo-service.

Express liefert Oberfläche und API auf Port 3000 aus. Vert.x läuft unabhängig auf Port 8888. Beide Anwendungen können gleichzeitig gestartet werden.
