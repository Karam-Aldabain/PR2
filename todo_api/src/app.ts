import express, { type ErrorRequestHandler } from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { TodoStore } from "./store.js";
import { HttpError, validate } from "./validation.js";
import type { NewTodo } from "./model.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
export function createApp(store = new TodoStore()) {
  const app = express();
  app.disable("x-powered-by");
  app.use("/api", (_req, res, next) => { res.set("Cache-Control", "no-store"); next(); });
  app.use("/api", express.json({ limit: "32kb" }));
  app.get("/api/todos", (_req, res) => { res.json(store.all()); });
  app.get("/api/todos/:id", (req, res) => { res.json(store.get(req.params.id)); });
  app.post("/api/todos", (req, res) => {
    const todo = store.create(validate(req.body, "POST") as NewTodo);
    res.location(`/api/todos/${todo.id}`).status(201).json(todo);
  });
  for (const method of ["put", "patch"] as const) {
    app[method]("/api/todos/:id", (req, res) => {
      store.get(req.params.id);
      const input = validate(req.body, method === "put" ? "PUT" : "PATCH");
      res.json(store.update(req.params.id, input, method === "put"));
    });
  }
  app.delete("/api/todos/:id", (req, res) => { store.remove(req.params.id); res.status(204).end(); });
  app.use("/api", (_req, _res, next) => { next(new HttpError(404, "API-Pfad nicht gefunden.")); });
  app.use("/assets/bootstrap", express.static(path.join(root, "node_modules/bootstrap/dist/css")));
  app.use(express.static(path.join(root, "todo_app/public"), { index: "todo.html" }));
  app.use((_req, _res, next) => { next(new HttpError(404, "Pfad nicht gefunden.")); });
  const errors: ErrorRequestHandler = (error: unknown, _req, res, _next) => {
    if (error instanceof HttpError) { res.status(error.status).json({ error: error.message }); return; }
    if (error instanceof URIError) {
      res.status(400).json({ error: "Ungültige URL-Kodierung." }); return;
    }
    const type = (error as { type?: string })?.type;
    if (["entity.parse.failed", "entity.too.large", "charset.unsupported", "encoding.unsupported"].includes(type ?? "")) {
      res.status(400).json({ error: "Ungültiger JSON-Anfrageinhalt (maximal 32 KiB)." }); return;
    }
    console.error("Unerwarteter Serverfehler:", error);
    res.status(500).json({ error: "Interner Serverfehler. Bitte später erneut versuchen." });
  };
  app.use(errors);
  return app;
}
