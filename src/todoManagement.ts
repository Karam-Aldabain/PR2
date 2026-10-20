type TodoPriority = "hoch" | "mittel" | "niedrig";
type TodoStatus = "offen" | "erledigt" | "in Bearbeitung";
type Todo = [id: number, title: string, priority: TodoPriority, status: TodoStatus, deadline: Date];

const todos: Todo[] = [
  [1, "Übung abgeben", "hoch", "offen", new Date(2026, 6, 1)],
  [2, "Einkaufen", "mittel", "erledigt", new Date(2026, 6, 3)],
  [3, "Sport", "niedrig", "in Bearbeitung", new Date(2026, 6, 5)],
  [4, "Prüfung vorbereiten", "hoch", "in Bearbeitung", new Date(2026, 10, 10)],
  [5, "Schreibtisch aufräumen", "niedrig", "offen", new Date(2026, 10, 15)],
];

function printTodos(todos: Todo[]): void {
  const titleWidth = Math.max(5, ...todos.map((todo) => todo[1].length));
  const idWidth = Math.max(3, ...todos.map((todo) => `[${todo[0]}]`.length));
  for (const [id, title, priority, status, deadline] of todos) {
    console.log(
      `${`[${id}]`.padEnd(idWidth)} ${title.padEnd(titleWidth)} | ` +
      `Priorität: ${priority.padEnd(7)} | Status: ${status.padEnd(14)} | ` +
      `Deadline: ${deadline.toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" })}`,
    );
  }
}

function addTodo(todos: Todo[], title: string, priority: TodoPriority, deadline: Date): void {
  const nextId = todos.reduce((maximum, todo) => Math.max(maximum, todo[0]), 0) + 1;
  todos.push([nextId, title, priority, "offen", deadline]);
}

function removeTodo(todos: Todo[], id: number): void {
  const index = todos.findIndex((todo) => todo[0] === id);
  if (index !== -1) {
    todos.splice(index, 1);
  }
}

function setStatus(todos: Todo[], id: number, status: TodoStatus): void {
  const todo = todos.find((todo) => todo[0] === id);
  if (todo) {
    todo[3] = status;
  }
}

addTodo(todos, "Hausaufgaben ", "hoch", new Date("2026-07-10"));
setStatus(todos, 1, "erledigt");
removeTodo(todos, 2);
printTodos(todos);

function filterByStatus(todos: Todo[], status: TodoStatus): Todo[] {
  return todos.filter((todo) => todo[3] === status);
}

const offene= filterByStatus (todos , "offen");
printTodos(offene);

function filterByPriority(todos: Todo[], priority: TodoPriority): Todo[] {
  return todos.filter((todo) => todo[2] === priority);
}

const wichtige = filterByPriority (todos , "hoch");
printTodos(wichtige);

function printStats(todos: Todo[]): void {
  console.log(`Gesamt: ${todos.length}`);
  console.log(
    `  offen: ${filterByStatus(todos, "offen").length} | ` +
    `in Bearbeitung: ${filterByStatus(todos, "in Bearbeitung").length} | ` +
    `erledigt: ${filterByStatus(todos, "erledigt").length}`,
  );
  console.log(
    `  hoch: ${filterByPriority(todos, "hoch").length} | ` +
    `mittel: ${filterByPriority(todos, "mittel").length} | ` +
    `niedrig: ${filterByPriority(todos, "niedrig").length}`,
  );
}

printStats(todos);

