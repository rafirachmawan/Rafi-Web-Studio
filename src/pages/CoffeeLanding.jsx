import { coffee } from "../data/coffee";

export default function CoffeeLanding() {
  const data = coffee;

  const phone = "628123456789";
  const message = `Halo, saya tertarik dengan ${data.name}`;
  const waLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <div className="bg-[#0b0b0b] text-white min-h-screen font-sans pt-20">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-serif text-amber-400 tracking-wide">
            Coffee
          </h1>

          <div className="hidden md:flex gap-10 text-gray-300 text-sm">
            <a href="#">Home</a>
            <a href="#menu">Menu</a>
          </div>

          <a
            href={waLink}
            className="bg-amber-500 hover:bg-amber-600 px-5 py-2 rounded-xl text-sm font-medium transition"
          >
            Order
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative h-[100vh] flex items-center justify-center text-center px-6 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
          className="absolute inset-0 w-full h-full object-cover scale-110"
        />

        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

        <div className="relative z-10 max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-serif">
            {data.hero.title}
          </h1>

          <p className="text-gray-300 mb-8 text-lg">{data.hero.subtitle}</p>

          <div className="flex justify-center gap-4">
            <a
              href={waLink}
              className="bg-amber-500 px-6 py-3 rounded-xl hover:bg-amber-600 transition shadow-lg"
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

      {/* MENU */}
      <CoffeeSection />

      {/* AMBIENCE */}
      <CoffeeAmbience />

      {/* FOOTER */}
      <footer className="bg-[#050505] border-t border-white/10 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
          <div>
            <h2 className="text-xl font-bold mb-4 text-amber-400">
              {data.name}
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Kopi terbaik dengan cita rasa premium dan suasana nyaman untuk
              setiap momen Anda.
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
              href={waLink}
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
/* ☕ MENU SECTION */
/* ========================= */

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
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-3 font-serif">Our Coffee</h2>
          <p className="text-gray-400">Crafted with passion & premium beans</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {menu.map((item, i) => (
            <div key={i} className="group relative rounded-2xl overflow-hidden">
              <img
                src={item.img}
                className="h-80 w-full object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

              <div className="absolute bottom-0 p-6">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-amber-400 font-bold text-lg">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================= */
/* 🌿 AMBIENCE */
/* ========================= */

function CoffeeAmbience() {
  return (
    <section className="px-6 py-24 bg-black">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <img
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24"
          className="rounded-2xl h-[400px] w-full object-cover"
        />

        <div>
          <h2 className="text-4xl font-bold mb-4">Cozy Place to Relax</h2>

          <p className="text-gray-400 mb-6">
            Nikmati kopi terbaik dengan suasana nyaman, cocok untuk kerja,
            nongkrong, atau sekadar menikmati waktu santai.
          </p>

          <a className="bg-amber-500 px-6 py-3 rounded-xl">Kunjungi Kami</a>
        </div>
      </div>
    </section>
  );
}
