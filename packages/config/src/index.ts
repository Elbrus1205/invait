import { z } from "zod";

const commonEnvironmentSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  DATABASE_URL: z.string().url(),
  REDIS_URL: z.string().url(),
});

export const backendEnvironmentSchema = commonEnvironmentSchema.extend({
  BACKEND_PORT: z.coerce.number().int().positive().default(4000),
});

export const workerEnvironmentSchema = commonEnvironmentSchema.extend({
  TELEGRAM_API_ID: z.coerce.number().int().positive(),
  TELEGRAM_API_HASH: z.string().min(1),
  TELEGRAM_SESSION_ENCRYPTION_KEY: z.string().min(32),
});
