import {
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  Megaphone,
  MonitorSmartphone,
  Palette,
  Search,
  Target,
} from "lucide-react";

const services = [
  {
    name: "Brand Strategy",
    icon: Target,
  },
  {
    name: "Website Design & Development",
    icon: MonitorSmartphone,
  },
  {
    name: "SEO & Content Strategy",
    icon: Search,
  },
  {
    name: "Digital Marketing",
    icon: Megaphone,
  },
  {
    name: "Social Media Marketing",
    icon: BriefcaseBusiness,
  },
  {
    name: "Brand Identity & Design",
    icon: Palette,
  },
  {
    name: "Lead Generation",
    icon: BarChart3,
  },
  {
    name: "Marketing Strategy",
    icon: BadgeCheck,
  },
];

export default function ServiceMarquee() {
  const marqueeServices = [...services, ...services];

  return (
    <section
      className="
        service-marquee-section
        relative
        overflow-hidden

        border-y
        border-[var(--border)]

        bg-[var(--background-secondary)]

        py-6

        transition-colors
        duration-500

        dark:border-[var(--border)]
        dark:bg-[var(--background-secondary)]

        sm:py-7
        lg:py-8
      "
    >
      {/* =========================================
          SUBTLE BACKGROUND ACCENTS
      ========================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            -left-20
            top-1/2
            h-40
            w-40
            -translate-y-1/2
            rounded-full
            bg-[var(--purple-soft)]
            blur-[70px]

            dark:bg-[var(--purple-soft)]
          "
        />

        <div
          className="
            absolute
            -right-20
            top-1/2
            h-40
            w-40
            -translate-y-1/2
            rounded-full
            bg-[var(--accent)]/[0.08]
            blur-[70px]

            dark:bg-[var(--accent)]/[0.08]
          "
        />
      </div>

      {/* =========================================
          MARQUEE
      ========================================== */}

      <div className="service-marquee relative z-10">
        <div className="service-marquee-track">
          {marqueeServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={`${service.name}-${index}`}
                className="
                  service-marquee-item
                  group

                  flex
                  shrink-0
                  items-center
                  gap-3

                  whitespace-nowrap

                  text-[var(--color-deep)]

                  transition-colors
                  duration-300

                  dark:text-[var(--color-cream)]
                "
              >
                {/* Icon Circle */}

                <span
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center

                    rounded-full

                    border
                    border-[var(--border)]

                    bg-[var(--surface)]

                    transition-all
                    duration-300

                    group-hover:border-[var(--color-light-purple)]/60
                    group-hover:bg-[var(--color-light-purple)]/10

                    dark:border-[var(--color-cream)]/[0.10]
                    dark:bg-[var(--color-cream)]/[0.045]

                    dark:group-hover:border-[var(--color-light-purple)]/50
                    dark:group-hover:bg-[var(--color-light-purple)]/[0.08]
                  "
                >
                  <Icon
                    size={15}
                    strokeWidth={1.8}
                    aria-hidden="true"
                    className="
                      text-[var(--color-purple)]

                      transition-all
                      duration-300

                      group-hover:scale-110
                      group-hover:text-[var(--color-deep)]

                      dark:text-[var(--color-light-purple)]
                      dark:group-hover:text-[var(--color-light-purple)]
                    "
                  />
                </span>

                {/* Service Name */}

                <span
                  className="
                    font-semibold
                    text-[10px]
                    uppercase
                    tracking-[0.16em]

                    text-[var(--foreground)]

                    transition-colors
                    duration-300

                    dark:text-[var(--foreground)]

                    sm:text-[11px]

                    dark:text-[var(--color-cream)]/65
                    dark:group-hover:text-[var(--color-cream)]
                  "
                >
                  {service.name}
                </span>

                {/* Separator */}

                <span
                  className="
                    ml-2
                    h-1
                    w-1
                    shrink-0
                    rounded-full

                    bg-[var(--color-sand)]/50

                    dark:bg-[var(--color-light-purple)]/40
                  "
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}