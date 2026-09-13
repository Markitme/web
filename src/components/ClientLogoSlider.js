"use client";

const categories = [
  {
    name: "Wellness & Medspa",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M12 21C12 21 4 16.5 4 10.5C4 7.5 6.2 5 9 5C10.5 5 11.5 5.7 12 6.8C12.5 5.7 13.5 5 15 5C17.8 5 20 7.5 20 10.5C20 16.5 12 21 12 21Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M12 9V15M9 12H15"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "Real Estate",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M3 21H21M5 21V10L12 4L19 10V21M9 21V15H15V21"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "E-commerce",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M4 5H6L8.2 15.5C8.4 16.4 9.2 17 10.1 17H17.5C18.3 17 19 16.5 19.3 15.7L21 9H7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="10" cy="20" r="1" fill="currentColor" />
        <circle cx="18" cy="20" r="1" fill="currentColor" />
        <path
          d="M15 4V9M12.5 6.5H17.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "Restaurants",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M7 3V10C7 11.7 8.3 13 10 13C11.7 13 13 11.7 13 10V3M10 3V21M17 3V21M17 3C19 5 20 7 20 10H17"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Beauty Brands",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M8 3H16L15 7H9L8 3ZM9 7H15V20H9V7Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Insurance",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M12 3L19 6V11C19 15.8 16.1 19.5 12 21C7.9 19.5 5 15.8 5 11V6L12 3Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M9 12L11 14L15 10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Automotive Sales",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M5 15L7 9.5C7.3 8.6 8.1 8 9 8H15C15.9 8 16.7 8.6 17 9.5L19 15M4 14H20V19H4V14Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle cx="7" cy="18" r="1" fill="currentColor" />
        <circle cx="17" cy="18" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Finance",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect
          x="4"
          y="5"
          width="16"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path d="M4 9H20" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M8 13H11M8 16H13"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "Dental Clinics",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M8 4C6 4 5 5.5 5 8C5 12 6.5 20 9 20C10.5 20 10.5 15 12 15C13.5 15 13.5 20 15 20C17.5 20 19 12 19 8C19 5.5 18 4 16 4C14.5 4 13.5 5 12 5C10.5 5 9.5 4 8 4Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M12 7V11M10 9H14"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function ClientLogoSlider() {
  // Duplicate for seamless marquee
  const sliderItems = [...categories, ...categories];

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        py-16
        sm:py-20
        lg:py-22
      "
    >
      <div className="relative z-10 mx-auto w-full max-w-[1500px]">

        {/* HEADING */}
        <div className="px-6 text-center sm:px-10 lg:px-16">
          <p
            className="
              mb-4
              text-[10px]
              font-bold
              uppercase
              tracking-[0.25em]
              text-purple-600
              sm:text-xs
            "
          >
            Industries We Serve
          </p>

          <h2
            className="
              text-[34px]
              font-medium
              leading-[1.08]
              tracking-[-0.045em]
              text-black
              sm:text-[44px]
              lg:text-[52px]
            "
          >
            Creative support for{" "}
            <span className="text-purple-600">
              ambitious brands
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-xl
              text-sm
              leading-6
              text-black/50
              sm:text-base
            "
          >
            Helping businesses across industries build stronger brands
            and better digital experiences.
          </p>
        </div>

        {/* CATEGORY MARQUEE */}
        <div
          className="
            relative
            mt-14
            overflow-hidden
            py-7
            sm:mt-16
            sm:py-8
          "
        >

          {/* LEFT FADE */}
          <div
            className="
              pointer-events-none
              absolute
              left-0
              top-0
              z-20
              h-full
              w-16
              bg-gradient-to-r
              from-white
              to-transparent
              sm:w-24
            "
          />

          {/* RIGHT FADE */}
          <div
            className="
              pointer-events-none
              absolute
              right-0
              top-0
              z-20
              h-full
              w-16
              bg-gradient-to-l
              from-white
              to-transparent
              sm:w-24
            "
          />

          {/* TRACK */}
          <div
            className="
              client-category-track
              flex
              w-max
              items-center
            "
          >
            {sliderItems.map((category, index) => (
              <div
                key={`${category.name}-${index}`}
                className="
                  group
                  flex
                  shrink-0
                  items-center
                  px-7
                  sm:px-9
                  lg:px-11
                "
              >

                {/* ICON — BLACK */}
                <div
                  className="
                    mr-3
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    text-black

                    transition-transform
                    duration-300
                    group-hover:scale-110

                    sm:h-9
                    sm:w-9
                  "
                >
                  <div className="h-full w-full">
                    {category.icon}
                  </div>
                </div>

                {/* CATEGORY NAME — DARKER + BIGGER */}
                <span
                  className="
                    whitespace-nowrap
                    text-lg
                    font-semibold
                    tracking-[-0.025em]
                    text-black

                    transition-colors
                    duration-300

                    group-hover:text-purple-600

                    sm:text-xl
                    lg:text-2xl
                  "
                >
                  {category.name}
                </span>

              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MARQUEE ANIMATION */}
      <style>{`
        .client-category-track {
          animation: category-marquee 35s linear infinite;
        }

        .client-category-track:hover {
          animation-play-state: paused;
        }

        @keyframes category-marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
