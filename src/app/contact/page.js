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
    <main className="transition-colors duration-300 bg-[#F1F3ED] text-[#0C3B2E] dark:bg-[#071F18] dark:text-[#F1F3ED]">

      {/* =====================================================
          HERO / CONTACT
      ===================================================== */}
      <section className="relative overflow-hidden border-b border-[#0C3B2E]/10 bg-[#F1F3ED] dark:border-[#F1F3ED]/10 dark:bg-[#071F18]">

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
                        bg-[#FFBA00]
                      "
                    />

                    <p
                      className="
                        text-[8px]
                        font-black
                        uppercase
                        tracking-[0.22em]
                        text-[#6D9773]

                        sm:text-[9px]

                        dark:text-[#FFBA00]
                      "
                    >
                      Contact MarkitMe
                    </p>

                    <span
                      className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-[#6D9773]
                        dark:bg-[#FFBA00]
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
                      text-[#0C3B2E]

                      sm:text-4xl
                      md:text-5xl
                      lg:text-6xl

                      dark:text-[#F1F3ED]
                    "
                  >
                    Let&apos;s build something{" "}
                    <span className="text-[#6D9773] dark:text-[#FFBA00]">
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
                    text-[#0C3B2E]/60

                    dark:text-[#F1F3ED]/60

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
                      bg-[#FFBA00]
                      text-[#0C3B2E]
                    "
                  >
                    <Mail size={20} />
                  </div>

                  <div>

                    <p className="text-sm text-[#0C3B2E]/50 dark:text-[#F1F3ED]/50">
                      Email
                    </p>

                    <a
                      href="mailto:info@markitme.ca"
                      className="
                        font-bold
                        transition
                        hover:text-[#6D9773]
                        dark:hover:text-[#FFBA00]
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
                      bg-[#FFBA00]
                      text-[#0C3B2E]
                    "
                  >
                    <Phone size={20} />
                  </div>

                  <div>

                    <p className="text-sm text-[#0C3B2E]/50 dark:text-[#F1F3ED]/50">
                      Phone
                    </p>

                    <a
                      href="tel:+16139814844"
                      className="
                        font-bold
                        transition
                        hover:text-[#6D9773]
                        dark:hover:text-[#FFBA00]
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
                      bg-[#FFBA00]
                      text-[#0C3B2E]
                    "
                  >
                    <MapPin size={20} />
                  </div>

                  <div>

                    <p className="text-sm text-[#0C3B2E]/50 dark:text-[#F1F3ED]/50">
                      Location
                    </p>

                    <p className="font-bold text-[#0C3B2E] dark:text-[#F1F3ED]">
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
                border-[#0C3B2E]/10
                bg-[#0C3B2E]/[0.025]
                p-6
                shadow-sm
                transition-all
                duration-300
                hover:border-[#6D9773]

                dark:border-[#F1F3ED]/10
                dark:bg-[#F1F3ED]/[0.03]
                dark:hover:border-[#FFBA00]

                sm:p-9
              "
            >

              {/* Form Heading */}
              <div className="mb-8">

                <p
                  className="
                    text-[9px]
                    font-black
                    uppercase
                    tracking-[0.22em]
                    text-[#6D9773]
                    dark:text-[#FFBA00]
                  "
                >
                  Start a conversation
                </p>

                <h2
                  className="
                    mt-3
                    text-3xl
                    font-black
                    leading-[0.98]
                    tracking-[-0.045em]
                    text-[#0C3B2E]

                    sm:text-4xl

                    dark:text-[#F1F3ED]
                  "
                >
                  Tell us what you&apos;re building.
                </h2>

              </div>


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
                      text-[#0C3B2E]
                      dark:text-[#F1F3ED]
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
                      border-[#0C3B2E]/10
                      bg-[#F1F3ED]
                      px-4
                      py-4
                      text-[#0C3B2E]
                      outline-none
                      transition

                      placeholder:text-[#0C3B2E]/40

                      focus:border-[#6D9773]

                      dark:border-[#F1F3ED]/10
                      dark:bg-[#071F18]
                      dark:text-[#F1F3ED]
                      dark:placeholder:text-[#F1F3ED]/35
                      dark:focus:border-[#FFBA00]
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
                      text-[#0C3B2E]
                      dark:text-[#F1F3ED]
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
                      border-[#0C3B2E]/10
                      bg-[#F1F3ED]
                      px-4
                      py-4
                      text-[#0C3B2E]
                      outline-none
                      transition

                      placeholder:text-[#0C3B2E]/40

                      focus:border-[#6D9773]

                      dark:border-[#F1F3ED]/10
                      dark:bg-[#071F18]
                      dark:text-[#F1F3ED]
                      dark:placeholder:text-[#F1F3ED]/35
                      dark:focus:border-[#FFBA00]
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
                    text-[#0C3B2E]
                    dark:text-[#F1F3ED]
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
                    border-[#0C3B2E]/10
                    bg-[#F1F3ED]
                    px-4
                    py-4
                    text-[#0C3B2E]
                    outline-none
                    transition

                    placeholder:text-[#0C3B2E]/40

                    focus:border-[#6D9773]

                    dark:border-[#F1F3ED]/10
                    dark:bg-[#071F18]
                    dark:text-[#F1F3ED]
                    dark:placeholder:text-[#F1F3ED]/35
                    dark:focus:border-[#FFBA00]
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
                    text-[#0C3B2E]
                    dark:text-[#F1F3ED]
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
                    border-[#0C3B2E]/10
                    bg-[#F1F3ED]
                    px-4
                    py-4
                    text-[#0C3B2E]
                    outline-none
                    transition

                    placeholder:text-[#0C3B2E]/40

                    focus:border-[#6D9773]

                    dark:border-[#F1F3ED]/10
                    dark:bg-[#071F18]
                    dark:text-[#F1F3ED]
                    dark:placeholder:text-[#F1F3ED]/35
                    dark:focus:border-[#FFBA00]
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