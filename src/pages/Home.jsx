import { Link } from "react-router-dom";

export default function Home() {
  const demos = [
    {
      name: "Coffee",
      path: "/coffee",
      desc: "Website cafe aesthetic & modern",
      icon: "☕",
    },
    {
      name: "Rental",
      path: "/rental",
      desc: "Sistem sewa mobil cepat & praktis",
      icon: "🚗",
    },
    {
      name: "Hotel",
      path: "/hotel",
      desc: "Landing page hotel elegan & premium",
      icon: "🏨",
    },
    {
      name: "Resto",
      path: "/resto",
      desc: "Website menu & booking restoran",
      icon: "🍽️",
    },
    {
      name: "Sekolah",
      path: "/sekolah",
      desc: "Profil sekolah profesional",
      icon: "🏫",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">
      {/* CONTAINER */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Demo Website <span className="text-amber-500">UMKM</span>
          </h1>

          <p className="text-gray-400 mt-4 text-lg max-w-xl mx-auto">
            Pilih jenis bisnis untuk melihat contoh website yang siap digunakan
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {demos.map((demo, i) => (
            <Link
              key={i}
              to={demo.path}
              className="group relative bg-[#141414] border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-amber-500/40 hover:-translate-y-1"
            >
              {/* ICON */}
              <div className="text-3xl mb-4">{demo.icon}</div>

              {/* TITLE */}
              <h2 className="text-xl font-semibold mb-2 group-hover:text-amber-400 transition">
                {demo.name}
              </h2>

              {/* DESC */}
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {demo.desc}
              </p>

              {/* CTA */}
              <div className="text-sm font-medium text-amber-500">
                Lihat Demo →
              </div>

              {/* HOVER GLOW */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-br from-amber-500/10 to-transparent"></div>
            </Link>
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
