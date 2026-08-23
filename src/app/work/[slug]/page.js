import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ExternalLink,
  MapPin,
} from "lucide-react";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailsPage({ params }) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="overflow-hidden bg-[var(--color-cream)] text-[var(--color-deep)] dark:bg-[var(--color-night)] dark:text-[var(--color-cream)]">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative border-b border-[var(--color-deep)]/10 px-5 pb-20 pt-28 dark:border-[var(--color-cream)]/10 sm:pb-28 sm:pt-36">
        <div className="container-custom">

          {/* Back */}

          <Link
            href="/work"
            className="
              inline-flex
              items-center
              gap-2
              text-sm
              font-bold
              text-[var(--color-deep)]/60
              transition
              hover:text-[var(--color-green)]
              dark:text-[var(--color-cream)]/60
              dark:hover:text-[var(--color-gold)]
            "
          >
            <ArrowLeft size={17} />
            Back to Work
          </Link>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">

            {/* Hero Content */}

            <div>

              {/* Eyebrow */}

              <div className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-gold)]" />

                <p
                  className="
                    text-[9px]
                    font-black
                    uppercase
                    tracking-[0.24em]
                    text-[var(--color-green)]
                    dark:text-[var(--color-gold)]
                  "
                >
                  Case Study — {project.number}
                </p>

                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-green)] dark:bg-[var(--color-gold)]" />
              </div>

              {/* Heading */}

              <h1
                className="
                  mt-5
                  max-w-4xl
                  text-4xl
                  font-black
                  leading-[0.95]
                  tracking-[-0.06em]
                  sm:text-6xl
                  lg:text-7xl
                "
              >
                {project.title}
              </h1>

              {/* Meta */}

              <div className="mt-6 flex flex-wrap gap-3">

                <span
                  className="
                    rounded-full
                    bg-[var(--color-gold)]/15
                    px-4
                    py-2
                    text-sm
                    font-bold
                    text-[var(--color-deep)]
                    dark:text-[var(--color-gold)]
                  "
                >
                  {project.category}
                </span>

                <span
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-[var(--color-deep)]/10
                    px-4
                    py-2
                    text-sm
                    font-semibold
                    text-[var(--color-deep)]/60
                    dark:border-[var(--color-cream)]/10
                    dark:text-[var(--color-cream)]/60
                  "
                >
                  <MapPin size={16} />
                  {project.location}
                </span>

              </div>

              {/* Description */}

              <p
                className="
                  mt-7
                  max-w-2xl
                  text-lg
                  leading-8
                  text-[var(--color-deep)]/65
                  dark:text-[var(--color-cream)]/65
                "
              >
                {project.shortDescription}
              </p>

              {/* Buttons */}

              <div className="mt-8 flex flex-wrap gap-4">

                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    bg-[var(--color-gold)]
                    px-6
                    py-3.5
                    text-sm
                    font-black
                    text-[var(--color-deep)]
                    transition-all
                    hover:-translate-y-0.5
                    hover:bg-[var(--color-deep)]
                    hover:text-[var(--color-gold)]
                  "
                >
                  Visit Live Website
                  <ExternalLink size={17} />
                </a>

                <Link
                  href="/contact"
                  className="
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-[var(--color-deep)]/15
                    px-6
                    py-3.5
                    text-sm
                    font-black
                    transition-all
                    hover:border-[var(--color-green)]
                    hover:bg-[var(--color-green)]
                    hover:text-white
                    dark:border-[var(--color-cream)]/15
                    dark:hover:border-[var(--color-gold)]
                    dark:hover:bg-[var(--color-gold)]
                    dark:hover:text-[var(--color-deep)]
                  "
                >
                  Start a Project
                  <ArrowRight size={17} />
                </Link>

              </div>
            </div>

            {/* Hero Image */}

            <div
              className="
                relative
                aspect-[4/3]
                overflow-hidden
                rounded-[32px]
                border
                border-[var(--color-deep)]/10
                bg-[var(--color-deep)]/5
                shadow-2xl
                dark:border-[var(--color-cream)]/10
                dark:bg-[var(--color-cream)]/5
              "
            >

              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-deep)]/65 via-transparent to-transparent" />

              <div
                className="
                  absolute
                  bottom-6
                  left-6
                  rounded-full
                  bg-[var(--color-deep)]/80
                  px-4
                  py-2
                  text-xs
                  font-black
                  uppercase
                  tracking-[0.15em]
                  text-[var(--color-cream)]
                  backdrop-blur
                "
              >
                MarkitMe Case Study
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          ABOUT
      ====================================================== */}

      <section className="px-5 py-20 sm:py-28">

        <div className="container-custom grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

          <div>

            {/* Eyebrow */}

            <div className="inline-flex items-center gap-2">

              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-gold)]" />

              <p
                className="
                  text-[9px]
                  font-black
                  uppercase
                  tracking-[0.24em]
                  text-[var(--color-green)]
                  dark:text-[var(--color-gold)]
                "
              >
                {project.aboutTitle}
              </p>

              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-green)] dark:bg-[var(--color-gold)]" />

            </div>

            <h2
              className="
                mt-4
                text-4xl
                font-black
                leading-[0.98]
                tracking-[-0.055em]
                sm:text-5xl
              "
            >
              The story
              <span className="block text-[var(--color-green)] dark:text-[var(--color-gold)]">
                behind the work.
              </span>
            </h2>

          </div>

          <div className="space-y-6">

            {project.overview.map((paragraph, index) => (
              <p
                key={index}
                className="
                  text-lg
                  leading-9
                  text-[var(--color-deep)]/65
                  dark:text-[var(--color-cream)]/65
                "
              >
                {paragraph}
              </p>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          CHALLENGE
      ====================================================== */}

      <section
        className="
          border-y
          border-[var(--color-deep)]/10
          bg-white/50
          px-5
          py-20
          dark:border-[var(--color-cream)]/10
          dark:bg-[var(--color-deep)]/40
          sm:py-28
        "
      >

        <div className="container-custom grid gap-12 lg:grid-cols-2">

          <div>

            <div className="inline-flex items-center gap-2">

              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-gold)]" />

              <p
                className="
                  text-[9px]
                  font-black
                  uppercase
                  tracking-[0.24em]
                  text-[var(--color-green)]
                  dark:text-[var(--color-gold)]
                "
              >
                The Challenge
              </p>

              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-green)] dark:bg-[var(--color-gold)]" />

            </div>

            <h2
              className="
                mt-4
                text-4xl
                font-black
                leading-[0.98]
                tracking-[-0.055em]
                sm:text-5xl
              "
            >
              What needed
              <span className="block text-[var(--color-green)] dark:text-[var(--color-gold)]">
                to change.
              </span>
            </h2>

            <div className="mt-8 space-y-5">

              {project.challenge.map((paragraph, index) => (
                <p
                  key={index}
                  className="
                    leading-8
                    text-[var(--color-deep)]/65
                    dark:text-[var(--color-cream)]/65
                  "
                >
                  {paragraph}
                </p>
              ))}

            </div>

          </div>

          <div className="grid gap-4 sm:grid-cols-2">

            {project.challenges.map((challenge, index) => (

              <div
                key={challenge}
                className="
                  rounded-3xl
                  border
                  border-[var(--color-deep)]/10
                  bg-[var(--color-cream)]
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[var(--color-green)]/40
                  dark:border-[var(--color-cream)]/10
                  dark:bg-[var(--color-night)]
                  dark:hover:border-[var(--color-gold)]/40
                "
              >

                <span className="text-4xl font-black text-[var(--color-gold)]">
                  0{index + 1}
                </span>

                <p className="mt-8 font-bold leading-7 text-[var(--color-deep)]/70 dark:text-[var(--color-cream)]/70">
                  {challenge}
                </p>

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          SERVICES
      ====================================================== */}

      <section className="px-5 py-20 sm:py-28">

        <div className="container-custom">

          <div className="max-w-3xl">

            <div className="inline-flex items-center gap-2">

              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-gold)]" />

              <p
                className="
                  text-[9px]
                  font-black
                  uppercase
                  tracking-[0.24em]
                  text-[var(--color-green)]
                  dark:text-[var(--color-gold)]
                "
              >
                What MarkitMe Did
              </p>

              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-green)] dark:bg-[var(--color-gold)]" />

            </div>

            <h2
              className="
                mt-4
                text-4xl
                font-black
                leading-[0.98]
                tracking-[-0.055em]
                sm:text-5xl
              "
            >
              Strategy turned
              <span className="block text-[var(--color-green)] dark:text-[var(--color-gold)]">
                into action.
              </span>
            </h2>

          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">

            {project.services.map((service, index) => (

              <article
                key={service.title}
                className="
                  group
                  rounded-[28px]
                  border
                  border-[var(--color-deep)]/10
                  bg-white/60
                  p-7
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[var(--color-green)]/50
                  hover:shadow-xl
                  dark:border-[var(--color-cream)]/10
                  dark:bg-[var(--color-deep)]/50
                  dark:hover:border-[var(--color-gold)]/50
                  sm:p-9
                "
              >

                <div className="flex items-start justify-between gap-5">

                  <span
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      bg-[var(--color-gold)]
                      font-black
                      text-[var(--color-deep)]
                    "
                  >
                    0{index + 1}
                  </span>

                  <Check
                    size={22}
                    className="text-[var(--color-green)] dark:text-[var(--color-gold)]"
                  />

                </div>

                <h3 className="mt-10 text-2xl font-black tracking-[-0.04em]">
                  {service.title}
                </h3>

                <p className="mt-4 leading-8 text-[var(--color-deep)]/60 dark:text-[var(--color-cream)]/60">
                  {service.description}
                </p>

              </article>

            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          RESULTS
      ====================================================== */}

      <section className="bg-[var(--color-deep)] px-5 py-20 text-[var(--color-cream)] sm:py-28">

        <div className="container-custom">

          <div className="inline-flex items-center gap-2">

            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-gold)]" />

            <p className="text-[9px] font-black uppercase tracking-[0.24em] text-[var(--color-gold)]">
              The Outcome
            </p>

            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-green)]" />

          </div>

          <h2
            className="
              mt-4
              max-w-3xl
              text-4xl
              font-black
              leading-[0.98]
              tracking-[-0.055em]
              sm:text-6xl
            "
          >
            Results that
            <span className="block text-[var(--color-gold)]">
              moved the business.
            </span>
          </h2>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {project.results.map((result) => (

              <div
                key={result.label}
                className="
                  rounded-[28px]
                  border
                  border-[var(--color-cream)]/15
                  bg-[var(--color-cream)]/5
                  p-7
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[var(--color-gold)]/40
                "
              >

                <p className="text-5xl font-black tracking-[-0.05em] text-[var(--color-gold)]">
                  {result.value}
                </p>

                <p className="mt-4 font-bold leading-6 text-[var(--color-cream)]/65">
                  {result.label}
                </p>

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          WHAT CHANGED
      ====================================================== */}

      <section className="px-5 py-20 sm:py-28">

        <div className="container-custom grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

          <div>

            <div className="inline-flex items-center gap-2">

              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-gold)]" />

              <p
                className="
                  text-[9px]
                  font-black
                  uppercase
                  tracking-[0.24em]
                  text-[var(--color-green)]
                  dark:text-[var(--color-gold)]
                "
              >
                What Changed
              </p>

              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-green)] dark:bg-[var(--color-gold)]" />

            </div>

            <h2
              className="
                mt-4
                text-4xl
                font-black
                leading-[0.98]
                tracking-[-0.055em]
                sm:text-5xl
              "
            >
              A stronger
              <span className="block text-[var(--color-green)] dark:text-[var(--color-gold)]">
                digital presence.
              </span>
            </h2>

          </div>

          <div>

            <div className="space-y-4">

              {project.changed.map((item) => (

                <div
                  key={item}
                  className="
                    flex
                    gap-4
                    rounded-2xl
                    border
                    border-[var(--color-deep)]/10
                    bg-white/40
                    p-5
                    dark:border-[var(--color-cream)]/10
                    dark:bg-[var(--color-deep)]/40
                  "
                >

                  <span
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[var(--color-gold)]
                      text-[var(--color-deep)]
                    "
                  >
                    <Check size={17} />
                  </span>

                  <p className="font-semibold leading-7 text-[var(--color-deep)]/65 dark:text-[var(--color-cream)]/65">
                    {item}
                  </p>

                </div>

              ))}

            </div>

            <p className="mt-8 text-lg leading-9 text-[var(--color-deep)]/65 dark:text-[var(--color-cream)]/65">
              {project.conclusion}
            </p>

          </div>

        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="px-5 pb-20 sm:pb-28">

        <div className="container-custom">

          <div
            className="
              relative
              overflow-hidden
              rounded-[35px]
              bg-[var(--color-gold)]
              p-8
              text-[var(--color-deep)]
              sm:p-14
            "
          >

            {/* Decorative circle */}

            <div
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-64
                w-64
                rounded-full
                bg-[var(--color-green)]/20
                blur-3xl
              "
            />

            <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

              <div>

                <div className="inline-flex items-center gap-2">

                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-deep)]" />

                  <p className="text-[9px] font-black uppercase tracking-[0.24em]">
                    Ready to Grow?
                  </p>

                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-green)]" />

                </div>

                <h2
                  className="
                    mt-4
                    max-w-3xl
                    text-4xl
                    font-black
                    leading-[0.95]
                    tracking-[-0.05em]
                    sm:text-6xl
                  "
                >
                  Let’s build your next success story.
                </h2>

              </div>

              <Link
                href="/contact"
                className="
                  inline-flex
                  w-fit
                  shrink-0
                  items-center
                  gap-3
                  rounded-full
                  bg-[var(--color-deep)]
                  px-7
                  py-4
                  font-black
                  text-[var(--color-cream)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[var(--color-green)]
                "
              >
                Get in Touch
                <ArrowRight size={18} />
              </Link>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | MarkitMe",
      description: "The requested MarkitMe project could not be found.",
    };
  }

  return {
    title: `${project.title} | MarkitMe Case Study`,
    description: project.shortDescription || project.description,
  };
}