# Suite Essentials - PRD

## Original Problem Statement
Build a luxury, warm-tone lead generation website for "Suite Essentials" - a company providing essential hotel supplies at wholesale prices. Website matches the logo color theme (deep taupe #5A4A4E with botanical leaf elements on dark background).

## Architecture
- **Frontend**: React + Tailwind CSS + Shadcn UI + Framer Motion
- **Backend**: FastAPI + MongoDB
- **Fonts**: Playfair Display (headings), Outfit (body)
- **Theme**: Dark luxury with taupe/bronze/gold accents

## User Personas
- Hotel owners looking to furnish new properties
- Property managers needing supply restocking
- Hospitality consultants sourcing for clients

## Core Requirements
1. Home page with hero, featured categories, stats, why choose us
2. Product Categories page with 7 categories and all subcategories
3. About Us page
4. Contact / Request a Quote form (stores in MongoDB)
5. Luxury dark theme matching logo

## What's Been Implemented (Feb 2026)
- [x] Home page: Hero with marble bg, stats bar, bento grid categories, why choose us, CTA
- [x] Products page: All 7 categories with subcategories, quick nav, product item tags
- [x] About page: Company story, values, CTA
- [x] Contact page: Full inquiry form with category selection, contact info sidebar
- [x] Backend API: POST/GET /api/inquiries (MongoDB storage)
- [x] Responsive navbar with mobile menu
- [x] Footer with contact info and navigation
- [x] Framer motion animations throughout
- [x] All data-testid attributes for testing

## Contact Info
- Phone: +91 92704 38355
- Email: essentialssuite@gmail.com

## Prioritized Backlog
### P0 (Done)
- All 4 pages implemented and functional
- Contact form with backend integration

### P1 (Nice to have)
- Add WhatsApp chat button for direct inquiries
- SEO meta tags and Open Graph for social sharing
- Google Analytics integration

### P2 (Future)
- Admin dashboard to view inquiries
- Product image gallery per category
- Testimonials/client logos section
- Blog section for hotel industry insights
