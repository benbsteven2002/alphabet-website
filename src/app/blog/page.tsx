"use client";

import Link from "next/link";
import { useState } from "react";

const posts = [
  {
    slug: "paid-social-mistakes-ecommerce",
    title: "7 Paid Social Mistakes E-Commerce Brands Make (and How to Fix Them)",
    excerpt:
      "Spending money on ads but not seeing results? These are the most common mistakes we see — and exactly how to fix them.",
    category: "Paid Social",
    readTime: "6 min read",
    date: "April 2026",
    cta: { label: "Work with us on paid social", href: "/services#paid-social" },
  },
  {
    slug: "email-flows-every-ecommerce-store-needs",
    title: "The 5 Email Flows Every E-Commerce Store Needs",
    excerpt:
      "If you're only sending campaigns, you're leaving money on the table. These five automated flows should be running 24/7.",
    category: "Email Marketing",
    readTime: "5 min read",
    date: "March 2026",
    cta: { label: "Get our email templates", href: "https://members.alphabetsocial.co.za", external: true },
  },
  {
    slug: "meta-ads-roas-benchmarks-south-africa",
    title: "Meta Ads ROAS Benchmarks for South African E-Commerce in 2026",
    excerpt:
      "What's a good ROAS? It depends. Here's what we're seeing across our client portfolio — and what you should be aiming for.",
    category: "Paid Social",
    readTime: "8 min read",
    date: "March 2026",
    cta: { label: "Book a free ROAS audit", href: "/contact" },
  },
  {
    slug: "organic-vs-paid-social-which-first",
    title: "Organic vs Paid Social: Which Should You Invest In First?",
    excerpt:
      "It's not either/or — but if you had to pick one to start with, here's how to decide based on where your brand is right now.",
    category: "Strategy",
    readTime: "5 min read",
    date: "February 2026",
    cta: { label: "Explore our services", href: "/services" },
  },
  {
    slug: "product-photography-to-ad-creative",
    title: "How to Turn Product Photography Into Scroll-Stopping Ad Creative",
    excerpt:
      "You don't need a massive production budget. Here's how to repurpose what you already have into ads that convert.",
    category: "Creative",
    readTime: "4 min read",
    date: "February 2026",
    cta: { label: "Get Catalogue to Content", href: "https://members.alphabetsocial.co.za", external: true },
  },
  {
    slug: "shopify-conversion-rate-checklist",
    title: "The Shopify Conversion Rate Checklist: 15 Quick Wins",
    excerpt:
      "Before you spend another rand on ads, make sure your store isn't leaking conversions. Run through this checklist first.",
    category: "Shopify",
    readTime: "7 min read",
    date: "January 2026",
    cta: { label: "Get a store audit", href: "/contact" },
  },
];

const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category)))];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [email, setEmail] = useState("");

  const filtered =
    activeCategory === "All"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero + Email capture */}
      <section className="bg-cotton px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-vivid">
            Blog
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-indigo sm:text-5xl">
            E-commerce marketing insights that actually help.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-indigo/70">
            Strategies, frameworks, and lessons from 8 years of growing
            e-commerce brands. No fluff, no filler.
          </p>

          {/* Email capture */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert(`Subscribed: ${email}`);
              setEmail("");
            }}
            className="mx-auto mt-10 flex max-w-md gap-3"
          >
            <input
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-full border border-sand bg-white px-5 py-3 text-sm text-indigo placeholder:text-indigo/30 focus:border-vivid focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-vivid px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-vivid-hover"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-3 text-xs text-indigo/40">
            One email per week. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Category filter */}
      <section className="border-y border-sand bg-cotton-dark px-6 py-6">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-vivid text-white"
                  : "bg-cotton text-indigo/60 hover:text-indigo border border-sand"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Post grid */}
      <section className="bg-cotton px-6 py-24 sm:py-32">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col rounded-2xl border border-sand bg-cotton p-8 transition-shadow hover:shadow-md"
            >
              {/* Category + meta */}
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-valentine/20 px-3 py-1 text-xs font-medium text-indigo/60">
                  {post.category}
                </span>
                <span className="text-xs text-indigo/40">{post.readTime}</span>
              </div>

              {/* Title */}
              <h2 className="mt-4 text-lg font-semibold leading-snug text-indigo">
                {post.title}
              </h2>

              {/* Excerpt */}
              <p className="mt-3 flex-1 text-sm leading-relaxed text-indigo/60">
                {post.excerpt}
              </p>

              {/* Date */}
              <p className="mt-6 text-xs text-indigo/30">{post.date}</p>

              {/* Post CTA */}
              <div className="mt-4 border-t border-sand pt-4">
                {"external" in post.cta ? (
                  <a
                    href={post.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-vivid transition-colors hover:text-vivid-hover"
                  >
                    {post.cta.label} &rarr;
                  </a>
                ) : (
                  <Link
                    href={post.cta.href}
                    className="text-sm font-semibold text-vivid transition-colors hover:text-vivid-hover"
                  >
                    {post.cta.label} &rarr;
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bottom email capture */}
      <section className="bg-indigo px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-cotton sm:text-4xl">
            Get smarter about e-commerce marketing.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cotton/70">
            One email per week with strategies, insights, and frameworks from our
            work with 50+ e-commerce brands. Free forever.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Subscribed!");
            }}
            className="mx-auto mt-10 flex max-w-md gap-3"
          >
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="flex-1 rounded-full border border-cotton/20 bg-white/10 px-5 py-3 text-sm text-cotton placeholder:text-cotton/30 focus:border-vivid focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-vivid px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-vivid-hover"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
