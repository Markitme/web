"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
const { resolvedTheme, setTheme } = useTheme();
const [mounted, setMounted] = useState(false);

useEffect(() => {
setMounted(true);
}, []);

if (!mounted) {
return ( <button
     type="button"
     className="h-10 w-10 rounded-full border border-black/15 bg-black/[0.03] dark:border-white/15 dark:bg-white/5"
     aria-label="Theme loading"
   />
);
}

const isDark = resolvedTheme === "dark";

const toggleTheme = () => {
setTheme(isDark ? "light" : "dark");
};

return (
<button
type="button"
onClick={toggleTheme}
className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-soft)] text-[var(--foreground)] transition-all duration-300 hover:scale-105 hover:border-[var(--foreground)] hover:bg-[var(--surface)] hover:text-[var(--foreground)] dark:border-[var(--foreground)]/20 dark:bg-[var(--surface)] dark:text-[var(--color-cream)] dark:hover:border-[var(--foreground)] dark:hover:bg-[var(--surface-soft)] dark:hover:text-[var(--color-cream)]"
aria-label={
isDark
? "Switch to light mode"
: "Switch to dark mode"
}
title={
isDark
? "Switch to light mode"
: "Switch to dark mode"
}
>
{isDark ? ( <Sun size={18} strokeWidth={2.2} />
) : ( <Moon size={18} strokeWidth={2.2} />
)} </button>
);
}
