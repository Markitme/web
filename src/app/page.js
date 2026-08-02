"use client";

import {
  ArrowRight,
  BarChart3,
  Check,
  Globe,
  MoveUpRight,
  Search,
  Sparkles,
  Target,
} from "lucide-react";
import { motion } from "framer-motion";

import Button from "../components/ui/Button";
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
  return (
    <main className="bg-white text-black transition-colors duration-300 dark:bg-[#0a0a0a] dark:text-white">
      {/* Hero */}{" "}
      <section id="home" className="grid-pattern relative overflow-hidden">
        {" "}
        <div className="container-custom relative grid min-h-[760px] items-center gap-16 py-24 lg:grid-cols-[1.1fr_0.9fr]">
          {" "}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.03] px-4 py-2 text-xs uppercase tracking-[0.16em] text-black/65 dark:border-white/15 dark:bg-white/5 dark:text-white/70"
            >
              {" "}
              <span className="h-2 w-2 rounded-full bg-[#a7d503]" />
              Digital growth partner
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl text-4xl font-black leading-[0.94] tracking-[-0.07em] sm:text-5xl lg:text-6xl"
            >
              Build a brand
              <span className="text-gradient block">people choose.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-8 max-w-xl text-lg leading-8 text-black/60 dark:text-white/60"
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
              <Button href="#contact" variant="primary">
                Start Your Project
              </Button>

              <Button href="#services" variant="outline">
                Explore Services
              </Button>
            </motion.div>
          </div>
          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-10 rounded-full bg-[#a7d503]/10 blur-3xl" />

            <div className="relative rounded-[2rem] border border-black/10 bg-[#f5f5f2] p-5 shadow-2xl dark:border-white/15 dark:bg-[#151515]">
              <div className="rounded-[1.5rem] border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-[#0d0d0d]">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-black/50 dark:text-white/50">
                    Growth dashboard
                  </span>

                  <span className="rounded-full bg-[#a7d503]/15 px-3 py-1 text-xs text-[#6f8f00] dark:text-[#a7d503]">
                    Live
                  </span>
                </div>

                <div className="mt-12">
                  <p className="text-sm text-black/50 dark:text-white/50">
                    Monthly growth
                  </p>

                  <div className="mt-2 flex items-end gap-3">
                    <span className="text-6xl font-black tracking-[-0.07em]">
                      247%
                    </span>

                    <span className="mb-2 flex items-center gap-1 text-sm text-[#6f8f00] dark:text-[#a7d503]">
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
                        index === 6
                          ? "bg-[#a7d503]"
                          : "bg-black/10 dark:bg-white/10"
                      }`}
                    />
                  ))}
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-black/10 bg-black/[0.03] p-4 dark:border-white/10 dark:bg-white/[0.03]">
                    <Target
                      className="text-[#6f8f00] dark:text-[#a7d503]"
                      size={22}
                    />

                    <p className="mt-4 text-2xl font-bold">4.2x</p>

                    <p className="mt-1 text-xs text-black/45 dark:text-white/45">
                      Better ROI
                    </p>
                  </div>

                  <div className="rounded-2xl border border-black/10 bg-black/[0.03] p-4 dark:border-white/10 dark:bg-white/[0.03]">
                    <Search
                      className="text-[#6f8f00] dark:text-[#a7d503]"
                      size={22}
                    />

                    <p className="mt-4 text-2xl font-bold">82%</p>

                    <p className="mt-1 text-xs text-black/45 dark:text-white/45">
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
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#6f8f00] dark:text-[#a7d503]">
              What we do
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.05em] sm:text-5xl">
              Everything your brand needs to grow.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/55 dark:text-white/55">
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
                  className="group rounded-[2rem] border border-black/10 bg-[#f7f7f5] p-8 transition duration-300 hover:-translate-y-2 hover:border-[#8db800]/50 dark:border-white/10 dark:bg-[#141414] dark:hover:border-[#a7d503]/50"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-sm text-black/30 dark:text-white/30">
                      {service.number}
                    </span>

                    <div className="rounded-2xl bg-[#a7d503] p-3 text-black">
                      <Icon size={24} />
                    </div>
                  </div>

                  <h3 className="mt-16 text-2xl font-bold">{service.title}</h3>

                  <p className="mt-4 leading-7 text-black/50 dark:text-white/50">
                    {service.description}
                  </p>

                  <a
                    href="#contact"
                    className="mt-8 inline-flex items-center gap-2 font-bold text-[#6f8f00] transition hover:gap-3 dark:text-[#a7d503]"
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
      {/* Stats */}

      <section className="bg-[#a7d503] py-16 text-black transition-colors duration-300 sm:py-20">
        <div className="container-custom grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-b border-black/10 pb-8 last:border-b-0 sm:border-b-0 sm:pb-0"
            >
              <p className="text-5xl font-black tracking-[-0.07em] sm:text-6xl">
                {stat.value}
              </p>


          <p className="mt-3 text-sm font-bold uppercase tracking-[0.12em] text-black/70">
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
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#6f8f00] dark:text-[#a7d503]">
              Why MarkitMe
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] sm:text-5xl">
              Less noise.
              <br />
              More meaningful growth.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-black/60 dark:text-white/60">
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
                  className="flex items-center gap-4 border-b border-black/10 pb-5 dark:border-white/10"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#a7d503] text-black">
                    <Check size={16} strokeWidth={3} />
                  </span>

                  <span className="font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Case Study */}
      <CaseStudies />
      {/* CTA */}
      <section id="contact" className="container-custom pb-28 mt-20">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-black/10 bg-[#f5f5f2] px-7 py-20 text-center sm:px-12 dark:border-white/10 dark:bg-[#171717]">
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#a7d503]/15 blur-3xl" />

          <div className="relative mx-auto max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#6f8f00] dark:text-[#a7d503]">
              Ready when you are
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.06em] sm:text-5xl">
              Let&apos;s make your next move matter.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-black/55 dark:text-white/55">
              Tell us where your business is today and where you want it to go.
              We will help build the path between them.
            </p>

            <div className="mt-9">
              <Button href="mailto:info@markitme.ca" variant="primary">
                Book a Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <TestimonialSlider />
    </main>
  );
}
