"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Lightbulb,
  Palette,
  Rocket,
  Target,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    number: "01",
    title: "Discover",
    eyebrow: "Understand the opportunity",
    description:
      "We learn about your business, audience, goals, and challenges before making creative decisions.",
    icon: Lightbulb,
    tags: [
      "Brand Audit",
      "Audience Research",
      "Goal Setting",
    ],
  },
  {
    number: "02",
    title: "Strategize",
    eyebrow: "Build a clear roadmap",
    description:
      "We turn insights into a focused strategy that connects your brand, marketing, and growth goals.",
    icon: Target,
    tags: [
      "Positioning",
      "Marketing Plan",
      "Growth Strategy",
    ],
  },
  {
    number: "03",
    title: "Create",
    eyebrow: "Bring ideas to life",
    description:
      "We create memorable brands, websites, content, and campaigns that connect with your audience.",
    icon: Palette,
    tags: [
      "Creative Direction",
      "Web Design",
      "Content",
    ],
  },
  {
    number: "04",
    title: "Grow",
    eyebrow: "Measure and improve",
    description:
      "We launch, track performance, and optimize continuously to create stronger business results.",
    icon: Rocket,
    tags: [
      "Launch",
      "Analytics",
      "Optimization",
    ],
  },
];

export default function HowWeWork() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="overflow-hidden border-y border-[var(--border)] bg-[var(--background)] py-20 text-[var(--foreground)] dark:border-[var(--border)] dark:bg-[var(--background)] dark:text-[var(--foreground)] lg:py-24">
      <div className="container-custom">

        {/* =====================================
            TOP HEADING — SEPARATE FULL ROW
        ===================================== */}
        <SectionHeading
          eyebrow="Our Process"
          description="A clear process that combines strategy, creativity, and measurable growth."
          className="mb-12 lg:mb-16"
        >
          How we turn ideas into impact.
        </SectionHeading>

        {/* =====================================
            BELOW — LEFT STEPS + RIGHT CARDS
        ===================================== */}
        <div className="grid gap-10 lg:grid-cols-[0.32fr_0.68fr] lg:items-start lg:gap-14">

          {/* =================================
              LEFT — ONLY STEP TABS
          ================================= */}
          <aside className="lg:sticky lg:top-28">

            <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible">

              {steps.map((step, index) => {
                const isActive = activeStep === index;

                return (
                  <button
                    key={step.number}
                    type="button"
                    onClick={() => setActiveStep(index)}
                    className={`group flex min-w-[190px] items-center gap-4 rounded-xl border px-4 py-3.5 text-left transition-all duration-500 lg:min-w-0 ${
                      isActive
                        ? "border-[var(--foreground)]/25 bg-[var(--surface-soft)]"
                        : "border-[var(--border)] bg-transparent hover:border-[var(--foreground)]/20 hover:bg-[var(--surface-soft)] dark:border-[var(--border)] dark:hover:border-[var(--foreground)]/30 dark:hover:bg-[var(--surface-soft)]"
                    }`}
                  >
                    {/* Step Number */}
                    <span
                      className={`text-xs font-black ${
                        isActive
                          ? "text-[var(--foreground)]"
                          : "text-[var(--muted)]"
                      }`}
                    >
                      {step.number}
                    </span>

                    {/* Step Name */}
                    <span
                      className={`text-base font-black ${
                        isActive
                          ? "text-[var(--foreground)]"
                          : "text-[var(--muted)]"
                      }`}
                    >
                      {step.title}
                    </span>

                    {/* Active Dot */}
                    <span
                      className={`ml-auto h-2 w-2 rounded-full transition-all duration-300 ${
                        isActive
                          ? "scale-100 bg-[var(--foreground)]"
                          : "scale-0"
                      }`}
                    />
                  </button>
                );
              })}

            </div>

            {/* Progress Bar */}
            <div className="mt-7 hidden lg:block">

              <div className="h-[2px] w-full overflow-hidden bg-[var(--border)]">
                <div
                  className="h-full bg-[var(--foreground)] transition-all duration-500"
                  style={{
                    width: `${((activeStep + 1) / steps.length) * 100}%`,
                  }}
                />
              </div>

              <p className="mt-3 text-xs font-bold text-[var(--muted)]">
                Step {activeStep + 1} of {steps.length}
              </p>

            </div>

          </aside>

          {/* =================================
              RIGHT — MEDIUM STACKED CARDS
          ================================= */}
          <div className="relative min-h-[390px] sm:min-h-[410px]">

            {steps.map((step, index) => {
              const distance = activeStep - index;

              /*
                Active card:
                distance = 0

                Previous card:
                distance = 1, 2, 3
              */
              const isVisible =
                distance >= 0 && distance <= 3;

              const offset = Math.max(
                0,
                Math.min(distance, 3)
              );

              return (
                <ProcessCard
                  key={step.number}
                  step={step}
                  index={index}
                  activeStep={activeStep}
                  offset={offset}
                  isVisible={isVisible}
                />
              );
            })}

          </div>

        </div>
      </div>
    </section>
  );
}

function ProcessCard({
  step,
  index,
  activeStep,
  offset,
  isVisible,
}) {
  const Icon = step.icon;

  const isActive = index === activeStep;

  return (
    <article
      className="absolute inset-x-0 top-0 overflow-hidden rounded-[24px] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-xl transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] dark:border-[var(--border)] dark:bg-[var(--surface)] sm:p-8"
      style={{
        zIndex: 20 - offset,

        transform: isVisible
          ? `translateY(${offset * 16}px) scale(${
              1 - offset * 0.025
            })`
          : "translateY(60px) scale(0.92)",

        opacity: isVisible
          ? 1 - offset * 0.18
          : 0,

        filter: isActive
          ? "blur(0)"
          : `blur(${offset * 0.4}px)`,

        pointerEvents: isActive
          ? "auto"
          : "none",
      }}
    >
      {/* Neutral Background Glow */}
      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[var(--foreground)]/[0.06] blur-3xl" />

      <div className="relative z-10">

        {/* =============================
            ICON + STEP NUMBER
        ============================= */}
        <div className="flex items-start justify-between">

          <div
            className={`flex h-12 w-12 items-center justify-center rounded-2xl text-[var(--background)] ${
              isActive
                ? "bg-[var(--foreground)]"
                : "bg-[var(--surface-soft)]"
            }`}
          >
            <Icon
              size={22}
              strokeWidth={1.8}
            />
          </div>

          <span className="text-5xl font-black tracking-[-0.08em] text-[var(--foreground)]/10 sm:text-5xl">
            {step.number}
          </span>

        </div>

        {/* =============================
            CARD CONTENT
        ============================= */}
        <div className="mt-7">

          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--muted)]">
            {step.eyebrow}
          </p>

          <h3 className="mt-3 text-4xl font-black tracking-[-0.05em] text-[var(--foreground)] sm:text-5xl">
            {step.title}.
          </h3>

          <p className="mt-4 max-w-xl text-base leading-7 text-[var(--muted)]">
            {step.description}
          </p>

          {/* Tags */}
          <div className="mt-6 flex flex-wrap gap-2">

            {step.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-3.5 py-2 text-xs font-bold text-[var(--foreground)] dark:border-[var(--border)] dark:bg-[var(--surface-soft)] dark:text-[var(--foreground)]"
              >
                {tag}
              </span>
            ))}

          </div>

          {/* Button */}
          <button
            type="button"
            className="mt-7 inline-flex items-center gap-3 text-sm font-bold text-[var(--foreground)]"
          >
            Explore this step

            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--foreground)] text-[var(--background)] transition duration-300 hover:scale-110">
              <ArrowUpRight size={16} />
            </span>
          </button>

        </div>
      </div>
    </article>
  );
}