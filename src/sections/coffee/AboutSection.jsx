// src/sections/coffee/AboutSection.jsx
// Starbucks Indonesia Heritage & Story Section with CleanPlaceholder

import { motion } from "framer-motion";
import { Building2, Calendar, ShieldCheck, MapPin, Award } from "lucide-react";
import CleanPlaceholder from "../../components/common/CleanPlaceholder";

export function AboutSection() {
  const stats = [
    { value: "2002", label: "Hadir di Indonesia", sub: "Plaza Indonesia" },
    { value: "500+", label: "Gerai di Indonesia", sub: "40+ Kota" },
    { value: "5.000+", label: "Mitra Barista", sub: "Coffee Masters" },
    { value: "100%", label: "Halal Certified", sub: "BPJPH & MUI" },
  ];

  return (
    <section id="about" className="relative py-28 px-6 bg-gradient-to-b from-[#0B1512] to-[#080E0C] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heritage Story */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00704A]/20 border border-[#00704A]/30 text-emerald-400 text-xs font-extrabold uppercase tracking-widest mb-4">
                <Calendar size={14} />
                <span>Our Heritage in Indonesia</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-white leading-tight mb-6">
                24+ Tahun Menginspirasi Lewat Secangkir Kopi
              </h2>

              <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-6">
                Perjalanan Starbucks di Indonesia dimulai pada <strong>17 Mei 2002</strong> di Plaza Indonesia, Jakarta, di bawah naungan PT Sari Coffee Indonesia (bagian dari MAP Group). 
              </p>

              <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8">
                Hingga kini, Starbucks telah menjadi <em>Third Place</em> yang hangat bagi jutaan masyarakat Indonesia di lebih dari 500 gerai—menghubungkan petani kopi lokal Sumatra dan Aceh dengan para pecinta kopi dunia. Seluruh gerai dan produk Starbucks di Indonesia telah mengantongi sertifikasi <strong>Halal Resmi (BPJPH / MUI)</strong> dan standar mutu ISO.
              </p>

              {/* Certifications Badge Row */}
              <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#121F1A] border border-emerald-500/20 text-xs text-emerald-300 font-semibold">
                  <ShieldCheck size={16} className="text-emerald-400" />
                  <span>Halal Certified (BPJPH / MUI)</span>
                </div>

                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#121F1A] border border-emerald-500/20 text-xs text-emerald-300 font-semibold">
                  <Award size={16} className="text-emerald-400" />
                  <span>ISO Standards Certified</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Heritage Visuals & Stats with CleanPlaceholder */}
          <div className="lg:col-span-6 space-y-6">
            {/* Heritage Photos Grid with CleanPlaceholder */}
            <div className="grid grid-cols-2 gap-4">
              <div className="h-44 sm:h-52 rounded-2xl overflow-hidden relative shadow-lg">
                <CleanPlaceholder
                  width={600}
                  height={450}
                  ratio="4:3"
                  label="Gerai Pertama 2002"
                  sublabel="Plaza Indonesia, Jakarta"
                  badge="Heritage"
                  icon={Building2}
                  className="w-full h-full !p-3"
                />
              </div>

              <div className="h-44 sm:h-52 rounded-2xl overflow-hidden relative shadow-lg">
                <CleanPlaceholder
                  width={600}
                  height={450}
                  ratio="4:3"
                  label="Barista Championship"
                  sublabel="Indonesia Coffee Masters"
                  badge="Excellence"
                  icon={Award}
                  className="w-full h-full !p-3"
                />
              </div>
            </div>

            {/* Indonesia Numbers Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map((stat, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-[#121E1A] border border-white/5 text-center">
                  <span className="block text-2xl sm:text-3xl font-black text-emerald-400 font-mono mb-0.5">
                    {stat.value}
                  </span>
                  <span className="block text-[11px] font-bold text-white mb-0.5">
                    {stat.label}
                  </span>
                  <span className="block text-[9px] text-zinc-500">
                    {stat.sub}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
