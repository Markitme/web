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
    <section className="overflow-hidden border-y border-black/10 bg-white py-10 dark:border-white/10 dark:bg-[#0a0a0a] sm:py-12 lg:py-14">
      {/* Fixed container on large / extra-large screens */}
      <div className="mx-auto w-full max-w-[1600px] overflow-hidden">
        {/* Heading */}
        <div className="px-5 text-center sm:px-8">
          <p className="text-[8px] font-black uppercase tracking-[0.22em] text-[#8db800] dark:text-[#a7d503] sm:text-[9px]">
            Trusted by ambitious brands
          </p>

          <h2 className="mt-3 text-2xl font-black tracking-[-0.04em] text-black dark:text-white sm:mt-4 sm:text-4xl">
            Building growth together.
          </h2>
        </div>

        {/* Logo viewport */}
        <div className="relative mt-8 w-full overflow-hidden sm:mt-10">
          {/* Left fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-12 bg-gradient-to-r from-white to-transparent dark:from-[#0a0a0a] sm:w-20 lg:w-28" />

          {/* Right fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-12 bg-gradient-to-l from-white to-transparent dark:from-[#0a0a0a] sm:w-20 lg:w-28" />

          {/* Moving track */}
          <div className="client-logo-track flex w-max items-center gap-3 sm:gap-4 lg:gap-5">
            {duplicatedLogos.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="group flex h-[70px] w-[145px] shrink-0 items-center justify-center rounded-xl border border-black/10 bg-white px-5 transition-all duration-300 hover:border-black/20 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20 sm:h-[76px] sm:w-[170px] sm:rounded-2xl lg:h-[82px] lg:w-[185px]"
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
                    brightness-0
                    grayscale
                    transition-all
                    duration-300

                    dark:brightness-0
                    dark:invert

                    group-hover:brightness-100
                    group-hover:grayscale-0
                    group-hover:invert-0
                    group-hover:filter-none

                    sm:max-h-[42px]
                    sm:max-w-[145px]
                  "
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee Animation */}
      <style jsx>{`
        .client-logo-track {
          animation: client-marquee 28s linear infinite;
        }

        .client-logo-track:hover {
          animation-play-state: paused;
        }

        @keyframes client-marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(calc(-50% - 10px));
          }
        }

        @media (max-width: 640px) {
          .client-logo-track {
            animation-duration: 24s;
          }
        }

        @media (min-width: 1536px) {
          .client-logo-track {
            animation-duration: 32s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .client-logo-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}