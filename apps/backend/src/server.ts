import { backendEnvironmentSchema } from "@telegram-vds/config";
import { buildApp } from "./app.js";

const environment = backendEnvironmentSchema.parse(process.env);
const app = buildApp();

await app.listen({ host: "0.0.0.0", port: environment.BACKEND_PORT });
