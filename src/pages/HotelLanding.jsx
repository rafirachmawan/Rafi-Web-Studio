import { hotel } from "../data/hotel";

export default function HotelLanding() {
  const data = hotel;
  const phone = "628123456789";

  return (
    <div className="bg-[#0b0b0b] text-white min-h-screen font-sans">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-lg tracking-[0.2em] font-light">
            <span className="text-amber-400">HOTEL</span> LUXURY
          </h1>

          <a
            href={`https://wa.me/${phone}`}
            className="border border-white/20 px-5 py-2 rounded-full text-sm hover:bg-white hover:text-black transition"
          >
            Booking
          </a>
        </div>
      </nav>

      {/* HERO (CINEMATIC) */}
      <section className="relative h-[100vh] flex items-center px-6 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1566665797739-1674de7a421a"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />

        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>

        <div className="relative z-10 max-w-xl">
          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6">
            {data.hero.title}
          </h1>

          <p className="text-gray-300 mb-8 text-lg">{data.hero.subtitle}</p>

          <a
            href="#room"
            className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition"
          >
            Explore Rooms
          </a>
        </div>
      </section>

      {/* EXPERIENCE 🔥 */}
      <section className="px-6 py-24 bg-[#111]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="text-lg font-light mb-3 text-amber-400">
              Luxury Rooms
            </h3>
            <p className="text-gray-400 text-sm">
              Kamar elegan dengan desain modern & nyaman
            </p>
          </div>

          <div>
            <h3 className="text-lg font-light mb-3 text-amber-400">
              Premium Service
            </h3>
            <p className="text-gray-400 text-sm">
              Pelayanan terbaik untuk pengalaman menginap sempurna
            </p>
          </div>

          <div>
            <h3 className="text-lg font-light mb-3 text-amber-400">
              Strategic Location
            </h3>
            <p className="text-gray-400 text-sm">
              Lokasi strategis & mudah diakses
            </p>
          </div>
        </div>
      </section>

      {/* ROOM */}
      <HotelSection />

      {/* CTA (SOFT SELL) */}
      <section className="px-6 py-24 text-center">
        <h2 className="text-3xl font-light mb-6">
          Experience Comfort & Luxury
        </h2>

        <a
          href={`https://wa.me/${phone}`}
          className="border border-white/30 px-8 py-3 rounded-full hover:bg-white hover:text-black transition"
        >
          Book Your Stay
        </a>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#050505] border-t border-white/10">
        <div className="text-center text-gray-500 text-sm py-6">
          © {new Date().getFullYear()} {data.name}
        </div>
      </footer>
    </div>
  );
}

/* ========================= */
/* 🏨 ROOM SECTION (LUXURY) */
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
        <div className="text-center mb-20">
          <h2 className="text-4xl font-light mb-4 tracking-wide">Our Rooms</h2>
          <p className="text-gray-400">Designed for comfort & elegance</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {rooms.map((room, i) => {
            const wa = `https://wa.me/${phone}?text=${encodeURIComponent(
              `Halo, saya ingin booking ${room.name}`,
            )}`;

            return (
              <div key={i} className="group overflow-hidden rounded-2xl">
                {/* IMAGE */}
                <div className="overflow-hidden">
                  <img
                    src={room.img}
                    className="h-72 w-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                {/* CONTENT */}
                <div className="mt-4">
                  <h3 className="text-xl font-light mb-1">{room.name}</h3>

                  <p className="text-gray-400 text-sm mb-3">
                    {room.price} / malam
                  </p>

                  <a
                    href={wa}
                    className="text-sm text-amber-400 hover:underline"
                  >
                    Book Now →
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
