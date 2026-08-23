"use client";

import ProcessSection from "@/components/ProcessSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import CTA from "@/components/CTA";

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

/* =====================================================
   COMMON SECTION LABEL
===================================================== */

function SectionLabel({ children, dark = false }) {
  return (
    <div className="flex items-center gap-2">
      <span
        className="
          h-1.5
          w-1.5
          rounded-full
          bg-[var(--color-gold)]
        "
      />

      <p
        className="
          text-[8px]
          font-black
          uppercase
          tracking-[0.22em]
          text-[var(--color-green)]
          sm:text-[9px]
          dark:text-[#8FBF9A]
        "
      >
        {children}
      </p>

      <span
        className="
          h-1.5
          w-1.5
          rounded-full
          bg-[var(--color-green)]
          dark:bg-[#8FBF9A]
        "
      />
    </div>
  );
}

/* =====================================================
   COMMON ABOUT CARD
===================================================== */

function AboutCard({ children, className = "" }) {
  return (
    <article
      className={`
        group
        rounded-[28px]
        border
        border-[var(--color-deep)]/10
        bg-white/60
        p-8

        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-[var(--color-green)]
        hover:shadow-[0_20px_60px_rgba(12,59,46,0.10)]

        dark:border-[var(--color-green)]/20
        dark:bg-[var(--color-deep)]
        dark:hover:border-[#8FBF9A]
        dark:hover:bg-[#104A3A]
        dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.28)]

        sm:p-11

        ${className}
      `}
    >
      {children}
    </article>
  );
}

/* =====================================================
   ABOUT PAGE
===================================================== */

export default function AboutPage() {
  return (
    <main
      className="
        min-h-screen
        bg-[var(--color-cream)]
        text-[var(--color-deep)]

        transition-colors
        duration-300

        dark:bg-[var(--color-night)]
        dark:text-[var(--color-cream)]
      "
    >
      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          border-b
          border-[var(--color-deep)]/10
          dark:border-[var(--color-green)]/20
        "
      >
        {/* Background glow */}

        <div
          className="
            pointer-events-none
            absolute
            -right-32
            -top-32
            h-72
            w-72
            rounded-full
            bg-[var(--color-green)]/10
            blur-3xl
            dark:bg-[var(--color-green)]/10
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-32
            left-1/4
            h-64
            w-64
            rounded-full
            bg-[var(--color-green)]/5
            blur-3xl
            dark:bg-[#8FBF9A]/5
          "
        />

        <div className="absolute inset-0 about-grid opacity-50" />

        <div
          className="
            container-custom
            relative
            px-5
            py-24
            sm:py-32
            lg:py-36
          "
        >
          <div className="max-w-5xl">
            {/* Eyebrow */}

            <SectionLabel>About MarkitMe</SectionLabel>

            {/* Heading */}

            <h1
              className="
                mt-4
                text-3xl
                font-black
                leading-[0.95]
                tracking-[-0.055em]
                text-[var(--color-deep)]

                sm:text-4xl
                md:text-5xl
                lg:text-6xl

                dark:text-[var(--color-cream)]
              "
            >
              We turn ideas into{" "}
              <span className="text-[var(--color-green)] dark:text-[var(--color-gold)]">
                meaningful growth.
              </span>
            </h1>

            {/* Intro */}

            <div
              className="
                mt-10
                grid
                max-w-4xl
                gap-8
                md:grid-cols-[1.2fr_0.8fr]
              "
            >
              <p
                className="
                  text-lg
                  leading-8
                  text-[var(--color-deep)]/60

                  sm:text-xl

                  dark:text-[var(--color-cream)]/65
                "
              >
                MarkitMe combines strategy, creativity, technology, and
                marketing to help businesses build stronger brands and achieve
                measurable results.
              </p>

              <div
                className="
                  border-l
                  border-[var(--color-green)]
                  pl-6

                  dark:border-[#8FBF9A]
                "
              >
                <p
                  className="
                    text-sm
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-[var(--color-deep)]

                    dark:text-[var(--color-cream)]
                  "
                >
                  Strategy. Creativity. Technology. Growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section
        className="
          border-b
          border-[var(--color-deep)]/10
          bg-[var(--color-cream)]
          py-20

          dark:border-[var(--color-green)]/20
          dark:bg-[var(--color-night)]

          sm:py-24
          lg:py-32
        "
      >
        <div
          className="
            container-custom
            grid
            gap-14
            px-5

            lg:grid-cols-[0.8fr_1.2fr]
            lg:gap-24
          "
        >
          {/* Heading */}

          <div>
            <SectionLabel>Who We Are</SectionLabel>

            <h2
              className="
                mt-4
                text-3xl
                font-black
                leading-[0.95]
                tracking-[-0.055em]
                text-[var(--color-deep)]

                sm:text-4xl
                md:text-5xl
                lg:text-6xl

                dark:text-[var(--color-cream)]
              "
            >
              A digital partner built for{" "}
              <span className="text-[var(--color-green)] dark:text-[var(--color-gold)]">
                ambitious brands.
              </span>
            </h2>
          </div>

          {/* Content */}

          <div>
            <p
              className="
                text-xl
                leading-9
                text-[var(--color-deep)]

                dark:text-[var(--color-cream)]

                sm:text-2xl
              "
            >
              We are a creative digital agency focused on helping businesses
              stand out, connect with the right audience, and grow with
              confidence.
            </p>

            <p
              className="
                mt-7
                leading-8
                text-[var(--color-deep)]/60

                dark:text-[var(--color-cream)]/65
              "
            >
              Our team brings together strategic thinking, creative design,
              web development, branding, and digital marketing. We do not
              believe in one-size-fits-all solutions. Every project is shaped
              around the goals, challenges, and opportunities that make your
              business unique.
            </p>

            <p
              className="
                mt-5
                leading-8
                text-[var(--color-deep)]/60

                dark:text-[var(--color-cream)]/65
              "
            >
              Whether you are launching a new brand, improving your online
              presence, or building a stronger digital foundation, we work as
              an extension of your team to create work that delivers real
              value.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          STATS
      ===================================================== */}

      <section
        className="
          border-b
          border-[var(--color-deep)]/10
          bg-[var(--color-soft)]
          py-20

          dark:border-[var(--color-green)]/20
          dark:bg-[var(--color-deep-surface)]

          sm:py-24
          lg:py-32
        "
      >
        <div className="container-custom px-5">
          {/* Heading */}

          <div
            className="
              mb-10
              flex
              flex-col
              gap-6

              sm:mb-12

              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >
            <div className="max-w-[680px]">
              <SectionLabel>By The Numbers</SectionLabel>

              <h2
                className="
                  mt-4
                  text-3xl
                  font-black
                  leading-[0.95]
                  tracking-[-0.055em]
                  text-[var(--color-deep)]

                  sm:text-4xl
                  md:text-5xl
                  lg:text-6xl

                  dark:text-[var(--color-cream)]
                "
              >
                Our impact in{" "}
                <span className="text-[var(--color-green)] dark:text-[var(--color-gold)]">
                  numbers.
                </span>
              </h2>
            </div>
          </div>

          {/* Counters */}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <AnimatedCounter
              value={50}
              suffix="+"
              label="Projects Delivered"
            />

            <AnimatedCounter
              value={5}
              suffix="+"
              label="Years of Experience"
            />

            <AnimatedCounter
              value={100}
              suffix="%"
              label="Focused on Results"
            />

            <AnimatedCounter
              value={1}
              label="Team Working With You"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          MISSION + VISION
      ===================================================== */}

      <section
        className="
          border-b
          border-[var(--color-deep)]/10
          bg-[var(--color-cream)]
          py-20

          dark:border-[var(--color-green)]/20
          dark:bg-[var(--color-night)]

          sm:py-24
          lg:py-32
        "
      >
        <div className="container-custom px-5">
          {/* Section Heading */}

          <div className="mb-10 max-w-[680px] sm:mb-12">
            <SectionLabel>What Drives Us</SectionLabel>

            <h2
              className="
                mt-4
                text-3xl
                font-black
                leading-[0.95]
                tracking-[-0.055em]
                text-[var(--color-deep)]

                sm:text-4xl
                md:text-5xl
                lg:text-6xl

                dark:text-[var(--color-cream)]
              "
            >
              What guides our{" "}
              <span className="text-[var(--color-green)] dark:text-[var(--color-gold)]">
                work.
              </span>
            </h2>
          </div>

          {/* Cards */}

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Mission */}

            <AboutCard>
              <span
                className="
                  inline-flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  bg-[var(--color-gold)]
                  text-lg
                  font-black
                  text-[var(--color-deep)]
                "
              >
                M
              </span>

              <p
                className="
                  mt-9
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-[var(--color-green)]

                  dark:text-[#8FBF9A]
                "
              >
                Our Mission
              </p>

              <h3
                className="
                  mt-4
                  text-3xl
                  font-black
                  leading-[1.02]
                  tracking-[-0.045em]
                  text-[var(--color-deep)]

                  dark:text-[var(--color-cream)]

                  sm:text-4xl
                "
              >
                Make digital growth more{" "}
                <span className="text-[var(--color-green)] dark:text-[#8FBF9A]">
                  meaningful.
                </span>
              </h3>

              <p
                className="
                  mt-6
                  max-w-xl
                  leading-8
                  text-[var(--color-deep)]/60

                  dark:text-[var(--color-cream)]/65
                "
              >
                Our mission is to help businesses make better digital
                decisions, create stronger customer experiences, and turn
                ideas into sustainable growth.
              </p>
            </AboutCard>

            {/* Vision */}

            <AboutCard>
              <span
                className="
                  inline-flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[var(--color-green)]
                  text-lg
                  font-black
                  text-[var(--color-green)]

                  dark:border-[#8FBF9A]
                  dark:text-[#8FBF9A]
                "
              >
                V
              </span>

              <p
                className="
                  mt-9
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-[var(--color-green)]

                  dark:text-[#8FBF9A]
                "
              >
                Our Vision
              </p>

              <h3
                className="
                  mt-4
                  text-3xl
                  font-black
                  leading-[1.02]
                  tracking-[-0.045em]
                  text-[var(--color-deep)]

                  dark:text-[var(--color-cream)]

                  sm:text-4xl
                "
              >
                Build brands people{" "}
                <span className="text-[var(--color-green)] dark:text-[#8FBF9A]">
                  remember.
                </span>
              </h3>

              <p
                className="
                  mt-6
                  max-w-xl
                  leading-8
                  text-[var(--color-deep)]/60

                  dark:text-[var(--color-cream)]/65
                "
              >
                We aim to become a trusted long-term digital partner for
                ambitious businesses by creating work that is useful,
                distinctive, adaptable, and built to last.
              </p>
            </AboutCard>
          </div>
        </div>
      </section>

      {/* =====================================================
          VALUES
      ===================================================== */}

      <section
        className="
          border-y
          border-[var(--color-deep)]/10
          bg-[var(--color-soft)]
          py-20

          dark:border-[var(--color-green)]/20
          dark:bg-[var(--color-deep-surface)]

          sm:py-24
          lg:py-32
        "
      >
        <div className="container-custom px-5">
          {/* Heading */}

          <div className="mb-10 max-w-[680px] sm:mb-12">
            <SectionLabel>How We Think</SectionLabel>

            <h2
              className="
                mt-4
                text-3xl
                font-black
                leading-[0.95]
                tracking-[-0.055em]
                text-[var(--color-deep)]

                sm:text-4xl
                md:text-5xl
                lg:text-6xl

                dark:text-[var(--color-cream)]
              "
            >
              Good work starts with the{" "}
              <span className="text-[var(--color-green)] dark:text-[var(--color-gold)]">
                right approach.
              </span>
            </h2>
          </div>

          {/* Values */}

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {values.map((value) => (
              <AboutCard
                key={value.number}
                className="
                  rounded-[26px]
                  bg-[var(--color-cream)]
                  p-7

                  dark:bg-[var(--color-deep)]

                  sm:p-8
                "
              >
                <span
                  className="
                    text-sm
                    font-black
                    text-[var(--color-green)]

                    dark:text-[#8FBF9A]
                  "
                >
                  {value.number}
                </span>

                <h3
                  className="
                    mt-12
                    text-2xl
                    font-black
                    tracking-[-0.03em]
                    text-[var(--color-deep)]

                    dark:text-[var(--color-cream)]
                  "
                >
                  {value.title}
                </h3>

                <p
                  className="
                    mt-5
                    leading-7
                    text-[var(--color-deep)]/60

                    dark:text-[var(--color-cream)]/65
                  "
                >
                  {value.description}
                </p>
              </AboutCard>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section
        className="
          bg-[var(--color-cream)]
          dark:bg-[var(--color-night)]
        "
      >
        <ProcessSection
          label="Our Process"
          title="Clear thinking from the first conversation."
          description="Our process keeps every project focused, collaborative, and connected to your business goals."
          steps={[
            {
              number: 1,
              title: "Discover",
              description:
                "We learn about your business, customers, challenges, and goals.",
            },
            {
              number: 2,
              title: "Define",
              description:
                "We turn insights into a focused strategy and a clear creative direction.",
            },
            {
              number: 3,
              title: "Create",
              description:
                "Our team designs and develops digital experiences with purpose.",
            },
            {
              number: 4,
              title: "Grow",
              description:
                "We measure, refine, and improve to help your business move forward.",
            },
          ]}
        />
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <CTA
        eyebrow="Let's Work Together"
        title="Have an idea? Let's make it matter."
        description="Tell us what you are building, where you want to go, and how we can help you turn your ideas into meaningful digital growth."
        buttonText="Start a Conversation"
        buttonHref="/contact"
      />
    </main>
  );
}