import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { services } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";

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
        bg-[#F1F3ED]
        text-[#0C3B2E]

        transition-colors
        duration-300

        dark:bg-[#071F18]
        dark:text-[#F1F3ED]
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
          border-[#0C3B2E]/10

          dark:border-[#6D9773]/20
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

            bg-[#6D9773]/10

            blur-3xl

            dark:bg-[#6D9773]/10
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
          <div className="max-w-[760px]">

            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#FFBA00]
                "
              />

              <p
                className="
                  text-[8px]
                  font-black
                  uppercase
                  tracking-[0.22em]

                  text-[#6D9773]

                  sm:text-[9px]

                  dark:text-[#FFBA00]
                "
              >
                What We Do
              </p>

              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full

                  bg-[#6D9773]

                  dark:bg-[#FFBA00]
                "
              />
            </div>

            {/* Main Heading */}
            <h1
              className="
                mt-4

                text-4xl
                font-black
                leading-[0.95]
                tracking-[-0.055em]

                text-[#0C3B2E]

                sm:text-5xl
                md:text-6xl
                lg:text-7xl

                dark:text-[#F1F3ED]
              "
            >
              Strategy, creativity,{" "}

              <span
                className="
                  text-[#6D9773]
                  dark:text-[#FFBA00]
                "
              >
                and growth
              </span>{" "}

              — working together.
            </h1>

            {/* Description */}
            <p
              className="
                mt-6
                max-w-2xl

                text-base
                leading-7

                text-[#0C3B2E]/60

                sm:text-lg
                sm:leading-8

                dark:text-[#F1F3ED]/60
              "
            >
              We combine strategy, design, technology, content, and marketing
              to create digital experiences that help businesses grow.
            </p>
          </div>
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
                border-[#0C3B2E]/10

                py-16
                sm:py-20
                lg:py-24

                dark:border-[#6D9773]/20

                ${
                  isAlternate
                    ? `
                      bg-[#E8ECE5]
                      dark:bg-[#0A2A21]
                    `
                    : `
                      bg-[#F1F3ED]
                      dark:bg-[#071F18]
                    `
                }
              `}
            >
              <div className="container-custom px-5">

                {/* =================================================
                    CATEGORY HEADING
                ================================================= */}

                <div
                  className="
                    mb-10

                    flex
                    flex-col
                    gap-5

                    sm:mb-12

                    lg:flex-row
                    lg:items-end
                    lg:justify-between
                  "
                >
                  <div className="max-w-[680px]">

                    {/* Same Heading Pattern */}
                    <div className="flex items-center gap-2">
                      <span
                        className="
                          h-1.5
                          w-1.5
                          rounded-full
                          bg-[#FFBA00]
                        "
                      />

                      <p
                        className="
                          text-[8px]
                          font-black
                          uppercase
                          tracking-[0.22em]

                          text-[#6D9773]

                          sm:text-[9px]

                          dark:text-[#FFBA00]
                        "
                      >
                        {String(categoryIndex + 1).padStart(2, "0")}
                      </p>

                      <span
                        className="
                          h-1.5
                          w-1.5
                          rounded-full

                          bg-[#6D9773]

                          dark:bg-[#FFBA00]
                        "
                      />
                    </div>

                    {/* Category Heading */}
                    <h2
                      className="
                        mt-3

                        text-3xl
                        font-black
                        leading-[0.95]
                        tracking-[-0.055em]

                        text-[#0C3B2E]

                        sm:text-4xl
                        md:text-5xl
                        lg:text-6xl

                        dark:text-[#F1F3ED]
                      "
                    >
                      {category}
                    </h2>

                    <p
                      className="
                        mt-5
                        max-w-2xl

                        text-base
                        leading-7

                        text-[#0C3B2E]/60

                        dark:text-[#F1F3ED]/60
                      "
                    >
                      Explore specialized services designed around your brand,
                      audience, and long-term business goals.
                    </p>
                  </div>
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

          bg-[#FFBA00]

          px-5
          py-16

          text-[#0C3B2E]

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
            border-[#0C3B2E]/5
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
                  bg-[#0C3B2E]
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

                text-[#0C3B2E]/70
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

              bg-[#0C3B2E]

              px-7
              py-4

              font-black
              text-[#F1F3ED]

              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:bg-[#071F18]
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

                bg-[#FFBA00]
                text-[#0C3B2E]

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