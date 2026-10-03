# Telegram VDS Panel

Production-oriented monorepo for managing Telegram accounts that the operator owns or is authorized to manage. The system is split into an HTTP backend, a Next.js frontend, and isolated Telegram workers connected through PostgreSQL and Redis/BullMQ.

## Repository layout

```text
apps/
  backend/          HTTP API, validation, auth and orchestration
  frontend/         Next.js web panel
  telegram-worker/  long-running Telegram jobs; never runs in HTTP requests
packages/
  config/            shared environment/config contracts
  types/             shared API/domain types
infra/
  nginx/             reverse proxy configuration
  prometheus/        optional monitoring profile
prisma/              database schema and migrations
docs/                architecture and deployment notes
```

## Development

```bash
copy .env.example .env
npm install
docker compose up --build
```

The current increment establishes the architecture and runnable service boundaries. Subsequent increments add persistence, authentication/RBAC, proxy management, Telegram workers, and the panel features described in the product specification.

## Safety boundary

Only accounts and chats the operator owns or is authorized to manage may be used. The application must surface Telegram limits such as FloodWait and privacy restrictions; it must not bypass them, rotate identities/proxies to evade limits, or automate prohibited activity.
