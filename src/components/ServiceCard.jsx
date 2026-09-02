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
        border-[var(--border)]
        bg-[var(--surface)]

        p-7

        transition-all
        duration-500

        hover:-translate-y-1
        hover:border-[var(--foreground)]/35
        hover:shadow-[0_20px_60px_rgba(17,17,17,0.10)]

        dark:border-[var(--border)]
        dark:bg-[var(--surface)]

        dark:hover:border-[var(--foreground)]/35
        dark:hover:bg-[var(--surface-soft)]
        dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.18)]

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
          bg-[var(--foreground)]/[0.06]
          blur-3xl

          transition-all
          duration-500

          group-hover:bg-[var(--foreground)]/[0.09]

          dark:bg-[var(--foreground)]/[0.08]
          dark:group-hover:bg-[var(--foreground)]/[0.12]
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

          bg-[var(--foreground)]
          text-[var(--background)]

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

          text-[var(--muted)]

          dark:text-[var(--foreground)]/80
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

          text-[var(--foreground)]

          dark:text-[var(--foreground)]
        "
      >
        {service.title}
      </h3>

      {/* Description */}
      <p
        className="
          mt-4
          leading-7

          text-[var(--foreground)]/70

          dark:text-[var(--foreground)]/70
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

          text-[var(--foreground)]

          transition-colors
          duration-300

          hover:text-[var(--foreground)]

          dark:text-[var(--foreground)]
          dark:hover:text-[var(--foreground)]
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
            border-[var(--border)]

            transition-all
            duration-300

            group-hover/link:translate-x-1
            group-hover/link:border-[var(--foreground)]

            dark:border-[var(--border)]
            dark:group-hover/link:border-[var(--foreground)]
          "
        >
          <ArrowRight size={16} />
        </span>
      </Link>
    </article>
  );
}