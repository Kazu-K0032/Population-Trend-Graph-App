# Population-Trend-Graph-App

[日本語](../../README.md) | English

An application that displays population trend graphs by prefecture.

## Regarding the Termination of RESAS API Services

New RESAS API creations will be available until **October 31, 2024**.

All RESAS API services will be terminated as of **March 24, 2025**.

Reference: [Regarding the Termination of RESAS API Services and Suspension of New Applications](https://opendata.resas-portal.go.jp/docs/api/v1/index.html)

On **October 5, 2025**, we migrated to e-Stat API as an alternative to RESAS API.

※We prioritized getting the system working properly, so we used AI agents. There may be some issues.

## Deployment

https://population-trend-graph-app.vercel.app/

## Installation

```bash
git clone <repository>
cd Population-Trend-Graph-App
```

## Install Dependencies

```bash
pnpm install

# or
npm install
```

### Environment Variable Configuration

Create a `.env.local` file.

```bash
# .env.local
VITE_APP_ESTAT_APP_ID=Your e-Stat application ID

# Fallback for API service termination (optional)
VITE_APP_USE_MOCK_DATA=false
```

**How to obtain an e-Stat API Application ID:**

1. Access the [e-Stat API Features page](https://www.e-stat.go.jp/api/api-dev/)
2. Register and log in
3. Obtain an Application ID from "API Features (Application ID Issuance)" in your My Page

### How to Run

```bash
pnpm dev
# or
npm run dev
```
