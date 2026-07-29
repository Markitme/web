"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const caseStudies = [
{
number: "01",
category: "Branding • Website • Digital",
title: "Navira Settlement",
subtitle: "Navira prepares everything before your flight",
description:
"A clear, professional digital experience designed to communicate Navira's services, build trust, and make important information easier to access.",
image: "/images/home2.jpg",
link: "https://navirasettlements.com/",
},
{
number: "02",
category: "Website • SEO • Growth",
title: "Harmony Rehab",
subtitle: "Our Specialized Massage Therapy Services",
description:
"A welcoming and user-focused website experience created to highlight specialized services and help potential clients take the next step.",
image: "/images/harmony.jpg",
link: "#",
},
{
number: "03",
category: "Brand Strategy • Web Design",
title: "Infinite Real Estate",
subtitle: "Elevate Your Pre-Construction Experience",
description:
"Infinite Real Estate, Brokerage is a growing network of high-performing agents serving the Greater Toronto Area.",
image: "/images/infinite.png",
link: "#",
},
];

export default function CaseStudies() {
return ( <section
   id="work"
   className="overflow-hidden border-t border-white/10 bg-[#0d0d0d] py-24 sm:py-32"
 > <div className="container-custom">
{/* Section Heading */} <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"> <div className="max-w-3xl"> <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c8ff00]">
Selected work </p>


        <h2 className="mt-5 text-4xl font-black leading-[0.95] tracking-[-0.06em] sm:text-6xl">
          Ideas turned into
          <span className="block text-[#c8ff00]">
            measurable impact.
          </span>
        </h2>
      </div>

      <Link
        href="/work"
        className="group inline-flex w-fit items-center gap-3 rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:border-[#c8ff00] hover:text-[#c8ff00]"
      >
        View All Work

        <ArrowRight
          size={18}
          className="transition group-hover:translate-x-1"
        />
      </Link>
    </div>

    {/* Slider */}
    <div className="case-study-slider mt-14">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          768: {
            slidesPerView: 1.25,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 1.45,
            spaceBetween: 28,
          },
        }}
      >
        {caseStudies.map((study) => (
          <SwiperSlide key={study.title}>
            <article className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[#151515]">
              <div className="grid min-h-[560px] lg:grid-cols-[1.05fr_0.95fr]">
                {/* Content */}
                <div className="flex flex-col p-7 sm:p-10 lg:p-12">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-white/35">
                      {study.number}
                    </span>

                    <span className="rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-white/50">
                      {study.category}
                    </span>
                  </div>

                  <div className="my-auto py-12">
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#c8ff00]">
                      Case Study
                    </p>

                    <h3 className="mt-5 text-4xl font-black tracking-[-0.05em] sm:text-5xl">
                      {study.title}
                    </h3>

                    <p className="mt-4 text-xl font-medium text-white/75">
                      {study.subtitle}
                    </p>

                    <p className="mt-6 max-w-xl leading-8 text-white/50">
                      {study.description}
                    </p>

                    <a
                      href={study.link}
                      target={
                        study.link.startsWith("http")
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        study.link.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group/link mt-9 inline-flex w-fit items-center gap-3 rounded-full bg-[#c8ff00] px-6 py-4 font-bold text-black transition hover:scale-[1.03]"
                    >
                      View Project

                      <ExternalLink
                        size={17}
                        className="transition group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                      />
                    </a>
                  </div>
                </div>

                {/* Image */}
                <div className="relative min-h-[320px] overflow-hidden bg-[#202020] lg:min-h-full">
                  <Image
                    src={study.image}
                    alt={`${study.title} case study`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                    <span className="rounded-full bg-black/50 px-4 py-2 text-xs font-semibold backdrop-blur-md">
                      MarkitMe Project
                    </span>

                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#c8ff00] text-black">
                      <ArrowRight size={20} />
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
</section>


);
}
