import { useState } from "react";
import {
  LayoutDashboard,
  TrendingUp,
  Users,
  AlertTriangle,
  Package,
  Clock,
} from "lucide-react";

const products = [
  { id: 1, name: "Basreng", price: 10000 },
  { id: 2, name: "Cimol", price: 8000 },
  { id: 3, name: "Otak-otak", price: 10000 },
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

// Generate dummy transactions for demo
const generateDummyTransactions = () => {
  const transactions = [];
  const now = new Date();

  // Last 7 days of transactions
  for (let day = 6; day >= 0; day--) {
    const transactionDate = new Date(now);
    transactionDate.setDate(now.getDate() - day);

    // 5-15 transactions per day
    const numTransactions = Math.floor(Math.random() * 10) + 5;

    for (let i = 0; i < numTransactions; i++) {
      const outlet = outlets[Math.floor(Math.random() * outlets.length)];
      const product = products[Math.floor(Math.random() * products.length)];
      const qty = Math.floor(Math.random() * 3) + 1;

      transactions.push({
        id: Date.now() + day * 1000 + i,
        outletId: outlet.id,
        outletName: outlet.name,
        productId: product.id,
        productName: product.name,
        price: product.price,
        qty: qty,
        total: product.price * qty,
        date: transactionDate.toLocaleDateString("id-ID"),
        time: `${Math.floor(Math.random() * 10) + 8}:${Math.floor(
          Math.random() * 60,
        )
          .toString()
          .padStart(2, "0")}`,
      });
    }
  }

  return transactions.sort((a, b) => b.id - a.id);
};

const MarasatiSnackDashboard = () => {
  const [transactions] = useState(generateDummyTransactions());

  const stats = {
    totalRevenue: transactions.reduce((sum, t) => sum + t.total, 0),
    totalTransactions: transactions.length,
    avgTransaction:
      transactions.length > 0
        ? transactions.reduce((sum, t) => sum + t.total, 0) /
          transactions.length
        : 0,
  };

  const outletPerformance = outlets
    .map((outlet) => {
      const outletTrans = transactions.filter((t) => t.outletId === outlet.id);
      return {
        ...outlet,
        totalSales: outletTrans.reduce((sum, t) => sum + t.total, 0),
        transactionCount: outletTrans.length,
        avgOrder:
          outletTrans.length > 0
            ? outletTrans.reduce((sum, t) => sum + t.total, 0) /
              outletTrans.length
            : 0,
      };
    })
    .sort((a, b) => b.totalSales - a.totalSales);

  const productPerformance = products
    .map((product) => {
      const productTrans = transactions.filter(
        (t) => t.productId === product.id,
      );
      const totalQty = productTrans.reduce((sum, t) => sum + t.qty, 0);
      return {
        ...product,
        totalSales: productTrans.reduce((sum, t) => sum + t.total, 0),
        quantitySold: totalQty,
        transactionCount: productTrans.length,
      };
    })
    .sort((a, b) => b.quantitySold - a.quantitySold);

  return (
    <div className="pt-20 pb-12 bg-gray-50 min-h-screen px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 flex items-center">
            <LayoutDashboard className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3 text-orange-600" />
            <span className="break-keep">📊 Dashboard Owner</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Pantau seluruh performa bisnis secara real-time
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
          <div className="bg-white rounded-lg shadow-md p-3 sm:p-4 border-l-2 sm:border-l-4 border-blue-500">
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-lg sm:text-2xl">💰</span>
              </div>
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
            </div>
            <div className="text-xs sm:text-sm text-gray-600 mb-1">
              Total Omzet
            </div>
            <div className="text-base sm:text-xl lg:text-2xl font-bold text-gray-900 break-all">
              Rp{stats.totalRevenue.toLocaleString("id-ID")}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-3 sm:p-4 border-l-2 sm:border-l-4 border-green-500">
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-lg sm:text-2xl">🛒</span>
              </div>
            </div>
            <div className="text-xs sm:text-sm text-gray-600 mb-1">
              Total Transaksi
            </div>
            <div className="text-base sm:text-xl lg:text-2xl font-bold text-gray-900 text-center">
              {stats.totalTransactions}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-3 sm:p-4 border-l-2 sm:border-l-4 border-purple-500">
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-lg sm:text-2xl">👥</span>
              </div>
            </div>
            <div className="text-xs sm:text-sm text-gray-600 mb-1">
              Outlet Aktif
            </div>
            <div className="text-base sm:text-xl lg:text-2xl font-bold text-gray-900 text-center">
              {outlets.length}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-3 sm:p-4 border-l-2 sm:border-l-4 border-amber-500">
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <span className="text-lg sm:text-2xl">⏱️</span>
              </div>
            </div>
            <div className="text-xs sm:text-sm text-gray-600 mb-1">
              Rata-rata Transaksi
            </div>
            <div className="text-sm sm:text-lg lg:text-xl font-bold text-gray-900 text-center break-all">
              Rp{(stats.avgTransaction / 1000).toFixed(1)}K
            </div>
          </div>
        </div>

        {/* Outlet & Product Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
            <h3 className="text-base sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              <span className="break-keep">Performance per Outlet</span>
            </h3>

            <div className="space-y-2 sm:space-y-3 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
              {outletPerformance.slice(0, 5).map((outlet, idx) => (
                <div
                  key={outlet.id}
                  className="border-b last:border-none pb-2 sm:pb-3 last:pb-0"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-900 text-sm sm:text-base">
                      #{idx + 1} {outlet.name}
                    </span>
                    <span className="font-bold text-orange-600 text-sm sm:text-base break-all">
                      Rp{outlet.totalSales.toLocaleString("id-ID")}
                    </span>
                  </div>

                  {/* Performance Bar */}
                  <div className="relative h-2 sm:h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="absolute left-0 top-0 h-full bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-500"
                      style={{
                        width: `${(outlet.totalSales / outletPerformance[0].totalSales) * 100}%`,
                      }}
                    />
                  </div>

                  <div className="flex justify-between mt-1 text-xs text-gray-500">
                    <span>{outlet.transactionCount} transaksi</span>
                    <span className="hidden sm:inline">{outlet.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
            <h3 className="text-base sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center">
              <Package className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              <span className="break-keep">Produk Terlaris</span>
            </h3>

            <div className="space-y-3 sm:space-y-4">
              {productPerformance.slice(0, 3).map((product, idx) => (
                <div
                  key={product.id}
                  className="border-b last:border-none pb-3 sm:pb-4 last:pb-0"
                >
                  <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-xs ${
                        idx === 0
                          ? "bg-yellow-100 text-yellow-700"
                          : idx === 1
                            ? "bg-gray-100 text-gray-700"
                            : "bg-orange-100 text-orange-700"
                      }`}
                    >
                      #{idx + 1}
                    </div>
                    <span className="font-semibold text-gray-900 text-sm sm:text-base">
                      {product.name}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-3 ml-9 sm:ml-11">
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-orange-600">
                        {product.quantitySold}
                      </div>
                      <div className="text-[10px] sm:text-xs text-gray-500">
                        Terjual
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm sm:text-xl font-bold text-gray-900 break-all">
                        Rp{(product.totalSales / 1000).toFixed(0)}K
                      </div>
                      <div className="text-[10px] sm:text-xs text-gray-500">
                        Omzet
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm sm:text-xl font-bold text-gray-900">
                        {product.transactionCount}
                      </div>
                      <div className="text-[10px] sm:text-xs text-gray-500">
                        Transaksi
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Inventory Alerts */}
        <div className="bg-red-50 border-l-2 sm:border-l-4 border-red-500 rounded-lg shadow-md p-3 sm:p-6 mb-6 sm:mb-8">
          <h3 className="text-base sm:text-lg font-semibold text-red-900 mb-3 sm:mb-4 flex items-center">
            <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Notifikasi Stok Kritis
          </h3>
          <p className="text-xs sm:text-base text-red-700">
            Data stok saat ini merupakan simulasi dari POS outlet. Tidak ada
            outlet dengan stok kritis pada data demo ini.
          </p>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            <span className="break-keep">Transaksi Terbaru</span>
          </h3>

          <div className="overflow-x-auto -mx-4">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="divide-x divide-gray-200">
                  <th className="px-2 py-2 text-left text-[10px] sm:text-xs font-medium text-gray-500 uppercase hidden sm:table-cell">
                    Tanggal
                  </th>
                  <th className="px-2 py-2 text-left text-[10px] sm:text-xs font-medium text-gray-500 uppercase">
                    Tanggal
                  </th>
                  <th className="px-2 py-2 text-left text-[10px] sm:text-xs font-medium text-gray-500 uppercase">
                    Outlet
                  </th>
                  <th className="px-2 py-2 text-left text-[10px] sm:text-xs font-medium text-gray-500 uppercase">
                    Produk
                  </th>
                  <th className="px-2 py-2 text-left text-[10px] sm:text-xs font-medium text-gray-500 uppercase">
                    Qty
                  </th>
                  <th className="px-2 py-2 text-right text-[10px] sm:text-xs font-medium text-gray-500 uppercase">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody className="divide-x divide-gray-200">
                {transactions.slice(0, 15).map((t) => (
                  <tr
                    key={t.id}
                    className="divide-x divide-gray-200 hover:bg-gray-50"
                  >
                    <td className="px-2 py-2 text-[10px] sm:text-sm text-gray-600 break-keep">
                      {t.date}
                    </td>
                    <td className="px-2 py-2 text-[10px] sm:text-sm text-gray-600 hidden sm:table-cell break-keep">
                      {t.date}
                    </td>
                    <td className="px-2 py-2 text-[10px] sm:text-sm text-gray-900 break-keep max-w-[100px] truncate">
                      {t.outletName}
                    </td>
                    <td className="px-2 py-2 text-[10px] sm:text-sm text-gray-700 break-keep">
                      {t.productName}
                    </td>
                    <td className="px-2 py-2 text-[10px] sm:text-sm text-gray-600 text-center">
                      {t.qty}
                    </td>
                    <td className="px-2 py-2 text-[10px] sm:text-sm font-semibold text-orange-600 text-right break-all">
                      Rp{t.total.toLocaleString("id-ID")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Info Note */}
        <div className="mt-6 sm:mt-8 bg-blue-50 border-l-2 sm:border-l-4 border-blue-500 rounded-lg p-3 sm:p-4 mx-auto max-w-4xl">
          <p className="text-[10px] sm:text-sm text-blue-700 leading-relaxed">
            <strong>Catatan:</strong> Data yang ditampilkan adalah data dummy
            untuk tujuan demo. Sistem ini mensimulasikan alur produksi →
            distribusi → penjualan → dashboard owner tanpa backend sungguhan.
            Pada versi production, semua data akan tersimpan di database dan
            dapat diakses secara real-time oleh berbagai role pengguna.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MarasatiSnackDashboard;
