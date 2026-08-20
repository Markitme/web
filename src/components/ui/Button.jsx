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
    focus:ring-[#FFBA00]
    focus:ring-offset-2
    focus:ring-offset-[#F1F3ED]

    dark:focus:ring-offset-[#0C3B2E]

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
      bg-[#FFBA00]
      text-[#0C3B2E]

      shadow-[0_10px_30px_rgba(255,186,0,0.16)]

      hover:-translate-y-0.5
      hover:bg-[#0C3B2E]
      hover:text-[#F1F3ED]
      hover:shadow-[0_14px_38px_rgba(12,59,46,0.20)]

      dark:bg-[#FFBA00]
      dark:text-[#0C3B2E]

      dark:hover:bg-[#F1F3ED]
      dark:hover:text-[#0C3B2E]
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
      border-[#0C3B2E]/20
      bg-transparent
      text-[#0C3B2E]

      hover:-translate-y-0.5
      hover:border-[#6D9773]
      hover:bg-[#6D9773]/10
      hover:text-[#0C3B2E]

      dark:border-[#F1F3ED]/20
      dark:bg-transparent
      dark:text-[#F1F3ED]

      dark:hover:border-[#6D9773]
      dark:hover:bg-[#6D9773]
      dark:hover:text-[#0C3B2E]
    `,


    /* =================================================
       SAGE

       Useful for secondary CTAs.
    ================================================= */

    sage: `
      bg-[#6D9773]
      text-[#0C3B2E]

      hover:-translate-y-0.5
      hover:bg-[#0C3B2E]
      hover:text-[#F1F3ED]

      dark:bg-[#6D9773]
      dark:text-[#0C3B2E]

      dark:hover:bg-[#FFBA00]
      dark:hover:text-[#0C3B2E]
    `,


    /* =================================================
       DARK

       Strong forest green button.
    ================================================= */

    dark: `
      bg-[#0C3B2E]
      text-[#F1F3ED]

      hover:-translate-y-0.5
      hover:bg-[#6D9773]
      hover:text-[#0C3B2E]

      dark:bg-[#F1F3ED]
      dark:text-[#0C3B2E]

      dark:hover:bg-[#FFBA00]
      dark:hover:text-[#0C3B2E]
    `,


    /* =================================================
       GHOST

       Minimal button.
    ================================================= */

    ghost: `
      bg-transparent
      text-[#0C3B2E]

      hover:bg-[#6D9773]/10
      hover:text-[#6D9773]

      dark:text-[#F1F3ED]

      dark:hover:bg-[#6D9773]/10
      dark:hover:text-[#FFBA00]
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