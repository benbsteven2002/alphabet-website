import Link from "next/link";

export const metadata = {
  title: "About",
  description:
    "The story behind Alphabet Social. 8 years of e-commerce marketing, a team built on results, and a mission to help established brands scale.",
};

const values = [
  {
    title: "Results Over Everything",
    description:
      "We don't chase vanity metrics. Every strategy, campaign, and creative decision is measured by its impact on your revenue.",
  },
  {
    title: "Strategic, Not Reactive",
    description:
      "We build plans before we build campaigns. Every action has a reason, every channel has a role, and nothing runs in isolation.",
  },
  {
    title: "Transparent by Default",
    description:
      "You see what we see — real numbers, honest assessments, and no jargon. If something isn't working, we'll tell you first.",
  },
  {
    title: "Partnership, Not Service",
    description:
      "We treat your brand like our own. We're in the trenches with you — not just executing tasks, but thinking about your growth every day.",
  },
  {
    title: "Quality Over Quantity",
    description:
      "We work with a small number of clients so we can go deep. No account managers juggling 30 brands — your team knows your business inside out.",
  },
  {
    title: "Always Learning",
    description:
      "Platforms change weekly. We stay ahead by testing constantly, sharing what we learn with our community, and never coasting on what worked last quarter.",
  },
];

const team = [
  {
    name: "Leigh",
    role: "Founder & Managing Director",
    bio: "8 years in e-commerce marketing. Built Alphabet from a one-woman operation into a full-service agency. Obsessed with paid social performance and building systems that scale.",
  },
  {
    name: "Leah",
    role: "Head of Client Strategy",
    bio: "The strategic mind behind our client accounts. Leah turns business goals into marketing roadmaps and makes sure every channel is pulling its weight.",
  },
  {
    name: "David",
    role: "Performance Marketing Lead",
    bio: "Lives inside ad accounts. David manages our clients' paid social campaigns and is responsible for the daily optimisation that drives consistent ROAS.",
  },
  {
    name: "Team Member",
    role: "Creative Strategist",
    bio: "Bridges the gap between data and creative. Turns performance insights into ad concepts that stop the scroll and drive action.",
  },
  {
    name: "Team Member",
    role: "Email Marketing Specialist",
    bio: "Klaviyo expert. Builds the retention engine — automated flows, campaigns, and segmentation strategies that keep customers coming back.",
  },
  {
    name: "Ben",
    role: "Technology & Systems",
    bio: "Builds the tools, integrations, and infrastructure that keep Alphabet running smoothly. From websites to CRM pipelines to reporting dashboards.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cotton px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-vivid">
            About Us
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-indigo sm:text-5xl">
            We help e-commerce brands grow with marketing that actually works.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-indigo/70">
            Not a personal brand. Not a course platform. A results-driven agency
            built for established e-commerce brands who are serious about scaling.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="border-t border-sand bg-cotton-dark px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-indigo sm:text-4xl">
            The Alphabet Story
          </h2>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-indigo/70">
            <p>
              Alphabet Social started over eight years ago with a simple idea: e-commerce
              brands deserve marketing partners who actually understand how online retail
              works — not generalist agencies who treat every client the same.
            </p>
            <p>
              What began as paid social management for a handful of South African brands
              has grown into a full-service e-commerce marketing agency. Today we manage
              paid media, email, organic social, Shopify optimisation, and strategy for
              brands doing R100k to R5M+ per month in revenue.
            </p>
            <p>
              Along the way, we&apos;ve generated over R350M in revenue for our clients,
              built a community of hundreds of brand owners through the SOS Club, and
              created toolkits that help thousands of e-commerce businesses level up their
              marketing.
            </p>
            <p>
              But the mission hasn&apos;t changed: help great products reach more people,
              more profitably. We just have better tools, a bigger team, and a lot more
              experience doing it.
            </p>
          </div>
        </div>
      </section>

      {/* Track record */}
      <section className="bg-indigo px-6 py-20">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 sm:grid-cols-4">
          {[
            { value: "8+", label: "Years" },
            { value: "R350M+", label: "Revenue generated" },
            { value: "5x+", label: "Average ROAS" },
            { value: "50+", label: "Brands scaled" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-vivid sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-cotton/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-cotton px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-indigo sm:text-4xl">
              What We Stand For
            </h2>
            <p className="mt-4 text-lg text-indigo/70">
              These aren&apos;t wall art — they&apos;re how we make decisions
              every day.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-sand bg-cotton p-8"
              >
                <h3 className="text-lg font-semibold text-indigo">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-indigo/60">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="border-t border-sand bg-cotton-dark px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-indigo sm:text-4xl">
              The Team
            </h2>
            <p className="mt-4 text-lg text-indigo/70">
              Small team, big impact. Everyone here is hands-on with client work
              — no layers, no account managers reading from scripts.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.name + member.role}
                className="rounded-2xl border border-sand bg-cotton p-8"
              >
                {/* Photo placeholder */}
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-valentine/20 text-2xl font-bold text-indigo/40">
                  {member.name[0]}
                </div>
                <h3 className="text-lg font-semibold text-indigo">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-vivid">
                  {member.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-indigo/60">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ICP positioning */}
      <section className="bg-indigo px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-cotton sm:text-4xl">
            Who We&apos;re Built For
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-cotton/70">
            We specialise in established e-commerce brands based in or selling
            into South Africa. If you&apos;ve got product-market fit and you&apos;re
            ready to invest in growth, we&apos;re your team.
          </p>
          <p className="mt-8 text-sm text-cotton/40">
            Not quite there yet? Our SOS Club and toolkits are built for brands
            at every stage.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cotton px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-indigo sm:text-4xl">
            Let&apos;s work together.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-indigo/70">
            Whether you need a full agency partnership or just want to learn from
            the best — we&apos;ve got something for you.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/services"
              className="rounded-full bg-vivid px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-vivid-hover"
            >
              Work With Us
            </Link>
            <a
              href="https://members.alphabetsocial.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-sand px-8 py-3.5 text-sm font-semibold text-indigo transition-colors hover:bg-sand/30"
            >
              Join the Membership
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
