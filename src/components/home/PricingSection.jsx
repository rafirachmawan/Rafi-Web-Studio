export default function PricingSection({ pricingTab, setPricingTab, waLink }) {
  return (
    <>
      <div id="harga" className="mt-32 mb-24 max-w-6xl mx-auto text-center">
        {/* TITLE */}
        <h2 className="text-2xl md:text-4xl font-heading font-bold tracking-tight leading-snug max-w-2xl mx-auto">
          Paket Website <span className="text-amber-400">Profesional</span>
        </h2>

        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mt-4 mb-8">
          Pilih paket sesuai kebutuhan bisnis kamu. Semua sudah siap untuk
          meningkatkan kepercayaan dan penjualan.
        </p>

        {/* TAB */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { label: "Landing Page", value: "landing" },
            { label: "Company Profile", value: "company" },
            { label: "E-Commerce", value: "ecommerce" },
            { label: "Custom", value: "custom" },
          ].map((item) => (
            <button
              key={item.value}
              onClick={() => setPricingTab(item.value)}
              className={`px-4 py-1.5 md:px-5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 border ${
                pricingTab === item.value
                  ? "bg-amber-500 text-black border-amber-400 shadow-[0_0_12px_rgba(255,180,0,0.3)]"
                  : "bg-white/10 text-gray-300 border-white/10 hover:bg-white/20 hover:scale-105"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* CARD */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* LANDING */}
          {pricingTab === "landing" && (
            <>
              <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 flex flex-col justify-between min-h-[260px]">
                <h3 className="text-base md:text-lg font-semibold mb-2">
                  Landing Page Starter
                </h3>
                <h2 className="text-xl md:text-2xl font-bold text-amber-400 mb-3">
                  Rp 600.000
                </h2>
                <ul className="text-gray-400 text-xs space-y-1 mb-4">
                  <li>✔ 1 Halaman</li>
                  <li>✔ Desain Modern</li>
                  <li>✔ Mobile Friendly</li>
                </ul>

                <a
                  href={`${waLink}%20Landing%20Page%20Starter`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-amber-500 hover:bg-amber-400 text-black py-2 rounded-full text-xs md:text-sm font-medium transition"
                >
                  Konsultasi Sekarang
                </a>
              </div>

              <div className="bg-white/[0.05] border border-amber-400/40 rounded-3xl p-8">
                <h3 className="text-2xl font-semibold mb-4">
                  Landing Page Pro
                </h3>
                <h2 className="text-2xl md:text-3xl font-bold text-amber-400 mb-4">
                  Rp 1.300.000
                </h2>
                <ul className="text-gray-400 text-sm space-y-2 mb-6">
                  <li>✔ Multi Section</li>
                  <li>✔ SEO Basic</li>
                  <li>✔ WhatsApp + Form</li>
                </ul>

                <a
                  href={`${waLink}%20Landing%20Page%20Pro`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-gradient-to-r from-amber-400 to-yellow-300 text-black py-2.5 rounded-full font-semibold hover:scale-105 transition"
                >
                  Konsultasi Sekarang
                </a>
              </div>
            </>
          )}

          {/* COMPANY */}
          {pricingTab === "company" && (
            <>
              {/* Company Basic */}
              <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 flex flex-col justify-between min-h-[260px]">
                {/* TOP */}
                <div>
                  <h3 className="text-base md:text-lg font-semibold mb-2">
                    Company Basic
                  </h3>

                  <h2 className="text-xl md:text-2xl font-bold text-amber-400 mb-3">
                    Rp 1.500.000
                  </h2>

                  <ul className="text-gray-400 text-xs space-y-1">
                    <li>✔ 3-5 Halaman</li>
                    <li>✔ Profil Perusahaan</li>
                  </ul>
                </div>

                {/* BUTTON */}
                <a
                  href={`${waLink}%20Company%20Basic`}
                  target="_blank"
                  className="mt-6 block text-center bg-amber-500 hover:bg-amber-400 text-black py-2 rounded-full text-xs font-medium transition"
                >
                  Konsultasi Sekarang
                </a>
              </div>

              {/* Company Pro */}
              <div className="bg-white/[0.05] border border-amber-400/40 rounded-3xl p-6 flex flex-col justify-between min-h-[260px]">
                {/* TOP */}
                <div>
                  <h3 className="text-base md:text-lg font-semibold mb-2">
                    Company Pro
                  </h3>

                  <h2 className="text-xl md:text-2xl font-bold text-amber-400 mb-3">
                    Rp 3.000.000
                  </h2>

                  <ul className="text-gray-400 text-xs space-y-1">
                    <li>✔ Unlimited Page</li>
                    <li>✔ SEO + Speed</li>
                  </ul>
                </div>

                {/* BUTTON */}
                <a
                  href={`${waLink}%20Company%20Pro`}
                  target="_blank"
                  className="mt-6 block text-center bg-gradient-to-r from-amber-400 to-yellow-300 text-black py-2 rounded-full text-xs font-medium transition"
                >
                  Konsultasi Sekarang
                </a>
              </div>
            </>
          )}

          {/* ECOMMERCE */}
          {pricingTab === "ecommerce" && (
            <>
              <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 flex flex-col justify-between min-h-[260px]">
                <h3 className="text-2xl font-semibold mb-4">
                  Toko Online Basic
                </h3>
                <h2 className="text-2xl md:text-3xl font-bold text-amber-400 mb-4">
                  Rp 2.500.000
                </h2>
                <ul className="text-gray-400 text-sm space-y-2 mb-6">
                  <li>✔ Produk Catalog</li>
                  <li>✔ WhatsApp Order</li>
                </ul>

                <a
                  href={`${waLink}%20Ecommerce%20Basic`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-amber-500 hover:bg-amber-400 text-black py-2.5 rounded-full font-semibold transition"
                >
                  Konsultasi Sekarang
                </a>
              </div>

              <div className="bg-white/[0.05] border border-amber-400/40 rounded-3xl p-8">
                <h3 className="text-2xl font-semibold mb-4">Toko Online Pro</h3>
                <h2 className="text-2xl md:text-3xl font-bold text-amber-400 mb-4">
                  Rp 5.000.000
                </h2>
                <ul className="text-gray-400 text-sm space-y-2 mb-6">
                  <li>✔ Payment Gateway</li>
                  <li>✔ Dashboard Admin</li>
                </ul>

                <a
                  href={`${waLink}%20Ecommerce%20Pro`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-gradient-to-r from-amber-400 to-yellow-300 text-black py-2.5 rounded-full font-semibold hover:scale-105 transition"
                >
                  Konsultasi Sekarang
                </a>
              </div>
            </>
          )}

          {/* CUSTOM */}
          {pricingTab === "custom" && (
            <div className="col-span-2 bg-white/[0.03] border border-white/10 rounded-3xl p-10 text-center">
              <h3 className="text-2xl font-semibold mb-4">Custom Project</h3>

              <p className="text-gray-400 mb-6">
                Punya kebutuhan khusus? Kami siap bantu sesuai kebutuhan kamu.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-amber-400 mb-4">
                Mulai dari Rp 1.000.000+
              </h2>

              <a
                href={`${waLink}%20Custom%20Project`}
                target="_blank"
                className="inline-block bg-gradient-to-r from-amber-400 to-yellow-300 text-black px-6 py-3 rounded-full font-semibold"
              >
                Konsultasi Sekarang
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
