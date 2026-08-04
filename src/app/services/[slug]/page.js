import Link from "next/link";
import { notFound } from "next/navigation";

import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Camera,
  Check,
  CheckCircle2,
  Code2,
  ExternalLink,
  Globe2,
  ImageIcon,
  LayoutTemplate,
  Megaphone,
  Monitor,
  MousePointer2,
  PenTool,
  Play,
  Search,
  Share2,
  Target,
  TrendingUp,
  Video,
  WandSparkles,
} from "lucide-react";

import { services, getServiceBySlug } from "@/data/services";

/* =====================================================
   ANIMATED SERVICE VISUAL
===================================================== */

function AnimatedServiceVisual({
  serviceTitle = "",
  ServiceIcon = Globe2,
  variant = "hero",
  className = "",
}) {
  const title = serviceTitle.toLowerCase();

  let IconOne = Code2;
  let IconTwo = Monitor;
  let IconThree = MousePointer2;

  /* Photography */

  if (
    title.includes("photography") ||
    title.includes("photo") ||
    title.includes("brand shoot")
  ) {
    IconOne = Camera;
    IconTwo = ImageIcon;
    IconThree = WandSparkles;
  }

  /* Video */

  else if (
    title.includes("videography") ||
    title.includes("video") ||
    title.includes("reel")
  ) {
    IconOne = Video;
    IconTwo = Play;
    IconThree = Camera;
  }

  /* Website */

  else if (
    title.includes("website") ||
    title.includes("web design") ||
    title.includes("landing") ||
    title.includes("redesign")
  ) {
    IconOne = Monitor;
    IconTwo = Code2;
    IconThree = LayoutTemplate;
  }

  /* SEO */

  else if (
    title.includes("seo") ||
    title.includes("search")
  ) {
    IconOne = Search;
    IconTwo = TrendingUp;
    IconThree = BarChart3;
  }

  /* Social Media */

  else if (title.includes("social")) {
    IconOne = Share2;
    IconTwo = Megaphone;
    IconThree = TrendingUp;
  }

  /* Paid Ads */

  else if (
    title.includes("advertising") ||
    title.includes("paid")
  ) {
    IconOne = Megaphone;
    IconTwo = Target;
    IconThree = BarChart3;
  }

  /* Content */

  else if (
    title.includes("content") ||
    title.includes("copy")
  ) {
    IconOne = PenTool;
    IconTwo = Share2;
    IconThree = WandSparkles;
  }

  /* =====================================================
     HERO VISUAL
  ===================================================== */

  if (variant === "hero") {
    return (
      <div
        className={`relative isolate overflow-hidden rounded-[24px] border border-black/10 bg-[#f4f8e8] dark:border-white/10 dark:bg-[#10150a] sm:rounded-[30px] ${className}`}
      >
        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.13]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(141,184,0,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(141,184,0,0.35) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        {/* Glow */}

        <div className="absolute left-1/2 top-1/2 h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-[#a7d503]/20 blur-3xl" />

        {/* Outer Ring */}

        <div className="absolute left-1/2 top-1/2 h-[64%] w-[64%] -translate-x-1/2 -translate-y-1/2 animate-[spin_22s_linear_infinite] rounded-full border border-[#8db800]/30">
          <div className="absolute -left-1 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[#a7d503] sm:h-4 sm:w-4" />
        </div>

        {/* Inner Ring */}

        <div className="absolute left-1/2 top-1/2 h-[43%] w-[43%] -translate-x-1/2 -translate-y-1/2 animate-[spin_13s_linear_infinite_reverse] rounded-full border border-dashed border-[#8db800]/40">
          <div className="absolute -right-1 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-[#a7d503]" />
        </div>

        {/* Left Icon */}

        <div className="absolute left-[6%] top-1/2 flex h-10 w-10 -translate-y-1/2 animate-[bounce_4s_ease-in-out_infinite] items-center justify-center rounded-xl bg-white text-[#8db800] shadow-xl dark:bg-[#181818] dark:text-[#a7d503] sm:h-16 sm:w-16 sm:rounded-2xl">
          <IconOne size={20} className="sm:hidden" />
          <IconOne size={27} className="hidden sm:block" />
        </div>

        {/* Top Icon */}

        <div className="absolute right-[8%] top-[10%] flex h-10 w-10 animate-[bounce_5s_ease-in-out_infinite] items-center justify-center rounded-xl bg-white text-[#8db800] shadow-xl dark:bg-[#181818] dark:text-[#a7d503] sm:h-15 sm:w-15 sm:rounded-2xl">
          <IconTwo size={19} className="sm:hidden" />
          <IconTwo size={25} className="hidden sm:block" />
        </div>

        {/* Bottom Icon */}

        <div className="absolute bottom-[17%] right-[8%] flex h-10 w-10 animate-[bounce_4.2s_ease-in-out_infinite] items-center justify-center rounded-xl bg-white text-[#8db800] shadow-xl dark:bg-[#181818] dark:text-[#a7d503] sm:h-14 sm:w-14">
          <IconThree size={18} className="sm:hidden" />
          <IconThree size={23} className="hidden sm:block" />
        </div>

        {/* Main Icon */}

        <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 animate-[pulse_3s_ease-in-out_infinite] items-center justify-center rounded-[22px] bg-[#a7d503] text-black shadow-2xl sm:h-36 sm:w-36 sm:rounded-[28px]">
          <ServiceIcon
            size={35}
            strokeWidth={1.6}
            className="sm:hidden"
          />

          <ServiceIcon
            size={54}
            strokeWidth={1.5}
            className="hidden sm:block"
          />
        </div>

        {/* Service Name */}

        <div className="absolute bottom-3 left-1/2 max-w-[82%] -translate-x-1/2 rounded-full bg-white/90 px-3 py-1.5 text-center text-[7px] font-black uppercase tracking-[0.1em] text-black shadow-sm dark:bg-black/70 dark:text-white sm:bottom-7 sm:px-5 sm:py-2 sm:text-xs">
          {serviceTitle}
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
        className={`relative isolate overflow-hidden rounded-[24px] border border-black/10 bg-[#eef4df] p-4 dark:border-white/10 dark:bg-[#10150a] sm:rounded-[30px] sm:p-7 ${className}`}
      >
        <div className="absolute -right-20 -top-20 h-52 w-52 animate-pulse rounded-full bg-[#a7d503]/20 blur-3xl sm:h-64 sm:w-64" />

        {/* Header */}

        <div className="relative flex items-center justify-between">
          <div className="flex gap-1.5 sm:gap-2">
            <div className="h-2 w-2 rounded-full bg-[#a7d503] sm:h-2.5 sm:w-2.5" />
            <div className="h-2 w-2 rounded-full bg-black/15 dark:bg-white/20 sm:h-2.5 sm:w-2.5" />
            <div className="h-2 w-2 rounded-full bg-black/15 dark:bg-white/20 sm:h-2.5 sm:w-2.5" />
          </div>

          <span className="rounded-full bg-black px-3 py-1.5 text-[7px] font-black uppercase tracking-[0.12em] text-white dark:bg-white dark:text-black sm:px-4 sm:py-2 sm:text-[9px]">
            Strategy
          </span>
        </div>

        {/* Dashboard */}

        <div className="relative mt-5 grid grid-cols-2 gap-3 sm:mt-7 sm:gap-4">

          <div className="relative flex min-h-[190px] flex-col justify-between overflow-hidden rounded-[20px] bg-black p-4 text-white shadow-xl sm:min-h-[280px] sm:rounded-[24px] sm:p-7">

            <div className="absolute -right-10 -top-10 h-28 w-28 animate-[spin_15s_linear_infinite] rounded-full border border-[#a7d503]/40 sm:h-36 sm:w-36" />

            <div className="relative flex h-11 w-11 animate-[pulse_3s_ease-in-out_infinite] items-center justify-center rounded-xl bg-[#a7d503] text-black sm:h-14 sm:w-14 sm:rounded-2xl">
              <ServiceIcon size={22} />
            </div>

            <div className="relative">
              <p className="text-[7px] font-black uppercase tracking-[0.12em] text-[#a7d503] sm:text-[10px]">
                Digital Growth
              </p>

              <h3 className="mt-2 text-base font-black leading-tight sm:text-2xl">
                Better ideas.
                <br />
                Better results.
              </h3>
            </div>

          </div>

          <div className="flex flex-col gap-3 sm:gap-4">

            <div className="flex flex-1 flex-col justify-between rounded-[18px] bg-white p-3 shadow-lg dark:bg-white/[0.08] sm:rounded-[20px] sm:p-4">

              <TrendingUp
                size={20}
                className="animate-[bounce_3s_ease-in-out_infinite] text-[#8db800] dark:text-[#a7d503]"
              />

              <div>
                <p className="text-[7px] font-black uppercase tracking-[0.1em] text-black/40 dark:text-white/40">
                  Growth
                </p>

                <p className="mt-1 text-lg font-black text-[#8db800] dark:text-[#a7d503] sm:text-2xl">
                  +84%
                </p>
              </div>

            </div>

            <div className="flex flex-1 flex-col justify-between rounded-[18px] border border-black/10 bg-white p-3 shadow-lg dark:border-white/10 dark:bg-white/[0.08] sm:rounded-[20px] sm:p-4">

              <IconOne
                size={20}
                className="animate-[pulse_2.5s_ease-in-out_infinite] text-[#8db800] dark:text-[#a7d503]"
              />

              <div>
                <p className="text-[7px] font-black uppercase tracking-[0.1em] text-black/40 dark:text-white/40">
                  Creative
                </p>

                <p className="mt-1 text-lg font-black sm:text-2xl">
                  24/7
                </p>
              </div>

            </div>

          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-1 w-full overflow-hidden bg-black/10 dark:bg-white/10">
          <div className="h-full w-1/3 animate-[slide_3s_ease-in-out_infinite] bg-[#a7d503]" />
        </div>
      </div>
    );
  }

  /* =====================================================
     CHALLENGE VISUAL
  ===================================================== */

  return (
    <div
      className={`relative isolate overflow-hidden rounded-[24px] border border-black/10 bg-[#111] p-5 text-white dark:border-white/10 sm:rounded-[30px] sm:p-8 ${className}`}
    >
      {/* Dot Background */}

      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #a7d503 1.2px, transparent 1.2px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* Heading */}

      <div className="relative">
        <p className="text-[8px] font-black uppercase tracking-[0.16em] text-[#a7d503] sm:text-[9px]">
          From challenge to growth
        </p>

        <h3 className="mt-3 max-w-sm text-lg font-black leading-tight sm:text-3xl">
          Turning complex problems into clear opportunities.
        </h3>
      </div>

      {/* Workflow */}

      <div className="relative mt-8 flex items-center justify-between gap-1.5 sm:mt-10 sm:gap-3">

        <div className="relative z-10 flex h-11 w-11 shrink-0 animate-[bounce_4s_ease-in-out_infinite] items-center justify-center rounded-xl border border-white/10 bg-white/[0.08] text-[#a7d503] backdrop-blur-md sm:h-20 sm:w-20 sm:rounded-2xl">
          <IconOne size={19} className="sm:hidden" />
          <IconOne size={27} className="hidden sm:block" />
        </div>

        <div className="relative h-[2px] min-w-0 flex-1 overflow-hidden bg-white/15">
          <div className="absolute left-0 top-0 h-full w-1/2 animate-[slide_2.5s_linear_infinite] bg-[#a7d503]" />
        </div>

        <div className="relative z-10 flex h-16 w-16 shrink-0 animate-[pulse_3s_ease-in-out_infinite] items-center justify-center rounded-[18px] bg-[#a7d503] text-black shadow-[0_0_40px_rgba(167,213,3,0.35)] sm:h-24 sm:w-24 sm:rounded-[25px]">
          <ServiceIcon size={28} className="sm:hidden" />
          <ServiceIcon size={38} className="hidden sm:block" />
        </div>

        <div className="relative h-[2px] min-w-0 flex-1 overflow-hidden bg-white/15">
          <div className="absolute left-0 top-0 h-full w-1/2 animate-[slide_2.5s_linear_infinite] bg-[#a7d503]" />
        </div>

        <div className="relative z-10 flex h-11 w-11 shrink-0 animate-[bounce_4.5s_ease-in-out_infinite] items-center justify-center rounded-xl border border-white/10 bg-white/[0.08] text-[#a7d503] backdrop-blur-md sm:h-20 sm:w-20 sm:rounded-2xl">
          <IconThree size={19} className="sm:hidden" />
          <IconThree size={27} className="hidden sm:block" />
        </div>

      </div>

      {/* Bottom Cards */}

      <div className="relative mt-8 grid grid-cols-3 gap-2 sm:mt-10 sm:gap-3">

        <div className="rounded-xl border border-white/10 bg-white/[0.05] p-2.5 text-center sm:rounded-2xl sm:p-3">
          <Search
            size={15}
            className="mx-auto text-[#a7d503]"
          />

          <p className="mt-2 text-[6px] font-black uppercase tracking-wide text-white/55 sm:text-[8px]">
            Discover
          </p>
        </div>

        <div className="rounded-xl border border-[#a7d503]/30 bg-[#a7d503]/10 p-2.5 text-center sm:rounded-2xl sm:p-3">
          <ServiceIcon
            size={15}
            className="mx-auto text-[#a7d503]"
          />

          <p className="mt-2 text-[6px] font-black uppercase tracking-wide text-white/70 sm:text-[8px]">
            Build
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/[0.05] p-2.5 text-center sm:rounded-2xl sm:p-3">
          <TrendingUp
            size={15}
            className="mx-auto text-[#a7d503]"
          />

          <p className="mt-2 text-[6px] font-black uppercase tracking-wide text-white/55 sm:text-[8px]">
            Grow
          </p>
        </div>

      </div>

      <div className="pointer-events-none absolute -bottom-24 left-1/2 h-44 w-44 -translate-x-1/2 animate-pulse rounded-full bg-[#a7d503]/20 blur-3xl" />
    </div>
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
    <main className="overflow-x-hidden bg-white text-black transition-colors duration-300 dark:bg-[#0a0a0a] dark:text-white">

      {/* HERO */}

      <section className="border-b border-black/10 px-4 py-14 dark:border-white/10 sm:px-5 sm:py-20 lg:py-24">

        <div className="container-custom">

          <Link
            href="/services"
            className="group mb-8 inline-flex items-center gap-2 text-sm font-bold text-black/60 transition-colors hover:text-[#8db800] dark:text-white/60 dark:hover:text-[#a7d503] sm:mb-10"
          >
            <ArrowLeft
              size={17}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />

            Back to Services
          </Link>

          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 xl:gap-20">

            {/* Hero Text */}

            <div className="min-w-0 max-w-3xl">

              <div className="flex items-center gap-3 sm:gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#a7d503] text-black shadow-lg shadow-[#a7d503]/20 sm:h-14 sm:w-14 sm:rounded-2xl">

                  <ServiceIcon
                    size={23}
                    strokeWidth={1.8}
                    className="sm:hidden"
                  />

                  <ServiceIcon
                    size={26}
                    strokeWidth={1.8}
                    className="hidden sm:block"
                  />

                </div>

                <p className="min-w-0 break-words text-[10px] font-black uppercase tracking-[0.15em] text-[#8db800] dark:text-[#a7d503] sm:text-xs sm:tracking-[0.2em]">
                  {service.category}
                </p>

              </div>

              <h1 className="mt-7 break-words text-[38px] font-black leading-[1.04] tracking-[-0.055em] sm:text-5xl lg:text-6xl xl:text-[68px]">
                {service.heroTitle}
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-black/60 dark:text-white/60 sm:text-lg sm:leading-8">
                {service.heroDescription}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">

                <Link
                  href="/contact"
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#a7d503] px-6 py-4 text-sm font-black text-black transition-all duration-300 hover:scale-[1.02] hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black sm:w-auto sm:px-7"
                >
                  Start Your Project

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <a
                  href="#services"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-black/15 px-6 py-4 text-sm font-bold transition-all duration-300 hover:border-[#8db800] hover:text-[#8db800] dark:border-white/15 dark:hover:border-[#a7d503] dark:hover:text-[#a7d503] sm:w-auto sm:px-7"
                >
                  Explore Services
                </a>

              </div>

            </div>

            {/* Hero Animation */}

            <div className="flex w-full items-center justify-center lg:justify-end">

              <AnimatedServiceVisual
                serviceTitle={service.title}
                ServiceIcon={ServiceIcon}
                variant="hero"
                className="aspect-square w-full max-w-[430px] sm:max-w-[520px] lg:max-w-[540px] xl:max-w-[580px]"
              />

            </div>

          </div>

        </div>

      </section>

      {/* ACCENT */}

      <section className="bg-[#a7d503] px-4 py-7 text-black sm:px-5 sm:py-8">

        <div className="container-custom">

          <p className="text-center text-lg font-black leading-7 tracking-[-0.03em] sm:text-2xl sm:leading-normal">
            {service.accentText}
          </p>

        </div>

      </section>

      {/* OVERVIEW */}


<section className="px-5 py-16 sm:py-24 lg:py-28">
  <div className="container-custom grid items-center gap-10 lg:grid-cols-2 lg:gap-20">

    {/* Content */}
    <div className="order-1">

      <p className="text-xs font-black uppercase tracking-[0.2em] text-[#8db800] dark:text-[#a7d503] sm:text-sm">
        Why It Matters
      </p>

      <h2 className="mt-4 text-3xl font-black leading-[1.08] tracking-[-0.05em] sm:mt-5 sm:text-5xl">
        {service.overviewTitle}
      </h2>

      <p className="mt-5 max-w-xl text-base leading-7 text-black/60 dark:text-white/60 sm:mt-7 sm:text-lg sm:leading-8">
        {service.overviewDescription}
      </p>

      <Link
        href="/contact"
        className="group mt-7 inline-flex items-center gap-3 text-sm font-black transition-colors hover:text-[#8db800] dark:hover:text-[#a7d503] sm:mt-8"
      >
        Let&apos;s Talk

        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>

    </div>

    {/* Animated Visual */}
    <div className="order-2 w-full min-w-0">
      <AnimatedServiceVisual
        serviceTitle={service.title}
        ServiceIcon={ServiceIcon}
        variant="overview"
        className="
          h-auto
          min-h-[250px]
          w-full
          overflow-hidden
          sm:min-h-[460px]
          lg:min-h-[500px]
        "
      />
    </div>

  </div>
</section>

      {/* STATS */}

      <section className="border-y border-black/10 bg-black/[0.025] px-4 py-12 dark:border-white/10 dark:bg-white/[0.025] sm:px-5 sm:py-16">

        <div className="container-custom grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {service.stats.map((stat) => (

            <div
              key={stat.label}
              className="rounded-2xl border border-black/10 bg-white p-6 text-center dark:border-white/10 dark:bg-white/[0.03] sm:rounded-3xl sm:p-7"
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

      {/* CHALLENGE */}

      <section className="px-4 py-16 sm:px-5 sm:py-28">

        <div className="container-custom grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

          <div className="order-2 w-full lg:order-1">

            <AnimatedServiceVisual
              serviceTitle={service.title}
              ServiceIcon={ServiceIcon}
              variant="challenge"
              className="min-h-[350px] w-full sm:min-h-[410px] lg:min-h-[460px]"
            />

          </div>

          <div className="order-1 min-w-0 lg:order-2">

            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#8db800] dark:text-[#a7d503] sm:text-sm sm:tracking-[0.2em]">
              The Challenge
            </p>

            <h2 className="mt-5 text-3xl font-black leading-[1.08] tracking-[-0.05em] sm:text-5xl">
              {service.problemTitle}
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-black/60 dark:text-white/60 sm:mt-7 sm:text-lg sm:leading-8">
              {service.problemDescription}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4">

              {service.problemPoints.map((point) => (

                <div
                  key={point}
                  className="flex items-start gap-3 rounded-2xl border border-black/10 bg-black/[0.02] p-4 dark:border-white/10 dark:bg-white/[0.03]"
                >

                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-[#8db800] dark:text-[#a7d503]"
                  />

                  <p className="min-w-0 text-sm font-semibold leading-6 text-black/65 dark:text-white/65">
                    {point}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* SERVICES */}

      <section
        id="services"
        className="border-y border-black/10 bg-black/[0.025] px-4 py-16 dark:border-white/10 dark:bg-white/[0.025] sm:px-5 sm:py-28"
      >

        <div className="container-custom">

          <div className="max-w-3xl">

            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#8db800] dark:text-[#a7d503] sm:text-sm">
              What We Offer
            </p>

            <h2 className="mt-5 text-3xl font-black leading-[1.08] tracking-[-0.05em] sm:text-5xl">
              {service.featuresTitle}
            </h2>

          </div>

          <div className="mt-10 grid gap-4 sm:mt-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">

            {service.features.map((feature) => {

              const FeatureIcon = feature.icon;

              return (

                <article
                  key={feature.title}
                  className="group rounded-[24px] border border-black/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#8db800] hover:shadow-xl dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-[#a7d503] sm:rounded-[28px] sm:p-8"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#a7d503] text-black transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14 sm:rounded-2xl">

                    <FeatureIcon
                      size={22}
                      strokeWidth={1.8}
                    />

                  </div>

                  <h3 className="mt-6 break-words text-xl font-black tracking-[-0.035em] sm:mt-7 sm:text-2xl">
                    {feature.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-black/60 dark:text-white/60 sm:text-base">
                    {feature.description}
                  </p>

                </article>

              );

            })}

          </div>

        </div>

      </section>

      {/* PROCESS */}

      <section className="px-4 py-16 sm:px-5 sm:py-28">

        <div className="container-custom">

          <div className="max-w-3xl">

            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#8db800] dark:text-[#a7d503] sm:text-sm">
              Our Process
            </p>

            <h2 className="mt-5 text-3xl font-black leading-[1.08] tracking-[-0.05em] sm:text-5xl">
              {service.processTitle}
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-black/60 dark:text-white/60 sm:text-base">
              A simple and structured process designed to keep every stage
              clear, organized, and moving forward.
            </p>

          </div>

          <div className="mt-12 grid gap-8 sm:mt-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">

            {service.process.map((step, index) => (

              <article
                key={step.number}
                className="group relative"
              >

                {index !== service.process.length - 1 && (

                  <div className="absolute left-9 right-[-24px] top-9 hidden h-px bg-black/20 lg:block dark:bg-white/20" />

                )}

                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-[6px] border-white bg-[#a7d503] text-base font-black text-black shadow-md transition-transform duration-300 group-hover:scale-110 dark:border-[#0a0a0a] sm:h-[72px] sm:w-[72px] sm:border-8 sm:text-lg">
                  {step.number}
                </div>

                <div className="mt-6 min-h-[220px] rounded-[24px] border border-black/10 bg-black/[0.025] p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#8db800] group-hover:shadow-xl dark:border-white/10 dark:bg-white/[0.03] dark:group-hover:border-[#a7d503] sm:mt-7 sm:min-h-[250px] sm:rounded-[28px] sm:p-7">

                  <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#8db800] dark:text-[#a7d503] sm:text-xs">
                    Step {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="mt-4 text-xl font-black tracking-[-0.035em] sm:mt-5 sm:text-2xl">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-black/60 dark:text-white/60 sm:text-base">
                    {step.description}
                  </p>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* DELIVERABLES */}

      <section className="border-y border-black/10 bg-black px-4 py-16 text-white dark:border-white/10 sm:px-5 sm:py-28">

        <div className="container-custom grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

          <div>

            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#a7d503] sm:text-sm">
              What&apos;s Included
            </p>

            <h2 className="mt-5 text-3xl font-black leading-[1.08] tracking-[-0.05em] sm:text-5xl">
              Everything needed to move your project forward.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/60 sm:mt-7 sm:text-lg sm:leading-8">
              Every project is tailored to your business. These are the core
              deliverables that can be included in your service plan.
            </p>

          </div>

          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">

            {service.deliverables.map((item) => (

              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-4 sm:gap-4 sm:p-5"
              >

                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#a7d503] text-black sm:h-9 sm:w-9">

                  <Check
                    size={16}
                    strokeWidth={3}
                  />

                </div>

                <p className="min-w-0 text-sm font-bold text-white/80 sm:text-base">
                  {item}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* FINAL CTA */}

      <section className="bg-[#a7d503] px-4 py-16 text-black sm:px-5 sm:py-28">

        <div className="container-custom text-center">

          <p className="text-xs font-black uppercase tracking-[0.18em] sm:text-sm">
            Ready to Get Started?
          </p>

          <h2 className="mx-auto mt-5 max-w-5xl text-3xl font-black leading-[1.05] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
            {service.ctaTitle}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-black/70 sm:mt-7 sm:text-lg sm:leading-8">
            {service.ctaDescription}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">

            <Link
              href="/contact"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-black px-7 py-4 text-sm font-black text-white transition-all duration-300 hover:scale-[1.02] hover:bg-white hover:text-black sm:w-auto sm:px-8"
            >

              Start Your Project

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />

            </Link>

            <Link
              href="/services"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full border-2 border-black px-7 py-4 text-sm font-black transition-all duration-300 hover:bg-black hover:text-white sm:w-auto sm:px-8"
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