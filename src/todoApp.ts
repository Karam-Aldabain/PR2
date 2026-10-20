type TodoPriority = "hoch" | "mittel" | "niedrig";
type TodoStatus = "offen" | "erledigt" | "in Bearbeitung";

interface Todo {
  id: string;
  title: string;
  description: string;
  priority: TodoPriority;
  status: TodoStatus;
  createdAt: Date;
  dueDate?: Date;
  expanded: boolean;
}

function formatDate(date?: Date): string {
  return date
    ? date.toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" })
    : "Ohne Fälligkeitsdatum";
}

class TodoItem implements Todo {
  id: string;
  createdAt: Date;
  status: TodoStatus;
  title: string;
  description: string;
  priority: TodoPriority;
  dueDate?: Date;
  expanded: boolean;

  constructor(title: string, description: string, priority: TodoPriority, dueDate?: Date) {
    this.id = crypto.randomUUID();
    this.createdAt = new Date();
    this.status = "offen";
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
    this.expanded = false;
  }

  toString(): string {
    return `[${this.id}] ${this.title} | ${this.description} | ` +
      `Status: ${this.status} | Erstellt: ${formatDate(this.createdAt)} | Deadline: ${formatDate(this.dueDate)}`;
  }
}

class TodoManager {
  private todos: Todo[];

  constructor(todos: Todo[] = []) {
    this.todos = [...todos];
  }

  add(title: string, description: string, priority: TodoPriority, dueDate?: Date): void {
    let todo = new TodoItem(title, description, priority, dueDate);
    // Auch bei übergebenen Interface-Objekten darf keine vorhandene ID erneut vergeben werden.
    while (this.todos.some((entry) => entry.id === todo.id)) {
      todo = new TodoItem(title, description, priority, dueDate);
    }
    this.todos.push(todo);
  }

  remove(id: string): void {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }

  setStatus(id: string, status: TodoStatus): void {
    const todo = this.todos.find((todo) => todo.id === id);
    if (todo) {
      todo.status = status;
    }
  }

  filterByStatus(status: TodoStatus): Todo[] {
    return this.todos.filter((todo) => todo.status === status);
  }

  filterOverdue(): Todo[] {
    const now = new Date();
    return this.todos.filter((todo) => todo.dueDate !== undefined && todo.dueDate < now);
  }

  private getStats(): string[] {
    return [
      `Gesamt: ${this.todos.length}`,
      `offen: ${this.filterByStatus("offen").length} | ` +
        `in Bearbeitung: ${this.filterByStatus("in Bearbeitung").length} | ` +
        `erledigt: ${this.filterByStatus("erledigt").length}`,
      `Ohne Fälligkeitsdatum: ${this.todos.filter((todo) => !todo.dueDate).length}`,
    ];
  }

  printStats(): void {
    this.getStats().forEach((line) => console.log(line));
  }

  render(): void {
    const list = document.querySelector<HTMLDivElement>("#todo-list");
    const stats = document.querySelector<HTMLDivElement>("#stats");
    if (!list || !stats) {
      throw new Error("Die Container #todo-list und #stats fehlen.");
    }
    list.replaceChildren();

    if (this.todos.length === 0) {
      const message = document.createElement("p");
      message.className = "text-body-secondary";
      message.textContent = "Noch keine Todos vorhanden.";
      list.appendChild(message);
    }

    for (const todo of this.todos) {
      const card = document.createElement("div");
      card.className = "todo-card card p-3 mb-3";
      card.setAttribute("data-id", todo.id);

      const row = document.createElement("div");
      row.className = "hstack gap-3";
      card.appendChild(row);

      const checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      checkbox.className = "todo-checkbox form-check-input m-0";
      checkbox.checked = todo.status === "erledigt";
      // Klicks steigen sonst zur Karte auf (Event Bubbling) und öffnen auch die Details.
      checkbox.addEventListener("click", (event) => event.stopPropagation());
      checkbox.addEventListener("change", () => {
        this.setStatus(todo.id, checkbox.checked ? "erledigt" : "offen");
        this.render();
      });
      row.appendChild(checkbox);

      const title = document.createElement("span");
      title.className = "todo-title fw-bold";
      title.textContent = todo.title;
      title.classList.toggle("text-decoration-line-through", todo.status === "erledigt");
      row.appendChild(title);

      const priority = document.createElement("span");
      priority.className = "todo-priority";
      priority.textContent = todo.priority;
      row.appendChild(priority);

      const deadline = document.createElement("span");
      deadline.className = "todo-deadline text-body-secondary";
      deadline.textContent = formatDate(todo.dueDate);
      row.appendChild(deadline);

      const details = document.createElement("div");
      details.className = "todo-details border-top mt-2 pt-2";
      details.textContent =
        `Status: ${todo.status} | Priorität: ${todo.priority} | Deadline: ${formatDate(todo.dueDate)}`;
      details.classList.toggle("d-none", !todo.expanded);
      card.appendChild(details);

      card.addEventListener("click", () => {
        todo.expanded = !todo.expanded;
        details.classList.toggle("d-none", !todo.expanded);
      });

      list.appendChild(card);
    }

    stats.replaceChildren();
    for (const line of this.getStats()) {
      const paragraph = document.createElement("p");
      paragraph.className = "mb-1";
      paragraph.textContent = line;
      stats.appendChild(paragraph);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const manager = new TodoManager();
  const form = document.querySelector<HTMLFormElement>("#todo-form")!;
  const titleInput = document.querySelector<HTMLInputElement>("#todo-title")!;
  const descriptionInput = document.querySelector<HTMLTextAreaElement>("#todo-description")!;
  const priorityInput = document.querySelector<HTMLSelectElement>("#todo-priority")!;
  const dueDateInput = document.querySelector<HTMLInputElement>("#todo-due-date")!;
  const errorMsg = document.querySelector<HTMLDivElement>("#error-msg")!;

  form.addEventListener("submit", (event) => {
    // Verhindert das Standardverhalten: Seitenreload per HTTP-Request.
    event.preventDefault();

    const title = titleInput.value.trim();
    const description = descriptionInput.value.trim();
    const dueDateValue = dueDateInput.value;

    if (!title || !description) {
      errorMsg.textContent = "Bitte Titel und Beschreibung ausfüllen.";
      errorMsg.classList.remove("d-none");
      return;
    }

    errorMsg.textContent = "";
    errorMsg.classList.add("d-none");

    const dueDate = dueDateValue ? new Date(dueDateValue) : undefined;
    const priority = priorityInput.value as TodoPriority;
    manager.add(title, description, priority, dueDate);
    form.reset();
    manager.render();
  });

  manager.add("test", "desc", "hoch", new Date());
  manager.add("test2", "desc2", "mittel", new Date());

  manager.render();
});
