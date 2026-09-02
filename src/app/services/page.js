import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { services } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";
import SectionHeading from "@/components/SectionHeading";

export const metadata = {
  title: "Services | MarkitMe Digital Strategy & Creative",
  description:
    "Explore MarkitMe services for branding, web design and development, digital marketing, SEO, and sustainable business growth.",
};

export default function ServicesPage() {
  /* =========================================================
     GROUP SERVICES BY CATEGORY
  ========================================================= */

  const serviceCategories = services.reduce((groups, service) => {
    const category = service.category;

    if (!groups[category]) {
      groups[category] = [];
    }

    groups[category].push(service);

    return groups;
  }, {});

  return (
    <main
      className="
        min-h-screen
        bg-[var(--background)]
        text-[var(--foreground)]

        transition-colors
        duration-300

        dark:bg-[var(--background)]
        dark:text-[var(--foreground)]
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
          border-[var(--border)]

          dark:border-[var(--border)]
        "
      >
        {/* Decorative Glow */}
        <div
          className="
            pointer-events-none
            absolute
            -right-32
            -top-32

            h-72
            w-72

            rounded-full

            bg-[var(--foreground)]/6

            blur-3xl

            dark:bg-[var(--foreground)]/8
          "
        />

        <div
          className="
            container-custom
            relative
            px-5

            py-16
            sm:py-20
            lg:py-24
          "
        >
          <SectionHeading
            eyebrow="What we do"
            description="We combine strategy, design, technology, content, and marketing to create digital experiences that help businesses grow."
          >
            Strategy, creativity,{" "}
            <span className="text-[var(--muted)] dark:text-[var(--foreground)]/85">
              and growth
            </span>{" "}
            — working together.
          </SectionHeading>
        </div>
      </section>

      {/* =====================================================
          SERVICE CATEGORY SECTIONS
      ===================================================== */}

      {Object.entries(serviceCategories).map(
        ([category, categoryServices], categoryIndex) => {
          const isAlternate = categoryIndex % 2 === 1;

          return (
            <section
              key={category}
              className={`
                border-b
                border-[var(--border)]

                py-16
                sm:py-20
                lg:py-24

                dark:border-[var(--border)]

                ${
                  isAlternate
                    ? `
                      bg-[var(--surface-soft)]
                      dark:bg-[var(--surface)]
                    `
                    : `
                      bg-[var(--background)]
                      dark:bg-[var(--background)]
                    `
                }
              `}
            >
              <div className="container-custom px-5">
                {/* =================================================
                    CATEGORY HEADING
                ================================================= */}

                <div className="mb-10 sm:mb-12">
                  <SectionHeading
                    eyebrow={String(categoryIndex + 1).padStart(2, "0")}
                    description="Explore specialized services designed around your brand, audience, and long-term business goals."
                  >
                    {category}
                  </SectionHeading>
                </div>

                {/* =================================================
                    COMMON SERVICE CARDS
                ================================================= */}

                <div
                  className="
                    grid
                    gap-5

                    md:grid-cols-2
                    lg:grid-cols-3
                  "
                >
                  {categoryServices.map((service) => (
                    <ServiceCard
                      key={service.slug}
                      service={service}
                    />
                  ))}
                </div>
              </div>
            </section>
          );
        }
      )}

      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden

          bg-[var(--foreground)]

          px-5
          py-16

          text-[var(--background)]

          sm:py-20
          lg:py-24
        "
      >
        {/* Decorative Circle */}
        <div
          className="
            pointer-events-none
            absolute
            -right-24
            -top-24

            h-64
            w-64

            rounded-full

            border-[40px]
            border-[var(--color-deep)]/5
          "
        />

        <div
          className="
            container-custom
            relative

            flex
            flex-col
            justify-between
            gap-8

            lg:flex-row
            lg:items-center
          "
        >
          {/* Content */}
          <div className="max-w-3xl">
            <div className="flex items-center gap-2">
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[var(--background)]
                "
              />

              <p
                className="
                  text-[9px]
                  font-black
                  uppercase
                  tracking-[0.22em]
                "
              >
                Ready to Grow?
              </p>
            </div>

            <h2
              className="
                mt-4

                text-4xl
                font-black
                leading-[0.98]
                tracking-[-0.055em]

                text-[var(--background)]

                dark:text-[var(--background)]

                sm:text-5xl
                lg:text-6xl
              "
            >
              Let&apos;s build something that moves your business forward.
            </h2>

            <p
              className="
                mt-5
                max-w-2xl

                text-base
                leading-7

                text-[var(--background)]/75
              "
            >
              Tell us what you want to achieve, and we&apos;ll help you find
              the right strategy, creative direction, and digital solution.
            </p>
          </div>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="
              group

              flex
              w-fit
              shrink-0
              items-center
              gap-3

              rounded-full

              bg-[var(--background)]

              px-7
              py-4

              font-black
              text-[var(--foreground)]

              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:bg-[var(--surface-soft)]
              hover:shadow-xl
            "
          >
            Start Your Project

            <span
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full

                bg-[var(--foreground)]
                text-[var(--background)]

                transition-transform
                duration-300

                group-hover:translate-x-1
              "
            >
              <ArrowRight size={16} />
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}