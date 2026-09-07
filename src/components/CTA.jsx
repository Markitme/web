"use client";

import { motion } from "framer-motion";
import Button from "./ui/Button";

export default function CTA({
  eyebrow = "Ready when you are",
  title = "Let's make your next move matter.",
  description = "Tell us where your business is today and where you want it to go. We will help build the path between them.",
  buttonText = "Book a Free Consultation",
  buttonHref = "#",
  className = "",
}) {
  const handleCTA = (e) => {
    e.preventDefault();

    window.dispatchEvent(new Event("open-contact-modal"));
  };

  return (
    <section
      className={`cta-section section-dark w-full py-20 sm:py-24 lg:py-28 ${className}`}
    >
      <div className="container-custom">
        <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        viewport={{
          once: false,
          margin: "-100px",
        }}
          className="
          cta-card
          card-purple-border
          relative
          overflow-hidden
          rounded-[2.5rem]

          border
          border-[var(--accent)]/35

          bg-[var(--section-dark-surface)]

          px-7
          py-20

          text-center

          transition-colors
          duration-300

          sm:px-12
          lg:py-24
        "
      >
        {/* =====================================================
            TOP GLOW
        ===================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-0

            h-72
            w-72

            -translate-x-1/2

            rounded-full

            bg-[var(--accent)]/15

            blur-3xl
          "
        />

        {/* =====================================================
            BOTTOM GLOW
        ===================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            -bottom-24
            -right-24

            h-64
            w-64

            rounded-full

            bg-[var(--accent-bright)]/20

            blur-3xl
          "
        />

        {/* =====================================================
            CONTENT
        ===================================================== */}

        <div className="relative z-10 mx-auto max-w-4xl">

          {/* Eyebrow */}

          <p
            className="
              text-sm
              font-bold
              uppercase
              tracking-[0.2em]

              text-[var(--accent-bright)]
            "
          >
            {eyebrow}
          </p>

          {/* Heading */}

          <h2
            className="
              mt-5

              text-4xl
              font-black
              leading-[1.05]
              tracking-[-0.055em]
              capitalize
              text-white

              sm:text-5xl
              lg:text-6xl
            "
          >
            {title}
          </h2>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl

              text-lg
              leading-8

              text-white/70
            "
          >
            {description}
          </p>

          {/* =================================================
              CTA BUTTON
          ================================================= */}

          <div className="mt-9">
            <Button
              href={buttonHref}
              variant="primary"
              onClick={handleCTA}
            >
              {buttonText}
            </Button>
          </div>

        </div>
        </motion.div>
      </div>
    </section>
  );
}


{/* <CTA
  eyebrow="Start a conversation"
  title="Have a project in mind?"
  description="Let's talk about your goals, challenges, and how we can turn your idea into something that works."
  buttonText="Let's Talk"
  buttonHref="/contact"
/> */}