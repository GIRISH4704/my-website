# HANDOFF PROMPT — MY WEBSITE PROJECT

Paste this at the start of every new Claude chat about this project.
Update the "Current status" and "My next task" sections each time.

## WHO I AM

I am building a multi-page business website from scratch.
I am not an experienced developer.
When giving me code, always specify the exact file name and where
to paste it. Keep explanations clear and step by step. Avoid jargon
unless you explain it.

My system: Windows
Code editor: VS Code with Live Server extension
Version control: Git + GitHub
Browser for testing: Google Chrome

## MY PROJECT

Type: Custom HTML, CSS, and JavaScript only.
No WordPress. No React. No npm. No build tools.
Files open directly in Chrome via Live Server.

Project folder: my-website/ — located on the Desktop
GitHub: connected (git remote add origin already done)

To open the project: open Git Bash → cd Desktop/my-website → code .
To preview: click "Go Live" in VS Code bottom-right corner

## COMPLETE FILE STRUCTURE

my-website/
├── index.html ← homepage (all 5 sections + contact + footer)
├── css/
│ ├── style.css ← CSS variables, reset, scroll reveal animation
│ ├── components.css ← ALL component styles (nav, slideshow, sections,
│ │ cards, forms, footer, all sub-page styles)
│ └── responsive.css ← ALL mobile breakpoints for every component
├── js/
│ ├── main.js ← navbar scroll shadow, mobile toggle, active
│ │ link, scroll reveal observer, contact form
│ │ (Formspree), footer year
│ ├── slideshow.js ← hero slideshow (autoplay, arrows, dots,
│ │ swipe, keyboard, pause on hover)
│ ├── carousel.js ← testimonials carousel (autoplay, arrows,
│ │ dots, swipe, pause on hover)
│ ├── clients.js ← clients page category filter + card counter
│ └── blog.js ← blog filter, sidebar topic sync, newsletter
│ form (placeholder — not yet connected)
├── assets/ ← images go here (currently empty —
│ slides use solid colour backgrounds)
└── pages/
├── services.html ← full services page (6 service rows,
│ page hero with stats, bottom CTA)
├── clients.html ← clients & partners page (5 categories,
│ sticky filter bar, client cards with
│ social links)
├── blog.html ← blog index (featured post, 6-card grid,
│ filter bar, sidebar with topics +
│ newsletter + CTA)
├── blog-post.html ← single post template (full article,
│ sidebar, share buttons, related posts)
├── about.html ← about page (story, pull quote, milestones,
│ mission grid, team cards, join card)
├── service-detail.html ← service detail template (used by all 6
│ services via ?service= URL parameter)
├── privacy.html ← privacy policy placeholder
├── terms.html ← terms of use placeholder
└── thank-you.html ← contact form submission confirmation page

## DESIGN TOKENS — defined in css/style.css :root

--color-primary: #1a1a2e (dark navy — backgrounds, headings)
--color-accent: #e94560 (red-pink — buttons, tags, highlights)
--color-text: #1a1a2e (body text)
--color-text-muted: #6b7280 (secondary text, descriptions)
--color-bg: #ffffff (page background)
--color-bg-soft: #f9fafb (subtle section background)
--color-border: #e5e7eb (all borders)
--font-main: 'Inter', sans-serif
--nav-height: 70px
--max-width: 1200px
--radius: 8px
--transition: 0.25s ease

## HOMEPAGE SECTIONS — index.html (in scroll order)

1. Navigation bar
   - Fixed at top, full width
   - Logo left, links right: Home · About · Services · Clients · Blog · Contact Us
   - Contact Us is a pill-shaped accent button
   - Adds shadow on scroll, hamburger on mobile

2. Hero slideshow — id="hero"
   - 4 slides, full viewport height minus nav
   - Slide 1 → pages/clients.html
   - Slide 2 → pages/services.html
   - Slide 3 → pages/about.html
   - Slide 4 → #contact (homepage anchor)
   - Each slide: tag, h1, description, button
   - Currently using solid colour backgrounds:
     Slide 1: #1a1a2e · Slide 2: #16213e
     Slide 3: #0f3460 · Slide 4: #533483
   - Real images will replace these — filenames will be
     assets/slide1.jpg through assets/slide4.jpg

3. Why it matters — id="why-us"
   - Two-column: 3 numbered points (left) + 4 stat cards (right)
   - Stat cards stick on scroll (desktop)
   - Scroll reveal animation on both columns

4. Services grid — id="services"
   - 6 clickable cards on soft background
   - Each links to pages/service-detail.html?service=NAME
   - Service names: Business Strategy, Partnerships, Consulting,
     Growth Support, Training, Market Research
   - Cards lift and show accent border on hover

5. Company characteristics — id="characteristics"
   - Dark background (--color-primary)
   - 3×2 grid of numbered characteristics
   - CTA banner across the bottom

6. Testimonials carousel — id="testimonials"
   - 5 client cards, soft background
   - Autoplay every 6 seconds, pauses on hover
   - Arrow buttons + dot indicators

7. Contact form — id="contact"
   - Two-column: contact details left, form right
   - Fields: name, email, subject, message
   - CONNECTED TO FORMSPREE (real submissions work)
   - Honeypot spam field included
   - Success/error messages shown inline

8. Footer — id="footer"
   - Dark background (--color-primary)
   - 4 columns: brand + tagline + socials · Pages · Services · Contact
   - Bottom bar: copyright (auto year) · Privacy · Terms

## SUB-PAGE SHARED PATTERNS

Every sub-page has:

- Same nav as homepage (links use relative paths: ../index.html)
- page-hero section (dark background, h1, lead text, stats aside)
- services-cta section at the bottom (CTA banner)
- mini-footer (logo · copyright · privacy · terms)
- Linked to ../js/main.js (handles nav toggle + scroll shadow)
- Font loaded from Google Fonts (Inter)

## WHAT IS FULLY DONE

- All pages built and working in Live Server
- Git initialised, all files committed
- GitHub connected, all files pushed
- Contact form connected to Formspree (real emails send)
- Honeypot spam protection on contact form
- Thank-you page for post-form fallback
- Scroll reveal animations on all sections
- Mobile responsive on all pages
- Sticky filter bar on clients + blog pages
- Newsletter form exists on blog pages (NOT yet connected)

## WHAT STILL NEEDS DOING

- Replace all placeholder content with real company content
- Add real photos to assets/ (slide backgrounds, team, clients)
- Connect newsletter form to a real service (e.g. Mailchimp)
- Write and publish real blog posts
- Fill in real privacy policy and terms of use
- Deploy to live hosting (plan: Netlify)
- Add favicon (save as assets/favicon.ico, link in all <head> tags)
- Add Google Analytics tracking code before going live
- Submit sitemap to Google Search Console after going live

## CURRENT STATUS

[UPDATE THIS EACH TIME — describe where you left off]
Example: "Contact form connected to Formspree. About to start
making content changes before deploying."

## MY NEXT TASK

[FILL THIS IN — one clear task per chat works best]
Example: "Add real images to the slideshow"
Example: "Connect the newsletter form to Mailchimp"
Example: "Deploy the site to Netlify"
Example: "Change the accent colour from #e94560 to #2563eb"
