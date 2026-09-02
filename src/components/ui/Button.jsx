"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  disabled = false,
  showArrow = true,
}) {
  /* =====================================================
     BASE
  ===================================================== */

  const baseClasses = `
    group
    inline-flex
    items-center
    justify-center
    gap-2
    rounded-full
    font-bold

    transition-all
    duration-300
    ease-out

    focus:outline-none
    focus:ring-2
    focus:ring-[var(--foreground)]
    focus:ring-offset-2
    focus:ring-offset-[var(--background)]

    disabled:cursor-not-allowed
    disabled:opacity-50
  `;

  /* =====================================================
     VARIANTS
  ===================================================== */

  const variants = {
    /* =================================================
       PRIMARY

       Light:
       Black → Black/White contrast

       Dark:
       White → Soft white
    ================================================= */

    primary: `
      bg-[var(--color-black)]
      text-[var(--color-white)]

      shadow-[0_10px_30px_rgba(0,0,0,0.12)]

      hover:-translate-y-0.5
      hover:bg-[var(--color-black-soft)]
      hover:text-[var(--color-white)]

      hover:shadow-[0_14px_38px_rgba(0,0,0,0.18)]

      dark:bg-[var(--color-white)]
      dark:text-[var(--color-black)]

      dark:hover:bg-[var(--color-white-soft)]
      dark:hover:text-[var(--color-black)]

      dark:hover:shadow-[0_14px_38px_rgba(255,255,255,0.10)]
    `,

    /* =================================================
       OUTLINE
    ================================================= */

    outline: `
      border
      border-[var(--foreground)]/20

      bg-transparent
      text-[var(--foreground)]

      hover:-translate-y-0.5

      hover:border-[var(--foreground)]
      hover:bg-[var(--foreground)]
      hover:text-[var(--background)]
    `,

    /* =================================================
       SOFT
    ================================================= */

    sage: `
      bg-[var(--surface-soft)]
      text-[var(--foreground)]

      border
      border-[var(--border)]

      hover:-translate-y-0.5

      hover:bg-[var(--foreground)]
      hover:text-[var(--background)]

      hover:border-[var(--foreground)]
    `,

    /* =================================================
       DARK
    ================================================= */

    dark: `
      bg-[var(--color-black)]
      text-[var(--color-white)]

      border
      border-[var(--color-black)]

      hover:-translate-y-0.5

      hover:bg-[var(--color-white)]
      hover:text-[var(--color-black)]

      hover:border-[var(--color-white)]

      dark:bg-[var(--color-white)]
      dark:text-[var(--color-black)]

      dark:border-[var(--color-white)]

      dark:hover:bg-[var(--color-black)]
      dark:hover:text-[var(--color-white)]
      dark:hover:border-[var(--color-white)]
    `,

    /* =================================================
       GHOST
    ================================================= */

    ghost: `
      bg-transparent
      text-[var(--foreground)]

      hover:bg-[var(--foreground)]/[0.06]
      hover:text-[var(--foreground)]
    `,
  };

  /* =====================================================
     SIZES
  ===================================================== */

  const sizes = {
    sm: `
      min-h-10
      px-4
      py-2.5
      text-xs
    `,

    md: `
      min-h-11
      px-5
      py-3
      text-sm
    `,

    lg: `
      min-h-12
      px-7
      py-3.5
      text-sm
    `,

    xl: `
      min-h-14
      px-8
      py-4
      text-base
    `,
  };

  /* =====================================================
     FINAL CLASSES
  ===================================================== */

  const buttonClasses = `
    ${baseClasses}
    ${variants[variant] || variants.primary}
    ${sizes[size] || sizes.md}
    ${className}
  `;

  /* =====================================================
     CONTENT
  ===================================================== */

  const buttonContent = (
    <>
      <span className="inline-flex items-center gap-1.5 leading-none">
        {children}
      </span>

      {showArrow && (
        <span className="inline-flex shrink-0 items-center justify-center leading-none">
          <ArrowRight
            size={
              size === "xl"
                ? 19
                : size === "lg"
                  ? 18
                  : 16
            }
            strokeWidth={2.5}
            className="
              shrink-0
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </span>
      )}
    </>
  );

  /* =====================================================
     LINK BUTTON
  ===================================================== */

  if (href) {
    return (
      <Link
        href={href}
        className={buttonClasses}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : undefined}
        onClick={
          disabled
            ? (event) => event.preventDefault()
            : onClick
        }
      >
        {buttonContent}
      </Link>
    );
  }

  /* =====================================================
     NORMAL BUTTON
  ===================================================== */

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
    >
      {buttonContent}
    </button>
  );
}