"use client";

import { motion } from "framer-motion";

import {
  ArrowUpRight,
  Building2,
  UserRound,
  Check,
  Sparkles,
} from "lucide-react";

import SectionHeading from "./SectionHeading";

const comparisonItems = [
  {
    icon: Building2,
    number: "01",
    title: "Traditional Agency",
    description:
      "Big teams, bigger processes, and often too many layers between you and the work.",
    points: ["Longer processes", "Multiple layers", "Less flexibility"],
  },
  {
    icon: UserRound,
    number: "02",
    title: "Solo Freelancer",
    description:
      "Personal attention is great, but one person cannot always cover every digital discipline.",
    points: ["Limited bandwidth", "Fewer capabilities", "Single dependency"],
  },
];

const markitmePoints = [
  "Direct collaboration",
  "Specialist-level execution",
  "Flexible project teams",
  "Strategy + Design + Development",
];

export default function WhyMarkitMe() {
  return (
    <section
      className="
        section-dark
        relative
        overflow-hidden

        border-y
        border-[var(--color-cream)]/10

        bg-[var(--color-night)]

        py-24

        text-[var(--color-cream)]

        transition-colors
        duration-300

        sm:py-32
        lg:py-40
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Dark grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.22]
          "
          style={{
            backgroundImage: `
              linear-gradient(rgba(241,243,237,0.045) 1px, transparent 1px),
              linear-gradient(90deg, rgba(241,243,237,0.045) 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
          }}
        />

        {/* Gold glow */}

        <div
          className="
            absolute
            -right-40
            top-10

            h-96
            w-96

            rounded-full

            bg-[var(--color-light-purple)]/[0.055]

            blur-3xl
          "
        />

        {/* Green glow */}

        <div
          className="
            absolute
            -left-40
            bottom-10

            h-[28rem]
            w-[28rem]

            rounded-full

            bg-[var(--color-purple)]/[0.08]

            blur-3xl
          "
        />

        {/* Center subtle glow */}

        <div
          className="
            absolute
            left-1/2
            top-1/2

            h-96
            w-96

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            bg-[var(--color-purple)]/[0.025]

            blur-3xl
          "
        />
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="container-custom relative z-10">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="mb-11 md:mb-14"
        >
          {/* Eyebrow */}

          <div className="inline-flex items-center gap-2">
            <p
              className="
                text-[9px]
                font-black
                uppercase
                tracking-[0.24em]

                text-[var(--color-light-purple)]
              "
            >
              A different way to work
            </p>
          </div>

          {/* Heading */}

          <SectionHeading>
            Not an agency.{" "}
            <span className="text-[var(--color-purple)] dark:text-[var(--color-light-purple)]">
              Not just a freelancer.
            </span>
          </SectionHeading>

          {/* Description */}

          <p
            className="
              mt-5
              max-w-2xl

              text-sm
              leading-7

              text-[var(--color-cream)]/55

              sm:text-base
            "
          >
            You get the flexibility of a specialist and the capability of a
            full digital team — without the unnecessary layers.
          </p>
        </motion.div>

        {/* =====================================================
            COMPARISON AREA
        ====================================================== */}

        <div className="mt-16 lg:mt-20">
          <div
            className="
              grid
              gap-5

              lg:grid-cols-[0.85fr_1.3fr_0.85fr]

              lg:items-stretch
            "
          >
            {/* =================================================
                LEFT — TRADITIONAL AGENCY
            ================================================= */}

            <ComparisonCard
              item={comparisonItems[0]}
              direction="left"
            />

            {/* =================================================
                CENTER — MARKITME
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.96,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                group
                why-center-card
                relative
                overflow-hidden
                isolate
                z-20

                rounded-[2rem]

                border
                border-[var(--accent-bright)]

                bg-white

                p-7

                text-[var(--color-night)]

                transition-all
                duration-500

                hover:border-[var(--accent-bright)]
                hover:shadow-[0_35px_100px_color-mix(in_srgb,var(--accent)_24%,transparent)]

                lg:scale-[1.035]

                sm:p-9
                lg:p-11
              "
            >
              {/* =================================================
                  CENTER DECORATIVE CIRCLE
              ================================================== */}

              <div
                className="
                  pointer-events-none
                  absolute

                  -right-24
                  -top-24

                  h-64
                  w-64

                  rounded-full

                  border
                  border-[var(--color-light-purple)]/20

                  bg-[var(--color-light-purple)]/[0.06]

                  transition-transform
                  duration-700

                  group-hover:scale-125
                "
              />

              {/* =================================================
                  CENTER DECORATIVE SQUARE
              ================================================== */}

              <div
                className="
                  pointer-events-none
                  absolute

                  bottom-0
                  right-0

                  h-32
                  w-32

                  translate-x-1/3
                  translate-y-1/3

                  rotate-12

                  border
                  border-[var(--color-purple)]/20

                  transition-transform
                  duration-700

                  group-hover:rotate-6
                "
              />

              {/* =================================================
                  TOP
              ================================================== */}

              <div
                className="
                  relative
                  z-10
                  flex
                  items-center
                  justify-between
                "
              >
                <span
                  className="
                    inline-flex
                    items-center
                    gap-2

                    rounded-full

                    border
                    border-[var(--color-night)]/10

                    bg-[var(--color-night)]/[0.035]

                    px-3
                    py-1.5

                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.18em]

                    text-white
                  "
                >
                  <Sparkles
                    size={12}
                    className="text-[var(--color-light-purple)]"
                  />

                  The sweet spot
                </span>

                <span
                  className="
                    text-[10px]
                    font-bold
                    tracking-[0.2em]

                    text-white
                  "
                >
                  03
                </span>
              </div>

              {/* =================================================
                  MAIN CONTENT
              ================================================== */}

              <div className="relative z-10 mt-14">
                <p
                  className="
                    text-[10px]
                    font-black
                    uppercase
                    tracking-[0.22em]

                    text-white
                  "
                >
                  MarkitMe
                </p>

                <h3
                  className="
                    mt-4
                    max-w-lg

                    text-4xl
                    font-black
                    leading-[0.95]

                    tracking-[-0.05em]

                    text-white

                    sm:text-5xl
                  "
                >
                  Built around
                  <br />

                  <span className="text-[var(--color-purple)] dark:text-[var(--color-light-purple)]">
                    your business.
                  </span>
                </h3>

                <p
                  className="
                    mt-6
                    max-w-md

                    text-sm
                    leading-7

                    text-white/60
                  "
                >
                  A flexible digital partner that brings strategy, creativity,
                  technology, and execution together under one roof.
                </p>
              </div>

              {/* =================================================
                  POINTS
              ================================================== */}

              <div className="relative z-10 mt-9 space-y-3">
                {markitmePoints.map((point, index) => (
                  <motion.div
                    key={point}
                    initial={{
                      opacity: 0,
                      x: -10,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.08,
                    }}
                    className="
                      flex
                      items-center
                      gap-3

                      border-t
                      border-[var(--color-night)]/10

                      pt-3
                    "
                  >
                    <span
                      className="
                        flex
                        h-6
                        w-6
                        shrink-0
                        items-center
                        justify-center

                        rounded-full

                        bg-[var(--color-light-purple)]

                        text-white

                        shadow-[0_0_15px_rgba(255,186,0,0.15)]
                      "
                    >
                      <Check
                        size={13}
                        strokeWidth={3}
                      />
                    </span>

                    <span
                      className="
                        text-sm

                        text-white
                      "
                    >
                      {point}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* =================================================
                  BOTTOM
              ================================================== */}

              <div
                className="
                  relative
                  z-10

                  mt-10

                  flex
                  items-center
                  justify-between

                  border-t
                  border-[var(--color-night)]/10

                  pt-6
                "
              >
                <span
                  className="
                    text-xs

                    text-white/60
                  "
                >
                  One partner. Full capability.
                </span>

                <button
                  type="button"
                  onClick={() => {
                    window.dispatchEvent(
                      new Event("open-contact-modal")
                    );
                  }}
                  aria-label="Open contact form"
                  className="
                    flex
                    h-10
                    w-10
                    cursor-pointer
                    items-center
                    justify-center

                    rounded-full

                    bg-[var(--color-light-purple)]

                    text-[var(--color-deep)]

                    transition-all
                    duration-300

                    hover:scale-110
                    group-hover:rotate-45
                  "
                >
                  <ArrowUpRight size={18} />
                </button>
              </div>
            </motion.div>

            {/* =================================================
                RIGHT — FREELANCER
            ================================================= */}

            <ComparisonCard
              item={comparisonItems[1]}
              direction="right"
            />
          </div>
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mt-16
            max-w-4xl

            lg:mt-20
          "
        >
          {/* Accent line */}

          <div
            className="
              mb-6
              h-px
              w-16

              bg-[var(--color-light-purple)]
            "
          />

          {/* Main statement */}

          <p
            className="
              text-xl
              leading-8

              tracking-[-0.02em]

              text-[var(--color-cream)]/55

              sm:text-2xl
            "
          >
            <span
              className="
                font-black
                text-[var(--color-cream)]
              "
            >
              Less hierarchy.
            </span>{" "}

            <span
              className="
                font-black
                text-[var(--color-light-purple)]
              "
            >
              More expertise.
            </span>{" "}

            <span
              className="
                font-black
                text-[var(--color-cream)]
              "
            >
              Better communication.
            </span>
          </p>

          {/* Supporting statement */}

          <p
            className="
              mt-3

              text-sm
              leading-7

              text-[var(--color-cream)]/45
            "
          >
            And a team that stays focused on one thing:

            <span
              className="
                font-bold
                text-[var(--color-purple)]
              "
            >
              {" "}
              your growth.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================
   COMPARISON CARD
============================================================ */

function ComparisonCard({ item, direction }) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: direction === "left" ? -30 : 30,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className="
        group
        relative
        overflow-hidden
        z-10

        rounded-[2rem]

        border
        border-[var(--accent)]/35

        bg-[#F1F1F1]

        p-7

        text-[var(--color-night)]

        backdrop-blur-sm

        transition-all
        duration-500

        hover:-translate-y-2

        hover:border-[var(--accent-bright)]

        hover:bg-[#E9E9E9]

        hover:shadow-[0_25px_70px_color-mix(in_srgb,var(--accent)_22%,transparent)]

        sm:p-9
      "
    >
      {/* =======================================================
          BACKGROUND GLOW
      ======================================================== */}

      <div
        className="
          pointer-events-none
          absolute

          -right-20
          -top-20

          h-40
          w-40

          rounded-full

          bg-[var(--accent)]/[0.10]

          blur-3xl

          transition-all
          duration-700

          group-hover:scale-125
          group-hover:bg-[var(--accent-bright)]/[0.18]
        "
      />

      {/* =======================================================
          TOP ACCENT
      ======================================================== */}

      <div
        className="
          absolute

          left-7
          top-0

          h-[3px]
          w-10

          bg-[var(--accent-bright)]

          transition-all
          duration-500

          group-hover:w-20

          sm:left-9
        "
      />

      {/* =======================================================
          HEADER
      ======================================================== */}

      <div
        className="
          relative
          flex
          items-center
          justify-between
        "
      >
        {/* ICON */}

        <div
          className="
            flex
            h-11
            w-11
            items-center
            justify-center

            rounded-2xl

            border
            border-[var(--color-night)]/10

            bg-[var(--color-night)]/[0.04]

            text-[var(--accent-bright)]

            transition-all
            duration-300

            group-hover:border-[var(--accent-bright)]/60
            group-hover:bg-[var(--accent)]/[0.12]
          "
        >
          <Icon
            size={19}
            strokeWidth={1.7}
          />
        </div>

        {/* NUMBER */}

        <span
          className="
            text-[9px]
            font-black
            uppercase
            tracking-[0.18em]

            text-[var(--color-night)]/40

            transition-colors
            duration-300

            group-hover:text-[var(--accent-bright)]
          "
        >
          Option {item.number}
        </span>
      </div>

      {/* =======================================================
          CONTENT
      ======================================================== */}

      <div className="relative">
        {/* TITLE */}

        <h3
          className="
            mt-10

            text-2xl
            font-black

            tracking-[-0.04em]

            text-[var(--color-night)]
          "
        >
          {item.title}
        </h3>

        {/* DESCRIPTION */}

        <p
          className="
            mt-3

            text-sm
            leading-6

            text-[var(--color-night)]/65
          "
        >
          {item.description}
        </p>

        {/* =====================================================
            POINTS
        ====================================================== */}

        <div className="mt-7 space-y-3">
          {item.points.map((point) => (
            <div
              key={point}
              className="
                flex
                items-center
                gap-3

                text-sm

                text-[var(--color-night)]/75
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  shrink-0

                  rounded-full

                  bg-[var(--accent-bright)]

                  shadow-[0_0_8px_rgba(255,186,0,0.30)]
                "
              />

              {point}
            </div>
          ))}
        </div>
      </div>

      {/* =======================================================
          BOTTOM
      ======================================================== */}

      <div
        className="
          relative

          mt-10

          border-t
          border-[var(--color-night)]/10

          pt-5
        "
      >
        <span
          className="
            text-[9px]
            font-bold
            uppercase
            tracking-[0.18em]

            text-[var(--color-night)]/40
          "
        >
          The usual route
        </span>
      </div>
    </motion.div>
  );
}