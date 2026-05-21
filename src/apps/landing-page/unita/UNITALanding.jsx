import "./unita.css";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { unita } from "../../../data/unita";
import {
  GraduationCap, BookOpen, Users, Award, ArrowRight, MapPin,
  Menu, X, CheckCircle2, ChevronRight, Star, Phone, Mail,
  Globe, Building2, Microscope, Radio, Wifi
} from "lucide-react";

/* ─── ANIMATION VARIANTS ─── */
const FU = { hidden:{opacity:0,y:30}, visible:{opacity:1,y:0,transition:{duration:0.6,ease:"easeOut"}} };
const ST = { hidden:{opacity:0}, visible:{opacity:1,transition:{staggerChildren:0.12}} };

/* ─── COLOUR PALETTE ─── */
// Primary: UNITA Red  #CC0000 / #B30000
// Secondary: UNITA Navy #003399 / #0044CC
// Accent gold: #FFD700

export default function UNITALanding() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navLinks = [
    { label: "Fakultas", href: "#fakultas" },
    { label: "Fasilitas", href: "#fasilitas" },
    { label: "Pendaftaran", href: "#daftar" },
    { label: "Kontak", href: "#kontak" },
  ];

  return (
    <div className="unita-root">
      {/* ── BG BLOBS ── */}
      <div className="unita-blobs">
        <div className="blob blob-red" />
        <div className="blob blob-blue" />
        <div className="blob blob-gold" />
      </div>

      {/* ── NAVBAR ── */}
      <nav className={`unita-nav ${scrolled ? "scrolled" : ""}`}>
        <div className="unita-container nav-inner">
          <motion.a href="#" initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} className="nav-brand">
            <div className="brand-logo">
              <GraduationCap size={22} />
            </div>
            <div className="brand-text">
              <span className="brand-short">UNITA</span>
              <span className="brand-full">Universitas Tulungagung</span>
            </div>
          </motion.a>

          <div className="nav-links">
            {navLinks.map(l => (
              <a key={l.label} href={l.href} className="nav-link">{l.label}</a>
            ))}
          </div>

          <motion.a
            initial={{opacity:0,x:20}} animate={{opacity:1,x:0}}
            href={unita.pmb} target="_blank" rel="noreferrer"
            className="btn-daftar"
          >
            Daftar Sekarang
          </motion.a>

          <button className="nav-hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24}/> : <Menu size={24}/>}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{opacity:0,height:0}} animate={{opacity:1,height:"100vh"}} exit={{opacity:0,height:0}}
              className="mobile-menu"
            >
              {navLinks.map(l => (
                <a key={l.label} href={l.href} onClick={() => setMobileOpen(false)} className="mobile-link">{l.label}</a>
              ))}
              <a href={unita.pmb} target="_blank" rel="noreferrer" className="btn-daftar mobile-cta">
                Daftar Mahasiswa Baru
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>
        {/* ── HERO ── */}
        <section className="unita-hero">
          <div className="unita-container hero-grid">
            <motion.div initial="hidden" animate="visible" variants={ST} className="hero-content">
              <motion.div variants={FU} className="hero-badge">
                <Award size={14}/> Akreditasi B – BAN-PT &nbsp;|&nbsp; Est. {unita.established}
              </motion.div>
              <motion.h1 variants={FU} className="hero-title">
                Raih Masa Depan<br/>
                <span className="hero-gradient">Bersama UNITA</span>
              </motion.h1>
              <motion.p variants={FU} className="hero-sub">
                {unita.vision}
              </motion.p>
              <motion.div variants={FU} className="hero-actions">
                <a href={unita.pmb} target="_blank" rel="noreferrer" className="btn-primary">
                  Daftar PMB 2025 <ArrowRight size={18}/>
                </a>
                <a href="#fakultas" className="btn-ghost">
                  Lihat Fakultas
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{opacity:0,scale:0.9}} animate={{opacity:1,scale:1}} transition={{duration:0.9,ease:"easeOut"}}
              className="hero-visual"
            >
              <div className="hero-img-wrap">
                <img
                  src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&q=80&w=900"
                  alt="Kampus Universitas Tulungagung"
                  className="hero-img"
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&q=80&w=900'; }}
                />
                <div className="hero-img-overlay"/>
              </div>

              <motion.div animate={{y:[-12,12,-12]}} transition={{duration:4,repeat:Infinity,ease:"easeInOut"}} className="float-card float-top">
                <div className="float-icon red"><Users size={20}/></div>
                <div>
                  <p className="float-value">3.000+</p>
                  <p className="float-label">Mahasiswa Aktif</p>
                </div>
              </motion.div>

              <motion.div animate={{y:[10,-10,10]}} transition={{duration:5,repeat:Infinity,ease:"easeInOut"}} className="float-card float-bottom">
                <div className="float-icon blue"><Award size={20}/></div>
                <div>
                  <p className="float-value">40+ Tahun</p>
                  <p className="float-label">Pengalaman Terpercaya</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Diagonal divider */}
          <div className="hero-divider"/>
        </section>

        {/* ── STATS BAR ── */}
        <section className="stats-section">
          <div className="unita-container">
            <motion.div
              initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
              className="stats-grid"
            >
              {unita.stats.map((s, i) => (
                <div key={i} className="stat-item">
                  <h3 className="stat-value">{s.value}</h3>
                  <p className="stat-label">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── ABOUT / VISI MISI ── */}
        <section className="about-section">
          <div className="unita-container about-grid">
            <motion.div initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} className="about-img-col">
              <div className="about-img-wrap">
                <img
                  src="https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&q=80&w=800"
                  alt="Mahasiswa UNITA"
                  className="about-img"
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800'; }}
                />
                <div className="about-badge-card">
                  <span className="about-badge-num">1984</span>
                  <span className="about-badge-txt">Berdiri Sejak</span>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{opacity:0,x:30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} className="about-content">
              <p className="section-eyebrow blue">Tentang Kami</p>
              <h2 className="section-title">Lebih dari Sekadar<br/><span className="text-red">Perguruan Tinggi</span></h2>
              <p className="about-desc">
                Universitas Tulungagung (UNITA) adalah perguruan tinggi swasta terkemuka di Jawa Timur yang berdiri sejak 18 Mei 1984.
                Di bawah naungan Yayasan Universitas Tulungagung, UNITA berkomitmen melahirkan lulusan yang berkualitas, mandiri, dan
                bermanfaat bagi masyarakat.
              </p>
              <div className="mission-list">
                {unita.missions.map((m, i) => (
                  <div key={i} className="mission-item">
                    <CheckCircle2 size={18} className="mission-check"/>
                    <p>{m}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── FAKULTAS ── */}
        <section id="fakultas" className="fakultas-section">
          <div className="unita-container">
            <div className="section-header">
              <p className="section-eyebrow red">Program Studi</p>
              <h2 className="section-title">Pilih Fakultas <span className="text-blue">Impianmu</span></h2>
              <p className="section-sub">6 fakultas dengan program studi terakreditasi untuk membentuk profesional unggul</p>
            </div>

            {/* Tab Nav */}
            <div className="tab-nav">
              {unita.faculties.map((f, i) => (
                <button key={i} className={`tab-btn ${activeTab === i ? "active" : ""}`} onClick={() => setActiveTab(i)}>
                  {f.name.replace("Fakultas ", "")}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-20}} transition={{duration:0.3}}
                className="tab-content"
              >
                {(() => {
                  const f = unita.faculties[activeTab];
                  return (
                    <div className="faculty-card">
                      <div className={`faculty-icon-wrap bg-grad-${activeTab}`}>
                        <GraduationCap size={36} color="white"/>
                      </div>
                      <div className="faculty-info">
                        <h3 className="faculty-name">{f.name}</h3>
                        <p className="faculty-desc">{f.desc}</p>
                        <div className="prodi-list">
                          {f.programs.map((p, j) => (
                            <span key={j} className="prodi-chip">{p}</span>
                          ))}
                        </div>
                        <a href={unita.pmb} target="_blank" rel="noreferrer" className="btn-primary small">
                          Daftar Program Ini <ArrowRight size={16}/>
                        </a>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </AnimatePresence>

            {/* Faculty Grid */}
            <div className="faculty-grid">
              {unita.faculties.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1}}
                  className={`faculty-mini ${activeTab === i ? "active" : ""}`}
                  onClick={() => setActiveTab(i)}
                >
                  <div className={`faculty-mini-bar bg-grad-${i}`}/>
                  <div className="faculty-mini-content">
                    <h4>{f.name}</h4>
                    <p>{f.programs.length} Program Studi</p>
                    <ChevronRight size={16} className="faculty-arrow"/>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FASILITAS ── */}
        <section id="fasilitas" className="fasilitas-section">
          <div className="unita-container">
            <div className="section-header">
              <p className="section-eyebrow blue">Infrastruktur</p>
              <h2 className="section-title">Fasilitas <span className="text-red">Lengkap & Modern</span></h2>
            </div>
            <div className="fasilitas-grid">
              {unita.facilities.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{opacity:0,scale:0.95}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{delay:i*0.08}}
                  className="fasilitas-card"
                >
                  <div className="fasilitas-icon">{f.icon}</div>
                  <h4 className="fasilitas-name">{f.name}</h4>
                  <p className="fasilitas-desc">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── GALLERY ── */}
        <section className="gallery-section">
          <div className="unita-container">
            <div className="section-header">
              <p className="section-eyebrow red">Kehidupan Kampus</p>
              <h2 className="section-title">Galeri <span className="text-blue">Kegiatan</span></h2>
            </div>
            <div className="gallery-grid">
              {[
                { src: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&q=80&w=800", alt: "Gedung Kampus Universitas" },
                { src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&q=80&w=800", alt: "Wisuda Mahasiswa" },
                { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800", alt: "Diskusi Kelompok Mahasiswa" },
                { src: "https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?auto=format&fit=crop&q=80&w=800", alt: "Kegiatan Mahasiswa" },
                { src: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=800", alt: "Belajar di Perpustakaan" },
                { src: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&q=80&w=800", alt: "Acara Kampus" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{delay:i*0.07}}
                  className={`gallery-item gi-${i}`}
                >
                  <img src={item.src} alt={item.alt} onError={(e) => { e.target.src='https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&q=80&w=800'; }}/>
                  <div className="gallery-overlay"/>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="testi-section">
          <div className="unita-container">
            <div className="section-header">
              <p className="section-eyebrow blue">Kata Mereka</p>
              <h2 className="section-title">Kisah Sukses <span className="text-red">Alumni</span></h2>
            </div>
            <div className="testi-grid">
              {unita.testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.15}}
                  className="testi-card"
                >
                  <div className="testi-stars">
                    {[...Array(5)].map((_,j) => <Star key={j} size={14} fill="currentColor"/>)}
                  </div>
                  <p className="testi-text">"{t.text}"</p>
                  <div className="testi-author">
                    <div className="testi-avatar">{t.author[0]}</div>
                    <div>
                      <p className="testi-name">{t.author}</p>
                      <p className="testi-prodi">{t.prodi} · {t.year}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PENDAFTARAN ── */}
        <section id="daftar" className="daftar-section">
          <div className="unita-container">
            <div className="section-header">
              <p className="section-eyebrow gold">PMB 2025</p>
              <h2 className="section-title white">Langkah Mudah <span className="text-gold">Masuk UNITA</span></h2>
            </div>
            <div className="daftar-steps">
              {unita.admissionSteps.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.15}}
                  className="step-card"
                >
                  <div className="step-num">{s.step}</div>
                  {i < 3 && <div className="step-line"/>}
                  <h4 className="step-title">{s.title}</h4>
                  <p className="step-desc">{s.desc}</p>
                </motion.div>
              ))}
            </div>
            <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="daftar-cta">
              <a href={unita.pmb} target="_blank" rel="noreferrer" className="btn-gold">
                <CheckCircle2 size={20}/> Mulai Pendaftaran Online
              </a>
              <a href={`https://wa.me/${unita.wa}`} target="_blank" rel="noreferrer" className="btn-wa">
                💬 Chat WhatsApp PMB
              </a>
            </motion.div>
          </div>
        </section>

        {/* ── KONTAK & MAP ── */}
        <section id="kontak" className="kontak-section">
          <div className="unita-container kontak-grid">
            <motion.div initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} className="kontak-info">
              <p className="section-eyebrow red">Hubungi Kami</p>
              <h2 className="section-title">Kunjungi Kampus <span className="text-blue">UNITA</span></h2>
              <div className="kontak-list">
                <div className="kontak-item">
                  <MapPin size={20} className="kontak-icon red"/>
                  <div>
                    <p className="kontak-label">Alamat</p>
                    <p className="kontak-val">{unita.address}</p>
                  </div>
                </div>
                <div className="kontak-item">
                  <Phone size={20} className="kontak-icon blue"/>
                  <div>
                    <p className="kontak-label">Telepon</p>
                    <p className="kontak-val">{unita.phone}</p>
                  </div>
                </div>
                <div className="kontak-item">
                  <Mail size={20} className="kontak-icon red"/>
                  <div>
                    <p className="kontak-label">Email</p>
                    <p className="kontak-val">{unita.email}</p>
                  </div>
                </div>
                <div className="kontak-item">
                  <Globe size={20} className="kontak-icon blue"/>
                  <div>
                    <p className="kontak-label">Website</p>
                    <a href={unita.website} target="_blank" rel="noreferrer" className="kontak-link">{unita.website}</a>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{opacity:0,x:30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} className="kontak-map">
              <iframe
                title="Lokasi UNITA"
                src="https://maps.google.com/maps?q=Universitas+Tulungagung+Boyolangu&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="map-iframe"
                loading="lazy"
              />
            </motion.div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="final-cta">
          <div className="cta-bg"/>
          <div className="unita-container cta-inner">
            <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="cta-title">
              Wujudkan Impianmu<br/>Bersama UNITA!
            </motion.h2>
            <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{delay:0.2}} className="cta-sub">
              Ribuan alumni sukses, ratusan mitra industri — bergabunglah dan jadilah bagian dari keluarga besar UNITA.
            </motion.p>
            <motion.div initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.3}} className="cta-actions">
              <a href={unita.pmb} target="_blank" rel="noreferrer" className="btn-white">
                Daftar Sekarang <ArrowRight size={18}/>
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="unita-footer">
        <div className="unita-container footer-inner">
          <div className="footer-brand">
            <GraduationCap size={28} className="footer-logo-icon"/>
            <div>
              <p className="footer-name">Universitas Tulungagung</p>
              <p className="footer-short">UNITA — Est. 1984</p>
            </div>
          </div>
          <p className="footer-copy">© {new Date().getFullYear()} Universitas Tulungagung. All Rights Reserved.</p>
          <div className="footer-links">
            <a href={unita.website} target="_blank" rel="noreferrer">Website Resmi</a>
            <a href={unita.pmb} target="_blank" rel="noreferrer">PMB Online</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
