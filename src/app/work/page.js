import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";

export default function WorkPage() {
  return (
    <main className="bg-white text-black transition-colors duration-300 dark:bg-[#0a0a0a] dark:text-white">
      {/* Hero */}
      <section className="border-b border-black/10 px-5 py-24 dark:border-white/10 sm:py-32">
        <div className="container-custom">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8db800] dark:text-[#a7d503]">
            Case Studies
          </p>

          <h1 className="mt-5 max-w-4xl text-3xl font-black tracking-[-0.05em] sm:text-4xl lg:text-5xl xl:text-6xl">
            Ideas turned into
            <span className="block text-[#8db800] dark:text-[#a7d503]">
              measurable impact.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-black/60 dark:text-white/60">
            Explore selected projects created through strategy, design,
            technology, and focused digital growth.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="px-5 py-20 sm:py-28">
        <div className="container-custom">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8db800] dark:text-[#a7d503]">
                Our Latest Projects
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-5xl">
                Work built to move
                <span className="block">businesses forward.</span>
              </h2>
               <p className="mt-7 max-w-2xl text-lg leading-8 text-black/60 dark:text-white/60">
                Every project is shaped around the client’s goals, audience,
                brand, and digital growth strategy.
              </p>
            </div>

           
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-[28px] border border-black/10 bg-black/[0.02] transition-all duration-300 hover:-translate-y-1 hover:border-[#8db800] hover:shadow-xl dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-[#a7d503]"
              >
                {/* Project Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black/10 dark:bg-white/10">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

                  <span className="absolute left-6 top-6 rounded-full bg-white/90 px-4 py-2 text-xs font-black text-black backdrop-blur-md">
                    {project.number}
                  </span>

                  <span className="absolute bottom-6 left-6 rounded-full bg-black/60 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
                    MarkitMe Project
                  </span>
                </div>

                {/* Project Content */}
                <div className="p-7 sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8db800] dark:text-[#a7d503]">
                    {project.category}
                  </p>

                  <h2 className="mt-4 text-3xl font-black tracking-[-0.04em]">
                    {project.title}
                  </h2>

                  <p className="mt-3 text-sm font-semibold text-black/45 dark:text-white/45">
                    {project.location}
                  </p>

                  <p className="mt-5 leading-7 text-black/60 dark:text-white/60">
                    {project.description}
                  </p>

                  <Link
  href={`/work/${project.slug}`}
  className="group/link mt-7 inline-flex items-center gap-3 rounded-full bg-[#a7d503] px-6 py-3.5 text-sm font-bold text-black transition-all duration-300 hover:scale-[1.03] hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
>
  View Case Study

  <ArrowRight
    size={17}
    className="transition-transform duration-300 group-hover/link:translate-x-1"
  />
</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}