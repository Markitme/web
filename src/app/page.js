"use client";

import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronRight,
  Globe,
  Menu,
  MoveUpRight,
  Search,
  Sparkles,
  Target,
  X,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import CaseStudies from "../components/CaseStudies";
import ClientLogoSlider from "../components/ClientLogoSlider";
import ServiceMarquee from "../components/ServiceMarquee";
import TestimonialSlider from "../components/TestimonialSlider";
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
  { value: "150+", label: "Projects Delivered" },
  { value: "92%", label: "Client Retention" },
  { value: "3.5x", label: "Average Growth" },
  { value: "10+", label: "Years of Experience" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="bg-[#0a0a0a] text-white">
      {/* Hero */}
      <section id="home" className="grid-pattern relative overflow-hidden">
        <div className="container-custom relative grid min-h-[760px] items-center gap-16 py-24 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.16em] text-white/70"
            >
              <span className="h-2 w-2 rounded-full bg-[#c8ff00]" />
              Digital growth partner
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl text-5xl font-black leading-[0.94] tracking-[-0.07em] sm:text-5xl lg:text-6xl"
            >
              Build a brand
              <span className="text-gradient block">people choose.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-8 max-w-xl text-lg leading-8 text-white/60"
            >
              MarkitMe combines strategy, creative thinking, technology, and
              performance marketing to help ambitious businesses grow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="#contact"
                className="group flex items-center justify-center gap-3 rounded-full bg-[#c8ff00] px-7 py-4 font-bold text-black transition hover:scale-[1.03]"
              >
                Start Your Project
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </a>

              <a
                href="#services"
                className="flex items-center justify-center gap-3 rounded-full border border-white/20 px-7 py-4 font-semibold transition hover:border-white hover:bg-white/5"
              >
                Explore Services
                <ChevronRight size={18} />
              </a>
            </motion.div>
          </div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-10 rounded-full bg-[#c8ff00]/10 blur-3xl" />

            <div className="relative rounded-[2rem] border border-white/15 bg-[#151515] p-5 shadow-2xl">
              <div className="rounded-[1.5rem] border border-white/10 bg-[#0d0d0d] p-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/50">
                    Growth dashboard
                  </span>
                  <span className="rounded-full bg-[#c8ff00]/15 px-3 py-1 text-xs text-[#c8ff00]">
                    Live
                  </span>
                </div>

                <div className="mt-12">
                  <p className="text-sm text-white/50">Monthly growth</p>

                  <div className="mt-2 flex items-end gap-3">
                    <span className="text-6xl font-black tracking-[-0.07em]">
                      247%
                    </span>

                    <span className="mb-2 flex items-center gap-1 text-sm text-[#c8ff00]">
                      <MoveUpRight size={15} />
                      Up
                    </span>
                  </div>
                </div>

                <div className="mt-10 flex h-44 items-end gap-3">
                  {[35, 48, 42, 67, 58, 82, 96].map((height, index) => (
                    <div
                      key={index}
                      style={{ height: `${height}%` }}
                      className={`flex-1 rounded-t-xl ${
                        index === 6 ? "bg-[#c8ff00]" : "bg-white/10"
                      }`}
                    />
                  ))}
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <Target className="text-[#c8ff00]" size={22} />
                    <p className="mt-4 text-2xl font-bold">4.2x</p>
                    <p className="mt-1 text-xs text-white/45">Better ROI</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <Search className="text-[#c8ff00]" size={22} />
                    <p className="mt-4 text-2xl font-bold">82%</p>
                    <p className="mt-1 text-xs text-white/45">
                      More visibility
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Client Slider */}
      <ClientLogoSlider />
      {/* Brand Strip */}
      <ServiceMarquee />
      {/* Services */}
      <section id="services" className="py-28">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c8ff00]">
              What we do
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.05em] sm:text-5xl">
              Everything your brand needs to grow.
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/55">
              One strategic partner for your brand, website, marketing, and
              long-term digital growth.
            </p>
          </div>

          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group rounded-[2rem] border border-white/10 bg-[#141414] p-8 transition duration-300 hover:-translate-y-2 hover:border-[#c8ff00]/50"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-sm text-white/30">
                      {service.number}
                    </span>

                    <div className="rounded-2xl bg-[#c8ff00] p-3 text-black">
                      <Icon size={24} />
                    </div>
                  </div>

                  <h3 className="mt-16 text-2xl font-bold">{service.title}</h3>

                  <p className="mt-4 leading-7 text-white/50">
                    {service.description}
                  </p>

                  <a
                    href="#contact"
                    className="mt-8 inline-flex items-center gap-2 font-bold text-[#c8ff00]"
                  >
                    Explore service
                    <ArrowRight size={17} />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      {/* How We Work */}
      {/* Stats */}
      <section className="bg-[#c8ff00] py-20 text-black">
        <div className="container-custom grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-5xl font-black tracking-[-0.07em]">
                {stat.value}
              </p>

              <p className="mt-3 text-sm font-bold uppercase tracking-[0.12em]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* Why Us */}
      <section id="about" className="py-28">
        <div className="container-custom grid gap-14 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c8ff00]">
              Why MarkitMe
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] sm:text-5xl">
              Less noise.
              <br />
              More meaningful growth.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-white/60">
              We do not chase vanity metrics or build campaigns without purpose.
              Every creative decision is connected to a clear business
              objective.
            </p>

            <div className="mt-10 space-y-5">
              {[
                "Clear strategy before execution",
                "Creative work built around your audience",
                "Transparent reporting and measurable outcomes",
                "A flexible team that grows with your business",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 border-b border-white/10 pb-5"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#c8ff00] text-black">
                    <Check size={16} strokeWidth={3} />
                  </span>

                  <span className="font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* case study */}
      <CaseStudies />

      {/* CTA */}
      <section id="contact" className="container-custom pb-28">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#171717] px-7 py-20 text-center sm:px-12">
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#c8ff00]/15 blur-3xl" />

          <div className="relative mx-auto max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c8ff00]">
              Ready when you are
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.06em] sm:text-5xl">
              Let&apos;s make your next move matter.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/55">
              Tell us where your business is today and where you want it to go.
              We will help build the path between them.
            </p>

            <a
              href="mailto:info@markitme.ca"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#c8ff00] px-8 py-4 font-bold text-black transition hover:scale-105"
            >
              Book a Free Consultation
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <TestimonialSlider />
    </main>
  );
}
