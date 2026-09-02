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

/* =========================================================
   WORDPRESS IMAGE BASE URL
   Sirf yahan path change karna hai.
========================================================= */

  const IMAGE_BASE_URL =
  "https://cms.markitme.ca/wp-content/uploads/2026/08/";


/* =========================================================
   SERVICES
========================================================= */

const serviceGroups = [
  {
    number: "01",
    title: "Websites & Digital Presence",
    description:
      "High-performing websites and digital experiences designed to turn attention into meaningful business growth.",
    icon: Globe2,
    image: `${IMAGE_BASE_URL}web-development.jpg`,
    accent: "#1a1a1a",
    size: "lg:col-span-7",
  },
  {
    number: "02",
    title: "Marketing & Growth",
    description:
      "Strategic marketing systems that help your brand reach the right audience and grow consistently.",
    icon: TrendingUp,
    image: `${IMAGE_BASE_URL}marketing.jpg`,
    accent: "#7a7a7a",
    size: "lg:col-span-5",
  },
  {
    number: "03",
    title: "Brand & Creative",
    description:
      "Distinctive brand identities and creative direction that make your business recognizable and memorable.",
    icon: Palette,
    image: `${IMAGE_BASE_URL}brand-identity.jpg`,
    accent: "#d6d6d6",
    size: "lg:col-span-5",
  },
  {
    number: "04",
    title: "Brand & Content Production",
    description:
      "Visual content built to tell your story, showcase your brand, and create stronger connections.",
    icon: Camera,
    image: `${IMAGE_BASE_URL}content-creative.jpg`,
    accent: "#ffffff",
    size: "lg:col-span-7",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

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
      {/* =====================================================
          SECTION BACKGROUND
      ====================================================== */}

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
                var(--color-black) 1px,
                transparent 1px
              ),
              linear-gradient(
                to bottom,
                var(--color-black) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Left neutral glow */}

        <div
          className="
            absolute
            -left-40
            top-20
            h-96
            w-96
            rounded-full
            bg-[var(--foreground)]/[0.04]
            blur-[110px]
            dark:bg-[var(--foreground)]/[0.06]
          "
        />

        {/* Right neutral glow */}

        <div
          className="
            absolute
            -right-40
            bottom-20
            h-96
            w-96
            rounded-full
            bg-[var(--foreground)]/[0.025]
            blur-[110px]
            dark:bg-[var(--foreground)]/[0.04]
          "
        />

        {/* Center glow */}

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
            bg-[var(--foreground)]/[0.02]
            blur-[120px]
            dark:bg-[var(--foreground)]/[0.03]
          "
        />
      </div>

      {/* =====================================================
          TOP GOLD ACCENT
      ====================================================== */}

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
          bg-[var(--foreground)]
          sm:w-32
        "
      />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="container-custom relative z-10">
        {/* ===================================================
            HEADER
        ==================================================== */}

        <div className="max-w-4xl">
          <div className="flex items-center gap-3">
            <span
              className="
                h-px
                w-9
                bg-[var(--foreground)]
              "
            />

            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-[var(--muted)]
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
                text-[var(--foreground)]
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

        {/* ===================================================
            SERVICES GRID
        ==================================================== */}

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
                  min-h-[390px]
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-white/10
                  shadow-[0_20px_70px_rgba(12,59,46,0.12)]
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-[0_35px_90px_rgba(12,59,46,0.20)]
                  ${service.size}

                  ${
                    index === 0 || index === 3
                      ? "lg:min-h-[430px]"
                      : "lg:min-h-[390px]"
                  }
                `}
              >
                {/* =================================================
                    BACKGROUND IMAGE
                ================================================== */}

                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="
                      h-full
                      w-full
                      object-cover
                      object-center
                      transition-transform
                      duration-1000
                      ease-out
                      group-hover:scale-110
                    "
                  />
                </div>

                {/* =================================================
                    DARK GREEN OVERLAY
                ================================================== */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-[var(--color-black-soft)]/[0.68]
                    transition-all
                    duration-700
                    group-hover:bg-[var(--color-black-soft)]/[0.54]
                  "
                />

                {/* =================================================
                    GRADIENT FOR CONTENT READABILITY
                ================================================== */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[var(--color-black)]
                    via-[var(--color-black)]/45
                    to-transparent
                    opacity-95
                  "
                />

                {/* =================================================
                    THEME COLOR GLOW
                ================================================== */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    opacity-30
                    transition-opacity
                    duration-700
                    group-hover:opacity-60
                  "
                  style={{
                    background: `
                      radial-gradient(
                        circle at 85% 15%,
                        ${service.accent}55 0%,
                        transparent 38%
                      )
                    `,
                  }}
                />

                {/* =================================================
                    LARGE BACKGROUND ICON
                ================================================== */}

                <Icon
                  strokeWidth={1}
                  className="
                    pointer-events-none
                    absolute
                    -right-10
                    -top-10
                    h-56
                    w-56
                    opacity-[0.10]
                    transition-all
                    duration-700
                    ease-out
                    group-hover:scale-110
                    group-hover:-rotate-6
                    group-hover:opacity-[0.18]
                  "
                  style={{
                    color: service.accent,
                  }}
                />

                {/* =================================================
                    TOP CONTENT
                ================================================== */}

                <div
                  className="
                    relative
                    z-10
                    flex
                    items-start
                    justify-between
                    p-7
                    sm:p-9
                  "
                >
                  {/* Number */}

                  <span
                    className="
                      text-sm
                      font-bold
                      tracking-[0.18em]
                      text-white/60
                    "
                  >
                    {service.number}
                  </span>

                  {/* Icon Circle */}

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      border
                      bg-black/20
                      backdrop-blur-md
                      transition-all
                      duration-500
                      group-hover:scale-110
                    "
                    style={{
                      borderColor: `${service.accent}80`,
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

                {/* =================================================
                    MAIN CONTENT
                ================================================== */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    z-10
                    p-7
                    sm:p-9
                  "
                >
                  <h3
                    className="
                      max-w-xl
                      text-2xl
                      font-bold
                      leading-tight
                      tracking-[-0.035em]
                      text-white
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
                      text-white/70
                      sm:text-base
                    "
                  >
                    {service.description}
                  </p>

                  {/* Small accent line */}

                  <div
                    className="
                      mt-6
                      h-[2px]
                      w-12
                      transition-all
                      duration-500
                      group-hover:w-20
                    "
                    style={{
                      backgroundColor: service.accent,
                    }}
                  />
                </div>

                {/* =================================================
                    EXPLORE BUTTON
                ================================================== */}

                <Link
                  href="/services"
                  aria-label={`Explore ${service.title}`}
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
                    gap-2
                    rounded-full
                    border
                    border-[var(--border)]
                    bg-[var(--background)]/80
                    text-[var(--foreground)]
                    backdrop-blur-md
                    transition-all
                    duration-500
                    group-hover:w-28
                    group-hover:border-[var(--foreground)]
                    group-hover:bg-[var(--foreground)]
                    group-hover:text-[var(--background)]
                    dark:border-[var(--border)]
                    dark:bg-[var(--background)]/80
                    dark:text-[var(--foreground)]
                    dark:group-hover:border-[var(--foreground)]
                    dark:group-hover:bg-[var(--foreground)]
                    dark:group-hover:text-[var(--background)]
                    sm:bottom-9
                    sm:right-9
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

                {/* =================================================
                    BOTTOM GOLD ACCENT
                ================================================== */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[3px]
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

        {/* ===================================================
            BOTTOM CTA
        ==================================================== */}

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

      {/* =========================================================
          BOTTOM ACCENT
      ========================================================== */}

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

