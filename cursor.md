# AI Software — Cursor instructions

Node.js project. Keep this file short and update it as the repo grows.

## Project

- **Name:** AI Software
- **Runtime:** Node.js 20+ (see `.nvmrc`)
- **Module system:** ESM (`"type": "module"`)
- **Package manager:** npm
- **Entry:** `src/index.js`
- **HTTP:** built-in `node:http` (no Express yet)

## Layout

```
src/           application code
  index.js     process entry (listen)
  server.js    request handlers
  config.js    env / port
test/          node:test files
```

## How to work in this repo

- Prefer small, focused changes. Read existing files before adding new ones.
- Keep Node APIs in `src/`. Do not add frameworks unless asked.
- Use ESM imports with `.js` extensions.
- Load config from `process.env`; never commit `.env`.
- Do not invent APIs, env vars, or dependencies that are not in the repo.
- Do not commit unless asked.
- Scripts: `npm start`, `npm run dev` (`node --watch`), `npm test`.

## Code style

- Modern JavaScript (ES2023+). No TypeScript unless asked.
- Named exports. Keep modules small.
- Handle errors explicitly; do not swallow exceptions.
- Use `node:test` and `node:assert/strict` for tests.
- Prefer built-in `node:` modules over extra packages.

## Security

- Never log credentials or personal data.
- Validate untrusted input at HTTP boundaries.
- Do not introduce shell injection or unrestricted file writes.

## When you are done

- Summarize what changed and why.
- List files touched.
- Run `npm test` when behavior changes.
