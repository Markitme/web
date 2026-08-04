import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  ExternalLink,
  ImageIcon,
} from "lucide-react";

import { services, getServiceBySlug } from "@/data/services";

/* =========================================
   IMAGE PLACEHOLDER
========================================= */

function ServiceImage({
  src,
  alt,
  className = "",
  priority = false,
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[30px] border border-black/10 bg-black/[0.04] dark:border-white/10 dark:bg-white/[0.05] ${className}`}
    >
      {/* Image automatically load hogi jab file add karoge */}
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#a7d503] text-black">
            <ImageIcon size={28} />
          </div>

          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-black/40 dark:text-white/40">
              Service Image
            </p>

            <p className="mt-2 text-xs text-black/35 dark:text-white/35">
              Image will be added later
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

/* =========================================
   STATIC PARAMS
========================================= */

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

/* =========================================
   PAGE
========================================= */

export default async function ServiceDetailsPage({ params }) {
  const { slug } = await params;

  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const ServiceIcon = service.icon;

  return (
    <main className="overflow-hidden bg-white text-black transition-colors duration-300 dark:bg-[#0a0a0a] dark:text-white">
      {/* =====================================
          HERO
      ====================================== */}

      <section className="relative border-b border-black/10 px-5 py-20 dark:border-white/10 sm:py-28 lg:py-32">
        <div className="container-custom">
          {/* Back Button */}
          <Link
            href="/services"
            className="group mb-10 inline-flex items-center gap-2 text-sm font-bold text-black/60 transition-colors hover:text-[#8db800] dark:text-white/60 dark:hover:text-[#a7d503]"
          >
            <ArrowLeft
              size={17}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />

            Back to Services
          </Link>

          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
            {/* Hero Content */}
            <div>
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#a7d503] text-black">
                  <ServiceIcon size={26} strokeWidth={1.8} />
                </div>

                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#8db800] dark:text-[#a7d503]">
                  {service.category}
                </p>
              </div>

              <h1 className="mt-8 max-w-4xl text-4xl font-black leading-[1.02] tracking-[-0.055em] sm:text-5xl lg:text-6xl xl:text-7xl">
                {service.heroTitle}
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-black/60 dark:text-white/60">
                {service.heroDescription}
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#a7d503] px-7 py-4 text-sm font-black text-black transition-all duration-300 hover:scale-[1.03] hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
                >
                  Start Your Project

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <a
                  href="#services"
                  className="inline-flex items-center gap-3 rounded-full border border-black/15 px-7 py-4 text-sm font-bold transition-all duration-300 hover:border-[#8db800] hover:text-[#8db800] dark:border-white/15 dark:hover:border-[#a7d503] dark:hover:text-[#a7d503]"
                >
                  Explore Services
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <ServiceImage
              src={service.heroImage}
              alt={service.heroImageAlt}
              priority
              className="aspect-[4/3] min-h-[320px] lg:min-h-[560px]"
            />
          </div>
        </div>
      </section>

      {/* =====================================
          ACCENT TEXT
      ====================================== */}

      <section className="bg-[#a7d503] px-5 py-8 text-black">
        <div className="container-custom">
          <p className="text-center text-xl font-black tracking-[-0.03em] sm:text-2xl">
            {service.accentText}
          </p>
        </div>
      </section>

      {/* =====================================
          OVERVIEW
      ====================================== */}

      <section className="px-5 py-20 sm:py-28">
        <div className="container-custom grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8db800] dark:text-[#a7d503]">
              Why It Matters
            </p>

            <h2 className="mt-5 text-4xl font-black leading-[1.05] tracking-[-0.05em] sm:text-5xl">
              {service.overviewTitle}
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-8 text-black/60 dark:text-white/60">
              {service.overviewDescription}
            </p>

            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-3 text-sm font-black transition-colors hover:text-[#8db800] dark:hover:text-[#a7d503]"
            >
              Let&apos;s Talk

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          <ServiceImage
            src={service.overviewImage}
            alt={`${service.title} overview`}
            className="aspect-[4/3] min-h-[300px]"
          />
        </div>
      </section>

      {/* =====================================
          STATS
      ====================================== */}

      <section className="border-y border-black/10 bg-black/[0.025] px-5 py-14 dark:border-white/10 dark:bg-white/[0.025] sm:py-16">
        <div className="container-custom grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {service.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-black/10 bg-white p-7 text-center dark:border-white/10 dark:bg-white/[0.03]"
            >
              <p className="text-3xl font-black tracking-[-0.04em] text-[#8db800] dark:text-[#a7d503] sm:text-4xl">
                {stat.value}
              </p>

              <p className="mt-3 text-sm font-bold text-black/55 dark:text-white/55">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================
          PROBLEM SECTION
      ====================================== */}

      <section className="px-5 py-20 sm:py-28">
        <div className="container-custom grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <ServiceImage
            src={service.problemImage}
            alt={`${service.title} challenges`}
            className="order-2 aspect-[4/3] min-h-[300px] lg:order-1"
          />

          <div className="order-1 lg:order-2">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8db800] dark:text-[#a7d503]">
              The Challenge
            </p>

            <h2 className="mt-5 text-4xl font-black leading-[1.05] tracking-[-0.05em] sm:text-5xl">
              {service.problemTitle}
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/60 dark:text-white/60">
              {service.problemDescription}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {service.problemPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 rounded-2xl border border-black/10 bg-black/[0.02] p-4 dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-[#8db800] dark:text-[#a7d503]"
                  />

                  <p className="text-sm font-semibold leading-6 text-black/65 dark:text-white/65">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          FEATURES
      ====================================== */}

      <section
        id="services"
        className="border-y border-black/10 bg-black/[0.025] px-5 py-20 dark:border-white/10 dark:bg-white/[0.025] sm:py-28"
      >
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8db800] dark:text-[#a7d503]">
              What We Offer
            </p>

            <h2 className="mt-5 text-4xl font-black leading-[1.05] tracking-[-0.05em] sm:text-5xl">
              {service.featuresTitle}
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {service.features.map((feature) => {
              const FeatureIcon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="group rounded-[28px] border border-black/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#8db800] hover:shadow-xl dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-[#a7d503] sm:p-8"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#a7d503] text-black transition-transform duration-300 group-hover:scale-110">
                    <FeatureIcon size={25} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-7 text-2xl font-black tracking-[-0.035em]">
                    {feature.title}
                  </h3>

                  <p className="mt-4 leading-7 text-black/60 dark:text-white/60">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================
    PROCESS
====================================== */}

<section className="relative overflow-hidden px-5 py-20 sm:py-28">
  <div className="container-custom">
    {/* Heading */}
    <div className="max-w-3xl">
      <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8db800] dark:text-[#a7d503]">
        Our Process
      </p>

      <h2 className="mt-5 text-4xl font-black leading-[1.05] tracking-[-0.05em] sm:text-5xl">
        {service.processTitle}
      </h2>

      <p className="mt-5 max-w-2xl text-base leading-7 text-black/60 dark:text-white/60">
        A simple and structured process designed to keep every stage clear,
        organized, and moving forward.
      </p>
    </div>

    {/* Process Steps */}
    <div className="mt-16">
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {service.process.map((step, index) => (
          <article
            key={step.number}
            className="group relative min-w-0"
          >
            {/* Desktop Connecting Line */}
            {index !== service.process.length - 1 && (
              <div className="absolute left-9 right-[-24px] top-9 hidden h-px bg-black/20 lg:block dark:bg-white/20" />
            )}

            {/* Mobile / Tablet Vertical Line */}
            {index !== service.process.length - 1 && (
              <div className="absolute bottom-[-40px] left-9 top-[72px] h-auto w-px bg-black/20 lg:hidden dark:bg-white/20" />
            )}

            {/* Step Circle */}
            <div className="relative z-10 flex h-[72px] w-[72px] items-center justify-center rounded-full border-8 border-white bg-[#a7d503] text-lg font-black text-black shadow-md transition-transform duration-300 group-hover:scale-110 dark:border-[#0a0a0a]">
              {step.number}
            </div>

            {/* Step Card */}
            <div className="mt-7 min-h-[270px] rounded-[28px] border border-black/10 bg-black/[0.025] p-7 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#8db800] group-hover:shadow-xl dark:border-white/10 dark:bg-white/[0.03] dark:group-hover:border-[#a7d503]">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#8db800] dark:text-[#a7d503]">
                Step {String(index + 1).padStart(2, "0")}
              </p>

              <h3 className="mt-5 text-2xl font-black tracking-[-0.035em]">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-black/60 dark:text-white/60">
                {step.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* =====================================
          DELIVERABLES
      ====================================== */}

      <section className="border-y border-black/10 bg-black px-5 py-20 text-white dark:border-white/10 sm:py-28">
        <div className="container-custom grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#a7d503]">
              What&apos;s Included
            </p>

            <h2 className="mt-5 text-4xl font-black leading-[1.05] tracking-[-0.05em] sm:text-5xl">
              Everything needed to move your project forward.
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-8 text-white/60">
              Every project is tailored to your business. These are the core
              deliverables that can be included in your service plan.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {service.deliverables.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-5"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#a7d503] text-black">
                  <Check size={18} strokeWidth={3} />
                </div>

                <p className="font-bold text-white/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================
          FINAL CTA
      ====================================== */}

      <section className="bg-[#a7d503] px-5 py-20 text-black sm:py-28">
        <div className="container-custom text-center">
          <p className="text-sm font-black uppercase tracking-[0.2em]">
            Ready to Get Started?
          </p>

          <h2 className="mx-auto mt-5 max-w-5xl text-4xl font-black leading-[1.03] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
            {service.ctaTitle}
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-black/70">
            {service.ctaDescription}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 text-sm font-black text-white transition-all duration-300 hover:scale-[1.03] hover:bg-white hover:text-black"
            >
              Start Your Project

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/services"
              className="group inline-flex items-center gap-3 rounded-full border-2 border-black px-8 py-4 text-sm font-black transition-all duration-300 hover:bg-black hover:text-white"
            >
              View All Services

              <ExternalLink
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}