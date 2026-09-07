import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Our Work | MarkitMe Case Studies",
  description:
    "Explore selected MarkitMe projects shaped by strategy, design, technology, and focused digital growth.",
};

export default function WorkPage() {
  return (
    <main className=" transition-colors duration-300 bg-[var(--color-cream)] text-[var(--color-deep)] dark:bg-[var(--color-night)] dark:text-[var(--color-cream)]">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="site-hero border-b border-black/10 px-5 py-24 dark:border-white/10 sm:py-32">
        <div className="container-custom">

          {/* Eyebrow */}

          <div className="inline-flex items-center gap-3">
            <p
              className="
                text-xs
                font-black
                uppercase
                tracking-[0.2em]
                text-[var(--color-purple)]
                dark:text-[var(--color-light-purple)]
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
              text-[var(--color-deep)]

              dark:text-[var(--color-cream)]

              sm:text-5xl
              lg:text-6xl
            "
          >
            Ideas turned into{" "}
            <span className="text-[var(--color-light-purple)]">
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
              text-[var(--color-deep)]/55
              dark:text-[var(--color-cream)]/55
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
                Our Latest Projects
              </p>

             

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
                text-[var(--color-deep)]

                dark:text-[var(--color-cream)]

                sm:text-5xl
                lg:text-6xl
              "
            >
              Work built to move{" "}
              <span className="text-[var(--color-purple)] dark:text-[var(--color-light-purple)]">
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
                text-[var(--color-deep)]/55

                dark:text-[var(--color-cream)]/55

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
                  border-[var(--color-deep)]/10
                  bg-[var(--color-cream)]/50
                  transition-all
                  duration-500

                  hover:-translate-y-1
                  hover:border-[var(--color-purple)]
                  hover:shadow-xl

                  dark:border-[var(--color-cream)]/10
                  dark:bg-white/[0.03]

                  dark:hover:border-[var(--color-light-purple)]
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
                    bg-[var(--color-deep)]/5
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
                      text-[var(--color-deep)]
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
                      text-[var(--color-purple)]
                      dark:text-[var(--color-light-purple)]
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
                      text-[var(--color-deep)]
                      dark:text-[var(--color-cream)]
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
                      text-[var(--color-deep)]/45
                      dark:text-[var(--color-cream)]/45
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
                      text-[var(--color-deep)]/60
                      dark:text-[var(--color-cream)]/60
                    "
                  >
                    {project.description}
                  </p>

                  {/* CTA */}

                  <Button href={`/work/${project.slug}`} variant="primary" size="md" className="mt-7">
                    View Case Study
                  </Button>

                </div>

              </article>

            ))}

          </div>

        </div>
      </section>

    </main>
  );
}