import Fastify from "fastify";
import type { HealthResponse } from "@telegram-vds/types";

export function buildApp() {
  const app = Fastify({ logger: true });

  app.get<{ Reply: HealthResponse }>("/health", async () => ({
    service: "backend",
    status: "ok",
    timestamp: new Date().toISOString(),
  }));

  app.get<{ Reply: HealthResponse }>("/health/live", async () => ({
    service: "backend",
    status: "ok",
    timestamp: new Date().toISOString(),
  }));

  return app;
}
