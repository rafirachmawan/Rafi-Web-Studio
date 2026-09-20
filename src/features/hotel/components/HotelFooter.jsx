// src/components/landing/hotel/HotelFooter.jsx
// Luxury hotel footer for Crown Victoria Hotel

export function HotelFooter({ name = "Crown Victoria Hotel", waLink }) {
  return (
    <footer className="bg-gradient-to-br from-purple-50 via-violet-50 to-fuchsia-50 border-t border-zinc-200 mt-20">
      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(147, 51, 234, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10 text-center md:text-left items-start justify-items-center">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-purple-600 tracking-wide">
            {name}
          </h2>
          <p className="text-zinc-600 text-sm leading-relaxed">
            Menghadirkan kemewahan klasik dengan pelayanan premium untuk setiap
            momen spesial Anda di Tulungagung.
          </p>
        </div>

        {/* Menu Links */}
        <div>
          <h3 className="font-semibold mb-4 text-zinc-900">Quick Links</h3>
          <ul className="space-y-2 text-zinc-600 text-sm">
            <li>
              <a href="#rooms" className="hover:text-purple-600 transition">
                Rooms & Suites
              </a>
            </li>
            <li>
              <a
                href="#facilities"
                className="hover:text-purple-600 transition"
              >
                Ballroom & Events
              </a>
            </li>
            <li>
              <a
                href="#facilities"
                className="hover:text-purple-600 transition"
              >
                Facilities
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-purple-600 transition">
                Gallery
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Booking */}
        <div>
          <h3 className="font-semibold mb-4 text-zinc-900">Contact Us</h3>
          <p className="text-zinc-600 text-sm mb-2">
            📍 Jl. Dr. Soetomo No.143, Tulungagung
          </p>
          <p className="text-zinc-600 text-sm mb-4">📞 +62 851-9622-1716</p>

          <a
            href={waLink}
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg text-sm font-bold transition shadow-md hover:shadow-lg"
          >
            Book Now
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 text-center text-zinc-500 text-xs sm:text-sm py-6 border-t border-zinc-200 uppercase tracking-widest">
        © {new Date().getFullYear()} {name}. All rights reserved.
      </div>
    </footer>
  );
}
