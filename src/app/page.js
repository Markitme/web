"use client";

import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronLeft,
  ChevronRight,
  Globe,
  MoveUpRight,
  Search,
  Sparkles,
  Target,
  Eye,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import Button from "../components/ui/Button";
import CaseStudies from "../components/CaseStudies";
import ClientLogoSlider from "../components/ClientLogoSlider";
import ServiceMarquee from "../components/ServiceMarquee";
import TestimonialSlider from "../components/TestimonialSlider";
import AnimatedCounter from "@/components/AnimatedCounter";
import WhyMarkitMe from "@/components/WhyMarkitMe";
import CreativeSolutions from "@/components/CreativeSolutions";
import Hero from "@/components/Hero";
import CTA from "@/components/CTA";

const services = [
  {
    number: "01",
    icon: Sparkles,
    title: "Brand & Content",
    description:
      "Build a brand people remember with strategic identity, creative content, and visuals that connect.",
  },
  {
    number: "02",
    icon: Globe,
    title: "Websites & Digital",
    description:
      "High-performing websites designed to build trust, improve user experience, and convert visitors.",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Marketing & Growth",
    description:
      "Data-driven campaigns that increase visibility, generate qualified leads, and create measurable growth.",
  },
];

const stats = [
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 92, suffix: "%", label: "Client Retention" },
  { value: 3.5, suffix: "x", label: "Average Growth" },
  { value: 10, suffix: "+", label: "Years of Experience" },
];

export default function Home() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <main className="bg-white text-black transition-colors duration-300 dark:bg-[#0a0a0a] dark:text-white">
      {/* Hero */}
      <Hero />
      {/* Client Slider */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, margin: "-100px" }}
      >
        <ClientLogoSlider />
      </motion.div>
      {/* Brand Strip */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, margin: "-100px" }}
      >
        <ServiceMarquee />
      </motion.div>
      {/* Services */}
<section
  id="services"
  className="
    relative
    overflow-hidden
    py-24
    sm:py-28
    lg:py-32
  "
>
  {/* =========================================
      BACKGROUND ACCENTS
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
        h-80
        w-80
        rounded-full
        bg-[#6D9773]/[0.07]
        blur-[100px]

        dark:bg-[#6D9773]/[0.08]
      "
    />

    {/* Gold glow */}

    <div
      className="
        absolute
        -right-40
        top-[35%]
        h-80
        w-80
        rounded-full
        bg-[#FFBA00]/[0.055]
        blur-[100px]

        dark:bg-[#FFBA00]/[0.035]
      "
    />

    {/* Sand glow */}

    <div
      className="
        absolute
        bottom-0
        left-1/2
        h-72
        w-72
        -translate-x-1/2
        rounded-full
        bg-[#BB8A52]/[0.04]
        blur-[100px]

        dark:bg-[#BB8A52]/[0.035]
      "
    />
  </div>

  <div className="container-custom relative z-10">

    {/* =========================================
        SECTION INTRO
    ========================================== */}

    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      viewport={{
        once: false,
        margin: "-100px",
      }}
      className="max-w-3xl"
    >
      {/* Eyebrow */}

      <div
        className="
          inline-flex
          items-center
          gap-3
        "
      >
        <span
          className="
            h-2
            w-2
            rounded-full
            bg-[#FFBA00]
          "
        />

        <p
          className="
            text-xs
            font-black
            uppercase
            tracking-[0.22em]

            text-[#6D9773]

            dark:text-[#FFBA00]
          "
        >
          What we do
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
          mt-5

          max-w-3xl

          text-4xl
          font-black
          leading-[1.05]
          tracking-[-0.05em]

          text-[#0C3B2E]

          sm:text-5xl
          lg:text-6xl

          dark:text-[#F1F3ED]
        "
      >
        Everything your brand needs to{" "}
        <span
          className="
            text-[#6D9773]

            dark:text-[#FFBA00]
          "
        >
          grow.
        </span>
      </h2>

      {/* Description */}

      <p
        className="
          mt-6
          max-w-2xl

          text-base
          leading-7

          text-[#587064]

          sm:text-lg
          sm:leading-8

          dark:text-[#A8B9AE]
        "
      >
        One strategic partner for your brand, website, marketing, and
        long-term digital growth.
      </p>
    </motion.div>


    {/* =========================================
        SERVICE CARDS
    ========================================== */}

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.3,
      }}
      viewport={{
        once: false,
        margin: "-100px",
      }}
      className="
        mt-14
        grid
        gap-5

        sm:mt-16

        md:grid-cols-2
        lg:grid-cols-3
      "
    >
      {services.map((service, index) => {
        const Icon = service.icon;

        /*
         * Different accent colors for cards.
         * Keeps the whole section inside the
         * existing brand palette.
         */

        const accentColors = [
          {
            icon: "bg-[#0C3B2E]",
            iconHover: "group-hover:bg-[#FFBA00]",
            number: "text-[#6D9773]",
            hover: "hover:border-[#6D9773]/50",
            link: "text-[#0C3B2E]",
            darkIcon: "dark:bg-[#6D9773]",
          },
          {
            icon: "bg-[#6D9773]",
            iconHover: "group-hover:bg-[#FFBA00]",
            number: "text-[#BB8A52]",
            hover: "hover:border-[#FFBA00]/50",
            link: "text-[#6D9773]",
            darkIcon: "dark:bg-[#6D9773]",
          },
          {
            icon: "bg-[#FFBA00]",
            iconHover: "group-hover:bg-[#0C3B2E]",
            number: "text-[#6D9773]",
            hover: "hover:border-[#FFBA00]/50",
            link: "text-[#D99B00]",
            darkIcon: "dark:bg-[#FFBA00]",
          },
          {
            icon: "bg-[#BB8A52]",
            iconHover: "group-hover:bg-[#6D9773]",
            number: "text-[#6D9773]",
            hover: "hover:border-[#BB8A52]/50",
            link: "text-[#BB8A52]",
            darkIcon: "dark:bg-[#BB8A52]",
          },
        ];

        const color = accentColors[index % accentColors.length];

        return (
          <article
            key={service.title}
            className={`
              group
              relative
              overflow-hidden

              rounded-[2rem]

              border
              border-[#0C3B2E]/[0.09]

              bg-white/70

              p-7
              sm:p-8

              shadow-[0_10px_40px_rgba(12,59,46,0.035)]

              transition-all
              duration-500
              ease-out

              hover:-translate-y-2
              hover:shadow-[0_20px_55px_rgba(12,59,46,0.08)]

              ${color.hover}

              dark:border-[#F1F3ED]/[0.09]
              dark:bg-[#0C3B2E]/70

              dark:hover:shadow-[0_20px_55px_rgba(0,0,0,0.18)]
            `}
          >
            {/* =====================================
                CARD TOP GLOW
            ====================================== */}

            <div
              className="
                pointer-events-none
                absolute
                -right-16
                -top-16
                h-32
                w-32
                rounded-full

                bg-[#6D9773]/[0.06]

                blur-2xl

                transition-all
                duration-500

                group-hover:scale-150
                group-hover:bg-[#FFBA00]/[0.08]

                dark:bg-[#6D9773]/[0.05]
                dark:group-hover:bg-[#FFBA00]/[0.06]
              "
            />

            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.12,
              }}
              viewport={{
                once: false,
                margin: "-50px",
              }}
              className="relative z-10"
            >
              {/* =================================
                  TOP ROW
              ================================== */}

              <div className="flex items-start justify-between">
                {/* Number */}

                <span
                  className={`
                    text-xs
                    font-bold
                    tracking-[0.15em]

                    ${color.number}

                    opacity-70
                  `}
                >
                  {service.number}
                </span>

                {/* Icon */}

                <div
                  className={`
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center

                    rounded-2xl

                    ${color.icon}
                    ${color.iconHover}
                    ${color.darkIcon}

                    text-white

                    shadow-sm

                    transition-all
                    duration-400
                    ease-out

                    group-hover:scale-110
                    group-hover:rotate-3
                  `}
                >
                  <Icon
                    size={22}
                    strokeWidth={1.8}
                  />
                </div>
              </div>

              {/* =================================
                  TITLE
              ================================== */}

              <h3
                className="
                  mt-14

                  text-xl
                  font-bold
                  leading-tight
                  tracking-[-0.025em]

                  text-[#0C3B2E]

                  sm:text-2xl

                  dark:text-[#F1F3ED]
                "
              >
                {service.title}
              </h3>

              {/* =================================
                  DESCRIPTION
              ================================== */}

              <p
                className="
                  mt-4

                  text-sm
                  leading-7

                  text-[#587064]

                  dark:text-[#A8B9AE]
                "
              >
                {service.description}
              </p>

              {/* =================================
                  LINK
              ================================== */}

              <a
                href="#contact"
                className={`
                  mt-7
                  inline-flex
                  items-center
                  gap-2

                  text-sm
                  font-bold

                  ${color.link}

                  transition-all
                  duration-300

                  group-hover:gap-3

                  dark:text-[#FFBA00]
                `}
              >
                Explore service

                <ArrowRight
                  size={17}
                  className="
                    transition-transform
                    duration-300

                    group-hover:translate-x-1
                  "
                />
              </a>
            </motion.div>

            {/* =====================================
                BOTTOM ACCENT LINE
            ====================================== */}

            <span
              className="
                pointer-events-none
                absolute
                bottom-0
                left-8
                right-8

                h-px

                origin-left
                scale-x-0

                bg-[#FFBA00]

                transition-transform
                duration-500

                group-hover:scale-x-100
              "
            />
          </article>
        );
      })}
    </motion.div>
  </div>
</section>
     
      {/* Stats */}
<section
  className="
    relative
    overflow-hidden

    border-y
    border-[#0C3B2E]/[0.08]

    bg-[#E7EDE4]

    py-16

    transition-colors
    duration-500

    sm:py-20
    lg:py-24

    dark:border-[#F1F3ED]/[0.08]
    dark:bg-[#071F18]
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
        -left-32
        top-1/2

        h-72
        w-72

        -translate-y-1/2

        rounded-full

        bg-[#6D9773]/[0.08]

        blur-[100px]

        dark:bg-[#6D9773]/[0.06]
      "
    />

    {/* Gold glow */}

    <div
      className="
        absolute
        -right-32
        top-1/3

        h-72
        w-72

        rounded-full

        bg-[#FFBA00]/[0.055]

        blur-[100px]

        dark:bg-[#FFBA00]/[0.03]
      "
    />
  </div>

  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    viewport={{
      once: false,
      margin: "-100px",
    }}
    className="
      container-custom
      relative
      z-10

      grid
      gap-4

      sm:grid-cols-2
      sm:gap-5

      lg:grid-cols-4
    "
  >
    {stats.map((stat, index) => (
      <motion.div
        key={stat.label}
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delay: index * 0.15,
        }}
        viewport={{
          once: false,
          margin: "-50px",
        }}
      >
        <AnimatedCounter
          value={stat.value}
          suffix={stat.suffix}
          label={stat.label}
          duration={1600}
          index={index}
        />
      </motion.div>
    ))}
  </motion.div>
</section>

      <CreativeSolutions/>
      {/* Case Study */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, margin: "-100px" }}
      >
        <CaseStudies />
      </motion.div>
      {/* Why Us - Swiper Slider */}
      <WhyMarkitMe />
      {/* CTA */}
      <CTA />
      {/* Testimonials */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, margin: "-100px" }}
      >
        <TestimonialSlider />
      </motion.div>
    </main>
  );
}
