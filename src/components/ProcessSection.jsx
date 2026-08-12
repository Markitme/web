"use client";

export default function ProcessSection({
  label = "Our Process",
  title = "How We Work",
  description = "A simple and structured process designed to keep every stage clear, organized, and moving forward.",
  steps = [],
  variant = "default", // 'default' or 'compact'
  accentColor = "accent-bright",
}) {
  if (!steps || steps.length === 0) {
    return null;
  }

  return (
    <section className="px-4 py-16 sm:px-5 sm:py-28">
      <div className="container-custom">
        <div className="max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[var(--accent)] dark:text-[var(--accent-bright)] sm:text-sm">
            {label}
          </p>

          <h2 className="mt-5 text-3xl font-black leading-[1.08] tracking-[-0.05em] sm:text-5xl">
            {title}
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-black/60 dark:text-white/60 sm:text-base">
            {description}
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:mt-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((step, index) => (
            <article key={step.number || index} className="group relative">
              {/* Connector line */}
              {index !== steps.length - 1 && (
                <div className="absolute left-9 right-[-24px] top-9 hidden h-px bg-black/20 lg:block dark:bg-white/20" />
              )}

              {/* Step number circle */}
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-[6px] border-white bg-[var(--accent-bright)] text-base font-black text-black shadow-md transition-transform duration-300 group-hover:scale-110 dark:border-[#0a0a0a] sm:h-[72px] sm:w-[72px] sm:border-8 sm:text-lg">
                {step.number || index + 1}
              </div>

              {/* Step card */}
              <div className="mt-6 min-h-[220px] rounded-[24px] border border-black/10 bg-black/[0.025] p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[var(--accent)] group-hover:shadow-xl dark:border-white/10 dark:bg-white/[0.03] dark:group-hover:border-[var(--accent-bright)] sm:mt-7 sm:min-h-[250px] sm:rounded-[28px] sm:p-7">
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[var(--accent)] dark:text-[var(--accent-bright)] sm:text-xs">
                  Step {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="mt-4 text-xl font-black tracking-[-0.035em] sm:mt-5 sm:text-2xl">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-black/60 dark:text-white/60 sm:text-base">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
