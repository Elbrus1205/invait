# VDS deployment (outline)

1. Provision Ubuntu 24.04 and a non-root deploy user.
2. Allow only SSH, HTTP, and HTTPS through the firewall.
3. Install Docker Engine and Compose plugin.
4. Clone the repository and create `.env` from `.env.example`.
5. Set strong JWT, database, and session-encryption secrets.
6. Start with `docker compose up -d --build`.
7. Run Prisma migrations from the backend container.
8. Configure DNS and issue a Let's Encrypt certificate at Nginx.
9. Configure encrypted PostgreSQL backups; never include raw TData or sessions.
10. Enable the optional monitoring profile when Prometheus/Grafana are required.
