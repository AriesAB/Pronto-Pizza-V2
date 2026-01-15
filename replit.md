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
│   │   ├── page.tsx            # Home page (split landing)
│   │   ├── globals.css         # Global styles and Tailwind config
│   │   ├── sitemap.ts          # Dynamic sitemap for SEO
│   │   ├── robots.ts           # robots.txt configuration
│   │   └── [page]/             # Dynamic routing for subpages
│   │       ├── layout.tsx      # Page-specific metadata
│   │       └── page.tsx        # Page content
│   └── components/
│       ├── Navbar.tsx          # Navigation component
│       └── SplitLanding.tsx    # Split-screen landing component
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind configuration
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
