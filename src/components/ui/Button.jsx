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
}) {
  const baseClasses =
    "group inline-flex items-center justify-center gap-2 rounded-full font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#a7d503] focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-[#0a0a0a] disabled:cursor-not-allowed disabled:opacity-50";

  const variants = {
    // Light:
    // Normal = Lime background + Black text
    // Hover = Black background + Lime text
    //
    // Dark:
    // Normal = Lime background + Black text
    // Hover = White background + Black text
    primary:
      "bg-[#a7d503] text-black hover:scale-[1.03] hover:bg-black hover:text-[#a7d503] dark:bg-[#a7d503] dark:text-black dark:hover:bg-white dark:hover:text-black",

    // Light:
    // Normal = Transparent + Black text
    // Hover = Black background + White text
    //
    // Dark:
    // Normal = Transparent + White text
    // Hover = Lime background + Black text
    outline:
      "border border-black/20 bg-transparent text-black hover:scale-[1.03] hover:border-black hover:bg-black hover:text-white dark:border-white/25 dark:text-white dark:hover:border-[#a7d503] dark:hover:bg-[#a7d503] dark:hover:text-black",
  };

  const sizes = {
    sm: "px-4 py-2.5 text-xs",
    md: "px-5 py-3 text-sm",
    lg: "px-7 py-4 text-sm",
  };

  const buttonClasses = `
    ${baseClasses}
    ${variants[variant] || variants.primary}
    ${sizes[size] || sizes.md}
    ${className}
  `;

  const buttonContent = (
    <>
      <span>{children}</span>

      <ArrowRight
        size={size === "lg" ? 18 : 16}
        strokeWidth={2.5}
        className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
      />
    </>
  );

  // Link Button
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

  // Normal Button
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