"use client";

import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import Button from "../../components/ui/Button";
import CTA from "../../components/CTA";
export default function ContactPage() {
  return (
    <main className="transition-colors duration-300 bg-[var(--color-cream)] text-[var(--color-deep)] dark:bg-[var(--color-night)] dark:text-[var(--color-cream)]">

      {/* =====================================================
          HERO / CONTACT
      ===================================================== */}
      <section className="relative overflow-hidden border-b border-[var(--color-deep)]/10 bg-[var(--color-cream)] dark:border-[var(--color-cream)]/10 dark:bg-[var(--color-night)]">

        <div className="container-custom relative px-5 py-16 sm:py-20 lg:py-24">

          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">

            {/* =================================================
                CONTACT INFORMATION
            ================================================= */}
            <div>

              {/* HEADING */}
              <div className="mb-7 flex flex-col gap-4">

                <div className="max-w-[680px]">

                  {/* Eyebrow */}
                  <div className="flex items-center gap-2">

                    <span
                      className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-[var(--color-gold)]
                      "
                    />

                    <p
                      className="
                        text-[8px]
                        font-black
                        uppercase
                        tracking-[0.22em]
                        text-[var(--color-green)]

                        sm:text-[9px]

                        dark:text-[var(--color-gold)]
                      "
                    >
                      Contact MarkitMe
                    </p>

                    <span
                      className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-[var(--color-green)]
                        dark:bg-[var(--color-gold)]
                      "
                    />

                  </div>

                  {/* Heading */}
                  <h1
                    className="
                      mt-3
                      text-3xl
                      font-black
                      leading-[0.95]
                      tracking-[-0.055em]
                      text-[var(--color-deep)]

                      sm:text-4xl
                      md:text-5xl
                      lg:text-6xl

                      dark:text-[var(--color-cream)]
                    "
                  >
                    Let&apos;s build something{" "}
                    <span className="text-[var(--color-green)] dark:text-[var(--color-gold)]">
                      that matters.
                    </span>
                  </h1>

                </div>

                {/* Description */}
                <p
                  className="
                    mt-5
                    max-w-2xl
                    text-lg
                    leading-8
                    text-[var(--color-deep)]/60

                    dark:text-[var(--color-cream)]/60

                    sm:text-xl
                  "
                >
                  Have a project, challenge, or growth goal in mind? Tell us
                  about it, and we&apos;ll explore how we can help turn your
                  ideas into meaningful digital growth.
                </p>

              </div>


              {/* =================================================
                  CONTACT DETAILS
              ================================================= */}
              <div className="space-y-6">

                {/* EMAIL */}
                <div className="flex items-center gap-4">

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[var(--color-gold)]
                      text-[var(--color-deep)]
                    "
                  >
                    <Mail size={20} />
                  </div>

                  <div>

                    <p className="text-sm text-[var(--color-deep)]/50 dark:text-[var(--color-cream)]/50">
                      Email
                    </p>

                    <a
                      href="mailto:info@markitme.ca"
                      className="
                        font-bold
                        transition
                        hover:text-[var(--color-green)]
                        dark:hover:text-[var(--color-gold)]
                      "
                    >
                      info@markitme.ca
                    </a>

                  </div>

                </div>


                {/* PHONE */}
                <div className="flex items-center gap-4">

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[var(--color-gold)]
                      text-[var(--color-deep)]
                    "
                  >
                    <Phone size={20} />
                  </div>

                  <div>

                    <p className="text-sm text-[var(--color-deep)]/50 dark:text-[var(--color-cream)]/50">
                      Phone
                    </p>

                    <a
                      href="tel:+16139814844"
                      className="
                        font-bold
                        transition
                        hover:text-[var(--color-green)]
                        dark:hover:text-[var(--color-gold)]
                      "
                    >
                      +1 (613)-981-4844
                    </a>

                  </div>

                </div>


                {/* LOCATION */}
                <div className="flex items-center gap-4">

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[var(--color-gold)]
                      text-[var(--color-deep)]
                    "
                  >
                    <MapPin size={20} />
                  </div>

                  <div>

                    <p className="text-sm text-[var(--color-deep)]/50 dark:text-[var(--color-cream)]/50">
                      Location
                    </p>

                    <p className="font-bold text-[var(--color-deep)] dark:text-[var(--color-cream)]">
                      34 Minowan Miikan Lane, Toronto, M6J 0G3
                    </p>

                  </div>

                </div>

              </div>

            </div>


            {/* =================================================
                CONTACT FORM
            ================================================= */}
            <form
              className="
                rounded-[28px]
                border
                border-[var(--color-deep)]/10
                bg-[var(--color-deep)]/[0.025]
                p-6
                shadow-sm
                transition-all
                duration-300
                hover:border-[var(--color-green)]

                dark:border-[var(--color-cream)]/10
                dark:bg-[var(--color-cream)]/[0.03]
                dark:hover:border-[var(--color-gold)]

                sm:p-9
              "
            >



              {/* =================================================
                  NAME + EMAIL
              ================================================= */}
              <div className="grid gap-6 sm:grid-cols-2">

                {/* Name */}
                <div>

                  <label
                    htmlFor="name"
                    className="
                      mb-2
                      block
                      text-sm
                      font-bold
                      text-[var(--color-deep)]
                      dark:text-[var(--color-cream)]
                    "
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-[var(--color-deep)]/10
                      bg-[var(--color-cream)]
                      px-4
                      py-4
                      text-[var(--color-deep)]
                      outline-none
                      transition

                      placeholder:text-[var(--color-deep)]/40

                      focus:border-[var(--color-green)]

                      dark:border-[var(--color-cream)]/10
                      dark:bg-[var(--color-night)]
                      dark:text-[var(--color-cream)]
                      dark:placeholder:text-[var(--color-cream)]/35
                      dark:focus:border-[var(--color-gold)]
                    "
                  />

                </div>


                {/* Email */}
                <div>

                  <label
                    htmlFor="email"
                    className="
                      mb-2
                      block
                      text-sm
                      font-bold
                      text-[var(--color-deep)]
                      dark:text-[var(--color-cream)]
                    "
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-[var(--color-deep)]/10
                      bg-[var(--color-cream)]
                      px-4
                      py-4
                      text-[var(--color-deep)]
                      outline-none
                      transition

                      placeholder:text-[var(--color-deep)]/40

                      focus:border-[var(--color-green)]

                      dark:border-[var(--color-cream)]/10
                      dark:bg-[var(--color-night)]
                      dark:text-[var(--color-cream)]
                      dark:placeholder:text-[var(--color-cream)]/35
                      dark:focus:border-[var(--color-gold)]
                    "
                  />

                </div>

              </div>


              {/* =================================================
                  COMPANY
              ================================================= */}
              <div className="mt-6">

                <label
                  htmlFor="company"
                  className="
                    mb-2
                    block
                    text-sm
                    font-bold
                    text-[var(--color-deep)]
                    dark:text-[var(--color-cream)]
                  "
                >
                  Company
                </label>

                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Your company"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-[var(--color-deep)]/10
                    bg-[var(--color-cream)]
                    px-4
                    py-4
                    text-[var(--color-deep)]
                    outline-none
                    transition

                    placeholder:text-[var(--color-deep)]/40

                    focus:border-[var(--color-green)]

                    dark:border-[var(--color-cream)]/10
                    dark:bg-[var(--color-night)]
                    dark:text-[var(--color-cream)]
                    dark:placeholder:text-[var(--color-cream)]/35
                    dark:focus:border-[var(--color-gold)]
                  "
                />

              </div>


              {/* =================================================
                  MESSAGE
              ================================================= */}
              <div className="mt-6">

                <label
                  htmlFor="message"
                  className="
                    mb-2
                    block
                    text-sm
                    font-bold
                    text-[var(--color-deep)]
                    dark:text-[var(--color-cream)]
                  "
                >
                  Tell us about your project
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="What would you like to achieve?"
                  className="
                    w-full
                    resize-none
                    rounded-xl
                    border
                    border-[var(--color-deep)]/10
                    bg-[var(--color-cream)]
                    px-4
                    py-4
                    text-[var(--color-deep)]
                    outline-none
                    transition

                    placeholder:text-[var(--color-deep)]/40

                    focus:border-[var(--color-green)]

                    dark:border-[var(--color-cream)]/10
                    dark:bg-[var(--color-night)]
                    dark:text-[var(--color-cream)]
                    dark:placeholder:text-[var(--color-cream)]/35
                    dark:focus:border-[var(--color-gold)]
                  "
                />

              </div>


              {/* =================================================
                  BUTTON
              ================================================= */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="mt-7"
              >
                Send Message
              </Button>

            </form>

          </div>

        </div>
      </section>


      {/* =====================================================
          CTA
      ===================================================== */}
      <CTA
        eyebrow="Let's Work Together"
        title="Have an idea? Let's make it matter."
        description="Tell us what you are building, where you want to go, and how we can help you turn your ideas into meaningful digital growth."
        buttonText="Start a Conversation"
        buttonHref="/contact"
      />

    </main>
  );
}