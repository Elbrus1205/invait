FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
COPY apps/frontend/package.json apps/frontend/package.json
RUN npm install
COPY apps/frontend apps/frontend
RUN npm run build --workspace @telegram-vds/frontend

FROM node:22-alpine
ENV NODE_ENV=production
WORKDIR /app
COPY --from=build /app/apps/frontend/.next/standalone ./
COPY --from=build /app/apps/frontend/.next/static ./apps/frontend/.next/static
EXPOSE 3000
CMD ["node", "apps/frontend/server.js"]
