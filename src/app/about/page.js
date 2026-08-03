"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";
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
return ( <main className="overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
{/* HERO */} <section className="relative border-b border-[var(--border)]"> <div className="absolute inset-0 about-grid opacity-60" />


    <div className="container-custom relative py-24 sm:py-28 lg:py-36">
      <div className="max-w-5xl">
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-[#a7d503]" />
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#8db800] dark:text-[#a7d503]">
            About MarkitMe
          </p>
        </div>

        <h1 className="mt-7 max-w-5xl text-3xl font-black leading-[0.96] tracking-[-0.06em] sm:text-4xl md:text-5xl lg:text-6xl">
          We turn ideas into{" "}
          <span className="text-[#8db800] dark:text-[#a7d503]">
            meaningful growth.
          </span>
        </h1>

        <div className="mt-10 grid max-w-4xl gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <p className="text-lg leading-8 text-[var(--muted)] sm:text-xl">
            MarkitMe combines strategy, creativity, technology, and
            marketing to help businesses build stronger brands and achieve
            measurable results.
          </p>

          <div className="border-l border-[#a7d503] pl-6">
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
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#8db800] dark:text-[#a7d503]">
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
  <section className="border-b border-[var(--border)]">
    <div className="container-custom grid sm:grid-cols-2 lg:grid-cols-4">
      <Stat number="50+" label="Projects Delivered" />
      <Stat number="5+" label="Years of Experience" />
      <Stat number="100%" label="Focused on Results" />
      <Stat number="1" label="Team Working With You" />
    </div>
  </section>

  {/* MISSION + VISION */}
  <section className="py-20 sm:py-24 lg:py-32">
    <div className="container-custom">
      <div className="grid gap-6 lg:grid-cols-2">
        <article className="group rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-8 transition duration-300 hover:-translate-y-1 hover:border-[#a7d503]/50 sm:p-11">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#a7d503] text-lg font-black text-black">
            M
          </span>

          <p className="mt-9 text-xs font-bold uppercase tracking-[0.25em] text-[#8db800] dark:text-[#a7d503]">
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

        <article className="group rounded-[28px] border border-[var(--border)] bg-[var(--surface-secondary)] p-8 transition duration-300 hover:-translate-y-1 hover:border-[#a7d503]/50 sm:p-11">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-[#a7d503]/50 text-lg font-black text-[#8db800] dark:text-[#a7d503]">
            V
          </span>

          <p className="mt-9 text-xs font-bold uppercase tracking-[0.25em] text-[#8db800] dark:text-[#a7d503]">
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
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#8db800] dark:text-[#a7d503]">
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
            className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-7 transition duration-300 hover:border-[#a7d503]/50 hover:shadow-xl"
          >
            <span className="text-sm font-black text-[#8db800] dark:text-[#a7d503]">
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
  <section className="py-20 sm:py-24 lg:py-32">
    <div className="container-custom">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#8db800] dark:text-[#a7d503]">
            Our Process
          </p>

          <h2 className="mt-5 text-4xl font-black leading-[1.02] tracking-[-0.045em] sm:text-5xl">
            Clear thinking from the first conversation.
          </h2>

          <p className="mt-7 max-w-md leading-8 text-[var(--muted)]">
            Our process keeps every project focused, collaborative, and
            connected to your business goals.
          </p>
        </div>

        <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {process.map((item) => (
            <div
              key={item.step}
              className="grid gap-5 py-7 sm:grid-cols-[80px_1fr]"
            >
              <span className="text-sm font-black text-[#8db800] dark:text-[#a7d503]">
                {item.step}
              </span>

              <div>
                <h3 className="text-2xl font-black">{item.title}</h3>

                <p className="mt-3 leading-7 text-[var(--muted)]">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>

  {/* CTA */}
  <section className="pb-20 sm:pb-24 lg:pb-32">
    <div className="container-custom">
      <div className="relative overflow-hidden rounded-[32px] bg-[#a7d503] px-7 py-16 text-black sm:px-12 sm:py-20 lg:px-16">
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
          <Button href="#contact" variant="outline" className="mt-10 hover:bg-[#a7d503]">
            Start a Conversation
            </Button>
        </div>
      </div>
    </div>
  </section>
</main>


);
}

function Stat({ number, label }) {
return ( <div className="border-b border-[var(--border)] py-10 sm:border-r sm:px-7 lg:border-b-0 lg:px-9 lg:py-12 last:border-r-0"> <p className="text-4xl font-black tracking-[-0.05em] text-[#8db800] dark:text-[#a7d503] sm:text-5xl">
{number} </p>


  <p className="mt-3 text-xs font-bold uppercase tracking-[0.17em] text-[var(--muted)]">
    {label}
  </p>
</div>


);
}
