import type { EditableTodo } from "./model.js";

export class HttpError extends Error {
  constructor(public readonly status: number, message: string) { super(message); }
}

// Calendar dates use YYYY-MM-DD, independently of the browser's time zone.
export function validate(body: unknown, mode: "POST" | "PUT" | "PATCH"): Partial<EditableTodo> {
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    throw new HttpError(400, "Ein JSON-Objekt ist erforderlich.");
  }
  const input = body as Record<string, unknown>;
  const allowed = ["title", "description", "priority", "dueDate", ...(mode === "POST" ? [] : ["status"])];
  if (Object.keys(input).some(key => !allowed.includes(key))) {
    throw new HttpError(400, "Unbekannte oder serververwaltete Eigenschaft.");
  }
  if (mode === "PATCH" && Object.keys(input).length === 0) {
    throw new HttpError(400, "PATCH benötigt mindestens eine bearbeitbare Eigenschaft.");
  }
  const result: Record<string, unknown> = {};
  for (const key of allowed) {
    const present = Object.hasOwn(input, key);
    if (!present && (mode === "PATCH" || key === "dueDate")) continue;
    const value = input[key];
    let valid = false;
    if (key === "title" || key === "description") {
      valid = typeof value === "string" && value.trim().length > 0;
      if (valid) result[key] = (value as string).trim();
    } else if (key === "priority" || key === "status") {
      valid = (key === "priority" ? ["hoch", "mittel", "niedrig"] : ["offen", "in Bearbeitung", "erledigt"]).includes(value as string);
      if (valid) result[key] = value;
    } else {
      if (mode === "PATCH" && value === null) {
        valid = true;
        result[key] = undefined;
      } else if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value)) {
        const date = new Date(`${value}T00:00:00.000Z`);
        valid = Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === value;
        if (valid) result[key] = value;
      }
    }
    if (!valid) throw new HttpError(400, `Ungültige oder fehlende Eigenschaft: ${key}.`);
  }
  return result as Partial<EditableTodo>;
}
