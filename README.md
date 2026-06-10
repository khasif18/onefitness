# One Fitness — Premium Gym Website

A modern, responsive gym website built with Next.js for One Fitness, Vizianagaram. Designed to attract prospective members, showcase facilities and trainers, and convert visitors through clear CTAs.

**Live Site:** [onefitness-eight.vercel.app](https://onefitness-eight.vercel.app)

---

## Overview

**Project:** One Fitness  
**Location:** Boggula Dibba Area, Vizianagaram, Andhra Pradesh  
**Purpose:** Professional gym website for marketing, trust-building, and lead conversion via WhatsApp, contact form, and Google Maps.

**Target Audience:**
- Prospective gym members researching local fitness options
- Existing members looking for class info, trainer details, and updates

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Components | shadcn/ui |
| Images | Next.js Image (optimized, lazy-loaded) |
| Routing | Next.js Link (client-side navigation) |
| Deployment | Vercel (auto-deploy from GitHub) |
| Version Control | GitHub |

---

## Features

### Completed

- [x] Full responsive homepage with hero slider, sections, and CTAs
- [x] Hero background image slider (3 real gym photos, 3-second rotation, crossfade)
- [x] Official brand logo in navbar
- [x] Reusable Navbar with mobile hamburger menu and active-link highlighting
- [x] Reusable Footer with navigation links and contact info
- [x] Membership Plans page (`/plans`) with 3 tiered plan cards
- [x] Trainers page (`/trainers`) with 4 trainer profile cards
- [x] Gallery page (`/gallery`) with responsive image grid and category filter
- [x] Testimonials page (`/testimonials`) with star ratings and member reviews
- [x] Contact page (`/contact`) with form, info cards, WhatsApp CTA, and Google Maps
- [x] WhatsApp click-to-chat integration
- [x] Google Maps embed (exact gym location pinned)
- [x] Contact form with controlled inputs and accessible labels
- [x] Reusable components: SectionHeader, StarRating, TestimonialCard, ContactInfoCard, GalleryGrid
- [x] Site-wide SEO metadata (title, description, keywords, OpenGraph, Twitter cards)
- [x] Page-level metadata for all routes
- [x] Favicon and Apple touch icon from brand logo
- [x] Skip-to-content link for accessibility
- [x] ARIA labels, roles, and semantic HTML
- [x] Dark premium gym aesthetic throughout
- [x] Mobile-first responsive design on all pages
- [x] Consistent CTA labeling and conversion paths
- [x] MVP cleanup (no placeholder text, no dev comments in production)

### In Progress

- [ ] Real trainer photos
- [ ] Real gallery photos (using placehold.co temporarily)
- [ ] Real testimonial member photos

### Future Enhancements

- [ ] Contact form backend (email service integration)
- [ ] Analytics integration
- [ ] Blog/updates section
- [ ] Class schedule page
- [ ] Online booking system

---

## Routes

| Path | Page | Description |
|------|------|-------------|
| `/` | Homepage | Hero slider, Why Us, Plans preview, Trainers, Testimonials, Contact CTA |
| `/plans` | Membership Plans | 3 plan cards (Basic, Standard, Premium) with features |
| `/trainers` | Our Trainers | 4 trainer profile cards with bio and specialization |
| `/gallery` | Gallery | Filterable image grid (Facility, Equipment, Members, Transformations) |
| `/testimonials` | Testimonials | 6 member reviews with star ratings |
| `/contact` | Contact Us | Form, contact info, WhatsApp, Google Maps |

---

## Project Structure

```
onefitness/
├── app/
│   ├── layout.tsx              # Root layout (fonts, metadata, body)
│   ├── page.tsx                # Homepage (hero + all sections)
│   ├── icon.png                # Favicon
│   ├── apple-icon.png          # Apple touch icon
│   ├── plans/
│   │   └── page.tsx            # Membership plans page
│   ├── trainers/
│   │   └── page.tsx            # Trainers page
│   ├── testimonials/
│   │   └── page.tsx            # Testimonials page
│   ├── contact/
│   │   └── page.tsx            # Contact page
│   └── gallery/
│       ├── layout.tsx          # Gallery metadata
│       └── page.tsx            # Gallery page with filter
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky navbar with logo + mobile menu
│   │   ├── Footer.tsx          # Site footer with links + contact info
│   │   └── Hero.tsx            # Homepage hero with background slider
│   ├── ui/
│   │   ├── button.tsx          # shadcn Button
│   │   └── card.tsx            # shadcn Card
│   ├── SectionHeader.tsx       # Reusable section heading
│   ├── StarRating.tsx          # Star rating (1-5)
│   ├── GalleryGrid.tsx         # Gallery image grid with error fallback
│   ├── TestimonialCard.tsx     # Single testimonial card
│   ├── TestimonialsList.tsx    # Testimonials grid wrapper
│   ├── ContactForm.tsx         # Contact form (controlled inputs)
│   ├── ContactInfoCard.tsx     # Reusable contact info block
│   ├── WhatsAppCTA.tsx         # WhatsApp click-to-chat button
│   └── GoogleMapEmbed.tsx      # Google Maps responsive embed
├── data/
│   ├── gallery.ts              # Gallery image data
│   ├── testimonials.ts         # Testimonials data
│   └── contact.ts              # Business contact info
├── lib/
│   └── utils.ts                # Utility functions (cn helper)
├── public/
│   ├── logo/
│   │   └── onefitness-logo.png # Official gym logo
│   ├── hero/
│   │   ├── hero-1.jpg          # Hero slide 1
│   │   ├── hero-2.jpg          # Hero slide 2
│   │   └── hero-3.jpg          # Hero slide 3
│   └── images/
│       ├── trainers/           # Trainer photos
│       └── gallery/            # Gallery photos
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

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

Open [http://localhost:3000](http://localhost:3000)

### Build

```bash
npm run build
npm start
```

---

## Deployment

The site auto-deploys to Vercel on every push to `main`:

```
git push → GitHub → Vercel rebuilds → Live in ~60 seconds
```

---

## Contact

**One Fitness**  
1st Floor, Four Square Apartment, RnB Junction, Boggula Dibba Rd, Vizianagaram, AP 535003  
Phone: +91 89197 67483  
Hours: Open until 10:00 PM

---

## Author

**Khasif Khamar**  
GitHub: [@khasif18](https://github.com/khasif18)

---

## License

This project is for educational and portfolio purposes.
