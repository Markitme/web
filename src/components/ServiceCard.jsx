import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <article
      className="
        group
        relative
        flex
        min-h-[360px]
        flex-col
        overflow-hidden
        rounded-[28px]

        border
        border-[#0C3B2E]/10
        bg-[#F1F3ED]

        p-7

        transition-all
        duration-500

        hover:-translate-y-1
        hover:border-[#6D9773]
        hover:shadow-[0_20px_60px_rgba(12,59,46,0.10)]

        dark:border-[#6D9773]/20
        dark:bg-[#0C3B2E]

        dark:hover:border-[#FFBA00]/60
        dark:hover:bg-[#104A3A]
        dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.30)]

        sm:p-8
      "
    >
      {/* Decorative Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-16
          -top-16
          h-32
          w-32
          rounded-full
          bg-[#6D9773]/10
          blur-3xl

          transition-all
          duration-500

          group-hover:bg-[#FFBA00]/20

          dark:bg-[#6D9773]/10
          dark:group-hover:bg-[#FFBA00]/10
        "
      />

      {/* Icon */}
      <div
        className="
          relative
          flex
          h-14
          w-14
          shrink-0
          items-center
          justify-center
          rounded-2xl

          bg-[#FFBA00]
          text-[#0C3B2E]

          transition-all
          duration-500

          group-hover:scale-105
          group-hover:rotate-2
        "
      >
        <Icon
          size={25}
          strokeWidth={1.8}
        />
      </div>

      {/* Category */}
      <p
        className="
          mt-7
          text-[9px]
          font-black
          uppercase
          tracking-[0.22em]

          text-[#6D9773]

          dark:text-[#FFBA00]
        "
      >
        {service.category}
      </p>

      {/* Title */}
      <h3
        className="
          mt-3
          text-2xl
          font-black
          leading-[1.05]
          tracking-[-0.04em]

          text-[#0C3B2E]

          dark:text-[#F1F3ED]
        "
      >
        {service.title}
      </h3>

      {/* Description */}
      <p
        className="
          mt-4
          leading-7

          text-[#0C3B2E]/60

          dark:text-[#F1F3ED]/65
        "
      >
        {service.description}
      </p>

      {/* Link */}
      <Link
        href={`/services/${service.slug}`}
        className="
          group/link
          mt-auto
          inline-flex
          w-fit
          items-center
          gap-3
          pt-8

          text-sm
          font-black

          text-[#0C3B2E]

          transition-colors
          duration-300

          hover:text-[#6D9773]

          dark:text-[#F1F3ED]
          dark:hover:text-[#FFBA00]
        "
      >
        Explore Service

        <span
          className="
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full

            border
            border-[#0C3B2E]/10

            transition-all
            duration-300

            group-hover/link:translate-x-1
            group-hover/link:border-[#6D9773]

            dark:border-[#6D9773]/30
            dark:group-hover/link:border-[#FFBA00]
          "
        >
          <ArrowRight size={16} />
        </span>
      </Link>
    </article>
  );
}