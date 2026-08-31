"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SectionHeading from "./SectionHeading";

import "swiper/css";

const IMAGE_BASE_URL =
  "https://cms.markitme.ca/wp-content/uploads/2026/08/";

const creativeSolutions = [
  {
    title: "Web Development",
    image: `${IMAGE_BASE_URL}web-development.jpg`,
  },
  {
    title: "UI / UX Design",
    image: `${IMAGE_BASE_URL}ui-ux-design.jpg`,
  },
  {
    title: "Brand Identity",
    image: `${IMAGE_BASE_URL}brand-identity.jpg`,
  },
  {
    title: "Digital Marketing",
    image: `${IMAGE_BASE_URL}marketing.jpg`,
  },
  {
    title: "SEO & Growth",
    image: `${IMAGE_BASE_URL}seo-and-growth.jpg`,
  },
  {
    title: "AI & Automation",
    image: `${IMAGE_BASE_URL}ai-automation.jpg`,
  },
  {
    title: "Content & Creative",
    image: `${IMAGE_BASE_URL}content-creative.jpg`,
  },
  {
    title: "E-Commerce",
    image: `${IMAGE_BASE_URL}e-commerce.jpg`,
  },
];

export default function CreativeSolutions() {
  return (
    <section
      className="
        creative-solutions-section
        relative
        overflow-hidden

        border-y
        border-[var(--color-deep)]/[0.08]

        py-20

        transition-colors
        duration-500

        sm:py-24
        lg:py-28

        dark:border-[var(--color-cream)]/[0.08]
      "
    >
      {/* =========================================
          BACKGROUND DECORATION
      ========================================== */}

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

            bg-[var(--color-green)]/[0.06]

            blur-[110px]

            dark:bg-[var(--color-green)]/[0.055]
          "
        />

        {/* Gold glow */}

        <div
          className="
            absolute
            -right-40
            bottom-20

            h-96
            w-96

            rounded-full

            bg-[var(--color-gold)]/[0.045]

            blur-[110px]

            dark:bg-[var(--color-gold)]/[0.025]
          "
        />
      </div>

      {/* =========================================
    HEADING
========================================= */}

      <div className="container-custom relative z-10">
        <SectionHeading
          eyebrow="Easy & Hassle-Free"
          description="From strategy and design to development and growth, everything you need to build a stronger digital presence."
          className="mb-11 md:mb-14"
        >
          All the creative solutions your{" "}
          <span className="text-[var(--color-green)] dark:text-[var(--color-gold)]">
            business needs.
          </span>
        </SectionHeading>
      </div>

      {/* =========================================
          SWIPER
      ========================================== */}

      <div className="creative-solutions-slider relative z-10">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={900}
          autoplay={{
            delay: 2200,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={16}
          slidesPerView={1.2}
          centeredSlides={false}
          breakpoints={{
            480: {
              slidesPerView: 1.5,
              spaceBetween: 16,
            },

            640: {
              slidesPerView: 2,
              spaceBetween: 16,
            },

            768: {
              slidesPerView: 2.5,
              spaceBetween: 18,
            },

            1024: {
              slidesPerView: 3.5,
              spaceBetween: 18,
            },

            1280: {
              slidesPerView: 5,
              spaceBetween: 18,
            },

            1536: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          className="!overflow-visible"
        >
          {creativeSolutions.map((item, index) => (
            <SwiperSlide key={`${item.title}-${index}`}>
              <motion.div
                whileHover={{
                  y: -6,
                }}
                transition={{
                  duration: 0.35,
                  ease: "easeOut",
                }}
                className="
                  group
                  relative

                  h-[390px]

                  overflow-hidden

                  rounded-2xl

                  bg-[var(--color-deep)]

                  shadow-[0_12px_40px_rgba(12,59,46,0.10)]

                  transition-shadow
                  duration-500

                  hover:shadow-[0_22px_55px_rgba(12,59,46,0.18)]

                  sm:h-[450px]
                  md:h-[500px]
                  lg:h-[520px]
                "
              >
                {/* =================================
                    IMAGE
                ================================== */}

                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="
                    absolute
                    inset-0

                    h-full
                    w-full

                    object-cover

                    transition-transform
                    duration-700
                    ease-out

                    group-hover:scale-110
                  "
                />

                {/* =================================
                    IMAGE OVERLAY
                ================================== */}

                <div
                  className="
                    absolute
                    inset-0

                    bg-[var(--color-deep)]/30

                    transition-all
                    duration-500

                    group-hover:bg-[var(--color-deep)]/45
                  "
                />

                {/* =================================
                    TOP GRADIENT
                ================================== */}

                <div
                  className="
                    absolute
                    inset-x-0
                    top-0

                    h-2/3

                    bg-gradient-to-b
                    from-[var(--color-deep)]/80
                    via-[var(--color-deep)]/25
                    to-transparent
                  "
                />

                {/* =================================
                    HOVER GOLD GLOW
                ================================== */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-16
                    -top-16

                    h-40
                    w-40

                    rounded-full

                    bg-[var(--color-gold)]/20

                    opacity-0

                    blur-3xl

                    transition-opacity
                    duration-500

                    group-hover:opacity-100
                  "
                />

                {/* =================================
                    TITLE
                ================================== */}

                <div
                  className="
                    absolute
                    inset-x-0
                    top-0

                    p-5

                    sm:p-6
                  "
                >
                  <div
                    className="
                      flex
                      items-start
                      justify-between
                      gap-4
                    "
                  >
                    <h3
                      className="
                        max-w-[220px]

                        text-2xl
                        font-medium
                        leading-[1.05]
                        tracking-[-0.03em]

                        text-white

                        sm:text-3xl
                      "
                    >
                      {item.title}
                    </h3>

                    {/* Number */}

                    <span
                      className="
                        text-[10px]
                        font-semibold
                        tracking-[0.15em]

                        text-[var(--color-cream)]/45
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* =================================
                    BOTTOM CONTENT
                ================================== */}

                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0

                    flex
                    translate-y-3
                    items-center
                    justify-between

                    p-5

                    opacity-0

                    transition-all
                    duration-500

                    group-hover:translate-y-0
                    group-hover:opacity-100

                    sm:p-6
                  "
                >
                  <span
                    className="
                      text-xs
                      font-medium
                      uppercase
                      tracking-[0.15em]

                      text-[var(--color-cream)]/70
                    "
                  >
                    MarkitMe
                  </span>

                  <button type="button"
              onClick={() => {
                window.dispatchEvent(
                  new Event("open-contact-modal")
                );
              }}
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      cursor-pointer
                      rounded-full

                      border
                      border-[var(--color-cream)]/30

                      bg-[var(--color-cream)]/10

                      text-lg
                      text-[var(--color-cream)]

                      backdrop-blur-md

                      transition-all
                      duration-300

                      group-hover:border-[var(--color-gold)]
                      group-hover:bg-[var(--color-gold)]
                      group-hover:text-[var(--color-deep)]
                    "
                  >
                    ↗
                  </button>
                </div>

                {/* =================================
                    BOTTOM ACCENT LINE
                ================================== */}

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
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* =========================================
          BOTTOM
      ========================================== */}

      <div className="container-custom relative z-10">
        <div
          className="
            mt-7

            flex
            items-center
            justify-between

            border-t
            border-[var(--color-deep)]/[0.10]

            pt-5

            dark:border-[var(--color-cream)]/[0.10]
          "
        >
          <span
            className="
              text-[10px]
              uppercase
              tracking-[0.18em]

              text-[#587064]/70

              sm:text-xs

              dark:text-[#A8B9AE]/70
            "
          >
            Explore what we create
          </span>

          <span
            className="
              text-[10px]
              uppercase
              tracking-[0.18em]

              text-[#587064]/70

              sm:text-xs

              dark:text-[#A8B9AE]/70
            "
          >
            Creative solutions
          </span>
        </div>
      </div>
    </section>
  );
}