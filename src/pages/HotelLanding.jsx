import { hotel } from "../data/hotel";
import { useEffect } from "react";

export default function HotelLanding() {
  const data = hotel;
  const phone = "628123456789";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#0a0f1a] via-[#0f172a] to-black text-white min-h-screen font-sans">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0f1a]/70 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-lg tracking-[0.2em] font-light">
            <span className="text-amber-400">HOTEL</span> LUXURY
          </h1>

          <a
            href={`https://wa.me/${phone}`}
            className="border border-white/20 px-5 py-2 rounded-full text-sm hover:bg-amber-400 hover:text-black transition"
          >
            Booking
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative h-[100vh] flex items-center px-6 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1566665797739-1674de7a421a"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />

        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#0a0f1a]/70 to-[#0a0f1a]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>

        <div className="relative z-10 max-w-xl">
          <h1 className="text-5xl md:text-6xl font-light leading-[1.2] pb-2 mb-6 bg-gradient-to-r from-white to-amber-300 bg-clip-text text-transparent">
            {data.hero.title}
          </h1>

          <p className="text-gray-300 mb-8 text-lg">{data.hero.subtitle}</p>

          <a
            href="#room"
            className="bg-amber-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-amber-300 transition shadow-lg"
          >
            Explore Rooms
          </a>
        </div>
      </section>

      {/* 🔥 QUICK BOOKING */}
      <section className="px-6 mt-[-80px] md:mt-[-120px] relative z-10">
        <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
          <div className="grid md:grid-cols-4 gap-4">
            <input
              type="date"
              className="bg-white/10 px-4 py-3 rounded-lg text-sm outline-none focus:ring-2 focus:ring-amber-400"
            />
            <input
              type="date"
              className="bg-white/10 px-4 py-3 rounded-lg text-sm outline-none focus:ring-2 focus:ring-amber-400"
            />
            <input
              type="number"
              placeholder="Guests"
              className="bg-white/10 px-4 py-3 rounded-lg text-sm outline-none focus:ring-2 focus:ring-amber-400"
            />

            <a
              href={`https://wa.me/${phone}`}
              className="bg-amber-400 text-black flex items-center justify-center rounded-lg font-semibold"
            >
              Check Availability
            </a>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="px-6 py-24 bg-[#0f172a]">
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

      {/* 🖼️ GALLERY */}
      <section className="px-6 py-24 bg-[#0a0f1a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light text-center mb-12">
            Hotel Ambience
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <img
              src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa"
              className="rounded-xl object-cover h-64 w-full"
            />
            <img
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
              className="rounded-xl object-cover h-64 w-full"
            />
            <img
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
              className="rounded-xl object-cover h-64 w-full"
            />
          </div>
        </div>
      </section>

      {/* 💬 TESTIMONIAL */}
      <section className="px-6 py-24 bg-[#0f172a] text-center">
        <h2 className="text-4xl font-light mb-12">Guest Experience</h2>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-amber-400/40 transition">
            <p className="italic">"Pelayanan sangat memuaskan!"</p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-amber-400/40 transition">
            <p className="italic">"Kamar bersih & nyaman"</p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-amber-400/40 transition">
            <p className="italic">"Lokasi strategis banget"</p>
          </div>
        </div>
      </section>

      {/* 📍 LOCATION */}
      <section className="px-6 py-24 bg-[#0a0f1a]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-light mb-4">Visit Our Hotel</h2>

            <p className="text-gray-400 mb-6">
              Nikmati pengalaman menginap terbaik di lokasi strategis dengan
              fasilitas lengkap.
            </p>

            <p className="text-gray-300 text-sm mb-2">
              📍 Jl. Hotel No. 123, Indonesia
            </p>
            <p className="text-gray-300 text-sm mb-6">
              🕒 Check-in: 14.00 | Check-out: 12.00
            </p>

            <a
              href="https://maps.google.com"
              className="border border-white/30 px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
            >
              Open Maps
            </a>
          </div>

          <iframe
            className="w-full h-[350px] rounded-2xl"
            src="https://maps.google.com/maps?q=jakarta&t=&z=13&ie=UTF8&iwloc=&output=embed"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 text-center bg-gradient-to-r from-[#0a0f1a] via-[#0f172a] to-black">
        <h2 className="text-3xl font-light mb-6 text-white">
          Experience Comfort & Luxury
        </h2>

        <a
          href={`https://wa.me/${phone}`}
          className="bg-amber-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-amber-300 transition shadow-lg"
        >
          Book Your Stay
        </a>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#020617] border-t border-white/10">
        <div className="text-center text-gray-500 text-sm py-6">
          © {new Date().getFullYear()} {data.name}
        </div>
      </footer>
    </div>
  );
}

/* ROOM SECTION (TETAP PUNYA KAMU) */
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
    <section id="room" className="px-6 py-24 bg-[#0a0f1a]">
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
              <div
                key={i}
                className="group bg-white/5 backdrop-blur-xl p-4 rounded-2xl border border-white/10 hover:border-amber-400/40 transition hover:-translate-y-2"
              >
                <div className="overflow-hidden">
                  <img
                    src={room.img}
                    className="h-72 w-full object-cover rounded-xl group-hover:scale-110 transition duration-700"
                  />
                </div>

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
