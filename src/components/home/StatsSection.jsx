export default function StatsSection() {
  return (
    <div className="text-center mt-10 md:mt-16 mb-16 md:mb-24">
      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 max-w-5xl mx-auto">
        {/* ITEM 1 */}
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 text-center hover:border-amber-400/30 transition">
          <h2 className="text-4xl md:text-5xl font-bold text-white">50+</h2>

          <p className="text-gray-400 mt-2 text-sm md:text-base">
            Proyek Selesai
          </p>
        </div>

        {/* ITEM 2 */}
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 text-center hover:border-amber-400/30 transition">
          <h2 className="text-4xl md:text-5xl font-bold text-white">99%</h2>

          <p className="text-gray-400 mt-2 text-sm md:text-base">
            Kepuasan Klien
          </p>
        </div>

        {/* ITEM 3 */}
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 text-center hover:border-amber-400/30 transition">
          <h2 className="text-4xl md:text-5xl font-bold text-white">24/7</h2>

          <p className="text-gray-400 mt-2 text-sm md:text-base">
            Dukungan Teknis
          </p>
        </div>
      </div>

      {/* BADGE */}
      <div className="inline-block px-6 py-3 rounded-full border border-amber-400/40 bg-amber-400/10 text-amber-400 text-base md:text-lg font-medium mb-8 shadow-[0_0_20px_rgba(255,180,0,0.15)]">
        ⚠️ Realita Pasar Digital
      </div>

      {/* TITLE */}
      <h2 className="text-2xl md:text-4xl font-heading font-bold tracking-tight leading-snug max-w-2xl mx-auto">
        Kenapa Banyak <span className="text-amber-400">UMKM</span>
        Kalah Saing Secara Online?
      </h2>

      {/* DESC */}
      <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
        Hari ini pelanggan tidak langsung datang ke toko. Mereka cari di Google
        dulu. Mereka cek Instagram. Mereka lihat review.
      </p>
    </div>
  );
}
