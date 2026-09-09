# RAYDAN CONSTRUCTIONS — Official Website

> **"Thoughtfully designed. Precisely engineered. Beautifully built."**

A complete, premium, modern, and award-winning website for **RAYDAN CONSTRUCTIONS**, specializing in residential architecture, structural engineering, turnkey home construction, and luxury interior spaces.

---

## 1. Brand Identity & Color Palette

The entire visual identity is built around the official brand mark:

- **Brand Red**: `#ED1C24` (Strategic interactive highlights, numbers, active navigation, CTAs)
- **Logo Charcoal**: `#58585A` (Secondary brand text & subtle borders)
- **Deep Charcoal**: `#1C1C1E` (Dark architectural sections, footers, modal headers)
- **Pure White**: `#FFFFFF` (Spacious editorial canvas)
- **Light Gray**: `#F5F5F5` (Card surfaces & section alternating backgrounds)
- **Soft Gray**: `#E8E8E8` (Fine architectural dividing lines & borders)
- **Primary Text**: `#242424` (High contrast, accessible body typography)
- **Secondary Text**: `#707070` (Subtitles, metadata, and captions)

### Typography
- **Headings**: `Manrope` (Extra-bold, bold, clean architectural geometry)
- **Body**: `Inter` (Medium, crisp line-height, controlled letter spacing)

---

## 2. Tech Stack

- **Build Tool**: Vite 8
- **Framework**: React 19
- **Styling**: Tailwind CSS v4 (with `@tailwindcss/vite` and `@theme` tokens)
- **Animations**: GSAP 3 + ScrollTrigger (split-text reveals, animated counters, smooth transitions)
- **Routing**: React Router DOM 7 (with automatic `ScrollToTop`)
- **Icons**: Lucide React
- **Media Architecture**: Cloudinary CDN pipeline with `f_auto,q_auto`, responsive sizing, and poster fallbacks

---

## 3. Project Architecture

```
raydan-constructions/
├── public/
│   └── favicon.svg                    # Official architectural apex favicon
├── src/
│   ├── config/
│   │   └── cloudinary.js              # Centralized Cloudinary URL & video transformer
│   ├── data/
│   │   ├── brand.js                   # Corporate contact, phone, email, addresses, hours
│   │   ├── projects.js                # 8 comprehensive luxury residential projects
│   │   ├── services.js                # 6 core residential architectural & building services
│   │   ├── process.js                 # 7-stage construction timeline from Consultation to Handover
│   │   ├── quality.js                 # 7-point visual inspection journey & technical benchmarks
│   │   ├── materials.js               # 8 architectural material showcases (concrete, stone, etc.)
│   │   ├── testimonials.js            # Homeowner case reviews & verified ratings
│   │   ├── faq.js                     # 10 comprehensive questions covering cost, timeline, approvals
│   │   ├── stats.js                   # 15+ Yrs, 500+ Homes, 2M+ Sq. Ft., 98% Satisfaction
│   │   └── awards.js                  # Recognition citations
│   ├── components/
│   │   ├── common/
│   │   │   ├── BrandLogo.jsx          # Official vector brand logo (light & dark variants)
│   │   │   ├── CustomCursor.jsx       # Desktop magnetic cursor (auto-disabled on touch)
│   │   │   ├── LoadingScreen.jsx      # Non-blocking architectural brand preloader
│   │   │   ├── SectionHeader.jsx      # Reusable editorial section header with red accent
│   │   │   ├── Button.jsx             # Primary (#ED1C24), outline, and ghost variants
│   │   │   ├── LightboxModal.jsx      # Full-screen image lightbox (keyboard & touch swipe)
│   │   │   ├── CostEstimatorModal.jsx # Real-time area x package calculator & enquiry wizard
│   │   │   └── ScrollToTop.jsx        # Reset window scroll on route change
│   │   ├── layout/
│   │   │   ├── Navbar.jsx             # Sticky transparent-to-solid navbar with blur
│   │   │   ├── MobileMenu.jsx         # Full-screen GSAP mobile drawer
│   │   │   └── Footer.jsx             # Deep charcoal footer with brand info & legal
│   │   └── home/
│   │       ├── Hero.jsx               # Full-screen cinematic hero with video & split-text reveal
│   │       ├── IntroSection.jsx       # Asymmetric editorial "More Than A Structure"
│   │       ├── StatsSection.jsx       # Viewport-triggered animated numerical counters
│   │       ├── ServicesPreview.jsx    # 6 editorial cards with image zoom & red line animation
│   │       ├── FeaturedProjects.jsx   # Filterable portfolio (Villas, Residences, etc.)
│   │       ├── WhyRaydan.jsx          # Deep charcoal architectural grid with 6 core pillars
│   │       ├── ProcessTimeline.jsx    # Interactive horizontal/vertical 7-stage roadmap
│   │       ├── QualityAssurance.jsx   # Foundation-to-handover visual inspection journey
│   │       ├── MaterialsShowcase.jsx  # 8 material categories with specs & hover reveals
│   │       ├── TestimonialsSlider.jsx # Sophisticated quotation slider with progress counter
│   │       ├── AwardsSection.jsx      # Industry citations & design recognition
│   │       ├── FAQSection.jsx         # Accessible accordion with 10 detailed questions
│   │       └── FinalCTA.jsx           # Full-width cinematic conversion section
│   ├── pages/
│   │   ├── Home.jsx                   # Primary landing experience
│   │   ├── About.jsx                  # Corporate philosophy, vision, mission, leadership
│   │   ├── Services.jsx               # In-depth service breakdowns and deliverables
│   │   ├── Projects.jsx               # Full portfolio with live category filters and search
│   │   ├── ProjectDetails.jsx         # Case study route (/projects/:slug) with gallery & specs
│   │   └── Contact.jsx                # Headquarter contacts, verified form & map mockup
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env.example
├── index.html
├── package.json
└── vite.config.js
```

---

## 4. Getting Started

### Prerequisites
- Node.js 18+ or 20+

### Development Server
```bash
npm install
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```

### Environment Configuration
Copy `.env.example` to `.env` to configure your Cloudinary cloud name:
```bash
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
```
*(No private credentials or secrets are ever exposed on the frontend).*

---

## 5. Key Highlights

1. **Brand Fidelity**: Official RAYDAN logo with `#58585A` typography, `#ED1C24` apex roofline, and red subtitle rendered in crisp scalable vector format.
2. **Interactive Cost Estimator & Consultation Wizard**: Real-time built-up area slider with instant budget calculation across three finishing tiers, coupled with full frontend form validation.
3. **Dedicated Case Study Routes**: Detailed architectural narratives for each residence at `/projects/:slug`, featuring multi-image lightbox galleries with keyboard and touch swipe navigation.
4. **Accessible & Responsive**: Fully verified across mobile (320px+), tablet (768px+), laptop (1024px+), and desktop (1440px+), adhering to semantic HTML5 and `prefers-reduced-motion` principles.
