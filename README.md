# Burgers Kokand — Premium Digital Menu

Stage 1 of the project: **customer-facing menu**, running on local mock data (no Firebase yet).

## Stack
React 19 · Vite · React Router · Framer Motion · Lucide React · CSS Modules

## Run it

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

To verify a production build:

```bash
npm run build
npm run preview
```

## What's included

- **Splash screen** with animated logo and loading bar
- **Home**: hero promo carousel, live search (name / category / ingredients), horizontal
  category filter, Best Sellers / Discounts / New Arrivals rows, full menu grouped by
  category, branch cards, footer
- **Product modal**: image gallery, ingredients, allergens, calories, cooking time,
  availability, related items, favorite toggle
- **Favorites**: persisted to `localStorage`, drawer accessible from the header
- **Language switcher**: Uzbek / Russian / English — every product and UI string is
  translated (`src/i18n/translations.js`, and the `name`/`description`/etc. fields on
  each product in `src/data/products.js`)
- **Theme switcher**: dark (default) / light, persisted to `localStorage`
- **Design system**: `src/styles/variables.css` — black + gold palette, Archivo Black /
  Inter / Space Mono type system, glass header, the rotated "quality seal" badge on
  Best Seller cards
- Skeleton loaders, reduced-motion support, keyboard focus states, semantic HTML

## Mock data

Everything under `src/data/` (`products.js`, `categories.js`, `banners.js`,
`promotions.js`, `branches.js`) is written in the exact shape the future Firestore
collections will use, so swapping in real Firebase reads later is a matter of
replacing the import with a Firestore query — no component code needs to change.

## Not in this stage

- Firebase (Auth / Firestore / Storage / Analytics) — needs your real project
  credentials, so it's deliberately deferred
- `/admin` panel (CRUD, dashboard, analytics charts)
- PWA manifest is present but service-worker/offline caching is not wired up yet

These are the next build phases — see the conversation for the plan.
# qr-demo
