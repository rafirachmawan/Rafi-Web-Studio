// src/sections/rental/RentalService.jsx
// Service Section for Yamaha Motor Indonesia

import { motion } from "framer-motion";
import { Wrench, Clock, Phone, CheckCircle } from "lucide-react";

export function RentalService() {
  const services = [
    {
      icon: <Wrench size={24} />,
      title: "Service Booking",
      description:
        "Layanan booking jadwal servis secara online tanpa perlu antre di dealer.",
      features: [
        "Booking Online 24/7",
        "Pilih Waktu Sesuai Kebutuhan",
        "Notifikasi Konfirmasi",
      ],
    },
    {
      icon: <Clock size={24} />,
      title: "Genuine Parts",
      description:
        "Suku cadang asli Yamaha (YGP) menjamin kinerja optimal dan daya tahan lama.",
      features: ["100% Genuine Parts", "Mahal Terjamin", "Bergaransi Resmi"],
    },
    {
      icon: <Phone size={24} />,
      title: "Konsultasi Teknis",
      description:
        "Tim teknis berpengalaman siap membantu konsultasi masalah motor Anda.",
      features: [
        "Ahli Tersertifikasi",
        "Diagnosis Akurat",
        "Solusi Tepat Guna",
      ],
    },
  ];

  return (
    <section id="service" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-red-500 text-xs font-semibold tracking-widest uppercase mb-4">
            Layanan Kami
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
            Yamaha Service Center
          </h3>
          <p className="text-zinc-600 max-w-2xl mx-auto">
            Layanan purna jual profesional dengan peralatan modern dan teknisi
            tersertifikasi
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white mb-6">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-zinc-900 mb-3">
                {service.title}
              </h4>
              <p className="text-zinc-600 mb-4 text-sm leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-sm text-zinc-600"
                  >
                    <CheckCircle
                      size={16}
                      className="text-blue-500 flex-shrink-0"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href={`https://wa.me/6281212345678?text=${encodeURIComponent(`Halo, saya ingin konsultasi service untuk motor saya`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-black font-bold rounded-lg transition-colors"
          >
            <Phone size={20} />
            Hubungi Service Center
          </a>
        </motion.div>
      </div>
    </section>
  );
}
