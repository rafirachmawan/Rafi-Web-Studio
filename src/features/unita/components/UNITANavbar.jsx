import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { unita } from "../data/unita";
import logoUnita from "../../../assets/universitasTulungagung/logoUnita.jpg";
import {
  Laptop, BookOpen, Globe, Briefcase, Menu, X, ChevronDown, Sparkles, ExternalLink
} from "lucide-react";

export function UNITANavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
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

  return (
    <>
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
    </>
  );
}
