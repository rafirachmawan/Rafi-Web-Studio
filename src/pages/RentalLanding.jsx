import { rental } from "../data/rental";
import mobilImg from "../assets/RentalMobil2.png";
import mobil1 from "../assets/mobil1.png";

export default function RentalLanding() {
  const data = rental;
  const phone = "628123456789";

  const defaultMsg = encodeURIComponent(
    "Halo, saya ingin sewa mobil. Mohon info lebih lanjut.",
  );

  return (
    <div className="bg-gradient-to-b from-[#0a0f1a] via-[#0b1220] to-black text-white min-h-screen font-sans">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-[#0a0f1a]/80 to-[#0b1220]/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-wide">
            <span className="text-blue-400">RENTAL</span> JAYA
          </h1>

          <a
            href={`https://wa.me/${phone}?text=${defaultMsg}`}
            className="bg-blue-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Booking
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Sewa Mobil
              <span className="text-blue-400"> Cepat & Mudah</span>
            </h1>

            <p className="text-gray-400 mb-8">
              Tanpa ribet, tanpa lama. Pilih mobil, booking, langsung jalan.
            </p>

            <div className="flex gap-4">
              <a
                href="#mobil"
                className="bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 transition"
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

            <div className="flex gap-6 mt-8 text-sm text-gray-400">
              <span>✔ 100+ Pelanggan</span>
              <span>✔ Respon Cepat</span>
              <span>✔ Harga Terbaik</span>
            </div>
          </div>

          <div className="relative">
            <img
              src={mobilImg}
              className="w-full h-[400px] object-contain rounded-2xl shadow-lg"
            />

            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-black/30 rounded-2xl"></div>
          </div>
        </div>
      </section>

      {/* 🔥 QUICK BOOKING */}
      <section className="px-6 mt-10 relative z-10">
        <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/10 hover:border-blue-400 transition">
          <div className="grid md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="📍 Lokasi"
              className="bg-white/10 px-4 py-3 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="date"
              className="bg-white/10 px-4 py-3 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="date"
              className="bg-white/10 px-4 py-3 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500"
            />

            <a
              href={`https://wa.me/${phone}`}
              className="bg-blue-500 text-white flex items-center justify-center rounded-lg font-semibold hover:bg-blue-600 transition"
            >
              Cari Mobil
            </a>
          </div>
        </div>
      </section>

      {/* BENEFIT */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { title: "Cepat", desc: "Booking hanya dalam hitungan menit" },
            { title: "Terpercaya", desc: "Unit terawat & siap jalan" },
            { title: "Harga Terbaik", desc: "Tanpa biaya tersembunyi" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-blue-400 transition hover:-translate-y-2"
            >
              <h3 className="text-lg font-semibold mb-2 text-blue-400">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="px-6 py-28">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div>
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Kenapa Pilih Kami?
            </h2>

            <p className="text-gray-400 mb-8">
              Kami memberikan layanan terbaik dengan mobil berkualitas dan
              pelayanan cepat.
            </p>

            <div className="space-y-6">
              {[
                "Unit selalu dalam kondisi prima",
                "Admin responsif 24 jam",
                "Harga transparan tanpa biaya tambahan",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-blue-500 mt-1"></div>
                  <p className="text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <img
              src={mobil1}
              className="w-[100%] max-h-[300px] object-contain mx-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)]"
            />
          </div>
        </div>
      </section>

      {/* MOBIL */}
      <RentalSection />

      {/* TESTIMONIAL */}
      <section className="px-6 py-20 bg-white text-black text-center">
        <h2 className="text-3xl font-bold mb-10">Testimoni</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-2xl border border-gray-200">
            <p className="text-gray-700 italic">
              "Mobil bersih dan nyaman banget!"
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-2xl border border-gray-200">
            <p>"Pelayanan cepat, recommended!"</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-2xl border border-gray-200">
            <p>"Harga murah tapi kualitas bagus"</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20 bg-white text-black">
        <h2 className="text-3xl font-bold mb-10 text-center">FAQ</h2>

        <div className="max-w-3xl mx-auto space-y-4">
          <div className="bg-gray-100 p-4 rounded-lg border border-gray-200">
            <p className="font-semibold">Apakah bisa lepas kunci?</p>
            <p className="text-gray-600 text-sm">Ya, dengan syarat tertentu</p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg border border-gray-200">
            <p className="font-semibold">Apakah include sopir?</p>
            <p className="text-gray-600 text-sm">Tersedia opsi dengan sopir</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center bg-blue-600 text-white">
        <h2 className="text-3xl font-bold mb-4">Mau Jalan Hari Ini? 🚗</h2>

        <p className="mb-6">
          Booking sekarang, mobil siap dalam hitungan menit
        </p>

        <a
          href={`https://wa.me/${phone}`}
          className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
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
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-3 border border-gray-100"
              >
                <div className="absolute top-3 left-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                  Tersedia
                </div>

                <div className="overflow-hidden">
                  <img
                    src={car.img}
                    className="h-52 w-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold">{car.name}</h3>
                    <span className="text-xs text-gray-400">⭐ 4.9</span>
                  </div>

                  <div className="mb-3">
                    <span className="text-2xl font-bold text-blue-500">
                      {car.price}
                    </span>
                    <span className="text-gray-400 text-sm ml-1">/ hari</span>
                  </div>

                  <ul className="text-sm text-gray-500 mb-4 space-y-1">
                    <li>✔ AC Dingin</li>
                    <li>✔ BBM Irit</li>
                    <li>✔ Full Service</li>
                  </ul>

                  <a
                    href={wa}
                    className="block text-center bg-black text-white py-3 rounded-xl font-medium hover:bg-blue-500 hover:text-white transition"
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
