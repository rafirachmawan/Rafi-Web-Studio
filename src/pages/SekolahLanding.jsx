import { sekolah } from "../data/sekolah";

export default function SekolahLanding() {
  const data = sekolah;

  const phone = "628123456789";

  return (
    <div className="bg-[#020617] text-white min-h-screen font-sans">
      {/* NAVBAR */}
      <nav className="w-full bg-[#020617]/90 backdrop-blur-md border-b border-white/10 fixed top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-400">{data.name}</h1>

          <a
            href={`https://wa.me/${phone}`}
            className="bg-blue-500 px-5 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Daftar
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative h-[90vh] flex items-center justify-center text-center px-6 overflow-hidden pt-20">
        <img
          src="https://images.unsplash.com/photo-1588072432836-e10032774350"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#020617]/80"></div>

        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {data.hero.title}
          </h1>

          <p className="text-gray-300 mb-8 text-lg">{data.hero.subtitle}</p>

          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="#program"
              className="bg-blue-500 px-8 py-3 rounded-xl hover:bg-blue-600 transition"
            >
              Lihat Program
            </a>

            <a
              href={`https://wa.me/${phone}`}
              className="border border-white/30 px-8 py-3 rounded-xl hover:bg-white hover:text-black transition"
            >
              Hubungi
            </a>
          </div>
        </div>
      </section>

      {/* PROGRAM */}
      <SekolahSection />

      {/* FOOTER */}
      <footer className="bg-[#020617] border-t border-white/10 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
          <div>
            <h2 className="text-xl font-bold mb-4 text-blue-400">
              {data.name}
            </h2>
            <p className="text-gray-400 text-sm">
              Pendidikan berkualitas untuk masa depan yang lebih baik.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Menu</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>Beranda</li>
              <li>Program</li>
              <li>Kontak</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Kontak</h3>
            <p className="text-gray-400 text-sm mb-4">📞 {phone}</p>

            <a
              href={`https://wa.me/${phone}`}
              className="bg-blue-500 px-5 py-2 rounded-lg hover:bg-blue-600 transition"
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
/* 🏫 PROGRAM */
/* ========================= */

function SekolahSection() {
  const programs = [
    {
      name: "Teknik Informatika",
      desc: "Belajar pemrograman, web, dan teknologi modern",
    },
    {
      name: "Akuntansi",
      desc: "Keahlian keuangan & manajemen bisnis",
    },
    {
      name: "Bisnis Digital",
      desc: "Marketing, branding & e-commerce",
    },
  ];

  return (
    <section id="program" className="px-6 py-24 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-3">Program Unggulan</h2>
          <p className="text-gray-400">
            Pilihan jurusan terbaik untuk masa depan Anda
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((item, i) => (
            <div
              key={i}
              className="bg-[#1e293b] p-6 rounded-2xl border border-white/10 hover:border-white/20 transition"
            >
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>

              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
