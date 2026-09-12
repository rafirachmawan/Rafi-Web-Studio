import { motion } from "framer-motion";
import { useState } from "react";
import { unita } from "../../data/unita";
import { Search, ExternalLink } from "lucide-react";

export function UNITAEserviceSection() {
  const [activeEserviceCat, setActiveEserviceCat] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  const categoriesEservice = ["Semua", "Akademik", "Pembelajaran", "Pustaka", "Nasional", "Alumni"];

  const filteredEservices = unita.eServices.filter((s) => {
    const matchesCat = activeEserviceCat === "Semua" || s.category === activeEserviceCat;
    const matchesSearch =
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
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
            <div
              key={svc.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="eservice-card"
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
                >
                  Buka Service <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
