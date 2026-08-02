import Link from "next/link";
import { ArrowRight, Clock3 } from "lucide-react";

const posts = [
{
category: "Brand Strategy",
title: "How a clear brand strategy creates stronger growth",
excerpt:
"A practical look at how positioning, messaging, and consistency shape customer perception.",
readTime: "5 min read",
},
{
category: "Website",
title: "What makes a modern website convert better?",
excerpt:
"The design, content, user experience, and performance decisions that influence action.",
readTime: "6 min read",
},
{
category: "Digital Marketing",
title: "Creating campaigns that people actually notice",
excerpt:
"How relevant creative and focused messaging can make marketing more effective.",
readTime: "4 min read",
},
{
category: "SEO",
title: "Building sustainable organic visibility",
excerpt:
"Why useful content and technical optimization work better together over the long term.",
readTime: "7 min read",
},
];

export default function BlogPage() {
return ( <main className="bg-white text-black dark:bg-[#0a0a0a] dark:text-white"> <section className="border-b border-black/10 px-5 py-24 dark:border-white/10 sm:py-32"> <div className="container-custom"> <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8db800] dark:text-[#a7d503]">
Insights </p>


      <h1 className="mt-5 text-5xl font-black tracking-[-0.05em] sm:text-7xl">
        Ideas worth putting into action.
      </h1>

      <p className="mt-7 max-w-2xl text-lg leading-8 text-black/60 dark:text-white/60">
        Practical perspectives on branding, websites, marketing, content,
        and sustainable business growth.
      </p>
    </div>
  </section>

  <section className="px-5 py-20 sm:py-28">
    <div className="container-custom grid gap-6 md:grid-cols-2">
      {posts.map((post) => (
        <article
          key={post.title}
          className="group rounded-3xl border border-black/10 bg-black/[0.03] p-7 transition duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-white/[0.03]"
        >
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8db800] dark:text-[#a7d503]">
            {post.category}
          </p>

          <h2 className="mt-5 text-2xl font-black leading-tight sm:text-3xl">
            {post.title}
          </h2>

          <p className="mt-5 leading-7 text-black/60 dark:text-white/60">
            {post.excerpt}
          </p>

          <div className="mt-8 flex items-center justify-between">
            <span className="flex items-center gap-2 text-sm text-black/50 dark:text-white/50">
              <Clock3 size={16} />
              {post.readTime}
            </span>

            <Link
              href="#"
              className="flex items-center gap-2 text-sm font-bold transition hover:text-[#8db800] dark:hover:text-[#a7d503]"
            >
              Read article
              <ArrowRight size={17} />
            </Link>
          </div>
        </article>
      ))}
    </div>
  </section>
</main>


);
}
