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

      {/* HERO */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
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

          <div>
            <img
              src="https://images.unsplash.com/photo-1588072432836-e10032774350"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* STATS */}
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

      {/* 🎓 ALUR PENDAFTARAN */}
      <section className="px-6 py-24 bg-[#020617]">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-3">Alur Pendaftaran</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div className="bg-[#1e293b] p-6 rounded-xl">Isi Form</div>
          <div className="bg-[#1e293b] p-6 rounded-xl">Verifikasi</div>
          <div className="bg-[#1e293b] p-6 rounded-xl">Tes / Interview</div>
          <div className="bg-[#1e293b] p-6 rounded-xl">Diterima 🎉</div>
        </div>
      </section>

      {/* 👨‍🏫 TEACHER */}
      <section className="px-6 py-24 bg-[#0f172a]">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold">Guru & Mentor</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3>Pak Budi</h3>
            <p className="text-gray-400 text-sm">Programmer</p>
          </div>

          <div className="text-center">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3>Bu Rina</h3>
            <p className="text-gray-400 text-sm">Akuntan</p>
          </div>

          <div className="text-center">
            <img
              src="https://randomuser.me/api/portraits/men/65.jpg"
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3>Pak Andi</h3>
            <p className="text-gray-400 text-sm">Digital Marketing</p>
          </div>
        </div>
      </section>

      {/* 🏫 GALLERY */}
      <section className="px-6 py-24 bg-[#020617]">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold">Kegiatan Sekolah</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <img
            src="https://images.unsplash.com/photo-1588072432836-e10032774350"
            className="rounded-xl"
          />
          <img
            src="https://images.unsplash.com/photo-1584697964353-7e6f1fdb5e57"
            className="rounded-xl"
          />
          <img
            src="https://images.unsplash.com/photo-1596495577886-d920f1fb7238"
            className="rounded-xl"
          />
        </div>
      </section>

      {/* 💬 TESTIMONI */}
      <section className="px-6 py-24 bg-[#0f172a] text-center">
        <h2 className="text-4xl font-bold mb-10">Apa Kata Mereka?</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#1e293b] p-6 rounded-xl">
            <p>"Belajar jadi menyenangkan!"</p>
          </div>
          <div className="bg-[#1e293b] p-6 rounded-xl">
            <p>"Langsung siap kerja!"</p>
          </div>
          <div className="bg-[#1e293b] p-6 rounded-xl">
            <p>"Mentornya keren!"</p>
          </div>
        </div>
      </section>

      {/* 📍 LOCATION */}
      <section className="px-6 py-24 bg-[#020617]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4">Lokasi Sekolah</h2>

            <p className="text-gray-400 mb-6">
              Lokasi strategis dan mudah dijangkau
            </p>

            <p className="text-sm text-gray-300 mb-2">📍 Jl. Sekolah No. 123</p>

            <a
              href="https://maps.google.com"
              className="bg-blue-500 px-6 py-3 rounded-xl"
            >
              Buka Maps
            </a>
          </div>

          <iframe
            className="w-full h-[300px] rounded-xl"
            src="https://maps.google.com/maps?q=jakarta&t=&z=13&ie=UTF8&iwloc=&output=embed"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center bg-blue-600">
        <h2 className="text-3xl font-bold mb-4">
          Siap Bergabung Bersama Kami?
        </h2>

        <p className="mb-6">Daftar sekarang dan mulai masa depanmu</p>

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

/* PROGRAM (PUNYA KAMU) */
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
