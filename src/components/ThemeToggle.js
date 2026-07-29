"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
const { theme, setTheme } = useTheme();
const [mounted, setMounted] = useState(false);

useEffect(() => {
setMounted(true);
}, []);

if (!mounted) {
return ( <div className="h-11 w-11 rounded-full border border-white/10" />
);
}

return (
<button
type="button"
onClick={() =>
setTheme(theme === "dark" ? "light" : "dark")
}
className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-[#c8ff00] hover:text-[#c8ff00]"
aria-label="Toggle light and dark mode"
title="Toggle theme"
>
{theme === "dark" ? ( <Sun size={19} strokeWidth={2} />
) : ( <Moon size={19} strokeWidth={2} />
)} </button>
);
}
