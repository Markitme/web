"use client";

import { useEffect, useRef, useState } from "react";

export default function AnimatedCounter({
  value,
  suffix = "",
  label = "",
  duration = 1600,
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

          const easedProgress = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(value * easedProgress));

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setCount(value);
          }
        };

        requestAnimationFrame(animate);
      },
      { threshold: 0.35 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <div
      ref={ref}
      className="group rounded-2xl border border-black/10 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#8db800] hover:shadow-xl dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-[#a7d503] sm:rounded-3xl sm:p-7"
    >
      <p className="text-4xl font-black tracking-[-0.05em] text-[#8db800] dark:text-[#a7d503] sm:text-5xl">
        {count}
        {suffix}
      </p>

      <p className="mt-3 text-sm font-bold text-black/55 dark:text-white/55">
        {label}
      </p>
    </div>
  );
}