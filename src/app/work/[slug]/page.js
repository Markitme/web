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

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="overflow-hidden bg-white text-black dark:bg-[#0a0a0a] dark:text-white">

      {/* HERO */}
      <section className="relative border-b border-black/10 px-5 pb-20 pt-28 dark:border-white/10 sm:pb-28 sm:pt-36">
        <div className="container-custom">

          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-bold text-black/60 transition hover:text-[#8db800] dark:text-white/60 dark:hover:text-[#a7d503]"
          >
            <ArrowLeft size={17} />
            Back to Work
          </Link>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">

            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#8db800] dark:text-[#a7d503]">
                Case Study — {project.number}
              </p>

              <h1 className="mt-5 text-4xl font-black leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                {project.title}
              </h1>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full bg-[#a7d503]/15 px-4 py-2 text-sm font-bold text-[#607c00] dark:text-[#a7d503]">
                  {project.category}
                </span>

                <span className="inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm font-semibold text-black/60 dark:border-white/10 dark:text-white/60">
                  <MapPin size={16} />
                  {project.location}
                </span>
              </div>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-black/65 dark:text-white/65">
                {project.shortDescription}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full bg-[#a7d503] px-6 py-3.5 text-sm font-black text-black transition hover:scale-[1.03] hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
                >
                  Visit Live Website
                  <ExternalLink size={17} />
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-full border border-black/15 px-6 py-3.5 text-sm font-black transition hover:border-[#8db800] hover:text-[#8db800] dark:border-white/15 dark:hover:border-[#a7d503] dark:hover:text-[#a7d503]"
                >
                  Start a Project
                  <ArrowRight size={17} />
                </Link>

              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] border border-black/10 bg-black/5 shadow-2xl dark:border-white/10 dark:bg-white/5">

              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 rounded-full bg-black/65 px-4 py-2 text-xs font-black uppercase tracking-[0.15em] text-white backdrop-blur">
                Markit Me Case Study
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="px-5 py-20 sm:py-28">

        <div className="container-custom grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8db800] dark:text-[#a7d503]">
              {project.aboutTitle}
            </p>

            <h2 className="mt-4 text-4xl font-black leading-none tracking-[-0.05em] sm:text-5xl">
              The story
              <span className="block text-[#8db800] dark:text-[#a7d503]">
                behind the work.
              </span>
            </h2>
          </div>

          <div className="space-y-6">

            {project.overview.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg leading-9 text-black/65 dark:text-white/65"
              >
                {paragraph}
              </p>
            ))}

          </div>

        </div>
      </section>

      {/* CHALLENGE */}
      <section className="border-y border-black/10 bg-black/[0.025] px-5 py-20 dark:border-white/10 dark:bg-white/[0.03] sm:py-28">

        <div className="container-custom grid gap-12 lg:grid-cols-2">

          <div>

            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8db800] dark:text-[#a7d503]">
              The Challenge
            </p>

            <h2 className="mt-4 text-4xl font-black leading-none tracking-[-0.05em] sm:text-5xl">
              What needed
              <span className="block">to change.</span>
            </h2>

            <div className="mt-8 space-y-5">

              {project.challenge.map((paragraph, index) => (
                <p
                  key={index}
                  className="leading-8 text-black/65 dark:text-white/65"
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
                className="rounded-3xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-[#0a0a0a]"
              >

                <span className="text-4xl font-black text-[#8db800] dark:text-[#a7d503]">
                  0{index + 1}
                </span>

                <p className="mt-8 font-bold leading-7 text-black/70 dark:text-white/70">
                  {challenge}
                </p>

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="px-5 py-20 sm:py-28">

        <div className="container-custom">

          <div className="max-w-3xl">

            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8db800] dark:text-[#a7d503]">
              What Markit Me Did
            </p>

            <h2 className="mt-4 text-4xl font-black leading-none tracking-[-0.05em] sm:text-5xl">
              Strategy turned
              <span className="block">into action.</span>
            </h2>

          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">

            {project.services.map((service, index) => (

              <article
                key={service.title}
                className="group rounded-[28px] border border-black/10 p-7 transition hover:border-[#8db800] hover:shadow-xl dark:border-white/10 dark:hover:border-[#a7d503] sm:p-9"
              >

                <div className="flex items-start justify-between gap-5">

                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#a7d503] font-black text-black">
                    0{index + 1}
                  </span>

                  <Check
                    size={22}
                    className="text-[#8db800] dark:text-[#a7d503]"
                  />

                </div>

                <h3 className="mt-10 text-2xl font-black tracking-[-0.04em]">
                  {service.title}
                </h3>

                <p className="mt-4 leading-8 text-black/60 dark:text-white/60">
                  {service.description}
                </p>

              </article>

            ))}

          </div>

        </div>
      </section>

      {/* RESULTS */}
      <section className="bg-black px-5 py-20 text-white dark:bg-white dark:text-black sm:py-28">

        <div className="container-custom">

          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#a7d503] dark:text-[#6f8d00]">
            The Outcome
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-black leading-none tracking-[-0.05em] sm:text-6xl">
            Results that
            <span className="block text-[#a7d503] dark:text-[#6f8d00]">
              moved the business.
            </span>
          </h2>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {project.results.map((result) => (

              <div
                key={result.label}
                className="rounded-[28px] border border-white/15 bg-white/5 p-7 dark:border-black/10 dark:bg-black/[0.03]"
              >

                <p className="text-5xl font-black tracking-[-0.05em] text-[#a7d503] dark:text-[#6f8d00]">
                  {result.value}
                </p>

                <p className="mt-4 font-bold leading-6 text-white/65 dark:text-black/60">
                  {result.label}
                </p>

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* WHAT CHANGED */}
      <section className="px-5 py-20 sm:py-28">

        <div className="container-custom grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

          <div>

            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8db800] dark:text-[#a7d503]">
              What Changed
            </p>

            <h2 className="mt-4 text-4xl font-black leading-none tracking-[-0.05em] sm:text-5xl">
              A stronger
              <span className="block">digital presence.</span>
            </h2>

          </div>

          <div>

            <div className="space-y-4">

              {project.changed.map((item) => (

                <div
                  key={item}
                  className="flex gap-4 rounded-2xl border border-black/10 p-5 dark:border-white/10"
                >

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#a7d503] text-black">
                    <Check size={17} />
                  </span>

                  <p className="font-semibold leading-7 text-black/65 dark:text-white/65">
                    {item}
                  </p>

                </div>

              ))}

            </div>

            <p className="mt-8 text-lg leading-9 text-black/65 dark:text-white/65">
              {project.conclusion}
            </p>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-20 sm:pb-28">

        <div className="container-custom">

          <div className="rounded-[35px] bg-[#a7d503] p-8 text-black sm:p-14">

            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

              <div>

                <p className="text-sm font-black uppercase tracking-[0.2em]">
                  Ready to Grow?
                </p>

                <h2 className="mt-4 max-w-3xl text-4xl font-black leading-[0.95] tracking-[-0.05em] sm:text-6xl">
                  Let’s build your next success story.
                </h2>

              </div>

              <Link
                href="/contact"
                className="inline-flex w-fit items-center gap-3 rounded-full bg-black px-7 py-4 font-black text-white transition hover:scale-[1.03]"
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