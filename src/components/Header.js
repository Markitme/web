"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ChevronDown,
  Menu,
  X,
  Target,
  MonitorSmartphone,
  Search,
  Megaphone,
  Palette,
  BarChart3,
  BriefcaseBusiness,
  BadgeCheck,
} from "lucide-react";

import { useEffect, useState } from "react";

import ThemeToggle from "../components/ThemeToggle";
import Button from "../components/ui/Button";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Work",
    href: "/work",
  },
  {
    name: "Blog",
    href: "/blog",
  },
];

const services = [
  {
    name: "Brand Strategy",
    description:
      "Clear positioning and practical strategies for sustainable growth.",
    href: "/services#brand-strategy",
    icon: Target,
  },
  {
    name: "Website Design & Development",
    description:
      "Fast, responsive websites designed around your business goals.",
    href: "/services#web-design",
    icon: MonitorSmartphone,
  },
  {
    name: "SEO & Content Strategy",
    description:
      "Search-focused content that helps the right audience find you.",
    href: "/services#seo",
    icon: Search,
  },
  {
    name: "Digital Marketing",
    description:
      "Campaigns built to increase visibility, engagement, and leads.",
    href: "/services#digital-marketing",
    icon: Megaphone,
  },
  {
    name: "Social Media Marketing",
    description:
      "Consistent social content that strengthens your brand presence.",
    href: "/services#social-media",
    icon: BriefcaseBusiness,
  },
  {
    name: "Brand Identity & Design",
    description:
      "Distinct visual systems that make your business recognizable.",
    href: "/services#brand-identity",
    icon: Palette,
  },
  {
    name: "Lead Generation",
    description:
      "Conversion-focused systems designed to create quality leads.",
    href: "/services#lead-generation",
    icon: BarChart3,
  },
  {
    name: "Marketing Strategy",
    description:
      "Connected marketing plans focused on measurable business results.",
    href: "/services#marketing-strategy",
    icon: BadgeCheck,
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] =
    useState(false);

  const closeMenus = () => {
    setMenuOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
        setMobileServicesOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeMenus();
      }
    };

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  return (
    <>
      {/* Fixed header spacer */}
      <div className="h-[104px] sm:h-28" />

      <div className="fixed inset-x-0 top-0 z-[100]">
        {/* Top announcement bar */}
        <div className="border-b border-black/10 bg-[#a7d503] py-2 text-center text-[10px] font-black uppercase tracking-[0.14em] text-black sm:text-xs sm:tracking-[0.18em]">
          Strategy. Creativity. Measurable Growth.
        </div>

        {/* Header and mega menu wrapper */}
        <header
          className="relative border-b border-black/10 bg-white/95 backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-[#0a0a0a]/95"
          onMouseLeave={() =>
            setServicesOpen(false)
          }
        >
          {/* Main header */}
          <div className="container-custom flex h-[72px] items-center justify-between sm:h-20">
            {/* Logo */}
            <Link
              href="/"
              onClick={closeMenus}
              className="flex shrink-0 items-center"
              aria-label="MarkitMe Home"
            >
              {/* Light Mode: Light theme me show, Dark theme me hidden */}
              <Image
                src="/images/logo-light.png"
                alt="MarkitMe"
                width={190}
                height={60}
                priority
                className=" h-auto w-[145px] object-contain hidden dark:block  sm:w-[170px]"
              />

              {/* Dark Mode: Light theme me hidden, Dark theme me show */}
              <Image
                src="/images/logo-dark.png"
                alt="MarkitMe"
                width={190}
                height={60}
                priority
                className="block h-auto w-[145px] object-contain dark:hidden sm:w-[170px]"
              />
            </Link>

            {/* Desktop navigation */}
            <nav
              className="hidden items-center gap-7 xl:gap-9 lg:flex"
              aria-label="Main navigation"
            >
              {navLinks.slice(0, 2).map(
                (link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={closeMenus}
                    className="text-sm font-semibold text-black/65 transition-colors duration-300 hover:text-[#8db800] dark:text-white/65 dark:hover:text-[#a7d503]"
                  >
                    {link.name}
                  </Link>
                )
              )}

              {/* Services hover tab */}
              <button
                type="button"
                onMouseEnter={() =>
                  setServicesOpen(true)
                }
                onClick={() =>
                  setServicesOpen(
                    (previous) => !previous
                  )
                }
                className={`group flex items-center gap-1.5 text-sm font-semibold transition-colors duration-300 ${
                  servicesOpen
                    ? "text-[#8db800] dark:text-[#a7d503]"
                    : "text-black/65 hover:text-[#8db800] dark:text-white/65 dark:hover:text-[#a7d503]"
                }`}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Services

                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    servicesOpen
                      ? "rotate-180"
                      : ""
                  }`}
                />
              </button>

              {navLinks
                .slice(2)
                .map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={closeMenus}
                    className="text-sm font-semibold text-black/65 transition-colors duration-300 hover:text-[#8db800] dark:text-white/65 dark:hover:text-[#a7d503]"
                  >
                    {link.name}
                  </Link>
                ))}
            </nav>

            {/* Desktop actions */}
            <div className="hidden items-center gap-3 lg:flex">
              <ThemeToggle />

              <Button
                href="/contact"
                variant="primary"
                size="md"
                onClick={closeMenus}
              >
                Let&apos;s Talk
              </Button>
            </div>

            {/* Mobile actions */}
            <div className="flex items-center gap-3 lg:hidden">
              <ThemeToggle />

              <button
                type="button"
                onClick={() => {
                  setMenuOpen(
                    (previous) => !previous
                  );

                  setServicesOpen(false);
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 bg-black/[0.03] text-black transition-colors hover:border-[#8db800] hover:text-[#8db800] dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:border-[#a7d503] dark:hover:text-[#a7d503]"
                aria-label={
                  menuOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
                }
                aria-expanded={menuOpen}
                aria-controls="mobile-navigation"
              >
                {menuOpen ? (
                  <X size={22} />
                ) : (
                  <Menu size={22} />
                )}
              </button>
            </div>
          </div>

          {/* Desktop mega menu */}
          <div
            onMouseEnter={() =>
              setServicesOpen(true)
            }
            className={`absolute left-0 right-0 top-full border-b border-black/10 bg-white shadow-2xl transition-all duration-300 dark:border-white/10 dark:bg-[#101010] ${
              servicesOpen
                ? "visible translate-y-0 opacity-100"
                : "invisible -translate-y-2 opacity-0 pointer-events-none"
            }`}
          >
            <div className="container-custom">
              <div className="grid max-h-[calc(100vh-105px)] grid-cols-[0.9fr_2.1fr] overflow-y-auto">
                {/* Mega menu left section */}
                <div className="border-r border-black/10 px-8 py-9 dark:border-white/10 xl:px-10">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#8db800] dark:text-[#a7d503]">
                    What we do
                  </p>

                  <h2 className="mt-4 text-3xl font-black leading-[0.98] tracking-[-0.05em] text-black dark:text-white">
                    Strategy and creative work built for growth.
                  </h2>

                  <p className="mt-5 max-w-sm text-sm leading-7 text-black/55 dark:text-white/55">
                    We connect strategy,
                    design, technology, and
                    marketing to create
                    stronger digital
                    experiences.
                  </p>

                  <Button
                    href="/services"
                    variant="primary"
                    size="md"
                    className="mt-7"
                    onClick={closeMenus}
                  >
                    View All Services
                  </Button>
                </div>

                {/* Mega menu service grid */}
                <div className="grid grid-cols-2 gap-3 px-7 py-7 xl:grid-cols-2 xl:px-10">
                  {services.map(
                    (service) => {
                      const Icon =
                        service.icon;

                      return (
                        <Link
                          key={
                            service.name
                          }
                          href={
                            service.href
                          }
                          onClick={
                            closeMenus
                          }
                          className="group flex min-h-[118px] gap-4 rounded-2xl border border-black/10 bg-black/[0.02] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#8db800]/40 hover:bg-[#a7d503]/10 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-[#a7d503]/40 dark:hover:bg-[#a7d503]/10"
                        >
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#a7d503] text-black">
                            <Icon
                              size={20}
                              strokeWidth={
                                2
                              }
                            />
                          </div>

                          <div>
                            <h3 className="text-sm font-black text-black transition-colors group-hover:text-[#6f8f00] dark:text-white dark:group-hover:text-[#a7d503]">
                              {
                                service.name
                              }
                            </h3>

                            <p className="mt-2 text-xs leading-5 text-black/50 dark:text-white/50">
                              {
                                service.description
                              }
                            </p>
                          </div>
                        </Link>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile navigation */}
          <div
            id="mobile-navigation"
            className={`overflow-hidden border-t border-black/10 bg-white transition-all duration-300 lg:hidden dark:border-white/10 dark:bg-[#101010] ${
              menuOpen
                ? "max-h-[calc(100vh-104px)] overflow-y-auto opacity-100"
                : "max-h-0 border-t-0 opacity-0"
            }`}
          >
            <div className="container-custom px-0 py-5">
              <nav className="flex flex-col">
                <Link
                  href="/"
                  onClick={closeMenus}
                  className="border-b border-black/10 py-4 text-lg font-bold text-black dark:border-white/10 dark:text-white"
                >
                  Home
                </Link>

                <Link
                  href="/about"
                  onClick={closeMenus}
                  className="border-b border-black/10 py-4 text-lg font-bold text-black dark:border-white/10 dark:text-white"
                >
                  About
                </Link>

                {/* Mobile services accordion */}
                <button
                  type="button"
                  onClick={() =>
                    setMobileServicesOpen(
                      (previous) =>
                        !previous
                    )
                  }
                  className="flex items-center justify-between border-b border-black/10 py-4 text-left text-lg font-bold text-black dark:border-white/10 dark:text-white"
                  aria-expanded={
                    mobileServicesOpen
                  }
                >
                  Services

                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 ${
                      mobileServicesOpen
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    mobileServicesOpen
                      ? "max-h-[700px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="border-b border-black/10 bg-black/[0.02] px-4 py-3 dark:border-white/10 dark:bg-white/[0.03]">
                    {services.map(
                      (service) => {
                        const Icon =
                          service.icon;

                        return (
                          <Link
                            key={
                              service.name
                            }
                            href={
                              service.href
                            }
                            onClick={
                              closeMenus
                            }
                            className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-bold text-black/70 transition hover:bg-[#a7d503]/15 hover:text-[#6f8f00] dark:text-white/70 dark:hover:text-[#a7d503]"
                          >
                            <Icon
                              size={17}
                              className="text-[#8db800] dark:text-[#a7d503]"
                            />

                            {
                              service.name
                            }
                          </Link>
                        );
                      }
                    )}
                  </div>
                </div>

                <Link
                  href="/work"
                  onClick={closeMenus}
                  className="border-b border-black/10 py-4 text-lg font-bold text-black dark:border-white/10 dark:text-white"
                >
                  Work
                </Link>

                <Link
                  href="/blog"
                  onClick={closeMenus}
                  className="border-b border-black/10 py-4 text-lg font-bold text-black dark:border-white/10 dark:text-white"
                >
                  Blog
                </Link>

                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  className="mt-6 w-full"
                  onClick={closeMenus}
                >
                  Let&apos;s Talk
                </Button>
              </nav>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}