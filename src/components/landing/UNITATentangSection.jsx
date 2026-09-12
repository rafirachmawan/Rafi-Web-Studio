import { motion } from "framer-motion";
import { unita } from "../../data/unita";
import logoUnita from "../../assets/universitasTulungagung/logoUnita.jpg";
import mahasiswaImg from "../../assets/universitasTulungagung/mahasiswaUnita.jpeg";
import { CheckCircle2 } from "lucide-react";

export function UNITATentangSection() {
  return (
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
  );
}
