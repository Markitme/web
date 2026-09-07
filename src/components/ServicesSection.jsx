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
    accent: "var(--accent)",
    size: "lg:col-span-7",
  },
  {
    number: "02",
    title: "Marketing & Growth",
    description:
      "Strategic marketing systems that help your brand reach the right audience and grow consistently.",
    icon: TrendingUp,
    image: `${IMAGE_BASE_URL}marketing.jpg`,
    accent: "var(--accent-bright)",
    size: "lg:col-span-5",
  },
  {
    number: "03",
    title: "Brand & Creative",
    description:
      "Distinctive brand identities and creative direction that make your business recognizable and memorable.",
    icon: Palette,
    image: `${IMAGE_BASE_URL}brand-identity.jpg`,
    accent: "var(--accent-bright)",
    size: "lg:col-span-5",
  },
  {
    number: "04",
    title: "Brand & Content Production",
    description:
      "Visual content built to tell your story, showcase your brand, and create stronger connections.",
    icon: Camera,
    image: `${IMAGE_BASE_URL}content-creative.jpg`,
    accent: "var(--accent)",
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
        services-section
        section-light
        relative
        overflow-hidden
        border-y
        border-[var(--accent)]/10
        bg-[var(--purple-soft)]
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
          "
          style={{
            backgroundImage: `
              linear-gradient(
                to right,
                color-mix(in srgb, var(--accent) 8%, transparent) 1px,
                transparent 1px
              ),
              linear-gradient(
                to bottom,
                color-mix(in srgb, var(--accent) 8%, transparent) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "80px 80px",
          }}
        />


      </div>


      <div className="container-custom relative z-10">
        {/* ===================================================
            HEADER
        ==================================================== */}

        <div className="max-w-4xl">
          <div className="flex items-center gap-3">
           

            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-[var(--accent)]
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
                text-[var(--accent)]
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
                  card-purple-border
                  services-card
                  relative
                  min-h-[390px]
                  overflow-hidden
                  rounded-[1.75rem]
                  border
                  border-[var(--accent)]/35
                  bg-[#111116]
                  shadow-[0_16px_48px_rgba(76,29,149,0.14)]
                  transition-all
                  duration-500
                  hover:-translate-y-1.5
                  hover:border-[var(--accent)]
                  hover:shadow-[0_24px_70px_color-mix(in_srgb,var(--accent)_24%,transparent)]
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
                    bg-[#09090b]/[0.48]
                    backdrop-blur-[2px]
                    transition-all
                    duration-700
                    group-hover:bg-[#171022]/[0.36]
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
                    from-[#09090b]
                    via-[#09090b]/65
                    to-transparent
                    opacity-90
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
                      bg-white
                      text-[var(--accent)]
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
                    service-explore-button
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
                    border-white
                    bg-white
                    text-[var(--accent)]
                    backdrop-blur-md
                    transition-all
                    duration-500
                    group-hover:border-[var(--accent-bright)]
                    group-hover:bg-[var(--accent-bright)]
                    group-hover:text-white
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
                    bg-[var(--accent)]
                    transition-all
                    duration-700
                    group-hover:w-full
                  "
                />
              </motion.article>
            );
          })}
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
          bg-[var(--accent)]/35
          sm:w-28
        "
      />
    </section>
  );
}

