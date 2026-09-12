import { Droplets, Clock, Truck } from "lucide-react";
import { motion } from "framer-motion";

const FEATURES = [
  { icon: Droplets, title: "Deterjen Premium Anti-Bakteri", desc: "Membunuh 99.9% kuman penyebab bau tak sedap." },
  { icon: Clock, title: "Tepat Waktu", desc: "Kami menjamin cucian Anda selesai sesuai estimasi waktu." },
  { icon: Truck, title: "Gratis Antar Jemput", desc: "Tanpa repot keluar rumah, kurir kami siap menjemput." }
];

export function LaundryFeaturesSection() {
  return (
    <section id="keunggulan" className="px-6 mb-24 relative">
      <div className="absolute inset-0 bg-blue-600 rounded-[3rem] md:rounded-[5rem] -skew-y-2 transform -z-10 mx-4 md:mx-10" />
      
      <div className="max-w-7xl mx-auto py-20 md:py-32 px-6 lg:px-16 text-white grid md:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Kenapa Harus Memilih <span className="text-blue-200">Aio Laundry?</span></h2>
          <p className="text-blue-100 text-lg mb-10 leading-relaxed font-medium">Kami tidak sekadar mencuci pakaian Anda. Kami merawatnya menggunakan teknologi modern dan deterjen ramah lingkungan yang menjaga warna dan serat kain.</p>
          
          <div className="space-y-6">
            {FEATURES.map((feature, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <feature.icon className="w-6 h-6 text-blue-200" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">{feature.title}</h4>
                  <p className="text-blue-100/80">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
          <div className="aspect-[4/5] bg-white p-4 rounded-3xl shadow-2xl transform rotate-3">
            <img src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover rounded-2xl" alt="Clean Clothes" />
          </div>
          <div className="absolute -bottom-8 -left-8 bg-white text-slate-900 p-6 rounded-3xl shadow-xl transform -rotate-3 flex items-center gap-4">
            {/* <CheckCircle2 className="w-10 h-10 text-emerald-500" /> */}
            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">✓</div>
            <div>
              <p className="font-black text-xl">10.000+</p>
              <p className="text-sm font-bold text-slate-500">Pakaian Dicuci</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
