export default function Footer() {
  return (
    <div id="contact" className="mt-32 border-t border-white/10 pt-16 pb-10">
      <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-3 gap-10 text-left">
        {/* LEFT */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            RAFWEB
            <span className="text-amber-400">.</span>
          </h2>

          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Jasa pembuatan website profesional untuk UMKM, bisnis lokal, dan
            personal branding agar tampil lebih terpercaya dan modern.
          </p>
        </div>

        {/* MENU */}
        <div>
          <h3 className="text-white font-semibold mb-4">Menu</h3>

          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#home" className="hover:text-amber-400">
                Home
              </a>
            </li>

            <li>
              <a href="#demo" className="hover:text-amber-400">
                Demo
              </a>
            </li>

            <li>
              <a href="#proses" className="hover:text-amber-400">
                Proses
              </a>
            </li>

            <li>
              <a href="#harga" className="hover:text-amber-400">
                Harga
              </a>
            </li>

            <li>
              <a href="#testimoni" className="hover:text-amber-400">
                Testimoni
              </a>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-white font-semibold mb-4">Hubungi Kami</h3>

          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <span className="text-amber-400">💬</span>

              <a
                href="https://wa.me/6285707185783"
                target="_blank"
                className="hover:text-amber-400 transition"
              >
                WhatsApp
              </a>
            </li>

            <li className="flex items-center gap-2">
              <span className="text-amber-400">📷</span>

              <span className="hover:text-amber-400 transition cursor-pointer">
                Instagram
              </span>
            </li>

            <li className="flex items-center gap-2">
              <span className="text-amber-400">✉️</span>

              <span className="text-gray-500">rafwebstudio@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* LINE */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs md:text-sm">
        <p>© 2026 RafWeb Studio. All rights reserved.</p>

        <p className="mt-2 md:mt-0">
          Website Profesional untuk Bisnis Modern 🚀
        </p>
      </div>
    </div>
  );
}
