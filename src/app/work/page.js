import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
{
category: "Brand Strategy",
title: "Building a stronger market presence",
description:
"A strategic brand refresh focused on clarity, consistency, and audience connection.",
},
{
category: "Website Design",
title: "A modern digital experience",
description:
"A conversion-focused website designed to make the customer journey simpler and stronger.",
},
{
category: "Digital Marketing",
title: "Turning attention into action",
description:
"A performance-led campaign built around relevant messaging and measurable outcomes.",
},
{
category: "SEO & Content",
title: "Growing visibility organically",
description:
"A content and search strategy created to improve discoverability and long-term growth.",
},
];

export default function WorkPage() {
return ( <main className="bg-white text-black dark:bg-[#0a0a0a] dark:text-white"> <section className="px-5 py-24 sm:py-32"> <div className="container-custom"> <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8db800] dark:text-[#c8ff00]">
Selected Work </p>


      <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-[-0.05em] sm:text-7xl">
        Work built to create meaningful results.
      </h1>

      <p className="mt-7 max-w-2xl text-lg leading-8 text-black/60 dark:text-white/60">
        Explore a selection of projects shaped by strategy, creativity,
        collaboration, and measurable goals.
      </p>
    </div>
  </section>

  <section className="border-t border-black/10 px-5 py-20 dark:border-white/10">
    <div className="container-custom grid gap-6 md:grid-cols-2">
      {projects.map((project, index) => (
        <article
          key={project.title}
          className="group overflow-hidden rounded-3xl border border-black/10 bg-black/[0.03] dark:border-white/10 dark:bg-white/[0.03]"
        >
          <div className="flex aspect-[16/10] items-end justify-between bg-gradient-to-br from-[#c8ff00]/30 via-black/5 to-black/15 p-7 dark:via-white/5 dark:to-white/10">
            <span className="text-sm font-bold uppercase tracking-[0.18em]">
              0{index + 1}
            </span>

            <ArrowUpRight
              size={30}
              className="transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </div>

          <div className="p-7 sm:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8db800] dark:text-[#c8ff00]">
              {project.category}
            </p>

            <h2 className="mt-4 text-2xl font-black sm:text-3xl">
              {project.title}
            </h2>

            <p className="mt-4 leading-7 text-black/60 dark:text-white/60">
              {project.description}
            </p>
          </div>
        </article>
      ))}
    </div>

    <div className="mt-12 text-center">
      <Link
        href="/contact"
        className="inline-flex items-center gap-2 rounded-full bg-[#c8ff00] px-7 py-4 font-bold text-black transition hover:scale-105"
      >
        Start a project
        <ArrowUpRight size={18} />
      </Link>
    </div>
  </section>
</main>


);
}
