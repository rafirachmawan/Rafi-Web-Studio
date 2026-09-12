import { motion } from "framer-motion";
import { Wind, Shirt, Zap } from "lucide-react";

const SERVICES = [
  { name: "Cuci Pakaian Kiloan", price: "Mulai Rp 5k", unit: "/kg", icon: Wind, desc: "Layanan cuci, kering, dan setrika pakaian harian Anda dengan hasil rapi dan wangi.", color: "text-sky-500", bg: "bg-sky-50" },
  { name: "Cuci Bedding", price: "Mulai Rp 15k", unit: "/pcs", icon: Shirt, desc: "Cuci bersih berbagai macam sprei, selimut, dan bed cover untuk kenyamanan tidur maksimal.", color: "text-blue-600", bg: "bg-blue-50", popular: true },
  { name: "Cuci Sepatu & Tas", price: "Mulai Rp 25k", unit: "/pcs", icon: Zap, desc: "Perawatan khusus cuci sepatu, tas, dan stroller kesayangan Anda agar tampak seperti baru.", color: "text-indigo-600", bg: "bg-indigo-50" },
];

export function LaundryServicesSection({ waLink }) {
  return (
    <section id="layanan" className="px-6 mb-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm text-blue-600 font-black tracking-widest uppercase mb-3">Daftar Layanan</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900">Pilih Paket Sesuai Kebutuhan</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative bg-white rounded-[2rem] p-8 border ${item.popular ? 'border-blue-500 shadow-xl shadow-blue-500/10' : 'border-slate-100 shadow-lg shadow-slate-200/50'} hover:-translate-y-2 transition-all duration-300`}
            >
              {item.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                  Paling Laris
                </div>
              )}
              
              <div className={`${item.bg} rounded-2xl flex items-center justify-center mb-8`}>
                <item.icon className={`w-8 h-8 ${item.color}`} />
              </div>
              
              <h4 className="text-2xl font-black text-slate-900 mb-2">{item.name}</h4>
              <p className="text-slate-500 font-medium mb-6 leading-relaxed">{item.desc}</p>
              
              <div className="flex items-end gap-1 mb-8">
                <span className="text-4xl font-black text-slate-900">{item.price}</span>
                <span className="text-slate-500 font-bold mb-1">{item.unit}</span>
              </div>

              <a href={waLink} className={`block w-full text-center py-4 rounded-xl font-bold transition-all ${item.popular ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>
                Pilih Paket
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
