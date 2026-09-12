import { motion } from "framer-motion";
import { Sparkles, Truck, ShieldCheck, Zap } from "lucide-react";

export function LaundryHeroSection({ phone }) {
  const waLink = `https://wa.me/${phone}?text=${encodeURIComponent("Halo, saya ingin order penjemputan laundry.")}`;

  return (
    <section className="px-6 mb-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative z-10"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-bold mb-6 shadow-sm"
          >
            <Sparkles className="w-4 h-4" />
            Aio Laundry Express Antar Jemput
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black mb-6 leading-[1.1] text-slate-900 tracking-tight"
          >
            Pakaian Bersih <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Seperti Baru Lagi
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed font-medium"
          >
            Nikmati layanan cuci express dengan formula anti-bakteri. Gratis antar-jemput untuk wilayah kota dengan sistem pelacakan real-time.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href={waLink}
              className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/30 transition-all hover:-translate-y-1 flex items-center gap-2"
            >
              <Truck className="w-5 h-5" />
              Jemput Pakaian Saya
            </a>
            <a
              href="#layanan"
              className="bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-all flex items-center gap-2 shadow-sm"
            >
              Lihat Harga
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex items-center gap-4 text-sm font-bold text-slate-500"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img key={i} src={`https://randomuser.me/api/portraits/women/${20+i}.jpg`} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt="Customer" />
              ))}
            </div>
            <p>Dipercaya oleh <span className="text-blue-600">2,000+</span> pelanggan setia.</p>
          </motion.div>
        </motion.div>

        {/* Right Image with Floating Badges */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative lg:h-[600px] w-full flex items-center justify-center"
        >
          <div className="relative w-full max-w-lg aspect-square lg:aspect-auto lg:h-[90%] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
            <img
              src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80&w=1000"
              alt="Fresh Laundry"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Badge 1 */}
          <motion.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 -left-6 md:-left-12 bg-white/90 backdrop-blur-md border border-slate-100 p-4 rounded-2xl flex items-center gap-4 shadow-xl z-20"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-slate-900 font-black">Garansi 100%</p>
              <p className="text-xs text-slate-500 font-bold">Aman dari Kelunturan</p>
            </div>
          </motion.div>

          {/* Floating Badge 2 */}
          <motion.div 
            animate={{ y: [15, -15, 15] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 -right-6 md:-right-10 bg-white/90 backdrop-blur-md border border-slate-100 p-4 rounded-2xl flex items-center gap-4 shadow-xl z-20"
          >
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <p className="text-slate-900 font-black">Selesai 24 Jam</p>
              <p className="text-xs text-slate-500 font-bold">Layanan Express</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
