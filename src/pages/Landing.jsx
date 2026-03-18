export default function Landing({ data }) {
  const phone = "628123456789";
  const message = `Halo, saya tertarik dengan ${data.name}`;
  const waLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <div className={`${data.theme.bg} text-white min-h-screen`}>
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-6 py-4 border-b border-white/10">
        <h1 className="text-lg font-semibold">{data.name}</h1>
        <a
          href={waLink}
          className={`${data.theme.button} px-4 py-2 rounded-lg text-sm`}
        >
          Hubungi
        </a>
      </nav>

      {/* HERO */}
      {data.type === "coffee" ? (
        <section className="relative h-[90vh] flex items-center justify-center text-center px-6">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          <div className="relative z-10 max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">{data.hero.title}</h1>
            <p className="text-gray-300 mb-6">{data.hero.subtitle}</p>
            <a
              href={waLink}
              className={`${data.theme.button} px-6 py-3 rounded-xl`}
            >
              Pesan Sekarang
            </a>
          </div>
        </section>
      ) : data.type === "rental" ? (
        <section className="py-20 text-center px-6">
          <h1 className="text-4xl font-bold mb-4">{data.hero.title}</h1>
          <p className="text-gray-300 mb-6">{data.hero.subtitle}</p>

          <div className="flex justify-center gap-4">
            <a
              href="#mobil"
              className="bg-white text-black px-6 py-3 rounded-xl"
            >
              Lihat Mobil
            </a>
            <a
              href={waLink}
              className={`${data.theme.button} px-6 py-3 rounded-xl`}
            >
              Hubungi
            </a>
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
      {data.type === "rental" && <RentalSection />}
      {data.type === "hotel" && <HotelSection />}
      {data.type === "resto" && <RestoSection />}
      {data.type === "sekolah" && <SekolahSection />}

      {/* CTA */}
      <section className="text-center py-20">
        <h2 className="text-3xl font-bold mb-4">
          Tertarik dengan layanan ini?
        </h2>
        <a
          href={waLink}
          className={`${data.theme.button} px-8 py-4 rounded-xl`}
        >
          Chat WhatsApp
        </a>
      </section>
    </div>
  );
}

/* ========================= */
/* ☕ COFFEE (AESTHETIC) */
/* ========================= */

function CoffeeSection() {
  return (
    <>
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Signature Menu</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
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
          ].map((item, i) => (
            <div key={i}>
              <img
                src={item.img}
                className="h-60 w-full object-cover rounded-xl mb-4"
              />
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-amber-400">{item.price}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

/* ========================= */
/* 🚗 RENTAL (FAST SELL) */
/* ========================= */

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
    <section id="mobil" className="px-6 py-24 bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto">
        {/* TITLE */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-2">Pilihan Kendaraan</h2>
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
                className="group bg-[#141414] rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition duration-300 hover:-translate-y-1"
              >
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
                    <span className="text-2xl font-bold text-white">
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
                    className="block text-center bg-white text-black py-3 rounded-xl font-medium hover:bg-gray-200 transition"
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
