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

  const accents = [
    {
      color: "var(--color-green)",
      soft: "bg-[var(--color-green)]/[0.07]",
      text: "text-[var(--color-green)]",
    },
    {
      color: "var(--color-gold)",
      soft: "bg-[var(--color-gold)]/[0.08]",
      text: "text-[var(--color-gold)]",
    },
    {
      color: "var(--color-sand)",
      soft: "bg-[var(--color-sand)]/[0.08]",
      text: "text-[var(--color-sand)]",
    },
    {
      color: "var(--color-green)",
      soft: "bg-[var(--color-green)]/[0.06]",
      text: "text-[var(--color-green)]",
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
        border-[var(--color-deep)]/[0.07]

        bg-white/55

        p-6

        backdrop-blur-sm

        transition-all
        duration-700
        ease-out

        hover:-translate-y-2

        hover:bg-white

        hover:shadow-[0_25px_70px_rgba(12,59,46,0.09)]

        sm:min-h-[210px]
        sm:p-8

        lg:min-h-[230px]
        lg:rounded-[2.5rem]

        dark:border-[var(--color-cream)]/[0.08]
        dark:bg-[var(--color-deep)]/45

        dark:hover:bg-[var(--color-deep)]/70

        dark:hover:shadow-[0_25px_70px_rgba(0,0,0,0.25)]
      "
    >
      {/* =========================================
          GIANT BACKGROUND INDEX
      ========================================== */}

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

          text-[var(--color-deep)]/[0.025]

          transition-all
          duration-700

          group-hover:translate-x-2
          group-hover:text-[var(--color-green)]/[0.055]

          dark:text-[var(--color-cream)]/[0.025]

          dark:group-hover:text-[var(--color-gold)]/[0.05]

          sm:text-[9rem]
        "
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      
      {/*numbers*/}

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

            text-[var(--color-deep)]

            transition-all
            duration-700

            group-hover:translate-x-1

            sm:text-6xl

            lg:text-[4.5rem]

            dark:text-[var(--color-cream)]
          "
        >
          {count}
        </span>

        {suffix && (
          <span
            className={`
              ml-1

              text-2xl
              font-black

              ${accent.text}

              transition-transform
              duration-500

              group-hover:translate-x-1

              sm:text-3xl
            `}
          >
            {suffix}
          </span>
        )}
      </div>

      {/* =========================================
          LABEL
      ========================================== */}

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

            text-[var(--color-deep)]/60

            dark:text-[var(--color-cream)]/60
          "
        >
          {label}
        </p>
      </div>

      {/* =========================================
          BOTTOM PROGRESS LINE
      ========================================== */}

      <div
        className="
          absolute
          bottom-0
          left-6
          right-6

          h-[2px]

          overflow-hidden

          bg-[var(--color-deep)]/[0.06]

          dark:bg-[var(--color-cream)]/[0.06]

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
            w-8

            transition-all
            duration-700

            group-hover:w-full
          "
          style={{
            backgroundColor: accent.color,
          }}
        />
      </div>

      {/* =========================================
          HOVER GLOW
      ========================================== */}

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
    </div>
  );
}