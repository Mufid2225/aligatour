---
name: Aligatour
description: Tour and travel website for Malang, Batu, and East Java destinations
colors:
  primary: "#153d37"
  secondary: "#176b5b"
  accent: "#d8f05a"
  neutral-bg: "#f5f3e9"
  neutral-text: "#6d7d78"
  surface: "#fbfcf8"
  surface-dark: "#123e37"
  surface-darker: "#0d302b"
  border: "#dfe6df"
typography:
  display:
    fontFamily: "Manrope, sans-serif"
    fontWeight: 800
    lineHeight: 1.06
    letterSpacing: "tight"
  body:
    fontFamily: "DM Sans, sans-serif"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  pill: "999px"
  xl: "16px"
  "2xl": "20px"
  "3xl": "24px"
  "4xl": "32px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  "2xl": "56px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.primary}"
    rounded: "{rounded.pill}"
    padding: "14px 22px"
  button-primary-hover:
    transform: "translateY(-2px)"
    boxShadow: "0 10px 25px rgba(13,61,50,0.15)"
  button-dark:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "13px 20px"
  card:
    backgroundColor: "#ffffff"
    borderColor: "{colors.border}"
    rounded: "{rounded.3xl}"
  card-hover:
    transform: "translateY(-7px)"
    boxShadow: "0 22px 45px rgba(23,60,53,0.1)"
---

# Design System: Aligatour

## Overview

**Creative North Star: "The Journey Storyteller"**

Aligatour's visual system channels the warmth of East Javanese landscapes through an earthy, nature-inspired palette anchored in deep teal and accented with energetic lime. The design balances trustworthy professionalism (dark greens, clean typography) with adventurous spirit (lime highlights, fan-style carousel animations). Every element serves the narrative: this is not a transactional booking site, but a storyteller inviting travelers to bring home memories.

**Key Characteristics:**
- Deep teal primary palette evokes volcanic forests and ocean depths
- Lime accent creates energetic CTAs that pop without shouting
- Fan-style photo carousel adds tactile, collectible-feel interaction
- Clean whitespace with 24-56px spacing rhythm
- Responsive mobile-first with card-based information architecture

## Colors

The palette is drawn from East Javanese nature: volcanic greens, sunrise lime, and oceanic teal.

### Primary
- **Deep Teal Ink** (`#153d37`): Body text, navigation, dark backgrounds, button text on lime. The dominant neutral.
- **Forest Green** (`#176b5b`): Secondary accent, eyebrow labels, price highlights, icon tinting. Used sparingly for emphasis.
- **Lime Surge** (`#d8f05a`): Primary action color, CTA buttons, star ratings, accent spans. High-energy against dark teal.

### Neutral
- **Warm Cream** (`#f5f3e9`): Section backgrounds, card containers, chip backgrounds. Soft contrast without stark white.
- **Muted Sage** (`#6d7d78`): Secondary text, metadata, footnotes. Low-emphasis information.
- **Off-White** (`#fbfcf8`): Page background. Slightly warmer than pure white.
- **Cloud Border** (`#dfe6df`): Card borders, dividers, subtle separations.

### Dark Surfaces
- **Jungle Dark** (`#123e37`): Hero section background, footer accent.
- **Deep Forest** (`#0d302b`): Gradient endpoints, shadow tints.

### Named Rules
**The Lime Constraint Rule.** Lime accent appears on no more than 15% of any given screen area. Its power comes from restraint — it highlights action, not decoration.

## Typography

**Display Font:** Manrope (`--font-display`)
**Body Font:** DM Sans (`--font-body`)

**Character:** Manrope brings bold, geometric energy to headings; DM Sans provides friendly, rounded readability for body text. Together they feel modern without being cold — appropriate for a travel brand that's both professional and approachable.

### Hierarchy
- **Display** (800 weight, clamp 48-72px, line-height 1.06): Hero headlines on dark sections. Manrope.
- **Headline** (800 weight, 32-40px, line-height 1.2): Section headings, card titles. Manrope.
- **Title** (800 weight, 24px, line-height 1.3): Subsection titles, trip names. Manrope.
- **Body** (400 weight, 16px, line-height 1.5): Paragraphs, descriptions, navigation links. DM Sans.
- **Eyebrow** (800 weight, 12px, letter-spacing 0.18em, uppercase): Section labels above headings. Manrope.
- **Caption** (400 weight, 14px, line-height 1.4): Metadata, dates, secondary info. DM Sans.
- **Tag** (800 weight, 12px): Badge labels on cards. DM Sans.

### Named Rules
**The Eyebrow Anchor Rule.** Every major section opens with a green eyebrow label (`color: #176b5b`, uppercase, 0.18em letter-spacing) before its headline. This creates consistent visual rhythm across all pages.

## Layout

**Container:** Max-width 1180px, auto-centered, with 40px horizontal padding (28px on mobile below 700px).

**Spacing Rhythm:** Base unit 8px. Sections use 96-112px vertical padding. Cards and content blocks use 24px gaps. Components within cards use 16px padding.

**Responsive Grid:**
- Mobile (< 700px): Single column, reduced container padding, desktop nav hidden.
- Tablet (700-1024px): 2-column grids for trip cards.
- Desktop (> 1024px): 3-column grids for trip cards, 2-column for features and testimonials.

**Section Pattern:**
1. Hero with gradient overlay (full-width, min-height 760px)
2. Floating search bar (-mt-12 overlap)
3. Services chips (border-bottom, white bg)
4. Trip catalog (3-col grid)
5. About with fan carousel (2-col)
6. Testimonials (3-col grid)
7. CTA contact block
8. Footer

## Elevation & Depth

The system uses subtle, warm-toned shadows rather than harsh black drops. Shadows inherit the teal tint of the palette.

### Shadow Vocabulary
- **Resting Card** (`box-shadow: 0 22px 45px rgba(23,60,53,0.1)`): Applied on `.trip-card:hover`. Warm teal shadow lifts cards on interaction.
- **Floating Element** (`box-shadow: 0 10px 25px rgba(13,61,50,0.15)`): Button hover, modal overlays.
- **Deep Stack** (`shadow-2xl`): Search bar, elevated containers.
- **Subtle Lift** (`shadow-lg`): Carousel cards, secondary containers.

### Named Rules
**The Flat-By-Default Rule.** Cards and containers rest flat. Shadows appear only on hover or elevation state changes. This keeps the baseline calm and makes interactions feel intentional.

## Shapes

**Corner Language:** Predominantly rounded. Pill-shaped buttons (`999px`), large-radius cards (`20-24px`), circular avatars and badges. No sharp corners except on the eyebrow underline (none). This softness aligns with the approachable, adventurous brand personality.

**Form Elements:**
- Buttons: Pill-radius (`999px`), no visible border by default.
- Cards: Rounded-3xl (`24px`) with optional 1px border.
- Chips/Badges: Pill-radius (`999px`) for service tags and rating badges.
- Image containers: Rounded-3xl (`24px`) matching card radius.

**Border Treatment:** 1px solid `#dfe6df` for card borders and dividers. No heavy outlines. Border color is muted to keep focus on content.

## Components

### Buttons
- **Shape:** Pill-radius (`999px`), no border by default.
- **Primary:** Lime background (`#d8f05a`), dark text (`#153d37`), 800 font-weight, 14px/22px padding. Hover: translateY(-2px), teal shadow.
- **Dark:** Deep teal background (`#153d37`), white text, 700 font-weight, 13px/20px padding. Used for secondary CTAs and footer links.
- **Ghost:** Transparent with border (`border-white/40 bg-white/10`), backdrop-blur. Used in header for "Lihat Trip".
- **Icon Button:** 32-44px circle, border `#153d37/15`, white bg, shadow. Used in carousel navigation.

### Cards / Trip Cards
- **Corner Style:** Rounded-3xl (`24px`).
- **Background:** White (`#ffffff`).
- **Border:** 1px solid `#dfe6df`.
- **Shadow Strategy:** Flat at rest, warm teal shadow on hover (`translateY(-7px)`).
- **Internal Padding:** 24px (p-6).
- **Content Structure:** Image (h-64/288px) → Location label → Title → Price/Duration → CTA button.
- **Badge Overlays:** Absolute-positioned pill badges for tags (white bg, `#176b5b` text), sequence numbers (lime bg), and ratings (dark bg, lime star).

### Service Chips
- **Style:** Pill-radius (`999px`), cream background (`#f0f3e9`), dark text (`#153d37`), 14px icon + label.
- **Purpose:** Horizontal row of service categories below the hero.
- **Hover:** No distinct hover state — these are informational, not interactive.

### Eyebrow Labels
- **Style:** 12px, uppercase, 0.18em letter-spacing, 800 font-weight, green text (`#176b5b`).
- **Position:** Above section headlines, left-aligned.
- **Purpose:** Consistent visual anchor that signals "new section starting here."

### Fan Carousel
- **Style:** 3 visible cards in overlapping fan layout, centered card larger.
- **Cards:** Rounded-3xl (`16-20px`), white border (2-4px), white bg, teal shadow.
- **Navigation:** Pill-shaped arrow buttons + dot indicators.
- **Animation:** GSAP-driven entrance and transition, 5-second auto-advance.
- **Responsive:** 4 breakpoints adjusting card size, rotation, and offset.

### Testimonial Cards
- **Style:** White bg, rounded-3xl, border, 24px padding.
- **Content:** Star rating (lime) → Quote text (muted) → Divider → Name + Trip + Date.
- **Layout:** 3-column grid on desktop, horizontal scroll on mobile.

### Search Bar
- **Style:** White bg, rounded-2xl, shadow-2xl, 3-column grid on desktop.
- **Overlap:** Negative margin (`-mt-12`) to float over hero section.
- **CTA:** Dark button aligned right.

### Stat Counters
- **Style:** Manrope 2xl bold numbers, muted description text.
- **Layout:** Flex row with 32px gaps.
- **Content:** Quantitative social proof (travelers, destinations, rating).

## Do's and Don'ts

### Do:
- **Do** use lime accent (`#d8f05a`) exclusively for primary CTAs and star ratings.
- **Do** use Manrope for all headings and display text; DM Sans for body and labels.
- **Do** maintain the eyebrow label pattern before every major section heading.
- **Do** use warm teal shadows (not black) for elevation effects.
- **Do** keep card corners consistently rounded at 24px.
- **Do** use 40px container padding on desktop, 28px on mobile.
- **Do** use Phosphor icons at 18-25px for UI elements.
- **Do** maintain the fan carousel's 3-card visible layout with auto-advance.

### Don't:
- **Don't** use lime accent on more than 15% of any screen section.
- **Don't** mix Manrope and DM Sans within the same text block.
- **Don't** apply shadows to flat-state cards — only on hover/interaction.
- **Don't** use sharp corners (radius < 16px) on primary containers.
- **Don't** use pure black (`#000`) for text or shadows — always teal-tinted.
- **Don't** skip the hero gradient overlay on dark background sections.
- **Don't** override the 1180px max-width container for content sections.
- **Don't** use decorative gradients or glassmorphism outside the established patterns.
