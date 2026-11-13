import { test } from 'node:test';
import { once } from 'node:events';
import assert from 'node:assert/strict';
import { createApp } from '../todo_api/dist/app.js';
import { runHttpFile } from './helpers/http-file.mjs';

test('the actual todo-api.http requests and response handlers all pass', async t => {
  const server = createApp().listen(0, '127.0.0.1');
  await once(server, 'listening');
  t.after(() => new Promise(resolve => server.close(resolve)));
  const results = await runHttpFile('tests/todo-api.http', `http://127.0.0.1:${server.address().port}`);
  assert.equal(results.length, 27);
  assert.equal(results.at(-1).status, 404);
});
