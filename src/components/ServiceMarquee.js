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

        bg-[var(--surface-soft)]

        py-6

        transition-colors
        duration-500

        dark:border-[var(--border)]
        dark:bg-[var(--surface)]

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
            bg-[var(--color-gray-light)]/[0.08]
            blur-[70px]

            dark:bg-[var(--color-white-soft)]/[0.06]
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
            bg-[var(--color-black)]/[0.04]
            blur-[70px]

            dark:bg-[var(--color-white)]/[0.035]
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

                    group-hover:border-[var(--foreground)]
                    group-hover:bg-[var(--surface-soft)]

                    dark:border-[var(--border)]
                    dark:bg-[var(--surface-soft)]

                    dark:group-hover:border-[var(--foreground)]
                    dark:group-hover:bg-[var(--surface)]
                  "
                >
                  <Icon
                    size={15}
                    strokeWidth={1.8}
                    aria-hidden="true"
                    className="
                      text-[var(--foreground)]

                      transition-all
                      duration-300

                      group-hover:scale-110
                      group-hover:text-[var(--foreground)]

                      dark:text-[var(--foreground)]
                      dark:group-hover:text-[var(--foreground)]
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

                    text-[var(--color-deep)]/70

                    transition-colors
                    duration-300

                    group-hover:text-[var(--color-deep)]

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

                    dark:bg-[var(--color-gold)]/40
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