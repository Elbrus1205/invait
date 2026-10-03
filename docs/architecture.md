# Architecture

The platform uses a command/query split between the HTTP API and asynchronous Telegram execution:

```text
Browser -> Nginx -> frontend / backend
                         |
                         +-> PostgreSQL (state, audit, task metadata)
                         +-> Redis/BullMQ (commands)
                                      |
                                      v
                              telegram-worker(s)
```

The backend validates requests, persists intent, and enqueues jobs. Workers own GramJS connections and update durable state. Multiple worker replicas can be added without coupling them to HTTP request lifetimes.

## Service boundaries

- `apps/frontend`: presentation, session-aware API client, realtime UI.
- `apps/backend`: REST API, health checks, authorization, repositories, queues.
- `apps/telegram-worker`: BullMQ consumers and Telegram adapters.
- `postgres`: durable relational state.
- `redis`: queues, locks, ephemeral realtime coordination.
- `nginx`: TLS termination and routing; never exposes PostgreSQL, Redis, sessions, or uploads.

## Invariants

1. Secrets are supplied through environment variables and never committed.
2. Telegram sessions are encrypted before persistence.
3. Long-running Telegram work is asynchronous and idempotent.
4. Every privileged mutation is auditable.
5. Telegram restrictions are represented as errors/statuses, never bypassed.
