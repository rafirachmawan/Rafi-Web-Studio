import { rental } from "../data/rental";

export default function RentalLanding() {
  const data = rental;

  const phone = "628123456789";

  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen font-sans pt-20">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-wide">
            <span className="text-amber-400">RENTAL</span> JAYA
          </h1>

          <a
            href={`https://wa.me/${phone}`}
            className="bg-amber-500 text-black px-5 py-2 rounded-lg font-semibold hover:bg-amber-600 transition"
          >
            Booking
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative py-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#111] to-[#1a1a1a]"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Sewa Mobil
            <span className="text-amber-400"> Premium</span>
            <br /> Cepat & Terpercaya
          </h1>

          <p className="text-gray-400 mb-10 text-lg">
            Armada lengkap, kondisi terbaik, siap menemani perjalanan Anda
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="#mobil"
              className="bg-amber-500 text-black px-8 py-3 rounded-xl font-semibold hover:bg-amber-600 transition"
            >
              Lihat Mobil
            </a>

            <a
              href={`https://wa.me/${phone}`}
              className="border border-white/20 px-8 py-3 rounded-xl hover:bg-white hover:text-black transition"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </section>

      {/* MOBIL */}
      <RentalSection />

      {/* FOOTER */}
      <footer className="bg-black border-t border-white/10 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
          <div>
            <h2 className="text-xl font-bold mb-4 text-amber-400">
              {data.name}
            </h2>
            <p className="text-gray-400 text-sm">
              Solusi terbaik untuk kebutuhan transportasi Anda.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Menu</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>Home</li>
              <li>Mobil</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Contact</h3>
            <p className="text-gray-400 text-sm mb-4">📞 {phone}</p>

            <a
              href={`https://wa.me/${phone}`}
              className="bg-amber-500 px-5 py-2 rounded-lg text-sm hover:bg-amber-600 transition"
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
/* 🚗 RENTAL SECTION */
/* ========================= */

function RentalSection() {
  const phone = "628123456789";

  const cars = [
    {
      name: "Toyota Avanza",
      price: "300K",
      img: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2",
    },
    {
      name: "Toyota Innova",
      price: "500K",
      img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d",
    },
    {
      name: "Honda Brio",
      price: "250K",
      img: "https://images.unsplash.com/photo-1549924231-f129b911e442",
    },
  ];

  return (
    <section id="mobil" className="px-6 py-24 bg-[#f5f5f5] text-black">
      <div className="max-w-6xl mx-auto">
        {/* TITLE */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Pilihan Kendaraan</h2>
          <p className="text-gray-500">
            Unit terbaik siap digunakan kapan saja
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10">
          {cars.map((car, i) => {
            const wa = `https://wa.me/${phone}?text=${encodeURIComponent(
              `Halo, saya ingin sewa ${car.name}`,
            )}`;

            return (
              <div
                key={i}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1"
              >
                {/* BADGE */}
                <div className="absolute top-3 left-3 bg-amber-400 text-black text-xs px-3 py-1 rounded-full font-semibold">
                  Ready
                </div>

                {/* IMAGE */}
                <div className="overflow-hidden">
                  <img
                    src={car.img}
                    className="h-52 w-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{car.name}</h3>

                  <div className="mb-5">
                    <span className="text-2xl font-bold">{car.price}</span>
                    <span className="text-gray-400 text-sm ml-1">/ hari</span>
                  </div>

                  <div className="flex gap-3 text-sm text-gray-400 mb-5">
                    <span>AC</span>
                    <span>Manual</span>
                    <span>4 Seat</span>
                  </div>

                  <a
                    href={wa}
                    className="block text-center bg-black text-white py-3 rounded-xl font-medium hover:bg-amber-500 hover:text-black transition"
                  >
                    Sewa Sekarang
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
