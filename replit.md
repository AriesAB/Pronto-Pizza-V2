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
  - Added homepage-specific canonical URL pointing to https://yycpronto.com/
  - Refactored homepage to server/client split (page.tsx + HomeClient.tsx) for proper metadata export
  - Fixed all canonical URLs and schema URLs to use yycpronto.com (removed vercel.app and www references)
  - Added metadataBase to root layout for proper URL resolution
- **Jan 22, 2026**: Favicon and logo SEO configuration
  - Generated all favicon sizes: favicon.ico, favicon-16x16.png, favicon-32x32.png, apple-touch-icon.png (180x180), android-chrome-192x192.png, android-chrome-512x512.png
  - Created site.webmanifest with proper icon references
  - Updated layout.tsx metadata with comprehensive icon definitions
  - Added logo and image properties to all structured data schemas (Organization, LocalBusiness)
  - Added Open Graph and Twitter Card images pointing to pronto-logo.png
- **Jan 31, 2026**: Inglewood menu update
  - Updated Antipasti: new prices for Bruschetta ($12), Caprese ($13.50), added Caesar Salad, Polpette; removed Focaccia
  - Updated Pizza: added Nonnas Garden, Pep & Shroom; updated La Morta Bella price; removed Saucy Rossa
  - Added new Dips section: Garlic Parmesan Dip, Hot Honey
  - Updated Dessert: added Cheesecake, updated Tiramisu description
  - Updated Coffee: removed Macchiato
  - Restructured Bar: added Beers on Tap section (Night Gallery IPA, Premium Lager), updated beers (Japanese Ale, Peroni), simplified wine list, updated cocktail prices, added Espresso Martini
  - Removed Panini section
  - Updated hero animation text to show "ANTIPASTI • PIZZA • DIPS •"
- **Feb 2026**: Added Waitlist.me integration for Inglewood location
  - Created /inglewood/waitlist page with embedded Waitlist.me widget (widget ID: 18711190655)
  - Added "JOIN WAITLIST" link to navbar (rightmost position, orange with subtle border CTA style)
  - Added "Join Waitlist" button on Inglewood page hero section
  - Landing page Inglewood hover shows only "View Menu" button
  - Created /inglewood/waitlist/qr printable QR code page for in-store display
  - Added print media query to hide navbar during printing
