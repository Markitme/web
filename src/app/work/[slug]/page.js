import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Check,
  MapPin,
} from "lucide-react";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import Button from "@/components/ui/Button";
import CTA from "@/components/CTA";

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

      <section className="site-hero section-dark relative border-b border-[var(--accent)]/30 px-5 pb-20 pt-28 sm:pb-28 sm:pt-36">
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
              hover:text-[var(--color-purple)]
              dark:text-[var(--color-cream)]/60
              dark:hover:text-[var(--color-light-purple)]
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
                <p
                  className="
                    text-[9px]
                    font-black
                    uppercase
                    tracking-[0.24em]
                    text-[var(--color-purple)]
                    dark:text-[var(--color-light-purple)]
                  "
                >
                  Case Study — {project.number}
                </p>

                
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
                    bg-[var(--color-light-purple)]/15
                    px-4
                    py-2
                    text-sm
                    font-bold
                    text-[var(--color-deep)]
                    dark:text-[var(--color-light-purple)]
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

                <Button href={project.website} target="_blank" rel="noopener noreferrer" variant="primary" size="lg">
                  Visit Live Website
                </Button>

                <Button href="/contact" variant="outline" size="lg">
                  Start a Project
                </Button>

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

      <section className="section-light px-5 py-20 sm:py-28">

        <div className="container-custom grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

          <div>

            {/* Eyebrow */}

            <div className="inline-flex items-center gap-2">

              <p
                className="
                  text-[9px]
                  font-black
                  uppercase
                  tracking-[0.24em]
                  text-[var(--color-purple)]
                  dark:text-[var(--color-light-purple)]
                "
              >
                {project.aboutTitle}
              </p>

              
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
              <span className="block text-[var(--color-purple)] dark:text-[var(--color-light-purple)]">
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
          section-dark
          border-y
          border-[var(--color-deep)]/10
          bg-[var(--section-dark)]
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

              <p
                className="
                  text-[9px]
                  font-black
                  uppercase
                  tracking-[0.24em]
                  text-[var(--color-purple)]
                "
              >
                The Challenge
              </p>

             
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
              <span className="block text-[var(--color-purple)]">
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
                  card-purple-border
                  rounded-3xl
                  border
                  border-[var(--color-deep)]/10
                  bg-[var(--section-dark-surface)]
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[var(--color-purple)]/40
                "
              >

                <span className="text-4xl font-black text-white">
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

      <section className="section-light px-5 py-20 sm:py-28">

        <div className="container-custom">

          <div className="max-w-3xl">

            <div className="inline-flex items-center gap-2">

              <p
                className="
                  text-[9px]
                  font-black
                  uppercase
                  tracking-[0.24em]
                  text-[var(--color-purple)]
                  dark:text-[var(--color-light-purple)]
                "
              >
                What MarkitMe Did
              </p>

             
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
              <span className="block text-[var(--color-purple)] dark:text-[var(--color-light-purple)]">
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
                  card-purple-border
                  rounded-[28px]
                  border
                  border-[var(--color-deep)]/10
                  bg-[var(--surface)]
                  p-7
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[var(--color-purple)]/50
                  hover:shadow-xl
                  dark:border-[var(--color-cream)]/10
                  dark:bg-[var(--color-deep)]/50
                  dark:hover:border-[var(--color-light-purple)]/50
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
                      bg-[var(--color-light-purple)]
                      font-black
                      text-white
                    "
                  >
                    0{index + 1}
                  </span>

                  <Check
                    size={22}
                    className="text-[var(--color-purple)] dark:text-[var(--color-light-purple)]"
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

            <p className="text-[9px] font-black uppercase tracking-[0.24em] text-[var(--color-light-purple)]">
              The Outcome
            </p>

            
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
            <span className="block text-[var(--color-light-purple)]">
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
                  border-[var(--accent)]/55
                  bg-[var(--color-cream)]/5
                  p-7
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[var(--accent-bright)]
                "
              >

                <p className="text-3xl font-black tracking-[-0.05em] text-white">
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

      <section className="section-light px-5 py-20 sm:py-28">

        <div className="container-custom grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

          <div>

            <div className="inline-flex items-center gap-2">

              <p
                className="
                  text-[9px]
                  font-black
                  uppercase
                  tracking-[0.24em]
                  text-[var(--color-purple)]
                  dark:text-[var(--color-light-purple)]
                "
              >
                What Changed
              </p>

             
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
              <span className="block text-[var(--color-purple)] dark:text-[var(--color-light-purple)]">
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
                    bg-[var(--surface)]
                    p-5
                    
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
                      bg-[var(--color-light-purple)]
                     text-white
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

      <CTA
        eyebrow="Ready to Grow?"
        title="Let's build your next success story."
        buttonText="Get in Touch"
        buttonHref="/contact"
        openModal={false}
      />

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