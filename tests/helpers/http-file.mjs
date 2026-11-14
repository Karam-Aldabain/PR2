import fs from 'node:fs/promises';
import vm from 'node:vm';
import assert from 'node:assert/strict';

/** Executes the request/response-handler subset used by this project's .http files.
 * This is a Node compatibility runner, not the JetBrains/WebStorm HTTP client.
 */
export async function runHttpFile(file, baseUrl) {
  const source = (await fs.readFile(file, 'utf8')).replaceAll('\r\n', '\n');
  const variables = new Map([...source.matchAll(/^@(\w+)\s*=\s*(.+)$/gm)].map(match => [match[1], match[2].trim()]));
  if (baseUrl) variables.set('baseUrl', baseUrl);
  const results = [];
  for (const block of source.split(/^### /m).slice(1)) {
    const [name, ...lines] = block.split('\n');
    const requestText = lines.join('\n').split(/\n>\s*{%/)[0].replace(/^# @name \w+\s*$/gm, '').trim();
    const script = block.match(/>\s*{%([\s\S]*?)%}/)?.[1];
    assert.ok(script, `${file}: ${name} needs response assertions`);
    const expanded = requestText.replace(/\{\{(\w+)\}\}/g, (_, key) => {
      assert.ok(variables.has(key), `Undefined variable ${key}`);
      return variables.get(key);
    });
    const [head, ...bodyParts] = expanded.split('\n\n');
    const [requestLine, ...headerLines] = head.split('\n');
    const match = requestLine.match(/^(GET|POST|PUT|PATCH|DELETE)\s+(\S+)$/);
    assert.ok(match, `Unsupported request line: ${requestLine}`);
    const [, method, url] = match;
    const headers = Object.fromEntries(headerLines.filter(Boolean).map(line => {
      const colon = line.indexOf(':');
      assert.ok(colon > 0, `Invalid header: ${line}`);
      return [line.slice(0, colon), line.slice(colon + 1).trim()];
    }));
    const body = bodyParts.length ? bodyParts.join('\n\n') : undefined;
    const response = await fetch(url, { method, headers, body, signal: AbortSignal.timeout(10000) });
    const text = await response.text();
    const responseBody = text && response.headers.get('content-type')?.includes('json') ? JSON.parse(text) : text;
    let assertions = 0;
    let cases = 0;
    vm.runInNewContext(script, {
      response: { status: response.status, body: responseBody, headers: { valueOf: key => response.headers.get(key) } },
      client: {
        test: (_title, fn) => { fn(); cases++; },
        assert: (condition, message) => { assert.ok(condition, `${file}: ${name}: ${message}`); assertions++; },
        global: { set: (key, value) => variables.set(key, value), get: key => variables.get(key) },
      },
    }, { timeout: 1000 });
    assert.ok(cases && assertions, `${file}: ${name} did not execute assertions`);
    results.push({ name, method, url, status: response.status, cases, assertions });
  }
  assert.ok(results.length, `No requests found in ${file}`);
  return results;
}
