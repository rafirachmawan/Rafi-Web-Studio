import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Search, Phone, Clock, Compass, ExternalLink, ShieldCheck } from "lucide-react";
import { rental } from "../data/rental";

export function RentalDealers() {
  const [cityFilter, setCityFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const dealers = rental.dealers || [];

  const cities = ["all", "Jakarta", "Depok", "Yogyakarta", "Surabaya"];

  const filteredDealers = dealers.filter((d) => {
    const matchCity = cityFilter === "all" || d.city.toLowerCase().includes(cityFilter.toLowerCase());
    const matchSearch =
      d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.city.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCity && matchSearch;
  });

  return (
    <section id="dealers" className="py-24 sm:py-32 bg-zinc-50 dark:bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-4">
            <MapPin size={14} />
            <span>Jaringan 3.000+ Dealer Resmi se-Indonesia</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-900 dark:text-white font-heading tracking-tight mb-4">
            Temukan Dealer & Bengkel Yamaha Terdekat
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
            Dapatkan pelayanan sales terbaik, ketersediaan suku cadang resmi 100% YGP, serta fasilitas servis profesional bersertifikasi standar Yamaha Motor.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-sm mb-10">
          <div className="relative w-full sm:max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
            <input
              type="text"
              placeholder="Cari nama dealer, jalan, atau kota..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-2.5 pl-10 pr-4 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200/80 dark:border-zinc-700 text-xs sm:text-sm text-zinc-800 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto scrollbar-none">
            {cities.map((c) => (
              <button
                key={c}
                onClick={() => setCityFilter(c)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all capitalize whitespace-nowrap ${
                  cityFilter === c
                    ? "bg-blue-600 text-white shadow-xs"
                    : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200"
                }`}
              >
                {c === "all" ? "Semua Kota" : c}
              </button>
            ))}
          </div>
        </div>

        {/* Dealers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {filteredDealers.map((d, i) => (
            <motion.div
              key={d.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:border-blue-500/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-300">
                    {d.city}
                  </span>
                  <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    <ShieldCheck size={14} />
                    <span>{d.type}</span>
                  </span>
                </div>

                <h3 className="text-lg font-bold text-zinc-900 dark:text-white font-heading">
                  {d.name}
                </h3>

                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed flex items-start gap-2">
                  <MapPin size={15} className="text-blue-600 shrink-0 mt-0.5" />
                  <span>{d.address}</span>
                </p>

                <p className="text-xs text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
                  <Clock size={15} className="text-amber-500 shrink-0" />
                  <span>{d.openHours}</span>
                </p>

                {/* Facilities Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {d.facilities?.map((f, fIdx) => (
                    <span
                      key={fIdx}
                      className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200/60 dark:border-zinc-700/60"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="grid grid-cols-2 gap-3 pt-6 mt-4 border-t border-zinc-100 dark:border-zinc-800">
                <a
                  href={`tel:${d.phone.replace(/[^0-9]/g, "")}`}
                  className="py-2.5 px-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-800 dark:text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
                >
                  <Phone size={14} />
                  <span>{d.phone}</span>
                </a>

                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(d.name + " " + d.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-sm shadow-blue-600/20 flex items-center justify-center gap-1.5"
                >
                  <span>Google Maps</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
