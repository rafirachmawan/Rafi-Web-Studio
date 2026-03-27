import { resto } from "../data/resto";
import { useEffect } from "react";

export default function RestoLanding() {
  const data = resto;
  const phone = "628123456789";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen font-sans">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-red-500 tracking-wide">
            {data.name}
          </h1>

          <a
            href={`https://wa.me/${phone}`}
            className="bg-red-500 px-5 py-2 rounded-lg hover:bg-red-600 transition font-medium"
          >
            Order Now
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center px-6 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d"
          className="absolute inset-0 w-full h-full object-cover scale-110"
        />

        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>

        <div className="relative z-10 max-w-xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            {data.hero.title}
          </h1>

          <p className="text-gray-300 mb-8 text-lg">{data.hero.subtitle}</p>

          <div className="flex gap-4">
            <a
              href="#menu"
              className="bg-red-500 px-8 py-3 rounded-xl hover:bg-red-600 transition font-medium"
            >
              Lihat Menu
            </a>

            <a
              href={`https://wa.me/${phone}`}
              className="border border-white/20 px-8 py-3 rounded-xl hover:bg-white hover:text-black transition"
            >
              Pesan Sekarang
            </a>
          </div>
        </div>
      </section>

      {/* 🔥 QUICK ORDER */}
      <section className="px-6 mt-10 relative z-10">
        <div className="max-w-5xl mx-auto bg-[#1a1a1a] rounded-2xl p-6 border border-white/10">
          <div className="grid md:grid-cols-3 gap-4">
            <input
              placeholder="Nama Menu"
              className="bg-black px-4 py-3 rounded-lg text-sm outline-none"
            />
            <input
              placeholder="Jumlah"
              className="bg-black px-4 py-3 rounded-lg text-sm outline-none"
            />

            <a
              href={`https://wa.me/${phone}`}
              className="bg-red-500 flex items-center justify-center rounded-lg font-semibold"
            >
              Pesan Cepat
            </a>
          </div>
        </div>
      </section>

      {/* BEST SELLER */}
      <section className="px-6 py-20 bg-[#111]">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 text-red-400">
            Best Seller 🔥
          </h2>
          <p className="text-gray-400">
            Menu favorit yang paling banyak dipesan
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <img
            src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d"
            className="rounded-2xl h-64 w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
            className="rounded-2xl h-64 w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1617191519009-5d0f5c9b5c2c"
            className="rounded-2xl h-64 w-full object-cover"
          />
        </div>
      </section>

      {/* MENU */}
      <RestoSection />

      {/* ⭐ TESTIMONIAL */}
      <section className="px-6 py-24 bg-[#111] text-center">
        <h2 className="text-4xl font-bold mb-12">Customer Review</h2>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-black p-6 rounded-2xl">
            <p>"Enak banget, nagih!"</p>
          </div>

          <div className="bg-black p-6 rounded-2xl">
            <p>"Cepat & murah!"</p>
          </div>

          <div className="bg-black p-6 rounded-2xl">
            <p>"Favorit keluarga 🔥"</p>
          </div>
        </div>
      </section>

      {/* 📍 LOCATION */}
      <section className="px-6 py-24 bg-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4">Visit Our Resto</h2>

            <p className="text-gray-400 mb-6">
              Nikmati makanan lezat langsung di tempat kami dengan suasana
              nyaman.
            </p>

            <p className="text-sm text-gray-300 mb-2">📍 Jl. Resto No. 123</p>
            <p className="text-sm text-gray-300 mb-6">🕒 10.00 - 22.00</p>

            <a
              href="https://maps.google.com"
              className="bg-red-500 px-6 py-3 rounded-xl"
            >
              Buka Maps
            </a>
          </div>

          <iframe
            className="w-full h-[300px] rounded-2xl"
            src="https://maps.google.com/maps?q=jakarta&t=&z=13&ie=UTF8&iwloc=&output=embed"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 text-center bg-red-500">
        <h2 className="text-3xl font-bold mb-4">Lapar? Pesan Sekarang!</h2>

        <p className="mb-6">Nikmati hidangan terbaik tanpa menunggu lama</p>

        <a
          href={`https://wa.me/${phone}`}
          className="bg-black text-white px-8 py-3 rounded-xl font-medium"
        >
          Order via WhatsApp
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

/* MENU */
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
    <section id="menu" className="px-6 py-24 bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-3">Menu Favorit</h2>
          <p className="text-gray-400">Pilih makanan favoritmu sekarang</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {menus.map((menu, i) => {
            const wa = `https://wa.me/${phone}?text=${encodeURIComponent(
              `Halo, saya mau pesan ${menu.name}`,
            )}`;

            return (
              <div
                key={i}
                className="group overflow-hidden rounded-2xl bg-[#141414] hover:scale-[1.03] transition duration-300"
              >
                <div className="overflow-hidden">
                  <img
                    src={menu.img}
                    className="h-64 w-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{menu.name}</h3>

                  <p className="text-red-400 text-lg font-semibold mb-4">
                    {menu.price}
                  </p>

                  <a
                    href={wa}
                    className="block text-center bg-red-500 py-3 rounded-xl font-medium hover:bg-red-600 transition"
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
