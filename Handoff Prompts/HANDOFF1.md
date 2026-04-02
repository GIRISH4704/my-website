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
├── index.html ← homepage
├── css/
│ ├── style.css ← CSS variables, reset, scroll reveal animation
│ ├── components.css ← ALL component styles
│ └── responsive.css ← ALL mobile breakpoints
├── js/
│ ├── main.js ← navbar, mobile toggle, scroll reveal,
│ │ contact form, footer year,
│ │ problems section scroll animations
│ ├── slideshow.js ← flashcard carousel (infinite sliding loop)
│ ├── carousel.js ← testimonials carousel
│ ├── clients.js ← clients page category filter
│ └── blog.js ← blog filter + newsletter form
├── assets/ ← images go here
└── pages/
├── services.html
├── clients.html
├── blog.html
├── blog-post.html
├── about.html
├── service-detail.html
├── privacy.html
├── terms.html
└── thank-you.html

## DESIGN TOKENS — defined in css/style.css :root

--color-primary: #1a1a2e (dark navy)
--color-accent: #e94560 (red-pink)
--color-text: #1a1a2e
--color-text-muted: #6b7280
--color-bg: #ffffff
--color-bg-soft: #f9fafb
--color-border: #e5e7eb
--font-main: 'Inter', sans-serif
--nav-height: 70px
--max-width: 1200px
--radius: 8px
--transition: 0.25s ease

## HOMEPAGE SECTIONS — current order in index.html

1. Navigation bar
   - Fixed at top, full width
   - Logo left, links right: Home · About · Services · Clients · Blog · Contact Us
   - Contact Us is a pill-shaped accent button

2. Intro section — id="intro"
   - Dark navy background (#1a1a2e)
   - Text on the left, image on the right
   - Contains: tag, h1, description paragraph, Get Started button
   - Image src: assets/intro-placeholder.jpg (swap with real image later)
   - Appears instantly on load (no scroll reveal)

3. Flashcard carousel — id="hero"
   - Dark navy background
   - TOP HALF: Infinite sliding carousel of 5 testimonial cards
     · Each card: logo (top left) + hospital name + review quote + 5 stars
     · Centre card is bright and full size, side cards fade and bleed
     off screen edges
     · Auto-rotates every 4 seconds, arrows + dots + click to navigate
     · Seamless infinite loop in both directions
     · JS file: js/slideshow.js (CARD_W = 380, GAP = 24)
   - BOTTOM HALF: Case study panels (one per card)
     · Fixed size, slightly lighter navy (#16213e), never collapses
     · Layout: logo + name + category on left column,
     Challenge / Strategy / Result + 4 metrics on right column
     · Panels fade in/out via opacity (position: absolute, no page shift)
   - 5 hospitals: City General, Sunrise Medical, Northview Health,
     Harbour View Clinic, Elmwood Healthcare Group
   - Placeholder logos: placehold.co (swap with real logos later)
   - Individual logo sizes set via inline style on each img tag

4. Services grid — id="services"
   - 6 clickable cards on soft background
   - Each links to pages/service-detail.html?service=NAME
   - Service names: Business Strategy, Partnerships, Consulting,
     Growth Support, Training, Market Research

5. Problems section — id="problems"
   - Dark navy background (#1a1a2e)
   - Two column layout
   - LEFT: Sticky heading "The Problems" + 4 problem items that
     slide up one at a time as user scrolls
     · Each problem: number circle + bold title + one sentence
     · Staggered animation (0.15s delay between each)
   - RIGHT: Solution block (sticky, centred) that slides up after
     all problems are visible
     · Contains: bold heading + "Let's Talk" CTA button → #contact
   - Scroll animations handled in js/main.js

6. Characteristics — id="characteristics"
   - Dark background
   - 3×2 grid of numbered characteristics
   - CTA banner at bottom

7. Testimonials carousel — id="testimonials"
   - 5 client cards, soft background
   - Autoplay every 6 seconds
   - JS file: js/carousel.js

8. Contact form — id="contact"
   - Connected to Formspree (real submissions work)
   - Honeypot spam protection
   - Thank-you page fallback

9. Footer — id="footer"
   - Dark background
   - 4 columns + bottom bar with auto year

## SUB-PAGE SHARED PATTERNS

Every sub-page has:

- Same nav (links use relative paths: ../index.html)
- page-hero section (dark background, h1, lead, stats)
- services-cta section at bottom
- mini-footer
- Linked to ../js/main.js

## WHAT IS FULLY DONE

- All pages built and working in Live Server
- Git initialised, all files committed and pushed to GitHub
- Contact form connected to Formspree
- Honeypot spam protection
- Scroll reveal animations on all sections
- Mobile responsive on all pages
- Sticky filter bar on clients + blog pages
- Homepage sections redesigned and reordered in this session

## WHAT STILL NEEDS DOING

- Replace all placeholder content with real company content
- Add real photos to assets/ (intro image, team, clients)
- Replace placeholder logos in flashcard carousel with real logos
- Connect newsletter form to Mailchimp
- Write and publish real blog posts
- Fill in real privacy policy and terms of use
- Deploy to Netlify
- Add favicon (assets/favicon.ico, link in all <head> tags)
- Add Google Analytics before going live
- Submit sitemap to Google Search Console after going live
- Clean up old unused CSS before deployment

## CURRENT STATUS

Homepage redesign in progress. Completed in this session:

- Added new intro section (image + text) as section 1
- Replaced old hero slideshow with infinite sliding flashcard
  carousel featuring testimonial cards and case study panels
- Moved services grid up to section 3
- Replaced "Why it matters" with new "Problems" section (section 5)
  featuring scroll-triggered animations

## MY NEXT TASK

Continue making changes to the homepage sections.
Next up: reviewing/modifying sections 6 and 7
(Characteristics and Testimonials) or adding new sections.
