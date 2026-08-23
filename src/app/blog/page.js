import Link from "next/link";
import { ArrowRight, Clock3 } from "lucide-react";

const posts = [
  {
    category: "Brand Strategy",
    title: "How a clear brand strategy creates stronger growth",
    excerpt:
      "A practical look at how positioning, messaging, and consistency shape customer perception.",
    readTime: "5 min read",
  },
  {
    category: "Website",
    title: "What makes a modern website convert better?",
    excerpt:
      "The design, content, user experience, and performance decisions that influence action.",
    readTime: "6 min read",
  },
  {
    category: "Digital Marketing",
    title: "Creating campaigns that people actually notice",
    excerpt:
      "How relevant creative and focused messaging can make marketing more effective.",
    readTime: "4 min read",
  },
  {
    category: "SEO",
    title: "Building sustainable organic visibility",
    excerpt:
      "Why useful content and technical optimization work better together over the long term.",
    readTime: "7 min read",
  },
];

export default function BlogPage() {
  return (
    <main className="transition-colors duration-300 bg-[var(--color-cream)] text-[var(--color-deep)] dark:bg-[var(--color-night)] dark:text-[var(--color-cream)]">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative border-b border-[var(--color-deep)]/10 dark:border-[var(--color-cream)]/10">
        <div className="absolute inset-0 about-grid opacity-60" />

        <div className="container-custom relative px-5 py-24 sm:py-32 lg:py-36">
          <div className="max-w-[900px]">

            {/* Heading */}
            <div className="flex items-center gap-2">
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[var(--color-gold)]
                "
              />

              <p
                className="
                  text-[8px]
                  font-black
                  uppercase
                  tracking-[0.22em]
                  text-[var(--color-green)]

                  sm:text-[9px]

                  dark:text-[var(--color-gold)]
                "
              >
                Insights
              </p>

              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[var(--color-green)]

                  dark:bg-[var(--color-gold)]
                "
              />
            </div>

            <h1
              className="
                mt-3

                text-3xl
                font-black
                leading-[0.95]
                tracking-[-0.055em]

                text-[var(--color-deep)]

                sm:text-4xl
                md:text-5xl
                lg:text-6xl

                dark:text-[var(--color-cream)]
              "
            >
              Ideas worth putting into{" "}
              <span className="text-[var(--color-green)] dark:text-[var(--color-gold)]">
                action.
              </span>
            </h1>

            <p
              className="
                mt-7
                max-w-2xl
                text-lg
                leading-8
                text-[var(--color-deep)]/60

                dark:text-[var(--color-cream)]/60
              "
            >
              Practical perspectives on branding, websites, marketing,
              content, and sustainable business growth.
            </p>
          </div>
        </div>
      </section>


      {/* =====================================================
          BLOG POSTS
      ===================================================== */}
      <section className="px-5 py-20 sm:py-28">
        <div className="container-custom">

          {/* Section Heading */}
          <div className="mb-10 flex flex-col gap-6 sm:mb-12 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[680px]">

              <div className="flex items-center gap-2">
                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[var(--color-gold)]
                  "
                />

                <p
                  className="
                    text-[8px]
                    font-black
                    uppercase
                    tracking-[0.22em]
                    text-[var(--color-green)]

                    sm:text-[9px]

                    dark:text-[var(--color-gold)]
                  "
                >
                  Latest Insights
                </p>

                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[var(--color-green)]

                    dark:bg-[var(--color-gold)]
                  "
                />
              </div>

              <h2
                className="
                  mt-3

                  text-3xl
                  font-black
                  leading-[0.95]
                  tracking-[-0.055em]

                  text-[var(--color-deep)]

                  sm:text-4xl
                  md:text-5xl
                  lg:text-6xl

                  dark:text-[var(--color-cream)]
                "
              >
                Ideas, insights, and{" "}
                <span className="text-[var(--color-green)] dark:text-[var(--color-gold)]">
                  useful perspectives.
                </span>
              </h2>

            </div>
          </div>


          {/* Posts */}
          <div className="grid gap-6 md:grid-cols-2">

            {posts.map((post) => (
              <article
                key={post.title}
                className="
                  group
                  rounded-3xl
                  border
                  border-[var(--color-deep)]/10
                  bg-[var(--color-deep)]/[0.025]
                  p-7

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-[var(--color-green)]
                  hover:shadow-xl

                  dark:border-[var(--color-cream)]/10
                  dark:bg-[var(--color-cream)]/[0.03]
                  dark:hover:border-[var(--color-gold)]
                "
              >

                {/* Category */}
                <p
                  className="
                    text-[8px]
                    font-black
                    uppercase
                    tracking-[0.22em]
                    text-[var(--color-green)]

                    sm:text-[9px]

                    dark:text-[var(--color-gold)]
                  "
                >
                  {post.category}
                </p>


                {/* Title */}
                <h3
                  className="
                    mt-5
                    text-2xl
                    font-black
                    leading-[1.05]
                    tracking-[-0.035em]
                    text-[var(--color-deep)]

                    sm:text-3xl

                    dark:text-[var(--color-cream)]
                  "
                >
                  {post.title}
                </h3>


                {/* Excerpt */}
                <p
                  className="
                    mt-5
                    leading-7
                    text-[var(--color-deep)]/60

                    dark:text-[var(--color-cream)]/60
                  "
                >
                  {post.excerpt}
                </p>


                {/* Footer */}
                <div className="mt-8 flex items-center justify-between gap-4">

                  <span
                    className="
                      flex
                      items-center
                      gap-2
                      text-sm
                      text-[var(--color-deep)]/50

                      dark:text-[var(--color-cream)]/50
                    "
                  >
                    <Clock3 size={16} />
                    {post.readTime}
                  </span>


                  <Link
                    href="#"
                    className="
                      flex
                      items-center
                      gap-2
                      text-sm
                      font-bold
                      text-[var(--color-deep)]

                      transition-all
                      duration-300

                      group-hover:gap-3
                      hover:text-[var(--color-green)]

                      dark:text-[var(--color-cream)]
                      dark:hover:text-[var(--color-gold)]
                    "
                  >
                    Read article
                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
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