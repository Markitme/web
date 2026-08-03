import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import Button from "../../components/ui/Button";

export default function ContactPage() {
  return (
    <main className="bg-white text-black dark:bg-[#0a0a0a] dark:text-white">
      <section className="px-5 py-24 sm:py-32">
        <div className="container-custom grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">

          {/* Contact Information */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8db800] dark:text-[#a7d503]">
              Contact MarkitMe
            </p>

            <h1 className="mt-5 text-5xl font-black tracking-[-0.05em] sm:text-4xl lg:text-5xl xl:text-6xl">
              Let&apos;s build something that matters.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-black/60 dark:text-white/60">
              Have a project, challenge, or growth goal in mind? Tell us about
              it, and we&apos;ll explore how we can help.
            </p>

            <div className="mt-12 space-y-6">

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#a7d503] text-black">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="text-sm text-black/50 dark:text-white/50">
                    Email
                  </p>

                  <a
                    href="mailto:info@markitme.ca"
                    className="font-bold transition hover:text-[#8db800] dark:hover:text-[#a7d503]"
                  >
                    info@markitme.ca
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#a7d503] text-black">
                  <Phone size={20} />
                </div>

                <div>
                  <p className="text-sm text-black/50 dark:text-white/50">
                    Phone
                  </p>

                  <a
                    href="tel:+16139814844"
                    className="font-bold transition hover:text-[#8db800] dark:hover:text-[#a7d503]"
                  >
                    +1 (613)-981-4844
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#a7d503] text-black">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-sm text-black/50 dark:text-white/50">
                    Location
                  </p>

                  <p className="font-bold">
                    34 Minowan Miikan Lane, Toronto, M6J 0G3 MarkitMe
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <form className="rounded-3xl border border-black/10 bg-black/[0.03] p-6 dark:border-white/10 dark:bg-white/[0.03] sm:p-9">

            <div className="grid gap-6 sm:grid-cols-2">

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-bold"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-4 text-black outline-none transition placeholder:text-black/40 focus:border-[#8db800] dark:border-white/10 dark:bg-black dark:text-white dark:placeholder:text-white/35 dark:focus:border-[#a7d503]"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-bold"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-4 text-black outline-none transition placeholder:text-black/40 focus:border-[#8db800] dark:border-white/10 dark:bg-black dark:text-white dark:placeholder:text-white/35 dark:focus:border-[#a7d503]"
                />
              </div>

            </div>

            {/* Company */}
            <div className="mt-6">
              <label
                htmlFor="company"
                className="mb-2 block text-sm font-bold"
              >
                Company
              </label>

              <input
                id="company"
                name="company"
                type="text"
                placeholder="Your company"
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-4 text-black outline-none transition placeholder:text-black/40 focus:border-[#8db800] dark:border-white/10 dark:bg-black dark:text-white dark:placeholder:text-white/35 dark:focus:border-[#a7d503]"
              />
            </div>

            {/* Message */}
            <div className="mt-6">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-bold"
              >
                Tell us about your project
              </label>

              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="What would you like to achieve?"
                className="w-full resize-none rounded-xl border border-black/10 bg-white px-4 py-4 text-black outline-none transition placeholder:text-black/40 focus:border-[#8db800] dark:border-white/10 dark:bg-black dark:text-white dark:placeholder:text-white/35 dark:focus:border-[#a7d503]"
              />
            </div>

            {/* Common Button */}
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
      </section>
    </main>
  );
}