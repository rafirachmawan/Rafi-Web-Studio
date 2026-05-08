import thinkingImg from "../../assets/thinking.png";

export default function ProblemSection() {
  return (
    <div className="mb-24">
      <div className="grid md:grid-cols-3 gap-10 items-center">
        {/* LEFT */}
        <div className="space-y-4 order-2 md:order-1">
          {/* ITEM */}
          <div className="group relative flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-red-400/30 transition hover:-translate-y-0.5 overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-red-400/50 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-red-400/10 text-red-400 text-xs mt-1">
              ✖
            </div>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed group-hover:text-white transition">
              Terlihat kurang meyakinkan
            </p>
          </div>

          {/* ITEM */}
          <div className="group relative flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-red-400/30 transition hover:-translate-y-0.5 overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-red-400/50 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-red-400/10 text-red-400 text-xs mt-1">
              ✖
            </div>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed group-hover:text-white transition">
              Kalah dari kompetitor yang tampil lebih modern
            </p>
          </div>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center order-1 md:order-2 relative">
          <img
            src={thinkingImg}
            alt="thinking"
            className="w-[260px] md:w-[360px] object-contain drop-shadow-[0_20px_60px_rgba(255,180,0,0.2)]"
          />
        </div>

        {/* RIGHT */}
        <div className="space-y-4 order-3">
          {/* ITEM */}
          <div className="group relative flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-red-400/30 transition hover:-translate-y-0.5 overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-red-400/50 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-red-400/10 text-red-400 text-xs mt-1">
              ✖
            </div>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed group-hover:text-white transition">
              Sulit ditemukan di Google
            </p>
          </div>

          {/* ITEM */}
          <div className="group relative flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-red-400/30 transition hover:-translate-y-0.5 overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-red-400/50 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-red-400/10 text-red-400 text-xs mt-1">
              ✖
            </div>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed group-hover:text-white transition">
              Pelanggan ragu untuk menghubungi
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="mt-12 max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-2xl px-6 py-6 text-center">
        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          Padahal produk kamu mungkin lebih bagus.
          <span className="text-amber-400 font-medium">
            {" "}
            Masalahnya bukan di kualitas.
          </span>{" "}
          Masalahnya di
          <span className="text-amber-400 font-medium">
            {" "}
            tampilan dan kepercayaan.
          </span>
        </p>
      </div>
    </div>
  );
}
