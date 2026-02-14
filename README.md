Project Description
Total pages = 6 Pages
Home
Portfolio / Case Studies (Dynamic)
Services
Industries
About
Contact (Dynamic)


Price = 13K
50% Upfornt
50% After Delivery

Delivery
6 - 20 days (Flexible)

Details of the website/pages attached in voice notes.
Reference Sites (For inspiration)
https://www.superside.com
https://www.adnovum.com

Lifetime support for any website issues, excluding errors caused by client-side modifications.


====================


https://www.superside.com
https://www.adnovum.com
``` :contentReference[oaicite:2]{index=2}

> Note: You uploaded two identical “Project Description” PDFs (same text). :contentReference[oaicite:3]{index=3}

---

### B) “About Us” copy (content that should go on the About page)
This PDF looks like the **About page content** for an AI-video/Synthesia-focused studio:

- Stats:
  - **200+ projects delivered**
  - **350+ ads / courses / business videos produced**
  - **4+ years working with AI video tech**
  - **Certified Synthesia Professional**
  - **Multilingual video production**
  - Trusted by startups, agencies, enterprise :contentReference[oaicite:4]{index=4}
- Positioning:
  - “We build AI videos that deliver results”
  - Focus on structured, business-ready AI videos
  - Emphasis on: script flow, pacing, scene structure, branding consistency, localization, business outcomes
  - Approach: treat AI video like a repeatable system
  - Vision: AI video is a shift; help companies use it strategically and at scale :contentReference[oaicite:5]{index=5}

---

## 2) What you need to build (site map + dynamic parts)

### Pages (exactly 6 per PDF)
**Static pages**
- `/` Home
- `/services`
- `/industries`
- `/about`

**Dynamic pages**
- `/portfolio` (list / filter / categories)
- `/portfolio/[slug]` (case study details page)  
- `/contact` (dynamic usually means: form + configurable content + maybe CMS-driven CTA blocks)

---

## 3) Practical roadmap (Next.js + shadcn + Framer Motion)

### Phase 1 — Foundation (Day 1)
- Next.js (App Router) + TypeScript
- Tailwind + shadcn setup
- Global layout: navbar, footer, container widths, typography scale
- Motion rules: reduced-motion support + standard animation tokens (duration, ease)

**Deliverable:** working skeleton with routes + consistent styling.

---

### Phase 2 — Content model (Day 1–2)
Since you have **dynamic Portfolio/Case Studies**, pick one:
- **Option A (fast): MDX files** for case studies (great if you won’t update daily)
- **Option B (clean for clients): Headless CMS** (Sanity / Contentful / Strapi)

**Case Study fields to define**
- title, slug
- client name (optional)
- industry
- services used
- problem / process / outcome
- gallery (videos/images)
- metrics/results (optional)
- testimonial (optional)
- tags

**Deliverable:** case studies can be added/edited without touching layout code.

---

### Phase 3 — Build the pages (Day 2–6)

#### Home (`/`)
Goal: instantly communicate “AI videos that deliver results”.
Sections I’d include:
- Hero (value prop + CTA)
- Credibility stats (from About PDF)
- Featured case studies (3–6)
- Services snapshot
- Process (simple 3–5 steps)
- Testimonials / logos
- CTA strip → Contact

#### Portfolio (`/portfolio`) + Case Study (`/portfolio/[slug]`)
- Portfolio list with filters (industry/service)
- Case study template with:
  - intro (what it was)
  - challenge → solution → results
  - video embeds (lazy loaded)
  - next/prev navigation

#### Services (`/services`)
- Service cards (training/onboarding/sales enablement/ads/localization/etc.)
- Packages (optional)
- CTA

#### Industries (`/industries`)
- Industries grid (each shows “what we typically deliver”)
- Relevant case studies per industry

#### About (`/about`)
Use the “About Us” PDF almost directly:
- stats row (200+, 350+, 4+ years, Synthesia certified…)
- narrative: why good AI video is hard
- approach: “AI video as a system”
- vision section :contentReference[oaicite:6]{index=6}

#### Contact (`/contact`)
- shadcn form + validation
- optional: “book a call” embed
- dynamic: editable contact page copy + CTA blocks (via CMS)

**Deliverable:** all 6 pages complete and connected.

---

### Phase 4 — Polish + quality (Day 6–10)
- SEO (metadata, OpenGraph, sitemap, robots)
- Performance pass:
  - `next/image` everywhere
  - video lazy-load + poster images
  - route-level loading states
- Accessibility (keyboard nav, contrast, focus rings)
- Motion polish (scroll reveals, page transitions, micro-interactions)

---

### Phase 5 — Deployment + handoff (Day 10–20 as needed)
- Deploy to Vercel
- Add analytics (Plausible / GA)
- Basic CMS permissions (if using CMS)
- Handoff doc: how to add case studies + how contact submissions work

---

## 4) How shadcn + Framer Motion fits (clean + professional)
- Use **shadcn** for layout primitives: Card, Button, Tabs, Accordion, Badge, Dialog, Sheet, Form
- Use **Framer Motion** for:
  - page transitions (subtle)
  - section reveal on scroll
  - hover/tap micro-animations for case study cards
  - animated stats counters (optional)

---

If you want, paste (or upload) the **voice notes text** / screenshots of the voice notes, because the PDF literally says the detailed page requirements are in voice notes — that’s the only missing piece before we can lock the exact sections per page.
