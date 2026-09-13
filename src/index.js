import { config } from "./config.js";
import { createAppServer } from "./server.js";

const server = createAppServer();

server.listen(config.port, () => {
  console.log(`AI Software listening on http://localhost:${config.port} (${config.nodeEnv})`);
});
