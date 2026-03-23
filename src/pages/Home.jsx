import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import coffeeImg from "../assets/Coffe.jpg";
import rentalImg from "../assets/Rental.jpg";
import hotelImg from "../assets/Hotel.jpg";
import restoImg from "../assets/Resto.jpg";
import sekolahImg from "../assets/Sekolah.jpg";
import laundryImg from "../assets/Loundry.jpg";
import umrohImg from "../assets/Umroh.jpg";

export default function Home() {
  const [filter, setFilter] = useState("all");

  const demos = [
    {
      name: "Coffee",
      path: "/coffee",
      desc: "Website cafe aesthetic & modern",
      icon: "☕",
      category: "food",
      image: coffeeImg,
    },
    {
      name: "Rental",
      path: "/rental",
      desc: "Sistem sewa mobil cepat & praktis",
      icon: "🚗",
      category: "service",
      image: rentalImg,
    },
    {
      name: "Hotel",
      path: "/hotel",
      desc: "Landing page hotel elegan & premium",
      icon: "🏨",
      category: "service",
      image: hotelImg,
    },
    {
      name: "Resto",
      path: "/resto",
      desc: "Website menu & booking restoran",
      icon: "🍽️",
      category: "food",
      image: restoImg,
    },
    {
      name: "Sekolah",
      path: "/sekolah",
      desc: "Profil sekolah profesional",
      icon: "🏫",
      category: "education",
      image: sekolahImg,
    },
    {
      name: "Laundry",
      path: "/laundry",
      desc: "Website laundry modern + tracking order",
      icon: "🧺",
      category: "service",
      image: laundryImg,
    },
    {
      name: "Umroh",
      path: "/umroh",
      desc: "Landing page travel umroh profesional",
      icon: "🕋",
      category: "religion",
      image: umrohImg,
    },
  ];

  const filtered =
    filter === "all" ? demos : demos.filter((item) => item.category === filter);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden">
      {/* BACKGROUND GLOW (OPTIMIZED) */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-amber-500/10 blur-[80px] rounded-full"></div>

      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold">
            Demo Website{" "}
            <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
              Bisnis
            </span>
          </h1>

          <p className="text-gray-400 mt-4">
            Pilih template sesuai bisnis kamu
          </p>
        </div>

        {/* FILTER */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {["all", "food", "service", "education", "religion"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm transition ${
                filter === cat
                  ? "bg-amber-500 text-black"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((demo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to={demo.path}
                className="group block bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden hover:-translate-y-1 transition"
              >
                {/* IMAGE */}
                <div className="h-40 overflow-hidden">
                  <img
                    src={demo.image}
                    alt={demo.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-5">
                  {/* ICON */}
                  <div className="text-2xl mb-2">{demo.icon}</div>

                  {/* TITLE */}
                  <h2 className="text-lg font-semibold group-hover:text-amber-400">
                    {demo.name}
                  </h2>

                  {/* DESC */}
                  <p className="text-gray-400 text-sm mt-1 mb-4">{demo.desc}</p>

                  {/* CTA */}
                  <span className="text-amber-400 text-sm">Lihat Demo →</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="text-center mt-20 text-gray-500 text-sm">
          © 2026 Rafi Web Studio
        </div>
      </div>
    </div>
  );
}
