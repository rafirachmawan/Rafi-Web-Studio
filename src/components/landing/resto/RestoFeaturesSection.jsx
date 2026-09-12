import { Flame, Star, CheckCircle2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function RestoFeaturesSection() {
  const features = [
    {
      icon: Flame,
      title: "Authentic Gacoan Flavor",
      desc: "Resep asli dari Yogyakarta dengan cita rasa manis-pedas yang legendaris"
    },
    {
      icon: Star,
      title: "Premium Quality Ingredients",
      desc: "Bahan-bahan segar pilihan, mie homemade setiap hari untuk tekstur optimal"
    },
    {
      icon: Sparkles,
      title: "Customizable Spice Level",
      desc: "Atur tingkat kepedasan dari level 1-10 sesuai toleransi lidahmu!"
    },
    {
      icon: CheckCircle2,
      title: "Halal & Hygienic Certified",
      desc: "100% halal, diproses dengan standar kebersihan tinggi dan aman dikonsumsi"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-xs text-pink-500 font-bold tracking-[0.3em] uppercase mb-4">Why Choose Us</h2>
          <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">The Gacoan Difference</h3>
          <p className="text-slate-600 text-sm max-w-2xl mx-auto">
            Lebih dari sekadar mie pedas — ini adalah pengalaman kuliner yang sudah mendunia!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-pink-300 transition-all shadow-md shadow-slate-200/40 hover:shadow-xl hover:shadow-pink-500/10"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              
              <h4 className="font-black text-lg text-slate-900 mb-3">{feature.title}</h4>
              <p className="text-slate-600 text-xs leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
