# Pronto Pizza Calgary

## Overview
A React-based website for Pronto Pizza, a pizza restaurant in Calgary. The site features a split-screen landing page showcasing two locations: Inglewood and Downtown (Catering).

## Tech Stack
- React 19 with TypeScript
- Vite for build tooling
- Tailwind CSS (via CDN) for styling
- Framer Motion for animations
- Lucide React for icons

## Project Structure
```
/
├── components/          # React components
│   ├── About.tsx        # About page with family story
│   ├── CustomCursor.tsx
│   ├── Downtown.tsx     # Downtown/Catering menu page
│   ├── Inglewood.tsx
│   ├── Navbar.tsx
│   └── SplitLanding.tsx
├── App.tsx             # Main application component
├── index.tsx           # Entry point
├── index.html          # HTML template
├── types.ts            # TypeScript type definitions
├── vite.config.ts      # Vite configuration
└── package.json        # Dependencies
```

## Development
The dev server runs on port 5000 using Vite. Start with:
```bash
npm run dev
```

## Build
To build for production:
```bash
npm run build
```
Output will be in the `dist` directory.

## Pages
- **Home**: Split-screen landing showcasing both locations
- **Inglewood**: Dedicated page for the Inglewood location with full menu
- **Downtown**: Catering menu page with items from yycpronto.com/catering (Specials, Pizza, Salads, Pagnotta)
- **About**: Family story page featuring the Bruno family history with high-stimulus animations (inspired by Noble Pie's about page)

## Recent Changes
- **Jan 2026**: Added About page with Bruno family story, animated sections, parallax effects, and high-engagement animations
