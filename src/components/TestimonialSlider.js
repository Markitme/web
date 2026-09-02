"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import {
  ArrowLeft,
  ArrowRight,
  Quote,
  Star,
} from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "./ui/Button";
import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    quote:
      "MarkitMe brought clarity to our brand and created a strategy that gave our marketing a stronger direction. The team was creative, collaborative, and focused on results.",
    name: "Sarah Mitchell",
    role: "Marketing Director",
    company: "Northstar Group",
    initials: "SM",
  },
  {
    quote:
      "Our new website feels modern, professional, and much easier for customers to use. The entire process was organized, transparent, and enjoyable from start to finish.",
    name: "Daniel Carter",
    role: "Founder",
    company: "Carter & Co.",
    initials: "DC",
  },
  {
    quote:
      "MarkitMe helped us connect our brand, content, and digital marketing into one clear system. We now have a stronger online presence and a more consistent message.",
    name: "Jessica Brown",
    role: "Operations Manager",
    company: "Elevate Solutions",
    initials: "JB",
  },
  {
    quote:
      "The team understood our goals quickly and turned them into creative work that actually supported business growth. Their strategic approach made a real difference.",
    name: "Michael Wilson",
    role: "CEO",
    company: "Growth Partners",
    initials: "MW",
  },
];

export default function TestimonialSlider() {
  return (
    <section
      className="
        testimonial-slider
        relative
        overflow-hidden
        border-y
        border-[var(--border)]
        bg-[var(--surface-soft)]
        py-20
        text-[var(--foreground)]
        transition-colors
        duration-300

        dark:border-[var(--border)]
        dark:bg-[var(--background)]
        dark:text-[var(--foreground)]

        sm:py-24
        lg:py-28
      "
    >
      {/* =====================================================
          DECORATIVE ELEMENTS
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          h-px
          w-32
          bg-[var(--foreground)]/35
          sm:w-44
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          right-0
          h-px
          w-32
          bg-[var(--foreground)]/35
          sm:w-44
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          top-1/2
          h-72
          w-72
          -translate-y-1/2
          rounded-full
          bg-[var(--foreground)]/[0.04]
          blur-3xl
          dark:bg-[var(--foreground)]/[0.05]
        "
      />

      <div className="container-custom relative">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div
          className="
            mb-11
            flex
            flex-col
            gap-8
            md:mb-14
            md:flex-row
            md:items-end
            md:justify-between
          "
        >
          {/* Heading */}

          <div className="max-w-3xl">
            {/* Eyebrow */}

            <div
              className="
                inline-flex
                items-center
                gap-2
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[var(--foreground)]
                "
              />

              <p
                className="
                  text-[9px]
                  font-black
                  uppercase
                  tracking-[0.24em]
                  text-[var(--muted)]

                  dark:text-[var(--muted)]
                "
              >
                Client Stories
              </p>

              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[var(--foreground)]
                "
              />
            </div>

            {/* Heading */}

            <SectionHeading>
              Trusted by teams{" "}
              <span
                className="
                  text-[var(--muted)]
                  dark:text-[var(--muted)]
                "
              >
                ready to grow.
              </span>
            </SectionHeading>

            <p
              className="
                mt-5
                max-w-2xl
                text-sm
                leading-7
                text-[var(--foreground)]/70

                dark:text-[var(--foreground)]/70

                sm:text-base
              "
            >
              Real partnerships, real collaboration, and digital work
              designed to create meaningful business impact.
            </p>
          </div>

          {/* =================================================
              CUSTOM NAVIGATION
          ================================================== */}

          <div
            className="
              testimonial-navigation
              flex
              shrink-0
              items-center
              gap-2
            "
          >
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => {}}
              className="testimonial-prev h-11 w-11 rounded-full p-0 sm:h-12 sm:w-12"
              showArrow={false}
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={18} />
            </Button>

            <Button
              type="button"
              variant="primary"
              size="sm"
              onClick={() => {}}
              className="testimonial-next h-11 w-11 rounded-full p-0 sm:h-12 sm:w-12"
              showArrow={false}
              aria-label="Next testimonial"
            >
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>

        {/* =====================================================
            SLIDER
        ====================================================== */}

        <div className="testimonial-slider-wrapper overflow-hidden">
          <Swiper
            modules={[
              Autoplay,
              Navigation,
              Pagination,
            ]}
            slidesPerView={1}
            spaceBetween={18}
            loop={true}
            centeredSlides={false}
            slidesOffsetBefore={0}
            slidesOffsetAfter={0}
            watchOverflow={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: ".testimonial-prev",
              nextEl: ".testimonial-next",
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },

              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },

              1200: {
                slidesPerView: 3,
                spaceBetween: 22,
              },
            }}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={testimonial.name}>
                <article
                  className="
                    group
                    relative
                    flex
                    min-h-[390px]
                    flex-col
                    overflow-hidden
                    rounded-[26px]
                    border
                    border-[var(--border)]
                    bg-[var(--card)]
                    p-6
                    text-[var(--foreground)]
                    shadow-[0_10px_35px_rgba(17,17,17,0.05)]
                    transition-all
                    duration-500

                    hover:-translate-y-1
                    hover:border-[var(--foreground)]/30
                    hover:shadow-[0_18px_40px_rgba(17,17,17,0.08)]

                    dark:border-[var(--border)]
                    dark:bg-[var(--surface)]
                    dark:text-[var(--foreground)]
                    dark:shadow-[0_18px_40px_rgba(0,0,0,0.18)]

                    dark:hover:border-[var(--foreground)]/40

                    sm:p-8
                  "
                >
                  {/* =================================================
                      CARD ACCENT
                  ================================================== */}

                  <div
                    className="
                      absolute
                      left-0
                      top-0
                      h-[3px]
                      w-0
                      bg-[var(--foreground)]
                      transition-all
                      duration-500
                      group-hover:w-full
                    "
                  />

                  {/* =================================================
                      TOP
                  ================================================== */}

                  <div className="flex items-start justify-between">
                    {/* Quote */}

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-2xl
                        bg-[var(--foreground)]
                        text-[var(--background)]
                        transition-transform
                        duration-300

                        group-hover:scale-105

                        dark:bg-[var(--foreground)]
                        dark:text-[var(--background)]
                      "
                    >
                      <Quote
                        size={20}
                        fill="currentColor"
                      />
                    </div>

                    {/* Number */}

                    <span
                      className="
                        text-[9px]
                        font-black
                        tracking-[0.18em]
                        text-[var(--foreground)]/35

                        dark:text-[var(--foreground)]/35
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* =================================================
                      RATING
                  ================================================== */}

                  <div
                    className="
                      mt-6
                      flex
                      items-center
                      gap-1
                      text-[var(--foreground)]
                    "
                  >
                    {[...Array(5)].map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        size={15}
                        fill="currentColor"
                        strokeWidth={1.5}
                      />
                    ))}
                  </div>

                  {/* =================================================
                      QUOTE
                  ================================================== */}

                  <blockquote
                    className="
                      mt-5
                      text-lg
                      font-semibold
                      leading-7
                      tracking-[-0.02em]
                      text-[var(--foreground)]

                      dark:text-[var(--foreground)]

                      sm:text-xl
                      sm:leading-8
                    "
                  >
                    “{testimonial.quote}”
                  </blockquote>

                  {/* =================================================
                      CLIENT
                  ================================================== */}

                  <div
                    className="
                      mt-auto
                      flex
                      items-center
                      gap-3
                      border-t
                      border-[var(--border)]
                      pt-6

                      dark:border-[var(--border)]
                    "
                  >
                    {/* Initials */}

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[var(--foreground)]
                        text-xs
                        font-black
                        text-[var(--background)]
                        transition-all
                        duration-300

                        group-hover:bg-[var(--muted)]
                        group-hover:text-[var(--background)]

                        dark:bg-[var(--foreground)]
                        dark:text-[var(--background)]
                      "
                    >
                      {testimonial.initials}
                    </div>

                    <div className="min-w-0">
                      <h3
                        className="
                          truncate
                          text-sm
                          font-black
                          text-[var(--foreground)]

                          dark:text-[var(--foreground)]
                        "
                      >
                        {testimonial.name}
                      </h3>

                      <p
                        className="
                          mt-0.5
                          truncate
                          text-xs
                          text-[var(--muted)]

                          dark:text-[var(--muted)]
                        "
                      >
                        {testimonial.role} ·{" "}
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* =====================================================
          SWIPER CSS
      ====================================================== */}

      <style>{`
        .testimonial-swiper {
          width: 100%;
          overflow: visible !important;
          padding-bottom: 42px !important;
        }

        .testimonial-swiper .swiper-wrapper {
          align-items: stretch;
        }

        .testimonial-swiper .swiper-slide {
          height: auto !important;
          display: flex;
        }

        .testimonial-swiper .swiper-slide article {
          width: 100%;
        }

        /* =====================================================
           PAGINATION
        ====================================================== */

        .testimonial-swiper .swiper-pagination {
          bottom: 0 !important;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
        }

        .testimonial-swiper .swiper-pagination-bullet {
          width: 6px;
          height: 6px;
          margin: 0 !important;
          border-radius: 999px;
          opacity: 0.25;
          background: var(--foreground);
          transition: all 0.3s ease;
        }

        .dark .testimonial-swiper .swiper-pagination-bullet {
          background: var(--foreground);
        }

        .testimonial-swiper
          .swiper-pagination-bullet.swiper-pagination-bullet-active {
          width: 22px;
          opacity: 1;
          background: var(--foreground);
        }

        /* =====================================================
           MOBILE
        ====================================================== */

        @media (max-width: 639px) {
          .testimonial-swiper {
            padding-bottom: 36px !important;
          }

          .testimonial-swiper .swiper-pagination-bullet {
            width: 5px;
            height: 5px;
          }

          .testimonial-swiper
            .swiper-pagination-bullet.swiper-pagination-bullet-active {
            width: 18px;
          }
        }

        /* =====================================================
           REDUCED MOTION
        ====================================================== */

        @media (prefers-reduced-motion: reduce) {
          .testimonial-swiper {
            scroll-behavior: auto;
          }
        }
      `}</style>
    </section>
  );
}