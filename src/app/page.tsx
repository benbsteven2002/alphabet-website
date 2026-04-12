import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Homepage – Alphabet Social                                        */
/*  Section order follows the brief exactly                           */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-cotton px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-indigo sm:text-6xl lg:text-7xl">
            Your brand deserves marketing that{" "}
            <span className="text-vivid">actually scales.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-indigo/70">
            We help established e-commerce brands turn ad spend into predictable,
            profitable growth — with strategy, creative, and media buying that
            works together.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="rounded-full bg-vivid px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-vivid-hover"
            >
              Book a Discovery Call
            </Link>
            <Link
              href="/work"
              className="rounded-full border border-sand px-8 py-3.5 text-sm font-semibold text-indigo transition-colors hover:bg-sand/30"
            >
              See Our Results
            </Link>
          </div>
        </div>
      </section>

      {/* ── Platform Partner Badges ── */}
      <section className="border-y border-sand bg-cotton-dark px-6 py-10">
        <div className="mx-auto max-w-5xl">
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-indigo/40">
            Platform Partners
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {["Meta", "Google", "TikTok", "Shopify", "Klaviyo"].map((partner) => (
              <span
                key={partner}
                className="text-sm font-semibold tracking-wide text-indigo/30"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Social Proof Strip ── */}
      <section className="bg-cotton px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <p className="mb-8 text-center text-xs font-semibold uppercase tracking-widest text-indigo/40">
            Trusted by leading e-commerce brands
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-6">
            {[
              "Client Logo",
              "Client Logo",
              "Client Logo",
              "Client Logo",
              "Client Logo",
              "Client Logo",
            ].map((logo, i) => (
              <div
                key={i}
                className="flex h-10 w-28 items-center justify-center rounded bg-sand/40 text-xs text-indigo/30"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Problem / Solution ── */}
      <section className="bg-indigo px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-cotton sm:text-4xl">
            You&apos;re scaling, but your marketing isn&apos;t keeping up.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-cotton/70">
            You&apos;ve built a product people love. But rising ad costs, inconsistent
            ROAS, and a patchwork of freelancers and tools are holding you back.
            You need a partner who gets e-commerce — and gets results.
          </p>
          <p className="mt-8 text-lg font-semibold text-vivid">
            That&apos;s where Alphabet comes in.
          </p>
        </div>
      </section>

      {/* ── Lead Service – Paid Social ── */}
      <section className="bg-cotton px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-vivid">
              Our Core Service
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-indigo sm:text-4xl">
              Paid Social That Performs
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-indigo/70">
              Meta, TikTok, and Google ads managed by a team that lives and breathes
              e-commerce performance. Strategy, creative, and media buying — all
              under one roof, all focused on your bottom line.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { metric: "R350M+", label: "Revenue generated for clients" },
              { metric: "5x+", label: "Average ROAS" },
              { metric: "30–100%", label: "Revenue growth" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-sand bg-cotton p-8 text-center"
              >
                <p className="text-3xl font-bold text-vivid">{stat.metric}</p>
                <p className="mt-2 text-sm text-indigo/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Supporting Services ── */}
      <section className="border-t border-sand bg-cotton-dark px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-indigo sm:text-4xl">
              Full-Stack E-Commerce Marketing
            </h2>
            <p className="mt-4 text-lg text-indigo/70">
              Paid social leads the way, supported by everything else you need to
              scale profitably.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Email Marketing",
                desc: "Retention flows, campaigns, and lifecycle automations that turn one-time buyers into repeat customers.",
                icon: "📧",
              },
              {
                title: "Organic Social",
                desc: "Content strategy and community management that builds brand equity and keeps you top of mind.",
                icon: "📱",
              },
              {
                title: "Shopify Optimisation",
                desc: "Conversion rate optimisation, landing pages, and store improvements that make every click count.",
                icon: "🛍",
              },
              {
                title: "Strategy",
                desc: "Full-funnel planning that ties paid, organic, email, and on-site together into one growth engine.",
                icon: "📊",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-sand bg-cotton p-8"
              >
                <span className="text-3xl" role="img" aria-label={service.title}>
                  {service.icon}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-indigo">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-indigo/60">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="text-sm font-semibold text-vivid transition-colors hover:text-vivid-hover"
            >
              Explore all services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── Results / Metrics ── */}
      <section className="bg-indigo px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold tracking-tight text-cotton sm:text-4xl">
            The Numbers Speak
          </h2>
          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-8 sm:grid-cols-4">
            {[
              { value: "R350M+", label: "Revenue generated" },
              { value: "8+", label: "Years in e-commerce" },
              { value: "5x+", label: "Average ROAS" },
              { value: "30–100%", label: "Client revenue growth" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-vivid sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-cotton/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Case Study Previews ── */}
      <section className="bg-cotton px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-vivid">
              Selected Work
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-indigo sm:text-4xl">
              Real Results for Real Brands
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                client: "Client A",
                industry: "Fashion",
                headline: "312% increase in ROAS",
                desc: "Scaled Meta ads from R50k to R250k/month while improving return on ad spend by over 3x.",
                services: ["Paid Social", "Email"],
              },
              {
                client: "Client B",
                industry: "Beauty",
                headline: "R12M revenue in 6 months",
                desc: "Full-funnel strategy combining paid social, email flows, and landing page optimisation.",
                services: ["Paid Social", "Email", "Shopify"],
              },
              {
                client: "Client C",
                industry: "Home & Living",
                headline: "67% lower CPA",
                desc: "Creative testing and audience refinement brought cost per acquisition down while scaling spend.",
                services: ["Paid Social", "Strategy"],
              },
            ].map((study) => (
              <div
                key={study.client}
                className="flex flex-col rounded-2xl border border-sand bg-cotton p-8"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-valentine/30 text-xs font-bold text-indigo">
                    {study.client.slice(-1)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-indigo">
                      {study.client}
                    </p>
                    <p className="text-xs text-indigo/50">{study.industry}</p>
                  </div>
                </div>
                <p className="mt-6 text-xl font-bold text-vivid">
                  {study.headline}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-indigo/60">
                  {study.desc}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {study.services.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-sand/50 px-3 py-1 text-xs font-medium text-indigo/70"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/work"
              className="text-sm font-semibold text-vivid transition-colors hover:text-vivid-hover"
            >
              View all case studies &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── How We Work ── */}
      <section className="border-t border-sand bg-cotton-dark px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-indigo sm:text-4xl">
              How We Work
            </h2>
            <p className="mt-4 text-lg text-indigo/70">
              From first call to full-scale — a clear, no-fluff process.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Discovery Call",
                desc: "We learn about your brand, goals, and challenges. No pitch — just a conversation.",
              },
              {
                step: "02",
                title: "Strategy & Audit",
                desc: "We audit your current marketing and build a tailored growth strategy.",
              },
              {
                step: "03",
                title: "Onboarding",
                desc: "We get access, set up tracking, and align on creative direction and KPIs.",
              },
              {
                step: "04",
                title: "Launch & Scale",
                desc: "Campaigns go live. We optimise weekly, report monthly, and scale what works.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-vivid text-sm font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-indigo">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-indigo/60">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-cotton px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold tracking-tight text-indigo sm:text-4xl">
            What Our Clients Say
          </h2>
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote:
                  "Alphabet took our ad account from stagnant to our best quarter ever. The team genuinely understands e-commerce.",
                name: "Client Testimonial",
                role: "Founder, Fashion Brand",
              },
              {
                quote:
                  "We went from guessing to knowing exactly what's working. Our ROAS has never been this consistent.",
                name: "Client Testimonial",
                role: "Marketing Director, Beauty Brand",
              },
              {
                quote:
                  "They don't just run ads — they think about the full customer journey. Email, landing pages, creative, everything.",
                name: "Client Testimonial",
                role: "CEO, Home & Living Brand",
              },
            ].map((t, i) => (
              <blockquote
                key={i}
                className="flex flex-col rounded-2xl border border-sand bg-cotton p-8"
              >
                <p className="flex-1 text-sm leading-relaxed text-indigo/70">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-6 border-t border-sand pt-4">
                  <p className="text-sm font-semibold text-indigo">{t.name}</p>
                  <p className="text-xs text-indigo/50">{t.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who We Work With ── */}
      <section className="bg-indigo px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-cotton sm:text-4xl">
            Who We Work With
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-cotton/70">
            We partner with established e-commerce brands doing R100k+ per month in
            revenue, who are ready to invest in growth and want a marketing team
            that treats their business like their own.
          </p>
          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-6 text-left sm:grid-cols-2">
            {[
              "Established e-commerce brands (not startups)",
              "Monthly revenue of R100k+",
              "Ready to invest in paid media",
              "Product-market fit already proven",
              "Looking for a strategic partner, not just a freelancer",
              "Based in South Africa or selling into SA market",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="mt-0.5 text-vivid">&#10003;</span>
                <p className="text-sm text-cotton/80">{item}</p>
              </div>
            ))}
          </div>
          <Link
            href="/contact"
            className="mt-12 inline-block rounded-full bg-vivid px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-vivid-hover"
          >
            See If We&apos;re a Fit
          </Link>
        </div>
      </section>

      {/* ── Learn With Us ── */}
      <section className="border-t border-sand bg-cotton-dark px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-vivid">
              Not ready for agency? Learn with us.
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-indigo sm:text-4xl">
              Learn With Us
            </h2>
            <p className="mt-4 text-lg text-indigo/70">
              Courses, toolkits, and a membership built for e-commerce brands who
              want to level up their marketing in-house.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              {
                title: "SOS Club",
                desc: "Our flagship membership for e-commerce brand owners. Monthly strategy calls, templates, and community.",
                cta: "Join the Waitlist",
              },
              {
                title: "InstaKit",
                desc: "Plug-and-play Instagram content templates designed for product-based businesses.",
                cta: "Browse Toolkit",
              },
              {
                title: "Catalogue to Content",
                desc: "Turn your product catalogue into scroll-stopping social content. Framework + templates included.",
                cta: "Browse Toolkit",
              },
            ].map((product) => (
              <div
                key={product.title}
                className="flex flex-col rounded-2xl border border-sand bg-cotton p-8"
              >
                <h3 className="text-lg font-semibold text-indigo">
                  {product.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-indigo/60">
                  {product.desc}
                </p>
                <a
                  href="https://members.alphabetsocial.co.za"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 text-sm font-semibold text-vivid transition-colors hover:text-vivid-hover"
                >
                  {product.cta} &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About / Credibility Teaser ── */}
      <section className="bg-cotton px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-indigo sm:text-4xl">
            8 Years of E-Commerce Growth
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-indigo/70">
            Alphabet Social started with one mission: help great e-commerce brands
            grow with marketing that actually works. Eight years, R350M+ in
            generated revenue, and dozens of scaling brands later — that mission
            hasn&apos;t changed.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-block text-sm font-semibold text-vivid transition-colors hover:text-vivid-hover"
          >
            Learn more about us &rarr;
          </Link>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-vivid px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to scale? Let&apos;s talk.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            Book a free discovery call and find out how Alphabet can help your
            e-commerce brand grow profitably.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-block rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-vivid shadow-sm transition-colors hover:bg-cotton"
          >
            Book a Discovery Call
          </Link>
        </div>
      </section>
    </>
  );
}
