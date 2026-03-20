import { resto } from "../data/resto";

export default function RestoLanding() {
  const data = resto;

  const phone = "628123456789";

  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen font-sans pt-20">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-red-400">{data.name}</h1>

          <a
            href={`https://wa.me/${phone}`}
            className="bg-red-500 px-5 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Order
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative h-[90vh] flex items-center justify-center text-center px-6 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {data.hero.title}
          </h1>

          <p className="text-gray-300 mb-8 text-lg">{data.hero.subtitle}</p>

          <a
            href="#menu"
            className="bg-red-500 px-8 py-3 rounded-xl hover:bg-red-600 transition"
          >
            Lihat Menu
          </a>
        </div>
      </section>

      {/* MENU */}
      <RestoSection />

      {/* FOOTER */}
      <footer className="bg-black border-t border-white/10 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
          <div>
            <h2 className="text-xl font-bold mb-4 text-red-400">{data.name}</h2>
            <p className="text-gray-400 text-sm">
              Menyajikan hidangan terbaik dengan cita rasa khas Nusantara.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Menu</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>Home</li>
              <li>Menu</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Contact</h3>
            <p className="text-gray-400 text-sm mb-4">📞 {phone}</p>

            <a
              href={`https://wa.me/${phone}`}
              className="bg-red-500 px-5 py-2 rounded-lg hover:bg-red-600 transition"
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
/* 🍽️ RESTO SECTION */
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
    <section id="menu" className="px-6 py-24 bg-[#0f0f0f]">
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
                <div className="overflow-hidden">
                  <img
                    src={menu.img}
                    className="h-52 w-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{menu.name}</h3>

                  <div className="mb-5">
                    <span className="text-2xl font-bold text-red-400">
                      {menu.price}
                    </span>
                  </div>

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
