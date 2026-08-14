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
import HomePopupModal from "@/components/HomePopupModal";
import Button from "../components/ui/Button";
import CaseStudies from "../components/CaseStudies";
import ClientLogoSlider from "../components/ClientLogoSlider";
import ServiceMarquee from "../components/ServiceMarquee";
import TestimonialSlider from "../components/TestimonialSlider";
import AnimatedCounter from "@/components/AnimatedCounter";

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
              <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
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
  {/* Open Contact Modal */}
  <Button
    variant="primary"
    onClick={() => {
      window.dispatchEvent(new Event("open-contact-modal"));
    }}
  >
    Start Your Project
  </Button>

  {/* Go To Services Page */}
  <Button
    href="/services"
    variant="outline"
  >
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
            <div className="absolute -inset-10 rounded-full bg-[var(--accent-bright)]/20 blur-3xl" />

            <div className="relative rounded-[2rem] border border-black/10 bg-[#f5f5f2] p-5 shadow-2xl dark:border-white/15 dark:bg-[#151515]">
              <div className="rounded-[1.5rem] border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-[#0d0d0d]">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-black/50 dark:text-white/50">
                    Growth dashboard
                  </span>

                  <span className="rounded-full bg-[var(--accent-bright)]/25 px-3 py-1 text-xs text-[var(--accent)] dark:text-[var(--accent-bright)]">
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

                    <span className="mb-2 flex items-center gap-1 text-sm text-[var(--accent)] dark:text-[var(--accent-bright)]">
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
                          ? "bg-[var(--accent)]"
                          : "bg-black/10 dark:bg-white/10"
                      }`}
                    />
                  ))}
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-black/10 bg-black/[0.03] p-4 dark:border-white/10 dark:bg-white/[0.03]">
                    <Target
                      className="text-[var(--accent)] dark:text-[var(--accent-bright)]"
                      size={22}
                    />

                    <p className="mt-4 text-2xl font-bold">4.2x</p>

                    <p className="mt-1 text-xs text-black/45 dark:text-white/45">
                      Better ROI
                    </p>
                  </div>

                  <div className="rounded-2xl border border-black/10 bg-black/[0.03] p-4 dark:border-white/10 dark:bg-white/[0.03]">
                    <Search
                      className="text-[var(--accent)] dark:text-[var(--accent-bright)]"
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
      <section id="services" className="py-28">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, margin: "-100px" }}
            className="max-w-3xl"
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent)] dark:text-[var(--accent-bright)]">
              What we do
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.05em] sm:text-5xl">
              Everything your brand needs to grow.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/55 dark:text-white/55">
              One strategic partner for your brand, website, marketing, and
              long-term digital growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: false, margin: "-100px" }}
            className="mt-16 grid gap-5 lg:grid-cols-3"
          >
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group rounded-[2rem] border border-black/10 bg-[var(--surface)] p-8 transition duration-300 hover:-translate-y-2 hover:border-[var(--accent)]/50 dark:border-white/10 dark:bg-[#141414] dark:hover:border-[var(--accent-bright)]/50"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
                    viewport={{ once: false, margin: "-50px" }}
                  >
                    <div className="flex items-start justify-between">
                      <span className="text-sm text-black/30 dark:text-white/30">
                        {service.number}
                      </span>

                      <div className="rounded-2xl bg-[var(--accent)] p-3 text-white">
                        <Icon size={24} />
                      </div>
                    </div>

                    <h3 className="mt-16 text-2xl font-bold">{service.title}</h3>

                    <p className="mt-4 leading-7 text-black/50 dark:text-white/50">
                      {service.description}
                    </p>

                    <a
                      href="#contact"
                      className="mt-8 inline-flex items-center gap-2 font-bold text-[var(--accent)] transition hover:gap-3 dark:text-[var(--accent-bright)]"
                    >
                      Explore service
                      <ArrowRight size={17} />
                    </a>
                  </motion.div>
                </article>
              );
            })}
          </motion.div>
        </div>
      </section>
      {/* Stats */}
      <section className="bg-[#f7f7f5] py-16 text-black transition-colors duration-300 sm:py-20 dark:bg-[#141414]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, margin: "-100px" }}
          className="container-custom grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
              viewport={{ once: false, margin: "-50px" }}
            >
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                duration={1600}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Why Us - Swiper Slider */}
      <section id="about" className="overflow-hidden py-28">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, margin: "-100px" }}
          className="container-custom grid gap-12 lg:grid-cols-2 lg:items-center"
        >
          {/* Left - Heading & Navigation */}
          <div className="max-w-md flex flex-col justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent)] dark:text-[var(--accent-bright)]">
                Why MarkitMe
              </p>

              <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] sm:text-5xl">
                Less noise.
                <br />
                More meaningful growth.
              </h2>

              <p className="mt-6 text-base leading-7 text-black/60 dark:text-white/60">
                We don't chase vanity metrics. Every decision is connected to your business goals.
              </p>
            </div>
          </div>

          {/* Right - Slider */}
          <div>
            <Swiper
              modules={[Autoplay, Navigation]}
              slidesPerView={1}
              spaceBetween={24}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              loop={true}
              className="why-us-swiper"
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
            >
              {[
              {
                icon: Target,
                title: "Clear Strategy",
                description: "Strategy before execution. We develop comprehensive plans based on your business goals.",
              },
              {
                icon: Eye,
                title: "Transparent Reporting",
                description: "Measurable outcomes you can track. Real data, real insights, real growth metrics.",
              },
              {
                icon: TrendingUp,
                title: "Built for Growth",
                description: "Creative work around your audience. Every campaign designed to scale with you.",
              },
              {
                icon: Users,
                title: "Flexible Team",
                description: "A team that grows with you. Scalable resources for every stage of your journey.",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <SwiperSlide key={index} className="min-h-[450px]">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
                    viewport={{ once: false, margin: "-50px" }}
                    className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-[var(--surface)] p-8 dark:border-white/10 dark:bg-[#141414] sm:p-10 h-full flex flex-col"
                  >
                    {/* Background Icon */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-5 dark:opacity-10">
                      <Icon size={300} strokeWidth={0.5} />
                    </div>

                    {/* Heading at Top */}
                    <div className="relative z-10">
                      <h3 className="text-3xl font-black text-black dark:text-white sm:text-4xl">
                        {item.title}
                      </h3>
                    </div>

                    {/* Content at Bottom */}
                    <div className="relative z-10 mt-auto">
                      <p className="text-base leading-7 text-black/60 dark:text-white/60">
                        {item.description}
                      </p>

                      <a
                        href="#about"
                        className="mt-6 inline-flex items-center gap-2 font-bold text-[var(--accent)] transition hover:gap-3 dark:text-[var(--accent-bright)]"
                      >
                        Learn more
                        <ArrowRight size={18} />
                      </a>
                    </div>
                  </motion.div>
                </SwiperSlide>
              );
            })}
            </Swiper>
          </div>
        </motion.div>

        <style jsx>{`
          :global(.why-us-swiper) {
            padding-bottom: 0;
          }

          :global(.why-us-swiper .swiper-slide) {
            height: auto;
          }
        `}</style>
      </section>
      {/* Case Study */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, margin: "-100px" }}
      >
        <CaseStudies />
      </motion.div>
      {/* CTA */}
      <section id="contact" className="container-custom pb-28 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, margin: "-100px" }}
          className="relative overflow-hidden rounded-[2.5rem] border border-black/10 bg-[#f5f5f2] px-7 py-20 text-center sm:px-12 dark:border-white/10 dark:bg-[#171717]"
        >
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[var(--accent-bright)]/20 blur-3xl" />

          <div className="relative mx-auto max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent)] dark:text-[var(--accent-bright)]">
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
        </motion.div>
      </section>
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
