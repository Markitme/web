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
    focus:ring-[var(--accent)]
    focus:ring-offset-2
    focus:ring-offset-[var(--background)]

    dark:focus:ring-offset-[var(--background)]

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
      btn-primary
      text-white

      shadow-[0_10px_30px_color-mix(in_srgb,var(--accent-bright)_25%,transparent)]

      hover:-translate-y-0.5
      hover:text-white
      hover:shadow-[0_14px_38px_color-mix(in_srgb,var(--accent-bright)_30%,transparent)]

      dark:text-white

      dark:hover:text-white
      dark:hover:shadow-[0_14px_38px_color-mix(in_srgb,var(--accent-bright)_30%,transparent)]
    `,


    /* =================================================
       OUTLINE

       Light:
       Cream/transparent → Sage

       Dark:
       Transparent → Sage
    ================================================= */

    outline: `
      btn-outline
      border
      border-[var(--border)]
      bg-transparent
      text-[var(--foreground)]

      hover:-translate-y-0.5
      hover:border-[var(--accent)]
      hover:bg-[var(--accent)]
      hover:text-white

      dark:border-[var(--border)]
      dark:bg-transparent
      dark:text-[var(--foreground)]

      dark:hover:border-[var(--accent)]
      dark:hover:bg-[var(--accent-bright)]
      dark:hover:text-white
    `,


    /* =================================================
       SAGE

       Useful for secondary CTAs.
    ================================================= */

    sage: `
      bg-[var(--accent)]
      text-white

      hover:-translate-y-0.5
      hover:bg-[var(--accent-bright)]
      hover:text-white

      dark:bg-[var(--accent)]
      dark:text-white

      dark:hover:bg-[var(--accent-bright)]
      dark:hover:text-white
    `,


    /* =================================================
       DARK

       Strong forest green button.
    ================================================= */

    dark: `
      bg-white
      text-black

      hover:-translate-y-0.5
      hover:bg-[var(--accent)]
      hover:text-white

      dark:bg-white
      dark:text-black

      dark:hover:bg-[var(--accent-bright)]
      dark:hover:text-white
    `,


    /* =================================================
       GHOST

       Minimal button.
    ================================================= */

    ghost: `
      bg-transparent
      text-[var(--foreground)]

      hover:bg-[var(--purple-soft)]
      hover:text-[var(--accent)]

      dark:text-[var(--foreground)]

      dark:hover:bg-[var(--purple-soft)]
      dark:hover:text-[var(--accent)]
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