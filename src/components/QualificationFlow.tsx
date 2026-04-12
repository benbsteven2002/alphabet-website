"use client";

import { useState } from "react";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type BusinessType = "brand-owner" | "marketing-manager" | "starting" | "other";
type Revenue = "under-50k" | "50k-100k" | "100k-500k" | "500k-plus";
type Need = "scale-ads" | "content" | "strategy" | "learn" | "not-sure";
type Timeline = "ready-now" | "1-3-months" | "exploring";
type Destination = "agency" | "sos-club" | "c2c" | "instakit" | "nurture";

interface Answers {
  businessType?: BusinessType;
  revenue?: Revenue;
  need?: Need;
  timeline?: Timeline;
}

/* ------------------------------------------------------------------ */
/*  Routing logic                                                      */
/* ------------------------------------------------------------------ */

function getDestination(a: Answers): Destination {
  const { businessType, revenue, need, timeline } = a;

  // Rule 1 — Not e-commerce
  if (businessType === "other") return "nurture";

  // Rule 2 — Just starting
  if (businessType === "starting") {
    if (need === "content") return "c2c";
    if (need === "not-sure") return "instakit";
    return "sos-club"; // scale-ads, strategy, learn
  }

  // Rules 3-5 — Established (brand-owner or marketing-manager)
  const highRevenue = revenue === "100k-500k" || revenue === "500k-plus";
  const midRevenue = revenue === "50k-100k";

  // High revenue
  if (highRevenue) {
    if (need === "scale-ads" || need === "strategy") return "agency";
    if (need === "content" && timeline === "ready-now") return "agency";
    if (need === "content") return "c2c";
    if (need === "learn") return "sos-club";
    if (need === "not-sure" && timeline === "ready-now") return "agency";
    return "nurture";
  }

  // Mid revenue
  if (midRevenue) {
    if ((need === "scale-ads" || need === "strategy") && timeline === "ready-now")
      return "agency";
    if (need === "scale-ads" || need === "strategy") return "sos-club";
    if (need === "content") return "c2c";
    if (need === "learn") return "sos-club";
    return "nurture";
  }

  // Low revenue (under-50k)
  if (need === "content") return "c2c";
  if (need === "not-sure") return "instakit";
  return "sos-club"; // scale-ads, strategy, learn
}

/* ------------------------------------------------------------------ */
/*  Result screen content                                              */
/* ------------------------------------------------------------------ */

const results: Record<
  Destination,
  {
    headline: string;
    body: string;
    cta: string;
    ctaHref: string;
    ctaExternal?: boolean;
    secondary: string;
    secondaryHref: string;
    secondaryExternal?: boolean;
    accent: string;
  }
> = {
  agency: {
    headline: "You're exactly who we work with.",
    body: "Based on what you've told us, you'd be a great fit for our agency services. Book a free discovery call and let's talk growth.",
    cta: "Pick a Time",
    ctaHref: "#calendly",
    secondary: "Want to explore first? See our work",
    secondaryHref: "/work",
    accent: "bg-vivid",
  },
  "sos-club": {
    headline: "We think you'd love the SOS Club.",
    body: "You're building something great — and the SOS Club is designed for brand owners at exactly your stage. Monthly strategy calls, templates, and a community of e-commerce founders.",
    cta: "Explore SOS Club",
    ctaHref: "https://members.alphabetsocial.co.za",
    ctaExternal: true,
    secondary: "Think you're ready for agency support?",
    secondaryHref: "/contact",
    accent: "bg-valentine",
  },
  c2c: {
    headline: "Let's get your content working harder.",
    body: "Catalogue to Content helps you turn your product range into scroll-stopping social content — on your own schedule, with templates and frameworks that actually work.",
    cta: "Get Catalogue to Content",
    ctaHref: "https://members.alphabetsocial.co.za",
    ctaExternal: true,
    secondary: "Also check out InstaKit",
    secondaryHref: "https://members.alphabetsocial.co.za",
    secondaryExternal: true,
    accent: "bg-vivid",
  },
  instakit: {
    headline: "Start here — it's the easiest win.",
    body: "InstaKit gives you plug-and-play Instagram templates designed for product-based businesses. No strategy degree required.",
    cta: "Get InstaKit",
    ctaHref: "https://members.alphabetsocial.co.za",
    ctaExternal: true,
    secondary: "Want more structure? Check out SOS Club",
    secondaryHref: "https://members.alphabetsocial.co.za",
    secondaryExternal: true,
    accent: "bg-valentine",
  },
  nurture: {
    headline: "No worries — let's stay in touch.",
    body: "Drop your email and we'll send you our best e-commerce marketing insights. No spam, just useful stuff.",
    cta: "Subscribe",
    ctaHref: "#email-capture",
    secondary: "Browse our toolkits",
    secondaryHref: "https://members.alphabetsocial.co.za",
    secondaryExternal: true,
    accent: "bg-indigo",
  },
};

/* ------------------------------------------------------------------ */
/*  Option card component                                              */
/* ------------------------------------------------------------------ */

function OptionCard({
  label,
  sublabel,
  selected,
  onClick,
}: {
  label: string;
  sublabel?: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full rounded-2xl border-2 px-6 py-5 text-left transition-all ${
        selected
          ? "border-vivid bg-vivid/5 shadow-sm"
          : "border-sand bg-cotton hover:border-vivid/40 hover:shadow-sm"
      }`}
    >
      <p className="text-base font-semibold text-indigo">{label}</p>
      {sublabel && (
        <p className="mt-1 text-sm text-indigo/50">{sublabel}</p>
      )}
    </button>
  );
}

/* ------------------------------------------------------------------ */
/*  Step definitions                                                   */
/* ------------------------------------------------------------------ */

interface StepConfig {
  key: keyof Answers;
  question: string;
  subtitle: string;
  options: { value: string; label: string; sublabel?: string }[];
  skipIf?: (answers: Answers) => boolean;
}

const steps: StepConfig[] = [
  {
    key: "businessType",
    question: "What best describes you?",
    subtitle: "This helps us point you in the right direction.",
    options: [
      { value: "brand-owner", label: "I own an e-commerce brand", sublabel: "Product-based business selling online" },
      { value: "marketing-manager", label: "I'm a marketing manager at an e-commerce brand", sublabel: "Part of the team, looking for agency support" },
      { value: "starting", label: "I'm starting an e-commerce brand", sublabel: "Early stages, getting things off the ground" },
      { value: "other", label: "Something else", sublabel: "Service business, creator, or just curious" },
    ],
  },
  {
    key: "revenue",
    question: "What's your monthly revenue?",
    subtitle: "Ballpark is fine — this helps us recommend the right path.",
    options: [
      { value: "under-50k", label: "Under R50k/month" },
      { value: "50k-100k", label: "R50k – R100k/month" },
      { value: "100k-500k", label: "R100k – R500k/month" },
      { value: "500k-plus", label: "R500k+/month" },
    ],
    skipIf: (a) => a.businessType === "starting" || a.businessType === "other",
  },
  {
    key: "need",
    question: "What do you need most right now?",
    subtitle: "Pick the one that feels most urgent.",
    options: [
      { value: "scale-ads", label: "Scale with paid ads", sublabel: "Meta, TikTok, Google — managed for me" },
      { value: "content", label: "Get my content and social sorted", sublabel: "Better posts, more consistency, stronger brand" },
      { value: "strategy", label: "Build a full marketing strategy", sublabel: "Paid, organic, email — the whole picture" },
      { value: "learn", label: "Learn and grow at my own pace", sublabel: "Courses, templates, community" },
      { value: "not-sure", label: "I'm not sure yet", sublabel: "Just exploring what's out there" },
    ],
    skipIf: (a) => a.businessType === "other",
  },
  {
    key: "timeline",
    question: "How soon do you want to start?",
    subtitle: "No pressure — just helps us plan.",
    options: [
      { value: "ready-now", label: "Ready now", sublabel: "Let's go" },
      { value: "1-3-months", label: "In the next 1–3 months", sublabel: "Planning ahead" },
      { value: "exploring", label: "Just exploring", sublabel: "No rush" },
    ],
    skipIf: (a) =>
      a.businessType === "other" ||
      a.businessType === "starting",
  },
];

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export default function QualificationFlow() {
  const [answers, setAnswers] = useState<Answers>({});
  const [currentStep, setCurrentStep] = useState(0);
  const [finished, setFinished] = useState(false);
  const [nurturEmail, setNurtureEmail] = useState("");

  // Build the active steps list (excluding skipped ones)
  const activeSteps = steps.filter(
    (step) => !step.skipIf || !step.skipIf(answers)
  );

  const step = activeSteps[currentStep];
  const isLastStep = currentStep === activeSteps.length - 1;
  const destination = finished ? getDestination(answers) : null;
  const result = destination ? results[destination] : null;

  function handleSelect(value: string) {
    const updated = { ...answers, [step.key]: value };
    setAnswers(updated);

    // Auto-advance after a short delay for feel
    setTimeout(() => {
      // Recalculate active steps with the new answers
      const newActiveSteps = steps.filter(
        (s) => !s.skipIf || !s.skipIf(updated)
      );
      const newCurrentIndex = newActiveSteps.findIndex(
        (s) => s.key === step.key
      );
      const newIsLast = newCurrentIndex === newActiveSteps.length - 1;

      if (newIsLast) {
        setFinished(true);
      } else {
        // Find the next step index in the new active list
        setCurrentStep(newCurrentIndex + 1);
      }
    }, 300);
  }

  function handleBack() {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setFinished(false);
    }
  }

  function handleRestart() {
    setAnswers({});
    setCurrentStep(0);
    setFinished(false);
  }

  // ── Result screen ──
  if (finished && result) {
    return (
      <div className="mx-auto max-w-xl">
        {/* Progress complete */}
        <div className="mb-8 flex gap-1.5">
          {activeSteps.map((_, i) => (
            <div key={i} className="h-1 flex-1 rounded-full bg-vivid" />
          ))}
        </div>

        <div className="rounded-3xl border border-sand bg-cotton p-10 text-center">
          <div
            className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full ${result.accent} text-2xl text-white`}
          >
            {destination === "agency" && "✓"}
            {destination === "sos-club" && "🎓"}
            {destination === "c2c" && "📸"}
            {destination === "instakit" && "⚡"}
            {destination === "nurture" && "✉️"}
          </div>

          <h2 className="text-2xl font-bold text-indigo sm:text-3xl">
            {result.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-indigo/70">
            {result.body}
          </p>

          {/* Nurture — email capture */}
          {destination === "nurture" ? (
            <div className="mt-8">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  // TODO: wire up email capture
                  alert(`Subscribed: ${nurturEmail}`);
                }}
                className="mx-auto flex max-w-sm gap-3"
              >
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={nurturEmail}
                  onChange={(e) => setNurtureEmail(e.target.value)}
                  className="flex-1 rounded-full border border-sand bg-white px-5 py-3 text-sm text-indigo placeholder:text-indigo/30 focus:border-vivid focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-full bg-vivid px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-vivid-hover"
                >
                  {result.cta}
                </button>
              </form>
            </div>
          ) : (
            <div className="mt-8 flex flex-col items-center gap-4">
              {result.ctaExternal ? (
                <a
                  href={result.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full bg-vivid px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-vivid-hover"
                >
                  {result.cta}
                </a>
              ) : (
                <a
                  href={result.ctaHref}
                  className="inline-block rounded-full bg-vivid px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-vivid-hover"
                >
                  {result.cta}
                </a>
              )}
            </div>
          )}

          <div className="mt-6">
            {result.secondaryExternal ? (
              <a
                href={result.secondaryHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-indigo/50 transition-colors hover:text-vivid"
              >
                {result.secondary} &rarr;
              </a>
            ) : (
              <Link
                href={result.secondaryHref}
                className="text-sm text-indigo/50 transition-colors hover:text-vivid"
              >
                {result.secondary} &rarr;
              </Link>
            )}
          </div>

          <button
            type="button"
            onClick={handleRestart}
            className="mt-8 text-xs text-indigo/30 transition-colors hover:text-indigo/60"
          >
            Start over
          </button>
        </div>

        {/* Debug: show routing in dev */}
        {process.env.NODE_ENV === "development" && (
          <div className="mt-6 rounded-xl bg-indigo/5 p-4 text-xs text-indigo/50">
            <p className="font-semibold">Debug — routing</p>
            <p>Answers: {JSON.stringify(answers)}</p>
            <p>Destination: {destination}</p>
          </div>
        )}
      </div>
    );
  }

  // ── Question screen ──
  if (!step) return null;

  return (
    <div className="mx-auto max-w-xl">
      {/* Progress bar */}
      <div className="mb-8 flex gap-1.5">
        {activeSteps.map((_, i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-full transition-colors ${
              i <= currentStep ? "bg-vivid" : "bg-sand"
            }`}
          />
        ))}
      </div>

      {/* Step counter + back */}
      <div className="mb-6 flex items-center justify-between">
        <button
          type="button"
          onClick={handleBack}
          disabled={currentStep === 0}
          className={`text-sm font-medium transition-colors ${
            currentStep === 0
              ? "text-indigo/20 cursor-not-allowed"
              : "text-indigo/50 hover:text-indigo"
          }`}
        >
          &larr; Back
        </button>
        <span className="text-xs text-indigo/40">
          {currentStep + 1} of {activeSteps.length}
        </span>
      </div>

      {/* Question */}
      <h2 className="text-2xl font-bold text-indigo sm:text-3xl">
        {step.question}
      </h2>
      <p className="mt-2 text-base text-indigo/50">{step.subtitle}</p>

      {/* Options */}
      <div className="mt-8 flex flex-col gap-3">
        {step.options.map((option) => (
          <OptionCard
            key={option.value}
            label={option.label}
            sublabel={option.sublabel}
            selected={answers[step.key] === option.value}
            onClick={() => handleSelect(option.value)}
          />
        ))}
      </div>
    </div>
  );
}
