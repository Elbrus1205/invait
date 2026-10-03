export type ServiceStatus = "ok" | "degraded" | "unavailable";

export interface HealthResponse {
  service: "backend" | "telegram-worker";
  status: ServiceStatus;
  timestamp: string;
}

export const TELEGRAM_JOB_QUEUE = "telegram-jobs";

export type TelegramJobName =
  | "account.connect"
  | "account.disconnect"
  | "message.send"
  | "chat.sync";
