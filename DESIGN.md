# Design Brief: Ankit Kushwaha Portfolio

## Direction

Ankit Kushwaha — Award-winning premium tech portfolio. Ultra-refined glassmorphism with elevated depth, vibrant accent palette, and sophisticated micro-interactions. Purpose: Position as top-tier frontend developer through visual excellence and smooth, memorable interaction patterns.

## Tone

Bold, refined tech aesthetic with Stripe/Vercel execution precision. Dark-first, glassmorphism-heavy, high saturation accents (cyan + magenta gradient). Conveys expertise, confidence, and premium craft without aggression.

## Differentiation

Staggered entrance animations (0.1s increments), premium shadow hierarchy (subtle/glass/elevated/lg), elevated gradient accents (28% chroma cyan + 32% chroma magenta on dark), smooth page transitions with controlled easing curves. Space Grotesk display font signals premium tech aesthetic.

## Color Palette

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| Primary | `0.52 0.18 290` (Deep Violet) | `0.72 0.28 165` (Elevated Cyan) | CTAs, focus, interactive states |
| Accent | `0.72 0.28 165` (Cyan) | `0.78 0.32 10` (Vibrant Magenta) | Highlights, hero gradient, hover |
| Background | `0.97 0 0` (Off-white) | `0.08 0.01 290` (Midnight Navy) | Page background |
| Card | `0.99 0.01 0` (Light glass) | `0.12 0.02 290` (Frosted glass) | Glass card surfaces |
| Foreground | `0.12 0 0` (Dark) | `0.93 0 0` (Off-white) | Text |
| Muted | `0.92 0.01 0` | `0.16 0.01 0` | Secondary text, disabled |
| Destructive | `0.55 0.22 25` | `0.65 0.19 22` | Error, warning states |

## Typography

| Layer | Font | Scale | Usage |
|-------|------|-------|-------|
| Display | Space Grotesk (700–900) | 3.5rem–2rem | Hero, section heads, premium feel |
| Body | DM Sans (400–600) | 1rem–0.875rem | Body copy, UI labels, descriptions |
| Mono | JetBrains Mono (400) | 0.875rem | Code, tech tags, technical text |

## Elevation & Depth

Four-tier shadow system: subtle (2px, 0.04 opacity, ambient), glass (8px, 0.08 opacity, card), elevated (16px, 0.12 opacity, hover), lg (24px, 0.16 opacity, modals). Surfaces layered via backdrop-blur-lg at 70% opacity. Gradient accents (135° cyan→magenta) on hero, buttons, and accent text.

## Structural Zones

| Zone | Background | Border | Shadow | Notes |
|------|-----------|--------|--------|-------|
| Navbar | `glass-card` (70% opacity) | `border-border/50` | `shadow-glass` | Sticky, full-width, active indicator |
| Hero | `gradient-hero` overlay on background | — | `shadow-elevated` | Full viewport, largest typography |
| Sections | `bg-background` (primary), `bg-muted/3` (alt) | — | — | 1200px max-width, 4rem vertical gap |
| Cards | `glass-card` + `shadow-glass` | `border-border/50` | hover: `shadow-elevated` | 12px radius, scale 1.02 on hover |
| Footer | `bg-muted/8` | `border-t border-border/30` | `shadow-subtle` | Semantic footer, restrained |

## Component Patterns

- **Hero CTA**: `gradient-accent` background, scale 1.05 hover, shadow-elevated on click
- **Glass Card**: `.glass-card` utility (70% opacity + blur-lg), shadow-glass, border-border/50, scale 1.02 hover
- **Skill Tag**: DM Sans 600, 4px radius, muted-bg/50, accent-text on hover, smooth 0.3s transition
- **Project Card**: Glass card + image overlay, scale 1.02 hover, shadow-elevated
- **Navbar Link**: Active underline, accent color, shadow-subtle on active state

## Motion & Interaction

Entrance: Staggered fade-in-up (0.6s, 0.1s increments per item), page transition fade (0.8s spring easing). Hover: Scale 1.02–1.05, opacity 0.9, shadow-elevated, 0.3s smooth transition. Active nav: Underline + glow-pulse (2.5s). Floating elements: 3s ease-in-out loop.

## Spacing & Rhythm

12px baseline grid: sections 4rem (mobile 2rem) vertical, cards 1.5rem internal padding, 1rem gaps between items. Typography scale: 1.25x multiplier (hero 3.5rem → 2.8rem → 2.2rem → 1.75rem → 1.4rem → 1rem). Max-width 1200px container.

## Dark Mode Notes

Background: 0.08 L midnight navy with 1% blue-violet tint. Text: 0.93 L off-white for primary, 0.55 L for secondary. Accent: 0.78 L magenta (32% chroma, 10° hue) for maximum pop. Cards: Frosted glass (0.12 L, 2% tint, 70% opacity + blur-lg). Shadows: Deeper opacity (0.12–0.64) for depth on dark substrate.

## Constraints

- No uniform shadows — use hierarchy (subtle/glass/elevated/lg)
- Space Grotesk bold for maximum tech-premium positioning
- Magenta accent (10° hue, 32% chroma) on dark is non-negotiable brand element
- Stagger timing: 0.1s increments, max 6 items per sequence
- Page transitions: Only fade-in-up, no bounce/elastic easing except on CTAs

## Signature Details

1. **Gradient Accent Evolution**: Cyan→magenta 135° gradient (0.72 L 28% chroma → 0.78 L 32% chroma) elevates from previous 0.25–0.28 chroma range
2. **Space Grotesk Display**: Geometric, tech-forward sans elevates perception vs. General Sans
3. **Premium Shadow Tier**: Four-level shadow system (subtle through lg) creates depth hierarchy
4. **Staggered Entrance**: Per-item 0.1s delays with fade-in-up (spring easing) creates choreographed, award-winning feel
5. **Spring Easing Curve**: `cubic-bezier(0.34, 1.56, 0.64, 1)` on page transitions (overshoot) vs. tight curves elsewhere

