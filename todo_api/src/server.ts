import { createApp } from "./app.js";
const port = Number(process.env.PORT ?? 3000);
if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error("PORT muss zwischen 1 und 65535 liegen.");
const server = createApp().listen(port, () => console.log(`Todo-App: http://localhost:${port}`));
server.on("error", error => { console.error("Server konnte nicht gestartet werden:", error.message); process.exitCode = 1; });
