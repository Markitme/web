import {
ArrowRight,
Mail,
MapPin,
Phone,
} from "lucide-react";

export default function ContactPage() {
return ( <main className="bg-white text-black dark:bg-[#0a0a0a] dark:text-white"> <section className="px-5 py-24 sm:py-32"> <div className="container-custom grid gap-14 lg:grid-cols-[0.9fr_1.1fr]"> <div> <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8db800] dark:text-[#a7d503]">
Contact MarkitMe </p>


        <h1 className="mt-5 text-5xl font-black tracking-[-0.05em] sm:text-7xl">
          Let&apos;s build something that matters.
        </h1>

        <p className="mt-7 max-w-xl text-lg leading-8 text-black/60 dark:text-white/60">
          Have a project, challenge, or growth goal in mind? Tell us about
          it, and we&apos;ll explore how we can help.
        </p>

        <div className="mt-12 space-y-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#a7d503] text-black">
              <Mail size={20} />
            </div>

            <div>
              <p className="text-sm text-black/50 dark:text-white/50">
                Email
              </p>

              <a
                href="mailto:hello@markitme.ca"
                className="font-bold hover:text-[#8db800] dark:hover:text-[#a7d503]"
              >
                hello@markitme.ca
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#a7d503] text-black">
              <Phone size={20} />
            </div>

            <div>
              <p className="text-sm text-black/50 dark:text-white/50">
                Phone
              </p>

              <a
                href="tel:+1"
                className="font-bold hover:text-[#8db800] dark:hover:text-[#a7d503]"
              >
                Let&apos;s connect
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#a7d503] text-black">
              <MapPin size={20} />
            </div>

            <div>
              <p className="text-sm text-black/50 dark:text-white/50">
                Location
              </p>

              <p className="font-bold">
                Canada
              </p>
            </div>
          </div>
        </div>
      </div>

      <form className="rounded-3xl border border-black/10 bg-black/[0.03] p-6 dark:border-white/10 dark:bg-white/[0.03] sm:p-9">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-bold"
            >
              Name
            </label>

            <input
              id="name"
              type="text"
              placeholder="Your name"
              className="w-full rounded-xl border border-black/10 bg-white px-4 py-4 outline-none transition focus:border-[#8db800] dark:border-white/10 dark:bg-black dark:focus:border-[#a7d503]"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-bold"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="you@company.com"
              className="w-full rounded-xl border border-black/10 bg-white px-4 py-4 outline-none transition focus:border-[#8db800] dark:border-white/10 dark:bg-black dark:focus:border-[#a7d503]"
            />
          </div>
        </div>

        <div className="mt-6">
          <label
            htmlFor="company"
            className="mb-2 block text-sm font-bold"
          >
            Company
          </label>

          <input
            id="company"
            type="text"
            placeholder="Your company"
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-4 outline-none transition focus:border-[#8db800] dark:border-white/10 dark:bg-black dark:focus:border-[#a7d503]"
          />
        </div>

        <div className="mt-6">
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-bold"
          >
            Tell us about your project
          </label>

          <textarea
            id="message"
            rows="6"
            placeholder="What would you like to achieve?"
            className="w-full resize-none rounded-xl border border-black/10 bg-white px-4 py-4 outline-none transition focus:border-[#8db800] dark:border-white/10 dark:bg-black dark:focus:border-[#a7d503]"
          />
        </div>

        <button
          type="submit"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#a7d503] px-7 py-4 font-bold text-black transition hover:scale-105"
        >
          Send message
          <ArrowRight size={18} />
        </button>
      </form>
    </div>
  </section>
</main>


);
}
