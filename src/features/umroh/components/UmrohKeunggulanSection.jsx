import { motion } from "framer-motion";
import { ShieldCheck, HeartHandshake, Plane } from "lucide-react";

const FEATURES = [
  { icon: ShieldCheck, title: "Terpercaya & Berizin Resmi", desc: "Perusahaan kami terdaftar resmi di Kemenag RI, menjamin keamanan dan kenyamanan perjalanan ibadah Anda." },
  { icon: HeartHandshake, title: "Pembimbing Profesional", desc: "Didampingi oleh muthawif bersertifikat dan berpengalaman yang akan membimbing ibadah sesuai sunnah." },
  { icon: Plane, title: "Penerbangan Direct", desc: "Menggunakan maskapai penerbangan terbaik dengan rute direct (langsung) untuk kenyamanan maksimal." }
];

export function UmrohKeunggulanSection() {
  return (
    <section id="keunggulan" className="py-24 px-6 relative z-20 bg-[#fdfbf7]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm text-orange-700 font-black tracking-widest uppercase mb-3">Kenapa Memilih Kami</h2>
          <h3 className="text-4xl md:text-5xl font-black text-orange-950">Pelayanan Jamaah Terbaik</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {FEATURES.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-white p-10 rounded-[2rem] border border-stone-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-8 text-orange-700">
                <item.icon className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-black text-orange-950 mb-4">{item.title}</h4>
              <p className="text-stone-500 leading-relaxed font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
