import { motion } from "framer-motion";

export default function PricingSection({ pricingTab, setPricingTab, waLink }) {
  return (
    <>
      <div id="harga" className="mt-32 mb-24 max-w-6xl mx-auto text-center px-4">
        {/* TITLE */}
        <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-snug max-w-2xl mx-auto text-black dark:text-white mb-4">
          Pilih Paket <span className="text-amber-500">Profesional</span>
        </h2>

        <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
          Pilih paket yang paling sesuai dengan kebutuhan bisnis Anda. Semua paket dirancang untuk memberikan performa maksimal dan konversi tinggi.
        </p>

        {/* TAB */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {[
            { label: "Landing Page", value: "landing" },
            { label: "Company Profile", value: "company" },
            { label: "E-Commerce", value: "ecommerce" },
            { label: "Custom", value: "custom" },
          ].map((item) => (
            <button
              key={item.value}
              onClick={() => setPricingTab(item.value)}
              className={`px-5 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 border ${
                pricingTab === item.value
                  ? "bg-amber-500 text-black border-amber-400 shadow-lg shadow-amber-500/30 scale-105"
                  : "bg-black/[0.02] dark:bg-white/[0.02] text-zinc-600 dark:text-zinc-400 border-black/5 dark:border-white/5 hover:bg-black/[0.05] dark:hover:bg-white/[0.05] hover:scale-105"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* CARD */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto items-center">
          {/* LANDING */}
          {pricingTab === "landing" && (
            <>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-[2rem] p-8 md:p-10 flex flex-col justify-between shadow-lg shadow-black/[0.02] dark:shadow-none min-h-[340px]">
                <div className="text-left">
                  <h3 className="text-xl font-bold mb-2 text-black dark:text-white">
                    Starter
                  </h3>
                  <h2 className="text-3xl md:text-4xl font-black text-amber-500 mb-6">
                    Rp 600<span className="text-lg md:text-xl text-zinc-500">.000</span>
                  </h2>
                  <ul className="text-zinc-600 dark:text-zinc-400 text-sm space-y-3 mb-8 font-medium">
                    <li className="flex items-center gap-2">✔ 1 Halaman Responsif</li>
                    <li className="flex items-center gap-2">✔ Desain Modern & Bersih</li>
                    <li className="flex items-center gap-2">✔ Tombol WhatsApp</li>
                  </ul>
                </div>
                <a
                  href={`${waLink}%20Landing%20Page%20Starter`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-black dark:text-white py-3.5 rounded-full text-sm font-bold transition-colors"
                >
                  Pilih Starter
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="relative bg-white dark:bg-zinc-900 border-2 border-amber-400 rounded-[2rem] p-8 md:p-10 shadow-2xl shadow-amber-500/20 md:-translate-y-4 flex flex-col justify-between min-h-[380px] overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-[40px] rounded-full" />
                <div className="absolute top-6 right-6 bg-amber-500 text-black text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider animate-pulse">
                  Terlaris
                </div>

                <div className="text-left relative z-10">
                  <h3 className="text-2xl font-black mb-2 text-black dark:text-white">
                    Pro <span className="text-amber-500">Landing</span>
                  </h3>
                  <h2 className="text-4xl md:text-5xl font-black text-black dark:text-white mb-6">
                    Rp 1,3<span className="text-xl md:text-2xl text-zinc-500">jt</span>
                  </h2>
                  <ul className="text-zinc-600 dark:text-zinc-300 text-sm space-y-3 mb-8 font-medium">
                    <li className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold">✔ Multi Section (Tampilan Panjang)</li>
                    <li className="flex items-center gap-2">✔ Copywriting Menjual</li>
                    <li className="flex items-center gap-2">✔ SEO Basic & Speed Opt</li>
                    <li className="flex items-center gap-2">✔ Integrasi Google Analytics</li>
                  </ul>
                </div>
                <a
                  href={`${waLink}%20Landing%20Page%20Pro`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 block text-center bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white py-4 rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-amber-500/25 hover:scale-[1.02]"
                >
                  Mulai Buat Sekarang
                </a>
              </motion.div>
            </>
          )}

          {/* COMPANY */}
          {pricingTab === "company" && (
            <>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-[2rem] p-8 flex flex-col justify-between shadow-lg min-h-[340px]">
                <div className="text-left">
                  <h3 className="text-xl font-bold mb-2 text-black dark:text-white">Company Basic</h3>
                  <h2 className="text-3xl font-black text-amber-500 mb-6">Rp 1,5<span className="text-lg text-zinc-500">jt</span></h2>
                  <ul className="text-zinc-600 dark:text-zinc-400 text-sm space-y-3 mb-8 font-medium">
                    <li>✔ 3-5 Halaman</li>
                    <li>✔ Profil Perusahaan Standard</li>
                  </ul>
                </div>
                <a href={`${waLink}%20Company%20Basic`} className="block text-center bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 py-3.5 rounded-full text-sm font-bold transition-colors">Konsultasi Sekarang</a>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="relative bg-white dark:bg-zinc-900 border-2 border-amber-400 rounded-[2rem] p-8 md:-translate-y-4 shadow-2xl shadow-amber-500/20 flex flex-col justify-between min-h-[380px]">
                <div className="absolute top-6 right-6 bg-amber-500 text-black text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">Premium</div>
                <div className="text-left">
                  <h3 className="text-2xl font-black mb-2 text-black dark:text-white">Company Pro</h3>
                  <h2 className="text-4xl font-black text-black dark:text-white mb-6">Rp 3<span className="text-xl text-zinc-500">jt</span></h2>
                  <ul className="text-zinc-600 dark:text-zinc-300 text-sm space-y-3 mb-8 font-medium">
                    <li className="font-bold text-amber-600 dark:text-amber-400">✔ Unlimited Pages</li>
                    <li>✔ Custom Design UI/UX</li>
                    <li>✔ CMS / Admin Panel</li>
                  </ul>
                </div>
                <a href={`${waLink}%20Company%20Pro`} className="block text-center bg-gradient-to-r from-amber-500 to-orange-500 text-white py-4 rounded-full text-sm font-bold transition-all shadow-lg hover:scale-[1.02]">Mulai Buat Sekarang</a>
              </motion.div>
            </>
          )}

          {/* ECOMMERCE */}
          {pricingTab === "ecommerce" && (
            <>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-[2rem] p-8 flex flex-col justify-between shadow-lg min-h-[340px]">
                <div className="text-left">
                  <h3 className="text-xl font-bold mb-2 text-black dark:text-white">Toko Basic</h3>
                  <h2 className="text-3xl font-black text-amber-500 mb-6">Rp 2,5<span className="text-lg text-zinc-500">jt</span></h2>
                  <ul className="text-zinc-600 dark:text-zinc-400 text-sm space-y-3 mb-8 font-medium">
                    <li>✔ Katalog Produk</li>
                    <li>✔ Checkout via WhatsApp</li>
                  </ul>
                </div>
                <a href={`${waLink}%20Ecommerce%20Basic`} className="block text-center bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 py-3.5 rounded-full text-sm font-bold transition-colors">Konsultasi Sekarang</a>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="relative bg-white dark:bg-zinc-900 border-2 border-amber-400 rounded-[2rem] p-8 md:-translate-y-4 shadow-2xl shadow-amber-500/20 flex flex-col justify-between min-h-[380px]">
                <div className="absolute top-6 right-6 bg-amber-500 text-black text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">Lengkap</div>
                <div className="text-left">
                  <h3 className="text-2xl font-black mb-2 text-black dark:text-white">Toko Pro</h3>
                  <h2 className="text-4xl font-black text-black dark:text-white mb-6">Rp 5<span className="text-xl text-zinc-500">jt</span></h2>
                  <ul className="text-zinc-600 dark:text-zinc-300 text-sm space-y-3 mb-8 font-medium">
                    <li className="font-bold text-amber-600 dark:text-amber-400">✔ Payment Gateway Otomatis</li>
                    <li>✔ Ongkir Otomatis (Kurir)</li>
                    <li>✔ Dashboard Admin Penjualan</li>
                  </ul>
                </div>
                <a href={`${waLink}%20Ecommerce%20Pro`} className="block text-center bg-gradient-to-r from-amber-500 to-orange-500 text-white py-4 rounded-full text-sm font-bold transition-all shadow-lg hover:scale-[1.02]">Mulai Buat Sekarang</a>
              </motion.div>
            </>
          )}

          {/* CUSTOM */}
          {pricingTab === "custom" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="col-span-1 md:col-span-2 bg-gradient-to-br from-zinc-900 to-black border border-white/10 rounded-[3rem] p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-500/20 blur-[80px] rounded-full" />
              
              <h3 className="text-3xl font-black mb-4 text-white relative z-10">
                Custom Web App / Sistem / ERP
              </h3>
              <p className="text-zinc-400 mb-8 max-w-xl mx-auto relative z-10">
                Membangun solusi digital berskala besar untuk kebutuhan khusus bisnis Anda. Perlu fitur unik, integrasi API, atau keamanan tingkat tinggi? Mari kita diskusikan.
              </p>
              <a
                href={`${waLink}%20Custom%20Project`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block relative z-10 bg-amber-500 hover:bg-amber-400 text-black px-10 py-4 rounded-full font-black text-lg transition-transform hover:scale-105"
              >
                Mulai Diskusi Proyek
              </a>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
}
