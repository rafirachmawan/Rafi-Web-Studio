import { useState } from "react";
import { Package, Factory, AlertTriangle, History } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Basreng",
    price: 10000,
    variants: ["Cikruh", "Tabur"],
    initialStock: 500,
  },
  {
    id: 2,
    name: "Cimol",
    price: 8000,
    variants: ["Cikruh", "Tabur"],
    initialStock: 400,
  },
  {
    id: 3,
    name: "Otak-otak",
    price: 10000,
    variants: ["Cikruh", "Tabur"],
    initialStock: 300,
  },
];

const outlets = [
  { id: 1, name: "Outlet #01", location: "Tulungagung Pusat" },
  { id: 2, name: "Outlet #02", location: "Tulungagung Barat" },
  { id: 3, name: "Outlet #03", location: "Rejoso" },
  { id: 4, name: "Outlet #04", location: "Nganok" },
  { id: 5, name: "Outlet #05", location: "Sumbergumbeng" },
  { id: 6, name: "Outlet #06", location: "Kalipuro" },
  { id: 7, name: "Outlet #07", location: "Pagerwojo" },
  { id: 8, name: "Outlet #08", location: "Boyolangu" },
];

const MarasatiSnackProductionModule = () => {
  const [productionQty, setProductionQty] = useState({});
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedOutlet, setSelectedOutlet] = useState("");
  const [distributionQty, setDistributionQty] = useState({});
  const [productionHistory, setProductionHistory] = useState([]);
  const [distributionHistory, setDistributionHistory] = useState([]);

  const [centralStock, setCentralStock] = useState(
    products.reduce((acc, product) => {
      acc[product.id] = product.initialStock;
      return acc;
    }, {}),
  );

  const [outletStokes, setOutletStocks] = useState(
    outlets.map((outlet) => ({
      outletId: outlet.id,
      stocks: products.reduce((acc, product) => {
        acc[product.id] = Math.floor(Math.random() * 50) + 20;
        return acc;
      }, {}),
    })),
  );

  const handleProductionSubmit = (e) => {
    e.preventDefault();
    if (
      !selectedProduct ||
      !productionQty[selectedProduct] ||
      productionQty[selectedProduct] <= 0
    ) {
      alert("Silakan pilih produk dan masukkan jumlah produksi yang valid");
      return;
    }

    const newProduction = {
      id: Date.now(),
      productId: selectedProduct,
      productName: products.find((p) => p.id === selectedProduct).name,
      qty: productionQty[selectedProduct],
      date: new Date().toLocaleDateString("id-ID"),
      time: new Date().toLocaleTimeString("id-ID"),
    };

    setProductionHistory([newProduction, ...productionHistory]);
    setCentralStock({
      ...centralStock,
      [selectedProduct]:
        centralStock[selectedProduct] + productionQty[selectedProduct],
    });

    alert(
      `✅ Produksi berhasil dicatat! ${productionQty[selectedProduct]} unit ${products.find((p) => p.id === selectedProduct).name} ditambahkan ke stok pusat`,
    );

    // Reset form
    setSelectedProduct("");
    setProductionQty({});
  };

  const handleDistributionSubmit = (e) => {
    e.preventDefault();
    if (
      !selectedProduct ||
      !selectedOutlet ||
      !distributionQty[selectedProduct] ||
      distributionQty[selectedProduct] <= 0
    ) {
      alert(
        "Silakan pilih produk, outlet, dan masukkan jumlah distribusi yang valid",
      );
      return;
    }

    if (distributionQty[selectedProduct] > centralStock[selectedProduct]) {
      alert("❌ Stok tidak mencukupi! Periksa stok pusat terlebih dahulu.");
      return;
    }

    const newDistribution = {
      id: Date.now(),
      productId: selectedProduct,
      productName: products.find((p) => p.id === selectedProduct).name,
      outletId: selectedOutlet,
      outletName: outlets.find((o) => o.id === selectedOutlet).name,
      qty: distributionQty[selectedProduct],
      date: new Date().toLocaleDateString("id-ID"),
      time: new Date().toLocaleTimeString("id-ID"),
    };

    setDistributionHistory([newDistribution, ...distributionHistory]);

    // Update central stock
    setCentralStock({
      ...centralStock,
      [selectedProduct]:
        centralStock[selectedProduct] - distributionQty[selectedProduct],
    });

    // Update outlet stock
    setOutletStocks(
      outletStokes.map((os) =>
        os.outletId === selectedOutlet
          ? {
              ...os,
              stocks: {
                ...os.stocks,
                [selectedProduct]:
                  os.stocks[selectedProduct] + distributionQty[selectedProduct],
              },
            }
          : os,
      ),
    );

    alert(
      `✅ Distribusi berhasil! ${distributionQty[selectedProduct]} unit ${products.find((p) => p.id === selectedProduct).name} dikirim ke ${outlets.find((o) => o.id === selectedOutlet).name}`,
    );

    // Reset form
    setSelectedProduct("");
    setSelectedOutlet("");
    setDistributionQty({});
  };

  const getLowStockAlerts = () => {
    let alerts = [];
    outletStokes.forEach((os) => {
      Object.entries(os.stocks).forEach(([productId, qty]) => {
        if (qty < 10) {
          alerts.push({
            outlet: outlets.find((o) => o.id === os.outletId),
            product: products.find((p) => p.id === parseInt(productId)),
            qty: qty,
          });
        }
      });
    });
    return alerts;
  };

  return (
    <div className="pt-20 pb-12 bg-gray-50 min-h-screen px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 flex items-center">
            <Factory className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3 text-orange-600" />
            <span className="break-keep">🏭 Modul Produksi & Stok</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Kelola produksi harian dan distribusi stok ke outlet
          </p>
        </div>

        {/* Central Stock Overview */}
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6 sm:mb-8">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <Package className="w-5 h-5 mr-2" />
            Stok Rumah Produksi (Sisa)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg p-3 sm:p-4 bg-orange-50"
              >
                <div className="font-semibold text-gray-900 text-sm sm:text-base">
                  {product.name}
                </div>
                <div className="text-xl sm:text-2xl font-bold text-orange-600 mt-1 sm:mt-2">
                  {centralStock[product.id]} unit
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {/* Production Input */}
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Package className="w-5 h-5 mr-2" />
              Input Produksi Harian
            </h3>
            <form onSubmit={handleProductionSubmit}>
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                    Produk
                  </label>
                  <select
                    value={selectedProduct}
                    onChange={(e) =>
                      setSelectedProduct(parseInt(e.target.value))
                    }
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                  >
                    <option value="">Pilih Produk</option>
                    {products.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                    Jumlah Produksi
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={productionQty[selectedProduct] || ""}
                    onChange={(e) =>
                      setProductionQty({
                        ...productionQty,
                        [selectedProduct]: parseInt(e.target.value) || 0,
                      })
                    }
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-600 text-white py-2.5 px-4 rounded-lg hover:bg-orange-700 transition-colors font-medium text-sm sm:text-base"
                >
                  Simpan Produksi
                </button>
              </div>
            </form>
          </div>

          {/* Distribution Input */}
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Package className="w-5 h-5 mr-2" />
              Distribusi ke Outlet
            </h3>
            <form onSubmit={handleDistributionSubmit}>
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                    Produk
                  </label>
                  <select
                    value={selectedProduct}
                    onChange={(e) =>
                      setSelectedProduct(parseInt(e.target.value))
                    }
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                  >
                    <option value="">Pilih Produk</option>
                    {products.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                    Tujuan Outlet
                  </label>
                  <select
                    value={selectedOutlet}
                    onChange={(e) =>
                      setSelectedOutlet(parseInt(e.target.value))
                    }
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                  >
                    <option value="">Pilih Outlet</option>
                    {outlets.map((o) => (
                      <option key={o.id} value={o.id}>
                        {o.name} - {o.location}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                    Jumlah Distribusi
                  </label>
                  <input
                    type="number"
                    min="1"
                    max={centralStock[selectedProduct] || 0}
                    value={distributionQty[selectedProduct] || ""}
                    onChange={(e) =>
                      setDistributionQty({
                        ...distributionQty,
                        [selectedProduct]: parseInt(e.target.value) || 0,
                      })
                    }
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                  />
                  <div className="mt-1 text-[10px] sm:text-xs text-gray-500">
                    Stok tersedia: {centralStock[selectedProduct]} unit
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-600 text-white py-2.5 px-4 rounded-lg hover:bg-amber-700 transition-colors font-medium text-sm sm:text-base"
                >
                  Kirim Distribusi
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Low Stock Alerts */}
        <div className="bg-red-50 border-l-2 sm:border-l-4 border-red-500 rounded-lg shadow-md p-4 sm:p-6 mb-6 sm:mb-8">
          <h3 className="text-base sm:text-lg font-semibold text-red-900 mb-4 flex items-center">
            <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Notifikasi Stok Kritis (Less than 10 unit)
          </h3>
          {getLowStockAlerts().length === 0 ? (
            <p className="text-red-700 text-sm sm:text-base">
              ✅ Tidak ada outlet dengan stok kritis saat ini.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {getLowStockAlerts().map((alert, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg p-3 border border-red-200"
                >
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">
                    {alert.product.name}
                  </div>
                  <div
                    className="text-xs sm:text-sm text-gray-600 truncate"
                    title={alert.outlet.location}
                  >
                    {alert.outlet.name}
                  </div>
                  <div className="text-lg font-bold text-red-600 mt-1 sm:mt-2">
                    {alert.qty} unit tersisa
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* History Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Production History */}
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <History className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Riwayat Produksi
            </h3>
            {productionHistory.length === 0 ? (
              <p className="text-gray-500 text-sm">Belum ada data produksi.</p>
            ) : (
              <div className="overflow-x-auto -mx-4">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr className="divide-x divide-gray-200">
                      <th className="px-2 py-2 text-left text-[10px] sm:text-xs font-medium text-gray-500 uppercase">
                        Produk
                      </th>
                      <th className="px-2 py-2 text-left text-[10px] sm:text-xs font-medium text-gray-500 uppercase">
                        Qty
                      </th>
                      <th className="px-2 py-2 text-left text-[10px] sm:text-xs font-medium text-gray-500 uppercase hidden sm:table-cell">
                        Tanggal
                      </th>
                      <th className="px-2 py-2 text-left text-[10px] sm:text-xs font-medium text-gray-500 uppercase hidden sm:table-cell">
                        Jam
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-x divide-gray-200">
                    {productionHistory.map((h) => (
                      <tr key={h.id} className="divide-x divide-gray-200">
                        <td className="px-2 py-2 text-xs sm:text-sm text-gray-900 break-keep">
                          {h.productName}
                        </td>
                        <td className="px-2 py-2 text-xs sm:text-sm font-semibold text-orange-600 text-center">
                          {h.qty}
                        </td>
                        <td className="px-2 py-2 text-xs sm:text-sm text-gray-600 hidden sm:table-cell">
                          {h.date}
                        </td>
                        <td className="px-2 py-2 text-xs sm:text-sm text-gray-600 hidden sm:table-cell">
                          {h.time}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Distribution History */}
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <History className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Riwayat Distribusi
            </h3>
            {distributionHistory.length === 0 ? (
              <p className="text-gray-500 text-sm">
                Belum ada data distribusi.
              </p>
            ) : (
              <div className="overflow-x-auto -mx-4">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr className="divide-x divide-gray-200">
                      <th className="px-2 py-2 text-left text-[10px] sm:text-xs font-medium text-gray-500 uppercase">
                        Produk
                      </th>
                      <th className="px-2 py-2 text-left text-[10px] sm:text-xs font-medium text-gray-500 uppercase">
                        Ke Outlet
                      </th>
                      <th className="px-2 py-2 text-left text-[10px] sm:text-xs font-medium text-gray-500 uppercase">
                        Qty
                      </th>
                      <th className="px-2 py-2 text-left text-[10px] sm:text-xs font-medium text-gray-500 uppercase hidden sm:table-cell">
                        Tanggal
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-x divide-gray-200">
                    {distributionHistory.map((h) => (
                      <tr key={h.id} className="divide-x divide-gray-200">
                        <td className="px-2 py-2 text-xs sm:text-sm text-gray-900 break-keep">
                          {h.productName}
                        </td>
                        <td
                          className="px-2 py-2 text-xs sm:text-sm text-gray-600 truncate max-w-[80px]"
                          title={h.outletName}
                        >
                          {h.outletName}
                        </td>
                        <td className="px-2 py-2 text-xs sm:text-sm font-semibold text-amber-600 text-center">
                          {h.qty}
                        </td>
                        <td className="px-2 py-2 text-xs sm:text-sm text-gray-600 hidden sm:table-cell">
                          {h.date}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarasatiSnackProductionModule;
