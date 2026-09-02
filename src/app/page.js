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
import Link from "next/link";
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
import SectionHeading from "@/components/SectionHeading";
import ServicesSection from "@/components/ServicesSection";

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
    <main className="bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      {/* Hero */}
      <Hero />
      <ClientLogoSlider />

      <ServicesSection services={services} />
      {/* Stats */}
      <section
        className="
    relative
    overflow-hidden

    border-y
    border-[var(--border)]

    bg-[var(--surface-soft)]

    py-16

    transition-colors
    duration-500

    sm:py-20
    lg:py-24

    dark:border-[var(--border)]
    dark:bg-[var(--surface)]
  "
      >
        {/*       BACKGROUND DECORATION
         */}

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

        bg-[var(--color-gray-light)]/[0.10]

        blur-[100px]

        dark:bg-[var(--color-white-soft)]/[0.06]
      "
          />

          {/* Secondary glow */}

          <div
            className="
        absolute
        -right-32
        top-1/3

        h-72
        w-72

        rounded-full

        bg-[var(--color-black)]/[0.04]

        blur-[100px]

        dark:bg-[var(--color-white)]/[0.03]
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

      <CreativeSolutions />
      <CaseStudies />
      <WhyMarkitMe />
      <CTA />
      <TestimonialSlider />
    </main>
  );
}
