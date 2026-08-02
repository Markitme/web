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
"group inline-flex items-center justify-center gap-2 rounded-full font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#c8ff00] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

const variants = {
// Primary:
// Normal → Lime background + Black text
// Hover → Black background + Lime text
primary:
"bg-[#c8ff00] text-black hover:scale-[1.03] hover:bg-[#a7d503] hover:text-white dark:bg-[#a7d503] dark:hover:text-black",


// Outline:
// Light normal → Transparent + Black text
// Light hover → Black background + White text
// Dark normal → Transparent + White text
// Dark hover → Lime background + Black text
outline:
  "border border-black/25 bg-transparent text-black hover:scale-[1.03] hover:border-black hover:bg-white hover:text-black dark:border-white/25 dark:text-white dark:hover:border-black dark:hover:bg-[#a7d503] dark:hover:text-black",


};

const sizes = {
sm: "px-4 py-2.5 text-xs",
md: "px-5 py-3 text-sm",
lg: "px-7 py-4 text-sm",
};

const buttonClasses = `     ${baseClasses}
    ${variants[variant] || variants.primary}
    ${sizes[size] || sizes.md}
    ${className}
  `;

const buttonContent = (
<> <span>{children}</span>


  <ArrowRight
    size={size === "lg" ? 18 : 16}
    strokeWidth={2.5}
    className="transition-transform duration-300 group-hover:translate-x-1"
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
onClick={disabled ? (event) => event.preventDefault() : undefined}
>
{buttonContent} </Link>
);
}

// Normal Button
return ( <button
   type={type}
   onClick={onClick}
   disabled={disabled}
   className={buttonClasses}
 >
{buttonContent} </button>
);
}
