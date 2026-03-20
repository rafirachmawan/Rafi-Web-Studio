import { sekolah } from "../data/sekolah";

export default function SekolahLanding() {
  const data = sekolah;
  const phone = "628123456789";

  return (
    <div className="bg-[#020617] text-white min-h-screen font-sans">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-[#020617]/90 backdrop-blur-md border-b border-white/10">
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

      {/* HERO (LEFT RIGHT) 🔥 */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* TEXT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {data.hero.title}
            </h1>

            <p className="text-gray-400 mb-8 text-lg">{data.hero.subtitle}</p>

            <div className="flex gap-4">
              <a
                href="#program"
                className="bg-blue-500 px-6 py-3 rounded-xl hover:bg-blue-600 transition"
              >
                Lihat Program
              </a>

              <a
                href={`https://wa.me/${phone}`}
                className="border border-white/30 px-6 py-3 rounded-xl hover:bg-white hover:text-black transition"
              >
                Konsultasi
              </a>
            </div>
          </div>

          {/* IMAGE */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1588072432836-e10032774350"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* STATS 🔥 */}
      <section className="px-6 py-16 bg-[#0f172a]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h2 className="text-3xl font-bold text-blue-400">500+</h2>
            <p className="text-gray-400">Siswa Aktif</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-blue-400">10+</h2>
            <p className="text-gray-400">Guru Profesional</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-blue-400">3</h2>
            <p className="text-gray-400">Program Unggulan</p>
          </div>
        </div>
      </section>

      {/* PROGRAM */}
      <SekolahSection />

      {/* WHY US 🔥 */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-[#1e293b] p-6 rounded-2xl">
            <h3 className="text-lg font-semibold mb-2">Kurikulum Modern</h3>
            <p className="text-gray-400 text-sm">
              Disesuaikan dengan kebutuhan industri saat ini
            </p>
          </div>

          <div className="bg-[#1e293b] p-6 rounded-2xl">
            <h3 className="text-lg font-semibold mb-2">Siap Kerja</h3>
            <p className="text-gray-400 text-sm">
              Fokus pada skill nyata & praktik langsung
            </p>
          </div>

          <div className="bg-[#1e293b] p-6 rounded-2xl">
            <h3 className="text-lg font-semibold mb-2">Mentor Berpengalaman</h3>
            <p className="text-gray-400 text-sm">
              Dibimbing oleh praktisi profesional
            </p>
          </div>
        </div>
      </section>

      {/* CTA 🔥 */}
      <section className="px-6 py-20 text-center bg-blue-600">
        <h2 className="text-3xl font-bold mb-4">
          Siap Bergabung Bersama Kami?
        </h2>

        <p className="mb-6">
          Daftar sekarang dan mulai perjalanan masa depanmu
        </p>

        <a
          href={`https://wa.me/${phone}`}
          className="bg-white text-black px-8 py-3 rounded-xl font-medium"
        >
          Daftar Sekarang
        </a>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#020617] border-t border-white/10">
        <div className="text-center text-gray-500 text-sm py-6">
          © {new Date().getFullYear()} {data.name}
        </div>
      </footer>
    </div>
  );
}

/* PROGRAM */
function SekolahSection() {
  const programs = [
    {
      name: "Teknik Informatika",
      desc: "Belajar coding & teknologi modern",
    },
    {
      name: "Akuntansi",
      desc: "Keuangan & manajemen bisnis",
    },
    {
      name: "Bisnis Digital",
      desc: "Marketing & e-commerce",
    },
  ];

  return (
    <section id="program" className="px-6 py-24">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-3">Program Unggulan</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {programs.map((item, i) => (
          <div key={i} className="bg-[#1e293b] p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
