import { motion } from "framer-motion";
import { useState } from "react";
import { unita } from "../data/unita";
import { ArrowRight } from "lucide-react";

export function UNITAFakultasSection() {
  const [activeFacultyTab, setActiveFacultyTab] = useState("all");

  const filteredFaculties = activeFacultyTab === "all" 
    ? unita.faculties 
    : unita.faculties.filter((f) => f.id === activeFacultyTab);

  return (
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
  );
}
