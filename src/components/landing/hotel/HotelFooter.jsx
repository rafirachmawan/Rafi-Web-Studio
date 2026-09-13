// src/components/landing/hotel/HotelFooter.jsx
// Luxury hotel footer for Crown Victoria Hotel

export function HotelFooter({ name = "Crown Victoria Hotel", waLink }) {
  return (
    <footer className="bg-[#0a0a0c] border-t border-zinc-800 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10 text-center md:text-left items-start justify-items-center">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-amber-500 tracking-wide">
            {name}
          </h2>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Menghadirkan kemewahan klasik dengan pelayanan premium untuk setiap
            momen spesial Anda di Tulungagung.
          </p>
        </div>

        {/* Menu Links */}
        <div>
          <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-zinc-400 text-sm">
            <li>
              <a href="#rooms" className="hover:text-amber-500 transition">
                Rooms & Suites
              </a>
            </li>
            <li>
              <a href="#facilities" className="hover:text-amber-500 transition">
                Ballroom & Events
              </a>
            </li>
            <li>
              <a href="#facilities" className="hover:text-amber-500 transition">
                Facilities
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-amber-500 transition">
                Gallery
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Booking */}
        <div>
          <h3 className="font-semibold mb-4 text-white">Contact Us</h3>
          <p className="text-zinc-400 text-sm mb-2">📍 Jl. Dr. Soetomo No.143, Tulungagung</p>
          <p className="text-zinc-400 text-sm mb-4">📞 +62 851-9622-1716</p>
          
          <a
            href={waLink}
            className="inline-block bg-amber-600 text-white px-6 py-2 rounded-lg text-sm font-bold hover:bg-amber-500 transition shadow-lg"
          >
            Book Now
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-zinc-500 text-xs py-6 border-t border-zinc-800 uppercase tracking-widest">
        © {new Date().getFullYear()} {name}. All rights reserved.
      </div>
    </footer>
  );
}
