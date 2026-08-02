"use client";

import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
{ name: "Home", href: "/" },
{ name: "About", href: "/about" },
{ name: "Services", href: "/services" },
{ name: "Work", href: "/work" },
{ name: "Blog", href: "/blog" },
];

export default function Header() {
const [menuOpen, setMenuOpen] = useState(false);

// Desktop par jaane par mobile menu automatically close hoga
useEffect(() => {
const handleResize = () => {
if (window.innerWidth >= 1024) {
setMenuOpen(false);
}
};


window.addEventListener("resize", handleResize);

return () => {
  window.removeEventListener("resize", handleResize);
};


}, []);

return (
<>
{/* Top Announcement Bar */} <div className="border-b border-black/10 bg-[#a7d503] py-2 text-center text-[10px] font-black uppercase tracking-[0.14em] text-black sm:text-xs sm:tracking-[0.18em]">
Strategy. Creativity. Measurable Growth. </div>


  {/* Main Header */}
  <header className="sticky top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-[#0a0a0a]/90">
    <div className="container-custom flex h-[72px] items-center justify-between sm:h-20">
      {/* Logo */}
      <Link
        href="/"
        onClick={() => setMenuOpen(false)}
        className="text-xl font-black tracking-[-0.08em] text-black transition-colors duration-300 hover:opacity-80 sm:text-2xl dark:text-white"
        aria-label="MarkitMe Home"
      >
        MARK<span className="text-[#8db800] dark:text-[#a7d503]">IT</span>
        ME
      </Link>

      {/* Desktop Navigation */}
      <nav
        className="hidden items-center gap-7 xl:gap-9 lg:flex"
        aria-label="Main navigation"
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-sm font-semibold text-black/65 transition-colors duration-300 hover:text-[#8db800] dark:text-white/65 dark:hover:text-[#a7d503]"
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Desktop Actions */}
      <div className="hidden items-center gap-3 lg:flex">
        <ThemeToggle />

        <Link
          href="/contact"
          className="flex items-center gap-2 rounded-full bg-[#a7d503] px-5 py-3 text-sm font-bold text-black transition duration-300 hover:scale-105 hover:bg-[#b8eb00]"
        >
          Let&apos;s Talk
          <ArrowRight size={16} strokeWidth={2.5} />
        </Link>
      </div>

      {/* Mobile Actions */}
      <div className="flex items-center gap-3 lg:hidden">
        {/* Mobile Theme Button */}
        <ThemeToggle />

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((previous) => !previous)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 bg-black/[0.03] text-black transition hover:border-[#8db800] hover:text-[#8db800] dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:border-[#a7d503] dark:hover:text-[#a7d503]"
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </div>

    {/* Mobile Navigation */}
    <div
      id="mobile-navigation"
      className={`overflow-hidden border-t border-black/10 bg-white transition-all duration-300 lg:hidden dark:border-white/10 dark:bg-[#101010] ${
        menuOpen
          ? "max-h-[600px] opacity-100"
          : "max-h-0 border-t-0 opacity-0"
      }`}
    >
      <div className="container-custom px-0 py-6">
        <nav className="flex flex-col">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-black/10 py-4 text-lg font-bold text-black transition-colors hover:pl-2 hover:text-[#8db800] dark:border-white/10 dark:text-white dark:hover:text-[#a7d503]"
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile CTA */}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-6 flex items-center justify-center gap-2 rounded-full bg-[#a7d503] px-5 py-4 text-sm font-black uppercase tracking-[0.08em] text-black transition duration-300 hover:scale-[1.02] hover:bg-[#b8eb00]"
          >
            Let&apos;s Talk
            <ArrowRight size={17} strokeWidth={2.5} />
          </Link>
        </nav>
      </div>
    </div>
  </header>
</>


);
}
