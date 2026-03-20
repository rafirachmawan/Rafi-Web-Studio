import { coffee } from "../data/coffee";

export default function CoffeeLanding() {
  const data = coffee;

  const phone = "628123456789";
  const message = `Halo, saya tertarik dengan ${data.name}`;
  const waLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <div className="bg-[#0b0b0b] text-white min-h-screen font-sans pt-20">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-serif text-amber-400 tracking-widest">
            COFFEE
          </h1>

          <div className="hidden md:flex gap-10 text-gray-300 text-sm">
            <a href="#" className="hover:text-white transition">
              Home
            </a>
            <a href="#menu" className="hover:text-white transition">
              Menu
            </a>
            <a href="#about" className="hover:text-white transition">
              About
            </a>
          </div>

          <a
            href={waLink}
            className="bg-amber-500 hover:bg-amber-600 px-5 py-2 rounded-xl text-sm font-medium transition shadow-lg hover:scale-105"
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
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

        <div className="relative z-10 max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif leading-tight tracking-wide">
            {data.hero.title}
          </h1>

          <p className="text-gray-300 mb-10 text-lg">{data.hero.subtitle}</p>

          <div className="flex justify-center gap-4">
            <a
              href={waLink}
              className="bg-amber-500 px-7 py-3 rounded-xl hover:bg-amber-600 transition shadow-lg hover:scale-105"
            >
              Order Coffee
            </a>

            <a
              href="#menu"
              className="border border-white/30 px-7 py-3 rounded-xl hover:bg-white/10 transition"
            >
              Explore Menu
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
              <li>About</li>
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
/* ☕ MENU (UPGRADE) */
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
          <h2 className="text-4xl font-bold mb-3 font-serif tracking-wide">
            Our Coffee
          </h2>
          <p className="text-gray-400">Crafted with passion & premium beans</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {menu.map((item, i) => (
            <div
              key={i}
              className="group bg-[#141414] rounded-2xl overflow-hidden border border-white/10 hover:border-amber-500/40 transition duration-300 hover:-translate-y-2"
            >
              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  className="h-72 w-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>

                <p className="text-amber-400 text-lg font-bold mb-4">
                  {item.price}
                </p>

                <button className="w-full bg-amber-500 py-2 rounded-lg hover:bg-amber-600 transition text-sm">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================= */
/* 🌿 AMBIENCE (UPGRADE) */
/* ========================= */

function CoffeeAmbience() {
  return (
    <section id="about" className="px-6 py-24 bg-black">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24"
            className="rounded-2xl object-cover h-[400px] w-full"
          />

          <div className="absolute inset-0 rounded-2xl bg-black/30"></div>
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-4 font-serif">
            Cozy & Aesthetic Space
          </h2>

          <p className="text-gray-400 mb-6 leading-relaxed">
            Nikmati kopi terbaik dengan suasana hangat dan nyaman. Tempat yang
            sempurna untuk bekerja, bersantai, dan menikmati waktu berkualitas.
          </p>

          <a
            href="#"
            className="bg-amber-500 px-6 py-3 rounded-xl hover:bg-amber-600 transition shadow-md"
          >
            Visit Us
          </a>
        </div>
      </div>
    </section>
  );
}
