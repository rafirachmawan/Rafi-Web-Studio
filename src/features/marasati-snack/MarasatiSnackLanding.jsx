import { useState } from "react";
import MarasatiSnackNavigation from "./components/MarasatiSnackNavigation";
import MarasatiSnackHero from "./components/MarasatiSnackHero";
import MarasatiSnackDashboard from "./components/MarasatiSnackDashboard";
import MarasatiSnackProductionModule from "./components/MarasatiSnackProductionModule";
import MarasatiSnackPOSModule from "./components/MarasatiSnackPOSModule";

const MarasatiSnackLanding = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-white">
      <MarasatiSnackNavigation
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <div className="pb-12">
        <MarasatiSnackHero />

        {activeTab === "dashboard" && <MarasatiSnackDashboard />}
        {activeTab === "production" && <MarasatiSnackProductionModule />}
        {activeTab === "pos" && <MarasatiSnackPOSModule />}
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">🍪 Marasati Snack</h3>
              <p className="text-gray-400 text-sm">
                Sistem terintegrasi untuk manajemen snack dengan 8 outlet dan
                rumah produksi pusat.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Modul</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Dashboard Owner - Pantau performa bisnis</li>
                <li>Produksi & Stok - Kelola produksi & distribusi</li>
                <li>POS Kasir - Transaksi cepat outlet</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Demo Info</h4>
              <p className="text-gray-400 text-sm">
                Demo ini mensimulasikan sistem lengkap tanpa backend. Data
                tersimpan sementara di browser.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
            © 2024 Marasati Snack System. Developed by Gapai Digital.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MarasatiSnackLanding;
