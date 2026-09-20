import { motion } from "framer-motion";
import { unita } from "../data/unita";

export function UNITAFasilitasSection() {
  return (
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
  );
}
