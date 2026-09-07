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
        border-black/[0.06]

        bg-white

        py-16

        text-[#050507]

        transition-colors
        duration-500

        sm:py-20
        lg:py-24
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
        {/* Dark Purple Glow */}

        <div
          className="
            absolute
            -left-40
            top-10

            h-[420px]
            w-[420px]

            rounded-full

            bg-[var(--accent-dark)]/[0.045]

            blur-[120px]
          "
        />

        {/* Violet Glow */}

        <div
          className="
            absolute
            -right-40
            bottom-0

            h-[450px]
            w-[450px]

            rounded-full

            bg-[var(--accent-bright)]/[0.045]

            blur-[120px]
          "
        />

        {/* Center Glow */}

        <div
          className="
            absolute
            left-1/2
            top-1/2

            h-[350px]
            w-[350px]

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            bg-[var(--accent)]/[0.025]

            blur-[120px]
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10

          mx-auto
          w-full
          max-w-[1280px]

          px-5
          sm:px-6
          lg:px-8
        "
      >
        {/* =====================================================
            HEADING
        ====================================================== */}

        <div
          className="
            mb-10

            flex
            flex-col
            gap-6

            sm:mb-12

            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <SectionHeading eyebrow="Selected Work">
            <span className="text-black">
              Ideas turned into
            </span>{" "}
            <span className="text-[var(--accent-dark)]">
              measurable impact.
            </span>
          </SectionHeading>

          <div className="shrink-0">
            <Button
              href="/work"
              variant="primary"
              className="
                px-6
                py-3
                text-sm
                font-bold
              "
            >
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

                      relative

                      flex
                      h-full
                      min-h-[570px]
                      w-full
                      flex-col

                      overflow-hidden

                      rounded-[22px]

                      border
                      border-[var(--accent)]/30

                      bg-[#08070d]

                      shadow-[0_15px_45px_rgba(5,5,7,0.14)]

                      transition-all
                      duration-500

                      hover:-translate-y-1

                      hover:border-[var(--accent-bright)]/70

                      hover:shadow-[0_25px_65px_color-mix(in_srgb,var(--accent-dark)_25%,transparent)]
                    "
                  >
                    {/* =================================================
                        CARD TOP PURPLE GLOW
                    ================================================== */}

                    <div
                      className="
                        pointer-events-none

                        absolute
                        -right-24
                        -top-24

                        h-56
                        w-56

                        rounded-full

                        bg-[var(--accent)]/20

                        blur-[80px]

                        opacity-60

                        transition-all
                        duration-700

                        group-hover:scale-125
                        group-hover:bg-[var(--accent-bright)]/30
                      "
                    />

                    {/* =================================================
                        CARD BOTTOM PURPLE GLOW
                    ================================================== */}

                    <div
                      className="
                        pointer-events-none

                        absolute
                        -bottom-24
                        -left-24

                        h-48
                        w-48

                        rounded-full

                        bg-[var(--accent-dark)]/20

                        blur-[70px]

                        opacity-50

                        transition-all
                        duration-700

                        group-hover:scale-125
                      "
                    />

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

                        bg-[#050507]

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

                      {/* Dark Overlay */}

                      <div
                        className="
                          absolute
                          inset-0

                          bg-[#050507]/25

                          transition-all
                          duration-500

                          group-hover:bg-[#050507]/40
                        "
                      />

                      {/* Purple Image Gradient */}

                      <div
                        className="
                          absolute
                          inset-x-0
                          bottom-0

                          h-2/3

                          bg-gradient-to-t
                          from-[#050507]/95
                          via-[#08070d]/45
                          to-transparent
                        "
                      />

                      {/* Purple Image Glow */}

                      <div
                        className="
                          pointer-events-none

                          absolute
                          -right-10
                          -top-10

                          h-32
                          w-32

                          rounded-full

                          bg-[var(--accent-bright)]/25

                          blur-[55px]
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
                          border-white/20

                          bg-black/45

                          px-3
                          py-1.5

                          text-[9px]
                          font-bold
                          text-white

                          backdrop-blur-md

                          transition-all
                          duration-300

                          group-hover:border-[var(--accent-bright)]/70
                          group-hover:bg-[var(--accent-dark)]/50
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
                          border-white/20

                          bg-black/45

                          px-3
                          py-1.5

                          text-[8px]
                          font-medium
                          text-white

                          backdrop-blur-md

                          transition-all
                          duration-300

                          group-hover:border-[var(--accent-bright)]/70
                          group-hover:bg-[var(--accent-dark)]/50
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

                              text-[var(--accent-bright)]
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

                              text-white
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
                            cursor-pointer

                            items-center
                            justify-center

                            rounded-full

                            bg-gradient-to-br
                            from-[var(--accent-dark)]
                            to-[var(--accent-bright)]

                            text-white

                            shadow-[0_8px_25px_color-mix(in_srgb,var(--accent)_40%,transparent)]

                            transition-all
                            duration-300

                            group-hover:rotate-[-45deg]
                            group-hover:shadow-[0_10px_35px_color-mix(in_srgb,var(--accent-bright)_55%,transparent)]
                          "
                          onClick={() =>
                            (window.location.href = `/work/${study.slug}`)
                          }
                        >
                          <ArrowRight size={17} />
                        </div>
                      </div>

                      {/* Image Accent */}

                      <div
                        className="
                          absolute
                          bottom-0
                          left-0

                          h-[2px]
                          w-0

                          bg-gradient-to-r
                          from-[var(--accent-dark)]
                          via-[var(--accent)]
                          to-[var(--accent-bright)]

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
                        relative
                        z-10

                        flex
                        flex-1
                        flex-col

                        bg-[#08070d]

                        p-5

                        sm:p-6
                      "
                    >
                      {/* Category */}

                      <div className="shrink-0">
                        <p
                          className="
                            text-[8px]
                            font-black
                            uppercase
                            tracking-[0.18em]

                            text-[var(--accent-bright)]

                            sm:text-[9px]
                          "
                        >
                          {study.category}
                        </p>
                      </div>

                      {/* Title */}

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

                            text-white

                            transition-colors
                            duration-300

                            group-hover:text-[var(--accent-bright)]

                            sm:text-[27px]
                          "
                        >
                          {study.title}
                        </h3>
                      </div>

                      {/* Description */}

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

                            text-white/60
                          "
                        >
                          {study.shortDescription}
                        </p>
                      </div>

                      {/* Services */}

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
                                    border-[var(--accent-bright)]/25

                                    bg-[var(--accent-dark)]/20

                                    px-3
                                    py-1.5

                                    text-[8px]
                                    font-semibold

                                    text-white/70

                                    transition-all
                                    duration-300

                                    group-hover:border-[var(--accent-bright)]/50
                                    group-hover:bg-[var(--accent-dark)]/25
                                    group-hover:text-white
                                  "
                                >
                                  {service.title}
                                </span>
                              ))}
                          </div>
                        )}
                      </div>

                      {/* Results */}

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
                                    border-white/[0.08]

                                    bg-[#120d1d]

                                    px-3
                                    py-3

                                    transition-all
                                    duration-300

                                    group-hover:border-[var(--accent)]/30
                                    group-hover:bg-[#1a1028]
                                  "
                                >
                                  <p
                                    className={`
                                      text-lg
                                      font-black
                                      tracking-[-0.04em]

                                      ${
                                        resultIndex === 1
                                          ? "text-[var(--accent-bright)]"
                                          : "text-[var(--accent-bright)]"
                                      }
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

                                      text-white/45
                                    "
                                  >
                                    {result.label}
                                  </p>
                                </div>
                              ))}
                          </div>
                        )}
                      </div>

                      {/* Buttons */}

                      <div
                        className="
                          mt-auto

                          flex
                          flex-wrap
                          gap-2

                          pt-6
                        "
                      >
                        {/* Primary */}

                        <Button
                          href={`/work/${study.slug}`}
                          variant="primary"
                        >
                          View Case Study
                        </Button>

                        {/* Website */}

                        {study.website && (
                          <Button
                            href={study.website}
                            variant="outline"
                            className="
                              border-[var(--accent-bright)]/35

                              bg-transparent

                              px-4
                              py-3

                              text-xs
                              font-bold

                              text-[var(--accent-bright)]

                              transition-all
                              duration-300

                              hover:border-[var(--accent-bright)]
                              hover:bg-[var(--accent-dark)]
                              hover:text-white
                            "
                          >
                            Website
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
                  border-[var(--accent)]/20

                  bg-[#08070d]

                  text-white

                  shadow-[0_8px_30px_color-mix(in_srgb,var(--accent-dark)_18%,transparent)]

                  transition-all
                  duration-300

                  hover:scale-105

                  hover:border-[var(--accent-bright)]
                  hover:bg-[var(--accent-dark)]
                  hover:text-white

                  hover:shadow-[0_10px_30px_color-mix(in_srgb,var(--accent-dark)_35%,transparent)]
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
                  border-[var(--accent)]/20

                  bg-[#08070d]

                  text-white

                  shadow-[0_8px_30px_color-mix(in_srgb,var(--accent-dark)_18%,transparent)]

                  transition-all
                  duration-300

                  hover:scale-105

                  hover:border-[var(--accent-bright)]
                  hover:bg-[var(--accent-dark)]
                  hover:text-white

                  hover:shadow-[0_10px_30px_color-mix(in_srgb,var(--accent-dark)_35%,transparent)]
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

          background: #050507;

          transition: all 0.3s ease;
        }

        .case-studies-swiper
          .swiper-pagination-bullet.swiper-pagination-bullet-active {
          width: 22px;

          opacity: 1;

          background: linear-gradient(
            90deg,
            var(--accent-dark),
            var(--accent),
            var(--accent-bright)
          );

          box-shadow:
            0 0 12px rgba(124, 58, 237, 0.35);
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

