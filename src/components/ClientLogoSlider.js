"use client";

import Image from "next/image";

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
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <section
      className="
        client-logo-section
        relative
        overflow-hidden

        border-y
        border-[#0C3B2E]/[0.08]

        py-14
        sm:py-16
        lg:py-20

        transition-colors
        duration-500

        dark:border-[#F1F3ED]/[0.08]
      "
    >
      {/* =========================================
          BACKGROUND DECORATION
      ========================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        {/* Top soft glow */}
        <div
          className="
            absolute
            -left-32
            -top-40
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#6D9773]/[0.08]
            blur-[100px]

            dark:bg-[#FFBA00]/[0.035]
          "
        />

        {/* Bottom soft glow */}
        <div
          className="
            absolute
            -bottom-40
            -right-32
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#BB8A52]/[0.07]
            blur-[100px]

            dark:bg-[#6D9773]/[0.06]
          "
        />

        {/* Center subtle glow */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[300px]
            w-[600px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#6D9773]/[0.035]
            blur-[120px]

            dark:bg-[#F1F3ED]/[0.02]
          "
        />
      </div>

      {/* =========================================
          TOP DECORATIVE LINE
      ========================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-px
          w-24
          -translate-x-1/2

          bg-[#FFBA00]

          sm:w-32
        "
      />

      {/* =========================================
          MAIN CONTAINER
      ========================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1600px]
        "
      >
        {/* =========================================
            HEADING
        ========================================== */}

        <div
          className="
            px-5
            text-center

            sm:px-8
          "
        >
          {/* Eyebrow */}

          <div
            className="
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
                bg-[#FFBA00]
              "
            />

            <p
              className="
                text-[8px]
                font-black
                uppercase
                tracking-[0.24em]

                text-[#6D9773]

                sm:text-[9px]

                dark:text-[#FFBA00]
              "
            >
              Trusted by ambitious brands
            </p>

            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#6D9773]
              "
            />
          </div>

          {/* Heading */}

          <h2
            className="
              mt-4

              text-2xl
              font-black
              leading-tight
              tracking-[-0.045em]

              text-[#0C3B2E]

              sm:mt-5
              sm:text-4xl

              dark:text-[#F1F3ED]
            "
          >
            Building growth{" "}
            <span
              className="
                text-[#6D9773]
                dark:text-[#FFBA00]
              "
            >
              together.
            </span>
          </h2>

          {/* Supporting text */}

          <p
            className="
              mx-auto
              mt-3
              max-w-xl

              text-xs
              leading-6

              text-[#0C3B2E]/50

              sm:text-sm

              dark:text-[#F1F3ED]/50
            "
          >
            Trusted partnerships that turn ideas, strategy, and creativity
            into measurable digital growth.
          </p>
        </div>

        {/* =========================================
            LOGO VIEWPORT
        ========================================== */}

        <div
          className="
            relative
            mt-9
            w-full

            overflow-hidden

            px-0
            py-5

            sm:mt-11
            sm:py-6

            lg:py-7
          "
        >

          {/* =========================================
              MOVING TRACK
          ========================================== */}

          <div
            className="
              client-logo-track
              flex
              w-max
              items-center
              gap-3

              px-2

              sm:gap-4
              sm:px-4

              lg:gap-5
              lg:px-6
            "
          >
            {duplicatedLogos.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="
                  client-logo-card
                  group
                  relative

                  flex
                  h-[76px]
                  w-[148px]
                  shrink-0
                  items-center
                  justify-center

                  overflow-hidden

                  rounded-2xl

                  border
                  border-[#0C3B2E]/[0.09]

                  bg-white/75

                  px-5

                  shadow-[0_8px_30px_rgba(12,59,46,0.045)]

                  transition-all
                  duration-500
                  ease-out

                  hover:-translate-y-1
                  hover:scale-[1.015]

                  hover:border-[#6D9773]/45
                  hover:bg-white

                  hover:shadow-[0_18px_45px_rgba(12,59,46,0.09)]

                  sm:h-[82px]
                  sm:w-[172px]

                  lg:h-[88px]
                  lg:w-[188px]

                  dark:border-[#F1F3ED]/[0.10]
                  dark:bg-[#F1F3ED]/[0.045]

                  dark:hover:border-[#FFBA00]/35
                  dark:hover:bg-[#F1F3ED]/[0.075]

                  dark:hover:shadow-[0_18px_45px_rgba(0,0,0,0.16)]
                "
              >
                {/* =========================================
                    TOP ACCENT
                ========================================== */}

                <span
                  className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-0

                    h-[2px]
                    w-0

                    -translate-x-1/2

                    rounded-full

                    bg-[#FFBA00]

                    opacity-0

                    transition-all
                    duration-500
                    ease-out

                    group-hover:w-12
                    group-hover:opacity-100
                  "
                />

                {/* =========================================
                    INNER GLOW
                ========================================== */}

                <span
                  className="
                    pointer-events-none
                    absolute
                    inset-0

                    rounded-2xl

                    bg-gradient-to-br
                    from-[#6D9773]/[0.04]
                    via-transparent
                    to-[#FFBA00]/[0.035]

                    opacity-0

                    transition-opacity
                    duration-500

                    group-hover:opacity-100
                  "
                />

                {/* =========================================
                    LOGO
                ========================================== */}

                <div
                  className="
                    relative
                    z-10

                    flex
                    items-center
                    justify-center

                    transition-all
                    duration-500
                    ease-out

                    group-hover:-translate-y-0.5
                  "
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={150}
                    height={55}
                    className="
                      h-auto
                      max-h-[38px]
                      w-auto
                      max-w-[125px]

                      object-contain

                      grayscale
                      opacity-55

                      transition-all
                      duration-500
                      ease-out

                      group-hover:scale-[1.04]
                      group-hover:grayscale-0
                      group-hover:opacity-100

                      sm:max-h-[42px]
                      sm:max-w-[145px]

                      dark:brightness-0
                      dark:invert
                      dark:opacity-60

                      dark:group-hover:brightness-100
                      dark:group-hover:invert-0
                      dark:group-hover:opacity-100
                    "
                  />
                </div>

                {/* =========================================
                    BOTTOM ACCENT
                ========================================== */}

                <span
                  className="
                    pointer-events-none
                    absolute
                    bottom-0
                    left-1/2

                    h-px
                    w-0

                    -translate-x-1/2

                    bg-[#6D9773]/50

                    transition-all
                    duration-500

                    group-hover:w-8

                    dark:bg-[#FFBA00]/50
                  "
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================
          BOTTOM DECORATIVE ELEMENT
      ========================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          h-px
          w-16
          -translate-x-1/2

          bg-[#6D9773]/40

          sm:w-24

          dark:bg-[#FFBA00]/30
        "
      />
    </section>
  );
}