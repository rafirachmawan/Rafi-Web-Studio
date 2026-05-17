export default function TestimoniSection() {
  return (
    <div id="testimoni" className="mt-32 mb-24 max-w-6xl mx-auto text-center">
      {/* TITLE */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-black mb-3 leading-tight text-black dark:text-white">
        Kisah Sukses{" "}
        <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
          Klien Kami
        </span>
      </h2>

      <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 text-xs md:text-sm font-medium">
        Website bukan cuma gaya-gayaan, tapi senjata rahasia untuk bisnis maju.
      </p>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* CARD 1 */}
        <div className="bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 rounded-2xl p-5 text-left hover:border-amber-400/30 transition">
          <div className="text-amber-400 mb-2 text-xs">★★★★★</div>

          <p className="text-gray-700 dark:text-gray-300 text-[12px] md:text-xs leading-relaxed mb-5 font-semibold">
            "Website travel agency saya jadi rujukan utama pelanggan. Tampilan
            di HP sangat smooth!"
          </p>

          <div className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/40?img=1"
              alt="Lestari Budi"
              className="w-8 h-8 rounded-full"
            />

            <div>
              <h4 className="text-xs font-bold text-zinc-900 dark:text-white">
                Lestari Budi
              </h4>

              <p className="text-[10px] text-gray-500 dark:text-gray-400 font-semibold">
                Lancar Jaya Travel
              </p>
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 rounded-2xl p-5 text-left hover:border-amber-400/30 transition">
          <div className="text-amber-400 mb-2 text-xs">★★★★★</div>

          <p className="text-gray-700 dark:text-gray-300 text-[12px] md:text-xs leading-relaxed mb-5 font-semibold">
            "Custom project dikerjakan dengan sangat detail. Fitur yang saya
            minta semuanya berfungsi sempurna."
          </p>

          <div className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/40?img=2"
              alt="Budi Kusuma"
              className="w-8 h-8 rounded-full"
            />

            <div>
              <h4 className="text-xs font-bold text-zinc-900 dark:text-white">
                Budi Kusuma
              </h4>

              <p className="text-[10px] text-gray-500 dark:text-gray-400 font-semibold">
                E-Learning Platform
              </p>
            </div>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 rounded-2xl p-5 text-left hover:border-amber-400/30 transition">
          <div className="text-amber-400 mb-2 text-xs">★★★★★</div>

          <p className="text-gray-700 dark:text-gray-300 text-[12px] md:text-xs leading-relaxed mb-5 font-semibold">
            "Awalnya ragu, tapi setelah jadi hasilnya jauh melampaui ekspektasi.
            TOP!"
          </p>

          <div className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/40?img=3"
              alt="Agus Salim"
              className="w-8 h-8 rounded-full"
            />

            <div>
              <h4 className="text-xs font-bold text-zinc-900 dark:text-white">
                Agus Salim
              </h4>

              <p className="text-[10px] text-gray-500 dark:text-gray-400 font-semibold">
                Catering Berkah
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
