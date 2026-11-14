# Zusammenarbeit und Merge-Konflikt

## Zusammenarbeit

Für die Hausübung haben wir mit verschiedenen Git-Branches gearbeitet. Die Änderungen wurden anschließend in den Branch `HUE1` übernommen.

| Beitrag | Commit |
|---|---|
| Karams Änderung am Projektziel | `af1480a` |
| Mazens Änderung am Projektziel | `ca73b64` |
| Überprüfung des PUT-Tests und Ergänzung der README | `78be29c` |
| Lösung des Merge-Konflikts | `49972ae` |
| Integration in HUE1 | `e6ffa17` |

## Merge-Konflikt

Wir haben zwei Branches auf derselben Grundlage erstellt:

- `feature/part1-live-karam-v2`
- `feature/part1-live-mazen-v2`

In beiden Branches wurde die erste Zeile von `docs/projektprofil.md` unterschiedlich geändert.

**Karams Version:**

> Projektziel: Entwicklung einer benutzerfreundlichen To-do-Webanwendung, mit der Benutzer ihre Aufgaben erstellen, bearbeiten, verwalten und löschen können.

**Mazens Version:**

> Projektziel: Implementierung einer webbasierten Aufgabenverwaltung mit einer REST-API, die eine einfache und zuverlässige Organisation von Aufgaben ermöglicht.

Beim Zusammenführen entstand ein Merge-Konflikt.

## Lösung

Die beiden Vorschläge wurden zu einem gemeinsamen Projektziel zusammengefasst:

> Projektziel: Entwicklung einer benutzerfreundlichen To-do-Webanwendung mit einer REST-API, die es Benutzern ermöglicht, Aufgaben einfach zu erstellen, zu bearbeiten, zu organisieren und zu löschen.

Der Konflikt wurde im Commit `49972ae` aufgelöst. Anschließend wurden die Änderungen mit `e6ffa17` in `HUE1` integriert.

## Git-Verlauf

Der Konflikt und die Lösung sind in der Git-History nachvollziehbar.

```bash
git log --graph --oneline HUE1
git show af1480a -- docs/projektprofil.md
git show ca73b64 -- docs/projektprofil.md
git show -s --format=%P 49972ae
git merge-tree --write-tree "49972ae^1" "49972ae^2"
```