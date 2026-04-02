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

```
my-website/
├── index.html                  ← homepage
├── css/
│   ├── style.css               ← CSS variables, reset, global body styles, topo background
│   ├── components.css          ← ALL component styles (main file)
│   └── responsive.css          ← ALL mobile breakpoints
├── js/
│   ├── main.js                 ← navbar, mobile toggle, scroll reveal,
│   │                              contact form, footer year
│   ├── slideshow.js            ← flashcard carousel (infinite sliding loop)
│   ├── carousel.js             ← testimonials carousel
│   ├── clients.js              ← clients page category filter
│   └── blog.js                 ← blog filter + newsletter form
├── assets/                     ← images and videos go here
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
```

---

## DESIGN SYSTEM — THE FULL VISUAL LANGUAGE

### Philosophy
The website has a single dark canvas aesthetic. The background is near-black
(#080810) and every section is transparent — so the topographic contour pattern
on the body flows continuously through the entire page without breaking between
sections. There are two decorative layers beneath all content:

- **Layer 1 (base):** Dense topographic contour lines in white at ~8.5% opacity.
  These are concentric ellipse clusters (like topographic map peaks) connected
  by flowing horizontal bands. Applied via `body::before` using an inline SVG
  as a `background-image`, `background-size: 700px 500px`, `position: fixed`.

- **Layer 2 (gold circuit):** In the gap between the Problems section and the
  What We Do section only. Gold (#c9a84c) right-angle circuit lines drop
  vertically from the bottom of each problem card, converge into a horizontal
  collector, then branch downward into the four solution cards below. Applied
  as an inline SVG in index.html between those two sections.

### Colour Palette — defined in css/style.css :root

```css
--dark-base: #080810          ← page background
--dark-surface: #0f0f1e       ← card background layer 1
--dark-card: #13132a          ← card background layer 2
--dark-card-deep: #0a0a18     ← card background layer 3
--dark-border: rgba(255,255,255,0.07)  ← default card border

--gold: #c9a84c               ← primary gold accent
--gold-bright: #e8c86e        ← lighter gold for glow dots
--gold-glow: rgba(201,168,76,0.25)     ← soft glow value

--color-accent: #e94560       ← red-pink (CTA buttons, problem numbers, section tags)
--color-primary: #1a1a2e      ← legacy dark navy (kept for compatibility)
```

### Typography — Google Fonts

Google Fonts link in every HTML `<head>`:
```html
<link
  href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,400&display=swap"
  rel="stylesheet"
/>
```

- **Headings / display text:** `Syne` — bold, geometric, used for all h1/h2/h3,
  section labels, nav logo, button text, card titles, number labels.
  CSS variable: `--font-display: "Syne", sans-serif`

- **Body / paragraph text:** `DM Sans` — clean, modern, used for all paragraphs,
  card descriptions, form fields, nav links.
  CSS variable: `--font-main: "DM Sans", sans-serif`

### Text colour rules (dark theme)
- Main headings: `#ffffff`
- Card titles / subheadings: `#ffffff`
- Body / descriptive text: `#7777aa`
- Gold labels / section tags: `#c9a84c`
- Muted / faint text: `#6666aa`
- NEVER use `var(--color-primary)` (#1a1a2e) for text on dark backgrounds — it
  is invisible against the dark canvas.

### Card Design — all cards site-wide
```css
background: linear-gradient(145deg, #0f0f1e 0%, #13132a 60%, #0a0a18 100%);
border: 1.5px solid rgba(255,255,255,0.07);
border-radius: 14px;
```

**On hover — gold glow effect:**
```css
border-color: #c9a84c;
box-shadow:
  0 0 0 1px rgba(201,168,76,0.45),
  0 0 28px rgba(201,168,76,0.25),
  0 0 60px rgba(201,168,76,0.1),
  inset 0 0 30px rgba(201,168,76,0.07);
background: linear-gradient(145deg, #131222 0%, #1a1630 60%, #0f0d1e 100%);
```

**Radial gold tint on hover (via ::after pseudo-element):**
```css
background: radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.14) 0%, transparent 70%);
```

### Navbar
- Frosted glass: `background: rgba(8,8,16,0.65)` + `backdrop-filter: blur(16px)`
- Border: `1px solid rgba(255,255,255,0.08)`
- On scroll: bottom border becomes `rgba(201,168,76,0.2)` gold tint
- Logo: Syne 800 weight, white
- Nav links: DM Sans, `rgba(255,255,255,0.55)`, animate to white on hover
  with a thin gold underline slide-in effect
- "Contact Us" button: gold background (`#c9a84c`), dark text (`#080810`),
  Syne bold, pill-shaped, gold glow on hover

### Buttons — two types
1. **Primary (gold):**
   `background: #c9a84c`, `color: #080810`, Syne bold, pill shape,
   `box-shadow: 0 4px 20px rgba(201,168,76,0.3)` — glows stronger on hover.

2. **Accent (red-pink):**
   `background: #e94560`, `color: #ffffff`, Syne bold, pill shape,
   `box-shadow: 0 4px 16px rgba(233,69,96,0.35)` — used for Let's Talk, Get Started.

### Section labels (above headings)
All section labels use:
```css
font-family: Syne;
font-size: 0.72rem;
font-weight: 700;
letter-spacing: 0.18em;
text-transform: uppercase;
color: #c9a84c;
```

### Spacing scale
```css
--space-xs: 8px
--space-sm: 16px
--space-md: 24px
--space-lg: 48px
--space-xl: 80px
```
Sections use `padding: 5rem 0` as a standard.

---

## HOMEPAGE SECTIONS — current order in index.html

### 1. Navigation bar
- Fixed at top, full width, frosted glass effect
- Logo left, links right: Home · About · Services · Clients · Blog · Contact Us
- Contact Us is a gold pill button
- Gold underline slide-in animation on hover for all links

### 2. Intro section — id="intro"
- Full viewport height, transparent background
- Video background: assets/intro-bg.mp4 (placeholder — swap when ready)
- Split overlay: dark navy on left fading to transparent on right
- Text on the left only
- Contains: section-tag, h1, intro-lead paragraph, Get Started button → #contact
- Appears instantly on load (no scroll reveal)

### 3. Flashcard carousel — id="hero"
- Transparent background
- Heading: "Our Clients" (.hero-heading)
- TOP HALF: Infinite sliding carousel of 5 testimonial cards
  · Each card: logo (top left) + hospital name + review quote + 5 stars
  · Centre card is bright and full size, side cards fade and bleed off screen
  · Auto-rotates every 4 seconds, arrows + dots + click to navigate
  · Seamless infinite loop in both directions
  · JS file: js/slideshow.js
  · CARD_W = window.innerWidth <= 768 ? 260 : 380, GAP = 24
- BOTTOM HALF: Case study panels (one per card)
  · Fixed size, #16213e background, never collapses
  · Layout: logo + name + category on left, Challenge/Strategy/Result + 4 metrics on right
  · Panels fade in/out via opacity (position: absolute, no page shift)
  · .fc-bottom min-height must always be LARGER than .fc-panel min-height
    (currently: fc-bottom = 340px, fc-panel = 300px)
- 5 hospitals: Atlas Hospitals, Dr Anilkumar Eye Hospital,
  Mukesh Arthro Care Hospital, Sri Ramakrishna Specialty Hospitals,
  Elmwood Healthcare Group (placeholder)

### 4. Services grid — id="services"
- Transparent background
- Heading: "Personalized Services Specially Curated For You"
- 6 cards in 3×2 grid
- Each card: gradient dark background + gold hover glow
- Card layout: icon (gold gradient square) + title inline, then bullet points, then Learn more link
- Bullets use → arrow prefix in gold colour
- Icons are gold-tinted
- Each links to pages/service-detail.html?service=NAME
- Service names: Rank No.1 in Google Searches, Let Your Voice Reach Millions,
  Exposure to International Clients, Experienced Video Production Team,
  Personalized Brand Consulting, Website Designed For Hospitals

### 5. Problems section — id="problems"
- Transparent background
- Two column layout (desktop), single column (mobile)
- LEFT: "The Problems" red-pink pill label + heading + 4 problem cards
  · Each card: gradient dark background + gold hover glow
  · Red-pink circle number + bold Syne title + DM Sans description in #7777aa
- RIGHT: Solution block — Syne bold heading + "Let's Talk" red-pink button
- No scroll animations — everything visible on load

### 6. GOLD CIRCUIT CONNECTOR (between Problems and What We Do)
- Pure decorative SVG, no HTML wrapper text
- Inline SVG placed in index.html between #problems and #what-we-do
- Gold (#c9a84c) right-angle lines drop from problem card bottoms
- Lines converge into a collector then branch to solution card positions
- Gradient opacity: full gold at top, fades to transparent at bottom
- Glow dots (circles) at every junction point
- `pointer-events: none` so it never blocks clicks
- z-index: 2 so it sits above the topo background

### 7. What We Do — id="what-we-do"
- Transparent background
- Centre heading block: gold label "WHAT WE DO" + "We Got Your Back" + subtext
- 2×2 grid of 4 solution cards
- Cards use the same gradient dark + gold hover glow treatment
- Gold number labels (01, 02, 03, 04) in Syne

### 8. Social Proof — id="social-proof"
- Transparent background
- TOP: Stats bar — 5 cards in a row
  · Each stat: gradient dark card, gold number (Syne 800), gold hover glow
  · Numbers in gold (#c9a84c), labels in #7777aa
- BOTTOM: Video testimonials grid
  · Mixed layout: 1 large local video (spans 2 rows) + 4 Instagram thumbnails
  · Local videos: assets/testimonial-1.mp4, assets/testimonial-2.mp4
  · IG thumbnails: assets/testimonial-ig-1.jpg, ig-2.jpg, ig-3.jpg
  · All items link to Instagram page on click
  · Play icon uses gold colour (border and triangle)
  · Instagram follow CTA button at bottom with gold border

### 9. Testimonials — id="testimonials"
- Transparent background
- 5 client quote cards, auto-rotates every 6 seconds
- Cards: gradient dark background, gold hover glow
- Quote mark in gold (#c9a84c)
- Avatar circles: gold gradient background, gold text
- Arrow buttons go gold on hover; dots go gold when active
- Arrow + dot navigation, swipe on mobile
- JS file: js/carousel.js

### 10. Contact form — id="contact"
- Transparent background, sits inside the footer element
- Two column layout: contact info left, form right
- Gold section label, white heading
- Form fields: dark gradient background, gold border on focus with glow
- Submit button: gold background, dark text
- Connected to Formspree
- Honeypot spam protection

### 11. Footer — id="footer"
- Transparent background
- 4 columns: brand + tagline + socials, Pages, Services, Contact
- Column headers in Syne, muted gold-ish white
- Links in #7777aa, hover to gold
- Social icons: circular, border, go gold on hover
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

NOTE: Sub-pages have NOT yet been updated to the new design system
(Syne/DM Sans fonts, dark canvas, gold accents). They still use the
older #1a1a2e dark navy backgrounds. This is a future task.

---

## CRITICAL CSS RULES TO REMEMBER

1. **DUPLICATE SELECTORS:** The project has leftover CSS from old sections
   near the top of style.css (around line 117–200). Before debugging any
   layout issue, always search for duplicate selectors. The one lower in
   the file wins. Old blocks to watch for / delete before deployment:
   - #hero (old slideshow version)
   - .slideshow, .slide, .slide.active, .slide-overlay, .slide-content
   - .slide-tag, .slide-btn, .slide-arrow, .slide-dots, .dot

2. **FC-BOTTOM CLIPPING RULE:** .fc-bottom min-height must always be larger
   than .fc-panel min-height, or the bottom panel gets clipped.

3. **SECTION BACKGROUNDS:** All sections must be `background: transparent`
   for the topo canvas to show through. This is enforced in style.css:
   ```css
   section, #main-header, .contact-band, .footer-main {
     position: relative;
     z-index: 1;
     background: transparent !important;
   }
   ```

4. **MOBILE CARD WIDTH (slideshow):** CARD_W in js/slideshow.js is:
   `const CARD_W = window.innerWidth <= 768 ? 260 : 380;`
   The CSS flex value for .fc-card on mobile must match this number.

5. **DARK THEME BORDERS:** Never use `var(--color-border)` on dark sections.
   Use `rgba(255, 255, 255, 0.07)` instead (`var(--dark-border)`).

6. **DARK THEME TEXT:** Never use `var(--color-primary)` for text on dark
   backgrounds — it's #1a1a2e (navy) and will be invisible.
   Use `#ffffff` for headings, `#7777aa` for body, `#c9a84c` for gold labels.

7. **FONT USAGE:** All headings, labels, and button text must use
   `font-family: var(--font-display)` (Syne).
   All body, paragraph, and description text uses `var(--font-main)` (DM Sans).

8. **GOLD vs ACCENT:** Gold (#c9a84c) is used for decorative elements,
   hover glows, labels, stats, and the circuit lines.
   Red-pink (#e94560) is used for CTA buttons (Get Started, Let's Talk),
   problem number circles, and The Problems pill badge.

9. **BODY::BEFORE Z-INDEX:** The topo background uses `position: fixed` on
   `body::before` at `z-index: 0`. All sections must have `z-index: 1` or
   higher to sit above it.

10. **CARD HOVER ::AFTER:** All gold-glow cards use a `::after` pseudo-element
    for the radial gold tint. Make sure `overflow: hidden` is on the card and
    the `::after` has `pointer-events: none` to avoid blocking interactions.

---

## SCROLL REVEAL

Only these elements use scroll reveal (defined in css/style.css):
`.why-point`, `.stat-card`, `.service-card`

The following were removed from scroll reveal:
`.char-item`, `.testimonial-card`

The problems section has NO scroll animations — all items visible on load.

---

## HOW TO WORK WITH ME — IMPORTANT WORKFLOW NOTES

1. **BEFORE WRITING ANY CODE**, ask clarifying questions using multiple
   choice options. I prefer selecting from options rather than describing
   from scratch. Keep questions to 2–3 max per round.

2. **ALWAYS ASK FOR THE RELEVANT CODE BLOCK** before making changes.
   Never assume what my CSS or HTML looks like — always ask me to paste
   the specific block first. This prevents multiple failed iterations.

3. **GIVE ALL CHANGES IN ONE GO.** If a fix requires changes to both HTML
   and CSS, give me everything at once rather than one file at a time.

4. **SPECIFY EXACT FILE AND LOCATION** for every code block:
   - File name (e.g. css/components.css)
   - What to search for (exact text to find)
   - What to replace it with

5. **WHEN SOMETHING LOOKS BROKEN**, the first thing to check is whether
   there is an old leftover CSS block higher up in the file conflicting
   with the new one. Search for duplicate selectors before anything else.

6. **I HAVE LEFTOVER/DEAD CSS** in my files from older versions of sections.
   When I paste a CSS block, there may be nearby old blocks that are no
   longer used. Point these out when spotted so I can clean them up.

---

## WHAT IS FULLY DONE

### Homepage
- Full homepage structure built and working in Live Server
- New design system applied to entire homepage:
  · Dark canvas background (#080810) with topographic contour pattern
  · Syne (display) + DM Sans (body) fonts loaded and applied
  · Gold (#c9a84c) accent colour throughout
  · All section backgrounds are transparent
  · Topo pattern flows continuously through all sections via body::before
- Navbar: frosted glass, gold CTA button, gold underline hover animation
- Intro section: video background (placeholder), split overlay, text left
- Flashcard carousel: "Our Clients" heading, 5 hospital cards, case study panels
- Services grid: 6 cards, gold icon backgrounds, gold hover glow, gold bullets
- Problems section: 4 dark cards with gold hover glow, red-pink number circles
- Gold circuit SVG connector between Problems and What We Do
- What We Do: 2×2 grid, 4 dark cards with gold hover glow
- Social Proof: stats bar (gold numbers), video grid, Instagram CTA
- Testimonials carousel: gold quote marks, gold avatar circles, gold hover glow
- Contact form: gold focus glow on fields, gold submit button
- Footer: Syne headings, gold hover links, gold social icons

### Sub-pages (partially updated)
- about.html ✓ dark navy theme applied to main sections
- services.html ✓ dark navy theme applied
- clients.html ✓ dark navy theme applied + category filter working
- blog.html ✗ dark theme NOT YET applied
- blog-post.html ✗ dark theme NOT YET applied
- All sub-pages still use old Inter font — Syne/DM Sans not yet applied

### Infrastructure
- Git initialised, all files committed and pushed to GitHub
- Contact form connected to Formspree with honeypot spam protection
- Mobile responsive on all pages (carousel fixed for mobile)

---

## WHAT STILL NEEDS DOING

### Content (placeholder → real)
- Add real intro video: save as assets/intro-bg.mp4
- Add real testimonial videos: assets/testimonial-1.mp4, testimonial-2.mp4
- Add IG thumbnail images: assets/testimonial-ig-1.jpg, ig-2.jpg, ig-3.jpg
- Replace all Instagram placeholder URLs (href="https://www.instagram.com/yourhandle")
  with real Instagram link: https://www.instagram.com/doitinstyl/
- Replace all placeholder text (company name, email, phone, address)
- Replace placeholder logo (Elmwood Healthcare Group) in carousel
- Add real photos to assets/ (team photos, client logos)
- Write and publish real blog posts
- Fill in real privacy policy and terms of use

### Design tasks remaining
- Apply new design system (Syne/DM Sans, gold accents, dark cards) to:
  · blog.html
  · blog-post.html
  · All sub-page navbars and footers
  · service-detail.html

### Technical tasks
- Connect newsletter form to Mailchimp
- Deploy to Netlify
- Add favicon (assets/favicon.ico, link in all <head> tags)
- Add Google Analytics before going live
- Submit sitemap to Google Search Console after going live
- Clean up old unused CSS before deployment (duplicate selectors ~line 117 in style.css)

---

## CURRENT STATUS

Full homepage redesign complete. New design system applied:
- Dark canvas (#080810) with continuous topographic background pattern
- Syne + DM Sans font pairing throughout
- Gold (#c9a84c) accent system: labels, hover glows, stats, circuit lines
- All homepage cards use dark gradient + gold glow on hover
- Gold circuit SVG connector between Problems and What We Do sections
- Frosted glass navbar with gold CTA button
- All sections transparent so topo flows through

Sub-pages partially updated (dark navy, not yet on new design system).
All changes committed to GitHub.

## MY NEXT TASK

TBD — options include:
- Apply new design system to blog.html and blog-post.html
- Apply new design system to sub-page navbars and footers
- Replace placeholder content with real company content
- Prepare for Netlify deployment
- Add favicon and Google Analytics
