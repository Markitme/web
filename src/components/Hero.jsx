"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import Button from "@/components/ui/Button";

/* =====================================================
   INLINE SVG ICONS
   No lucide-react dependency
===================================================== */

const SvgGithub = ({ color }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-[14px] w-[14px]"
  >
    <path
      d="M12 2C6.48 2 2 6.58 2 12.23C2 16.75 4.87 20.58 8.84 21.93C9.34 22.02 9.52 21.7 9.52 21.42V19.76C6.74 20.39 6.15 18.38 6.15 18.38C5.69 17.18 5.03 16.86 5.03 16.86C4.12 16.22 5.1 16.23 5.1 16.23C6.11 16.3 6.64 17.3 6.64 17.3C7.54 18.89 9 18.43 9.55 18.16C9.64 17.49 9.9 17.04 10.18 16.79C7.96 16.53 5.62 15.64 5.62 11.57C5.62 10.41 6.02 9.46 6.68 8.71C6.57 8.45 6.21 7.37 6.78 5.91C6.78 5.91 7.64 5.63 9.5 6.93C10.32 6.69 11.16 6.57 12 6.57C12.84 6.57 13.68 6.69 14.5 6.93C16.36 5.63 17.22 5.91 17.22 5.91C17.79 7.37 17.43 8.45 17.32 8.71C17.98 9.46 18.38 10.41 18.38 11.57C18.38 15.65 16.03 16.53 13.81 16.79C14.16 17.1 14.47 17.69 14.47 18.59V21.42C14.47 21.7 14.65 22.02 15.15 21.93C19.12 20.58 22 16.75 22 12.23C22 6.58 17.52 2 12 2Z"
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
   HERO ICON DATA
===================================================== */

const heroIcons = [
  {
    Icon: SvgGithub,
    color: "var(--color-gold)",
  },
  {
    Icon: SvgSearch,
    color: "var(--color-green)",
  },
  {
    Icon: SvgPalette,
    color: "var(--color-sand)",
  },
  {
    Icon: SvgCamera,
    color: "var(--color-gold)",
  },
  {
    Icon: SvgMegaphone,
    color: "var(--color-green)",
  },
];

/* =====================================================
   FALLING DIGITAL LINES
===================================================== */

const fallingLines = [
  {
    left: "16%",
    height: "110px",
    delay: 0,
    duration: 7,
  },
  {
    left: "34%",
    height: "150px",
    delay: 2.2,
    duration: 8,
  },
  {
    left: "52%",
    height: "90px",
    delay: 4.5,
    duration: 7,
  },
  {
    left: "70%",
    height: "170px",
    delay: 6.8,
    duration: 8.5,
  },
  {
    left: "86%",
    height: "100px",
    delay: 9.2,
    duration: 7.5,
  },
];

/* =====================================================
   TYPING HEADLINES
===================================================== */

const typingTexts = [
  "Build a brand people choose.",
  "Turn clicks into customers.",
  "Make your business stand out.",
  "Grow with better marketing.",
];

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  /* =====================================================
     TYPING EFFECT
  ===================================================== */

  useEffect(() => {
    const currentText = typingTexts[textIndex];

    let speed = isDeleting ? 45 : 75;

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
        setDisplayText((prev) => prev.slice(0, -1));
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
  }, [
    displayText,
    isDeleting,
    textIndex,
  ]);

  return (
    <section
      id="home"
      className="
        hero-section
        relative
        isolate
        min-h-[700px]
        overflow-hidden
        bg-[var(--color-cream)]
        dark:bg-[var(--color-deep)]
      "
    >

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* BASE COLOR */}

        <div
          className="
            absolute
            inset-0
            bg-[var(--color-cream)]
            dark:bg-[var(--color-deep)]
          "
        />

        {/* =================================================
            GLASS OVERLAY
        ================================================= */}

        <div
          className="
            absolute
            inset-0
            bg-white/[0.16]
            backdrop-blur-[2px]
            dark:bg-[var(--color-night)]/20
          "
        />

        {/* =================================================
            SAGE GLOW
        ================================================= */}

        <motion.div
          className="
            absolute
            -right-[12%]
            -top-[18%]
            h-[620px]
            w-[620px]
            rounded-full
            bg-[var(--color-green)]/20
            blur-3xl
          "
          animate={{
            scale: [1, 1.08, 1],
            x: [0, -25, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* =================================================
            GOLD GLOW
        ================================================= */}

        <motion.div
          className="
            absolute
            -left-[12%]
            top-[35%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[var(--color-gold)]/10
            blur-[120px]
          "
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.35, 0.6, 0.35],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* =================================================
            CENTER GLOW
        ================================================= */}

        <motion.div
          className="
            absolute
            left-1/2
            top-[48%]
            h-[420px]
            w-[650px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[var(--color-green)]/10
            blur-[130px]
            dark:bg-[var(--color-green)]/20
          "
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* =================================================
            WARM GLOW
        ================================================= */}

        <motion.div
          className="
            absolute
            bottom-[8%]
            right-[10%]
            h-[280px]
            w-[280px]
            rounded-full
            bg-[var(--color-sand)]/10
            blur-[100px]
          "
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* =================================================
            LIGHT GRID
        ================================================= */}

        <motion.div
          className="
            absolute
            inset-[-100px]
            opacity-[0.07]
            dark:hidden
          "
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(12,59,46,0.16) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(12,59,46,0.16) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "70px 70px",
          }}
          animate={{
            x: [0, 70],
            y: [0, 70],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* =================================================
            DARK GRID
        ================================================= */}

        <motion.div
          className="
            absolute
            inset-[-100px]
            hidden
            opacity-[0.06]
            dark:block
          "
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(241,243,237,0.12) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(241,243,237,0.12) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "70px 70px",
          }}
          animate={{
            x: [0, 70],
            y: [0, 70],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* =================================================
            MOVING LIGHT
        ================================================= */}

        <motion.div
          className="
            absolute
            inset-y-0
            left-[-35%]
            w-[35%]
            rotate-[15deg]
            bg-gradient-to-r
            from-transparent
            via-[var(--color-green)]/15
            to-transparent
            blur-2xl
          "
          animate={{
            x: ["0%", "420%"],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "easeInOut",
          }}
        />

        {/* =================================================
            FALLING DIGITAL LINES
        ================================================= */}

        <div className="absolute inset-0 overflow-hidden">

          {fallingLines.map(
            (line, index) => (
              <motion.div
                key={index}
                className="
                  absolute
                  top-[-180px]
                  w-px
                "
                style={{
                  left: line.left,
                  height: line.height,
                }}
                animate={{
                  y: ["0vh", "120vh"],
                  opacity: [
                    0,
                    0.25,
                    0.15,
                    0,
                  ],
                }}
                transition={{
                  duration: line.duration,
                  delay: line.delay,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "linear",
                }}
              >
                <div
                  className="
                    h-full
                    w-full
                    bg-gradient-to-b
                    from-transparent
                    via-[var(--color-green)]/70
                    to-transparent
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
                    bg-[var(--color-gold)]
                    opacity-80
                    shadow-[0_0_12px_var(--color-gold)]
                  "
                />
              </motion.div>
            )
          )}

        </div>

        {/* =================================================
            HORIZONTAL GOLD LIGHT
        ================================================= */}

        <motion.div
          className="
            absolute
            left-[-30%]
            top-[50%]
            h-px
            w-[160%]
            bg-gradient-to-r
            from-transparent
            via-[var(--color-gold)]/25
            to-transparent
          "
          animate={{
            x: ["-5%", "5%", "-5%"],
            opacity: [0.15, 0.4, 0.15],
          }}
          transition={{
            duration: 9,
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
            from-[var(--color-cream)]
            to-transparent
            dark:from-[var(--color-deep)]
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
              ANIMATED ICON CLUSTER
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
              sm:h-14
              sm:w-[220px]
            "
          >

            {heroIcons.map(
              ({ Icon, color }, index) => {

                /*
                  Much smaller spacing.

                  Positions:
                  -72
                  -36
                   0
                  +36
                  +72

                  Circle = 32px
                  Gap between circles = 4px

                  So there is NO excessive overlap.
                */

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
  border-[var(--color-deep)]/10
  bg-[var(--color-deep)]
  shadow-[0_6px_20px_rgba(12,59,46,0.18)]
  dark:border-[#B8D8B0]/20
  dark:bg-[#B8D8B0]
  dark:shadow-[0_6px_20px_rgba(0,0,0,0.25)]
"
                    initial={{
                      x: 0,
                      scale: 0.8,
                      opacity: 1,
                    }}
                    animate={{
                      x: [
                        0,
                        0,
                        positions[index],
                        positions[index],
                        positions[index],
                        0,
                        0,
                      ],

                      scale: [
                        0.8,
                        1,
                        1,
                        1,
                        1,
                        1,
                        0.8,
                      ],

                      /*
                        IMPORTANT:
                        opacity never goes to 0.
                        Icons will NOT disappear.
                      */

                      opacity: [
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                      ],
                    }}
                    transition={{
                      duration: 18,

                      times: [
                        0,
                        0.08,
                        0.20,
                        0.30,
                        0.70,
                        0.90,
                        1,
                      ],

                      delay: index * 0.05,

                      repeat: Infinity,

                      /*
                        After reaching the horizontal
                        position, stays there for around
                        10 seconds before returning.
                      */

                      repeatDelay: 0,

                      ease: "easeInOut",
                    }}
                  >
                    <Icon color={color} />
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
              y: 35,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              mx-auto
              max-w-5xl
              text-5xl
              font-black
              leading-[0.94]
              tracking-[-0.075em]
              text-[var(--color-deep)]
              sm:text-6xl
              md:text-7xl
              lg:text-[6.5rem]
              dark:text-[var(--color-cream)]
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
                bg-[var(--color-gold)]
                align-middle
              "
            />

          </motion.h1>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.25,
            }}
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-7
              text-[var(--color-deep)]/65
              sm:mt-6
              sm:text-lg
              sm:leading-8
              dark:text-[var(--color-cream)]/65
            "
          >
            We combine strategy, creative, technology, and performance marketing to turn attention into measurable growth.
          </motion.p>

          {/* =================================================
              BUTTONS
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.35,
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

            <button
              type="button"
              onClick={() => {
                window.dispatchEvent(
                  new Event("open-contact-modal")
                );
              }}
              className="
                inline-flex
                h-12
                min-w-[190px]
                items-center
                justify-center
                rounded-full
                bg-[var(--color-gold)]
                px-7
                text-sm
                font-bold
                text-[var(--color-deep)]
                shadow-[0_12px_35px_rgba(255,186,0,0.20)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#E9A900]
                hover:shadow-[0_18px_45px_rgba(255,186,0,0.30)]
                focus:outline-none
                focus:ring-2
                focus:ring-[var(--color-gold)]/40
              "
            >
              Start Your Project
            </button>

            <Button
              href="/services"
              variant="outline"
              className="
                inline-flex
                h-12
                min-w-[190px]
                items-center
                justify-center
                rounded-full
                border-[var(--color-deep)]/20
                bg-white/50
                px-7
                text-[var(--color-deep)]
                backdrop-blur-md
                hover:border-[var(--color-green)]
                hover:bg-[var(--color-green)]/10
                dark:border-[var(--color-cream)]/20
                dark:bg-[var(--color-cream)]/5
                dark:text-[var(--color-cream)]
                dark:hover:border-[var(--color-green)]
                dark:hover:bg-[var(--color-green)]/15
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
              duration: 0.8,
              delay: 0.65,
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
              text-[var(--color-deep)]/45
              dark:text-[var(--color-cream)]/40
            "
          >

            <span>Strategy</span>

            <span className="h-1 w-1 rounded-full bg-[var(--color-gold)]" />

            <span>Creative</span>

            <span className="h-1 w-1 rounded-full bg-[var(--color-green)]" />

            <span>Technology</span>

            <span className="h-1 w-1 rounded-full bg-[var(--color-sand)]" />

            <span>Performance</span>

          </motion.div>

          {/* =================================================
              SCROLL
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1,
              duration: 0.8,
            }}
            className="
              mx-auto
              mt-11
              flex
              flex-col
              items-center
              text-[var(--color-deep)]/40
              dark:text-[var(--color-cream)]/40
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
                y: [0, 7, 0],
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
                  from-[var(--color-gold)]
                  to-[var(--color-deep)]/20
                  dark:to-[var(--color-cream)]/20
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
                  border-[var(--color-gold)]
                "
              />

            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}