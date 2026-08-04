import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";

export default function ServicesPage() {
  // Category ke according services group kar rahe hain
  const serviceCategories = services.reduce((groups, service) => {
    const category = service.category;

    if (!groups[category]) {
      groups[category] = [];
    }

    groups[category].push(service);

    return groups;
  }, {});

  return (
    <main className="bg-white text-black transition-colors duration-300 dark:bg-[#0a0a0a] dark:text-white">
      {/* Hero Section */}
      <section className="border-b border-black/10 px-5 py-24 dark:border-white/10 sm:py-32">
        <div className="container-custom">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8db800] dark:text-[#a7d503]">
            What We Do
          </p>

          <h1 className="mt-5 max-w-5xl text-3xl font-black tracking-[-0.05em] sm:text-4xl lg:text-5xl xl:text-6xl">
            Strategy, creativity, and growth —
            <span className="text-[#8db800] dark:text-[#a7d503]">
              {" "}
              working together.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-black/60 dark:text-white/60">
            We combine strategy, design, technology, content, and marketing
            to create digital experiences that help businesses grow.
          </p>
        </div>
      </section>

      {/* Services */}
      {Object.entries(serviceCategories).map(
        ([category, categoryServices], categoryIndex) => (
          <section
            key={category}
            className={`px-5 py-20 sm:py-28 ${
              categoryIndex % 2 === 1
                ? "bg-black/[0.025] dark:bg-white/[0.02]"
                : ""
            }`}
          >
            <div className="container-custom">
              {/* Category Heading */}
              <div className="mb-12 max-w-3xl">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8db800] dark:text-[#a7d503]">
                  {String(categoryIndex + 1).padStart(2, "0")}
                </p>

                <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-5xl">
                  {category}
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-7 text-black/60 dark:text-white/60">
                  Explore specialized services designed around your brand,
                  audience, and long-term business goals.
                </p>
              </div>

              {/* Service Cards */}
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {categoryServices.map((service) => {
                  const Icon = service.icon;

                  return (
                    <article
                      key={service.slug}
                      className="group flex min-h-[360px] flex-col rounded-[28px] border border-black/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#8db800] hover:shadow-xl dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-[#a7d503] sm:p-8"
                    >
                      {/* Icon */}
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#a7d503] text-black transition-transform duration-300 group-hover:scale-110">
                        <Icon size={25} strokeWidth={1.8} />
                      </div>

                      {/* Category */}
                      <p className="mt-7 text-xs font-bold uppercase tracking-[0.16em] text-[#8db800] dark:text-[#a7d503]">
                        {service.category}
                      </p>

                      {/* Title */}
                      <h3 className="mt-3 text-2xl font-black tracking-[-0.03em]">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-4 leading-7 text-black/60 dark:text-white/60">
                        {service.description}
                      </p>

                      {/* Button */}
                      <Link
                        href={`/services/${service.slug}`}
                        className="group/link mt-auto inline-flex w-fit items-center gap-3 pt-8 text-sm font-bold text-black transition-colors duration-300 hover:text-[#8db800] dark:text-white dark:hover:text-[#a7d503]"
                      >
                        Explore Service

                        <ArrowRight
                          size={18}
                          className="transition-transform duration-300 group-hover/link:translate-x-1"
                        />
                      </Link>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        )
      )}

      {/* Bottom CTA */}
      <section className="border-t border-black/10 bg-[#a7d503] px-5 py-20 text-black dark:border-white/10 sm:py-24">
        <div className="container-custom flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em]">
              Ready to Grow?
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-5xl">
              Let&apos;s build something that moves your business forward.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-black/70">
              Tell us what you want to achieve, and we&apos;ll help you find
              the right strategy, creative direction, and digital solution.
            </p>
          </div>

          <Link
            href="/contact"
            className="group flex w-fit items-center gap-3 rounded-full bg-black px-7 py-4 font-bold text-white transition duration-300 hover:scale-[1.03] hover:bg-white hover:text-black"
          >
            Start Your Project

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}