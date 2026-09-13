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
      "A focused digital presence designed to communicate expertise clearly, build trust with potential clients, and create a stronger foundation for online growth.",
    name: "Amit Khurana",
    role: "Mortgage Broker",
    company: "Mississauga, Ontario",
    initials: "AK",
  },
  {
    quote:
      "A professional digital experience built to make legal services easier to understand, strengthen credibility, and help prospective clients find the right information.",
    name: "Law Office of Karan Mahal",
    role: "Immigration Attorney, Barrister & Solicitor",
    company: "Brampton, Ontario",
    initials: "KM",
  },
  {
    quote:
      "A modern real estate presence created around the brokerage's brand, services, and audience, with a clear focus on presenting properties and building confidence online.",
    name: "Infinite Real Estate",
    role: "Real Estate Brokerage",
    company: "Toronto, Ontario",
    initials: "IR",
  },
  {
    quote:
      "A clear and accessible digital experience designed to communicate settlement services effectively and connect newcomers with the information and support they need.",
    name: "Navira Settlement Services",
    role: "Newcomer Settlement Support",
    company: "Toronto, Ontario",
    initials: "NS",
  },
  {
    quote:
      "A welcoming digital presence created to communicate healthcare services clearly while making it easier for patients to understand the clinic and its approach to wellness.",
    name: "Harmony Rehab",
    role: "Health & Wellness Clinic",
    company: "Brampton, Ontario",
    initials: "HR",
  },
  {
    quote:
      "A digital commerce experience bringing mobility solutions, product information, and a stronger online customer journey together in one focused platform.",
    name: "Medtrion",
    role: "Mobility Solutions",
    company: "E-commerce · Digital · Canada",
    initials: "MT",
  },
];

export default function TestimonialSlider() {
  return (
    <section
      className="
        testimonial-slider
        section-light
        relative
        overflow-hidden
        bg-[var(--purple-soft)]
        py-20
        text-[var(--foreground)]
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
          <div className="max-w-3xl">

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2">
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
            </div>

            {/* Heading */}
            <SectionHeading>
              Trusted by teams{" "}
              <span className="text-[var(--accent)]">
                ready to grow.
              </span>
            </SectionHeading>

            <p
              className="
                mt-5
                max-w-2xl
                text-sm
                leading-7
                text-[var(--muted)]
                sm:text-base
              "
            >
              Explore selected client projects and the digital experiences
              created to help ambitious businesses communicate, connect,
              and grow online.
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
                border-[var(--accent)]/30
                bg-white
                text-[var(--foreground)]
                transition-all
                duration-300
                hover:-translate-x-0.5
                hover:border-[var(--accent-bright)]
                hover:bg-[var(--accent)]
                hover:text-white
                sm:h-12
                sm:w-12
              "
              aria-label="Previous client"
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
              aria-label="Next client"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* =====================================================
            SLIDER
        ====================================================== */}

        <div
          className="
            testimonial-slider-wrapper
            overflow-x-hidden
            overflow-y-visible
            px-1
            pt-2
            sm:px-0
          "
        >
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
            slidesOffsetBefore={4}
            slidesOffsetAfter={4}
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
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-[var(--accent-bright)]
                    sm:p-8
                  "
                >

                  {/* =================================================
                      TOP
                  ================================================== */}

                  <div className="flex items-start justify-between">

                    {/* Quote Icon */}
                    <div
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-[var(--accent)]/15
                        bg-white
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
                      PROJECT DESCRIPTION
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
                      "
                    >
                      {testimonial.initials}
                    </div>

                    {/* Client Info */}
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
                        {testimonial.role}
                      </p>

                      <p
                        className="
                          mt-0.5
                          truncate
                          text-[10px]
                          font-medium
                          text-black/40
                        "
                      >
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

        /* PAGINATION */

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
          background: var(--accent);
          transition: all 0.3s ease;
        }

        .testimonial-swiper
          .swiper-pagination-bullet.swiper-pagination-bullet-active {
          width: 22px;
          opacity: 1;
          background: var(--accent-bright);
        }

        /* MOBILE */

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

        /* REDUCED MOTION */

        @media (prefers-reduced-motion: reduce) {
          .testimonial-swiper {
            scroll-behavior: auto;
          }
        }
      `}</style>
    </section>
  );
}

