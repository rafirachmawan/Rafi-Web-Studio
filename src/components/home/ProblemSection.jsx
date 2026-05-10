import thinkingImg from "../../assets/thinking.png";

export default function ProblemSection() {
  const problems = [
    "Terlihat kurang profesional di mata pelanggan",
    "Kalah saing dengan bisnis yang tampil modern",
    "Sulit ditemukan di Google dan media digital",
    "Pelanggan ragu untuk menghubungi bisnis kamu",
  ];

  return (
    <section className="relative mb-24 md:mb-32 overflow-hidden">
      {/* GLOW */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-amber-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="relative">
        {/* TOP CONTENT */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          {/* BADGE */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-400/20 bg-red-400/10 text-red-400 text-xs md:text-sm font-medium">
            ⚠️ Business Problem
          </div>

          {/* TITLE */}
          <h2 className="mt-6 text-3xl sm:text-4xl md:text-6xl font-black tracking-tight leading-[1.05] text-black dark:text-white">
            Bisnis Bagus Tapi
            <span className="text-amber-500"> Kurang Dipercaya?</span>
          </h2>

          {/* DESC */}
          <p className="mt-5 text-sm sm:text-base md:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            Banyak bisnis memiliki produk yang bagus, tetapi kalah bersaing
            karena tampilan digital yang kurang profesional.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8 items-center">
          {/* LEFT CARD */}
          <div className="space-y-4 order-2 lg:order-1">
            {problems.slice(0, 2).map((item) => (
              <div
                key={item}
                className="group rounded-2xl border border-black/5 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03] p-5 md:p-6 transition duration-300 hover:border-red-400/20 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  {/* ICON */}
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-red-400/10 text-red-400 flex items-center justify-center text-sm">
                    ✖
                  </div>

                  {/* TEXT */}
                  <p className="text-sm md:text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* IMAGE */}
          <div className="relative flex justify-center order-1 lg:order-2">
            {/* CIRCLE */}
            <div className="absolute w-[220px] md:w-[320px] h-[220px] md:h-[320px] rounded-full bg-amber-500/10 blur-3xl" />

            <img
              src={thinkingImg}
              alt="thinking"
              className="relative w-[220px] sm:w-[260px] md:w-[340px] object-contain drop-shadow-[0_20px_60px_rgba(255,180,0,0.18)]"
            />
          </div>

          {/* RIGHT CARD */}
          <div className="space-y-4 order-3">
            {problems.slice(2, 4).map((item) => (
              <div
                key={item}
                className="group rounded-2xl border border-black/5 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03] p-5 md:p-6 transition duration-300 hover:border-red-400/20 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  {/* ICON */}
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-red-400/10 text-red-400 flex items-center justify-center text-sm">
                    ✖
                  </div>

                  {/* TEXT */}
                  <p className="text-sm md:text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM NOTE */}
        <div className="mt-12 md:mt-16 max-w-3xl mx-auto">
          <div className="rounded-[24px] border border-black/5 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03] px-6 md:px-8 py-5 md:py-6 text-center">
            <p className="text-sm md:text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              Produk yang bagus tetap membutuhkan
              <span className="text-amber-500 font-medium">
                {" "}
                tampilan profesional
              </span>{" "}
              dan
              <span className="text-amber-500 font-medium">
                {" "}
                kepercayaan digital
              </span>{" "}
              agar pelanggan yakin untuk memilih bisnis kamu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
