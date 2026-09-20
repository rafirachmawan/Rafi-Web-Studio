import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const ALUR_DATA = [
  { step: "01", title: "Isi Formulir", desc: "Daftar secara online dan lengkapi data diri Anda dengan benar." },
  { step: "02", title: "Verifikasi Berkas", desc: "Tim kami akan memverifikasi kelengkapan dokumen pendukung." },
  { step: "03", title: "Tes Potensi", desc: "Ikuti tes potensi akademik dan wawancara singkat secara online." },
  { step: "04", title: "Diterima 🎉", desc: "Selamat! Anda resmi menjadi bagian dari keluarga besar kami." }
];

export function SekolahAlurSection() {
  return (
    <section id="alur" className="py-24 px-6 relative bg-[#18181b]/30 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-sm text-teal-400 font-bold tracking-widest uppercase mb-3">Pendaftaran</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white mb-4">4 Langkah Mudah</h3>
          <p className="text-zinc-400 max-w-xl mx-auto">Proses pendaftaran yang transparan, cepat, dan sepenuhnya bisa dilakukan secara online.</p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-teal-500/20 via-violet-500/20 to-teal-500/20 -translate-y-1/2" />
          
          <div className="grid md:grid-cols-4 gap-12 relative z-10">
            {ALUR_DATA.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative text-center group"
              >
                <div className="w-20 h-20 mx-auto bg-[#09090b] border-2 border-white/10 group-hover:border-teal-400 rounded-2xl flex items-center justify-center text-2xl font-black text-white mb-6 relative z-10 transition-colors duration-500 shadow-xl">
                  {item.step}
                  {i !== 3 && <ChevronRight className="absolute -right-8 top-1/2 -translate-y-1/2 text-white/20 md:hidden" />}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
