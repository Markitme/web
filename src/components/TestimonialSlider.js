"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    quote:
      "MarkitMe brought clarity to our brand and created a strategy that gave our marketing a stronger direction. The team was creative, collaborative, and focused on results.",
    name: "Sarah Mitchell",
    role: "Marketing Director",
    company: "Northstar Group",
    initials: "SM",
  },
  {
    quote:
      "Our new website feels modern, professional, and much easier for customers to use. The entire process was organized, transparent, and enjoyable from start to finish.",
    name: "Daniel Carter",
    role: "Founder",
    company: "Carter & Co.",
    initials: "DC",
  },
  {
    quote:
      "MarkitMe helped us connect our brand, content, and digital marketing into one clear system. We now have a stronger online presence and a more consistent message.",
    name: "Jessica Brown",
    role: "Operations Manager",
    company: "Elevate Solutions",
    initials: "JB",
  },
  {
    quote:
      "The team understood our goals quickly and turned them into creative work that actually supported business growth. Their strategic approach made a real difference.",
    name: "Michael Wilson",
    role: "CEO",
    company: "Growth Partners",
    initials: "MW",
  },
];

export default function TestimonialSlider() {
  return (
    <section className="testimonial-slider overflow-hidden border-y border-black/10 bg-[#f7f7f4] py-20 text-black transition-colors duration-300 dark:border-white/10 dark:bg-[#0d0d0d] dark:text-white sm:py-28">
      <div className="container-custom">
        {/* Section Heading */}
        <div className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8db800] dark:text-[#a7d503]">
              Client Stories
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.05em] text-black dark:text-white sm:text-5xl">
              Trusted by teams ready to grow.
            </h2>
          </div>

          {/* Custom Navigation */}
          <div className="testimonial-navigation flex items-center gap-3">
            <button
              type="button"
              className="testimonial-prev flex h-12 w-12 items-center justify-center rounded-full border border-black/10 text-black transition hover:border-[#8db800] hover:bg-[#a7d503] hover:text-black dark:border-white/10 dark:text-white dark:hover:border-[#a7d503] dark:hover:bg-[#a7d503] dark:hover:text-black"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={19} />
            </button>

            <button
              type="button"
              className="testimonial-next flex h-12 w-12 items-center justify-center rounded-full bg-[#a7d503] text-black transition hover:scale-105 hover:bg-black hover:text-[#a7d503] dark:hover:bg-white dark:hover:text-black"
              aria-label="Next testimonial"
            >
              <ArrowRight size={19} />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="testimonial-slider-wrapper overflow-hidden">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            slidesPerView={1}
            spaceBetween={24}
            loop={true}
            centeredSlides={false}
            slidesOffsetBefore={0}
            slidesOffsetAfter={0}
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
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.name}>
                <article className="flex min-h-[390px] flex-col rounded-[28px] border border-black/10 bg-white p-7 text-black transition-colors duration-300 dark:border-white/10 dark:bg-[#151515] dark:text-white sm:p-9">
                  {/* Quote Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#a7d503] text-black">
                    <Quote size={22} fill="currentColor" />
                  </div>

                  {/* Rating */}
                  <div className="mt-7 flex items-center gap-1 text-[#8db800] dark:text-[#a7d503]">
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        size={17}
                        fill="currentColor"
                      />
                    ))}
                  </div>

                  {/* Review */}
                  <blockquote className="mt-6 text-xl font-semibold leading-8 tracking-[-0.02em] text-black dark:text-white sm:text-2xl">
                    “{testimonial.quote}”
                  </blockquote>

                  {/* Client */}
                  <div className="mt-auto flex items-center gap-4 pt-9">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-black text-sm font-black text-white dark:bg-white dark:text-black">
                      {testimonial.initials}
                    </div>

                    <div>
                      <h3 className="font-bold text-black dark:text-white">
                        {testimonial.name}
                      </h3>

                      <p className="mt-1 text-sm text-black/55 dark:text-white/55">
                        {testimonial.role} · {testimonial.company}
                      </p>
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