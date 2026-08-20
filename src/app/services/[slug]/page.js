import Link from "next/link";
import { notFound } from "next/navigation";

import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

import { services, getServiceBySlug } from "@/data/services";
import AnimatedCounter from "@/components/AnimatedCounter";
import ProcessSection from "@/components/ProcessSection";

/* =====================================================
   MARKITME DESIGN TOKENS
===================================================== */

const COLORS = {
  lightBg: "#F1F3ED",
  lightSection: "#E8ECE5",
  lightAlt: "#DDE5DC",

  darkBg: "#071F18",
  darkSection: "#0A2A21",
  darkCard: "#0C3B2E",
  darkCardHover: "#104A3A",

  green: "#0C3B2E",
  greenLight: "#6D9773",
  yellow: "#FFBA00",
  cream: "#F1F3ED",
};

/* =====================================================
   SERVICE IMAGES
===================================================== */

function getServiceImages(serviceTitle = "") {
  const title = serviceTitle.toLowerCase();

  if (
    title.includes("photography") ||
    title.includes("photo") ||
    title.includes("brand shoot")
  ) {
    return {
      hero:
        "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=85",
      overview:
        "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1400&q=85",
      challenge:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=85",
    };
  }

  if (
    title.includes("videography") ||
    title.includes("video") ||
    title.includes("reel")
  ) {
    return {
      hero:
        "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1600&q=85",
      overview:
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1400&q=85",
      challenge:
        "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1400&q=85",
    };
  }

  if (
    title.includes("website") ||
    title.includes("web design") ||
    title.includes("development") ||
    title.includes("landing") ||
    title.includes("redesign")
  ) {
    return {
      hero:
        "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1600&q=85",
      overview:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=85",
      challenge:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=85",
    };
  }

  if (title.includes("seo") || title.includes("search")) {
    return {
      hero:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=85",
      overview:
        "https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&w=1400&q=85",
      challenge:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1400&q=85",
    };
  }

  if (title.includes("social")) {
    return {
      hero:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1600&q=85",
      overview:
        "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1400&q=85",
      challenge:
        "https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=1400&q=85",
    };
  }

  if (
    title.includes("advertising") ||
    title.includes("paid") ||
    title.includes("ads")
  ) {
    return {
      hero:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=85",
      overview:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=85",
      challenge:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=85",
    };
  }

  if (
    title.includes("content") ||
    title.includes("copy") ||
    title.includes("writing")
  ) {
    return {
      hero:
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1600&q=85",
      overview:
        "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1400&q=85",
      challenge:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1400&q=85",
    };
  }

  return {
    hero:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=85",
    overview:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=85",
    challenge:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85",
  };
}

/* =====================================================
   ANIMATED SERVICE VISUAL
===================================================== */

function AnimatedServiceVisual({
  serviceTitle = "",
  ServiceIcon,
  variant = "hero",
  className = "",
}) {
  const images = getServiceImages(serviceTitle);

  const image =
    variant === "hero"
      ? images.hero
      : variant === "overview"
        ? images.overview
        : images.challenge;

  /* =====================================================
     HERO VISUAL
  ===================================================== */

  if (variant === "hero") {
    return (
      <div
        className={`
          group relative isolate overflow-hidden
          rounded-[24px] sm:rounded-[30px]

          border border-[#6D9773]/20
          bg-[#0C3B2E]

          shadow-[0_25px_80px_rgba(12,59,46,0.18)]
          dark:border-[#6D9773]/30

          ${className}
        `}
      >
        <img
          src={image}
          alt={`${serviceTitle} digital service`}
          className="
            absolute inset-0 h-full w-full object-cover
            transition-transform duration-700 ease-out
            group-hover:scale-105
          "
        />

        <div className="absolute inset-0 bg-gradient-to-br from-[#0C3B2E]/10 via-[#071F18]/35 to-[#071F18]/90" />

        <div className="absolute -right-16 top-10 h-40 w-40 rounded-full bg-[#FFBA00]/20 blur-3xl transition-all duration-700 group-hover:scale-125" />

        <div className="absolute left-4 top-4 sm:left-6 sm:top-6">
          <div className="rounded-full border border-white/20 bg-[#071F18]/50 px-3 py-1.5 text-[8px] font-black uppercase tracking-[0.15em] text-white backdrop-blur-xl sm:px-4 sm:py-2 sm:text-[10px]">
            MarkitMe
          </div>
        </div>

        <div className="absolute bottom-4 left-4 right-4 sm:bottom-7 sm:left-7 sm:right-7">
          <div
            className="
              rounded-[18px] sm:rounded-[22px]
              border border-white/15
              bg-[#071F18]/55
              p-4 sm:p-5
              backdrop-blur-xl
              transition-transform duration-500
              group-hover:-translate-y-1
            "
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFBA00] text-[#0C3B2E] shadow-[0_0_30px_rgba(255,186,0,0.25)] sm:h-12 sm:w-12 sm:rounded-2xl">
                {ServiceIcon && (
                  <ServiceIcon size={22} strokeWidth={1.8} />
                )}
              </div>

              <div className="min-w-0">
                <p className="text-[8px] font-black uppercase tracking-[0.15em] text-[#FFBA00] sm:text-[9px]">
                  Digital Service
                </p>

                <p className="mt-1 truncate text-sm font-black text-white sm:text-base">
                  {serviceTitle}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 sm:block">
          <div className="flex gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#FFBA00]" />
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#FFBA00]/60 [animation-delay:200ms]" />
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#FFBA00]/30 [animation-delay:400ms]" />
          </div>
        </div>
      </div>
    );
  }

  /* =====================================================
     OVERVIEW VISUAL
  ===================================================== */

  if (variant === "overview") {
    return (
      <div
        className={`
          group relative isolate overflow-hidden
          rounded-[24px] sm:rounded-[30px]

          border border-[#6D9773]/20
          bg-[#0C3B2E]

          shadow-[0_20px_60px_rgba(12,59,46,0.15)]

          dark:border-[#6D9773]/30

          ${className}
        `}
      >
        <img
          src={image}
          alt={`${serviceTitle} strategy`}
          className="
            absolute inset-0 h-full w-full object-cover
            transition-transform duration-700 ease-out
            group-hover:scale-105
          "
        />

        <div className="absolute inset-0 bg-gradient-to-tr from-[#071F18]/95 via-[#0C3B2E]/55 to-[#071F18]/10" />

        <div className="absolute right-5 top-5 rounded-full border border-white/15 bg-[#071F18]/50 px-3 py-2 text-[9px] font-black uppercase tracking-[0.15em] text-white backdrop-blur-xl">
          Strategy
        </div>

        <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7">
          <div className="max-w-md">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFBA00] text-[#0C3B2E] shadow-[0_0_35px_rgba(255,186,0,0.25)] transition-transform duration-500 group-hover:scale-110 sm:h-14 sm:w-14 sm:rounded-2xl">
              {ServiceIcon && (
                <ServiceIcon size={24} strokeWidth={1.8} />
              )}
            </div>

            <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#FFBA00] sm:text-[10px]">
              Why It Matters
            </p>

            <h3 className="mt-2 text-2xl font-black leading-tight text-white sm:text-3xl">
              Built around your goals, audience and growth.
            </h3>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#FFBA00] transition-all duration-700 group-hover:w-full" />
      </div>
    );
  }

  /* =====================================================
     CHALLENGE VISUAL
  ===================================================== */

  return (
    <div
      className={`
        group relative isolate overflow-hidden
        rounded-[24px] sm:rounded-[30px]

        border border-[#6D9773]/20
        bg-[#0C3B2E]
        text-white

        shadow-[0_25px_80px_rgba(12,59,46,0.20)]

        ${className}
      `}
    >
      <img
        src={image}
        alt={`${serviceTitle} challenge and strategy`}
        className="
          absolute inset-0 h-full w-full object-cover opacity-70
          transition-transform duration-700 ease-out
          group-hover:scale-105
        "
      />

      <div className="absolute inset-0 bg-gradient-to-br from-[#071F18]/95 via-[#0C3B2E]/65 to-[#0C3B2E]/20" />

      <div className="absolute -left-20 bottom-10 h-48 w-48 rounded-full bg-[#FFBA00]/10 blur-3xl transition-transform duration-700 group-hover:scale-125" />

      <div className="relative flex h-full min-h-[350px] flex-col justify-between p-5 sm:min-h-[410px] sm:p-8 lg:min-h-[460px]">
        <div>
          <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-[#FFBA00]/30 bg-[#FFBA00]/10 text-[#FFBA00] sm:h-14 sm:w-14 sm:rounded-2xl">
            {ServiceIcon && (
              <ServiceIcon size={24} strokeWidth={1.7} />
            )}
          </div>

          <p className="text-[8px] font-black uppercase tracking-[0.16em] text-[#FFBA00] sm:text-[9px]">
            From challenge to growth
          </p>

          <h3 className="mt-3 max-w-sm text-lg font-black leading-tight sm:text-3xl">
            Turning complex problems into clear opportunities.
          </h3>
        </div>

        <div className="flex items-end justify-between gap-3">
          <div className="rounded-2xl border border-white/15 bg-[#071F18]/50 p-3 backdrop-blur-xl sm:p-4">
            <p className="text-[8px] font-black uppercase tracking-[0.14em] text-white/50">
              Service
            </p>

            <p className="mt-1 text-sm font-black text-[#FFBA00] sm:text-base">
              {serviceTitle}
            </p>
          </div>

          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#FFBA00] text-[#0C3B2E] shadow-[0_0_40px_rgba(255,186,0,0.30)] transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110 sm:h-20 sm:w-20">
            {ServiceIcon && (
              <ServiceIcon size={30} strokeWidth={1.7} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* =====================================================
   FEATURE CARD
   Same visual language as common ServiceCard
===================================================== */

function FeatureCard({ feature }) {
  const FeatureIcon = feature.icon;

  return (
    <article
      className="
        group relative overflow-hidden

        rounded-[24px] sm:rounded-[28px]

        border border-[#0C3B2E]/10
        bg-[#F1F3ED]

        p-6 sm:p-8

        transition-all duration-500

        hover:-translate-y-1
        hover:border-[#6D9773]
        hover:bg-[#E8ECE5]
        hover:shadow-[0_20px_60px_rgba(12,59,46,0.10)]

        dark:border-[#6D9773]/20
        dark:bg-[#0C3B2E]

        dark:hover:border-[#FFBA00]/50
        dark:hover:bg-[#104A3A]
        dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]
      "
    >
      {/* Decorative glow */}
      <div
        className="
          pointer-events-none absolute
          -right-12 -top-12
          h-28 w-28
          rounded-full
          bg-[#6D9773]/10
          blur-3xl
          transition-all duration-500
          group-hover:bg-[#FFBA00]/10
          group-hover:scale-125
        "
      />

      <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFBA00] text-[#0C3B2E] transition-all duration-300 group-hover:rotate-3 group-hover:scale-105 sm:h-14 sm:w-14 sm:rounded-2xl">
        <FeatureIcon size={22} strokeWidth={1.8} />
      </div>

      <h3 className="relative mt-6 text-xl font-black tracking-[-0.035em] text-[#0C3B2E] dark:text-[#F1F3ED] sm:mt-7 sm:text-2xl">
        {feature.title}
      </h3>

      <p className="relative mt-4 text-sm leading-7 text-[#0C3B2E]/60 dark:text-[#F1F3ED]/65 sm:text-base">
        {feature.description}
      </p>
    </article>
  );
}

/* =====================================================
   STATIC PATHS
===================================================== */

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

/* =====================================================
   SERVICE DETAILS PAGE
===================================================== */

export default async function ServiceDetailsPage({ params }) {
  const { slug } = await params;

  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const ServiceIcon = service.icon;

  return (
    <main
      className="
        min-h-screen

        bg-[#F1F3ED]
        text-[#0C3B2E]

        transition-colors duration-300

        dark:bg-[#071F18]
        dark:text-[#F1F3ED]
      "
    >
      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="
          relative overflow-hidden

          border-b
          border-[#0C3B2E]/10
          dark:border-[#6D9773]/20
        "
      >
        {/* Background glow */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[#6D9773]/10 blur-3xl dark:bg-[#6D9773]/10" />

        <div
          className="
            container-custom relative

            px-4

            py-10
            sm:px-5
            sm:py-14
            lg:py-16
          "
        >
          {/* Back */}
          <Link
            href="/services"
            className="
              group mb-6 inline-flex items-center gap-2

              text-sm font-bold

              text-[#0C3B2E]/55
              transition-colors

              hover:text-[#6D9773]

              dark:text-[#F1F3ED]/55
              dark:hover:text-[#FFBA00]

              sm:mb-8
            "
          >
            <ArrowLeft
              size={17}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />

            Back to Services
          </Link>

          <div
            className="
              grid items-center

              gap-8

              lg:grid-cols-[1.05fr_0.95fr]
              lg:gap-12
              xl:gap-16
            "
          >
            {/* Hero Text */}

            <div className="min-w-0 max-w-3xl">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FFBA00] text-[#0C3B2E] shadow-lg shadow-[#FFBA00]/15 sm:h-14 sm:w-14 sm:rounded-2xl">
                  <ServiceIcon
                    size={23}
                    strokeWidth={1.8}
                  />
                </div>

                <p className="min-w-0 break-words text-[9px] font-black uppercase tracking-[0.15em] text-[#6D9773] dark:text-[#FFBA00] sm:text-xs sm:tracking-[0.2em]">
                  {service.category}
                </p>
              </div>

              <h1
                className="
                  mt-5

                  text-4xl
                  font-black
                  leading-[0.95]
                  tracking-[-0.055em]

                  text-[#0C3B2E]

                  sm:text-5xl
                  md:text-6xl
                  xl:text-7xl

                  dark:text-[#F1F3ED]
                "
              >
                {service.heroTitle}
              </h1>

              <p
                className="
                  mt-5
                  max-w-2xl

                  text-base
                  leading-7

                  text-[#0C3B2E]/60

                  sm:mt-6
                  sm:text-lg
                  sm:leading-8

                  dark:text-[#F1F3ED]/60
                "
              >
                {service.heroDescription}
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
                <Link
                  href="/contact"
                  className="
                    group inline-flex w-full items-center justify-center gap-3

                    rounded-full

                    bg-[#FFBA00]

                    px-6 py-4

                    text-sm font-black
                    text-[#0C3B2E]

                    transition-all duration-300

                    hover:-translate-y-0.5
                    hover:bg-[#0C3B2E]
                    hover:text-white
                    hover:shadow-xl

                    sm:w-auto
                    sm:px-7
                  "
                >
                  Start Your Project

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <a
                  href="#services"
                  className="
                    inline-flex w-full items-center justify-center gap-3

                    rounded-full

                    border
                    border-[#0C3B2E]/15

                    px-6 py-4

                    text-sm font-bold

                    transition-all duration-300

                    hover:border-[#6D9773]
                    hover:text-[#6D9773]

                    dark:border-[#6D9773]/30
                    dark:hover:border-[#FFBA00]
                    dark:hover:text-[#FFBA00]

                    sm:w-auto
                    sm:px-7
                  "
                >
                  Explore Services
                </a>
              </div>
            </div>

            {/* Hero Visual */}

            <div className="flex w-full items-center justify-center lg:justify-end">
              <AnimatedServiceVisual
                serviceTitle={service.title}
                ServiceIcon={ServiceIcon}
                variant="hero"
                className="
                  aspect-square
                  w-full
                  max-w-[400px]
                  sm:max-w-[470px]
                  lg:max-w-[500px]
                  xl:max-w-[550px]
                "
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ACCENT STRIP
      ===================================================== */}

      <section className="bg-[#FFBA00] px-4 py-6 text-[#0C3B2E] sm:px-5 sm:py-7">
        <div className="container-custom">
          <p className="text-center text-base font-black leading-6 tracking-[-0.03em] sm:text-xl sm:leading-normal lg:text-2xl">
            {service.accentText}
          </p>
        </div>
      </section>

      {/* =====================================================
          OVERVIEW
      ===================================================== */}

      <section
        className="
          bg-[#F1F3ED]
          px-4 py-14

          sm:px-5 sm:py-20
          lg:py-24

          dark:bg-[#071F18]
        "
      >
        <div className="container-custom grid items-center gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-20">
          <div className="order-1">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#6D9773] dark:text-[#FFBA00] sm:text-sm">
              Why It Matters
            </p>

            <h2 className="mt-4 text-3xl font-black leading-[1.08] tracking-[-0.05em] sm:mt-5 sm:text-5xl">
              {service.overviewTitle}
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-[#0C3B2E]/60 dark:text-[#F1F3ED]/60 sm:mt-7 sm:text-lg sm:leading-8">
              {service.overviewDescription}
            </p>

            <Link
              href="/contact"
              className="
                group mt-7 inline-flex items-center gap-3

                text-sm font-black

                transition-colors

                hover:text-[#6D9773]
                dark:hover:text-[#FFBA00]

                sm:mt-8
              "
            >
              Let&apos;s Talk

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="order-2 w-full min-w-0">
            <AnimatedServiceVisual
              serviceTitle={service.title}
              ServiceIcon={ServiceIcon}
              variant="overview"
              className="
                h-auto
                min-h-[250px]
                w-full

                sm:min-h-[420px]
                lg:min-h-[480px]
              "
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          NUMBER COUNTERS
      ===================================================== */}

      <section
        className="
          border-y
          border-[#0C3B2E]/10

          bg-[#E8ECE5]

          px-4 py-12

          dark:border-[#6D9773]/20
          dark:bg-[#0A2A21]

          sm:px-5
          sm:py-16
        "
      >
        <div className="container-custom">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <AnimatedCounter
              value={100}
              suffix="%"
              label="Responsive Design"
            />

            <AnimatedCounter
              value={95}
              suffix="+"
              label="Performance Focused"
            />

            <AnimatedCounter
              value={90}
              suffix="+"
              label="SEO Ready"
            />

            <AnimatedCounter
              value={100}
              suffix="%"
              label="Audience Focused"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          CHALLENGE
      ===================================================== */}

      <section
        className="
          bg-[#F1F3ED]

          px-4 py-14

          sm:px-5 sm:py-20
          lg:py-24

          dark:bg-[#071F18]
        "
      >
        <div className="container-custom grid items-center gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-20">
          <div className="order-2 w-full lg:order-1">
            <AnimatedServiceVisual
              serviceTitle={service.title}
              ServiceIcon={ServiceIcon}
              variant="challenge"
              className="min-h-[350px] w-full sm:min-h-[410px] lg:min-h-[460px]"
            />
          </div>

          <div className="order-1 min-w-0 lg:order-2">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#6D9773] dark:text-[#FFBA00] sm:text-sm">
              The Challenge
            </p>

            <h2 className="mt-5 text-3xl font-black leading-[1.08] tracking-[-0.05em] sm:text-5xl">
              {service.problemTitle}
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#0C3B2E]/60 dark:text-[#F1F3ED]/60 sm:mt-7 sm:text-lg sm:leading-8">
              {service.problemDescription}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4">
              {service.problemPoints.map((point) => (
                <div
                  key={point}
                  className="
                    group flex items-start gap-3

                    rounded-2xl

                    border
                    border-[#0C3B2E]/10

                    bg-[#E8ECE5]

                    p-4

                    transition-all duration-300

                    hover:-translate-y-1
                    hover:border-[#6D9773]
                    hover:shadow-lg

                    dark:border-[#6D9773]/20
                    dark:bg-[#0C3B2E]
                    dark:hover:border-[#FFBA00]/50
                    dark:hover:bg-[#104A3A]
                  "
                >
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-[#6D9773] dark:text-[#FFBA00]"
                  />

                  <p className="min-w-0 text-sm font-semibold leading-6 text-[#0C3B2E]/65 dark:text-[#F1F3ED]/65">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES / FEATURES
      ===================================================== */}

      <section
        id="services"
        className="
          border-y
          border-[#0C3B2E]/10

          bg-[#E8ECE5]

          px-4 py-14

          dark:border-[#6D9773]/20
          dark:bg-[#0A2A21]

          sm:px-5 sm:py-20
          lg:py-24
        "
      >
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#6D9773] dark:text-[#FFBA00] sm:text-sm">
              What We Offer
            </p>

            <h2 className="mt-5 text-3xl font-black leading-[1.08] tracking-[-0.05em] sm:text-5xl">
              {service.featuresTitle}
            </h2>
          </div>

          <div className="mt-9 grid gap-4 sm:mt-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {service.features.map((feature) => (
              <FeatureCard
                key={feature.title}
                feature={feature}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section
        className="
          bg-[#F1F3ED]
          dark:bg-[#071F18]
        "
      >
        <ProcessSection
          label="Our Process"
          title={service.processTitle}
          description="A simple and structured process designed to keep every stage clear, organized, and moving forward."
          steps={service.process}
        />
      </section>

      {/* =====================================================
          DELIVERABLES
      ===================================================== */}

      <section
        className="
          border-y
          border-[#6D9773]/20

          bg-[#0C3B2E]

          px-4 py-14
          text-[#F1F3ED]

          sm:px-5 sm:py-20
          lg:py-24

          dark:bg-[#0A2A21]
        "
      >
        <div className="container-custom grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#FFBA00] sm:text-sm">
              What&apos;s Included
            </p>

            <h2 className="mt-5 text-3xl font-black leading-[1.08] tracking-[-0.05em] sm:text-5xl">
              Everything needed to move your project forward.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-[#F1F3ED]/60 sm:mt-7 sm:text-lg sm:leading-8">
              Every project is tailored to your business. These are the core
              deliverables that can be included in your service plan.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            {service.deliverables.map((item) => (
              <div
                key={item}
                className="
                  group flex items-center gap-3

                  rounded-2xl

                  border
                  border-[#6D9773]/20

                  bg-[#071F18]/50

                  p-4

                  transition-all duration-300

                  hover:-translate-y-1
                  hover:border-[#FFBA00]/50
                  hover:bg-[#104A3A]

                  sm:gap-4
                  sm:p-5
                "
              >
                <div
                  className="
                    flex h-8 w-8 shrink-0 items-center justify-center

                    rounded-full

                    bg-[#FFBA00]
                    text-[#0C3B2E]

                    transition-transform duration-300

                    group-hover:scale-110

                    sm:h-9 sm:w-9
                  "
                >
                  <Check
                    size={16}
                    strokeWidth={3}
                  />
                </div>

                <p className="min-w-0 text-sm font-bold text-[#F1F3ED]/85 sm:text-base">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section
        className="
          relative overflow-hidden

          bg-[#FFBA00]

          px-4 py-14

          text-[#0C3B2E]

          sm:px-5 sm:py-20
          lg:py-24
        "
      >
        {/* Decorative circles */}

        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border-[40px] border-[#0C3B2E]/5" />

        <div className="pointer-events-none absolute -bottom-32 -left-20 h-56 w-56 rounded-full bg-[#0C3B2E]/5 blur-3xl" />

        <div className="container-custom relative text-center">
          <p className="text-xs font-black uppercase tracking-[0.18em] sm:text-sm">
            Ready to Get Started?
          </p>

          <h2 className="mx-auto mt-5 max-w-5xl text-3xl font-black leading-[1.05] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
            {service.ctaTitle}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#0C3B2E]/70 sm:mt-7 sm:text-lg sm:leading-8">
            {service.ctaDescription}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
            <Link
              href="/contact"
              className="
                group inline-flex w-full items-center justify-center gap-3

                rounded-full

                bg-[#0C3B2E]

                px-7 py-4

                text-sm font-black
                text-[#F1F3ED]

                transition-all duration-300

                hover:-translate-y-0.5
                hover:bg-[#071F18]
                hover:shadow-xl

                sm:w-auto sm:px-8
              "
            >
              Start Your Project

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/services"
              className="
                group inline-flex w-full items-center justify-center gap-3

                rounded-full

                border-2
                border-[#0C3B2E]

                px-7 py-4

                text-sm font-black

                transition-all duration-300

                hover:bg-[#0C3B2E]
                hover:text-[#F1F3ED]

                sm:w-auto sm:px-8
              "
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