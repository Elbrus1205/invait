import pino from "pino";
import { TELEGRAM_JOB_QUEUE } from "@telegram-vds/types";

const logger = pino({ name: "telegram-worker" });

logger.info(
  { queue: TELEGRAM_JOB_QUEUE },
  "Worker service initialized; queue consumers are added in the worker phase",
);

const shutdown = (signal: string) => {
  logger.info({ signal }, "Worker shutting down");
  process.exit(0);
};

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));

setInterval(() => undefined, 60_000).unref();
