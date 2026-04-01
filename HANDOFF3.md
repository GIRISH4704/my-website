# HANDOFF PROMPT — MY WEBSITE PROJECT

Paste this at the start of every new Claude chat about this project.
Update the "Current status" and "My next task" sections each time.

---

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

---

## MY PROJECT

Type: Custom HTML, CSS, and JavaScript only.
No WordPress. No React. No npm. No build tools.
Files open directly in Chrome via Live Server.

Project folder: my-website/ — located on the Desktop
GitHub: connected (git remote add origin already done)

To open the project: open Git Bash → cd Desktop/my-website → code .
To preview: click "Go Live" in VS Code bottom-right corner

---

## COMPLETE FILE STRUCTURE

my-website/
├── index.html ← homepage
├── css/
│ ├── style.css ← CSS variables, reset, global body styles
│ ├── components.css ← ALL component styles (main file)
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

---

## DESIGN TOKENS — defined in css/style.css :root

--color-primary: #1a1a2e (dark navy — main background)
--color-accent: #e94560 (red-pink — buttons, highlights)
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

Dark theme colours used directly (not via variables):

- Section backgrounds: #1a1a2e
- Card backgrounds: #16213e
- Subtle borders: rgba(255, 255, 255, 0.08)
- Muted text on dark: #a0aec0

---

## HOMEPAGE SECTIONS — current order in index.html

1. Navigation bar
   - Fixed at top, full width
   - Logo left, links right: Home · About · Services · Clients · Blog · Contact Us
   - Contact Us is a pill-shaped accent button

2. Intro section — id="intro"
   - Full viewport height, dark navy overlay
   - Video background: assets/intro-bg.mp4 (not yet added — swap when ready)
   - Split overlay: dark navy on left fading to transparent on right
   - Text on the left only
   - Contains: section-tag, h1, intro-lead paragraph, Get Started button → #contact
   - Appears instantly on load (no scroll reveal)

3. Flashcard carousel — id="hero"
   - Dark navy background
   - Heading: "Our Clients" (.hero-heading)
   - TOP HALF: Infinite sliding carousel of 5 testimonial cards
     · Each card: logo (top left) + hospital name + review quote + 5 stars
     · Centre card is bright and full size, side cards fade and bleed off screen
     · Auto-rotates every 4 seconds, arrows + dots + click to navigate
     · Seamless infinite loop in both directions
     · JS file: js/slideshow.js
     · CARD_W = window.innerWidth <= 768 ? 260 : 380, GAP = 24
   - BOTTOM HALF: Case study panels (one per card)
     · Fixed size, slightly lighter navy (#16213e), never collapses
     · Layout: logo + name + category on left column,
     Challenge / Strategy / Result + 4 metrics on right column
     · Panels fade in/out via opacity (position: absolute, no page shift)
     · .fc-bottom min-height must always be LARGER than .fc-panel min-height
     (currently: fc-bottom = 340px, fc-panel = 300px)
   - 5 hospitals: Atlas Hospitals, Dr Anilkumar Eye Hospital,
     Mukesh Arthro Care Hospital, Sri Ramakrishna Specialty Hospitals,
     Elmwood Healthcare Group (placeholder)

4. Services grid — id="services"
   - Dark navy background (#1a1a2e)
   - Heading: "Personalized Services Specially Curated For You"
   - 6 clickable cards in 3×2 grid
   - Card background: #16213e
   - Card layout: icon + title on same row (CSS grid, 40px + 1fr columns)
     then bullet points spanning full width, then Learn more link
   - Each card: icon (top left) + title (right of icon) + 3 bullet points + Learn more
   - Bullets use → arrow prefix in accent colour
   - Each links to pages/service-detail.html?service=NAME
   - Service names: Rank No.1 in Google Searches, Let Your Voice Reach Millions,
     Exposure to International Clients, Experienced Video Production Team,
     Personalized Brand Consulting, Website Designed For Hospitals

5. Problems section — id="problems"
   - Dark navy background (#1a1a2e)
   - Two column layout (desktop), single column (mobile)
   - LEFT: heading + 4 problem items in glass-effect cards
     · Each card: rgba(255,255,255,0.05) background + blur + subtle border
     · Number circle + bold title + description
   - RIGHT: Solution block (plain text, no card)
     · Bold heading + "Let's Talk" CTA button → #contact
   - No scroll animations — everything visible on load

6. What We Do — id="what-we-do"
   - Dark navy background
   - Centre heading: "We Got Your Back"
   - 2×2 grid of 4 solution cards
   - Cards have subtle border that glows accent on hover

7. Social Proof — id="social-proof"
   - Dark navy background
   - TOP 25%: Stats bar with 5 containers
   - BOTTOM 75%: Video testimonials grid
     · Mixed layout: 1 large local video + 4 Instagram thumbnails
     · Local videos: assets/testimonial-1.mp4, assets/testimonial-2.mp4
     · IG thumbnails: assets/testimonial-ig-1.jpg, ig-2.jpg, ig-3.jpg
     · All items link to Instagram page on click
     · Instagram follow CTA button at bottom
   - Replace all href="https://www.instagram.com/yourhandle" with real URL

8. Testimonials — id="testimonials"
   - Dark navy background
   - 5 client quote cards, auto-rotates every 6 seconds
   - Arrow + dot navigation, swipe on mobile
   - JS file: js/carousel.js

9. Contact form — id="contact"
   - Dark navy background, sits inside the footer element
   - Two column layout: contact info left, form right
   - Connected to Formspree
   - Honeypot spam protection
   - Fields: name, email, subject, message
   - Thank-you page fallback

10. Footer — id="footer"
    - Dark background
    - 4 columns: brand + tagline + socials, Pages, Services, Contact
    - Bottom bar with auto year

---

## SUB-PAGE SHARED PATTERNS

Every sub-page has:

- Same nav (links use relative paths: ../index.html)
- page-hero section (dark background, h1, lead, stats)
- services-cta section at bottom
- mini-footer
- Linked to ../js/main.js

Sub-pages converted to dark navy (#1a1a2e) background:

- about.html ✓ (.about-story, .about-mission, .about-team)
- services.html ✓ (.services-list-section, .services-cta)
- clients.html ✓ (.clients-filter-bar, .clients-page, .client-card)

---

## CRITICAL CSS RULES TO REMEMBER

1. DUPLICATE SELECTORS: The project has leftover CSS from old sections
   near the top of style.css (around line 117–200). Before debugging any
   layout issue, always search for duplicate selectors. The one lower in
   the file wins. Old blocks that have been deleted or should be deleted:
   - #hero (old slideshow version with height: calc(100vh - var(--nav-height)))
   - .slideshow, .slide, .slide.active, .slide-overlay, .slide-content
   - .slide-tag, .slide-btn, .slide-arrow, .slide-dots, .dot

2. FC-BOTTOM CLIPPING RULE: .fc-bottom min-height must always be larger
   than .fc-panel min-height, or the bottom panel gets clipped and loses
   its rounded bottom edge.

3. SECTION H2/H3 COLOURS: Global rules in components.css around line 140:
   - section h2 { color: #ffffff }
   - section h3 { color: #ffffff } ← was var(--color-primary), now fixed
     These apply site-wide. If a heading is invisible, check these first.

4. MOBILE CARD WIDTH (slideshow): CARD_W in js/slideshow.js is now:
   const CARD_W = window.innerWidth <= 768 ? 260 : 380;
   The CSS flex value for .fc-card on mobile must match this number.

5. DARK THEME BORDERS: Never use var(--color-border) on dark sections.
   Use rgba(255, 255, 255, 0.08) instead.

6. DARK THEME TEXT: Never use var(--color-primary) for text on dark
   backgrounds — it's #1a1a2e (navy) and will be invisible.
   Use #ffffff for headings, #a0aec0 for muted text.

---

## HOW TO WORK WITH ME — IMPORTANT WORKFLOW NOTES

1. BEFORE WRITING ANY CODE, ask clarifying questions using multiple
   choice options. I prefer selecting from options rather than describing
   from scratch. Keep questions to 2–3 max per round.

2. ALWAYS ASK FOR THE RELEVANT CODE BLOCK before making changes.
   Never assume what my CSS or HTML looks like — always ask me to paste
   the specific block first. This prevents multiple failed iterations.

3. GIVE ALL CHANGES IN ONE GO. If a fix requires changes to both HTML
   and CSS, give me everything at once rather than one file at a time.

4. SPECIFY EXACT FILE AND LOCATION for every code block:
   - File name (e.g. css/components.css)
   - What to search for (exact text to find)
   - What to replace it with

5. WHEN SOMETHING LOOKS BROKEN, the first thing to check is whether
   there is an old leftover CSS block higher up in the file conflicting
   with the new one. Search for duplicate selectors before anything else.

6. I HAVE LEFTOVER/DEAD CSS in my files from older versions of sections.
   When I paste a CSS block, there may be nearby old blocks that are no
   longer used. Point these out when spotted so I can clean them up.

---

## SCROLL REVEAL

Only these elements use scroll reveal (defined in css/style.css):
.why-point, .stat-card, .service-card

The following were removed from scroll reveal:
.char-item, .testimonial-card

The problems section has NO scroll animations — all items visible on load.

---

## WHAT IS FULLY DONE

- All homepage sections built, styled, and working in Live Server
- Full dark navy theme applied consistently across all sections
- Services section: dark cards, icon + title inline, bullet point layout
- Problems section: glass-effect cards, white text, solution block right
- Flashcard carousel: "Our Clients" heading added, mobile card width fixed
- Video background set up on intro section (swap in real video when ready)
- Social proof section with stats + video testimonial grid
- Testimonials carousel restyled to dark theme
- Contact form restyled to dark theme
- Sub-pages (about, services, clients) converted to dark navy theme
- Git initialised, all files committed and pushed to GitHub
- Contact form connected to Formspree
- Honeypot spam protection
- Mobile responsive on all pages (carousel fixed for mobile)

---

## WHAT STILL NEEDS DOING

- Add real intro video: save as assets/intro-bg.mp4
- Add real testimonial videos: assets/testimonial-1.mp4, testimonial-2.mp4
- Add IG thumbnail images: assets/testimonial-ig-1.jpg, ig-2.jpg, ig-3.jpg
- Replace all Instagram placeholder URLs with real Instagram link
- Replace all placeholder content with real company content
- Add real photos to assets/ (team, clients)
- Replace placeholder logo (Elmwood Healthcare Group) in carousel
- Connect newsletter form to Mailchimp
- Write and publish real blog posts
- Fill in real privacy policy and terms of use
- Deploy to Netlify
- Add favicon (assets/favicon.ico, link in all <head> tags)
- Add Google Analytics before going live
- Submit sitemap to Google Search Console after going live
- Clean up old unused CSS before deployment (especially around line 117)
- Blog page — dark theme not yet applied
- Blog post page — dark theme not yet applied

---

## CURRENT STATUS

Homepage fully built. Dark navy theme applied consistently across homepage
and sub-pages (about, services, clients). Mobile carousel fixed. Services
cards restructured with inline icon + title and bullet points. Problems
section has glass-effect cards. All changes committed to GitHub.

## MY NEXT TASK

TBD — options include:

- Apply dark theme to blog and blog post pages
- Replace placeholder content with real content
- Prepare for Netlify deployment
- Add favicon and Google Analytics
