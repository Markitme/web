"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  description,
  children,
  className = "",
  as = "h2",
  tone = "light",
}) {
  const Heading = as;
  const isDark = tone === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`max-w-3xl ${className}`}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2">
          <span className={`h-1.5 w-1.5 rounded-full ${isDark ? "bg-[var(--background)]" : "bg-[var(--foreground)]"}`} />
          <p className={`text-[9px] font-black uppercase tracking-[0.24em] ${isDark ? "text-[var(--background)]" : "text-[var(--muted)] dark:text-[var(--foreground)]"}`}>
            {eyebrow}
          </p>
          <span className={`h-1.5 w-1.5 rounded-full ${isDark ? "bg-[var(--background)]" : "bg-[var(--muted)] dark:bg-[var(--foreground)]"}`} />
        </div>
      )}

      <Heading className={`mt-4 text-4xl capitalize font-black leading-[0.98] tracking-[-0.055em] sm:text-5xl lg:text-6xl ${isDark ? "text-[var(--background)]" : "text-[var(--foreground)] dark:text-[var(--foreground)]"}`}>
        {children}
      </Heading>

      {description && (
        <p className={`mt-5 max-w-2xl text-sm leading-7 sm:text-base ${isDark ? "text-[var(--background)]/70" : "text-[var(--muted)] dark:text-[var(--muted)]"}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}