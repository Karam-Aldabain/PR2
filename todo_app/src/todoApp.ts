import { api, type Todo, type TodoPriority, type TodoStatus } from "./api.js";

function formatDate(value?: string): string {
  const date = value ? new Date(value.length === 10 ? `${value}T00:00:00` : value) : undefined;
  return date
    ? date.toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" })
    : "Ohne Fälligkeitsdatum";
}

class TodoManager {
  private todos: Todo[] = [];
  async load(): Promise<void> { this.todos = await api.all(); this.render(); }
  async add(title: string, description: string, priority: TodoPriority, dueDate?: string): Promise<Todo> {
    const todo = await api.create({ title, description, priority, ...(dueDate ? { dueDate } : {}) });
    this.todos.push(todo); return todo;
  }
  async find(id: string): Promise<Todo> { return api.get(id); }
  async update(id: string, title: string, description: string, priority: TodoPriority, status: TodoStatus, dueDate?: string): Promise<void> {
    const todo = await api.replace(id, { title, description, priority, status, ...(dueDate ? { dueDate } : {}) });
    this.todos = this.todos.map(item => item.id === id ? todo : item);
  }
  async remove(id: string): Promise<void> {
    await api.remove(id); this.todos = this.todos.filter(todo => todo.id !== id);
  }
  async setStatus(id: string, status: TodoStatus): Promise<void> {
    const todo = await api.patch(id, { status });
    this.todos = this.todos.map(item => item.id === id ? todo : item);
  }
  private getStats(): string[] {
    let open = 0;
    let inProgress = 0;
    let done = 0;
    let withoutDueDate = 0;

    for (const todo of this.todos) {
      if (todo.status === "offen") {
        open++;
      } else if (todo.status === "in Bearbeitung") {
        inProgress++;
      } else if (todo.status === "erledigt") {
        done++;
      }
      if (!todo.dueDate) {
        withoutDueDate++;
      }
    }

    return [
      `Gesamt: ${this.todos.length}`,
      `offen: ${open} | in Bearbeitung: ${inProgress} | erledigt: ${done}`,
      `Ohne Fälligkeitsdatum: ${withoutDueDate}`,
    ];
  }

  render(): void {
    const list = document.querySelector<HTMLDivElement>("#todo-list");
    const stats = document.querySelector<HTMLDivElement>("#stats");
    if (!list || !stats) {
      throw new Error("Die Container #todo-list und #stats fehlen.");
    }
    const expandedIds: string[] = [];
    const openDetails = list.querySelectorAll<HTMLDetailsElement>("details[open]");
    for (const details of openDetails) {
      const id = details.dataset.todoId;
      if (id !== undefined) {
        expandedIds.push(id);
      }
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
      row.className = "d-flex flex-wrap align-items-center gap-3";
      card.appendChild(row);

      const checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      checkbox.className = "todo-checkbox form-check-input m-0";
      checkbox.setAttribute("aria-label", `${todo.title} als erledigt markieren`);
      checkbox.checked = todo.status === "erledigt";
      checkbox.addEventListener("change", async () => {
        checkbox.disabled = true;
        try {
          clearError();
          await this.setStatus(todo.id, checkbox.checked ? "erledigt" : "offen");
          this.render();
          focusTodoButton(todo.id, ".todo-checkbox");
        } catch (error) { checkbox.checked = todo.status === "erledigt"; showError(error); }
        finally { checkbox.disabled = false; }
      });
      row.appendChild(checkbox);

      const title = document.createElement("span");
      title.className = "todo-title fw-bold text-break";
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

      const details = document.createElement("details");
      details.dataset.todoId = todo.id;
      for (const id of expandedIds) {
        if (id === todo.id) {
          details.open = true;
          break;
        }
      }
      details.className = "todo-details border-top mt-2 pt-2";
      const summary = document.createElement("summary");
      summary.textContent = "Details anzeigen";
      details.appendChild(summary);
      const description = document.createElement("p");
      description.className = "mt-2 mb-2 text-break";
      const lines = todo.description.split("\n");
      for (let i = 0; i < lines.length; i++) {
        if (i > 0) {
          description.appendChild(document.createElement("br"));
        }
        description.appendChild(document.createTextNode(lines[i]));
      }
      details.appendChild(description);
      const metadata = document.createElement("p");
      metadata.textContent = `Status: ${todo.status} | Priorität: ${todo.priority} | Erstellt: ${formatDate(todo.createdAt)} | Deadline: ${formatDate(todo.dueDate)}`;
      details.appendChild(metadata);
      card.appendChild(details);

      const actions = document.createElement("div");
      actions.className = "d-flex gap-2 mt-2";
      const editButton = document.createElement("button");
      editButton.type = "button";
      editButton.className = "btn btn-outline-primary btn-sm";
      editButton.textContent = "Bearbeiten";
      editButton.addEventListener("click", () => { void startEditing(todo.id); });
      const deleteButton = document.createElement("button");
      deleteButton.type = "button";
      deleteButton.className = "btn btn-outline-danger btn-sm";
      deleteButton.textContent = "Löschen";
      deleteButton.addEventListener("click", async () => {
        deleteButton.disabled = true;
        try {
          clearError();
          await this.remove(todo.id);
          this.render();
          newButton.focus();
        } catch (error) { showError(error); }
        finally { deleteButton.disabled = false; }
      });
      actions.append(editButton, deleteButton);
      card.appendChild(actions);

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

const manager = new TodoManager();
const form = document.querySelector<HTMLFormElement>("#todo-form")!;
const titleInput = document.querySelector<HTMLInputElement>("#todo-title")!;
const descriptionInput = document.querySelector<HTMLTextAreaElement>("#todo-description")!;
const priorityInput = document.querySelector<HTMLSelectElement>("#todo-priority")!;
const dueDateInput = document.querySelector<HTMLInputElement>("#todo-due-date")!;
const errorMsg = document.querySelector<HTMLDivElement>("#error-msg")!;

const statusInput = document.querySelector<HTMLSelectElement>("#todo-status")!;
const formHeading = document.querySelector<HTMLHeadingElement>("#form-heading")!;
const submitButton = document.querySelector<HTMLButtonElement>("#submit-todo")!;
const cancelButton = document.querySelector<HTMLButtonElement>("#cancel-edit")!;
const dialog = document.querySelector<HTMLDialogElement>("#todo-dialog")!;
const newButton = document.querySelector<HTMLButtonElement>("#new-todo")!;
let editingId: string | undefined;

function focusTodoButton(id: string, selector: string): void {
  const cards = document.querySelectorAll<HTMLElement>(".todo-card");
  for (const card of cards) {
    if (card.dataset.id === id) {
      const button = card.querySelector<HTMLElement>(selector);
      if (button) {
        button.focus();
      }
      return;
    }
  }
}

function resetForm(): void {
  editingId = undefined;
  form.reset();
  statusInput.disabled = true;
  formHeading.textContent = "Neues Todo";
  submitButton.textContent = "Todo hinzufügen";
  errorMsg.textContent = "";
  errorMsg.classList.add("d-none");
}

async function startEditing(id: string): Promise<void> {
  try {
    const todo = await manager.find(id);
    resetForm();
    editingId = id;
    titleInput.value = todo.title;
    descriptionInput.value = todo.description;
    priorityInput.value = todo.priority;
    statusInput.value = todo.status;
    dueDateInput.value = todo.dueDate ?? "";
    statusInput.disabled = false;
    formHeading.textContent = "Todo bearbeiten";
    submitButton.textContent = "Änderungen speichern";
    dialog.showModal();
    titleInput.focus();
  } catch (error) { showError(error); }
}

newButton.addEventListener("click", () => {
  resetForm();
  dialog.showModal();
  titleInput.focus();
});
cancelButton.addEventListener("click", () => dialog.close());
dialog.addEventListener("close", resetForm);

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const title = titleInput.value.trim();
  const description = descriptionInput.value.trim();
  const dueDateValue = dueDateInput.value;
  const dueDate = dueDateValue || undefined;
  const priority = priorityInput.value as TodoPriority;
  const status = statusInput.value as TodoStatus;

  if (!title || !description || !dueDateInput.validity.valid || (dueDate && Number.isNaN(Date.parse(dueDate)))) {
    errorMsg.textContent = "Bitte Titel und Beschreibung sowie ein gültiges Fälligkeitsdatum ausfüllen oder das Datum leer lassen.";
    errorMsg.classList.remove("d-none");
    return;
  }

  submitButton.disabled = true;
  cancelButton.disabled = true;
  try {
    if (editingId !== undefined) {
      await manager.update(editingId, title, description, priority, status, dueDate);
    } else {
      await manager.add(title, description, priority, dueDate);
    }
    const savedId = editingId;
    dialog.close();
    manager.render();
    if (savedId !== undefined) {
      focusTodoButton(savedId, "button");
    } else {
      newButton.focus();
    }
  } catch (error) { showError(error); }
  finally { submitButton.disabled = false; cancelButton.disabled = false; }
});

function clearError(): void { errorMsg.textContent = ""; errorMsg.classList.add("d-none"); }
function showError(error: unknown): void {
  errorMsg.textContent = error instanceof Error ? error.message : "Die Anfrage ist fehlgeschlagen.";
  errorMsg.classList.remove("d-none");
  if (!dialog.open) { dialog.showModal(); }
}
dialog.addEventListener("cancel", event => { if (submitButton.disabled) event.preventDefault(); });
statusInput.disabled = true;
void manager.load().catch(showError);
