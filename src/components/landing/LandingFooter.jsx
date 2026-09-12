// src/components/landing/LandingFooter.jsx
// Reusable landing page footer components

export function LandingFooterGeneric({ data, waLink }) {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10 items-start justify-items-center text-center md:text-left">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4">{data.name}</h2>
          <p className="text-gray-400 text-sm">
            Menyajikan kopi terbaik dengan cita rasa premium dan suasana
            nyaman untuk setiap momen Anda.
          </p>
        </div>

        {/* Menu */}
        <div>
          <h3 className="font-semibold mb-4">Menu</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#menu" className="hover:text-white">
                Coffee
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Ambience
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>
          <p className="text-gray-400 text-sm mb-2">📍 Tulungagung</p>
          <p className="text-gray-400 text-sm mb-4">📞 0812-3456-789</p>

          <a
            href={waLink}
            className="inline-block bg-amber-500 px-5 py-2 rounded-lg text-sm font-medium hover:bg-amber-600 transition"
          >
            Chat WhatsApp
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm py-6 border-t border-white/5">
        © {new Date().getFullYear()} {data.name}. All rights reserved.
      </div>
    </footer>
  );
}

export function LandingFooterSchool({ data, waLink }) {
  return (
    <footer className="bg-gradient-to-b from-[#020617] to-[#020617] border-t border-white/10 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-400">
            {data.name}
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Sekolah modern berbasis teknologi yang mencetak generasi siap
            kerja, kreatif, dan berdaya saing tinggi.
          </p>
        </div>

        {/* Menu */}
        <div>
          <h3 className="font-semibold mb-4 text-white">Menu</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Beranda
              </a>
            </li>
            <li>
              <a href="#program" className="hover:text-blue-400 transition">
                Program
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Kontak
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4 text-white">Kontak</h3>

          <p className="text-gray-400 text-sm mb-2">📍 Tulungagung</p>

          <p className="text-gray-400 text-sm mb-4">📞 0812-3456-789</p>

          <a
            href={waLink}
            className="inline-block bg-blue-500 px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition shadow-md"
          >
            Hubungi Kami
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm py-6 border-t border-white/5">
        © {new Date().getFullYear()} {data.name}. All rights reserved.
      </div>
    </footer>
  );
}
