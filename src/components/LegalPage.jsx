import SectionHeading from "@/components/SectionHeading";

export default function LegalPage({
  eyebrow,
  title,
  description,
  updatedDate,
  children,
}) {
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

          dark:border-[var(--color-purple)]/20
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

            bg-[var(--color-purple)]/10

            blur-3xl
          "
        />

        <div
          className="
            container-custom
            relative

            px-5

            py-14
            sm:py-16
            lg:py-20
          "
        >
          <div className="max-w-3xl">
            <SectionHeading
              eyebrow={eyebrow}
              description={description}
            >
              {title}
            </SectionHeading>

            {updatedDate && (
              <div
                className="
                  mt-6
                  inline-flex
                  items-center

                  rounded-full

                  border
                  border-[var(--color-purple)]/15

                  bg-[var(--color-soft)]

                  px-4
                  py-2

                  dark:border-[var(--color-purple)]/20
                  dark:bg-[var(--color-deep-surface)]
                "
              >
                <span
                  className="
                    mr-2
                    h-1.5
                    w-1.5
                    rounded-full

                    bg-[var(--color-light-purple)]
                  "
                />

                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.12em]

                    text-[var(--color-deep)]/55

                    dark:text-[var(--color-cream)]/55
                  "
                >
                  Last Updated: {updatedDate}
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          LEGAL CONTENT
      ===================================================== */}

      <section
        className="
          bg-[var(--color-cream)]

          px-5
          py-12

          sm:py-16
          lg:py-20

          dark:bg-[var(--color-night)]
        "
      >
        <div className="container-custom">
          <div
  className="
    mx-auto
    max-w-4xl

    rounded-[24px]

    border
    border-[var(--color-deep)]/10

    bg-white

    p-6

    shadow-[0_15px_50px_rgba(12,59,46,0.05)]

    sm:rounded-[28px]
    sm:p-8

    lg:p-10
    xl:p-12

    dark:border-[var(--color-purple)]/20
    dark:bg-[var(--color-deep)]
    dark:shadow-[0_15px_50px_rgba(0,0,0,0.12)]
  "
>
            <div
              className="
                legal-content

                text-[13px]
                leading-7

                text-[var(--color-deep)]/65

                dark:text-[var(--color-cream)]/65
              "
            >
              {children}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}