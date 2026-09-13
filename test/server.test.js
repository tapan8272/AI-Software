import assert from "node:assert/strict";
import { test } from "node:test";
import { createAppServer } from "../src/server.js";

function request(server, path) {
  return new Promise((resolve, reject) => {
    const { port } = server.address();
    fetch(`http://127.0.0.1:${port}${path}`)
      .then(async (res) => {
        const body = await res.json();
        resolve({ status: res.status, body });
      })
      .catch(reject);
  });
}

test("GET /health returns ok", async () => {
  const server = createAppServer();
  await new Promise((resolve) => server.listen(0, resolve));

  try {
    const { status, body } = await request(server, "/health");
    assert.equal(status, 200);
    assert.deepEqual(body, { ok: true });
  } finally {
    await new Promise((resolve, reject) => server.close((err) => (err ? reject(err) : resolve())));
  }
});

test("GET /unknown returns 404", async () => {
  const server = createAppServer();
  await new Promise((resolve) => server.listen(0, resolve));

  try {
    const { status, body } = await request(server, "/unknown");
    assert.equal(status, 404);
    assert.equal(body.error, "Not found");
  } finally {
    await new Promise((resolve, reject) => server.close((err) => (err ? reject(err) : resolve())));
  }
});
