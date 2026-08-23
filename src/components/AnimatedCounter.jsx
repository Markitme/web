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

  const accentColors = [
    {
      number: "text-[var(--color-deep)]",
      hoverBorder: "hover:border-[var(--color-green)]/50",
      dot: "bg-[var(--color-green)]",
      hoverDot: "group-hover:bg-[var(--color-gold)]",
    },
    {
      number: "text-[var(--color-green)]",
      hoverBorder: "hover:border-[var(--color-gold)]/50",
      dot: "bg-[var(--color-gold)]",
      hoverDot: "group-hover:bg-[var(--color-green)]",
    },
    {
      number: "text-[var(--color-sand)]",
      hoverBorder: "hover:border-[var(--color-sand)]/50",
      dot: "bg-[var(--color-sand)]",
      hoverDot: "group-hover:bg-[var(--color-gold)]",
    },
    {
      number: "text-[var(--color-gold)]",
      hoverBorder: "hover:border-[var(--color-gold)]/50",
      dot: "bg-[var(--color-gold)]",
      hoverDot: "group-hover:bg-[var(--color-green)]",
    },
  ];

  const accent =
    accentColors[index % accentColors.length];

  return (
    <div
      ref={ref}
      className={`
        group
        relative
        overflow-hidden

        rounded-2xl

        border
        border-[var(--color-deep)]/[0.09]

        bg-white/75

        p-6
        text-center

        shadow-[0_8px_30px_rgba(12,59,46,0.035)]

        transition-all
        duration-500

        hover:-translate-y-1.5

        ${accent.hoverBorder}

        hover:bg-white
        hover:shadow-[0_18px_45px_rgba(12,59,46,0.08)]

        sm:rounded-3xl
        sm:p-7

        dark:border-[var(--color-cream)]/[0.09]
        dark:bg-[var(--color-deep)]/70

        dark:hover:bg-[var(--color-deep)]/90

        dark:hover:shadow-[0_18px_45px_rgba(0,0,0,0.16)]
      `}
    >
      {/* =====================================
          TOP ACCENT
      ====================================== */}

      <span
        className={`
          absolute
          left-1/2
          top-0

          h-[2px]
          w-8

          -translate-x-1/2

          rounded-full

          ${accent.dot}

          transition-all
          duration-500

          group-hover:w-14
          ${accent.hoverDot}
        `}
      />

      {/* =====================================
          NUMBER
      ====================================== */}

      <p
        className={`
          text-4xl
          font-black

          tracking-[-0.05em]

          ${accent.number}

          transition-all
          duration-500

          group-hover:scale-[1.03]

          sm:text-5xl
          lg:text-[3.25rem]

          dark:text-[var(--color-cream)]
        `}
      >
        {count}
        {suffix}
      </p>

      {/* =====================================
          LABEL
      ====================================== */}

      <p
        className="
          mt-3

          text-xs
          font-bold
          uppercase
          tracking-[0.12em]

          text-[#587064]

          transition-colors
          duration-300

          group-hover:text-[var(--color-deep)]

          sm:text-sm

          dark:text-[#A8B9AE]
          dark:group-hover:text-[var(--color-cream)]
        "
      >
        {label}
      </p>

      {/* =====================================
          BOTTOM ACCENT
      ====================================== */}

      <span
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2

          h-px
          w-0

          -translate-x-1/2

          bg-[var(--color-gold)]

          transition-all
          duration-500

          group-hover:w-12
        "
      />
    </div>
  );
}