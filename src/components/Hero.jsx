
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import Button from "@/components/ui/Button";

/* =====================================================
   INLINE SVG ICONS
===================================================== */

const SvgDevelopment = ({ color }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-[14px] w-[14px]"
  >
    <path
      d="M8.5 5.5L2.5 12L8.5 18.5L10 17L5.4 12L10 7L8.5 5.5ZM15.5 5.5L14 7L18.6 12L14 17L15.5 18.5L21.5 12L15.5 5.5ZM13.2 3L10.8 21H13.2L15.6 3H13.2Z"
      fill={color}
    />
  </svg>
);

const SvgSearch = ({ color }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-[14px] w-[14px]"
  >
    <circle
      cx="11"
      cy="11"
      r="6.5"
      stroke={color}
      strokeWidth="2"
    />

    <path
      d="M16 16L21 21"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const SvgPalette = ({ color }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-[14px] w-[14px]"
  >
    <path
      d="M12 3C7.03 3 3 6.58 3 11C3 15.42 6.13 19 10 19H11.2C12.05 19 12.5 19.54 12.5 20.2C12.5 21.2 13.2 22 14.2 22C18.55 22 21 17.99 21 13C21 7.48 17.19 3 12 3Z"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <circle cx="7.5" cy="10" r="1" fill={color} />
    <circle cx="10" cy="7" r="1" fill={color} />
    <circle cx="14" cy="7" r="1" fill={color} />
    <circle cx="17" cy="10" r="1" fill={color} />
  </svg>
);

const SvgCamera = ({ color }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-[14px] w-[14px]"
  >
    <path
      d="M4 7.5H7L8.5 5H15.5L17 7.5H20C20.55 7.5 21 7.95 21 8.5V18.5C21 19.05 20.55 19.5 20 19.5H4C3.45 19.5 3 19.05 3 18.5V8.5C3 7.95 3.45 7.5 4 7.5Z"
      stroke={color}
      strokeWidth="1.8"
      strokeLinejoin="round"
    />

    <circle
      cx="12"
      cy="13.5"
      r="3.2"
      stroke={color}
      strokeWidth="1.8"
    />
  </svg>
);

const SvgMegaphone = ({ color }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-[14px] w-[14px]"
  >
    <path
      d="M4 13V10C4 9.45 4.45 9 5 9H8L17 5V19L8 15H5C4.45 15 4 14.55 4 14V13Z"
      stroke={color}
      strokeWidth="1.8"
      strokeLinejoin="round"
    />

    <path
      d="M8 15L9.5 20H12L11 16"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M19 9C20 10 20 14 19 15"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

/* =====================================================
   HERO DATA
===================================================== */

const heroIcons = [
  {
    Icon: SvgDevelopment,
  },
  {
    Icon: SvgSearch,
  },
  {
    Icon: SvgPalette,
  },
  {
    Icon: SvgCamera,
  },
  {
    Icon: SvgMegaphone,
  },
];

const fallingLines = [
  {
    left: "16%",
    height: "110px",
    delay: 0,
    duration: 8,
  },
  {
    left: "34%",
    height: "150px",
    delay: 2,
    duration: 9,
  },
  {
    left: "52%",
    height: "90px",
    delay: 4,
    duration: 8,
  },
  {
    left: "70%",
    height: "170px",
    delay: 6,
    duration: 9,
  },
  {
    left: "86%",
    height: "100px",
    delay: 8,
    duration: 8,
  },
];

const typingTexts = [
  "Build a brand people choose.",
  "Turn clicks into customers.",
  "Make your business stand out.",
  "Grow with better marketing.",
];

/* =====================================================
   HERO
===================================================== */

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  /* =====================================================
     TYPING EFFECT
  ===================================================== */

  useEffect(() => {
    const currentText = typingTexts[textIndex];

    let speed = isDeleting ? 40 : 70;

    if (!isDeleting && displayText === currentText) {
      speed = 1800;
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);

      setTextIndex(
        (prev) => (prev + 1) % typingTexts.length
      );

      return;
    }

    const timer = setTimeout(() => {
      if (isDeleting) {
        setDisplayText((prev) =>
          prev.slice(0, -1)
        );
      } else {
        setDisplayText(
          currentText.slice(
            0,
            displayText.length + 1
          )
        );
      }

      if (
        !isDeleting &&
        displayText === currentText
      ) {
        setIsDeleting(true);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex]);

  return (
    <section
      id="home"
      className="
        hero-section
        relative
        isolate
        min-h-[700px]
        overflow-hidden

        bg-[var(--color-white)]
        text-[var(--color-black)]

        dark:bg-[var(--color-black)]
        dark:text-[var(--color-white)]
      "
    >

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* -------------------------------------------------
            MAIN IMAGE

            Visible in BOTH light and dark modes
        ------------------------------------------------- */}

        <div
          className="
            absolute
            inset-0

            bg-cover
            bg-center
            bg-no-repeat

            opacity-[0.24]

            dark:opacity-[0.32]
          "
          style={{
            backgroundImage:
              "url('https://cms.markitme.ca/wp-content/uploads/2026/08/home-scaled.jpeg')",
          }}
        />

        {/* -------------------------------------------------
            IMAGE READABILITY OVERLAY
        ------------------------------------------------- */}

        <div
          className="
            absolute
            inset-0

            bg-[var(--color-white)]/65

            dark:bg-[var(--color-black)]/58
          "
        />

        {/* -------------------------------------------------
            SOFT MONOCHROME GLOW
        ------------------------------------------------- */}

        <div
          className="
            absolute
            -right-40
            -top-40
            h-[500px]
            w-[500px]
            rounded-full

            bg-[var(--color-black)]/[0.06]

            blur-[100px]

            dark:bg-[var(--color-white)]/[0.08]
          "
        />

        <div
          className="
            absolute
            -left-40
            top-[35%]
            h-[360px]
            w-[360px]
            rounded-full

            bg-[var(--color-black)]/[0.045]

            blur-[90px]

            dark:bg-[var(--color-white)]/[0.055]
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-1/2

            h-[420px]
            w-[600px]

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            bg-[var(--color-white)]/[0.35]

            blur-[110px]

            dark:bg-[var(--color-black)]/[0.35]
          "
        />

        {/* -------------------------------------------------
            CENTER READABILITY
        ------------------------------------------------- */}

        <div
          className="
            absolute
            left-1/2
            top-1/2

            h-[620px]
            w-[900px]

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            bg-[var(--color-white)]/[0.58]

            blur-[90px]

            dark:bg-[var(--color-black)]/[0.58]
          "
        />

        {/* =================================================
            STATIC GRID
        ================================================= */}

        <div
          className="
            absolute
            inset-0

            opacity-[0.07]

            dark:opacity-[0.08]
          "
          style={{
            backgroundImage: `
              linear-gradient(
                var(--color-black) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                var(--color-black) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "70px 70px",
          }}
        />

        {/* =================================================
            DARK MODE GRID
        ================================================= */}

        <div
          className="
            absolute
            inset-0

            hidden

            opacity-[0.055]

            dark:block
          "
          style={{
            backgroundImage: `
              linear-gradient(
                var(--color-white) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                var(--color-white) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "70px 70px",
          }}
        />

        {/* =================================================
            FALLING DIGITAL LINES
        ================================================= */}

        <div className="absolute inset-0 overflow-hidden">

          {fallingLines.map((line, index) => (
            <motion.div
              key={index}
              className="
                absolute
                top-[-180px]
                w-px
                will-change-transform
              "
              style={{
                left: line.left,
                height: line.height,
              }}
              animate={{
                y: ["0vh", "120vh"],
                opacity: [
                  0,
                  0.18,
                  0.08,
                  0,
                ],
              }}
              transition={{
                duration: line.duration,
                delay: line.delay,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "linear",
              }}
            >
              <div
                className="
                  h-full
                  w-full

                  bg-gradient-to-b
                  from-transparent
                  via-[var(--color-black)]/45
                  to-transparent

                  dark:via-[var(--color-white)]/45
                "
              />

              <div
                className="
                  absolute
                  bottom-0
                  left-1/2

                  h-1
                  w-1

                  -translate-x-1/2

                  rounded-full

                  bg-[var(--color-black)]

                  opacity-70

                  dark:bg-[var(--color-white)]
                "
              />
            </motion.div>
          ))}

        </div>

        {/* =================================================
            HORIZONTAL LIGHT
        ================================================= */}

        <motion.div
          className="
            absolute
            left-[-30%]
            top-1/2

            h-px
            w-[160%]

            bg-gradient-to-r
            from-transparent
            via-[var(--color-black)]/20
            to-transparent

            dark:via-[var(--color-white)]/20

            will-change-transform
          "
          animate={{
            x: ["-3%", "3%", "-3%"],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* =================================================
            BOTTOM FADE
        ================================================= */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-40

            bg-gradient-to-t
            from-[var(--color-white)]
            to-transparent

            dark:from-[var(--color-black)]
          "
        />

      </div>

      {/* =====================================================
          HERO CONTENT
      ===================================================== */}

      <div
        className="
          container-custom
          relative
          z-10

          flex
          min-h-[700px]

          items-center
          justify-center

          px-5
          py-24
        "
      >

        <div
          className="
            mx-auto
            w-full
            max-w-5xl
            text-center
          "
        >

          {/* =================================================
              ICON CLUSTER
          ================================================= */}

          <div
            className="
              relative
              mx-auto
              mb-8

              flex
              h-12
              w-[210px]

              items-center
              justify-center
            "
          >

            {heroIcons.map(
              ({ Icon }, index) => {
                const positions = [
                  -57.6,
                  -28.8,
                  0,
                  28.8,
                  57.6,
                ];

                return (
                  <motion.div
                    key={index}
                    className="
                      absolute
                      z-10

                      flex
                      h-10
                      w-10

                      items-center
                      justify-center

                      rounded-full

                      border
                      border-[var(--color-black)]/15

                      bg-[var(--color-white)]

                      shadow-[0_6px_20px_rgba(0,0,0,0.10)]

                      dark:border-[var(--color-white)]/20
                      dark:bg-[var(--color-black)]
                      dark:shadow-[0_6px_22px_rgba(255,255,255,0.06)]

                      will-change-transform
                    "
                    initial={{
                      x: 0,
                      scale: 0.85,
                    }}
                    animate={{
                      x: [
                        0,
                        positions[index],
                        positions[index],
                        0,
                      ],
                      scale: [
                        0.85,
                        1,
                        1,
                        0.85,
                      ],
                    }}
                    transition={{
                      duration: 16,
                      times: [0, 0.2, 0.8, 1],
                      delay: index * 0.08,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Icon
                      color="var(--color-black)"
                    />

                    <span className="hidden dark:block">
                      <Icon
                        color="var(--color-white)"
                      />
                    </span>
                  </motion.div>
                );
              }
            )}

          </div>

          {/* =================================================
              TYPING HEADING
          ================================================= */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.05,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              mx-auto
              max-w-5xl

              text-5xl
              font-black

              leading-[0.94]
              tracking-[-0.075em]

              text-[var(--color-black)]

              sm:text-6xl
              md:text-7xl

              capitalize

              sm:leading-[0.92]
              md:leading-[0.9]

              lg:text-[6.5rem]

              dark:text-[var(--color-white)]
            "
          >
            {displayText}

            <motion.span
              animate={{
                opacity: [1, 0, 1],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                ml-1
                inline-block

                h-[0.8em]
                w-[3px]

                translate-y-[0.05em]

                rounded-full

                bg-[var(--color-black)]

                align-middle

                dark:bg-[var(--color-white)]
              "
            />
          </motion.h1>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="
              mx-auto
              mt-5
              max-w-2xl

              text-base
              leading-7

              text-[var(--color-black)]/65

              sm:mt-6
              sm:text-lg
              sm:leading-8

              dark:text-[var(--color-white)]/65
            "
          >
            We combine strategy, creative, technology,
            and performance marketing to turn attention
            into measurable growth.
          </motion.p>

          {/* =================================================
              BUTTONS
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
            className="
              mt-9

              flex
              flex-col
              items-center
              justify-center

              gap-3

              sm:flex-row
            "
          >

            <Button
              type="button"
              href="/contact"
              variant="primary"
              className="
                inline-flex
                h-12
                min-w-[190px]

                cursor-pointer

                items-center
                justify-center

                rounded-full

                px-7

                text-sm
                font-bold

                transition-all
                duration-300

                hover:-translate-y-1
              "
            >
              Start Your Project
            </Button>

            <Button
              href="/services"
              variant="outline"
              className="
                inline-flex
                h-12
                min-w-[190px]

                cursor-pointer

                items-center
                justify-center

                rounded-full

                px-7

                text-sm
                font-bold

                backdrop-blur-md

                transition-all
                duration-300

                border-[var(--color-black)]/20
                bg-[var(--color-white)]/55
                text-[var(--color-black)]

                hover:border-[var(--color-black)]
                hover:bg-[var(--color-black)]/10

                dark:border-[var(--color-white)]/20
                dark:bg-[var(--color-black)]/55
                dark:text-[var(--color-white)]

                dark:hover:border-[var(--color-white)]
                dark:hover:bg-[var(--color-white)]/10
              "
            >
              Start Your Growth
            </Button>

          </motion.div>

          {/* =================================================
              KEYWORDS
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.7,
              delay: 0.55,
            }}
            className="
              mx-auto
              mt-11

              flex
              flex-wrap

              items-center
              justify-center

              gap-x-6
              gap-y-3

              text-[10px]
              font-semibold

              uppercase
              tracking-[0.2em]

              text-[var(--color-black)]/45

              dark:text-[var(--color-white)]/45
            "
          >

            <span>Strategy</span>

            <span
              className="
                h-1
                w-1
                rounded-full

                bg-[var(--color-black)]

                dark:bg-[var(--color-white)]
              "
            />

            <span>Creative</span>

            <span
              className="
                h-1
                w-1
                rounded-full

                bg-[var(--color-black)]

                dark:bg-[var(--color-white)]
              "
            />

            <span>Technology</span>

            <span
              className="
                h-1
                w-1
                rounded-full

                bg-[var(--color-black)]

                dark:bg-[var(--color-white)]
              "
            />

            <span>Performance</span>

          </motion.div>

          {/* =================================================
              SCROLL
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 8,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.9,
              duration: 0.6,
            }}
            className="
              mx-auto
              mt-11

              flex
              flex-col
              items-center

              text-[var(--color-black)]/40

              dark:text-[var(--color-white)]/40
            "
          >

            <span
              className="
                text-[9px]
                font-medium
                uppercase
                tracking-[0.25em]
              "
            >
              Scroll to explore
            </span>

            <motion.div
              animate={{
                y: [0, 6, 0],
                opacity: [0.45, 1, 0.45],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                mt-3

                flex
                flex-col
                items-center
              "
            >

              <span
                className="
                  h-6
                  w-px

                  bg-gradient-to-b

                  from-[var(--color-black)]
                  to-[var(--color-black)]/20

                  dark:from-[var(--color-white)]
                  dark:to-[var(--color-white)]/20
                "
              />

              <span
                className="
                  -mt-[3px]

                  h-2
                  w-2

                  rotate-45

                  border-b
                  border-r

                  border-[var(--color-black)]

                  dark:border-[var(--color-white)]
                "
              />

            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
