import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  UserRound,
} from "lucide-react";

import { notFound } from "next/navigation";

import {
  getPostBySlug,
  formatWordPressPost,
  getReadingTime,
} from "@/lib/wordpress";

export const revalidate = 3600;

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | MarkitMe",
    };
  }

  const blog = formatWordPressPost(post);

  return {
    title: `${blog.title.replace(
      /<[^>]*>/g,
      ""
    )} | MarkitMe`,

    description: blog.excerpt
      .replace(/<[^>]*>/g, "")
      .slice(0, 160),

    alternates: {
      canonical: `https://markitme.ca/blog/${blog.slug}`,
    },

    openGraph: {
      title: blog.title.replace(
        /<[^>]*>/g,
        ""
      ),

      description: blog.excerpt.replace(
        /<[^>]*>/g,
        ""
      ),

      images: blog.image
        ? [blog.image]
        : [],
    },
  };
}

export default async function BlogDetailPage({
  params,
}) {
  const { slug } = await params;

  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const blog = formatWordPressPost(post);

  const readTime = getReadingTime(
    blog.content
  );

  const cleanTitle = blog.title.replace(
    /<[^>]*>/g,
    ""
  );

  return (
    <main
      className="
        min-h-screen

        bg-[var(--color-cream)]
        text-[var(--color-deep)]

        dark:bg-[var(--color-night)]
        dark:text-[var(--color-cream)]
      "
    >

      {/* =====================================================
          ARTICLE HERO
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

        {/* Background */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            about-grid
            opacity-40
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-32
            -top-32
            h-80
            w-80
            rounded-full

            bg-[var(--color-gold)]/10

            blur-3xl
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-32
            -left-32
            h-80
            w-80
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
            pb-16
            pt-20

            sm:pb-20
            sm:pt-28

            lg:pb-24
            lg:pt-32
          "
        >

          {/* Back */}

          <Link
            href="/blog"
            className="
              group
              inline-flex
              items-center
              gap-2

              text-xs
              font-black
              uppercase
              tracking-[0.12em]

              text-[var(--color-deep)]/55

              transition-colors
              duration-300

              hover:text-[var(--color-green)]

              dark:text-[var(--color-cream)]/55

              dark:hover:text-[var(--color-gold)]
            "
          >
            <ArrowLeft
              size={15}
              className="
                transition-transform
                duration-300

                group-hover:-translate-x-1
              "
            />

            Back to insights
          </Link>


          {/* Category */}

          <div
            className="
              mt-10
              flex
              items-center
              gap-2
            "
          >

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
                text-[9px]
                font-black
                uppercase
                tracking-[0.22em]

                text-[var(--color-green)]

                dark:text-[var(--color-gold)]
              "
            >
              {blog.category}
            </p>

          </div>


          {/* Title */}

          <h1
            className="
              mt-5
              max-w-5xl

              text-4xl
              font-black
              leading-[0.94]
              tracking-[-0.06em]

              text-[var(--color-deep)]

              sm:text-5xl
              md:text-6xl
              lg:text-7xl

              dark:text-[var(--color-cream)]
            "
            dangerouslySetInnerHTML={{
              __html: blog.title,
            }}
          />


          {/* Intro */}

          {blog.excerpt && (
            <div
              className="
                mt-7
                max-w-3xl

                text-base
                leading-7

                text-[var(--color-deep)]/60

                sm:text-lg
                sm:leading-8

                dark:text-[var(--color-cream)]/60
              "
              dangerouslySetInnerHTML={{
                __html: blog.excerpt,
              }}
            />
          )}


          {/* Meta */}

          <div
            className="
              mt-8
              flex
              flex-wrap
              items-center
              gap-x-6
              gap-y-3
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
              <CalendarDays size={15} />

              {new Date(
                blog.date
              ).toLocaleDateString(
                "en-CA",
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }
              )}
            </span>


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
              <Clock3 size={15} />

              {readTime} min read
            </span>


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
              <UserRound size={15} />

              {blog.author}
            </span>

          </div>

        </div>
      </section>


      {/* =====================================================
          FEATURED IMAGE
      ===================================================== */}

      {blog.image && (
        <section
          className="
            px-5
            pt-10

            sm:pt-14
          "
        >
          <div
            className="
              container-custom
            "
          >

            <div
              className="
                relative
                aspect-[16/8]

                overflow-hidden
                rounded-[28px]

                bg-[var(--color-deep)]/[0.05]

                shadow-[0_25px_80px_rgba(12,59,46,0.08)]

                dark:shadow-[0_25px_80px_rgba(0,0,0,0.2)]

                sm:rounded-[36px]
              "
            >

              <Image
                src={blog.image}
                alt={blog.imageAlt}
                fill
                priority
                sizes="100vw"
                className="
                  object-cover
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0

                  bg-gradient-to-t
                  from-[var(--color-deep)]/20
                  via-transparent
                  to-transparent
                "
              />

            </div>

          </div>
        </section>
      )}


      {/* =====================================================
          ARTICLE CONTENT
      ===================================================== */}

      <section
        className="
          px-5
          py-16

          sm:py-20
          lg:py-24
        "
      >

        <div
          className="
            container-custom
          "
        >

          <div
            className="
              grid
              gap-12

              lg:grid-cols-[minmax(0,1fr)_260px]
              lg:gap-20
            "
          >

            {/* Main Content */}

            <article
              className=" articles_content
                min-w-0

                prose
                prose-lg
                max-w-none

                prose-headings:font-black
                prose-headings:tracking-[-0.04em]

                prose-p:leading-8

                prose-a:font-semibold
                prose-a:text-[var(--color-green)]

                prose-strong:text-[var(--color-deep)]

                prose-blockquote:border-[var(--color-gold)]

                prose-img:rounded-2xl
                prose-img:shadow-lg

                dark:prose-invert

                dark:prose-a:text-[var(--color-gold)]

                dark:prose-strong:text-[var(--color-cream)]

                dark:prose-blockquote:border-[var(--color-gold)]
              "
              dangerouslySetInnerHTML={{
                __html: blog.content,
              }}
            />


            {/* Sidebar */}

            <aside
              className="
                lg:sticky
                lg:top-28
                lg:self-start
              "
            >

              <div
                className="
                  rounded-3xl
                  border

                  border-[var(--color-deep)]/10

                  bg-white/50

                  p-6

                  dark:border-[var(--color-cream)]/10

                  dark:bg-[var(--color-cream)]/[0.035]
                "
              >

                <p
                  className="
                    text-[8px]
                    font-black
                    uppercase
                    tracking-[0.22em]

                    text-[var(--color-green)]

                    dark:text-[var(--color-gold)]
                  "
                >
                  About this article
                </p>


                <h2
                  className="
                    mt-3

                    text-xl
                    font-black
                    leading-tight
                  "
                >
                  Keep exploring.
                </h2>


                <p
                  className="
                    mt-3
                    text-sm
                    leading-6

                    text-[var(--color-deep)]/55

                    dark:text-[var(--color-cream)]/55
                  "
                >
                  Discover more practical ideas
                  and perspectives from MarkitMe.
                </p>


                <Link
                  href="/blog"
                  className="
                    group

                    mt-6
                    inline-flex
                    items-center
                    gap-2

                    text-sm
                    font-black

                    text-[var(--color-deep)]

                    transition-colors
                    duration-300

                    hover:text-[var(--color-green)]

                    dark:text-[var(--color-cream)]

                    dark:hover:text-[var(--color-gold)]
                  "
                >
                  View all articles

                  <ArrowUpRight
                    size={16}
                    className="
                      transition-transform
                      duration-300

                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                    "
                  />
                </Link>

              </div>

            </aside>

          </div>

        </div>

      </section>


      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}

      <section
        className="
          px-5
          pb-20

          sm:pb-28
        "
      >

        <div
          className="
            container-custom
          "
        >

          <div
            className="
              relative
              overflow-hidden
              rounded-[32px]

              bg-[var(--color-green)]

              px-7
              py-10

              sm:px-10
              sm:py-12

              lg:px-14
              lg:py-14
            "
          >

            {/* Decorative */}

            <div
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20

                h-48
                w-48

                rounded-full

                border-[30px]
                border-[var(--color-gold)]/30
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -bottom-20
                -left-20

                h-40
                w-40

                rounded-full

                border-[20px]
                border-[var(--color-cream)]/10
              "
            />


            <div className="relative">

              <p
                className="
                  text-[9px]
                  font-black
                  uppercase
                  tracking-[0.2em]

                  text-[var(--color-gold)]
                "
              >
                Have an idea?
              </p>


              <h2
                className="
                  mt-3
                  max-w-2xl

                  text-3xl
                  font-black
                  leading-[0.95]
                  tracking-[-0.05em]

                  text-[var(--color-cream)]

                  sm:text-4xl
                  lg:text-5xl
                "
              >
                Let&apos;s turn the right ideas
                into real growth.
              </h2>


              <Link
                href="/contact"
                className="
                  group

                  mt-7
                  inline-flex
                  items-center
                  gap-2

                  rounded-full

                  bg-[var(--color-gold)]

                  px-6
                  py-3.5

                  text-sm
                  font-black

                  text-[var(--color-deep)]

                  transition-all
                  duration-300

                  hover:-translate-y-0.5
                  hover:bg-[var(--color-cream)]
                "
              >
                Start a conversation

                <ArrowUpRight
                  size={17}
                  className="
                    transition-transform
                    duration-300

                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}