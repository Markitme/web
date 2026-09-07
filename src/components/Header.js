"use client";

import Link from "next/link";
import Image from "next/image";

import {
  ChevronDown,
  Menu,
  X,
  Sparkles,
} from "lucide-react";

import { useEffect, useState } from "react";

import Button from "../components/ui/Button";

// Dynamic services data
import { services } from "@/data/services";

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
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [servicesOpen, setServicesOpen] =
    useState(false);

  const [
    mobileServicesOpen,
    setMobileServicesOpen,
  ] = useState(false);

  const closeMenus = () => {
    setMenuOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  };

  /* =====================================================
     CLOSE MOBILE MENU ON DESKTOP
  ====================================================== */

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

  /* =====================================================
     ESCAPE KEY
  ====================================================== */

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
      {/* =====================================================
          FIXED HEADER SPACER
      ====================================================== */}

      <div className="h-[112px] sm:h-[120px]" />


      {/* =====================================================
          FIXED HEADER
      ====================================================== */}

      <div className="fixed inset-x-0 top-0 z-[100]">


        {/* =================================================
            ANNOUNCEMENT BAR
        ================================================== */}

        <div
          className="
            relative
            overflow-hidden

            border-b
            border-[var(--border)]

            bg-[var(--accent)]
            text-white
          "
        >

          {/* Decorative shine */}

          <div
            className="
              pointer-events-none
              absolute
              inset-y-0
              -left-20
              w-32
              rotate-12
              bg-white/20
              blur-xl
              animate-[pulse_3s_ease-in-out_infinite]
            "
          />


          {/* Announcement Content */}

          <div
            className="
              container-custom
              flex
              min-h-[32px]
              items-center
              justify-center
              px-4
              py-1.5
              sm:min-h-[36px]
            "
          >

            <div
              className="
                flex
                items-center
                justify-center
                gap-2.5
                text-center
              "
            >

              {/* Small brand indicator */}

              <span
                className="
                  relative
                  flex
                  h-5
                  w-5
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[var(--foreground)]
                  text-[var(--accent-bright)]
                "
              >
                <Sparkles
                  size={11}
                  strokeWidth={2.5}
                />

                <span
                  className="
                    absolute
                    -right-0.5
                    -top-0.5
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[var(--accent-bright)]
                  "
                />
              </span>


              {/* Main Message */}

              <p
                className="
                  text-[9px]
                  font-black
                  uppercase
                  leading-none
                  tracking-[0.16em]

                  sm:text-[10px]
                  sm:tracking-[0.2em]

                  md:text-[11px]
                "
              >
               

                Make Your Business Impossible to Ignore
              </p>


              {/* Right decorative dot */}

              <span
                className="
                  hidden
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[var(--color-purple)]

                  sm:block
                "
              />

            </div>

          </div>

        </div>


        {/* =====================================================
            MAIN HEADER
        ====================================================== */}

        <header
          className="
            relative

            border-b
            border-[var(--border)]

            bg-[var(--background)]/90

            shadow-[0_8px_30px_rgba(0,0,0,0.04)]

            backdrop-blur-xl

            transition-colors
            duration-300

            dark:border-[var(--border)]
            dark:bg-[var(--background)]/95
            dark:shadow-[0_8px_30px_rgba(0,0,0,0.12)]
          "
          onMouseLeave={() =>
            setServicesOpen(false)
          }
        >

          {/* =================================================
              MAIN HEADER CONTENT
          ================================================== */}

          <div
            className="
              container-custom
              flex
              h-[72px]
              items-center
              justify-between

              sm:h-20
            "
          >


            {/* =================================================
                LOGO
            ================================================== */}

            <Link
              href="/"
              onClick={closeMenus}
              className="
                flex
                shrink-0
                items-center
              "
              aria-label="MarkitMe Home"
            >

              <Image
                src="/images/logo-dark.png"
                alt="MarkitMe"
                width={190}
                height={60}
                priority
                className="
                  block
                  h-auto
                  w-[145px]
                  object-contain

                  sm:w-[170px]
                "
              />

            </Link>


            {/* =================================================
                DESKTOP NAVIGATION
            ================================================== */}

            <nav
              className="
                hidden
                items-center
                gap-7

                lg:flex
                xl:gap-9
              "
              aria-label="Main navigation"
            >

              {/* Home + About */}

              {navLinks
                .slice(0, 2)
                .map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={closeMenus}
                    className="
                      text-sm
                      font-semibold

                      text-[var(--color-deep)]/65

                      transition-colors
                      duration-300

                      hover:text-[var(--color-purple)]

                      dark:text-[var(--color-cream)]/65
                      dark:hover:text-[var(--color-light-purple)]
                    "
                  >
                    {link.name}
                  </Link>
                ))}


              {/* =================================================
                  SERVICES
              ================================================== */}

              <button
                type="button"
                onMouseEnter={() =>
                  setServicesOpen(true)
                }
                onClick={() =>
                  setServicesOpen(
                    (previous) =>
                      !previous
                  )
                }
                className={`
                  group
                  flex
                  items-center
                  gap-1.5

                  text-sm
                  font-semibold

                  transition-colors
                  duration-300

                  ${
                    servicesOpen
                      ? "text-[var(--accent)] dark:text-[var(--accent)]"
                      : "text-[var(--foreground)]/70 hover:text-[var(--accent)] dark:text-[var(--foreground)]/70 dark:hover:text-[var(--accent)]"
                  }
                `}
                aria-expanded={
                  servicesOpen
                }
                aria-haspopup="true"
              >

                Services

                <ChevronDown
                  size={16}
                  className={`
                    transition-transform
                    duration-300

                    ${
                      servicesOpen
                        ? "rotate-180"
                        : ""
                    }
                  `}
                />

              </button>


              {/* Work + Blog + Contact */}

              {navLinks
                .slice(2)
                .map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={closeMenus}
                    className="
                      text-sm
                      font-semibold

                      text-[var(--color-deep)]/65

                      transition-colors
                      duration-300

                      hover:text-[var(--color-purple)]

                      dark:text-[var(--color-cream)]/65
                      dark:hover:text-[var(--color-light-purple)]
                    "
                  >
                    {link.name}
                  </Link>
                ))}

            </nav>


            {/* =================================================
                DESKTOP ACTIONS
            ================================================== */}

            <div
              className="
                hidden
                items-center
                gap-3

                lg:flex
              "
            >

              {/* CTA */}

              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  closeMenus();

                  window.dispatchEvent(
                    new Event(
                      "open-contact-modal"
                    )
                  );
                }}
              >
                Let&apos;s Talk
              </Button>

            </div>


            {/* =================================================
                MOBILE ACTIONS
            ================================================== */}

            <div
              className="
                flex
                items-center
                gap-3

                lg:hidden
              "
            >

              {/* Menu */}

              <button
                type="button"
                onClick={() => {
                  setMenuOpen(
                    (previous) =>
                      !previous
                  );

                  setServicesOpen(false);
                }}
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full

                  border
                  border-[var(--color-deep)]/15

                  bg-[var(--color-deep)]/[0.03]

                  text-[var(--color-deep)]

                  transition-all
                  duration-300

                  hover:border-[var(--color-purple)]
                  hover:bg-[var(--color-purple)]/10
                  hover:text-[var(--color-purple)]

                  dark:border-[var(--color-cream)]/15
                  dark:bg-[var(--color-cream)]/5
                  dark:text-[var(--color-cream)]

                  dark:hover:border-[var(--color-purple)]
                  dark:hover:bg-[var(--color-purple)]/15
                  dark:hover:text-[var(--color-light-purple)]
                "
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


          {/* =====================================================
              DESKTOP MEGA MENU
          ====================================================== */}

          <div
            onMouseEnter={() =>
              setServicesOpen(true)
            }
            className={`
              absolute
              left-0
              right-0
              top-full

              border-b
              border-[var(--color-deep)]/10

              bg-[var(--background)]

              shadow-2xl

              transition-all
              duration-300

              dark:border-[var(--color-cream)]/10
              dark:bg-[var(--background)]

              ${
                servicesOpen
                  ? "visible translate-y-0 opacity-100"
                  : "pointer-events-none invisible -translate-y-2 opacity-0"
              }
            `}
          >

            <div className="container-custom">

              <div
                className="
                  grid
                  max-h-[calc(100vh-112px)]
                  grid-cols-[0.9fr_2.1fr]
                  overflow-y-auto
                "
              >

                {/* =================================================
                    LEFT CONTENT
                ================================================== */}

                <div
                  className="
                    border-r
                    border-[var(--color-deep)]/10

                    px-8
                    py-9

                    dark:border-[var(--color-cream)]/10

                    xl:px-10
                  "
                >

                  <p
                    className="
                      text-xs
                      font-black
                      uppercase
                      tracking-[0.2em]

                      text-[var(--color-purple)]

                      dark:text-[var(--color-light-purple)]
                    "
                  >
                    What we do
                  </p>


                  <h2
                    className="
                      mt-4

                      text-3xl
                      font-black
                      leading-[0.98]
                      tracking-[-0.05em]

                      text-[var(--color-deep)]

                      dark:text-[var(--color-cream)]
                    "
                  >
                    Strategy and creative work
                    built for growth.
                  </h2>


                  <p
                    className="
                      mt-5
                      max-w-sm
                      text-sm
                      leading-7

                      text-[var(--color-deep)]/55

                      dark:text-[var(--color-cream)]/55
                    "
                  >
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


                {/* =================================================
                    SERVICES GRID
                ================================================== */}

                <div
                  className="
                    grid
                    grid-cols-2
                    gap-3

                    px-7
                    py-7

                    xl:px-10
                  "
                >

                  {services.map(
                    (service) => {
                      const Icon =
                        service.icon;

                      return (
                        <Link
                          key={
                            service.slug
                          }
                          href={`/services/${service.slug}`}
                          onClick={
                            closeMenus
                          }
                          className="
                            group
                            flex
                            min-h-[118px]
                            gap-4
                            rounded-2xl

                            border
                            border-[var(--color-deep)]/10

                            bg-[var(--surface)]

                            p-5

                            transition-all
                            duration-300

                            hover:-translate-y-0.5

                            hover:border-[var(--color-purple)]/40
                            hover:bg-[var(--color-purple)]/10

                            dark:border-[var(--color-cream)]/10
                            dark:bg-[var(--surface)]

                            dark:hover:border-[var(--color-purple)]/50
                            dark:hover:bg-[var(--color-purple)]/10
                          "
                        >

                          {/* Icon */}

                          <div
                            className="
                              flex
                              h-11
                              w-11
                              shrink-0
                              items-center
                              justify-center
                              rounded-xl

                              bg-[var(--color-light-purple)]

                              text-[var(--color-deep)]
                            "
                          >
                            <Icon
                              size={20}
                              strokeWidth={2}
                            />
                          </div>


                          {/* Text */}

                          <div>

                            <h3
                              className="
                                text-sm
                                font-black

                                text-[var(--color-deep)]

                                transition-colors

                                group-hover:text-[var(--color-purple)]

                                dark:text-[var(--color-cream)]
                                dark:group-hover:text-[var(--color-light-purple)]
                              "
                            >
                              {service.title}
                            </h3>


                            <p
                              className="
                                mt-2
                                line-clamp-2
                                text-xs
                                leading-5

                                text-[var(--color-deep)]/50

                                dark:text-[var(--color-cream)]/50
                              "
                            >
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


          {/* =====================================================
              MOBILE MENU
          ====================================================== */}

          <div
            id="mobile-navigation"
            className={`
              overflow-hidden

              border-t
              border-[var(--color-deep)]/10

              bg-[var(--background)]

              transition-all
              duration-300

              lg:hidden

              dark:border-[var(--color-cream)]/10
              dark:bg-[var(--background)]

              ${
                menuOpen
                  ? "max-h-[calc(100vh-112px)] overflow-y-auto opacity-100"
                  : "max-h-0 border-t-0 opacity-0"
              }
            `}
          >

            <div
              className="
                container-custom
                px-0
                py-5
              "
            >

              <nav className="flex flex-col">


                {/* Home */}

                <Link
                  href="/"
                  onClick={closeMenus}
                  className="
                    border-b
                    border-[var(--color-deep)]/10

                    py-4

                    text-lg
                    font-bold

                    text-[var(--color-deep)]

                    dark:border-[var(--color-cream)]/10
                    dark:text-[var(--color-cream)]
                  "
                >
                  Home
                </Link>


                {/* About */}

                <Link
                  href="/about"
                  onClick={closeMenus}
                  className="
                    border-b
                    border-[var(--color-deep)]/10

                    py-4

                    text-lg
                    font-bold

                    text-[var(--color-deep)]

                    dark:border-[var(--color-cream)]/10
                    dark:text-[var(--color-cream)]
                  "
                >
                  About
                </Link>


                {/* Services */}

                <button
                  type="button"
                  onClick={() =>
                    setMobileServicesOpen(
                      (previous) =>
                        !previous
                    )
                  }
                  className="
                    flex
                    items-center
                    justify-between

                    border-b
                    border-[var(--color-deep)]/10

                    py-4

                    text-left
                    text-lg
                    font-bold

                    text-[var(--color-deep)]

                    dark:border-[var(--color-cream)]/10
                    dark:text-[var(--color-cream)]
                  "
                  aria-expanded={
                    mobileServicesOpen
                  }
                >

                  Services

                  <ChevronDown
                    size={20}
                    className={`
                      transition-transform
                      duration-300

                      ${
                        mobileServicesOpen
                          ? "rotate-180"
                          : ""
                      }
                    `}
                  />

                </button>


                {/* Mobile Services */}

                <div
                  className={`
                    overflow-hidden
                    transition-all
                    duration-300

                    ${
                      mobileServicesOpen
                        ? "max-h-[2000px] opacity-100"
                        : "max-h-0 opacity-0"
                    }
                  `}
                >

                  <div
                    className="
                      border-b
                      border-[var(--color-deep)]/10

                      bg-[var(--color-deep)]/[0.025]

                      px-4
                      py-3

                      dark:border-[var(--color-cream)]/10
                      dark:bg-[var(--color-cream)]/[0.03]
                    "
                  >

                    {/* View All */}

                    <Link
                      href="/services"
                      onClick={closeMenus}
                      className="
                        mb-2
                        flex
                        rounded-xl

                        bg-[var(--color-light-purple)]

                        px-4
                        py-3

                        text-sm
                        font-black

                        text-[var(--color-deep)]
                      "
                    >
                      View All Services
                    </Link>


                    {/* Services */}

                    {services.map(
                      (service) => {
                        const Icon =
                          service.icon;

                        return (
                          <Link
                            key={
                              service.slug
                            }
                            href={`/services/${service.slug}`}
                            onClick={
                              closeMenus
                            }
                            className="
                              flex
                              items-center
                              gap-3
                              rounded-xl

                              px-3
                              py-3

                              text-sm
                              font-bold

                              text-[var(--color-deep)]/70

                              transition

                              hover:bg-[var(--color-light-purple)]/15
                              hover:text-[var(--color-purple)]

                              dark:text-[var(--color-cream)]/70
                              dark:hover:text-[var(--color-light-purple)]
                            "
                          >

                            <Icon
                              size={17}
                              className="
                                text-[var(--color-purple)]

                                dark:text-[var(--color-light-purple)]
                              "
                            />

                            {service.title}

                          </Link>
                        );
                      }
                    )}

                  </div>

                </div>


                {/* Work */}

                <Link
                  href="/work"
                  onClick={closeMenus}
                  className="
                    border-b
                    border-[var(--color-deep)]/10

                    py-4

                    text-lg
                    font-bold

                    text-[var(--color-deep)]

                    dark:border-[var(--color-cream)]/10
                    dark:text-[var(--color-cream)]
                  "
                >
                  Work
                </Link>


                {/* Blog */}

                <Link
                  href="/blog"
                  onClick={closeMenus}
                  className="
                    border-b
                    border-[var(--color-deep)]/10

                    py-4

                    text-lg
                    font-bold

                    text-[var(--color-deep)]

                    dark:border-[var(--color-cream)]/10
                    dark:text-[var(--color-cream)]
                  "
                >
                  Blog
                </Link>


                {/* Contact */}

                <Link
                  href="/contact"
                  onClick={closeMenus}
                  className="
                    border-b
                    border-[var(--color-deep)]/10

                    py-4

                    text-lg
                    font-bold

                    text-[var(--color-deep)]

                    dark:border-[var(--color-cream)]/10
                    dark:text-[var(--color-cream)]
                  "
                >
                  Contact
                </Link>


                {/* CTA */}

                <Button
                  variant="primary"
                  size="lg"
                  className="mt-6 w-full"
                  onClick={() => {
                    closeMenus();

                    window.dispatchEvent(
                      new Event(
                        "open-contact-modal"
                      )
                    );
                  }}
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