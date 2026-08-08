"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import { projects } from "@/data/projects";
import Button from "./ui/Button";

import "swiper/css";
import "swiper/css/pagination";

export default function CaseStudies() {
  const [swiper, setSwiper] = useState(null);

  return (
    <section className="overflow-hidden border-y border-black/10 bg-white py-16 text-black dark:border-white/10 dark:bg-[#0a0a0a] dark:text-white sm:py-20 lg:py-24">
      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-8">
        {/* =====================================================
            HEADING
        ====================================================== */}

        <div className="mb-10 flex flex-col gap-6 sm:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[680px]">
            <p className="text-[8px] font-black uppercase tracking-[0.22em] text-[#6f8f00] dark:text-[#a7d503] sm:text-[9px]">
              Selected Work
            </p>

            <h2 className="mt-3 text-3xl font-black leading-[0.95] tracking-[-0.055em] sm:text-4xl md:text-5xl lg:text-6xl">
              Ideas turned into{" "}
              <span className="text-[#6f8f00] dark:text-[#a7d503]">
                measurable impact.
              </span>
            </h2>
          </div>

          <div className="shrink-0">
            <Button href="/work" variant="outline">
              View All Work
            </Button>
          </div>
        </div>

        {/* =====================================================
            SLIDER FIXED WIDTH
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
                /* Mobile */
                0: {
                  slidesPerView: 1,
                  spaceBetween: 16,
                },

                /* Large Mobile */
                640: {
                  slidesPerView: 1,
                  spaceBetween: 18,
                },

                /* Tablet */
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },

                /* Laptop */
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 22,
                },

                /* Desktop */
                1280: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },

                /* Extra Large */
                1536: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },

                /* 2XL / Large Monitors */
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

                  <article className="group flex h-full min-h-[570px] w-full flex-col overflow-hidden rounded-[22px] border border-black/10 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-black/20 hover:shadow-xl dark:border-white/10 dark:bg-[#111] dark:hover:border-white/20">
                    {/* =================================================
                        IMAGE
                    ================================================== */}

                    <div className="relative h-[250px] w-full shrink-0 overflow-hidden bg-black/10 dark:bg-[#202020] sm:h-[270px] lg:h-[285px]">
                      <Image
                        src={study.image}
                        alt={`${study.title} case study`}
                        fill
                        sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                      {/* Number */}

                      <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-[9px] font-bold text-white backdrop-blur-md">
                        {study.number}
                      </div>

                      {/* Category */}

                      <div className="absolute right-4 top-4 max-w-[72%] truncate rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-[8px] font-medium text-white backdrop-blur-md">
                        {study.category}
                      </div>

                      {/* Image Bottom */}

                      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                        <div className="min-w-0">
                          <p className="text-[8px] font-black uppercase tracking-[0.18em] text-[#a7d503]">
                            Case Study
                          </p>

                          <p className="mt-1.5 truncate text-lg font-black text-white">
                            {study.title}
                          </p>
                        </div>

                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#a7d503] text-black transition-transform duration-300 group-hover:rotate-[-45deg]">
                          <ArrowRight size={17} />
                        </div>
                      </div>
                    </div>

                    {/* =================================================
                        CONTENT
                    ================================================== */}

                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <p className="text-[8px] font-black uppercase tracking-[0.18em] text-[#6f8f00] dark:text-[#a7d503] sm:text-[9px]">
                        {study.category}
                      </p>

                      <h3 className="mt-3 text-2xl font-black leading-[0.95] tracking-[-0.045em] sm:text-[27px]">
                        {study.title}
                      </h3>

                      <p className="mt-4 line-clamp-4 text-sm leading-6 text-black/55 dark:text-white/55">
                        {study.shortDescription}
                      </p>

                      {/* Services */}

                      {study.services?.length > 0 && (
                        <div className="mt-5 flex flex-wrap gap-2">
                          {study.services.slice(0, 3).map((service) => (
                            <span
                              key={service.title}
                              className="rounded-full border border-black/10 px-3 py-1.5 text-[8px] font-semibold text-black/50 dark:border-white/10 dark:text-white/50"
                            >
                              {service.title}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Results */}

                      {study.results?.length > 0 && (
                        <div className="mt-5 grid grid-cols-2 gap-2">
                          {study.results.slice(0, 2).map((result) => (
                            <div
                              key={result.label}
                              className="rounded-xl bg-black/[0.035] px-3 py-3 dark:bg-white/[0.04]"
                            >
                              <p className="text-lg font-black tracking-[-0.04em] text-[#6f8f00] dark:text-[#a7d503]">
                                {result.value}
                              </p>

                              <p className="mt-0.5 line-clamp-1 text-[8px] font-semibold text-black/40 dark:text-white/40">
                                {result.label}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Buttons */}

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
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 px-4 py-3 text-xs font-bold text-black transition-all duration-300 hover:bg-black hover:text-white dark:border-white/10 dark:text-white dark:hover:bg-white dark:hover:text-black"
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

            <div className="pointer-events-none absolute inset-x-0 top-[45%] z-20 hidden -translate-y-1/2 items-center justify-between lg:flex">
              <button
                type="button"
                onClick={() => swiper?.slidePrev()}
                className="pointer-events-auto -ml-5 flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-black shadow-lg transition-all duration-300 hover:scale-105 hover:bg-black hover:text-white dark:border-white/10 dark:bg-[#151515] dark:text-white dark:hover:bg-white dark:hover:text-black"
                aria-label="Previous project"
              >
                <ArrowRight
                  size={18}
                  className="rotate-180"
                />
              </button>

              <button
                type="button"
                onClick={() => swiper?.slideNext()}
                className="pointer-events-auto -mr-5 flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-black shadow-lg transition-all duration-300 hover:scale-105 hover:bg-black hover:text-white dark:border-white/10 dark:bg-[#151515] dark:text-white dark:hover:bg-white dark:hover:text-black"
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

      <style jsx global>{`
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
           IMPORTANT XL FIX
           EXACTLY 3 CARDS ON LARGE SCREENS
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
          background: #111;
          transition: all 0.3s ease;
        }

        .dark .case-studies-swiper .swiper-pagination-bullet {
          background: #fff;
        }

        .case-studies-swiper
          .swiper-pagination-bullet.swiper-pagination-bullet-active {
          width: 22px;
          opacity: 1;
          background: #a7d503;
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