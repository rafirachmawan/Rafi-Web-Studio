import { motion } from "framer-motion";
import { unita } from "../../data/unita";

export function UNITAStatsSection() {
  return (
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
  );
}
