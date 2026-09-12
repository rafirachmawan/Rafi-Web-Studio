import { motion } from "framer-motion";
import { unita } from "../../data/unita";
import logoUnita from "../../assets/universitasTulungagung/logoUnita.jpg";
import heroBanner from "../../assets/universitasTulungagung/heroUnita.jpeg";
import { ShieldCheck, ArrowRight, Laptop, CheckCircle2, Users, Award } from "lucide-react";

const FU = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const ST = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export function UNITAHeroSection() {
  return (
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
  );
}
