import { useState } from "react";
import {
  ShoppingBag,
  Factory,
  LayoutDashboard,
  AlertTriangle,
  Package,
  TrendingUp,
  Clock,
  Users,
} from "lucide-react";

const MarasatiSnackNavigation = ({ activeTab, setActiveTab }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50 lg:z-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-orange-600">🍪</span>
            <span className="text-lg font-semibold text-gray-900 hidden sm:inline">
              Marasati Snack
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === "dashboard"
                  ? "bg-orange-100 text-orange-700"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <LayoutDashboard className="w-4 h-4 inline mr-1" />
              Dashboard Owner
            </button>

            <button
              onClick={() => setActiveTab("production")}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === "production"
                  ? "bg-orange-100 text-orange-700"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <Factory className="w-4 h-4 inline mr-1" />
              Produksi & Stok
            </button>

            <button
              onClick={() => setActiveTab("pos")}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === "pos"
                  ? "bg-orange-100 text-orange-700"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <ShoppingBag className="w-4 h-4 inline mr-1" />
              POS Kasir
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 animate-fade-in">
            <button
              onClick={() => {
                setActiveTab("dashboard");
                setIsMenuOpen(false);
              }}
              className={`w-full px-4 py-3 rounded-lg text-left text-sm font-medium transition-colors mb-2 ${
                activeTab === "dashboard"
                  ? "bg-orange-100 text-orange-700"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <div className="flex items-center">
                <LayoutDashboard className="w-5 h-5 mr-3" />
                <span>📊 Dashboard Owner</span>
              </div>
            </button>

            <button
              onClick={() => {
                setActiveTab("production");
                setIsMenuOpen(false);
              }}
              className={`w-full px-4 py-3 rounded-lg text-left text-sm font-medium transition-colors mb-2 ${
                activeTab === "production"
                  ? "bg-orange-100 text-orange-700"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <div className="flex items-center">
                <Factory className="w-5 h-5 mr-3" />
                <span>🏭 Produksi & Stok</span>
              </div>
            </button>

            <button
              onClick={() => {
                setActiveTab("pos");
                setIsMenuOpen(false);
              }}
              className={`w-full px-4 py-3 rounded-lg text-left text-sm font-medium transition-colors mb-2 ${
                activeTab === "pos"
                  ? "bg-orange-100 text-orange-700"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <div className="flex items-center">
                <ShoppingBag className="w-5 h-5 mr-3" />
                <span>💰 POS Kasir</span>
              </div>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default MarasatiSnackNavigation;
