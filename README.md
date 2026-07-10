# Raphaelle Piosca ePortfolio

One-page ePortfolio for Raphaelle Piosca — IT professional based in Auckland, New Zealand.

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
