import { test, expect } from '@playwright/test';
import { once } from 'node:events';
import { type Server } from 'node:http';
import { createApp } from '../../todo_api/dist/app.js';
import { writeFile } from 'node:fs/promises';

let appServer: Server;
test.beforeAll(async () => {
  appServer = createApp().listen(3000, '127.0.0.1');
  await once(appServer, 'listening');
});
test.afterAll(async () => {
  appServer.closeAllConnections();
  await new Promise<void>(resolve => appServer.close(() => resolve()));
});

test('UI lifecycle, reload, second window, HTTP rejection and network failure', async ({ page, context, request }) => {
  for (const todo of await (await request.get('/api/todos')).json()) await request.delete(`/api/todos/${todo.id}`);
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('/');
  await expect(page.locator('#todo-list')).toContainText('Noch keine Todos');
  await expect(page.locator('#new-todo')).toHaveCSS('display', 'inline-block');
  await page.locator('#new-todo').click();
  await expect(page.locator('#todo-status')).toBeDisabled();
  await page.locator('#todo-title').fill('Browser-Test');
  await page.locator('#todo-description').fill('Beschreibung\nZweite Zeile');
  await page.locator('#todo-due-date').fill('2027-05-04');
  const post = page.waitForResponse(r => r.url().endsWith('/api/todos') && r.request().method() === 'POST');
  await page.locator('#submit-todo').click();
  const response = await post; expect(response.status()).toBe(201);
  const todo = await response.json(); expect(todo.status).toBe('offen');
  await expect(page.locator('.todo-title')).toHaveText('Browser-Test');
  await page.reload(); await expect(page.locator('.todo-title')).toHaveText('Browser-Test');
  const second = await context.newPage(); await second.goto('/');
  await expect(second.locator('.todo-title')).toHaveText('Browser-Test');
  await page.getByRole('button', { name: 'Bearbeiten', exact: true }).click();
  await page.locator('#todo-title').fill('Geändert');
  await page.locator('#todo-status').selectOption('in Bearbeitung');
  await page.locator('#todo-due-date').fill('');
  const put = page.waitForResponse(r => r.request().method() === 'PUT');
  await page.locator('#submit-todo').click(); expect((await put).status()).toBe(200);
  await second.reload(); await expect(second.locator('.todo-title')).toHaveText('Geändert');
  await page.locator('summary').click();
  const patch = page.waitForResponse(r => r.request().method() === 'PATCH');
  await page.locator('.todo-checkbox').check(); expect((await patch).status()).toBe(200);
  await expect(page.locator('.todo-checkbox')).toBeFocused();
  await expect(page.locator('details')).toHaveAttribute('open', '');
  await expect(page.locator('#stats')).toContainText('erledigt: 1');
  await page.route('**/api/todos/*', route => route.fulfill({ status: 400, contentType: 'application/json', body: '{"error":"Test: Änderung abgelehnt"}' }));
  await page.locator('.todo-checkbox').uncheck();
  await expect(page.locator('#error-msg')).toContainText('Änderung abgelehnt');
  await expect(page.locator('.todo-checkbox')).toBeChecked();
  await page.locator('#cancel-edit').click(); await page.unroute('**/api/todos/*');
  await page.route('**/api/todos/*', route => route.abort('connectionrefused'));
  await page.getByRole('button', { name: 'Löschen', exact: true }).click();
  await expect(page.locator('#error-msg')).toContainText('Server nicht erreichbar');
  await expect(page.locator('.todo-card')).toHaveCount(1);
  await page.locator('#cancel-edit').click(); await page.unroute('**/api/todos/*');
  const deletion = page.waitForResponse(r => r.request().method() === 'DELETE');
  await page.getByRole('button', { name: 'Löschen', exact: true }).click(); expect((await deletion).status()).toBe(204);
  await expect(page.locator('#todo-list')).toContainText('Noch keine Todos');
  expect(errors).toEqual([]); await second.close();
});

test('a stopped server produces an understandable error in the already open client', async ({ page }) => {
  const server = createApp().listen(3001, '127.0.0.1');
  try {
    await once(server, 'listening');
    await page.goto('http://127.0.0.1:3001');
    await expect(page.locator('#todo-list')).toContainText('Noch keine Todos');
    server.closeAllConnections();
    await new Promise<void>(resolve => server.close(() => resolve()));
    await page.locator('#new-todo').click();
    await page.locator('#todo-title').fill('Offline');
    await page.locator('#todo-description').fill('Darf nicht gespeichert werden');
    await page.locator('#submit-todo').click();
    await expect(page.locator('#error-msg')).toContainText('Server nicht erreichbar');
    await expect(page.locator('.todo-card')).toHaveCount(0);
    await expect(page.locator('#todo-title')).toHaveValue('Offline');
  } finally { server.closeAllConnections(); server.close(); }
});

test('browser network evidence verifies real methods, payloads, headers, responses and errors', async ({ page, request }, testInfo) => {
  for (const todo of await (await request.get('/api/todos')).json()) await request.delete(`/api/todos/${todo.id}`);
  const traffic: Array<Record<string, unknown>> = [];
  const pending: Promise<void>[] = [];
  const cdpRequests: Array<Record<string, unknown>> = [];
  const cdpResponses: Array<Record<string, unknown>> = [];
  const session = await page.context().newCDPSession(page);
  await session.send('Network.enable');
  session.on('Network.requestWillBeSent', event => {
    if (event.request.url.includes('/api/')) cdpRequests.push({ requestId: event.requestId, method: event.request.method, url: event.request.url, postData: event.request.postData });
  });
  session.on('Network.responseReceived', event => {
    if (event.response.url.includes('/api/')) cdpResponses.push({ requestId: event.requestId, url: event.response.url, status: event.response.status, mimeType: event.response.mimeType });
  });
  page.on('response', response => {
    if (!response.url().includes('/api/')) return;
    pending.push((async () => {
      const req = response.request();
      const text = await response.text();
      traffic.push({ method: req.method(), url: response.url(), requestBody: req.postData(), requestHeaders: req.headers(), status: response.status(), responseHeaders: response.headers(), responseBody: text });
    })());
  });
  await page.goto('/');
  await expect(page.locator('#todo-list')).toContainText('Noch keine Todos');
  await page.locator('#new-todo').click();
  await page.locator('#todo-title').fill('Network evidence');
  await page.locator('#todo-description').fill('Real browser request');
  await page.locator('#todo-priority').selectOption('niedrig');
  await page.locator('#todo-due-date').fill('2027-05-04');
  const posted = page.waitForResponse(r => r.request().method() === 'POST');
  await page.locator('#submit-todo').click();
  const createdResponse = await posted;
  const created = await createdResponse.json();
  expect(createdResponse.status()).toBe(201);
  expect(createdResponse.headers()['location']).toBe(`/api/todos/${created.id}`);
  expect(createdResponse.request().postDataJSON()).toEqual({ title: 'Network evidence', description: 'Real browser request', priority: 'niedrig', dueDate: '2027-05-04' });
  expect(created.status).toBe('offen');
  await page.getByRole('button', { name: 'Bearbeiten', exact: true }).click();
  await page.locator('#todo-title').fill('Network edited');
  await page.locator('#todo-status').selectOption('in Bearbeitung');
  await page.locator('#todo-due-date').fill('');
  const replaced = page.waitForResponse(r => r.request().method() === 'PUT');
  await page.locator('#submit-todo').click();
  const put = await replaced;
  expect(put.status()).toBe(200);
  expect(put.request().postDataJSON()).toEqual({ title: 'Network edited', description: 'Real browser request', priority: 'niedrig', status: 'in Bearbeitung' });
  expect((await put.json()).dueDate).toBeUndefined();
  const patched = page.waitForResponse(r => r.request().method() === 'PATCH');
  await page.locator('.todo-checkbox').check();
  const patch = await patched;
  expect(patch.status()).toBe(200);
  expect(patch.request().postDataJSON()).toEqual({ status: 'erledigt' });
  const deleted = page.waitForResponse(r => r.request().method() === 'DELETE');
  await page.getByRole('button', { name: 'Löschen', exact: true }).click();
  const deletion = await deleted;
  expect(deletion.status()).toBe(204);
  expect(await deletion.text()).toBe('');
  const errors = await page.evaluate(async id => {
    const probes = [
      { url: `/api/todos/${id}`, init: undefined },
      { url: '/api/unknown', init: undefined },
      { url: '/api/todos', init: { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: '{}' } },
      { url: '/api/todos', init: { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: '{"title":' } },
    ];
    const results = [];
    for (const probe of probes) {
      const response = await fetch(probe.url, probe.init);
      results.push({ status: response.status, body: await response.json() });
    }
    return results;
  }, created.id);
  expect(errors.map(result => result.status)).toEqual([404, 404, 400, 400]);
  for (const error of errors) expect(typeof error.body.error).toBe('string');
  await Promise.all(pending);
  for (const method of ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']) expect(cdpRequests.some(entry => entry.method === method)).toBe(true);
  for (const status of [200, 201, 204, 400, 404]) expect(cdpResponses.some(entry => entry.status === status)).toBe(true);
  expect(traffic.some(entry => entry.method === 'GET' && entry.url === `http://127.0.0.1:3000/api/todos/${created.id}` && entry.status === 200)).toBe(true);
  for (const entry of traffic.filter(entry => ['POST', 'PUT', 'PATCH'].includes(entry.method as string))) {
    expect((entry.requestHeaders as Record<string, string>)['content-type']).toBe('application/json');
  }
  const evidencePath = testInfo.outputPath('network-evidence.json');
  await writeFile(evidencePath, JSON.stringify({ verification: 'Automated Playwright + Chrome DevTools Protocol; not manual DevTools UI inspection', traffic, cdpRequests, cdpResponses }, null, 2));
  await testInfo.attach('browser-network-evidence', { path: evidencePath, contentType: 'application/json' });
  await session.detach();
});
