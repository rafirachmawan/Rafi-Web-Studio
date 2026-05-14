import { sekolah } from "../../../data/sekolah";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Users,
  Award,
  ArrowRight,
  MapPin,
  Menu,
  X,
  CheckCircle2,
  MonitorPlay,
  Briefcase,
  Calculator,
  ChevronRight,
  Star
} from "lucide-react";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function SekolahLanding() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const data = sekolah || { name: "Sekolah Masa Depan", hero: { title: "Pendidikan Vokasi Modern", subtitle: "Mencetak generasi siap kerja." } };
  const phone = "628123456789";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#09090b] text-zinc-200 min-h-screen font-sans selection:bg-teal-500/30 overflow-x-hidden">
      
      {/* BACKGROUND EFFECTS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-teal-600/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-violet-600/10 blur-[120px]" />
      </div>

      {/* NAVBAR */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-[#09090b]/80 backdrop-blur-xl border-b border-white/5 py-4" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-violet-500 flex items-center justify-center shadow-lg shadow-teal-500/20">
              <GraduationCap className="text-white w-6 h-6" />
            </div>
            <h1 className="text-xl font-bold tracking-tight text-white">
              {data.name}
            </h1>
          </motion.div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#program" className="hover:text-teal-400 transition-colors">Program</a>
            <a href="#alur" className="hover:text-teal-400 transition-colors">Pendaftaran</a>
            <a href="#mentor" className="hover:text-teal-400 transition-colors">Mentor</a>
            <a href="#galeri" className="hover:text-teal-400 transition-colors">Galeri</a>
          </div>

          <motion.a
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            href={`https://wa.me/${phone}`}
            className="hidden md:flex items-center gap-2 bg-white text-zinc-950 px-6 py-2.5 rounded-full font-bold hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95"
          >
            Daftar Sekarang
          </motion.a>

          {/* MOBILE TOGGLE */}
          <button 
            className="md:hidden text-zinc-300 hover:text-white relative z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100vh" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden absolute top-0 left-0 w-full bg-[#09090b] flex flex-col pt-24 px-6 z-40 border-b border-white/5"
            >
              <div className="flex flex-col gap-6 text-xl font-bold">
                <a href="#program" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 hover:text-white border-b border-white/5 pb-4">Program Unggulan</a>
                <a href="#alur" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 hover:text-white border-b border-white/5 pb-4">Alur Pendaftaran</a>
                <a href="#mentor" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 hover:text-white border-b border-white/5 pb-4">Mentor</a>
                <a href="#galeri" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 hover:text-white border-b border-white/5 pb-4">Galeri Kegiatan</a>
                <a
                  href={`https://wa.me/${phone}`}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-teal-400 to-violet-500 text-white px-5 py-4 rounded-xl font-bold mt-4"
                >
                  Daftar Sekarang
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="relative z-10">
        {/* HERO */}
        <section className="relative min-h-screen flex items-center pt-24 pb-12 px-6">
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
            
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={STAGGER}
              className="relative z-10"
            >
              <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-bold mb-6">
                <Award className="w-4 h-4" />
                Penerimaan Siswa Baru 2026 Dibuka
              </motion.div>

              <motion.h1 variants={FADE_UP} className="text-5xl md:text-7xl font-extrabold mb-6 leading-[1.1] text-white tracking-tight">
                Bangun <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-violet-400">Masa Depanmu</span> Bersama Kami
              </motion.h1>

              <motion.p variants={FADE_UP} className="text-lg text-zinc-400 mb-10 max-w-lg leading-relaxed">
                {data.hero?.subtitle} Kurikulum berbasis industri, mentor profesional, dan fasilitas berstandar internasional.
              </motion.p>

              <motion.div variants={FADE_UP} className="flex flex-wrap gap-4">
                <a
                  href="#program"
                  className="bg-gradient-to-r from-teal-400 to-violet-500 text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl hover:shadow-teal-500/25 transition-all hover:-translate-y-1 flex items-center gap-2"
                >
                  Jelajahi Program
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href={`https://wa.me/${phone}`}
                  className="bg-white/5 border border-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all flex items-center gap-2"
                >
                  Tanya Admin
                </a>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative lg:h-[600px] w-full flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-violet-500/20 rounded-full blur-[80px]" />
              
              {/* Creative Image Composition */}
              <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000"
                  alt="Students learning"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-80" />
              </div>

              {/* Floating Elements */}
              <motion.div 
                animate={{ y: [-15, 15, -15] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -right-4 md:-right-12 bg-[#18181b]/90 backdrop-blur-xl border border-white/10 p-4 rounded-2xl flex items-center gap-4 shadow-2xl"
              >
                <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center text-teal-400">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white font-bold text-xl">500+</p>
                  <p className="text-xs text-zinc-400">Siswa Aktif</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-20 -left-4 md:-left-12 bg-[#18181b]/90 backdrop-blur-xl border border-white/10 p-4 rounded-2xl flex items-center gap-4 shadow-2xl"
              >
                <div className="w-12 h-12 bg-violet-500/20 rounded-xl flex items-center justify-center text-violet-400">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white font-bold text-xl">100%</p>
                  <p className="text-xs text-zinc-400">Jaminan Magang</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* STATS BAR */}
        <section className="px-6 relative z-20 -mt-10 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto bg-[#18181b]/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl shadow-black/50"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5">
              {[
                { label: "Siswa Lulus", value: "2.5K+", icon: Users },
                { label: "Guru Expert", value: "45+", icon: BookOpen },
                { label: "Mitra Industri", value: "120+", icon: Briefcase },
                { label: "Fasilitas Lab", value: "15+", icon: MonitorPlay },
              ].map((stat, i) => (
                <div key={i} className="text-center px-4">
                  <div className="w-10 h-10 mx-auto bg-white/5 rounded-full flex items-center justify-center mb-3">
                    <stat.icon className="w-5 h-5 text-teal-400" />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-1">{stat.value}</h3>
                  <p className="text-sm text-zinc-400 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* PROGRAM UNGGULAN */}
        <SekolahSection />

        {/* ALUR PENDAFTARAN */}
        <section id="alur" className="py-24 px-6 relative bg-[#18181b]/30 border-y border-white/5 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-sm text-teal-400 font-bold tracking-widest uppercase mb-3">Pendaftaran</h2>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-4">4 Langkah Mudah</h3>
              <p className="text-zinc-400 max-w-xl mx-auto">Proses pendaftaran yang transparan, cepat, dan sepenuhnya bisa dilakukan secara online.</p>
            </div>

            <div className="relative">
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-teal-500/20 via-violet-500/20 to-teal-500/20 -translate-y-1/2" />
              
              <div className="grid md:grid-cols-4 gap-12 relative z-10">
                {[
                  { step: "01", title: "Isi Formulir", desc: "Daftar secara online dan lengkapi data diri Anda dengan benar." },
                  { step: "02", title: "Verifikasi Berkas", desc: "Tim kami akan memverifikasi kelengkapan dokumen pendukung." },
                  { step: "03", title: "Tes Potensi", desc: "Ikuti tes potensi akademik dan wawancara singkat secara online." },
                  { step: "04", title: "Diterima 🎉", desc: "Selamat! Anda resmi menjadi bagian dari keluarga besar kami." }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="relative text-center group"
                  >
                    <div className="w-20 h-20 mx-auto bg-[#09090b] border-2 border-white/10 group-hover:border-teal-400 rounded-2xl flex items-center justify-center text-2xl font-black text-white mb-6 relative z-10 transition-colors duration-500 shadow-xl">
                      {item.step}
                      {i !== 3 && <ChevronRight className="absolute -right-8 top-1/2 -translate-y-1/2 text-white/20 md:hidden" />}
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                    <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TEACHERS */}
        <section id="mentor" className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-sm text-violet-400 font-bold tracking-widest uppercase mb-3">Tim Ahli</h2>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-4">Mentor Profesional</h3>
              <p className="text-zinc-400 max-w-xl mx-auto">Belajar langsung dari praktisi industri dengan pengalaman bertahun-tahun di bidangnya.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Pak Budi", role: "Lead Programmer", img: "https://randomuser.me/api/portraits/men/32.jpg", exp: "10+ Tahun di Tech Startup" },
                { name: "Bu Rina", role: "Senior Financial Analyst", img: "https://randomuser.me/api/portraits/women/44.jpg", exp: "Mantan Auditor di Big 4" },
                { name: "Pak Andi", role: "Head of Digital Marketing", img: "https://randomuser.me/api/portraits/men/65.jpg", exp: "Certified Google Expert" }
              ].map((teacher, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#18181b] border border-white/5 rounded-3xl p-8 text-center hover:border-violet-500/30 transition-colors group"
                >
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <div className="absolute inset-0 bg-gradient-to-tr from-teal-400 to-violet-500 rounded-full blur opacity-50 group-hover:opacity-100 transition-opacity" />
                    <img src={teacher.img} alt={teacher.name} className="relative w-full h-full rounded-full object-cover border-4 border-[#18181b]" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-1">{teacher.name}</h4>
                  <p className="text-teal-400 font-medium mb-4">{teacher.role}</p>
                  <p className="text-sm text-zinc-400 px-4">{teacher.exp}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section id="galeri" className="py-24 px-6 bg-[#18181b]/30 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-sm text-teal-400 font-bold tracking-widest uppercase mb-3">Kehidupan Kampus</h2>
              <h3 className="text-4xl md:text-5xl font-black text-white">Galeri Kegiatan</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=800" className="w-full h-64 md:h-80 object-cover rounded-3xl" />
              <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} src="https://images.unsplash.com/photo-1584697964353-7e6f1fdb5e57?auto=format&fit=crop&q=80&w=800" className="w-full h-64 md:h-80 object-cover rounded-3xl" />
              <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} src="https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&q=80&w=800" className="w-full h-64 md:h-80 object-cover rounded-3xl" />
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-4xl md:text-5xl font-black text-white mb-16">Kisah Sukses Alumni</h3>
            
            <div className="grid md:grid-cols-3 gap-8 text-left">
              {[
                { text: "Kurikulumnya sangat up-to-date. Sebelum lulus saya sudah mendapat tawaran kerja di perusahaan startup impian.", author: "Dimas A.", role: "Software Engineer" },
                { text: "Mentor-mentornya luar biasa, tidak hanya mengajarkan teori tapi juga best practices di industri.", author: "Sari P.", role: "Data Analyst" },
                { text: "Fasilitas lengkap dan suasana belajar yang sangat mendukung produktivitas. Highly recommended!", author: "Kevin W.", role: "Digital Marketer" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#18181b] p-8 rounded-3xl border border-white/5 relative"
                >
                  <div className="text-teal-500/20 text-6xl font-serif absolute top-4 right-6">"</div>
                  <div className="flex gap-1 text-teal-400 mb-6 relative z-10">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-zinc-300 leading-relaxed mb-8 relative z-10">"{item.text}"</p>
                  <div className="relative z-10">
                    <p className="font-bold text-white">{item.author}</p>
                    <p className="text-sm text-teal-400">{item.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* LOCATION & CTA */}
        <section className="py-24 px-6 bg-[#18181b]/50 border-t border-white/5">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-black text-white mb-6">Kunjungi Kampus Kami</h2>
              <p className="text-zinc-400 mb-8 leading-relaxed">Lihat langsung fasilitas modern kami dan konsultasikan rencana pendidikanmu dengan tim akademik kami.</p>
              
              <div className="flex items-start gap-4 mb-8">
                <MapPin className="text-teal-400 w-6 h-6 shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-white mb-1">Gedung Pendidikan Masa Depan</p>
                  <p className="text-sm text-zinc-400">Jl. Teknologi No. 123, Kawasan Inovasi<br/>Jakarta Selatan, 12345</p>
                </div>
              </div>

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-teal-400 font-bold hover:text-white transition-colors"
              >
                Lihat di Peta <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="h-[400px] rounded-3xl overflow-hidden border border-white/10 relative">
              <iframe
                className="absolute inset-0 w-full h-full grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                src="https://maps.google.com/maps?q=jakarta&t=&z=13&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
              />
            </motion.div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-violet-600" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')] mix-blend-overlay opacity-10 bg-cover bg-center" />
          
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Ambil Langkah Pertama</h2>
            <p className="text-teal-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">Bergabunglah dengan ribuan siswa sukses lainnya. Kuota terbatas untuk periode penerimaan bulan ini!</p>
            
            <a
              href={`https://wa.me/${phone}`}
              className="inline-flex items-center gap-2 bg-white text-zinc-950 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-transform shadow-2xl"
            >
              <CheckCircle2 className="w-6 h-6 text-teal-500" />
              Daftar Sekarang
            </a>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-[#09090b] pt-16 pb-8 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <GraduationCap className="text-teal-500 w-6 h-6" />
            <span className="text-xl font-bold text-white">{data.name}</span>
          </div>
          <div className="text-zinc-500 text-sm font-medium">
            © {new Date().getFullYear()} {data.name}. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ========================= */
/* 📚 PROGRAM SECTION */
/* ========================= */

function SekolahSection() {
  const programs = [
    {
      name: "Teknik Informatika",
      desc: "Pelajari software engineering, AI, dan cloud computing dengan kurikulum standar industri tech.",
      icon: MonitorPlay,
      color: "from-blue-500 to-cyan-400"
    },
    {
      name: "Akuntansi Modern",
      desc: "Kuasai manajemen keuangan korporat menggunakan software akuntansi modern dan analisis data.",
      icon: Calculator,
      color: "from-teal-500 to-emerald-400"
    },
    {
      name: "Bisnis Digital",
      desc: "Pelajari digital marketing, e-commerce, dan strategi pengembangan startup teknologi.",
      icon: Briefcase,
      color: "from-violet-500 to-fuchsia-400"
    },
  ];

  return (
    <section id="program" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm text-teal-400 font-bold tracking-widest uppercase mb-3">Fakultas</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white">Program Unggulan</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group bg-[#18181b] border border-white/5 hover:border-white/20 p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-500/10"
            >
              <div className={`w-14 h-14 rounded-2xl mb-8 flex items-center justify-center bg-gradient-to-br ${item.color} shadow-lg`}>
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{item.name}</h3>
              <p className="text-zinc-400 leading-relaxed font-medium mb-8">{item.desc}</p>
              
              <a href="#" className="inline-flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                Pelajari Detail <ArrowRight className="w-4 h-4 text-teal-400" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
