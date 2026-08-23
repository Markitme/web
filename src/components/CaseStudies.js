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
        border-[var(--color-deep)]/[0.08]

        bg-[#E9EEE7]

        py-16

        text-[var(--color-deep)]

        transition-colors
        duration-500

        sm:py-20
        lg:py-24

        dark:border-[var(--color-cream)]/[0.08]
        dark:bg-[var(--color-night)]
        dark:text-[var(--color-cream)]
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
        {/* Green glow */}

        <div
          className="
            absolute
            -left-40
            top-20

            h-96
            w-96

            rounded-full

            bg-[var(--color-green)]/[0.07]

            blur-[110px]

            dark:bg-[var(--color-green)]/[0.055]
          "
        />

        {/* Gold glow */}

        <div
          className="
            absolute
            -right-40
            bottom-10

            h-96
            w-96

            rounded-full

            bg-[var(--color-gold)]/[0.045]

            blur-[110px]

            dark:bg-[var(--color-gold)]/[0.025]
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
              <span className="text-[var(--color-green)] dark:text-[var(--color-gold)]">
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
              {projects.map((study, index) => (
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
                      border-[var(--color-deep)]/[0.09]

                      bg-white

                      shadow-[0_10px_35px_rgba(12,59,46,0.035)]

                      transition-all
                      duration-500

                      hover:-translate-y-1

                      hover:border-[var(--color-green)]/40

                      hover:shadow-[0_20px_50px_rgba(12,59,46,0.10)]

                      dark:border-[var(--color-cream)]/[0.09]
                      dark:bg-[var(--color-deep)]

                      dark:hover:border-[var(--color-gold)]/35

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

                              text-[var(--color-gold)]
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

                            bg-[var(--color-gold)]

                            text-[var(--color-deep)]

                            transition-transform
                            duration-300

                            group-hover:rotate-[-45deg]
                          "
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

                    <div className="flex flex-1 flex-col p-5 sm:p-6">

                      {/* Category */}

                      <p
                        className="
                          text-[8px]
                          font-black
                          uppercase
                          tracking-[0.18em]

                          text-[var(--color-green)]

                          sm:text-[9px]

                          dark:text-[var(--color-gold)]
                        "
                      >
                        {study.category}
                      </p>

                      {/* Title */}

                      <h3
                        className="
                          mt-3

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

                      {/* Description */}

                      <p
                        className="
                          mt-4

                          line-clamp-4

                          text-sm
                          leading-6

                          text-[#587064]

                          dark:text-[#A8B9AE]
                        "
                      >
                        {study.shortDescription}
                      </p>

                      {/* =================================================
                          SERVICES
                      ================================================== */}

                      {study.services?.length > 0 && (
                        <div className="mt-5 flex flex-wrap gap-2">
                          {study.services
                            .slice(0, 3)
                            .map((service) => (
                              <span
                                key={service.title}
                                className="
                                  rounded-full

                                  border
                                  border-[var(--color-deep)]/10

                                  bg-[var(--color-soft)]/60

                                  px-3
                                  py-1.5

                                  text-[8px]
                                  font-semibold

                                  text-[#587064]

                                  transition-colors
                                  duration-300

                                  group-hover:border-[var(--color-green)]/30

                                  dark:border-[var(--color-cream)]/10
                                  dark:bg-[var(--color-cream)]/[0.06]
                                  dark:text-[#A8B9AE]
                                "
                              >
                                {service.title}
                              </span>
                            ))}
                        </div>
                      )}

                      {/* =================================================
                          RESULTS
                      ================================================== */}

                      {study.results?.length > 0 && (
                        <div className="mt-5 grid grid-cols-2 gap-2">
                          {study.results
                            .slice(0, 2)
                            .map((result, resultIndex) => (
                              <div
                                key={result.label}
                                className="
                                  rounded-xl

                                  border
                                  border-[var(--color-deep)]/[0.06]

                                  bg-[var(--color-soft)]/50

                                  px-3
                                  py-3

                                  transition-all
                                  duration-300

                                  group-hover:border-[var(--color-green)]/20

                                  dark:border-[var(--color-cream)]/[0.07]
                                  dark:bg-[var(--color-night)]/45
                                "
                              >
                                <p
                                  className={`
                                    text-lg
                                    font-black
                                    tracking-[-0.04em]

                                    ${
                                      resultIndex === 1
                                        ? "text-[var(--color-sand)]"
                                        : "text-[var(--color-gold)]"
                                    }

                                    dark:text-[var(--color-gold)]
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

                                    text-[#587064]/75

                                    dark:text-[#A8B9AE]/70
                                  "
                                >
                                  {result.label}
                                </p>
                              </div>
                            ))}
                        </div>
                      )}

                      {/* =================================================
                          BUTTONS
                      ================================================== */}

                      <div className="mt-auto flex flex-wrap gap-2 pt-6">
                        <Button
                          href={`/work/${study.slug}`}
                          variant="primary"
                        >
                          View Case Study
                        </Button>

                        {study.website && (
                          <a
                            href={study.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                              inline-flex
                              items-center
                              justify-center
                              gap-2

                              rounded-full

                              border
                              border-[var(--color-deep)]/10

                              bg-transparent

                              px-4
                              py-3

                              text-xs
                              font-bold

                              text-[var(--color-deep)]

                              transition-all
                              duration-300

                              hover:border-[var(--color-deep)]
                              hover:bg-[var(--color-deep)]
                              hover:text-[var(--color-cream)]

                              dark:border-[var(--color-cream)]/10
                              dark:text-[var(--color-cream)]

                              dark:hover:border-[var(--color-gold)]
                              dark:hover:bg-[var(--color-gold)]
                              dark:hover:text-[var(--color-deep)]
                            "
                          >
                            Website
                            <ExternalLink size={13} />
                          </a>
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
                  border-[var(--color-deep)]/10

                  bg-[var(--color-cream)]

                  text-[var(--color-deep)]

                  shadow-lg

                  transition-all
                  duration-300

                  hover:scale-105

                  hover:border-[var(--color-green)]
                  hover:bg-[var(--color-deep)]
                  hover:text-[var(--color-cream)]

                  dark:border-[var(--color-cream)]/10
                  dark:bg-[var(--color-deep)]
                  dark:text-[var(--color-cream)]

                  dark:hover:border-[var(--color-gold)]
                  dark:hover:bg-[var(--color-gold)]
                  dark:hover:text-[var(--color-deep)]
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
                  border-[var(--color-deep)]/10

                  bg-[var(--color-cream)]

                  text-[var(--color-deep)]

                  shadow-lg

                  transition-all
                  duration-300

                  hover:scale-105

                  hover:border-[var(--color-green)]
                  hover:bg-[var(--color-deep)]
                  hover:text-[var(--color-cream)]

                  dark:border-[var(--color-cream)]/10
                  dark:bg-[var(--color-deep)]
                  dark:text-[var(--color-cream)]

                  dark:hover:border-[var(--color-gold)]
                  dark:hover:bg-[var(--color-gold)]
                  dark:hover:text-[var(--color-deep)]
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
      `}</style>
    </section>
  );
}