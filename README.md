# CRM Control Center

Minimalistic CRM dashboard built with Next.js and React. Provides a single-page snapshot of revenue metrics, pipeline health, team activity, and actionable tasks.

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000` to view the dashboard.

## Scripts

- `npm run dev` – start the development server
- `npm run build` – create a production build
- `npm start` – run the production server
- `npm run lint` – lint the project

## Deployment

The project is optimized for Vercel. After building locally, deploy with:

```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-b39680b0
```

## Tech Stack

- Next.js 14 App Router
- React 18
- TypeScript
- CSS-in-JS via inline styles for rapid iteration

## Structure

```
app/
  layout.tsx       # Root layout and metadata
  page.tsx         # Dashboard implementation
  globals.css      # Global baseline styles
components/
  activity-feed.tsx
  metric-card.tsx
  pipeline-stage-card.tsx
  task-list.tsx
  data/dashboard.ts
```

Extend the dashboard by replacing the static data in `components/data/dashboard.ts` with live CRM data sources or API integrations.
