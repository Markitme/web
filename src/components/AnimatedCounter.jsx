"use client";

import { useEffect, useRef, useState } from "react";

export default function AnimatedCounter({
  value,
  suffix = "",
  label = "",
  duration = 1600,
  index = 0,
}) {
  const [count, setCount] = useState(0);

  const ref = useRef(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasStarted.current) return;

        hasStarted.current = true;

        const startTime = performance.now();

        const animate = (currentTime) => {
          const progress = Math.min(
            (currentTime - startTime) / duration,
            1
          );

          const easedProgress =
            1 - Math.pow(1 - progress, 3);

          setCount(
            Math.round(value * easedProgress)
          );

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setCount(value);
          }
        };

        requestAnimationFrame(animate);
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [value, duration]);

  /* =====================================================
     PURPLE ACCENTS
  ===================================================== */

  const accents = [
    {
      color: "var(--accent-dark)",
      soft: "bg-[var(--accent-dark)]/[0.08]",
      text: "text-[var(--accent-dark)]",
      glow: "from-[var(--accent-dark)]/20",
    },
    {
      color: "var(--accent)",
      soft: "bg-[var(--accent)]/[0.08]",
      text: "text-[var(--accent)]",
      glow: "from-[var(--accent)]/20",
    },
    {
      color: "var(--accent-bright)",
      soft: "bg-[var(--accent-bright)]/[0.08]",
      text: "text-[var(--accent-bright)]",
      glow: "from-[var(--accent-bright)]/20",
    },
    {
      color: "var(--accent)",
      soft: "bg-[var(--accent)]/[0.08]",
      text: "text-[var(--accent)]",
      glow: "from-[var(--accent)]/20",
    },
  ];

  const accent = accents[index % accents.length];

  return (
    <div
      ref={ref}
      className="
        group
        relative
        overflow-hidden

        min-h-[190px]

        rounded-[2rem]

        border
        border-[var(--accent)]/20

        bg-white

        p-6

        shadow-[0_10px_40px_color-mix(in_srgb,var(--accent)_7%,transparent)]

        transition-all
        duration-700
        ease-out

        hover:-translate-y-2
        hover:border-[var(--accent)]/50

        hover:shadow-[0_25px_70px_color-mix(in_srgb,var(--accent)_20%,transparent)]

        sm:min-h-[210px]
        sm:p-8

        lg:min-h-[230px]
        lg:rounded-[2.5rem]

      "
    >
      {/* =====================================================
          TOP RIGHT PURPLE GRADIENT
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute

          -right-24
          -top-24

          h-64
          w-64

          rounded-full

          bg-gradient-to-br
          from-[var(--accent)]/20
          via-[var(--accent-bright)]/10
          to-transparent

          blur-3xl

          transition-all
          duration-700

          group-hover:scale-125
          group-hover:from-[var(--accent)]/30
        "
      />

      {/* =====================================================
          BOTTOM LEFT PURPLE GRADIENT
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute

          -bottom-24
          -left-24

          h-56
          w-56

          rounded-full

          bg-gradient-to-tr
          from-[var(--accent-dark)]/15
          via-[var(--accent)]/10
          to-transparent

          blur-3xl

          opacity-80

          transition-all
          duration-700

          group-hover:scale-125
          group-hover:opacity-100

        "
      />

      {/* =====================================================
          SUBTLE BORDER GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0

          rounded-[2rem]

          border
          border-transparent

          bg-gradient-to-br
          from-[var(--accent)]/10
          via-transparent
          to-[var(--accent-bright)]/10

          opacity-0

          transition-opacity
          duration-700

          group-hover:opacity-100

          lg:rounded-[2.5rem]
        "
      />

      {/* =====================================================
          GIANT BACKGROUND INDEX
      ===================================================== */}

      <span
        className="
          pointer-events-none
          absolute

          -right-2
          -top-8

          select-none

          text-[8rem]
          font-black
          leading-none

          tracking-[-0.1em]

          text-[var(--accent)]/[0.055]

          transition-all
          duration-700

          group-hover:translate-x-2
          group-hover:text-[var(--accent)]/[0.12]

          sm:text-[9rem]

          dark:text-white/[0.035]
        "
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* =====================================================
          SMALL PURPLE CORNER ACCENT
      ===================================================== */}

      <div
        className="
          absolute
          right-6
          top-6

          h-2
          w-2

          rounded-full

          bg-[var(--accent)]

          shadow-[0_0_18px_color-mix(in_srgb,var(--accent)_60%,transparent)]

          transition-all
          duration-500

          group-hover:scale-150

          sm:right-8
          sm:top-8

        "
      />

      {/* =====================================================
          NUMBER
      ===================================================== */}

      <div
        className="
          relative
          z-10

          mt-9

          flex
          items-baseline
        "
      >
        <span
          className="
            text-[3.5rem]
            font-black
            leading-none

            tracking-[-0.075em]

            text-black

            transition-all
            duration-700

            group-hover:translate-x-1
            group-hover:text-[var(--accent-dark)]

            sm:text-6xl

            lg:text-[4.5rem]

            dark:text-white
          "
        >
          {count}
        </span>

        {suffix && (
          <span
            className={`
              relative
              ml-1

              text-2xl
              font-black

              ${accent.text}

              transition-transform
              duration-500

              group-hover:translate-x-1

              sm:text-3xl

              dark:brightness-125
            `}
          >
            {suffix}
          </span>
        )}
      </div>

      {/* =====================================================
          LABEL
      ===================================================== */}

      <div
        className="
          relative
          z-10

          mt-5
        "
      >
        <p
          className="
            max-w-[180px]

            text-xs
            font-bold
            uppercase
            leading-5
            tracking-[0.12em]

            text-black/60

            transition-colors
            duration-500

            group-hover:text-black/80

          "
        >
          {label}
        </p>
      </div>

      {/* =====================================================
          BOTTOM PROGRESS LINE
      ===================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-6
          right-6

          h-[2px]

          overflow-hidden

          rounded-full

          bg-black/[0.08]

          sm:left-8
          sm:right-8

        "
      >
        <span
          className="
            absolute
            left-0
            top-0

            h-full
            w-10

            rounded-full

            bg-gradient-to-r
            from-[var(--accent-dark)]
            via-[var(--accent)]
            to-[var(--accent-bright)]

            shadow-[0_0_12px_color-mix(in_srgb,var(--accent)_45%,transparent)]

            transition-all
            duration-700

            group-hover:w-full
          "
        />
      </div>

      {/* =====================================================
          HOVER GLOW
      ===================================================== */}

      <div
        className={`
          pointer-events-none
          absolute

          -bottom-20
          -right-20

          h-40
          w-40

          rounded-full

          ${accent.soft}

          blur-[60px]

          opacity-0

          transition-opacity
          duration-700

          group-hover:opacity-100
        `}
      />

      {/* =====================================================
          INNER SHINE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0

          bg-gradient-to-br
          from-white/60
          via-transparent
          to-transparent

          opacity-0

          transition-opacity
          duration-700

          group-hover:opacity-100

          dark:from-white/[0.04]
        "
      />
    </div>
  );
}