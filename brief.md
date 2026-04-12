# Alphabet Social -- Website Rebuild Brief for Claude Code

## Project overview

Rebuild the Alphabet Social public-facing website as a custom-coded site. The site positions Alphabet Social as a premium, results-driven marketing agency for established e-commerce brands -- not a personal brand platform or beginner-friendly course hub.

The single goal of this website: **convert qualified visitors into booked discovery calls.**

---

## Architecture

### Main site -- alphabetsocial.co.za (custom-coded)

This is what we are building. Six pages:

1. **Homepage** -- front door, not a sales page
2. **Services** -- paid social leads, supported by email, organic, Shopify, strategy
3. **Work / Case studies** -- results with metrics, performance-first portfolio
4. **About** -- agency story, team, values
5. **Contact / Book a call** -- qualification form with scoring/routing, then Calendly gate
6. **Blog** -- SEO, authority, email capture

### Kajabi site -- members.alphabetsocial.co.za (existing, stays as-is)

Linked from the main site via a "Learn" nav tab (opens in new tab):

- SOS Club membership (sales page, checkout, member portal)
- Toolkits / Digital products (InstaKit, Catalogue to Content, Prompt Perfect)
- Course delivery (modules, videos, resources)
- Member portal (login, dashboard, progress)

Custom code will be injected into Kajabi to match nav/footer/typography across both domains.

---

## Navigation

Clean, minimal. No dropdowns unless absolutely necessary.

| Nav item | Destination | Notes |
|----------|------------|-------|
| Home | Homepage | Core landing page |
| Services | Services page | Full breakdown of four service areas |
| Work | Case studies / Results | Portfolio with metrics |
| About | About us | Agency story, team |
| Learn | External -- Kajabi | Opens in new tab |
| Contact | Contact / Book a call | Single CTA page |

---

## Page-by-page structure

### 1. Homepage

Section order:
- Hero -- bold headline, one-line subheading, single CTA ("Book a Discovery Call")
- Platform partner badges -- Meta, Google, TikTok, Shopify, Klaviyo logos below hero
- Social proof strip -- client logos (well-known brands only)
- Problem/Solution -- "You're scaling, but your marketing isn't keeping up"
- Lead service -- Paid Social as the hero, brief intro
- Supporting services -- brief icons/cards for Email, Organic, Shopify, Strategy
- Results/Metrics -- headline stats (R350M+ generated, 8 years, 5x ROAS, etc.)
- Case study previews -- 2-3 featured client results with metrics
- How We Work -- 4-step onboarding process (Discovery Call, Strategy & Audit, Onboarding, Launch & Scale)
- Testimonials -- 3-4 results-led client quotes
- Who we work with -- qualifying copy signaling selectivity
- Learn With Us -- SOS Club, InstaKit, Catalogue to Content (links to Kajabi)
- About/credibility teaser -- brief agency intro, link to About page
- Final CTA -- "Ready to scale? Let's talk."

Primary CTA: Enquire Now / Book a Discovery Call
Secondary CTA: Explore Membership / Join Waitlist
Tertiary CTA: Browse Toolkits

### 2. Services

- Paid social (hero service, most prominent, most evidence)
- Email marketing (retention engine)
- Organic social (brand-building layer)
- Shopify optimisation (conversion layer)
- Strategy (ties everything together)

Each service: what it is, who it's for, what's included, relevant result/stat.

Primary CTA: Apply Now (native enquiry form)
Secondary CTA: View case studies

### 3. Work / Case studies

- Stat bar at top: R350M+ revenue, 8 years, 5x+ ROAS, 30-100% revenue growth
- Individual case studies as cards or full-width sections:
  - Client name + logo + industry tag
  - Headline result (one bold metric)
  - Brief context (1-2 sentences)
  - Services used (icon tags)
  - Supporting metrics (2-3 data points)
  - Creative examples (scrollable strip, 3-5 ad creatives)
  - Optional client quote (results-focused only)

Primary CTA: Enquire Now
Secondary CTA: Explore Membership

### 4. About

- Agency story (not just Leigh's personal story)
- Team section
- Values
- 8-year track record
- ICP positioning (established e-commerce brands, SA focus)

Primary CTA: Work with Us (links to Services)
Secondary CTA: Join the Membership

### 5. Contact / Book a call

- Clear heading, 1-2 sentences of copy
- Qualification form (short, 3 min max):
  - Business type / what you sell / monthly revenue range
  - What they need (ads, full agency, membership, other)
  - Current marketing spend
  - Primary goal (growth, launch, improve ROAS, build email list)
  - Timeline
  - How they heard about Alphabet
- Routing logic:
  - Qualified: calendar link to book discovery call
  - Needs nurturing: email nurture sequence
  - Not ready: redirect to membership/toolkit pages
  - Unclear: manual review queue
- Calendly embed for qualified leads
- "What happens next" section

### 6. Blog

- Blog index with email capture as primary action
- Per post: one relevant CTA (toolkit, membership, or agency)
- End of post: email capture

---

## Brand direction (from Seen Creative vision board, March 2026)

### Keywords
- Authentic (human)
- Approachable (warm)
- Chic (stylish)
- Trustworthy
- Intelligent
- Curated (strategic)

### Mood
- Soft modernity with warmth and restraint
- Between editorial fashion, lifestyle, and boutique brand
- Elevated, but still human
- Modernist but softened
- Cultured, not flashy
- Emotionally aware, but not sentimental
- Design conscious, not design obsessed
- Quietly confident

### Design references
- Bind Media (bind.media)
- Matte Projects (matteprojects.com)
- The Social Shepherd (thesocialshepherd.com)
- Webtopia (webtopia.co)

---

## Design tokens (working palette -- will be refined when final brand assets land in May)

### Current brand palette (from website brief)

| Name | Hex | Role | Usage |
|------|-----|------|-------|
| Cotton | #FBF8F3 | Background | Default page background |
| Indigo | #311C3B | Primary text | Headings, body text |
| Vivid | #FE6708 | CTA / Accent | Buttons, key highlights |
| Sand | #DDD1C1 | Secondary | Dividers, card borders |
| Valentine | #EDB4F8 | Accent | Section highlights |

### Vision board colour direction (Seen Creative)

The final palette from Josie will refine these, but the direction is:
- Slightly desaturated tones -- bold colours taken to a more sophisticated level
- Off-white/cream base layer (no stark whites)
- Warm tones: olive/ochre, deep plum/burgundy, dusty rose/pink
- Accents: muted orange, soft lavender/periwinkle
- Nothing overly saturated -- mature, grounded, intentional
- Communicates: emotional depth over loudness, calm confidence, lifestyle-driven

Approximate swatches from the vision board (eyedropped, use as directional):
- Cream/off-white base: ~#F5F0E8
- Olive/ochre: ~#9B8C2E / ~#C4A830
- Deep plum/burgundy: ~#4A1A3A / ~#6B2D5B
- Dusty rose: ~#E8B4B8 / ~#D4A0A8
- Muted orange/terracotta: ~#C86A3A
- Soft lavender: ~#B8B8D8
- Dark charcoal (for text on light): ~#2A2A28

### Typography direction

- Logo: clean, refined sans serif, lowercase ("alphabet.") or sentence case ("Alphabet.")
- Headings: sans serif, no frills, to the point
- Body: option A (serif body for warmth) or option B (all sans serif, more modern) -- Josie's preference is all sans serif
- All fonts should be Google Fonts for fast web loading and free commercial use
- Focus on spacing, proportion, and subtle detail rather than decoration

### Pattern / shape concept

- Pixel-inspired square forms as brand pattern elements
- Not a rigid grid / gingham -- loose, unique arrangements
- Individual "pixel letters" as brand elements
- Colour-blocking system as the primary brand application
- Sub-brand specific pattern grids and colour combos (SOS, C2C, etc.)
- Softens the digital reference, brings human/lifestyle quality
- Balance between structure/strategy and warmth

---

## Technical decisions

### Stack (recommended)

- **Framework**: Next.js or Astro (static-first, fast, SEO-friendly)
- **Styling**: Tailwind CSS with custom design tokens
- **Hosting**: Vercel or Netlify
- **CMS**: Headless (Sanity, or markdown files for simplicity) -- Leigh/Leah need to update copy without going through Ben every time
- **Forms**: Custom qualification form with scoring logic
- **Booking**: Calendly embed (post-qualification gate)
- **CRM**: Monday.com integration via API/Zapier
- **Notifications**: Slack webhooks for new enquiries
- **Analytics**: Cross-domain tracking across main site + Kajabi subdomain
- **AI**: Claude for draft responses to enquiries (human review before send)

### Key principles

- Mobile-first (SA market, mobile load speed is a meaningful conversion factor)
- Every page has one primary job and one primary CTA
- Global nav renders identically on every page -- one nav, one set of labels, one CTA, no exceptions
- Performance: target sub-2s load time
- SEO: semantic HTML, meta tags, structured data, blog for organic traffic

---

## Immediate build plan

### Phase 1: Global shell + Homepage (this week)

1. Set up project (framework, Tailwind config with design tokens, folder structure)
2. Build global components: nav, footer, type system, colour palette
3. Build homepage with all sections using placeholder copy from the brief
4. Deploy to staging URL

### Phase 2: Remaining pages (next week)

5. Services page
6. Work / Case studies page
7. About page
8. Contact page with qualification form logic
9. Blog index + post template

### Phase 3: Systems (week after)

10. Qualification form scoring and routing
11. Monday.com pipeline integration
12. Slack notification rules
13. Calendly integration
14. Cross-domain analytics

### Phase 4: Brand swap (May, when Josie's assets land)

15. Swap colours, fonts, and assets into the existing codebase
16. Inject matching custom code into Kajabi (nav, footer, typography)
17. QA across both domains

---

## What's ready now vs what's pending

### Ready now (use for rough draft)
- Full page structure and section order
- Current brand palette (Cotton, Indigo, Vivid, Sand, Valentine)
- Vision board direction (warm, desaturated, quietly confident)
- Placeholder copy direction from Leigh's brief
- Navigation structure
- Qualification form fields and routing logic

### Pending (swap in later)
- Final brand assets from Josie (early May)
- Final colour palette (will be refined from vision board direction)
- Final typography choices (Google Fonts, sans serif direction confirmed)
- Pixel pattern assets
- Logo files
- Case study content and metrics (Leah + David gathering)
- Final copy from Leigh (starting this week)
- Team photos
- Client logos and testimonials