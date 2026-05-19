export default function Footer() {
  return (
    <div
      id="contact"
      className="mt-32 border-t border-black/10 dark:border-white/10 pt-16 pb-10 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-3 gap-10 text-left">
        {/* LEFT */}
        <div className="space-y-4">
          <h2 className="text-xl font-black text-black dark:text-white">
            Gapai<span className="text-amber-500">Digital</span>
          </h2>

          <p className="text-zinc-600 dark:text-zinc-400 text-xs md:text-[13px] leading-relaxed max-w-sm font-semibold">
            Partner digitalisasi tepercaya untuk pembuatan landing page premium, pengembangan aplikasi mobile (Android & iOS), serta pembangunan sistem web kustom guna mengotomatisasi operasional dan meningkatkan pertumbuhan skala bisnis Anda.
          </p>
        </div>

        {/* MENU */}
        <div>
          <h3 className="text-zinc-900 dark:text-white font-extrabold text-xs md:text-sm mb-4 uppercase tracking-wider">
            Menu Utama
          </h3>

          <ul className="space-y-2.5 text-zinc-600 dark:text-zinc-400 text-xs md:text-[13px] font-semibold">
            <li>
              <a href="#home" className="hover:text-amber-400 transition-colors duration-300">
                Home
              </a>
            </li>

            <li>
              <a href="#demo" className="hover:text-amber-400 transition-colors duration-300">
                Portofolio Demo
              </a>
            </li>

            <li>
              <a href="#proses" className="hover:text-amber-400 transition-colors duration-300">
                Alur Kerja
              </a>
            </li>

            <li>
              <a href="#harga" className="hover:text-amber-400 transition-colors duration-300">
                Paket Investasi
              </a>
            </li>

            <li>
              <a href="#testimoni" className="hover:text-amber-400 transition-colors duration-300">
                Kisah Sukses Klien
              </a>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-zinc-900 dark:text-white font-extrabold text-xs md:text-sm mb-4 uppercase tracking-wider">
            Hubungi Kami
          </h3>

          <ul className="space-y-3 text-zinc-600 dark:text-zinc-400 text-xs md:text-[13px] font-semibold">
            <li className="flex items-center gap-2">
              <span className="text-amber-400 text-base">💬</span>
              <a
                href="https://wa.me/6285707185783"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition-colors duration-300"
              >
                WhatsApp Resmi
              </a>
            </li>

            <li className="flex items-center gap-2">
              <span className="text-amber-400 text-base">📷</span>
              <a
                href="https://instagram.com/gapaidigital"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition-colors duration-300"
              >
                Instagram
              </a>
            </li>

            <li className="flex items-center gap-2">
              <span className="text-amber-400 text-base">✉️</span>
              <a
                href="mailto:gapaidigital@gmail.com"
                className="hover:text-amber-400 transition-colors duration-300"
              >
                gapaidigital@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* LINE */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 mt-12 pt-6 border-t border-black/10 dark:border-white/10 flex flex-col md:flex-row justify-between items-center text-zinc-500 dark:text-zinc-500 text-[11px] md:text-xs font-semibold">
        <p>© 2026 GapaiDigital. All rights reserved.</p>

        <p className="mt-2 md:mt-0 flex items-center gap-1.5">
          Solusi Website & Aplikasi Profesional untuk Bisnis Modern 🚀
        </p>
      </div>
    </div>
  );
}
