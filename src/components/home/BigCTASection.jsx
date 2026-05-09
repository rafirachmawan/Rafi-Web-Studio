export default function BigCTASection() {
  return (
    <div className="mb-24 px-4">
      <div className="max-w-6xl mx-auto rounded-[30px] md:rounded-[40px] bg-gradient-to-br from-white via-[#f8f6ef] to-[#f3f3f3] dark:from-[#111] dark:via-[#0a0a0a] dark:to-black border border-black/10 dark:border-amber-400/10 py-16 md:py-20 px-6 text-center relative overflow-hidden transition-colors duration-300">
        {/* GLOW */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-amber-500/10 blur-[120px] rounded-full"></div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-3xl mx-auto">
          {/* TITLE */}
          <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white leading-tight">
            Bisnis Kamu Sudah Siap{" "}
            <span className="italic text-gray-500 dark:text-gray-400">
              Naik Level?
            </span>
          </h2>

          {/* DESC */}
          <p className="text-gray-700 dark:text-blue-100 mt-6 text-sm md:text-lg leading-relaxed">
            Kalau kompetitor kamu sudah punya website profesional, kamu tidak
            bisa terus menunda.{" "}
            <span className="font-semibold text-black dark:text-white">
              Bangun kepercayaan. Dapatkan pelanggan baru.
            </span>
          </p>

          {/* BUTTON */}
          <div className="mt-10">
            <a
              href="https://wa.me/6285707185783?text=Halo%20saya%20ingin%20konsultasi%20website"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-yellow-300 text-black px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-sm md:text-base shadow-lg hover:scale-105 transition"
            >
              Konsultasi Gratis Sekarang →
            </a>
          </div>

          {/* NOTE */}
          <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm mt-6">
            Gratis, tanpa komitmen, tanpa syarat tersembunyi.
          </p>
        </div>
      </div>
    </div>
  );
}
