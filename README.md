# Alicia Martin Portfolio (Next.js)

A clean Next.js rebuild of the [Alicia Martin portfolio](https://daniel0629.vercel.app), recreated from the cloned source with the same horizontal-scroll experience, animated backgrounds, interactive hotspots, and project carousels.

## Features

- Vertical scroll drives horizontal parallax navigation
- Five illustrated scene sections with background videos
- Interactive career and skills hotspots
- About panel with highlighted bio text
- Dual Swiper carousels for showcase and projects
- Background music toggle and fixed contact/social UI

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
  app/                 # Next.js app router
  components/portfolio # UI components
  data/portfolio.ts    # Content and project data
  hooks/               # Scroll, rem scaling, music
  styles/              # Ported original CSS
public/
  images/              # Backgrounds, UI assets, videos
  font/                # Poppins fonts
```

## Build

```bash
npm run build
npm start
```

## Notes

- Scroll down to move horizontally through the portfolio scenes.
- Assets were sourced from the original deployment for visual parity.
- Customize content in `src/data/portfolio.ts`.
