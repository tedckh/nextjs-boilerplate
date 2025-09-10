FROM node:22-alpine AS builder
WORKDIR /app
RUN npm install -g turbo
COPY package.json package-lock.json ./
COPY turbo.json turbo.json
COPY tsconfig.base.json tsconfig.base.json
COPY packages/ packages/
COPY apps/ apps/
RUN npm ci
RUN turbo build --filter=@tedckh/web

FROM node:22-alpine
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/apps/web/.next/standalone/ ./

COPY --from=builder /app/apps/web/public ./apps/web/public
COPY --from=builder /app/apps/web/.next/static ./apps/web/.next/static

EXPOSE 3000

CMD ["node", "apps/web/server.js"]