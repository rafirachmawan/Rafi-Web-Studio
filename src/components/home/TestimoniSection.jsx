export default function TestimoniSection() {
  return (
    <div id="testimoni" className="mt-32 mb-24 max-w-6xl mx-auto text-center">
      {/* TITLE */}
      <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-tight text-black dark:text-white">
        Kisah Sukses{" "}
        <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
          Klien Kami
        </span>
      </h2>

      <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 text-sm md:text-base">
        Website bukan cuma gaya-gayaan, tapi senjata rahasia untuk bisnis maju.
      </p>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* CARD 1 */}
        <div className="bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 rounded-2xl p-6 text-left hover:border-amber-400/30 transition">
          <div className="text-amber-400 mb-3">★★★★★</div>

          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6">
            "Website travel agency saya jadi rujukan utama pelanggan. Tampilan
            di HP sangat smooth!"
          </p>

          <div className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/40?img=1"
              alt="Lestari Budi"
              className="w-10 h-10 rounded-full"
            />

            <div>
              <h4 className="text-sm font-semibold text-black dark:text-white">
                Lestari Budi
              </h4>

              <p className="text-xs text-gray-500 dark:text-gray-400">
                Lancar Jaya Travel
              </p>
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 rounded-2xl p-6 text-left hover:border-amber-400/30 transition">
          <div className="text-amber-400 mb-3">★★★★★</div>

          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6">
            "Custom project dikerjakan dengan sangat detail. Fitur yang saya
            minta semuanya berfungsi sempurna."
          </p>

          <div className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/40?img=2"
              alt="Budi Kusuma"
              className="w-10 h-10 rounded-full"
            />

            <div>
              <h4 className="text-sm font-semibold text-black dark:text-white">
                Budi Kusuma
              </h4>

              <p className="text-xs text-gray-500 dark:text-gray-400">
                E-Learning Platform
              </p>
            </div>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 rounded-2xl p-6 text-left hover:border-amber-400/30 transition">
          <div className="text-amber-400 mb-3">★★★★★</div>

          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6">
            "Awalnya ragu, tapi setelah jadi hasilnya jauh melampaui ekspektasi.
            TOP!"
          </p>

          <div className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/40?img=3"
              alt="Agus Salim"
              className="w-10 h-10 rounded-full"
            />

            <div>
              <h4 className="text-sm font-semibold text-black dark:text-white">
                Agus Salim
              </h4>

              <p className="text-xs text-gray-500 dark:text-gray-400">
                Catering Berkah
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
