# One Fitness — Premium Gym Website

A modern, responsive gym website for One Fitness, Vizianagaram. Built with Next.js, TypeScript, and Tailwind CSS. Designed for marketing, trust-building, and lead conversion.

**🌐 Live Site:** [onefitness-eight.vercel.app](https://onefitness-eight.vercel.app)

---

## About

**One Fitness** is a premium strength and transformation gym located in Vizianagaram, Andhra Pradesh. This website serves as the gym's primary digital presence — showcasing facilities, trainers, membership plans, and member success stories to convert visitors into members.

**Address:** 1st Floor, Four Square Apartment, RnB Junction, Boggula Dibba Rd, Vizianagaram, AP 535003  
**Phone:** +91 89197 67483  
**Hours:** Open until 10:00 PM

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| UI Components | shadcn/ui |
| Image Optimization | Next.js Image |
| Client-side Routing | Next.js Link |
| Deployment | Vercel (auto-deploy from GitHub) |
| Version Control | GitHub |

---

## Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Homepage | Hero slider, Why Choose Us, Plans preview, Trainers, Testimonials, Gallery preview, Contact CTA |
| `/plans` | Membership Plans | 3 tiered plans (Basic, Standard, Premium) with features and pricing |
| `/trainers` | Our Trainers | 4 trainer profiles with specialization, experience, and bio |
| `/gallery` | Gallery | Filterable image grid (Facility, Equipment, Members, Transformations) |
| `/testimonials` | Testimonials | 6 member reviews with star ratings and transformation badges |
| `/contact` | Contact Us | Contact form, phone/email/address cards, WhatsApp CTA, Google Maps |

---

## Key Features

### Marketing & Conversion
- WhatsApp click-to-chat integration (prefilled message)
- Contact form with validation, error messages, and success state
- Google Maps embed with exact gym location
- Clear CTA hierarchy across all pages
- Multiple conversion paths (form, WhatsApp, phone, visit)

### Design & UX
- Dark premium gym aesthetic
- Hero background image slider (3 real gym photos, auto-rotation)
- Mobile-first responsive design on all pages
- Consistent spacing, typography, and card patterns
- Glass-style secondary buttons matching dark theme
- Subtle hover effects on cards and buttons

### Technical Quality
- Static site generation (all pages pre-rendered)
- Next.js Image optimization (WebP/AVIF, lazy loading, responsive sizes)
- SEO metadata on every page (title, description, keywords, OpenGraph, Twitter)
- Favicon and Apple touch icon
- Skip-to-content accessibility link
- ARIA labels and semantic HTML
- Form validation with inline error messages
- Error fallbacks for missing images
- Clean, modular component architecture

---

## Project Structure

```
onefitness/
├── app/
│   ├── layout.tsx              # Root layout, fonts, global metadata
│   ├── page.tsx                # Homepage (hero + 6 sections)
│   ├── icon.png                # Favicon
│   ├── apple-icon.png          # Apple touch icon
│   ├── plans/page.tsx          # Membership plans
│   ├── trainers/page.tsx       # Trainers
│   ├── testimonials/page.tsx   # Testimonials
│   ├── contact/page.tsx        # Contact
│   └── gallery/
│       ├── layout.tsx          # Gallery metadata
│       └── page.tsx            # Gallery with category filter
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky navbar, logo, mobile menu
│   │   ├── Footer.tsx          # Footer with links and contact
│   │   └── Hero.tsx            # Hero slider with fallback
│   ├── ui/
│   │   ├── button.tsx          # shadcn Button
│   │   └── card.tsx            # shadcn Card
│   ├── SectionHeader.tsx       # Reusable section heading
│   ├── StarRating.tsx          # Star rating (1-5)
│   ├── GalleryGrid.tsx         # Gallery grid with error handling
│   ├── TestimonialCard.tsx     # Testimonial card
│   ├── TestimonialsList.tsx    # Testimonials grid
│   ├── ContactForm.tsx         # Contact form with validation
│   ├── ContactInfoCard.tsx     # Contact info block
│   ├── WhatsAppCTA.tsx         # WhatsApp button
│   └── GoogleMapEmbed.tsx      # Google Maps embed
├── data/
│   ├── gallery.ts              # Gallery image data
│   ├── testimonials.ts         # Testimonials data
│   └── contact.ts              # Business contact info
├── lib/utils.ts                # Utility functions
├── public/
│   ├── logo/onefitness-logo.png
│   ├── hero/                   # 3 hero background images
│   └── images/                 # Gallery, trainers, testimonials
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## Getting Started

```bash
# Clone
git clone https://github.com/khasif18/onefitness.git
cd onefitness

# Install
npm install

# Development
npm run dev

# Build
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000)

---

## Deployment

Auto-deploys to Vercel on every push to `main`:

```
git push → GitHub → Vercel rebuilds → Live in ~60 seconds
```

---

## Assets

| Location | Content |
|----------|---------|
| `public/hero/` | `hero-1.jpg`, `hero-2.jpg`, `hero-3.jpg` — Hero slider images |
| `public/logo/` | `onefitness-logo.png` — Brand logo (TF monogram) |
| `public/images/trainers/` | Trainer photos (4 needed) |
| `public/images/gallery/` | Gallery photos (8 needed) |

---

## Development Timeline

| Day | Milestone |
|-----|-----------|
| 1 | Project setup — Next.js, Tailwind, shadcn/ui, GitHub, Vercel |
| 2 | Membership Plans page |
| 3 | Homepage hero with logo and background slider |
| 4 | Trainers page |
| 5 | Gallery page with category filter |
| 6 | Testimonials page with StarRating component |
| 7 | Contact page — form, WhatsApp, Google Maps |
| 8 | Homepage sections, SectionHeader, CTA polish |
| 9 | Real hero images, mobile polish, fallback handling |
| 10 | SEO metadata, favicon, accessibility audit |
| 11 | Button fixes, navigation audit, responsive QA |
| 12 | Final cleanup, pre-launch QA, MVP ready |

---

## Author

**Khasif Khamar**  
GitHub: [@khasif18](https://github.com/khasif18)

---

## License

This project is for educational and portfolio purposes.
