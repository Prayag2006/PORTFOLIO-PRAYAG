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

## Design language — editorial

Driven by the hero: an oversized Bebas Neue wordmark, a cut-out portrait
crossing in front of it, a burnt-orange disc, and hairline rules. An earlier
pass styled the page as "warm brutalism" (2px ink borders, solid offset
blocks, squared avatars); that was replaced to match the hero reference. Do
not reintroduce offset shadows or heavy ink borders.

| Token | Value | Use |
|---|---|---|
| `warmBg` | `#F5F1E8` | page ground |
| `warmBgAlt` | `#F1EDE3` | alternating sections |
| `textMain` | `#171717` | headings + body |
| `textMuted` | `#55504A` | secondary copy |
| `burntOrange` | `#B85C3A` | single accent |
| `warmBorder` | `#C9C2B7` | every rule and card border |

Fonts (CSS vars in `globals.css`): `--font-display` Bebas Neue (the wordmark
and every section heading), `--font-serif` DM Serif Display (names, set
uppercase), `--font-sans` Inter (body), `--font-signature` Caveat (signature).

Rules:
- Section headings all use `<SectionHeading>` so they tie back to the hero
  wordmark. Do not hand-roll one.
- Borders are **1px `warmBorder`**, never 2px ink. Surfaces use `.panel`;
  interactive ones add `.panel-hover` (border turns orange, 4px lift).
- Circles are part of the language — the hero disc, the badge, avatars,
  capability markers.
- Exactly one accent colour per viewport. Orange is a highlight, never a wash.
- Motion is quiet: `cubic-bezier(0.16, 1, 0.3, 1)`, 300-700ms.
- Scroll reveals go through `<Reveal>`; stagger siblings with `delay={index}`.

## 3D rules — non-negotiable

The 3D sculpture is **opt-in**: `HeroBackdrop` defaults to the flat orange
disc from the reference, and `variant="sculpture"` swaps in the animated
monolith. If it is enabled, every Canvas must follow these:

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
