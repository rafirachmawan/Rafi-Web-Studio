import { motion } from "framer-motion";
import { unita } from "../../data/unita";
import { Star } from "lucide-react";

export function UNITATestimoniSection() {
  return (
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
  );
}
