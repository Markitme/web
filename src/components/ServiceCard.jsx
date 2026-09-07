import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <article
      className="
        group
        card-purple-border
        relative
        flex
        min-h-[360px]
        flex-col
        overflow-hidden
        rounded-[28px]

        border
        border-[var(--color-deep)]/10
        bg-[var(--color-cream)]

        p-7

        transition-all
        duration-500

        hover:-translate-y-1
        hover:border-[var(--accent-bright)]
        hover:shadow-[0_20px_60px_rgba(12,59,46,0.10)]

        dark:border-[var(--accent)]/40
        dark:bg-[var(--color-deep)]

        dark:hover:border-[var(--accent-bright)]
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
          bg-[var(--color-green)]/10
          blur-3xl

          transition-all
          duration-500

          group-hover:bg-[var(--color-gold)]/20

          dark:bg-[var(--color-green)]/10
          dark:group-hover:bg-[var(--color-gold)]/10
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

          bg-[var(--color-gold)]
          text-[var(--color-deep)]

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

          text-[var(--color-green)]

          dark:text-[var(--color-gold)]
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

          text-[var(--color-deep)]

          dark:text-[var(--color-cream)]
        "
      >
        {service.title}
      </h3>

      {/* Description */}
      <p
        className="
          mt-4
          leading-7

          text-[var(--color-deep)]/60

          dark:text-[var(--color-cream)]/65
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

          text-[var(--color-deep)]

          transition-colors
          duration-300

          hover:text-[var(--color-green)]

          dark:text-[var(--color-cream)]
          dark:hover:text-[var(--color-gold)]
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
            border-[var(--color-deep)]/10

            transition-all
            duration-300

            group-hover/link:translate-x-1
            group-hover/link:border-[var(--color-green)]

            dark:border-[var(--color-green)]/30
            dark:group-hover/link:border-[var(--color-gold)]
          "
        >
          <ArrowRight size={16} />
        </span>
      </Link>
    </article>
  );
}