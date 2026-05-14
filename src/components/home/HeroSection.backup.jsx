import heroVideo from "../../assets/Video.mp4";

export default function HeroSection() {
  return (
    <div
      id="home"
      className="relative overflow-hidden border border-black/10 dark:border-white/10 rounded-[24px] md:rounded-[40px] p-5 sm:p-6 md:p-10 bg-white dark:bg-zinc-950 backdrop-blur-lg mb-16 md:mb-24 shadow-[0_10px_40px_rgba(0,0,0,0.04)] dark:shadow-none transition-colors duration-300"
    >
      {/* SOFT GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[280px] md:w-[500px] h-[280px] md:h-[500px] bg-amber-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="relative grid md:grid-cols-2 gap-10 md:gap-8 items-center">
        {/* TEXT */}
        <div className="order-2 md:order-1">
          {/* BADGE */}
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-500 text-xs md:text-sm font-medium mb-5 md:mb-6">
            ⚡ Website • Dashboard • Mobile App
          </div>

          {/* TITLE */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight leading-[1.05] text-black dark:text-white">
            Bangun <span className="text-amber-500">Website & Sistem</span> yang
            Modern
          </h1>

          {/* DESC */}
          <p className="mt-5 text-sm sm:text-base md:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-lg">
            Kami membantu bisnis membangun website, dashboard, dan aplikasi yang
            cepat, modern, dan siap digunakan untuk berkembang lebih besar.
          </p>

          {/* BUTTON */}
          <div className="flex flex-wrap gap-3 md:gap-4 mt-7 md:mt-8">
            <a
              href="https://wa.me/6285707185783?text=Halo%20saya%20ingin%20konsultasi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 hover:bg-amber-400 text-black px-5 md:px-6 py-2.5 md:py-3 rounded-full text-sm md:text-base font-semibold transition duration-300 hover:scale-[1.02]"
            >
              Konsultasi Gratis
            </a>

            <a
              href="#demo"
              className="border border-black/10 dark:border-white/10 px-5 md:px-6 py-2.5 md:py-3 rounded-full text-sm md:text-base text-black dark:text-white hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition duration-300"
            >
              Lihat Demo
            </a>
          </div>

          {/* TECH STACK */}
          <div className="flex flex-wrap gap-2.5 md:gap-3 mt-7 md:mt-8">
            {["React", "Next.js", "Laravel", "Flutter"].map((tech) => (
              <div
                key={tech}
                className="px-3 md:px-4 py-2 rounded-full bg-black/[0.03] dark:bg-white/[0.04] border border-black/5 dark:border-white/10 text-xs md:text-sm text-zinc-700 dark:text-zinc-300"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* VIDEO */}
        <div className="order-1 md:order-2 relative h-[220px] sm:h-[260px] md:h-[360px] rounded-[24px] md:rounded-3xl overflow-hidden border border-black/5 dark:border-white/10 bg-black">
          <video
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-amber-500/10" />
        </div>
      </div>
    </div>
  );
}
