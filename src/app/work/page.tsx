import Link from "next/link";

export const metadata = {
  title: "Work",
  description:
    "Case studies and results from Alphabet Social. R350M+ revenue generated, 5x+ ROAS, and 30-100% revenue growth for e-commerce brands.",
};

const stats = [
  { value: "R350M+", label: "Revenue generated" },
  { value: "8+", label: "Years in e-commerce" },
  { value: "5x+", label: "Average ROAS" },
  { value: "30–100%", label: "Revenue growth" },
];

const caseStudies = [
  {
    client: "Client A",
    industry: "Fashion & Apparel",
    logo: "A",
    headline: "312% increase in ROAS in 90 days",
    context:
      "An established fashion brand spending R50k/month on Meta ads with declining returns. They needed a strategic overhaul to scale profitably.",
    services: ["Paid Social", "Email Marketing"],
    metrics: [
      { value: "312%", label: "ROAS increase" },
      { value: "R2.4M", label: "Revenue in Q1" },
      { value: "42%", label: "Lower CPA" },
    ],
    creatives: [
      "Ad Creative 1",
      "Ad Creative 2",
      "Ad Creative 3",
      "Ad Creative 4",
    ],
    quote: {
      text: "Alphabet took our ad account from stagnant to our best quarter ever. The team genuinely understands e-commerce.",
      author: "Founder",
    },
  },
  {
    client: "Client B",
    industry: "Beauty & Skincare",
    logo: "B",
    headline: "R12M revenue in 6 months",
    context:
      "A premium skincare brand launching into paid media for the first time. They needed a full-funnel approach from awareness to retention.",
    services: ["Paid Social", "Email Marketing", "Shopify Optimisation"],
    metrics: [
      { value: "R12M", label: "Revenue in 6 months" },
      { value: "6.2x", label: "ROAS" },
      { value: "38%", label: "Revenue from email" },
    ],
    creatives: [
      "Ad Creative 1",
      "Ad Creative 2",
      "Ad Creative 3",
    ],
    quote: {
      text: "They don't just run ads — they think about the full customer journey. Email, landing pages, creative, everything.",
      author: "CEO",
    },
  },
  {
    client: "Client C",
    industry: "Home & Living",
    logo: "C",
    headline: "67% lower CPA while scaling 3x",
    context:
      "A home décor brand struggling with rising acquisition costs. They needed creative testing and audience refinement to scale without bleeding margin.",
    services: ["Paid Social", "Strategy"],
    metrics: [
      { value: "67%", label: "Lower CPA" },
      { value: "3x", label: "Spend scaled" },
      { value: "4.8x", label: "Blended ROAS" },
    ],
    creatives: [
      "Ad Creative 1",
      "Ad Creative 2",
      "Ad Creative 3",
      "Ad Creative 4",
      "Ad Creative 5",
    ],
    quote: null,
  },
  {
    client: "Client D",
    industry: "Food & Beverage",
    logo: "D",
    headline: "From R0 to R1.2M/month in 4 months",
    context:
      "A fast-growing DTC food brand with strong product-market fit but no paid media strategy. We built everything from scratch.",
    services: ["Paid Social", "Organic Social", "Strategy"],
    metrics: [
      { value: "R1.2M", label: "Monthly revenue" },
      { value: "5.1x", label: "ROAS" },
      { value: "4 months", label: "To scale" },
    ],
    creatives: [
      "Ad Creative 1",
      "Ad Creative 2",
      "Ad Creative 3",
    ],
    quote: {
      text: "We went from guessing to knowing exactly what's working. Our ROAS has never been this consistent.",
      author: "Marketing Director",
    },
  },
  {
    client: "Client E",
    industry: "Activewear",
    logo: "E",
    headline: "45% conversion rate improvement on Shopify",
    context:
      "An activewear brand with strong traffic but poor conversion. We optimised their store, rebuilt their product pages, and launched targeted landing pages for ad traffic.",
    services: ["Shopify Optimisation", "Paid Social"],
    metrics: [
      { value: "45%", label: "CR improvement" },
      { value: "28%", label: "AOV increase" },
      { value: "R800k", label: "Additional monthly revenue" },
    ],
    creatives: [
      "Landing Page 1",
      "Landing Page 2",
      "Product Page",
    ],
    quote: {
      text: "The store optimisation alone paid for itself in the first week. Then they scaled our ads on top of it.",
      author: "Founder",
    },
  },
];

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cotton px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-vivid">
            Our Work
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-indigo sm:text-5xl">
            Results that speak for themselves.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-indigo/70">
            Real metrics from real brands. No vanity numbers — just revenue,
            ROAS, and growth.
          </p>
        </div>
      </section>

      {/* Stat bar */}
      <section className="border-y border-sand bg-indigo px-6 py-14">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-vivid sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-cotton/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-cotton px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl space-y-20">
          {caseStudies.map((study, idx) => (
            <article
              key={study.client}
              className={`rounded-3xl border border-sand p-8 sm:p-12 ${
                idx % 2 === 0 ? "bg-cotton" : "bg-cotton-dark"
              }`}
            >
              {/* Header */}
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-valentine/30 text-lg font-bold text-indigo">
                  {study.logo}
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-indigo">
                    {study.client}
                  </h2>
                  <p className="text-sm text-indigo/50">{study.industry}</p>
                </div>
                <div className="ml-auto flex flex-wrap gap-2">
                  {study.services.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-sand/50 px-3 py-1 text-xs font-medium text-indigo/60"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Headline result */}
              <h3 className="mt-8 text-2xl font-bold text-vivid sm:text-3xl">
                {study.headline}
              </h3>

              {/* Context */}
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-indigo/70">
                {study.context}
              </p>

              {/* Metrics */}
              <div className="mt-8 grid grid-cols-3 gap-6">
                {study.metrics.map((m) => (
                  <div key={m.label}>
                    <p className="text-2xl font-bold text-indigo">{m.value}</p>
                    <p className="mt-1 text-xs text-indigo/50">{m.label}</p>
                  </div>
                ))}
              </div>

              {/* Creative strip */}
              <div className="mt-10">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-indigo/40">
                  Creative Examples
                </p>
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {study.creatives.map((c, i) => (
                    <div
                      key={i}
                      className="flex h-40 w-32 shrink-0 items-center justify-center rounded-xl bg-sand/40 text-xs text-indigo/30"
                    >
                      {c}
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote */}
              {study.quote && (
                <blockquote className="mt-10 border-l-2 border-vivid pl-6">
                  <p className="text-sm italic leading-relaxed text-indigo/60">
                    &ldquo;{study.quote.text}&rdquo;
                  </p>
                  <footer className="mt-2 text-xs font-semibold text-indigo/40">
                    — {study.quote.author}, {study.client}
                  </footer>
                </blockquote>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-vivid px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Want results like these?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            Book a discovery call and find out how we can help your brand grow.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-vivid transition-colors hover:bg-cotton"
            >
              Enquire Now
            </Link>
            <a
              href="https://members.alphabetsocial.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Explore Membership
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
