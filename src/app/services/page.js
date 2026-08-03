import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Camera,
  Clapperboard,
  FileText,
  Globe,
  LayoutTemplate,
  Megaphone,
  MonitorCog,
  Palette,
  PenTool,
  Search,
  Share2,
  Target,
  TrendingUp,
  Video,
  WandSparkles,
} from "lucide-react";

const serviceCategories = [
  {
    category: "Brand & Content Production",
    description:
      "We create professional visual content that represents your business and helps your brand stand out.",
    services: [
      {
        icon: Video,
        title: "Videography",
        description:
          "Video is your most powerful marketing tool today. We create high-quality content that brings your brand story to life.",
      },
      {
        icon: Camera,
        title: "Photography",
        description:
          "We shoot professional photos that show your product, your team, and your space in the best possible light.",
      },
      {
        icon: Clapperboard,
        title: "Brand Shoots",
        description:
          "We plan shoots to deliver consistent visuals across your website, social media, ads, and brand touchpoints.",
      },
      {
        icon: WandSparkles,
        title: "Editing & Post-Production",
        description:
          "We turn raw footage into a polished, professional, and publish-ready final product.",
      },
      {
        icon: Video,
        title: "Reels & Short-Form Videos",
        description:
          "Scroll-stopping short videos designed to earn views, saves, shares, and keep your audience engaged.",
      },
      {
        icon: PenTool,
        title: "Social Media Content Creation",
        description:
          "Ready-to-post content that keeps your social media active and your brand top of mind.",
      },
    ],
  },

  {
    category: "Websites & Digital Presence",
    description:
      "We build modern websites that look professional, work smoothly, and help turn visitors into customers.",
    services: [
      {
        icon: Globe,
        title: "Website Design",
        description:
          "We build clean, modern websites your visitors enjoy using and your business benefits from.",
      },
      {
        icon: LayoutTemplate,
        title: "Landing Pages",
        description:
          "Focused pages designed around one goal, one action, and one clear result.",
      },
      {
        icon: MonitorCog,
        title: "Website Redesign",
        description:
          "We rebuild outdated websites so they look modern, perform better, and start working for your business.",
      },
      {
        icon: Search,
        title: "SEO Optimization",
        description:
          "Search-focused optimization that helps the right audience discover your business online.",
      },
      {
        icon: MonitorCog,
        title: "Website Maintenance",
        description:
          "We keep your website secure, updated, fast, and running smoothly.",
      },
      {
        icon: TrendingUp,
        title: "Conversion Optimization",
        description:
          "We improve the website experience to help turn more visitors into leads and customers.",
      },
    ],
  },

  {
    category: "Marketing & Growth",
    description:
      "We connect strategy, content, campaigns, and data to create measurable business growth.",
    services: [
      {
        icon: Share2,
        title: "Social Media Management",
        description:
          "We manage your social presence so your brand stays active, consistent, and worth following.",
      },
      {
        icon: Megaphone,
        title: "Paid Advertising",
        description:
          "Targeted ad campaigns that put your business in front of people interested and ready to take action.",
      },
      {
        icon: Target,
        title: "Campaign Strategy",
        description:
          "Every campaign is built with a clear purpose, defined audience, and measurable goal.",
      },
      {
        icon: BarChart3,
        title: "Lead Generation",
        description:
          "Marketing systems designed to attract, nurture, and convert qualified prospects.",
      },
      {
        icon: FileText,
        title: "Content Planning",
        description:
          "We plan content calendars so your marketing stays consistent and nothing is left until the last minute.",
      },
      {
        icon: BarChart3,
        title: "Analytics & Reporting",
        description:
          "We track what matters, measure performance, and provide reports that are easy to understand.",
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white text-black transition-colors duration-300 dark:bg-[#0a0a0a] dark:text-white">
      {/* Hero Section */}
      <section className="border-b border-black/10 px-5 py-24 transition-colors duration-300 dark:border-white/10 sm:py-32">
        <div className="container-custom">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8db800] dark:text-[#a7d503]">
            What We Do
          </p>

          <h1 className="mt-5 max-w-4xl text-3xl font-black tracking-[-0.05em] sm:text-4xl lg:text-5xl xl:text-6xl">
            Strategy, creativity, and growth —
            <span className="text-[#8db800] dark:text-[#a7d503]">
              {" "}
              working together.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-black/60 dark:text-white/60">
            We combine brand thinking, creative design, technology, and
            marketing to create work that moves businesses forward.
          </p>
        </div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((category, categoryIndex) => (
        <section
          key={category.category}
          className={`px-5 py-20 sm:py-28 ${
            categoryIndex % 2 === 1
              ? "bg-black/[0.025] dark:bg-white/[0.02]"
              : ""
          }`}
        >
          <div className="container-custom">
            {/* Category Heading */}
            <div className="mb-12 max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8db800] dark:text-[#a7d503]">
                {String(categoryIndex + 1).padStart(2, "0")}
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-5xl">
                {category.category}
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-black/60 dark:text-white/60">
                {category.description}
              </p>
            </div>

            {/* Service Cards */}
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {category.services.map((service) => {
                const Icon = service.icon;

                return (
                  <article
                    key={service.title}
                    className="group flex min-h-[330px] flex-col rounded-3xl border border-black/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#8db800] hover:shadow-xl dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-[#a7d503] sm:p-8"
                  >
                    <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#a7d503] text-black">
                      <Icon size={24} strokeWidth={1.8} />
                    </div>

                    <h3 className="mt-7 text-2xl font-black tracking-[-0.03em]">
                      {service.title}
                    </h3>

                    <p className="mt-4 leading-7 text-black/60 dark:text-white/60">
                      {service.description}
                    </p>

                    <Link
                      href="/contact"
                      className="group/link mt-auto inline-flex w-fit items-center gap-2 pt-8 text-sm font-bold text-black transition-all hover:text-[#8db800] dark:text-white dark:hover:text-[#a7d503]"
                    >
                      Let&apos;s Talk

                      <ArrowRight
                        size={17}
                        className="transition-transform duration-300 group-hover/link:translate-x-1"
                      />
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="border-t border-black/10 bg-[#a7d503] px-5 py-20 text-black dark:border-white/10 sm:py-24">
        <div className="container-custom flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em]">
              Ready to Grow?
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-5xl">
              Let&apos;s build something that moves your business forward.
            </h2>
          </div>

          <Link
            href="/contact"
            className="group flex w-fit items-center gap-3 rounded-full bg-black px-7 py-4 font-bold text-white transition duration-300 hover:scale-[1.03] hover:bg-white hover:text-black"
          >
            Start Your Project

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}