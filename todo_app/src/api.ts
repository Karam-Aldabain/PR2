export type TodoPriority = "hoch" | "mittel" | "niedrig";
export type TodoStatus = "offen" | "in Bearbeitung" | "erledigt";
export interface Todo {
  id: string; title: string; description: string; priority: TodoPriority;
  status: TodoStatus; createdAt: string; dueDate?: string;
}
type EditableTodo = Omit<Todo, "id" | "createdAt">;

async function request<T>(url: string, method = "GET", body?: unknown): Promise<T> {
  let response: Response;
  try {
    response = await fetch(url, {
      method, ...(body === undefined ? {} : {
        headers: { "Content-Type": "application/json" }, body: JSON.stringify(body),
      }),
    });
  } catch {
    throw new Error("Server nicht erreichbar. Bitte Verbindung und Serverstart prüfen und erneut versuchen.");
  }
  if (!response.ok) {
    const data = await response.json().catch(() => undefined);
    throw new Error(data?.error ?? `Die Anfrage ist fehlgeschlagen (HTTP ${response.status}).`);
  }
  if (response.status === 204) return undefined as T;
  return response.json() as Promise<T>;
}
const itemUrl = (id: string) => `/api/todos/${encodeURIComponent(id)}`;
export const api = {
  all: () => request<Todo[]>("/api/todos"),
  get: (id: string) => request<Todo>(itemUrl(id)),
  create: (todo: Omit<EditableTodo, "status">) => request<Todo>("/api/todos", "POST", todo),
  replace: (id: string, todo: EditableTodo) => request<Todo>(itemUrl(id), "PUT", todo),
  patch: (id: string, todo: Partial<Omit<EditableTodo, "dueDate">> & { dueDate?: string | null }) => request<Todo>(itemUrl(id), "PATCH", todo),
  remove: (id: string) => request<void>(itemUrl(id), "DELETE"),
};
