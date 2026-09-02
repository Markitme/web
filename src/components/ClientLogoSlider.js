"use client";

import Image from "next/image";
import SectionHeading from "./SectionHeading";

const clientLogos = [
  {
    name: "Navira Settlements",
    logo: "/images/clients/navira.webp",
  },
  {
    name: "Harmony Rehab",
    logo: "/images/clients/harmony.png",
  },
  {
    name: "Medtrion",
    logo: "/images/clients/medtrion.png",
  },
  {
    name: "Joincrescendo",
    logo: "/images/clients/Joincrescendo.png",
  },
  {
    name: "Infinite Real Estate",
    logo: "/images/clients/infinite.png",
  },
  {
    name: "New Construction",
    logo: "/images/clients/new-const.webp",
  },
];

export default function ClientLogoSlider() {
  const marqueeLogos = [...clientLogos, ...clientLogos];

  return (
    <section
      className="
        relative
        overflow-hidden

        border-y
        border-[var(--border)]

        bg-[var(--surface-soft)]

        py-14

        transition-colors
        duration-500

        dark:border-[var(--border)]
        dark:bg-[var(--surface)]

        sm:py-16
        lg:py-20
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Green glow */}

        <div
          className="
            absolute
            -left-40
            top-1/2

            h-[420px]
            w-[420px]

            -translate-y-1/2

            rounded-full

            bg-[var(--color-gray-light)]/[0.10]

            blur-[120px]

            dark:bg-[var(--color-white-soft)]/[0.045]
          "
        />

        {/* Secondary glow */}

        <div
          className="
            absolute
            -right-40
            top-1/3

            h-[380px]
            w-[380px]

            rounded-full

            bg-[var(--color-black)]/[0.04]

            blur-[120px]

            dark:bg-[var(--color-white)]/[0.025]
          "
        />

        {/* Center glow */}

        <div
          className="
            absolute
            left-1/2
            top-1/2

            h-[260px]
            w-[700px]

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            bg-[var(--color-gray-light)]/[0.04]

            blur-[120px]

            dark:bg-[var(--color-white)]/[0.015]
          "
        />
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10

          mx-auto
          w-full

          max-w-[1600px]
        "
      >
        {/*  HEADING */}

        <div className="px-5 text-center sm:px-8">
          {/* Eyebrow */}

          <div
            className="
              mb-3

              inline-flex
              items-center
              gap-2
            "
          >
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

                tracking-[0.24em]

                text-[var(--color-green)]

                sm:text-[9px]

                dark:text-[var(--color-gold)]
              "
            >
              Trusted by ambitious brands
            </p>

            <span
              className="
                h-1.5
                w-1.5

                rounded-full

                bg-[var(--color-green)]
              "
            />
          </div>

          {/* Heading */}

          <SectionHeading className="mx-auto text-center">
            Building growth{" "}
            <span
              className="
                text-[var(--color-green)]

                dark:text-[var(--color-gold)]
              "
            >
              together.
            </span>
          </SectionHeading>

          {/* Description */}

          <p
            className="
              mx-auto

              mt-3

              max-w-xl

              text-xs
              leading-6

              text-[var(--color-deep)]/50

              sm:text-sm

              dark:text-[var(--color-cream)]/50
            "
          >
            Trusted partnerships that turn ideas, strategy, and creativity into
            measurable digital growth.
          </p>
        </div>

        {/* =================================================
            LOGO MARQUEE
        ================================================== */}

        <div
          className="
            relative

            mt-10

            sm:mt-12

            lg:mt-14
          "
        >


          {/* =================================================
              MARQUEE VIEWPORT
          ================================================== */}

          <div
            className="
              client-logo-marquee

              relative

              overflow-hidden

              px-4

              sm:px-6

              lg:px-8
            "
          >
            {/* TRACK */}

            <div className="client-logo-track">
              {marqueeLogos.map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="
                    client-logo-item

                    group

                    relative

                    flex
                    h-[88px]

                    w-[150px]

                    shrink-0

                    items-center
                    justify-center

                    overflow-hidden

                    rounded-[22px]

                    border
                    border-[var(--color-deep)]/[0.08]

                    bg-white/65

                    px-5

                    backdrop-blur-sm

                    shadow-[0_10px_35px_rgba(12,59,46,0.045)]

                    transition-all
                    duration-500

                    hover:-translate-y-1

                    hover:border-[var(--color-green)]/40

                    hover:bg-white

                    hover:shadow-[0_20px_50px_rgba(12,59,46,0.10)]

                    dark:border-[var(--color-cream)]/[0.09]

                    dark:bg-[var(--color-cream)]/[0.04]

                    dark:hover:border-[var(--color-gold)]/40

                    dark:hover:bg-[var(--color-cream)]/[0.075]

                    dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.18)]

                    sm:h-[96px]

                    sm:w-[180px]

                    sm:rounded-[24px]

                    lg:h-[105px]

                    lg:w-[200px]
                  "
                >

                  {/* INNER GLOW */}

                  <span
                    className="
                      pointer-events-none

                      absolute
                      inset-0

                      rounded-[22px]

                      bg-[var(--color-green)]/[20%]


                      transition-opacity
                      duration-500

                      group-hover:opacity-100
                    "
                  />

                  {/* LOGO */}

                  <div
                    className="
                      relative
                      z-10

                      flex
                      h-full
                      w-full

                      items-center
                      justify-center

                      transition-transform
                      duration-500

                      group-hover:scale-[1.05]
                    "
                  >
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={160}
                      height={60}
                      className="
                        h-auto

                        max-h-[42px]

                        w-auto

                        max-w-[135px]

                        object-contain

                        grayscale

                        opacity-60

                        transition-all
                        duration-500

                        group-hover:grayscale-0

                        group-hover:opacity-100

                        sm:max-h-[46px]

                        sm:max-w-[150px]

                        lg:max-h-[50px]

                        lg:max-w-[165px]

                        dark:brightness-0

                        dark:invert

                        dark:opacity-65

                        dark:group-hover:brightness-500

                        dark:group-hover:invert-0

                        dark:group-hover:opacity-100
                      "
                    />
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}