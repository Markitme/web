"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Globe2,
  TrendingUp,
  Palette,
  Camera,
} from "lucide-react";

const serviceGroups = [
  {
    number: "01",
    title: "Websites & Digital Presence",
    description:
      "High-performing websites and digital experiences designed to turn attention into meaningful business growth.",
    icon: Globe2,
    accent: "#6D9773",
    size: "lg:col-span-7",
  },
  {
    number: "02",
    title: "Marketing & Growth",
    description:
      "Strategic marketing systems that help your brand reach the right audience and grow consistently.",
    icon: TrendingUp,
    accent: "#FFBA00",
    size: "lg:col-span-5",
  },
  {
    number: "03",
    title: "Brand & Creative",
    description:
      "Distinctive brand identities and creative direction that make your business recognizable and memorable.",
    icon: Palette,
    accent: "#BB8A52",
    size: "lg:col-span-5",
  },
  {
    number: "04",
    title: "Brand & Content Production",
    description:
      "Visual content built to tell your story, showcase your brand, and create stronger connections.",
    icon: Camera,
    accent: "#0C3B2E",
    size: "lg:col-span-7",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="
        relative
        overflow-hidden

        bg-[var(--background)]

        py-24
        sm:py-28
        lg:py-32

        transition-colors
        duration-500
      "
    >
      {/* =========================================
          BACKGROUND
      ========================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Subtle grid */}

        <div
          className="
            absolute
            inset-0

            opacity-[0.025]

            dark:opacity-[0.018]
          "
          style={{
            backgroundImage: `
              linear-gradient(
                to right,
                #0C3B2E 1px,
                transparent 1px
              ),
              linear-gradient(
                to bottom,
                #0C3B2E 1px,
                transparent 1px
              )
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* =====================================
            LEFT GREEN GLOW
        ====================================== */}

        <div
          className="
            absolute

            -left-40
            top-20

            h-96
            w-96

            rounded-full

            bg-[var(--color-green)]/[0.06]

            blur-[110px]

            dark:bg-[var(--color-green)]/[0.055]
          "
        />

        {/* =====================================
            RIGHT GOLD GLOW
        ====================================== */}

        <div
          className="
            absolute

            -right-40
            bottom-20

            h-96
            w-96

            rounded-full

            bg-[var(--color-gold)]/[0.045]

            blur-[110px]

            dark:bg-[var(--color-gold)]/[0.025]
          "
        />

        {/* =====================================
            CENTER SOFT GLOW
        ====================================== */}

        <div
          className="
            absolute

            left-1/2
            top-1/2

            h-[280px]
            w-[700px]

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            bg-[var(--color-green)]/[0.025]

            blur-[120px]

            dark:bg-[var(--color-cream)]/[0.015]
          "
        />
      </div>

      {/* =========================================
          TOP ACCENT
      ========================================== */}

      <div
        className="
          pointer-events-none

          absolute
          left-1/2
          top-0

          h-[2px]
          w-24

          -translate-x-1/2

          rounded-full

          bg-[var(--color-gold)]

          sm:w-32
        "
      />

      {/* =========================================
          CONTENT
      ========================================== */}

      <div className="container-custom relative z-10">

        {/* =========================================
            HEADER
        ========================================== */}

        <div className="max-w-4xl">
          <div className="flex items-center gap-3">
            <span
              className="
                h-px
                w-9

                bg-[var(--color-green)]

                dark:bg-[var(--color-gold)]
              "
            />

            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]

                text-[var(--color-green)]

                dark:text-[var(--color-gold)]
              "
            >
              What we do
            </span>
          </div>

          <h2
            className="
              mt-6

              text-4xl
              font-bold
              leading-[1.04]
              tracking-[-0.05em]

              text-[var(--foreground)]

              sm:text-5xl
              lg:text-6xl
            "
          >
            Everything your brand needs

            <span
              className="
                block

                text-[var(--color-green)]

                dark:text-[var(--color-gold)]
              "
            >
              to grow.
            </span>
          </h2>

          <p
            className="
              mt-7
              max-w-2xl

              text-base
              leading-7

              text-[var(--muted)]

              sm:text-lg
            "
          >
            One strategic partner for your brand, website, marketing,
            and long-term digital growth.
          </p>
        </div>

        {/* =========================================
            SERVICES GRID
        ========================================== */}

        <div
          className="
            mt-16

            grid
            gap-5

            md:grid-cols-2

            lg:mt-20
            lg:grid-cols-12
          "
        >
          {serviceGroups.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-80px",
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`
                  group
                  relative
                  overflow-hidden

                  rounded-[2rem]

                  border
                  border-[var(--color-deep)]/[0.08]

                  bg-white/70

                  backdrop-blur-md

                  p-7

                  sm:p-9

                  min-h-[360px]

                  shadow-[0_12px_40px_rgba(12,59,46,0.04)]

                  transition-all
                  duration-500

                  hover:-translate-y-2

                  hover:border-[var(--color-green)]/20

                  hover:bg-white/80

                  hover:shadow-[0_30px_80px_rgba(12,59,46,0.10)]

                  dark:border-[var(--color-cream)]/[0.08]

                  dark:bg-[var(--color-deep)]/65

                  dark:hover:border-[var(--color-gold)]/20

                  dark:hover:bg-[var(--color-deep)]/75

                  dark:hover:shadow-[0_30px_80px_rgba(0,0,0,0.25)]

                  ${service.size}

                  ${
                    index === 0 || index === 3
                      ? "lg:min-h-[390px]"
                      : "lg:min-h-[350px]"
                  }
                `}
              >
                {/* =================================
                    GLASS INNER GLOW
                ================================== */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0

                    rounded-[2rem]

                    bg-gradient-to-br
                    from-[var(--color-green)]/[0.035]
                    via-transparent
                    to-[var(--color-gold)]/[0.025]

                    opacity-0

                    transition-opacity
                    duration-700

                    group-hover:opacity-100
                  "
                />

                {/* =================================
                    LARGE BACKGROUND ICON
                ================================== */}

                <Icon
                  strokeWidth={1}
                  className="
                    pointer-events-none

                    absolute

                    -right-10
                    -top-10

                    h-56
                    w-56

                    opacity-[0.035]

                    transition-all
                    duration-700
                    ease-out

                    group-hover:scale-110
                    group-hover:-rotate-6
                    group-hover:opacity-[0.10]

                    dark:opacity-[0.035]
                    dark:group-hover:opacity-[0.08]
                  "
                  style={{
                    color: service.accent,
                  }}
                />

                {/* =================================
                    TOP
                ================================== */}

                <div
                  className="
                    relative
                    z-10

                    flex
                    items-start
                    justify-between
                  "
                >
                  <span
                    className="
                      text-sm
                      font-bold
                      tracking-[0.18em]

                      text-[var(--muted)]

                      opacity-60
                    "
                  >
                    {service.number}
                  </span>

                  <div
                    className="
                      flex
                      h-12
                      w-12

                      items-center
                      justify-center

                      rounded-full

                      border

                      bg-white/30

                      backdrop-blur-sm

                      transition-all
                      duration-500

                      group-hover:scale-110

                      dark:bg-white/[0.03]
                    "
                    style={{
                      borderColor: `${service.accent}55`,
                    }}
                  >
                    <Icon
                      size={20}
                      strokeWidth={1.6}
                      style={{
                        color: service.accent,
                      }}
                    />
                  </div>
                </div>

                {/* =================================
                    CONTENT
                ================================== */}

                <div
                  className="
                    relative
                    z-10

                    mt-20

                    max-w-xl
                  "
                >
                  <h3
                    className="
                      text-2xl
                      font-bold
                      leading-tight
                      tracking-[-0.035em]

                      text-[var(--foreground)]

                      sm:text-3xl
                      lg:text-[2.15rem]
                    "
                  >
                    {service.title}
                  </h3>

                  <p
                    className="
                      mt-4

                      max-w-lg

                      text-sm
                      leading-7

                      text-[var(--muted)]

                      sm:text-base
                    "
                  >
                    {service.description}
                  </p>
                </div>

                {/* =================================
                    EXPLORE BUTTON
                ================================== */}

                <Link
                  href="/services"
                  className="
                    absolute
                    bottom-7
                    right-7
                    z-20

                    flex
                    h-12
                    w-12

                    items-center
                    justify-center

                    rounded-full

                    border
                    border-[var(--color-deep)]/10

                    bg-white/70

                    text-[var(--color-deep)]

                    backdrop-blur-md

                    transition-all
                    duration-500

                    group-hover:w-28

                    group-hover:border-[var(--color-gold)]

                    group-hover:bg-[var(--color-gold)]

                    dark:border-white/10

                    dark:bg-[var(--color-deep)]/70

                    dark:text-[var(--color-cream)]

                    dark:group-hover:bg-[var(--color-gold)]

                    dark:group-hover:text-[var(--color-deep)]
                  "
                >
                  <span
                    className="
                      hidden
                      whitespace-nowrap

                      text-xs
                      font-bold

                      group-hover:block
                    "
                  >
                    Explore
                  </span>

                  <ArrowUpRight
                    size={19}
                    className="
                      transition-transform
                      duration-500

                      group-hover:rotate-45
                    "
                  />
                </Link>

                {/* =================================
                    BOTTOM GOLD ACCENT
                ================================== */}

                <div
                  className="
                    absolute

                    bottom-0
                    left-0

                    h-[2px]
                    w-0

                    bg-[var(--color-gold)]

                    transition-all
                    duration-700

                    group-hover:w-full
                  "
                />
              </motion.article>
            );
          })}
        </div>

        {/* =========================================
            BOTTOM CTA
        ========================================== */}

        <div
          className="
            mt-10

            flex
            justify-end
          "
        >
          <Link
            href="/services"
            className="
              group

              inline-flex
              items-center
              gap-3

              rounded-full

              border
              border-[var(--color-deep)]/10

              bg-white/70

              px-6
              py-3.5

              text-sm
              font-bold

              text-[var(--color-deep)]

              backdrop-blur-md

              transition-all
              duration-300

              hover:bg-[var(--color-deep)]
              hover:text-white

              dark:border-white/10
              dark:bg-[var(--color-deep)]/70
              dark:text-[var(--color-cream)]

              dark:hover:bg-[var(--color-gold)]
              dark:hover:text-[var(--color-deep)]
            "
          >
            View all services

            <ArrowUpRight
              size={18}
              className="
                transition-transform
                duration-300

                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </Link>
        </div>
      </div>

      {/* =========================================
          BOTTOM ACCENT
      ========================================== */}

      <div
        className="
          pointer-events-none

          absolute
          bottom-0
          left-1/2

          h-px
          w-20

          -translate-x-1/2

          bg-[var(--color-green)]/35

          sm:w-28

          dark:bg-[var(--color-gold)]/30
        "
      />
    </section>
  );
}
