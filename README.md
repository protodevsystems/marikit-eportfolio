# Raphaelle Piosca ePortfolio

One-page ePortfolio for Raphaelle Piosca — IT professional based in Auckland, New Zealand.

## Visual direction

**Hero:** split-screen — looping video (`public/videos/kit1.mp4`) over a burnt-to-amber orange grade (`#8b3a00` → `#ffb300`), white panel for role + location, brand lockup + CTAs on the left.

**Following sections** keep the same orange language with compact imagery and distinct layouts:
- **About** — text-forward editorial with small controlled photos (not full-bleed banners)
- **Path** — sticky brand column + stepped milestone list on orange
- **Self-awareness** — asymmetric mosaic (lead + warm + deep)
- **Work** — case-study intro with pull quote + letter-marked content grid
- **Goals** — dual personal/professional boards (no center timeline)
- **Contact** — split orange stage + white channel panel (small portrait accent)

Typography: Outfit + Bebas Neue. Source footage also lives in `docs/kit1.mp4` / `docs/kit1.gif`.

## Stack

- Vite + React + TypeScript
- Static build output in `dist/` (easy to host anywhere)

## Setup

On your local machine (Windows / macOS / Linux):

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Build

```bash
npm run build
```

## Temporary hosting

Serve the static build from any machine with Node:

```bash
npm run build
npx serve dist
```

Or drop the `dist/` folder onto Netlify Drop, Cloudflare Pages, GitHub Pages, or any static host.

## Project structure

```
src/
  components/   # Page sections (Nav, Hero, About, …)
  styles/       # Global CSS variables and motion
public/images/  # Portrait and lifestyle photos
docs/           # Source content and original assets
```

## Future motion / 3D

Hero portrait lives in `HeroVisual` so a later React Three Fiber or animation treatment can replace the image without rewriting copy. Light CSS entrance and scroll reveals ship in v1.
