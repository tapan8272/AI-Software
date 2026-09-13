# AI Software

A Node.js HTTP service (ESM) using the built-in `node:http` module. No web framework yet.

## Requirements

- Node.js 20 or newer (see `.nvmrc`)
- npm

## Setup

```bash
npm install
```

Optional: copy environment values into a local `.env` file (do not commit it). `dotenv` is listed as a dependency; `PORT` and `NODE_ENV` can also be set in the shell.

| Variable   | Default         | Description        |
| ---------- | --------------- | ------------------ |
| `PORT`     | `3000`          | HTTP listen port   |
| `NODE_ENV` | `development`   | Runtime environment |

## Scripts

| Command         | What it does                          |
| --------------- | ------------------------------------- |
| `npm start`     | Run `src/index.js`                    |
| `npm run dev`   | Same, with `node --watch`             |
| `npm test`      | Run tests with built-in `node:test`   |

## HTTP API

Start the server, then:

| Method | Path        | Response                                      |
| ------ | ----------- | --------------------------------------------- |
| `GET`  | `/`         | `{ "name": "ai-software", "message": "..." }` |
| `GET`  | `/health`   | `{ "ok": true }`                              |
| other  | any         | `404` `{ "error": "Not found" }`              |

Example:

```bash
npm start
curl http://localhost:3000/health
```

## Layout

```
src/
  index.js    process entry (listen)
  server.js   request handlers
  config.js   port and NODE_ENV
test/         node:test files
cursor.md     agent instructions for this repo
```

## License

ISC
