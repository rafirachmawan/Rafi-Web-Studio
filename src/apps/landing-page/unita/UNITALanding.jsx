import "./unita.css";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { unita } from "../../../data/unita";
import logoUnita from "../../../assets/universitasTulungagung/logoUnita.jpg";
import heroBanner from "../../../assets/universitasTulungagung/heroUnita.jpeg";
import mahasiswaImg from "../../../assets/universitasTulungagung/mahasiswaUnita.jpeg";
import beforeImg from "../../../assets/universitasTulungagung/before.png";

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
  ChevronRight,
  Star,
  Phone,
  Mail,
  Globe,
  Building2,
  Microscope,
  Radio,
  Wifi,
  Download,
  ExternalLink,
  ShieldCheck,
  FileText,
  Search,
  Laptop,
  Briefcase,
  Layers,
  ChevronDown,
  Sparkles,
} from "lucide-react";

/* ─── ANIMATION VARIANTS ─── */
const FU = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const ST = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function UNITALanding() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeFacultyTab, setActiveFacultyTab] = useState("all");
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeEserviceCat, setActiveEserviceCat] = useState("Semua");
  const [selectedServiceModal, setSelectedServiceModal] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Dropdown menus definition matching universitasTulungagung.md
  const dropdownMenus = [
    {
      id: "tentang",
      title: "Tentang",
      href: "#tentang",
      items: [
        { name: "Sejarah UNITA", desc: "Berdiri 18 Mei 1984" },
        { name: "Visi & Misi Kampus", desc: "Insan Akademik Global" },
        { name: "Struktur Organisasi", desc: "Yayasan & Rektorat" },
        { name: "Makna Lambang & Hymne", desc: "Identitas UNITA" },
        { name: "Fakultas & Prodi", desc: "5 Fakultas & 8 Prodi" },
        { name: "Rekapitulasi Dosen", desc: "69 Dosen Qualified" },
      ],
    },
    {
      id: "akademik",
      title: "Akademik",
      href: "#akademik",
      items: [
        { name: "Panduan & Kalender", desc: "Jadwal Semester 2025/2026" },
        { name: "Sistem Pembelajaran", desc: "Edlink & SPADA UNITA" },
        { name: "Program MBKM", desc: "Merdeka Belajar Kampus Merdeka" },
        { name: "Panduan RPL", desc: "Rekognisi Pembelajaran Lampau" },
        { name: "Kurikulum Prodi", desc: "Berbasis CPL & DUDI" },
      ],
    },
    {
      id: "lembaga",
      title: "Unit & Lembaga",
      href: "#lembaga",
      items: [
        { name: "Pusat Penjaminan Mutu (PPM)", desc: "Standar Mutu Internal" },
        { name: "LPPM UNITA", desc: "Riset & Pengabdian Masyarakat" },
        { name: "Biro Administrasi (BAAK/BAUK)", desc: "Layanan Kemahasiswaan" },
        { name: "Inkubator Bisnis & HAKI", desc: "Wirausaha & Hak Cipta" },
        { name: "UPT Perpustakaan & TIK", desc: "Fasilitas Komputer & Pustaka" },
      ],
    },
    {
      id: "eservice",
      title: "E-Service",
      href: "#eservice",
      items: [
        { name: "SIAKAD Online", desc: "Portal KRS & Nilai", link: unita.siakad },
        { name: "E-Learning (Edlink)", desc: "Kuliah Daring Interaktif", link: unita.elearning },
        { name: "E-Library & Repository", desc: "Jurnal & Tugas Akhir", link: unita.elibrary },
        { name: "PDDIKTI & SISTER", desc: "Integrasi Nasional", link: unita.pddikti },
        { name: "KarirLink Alumni", desc: "Tracer Study & Lowongan", link: unita.karirlink },
      ],
    },
    {
      id: "fasilitas",
      title: "Fasilitas",
      href: "#fasilitas",
      items: [
        { name: "Gedung Graha Krida Wiyada", desc: "Aula Utama Kampus" },
        { name: "Laboratorium Fakultas", desc: "Komputer, K3, Sipil, Elektro, Kebidanan" },
        { name: "Radio R-UNITA FM", desc: "Penyiaran Kampus" },
        { name: "UKM & BEM", desc: "Organisasi Kemahasiswaan" },
        { name: "Free Wi-Fi Area", desc: "Koneksi Cepat Kampus" },
      ],
    },
    {
      id: "download",
      title: "Download",
      href: "#download",
      items: [
        { name: "Informasi Akademik", desc: "File Panduan PDF" },
        { name: "Produk Hukum Kampus", desc: "SK Rektor & SE Yayasan" },
        { name: "Sertifikat Akreditasi", desc: "Akreditasi B BAN-PT" },
      ],
    },
  ];

  const filteredFaculties =
    activeFacultyTab === "all"
      ? unita.faculties
      : unita.faculties.filter((f) => f.id === activeFacultyTab);

  const categoriesEservice = ["Semua", "Akademik", "Pembelajaran", "Pustaka", "Nasional", "Alumni"];

  const filteredEservices = unita.eServices.filter((s) => {
    const matchesCat = activeEserviceCat === "Semua" || s.category === activeEserviceCat;
    const matchesSearch =
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="unita-root">
      {/* ── BACKGROUND BLOBS ── */}
      <div className="unita-blobs">
        <div className="blob blob-red" />
        <div className="blob blob-blue" />
        <div className="blob blob-gold" />
      </div>

      {/* ── TOP ANNOUNCEMENT BAR ── */}
      <div className="unita-topbar">
        <div className="unita-container topbar-inner">
          <div className="topbar-left">
            <span className="topbar-badge">Domain Resmi .ac.id</span>
            <span className="topbar-text">
              🏛️ <strong>Universitas Tulungagung</strong> — Terakreditasi B BAN-PT | Subdomain PMB:{" "}
              <a href={unita.pmb} target="_blank" rel="noreferrer" className="underline font-bold">
                pmb.unita.ac.id
              </a>
            </span>
          </div>
          <div className="topbar-right">
            <a href={unita.siakad} target="_blank" rel="noreferrer" className="topbar-link">
              <Laptop size={13} /> SIAKAD
            </a>
            <a href={unita.elearning} target="_blank" rel="noreferrer" className="topbar-link">
              <BookOpen size={13} /> E-Learning
            </a>
            <a href={unita.pddikti} target="_blank" rel="noreferrer" className="topbar-link">
              <Globe size={13} /> PDDIKTI
            </a>
            <a href={unita.karirlink} target="_blank" rel="noreferrer" className="topbar-link font-semibold">
              <Briefcase size={13} /> KarirLink
            </a>
          </div>
        </div>
      </div>

      {/* ── NAVBAR WITH OFFICIAL LOGO & DROPDOWNS ── */}
      <nav className={`unita-nav ${scrolled ? "scrolled" : ""}`}>
        <div className="unita-container nav-inner">
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="nav-brand"
          >
            <div className="brand-logo-img-wrap">
              <img src={logoUnita} alt="Logo Universitas Tulungagung" className="brand-logo-img" />
            </div>
            <div className="brand-text">
              <span className="brand-short">UNITA</span>
              <span className="brand-full">Universitas Tulungagung</span>
            </div>
          </motion.a>

          {/* Desktop Nav Dropdowns */}
          <div className="nav-links">
            {dropdownMenus.map((menu) => (
              <div
                key={menu.id}
                className="nav-item-dropdown"
                onMouseEnter={() => setOpenDropdown(menu.id)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a href={menu.href} className="nav-link flex items-center gap-1">
                  {menu.title} <ChevronDown size={14} className="nav-arrow" />
                </a>

                <AnimatePresence>
                  {openDropdown === menu.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.2 }}
                      className="dropdown-menu-box"
                    >
                      <div className="dropdown-grid">
                        {menu.items.map((item, idx) => (
                          <a
                            key={idx}
                            href={item.link || menu.href}
                            target={item.link ? "_blank" : "_self"}
                            rel={item.link ? "noreferrer" : ""}
                            className="dropdown-item"
                          >
                            <div className="dropdown-item-dot" />
                            <div>
                              <p className="dropdown-item-title">{item.name}</p>
                              <p className="dropdown-item-desc">{item.desc}</p>
                            </div>
                            {item.link && <ExternalLink size={12} className="opacity-60 ml-auto" />}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <motion.a
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            href={unita.pmb}
            target="_blank"
            rel="noreferrer"
            className="btn-daftar flex items-center gap-2"
          >
            <Sparkles size={16} /> PMB Online 2025
          </motion.a>

          <button className="nav-hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mobile-menu"
            >
              {dropdownMenus.map((menu) => (
                <div key={menu.id} className="mobile-menu-group">
                  <p className="mobile-menu-title">{menu.title}</p>
                  <div className="mobile-menu-sub">
                    {menu.items.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.link || menu.href}
                        onClick={() => setMobileOpen(false)}
                        className="mobile-link-sub"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
              <a
                href={unita.pmb}
                target="_blank"
                rel="noreferrer"
                className="btn-daftar mobile-cta mt-4 flex items-center justify-center gap-2"
              >
                <Sparkles size={16} /> Daftar PMB Online 2025
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>
        {/* ── HERO SECTION WITH ACCREDITATION & LOGO ── */}
        <section className="unita-hero">
          <div className="unita-container hero-grid">
            <motion.div initial="hidden" animate="visible" variants={ST} className="hero-content">
              <motion.div variants={FU} className="hero-badge">
                <ShieldCheck size={16} className="text-emerald-400" />
                <span>Akreditasi Institusi B (BAN-PT) &nbsp;|&nbsp; Est. 18 Mei 1984</span>
              </motion.div>

              <motion.h1 variants={FU} className="hero-title">
                Raih Masa Depan Akademik<br />
                <span className="hero-gradient">Bersama UNITA</span>
              </motion.h1>

              <motion.p variants={FU} className="hero-sub">
                {unita.vision} Kampus swasta terkemuka di Tulungagung dengan 5 Fakultas, 8 Program Studi terakreditasi, dan ekosistem e-service digital terintegrasi nasional.
              </motion.p>

              <motion.div variants={FU} className="hero-actions">
                <a href={unita.pmb} target="_blank" rel="noreferrer" className="btn-primary">
                  Daftar PMB 2025 <ArrowRight size={18} />
                </a>
                <a href="#eservice" className="btn-ghost">
                  <Laptop size={18} /> E-Services Kampus
                </a>
              </motion.div>

              {/* Quick Tags */}
              <motion.div variants={FU} className="hero-tags">
                <span className="hero-tag"><CheckCircle2 size={13} /> 69 Dosen Tetap S2/S3</span>
                <span className="hero-tag"><CheckCircle2 size={13} /> 1.596+ Mahasiswa Aktif</span>
                <span className="hero-tag"><CheckCircle2 size={13} /> Integrated SIAKAD & Edlink</span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="hero-visual"
            >
              <div className="hero-img-wrap">
                <img
                  src={heroBanner}
                  alt="Kampus Universitas Tulungagung"
                  className="hero-img"
                  onError={(e) => {
                    e.target.src =
                      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=900";
                  }}
                />
                <div className="hero-img-overlay" />
                <div className="hero-logo-badge">
                  <img src={logoUnita} alt="Logo Emblem UNITA" className="hero-badge-logo" />
                  <div>
                    <p className="hero-badge-title">UNIVERSITAS TULUNGAGUNG</p>
                    <p className="hero-badge-sub">unita.ac.id · Est. 1984</p>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="float-card float-top"
              >
                <div className="float-icon red">
                  <Users size={20} />
                </div>
                <div>
                  <p className="float-value">1.596+</p>
                  <p className="float-label">Mahasiswa Aktif PDDIKTI</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="float-card float-bottom"
              >
                <div className="float-icon blue">
                  <Award size={20} />
                </div>
                <div>
                  <p className="float-value">Akreditasi B</p>
                  <p className="float-label">BAN-PT / AIPT Resmi</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── KREDIBILITAS & LEGITIMASI NASIONAL ── */}
        <section className="credibility-section">
          <div className="unita-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="credibility-banner"
            >
              <div className="credibility-header">
                <ShieldCheck size={28} className="text-emerald-400" />
                <div>
                  <h3>Situs Resmi & Kredibilitas Terverifikasi</h3>
                  <p>
                    Universitas Tulungagung menggunakan domain tingkat tinggi institusi akademik resmi (<strong>.ac.id</strong>) dan terhubung secara sistemik dengan kementerian.
                  </p>
                </div>
              </div>
              <div className="credibility-grid">
                {unita.credibilityNotes.map((note, idx) => (
                  <div key={idx} className="credibility-card">
                    <div className="credibility-icon">✓</div>
                    <div>
                      <h4>{note.title}</h4>
                      <p>{note.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── STATS BAR ── */}
        <section className="stats-section">
          <div className="unita-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="stats-grid"
            >
              {unita.stats.map((s, i) => (
                <div key={i} className="stat-item">
                  <h3 className="stat-value">{s.value}</h3>
                  <p className="stat-label">{s.label}</p>
                  <p className="stat-desc">{s.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── TENTANG & VISI MISI ── */}
        <section id="tentang" className="about-section">
          <div className="unita-container about-grid">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="about-img-col"
            >
              <div className="about-img-wrap">
                <img
                  src={mahasiswaImg}
                  alt="Mahasiswa UNITA di Kampus"
                  className="about-img"
                />
                <div className="about-badge-card">
                  <img src={logoUnita} alt="UNITA Seal" className="w-10 h-10 object-contain mb-1" />
                  <span className="about-badge-num">18 Mei 1984</span>
                  <span className="about-badge-txt">Berdiri Sejak</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="about-content"
            >
              <p className="section-eyebrow blue">Profil Institusi</p>
              <h2 className="section-title">
                Lebih dari 40 Tahun<br />
                <span className="text-red">Mencetak Insan Akademik Unggul</span>
              </h2>
              <p className="about-desc">
                Universitas Tulungagung (UNITA) berada di bawah naungan <strong>Yayasan Universitas Tulungagung</strong>. Beroperasi di area strategis Beji, Boyolangu, Tulungagung, UNITA berkomitmen tinggi menyelenggarakan Tri Dharma Perguruan Tinggi dengan kurikulum modern dan fasilitasi digital terkini.
              </p>
              <div className="mission-list">
                {unita.missions.map((m, i) => (
                  <div key={i} className="mission-item">
                    <CheckCircle2 size={18} className="mission-check" />
                    <p>{m}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── FAKULTAS & 8 PROGRAM STUDI ── */}
        <section id="akademik" className="fakultas-section">
          <div className="unita-container">
            <div className="section-header">
              <p className="section-eyebrow red">Program Studi Terakreditasi BAN-PT</p>
              <h2 className="section-title">
                5 Fakultas & <span className="text-blue">8 Program Studi</span>
              </h2>
              <p className="section-sub">
                Pilih jenjang Sarjana (S1) dan Vokasi (D3) yang disesuaikan dengan tantangan karir industri global.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="tab-nav">
              <button
                className={`tab-btn ${activeFacultyTab === "all" ? "active" : ""}`}
                onClick={() => setActiveFacultyTab("all")}
              >
                Semua Fakultas
              </button>
              {unita.faculties.map((f) => (
                <button
                  key={f.id}
                  className={`tab-btn ${activeFacultyTab === f.id ? "active" : ""}`}
                  onClick={() => setActiveFacultyTab(f.id)}
                >
                  {f.code}
                </button>
              ))}
            </div>

            {/* Faculty Cards Grid */}
            <div className="faculty-grid-full">
              {filteredFaculties.map((f, i) => (
                <motion.div
                  key={f.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="faculty-card-modern"
                >
                  <div className={`faculty-header-bar bg-gradient-to-r ${f.color}`}>
                    <span className="faculty-code-pill">{f.code}</span>
                    <h3 className="faculty-title-name">{f.name}</h3>
                  </div>

                  <div className="faculty-body">
                    <p className="faculty-body-desc">{f.desc}</p>

                    <div className="prodi-list-box">
                      <p className="prodi-box-label">Program Studi:</p>
                      <div className="prodi-chips">
                        {f.programs.map((prog, pIdx) => (
                          <span key={pIdx} className="prodi-chip">
                            🎓 {prog}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="faculty-highlights">
                      {f.highlights.map((h, hIdx) => (
                        <span key={hIdx} className="highlight-tag">
                          ✓ {h}
                        </span>
                      ))}
                    </div>

                    <a
                      href={unita.pmb}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary small w-full justify-center mt-4"
                    >
                      Daftar {f.name} <ArrowRight size={15} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── E-SERVICES & SISTEM INFORMASI (CUKUP LENGKAP) ── */}
        <section id="eservice" className="eservice-section">
          <div className="unita-container">
            <div className="section-header">
              <p className="section-eyebrow blue">Layanan Digital Kampus</p>
              <h2 className="section-title">
                Portal E-Service <span className="text-red">Terpadu UNITA</span>
              </h2>
              <p className="section-sub">
                Kemudahan akses informasi akademik, e-learning, perpustakaan digital, serta integrasi sistem nasional Kemdiktisaintek.
              </p>
            </div>

            {/* Category Filter & Search */}
            <div className="eservice-filter-bar">
              <div className="eservice-cat-buttons">
                {categoriesEservice.map((cat) => (
                  <button
                    key={cat}
                    className={`cat-btn ${activeEserviceCat === cat ? "active" : ""}`}
                    onClick={() => setActiveEserviceCat(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="eservice-search-box">
                <Search size={16} className="text-gray-400 ml-3" />
                <input
                  type="text"
                  placeholder="Cari layanan (SIAKAD, Edlink, PDDIKTI...)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="eservice-search-input"
                />
              </div>
            </div>

            {/* Eservice Cards Grid */}
            <div className="eservice-grid">
              {filteredEservices.map((svc) => (
                <motion.div
                  key={svc.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="eservice-card"
                  onClick={() => setSelectedServiceModal(svc)}
                >
                  <div className="eservice-top">
                    <span className="eservice-icon">{svc.icon}</span>
                    <span className="eservice-badge">{svc.badge}</span>
                  </div>
                  <h4 className="eservice-title">{svc.name}</h4>
                  <p className="eservice-desc">{svc.desc}</p>
                  <div className="eservice-footer">
                    <span className="eservice-cat-name">{svc.category}</span>
                    <a
                      href={svc.url}
                      target={svc.url !== "#" ? "_blank" : "_self"}
                      rel="noreferrer"
                      className="eservice-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Buka Service <ExternalLink size={14} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── UNIT & FASILITAS KAMPUS ── */}
        <section id="fasilitas" className="fasilitas-section">
          <div className="unita-container">
            <div className="section-header">
              <p className="section-eyebrow red">Sarana & Prasarana</p>
              <h2 className="section-title">
                Fasilitas Kampus <span className="text-blue">Lengkap & Modern</span>
              </h2>
            </div>

            <div className="fasilitas-grid">
              {unita.facilities.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
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

        {/* ── PENDAFTARAN MAHASISWA BARU (PMB 2025) ── */}
        <section id="daftar" className="daftar-section">
          <div className="unita-container">
            <div className="section-header">
              <p className="section-eyebrow gold">PMB Online 2025/2026</p>
              <h2 className="section-title white">
                4 Langkah Mudah <span className="text-gold">Menjadi Mahasiswa UNITA</span>
              </h2>
            </div>

            <div className="daftar-steps">
              {unita.admissionSteps.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="step-card"
                >
                  <div className="step-num">{s.step}</div>
                  {i < 3 && <div className="step-line" />}
                  <h4 className="step-title">{s.title}</h4>
                  <p className="step-desc">{s.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="daftar-cta"
            >
              <a href={unita.pmb} target="_blank" rel="noreferrer" className="btn-gold">
                <CheckCircle2 size={20} /> Mulai Pendaftaran di pmb.unita.ac.id
              </a>
              <a
                href={`https://wa.me/${unita.wa}?text=Halo%20Panitia%20PMB%20UNITA,%20saya%20ingin%20bertanya%20mengenai%20pendaftaran%20mahasiswa%20baru.`}
                target="_blank"
                rel="noreferrer"
                className="btn-wa"
              >
                💬 Konsultasi WhatsApp PMB
              </a>
            </motion.div>
          </div>
        </section>

        {/* ── TESTIMONIALS ALUMNI ── */}
        <section className="testi-section">
          <div className="unita-container">
            <div className="section-header">
              <p className="section-eyebrow blue">Kisah Alumni</p>
              <h2 className="section-title">
                Kata Alumni <span className="text-red">Universitas Tulungagung</span>
              </h2>
            </div>
            <div className="testi-grid">
              {unita.testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="testi-card"
                >
                  <div className="testi-stars">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <p className="testi-text">"{t.text}"</p>
                  <div className="testi-author">
                    <img
                      src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                        t.author
                      )}&background=0D8ABC&color=fff`}
                      alt={t.author}
                      className="testi-avatar-img"
                    />
                    <div>
                      <p className="testi-name">{t.author}</p>
                      <p className="testi-prodi">
                        {t.prodi} · {t.year}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DOWNLOAD CENTER ── */}
        <section id="download" className="download-section">
          <div className="unita-container">
            <div className="download-box">
              <div className="download-text">
                <p className="section-eyebrow gold">Download & Dokumen Resmi</p>
                <h3>Pusat Unduhan Informasi Akademik & SK Rektor</h3>
                <p> Unduh Panduan Akademik, Kalender Akademik, Dokumen SK Rektor, dan Sertifikat Akreditasi BAN-PT.</p>
              </div>
              <div className="download-actions">
                <a href="#" className="btn-download">
                  <Download size={16} /> Panduan Akademik (PDF)
                </a>
                <a href="#" className="btn-download outline">
                  <FileText size={16} /> Sertifikat BAN-PT
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── KONTAK & MAPS ── */}
        <section id="kontak" className="kontak-section">
          <div className="unita-container kontak-grid">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="kontak-info"
            >
              <p className="section-eyebrow red">Hubungi Kampus</p>
              <h2 className="section-title">
                Lokasi Kampus <span className="text-blue">Universitas Tulungagung</span>
              </h2>
              <div className="kontak-list">
                <div className="kontak-item">
                  <MapPin size={20} className="kontak-icon red" />
                  <div>
                    <p className="kontak-label">Alamat Lengkap</p>
                    <p className="kontak-val">{unita.address}</p>
                  </div>
                </div>
                <div className="kontak-item">
                  <Phone size={20} className="kontak-icon blue" />
                  <div>
                    <p className="kontak-label">Telepon Kantor</p>
                    <p className="kontak-val">{unita.phone}</p>
                  </div>
                </div>
                <div className="kontak-item">
                  <Mail size={20} className="kontak-icon red" />
                  <div>
                    <p className="kontak-label">Email Resmi</p>
                    <p className="kontak-val">{unita.email}</p>
                  </div>
                </div>
                <div className="kontak-item">
                  <Globe size={20} className="kontak-icon blue" />
                  <div>
                    <p className="kontak-label">Website & Subdomain PMB</p>
                    <a href={unita.website} target="_blank" rel="noreferrer" className="kontak-link">
                      {unita.website}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="kontak-map"
            >
              <iframe
                title="Peta Lokasi UNITA Beji Boyolangu"
                src={unita.mapsEmbed}
                className="map-iframe"
                loading="lazy"
              />
            </motion.div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="unita-footer">
        <div className="unita-container footer-inner">
          <div className="footer-brand">
            <img src={logoUnita} alt="UNITA Emblem" className="w-12 h-12 object-contain" />
            <div>
              <p className="footer-name">Universitas Tulungagung (UNITA)</p>
              <p className="footer-short">Yayasan Universitas Tulungagung · Est. 18 Mei 1984</p>
            </div>
          </div>
          <p className="footer-copy">
            © {new Date().getFullYear()} Universitas Tulungagung (unita.ac.id). All Rights Reserved.
          </p>
          <div className="footer-links">
            <a href={unita.website} target="_blank" rel="noreferrer">
              unita.ac.id
            </a>
            <a href={unita.pmb} target="_blank" rel="noreferrer">
              pmb.unita.ac.id
            </a>
            <a href={unita.siakad} target="_blank" rel="noreferrer">
              siakad.unita.ac.id
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
