"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function ThemeProvider({ children }) {
return ( <NextThemesProvider
   attribute="class"
   defaultTheme="dark"
  forcedTheme="dark"
   enableSystem={false}
   storageKey="markitme-theme"
 >
{children} </NextThemesProvider>
);
}
