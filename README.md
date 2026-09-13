# Surely

Marketing site for Surely, built with Next.js, Tailwind CSS v4, and shadcn/ui.
Statically exported — no server required.

## Stack

- **Next.js 16** (App Router, TypeScript) — static export (`output: "export"` in `next.config.ts`)
- **Tailwind CSS v4** — design tokens live in `src/app/globals.css` (`@theme` block)
- **shadcn/ui** (Radix primitives) — components in `src/components/ui`
- **next/font** — Plus Jakarta Sans + Source Serif 4, self-hosted at build time

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # static export written to /out
npm run lint
```

## Design system

- **Colors** — Cloud (neutral light), Midnight (neutral dark), Lime (brand
  accent) ramps, each 50–900. Defined once in `src/app/globals.css` and
  available as Tailwind utilities: `bg-cloud-100`, `text-midnight-800`,
  `border-lime-500`, etc. shadcn's semantic tokens (`background`, `primary`,
  `accent`, …) are mapped on top of these ramps rather than redefined.
- **Type scale** — Display / Heading / Body sizes from the brand spec are
  registered as Tailwind font-size utilities with matching line-heights:
  `text-display-lg`, `text-heading-xl` … `text-heading-xs`, `text-body-xl` …
  `text-body-xs`. Apply weight separately (`font-extrabold`, `font-semibold`,
  etc.) per the type spec table.
- **Fonts** — `font-sans` (Plus Jakarta Sans) for all structural type,
  `font-serif` (Source Serif 4) reserved for editorial/quote moments.

## Placeholder imagery

The hero photo, founder portraits, and insight thumbnails aren't final yet.
They're rendered by `<PlaceholderImage />` (`src/components/placeholder-image.tsx`)
— a labeled, patterned stand-in sized to the real layout. To swap in a real
photo, replace the `<PlaceholderImage label="…" .../>` usage with a real
`<img>` / `next/image` of the same className (aspect ratio + rounding), no
other layout changes needed.

## Deploying

This repo is set up to push to GitHub and deploy on Vercel:

1. `git init` (if not already), commit, and push to a GitHub repo.
2. Import the repo in Vercel — it auto-detects Next.js. No environment
   variables are required for this static build.

Vercel does not require the static export — it can serve the Next.js app
directly — but `output: "export"` is kept so the site can also be hosted on
any static host (GitHub Pages, S3, etc.) if needed later.
