import { test } from 'node:test';
import assert from 'node:assert/strict';
import { once } from 'node:events';
import { createApp } from '../todo_api/dist/app.js';
import { TodoStore } from '../todo_api/dist/store.js';

const valid = { title: ' Lernen ', description: ' REST verstehen ', priority: 'hoch', dueDate: '2028-02-29' };
async function fixture(t, store) {
  const server = createApp(store).listen(0, '127.0.0.1');
  await once(server, 'listening');
  t.after(() => new Promise(resolve => server.close(resolve)));
  return async (path = '/api/todos', method = 'GET', body) => {
    const response = await fetch(`http://127.0.0.1:${server.address().port}${path}`, {
      method, ...(body === undefined ? {} : { headers: { 'Content-Type': 'application/json' }, body: typeof body === 'string' ? body : JSON.stringify(body) }),
    });
    const text = await response.text();
    return { status: response.status, headers: response.headers, text, data: response.headers.get('content-type')?.includes('json') && text ? JSON.parse(text) : undefined };
  };
}
test('complete lifecycle, replacement, partial update, immutable fields and idempotence', async t => {
  const request = await fixture(t);
  assert.deepEqual((await request()).data, []);
  const created = await request(undefined, 'POST', valid);
  assert.equal(created.status, 201);
  assert.match(created.data.id, /^[\da-f-]{36}$/);
  assert.ok(Number.isFinite(Date.parse(created.data.createdAt)));
  assert.equal(created.data.status, 'offen');
  assert.equal(created.data.title, 'Lernen');
  const url = created.headers.get('location');
  assert.equal(url, `/api/todos/${created.data.id}`);
  assert.deepEqual((await request(url)).data, created.data);
  const full = { title: 'Neu', description: 'Text', priority: 'mittel', status: 'in Bearbeitung' };
  const replaced = await request(url, 'PUT', full);
  assert.equal(replaced.status, 200);
  assert.equal(replaced.data.dueDate, undefined);
  assert.equal(replaced.data.createdAt, created.data.createdAt);
  assert.deepEqual((await request(url, 'PUT', full)).data, replaced.data);
  const patched = await request(url, 'PATCH', { status: 'erledigt' });
  assert.deepEqual(patched.data, { ...replaced.data, status: 'erledigt' });
  await request(url, 'PATCH', { dueDate: '2027-12-31' });
  assert.equal((await request(url, 'PATCH', { dueDate: null })).data.dueDate, undefined);
  assert.deepEqual((await request()).data, [(await request(url)).data]);
  const deleted = await request(url, 'DELETE');
  assert.equal(deleted.status, 204); assert.equal(deleted.text, '');
  for (const method of ['GET', 'PUT', 'PATCH', 'DELETE']) {
    const result = await request(url, method, method === 'PUT' ? full : method === 'PATCH' ? { status: 'offen' } : undefined);
    assert.equal(result.status, 404); assert.equal(typeof result.data.error, 'string');
  }
  assert.deepEqual((await request()).data, []);
});
test('invalid input is rejected atomically; errors do not stop the server', async t => {
  const request = await fixture(t);
  const created = await request(undefined, 'POST', valid);
  const url = created.headers.get('location');
  const invalidPosts = [null, [], 12, {}, { ...valid, title: ' ' }, { ...valid, description: 1 }, { ...valid, priority: 'urgent' },
    { ...valid, dueDate: '2027-02-29' }, { ...valid, dueDate: '2028-04-31' }, { ...valid, dueDate: '' }, { ...valid, dueDate: null },
    { ...valid, id: 'mine' }, { ...valid, createdAt: 'mine' }, { ...valid, status: 'offen' }, { ...valid, unknown: true }];
  for (const body of invalidPosts) assert.equal((await request(undefined, 'POST', body)).status, 400, JSON.stringify(body));
  for (const method of ['PUT', 'PATCH']) {
    for (const body of [{}, { title: '' }, { status: 'bad' }, { title: 'changed', priority: 'bad' }, { id: 'mine' }, { createdAt: 'mine' }, { unknown: 1 }, { dueDate: 'bad' }]) {
      assert.equal((await request(url, method, body)).status, 400);
      assert.deepEqual((await request(url)).data, created.data);
    }
  }
  assert.equal((await request(undefined, 'POST', '{"title":')).status, 400);
  assert.equal((await request(undefined, 'POST', JSON.stringify({ title: 'x'.repeat(40000) }))).status, 400);
  const unknown = await request('/api/missing');
  assert.equal(unknown.status, 404); assert.equal(typeof unknown.data.error, 'string');
  assert.equal((await request()).status, 200);
  assert.equal((await request()).data.length, 1);
});
test('static HTML, browser modules and Bootstrap are served by Express', async t => {
  const request = await fixture(t);
  for (const [url, mime] of [['/', 'text/html'], ['/js/todoApp.js', 'javascript'], ['/js/api.js', 'javascript'], ['/assets/bootstrap/bootstrap.css', 'text/css']]) {
    const result = await request(url); assert.equal(result.status, 200); assert.ok(result.headers.get('content-type').includes(mime));
  }
  assert.equal((await request('/package.json')).status, 404);
});
test('unexpected internal errors use a safe JSON response and are logged', async t => {
  class FailingStore extends TodoStore { all() { throw new Error('private implementation detail'); } }
  const request = await fixture(t, new FailingStore());
  const logs = []; const original = console.error;
  console.error = (...args) => logs.push(args);
  try {
    const result = await request(); assert.equal(result.status, 500);
    assert.ok(!result.text.includes('private implementation detail')); assert.equal(logs.length, 1);
  } finally { console.error = original; }
});

test('malformed URL parameters return a safe 400 and leave the collection unchanged', async t => {
  const request = await fixture(t);
  const created = await request(undefined, 'POST', valid);
  for (const path of ['/api/todos/%ZZ', '/api/todos/%E0%A4%A']) {
    const response = await request(path);
    assert.equal(response.status, 400);
    assert.equal(typeof response.data.error, 'string');
    assert.ok(!response.text.includes('URIError'));
  }
  assert.deepEqual((await request()).data, [created.data]);
});

test('each mandatory PUT field and every supplied PATCH field is validated before mutation', async t => {
  const request = await fixture(t);
  const original = (await request(undefined, 'POST', valid)).data;
  const url = `/api/todos/${original.id}`;
  const full = { title: 'Replacement', description: 'Description', priority: 'mittel', status: 'offen' };
  for (const key of ['title', 'description', 'priority', 'status']) {
    const input = { ...full }; delete input[key];
    assert.equal((await request(url, 'PUT', input)).status, 400, `Missing ${key}`);
    assert.deepEqual((await request(url)).data, original);
  }
  for (const input of [
    { description: null }, { description: ' ' }, { title: 3 }, { priority: null },
    { status: null }, { dueDate: '2027-04-31' }, { title: 'Changed', createdAt: 'client' },
    { title: 'Changed', id: 'client' },
  ]) {
    assert.equal((await request(url, 'PATCH', input)).status, 400);
    assert.deepEqual((await request(url)).data, original);
  }
  for (const priority of ['hoch', 'mittel', 'niedrig']) {
    assert.equal((await request(url, 'PATCH', { priority })).data.priority, priority);
  }
  for (const status of ['offen', 'in Bearbeitung', 'erledigt']) {
    assert.equal((await request(url, 'PATCH', { status })).data.status, status);
  }
  const patched = await request(url, 'PATCH', { title: ' Trim ', description: ' Text ', dueDate: '2028-02-29' });
  assert.equal(patched.data.title, 'Trim'); assert.equal(patched.data.description, 'Text');
  assert.equal(patched.data.dueDate, '2028-02-29');
  assert.equal(patched.data.id, original.id); assert.equal(patched.data.createdAt, original.createdAt);
});

test('Gregorian century and month-end dates validate over HTTP without partial writes', async t => {
  const request = await fixture(t);
  for (const dueDate of ['2000-02-29', '2027-04-30', '2027-01-31', '2100-02-28']) {
    const created = await request(undefined, 'POST', { ...valid, dueDate });
    assert.equal(created.status, 201, `Valid calendar date ${dueDate}`);
    assert.equal(created.data.dueDate, dueDate);
  }
  const before = (await request()).data;
  for (const dueDate of ['2100-02-29', '2027-04-31']) {
    const rejected = await request(undefined, 'POST', { ...valid, dueDate });
    assert.equal(rejected.status, 400, `Invalid calendar date ${dueDate}`);
    assert.equal(typeof rejected.data.error, 'string');
    assert.deepEqual((await request()).data, before, 'Rejected POST adds no resource');
  }
  const original = before[0];
  const url = `/api/todos/${original.id}`;
  for (const dueDate of ['2100-02-29', '2027-04-31']) {
    const rejected = await request(url, 'PATCH', { title: 'Must not change', dueDate });
    assert.equal(rejected.status, 400);
    assert.deepEqual((await request(url)).data, original, 'Rejected PATCH is atomic');
    assert.deepEqual((await request()).data, before, 'Server remains healthy and state unchanged');
  }
  const recovered = await request(url, 'PATCH', { dueDate: '2027-04-30' });
  assert.equal(recovered.status, 200);
  assert.deepEqual(recovered.data, { ...original, dueDate: '2027-04-30' });
  assert.deepEqual((await request(url)).data, recovered.data);
});

test('PUT calendar-date rejection preserves the complete existing resource', async t => {
  const request = await fixture(t);
  const original = (await request(undefined, 'POST', { ...valid, dueDate: '2000-02-29' })).data;
  const url = `/api/todos/${original.id}`;
  const replacement = { title: 'Replacement', description: 'Full update', priority: 'niedrig', status: 'in Bearbeitung' };
  for (const dueDate of ['2100-02-29', '2027-04-31']) {
    const rejected = await request(url, 'PUT', { ...replacement, dueDate });
    assert.equal(rejected.status, 400, dueDate);
    assert.equal(typeof rejected.data.error, 'string');
    assert.deepEqual((await request(url)).data, original, 'Invalid PUT changes no field');
    assert.deepEqual((await request()).data, [original], 'Collection remains available and unchanged');
  }
  const accepted = await request(url, 'PUT', { ...replacement, dueDate: '2027-04-30' });
  assert.equal(accepted.status, 200);
  assert.deepEqual(accepted.data, { ...replacement, dueDate: '2027-04-30', id: original.id, createdAt: original.createdAt });
  assert.deepEqual((await request(url)).data, accepted.data);
});
