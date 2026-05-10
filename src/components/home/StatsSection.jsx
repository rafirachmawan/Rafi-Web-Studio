export default function StatsSection() {
  const stats = [
    {
      value: "50+",
      label: "Project Delivered",
    },
    {
      value: "99%",
      label: "Client Satisfaction",
    },
    {
      value: "24/7",
      label: "Technical Support",
    },
  ];

  return (
    <section className="relative mt-20 md:mt-28 mb-24 md:mb-32 overflow-hidden">
      {/* GLOW */}
      <div className="absolute right-0 top-0 w-[300px] h-[300px] bg-amber-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* LEFT */}
        <div>
          {/* BADGE */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-500 text-sm font-medium">
            ⚡ Digital Business Growth
          </div>

          {/* TITLE */}
          <h2 className="mt-6 text-4xl md:text-6xl font-black tracking-tight leading-[1.05] text-black dark:text-white">
            Website Bukan Lagi <span className="text-amber-500">Pilihan</span>
          </h2>

          {/* DESC */}
          <p className="mt-6 text-base md:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-xl">
            Bisnis modern membutuhkan website dan sistem yang cepat,
            profesional, dan mudah diakses pelanggan kapan saja.
          </p>

          {/* MINI INFO */}
          <div className="flex flex-wrap gap-3 mt-8">
            {["Modern UI", "Custom System", "Mobile Friendly"].map((item) => (
              <div
                key={item}
                className="px-4 py-2 rounded-full border border-black/5 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03] text-sm text-zinc-700 dark:text-zinc-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="grid gap-5">
          {stats.map((item, index) => (
            <div
              key={item.label}
              className={`
                rounded-[28px]
                border border-black/5 dark:border-white/10
                bg-black/[0.02] dark:bg-white/[0.03]
                p-6 md:p-8
                transition-all duration-300
                hover:border-amber-500/20
                hover:-translate-y-1

                ${index === 1 ? "lg:ml-10" : index === 2 ? "lg:ml-20" : ""}
              `}
            >
              {/* VALUE */}
              <h3 className="text-5xl md:text-6xl font-black tracking-tight text-black dark:text-white">
                {item.value}
              </h3>

              {/* LABEL */}
              <p className="mt-3 text-zinc-600 dark:text-zinc-400 text-sm md:text-base">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
