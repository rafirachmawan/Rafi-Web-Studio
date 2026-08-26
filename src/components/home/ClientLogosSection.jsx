import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import unitaLogo from "../../assets/universitasTulungagung/logoUnita.jpg";
import crownLogo from "../../assets/crown/logoCrown.png";
import gacoanLogo from "../../assets/mieGacoan/logoMieGacoan.png";
import aioLaundryLogo from "../../assets/loundry/logoLoundry.png";
import iconYamaha from "../../assets/Yamaha/iconyamaha.png";

const clients = [
  { name: "Yayasan Shining Sun School", type: "Lembaga Pendidikan", logo: unitaLogo },
  { name: "Bank BRI Surabaya", type: "BUMN Perbankan", logo: null, textLogo: "BANK BRI" },
  { name: "Komunitas Tamiya Indonesia", type: "Komunitas & Event", logo: null, textLogo: "TAMIYA ID" },
  { name: "Universitas Tulungagung", type: "Perguruan Tinggi", logo: unitaLogo },
  { name: "Crown Victoria Hotel", type: "Hotel Bintang 4", logo: crownLogo },
  { name: "Mie Gacoan Tulungagung", type: "Restoran F&B", logo: gacoanLogo },
  { name: "Aio Laundry Express", type: "Jasa Laundry", logo: aioLaundryLogo },
  { name: "Yamaha Motor ID (Showcase)", type: "Otomotif", logo: iconYamaha },
];

export default function ClientLogosSection() {
  const { t } = useLanguage();
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section className="py-10 border-y border-zinc-200/80 dark:border-white/5 bg-zinc-50/50 dark:bg-zinc-900/30 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
        <p className="text-[11px] sm:text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-[0.2em]">
          {t("Telah Membantu Digitalisasi Klien & Institusi", "Trusted By Clients & Digital Institutions")}
        </p>
      </div>

      <div className="relative w-full overflow-hidden flex items-center">
        {/* Left & Right gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-zinc-50/90 dark:from-[#050508] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-zinc-50/90 dark:from-[#050508] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex gap-8 md:gap-12 items-center py-2">
          {duplicatedClients.map((client, idx) => (
            <div
              key={idx}
              className="shrink-0 flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white dark:bg-zinc-900/80 border border-zinc-200/60 dark:border-white/5 shadow-sm group hover:border-amber-500/40 transition-all"
            >
              {client.logo ? (
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-7 h-7 rounded-lg object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              ) : (
                <div className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center font-black text-[10px]">
                  {client.textLogo ? client.textLogo.substring(0, 3) : "CLI"}
                </div>
              )}
              <div className="text-left">
                <span className="block text-xs font-bold text-zinc-800 dark:text-zinc-200 group-hover:text-amber-500 transition-colors">
                  {client.name}
                </span>
                <span className="block text-[9px] font-medium text-zinc-400 dark:text-zinc-500">
                  {client.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
