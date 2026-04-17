# Design Brief: OG BY THE LAKE

**Aesthetic:** Lakeside beach club — golden hour light, warm timber deck, airy premium luxury. Plenty of white space. Fresh, calm, inviting. NOT dark/moody, NOT jungle/garden.

## Color Palette

| Token | OKLCH | Hex | Purpose |
|-------|-------|-----|---------|
| Sand Beige | 0.96 0.015 70 | #F5F1ED | Primary background, warm base |
| Deep Navy | 0.10 0.08 260 | #0D1B2A | Navigation, headings, dark text |
| Seafoam Green | 0.75 0.08 140 | #B8C1B0 | Buttons, accents, highlights |
| Driftwood Gray | 0.35 0.05 260 | #4A4E69 | Secondary text, subheadings |
| White | 1.0 0 0 | #FFFFFF | Text on dark, card surfaces |

## Typography

| Element | Font | Weight | Spacing | Scale |
|---------|------|--------|---------|-------|
| H1 Hero | Fraunces | 600, italic | tight | 4–5rem |
| H2 Sections | Fraunces | 600 | tight | 2.5rem |
| H3 Cards | Fraunces | 600 | tight | 1.25rem |
| Body | DM Sans | 300 | 0.5px letter-space | 1rem |
| Captions | DM Sans | 300 | 0.5px letter-space | 0.875rem |

## Structural Zones

| Zone | Background | Border | Purpose |
|------|------------|--------|---------|
| Header | Transparent → Deep Navy on scroll | bottom border in Seafoam Green | Sticky sticky navigation |
| Hero | Gradient sunset overlay on image | none | Full viewport, parallax carousel |
| Sections | Sand Beige | horizontal rules in Seafoam Green | White space between content |
| Cards | White | subtle shadow-subtle | Floating above background |
| Footer | Deep Navy or Sand Beige | top border in Seafoam Green | Utility links, location, booking |

## Spacing & Rhythm

Mobile-first breakpoints: `sm: 640px | md: 768px | lg: 1024px | xl: 1280px`. Base unit: 4px. Dense on mobile, generous on desktop.

## Component Patterns

- **CTA Buttons:** Seafoam Green solid bg, white text, 8px radius, hover: +10% lightness, no shadow.
- **Outline Buttons:** Seafoam Green border, Deep Navy text, white bg, 8px radius, hover: subtle shadow.
- **Cards:** White bg, subtle-shadow, 8px radius, hover: +4px elevation.
- **Menu Tabs:** underline toggle, Driftwood Gray inactive, Seafoam Green active.
- **Gallery Placeholders:** warm gradient overlay (beige→navy), muted opacity 0.7.
- **Video Parallax:** auto-play muted loop, slow pan effect, gradient overlay (sunset warm to navy cool).

## Motion

- **Default transition:** 0.3s cubic-bezier(0.4, 0, 0.2, 1) — applied to all interactive elements.
- **Hover zoom:** menu cards +2% scale on hover, eased.
- **Scroll parallax:** hero carousel auto-advances every 5s.
- **Sticky header:** slides down 60px, transitions color on scroll past hero.

## Differentiation

Warm golden-hour light + cool deep water tones create a sophisticated lakeside mood. Airy typography (Playfair italics for emphasis, light Montserrat body) evokes relaxed premium. Minimal visual weight — let white space dominate. Subtle gradients and shadows create depth without clutter.

## Signature Detail

Hero section auto-playing parallax carousel: fade-in as images cycle (sunset → cocktail → deck laughter). Overlay gradient transitions from warm amber (#F5F1ED blended) to deep navy (#0D1B2A), suggesting the lake's transition from golden hour to twilight. This slow, breathing motion sets the tone.
