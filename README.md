# CarbonLenz — Product Portfolio

Product portfolio for **CarbonLenz** — an AI-powered CBAM Evidence Scanner that turns messy supplier emissions evidence into EU CBAM cost, risk, and supplier action.

## Stack

- **Framework:** Astro 6.x (zero-JS by default, static output)
- **Typography:** Geist Mono (display/headings) + Geist (body)
- **Icons:** Phosphor Icons (regular, fill, bold weights)
- **Styling:** Hand-written CSS from design tokens (no Tailwind, no UI library)
- **Product build:** Groq (Llama 3.3 70B) + FastAPI + Next.js + Recharts
- **Deploy:** Netlify (static)

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