# Jack — 3D Creator Portfolio

A dark-themed, animation-rich portfolio landing page built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (typically http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/
    ContactButton.tsx      Pill CTA with gradient background
    LiveProjectButton.tsx  Ghost/outline pill button
    FadeIn.tsx              whileInView fade + slide wrapper
    Magnet.tsx               Mouse-following magnetic hover effect
    AnimatedText.tsx        Scroll-driven character reveal
  sections/
    HeroSection.tsx
    MarqueeSection.tsx
    AboutSection.tsx
    ServicesSection.tsx
    ProjectsSection.tsx
  App.tsx
  main.tsx
  index.css
```

## Notes

- Font: Kanit (Google Fonts, weights 300–900), loaded via `index.html`.
- All imagery is referenced from the external URLs specified in the design brief. Swap these out in `src/sections/*.tsx` for your own assets when ready.
- The projects section uses a sticky-stacking scroll effect (Framer Motion `useScroll` + `useTransform`) — each card scales down slightly as the next one arrives.
- `prefers-reduced-motion` is respected globally via `src/index.css`.
