# Qualification Flow — Routing Permutations v1

Last updated: 2026-04-12

---

## Questions

### Q1 — "What best describes you?"

| Option | Key | Notes |
|--------|-----|-------|
| I own an e-commerce brand | `brand-owner` | Primary ICP |
| I'm a marketing manager at an e-commerce brand | `marketing-manager` | Also ICP — decision-maker or influencer |
| I'm starting an e-commerce brand | `starting` | Not agency-ready |
| Something else | `other` | Catch-all — routes to nurture |

### Q2 — "What's your monthly revenue?"

| Option | Key | Notes |
|--------|-----|-------|
| Under R50k | `under-50k` | Too early for agency |
| R50k – R100k | `50k-100k` | Borderline — depends on need + timing |
| R100k – R500k | `100k-500k` | Sweet spot |
| R500k+ | `500k-plus` | Ideal agency client |

*Skipped if Q1 = `starting` (assumed under R50k)*

### Q3 — "What do you need most right now?"

| Option | Key | Notes |
|--------|-----|-------|
| Scale with paid ads | `scale-ads` | Strongest agency signal |
| Get my content and social sorted | `content` | Could be agency or C2C/InstaKit |
| Build a full marketing strategy | `strategy` | Agency or SOS depending on revenue |
| Learn and grow at my own pace | `learn` | Self-serve — SOS or toolkits |
| I'm not sure yet | `not-sure` | Nurture |

### Q4 — "How soon do you want to start?"

| Option | Key | Notes |
|--------|-----|-------|
| Ready now | `ready-now` | Strongest intent |
| In the next 1–3 months | `1-3-months` | Warm — still worth routing |
| Just exploring | `exploring` | Low intent — favour self-serve |

---

## Destinations

| Route | Key | What happens |
|-------|-----|-------------|
| Book a Discovery Call | `agency` | Calendly embed or link — they're qualified |
| SOS Club | `sos-club` | Redirect to Kajabi SOS Club page |
| Catalogue to Content | `c2c` | Redirect to Kajabi C2C page |
| InstaKit | `instakit` | Redirect to Kajabi InstaKit page |
| Email Nurture | `nurture` | Email capture form — enters nurture sequence |

---

## Routing Rules (decision tree)

Priority order: rules are evaluated top-to-bottom, first match wins.

### Rule 1 — Not e-commerce → Nurture

```
IF Q1 = "other"
→ nurture
Message: "We specialise in e-commerce brands — but we'd love to stay in touch."
```

### Rule 2 — Just starting → Self-serve products

```
IF Q1 = "starting"
  IF Q3 = "content"          → c2c
  IF Q3 = "learn"            → sos-club
  IF Q3 = "scale-ads"        → sos-club  (message: "Get your foundations right first")
  IF Q3 = "strategy"         → sos-club
  IF Q3 = "not-sure"         → instakit  (lowest commitment entry point)
```

### Rule 3 — High revenue (R100k+) → Agency-track

```
IF Q2 = "100k-500k" OR "500k-plus"
  IF Q3 = "scale-ads"
    → agency (any Q4)
  IF Q3 = "strategy"
    → agency (any Q4)
  IF Q3 = "content" AND Q4 = "ready-now"
    → agency
  IF Q3 = "content" AND Q4 != "ready-now"
    → c2c (with note: "When you're ready to scale, we're here")
  IF Q3 = "learn"
    → sos-club
  IF Q3 = "not-sure"
    IF Q4 = "ready-now"       → agency
    IF Q4 = "1-3-months"      → nurture
    IF Q4 = "exploring"       → nurture
```

### Rule 4 — Mid revenue (R50k–R100k) → Conditional

```
IF Q2 = "50k-100k"
  IF Q3 = "scale-ads" AND Q4 = "ready-now"
    → agency
  IF Q3 = "scale-ads" AND Q4 != "ready-now"
    → sos-club (message: "Join SOS Club to get agency-ready")
  IF Q3 = "strategy" AND Q4 = "ready-now"
    → agency
  IF Q3 = "strategy" AND Q4 != "ready-now"
    → sos-club
  IF Q3 = "content"
    → c2c
  IF Q3 = "learn"
    → sos-club
  IF Q3 = "not-sure"
    → nurture
```

### Rule 5 — Low revenue (under R50k) → Self-serve

```
IF Q2 = "under-50k"
  IF Q3 = "scale-ads"        → sos-club  (message: "Build your foundation first")
  IF Q3 = "strategy"         → sos-club
  IF Q3 = "content"          → c2c
  IF Q3 = "learn"            → sos-club
  IF Q3 = "not-sure"         → instakit
```

---

## Full Permutation Table

Legend: **A** = agency, **S** = sos-club, **C** = c2c, **I** = instakit, **N** = nurture

### Q1 = `brand-owner` or `marketing-manager`

| Q2 | Q3 | Q4: ready-now | Q4: 1-3-months | Q4: exploring |
|----|-----|:---:|:---:|:---:|
| 500k-plus | scale-ads | A | A | A |
| 500k-plus | strategy | A | A | A |
| 500k-plus | content | A | C | C |
| 500k-plus | learn | S | S | S |
| 500k-plus | not-sure | A | N | N |
| 100k-500k | scale-ads | A | A | A |
| 100k-500k | strategy | A | A | A |
| 100k-500k | content | A | C | C |
| 100k-500k | learn | S | S | S |
| 100k-500k | not-sure | A | N | N |
| 50k-100k | scale-ads | A | S | S |
| 50k-100k | strategy | A | S | S |
| 50k-100k | content | C | C | C |
| 50k-100k | learn | S | S | S |
| 50k-100k | not-sure | N | N | N |
| under-50k | scale-ads | S | S | S |
| under-50k | strategy | S | S | S |
| under-50k | content | C | C | C |
| under-50k | learn | S | S | S |
| under-50k | not-sure | I | I | I |

### Q1 = `starting` (Q2 skipped)

| Q3 | Destination |
|----|:-----------:|
| scale-ads | S |
| strategy | S |
| content | C |
| learn | S |
| not-sure | I |

### Q1 = `other` (Q2, Q3, Q4 skipped)

| Destination |
|:-----------:|
| N |

---

## Result Screen Copy (per destination)

### Agency → Book a Discovery Call
- Headline: "You're exactly who we work with."
- Body: "Based on what you've told us, you'd be a great fit for our agency services. Book a free discovery call and let's talk growth."
- CTA: Calendly embed / "Pick a time"
- Secondary: "Want to explore first?" → link to Work page

### SOS Club
- Headline: "We think you'd love the SOS Club."
- Body: "You're building something great — and the SOS Club is designed for brand owners at exactly your stage. Monthly strategy calls, templates, and a community of e-commerce founders."
- CTA: "Explore SOS Club" → Kajabi
- Secondary: "Think you're ready for agency support?" → link back to contact with override

### Catalogue to Content
- Headline: "Let's get your content working harder."
- Body: "Catalogue to Content helps you turn your product range into scroll-stopping social content — on your own schedule, with templates and frameworks that actually work."
- CTA: "Get Catalogue to Content" → Kajabi
- Secondary: "Also check out InstaKit" → Kajabi

### InstaKit
- Headline: "Start here — it's the easiest win."
- Body: "InstaKit gives you plug-and-play Instagram templates designed for product-based businesses. No strategy degree required."
- CTA: "Get InstaKit" → Kajabi
- Secondary: "Want more structure?" → SOS Club link

### Nurture
- Headline: "No worries — let's stay in touch."
- Body: "Drop your email and we'll send you our best e-commerce marketing insights. No spam, just useful stuff."
- CTA: Email input + "Subscribe"
- Secondary: "Browse our toolkits" → Kajabi

---

## Open Questions for v2

- [ ] Should "marketing-manager" route differently from "brand-owner"? (e.g. send a PDF/deck instead of Calendly?)
- [ ] Add a "monthly ad spend" question for finer agency qualification?
- [ ] Capture name + email on the result screen for ALL routes (not just nurture)?
- [ ] Slack notification for agency-qualified leads?
- [ ] Should "exploring" + high revenue still get agency? (currently yes for ads/strategy, no for not-sure)
- [ ] Add "Prompt Perfect" as a destination?
