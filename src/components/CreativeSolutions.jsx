"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const creativeSolutions = [
  {
    title: "Web Development",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "UI / UX Design",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Brand Identity",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Digital Marketing",
    image:
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "SEO & Growth",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "AI & Automation",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Content & Creative",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "E-Commerce",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85",
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
        border-[#0C3B2E]/[0.08]

        py-20

        transition-colors
        duration-500

        sm:py-24
        lg:py-28

        dark:border-[#F1F3ED]/[0.08]
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

            bg-[#6D9773]/[0.06]

            blur-[110px]

            dark:bg-[#6D9773]/[0.055]
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

            bg-[#FFBA00]/[0.045]

            blur-[110px]

            dark:bg-[#FFBA00]/[0.025]
          "
        />
      </div>

      {/* =========================================
    HEADING
========================================= */}

<div className="container-custom relative z-10">
  <motion.div
    initial={{
      opacity: 0,
      y: 30,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
    }}
    viewport={{
      once: true,
      amount: 0.2,
    }}
    transition={{
      duration: 0.7,
      ease: "easeOut",
    }}
    className="mb-11 md:mb-14"
  >
    {/* =================================================
        EYEBROW
    ================================================== */}

    <div className="inline-flex items-center gap-2">
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
        Easy & Hassle-Free
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

    {/* =================================================
        HEADING
    ================================================== */}

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
      All the creative solutions your{" "}
      <span
        className="
          text-[#6D9773]
          dark:text-[#FFBA00]
        "
      >
        business needs.
      </span>
    </h2>

    {/* =================================================
        DESCRIPTION
    ================================================== */}

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
      From strategy and design to development and growth, everything you need
      to build a stronger digital presence.
    </p>
  </motion.div>
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

                  bg-[#0C3B2E]

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

                    bg-[#0C3B2E]/30

                    transition-all
                    duration-500

                    group-hover:bg-[#0C3B2E]/45
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
                    from-[#0C3B2E]/80
                    via-[#0C3B2E]/25
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

                    bg-[#FFBA00]/20

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

                        text-[#F1F3ED]/45
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

                      text-[#F1F3ED]/70
                    "
                  >
                    MarkitMe
                  </span>

                  <span
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center

                      rounded-full

                      border
                      border-[#F1F3ED]/30

                      bg-[#F1F3ED]/10

                      text-lg
                      text-[#F1F3ED]

                      backdrop-blur-md

                      transition-all
                      duration-300

                      group-hover:border-[#FFBA00]
                      group-hover:bg-[#FFBA00]
                      group-hover:text-[#0C3B2E]
                    "
                  >
                    ↗
                  </span>
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

                    bg-[#FFBA00]

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
            border-[#0C3B2E]/[0.10]

            pt-5

            dark:border-[#F1F3ED]/[0.10]
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