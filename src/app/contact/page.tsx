import QualificationFlow from "@/components/QualificationFlow";

export const metadata = {
  title: "Contact",
  description:
    "Find out how Alphabet Social can help your e-commerce brand grow. Answer a few quick questions and we'll point you in the right direction.",
};

export default function ContactPage() {
  return (
    <section className="bg-cotton px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-2xl text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-indigo sm:text-4xl">
          Let&apos;s find the right path for you.
        </h1>
        <p className="mt-4 text-lg text-indigo/60">
          Answer a few quick questions — it takes under a minute — and we&apos;ll
          show you exactly where to start.
        </p>
      </div>
      <QualificationFlow />
    </section>
  );
}
