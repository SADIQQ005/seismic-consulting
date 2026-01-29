# Global Shopping Landing Page

A modern landing page for an international shipping service that helps Nigerians shop from global stores and receive items safely at home. Built with Next.js 16 and TailwindCSS v4.

## Project Overview

This is a high-converting landing page designed to showcase an international e-commerce fulfillment service. The design emphasizes simplicity, transparency, and trust through clear value propositions and step-by-step process visualization.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: TailwindCSS v4 with custom design tokens
- **Language**: TypeScript
- **Components**: shadcn/ui
- **Font**: Geist (via Google Fonts)

## Features

### Sections Included

1. **Navigation Bar** - Fixed header with menu links and CTA button
2. **Hero Section** - Main headline with product carousel and dual CTAs
3. **Popular Stores** - Grid of brand logos showing supported retailers
4. **How It Works** - 4-step visual timeline with connecting line
5. **Platform Highlights** - Feature cards (Package Receiving, Consolidation, Calculator)
6. **Who Is This For** - Persona cards with images (Business Owners, Everyday Shoppers)
7. **Real Features** - Feature highlights (Real-Time Tracking, Assisted Purchase, Notifications)
8. **Value Props** - 4-column benefits grid (Shop Globally, Warehouse, Nigeria Delivery, Security)
9. **FAQs** - Expandable accordion with common questions
10. **CTA Section** - "Create an Account" with feature grid
11. **Support Section** - Contact us CTA
12. **Footer** - Links and copyright

### Design Highlights

- **Color Palette**: Dark teal (#37 7C 77) primary, light background, muted accents
- **Typography**: Clean sans-serif with strong hierarchy (Geist family)
- **Spacing**: Consistent use of Tailwind spacing scale (gap-4, p-8, etc.)
- **Responsive**: Mobile-first design that works on all screen sizes
- **Interactive Elements**: Expandable FAQ accordion, smooth navigation

## Project Structure

```
/app
  ├── page.tsx              # Main home page
  ├── layout.tsx            # Root layout with metadata
  └── globals.css           # Global styles and design tokens

/components
  ├── navbar.tsx            # Fixed navigation bar
  ├── hero.tsx              # Hero section with carousel
  ├── popular-stores.tsx    # Brand logos grid
  ├── how-it-works.tsx      # 4-step timeline
  ├── platform-highlights.tsx
  ├── who-is-this-for.tsx   # Persona cards
  ├── features.tsx          # Feature cards
  ├── value-props.tsx       # Benefits grid
  ├── faq.tsx               # FAQ accordion
  ├── cta-section.tsx       # Call-to-action section
  ├── support.tsx           # Support contact
  └── footer.tsx            # Footer

/components/ui            # shadcn/ui components (pre-installed)
```

## Setup Instructions

### 1. Clone the Repository
```bash
git clone <repository-url>
cd global-shopping-landing
```

### 2. Install Dependencies
The project uses npm and automatically infers dependencies from imports. No package.json modifications needed for most cases.

```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

### 4. Build for Production
```bash
npm run build
npm start
```

## Key Assumptions & Design Decisions

### 1. **Color System**
- Primary: Dark teal (#377C77) - used for buttons and interactive elements
- Accent: Cyan/turquoise - used for badges and highlights
- Background: Off-white - main page background
- Text: Dark gray/black - high contrast for readability

### 2. **Responsive Design**
- Desktop: Full multi-column layouts
- Tablet: 2-column grids
- Mobile: Single column with full-width components

### 3. **Interactivity**
- FAQ accordion uses React useState for expand/collapse
- Navigation links scroll to section IDs (no actual pages)
- Buttons are styled as CTAs with hover states

## Customization Guide

### Change Brand Colors
Edit `/app/globals.css` and update the CSS custom properties:

```css
:root {
  --primary: oklch(0.37 0.077 196.45);  /* Change primary color */
  --accent: oklch(0.82 0.16 176.68);    /* Change accent color */
  /* ... other tokens ... */
}
```

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Metrics

- **LCP** (Largest Contentful Paint): Optimized for < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

## Support

For issues or questions about the implementation, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com)
- [shadcn/ui Documentation](https://ui.shadcn.com)

