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
      className={`container-custom mt-20 pb-28 ${className}`}
    >
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
          relative
          overflow-hidden
          rounded-[2.5rem]

          border
          border-[#0C3B2E]/10

          bg-[#E5EBE3]

          px-7
          py-20

          text-center

          transition-colors
          duration-300

          dark:border-[#F1F3ED]/10
          dark:bg-[#123F32]

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

            bg-[#FFBA00]/15

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

            bg-[#6D9773]/20

            blur-3xl
          "
        />

        {/* =====================================================
            CONTENT
        ===================================================== */}

        <div className="relative mx-auto max-w-4xl">

          {/* Eyebrow */}

          <p
            className="
              text-sm
              font-bold
              uppercase
              tracking-[0.2em]

              text-[#BB8A52]

              dark:text-[#FFBA00]
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

              text-[#0C3B2E]

              dark:text-[#F1F3ED]

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

              text-[#0C3B2E]/60

              dark:text-[#F1F3ED]/60
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