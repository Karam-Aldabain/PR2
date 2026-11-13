export type TodoPriority = "hoch" | "mittel" | "niedrig";
export type TodoStatus = "offen" | "in Bearbeitung" | "erledigt";
export interface Todo {
  id: string;
  title: string;
  description: string;
  priority: TodoPriority;
  status: TodoStatus;
  createdAt: string;
  dueDate?: string;
}
export type EditableTodo = Omit<Todo, "id" | "createdAt">;
export type NewTodo = Omit<EditableTodo, "status">;
