FROM node:20.12-bullseye AS base

FROM base AS deps
# RUN apk add --no-cache libc6-compat
# RUN curl -fsSL https://get.pnpm.io/install.sh | bash -
WORKDIR /app

COPY package.json pnpm-lock.yaml* ./
# RUN exec sh && pnpm install
RUN npm i -g npm@latest
RUN npm i -g pnpm@latest
RUN pnpm install

# RUN \
#   if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
#   elif [ -f package-lock.json ]; then npm ci; \
#   elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
#   else echo "Lockfile not found." && exit 1; \
#   fi

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm i -g npm@latest
RUN npm i -g pnpm@latest
RUN pnpm build

FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

USER nextjs

COPY --from=builder /app/public ./public

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME localhost

CMD ["node", "server.js"]
