import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Clock3,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import {
  getPosts,
  formatWordPressPost,
  getReadingTime,
} from "@/lib/wordpress";

export const metadata = {
  title: "Blog | MarkitMe Insights",
  description:
    "Explore practical insights on brand strategy, websites, digital marketing, user experience, content, and business growth.",
};

export default async function BlogPage({ searchParams }) {
  const params = await searchParams;
  const requestedPage = Number.parseInt(params?.page || "1", 10);
  const currentPage = Number.isNaN(requestedPage) || requestedPage < 1
    ? 1
    : requestedPage;

  const { posts, totalPages } = await getPosts({
    page: currentPage,
    perPage: 6,
  });

  const formattedPosts = posts.map(
    formatWordPressPost
  );

  return (
    <main
      className="
        min-h-screen
        bg-[var(--color-cream)]
        text-[var(--color-deep)]
        transition-colors
        duration-300

        dark:bg-[var(--color-night)]
        dark:text-[var(--color-cream)]
      "
    >
      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          border-b
          border-[var(--color-deep)]/10

          dark:border-[var(--color-cream)]/10
        "
      >
        {/* Background grid */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            about-grid
            opacity-50
          "
        />

        {/* Decorative blobs */}

        <div
          className="
            pointer-events-none
            absolute
            -right-24
            top-10
            h-64
            w-64
            rounded-full
            bg-[var(--color-gold)]/10
            blur-3xl
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -left-24
            bottom-0
            h-56
            w-56
            rounded-full
            bg-[var(--color-green)]/10
            blur-3xl
          "
        />

        <div
          className="
            container-custom
            relative
            px-5
            py-24

            sm:py-32
            lg:py-36
          "
        >
          <div className="max-w-[920px]">

            {/* Eyebrow */}

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
                MarkitMe Insights
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


            {/* Heading */}

            <h1
              className="
                mt-4
                max-w-4xl

                text-4xl
                font-black
                leading-[0.92]
                tracking-[-0.06em]

                text-[var(--color-deep)]

                sm:text-5xl
                md:text-6xl
                lg:text-7xl

                dark:text-[var(--color-cream)]
              "
            >
              Ideas worth putting
              into{" "}

              <span
                className="
                  text-[var(--color-green)]

                  dark:text-[var(--color-gold)]
                "
              >
                action.
              </span>
            </h1>


            {/* Description */}

            <p
              className="
                mt-7
                max-w-2xl

                text-base
                leading-7

                text-[var(--color-deep)]/60

                sm:text-lg
                sm:leading-8

                dark:text-[var(--color-cream)]/60
              "
            >
              Practical perspectives on branding,
              websites, marketing, content, and
              sustainable business growth.
            </p>

          </div>
        </div>
      </section>


      {/* =====================================================
          BLOG LIST
      ===================================================== */}

      <section
        className="
          px-5
          py-20

          sm:py-28
        "
      >
        <div className="container-custom">

          

          {/* =================================================
              POSTS
          ================================================== */}

          {formattedPosts.length === 0 ? (

            <div
              className="
                rounded-3xl
                border
                border-[var(--color-deep)]/10

                bg-white/50

                p-12
                text-center

                dark:border-[var(--color-cream)]/10
                dark:bg-white/[0.03]
              "
            >
              <p className="text-sm opacity-60">
                No blog posts found.
              </p>
            </div>

          ) : (

            <div
              className="
                grid
                gap-6

                md:grid-cols-2
                xl:grid-cols-3
              "
            >

              {formattedPosts.map((post) => {

                const readTime =
                  getReadingTime(
                    post.content
                  );

                return (
                  <article
                    key={post.id}
                    className="
                      group
                      overflow-hidden
                      rounded-[28px]

                      border
                      border-[var(--color-deep)]/10

                      bg-white/50

                      p-3

                      shadow-[0_10px_40px_rgba(12,59,46,0.03)]

                      transition-all
                      duration-300

                      hover:-translate-y-1.5

                      hover:border-[var(--color-green)]/40

                      hover:shadow-[0_20px_60px_rgba(12,59,46,0.08)]

                      dark:border-[var(--color-cream)]/10
                      dark:bg-[var(--color-cream)]/[0.035]

                      dark:hover:border-[var(--color-gold)]/40

                      dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]
                    "
                  >

                    {/* =================================================
                        IMAGE
                    ================================================== */}

                    {post.image ? (

                      <Link
                        href={`/blog/${post.slug}`}
                        className="
                          relative
                          block
                          aspect-[16/10]
                          overflow-hidden
                          rounded-[20px]

                          bg-[var(--color-deep)]/[0.05]
                        "
                      >
                        <Image
                          src={post.image}
                          alt={post.imageAlt}
                          fill
                          sizes="
                            (max-width: 768px) 100vw,
                            (max-width: 1280px) 50vw,
                            33vw
                          "
                          className="
                            object-cover

                            transition-transform
                            duration-700
                            ease-out

                            group-hover:scale-105
                          "
                        />

                        <div
                          className="
                            pointer-events-none
                            absolute
                            inset-0

                            bg-gradient-to-t
                            from-[var(--color-deep)]/35
                            via-transparent
                            to-transparent

                            opacity-40
                            transition-opacity
                            duration-300

                            group-hover:opacity-70
                          "
                        />

                        {/* Image corner badge */}

                        <span
                          className="
                            absolute
                            right-3
                            top-3

                            rounded-full

                            bg-[var(--color-cream)]/90

                            px-3
                            py-1.5

                            text-[9px]
                            font-black
                            uppercase
                            tracking-[0.12em]

                            text-[var(--color-deep)]

                            backdrop-blur-md

                            dark:bg-[var(--color-night)]/85
                            dark:text-[var(--color-cream)]
                          "
                        >
                          Read
                        </span>
                      </Link>

                    ) : (

                      <Link
                        href={`/blog/${post.slug}`}
                        className="
                          relative
                          flex
                          aspect-[16/10]
                          items-end
                          overflow-hidden
                          rounded-[20px]

                          bg-[var(--color-green)]

                          p-6

                          dark:bg-[var(--color-gold)]
                        "
                      >
                        <div
                          className="
                            absolute
                            -right-10
                            -top-10
                            h-32
                            w-32
                            rounded-full
                            border-[20px]
                            border-[var(--color-gold)]/30

                            dark:border-[var(--color-green)]/30
                          "
                        />

                        <span
                          className="
                            relative
                            text-sm
                            font-black
                            uppercase
                            tracking-[0.12em]

                            text-[var(--color-cream)]

                            dark:text-[var(--color-deep)]
                          "
                        >
                          MarkitMe Insights
                        </span>
                      </Link>
                    )}


                    {/* =================================================
                        CONTENT
                    ================================================== */}

                    <div
                      className="
                        px-4
                        pb-5
                        pt-5

                        sm:px-5
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
                          mt-4

                          line-clamp-3

                          text-2xl
                          font-black
                          leading-[1.05]
                          tracking-[-0.035em]

                          text-[var(--color-deep)]

                          sm:text-[25px]

                          dark:text-[var(--color-cream)]
                        "
                        dangerouslySetInnerHTML={{
                          __html: post.title,
                        }}
                      />


                      {/* Excerpt */}

                      <div
                        className="
                          mt-4

                          line-clamp-3

                          text-sm
                          leading-6

                          text-[var(--color-deep)]/60

                          dark:text-[var(--color-cream)]/60
                        "
                        dangerouslySetInnerHTML={{
                          __html: post.excerpt,
                        }}
                      />


                      {/* Meta */}

                      <div
                        className="
                          mt-7
                          flex
                          items-center
                          justify-between
                          gap-3
                        "
                      >

                        <span
                          className="
                            flex
                            items-center
                            gap-2

                            text-xs

                            text-[var(--color-deep)]/50

                            dark:text-[var(--color-cream)]/50
                          "
                        >
                          <Clock3 size={14} />

                          {readTime} min read
                        </span>


                        {post.date && (
                          <span
                            className="
                              flex
                              items-center
                              gap-2

                              text-xs

                              text-[var(--color-deep)]/50

                              dark:text-[var(--color-cream)]/50
                            "
                          >
                            <CalendarDays size={14} />

                            {new Date(
                              post.date
                            ).toLocaleDateString(
                              "en-CA",
                              {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              }
                            )}
                          </span>
                        )}

                      </div>


                      {/* Read */}

                      <Link
                        href={`/blog/${post.slug}`}
                        className="
                          mt-6
                          flex
                          items-center
                          gap-2

                          text-sm
                          font-black

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
                          className="
                            transition-transform
                            duration-300

                            group-hover:translate-x-1
                          "
                        />
                      </Link>

                    </div>

                  </article>
                );
              })}

            </div>
          )}

          {totalPages > 1 && (
            <nav
              aria-label="Blog pagination"
              className="mt-12 flex flex-wrap items-center justify-center gap-2 sm:mt-16"
            >
              {currentPage > 1 ? (
                <Link
                  href={`/blog?page=${currentPage - 1}`}
                  aria-label="Previous page"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-deep)]/15 text-[var(--color-deep)] transition-colors hover:border-[var(--color-green)] hover:text-[var(--color-green)] dark:border-[var(--color-cream)]/15 dark:text-[var(--color-cream)] dark:hover:border-[var(--color-gold)] dark:hover:text-[var(--color-gold)]"
                >
                  <ChevronLeft size={18} />
                </Link>
              ) : (
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-deep)]/10 text-[var(--color-deep)]/25 dark:border-[var(--color-cream)]/10 dark:text-[var(--color-cream)]/25">
                  <ChevronLeft size={18} />
                </span>
              )}

              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (pageNumber) => (
                  <Link
                    key={pageNumber}
                    href={`/blog?page=${pageNumber}`}
                    aria-current={
                      pageNumber === currentPage ? "page" : undefined
                    }
                    className={`flex h-11 min-w-11 items-center justify-center rounded-full px-3 text-sm font-bold transition-colors ${
                      pageNumber === currentPage
                        ? "bg-[var(--color-gold)] text-[var(--color-deep)]"
                        : "border border-[var(--color-deep)]/15 text-[var(--color-deep)] hover:border-[var(--color-green)] hover:text-[var(--color-green)] dark:border-[var(--color-cream)]/15 dark:text-[var(--color-cream)] dark:hover:border-[var(--color-gold)] dark:hover:text-[var(--color-gold)]"
                    }`}
                  >
                    {pageNumber}
                  </Link>
                )
              )}

              {currentPage < totalPages ? (
                <Link
                  href={`/blog?page=${currentPage + 1}`}
                  aria-label="Next page"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-deep)]/15 text-[var(--color-deep)] transition-colors hover:border-[var(--color-green)] hover:text-[var(--color-green)] dark:border-[var(--color-cream)]/15 dark:text-[var(--color-cream)] dark:hover:border-[var(--color-gold)] dark:hover:text-[var(--color-gold)]"
                >
                  <ChevronRight size={18} />
                </Link>
              ) : (
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-deep)]/10 text-[var(--color-deep)]/25 dark:border-[var(--color-cream)]/10 dark:text-[var(--color-cream)]/25">
                  <ChevronRight size={18} />
                </span>
              )}
            </nav>
          )}

        </div>
      </section>
    </main>
  );
}