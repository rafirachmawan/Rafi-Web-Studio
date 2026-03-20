import { hotel } from "../data/hotel";

export default function HotelLanding() {
  const data = hotel;

  const phone = "628123456789";

  return (
    <div className="bg-[#0b0b0b] text-white min-h-screen font-sans pt-20">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold tracking-wide">
            <span className="text-amber-400">HOTEL</span> LUXURY
          </h1>

          <a
            href={`https://wa.me/${phone}`}
            className="bg-white text-black px-5 py-2 rounded-lg font-medium hover:bg-gray-200 transition"
          >
            Booking
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative h-[90vh] flex items-center justify-center text-center px-6 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1566665797739-1674de7a421a"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />

        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

        <div className="relative z-10 max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-semibold mb-6">
            {data.hero.title}
          </h1>

          <p className="text-gray-300 mb-8 text-lg">{data.hero.subtitle}</p>

          <a
            href="#room"
            className="bg-white text-black px-8 py-3 rounded-xl font-medium hover:bg-gray-200 transition"
          >
            Lihat Kamar
          </a>
        </div>
      </section>

      {/* ROOM */}
      <HotelSection />

      {/* FOOTER */}
      <footer className="bg-[#050505] border-t border-white/10 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
          <div>
            <h2 className="text-xl font-bold mb-4 text-amber-400">
              {data.name}
            </h2>
            <p className="text-gray-400 text-sm">
              Pengalaman menginap yang nyaman dan berkelas.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Menu</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>Home</li>
              <li>Rooms</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Contact</h3>
            <p className="text-gray-400 text-sm mb-4">📞 {phone}</p>

            <a
              href={`https://wa.me/${phone}`}
              className="bg-white text-black px-5 py-2 rounded-lg text-sm hover:bg-gray-200 transition"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm py-6 border-t border-white/5">
          © {new Date().getFullYear()} {data.name}
        </div>
      </footer>
    </div>
  );
}

/* ========================= */
/* 🏨 HOTEL SECTION */
/* ========================= */

function HotelSection() {
  const phone = "628123456789";

  const rooms = [
    {
      name: "Standard Room",
      price: "300K",
      img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a",
    },
    {
      name: "Deluxe Room",
      price: "500K",
      img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    },
    {
      name: "Suite Room",
      price: "900K",
      img: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
    },
  ];

  return (
    <section id="room" className="px-6 py-24 bg-[#0b0b0b]">
      <div className="max-w-6xl mx-auto">
        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-4">Kamar Eksklusif</h2>
          <p className="text-gray-400">
            Pilihan terbaik untuk pengalaman menginap Anda
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10">
          {rooms.map((room, i) => {
            const wa = `https://wa.me/${phone}?text=${encodeURIComponent(
              `Halo, saya ingin booking ${room.name}`,
            )}`;

            return (
              <div
                key={i}
                className="group rounded-2xl overflow-hidden bg-[#141414] border border-white/10 hover:border-white/20 transition duration-300"
              >
                {/* IMAGE */}
                <div className="overflow-hidden">
                  <img
                    src={room.img}
                    className="h-60 w-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{room.name}</h3>

                  <div className="mb-5">
                    <span className="text-2xl font-bold">{room.price}</span>
                    <span className="text-gray-400 ml-1 text-sm">/ malam</span>
                  </div>

                  <div className="flex gap-3 text-sm text-gray-400 mb-6">
                    <span>AC</span>
                    <span>WiFi</span>
                    <span>Breakfast</span>
                  </div>

                  <a
                    href={wa}
                    className="block text-center bg-white text-black py-3 rounded-xl font-medium hover:bg-gray-200 transition"
                  >
                    Booking Sekarang
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
