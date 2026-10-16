# Marketly V1

Global digital marketplace starter built with Next.js App Router.

## Run locally

```bash
npm install
npm run dev
```

## Vercel environment variables

- `NEXT_PUBLIC_FLW_PUBLIC_KEY` — Flutterwave public key.
- `FLW_SECRET_KEY` — Flutterwave secret key. Never expose this in client code or GitHub.
- `FLW_WEBHOOK_HASH` — webhook verification secret/hash.
- `DATABASE_URL` — production Postgres connection for users, products, orders, subscriptions and downloads.
- `NEXT_PUBLIC_APP_URL` — deployed Marketly URL.

The V1 UI is deployable now. Persistent authentication/database fulfillment still needs to be connected before accepting real orders. Payment fulfillment must remain server-side and should verify transaction status, amount, currency and reference before granting a download.


## Product PDF downloads

Each catalogue item has a product-specific PDF starter guide or worksheet generated in the visitor's browser. Download actions require the demo login UI; free items are claimed into browser storage. Paid entitlements are signed server-side after Flutterwave transaction verification, amount, currency and reference checks. FLW_SECRET_KEY must be configured in Vercel.

**Production limitation:** the current signup/login UI is still browser-storage demo authentication, not a secure persistent account system. Before accepting real payments at scale, connect database-backed authentication and persist purchases against the authenticated user. Some listings describe planned software concepts; their PDF is a guide/workbook, not the full software source bundle or a live AI/trading integration.


## Stage 3.1 — database foundation

Marketly now includes a PostgreSQL schema managed by Prisma (prisma/schema.prisma) and a reusable server-side Prisma client (lib/prisma.ts). The schema defines users, products, orders, download grants, sessions and idempotency records for payment events. It is a foundation, not yet a complete production authentication or payment-fulfillment implementation.

### Connect the database

1. Create a PostgreSQL database with your provider (for example, a managed Postgres database).
2. In Vercel → Project → Settings → Environment Variables, set DATABASE_URL to the provider's private connection string. Keep it secret; never put it in NEXT_PUBLIC_ variables or commit it to GitHub.
3. Redeploy so the build can install Prisma and generate its client.
4. For the initial schema setup, run `npx prisma db push` from a trusted local terminal with DATABASE_URL configured. For a production team workflow, create and commit reviewed Prisma migrations and use `npx prisma migrate deploy` for subsequent releases.
5. Confirm tables exist in the provider's database console before continuing to Stage 3.2.

### Security boundaries

- Keep FLW_SECRET_KEY and DATABASE_URL server-only. Rotate them immediately if they are exposed.
- A database schema alone does not secure downloads. The next stage must implement server-side sessions, password hashing, ownership checks on every download request, persisted order creation, verified Flutterwave callbacks/webhooks, transaction-reference uniqueness, idempotent fulfillment, and rate limits.
- Never grant a paid download based on a browser redirect, client-side state, localStorage, or a claimed payment screenshot. Only server-verified provider data matched against the exact pending order, expected amount and currency can mark an order paid.
- No system can honestly promise that an app is impossible to hack. These controls reduce risk, and the deployed app still needs build checks, security testing, backups, monitoring and dependency updates.

**Current limitation:** the existing login/signup and entitlement flow from V1 has not yet been migrated to this database. Do not treat the current browser-storage login as production-grade authentication or accept significant real payments until Stage 3.2 connects database-backed identity and Stage 3.3 connects purchases and download grants end to end.
