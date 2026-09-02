import Link from "next/link";
import Image from "next/image";

import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-[var(--color-deep)]/10
        bg-[var(--color-cream)]
        text-[var(--color-deep)]
        transition-colors
        duration-300

        dark:border-[var(--color-cream)]/10
        dark:bg-[var(--color-deep)]
        dark:text-[var(--color-cream)]
      "
    >

      {/* =====================================================
          DECORATIVE BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Neutral glow */}

        <div
          className="
            absolute
            -right-32
            -top-40
            h-96
            w-96
            rounded-full
            bg-[var(--color-black)]/[0.04]
            blur-3xl
          "
        />

        {/* Neutral glow */}

        <div
          className="
            absolute
            -bottom-40
            -left-32
            h-80
            w-80
            rounded-full
            bg-[var(--color-white-soft)]/[0.08]
            blur-3xl
          "
        />

        {/* Neutral glow */}

        <div
          className="
            absolute
            right-[30%]
            bottom-[-180px]
            h-72
            w-72
            rounded-full
            bg-[var(--color-gray-light)]/[0.08]
            blur-3xl
          "
        />

      </div>


      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="container-custom relative z-10">


        {/* =====================================================
            MAIN FOOTER
        ====================================================== */}

        <div
          className="
            grid
            gap-12
            py-14

            sm:grid-cols-2

            lg:grid-cols-[1.4fr_0.8fr_1.2fr_0.9fr]
            lg:gap-10
            lg:py-16
          "
        >


          {/* =================================================
              BRAND
          ================================================= */}

          <div>

            {/* Logo */}

            <Link
              href="/"
              className="flex w-fit shrink-0 items-center"
              aria-label="MarkitMe Home"
            >

              {/* Dark mode logo */}

              <Image
                src="/images/logo-light.png"
                alt="MarkitMe"
                width={190}
                height={60}
                priority
                className="
                  hidden
                  h-auto
                  w-[145px]
                  object-contain
                  dark:block
                  sm:w-[170px]
                "
              />

              {/* Light mode logo */}

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
                  dark:hidden
                  sm:w-[170px]
                "
              />

            </Link>


            {/* Description */}

            <p
              className="
                mt-5
                max-w-sm
                text-sm
                leading-6
                text-[var(--color-deep)]/55

                dark:text-[var(--color-cream)]/55
              "
            >
              Strategy, creativity, technology, and marketing
              built to help ambitious businesses grow.
            </p>


            {/* Let's Talk */}

            <Link
              href="/contact"
              className="
                group
                mt-6
                inline-flex
                items-center
                gap-2

                text-sm
                font-bold

                text-[var(--color-deep)]

                transition-colors
                duration-300

                hover:text-[var(--foreground)]

                dark:text-[var(--color-cream)]
                dark:hover:text-[var(--color-white-soft)]
              "
            >

              Let&apos;s Talk

              <ArrowUpRight
                size={16}
                className="
                  transition-transform
                  duration-300

                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />

            </Link>

          </div>


          {/* =================================================
              QUICK LINKS
          ================================================= */}

          <div>

            <h3
              className="
                mb-5
                text-xs
                font-black
                uppercase
                tracking-[0.16em]
                text-[var(--color-deep)]

                dark:text-[var(--color-cream)]
              "
            >
              Explore
            </h3>


            <nav className="flex flex-col gap-3.5">

              {[
                {
                  label: "About",
                  href: "/about",
                },
                {
                  label: "Services",
                  href: "/services",
                },
                {
                  label: "Work",
                  href: "/work",
                },
                {
                  label: "Blog",
                  href: "/blog",
                },
                {
                  label: "Contact",
                  href: "/contact",
                },
              ].map((item) => (

                <Link
                  key={item.label}
                  href={item.href}
                  className="
                    group
                    flex
                    w-fit
                    items-center
                    gap-1.5

                    text-sm
                    font-medium

                    text-[var(--color-deep)]/55

                    transition-all
                    duration-300

                    hover:translate-x-1
                    hover:text-[var(--foreground)]

                    dark:text-[var(--color-cream)]/55
                    dark:hover:text-[var(--color-white-soft)]
                  "
                >

                  <span>
                    {item.label}
                  </span>

                  <ArrowUpRight
                    size={13}
                    className="
                      opacity-0
                      -translate-x-1

                      transition-all
                      duration-300

                      group-hover:translate-x-0
                      group-hover:opacity-100
                    "
                  />

                </Link>

              ))}

            </nav>

          </div>


          {/* =================================================
              CONTACT
          ================================================= */}

          <div>

            <h3
              className="
                mb-5
                text-xs
                font-black
                uppercase
                tracking-[0.16em]

                text-[var(--color-deep)]

                dark:text-[var(--color-cream)]
              "
            >
              Contact
            </h3>


            <div className="flex flex-col gap-5">


              {/* =================================================
                  EMAIL
              ================================================= */}

              <a
                href="mailto:info@markitme.ca"
                className="group flex items-start gap-3"
              >

                <span
                  className="
                    mt-0.5
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl

                    border
                    border-[var(--border)]

                    bg-[var(--surface-soft)]

                    text-[var(--foreground)]/75

                    transition-all
                    duration-300

                    group-hover:border-[var(--foreground)]
                    group-hover:bg-[var(--foreground)]
                    group-hover:text-[var(--background)]

                    dark:border-[var(--border)]
                    dark:bg-[var(--surface-soft)]
                    dark:text-[var(--foreground)]/75

                    dark:group-hover:border-[var(--foreground)]
                    dark:group-hover:bg-[var(--foreground)]
                    dark:group-hover:text-[var(--background)]
                  "
                >

                  <Mail size={15} />

                </span>


                <div>

                  <span
                    className="
                      block
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.12em]

                      text-[var(--color-deep)]/35

                      dark:text-[var(--color-cream)]/35
                    "
                  >
                    Email
                  </span>

                  <span
                    className="
                      mt-1
                      block
                      text-sm
                      font-medium

                      text-[var(--color-deep)]/70

                      transition-colors
                      duration-300

                      group-hover:text-[var(--color-green)]

                      dark:text-[var(--color-cream)]/65
                      dark:group-hover:text-[var(--color-gold)]
                    "
                  >
                    info@markitme.ca
                  </span>

                </div>

              </a>


              {/* =================================================
                  PHONE
              ================================================= */}

              <a
                href="tel:+16139814844"
                className="group flex items-start gap-3"
              >

                <span
                  className="
                    mt-0.5
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl

                    border
                    border-[var(--border)]

                    bg-[var(--surface-soft)]

                    text-[var(--foreground)]/75

                    transition-all
                    duration-300

                    group-hover:border-[var(--foreground)]
                    group-hover:bg-[var(--foreground)]
                    group-hover:text-[var(--background)]

                    dark:border-[var(--border)]
                    dark:bg-[var(--surface-soft)]
                    dark:text-[var(--foreground)]/75

                    dark:group-hover:border-[var(--foreground)]
                    dark:group-hover:bg-[var(--foreground)]
                    dark:group-hover:text-[var(--background)]
                  "
                >

                  <Phone size={15} />

                </span>


                <div>

                  <span
                    className="
                      block
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.12em]

                      text-[var(--color-deep)]/35

                      dark:text-[var(--color-cream)]/35
                    "
                  >
                    Phone
                  </span>

                  <span
                    className="
                      mt-1
                      block
                      text-sm
                      font-medium

                      text-[var(--foreground)]/75

                      transition-colors
                      duration-300

                      group-hover:text-[var(--foreground)]

                      dark:text-[var(--foreground)]/75
                      dark:group-hover:text-[var(--foreground)]
                    "
                  >
                    +1 (613)-981-4844
                  </span>

                </div>

              </a>


              {/* =================================================
                  LOCATION
              ================================================= */}

              <div className="flex items-start gap-3">

                <span
                  className="
                    mt-0.5
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl

                    border
                    border-[var(--border)]

                    bg-[var(--surface-soft)]

                    text-[var(--foreground)]/75

                    transition-all
                    duration-300

                    dark:border-[var(--border)]
                    dark:bg-[var(--surface-soft)]
                    dark:text-[var(--foreground)]/75
                  "
                >

                  <MapPin size={15} />

                </span>


                <div>

                  <span
                    className="
                      block
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.12em]

                      text-[var(--color-deep)]/35

                      dark:text-[var(--color-cream)]/35
                    "
                  >
                    Location
                  </span>


                  <span
                    className="
                      mt-1
                      block
                      max-w-[220px]
                      text-sm
                      leading-5
                      font-medium

                      text-[var(--color-deep)]/70

                      dark:text-[var(--color-cream)]/65
                    "
                  >
                    34 Minowan Miikan Lane,
                    <br />
                    Toronto, M6J 0G3
                  </span>

                </div>

              </div>

            </div>

          </div>


          {/* =================================================
    SOCIAL MEDIA
================================================= */}

<div>
  <h3
    className="
      mb-5
      text-xs
      font-black
      uppercase
      tracking-[0.16em]
      text-[var(--color-deep)]
      dark:text-[var(--color-cream)]
    "
  >
    Follow Us
  </h3>

  <p
    className="
      max-w-[230px]
      text-sm
      leading-6
      text-[var(--color-deep)]/50
      dark:text-[var(--color-cream)]/45
    "
  >
    Follow MarkitMe for creative ideas,
    digital insights, and business growth.
  </p>

  <div className="mt-6 flex flex-wrap gap-3">

    {/* Instagram */}
    <a
      href="https://www.instagram.com/markitme.ca/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="MarkitMe Instagram"
      className="
        flex h-10 w-10 items-center justify-center
        rounded-full
        border border-[var(--border)]
        bg-[var(--surface-soft)]
        text-[var(--foreground)]/75
        transition-all duration-300
        hover:-translate-y-1
        hover:border-[var(--foreground)]
        hover:bg-[var(--foreground)]
        hover:text-[var(--background)]

        dark:border-[var(--border)]
        dark:bg-[var(--surface-soft)]
        dark:text-[var(--foreground)]/75
        dark:hover:border-[var(--foreground)]
        dark:hover:bg-[var(--foreground)]
        dark:hover:text-[var(--background)]
      "
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-[17px] w-[17px]"
        aria-hidden="true"
      >
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
        />

        <circle
          cx="12"
          cy="12"
          r="4"
        />

        <circle
          cx="17.5"
          cy="6.5"
          r="1"
          fill="currentColor"
          stroke="none"
        />
      </svg>
    </a>


    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/company/markitme-ca/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="MarkitMe LinkedIn"
      className="
        flex h-10 w-10 items-center justify-center
        rounded-full
        border border-[var(--border)]
        bg-[var(--surface-soft)]
        text-[var(--foreground)]/75
        transition-all duration-300
        hover:-translate-y-1
        hover:border-[var(--foreground)]
        hover:bg-[var(--foreground)]
        hover:text-[var(--background)]

        dark:border-[var(--border)]
        dark:bg-[var(--surface-soft)]
        dark:text-[var(--foreground)]/75
        dark:hover:border-[var(--foreground)]
        dark:hover:bg-[var(--foreground)]
        dark:hover:text-[var(--background)]
      "
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-[17px] w-[17px]"
        aria-hidden="true"
      >
        <path d="M6.5 8.5H3.5V20h3V8.5ZM5 3.5C4 3.5 3.2 4.3 3.2 5.3S4 7.1 5 7.1s1.8-.8 1.8-1.8S6 3.5 5 3.5ZM20.5 13.4c0-3.5-1.9-5.1-4.5-5.1-2.1 0-3 1.2-3.5 2v-1.8h-3V20h3v-6.1c0-1.6.3-3.2 2.3-3.2 2 0 2 1.9 2 3.3V20h3v-6.6Z" />
      </svg>
    </a>


    {/* Facebook */}
    <a
      href="https://www.facebook.com/profile.php?id=61570996980204"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="MarkitMe Facebook"
      className="
        flex h-10 w-10 items-center justify-center
        rounded-full
        border border-[var(--border)]
        bg-[var(--surface-soft)]
        text-[var(--foreground)]/75
        transition-all duration-300
        hover:-translate-y-1
        hover:border-[var(--foreground)]
        hover:bg-[var(--foreground)]
        hover:text-[var(--background)]

        dark:border-[var(--border)]
        dark:bg-[var(--surface-soft)]
        dark:text-[var(--foreground)]/75
        dark:hover:border-[var(--foreground)]
        dark:hover:bg-[var(--foreground)]
        dark:hover:text-[var(--background)]
      "
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-[17px] w-[17px]"
        aria-hidden="true"
      >
        <path d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v2H6v4h3v6h4v-6h3.2l.8-4H13V9c0-.6.4-1 1-1Z" />
      </svg>
    </a>

  </div>
</div>

        </div>


        {/* =====================================================
            BRAND STRIP
        ====================================================== */}

        <div
          className="
            mb-8
            hidden
            h-px
            bg-gradient-to-r
            from-transparent
            via-[var(--color-green)]/30
            to-transparent

            sm:block
          "
        />


        {/* =====================================================
            BOTTOM FOOTER
        ====================================================== */}

        <div
          className="
            flex
            flex-col
            justify-between
            gap-4

            border-t
            border-[var(--color-deep)]/10

            py-7

            text-sm
            text-[var(--color-deep)]/40

            sm:flex-row
            sm:items-center

            dark:border-[var(--color-cream)]/10
            dark:text-[var(--color-cream)]/35
          "
        >

          {/* Copyright */}

          <p>
            © {new Date().getFullYear()} MarkitMe.
            All rights reserved.
          </p>


          {/* Legal */}

          <div className="flex flex-wrap gap-5">

            <Link
              href="/privacy-policy"
              className="
                transition-colors
                duration-300

                hover:text-[var(--color-green)]

                dark:hover:text-[var(--color-gold)]
              "
            >
              Privacy Policy
            </Link>


            <Link
              href="/terms-and-conditions"
              className="
                transition-colors
                duration-300

                hover:text-[var(--color-green)]

                dark:hover:text-[var(--color-gold)]
              "
            >
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}