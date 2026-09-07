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
       
        bg-[#050507]
        py-20
        text-white
        transition-colors
        duration-300

        sm:py-24
        lg:py-28
      "
    >

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
                  bg-[var(--accent)]
                "
              />

              <p
                className="
                  text-[9px]
                  font-black
                  uppercase
                  tracking-[0.24em]
                  text-[var(--accent)]
                "
              >
                Client Stories
              </p>

              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[var(--accent)]
                "
              />
            </div>

            {/* Heading */}

            <SectionHeading>
              Trusted by teams{" "}
              <span
                className="
                  text-[var(--accent)]
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
                text-white/60

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
                border-white/20
                bg-black
                text-white
                transition-all
                duration-300

                hover:-translate-x-0.5
                hover:border-[var(--accent-bright)]
                hover:bg-[var(--accent)]
                hover:text-white

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
                bg-[var(--accent)]
                text-white
                shadow-[0_8px_25px_color-mix(in_srgb,var(--accent)_24%,transparent)]
                transition-all
                duration-300

                hover:translate-x-0.5
                hover:scale-105
                hover:bg-[var(--accent-bright)]
                hover:text-white

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

        <div className="testimonial-slider-wrapper overflow-x-hidden overflow-y-visible pt-2">
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
                    testimonial-card
                    group
                    relative
                    flex
                    min-h-[390px]
                    flex-col
                    overflow-hidden
                    rounded-[26px]
                    border
                      border-[var(--accent)]/50
                      bg-white
                    p-6
                      text-black
                      shadow-[0_10px_40px_rgba(0,0,0,0.18)]
                    transition-all
                    duration-500

                    hover:-translate-y-1
                    hover:border-[var(--accent-bright)]
                    hover:shadow-[0_18px_45px_color-mix(in_srgb,var(--accent)_28%,transparent)]

                    sm:p-8
                  "
                >
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
                        bg-black
                        text-[var(--accent-bright)]
                        transition-transform
                        duration-300

                        group-hover:scale-105

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
                        text-black/35
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
                      text-[var(--accent)]
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
                      text-black

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
                      border-black/10
                      pt-6

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
                        bg-[var(--accent)]
                        text-xs
                        font-black
                        text-white
                        transition-all
                        duration-300

                        group-hover:bg-[var(--accent-bright)]
                        group-hover:text-white
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
                          text-black
                        "
                      >
                        {testimonial.name}
                      </h3>

                      <p
                        className="
                          mt-0.5
                          truncate
                          text-xs
                          text-black/55
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
          background: #ffffff;
          transition: all 0.3s ease;
        }

        .testimonial-swiper
          .swiper-pagination-bullet.swiper-pagination-bullet-active {
          width: 22px;
          opacity: 1;
          background: var(--accent-bright);
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