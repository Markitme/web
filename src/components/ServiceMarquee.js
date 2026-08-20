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
        border-[#0C3B2E]/[0.08]

        bg-[#E7EDE4]

        py-6

        transition-colors
        duration-500

        dark:border-[#F1F3ED]/[0.08]
        dark:bg-[#0A2B22]

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
            bg-[#6D9773]/[0.08]
            blur-[70px]

            dark:bg-[#6D9773]/[0.06]
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
            bg-[#FFBA00]/[0.07]
            blur-[70px]

            dark:bg-[#FFBA00]/[0.035]
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

                  text-[#0C3B2E]

                  transition-colors
                  duration-300

                  dark:text-[#F1F3ED]
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
                    border-[#0C3B2E]/[0.10]

                    bg-white/60

                    transition-all
                    duration-300

                    group-hover:border-[#FFBA00]/60
                    group-hover:bg-[#FFBA00]/10

                    dark:border-[#F1F3ED]/[0.10]
                    dark:bg-[#F1F3ED]/[0.045]

                    dark:group-hover:border-[#FFBA00]/50
                    dark:group-hover:bg-[#FFBA00]/[0.08]
                  "
                >
                  <Icon
                    size={15}
                    strokeWidth={1.8}
                    aria-hidden="true"
                    className="
                      text-[#6D9773]

                      transition-all
                      duration-300

                      group-hover:scale-110
                      group-hover:text-[#0C3B2E]

                      dark:text-[#FFBA00]
                      dark:group-hover:text-[#FFBA00]
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

                    text-[#0C3B2E]/70

                    transition-colors
                    duration-300

                    group-hover:text-[#0C3B2E]

                    sm:text-[11px]

                    dark:text-[#F1F3ED]/65
                    dark:group-hover:text-[#F1F3ED]
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

                    bg-[#BB8A52]/50

                    dark:bg-[#FFBA00]/40
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