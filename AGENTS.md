# Aligatour — Agent Reference

## Project Identity
- **Name**: aligatour
- **Version**: 0.1.0
- **Private**: true
- **Repository**: https://github.com/Mufid2225/aligatour_codex.git

## Stack
- **Framework**: Next.js 16.2.10 (App Router)
- **React**: 19.2.0
- **Language**: TypeScript 5 (strict mode)
- **Styling**: Tailwind CSS 4 via @tailwindcss/postcss
- **Icons**: @phosphor-icons/react 2.1.10
- **Animation**: gsap 3.15.0
- **Fonts**: DM Sans (body), Manrope (display) via next/font/google
- **Image Optimization**: next/image with remotePatterns for images.unsplash.com

## Project Structure
```
src/
├── app/
│   ├── layout.tsx          # Root layout, metadata, fonts
│   ├── page.tsx            # Home page
│   ├── globals.css         # Tailwind import + custom CSS variables
│   └── trips/              # Trip detail pages
│       ├── malang-batu-city-tour/page.tsx
│       ├── private-shuttle-ranu-pane/page.tsx
│       ├── private-trip-ranu-kumbolo/page.tsx
│       ├── open-trip-tumpak-sewu/page.tsx
│       ├── private-trip-pantai-malang/page.tsx
│       └── private-trip-bromo/page.tsx
├── components/ui/
│   └── card-fan-carousel.tsx  # Fan-style carousel component
public/
├── brand/                  # Logo
├── trip-cards/             # Trip hero/card images
├── facilities/             # Facility images
├── destinations/           # Destination galleries
├── pricelists/             # Pricelist images
├── reference/              # Reference materials
└── about-gallery/          # About section carousel images
```

## Configuration Files
- **next.config.ts**: Image remotePatterns for images.unsplash.com
- **tsconfig.json**: Strict mode, path alias `@/*` → `./src/*`, ES2017 target
- **postcss.config.mjs**: @tailwindcss/postcss plugin
- **eslint.config.mjs**: eslint-config-next/core-web-vitals + typescript
- **netlify.toml**: Build command `npm run build`, publish `.next`, Node 22, @netlify/plugin-nextjs
- **.gitignore**: Standard Node/Next.js ignores + .netlify/, .vercel/, coverage/, editor files

## Scripts
```bash
npm run dev     # next dev (development server)
npm run build   # next build (production build)
npm run start   # next start (production server)
npm run lint    # eslint
```

## Routes
| Path | Description |
|------|-------------|
| `/` | Home: hero, trip catalog, about carousel, testimonials, contact |
| `/trips/malang-batu-city-tour` | City Tour detail + vehicle pricelist |
| `/trips/private-shuttle-ranu-pane` | Shuttle detail + vehicle pricelist |
| `/trips/private-trip-ranu-kumbolo` | Ranu Kumbolo packages (Ekonomis/Exclusive/Luxury) |
| `/trips/open-trip-tumpak-sewu` | Open Trip Tumpak Sewu detail |
| `/trips/private-trip-pantai-malang` | Private Pantai Malang detail + beach gallery |
| `/trips/private-trip-bromo` | Bromo packages (Ekonomis/Premium/Luxury) |

## CSS Design Tokens (globals.css)
```css
:root {
  --ink: #153d37;
  --green: #176b5b;
  --lime: #d8f05a;
  --cream: #f5f3e9;
  --muted: #6d7d78;
}
```

## Component Utilities
- `.container`: max-width 1180px, centered
- `.eyebrow`: uppercase label style
- `.btn-primary`: lime background, dark text
- `.btn-dark`: dark background, white text
- `.trip-card`: hover lift + shadow

## Fonts
- **Body**: DM Sans (CSS variable `--font-body`)
- **Display**: Manrope (CSS variable `--font-display`)

## Metadata (layout.tsx)
- **Title**: "Aligatour — Temukan Cerita di Setiap Perjalanan"
- **Description**: "City Tour Specialist Malang–Batu, shuttle Malang–Ranu Pani, dan trip Ranu Kumbolo, Bromo, serta Tumpak Sewu bersama Aligatour."
- **Icons**: /brand/logo-aligatour.webp
- **Language**: Indonesian (lang="id")

## Deployment
- **Platform**: Netlify
- **Build command**: `npm run build`
- **Publish directory**: `.next`
- **Node version**: 22
- **Plugin**: @netlify/plugin-nextjs

## Features Implemented
- Responsive layout (mobile/desktop)
- 6 trip detail pages with dynamic data
- Fan carousel component (auto-advance 5s, manual controls, keyboard navigation)
- About section image carousel (29 images in about-gallery)
- Testimonial grid (6 testimonials, horizontal scroll on mobile, grid on desktop)
- WhatsApp deep links with pre-filled messages
- Social media links (Instagram, Facebook, TikTok, Email)
- SEO metadata per page
- Image optimization via next/image

## Not Implemented
- CMS / content management
- User accounts / authentication
- Online payment / checkout
- Real-time availability/scheduling
- Database / backend API

## Development Notes
- TypeScript strict mode enabled
- Path alias `@/*` for `./src/*`
- No custom webpack config
- No testing framework configured
- ESLint ignores .next/, out/, build/, next-env.d.ts