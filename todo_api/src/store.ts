import { randomUUID } from "node:crypto";
import type { Todo, EditableTodo, NewTodo } from "./model.js";
import { HttpError } from "./validation.js";

export class TodoStore {
  private readonly todos = new Map<string, Todo>();
  all(): Todo[] { return [...this.todos.values()].map(todo => ({ ...todo })); }
  get(id: string): Todo {
    const todo = this.todos.get(id);
    if (!todo) throw new HttpError(404, "Todo nicht gefunden.");
    return { ...todo };
  }
  create(input: NewTodo): Todo {
    const todo: Todo = { ...input, id: randomUUID(), createdAt: new Date().toISOString(), status: "offen" };
    this.todos.set(todo.id, todo);
    return { ...todo };
  }
  update(id: string, input: Partial<EditableTodo>, replace: boolean): Todo {
    const previous = this.get(id);
    const todo = replace
      ? { ...input, id, createdAt: previous.createdAt } as Todo
      : { ...previous, ...input };
    if (todo.dueDate === undefined) delete todo.dueDate;
    this.todos.set(id, todo);
    return { ...todo };
  }
  remove(id: string): void { this.get(id); this.todos.delete(id); }
}
