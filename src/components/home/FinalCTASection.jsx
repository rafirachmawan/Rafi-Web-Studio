export default function FinalCTASection() {
  return (
    <div className="mb-24">
      <div className="max-w-5xl mx-auto px-6 py-6 md:py-8 rounded-3xl bg-white/[0.03] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* LEFT */}
        <div className="flex items-center gap-4">
          {/* AVATAR */}
          <div className="flex -space-x-3">
            <img
              src="https://i.pravatar.cc/40?img=11"
              className="w-10 h-10 rounded-full border-2 border-black"
            />

            <img
              src="https://i.pravatar.cc/40?img=12"
              className="w-10 h-10 rounded-full border-2 border-black"
            />

            <img
              src="https://i.pravatar.cc/40?img=13"
              className="w-10 h-10 rounded-full border-2 border-black"
            />

            <div className="w-10 h-10 rounded-full bg-amber-400 text-black flex items-center justify-center text-xs font-bold border-2 border-black">
              100+
            </div>
          </div>

          {/* TEXT */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold">
              Siap Melejitkan Bisnis Anda?
            </h3>

            <p className="text-gray-400 text-sm">
              Bergabunglah dengan{" "}
              <span className="text-amber-400 font-medium">
                ratusan pengusaha
              </span>{" "}
              yang telah naik kelas.
            </p>
          </div>
        </div>

        {/* BUTTON */}
        <a
          href="https://wa.me/6285707185783?text=Halo%20saya%20ingin%20konsultasi%20website"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-amber-400 to-yellow-300 text-black px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition"
        >
          Konsultasi Gratis
        </a>
      </div>
    </div>
  );
}
