// src/sections/coffee/ResponsibilitySection.jsx
// Starbucks Sustainability & Social Responsibility with CleanPlaceholder

import { motion } from "framer-motion";
import { Leaf, Users, Recycle, Heart, CheckCircle2 } from "lucide-react";
import CleanPlaceholder from "../../components/common/CleanPlaceholder";

const initiatives = [
  {
    id: "ethical-sourcing",
    title: "Farmer Support Center (Berastagi)",
    subtitle: "Dukungan Nyata Petani Kopi Sumatra",
    desc: "Melalui Farmer Support Center di Sumatra Utara, Starbucks menyediakan bibit pohon kopi gratis dan pelatihan agronomi untuk meningkatkan kesejahteraan petani kopi lokal.",
    stat: "99% Etis",
    statLabel: "C.A.F.E. Practices",
    icon: Leaf,
    badge: "Ethical Sourcing",
  },
  {
    id: "tumbler-day",
    title: "Bring Your Own Tumbler",
    subtitle: "Gerakan Bebas Sampah Plastik",
    desc: "Bawa tumbler resmi Starbucks dan nikmati potongan harga Rp 5.000 untuk minuman apa saja setiap hari, serta diskon spesial Tumbler Day setiap tanggal 22 setiap bulan.",
    stat: "Rp 5.000",
    statLabel: "Hemat Setiap Hari",
    icon: Recycle,
    badge: "Eco Habit",
  },
  {
    id: "community-support",
    title: "Community & Ayo Inklusif",
    subtitle: "Pemberdayaan Pemuda & Disabilitas",
    desc: "Gerai Signing Store pertama di Kotabaru & Jakarta memberdayakan mitra tuli (Deaf partners) serta program pelatihan kerja pemuda melalui Starbucks Foundation.",
    stat: "5.000+",
    statLabel: "Jam Volunteering",
    icon: Users,
    badge: "Community",
  },
];

export function ResponsibilitySection() {
  return (
    <section id="responsibility" className="relative py-28 px-6 bg-[#0B1512] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00704A]/20 border border-[#00704A]/30 text-emerald-400 text-xs font-extrabold uppercase tracking-widest mb-4">
            <Heart size={14} className="fill-current" />
            <span>People & Planet Positive</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-white mb-4">
            Committed to Our Community & Earth
          </h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Menyajikan kopi dengan integritas moral. Kami berjanji untuk memberi kembali lebih banyak kepada bumi dan komunitas dari apa yang kami ambil.
          </p>
        </div>

        {/* Responsibility Cards with CleanPlaceholder */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {initiatives.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#101C18] rounded-3xl p-6 border border-white/10 hover:border-[#00704A]/50 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Visual Placeholder */}
                <div className="h-48 mb-6 rounded-2xl overflow-hidden relative">
                  <CleanPlaceholder
                    width={700}
                    height={450}
                    ratio="16:10"
                    label={item.title}
                    sublabel={item.subtitle}
                    badge={item.badge}
                    icon={item.icon}
                    className="w-full h-full !p-3"
                  />
                </div>

                <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
                  <item.icon size={15} />
                  <span>{item.badge}</span>
                </div>

                <h3 className="text-xl font-bold font-serif text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              {/* Stat Bottom Box */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <span className="block text-xl font-extrabold text-white font-mono">
                    {item.stat}
                  </span>
                  <span className="text-[10px] text-zinc-500 uppercase tracking-wider">
                    {item.statLabel}
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#00704A]/20 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
