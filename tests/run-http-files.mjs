import { runHttpFile } from './helpers/http-file.mjs';

for (const file of ['tests/todo-api.http', 'echo-service/tests/echo-api.http']) {
  const results = await runHttpFile(file);
  for (const result of results) console.log(`PASS ${result.method} ${result.url} -> ${result.status} (${result.assertions} assertions)`);
  console.log(`${file}: ${results.length} requests passed using Node (not WebStorm).`);
}
