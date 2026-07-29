import Link from "next/link";
import {
ArrowRight,
BarChart3,
Globe,
Megaphone,
Palette,
Search,
Target,
} from "lucide-react";

const services = [
{
icon: Target,
title: "Brand Strategy",
description:
"Clear positioning and practical strategies that help your brand stand out and grow.",
},
{
icon: Globe,
title: "Website Design & Development",
description:
"Modern, responsive websites designed to build trust and turn visitors into customers.",
},
{
icon: Search,
title: "SEO & Content Strategy",
description:
"Search-focused content and optimization that help the right audience find your business.",
},
{
icon: Megaphone,
title: "Digital Marketing",
description:
"Campaigns that connect your brand with the right people across the right channels.",
},
{
icon: Palette,
title: "Brand Identity & Design",
description:
"Distinct visual identities and creative assets built for consistency and recognition.",
},
{
icon: BarChart3,
title: "Lead Generation",
description:
"Focused marketing systems designed to attract, nurture, and convert qualified leads.",
},
];

export default function ServicesPage() {
return ( <main className="bg-white text-black dark:bg-[#0a0a0a] dark:text-white"> <section className="border-b border-black/10 px-5 py-24 dark:border-white/10 sm:py-32"> <div className="container-custom"> <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8db800] dark:text-[#c8ff00]">
What We Do </p>


      <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-[-0.05em] sm:text-7xl">
        Strategy, creativity, and growth—working together.
      </h1>

      <p className="mt-7 max-w-2xl text-lg leading-8 text-black/60 dark:text-white/60">
        We combine brand thinking, creative design, technology, and
        marketing to create work that moves businesses forward.
      </p>
    </div>
  </section>

  <section className="px-5 py-20 sm:py-28">
    <div className="container-custom grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => {
        const Icon = service.icon;

        return (
          <article
            key={service.title}
            className="group rounded-3xl border border-black/10 bg-black/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#8db800] dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-[#c8ff00]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c8ff00] text-black">
              <Icon size={23} strokeWidth={1.8} />
            </div>

            <h2 className="mt-7 text-2xl font-black">
              {service.title}
            </h2>

            <p className="mt-4 leading-7 text-black/60 dark:text-white/60">
              {service.description}
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-black transition group-hover:gap-3 dark:text-white"
            >
              Let&apos;s talk
              <ArrowRight size={17} />
            </Link>
          </article>
        );
      })}
    </div>
  </section>
</main>


);
}
