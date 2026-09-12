import { ShieldCheck, Zap, Clock, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function RentalFeaturesSection() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Trusted & Professional",
      desc: "Driver berpengalaman, kendaraan terawat, dan asuransi lengkap untuk keamanan maksimal"
    },
    {
      icon: Zap,
      title: "Instant Booking",
      desc: "Pesan kendaraan hanya dalam beberapa menit melalui WhatsApp dengan respon cepat"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      desc: "Tim support siap membantu Anda kapan saja selama rental berlangsung"
    },
    {
      icon: MessageCircle,
      title: "Transparent Pricing",
      desc: "Harga jelas tanpa biaya tersembunyi, sesuai kesepakatan awal"
    }
  ];

  return (
    <section id="features" className="py-24 px-6 bg-[#0e0e12] border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-xs text-red-500 font-bold tracking-[0.3em] uppercase mb-4">Why Choose Us</h2>
          <h3 className="text-3xl md:text-5xl font-black text-white mb-6">Premium Service Standards</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-red-500/50 transition-all text-center group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              
              <h4 className="font-black text-lg text-white mb-3">{feature.title}</h4>
              <p className="text-zinc-400 text-xs leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
