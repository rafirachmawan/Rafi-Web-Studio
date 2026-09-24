import { Info } from "lucide-react";

const MarasatiSnackHero = () => {
  return (
    <section className="pt-20 pb-8 bg-gradient-to-br from-orange-50 via-white to-amber-50 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Sistem Terintegrasi{" "}
            <span className="text-orange-600">Marasati Snack</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-6 px-2">
            Platform manajemen snack terpadu untuk 8 outlet + rumah produksi
            pusat
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8">
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center mb-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-xl sm:text-2xl">🏭</span>
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                Rumah Produksi
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Kelola produksi dan distribusi stok ke semua outlet
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center mb-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <span className="text-xl sm:text-2xl">🏪</span>
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                8 Outlet
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                POS kasir cepat dengan monitoring stok real-time
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center mb-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-xl sm:text-2xl">📊</span>
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                Dashboard Owner
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Pantau omzet dan performa semua cabang dalam satu layar
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-3 sm:p-4 flex items-start space-x-2 sm:space-x-3 mx-auto max-w-3xl">
          <Info className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mt-0.5 flex-shrink-0" />
          <div className="text-xs sm:text-sm text-blue-700 flex-1">
            <strong>Demo Fitur:</strong> Sistem ini mensimulasikan alur lengkap
            dari produksi → distribusi → penjualan → dashboard owner tanpa
            backend sungguhan. Data tersimpan sementara di browser.
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarasatiSnackHero;
