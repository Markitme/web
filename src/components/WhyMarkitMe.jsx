"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  UserRound,
  Zap,
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
        relative
        overflow-hidden
        border-y
        border-[var(--color-deep)]/10
        bg-[var(--color-cream)]
        py-24
        text-[var(--color-deep)]
        transition-colors
        duration-300
        dark:border-[var(--color-cream)]/10
        dark:bg-[var(--color-night)]
        dark:text-[var(--color-cream)]
        sm:py-32
        lg:py-40
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Light grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.35]
            dark:hidden
          "
          style={{
            backgroundImage: `
              linear-gradient(rgba(12,59,46,0.055) 1px, transparent 1px),
              linear-gradient(90deg, rgba(12,59,46,0.055) 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
          }}
        />

        {/* Dark grid */}
        <div
          className="
            absolute
            inset-0
            hidden
            opacity-[0.2]
            dark:block
          "
          style={{
            backgroundImage: `
              linear-gradient(rgba(241,243,237,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(241,243,237,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
          }}
        />

        {/* Yellow glow */}
        <div
          className="
            absolute
            -right-32
            top-20
            h-80
            w-80
            rounded-full
            bg-[var(--color-gold)]/10
            blur-3xl
            dark:bg-[var(--color-gold)]/[0.06]
          "
        />

        {/* Green glow */}
        <div
          className="
            absolute
            -left-32
            bottom-20
            h-96
            w-96
            rounded-full
            bg-[var(--color-green)]/10
            blur-3xl
            dark:bg-[var(--color-green)]/[0.08]
          "
        />
      </div>

      <div className="container-custom relative z-10">

        {/* =====================================================
    HEADER
===================================================== */}

<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{
    duration: 0.7,
    ease: "easeOut",
  }}
  className="mb-11 md:mb-14"
>
  {/* =================================================
      EYEBROW
  ================================================== */}

  <div className="inline-flex items-center gap-2">
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
        text-[9px]
        font-black
        uppercase
        tracking-[0.24em]
        text-[var(--color-green)]
        dark:text-[var(--color-gold)]
      "
    >
      A different way to work
    </p>

    <span
      className="
        h-1.5
        w-1.5
        rounded-full
        bg-[var(--color-green)]
        dark:bg-[var(--color-gold)]
      "
    />
  </div>

  {/* =================================================
      HEADING
  ================================================== */}

  <SectionHeading>
    Not an agency.{" "}
    <span
      className="
        text-[var(--color-green)]
        dark:text-[var(--color-gold)]
      "
    >
      Not just a freelancer.
    </span>
  </SectionHeading>

  {/* =================================================
      DESCRIPTION
  ================================================== */}

  <p
    className="
      mt-5
      max-w-2xl
      text-sm
      leading-7
      text-[var(--color-deep)]/55
      dark:text-[var(--color-cream)]/55
      sm:text-base
    "
  >
    You get the flexibility of a specialist and the capability of a full
    digital team — without the unnecessary layers.
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
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-[var(--color-deep)]
                bg-[var(--color-deep)]
                p-7
                text-[var(--color-cream)]
                shadow-[0_30px_80px_rgba(12,59,46,0.18)]
                dark:border-[var(--color-green)]/40
                dark:bg-[var(--color-deep)]
                sm:p-9
                lg:p-11
              "
            >
              {/* Decorative circle */}

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
                  border-[var(--color-gold)]/20
                  bg-[var(--color-gold)]/10
                  transition-transform
                  duration-700
                  group-hover:scale-125
                "
              />

              {/* Decorative square */}

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
                  border-[var(--color-green)]/20
                "
              />

              {/* Top */}

              <div className="relative flex items-center justify-between">
                <span
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-[var(--color-cream)]/15
                    bg-[var(--color-cream)]/[0.05]
                    px-3
                    py-1.5
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.18em]
                    text-[var(--color-cream)]/60
                  "
                >
                  <Sparkles
                    size={12}
                    className="text-[var(--color-gold)]"
                  />

                  The sweet spot
                </span>

                <span
                  className="
                    text-[10px]
                    font-bold
                    tracking-[0.2em]
                    text-[var(--color-cream)]/30
                  "
                >
                  03
                </span>
              </div>

              {/* Main content */}

              <div className="relative mt-14">
                <p
                  className="
                    text-[10px]
                    font-black
                    uppercase
                    tracking-[0.22em]
                    text-[var(--color-gold)]
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
                    sm:text-5xl
                  "
                >
                  Built around
                  <br />

                  <span className="text-[var(--color-green)]">
                    your business.
                  </span>
                </h3>

                <p
                  className="
                    mt-6
                    max-w-md
                    text-sm
                    leading-7
                    text-[var(--color-cream)]/60
                  "
                >
                  A flexible digital partner that brings strategy, creativity,
                  technology, and execution together under one roof.
                </p>
              </div>

              {/* Points */}

              <div className="relative mt-9 space-y-3">
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
                      border-[var(--color-cream)]/10
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
                        bg-[var(--color-gold)]
                        text-[var(--color-deep)]
                      "
                    >
                      <Check
                        size={13}
                        strokeWidth={3}
                      />
                    </span>

                    <span className="text-sm text-[var(--color-cream)]/80">
                      {point}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Bottom */}

              <div
                className="
                  relative
                  mt-10
                  flex
                  items-center
                  justify-between
                  border-t
                  border-[var(--color-cream)]/10
                  pt-6
                "
              >
                <span className="text-xs text-[var(--color-cream)]/40">
                  One partner. Full capability.
                </span>

                <button type="button" onClick={() => {
                  window.dispatchEvent(
                    new Event("open-contact-modal")
                  );
                }}
                  className="
                    flex
                    cursor-pointer
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-[var(--color-gold)]
                    text-[var(--color-deep)]
                    transition-transform
                    duration-300
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
          <div className="mb-6 h-px w-16 bg-[var(--color-gold)]" />

          <p
            className="
              text-xl
              leading-8
              tracking-[-0.02em]
              text-[var(--color-deep)]/55
              dark:text-[var(--color-cream)]/55
              sm:text-2xl
            "
          >
            <span className="font-black text-[var(--color-deep)] dark:text-[var(--color-cream)]">
              Less hierarchy.
            </span>{" "}

            <span className="font-black text-[var(--color-green)]">
              More expertise.
            </span>{" "}

            <span className="font-black text-[var(--color-deep)] dark:text-[var(--color-cream)]">
              Better communication.
            </span>
          </p>

          <p
            className="
              mt-3
              text-sm
              leading-7
              text-[var(--color-deep)]/45
              dark:text-[var(--color-cream)]/45
            "
          >
            And a team that stays focused on one thing:

            <span className="font-bold text-[var(--color-sand)]">
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
        rounded-[2rem]
        border
        border-[var(--color-deep)]/10
        bg-white/70
        p-7
        backdrop-blur-sm
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-[var(--color-green)]/50
        hover:shadow-[0_25px_60px_rgba(12,59,46,0.08)]
        dark:border-[var(--color-cream)]/10
        dark:bg-[var(--color-deep)]/40
        dark:hover:border-[var(--color-green)]/40
        sm:p-9
      "
    >
      {/* Top accent */}

      <div
        className="
          absolute
          left-7
          top-0
          h-[3px]
          w-10
          bg-[var(--color-sand)]
          transition-all
          duration-500
          group-hover:w-20
          sm:left-9
        "
      />

      {/* Header */}

      <div className="flex items-center justify-between">
        <div
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-2xl
            border
            border-[var(--color-deep)]/10
            bg-[var(--color-soft)]
            text-[var(--color-deep)]
            dark:border-[var(--color-cream)]/10
            dark:bg-[var(--color-cream)]/[0.05]
            dark:text-[var(--color-cream)]
          "
        >
          <Icon
            size={19}
            strokeWidth={1.7}
          />
        </div>

        <span
          className="
            text-[9px]
            font-black
            uppercase
            tracking-[0.18em]
            text-[var(--color-deep)]/25
            dark:text-[var(--color-cream)]/25
          "
        >
          Option {item.number}
        </span>
      </div>

      {/* Content */}

      <h3
        className="
          mt-10
          text-2xl
          font-black
          tracking-[-0.04em]
        "
      >
        {item.title}
      </h3>

      <p
        className="
          mt-3
          text-sm
          leading-6
          text-[var(--color-deep)]/50
          dark:text-[var(--color-cream)]/50
        "
      >
        {item.description}
      </p>

      {/* Points */}

      <div className="mt-7 space-y-3">
        {item.points.map((point) => (
          <div
            key={point}
            className="
              flex
              items-center
              gap-3
              text-sm
              text-[var(--color-deep)]/55
              dark:text-[var(--color-cream)]/55
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                shrink-0
                rounded-full
                bg-[var(--color-sand)]
              "
            />

            {point}
          </div>
        ))}
      </div>

      {/* Bottom */}

      <div
        className="
          mt-10
          border-t
          border-[var(--color-deep)]/10
          pt-5
          dark:border-[var(--color-cream)]/10
        "
      >
        <span
          className="
            text-[9px]
            font-bold
            uppercase
            tracking-[0.18em]
            text-[var(--color-deep)]/25
            dark:text-[var(--color-cream)]/25
          "
        >
          The usual route
        </span>
      </div>
    </motion.div>
  );
}