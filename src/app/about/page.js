"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";
import ProcessSection from "@/components/ProcessSection";
import AnimatedCounter from "@/components/AnimatedCounter";
const values = [
{
number: "01",
title: "Strategy First",
description:
"Every successful project starts with a clear understanding of your business, audience, goals, and opportunities.",
},
{
number: "02",
title: "Creative Thinking",
description:
"We combine strong ideas with purposeful design to create experiences that are memorable and meaningful.",
},
{
number: "03",
title: "Built for Growth",
description:
"Our websites, campaigns, and digital solutions are designed to support measurable and long-term growth.",
},
];

const process = [
{
step: "01",
title: "Discover",
text: "We learn about your business, customers, challenges, and goals.",
},
{
step: "02",
title: "Define",
text: "We turn insights into a focused strategy and a clear creative direction.",
},
{
step: "03",
title: "Create",
text: "Our team designs and develops digital experiences with purpose.",
},
{
step: "04",
title: "Grow",
text: "We measure, refine, and improve to help your business move forward.",
},
];

export default function AboutPage() {
return ( <main className="overflow-hidden bg-white text-[var(--foreground)] dark:bg-[#0a0a0a]">
{/* HERO */} <section className="relative border-b border-[var(--border)]"> <div className="absolute inset-0 about-grid opacity-60" />


    <div className="container-custom relative py-24 sm:py-28 lg:py-36">
      <div className="max-w-5xl">
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-[var(--accent-bright)]" />
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--accent)] dark:text-[var(--accent-bright)]">
            About MarkitMe
          </p>
        </div>
         <h1 className="mt-5 text-5xl font-black tracking-[-0.05em] sm:text-4xl lg:text-5xl xl:text-6xl bg-gradient-to-r from-black via-[var(--accent)] to-[var(--accent-bright)] bg-clip-text text-transparent dark:from-white dark:via-[var(--accent-bright)] dark:to-[var(--accent)]">
               We turn ideas into meaningful growth.
            </h1>

        <div className="mt-10 grid max-w-4xl gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <p className="text-lg leading-8 text-[var(--muted)] sm:text-xl">
            MarkitMe combines strategy, creativity, technology, and
            marketing to help businesses build stronger brands and achieve
            measurable results.
          </p>

          <div className="border-l border-[var(--accent-bright)] pl-6">
            <p className="text-sm font-bold uppercase tracking-[0.18em]">
              Strategy. Creativity. Technology. Growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* INTRO */}
  <section className="border-b border-[var(--border)] py-20 sm:py-24 lg:py-32">
    <div className="container-custom grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--accent)] dark:text-[var(--accent-bright)]">
          Who We Are
        </p>

        <h2 className="mt-5 text-4xl font-black leading-[1.02] tracking-[-0.045em] sm:text-5xl">
          A digital partner built for ambitious brands.
        </h2>
      </div>

      <div>
        <p className="text-xl leading-9 text-[var(--foreground)] sm:text-2xl">
          We are a creative digital agency focused on helping businesses
          stand out, connect with the right audience, and grow with
          confidence.
        </p>

        <p className="mt-7 leading-8 text-[var(--muted)]">
          Our team brings together strategic thinking, creative design,
          web development, branding, and digital marketing. We do not
          believe in one-size-fits-all solutions. Every project is shaped
          around the goals, challenges, and opportunities that make your
          business unique.
        </p>

        <p className="mt-5 leading-8 text-[var(--muted)]">
          Whether you are launching a new brand, improving your online
          presence, or building a stronger digital foundation, we work as
          an extension of your team to create work that delivers real
          value.
        </p>
      </div>
    </div>
  </section>

  {/* STATS */}
  <section className="border-b border-[var(--border)] py-20 sm:py-24 lg:py-32">
    <div className="container-custom">
      <div className="mb-12">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--accent)] dark:text-[var(--accent-bright)]">
          By The Numbers
        </p>
        <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] sm:text-4xl">
          Our impact in numbers.
        </h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <AnimatedCounter value={50} suffix="+" label="Projects Delivered" />
        <AnimatedCounter value={5} suffix="+" label="Years of Experience" />
        <AnimatedCounter value={100} suffix="%" label="Focused on Results" />
        <AnimatedCounter value={1} label="Team Working With You" />
      </div>
    </div>
  </section>

  {/* MISSION + VISION */}
  <section className="py-20 sm:py-24 lg:py-32">
    <div className="container-custom">
      <div className="grid gap-6 lg:grid-cols-2">
        <article className="group rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-8 transition duration-300 hover:-translate-y-1 hover:border-[var(--accent-bright)]/50 sm:p-11">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[var(--accent-bright)] text-lg font-black text-black">
            M
          </span>

          <p className="mt-9 text-xs font-bold uppercase tracking-[0.25em] text-[var(--accent)] dark:text-[var(--accent-bright)]">
            Our Mission
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-[-0.04em]">
            Make digital growth more meaningful.
          </h2>

          <p className="mt-6 max-w-xl leading-8 text-[var(--muted)]">
            Our mission is to help businesses make better digital
            decisions, create stronger customer experiences, and turn
            ideas into sustainable growth.
          </p>
        </article>

        <article className="group rounded-[28px] border border-[var(--border)] bg-[var(--surface-secondary)] p-8 transition duration-300 hover:-translate-y-1 hover:border-[var(--accent-bright)]/50 sm:p-11">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-[var(--accent-bright)]/50 text-lg font-black text-[var(--accent)] dark:text-[var(--accent-bright)]">
            V
          </span>

          <p className="mt-9 text-xs font-bold uppercase tracking-[0.25em] text-[var(--accent)] dark:text-[var(--accent-bright)]">
            Our Vision
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-[-0.04em]">
            Build brands people remember.
          </h2>

          <p className="mt-6 max-w-xl leading-8 text-[var(--muted)]">
            We aim to become a trusted long-term digital partner for
            ambitious businesses by creating work that is useful,
            distinctive, adaptable, and built to last.
          </p>
        </article>
      </div>
    </div>
  </section>

  {/* VALUES */}
  <section className="border-y border-[var(--border)] bg-[var(--surface)] py-20 sm:py-24 lg:py-32">
    <div className="container-custom">
      <div className="max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--accent)] dark:text-[var(--accent-bright)]">
          How We Think
        </p>

        <h2 className="mt-5 text-3xl font-black tracking-[-0.05em] sm:text-4xl lg:text-5xl">
          Good work starts with the right approach.
        </h2>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {values.map((value) => (
          <article
            key={value.number}
            className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-7 transition duration-300 hover:border-[var(--accent-bright)]/50 hover:shadow-xl"
          >
            <span className="text-sm font-black text-[var(--accent)] dark:text-[var(--accent-bright)]">
              {value.number}
            </span>

            <h3 className="mt-12 text-2xl font-black">
              {value.title}
            </h3>

            <p className="mt-5 leading-7 text-[var(--muted)]">
              {value.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>

  {/* PROCESS */}
  <ProcessSection
    label="Our Process"
    title="Clear thinking from the first conversation."
    description="Our process keeps every project focused, collaborative, and connected to your business goals."
    steps={[
      {
        number: 1,
        title: "Discover",
        description: "We learn about your business, customers, challenges, and goals.",
      },
      {
        number: 2,
        title: "Define",
        description: "We turn insights into a focused strategy and a clear creative direction.",
      },
      {
        number: 3,
        title: "Create",
        description: "Our team designs and develops digital experiences with purpose.",
      },
      {
        number: 4,
        title: "Grow",
        description: "We measure, refine, and improve to help your business move forward.",
      },
    ]}
  />

  {/* CTA */}
  <section className="pb-20 sm:pb-24 lg:pb-32">
    <div className="container-custom">
      <div className="relative overflow-hidden rounded-[32px] bg-[var(--accent-bright)] px-7 py-16 text-black sm:px-12 sm:py-20 lg:px-16">
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full border-[40px] border-black/10" />

        <div className="relative max-w-4xl">
          <p className="text-xs font-black uppercase tracking-[0.25em]">
            Let&apos;s Work Together
          </p>

          <h2 className="mt-5 text-3xl font-black leading-[0.98] tracking-[-0.055em] sm:text-4xl lg:text-5xl">
            Have an idea? Let&apos;s make it matter.
          </h2>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-black/70">
            Tell us what you are building, where you want to go, and how
            we can help you get there.
          </p>
          <Button href="#contact" variant="outline" className="mt-10 hover:bg-[var(--accent-bright)]">
            Start a Conversation
            </Button>
        </div>
      </div>
    </div>
  </section>
</main>


);
}
