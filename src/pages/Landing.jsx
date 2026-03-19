import { useState } from "react";

export default function Landing({ data }) {
  const phone = "628123456789";
  const message = `Halo, saya tertarik dengan ${data.name}`;
  const waLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  const [open, setOpen] = useState(false);

  return (
    <div
      className={`${data.theme.bg} text-white min-h-screen font-sans ${
        data.type !== "sekolah" ? "pt-20" : ""
      }`}
    >
      {/* NAVBAR */}

      {data.type !== "sekolah" && (
        <>
          {data.type === "coffee" && <NavbarCoffee waLink={waLink} />}
          {data.type === "rental" && <NavbarRental waLink={waLink} />}
          {data.type === "hotel" && <NavbarHotel waLink={waLink} />}
        </>
      )}
      {/* HERO */}
      {data.type === "coffee" ? (
        <section className="relative h-[100vh] flex items-center justify-center text-center px-6 overflow-hidden">
          {/* BG IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
            className="absolute inset-0 w-full h-full object-cover scale-110"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

          {/* CONTENT */}
          <div className="relative z-10 max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4 font-serif tracking-wide">
              {data.hero.title}
            </h1>

            <p className="text-gray-300 mb-8 text-lg">{data.hero.subtitle}</p>

            <div className="flex justify-center gap-4">
              <a
                href={waLink}
                className="bg-amber-500 hover:bg-amber-600 px-6 py-3 rounded-xl font-medium transition shadow-lg hover:scale-105"
              >
                Order Coffee
              </a>

              <a
                href="#menu"
                className="border border-white/30 px-6 py-3 rounded-xl hover:bg-white/10 transition"
              >
                Lihat Menu
              </a>
            </div>
          </div>
        </section>
      ) : data.type === "rental" ? (
        <section className="relative py-32 px-6 text-center text-white bg-[#0f0f0f] overflow-hidden">
          {/* BACKGROUND */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-[#111] to-[#1a1a1a]"></div>

          {/* CONTENT */}
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
                href={waLink}
                className="border border-white/20 px-8 py-3 rounded-xl hover:bg-white hover:text-black transition"
              >
                Hubungi Kami
              </a>
            </div>
          </div>
        </section>
      ) : data.type === "sekolah" ? (
        <section className="relative h-[90vh] flex items-center justify-center text-center px-6 overflow-hidden">
          {/* BG IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1588072432836-e10032774350"
            className="absolute inset-0 w-full h-full object-cover scale-105"
          />

          {/* OVERLAY GELAP */}
          <div className="absolute inset-0 bg-[#020617]/80"></div>

          {/* GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/60 to-transparent"></div>

          {/* CONTENT */}
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {data.hero.title}
            </h1>

            <p className="text-gray-300 mb-8 text-lg">{data.hero.subtitle}</p>

            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="#program"
                className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-xl font-medium transition shadow-lg hover:scale-105"
              >
                Lihat Program
              </a>

              <a
                href={waLink}
                className="border border-white/30 px-8 py-3 rounded-xl hover:bg-white hover:text-black transition"
              >
                Hubungi Sekolah
              </a>
            </div>
          </div>
        </section>
      ) : (
        <section className="text-center py-24 px-6">
          <h1 className={`text-4xl font-bold ${data.theme.primary}`}>
            {data.hero.title}
          </h1>
          <p className="text-gray-400 mt-4">{data.hero.subtitle}</p>
        </section>
      )}

      {/* SWITCH */}
      {data.type === "coffee" && <CoffeeSection />}
      {data.type === "coffee" && <CoffeeAmbience />}
      {data.type === "rental" && <RentalSection />}
      {data.type === "hotel" && <HotelSection />}
      {data.type === "resto" && <RestoSection />}
      {data.type === "sekolah" && <SekolahSection />}

      {/* CTA */}
      {/* FOOTER */}
      {data.type === "sekolah" ? (
        <footer className="bg-gradient-to-b from-[#020617] to-[#020617] border-t border-white/10 mt-20">
          <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10 text-center md:text-left">
            {/* BRAND */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-blue-400">
                {data.name}
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Sekolah modern berbasis teknologi yang mencetak generasi siap
                kerja, kreatif, dan berdaya saing tinggi.
              </p>
            </div>

            {/* MENU */}
            <div>
              <h3 className="font-semibold mb-4 text-white">Menu</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-blue-400 transition">
                    Beranda
                  </a>
                </li>
                <li>
                  <a href="#program" className="hover:text-blue-400 transition">
                    Program
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition">
                    Kontak
                  </a>
                </li>
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <h3 className="font-semibold mb-4 text-white">Kontak</h3>

              <p className="text-gray-400 text-sm mb-2">📍 Tulungagung</p>

              <p className="text-gray-400 text-sm mb-4">📞 0812-3456-789</p>

              <a
                href={waLink}
                className="inline-block bg-blue-500 px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition shadow-md"
              >
                Hubungi Kami
              </a>
            </div>
          </div>

          {/* COPYRIGHT */}
          <div className="text-center text-gray-500 text-sm py-6 border-t border-white/5">
            © {new Date().getFullYear()} {data.name}. All rights reserved.
          </div>
        </footer>
      ) : (
        <footer className="bg-[#0a0a0a] border-t border-white/10 mt-20">
          <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10 items-start justify-items-center text-center md:text-left">
            {/* BRAND */}
            <div>
              <h2 className="text-2xl font-bold mb-4">{data.name}</h2>
              <p className="text-gray-400 text-sm">
                Menyajikan kopi terbaik dengan cita rasa premium dan suasana
                nyaman untuk setiap momen Anda.
              </p>
            </div>

            {/* MENU */}
            <div>
              <h3 className="font-semibold mb-4">Menu</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#menu" className="hover:text-white">
                    Coffee
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Ambience
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <p className="text-gray-400 text-sm mb-2">📍 Tulungagung</p>
              <p className="text-gray-400 text-sm mb-4">📞 0812-3456-789</p>

              <a
                href={waLink}
                className="inline-block bg-amber-500 px-5 py-2 rounded-lg text-sm font-medium hover:bg-amber-600 transition"
              >
                Chat WhatsApp
              </a>
            </div>
          </div>

          {/* COPYRIGHT */}
          <div className="text-center text-gray-500 text-sm py-6 border-t border-white/5">
            © {new Date().getFullYear()} {data.name}. All rights reserved.
          </div>
        </footer>
      )}
    </div>
  );
}

/* ========================= */
/* ☕ COFFEE (AESTHETIC) */
/* ========================= */

function NavbarCoffee({ waLink, open, setOpen }) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10 text-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-serif text-amber-400">Coffee</h1>

        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#">Home</a>
          <a href="#menu">Menu</a>
        </div>

        <a href={waLink} className="bg-amber-500 px-5 py-2 rounded-xl">
          Order
        </a>
      </div>
    </nav>
  );
}

function CoffeeSection() {
  const menu = [
    {
      name: "Cappuccino",
      price: "18K",
      img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    },
    {
      name: "Latte",
      price: "20K",
      img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
    },
    {
      name: "Espresso",
      price: "15K",
      img: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    },
  ];

  return (
    <section id="menu" className="px-6 py-24 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-3 font-serif tracking-wide">
            Our Coffee
          </h2>
          <p className="text-gray-400">Crafted with passion & premium beans</p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10">
          {menu.map((item, i) => (
            <div key={i} className="group relative rounded-2xl overflow-hidden">
              {/* IMAGE */}
              <img
                src={item.img}
                className="h-80 w-full object-cover group-hover:scale-110 transition duration-700"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

              {/* CONTENT */}
              <div className="absolute bottom-0 p-6">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-amber-400 text-lg font-bold">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Fuction Coffe Baru
function CoffeeAmbience() {
  return (
    <section className="px-6 py-24 bg-black">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* IMAGE */}
        <img
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24"
          className="rounded-2xl object-cover h-[400px] w-full"
        />

        {/* TEXT */}
        <div>
          <h2 className="text-4xl font-bold mb-4">Cozy Place to Relax</h2>

          <p className="text-gray-400 mb-6">
            Nikmati kopi terbaik dengan suasana nyaman, cocok untuk kerja,
            nongkrong, atau sekadar menikmati waktu santai.
          </p>

          <a href="#" className="bg-amber-500 px-6 py-3 rounded-xl font-medium">
            Kunjungi Kami
          </a>
        </div>
      </div>
    </section>
  );
}

/* ========================= */
/* 🚗 RENTAL (FAST SELL) */
/* ========================= */

function NavbarRental({ waLink }) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#111111]/90 backdrop-blur-md border-b border-white/10 text-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <h1 className="text-xl font-bold tracking-wide">
          <span className="text-amber-400">RENTAL</span>
          <span className="text-white ml-1">JAYA</span>
        </h1>

        {/* MENU */}
        <div className="hidden md:flex gap-8 text-gray-300 text-sm">
          <a href="#" className="hover:text-white">
            Home
          </a>
          <a href="#mobil" className="hover:text-white">
            Mobil
          </a>
          <a href="#" className="hover:text-white">
            Contact
          </a>
        </div>

        {/* CTA */}
        <a
          href={waLink}
          className="bg-amber-500 text-black px-5 py-2 rounded-lg font-semibold hover:bg-amber-600 transition"
        >
          Booking
        </a>
      </div>
    </nav>
  );
}

function RentalSection() {
  const phone = "628123456789";

  const cars = [
    {
      name: "Toyota Avanza",
      price: "300K / hari",
      img: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2",
    },
    {
      name: "Toyota Innova",
      price: "500K / hari",
      img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d",
    },
    {
      name: "Honda Brio",
      price: "250K / hari",
      img: "https://images.unsplash.com/photo-1549924231-f129b911e442",
    },
  ];

  return (
    <section id="mobil" className="px-6 py-24 bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto">
        {/* TITLE */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-2 text-black">
            Pilihan Kendaraan
          </h2>
          <p className="text-gray-400">
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
                  {/* TITLE */}
                  <h3 className="text-xl font-semibold mb-2">{car.name}</h3>

                  {/* PRICE */}
                  <div className="mb-5">
                    <span className="text-2xl font-bold text-black">
                      {car.price}
                    </span>
                    <span className="text-gray-400 text-sm ml-1">/ hari</span>
                  </div>

                  {/* FEATURES */}
                  <div className="flex gap-3 text-sm text-gray-400 mb-5">
                    <span>AC</span>
                    <span>Manual</span>
                    <span>4 Seat</span>
                  </div>

                  {/* BUTTON */}
                  <a
                    href={wa}
                    className="block text-center bg-black text-white py-3 rounded-xl font-medium hover:bg-amber-500 hover:text-black transition transition"
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

/* ========================= */
/* 🏨 HOTEL (LUXURY) */
/* ========================= */

function NavbarHotel({ waLink }) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/10 text-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <h1 className="text-xl font-semibold tracking-wide">
          <span className="text-amber-400">HOTEL</span>
          <span className="ml-1">LUXURY</span>
        </h1>

        {/* MENU */}
        <div className="hidden md:flex gap-8 text-gray-300 text-sm">
          <a href="#">Home</a>
          <a href="#room">Rooms</a>
          <a href="#">Contact</a>
        </div>

        {/* CTA */}
        <a
          href={waLink}
          className="bg-white text-black px-5 py-2 rounded-lg font-medium hover:bg-gray-200 transition"
        >
          Booking
        </a>
      </div>
    </nav>
  );
}

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
    <section className="px-6 py-24 bg-[#0b0b0b]">
      <div className="max-w-6xl mx-auto">
        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-4">Kamar Eksklusif</h2>
          <p className="text-gray-400">
            Nikmati pengalaman menginap yang nyaman & berkelas
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
                className="group overflow-hidden rounded-2xl bg-[#141414] border border-white/10 hover:border-white/20 transition duration-300"
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

                  {/* PRICE */}
                  <div className="mb-5">
                    <span className="text-2xl font-bold">{room.price}</span>
                    <span className="text-gray-400 ml-1 text-sm">/ malam</span>
                  </div>

                  {/* FEATURES */}
                  <div className="flex gap-3 text-sm text-gray-400 mb-6">
                    <span>AC</span>
                    <span>WiFi</span>
                    <span>Breakfast</span>
                  </div>

                  {/* BUTTON */}
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

/* ========================= */
/* 🍽️ RESTO */
/* ========================= */

function RestoSection() {
  const phone = "628123456789";

  const menus = [
    {
      name: "Nasi Goreng Spesial",
      price: "25K",
      img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
    },
    {
      name: "Ayam Bakar Madu",
      price: "30K",
      img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    },
    {
      name: "Mie Goreng Seafood",
      price: "28K",
      img: "https://images.unsplash.com/photo-1617191519009-5d0f5c9b5c2c",
    },
  ];

  return (
    <section className="px-6 py-24 bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto">
        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-3">Menu Favorit</h2>
          <p className="text-gray-400">
            Pilihan terbaik yang paling disukai pelanggan
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10">
          {menus.map((menu, i) => {
            const wa = `https://wa.me/${phone}?text=${encodeURIComponent(
              `Halo, saya mau pesan ${menu.name}`,
            )}`;

            return (
              <div
                key={i}
                className="group bg-[#141414] rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition duration-300"
              >
                {/* IMAGE */}
                <div className="overflow-hidden">
                  <img
                    src={menu.img}
                    className="h-52 w-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{menu.name}</h3>

                  {/* PRICE */}
                  <div className="mb-5">
                    <span className="text-2xl font-bold text-white">
                      {menu.price}
                    </span>
                  </div>

                  {/* BUTTON */}
                  <a
                    href={wa}
                    className="block text-center bg-white text-black py-3 rounded-xl font-medium hover:bg-gray-200 transition"
                  >
                    Pesan Sekarang
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

/* ========================= */
/* 🏫 SEKOLAH */
/* ========================= */

function SekolahSection() {
  const phone = "628123456789";

  const programs = [
    {
      name: "Teknik Informatika",
      desc: "Belajar pemrograman, web, dan teknologi modern",
    },
    {
      name: "Akuntansi",
      desc: "Membekali siswa dengan keahlian keuangan & bisnis",
    },
    {
      name: "Bisnis Digital",
      desc: "Fokus pada marketing, branding & e-commerce",
    },
  ];

  return (
    <section className="px-6 py-24 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto">
        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-3">Program Unggulan</h2>
          <p className="text-gray-400">
            Pendidikan berkualitas untuk masa depan yang lebih baik
          </p>
        </div>

        {/* PROGRAM */}
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((item, i) => (
            <div
              key={i}
              className="bg-[#1e293b] p-6 rounded-2xl border border-white/10"
            >
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href={`https://wa.me/${phone}?text=${encodeURIComponent(
              "Halo, saya ingin informasi pendaftaran sekolah",
            )}`}
            className="bg-white text-black px-8 py-3 rounded-xl font-medium"
          >
            Daftar Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}
