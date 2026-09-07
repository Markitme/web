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
        border-[var(--accent)]/25

        bg-white

        py-14

        transition-colors
        duration-500

        sm:py-16
        lg:py-20
      "
    >
      {/*           BACKGROUND
       */}

      <div className="pointer-events-none absolute inset-0 hidden overflow-hidden">
        <div
          className="
            absolute
            -left-40
            top-1/2

            h-[420px]
            w-[420px]

            -translate-y-1/2

            rounded-full

            bg-[var(--purple-soft)]

            blur-[120px]
          "
        />

        <div
          className="
            absolute
            -right-40
            top-1/3

            h-[380px]
            w-[380px]

            rounded-full

            bg-[var(--accent)]/[0.06]

            blur-[120px]
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

            bg-[var(--accent)]/[0.04]

            blur-[120px]
          "
        />
      </div>

      {/*           CONTENT
       */}

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

            <p
              className="
                text-[8px]

                font-black
                uppercase

                tracking-[0.24em]

                text-[var(--accent)]

                sm:text-[9px]
              "
            >
              Trusted by ambitious brands
            </p>

          </div>

          {/* Heading */}

          <SectionHeading className="client-logo-heading mx-auto text-center">
            Building growth{" "}
            <span
              className="
                text-[var(--accent)]
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

              text-black/60

              sm:text-sm

            "
          >
            Trusted partnerships that turn ideas, strategy, and creativity into
            measurable digital growth.
          </p>
        </div>

        {/*             LOGO MARQUEE
         */}

        <div
          className="
            relative

            mt-10

            sm:mt-12

            lg:mt-14
          "
        >
          {/*               MARQUEE VIEWPORT
           */}

          <div
            className="
              client-logo-marquee

              relative

              overflow-hidden

              px-4 py-4

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
                    h-[100px]

                    w-[150px]

                    shrink-0

                    items-center
                    justify-center

                    overflow-hidden

                    rounded-[22px]

                    border
                    border-[var(--accent)]/45

                    bg-white

                    px-5

                    backdrop-blur-sm

                    

                    transition-all
                    duration-500

                    hover:-translate-y-1

                    hover:border-[var(--accent-bright)]

                    hover:bg-white


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

                      bg-[var(--accent)]/[20%]

                      opacity-0

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

                        brightness-0
                        opacity-75

                        transition-all
                        duration-500

                        group-hover:opacity-100

                        sm:max-h-[46px]

                        sm:max-w-[150px]

                        lg:max-h-[50px]

                        lg:max-w-[165px]

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
