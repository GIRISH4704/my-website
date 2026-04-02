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
│ │ contact form, footer year
│ ├── slideshow.js ← flashcard carousel (infinite sliding loop)
│ ├── carousel.js ← testimonials carousel
│ ├── clients.js ← clients page category filter
│ └── blog.js ← blog filter + newsletter form
├── assets/ ← images and videos go here
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
   - Full viewport height, dark navy overlay
   - Video background: assets/intro-bg.mp4 (not yet added — swap when ready)
   - Split overlay: dark navy on left fading to transparent on right
   - Text on the left only (image removed)
   - Contains: section-tag, h1, intro-lead paragraph, Get Started button → #contact
   - Appears instantly on load (no scroll reveal)

3. Flashcard carousel — id="hero"
   - Dark navy background
   - TOP HALF: Infinite sliding carousel of 5 testimonial cards
     · Each card: logo (top left) + hospital name + review quote + 5 stars
     · Centre card is bright and full size, side cards fade and bleed off screen
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

4. Services grid — id="services"
   - 6 clickable cards on soft background
   - Each links to pages/service-detail.html?service=NAME
   - Service names: Business Strategy, Partnerships, Consulting,
     Growth Support, Training, Market Research

5. Problems section — id="problems"
   - Dark navy background (#1a1a2e)
   - Two column layout, fully static (no scroll animations)
   - LEFT: heading "What's holding your business back?" + 4 problem items
     · Each problem: number circle + bold title + description
   - RIGHT: Solution block centred
     · Contains: bold heading + "Let's Talk" CTA button → #contact
   - No JS animations — everything visible on load

6. What We Do — id="what-we-do"
   - Dark navy background
   - Replaces old Characteristics section
   - Centre heading: "We Got Your Back"
   - 2×2 grid of 4 solution cards
   - Each card: number, bold title, one-liner description
   - Cards have subtle border that glows accent on hover

7. Social Proof — id="social-proof"
   - Dark navy background
   - TOP 25%: Stats bar with 5 containers
     · Stats: 120+ Clients, 3.8× ROI, 94% Retention, 12+ Years, 40+ Partners
   - BOTTOM 75%: Video testimonials grid
     · Mixed layout: 1 large local video (spans 2 rows) + 4 Instagram thumbnails
     · Local videos: assets/testimonial-1.mp4, assets/testimonial-2.mp4
     · IG thumbnails: assets/testimonial-ig-1.jpg, testimonial-ig-2.jpg,
     testimonial-ig-3.jpg
     · All items link to Instagram page on click
     · Local videos: autoplay, muted, looping
     · IG items: thumbnail with play icon overlay
     · Instagram follow CTA button at bottom
   - Replace all href="https://www.instagram.com/yourhandle" with real URL

8. Testimonials — id="testimonials"
   - Dark navy background
   - 5 client quote cards, auto-rotates every 6 seconds
   - Cards: semi-transparent background, italic quote, accent avatar
   - Arrow + dot navigation, swipe on mobile
   - JS file: js/carousel.js

9. Contact form — id="contact"
   - Dark navy background, sits inside the footer element
   - Two column layout: contact info left, form right
   - Connected to Formspree (real submissions work)
   - Honeypot spam protection
   - Fields: name, email, subject, message
   - Thank-you page fallback

10. Footer — id="footer"
    - Dark background
    - 4 columns: brand + tagline + socials, Pages, Services, Contact
    - Bottom bar with auto year

## SUB-PAGE SHARED PATTERNS

Every sub-page has:

- Same nav (links use relative paths: ../index.html)
- page-hero section (dark background, h1, lead, stats)
- services-cta section at bottom
- mini-footer
- Linked to ../js/main.js

## SCROLL REVEAL

Only these elements use scroll reveal (defined in css/style.css):
.why-point, .stat-card, .service-card

The following were removed from scroll reveal:
.char-item, .testimonial-card

The problems section has NO scroll animations — all items visible on load.

## WHAT IS FULLY DONE

- All homepage sections built, styled, and working in Live Server
- Full dark navy theme applied consistently across all sections
- Problems section fixed — all 4 items visible, no overflow, no animations
- Video background set up on intro section (swap in real video when ready)
- Social proof section with stats + video testimonial grid
- Testimonials carousel restyled to dark theme
- Contact form restyled to dark theme
- Git initialised, all files committed and pushed to GitHub
- Contact form connected to Formspree
- Honeypot spam protection
- Mobile responsive on all pages

## WHAT STILL NEEDS DOING

- Add real intro video: save as assets/intro-bg.mp4
- Add real testimonial videos: assets/testimonial-1.mp4, testimonial-2.mp4
- Add IG thumbnail images: assets/testimonial-ig-1.jpg, ig-2.jpg, ig-3.jpg
- Replace all Instagram placeholder URLs with real Instagram link
- Replace all placeholder content with real company content
- Add real photos to assets/ (team, clients)
- Replace placeholder logos in flashcard carousel with real logos
- Fix services section text colours (may be invisible on dark background)
- Connect newsletter form to Mailchimp
- Write and publish real blog posts
- Fill in real privacy policy and terms of use
- Deploy to Netlify
- Add favicon (assets/favicon.ico, link in all <head> tags)
- Add Google Analytics before going live
- Submit sitemap to Google Search Console after going live
- Clean up old unused CSS before deployment

## CURRENT STATUS

Homepage is fully built and complete. All 10 sections are done and
styled consistently in dark navy theme. Ready to move on to sub-pages,
real content, or deployment preparation.

## MY NEXT TASK

TBD — options include:

- Reviewing and improving sub-pages
- Replacing placeholder content with real content
- Preparing for Netlify deployment
- Adding favicon and Google Analytics
