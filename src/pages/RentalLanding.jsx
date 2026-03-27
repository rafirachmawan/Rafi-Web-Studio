import { rental } from "../data/rental";
import { useState } from "react";
import mobilImg from "../assets/RentalMobil2.png";
import mobil1 from "../assets/mobil1.png";

import { useEffect } from "react";

export default function RentalLanding() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <section className="px-6 py-28 bg-gradient-to-b from-white to-gray-50 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Apa Kata Mereka?</h2>
          <p className="text-gray-500 mb-12">
            Pengalaman pelanggan yang sudah menggunakan layanan kami
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Andi Pratama",
                text: "Mobil bersih dan nyaman banget, bakal langganan!",
                rating: 5,
                img: "https://randomuser.me/api/portraits/men/32.jpg",
              },
              {
                name: "Siti Rahma",
                text: "Pelayanan cepat dan admin sangat responsif!",
                rating: 5,
                img: "https://randomuser.me/api/portraits/women/44.jpg",
                highlight: true,
              },
              {
                name: "Budi Santoso",
                text: "Harga murah tapi kualitas mobil top banget!",
                rating: 5,
                img: "https://randomuser.me/api/portraits/men/65.jpg",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`p-6 rounded-3xl border transition duration-500 backdrop-blur-lg ${
                  item.highlight
                    ? "bg-gradient-to-br from-blue-500 to-blue-400 text-white scale-105 shadow-2xl"
                    : "bg-white border-gray-200 hover:shadow-xl hover:-translate-y-2"
                }`}
              >
                {/* AVATAR */}
                <div className="flex justify-center mb-4">
                  <img
                    src={item.img}
                    className="w-14 h-14 rounded-full object-cover border-2 border-white shadow"
                  />
                </div>

                {/* TEXT */}
                <p
                  className={`text-sm mb-4 italic ${
                    item.highlight ? "text-white" : "text-gray-600"
                  }`}
                >
                  "{item.text}"
                </p>

                {/* RATING */}
                <div className="flex justify-center mb-2 text-yellow-400">
                  {"★★★★★"}
                </div>

                {/* NAME */}
                <h4
                  className={`font-semibold ${
                    item.highlight ? "text-white" : "text-gray-800"
                  }`}
                >
                  {item.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-28 bg-gradient-to-b from-white to-gray-50 text-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Pertanyaan Umum
          </h2>
          <p className="text-center text-gray-500 mb-12">
            Jawaban cepat untuk pertanyaan yang sering ditanyakan
          </p>

          <FAQItem
            question="Apakah bisa lepas kunci?"
            answer="Ya, bisa lepas kunci dengan syarat memiliki KTP, SIM, dan verifikasi data."
          />

          <FAQItem
            question="Apakah include sopir?"
            answer="Kami menyediakan opsi dengan sopir atau lepas kunci sesuai kebutuhan Anda."
          />

          <FAQItem
            question="Bagaimana sistem pembayaran?"
            answer="Pembayaran bisa dilakukan via transfer bank atau cash saat serah terima kendaraan."
          />

          <FAQItem
            question="Apakah bisa booking mendadak?"
            answer="Bisa, selama unit tersedia kami siap melayani booking kapan saja."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center bg-white text-black">
        <h2 className="text-3xl font-bold mb-4">Mau Jalan Hari Ini? 🚗</h2>

        <p className="mb-6 text-gray-600">
          Booking sekarang, mobil siap dalam hitungan menit
        </p>

        <a
          href={`https://wa.me/${phone}`}
          className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition shadow-lg hover:scale-105"
        >
          Booking via WhatsApp
        </a>
      </section>

      {/* FOOTER */}
      <footer className="relative bg-gradient-to-b from-[#0b1220] to-black border-t border-white/10">
        {/* GLOW EFFECT */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[200px] bg-blue-500/10 blur-[100px] rounded-full"></div>

        <div className="max-w-6xl mx-auto px-6 py-14 relative z-10 grid md:grid-cols-3 gap-10">
          {/* BRAND */}
          <div>
            <h2 className="text-xl font-bold mb-3">
              <span className="text-blue-400">RENTAL</span> JAYA
            </h2>

            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Solusi sewa mobil cepat, aman, dan terpercaya untuk kebutuhan
              perjalanan Anda.
            </p>
          </div>

          {/* MENU */}
          <div>
            <h3 className="font-semibold text-white mb-4">Menu</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#mobil" className="hover:text-blue-400 transition">
                  Mobil
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Testimoni
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-semibold text-white mb-4">Kontak</h3>

            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-blue-400">💬</span>
                <a
                  href={`https://wa.me/${phone}`}
                  target="_blank"
                  className="hover:text-blue-400 transition"
                >
                  WhatsApp
                </a>
              </li>

              <li className="flex items-center gap-2">
                <span className="text-blue-400">📍</span>
                <span>Indonesia</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="text-blue-400">✉️</span>
                <span>rentaljaya@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 text-center py-6 text-gray-500 text-sm">
          © {new Date().getFullYear()} Rental Jaya. All rights reserved.
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
  const [activeCategory, setActiveCategory] = useState("penumpang");

  const cars = [
    {
      name: "Toyota Avanza",
      price: "300K",
      category: "penumpang",
      img: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2",
    },
    {
      name: "Toyota Innova",
      price: "500K",
      category: "penumpang",
      img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d",
    },
    {
      name: "Bus Pariwisata",
      price: "1.5JT",
      category: "bus",
      img: "https://images.unsplash.com/photo-1502877338535-766e1452684a",
    },
    {
      name: "Hiace",
      price: "800K",
      category: "travel",
      img: "https://images.unsplash.com/photo-1593941707882-a56bbc8c8df9",
    },
    {
      name: "BMW Sport",
      price: "2JT",
      category: "sport",
      img: "https://images.unsplash.com/photo-1542362567-b07e54358753",
    },
  ];

  const filteredCars = cars.filter((car) => car.category === activeCategory);

  return (
    <section id="mobil" className="px-6 py-24 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Pilih Mobil Anda</h2>
          <p className="text-gray-500 mb-6">Siap digunakan kapan saja</p>

          <div className="inline-flex flex-wrap justify-center gap-3 p-2 bg-white/60 backdrop-blur-md rounded-full shadow-md">
            {[
              { label: "Mobil Penumpang", value: "penumpang" },
              { label: "Bus", value: "bus" },
              { label: "Travel", value: "travel" },
              { label: "Mobil Sport", value: "sport" },
            ].map((cat, i) => (
              <button
                key={i}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeCategory === cat.value
                    ? "bg-gradient-to-r from-blue-500 to-blue-400 text-white shadow-lg scale-105"
                    : "bg-white text-gray-600 border-gray-200 hover:border-blue-400 hover:text-blue-500 hover:scale-105"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {filteredCars.map((car, i) => {
            const wa = `https://wa.me/${phone}?text=${encodeURIComponent(
              `Halo, saya ingin sewa ${car.name}`,
            )}`;

            return (
              <div
                key={i}
                className="group bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-3 border border-white/10 hover:border-blue-400"
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

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-4 border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-6 py-4 text-left font-medium hover:bg-gray-50 transition"
      >
        <span>{question}</span>
        <span className="text-blue-500 text-xl">{open ? "−" : "+"}</span>
      </button>

      <div
        className={`px-6 overflow-hidden transition-all duration-300 ${
          open ? "max-h-40 py-2" : "max-h-0"
        }`}
      >
        <p className="text-gray-600 text-sm">{answer}</p>
      </div>
    </div>
  );
}
