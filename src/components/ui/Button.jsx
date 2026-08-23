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
    focus:ring-[var(--color-gold)]
    focus:ring-offset-2
    focus:ring-offset-[var(--color-cream)]

    dark:focus:ring-offset-[var(--color-deep)]

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
       Yellow → Dark Green hover

       Dark:
       Yellow → Cream hover
    ================================================= */

    primary: `
      bg-[var(--color-gold)]
      text-[var(--color-deep)]

      shadow-[0_10px_30px_rgba(255,186,0,0.16)]

      hover:-translate-y-0.5
      hover:bg-[var(--color-deep)]
      hover:text-[var(--color-cream)]
      hover:shadow-[0_14px_38px_rgba(12,59,46,0.20)]

      dark:bg-[var(--color-gold)]
      dark:text-[var(--color-deep)]

      dark:hover:bg-[var(--color-cream)]
      dark:hover:text-[var(--color-deep)]
      dark:hover:shadow-[0_14px_38px_rgba(241,243,237,0.12)]
    `,


    /* =================================================
       OUTLINE

       Light:
       Cream/transparent → Sage

       Dark:
       Transparent → Sage
    ================================================= */

    outline: `
      border
      border-[var(--color-deep)]/20
      bg-transparent
      text-[var(--color-deep)]

      hover:-translate-y-0.5
      hover:border-[var(--color-green)]
      hover:bg-[var(--color-green)]/10
      hover:text-[var(--color-deep)]

      dark:border-[var(--color-cream)]/20
      dark:bg-transparent
      dark:text-[var(--color-cream)]

      dark:hover:border-[var(--color-green)]
      dark:hover:bg-[var(--color-green)]
      dark:hover:text-[var(--color-deep)]
    `,


    /* =================================================
       SAGE

       Useful for secondary CTAs.
    ================================================= */

    sage: `
      bg-[var(--color-green)]
      text-[var(--color-deep)]

      hover:-translate-y-0.5
      hover:bg-[var(--color-deep)]
      hover:text-[var(--color-cream)]

      dark:bg-[var(--color-green)]
      dark:text-[var(--color-deep)]

      dark:hover:bg-[var(--color-gold)]
      dark:hover:text-[var(--color-deep)]
    `,


    /* =================================================
       DARK

       Strong forest green button.
    ================================================= */

    dark: `
      bg-[var(--color-deep)]
      text-[var(--color-cream)]

      hover:-translate-y-0.5
      hover:bg-[var(--color-green)]
      hover:text-[var(--color-deep)]

      dark:bg-[var(--color-cream)]
      dark:text-[var(--color-deep)]

      dark:hover:bg-[var(--color-gold)]
      dark:hover:text-[var(--color-deep)]
    `,


    /* =================================================
       GHOST

       Minimal button.
    ================================================= */

    ghost: `
      bg-transparent
      text-[var(--color-deep)]

      hover:bg-[var(--color-green)]/10
      hover:text-[var(--color-green)]

      dark:text-[var(--color-cream)]

      dark:hover:bg-[var(--color-green)]/10
      dark:hover:text-[var(--color-gold)]
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
     BUTTON CONTENT
  ===================================================== */

  const buttonContent = (
    <>
      <span>{children}</span>

      {showArrow && (
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
        tabIndex={
          disabled
            ? -1
            : undefined
        }
        onClick={
          disabled
            ? (event) =>
                event.preventDefault()
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