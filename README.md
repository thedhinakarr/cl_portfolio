# Abhinav Annareddy — CarbonLens Portfolio

Personal portfolio for Abhinav Annareddy, founder of CarbonLens — an AI-powered fair-value engine for the Voluntary Carbon Market.

## Stack

- **Framework:** Astro 6.x (zero-JS by default, static output)
- **Typography:** Geist Mono (display/headings) + Geist (body)
- **Icons:** Phosphor Icons (regular, fill, bold weights)
- **Styling:** Hand-written CSS from design tokens (no Tailwind, no UI library)
- **Deploy:** Vercel (static)

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:4321](http://localhost:4321).

## Build

```bash
pnpm build
pnpm preview
```

## Deploy

Push to GitHub and connect to Netlify. The `netlify.toml` is pre-configured with cache and security headers. Netlify auto-detects Astro — no adapter needed for static builds.

## Design system

All tokens live in `src/styles/tokens.css`. The brand uses a single green (`oklch(0.723 0.219 149.579)`) at full intensity — never diluted. Geist Mono carries all display/heading typography. Numbers are architecture: tabular-nums, tight tracking, billboard scale.

## Structure

```
src/
  components/   # 8 section components + LeafMark brand tile
  content/      # work.ts — typed project data
  layouts/      # Layout.astro — head, meta, fonts
  pages/        # index.astro — single page
  styles/       # tokens.css, global.css, animations.css
```
