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
className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 bg-black/[0.03] text-black transition-all duration-300 hover:scale-105 hover:border-[#8db800] hover:text-[#8db800] dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:border-[#a7d503] dark:hover:text-[#a7d503]"
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
