const port = Number.parseInt(process.env.PORT ?? "3000", 10);

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error(`Invalid PORT: ${process.env.PORT}`);
}

export const config = {
  port,
  nodeEnv: process.env.NODE_ENV ?? "development",
};
