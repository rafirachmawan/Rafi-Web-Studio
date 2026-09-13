// src/components/landing/hotel/HotelFooter.jsx
// Luxury hotel footer for Crown Victoria Hotel

export function HotelFooter({ name = "Crown Victoria Hotel", waLink }) {
  return (
    <footer className="bg-gradient-to-b from-[#0B0B0B] to-[#050505] border-t border-white/10 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10 text-center md:text-left items-start justify-items-center">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-purple-400 tracking-wide">
            {name}
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Menghadirkan kemewahan klasik dengan pelayanan premium untuk setiap
            momen spesial Anda di Tulungagung.
          </p>
        </div>

        {/* Menu Links */}
        <div>
          <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#room" className="hover:text-purple-400 transition">
                Rooms & Suites
              </a>
            </li>
            <li>
              <a href="#ballroom" className="hover:text-purple-400 transition">
                Ballroom & Events
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400 transition">
                Facilities
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400 transition">
                Gallery
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Booking */}
        <div>
          <h3 className="font-semibold mb-4 text-white">Contact Us</h3>
          <p className="text-gray-400 text-sm mb-2">📍 Jl. Dr. Soetomo No.143, Tulungagung</p>
          <p className="text-gray-400 text-sm mb-4">📞 +62 851-9622-1716</p>
          
          <a
            href={waLink}
            className="inline-block bg-purple-500 text-black px-6 py-2 rounded-lg text-sm font-bold hover:bg-purple-600 transition shadow-lg shadow-purple-500/20"
          >
            Book Now
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-xs py-6 border-t border-white/5 uppercase tracking-widest">
        © {new Date().getFullYear()} {name}. All rights reserved.
      </div>
    </footer>
  );
}
