import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function WorkPage() {
  return (
    <main className=" transition-colors duration-300 bg-[#F1F3ED] text-[#0C3B2E] dark:bg-[#071F18] dark:text-[#F1F3ED]">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="border-b border-black/10 px-5 py-24 dark:border-white/10 sm:py-32">
        <div className="container-custom">

          {/* Eyebrow */}

          <div className="inline-flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#FFBA00]" />

            <p
              className="
                text-xs
                font-black
                uppercase
                tracking-[0.2em]
                text-[#6D9773]
                dark:text-[#FFBA00]
              "
            >
              Case Studies
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
              tracking-[-0.055em]
              text-[#0C3B2E]

              dark:text-[#F1F3ED]

              sm:text-5xl
              lg:text-6xl
            "
          >
            Ideas turned into{" "}
            <span className="text-[#6D9773] dark:text-[#FFBA00]">
              measurable impact.
            </span>
          </h1>

          {/* Description */}

          <p
            className="
              mt-6
              max-w-2xl
              text-sm
              leading-7
              text-[#0C3B2E]/55
              dark:text-[#F1F3ED]/55
              sm:text-base
            "
          >
            Explore selected projects created through strategy, design,
            technology, and focused digital growth.
          </p>

        </div>
      </section>


      {/* =====================================================
          PROJECTS
      ====================================================== */}

      <section className="px-5 py-20 sm:py-28">
        <div className="container-custom">

          {/* =================================================
              SECTION HEADER
          ================================================== */}

          <div className="mb-11 sm:mb-14">

            {/* Eyebrow */}

            <div className="inline-flex items-center gap-3">

              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#FFBA00]
                "
              />

              <p
                className="
                  text-[9px]
                  font-black
                  uppercase
                  tracking-[0.24em]
                  text-[#6D9773]
                  dark:text-[#FFBA00]
                "
              >
                Our Latest Projects
              </p>

              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#6D9773]
                  dark:bg-[#FFBA00]
                "
              />

            </div>

            {/* Heading */}

            <h2
              className="
                mt-4
                max-w-3xl
                text-4xl
                font-black
                leading-[0.98]
                tracking-[-0.055em]
                text-[#0C3B2E]

                dark:text-[#F1F3ED]

                sm:text-5xl
                lg:text-6xl
              "
            >
              Work built to move{" "}
              <span className="text-[#6D9773] dark:text-[#FFBA00]">
                businesses forward.
              </span>
            </h2>

            {/* Description */}

            <p
              className="
                mt-5
                max-w-2xl
                text-sm
                leading-7
                text-[#0C3B2E]/55

                dark:text-[#F1F3ED]/55

                sm:text-base
              "
            >
              Every project is shaped around the client&apos;s goals,
              audience, brand, and digital growth strategy.
            </p>

          </div>


          {/* =================================================
              PROJECT GRID
          ================================================== */}

          <div className="grid gap-6 md:grid-cols-2">

            {projects.map((project) => (

              <article
                key={project.title}
                className="
                  group
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-[#0C3B2E]/10
                  bg-[#F1F3ED]/50
                  transition-all
                  duration-500

                  hover:-translate-y-1
                  hover:border-[#6D9773]
                  hover:shadow-xl

                  dark:border-[#F1F3ED]/10
                  dark:bg-white/[0.03]

                  dark:hover:border-[#FFBA00]
                "
              >

                {/* =================================================
                    PROJECT IMAGE
                ================================================== */}

                <div
                  className="
                    relative
                    aspect-[16/10]
                    overflow-hidden
                    bg-[#0C3B2E]/5
                    dark:bg-white/10
                  "
                >

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />

                  {/* Overlay */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/65
                      via-transparent
                      to-transparent
                    "
                  />

                  {/* Project Number */}

                  <span
                    className="
                      absolute
                      left-6
                      top-6
                      rounded-full
                      bg-white/90
                      px-4
                      py-2
                      text-xs
                      font-black
                      text-[#0C3B2E]
                      backdrop-blur-md
                    "
                  >
                    {project.number}
                  </span>

                  {/* Project Label */}

                  <span
                    className="
                      absolute
                      bottom-6
                      left-6
                      rounded-full
                      bg-black/60
                      px-4
                      py-2
                      text-xs
                      font-bold
                      text-white
                      backdrop-blur-md
                    "
                  >
                    MarkitMe Project
                  </span>

                </div>


                {/* =================================================
                    PROJECT CONTENT
                ================================================== */}

                <div className="p-7 sm:p-8">

                  {/* Category */}

                  <p
                    className="
                      text-[9px]
                      font-black
                      uppercase
                      tracking-[0.2em]
                      text-[#6D9773]
                      dark:text-[#FFBA00]
                    "
                  >
                    {project.category}
                  </p>

                  {/* Title */}

                  <h2
                    className="
                      mt-4
                      text-3xl
                      font-black
                      leading-[1]
                      tracking-[-0.045em]
                      text-[#0C3B2E]
                      dark:text-[#F1F3ED]
                    "
                  >
                    {project.title}
                  </h2>

                  {/* Location */}

                  <p
                    className="
                      mt-3
                      text-sm
                      font-semibold
                      text-[#0C3B2E]/45
                      dark:text-[#F1F3ED]/45
                    "
                  >
                    {project.location}
                  </p>

                  {/* Description */}

                  <p
                    className="
                      mt-5
                      text-sm
                      leading-7
                      text-[#0C3B2E]/60
                      dark:text-[#F1F3ED]/60
                    "
                  >
                    {project.description}
                  </p>

                  {/* CTA */}

                  <Link
                    href={`/work/${project.slug}`}
                    className="
                      group/link
                      mt-7
                      inline-flex
                      items-center
                      gap-3
                      rounded-full
                      bg-[#FFBA00]
                      px-6
                      py-3.5
                      text-sm
                      font-bold
                      text-[#0C3B2E]
                      transition-all
                      duration-300

                      hover:scale-[1.03]
                      hover:bg-[#0C3B2E]
                      hover:text-[#FFBA00]

                      dark:hover:bg-[#F1F3ED]
                      dark:hover:text-[#0C3B2E]
                    "
                  >
                    View Case Study

                    <ArrowRight
                      size={17}
                      className="
                        transition-transform
                        duration-300
                        group-hover/link:translate-x-1
                      "
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