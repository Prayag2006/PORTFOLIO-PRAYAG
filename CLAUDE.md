# Prayag Kansara — Portfolio

Personal portfolio for Prayag Kansara (Web Designer & Full-Stack Developer).
Goal: a portfolio that reads as senior-level — striking, fast, and accessible.

## Stack

- Next.js 15 (App Router) + React 19.2 + TypeScript (strict)
- Tailwind CSS 3 (`tailwind.config.ts` holds the palette; do not hardcode new colors)
- three.js + @react-three/fiber v9 + @react-three/drei v10 + @react-three/postprocessing
- `lenis` for smooth scroll, `motion` for DOM animation
- Dev-only: `leva` (live tuning), `r3f-perf` (FPS overlay)

### Locked dependency — do not "upgrade"

React and react-dom are **pinned to 19.2.8**. `@react-three/fiber@9` declares
`react >=19 <19.3`; React 19.3 breaks its custom reconciler. Do not bump React
past 19.2.x until R3F ships a release that supports it.

## Design language — "warm brutalism"

Evolving the existing warm editorial base toward bold, high-contrast brutalism.
Keep the warm identity; add hard edges and heavy weight.

| Token | Value | Use |
|---|---|---|
| `warmBg` | `#F5F1E8` | page ground |
| `warmBgAlt` | `#F1EDE3` | alternating sections |
| `textMain` | `#171717` | body + brutalist blocks |
| `textMuted` | `#55504A` | secondary copy |
| `burntOrange` | `#B85C3A` | single accent — use sparingly |
| `warmBorder` | `#C9C2B7` | hairline rules |

Fonts (CSS vars in `globals.css`): `--font-display` Bebas Neue (oversized
headlines), `--font-serif` DM Serif Display (names/titles), `--font-sans` Inter
(body), `--font-signature` Caveat (signature only).

Rules:
- Oversized viewport-unit type (`text-[15vw]`) is a signature move — keep it.
- Borders are structural and visible (`border-2`/`border-4` black), not decorative shadows.
- Exactly one accent color per viewport. Orange is a highlight, never a background wash.
- Hard edges over soft shadows. Prefer offset solid blocks to blur.
- Motion is snappy and mechanical: `cubic-bezier(0.16, 1, 0.3, 1)`, 300–600ms.

## 3D rules — non-negotiable

The 3D is **one focal object in the hero plus subtle accents**. It must never
make the site slow. Every Canvas must follow these:

1. **Always** load via `dynamic(() => import(...), { ssr: false })`. WebGL has no
   `window` on the server.
2. `dpr={[1, 2]}` — never uncapped. Uncapped DPR is the #1 cause of a laggy
   3D portfolio on retina/4K displays.
3. `gl={{ antialias: false, powerPreference: 'high-performance' }}` and get AA
   from an SMAA postprocessing pass instead (MSAA conflicts with postprocessing).
4. `frameloop="demand"` for anything static; only use `"always"` when something
   animates continuously, and `invalidate()` on interaction.
5. Respect `prefers-reduced-motion` — fall back to a static frame, no exceptions.
6. The hero scene is gated at `lg` (>= 1024px), where the two-column layout
   exists. Phones and tablets get a flat block and never download three.js.
7. Models: Draco or Meshopt compressed `.glb`, KTX2 textures. Budget: under 1MB
   for the hero asset.
8. Dispose geometries/materials on unmount; never allocate `new THREE.Vector3()`
   inside `useFrame`.

Colors in 3D come from the palette above — the scene must look like it belongs
to the page, not like a demo dropped in.

## Structure

```
src/app/layout.tsx      root layout + metadata (SEO already configured)
src/app/page.tsx        single-page composition
src/app/globals.css     CSS vars, font imports, utilities
src/components/         Hero, SelectedProjects, SkillsAndExpertise,
                        Testimonials, ContactCTA, Header, Footer,
                        VerticalSideLabels
```

Components are named exports (`export const Hero: React.FC`), not default.

## Workflow

- `npm run dev` (port 3000) — a `.claude/launch.json` exists, so the browser
  pane can be opened to inspect and screenshot the live scene.
- **Always look at the rendered result** when changing anything visual or 3D.
  Read the browser console for WebGL warnings after touching the Canvas.
- `npm run build` must pass before anything is called done.

## Quality bar

- Lighthouse: Performance ≥ 90 on mobile, Accessibility 100.
- Hero must be interactive within 2.5s on a mid-range phone.
- Every image has real alt text; every interactive element is keyboard-reachable
  with a visible focus ring.
