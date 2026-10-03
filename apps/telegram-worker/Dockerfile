FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json tsconfig.base.json ./
COPY apps/telegram-worker/package.json apps/telegram-worker/package.json
COPY packages/config/package.json packages/config/package.json
COPY packages/types/package.json packages/types/package.json
RUN npm install
COPY apps/telegram-worker apps/telegram-worker
COPY packages packages
RUN npm run build --workspace @telegram-vds/worker

FROM node:22-alpine
ENV NODE_ENV=production
WORKDIR /app
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/apps/telegram-worker/dist ./apps/telegram-worker/dist
COPY --from=build /app/apps/telegram-worker/package.json ./apps/telegram-worker/package.json
COPY --from=build /app/packages ./packages
CMD ["node", "apps/telegram-worker/dist/index.js"]
