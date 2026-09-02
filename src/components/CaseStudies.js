"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import { projects } from "@/data/projects";
import Button from "./ui/Button";
import SectionHeading from "./SectionHeading";

import "swiper/css";
import "swiper/css/pagination";

export default function CaseStudies() {
  const [swiper, setSwiper] = useState(null);

  return (
    <section
      className="
        relative
        overflow-hidden

        border-y
        border-[var(--border)]

        bg-[var(--background)]

        py-16

        text-[var(--foreground)]

        transition-colors
        duration-500

        sm:py-20
        lg:py-24

        dark:border-[var(--border)]
        dark:bg-[var(--background)]
        dark:text-[var(--foreground)]
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            -left-40
            top-20

            h-96
            w-96

            rounded-full

            bg-[var(--foreground)]/[0.04]

            blur-[110px]

            dark:bg-[var(--foreground)]/[0.05]
          "
        />

        <div
          className="
            absolute
            -right-40
            bottom-10

            h-96
            w-96

            rounded-full

            bg-[var(--foreground)]/[0.03]

            blur-[110px]

            dark:bg-[var(--foreground)]/[0.04]
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-8">
        {/* =====================================================
            HEADING
        ====================================================== */}

        <div className="mb-10 flex flex-col gap-6 sm:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow="Selected Work">
            Ideas turned into{" "}
            <span className="text-[var(--muted)] dark:text-[var(--muted)]">
              measurable impact.
            </span>
          </SectionHeading>

          <div className="shrink-0">
            <Button href="/work" variant="outline">
              View All Work
            </Button>
          </div>
        </div>

        {/* =====================================================
            SLIDER
        ====================================================== */}

        <div className="mx-auto w-full max-w-[1200px]">
          <div className="relative w-full">
            <Swiper
              modules={[Pagination, Autoplay]}
              onSwiper={setSwiper}
              slidesPerView={1}
              spaceBetween={16}
              centeredSlides={false}
              watchOverflow={true}
              observer={true}
              observeParents={true}
              resizeObserver={true}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: false,
              }}
              loop={projects.length > 3}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 16,
                },

                640: {
                  slidesPerView: 1,
                  spaceBetween: 18,
                },

                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },

                1024: {
                  slidesPerView: 2,
                  spaceBetween: 22,
                },

                1280: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },

                1536: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },

                1920: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },

                2560: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
              }}
              className="case-studies-swiper"
            >
              {projects.map((study) => (
                <SwiperSlide
                  key={study.slug}
                  className="case-study-slide"
                >
                  {/* =================================================
                      CARD
                  ================================================== */}

                  <article
                    className="
                      group

                      flex
                      h-full
                      min-h-[570px]
                      w-full
                      flex-col

                      overflow-hidden

                      rounded-[22px]

                      border
                      border-[var(--border)]

                      bg-[var(--background)]

                      shadow-[0_10px_30px_rgba(17,17,17,0.04)]

                      transition-all
                      duration-500

                      hover:-translate-y-1

                      hover:border-[var(--foreground)]/25

                      hover:shadow-[0_20px_50px_rgba(17,17,17,0.09)]

                      dark:border-[var(--border)]
                      dark:bg-[var(--background)]

                      dark:hover:border-[var(--foreground)]/35

                      dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.18)]
                    "
                  >
                    {/* =================================================
                        IMAGE
                    ================================================== */}

                    <div
                      className="
                        relative
                        h-[250px]
                        w-full
                        shrink-0

                        overflow-hidden

                        bg-[var(--color-deep)]

                        sm:h-[270px]
                        lg:h-[285px]
                      "
                    >
                      <Image
                        src={study.image}
                        alt={`${study.title} case study`}
                        fill
                        sizes="
                          (max-width: 767px) 100vw,
                          (max-width: 1279px) 50vw,
                          33vw
                        "
                        className="
                          object-cover

                          transition-transform
                          duration-700

                          group-hover:scale-105
                        "
                      />

                      {/* Image overlay */}

                      <div
                        className="
                          absolute
                          inset-0

                          bg-[var(--color-deep)]/25

                          transition-all
                          duration-500

                          group-hover:bg-[var(--color-deep)]/35
                        "
                      />

                      {/* Bottom gradient */}

                      <div
                        className="
                          absolute
                          inset-x-0
                          bottom-0
                          h-2/3

                          bg-gradient-to-t
                          from-[var(--color-deep)]/90
                          via-[var(--color-deep)]/25
                          to-transparent
                        "
                      />

                      {/* Number */}

                      <div
                        className="
                          absolute
                          left-4
                          top-4

                          rounded-full

                          border
                          border-[var(--color-cream)]/25

                          bg-[var(--color-deep)]/45

                          px-3
                          py-1.5

                          text-[9px]
                          font-bold
                          text-[var(--color-cream)]

                          backdrop-blur-md
                        "
                      >
                        {study.number}
                      </div>

                      {/* Category */}

                      <div
                        className="
                          absolute
                          right-4
                          top-4

                          max-w-[72%]
                          truncate

                          rounded-full

                          border
                          border-[var(--color-cream)]/25

                          bg-[var(--color-deep)]/45

                          px-3
                          py-1.5

                          text-[8px]
                          font-medium
                          text-[var(--color-cream)]

                          backdrop-blur-md
                        "
                      >
                        {study.category}
                      </div>

                      {/* Image Bottom */}

                      <div
                        className="
                          absolute
                          bottom-4
                          left-4
                          right-4

                          flex
                          items-end
                          justify-between
                          gap-3
                        "
                      >
                        <div className="min-w-0">
                          <p
                            className="
                              text-[8px]
                              font-black
                              uppercase
                              tracking-[0.18em]

                              text-[var(--foreground)]/80
                            "
                          >
                            Case Study
                          </p>

                          <p
                            className="
                              mt-1.5
                              truncate

                              text-lg
                              font-black

                              text-[var(--color-cream)]
                            "
                          >
                            {study.title}
                          </p>
                        </div>

                        {/* Arrow */}

                        <div
                          className="
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center

                            rounded-full

                            bg-[var(--foreground)]

                            text-[var(--background)]

                            transition-transform
                            duration-300
                            cursor-pointer

                            group-hover:rotate-[-45deg]
                          "
                          onClick={() => window.location.href = `/work/${study.slug}`}
                        >
                          <ArrowRight size={17} />

                        </div>
                      </div>

                      {/* Image accent */}

                      <div
                        className="
                          absolute
                          bottom-0
                          left-0

                          h-[2px]
                          w-0

                          bg-[var(--color-gold)]

                          transition-all
                          duration-700

                          group-hover:w-full
                        "
                      />
                    </div>

                    {/* =================================================
                        CONTENT
                    ================================================== */}

                    <div
                      className="
                        flex
                        flex-1
                        flex-col

                        p-5

                        sm:p-6
                      "
                    >
                      {/* =================================================
                          CATEGORY
                      ================================================== */}

                      <div className="shrink-0">
                        <p
                          className="
                            text-[8px]
                            font-black
                            uppercase
                            tracking-[0.18em]

                            text-[var(--muted)]

                            sm:text-[9px]

                            dark:text-[var(--foreground)]
                          "
                        >
                          {study.category}
                        </p>
                      </div>

                      {/* =================================================
                          TITLE

                          Fixed minimum height keeps all titles aligned.
                      ================================================== */}

                      <div
                        className="
                          mt-3
                          min-h-[52px]

                          sm:min-h-[58px]
                        "
                      >
                        <h3
                          className="
                            text-2xl
                            font-black
                            leading-[0.95]
                            tracking-[-0.045em]

                            text-[var(--color-deep)]

                            sm:text-[27px]

                            dark:text-[var(--color-cream)]
                          "
                        >
                          {study.title}
                        </h3>
                      </div>

                      {/* =================================================
                          DESCRIPTION

                          Fixed area keeps services aligned.
                      ================================================== */}

                      <div
                        className="
                          mt-4
                          min-h-[96px]

                          sm:min-h-[102px]
                        "
                      >
                        <p
                          className="
                            line-clamp-4

                            text-sm
                            leading-6

                            text-[var(--foreground)]/75

                            dark:text-[var(--foreground)]/80
                          "
                        >
                          {study.shortDescription}
                        </p>
                      </div>

                      {/* =================================================
                          SERVICES

                          IMPORTANT:
                          Fixed/minimum height makes service chips
                          occupy the same vertical area.
                      ================================================== */}

                      <div
                        className="
                          mt-5
                          min-h-[58px]
                          shrink-0
                        "
                      >
                        {study.services?.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {study.services
                              .slice(0, 3)
                              .map((service) => (
                                <span
                                  key={service.title}
                                  className="
                                    rounded-full

                                    border
                                    border-[var(--border)]

                                    bg-[var(--surface-soft)]

                                    px-3
                                    py-1.5

                                    text-[8px]
                                    font-semibold

                                    text-[var(--foreground)]

                                    transition-colors
                                    duration-300

                                    group-hover:border-[var(--foreground)]/25

                                    dark:border-[var(--border)]
                                    dark:bg-[var(--surface)]
                                    dark:text-[var(--foreground)]
                                  "
                                >
                                  {service.title}
                                </span>
                              ))}
                          </div>
                        )}
                      </div>

                      {/* =================================================
                          RESULTS

                          Fixed height keeps metrics aligned across cards.
                      ================================================== */}

                      <div
                        className="
                          mt-5
                          min-h-[72px]
                          shrink-0
                        "
                      >
                        {study.results?.length > 0 && (
                          <div className="grid grid-cols-2 gap-2">
                            {study.results
                              .slice(0, 2)
                              .map((result, resultIndex) => (
                                <div
                                  key={result.label}
                                  className="
                                    rounded-xl

                                    border
                                    border-[var(--border)]

                                    bg-[var(--surface-soft)]

                                    px-3
                                    py-3

                                    transition-all
                                    duration-300

                                    group-hover:border-[var(--foreground)]/20

                                    dark:border-[var(--border)]
                                    dark:bg-[var(--surface)]
                                  "
                                >
                                  <p
                                    className={`
                                      text-lg
                                      font-black
                                      tracking-[-0.04em]

                                      ${
                                        resultIndex === 1
                                          ? "text-[var(--foreground)]/70"
                                          : "text-[var(--foreground)]"
                                      }

                                      dark:text-[var(--foreground)]
                                    `}
                                  >
                                    {result.value}
                                  </p>

                                  <p
                                    className="
                                      mt-0.5

                                      line-clamp-1

                                      text-[8px]
                                      font-semibold

                                      text-[var(--foreground)]/70

                                      dark:text-[var(--foreground)]/75
                                    "
                                  >
                                    {result.label}
                                  </p>
                                </div>
                              ))}
                          </div>
                        )}
                      </div>

                      {/* =================================================
                          BUTTONS

                          mt-auto guarantees bottom alignment.
                      ================================================== */}

                      <div
                        className="
                          mt-auto
                          flex
                          flex-wrap
                          gap-2
                          pt-6
                        "
                      >
                        <Button
                          href={`/work/${study.slug}`}
                          variant="primary"
                        >
                          View Case Study
                        </Button>

                        {study.website && (
                          <Button
                            href={study.website}
                            variant="outline"
                            size="sm"
                            className="px-4"
                            showArrow={false}
                          >
                            Website
                            <ExternalLink size={13} />
                          </Button>
                        )}
                      </div>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* =====================================================
                CUSTOM ARROWS
            ====================================================== */}

            <div
              className="
                pointer-events-none
                absolute
                inset-x-0
                top-[45%]
                z-20

                hidden
                -translate-y-1/2

                items-center
                justify-between

                lg:flex
              "
            >
              {/* Previous */}

              <button
                type="button"
                onClick={() => swiper?.slidePrev()}
                className="
                  pointer-events-auto

                  -ml-5

                  flex
                  h-11
                  w-11
                  items-center
                  justify-center

                  rounded-full

                  border
                  border-[var(--border)]

                  bg-[var(--background)]

                  text-[var(--foreground)]

                  shadow-lg

                  transition-all
                  duration-300

                  hover:scale-105

                  hover:border-[var(--foreground)]
                  hover:bg-[var(--foreground)]
                  hover:text-[var(--background)]

                  dark:border-[var(--border)]
                  dark:bg-[var(--background)]
                  dark:text-[var(--foreground)]

                  dark:hover:border-[var(--foreground)]
                  dark:hover:bg-[var(--foreground)]
                  dark:hover:text-[var(--background)]
                "
                aria-label="Previous project"
              >
                <ArrowRight
                  size={18}
                  className="rotate-180"
                />
              </button>

              {/* Next */}

              <button
                type="button"
                onClick={() => swiper?.slideNext()}
                className="
                  pointer-events-auto

                  -mr-5

                  flex
                  h-11
                  w-11
                  items-center
                  justify-center

                  rounded-full

                  border
                  border-[var(--border)]

                  bg-[var(--background)]

                  text-[var(--foreground)]

                  shadow-lg

                  transition-all
                  duration-300

                  hover:scale-105

                  hover:border-[var(--foreground)]
                  hover:bg-[var(--foreground)]
                  hover:text-[var(--background)]

                  dark:border-[var(--border)]
                  dark:bg-[var(--background)]
                  dark:text-[var(--foreground)]

                  dark:hover:border-[var(--foreground)]
                  dark:hover:bg-[var(--foreground)]
                  dark:hover:text-[var(--background)]
                "
                aria-label="Next project"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          SWIPER CSS
      ====================================================== */}

      <style>{`
        .case-studies-swiper {
          width: 100%;
          overflow: hidden !important;
          padding-bottom: 45px !important;
        }

        .case-studies-swiper .swiper-wrapper {
          align-items: stretch;
        }

        .case-studies-swiper .swiper-slide {
          height: auto !important;
          display: flex;
        }

        .case-studies-swiper .swiper-slide > article {
          height: 100%;
        }

        /* =====================================================
           XL FIX
        ====================================================== */

        @media (min-width: 1280px) {
          .case-studies-swiper .swiper-slide {
            width: calc((100% - 48px) / 3) !important;
          }
        }

        @media (min-width: 1536px) {
          .case-studies-swiper .swiper-slide {
            width: calc((100% - 48px) / 3) !important;
          }
        }

        @media (min-width: 1920px) {
          .case-studies-swiper .swiper-slide {
            width: calc((100% - 48px) / 3) !important;
          }
        }

        /* =====================================================
           PAGINATION
        ====================================================== */

        .case-studies-swiper .swiper-pagination {
          bottom: 0 !important;

          display: flex;
          align-items: center;
          justify-content: center;

          gap: 5px;
        }

        .case-studies-swiper .swiper-pagination-bullet {
          width: 6px;
          height: 6px;

          margin: 0 !important;

          border-radius: 999px;

          opacity: 0.25;

          background: var(--color-deep);

          transition: all 0.3s ease;
        }

        .dark .case-studies-swiper .swiper-pagination-bullet {
          background: var(--color-cream);
        }

        .case-studies-swiper
          .swiper-pagination-bullet.swiper-pagination-bullet-active {
          width: 22px;

          opacity: 1;

          background: var(--color-gold);
        }

        /* =====================================================
           MOBILE
        ====================================================== */

        @media (max-width: 639px) {
          .case-studies-swiper {
            padding-bottom: 38px !important;
          }

          .case-studies-swiper .swiper-pagination-bullet {
            width: 5px;
            height: 5px;
          }

          .case-studies-swiper
            .swiper-pagination-bullet.swiper-pagination-bullet-active {
            width: 18px;
          }
        }

        /* =====================================================
           TABLET
        ====================================================== */

        @media (min-width: 640px) and (max-width: 1023px) {
          .case-studies-swiper {
            padding-bottom: 42px !important;
          }
        }

        /* =====================================================
           MOBILE CONTENT HEIGHT RESET
           
           On very small screens we allow content to grow naturally.
           This prevents overly large empty spaces.
        ====================================================== */

        @media (max-width: 639px) {
          .case-studies-swiper .case-study-slide {
            height: auto !important;
          }
        }
      `}</style>
    </section>
  );
}