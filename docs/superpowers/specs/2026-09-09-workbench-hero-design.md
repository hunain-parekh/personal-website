# Workbench hero — 3D portfolio centerpiece

## Decision
Concept 1 "The Workbench": one WebGL centerpiece in the hero, cheap CSS 3D everywhere else. Abstract brushed-brass geometry, no logos. Sculpture replaces the hero portrait; portrait moves to About.

## Hero sculpture
- `react-three-fiber` canvas fills the right half of the hero (desktop) / behind text (mobile).
- 7–9 brass primitives: large torus knot anchor, two thin rings, beveled blocks, small sphere. Gold `MeshStandardMaterial` + studio environment, warm key light (accent gold), cold blue rim.
- Idle: slow rotation + float. Cursor: cluster tilts toward pointer with spring damping. Scroll: cluster rotates and drifts apart; rendering pauses off-screen.
- Gold grid floor fading to black beneath.

## Portrait relocation
- `HeroPortrait.tsx` deleted. `/profile.jpg` becomes lead image in About.
- "Available for work" pill and "5+ years" badge stay in hero as floating cards over the canvas.

## Cheap 3D elsewhere
- `TiltCard.tsx`: CSS perspective tilt on hover (Certifications, Awards, Testimonials).
- Section headers: scroll-linked depth parallax via Framer `useScroll`.
- Magnetic buttons. Contact card 3D flip form → success.

## Performance / fallbacks
- `next/dynamic` `ssr:false`. DPR cap 1.5. Mobile: fewer pieces, no env reflections, device-orientation tilt with touch drag fallback.
- `prefers-reduced-motion` or no WebGL → static PNG with gradient overlays.
- Budget: hero canvas < 400 KB gz, 60 fps mid laptop.

## Deps
`three`, `@react-three/fiber`, `@react-three/drei`.

## Verification
Lighthouse mobile+desktop before/after, screenshots desktop+phone, reduced-motion check.
