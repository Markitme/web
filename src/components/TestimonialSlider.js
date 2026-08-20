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
        border-[#0C3B2E]/10
        bg-[#E5EBE3]
        py-20
        text-[#0C3B2E]
        transition-colors
        duration-300

        dark:border-[#F1F3ED]/10
        dark:bg-[#071F18]
        dark:text-[#F1F3ED]

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
          bg-[#FFBA00]
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
          bg-[#6D9773]
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
          bg-[#6D9773]/10
          blur-3xl
          dark:bg-[#FFBA00]/[0.06]
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
                Client Stories
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
              Trusted by teams{" "}
              <span
                className="
                  text-[#6D9773]
                  dark:text-[#FFBA00]
                "
              >
                ready to grow.
              </span>
            </h2>

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
            <button
              type="button"
              className="
                testimonial-prev
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-[#0C3B2E]/15
                bg-[#F1F3ED]
                text-[#0C3B2E]
                transition-all
                duration-300

                hover:-translate-x-0.5
                hover:border-[#6D9773]
                hover:bg-[#6D9773]
                hover:text-white

                dark:border-[#F1F3ED]/15
                dark:bg-[#0C3B2E]
                dark:text-[#F1F3ED]

                dark:hover:border-[#FFBA00]
                dark:hover:bg-[#FFBA00]
                dark:hover:text-[#0C3B2E]

                sm:h-12
                sm:w-12
              "
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={18} />
            </button>

            <button
              type="button"
              className="
                testimonial-next
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-[#FFBA00]
                text-[#0C3B2E]
                shadow-[0_8px_25px_rgba(255,186,0,0.18)]
                transition-all
                duration-300

                hover:translate-x-0.5
                hover:scale-105
                hover:bg-[#0C3B2E]
                hover:text-[#FFBA00]

                dark:hover:bg-[#F1F3ED]
                dark:hover:text-[#0C3B2E]

                sm:h-12
                sm:w-12
              "
              aria-label="Next testimonial"
            >
              <ArrowRight size={18} />
            </button>
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
                    border-[#0C3B2E]/10
                    bg-[#F1F3ED]
                    p-6
                    text-[#0C3B2E]
                    shadow-[0_10px_40px_rgba(12,59,46,0.04)]
                    transition-all
                    duration-500

                    hover:-translate-y-1
                    hover:border-[#6D9773]/45
                    hover:shadow-[0_18px_45px_rgba(12,59,46,0.09)]

                    dark:border-[#F1F3ED]/10
                    dark:bg-[#0C3B2E]
                    dark:text-[#F1F3ED]
                    dark:shadow-none

                    dark:hover:border-[#FFBA00]/40

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
                      bg-[#FFBA00]
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
                        bg-[#0C3B2E]
                        text-[#FFBA00]
                        transition-transform
                        duration-300

                        group-hover:scale-105

                        dark:bg-[#FFBA00]
                        dark:text-[#0C3B2E]
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
                        text-[#0C3B2E]/25

                        dark:text-[#F1F3ED]/25
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
                      text-[#FFBA00]
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
                      text-[#0C3B2E]

                      dark:text-[#F1F3ED]

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
                      border-[#0C3B2E]/10
                      pt-6

                      dark:border-[#F1F3ED]/10
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
                        bg-[#6D9773]
                        text-xs
                        font-black
                        text-white
                        transition-all
                        duration-300

                        group-hover:bg-[#FFBA00]
                        group-hover:text-[#0C3B2E]

                        dark:bg-[#6D9773]
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
                          text-[#0C3B2E]

                          dark:text-[#F1F3ED]
                        "
                      >
                        {testimonial.name}
                      </h3>

                      <p
                        className="
                          mt-0.5
                          truncate
                          text-xs
                          text-[#0C3B2E]/50

                          dark:text-[#F1F3ED]/50
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
          background: #0c3b2e;
          transition: all 0.3s ease;
        }

        .dark .testimonial-swiper .swiper-pagination-bullet {
          background: #f1f3ed;
        }

        .testimonial-swiper
          .swiper-pagination-bullet.swiper-pagination-bullet-active {
          width: 22px;
          opacity: 1;
          background: #ffba00;
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