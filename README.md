# Raphaelle Piosca ePortfolio

One-page ePortfolio for Raphaelle Piosca — IT professional based in Auckland, New Zealand.

## Visual direction

**Hero:** split-screen — looping video (`public/videos/kit1.mp4`) over a burnt-to-amber orange grade (`#8b3a00` → `#ffb300`), white panel for role + location, brand lockup + CTAs on the left.

**Following sections** keep the same orange language with compact imagery and distinct layouts:
- **About** — compact story column with sticky photo rail
- **Path** — career aspirations as Immediate / 2–3 years / Longer-term steps on orange
- **Self-awareness** — Whetten-informed strengths, growth, and reflection bands
- **Work** — ISO/IEC 27002 → NZISM security mapping case study
- **Goals** — personal & professional learning goals (PPLG)
- **Journals** — accordion reflective journals + peer-feedback reflections
- **Contact** — channels with Font Awesome icons + downloadable CV PDF

Typography: Outfit + Bebas Neue. Brand mark: isometric RDP keycaps (`public/images/kit-logo.png`). Source footage also lives in `docs/kit1.mp4` / `docs/kit1.gif`. Content source: `docs/Content-ePortfolio.docx`. CV: `public/docs/Raphaelle-Dayao-Piosca-CV.pdf`.

## Stack

- Vite + React + TypeScript
- Font Awesome (contact channel icons + CV button)
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

## Deploy (Vercel)

1. Import `protodevsystems/marikit-eportfolio` at [vercel.com/new](https://vercel.com/new).
2. Set **Framework Preset** to **Vite** (not Brunch).
3. Confirm build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
4. Deploy. Later pushes to `main` redeploy automatically.

`vercel.json` in the repo locks these settings for Hobby / free accounts.

## Project structure

```
src/
  components/   # Page sections (Nav, Hero, About, …)
  styles/       # Global CSS variables and motion
public/images/  # Portrait and lifestyle photos
docs/           # Source content and original assets
```

## Future motion / 3D

Hero media: looping `public/videos/kit1.mp4` with matching poster/fallback `public/images/hero-kit-poster.jpg` (never the graduation still). Light CSS entrance and scroll reveals ship in v1.
