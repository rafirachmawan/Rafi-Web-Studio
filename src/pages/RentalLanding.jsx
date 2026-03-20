import { rental } from "../data/rental";

export default function RentalLanding() {
  const data = rental;
  const phone = "628123456789";

  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen font-sans">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
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

      {/* HERO (JUALAN LANGSUNG) */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* TEXT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Sewa Mobil
              <span className="text-amber-400"> Cepat & Mudah</span>
            </h1>

            <p className="text-gray-400 mb-8">
              Tanpa ribet, tanpa lama. Pilih mobil, booking, langsung jalan.
            </p>

            <div className="flex gap-4">
              <a
                href="#mobil"
                className="bg-amber-500 text-black px-6 py-3 rounded-xl font-semibold hover:bg-amber-600 transition"
              >
                Lihat Mobil
              </a>

              <a
                href={`https://wa.me/${phone}`}
                className="border border-white/20 px-6 py-3 rounded-xl hover:bg-white hover:text-black transition"
              >
                Chat Sekarang
              </a>
            </div>

            {/* TRUST BADGE */}
            <div className="flex gap-6 mt-8 text-sm text-gray-400">
              <span>✔ 100+ Pelanggan</span>
              <span>✔ Respon Cepat</span>
              <span>✔ Harga Terbaik</span>
            </div>
          </div>

          {/* IMAGE */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* BENEFIT 🔥 */}
      <section className="px-6 py-16 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-amber-400">Cepat</h3>
            <p className="text-gray-400 text-sm">
              Booking hanya dalam hitungan menit
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-amber-400">
              Terpercaya
            </h3>
            <p className="text-gray-400 text-sm">Unit terawat & siap jalan</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-amber-400">
              Harga Terbaik
            </h3>
            <p className="text-gray-400 text-sm">Tanpa biaya tersembunyi</p>
          </div>
        </div>
      </section>

      {/* MOBIL */}
      <RentalSection />

      {/* CTA BOTTOM 🔥 */}
      <section className="px-6 py-20 text-center bg-amber-500 text-black">
        <h2 className="text-3xl font-bold mb-4">Butuh Mobil Sekarang?</h2>

        <p className="mb-6">Hubungi kami dan dapatkan mobil terbaik hari ini</p>

        <a
          href={`https://wa.me/${phone}`}
          className="bg-black text-white px-8 py-3 rounded-xl font-medium"
        >
          Booking via WhatsApp
        </a>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-white/10">
        <div className="text-center text-gray-500 text-sm py-6">
          © {new Date().getFullYear()} {data.name}
        </div>
      </footer>
    </div>
  );
}

/* ========================= */
/* 🚗 MOBIL SECTION */
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
    <section id="mobil" className="px-6 py-24 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Pilih Mobil Anda</h2>
          <p className="text-gray-500">Siap digunakan kapan saja</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {cars.map((car, i) => {
            const wa = `https://wa.me/${phone}?text=${encodeURIComponent(
              `Halo, saya ingin sewa ${car.name}`,
            )}`;

            return (
              <div
                key={i}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2"
              >
                <div className="absolute top-3 left-3 bg-amber-400 text-black text-xs px-3 py-1 rounded-full font-semibold">
                  Ready
                </div>

                <div className="overflow-hidden">
                  <img
                    src={car.img}
                    className="h-52 w-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{car.name}</h3>

                  <div className="mb-5">
                    <span className="text-2xl font-bold">{car.price}</span>
                    <span className="text-gray-400 text-sm ml-1">/ hari</span>
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
