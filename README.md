# OneFitness — Gym Marketing Website

A modern, responsive gym website built with Next.js for marketing, trust-building, and lead conversion. Developed day-by-day as a structured learning project and portfolio piece.

## Overview

**Project:** OneFitness  
**Purpose:** A professional gym website designed to attract prospective members, showcase facilities and trainers, and convert visitors through clear CTAs (WhatsApp, contact forms, Google Maps).

**Target Audience:**
- Prospective gym members researching local fitness options
- Existing members looking for class info, trainer details, and updates

**Core Objectives:**
- Build a modern, mobile-first responsive website
- Follow a day-by-day development workflow for structured learning
- Drive conversion through WhatsApp integration, contact pages, and embedded maps
- Showcase the gym's facilities, trainers, and member transformations

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Components | shadcn/ui |
| Images | Next.js Image (optimized) |
| Routing | Next.js Link (client-side navigation) |
| Deployment | Vercel |
| Version Control | GitHub |
| Development Method | Day-by-day milestones |

---

## Development Roadmap

| Day | Milestone | Status | Features Completed |
|-----|-----------|--------|-------------------|
| Day 1 | Project Setup & Stack Selection | ✅ Done | Next.js, Tailwind, shadcn/ui configured, GitHub workflow, Vercel deployment target |
| Day 2 | Membership Plans Page | ✅ Done | /plans route, plan cards grid, responsive layout, navigation |
| Day 3 | Homepage Hero Branding | ✅ Done | Official logo integration, hero section with heading/subheading/CTAs, background slider placeholder structure (3-second rotation logic) |
| Day 4 | Trainers Page | ✅ Done | /trainers route, trainer cards grid, responsive layout, TrainerCard component |
| Day 5 | Gallery Page | ✅ Done | /gallery route, GalleryGrid component, responsive image grid, category filter, gallery data file |

---

## Features

### Completed

- [x] Tech stack chosen (Next.js, Tailwind CSS, shadcn/ui)
- [x] GitHub version control
- [x] Vercel deployment target
- [x] Day-by-day development workflow
- [x] Reusable Navbar with logo, nav links, mobile menu, and CTA
- [x] Reusable Footer component
- [x] Homepage foundation (hero + branding + slider structure)
- [x] Official logo integration (TF monogram)
- [x] Hero background slider (3-second rotation with crossfade)
- [x] Membership Plans page (`/plans`) with 3 plan cards
- [x] Recommended plan highlighting
- [x] Trainers page (`/trainers`) with 4 trainer cards
- [x] Gallery page (`/gallery`) with responsive image grid
- [x] Gallery category filter (All, Facility, Equipment, Members, Transformations)
- [x] Placeholder system for missing assets (logo, hero images, trainer photos, gallery)
- [x] Dark premium gym aesthetic throughout
- [x] Mobile-first responsive design on all pages

### In Progress

- [ ] Hero background images (placeholder structure done, real images needed)
- [ ] Trainer photos (placeholder fallback active)
- [ ] Gallery photos (using placehold.co temporarily)
- [ ] Homepage sections beyond hero

### Not Started

- [ ] Testimonials page
- [ ] Contact page
- [ ] Contact form handling
- [ ] WhatsApp integration
- [ ] Google Maps embed
- [ ] Favicon and metadata/SEO optimization
- [ ] Analytics integration
- [ ] Final QA and polish

---

## Project Structure

```
onefitness/
├── app/
│   ├── layout.tsx              # Root layout (fonts, metadata, body)
│   ├── page.tsx                # Homepage with Hero component
│   ├── plans/
│   │   └── page.tsx            # Membership plans page
│   ├── trainers/
│   │   └── page.tsx            # Trainers page
│   └── gallery/
│       ├── layout.tsx          # Gallery metadata
│       └── page.tsx            # Gallery page with filter
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky navbar with logo + mobile menu
│   │   ├── Footer.tsx          # Site footer
│   │   └── Hero.tsx            # Homepage hero with background slider
│   ├── ui/
│   │   ├── button.tsx          # shadcn Button component
│   │   └── card.tsx            # shadcn Card component
│   └── GalleryGrid.tsx         # Reusable gallery image grid
├── data/
│   └── gallery.ts              # Gallery image data array
├── lib/
│   └── utils.ts                # Utility functions (cn helper)
├── public/
│   ├── logo/
│   │   └── onefitness-logo.png # Official gym logo
│   └── images/
│       ├── hero/               # Hero background images (3 needed)
│       ├── trainers/           # Trainer photos (4 needed)
│       └── gallery/            # Gallery photos (8 needed)
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/khasif18/onefitness.git
cd onefitness
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

---

## Routes

| Path | Page | Description |
|------|------|-------------|
| `/` | Homepage | Hero section with branding and CTAs |
| `/plans` | Membership | 3 plan cards (Basic, Standard, Premium) |
| `/trainers` | Trainers | 4 trainer profile cards |
| `/gallery` | Gallery | Filterable image grid |

---

## Assets Needed

To complete the site visually, add these images:

| Location | Files | Purpose |
|----------|-------|---------|
| `public/images/hero/` | `hero-1.jpg`, `hero-2.jpg`, `hero-3.jpg` | Hero background slider |
| `public/images/trainers/` | `trainer-1.jpg` through `trainer-4.jpg` | Trainer headshots |
| `public/images/gallery/` | 8 photos (see `data/gallery.ts`) | Gallery grid |

---

## Author

**Khasif Khamar**  
GitHub: [@khasif18](https://github.com/khasif18)

---

## License

This project is for educational and portfolio purposes.
