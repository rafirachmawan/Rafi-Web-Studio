export default function SolutionSection() {
  const solutions = [
    {
      icon: "🛡️",
      title: "Meningkatkan Kepercayaan",
      desc: "Desain modern dan profesional yang membuat bisnis terlihat lebih terpercaya.",
    },
    {
      icon: "⚡",
      title: "Performa Cepat",
      desc: "Website dan sistem dibuat ringan, cepat, dan nyaman digunakan.",
    },
    {
      icon: "📱",
      title: "Mobile Friendly",
      desc: "Tampilan tetap optimal di semua perangkat, terutama smartphone.",
    },
    {
      icon: "🔍",
      title: "Siap SEO",
      desc: "Struktur website lebih mudah ditemukan di Google dan mesin pencari.",
    },
    {
      icon: "💬",
      title: "Mudah Dihubungi",
      desc: "Integrasi WhatsApp, Maps, dan navigasi yang simpel untuk pelanggan.",
    },
    {
      icon: "🎨",
      title: "Custom Sesuai Brand",
      desc: "Setiap desain dibuat mengikuti identitas dan kebutuhan bisnis kamu.",
    },
  ];

  return (
    <section className="relative mb-24 md:mb-32 overflow-hidden">
      {/* GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-amber-500/10 blur-3xl rounded-full pointer-events-none" />

      {/* HEADER */}
      <div className="relative text-center max-w-3xl mx-auto">
        {/* BADGE */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-500 text-xs md:text-sm font-medium">
          ✔ Solution for Your Business
        </div>

        {/* TITLE */}
        <h2 className="mt-6 text-3xl sm:text-4xl md:text-6xl font-black tracking-tight leading-[1.05] text-black dark:text-white">
          Lebih dari Sekadar
          <span className="text-amber-500"> Website</span>
        </h2>

        {/* DESC */}
        <p className="mt-5 text-sm sm:text-base md:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          Kami membantu bisnis membangun website, sistem, dan aplikasi yang
          profesional, modern, dan siap digunakan untuk berkembang.
        </p>
      </div>

      {/* SOLUTIONS */}
      <div className="relative mt-14 md:mt-16 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
        {solutions.map((item) => (
          <div
            key={item.title}
            className="group rounded-[24px] border border-black/5 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03] p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/20"
          >
            {/* ICON */}
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/10 flex items-center justify-center text-xl mb-5">
              {item.icon}
            </div>

            {/* TITLE */}
            <h3 className="text-lg md:text-xl font-bold tracking-tight text-black dark:text-white">
              {item.title}
            </h3>

            {/* DESC */}
            <p className="mt-3 text-sm md:text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* BOTTOM CTA */}
      <div className="relative mt-14 md:mt-16">
        <div className="rounded-[28px] border border-black/5 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03] px-6 md:px-10 py-8 md:py-10 text-center overflow-hidden">
          {/* MINI GLOW */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-amber-500/10 blur-3xl rounded-full pointer-events-none" />

          <div className="relative">
            <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400">
              Kami tidak menggunakan template asal jadi.
            </p>

            <h3 className="mt-3 text-2xl md:text-4xl font-black tracking-tight text-black dark:text-white leading-tight">
              Setiap Project Dibuat
              <span className="text-amber-500"> Sesuai Kebutuhan Bisnis</span>
            </h3>

            <p className="mt-4 max-w-2xl mx-auto text-sm md:text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              Mulai dari company profile, dashboard internal, hingga mobile app
              yang dirancang khusus untuk membantu bisnis berkembang lebih
              cepat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
