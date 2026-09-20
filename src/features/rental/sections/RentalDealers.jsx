// src/sections/rental/RentalDealers.jsx
// Dealers Section for Yamaha Motor Indonesia

import { motion } from "framer-motion";
import { MapPin, Search, Phone } from "lucide-react";

export function RentalDealers() {
  const dealers = [
    {
      name: "Yamaha Motor Dealer Jakarta",
      location: "Jakarta Timur",
      address: "Jl. Raya Husein Mutahar No. 123",
      phone: "(021) 1234-5678",
      services: ["Service", "Parts", "Test Drive"],
    },
    {
      name: "Yamaha Motor Dealer Bogor",
      location: "Bogor",
      address: "Jl. Pajajaran No. 456",
      phone: "(0251) 2345-6789",
      services: ["Service", "Parts", "Showroom"],
    },
    {
      name: "Yamaha Motor Dealer Depok",
      location: "Depok",
      address: "Jl. Margonda No. 789",
      phone: "(021) 3456-7890",
      services: ["Service", "Parts"],
    },
    {
      name: "Yamaha Motor Dealer Tangerang",
      location: "Tangerang",
      address: "Jl. HR Rasuna Said No. 321",
      phone: "(021) 4567-8901",
      services: ["Service", "Parts", "Showroom", "Test Drive"],
    },
  ];

  return (
    <section id="dealers" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-blue-500 text-xs font-semibold tracking-widest uppercase mb-4">
            Network Kami
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
            Cari Dealer Yamaha Terdekat
          </h3>
          <p className="text-zinc-600 max-w-2xl mx-auto">
            Temukan dealer dan service center Yamaha resmi di seluruh Indonesia
          </p>
        </motion.div>

        {/* Search Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="bg-white rounded-xl shadow-lg p-4 flex items-center gap-3 border border-gray-200">
            <Search className="text-zinc-400" size={24} />
            <input
              type="text"
              placeholder="Masukkan kota atau alamat..."
              className="flex-1 outline-none text-zinc-900 placeholder-zinc-400"
            />
            <button className="px-6 py-3 bg-red-500 hover:bg-red-600 text-black font-bold rounded-lg transition-colors">
              Cari
            </button>
          </div>
        </motion.div>

        {/* Dealers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
          {dealers.map((dealer, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <MapPin className="text-blue-500" size={24} />
                  <div>
                    <h4 className="font-bold text-zinc-900">{dealer.name}</h4>
                    <p className="text-sm text-zinc-600">{dealer.location}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <p className="text-sm text-zinc-600">📍 {dealer.address}</p>
                <p className="text-sm text-zinc-600">☎️ {dealer.phone}</p>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <p className="text-xs text-zinc-500 uppercase tracking-wide mb-2">
                  Layanan:
                </p>
                <div className="flex flex-wrap gap-2">
                  {dealer.services.map((service, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-50 text-blue-500 text-xs font-medium rounded-full"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
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
            href={`https://wa.me/6281212345678?text=${encodeURIComponent(`Halo, saya ingin informasi dealer Yamaha terdekat`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-black font-bold rounded-lg transition-colors"
          >
            <Phone size={20} />
            Tanya Lokasi Dealer via WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
