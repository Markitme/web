"use client";

import SectionHeading from "./SectionHeading";


export default function ProcessSection({
  label = "Our Process",
  title = "How We Work",
  description = "A simple and structured process designed to keep every stage clear, organized, and moving forward.",
  steps = [],
  variant = "default",
  accentColor = "accent-bright",
}) {
  if (!steps || steps.length === 0) {
    return null;
  }

  return (
    <section className="bg-[var(--background)] px-4 py-16 text-[var(--foreground)] transition-colors duration-300 sm:px-5 sm:py-28 dark:bg-[var(--background)] dark:text-[var(--foreground)]">
      <div className="container-custom">

        {/* =====================================================
            PREMIUM HEADER
        ===================================================== */}

        <div
          className="
            relative
            mb-12
            flex
            flex-col
            gap-8
            md:mb-16
            md:flex-row
            md:items-end
            md:justify-between
          "
        >

          {/* =================================================
              LEFT — HEADING AREA
          ================================================= */}

          <div className="relative max-w-4xl">

            {/* Eyebrow */}

            <div
              className="
                mb-5
                inline-flex
                items-center
                gap-2.5
              "
            >
              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-[var(--foreground)]
                  shadow-[0_0_12px_rgba(17,17,17,0.30)]
                  dark:bg-[var(--foreground)]
                "
              />

              <span
                className="
                  text-[9px]
                  font-black
                  uppercase
                  tracking-[0.25em]
                  text-[var(--muted)]
                  sm:text-[10px]
                "
              >
                {label}
              </span>

              <span
                className="
                  h-px
                  w-8
                  bg-[var(--border)]
                "
              />

              <span
                className="
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[var(--foreground)]/55
                  dark:text-[var(--foreground)]/60
                "
              >
                {String(steps.length).padStart(2, "0")} STEPS
              </span>
            </div>


            {/* =================================================
                HEADING
            ================================================= */}

            <SectionHeading>{title}</SectionHeading>


            {/* Accent line */}

            <div
              className="
                mt-5
                h-[3px]
                w-16
                rounded-full
                bg-[var(--foreground)]
                shadow-[0_0_12px_rgba(17,17,17,0.18)]
              "
            />


            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <p
              className="
                mt-6
                max-w-2xl
                text-sm
                leading-7
                text-[var(--color-deep)]/55

                dark:text-[var(--color-cream)]/55

                sm:text-base
                sm:leading-8
              "
            >
              {description}
            </p>

          </div>


          


          {/* =================================================
              SUBTLE BOTTOM LINE
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              -bottom-6
              left-0
              right-0
              h-px
              bg-gradient-to-r
              from-[var(--foreground)]/25
              via-[var(--foreground)]/10
              to-transparent
            "
          />

        </div>


        {/* =====================================================
            PROCESS STEPS
        ===================================================== */}

        <div
          className="
            mt-14
            grid
            gap-8
            sm:mt-16
            md:grid-cols-2
            lg:grid-cols-4
            lg:gap-6
          "
        >

          {steps.map((step, index) => (

            <article
              key={step.number || index}
              className="group relative"
            >

              {/* =================================================
                  CONNECTOR LINE
              ================================================= */}

              {index !== steps.length - 1 && (
                <div
                  className="
                    pointer-events-none
                    absolute
                    left-9
                    right-[-24px]
                    top-9
                    hidden
                    h-px
                    bg-gradient-to-r
                    from-[var(--foreground)]/25
                    to-[var(--foreground)]/5
                    lg:block

                    dark:from-[var(--foreground)]/25
                    dark:to-[var(--foreground)]/5
                  "
                />
              )}


              {/* =================================================
                  STEP NUMBER
              ================================================= */}

              <div
                className="
                  relative
                  z-10
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-full

                  border-[5px]
                  border-[var(--background)]

                  bg-[var(--foreground)]
                  text-base
                  font-black
                  text-[var(--background)]

                  shadow-[0_10px_30px_rgba(17,17,17,0.12)]

                  transition-all
                  duration-300

                  group-hover:-translate-y-1
                  group-hover:scale-105
                  group-hover:bg-[var(--foreground)]/90
                  group-hover:text-[var(--background)]
                  group-hover:shadow-[0_12px_35px_rgba(17,17,17,0.15)]

                  dark:border-[var(--background)]
                  dark:bg-[var(--foreground)]
                  dark:text-[var(--background)]

                  dark:shadow-[0_10px_30px_rgba(0,0,0,0.18)]

                  dark:group-hover:bg-[var(--foreground)]/90
                  dark:group-hover:text-[var(--background)]

                  sm:h-[72px]
                  sm:w-[72px]
                  sm:border-[6px]
                  sm:text-lg
                "
              >
                {step.number || index + 1}
              </div>


              {/* =================================================
                  STEP CARD
              ================================================= */}

              <div
                className="
                  mt-6
                  min-h-[220px]
                  rounded-[24px]

                  border
                  border-[var(--border)]

                  bg-[var(--surface-soft)]

                  p-6

                  transition-all
                  duration-300

                  group-hover:-translate-y-1
                  group-hover:border-[var(--foreground)]/35
                  group-hover:bg-[var(--background)]
                  group-hover:shadow-[0_20px_50px_rgba(17,17,17,0.08)]

                  dark:border-[var(--border)]
                  dark:bg-[var(--surface-soft)]

                  dark:group-hover:border-[var(--foreground)]/35
                  dark:group-hover:bg-[var(--surface)]
                  dark:group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.18)]

                  sm:mt-7
                  sm:min-h-[250px]
                  sm:rounded-[28px]
                  sm:p-7
                "
              >

                {/* =================================================
                    STEP LABEL
                ================================================= */}

                <div
                  className="
                    flex
                    items-center
                    justify-between
                  "
                >

                  <p
                    className="
                      text-[10px]
                      font-black
                      uppercase
                      tracking-[0.16em]
                      text-[var(--muted)]

                      dark:text-[var(--foreground)]/80

                      sm:text-xs
                    "
                  >
                    Step {String(index + 1).padStart(2, "0")}
                  </p>


                  {/* Small indicator */}

                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-[var(--foreground)]
                      opacity-70

                      dark:bg-[var(--foreground)]
                    "
                  />

                </div>


                {/* =================================================
                    TITLE
                ================================================= */}

                <h3
                  className="
                    mt-4
                    text-xl
                    font-black
                    tracking-[-0.035em]
                    text-[var(--foreground)]

                    dark:text-[var(--foreground)]

                    sm:mt-5
                    sm:text-2xl
                  "
                >
                  {step.title}
                </h3>


                {/* =================================================
                    DESCRIPTION
                ================================================= */}

                <p
                  className="
                    mt-4
                    text-sm
                    leading-7
                    text-[var(--foreground)]/70

                    dark:text-[var(--foreground)]/70

                    sm:text-base
                  "
                >
                  {step.description}
                </p>


                {/* =================================================
                    BOTTOM ACCENT
                ================================================= */}

                <div
                  className="
                    mt-6
                    h-[2px]
                    w-8
                    rounded-full
                    bg-[var(--foreground)]/50

                    transition-all
                    duration-300

                    group-hover:w-14
                    group-hover:bg-[var(--foreground)]

                    dark:bg-[var(--foreground)]/55
                    dark:group-hover:bg-[var(--foreground)]
                  "
                />

              </div>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}