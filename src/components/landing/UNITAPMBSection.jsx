import { motion } from "framer-motion";
import { unita } from "../../data/unita";
import { CheckCircle2 } from "lucide-react";

export function UNITAPMBSection() {
  return (
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
  );
}
