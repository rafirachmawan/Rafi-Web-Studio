export default function SolutionSection() {
  return (
    <>
      {/* TITLE */}
      <div className="text-center mb-24">
        {/* BADGE */}
        <div className="inline-flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-base md:text-lg font-semibold mb-8 shadow-[0_0_25px_rgba(255,180,0,0.2)] backdrop-blur-md">
          <span className="text-lg md:text-xl">✔</span>
          Solusi Kami
        </div>

        {/* TITLE */}
        <h2 className="text-2xl md:text-4xl font-heading font-bold tracking-tight leading-snug max-w-2xl mx-auto text-black dark:text-white">
          Kami Tidak Hanya Membuat Website.
          <br />
          <span className="text-amber-400">
            Kami Membuat Bisnis Kamu Terlihat Profesional.
          </span>
        </h2>

        {/* DESC */}
        <p className="text-gray-600 dark:text-gray-400 mt-6">
          Setiap website yang kami buat dirancang untuk:
        </p>
      </div>

      {/* BENEFIT */}
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {/* CARD 1 */}
        <div className="bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 rounded-2xl p-6">
          <div className="w-12 h-12 mb-4 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 text-xl">
            🛡️
          </div>

          <h4 className="font-heading font-semibold text-lg mb-2 tracking-tight text-black dark:text-white">
            Meningkatkan Kepercayaan
          </h4>

          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Desain modern dan bersih yang membuat bisnis kamu terlihat serius
            dan terpercaya.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 rounded-2xl p-6">
          <div className="w-12 h-12 mb-4 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 text-xl">
            💬
          </div>

          <h4 className="font-heading font-semibold text-lg mb-2 tracking-tight text-black dark:text-white">
            Mempermudah Pelanggan Menghubungi
          </h4>

          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Tombol WhatsApp langsung, Google Maps terintegrasi, dan navigasi
            yang simpel.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 rounded-2xl p-6">
          <div className="w-12 h-12 mb-4 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 text-xl">
            📱
          </div>

          <h4 className="font-heading font-semibold text-lg mb-2 tracking-tight text-black dark:text-white">
            Mobile Friendly 100%
          </h4>

          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Mayoritas pelanggan membuka dari HP. Website kamu akan tampil
            sempurna di semua perangkat.
          </p>
        </div>

        {/* CARD 4 */}
        <div className="bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 rounded-2xl p-6">
          <div className="w-12 h-12 mb-4 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 text-xl">
            🔍
          </div>

          <h4 className="font-heading font-semibold text-lg mb-2 tracking-tight text-black dark:text-white">
            Siap Tampil di Google
          </h4>

          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Struktur SEO dasar agar bisnis kamu lebih mudah ditemukan.
          </p>
        </div>

        {/* CARD 5 */}
        <div className="bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 rounded-2xl p-6">
          <div className="w-12 h-12 mb-4 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 text-xl">
            ⚡
          </div>

          <h4 className="font-heading font-semibold text-lg mb-2 tracking-tight text-black dark:text-white">
            Loading Cepat & Aman
          </h4>

          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Website ringan, cepat, dan stabil.
          </p>
        </div>
      </div>

      {/* CUSTOM MESSAGE */}
      <div className="mt-16 mb-24 max-w-4xl mx-auto bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 rounded-3xl px-6 py-8 text-center">
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">
          Kami tidak menggunakan template asal jadi.
        </p>

        <p className="text-lg md:text-xl font-semibold mt-2 bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
          Setiap website disesuaikan dengan identitas bisnis kamu.
        </p>
      </div>
    </>
  );
}
