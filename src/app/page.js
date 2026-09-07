"use client";

import {
  BarChart3,
  Globe,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import "swiper/css";
import CaseStudies from "../components/CaseStudies";
import ClientLogoSlider from "../components/ClientLogoSlider";
import TestimonialSlider from "../components/TestimonialSlider";
import AnimatedCounter from "@/components/AnimatedCounter";
import WhyMarkitMe from "@/components/WhyMarkitMe";
import CreativeSolutions from "@/components/CreativeSolutions";
import Hero from "@/components/Hero";
import CTA from "@/components/CTA";
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
    <main className="bg-white text-black transition-colors duration-300 dark:bg-[#0a0a0a] dark:text-white">
      {/* Hero */}
      <Hero />
      <ClientLogoSlider />

      <ServicesSection services={services} />
       {/* STATS */}

      <CreativeSolutions />
      <WhyMarkitMe />
      <CaseStudies />
      <CTA />
      <TestimonialSlider />
    </main>
  );
}
