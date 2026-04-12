import Link from "next/link";

export const metadata = {
  title: "Services",
  description:
    "Paid social, email marketing, organic social, Shopify optimisation, and full-funnel strategy for established e-commerce brands.",
};

const services = [
  {
    id: "paid-social",
    badge: "Hero Service",
    title: "Paid Social",
    subtitle: "The growth engine.",
    description:
      "Meta, TikTok, and Google ads managed by a team that lives and breathes e-commerce performance. We handle strategy, creative direction, media buying, and optimisation — so every rand of ad spend works harder.",
    whoItsFor:
      "E-commerce brands doing R100k+/month who want to scale profitably with paid media.",
    includes: [
      "Full-funnel ad strategy (awareness → conversion → retention)",
      "Creative concepting and ad production briefs",
      "Audience research and targeting",
      "Campaign setup, management, and daily optimisation",
      "Weekly performance reporting",
      "Monthly strategy reviews",
    ],
    stat: { value: "5x+", label: "Average ROAS across our client portfolio" },
    featured: true,
  },
  {
    id: "email-marketing",
    badge: "Retention Engine",
    title: "Email Marketing",
    subtitle: "Turn one-time buyers into repeat customers.",
    description:
      "Klaviyo-powered lifecycle email and SMS that keeps revenue flowing between campaigns. Welcome flows, abandoned cart, post-purchase, win-back — all built and managed for you.",
    whoItsFor:
      "Brands with an existing customer base who want to maximise lifetime value and reduce reliance on paid acquisition.",
    includes: [
      "Email strategy and calendar",
      "Automated flow setup (welcome, cart, post-purchase, win-back)",
      "Campaign design and copywriting",
      "List segmentation and hygiene",
      "A/B testing and optimisation",
      "Monthly reporting",
    ],
    stat: { value: "30–40%", label: "Of revenue from email for our top clients" },
    featured: false,
  },
  {
    id: "organic-social",
    badge: "Brand-Building Layer",
    title: "Organic Social",
    subtitle: "Show up consistently. Build trust. Stay top of mind.",
    description:
      "Content strategy, planning, and community management across Instagram, TikTok, and Facebook. We make sure your brand looks and sounds like itself — every single day.",
    whoItsFor:
      "Brands who know they need to post but can't keep up, or whose content doesn't match the quality of their product.",
    includes: [
      "Content strategy and monthly content calendar",
      "Content creation briefs and direction",
      "Caption writing and hashtag strategy",
      "Community management and engagement",
      "Monthly analytics and insights",
      "Platform-specific optimisation",
    ],
    stat: { value: "3x", label: "Average engagement rate increase" },
    featured: false,
  },
  {
    id: "shopify",
    badge: "Conversion Layer",
    title: "Shopify Optimisation",
    subtitle: "Make every click count.",
    description:
      "Conversion rate optimisation, landing page builds, and store improvements that turn more visitors into buyers. No point driving traffic to a store that doesn't convert.",
    whoItsFor:
      "Shopify brands running paid traffic who want to improve conversion rate and average order value.",
    includes: [
      "Conversion rate audit",
      "Landing page design and build",
      "Product page optimisation",
      "Checkout flow improvements",
      "A/B testing",
      "Speed and performance optimisation",
    ],
    stat: { value: "20–45%", label: "Conversion rate improvements" },
    featured: false,
  },
  {
    id: "strategy",
    badge: "The Big Picture",
    title: "Strategy",
    subtitle: "Everything working together.",
    description:
      "Full-funnel marketing strategy that ties paid, organic, email, and on-site together into one growth engine. We look at the whole picture so nothing falls through the cracks.",
    whoItsFor:
      "Established brands who've outgrown piecemeal marketing and want a unified, strategic approach to growth.",
    includes: [
      "Full marketing audit",
      "Channel strategy and budget allocation",
      "Customer journey mapping",
      "KPI framework and reporting",
      "Quarterly strategy reviews",
      "Growth roadmap",
    ],
    stat: { value: "R350M+", label: "Revenue generated across our clients" },
    featured: false,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cotton px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-vivid">
            What We Do
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-indigo sm:text-5xl">
            Full-stack marketing for e-commerce brands that are ready to scale.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-indigo/70">
            Paid social leads the way, supported by email, organic, Shopify
            optimisation, and strategy. Everything working together, nothing in
            isolation.
          </p>
        </div>
      </section>

      {/* Services */}
      {services.map((service, idx) => (
        <section
          key={service.id}
          id={service.id}
          className={`px-6 py-24 sm:py-32 ${
            idx % 2 === 0 ? "bg-cotton-dark" : "bg-cotton"
          } ${service.featured ? "border-y-2 border-vivid/20" : "border-t border-sand"}`}
        >
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl">
              {/* Badge */}
              <span
                className={`inline-block rounded-full px-4 py-1.5 text-xs font-semibold ${
                  service.featured
                    ? "bg-vivid text-white"
                    : "bg-sand/60 text-indigo/60"
                }`}
              >
                {service.badge}
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-indigo sm:text-4xl">
                {service.title}
              </h2>
              <p className="mt-1 text-lg font-medium text-indigo/50">
                {service.subtitle}
              </p>
              <p className="mt-6 text-base leading-relaxed text-indigo/70">
                {service.description}
              </p>

              {/* Who it's for */}
              <div className="mt-10 rounded-2xl border border-sand bg-cotton p-6">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-indigo/40">
                  Who this is for
                </h3>
                <p className="mt-2 text-base text-indigo/70">
                  {service.whoItsFor}
                </p>
              </div>

              {/* What's included */}
              <div className="mt-8">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-indigo/40">
                  What&apos;s included
                </h3>
                <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 text-vivid">&#10003;</span>
                      <span className="text-sm text-indigo/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stat */}
              <div className="mt-10 flex items-baseline gap-3">
                <span className="text-3xl font-bold text-vivid">
                  {service.stat.value}
                </span>
                <span className="text-sm text-indigo/50">
                  {service.stat.label}
                </span>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-vivid px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to grow?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            Tell us about your brand and we&apos;ll show you the right path —
            whether that&apos;s working with our agency, joining the SOS Club, or
            grabbing a toolkit.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-vivid transition-colors hover:bg-cotton"
            >
              Apply Now
            </Link>
            <Link
              href="/work"
              className="rounded-full border border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
