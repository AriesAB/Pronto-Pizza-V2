# Pronto Pizza Calgary

## Overview
A Next.js 14 website for Pronto Pizza, a pizza restaurant in Calgary. The site features a split-screen landing page showcasing two locations: Inglewood and Downtown (Catering). Migrated from React/Vite to Next.js for improved SEO through Server-Side Rendering.

## Tech Stack
- Next.js 14 with App Router
- TypeScript
- Tailwind CSS v4 (properly compiled)
- Framer Motion for animations
- Lucide React for icons
- Server-Side Rendering for SEO

## Project Structure
```
nextjs-app/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with Navbar
│   │   ├── page.tsx            # Homepage server wrapper (metadata export)
│   │   ├── HomeClient.tsx      # Homepage client component (animations)
│   │   ├── globals.css         # Global styles and Tailwind config
│   │   ├── sitemap.ts          # Dynamic sitemap for SEO
│   │   ├── robots.ts           # robots.txt configuration
│   │   ├── inglewood/          # Inglewood location pages
│   │   ├── downtown/           # Downtown location pages
│   │   ├── about/              # About page
│   │   └── contact/            # Contact page
│   └── components/
│       └── Navbar.tsx          # Navigation component
├── next.config.ts              # Next.js configuration
└── package.json                # Dependencies
```

## Development
The dev server runs on port 5000. Start with:
```bash
cd nextjs-app && npm run dev
```

## SEO Features
- Server-Side Rendering for all pages
- Metadata API for title, description, keywords
- Open Graph tags for social media sharing
- Twitter Card tags
- Dynamic sitemap generation
- robots.txt configuration
- Restaurant schema.org JSON-LD structured data (both locations)
- Canonical URLs for proper indexing

## Custom Colors
- pronto-cream: #FEFBF6
- pronto-orange: #FF5A1F
- pronto-navy: #000000
- pronto-blue: #1A1B8C

## Custom Fonts
- Syne (sans-serif)
- Anton (display)
- Permanent Marker (cursive)
- Courier Prime (monospace)

## Pages
- **Home**: Split-screen landing showcasing both locations
- **Inglewood**: Dedicated page for the Inglewood location with full menu
- **Downtown**: Catering menu page with items from yycpronto.com/catering
- **About**: Family story page featuring the Bruno family history with animations
- **Contact**: Contact information and forms

## Recent Changes
- **Jan 2026**: Migrated from React/Vite (CSR) to Next.js 14 (SSR) for improved SEO
- Added comprehensive metadata, Open Graph, and Twitter Card tags
- Created dynamic sitemap and robots.txt
- Configured Tailwind CSS v4 with custom theme
- All pages render identically to original design
- **Jan 15, 2026**: Fixed hydration mismatch issues by implementing isMounted pattern
  - All pages now render static HTML first, then enable Framer Motion animations after hydration
  - Fixed allowedDevOrigins in next.config.ts for proper HMR connection
  - Hydration warnings in dev console are expected with animation libraries and don't affect production
- **Jan 15, 2026**: Fixed About page visibility issue
  - Changed hero animations from `initial={{ opacity: 0 }}` to `initial={false}` to prevent invisible content
  - Content now visible by default, animations run as enhancements only
  - SSR fallback uses `font-display` class for Anton font on hero headings
- **Jan 15, 2026**: Codebase cleanup post-migration
  - Removed unused React imports (React namespace not needed with modern JSX)
  - Removed unused ClientOnly.tsx component
  - Removed unused variables (heroRef, heroInView, pathname)
  - Added accessibility improvements (aria-labels, alt text for images)
  - Moved RevealText component to module level in contact page
  - Configured production deployment with Tailwind compilation
- **Jan 20, 2026**: SEO structured data enhancements
  - Added Restaurant schema.org JSON-LD for both Inglewood and Downtown locations
  - Includes addresses, phone numbers, opening hours, cuisine type, and price range
  - Added homepage-specific canonical URL pointing to https://yycpronto.vercel.app
  - Refactored homepage to server/client split (page.tsx + HomeClient.tsx) for proper metadata export
