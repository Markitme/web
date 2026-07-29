"use client";

import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";
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

  return (
    <>
      {/* Top Bar */}{" "}
      <div className="border-b border-white/10 bg-[#c8ff00] py-2 text-center text-xs font-bold uppercase tracking-[0.18em] text-black">
        Strategy. Creativity. Measurable Growth.{" "}
      </div>
      {/* Main Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0a0a]/90 backdrop-blur-xl">
        <div className="container-custom flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl text-white font-bold tracking-[-0.08em]">
            MARK<span className="text-[#c8ff00]">IT</span>ME
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/70 transition hover:text-[#c8ff00]"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />

            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-full bg-[#c8ff00] px-5 py-3 text-sm font-bold text-black transition duration-300 hover:scale-105"
            >
              Let&apos;s Talk
              <ArrowRight size={16} />
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center justify-center lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="border-t border-white/10 bg-[#101010] px-5 py-6 lg:hidden">
            <nav className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg font-medium text-white/80 transition hover:text-[#c8ff00]"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center justify-between border-t border-white/10 pt-5">
                <span className="text-sm text-white/60">Appearance</span>

                <ThemeToggle />
              </div>
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-full bg-[#c8ff00] px-5 py-3 text-center font-bold text-black"
              >
                Let&apos;s Talk
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
