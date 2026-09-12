import { motion } from "framer-motion";
import { Clock, MapPin, Plane } from "lucide-react";

export const PACKAGES_DATA = [
  {
    name: "Paket Hemat",
    price: "Rp 25.000.000",
    duration: "9 Hari",
    hotelMakkah: "Bintang 3 (± 500m)",
    hotelMadinah: "Bintang 3 (± 300m)",
    flight: "Direct Flight Jakarta",
    highlight: false
  },
  {
    name: "Paket Reguler",
    price: "Rp 30.000.000",
    duration: "10 Hari",
    hotelMakkah: "Bintang 4 (± 300m)",
    hotelMadinah: "Bintang 4 (± 150m)",
    flight: "Saudia Airlines Direct",
    highlight: true
  },
  {
    name: "Paket VIP Eksklusif",
    price: "Rp 40.000.000",
    duration: "12 Hari",
    hotelMakkah: "Bintang 5 (Zamzam Tower)",
    hotelMadinah: "Bintang 5 (Pelataran)",
    flight: "Saudia Airlines Business",
    highlight: false
  }
];

export function UmrohPaketSection({ waLink }) {
  return (
    <section id="paket" className="py-24 px-6 bg-stone-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm text-orange-700 font-black tracking-widest uppercase mb-3">Pilihan Program</h2>
          <h3 className="text-4xl md:text-5xl font-black text-orange-950 mb-6">Paket Umroh 2026</h3>
          <p className="text-stone-500 max-w-2xl mx-auto font-medium">Kami menyediakan berbagai pilihan paket yang disesuaikan dengan kebutuhan dan kenyamanan ibadah Anda bersama keluarga.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {PACKAGES_DATA.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bg-white rounded-[2rem] p-8 border ${pkg.highlight ? 'border-amber-400 shadow-[0_20px_50px_rgba(217,119,6,0.15)] md:-translate-y-4' : 'border-stone-100 shadow-lg shadow-stone-200/50'} relative overflow-hidden`}
            >
              {pkg.highlight && (
                <div className="absolute top-6 right-6 bg-amber-100 text-amber-700 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                  Terfavorit
                </div>
              )}

              <h4 className="text-2xl font-black text-orange-950 mb-2">{pkg.name}</h4>
              <div className="text-4xl font-black text-orange-800 mb-8">{pkg.price}</div>

              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className="text-stone-600 font-medium">Program {pkg.duration}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className="text-stone-600 font-medium">Makkah: {pkg.hotelMakkah}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className="text-stone-600 font-medium">Madinah: {pkg.hotelMadinah}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Plane className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className="text-stone-600 font-medium">{pkg.flight}</span>
                </div>
              </div>

              <a
                href={waLink}
                className={`block w-full text-center py-4 rounded-xl font-bold transition-colors ${
                  pkg.highlight 
                    ? 'bg-amber-500 hover:bg-amber-400 text-orange-950' 
                    : 'bg-orange-50 hover:bg-orange-100 text-orange-800'
                }`}
              >
                Pilih Paket Ini
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
