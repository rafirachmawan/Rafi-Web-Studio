import { useState } from "react";
import {
  ShoppingBag,
  ShoppingCart,
  TrendingUp,
  Clock,
  AlertTriangle,
} from "lucide-react";

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

const MarasatiSnackPOSModule = () => {
  const [selectedOutlet, setSelectedOutlet] = useState(outlets[0].id);
  const [cart, setCart] = useState([]);
  const [productStokes, setProductStokes] = useState(
    products.map((product) => ({
      productId: product.id,
      stock: Math.floor(Math.random() * 50) + 30,
    })),
  );
  const [transactionHistory, setTransactionHistory] = useState([]);

  const currentOutlet = outlets.find((o) => o.id === selectedOutlet);

  const addToCart = (productId, variant) => {
    const product = products.find((p) => p.id === productId);
    const existingItem = cart.find(
      (item) => item.productId === productId && item.variant === variant,
    );

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.productId === productId && item.variant === variant
            ? { ...item, qty: item.qty + 1 }
            : item,
        ),
      );
    } else {
      const stockInfo = productStokes.find((s) => s.productId === productId);

      // Check for variant-based stock deduction
      const availableStock =
        stockInfo?.stock -
        cart
          .filter((c) => c.productId === productId)
          .reduce((sum, i) => sum + i.qty, 0);

      if (availableStock <= 0) {
        alert(`❌ Stok ${product.name} varian ${variant} habis!`);
        return;
      }

      setCart([
        ...cart,
        {
          productId: productId,
          productName: product.name,
          variant: variant,
          price: product.price,
          qty: 1,
        },
      ]);
    }
  };

  const removeFromCart = (variantIndex) => {
    setCart(cart.filter((_, idx) => idx !== variantIndex));
  };

  const updateQty = (variantIndex, newQty) => {
    if (newQty <= 0) {
      removeFromCart(variantIndex);
      return;
    }

    const item = cart[variantIndex];
    const product = products.find((p) => p.id === item.productId);
    const stockInfo = productStokes.find((s) => s.productId === item.productId);

    const currentVariantStock =
      stockInfo?.stock -
      cart.reduce(
        (sum, c) => (c.productId === item.productId ? sum + c.qty : 0),
        0,
      );

    if (newQty > currentVariantStock) {
      alert(`❌ Stok tidak mencukupi! Sisa: ${currentVariantStock}`);
      return;
    }

    setCart(
      cart.map((item, idx) =>
        idx === variantIndex ? { ...item, qty: newQty } : item,
      ),
    );
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("❌ Keranjang kosong! Tambahkan produk terlebih dahulu.");
      return;
    }

    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const now = new Date();

    // Update stock after successful transaction
    setProductStokes(
      productStokes.map((stock) => {
        const itemsForProduct = cart.filter(
          (item) => item.productId === stock.productId,
        );
        const totalQty = itemsForProduct.reduce(
          (sum, item) => sum + item.qty,
          0,
        );

        return {
          ...stock,
          stock: stock.stock - totalQty,
        };
      }),
    );

    const transaction = {
      id: Date.now(),
      outletId: selectedOutlet,
      outletName: currentOutlet.name,
      items: [...cart],
      total: total,
      time: now.toLocaleTimeString("id-ID"),
      date: now.toLocaleDateString("id-ID"),
    };

    setTransactionHistory([transaction, ...transactionHistory]);

    alert(
      `✅ Transaksi berhasil!\nTotal: Rp${total.toLocaleString("id-ID")}\nStok otomatis ter-update.`,
    );

    setCart([]);
  };

  const getLowStockProducts = () => {
    return productStokes.filter((stock) => stock.stock < 10);
  };

  return (
    <div className="pt-24 pb-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
            <ShoppingCart className="w-8 h-8 mr-3 text-orange-600" />
            💰 Modul POS / Kasir Outlet
          </h2>
          <p className="text-gray-600">
            Input transaksi penjualan dengan cepat
          </p>
        </div>

        {/* Outlet Selector */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Pilih Outlet
          </label>
          <select
            value={selectedOutlet}
            onChange={(e) => setSelectedOutlet(parseInt(e.target.value))}
            className="w-full md:w-1/3 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          >
            {outlets.map((o) => (
              <option key={o.id} value={o.id}>
                {o.name} - {o.location}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Product Catalog */}
          <div className="lg:col-span-2 space-y-6">
            {products.map((product) => {
              const stockInfo = productStokes.find(
                (s) => s.productId === product.id,
              );
              const usedStock = cart
                .filter((item) => item.productId === product.id)
                .reduce((sum, item) => sum + item.qty, 0);
              const availableStock = stockInfo?.stock - usedStock || 0;

              return (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-md p-6"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {product.name}
                      </h3>
                      <div className="text-2xl font-bold text-orange-600 mt-1">
                        Rp{product.price.toLocaleString("id-ID")}
                      </div>
                    </div>
                    <div
                      className={`text-right ${availableStock < 10 ? "text-red-600" : "text-green-600"}`}
                    >
                      <div className="text-sm text-gray-500">Stok Tersedia</div>
                      <div className="text-2xl font-bold">
                        {availableStock} cup
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {product.variants.map((variant) => {
                      const itemInCart = cart.find(
                        (item) =>
                          item.productId === product.id &&
                          item.variant === variant,
                      );
                      const hasLowStock = availableStock < 10;

                      return (
                        <button
                          key={variant}
                          onClick={() => addToCart(product.id, variant)}
                          disabled={hasLowStock && !itemInCart}
                          className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                            itemInCart
                              ? "border-orange-500 bg-orange-50"
                              : hasLowStock
                                ? "border-gray-200 bg-gray-100 cursor-not-allowed opacity-50"
                                : "border-gray-300 hover:border-orange-400 hover:bg-orange-50"
                          }`}
                        >
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-gray-900">
                              {variant}
                            </span>
                            {itemInCart && (
                              <div className="flex items-center space-x-3">
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    updateQty(
                                      cart.indexOf(itemInCart),
                                      itemInCart.qty - 1,
                                    );
                                  }}
                                  className="w-8 h-8 rounded-full bg-red-500 text-white hover:bg-red-600 flex items-center justify-center font-bold"
                                >
                                  -
                                </button>
                                <span className="font-semibold text-gray-900 w-8 text-center">
                                  {itemInCart.qty}
                                </span>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    updateQty(
                                      cart.indexOf(itemInCart),
                                      itemInCart.qty + 1,
                                    );
                                  }}
                                  className="w-8 h-8 rounded-full bg-green-500 text-white hover:bg-green-600 flex items-center justify-center font-bold"
                                >
                                  +
                                </button>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    removeFromCart(cart.indexOf(itemInCart));
                                  }}
                                  className="ml-4 text-red-600 hover:text-red-800"
                                >
                                  Remove
                                </button>
                              </div>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Cart & Checkout */}
          <div className="space-y-6">
            {/* Current Stock Alert */}
            {getLowStockProducts().length > 0 && (
              <div className="bg-red-50 border-l-4 border-red-500 rounded-lg shadow-md p-4">
                <h3 className="text-sm font-semibold text-red-900 mb-2 flex items-center">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  Peringatan Stok Rendah
                </h3>
                <ul className="text-xs text-red-700 space-y-1">
                  {getLowStockProducts().map((stock) => {
                    const prod = products.find((p) => p.id === stock.productId);
                    const usedStock = cart
                      .filter((c) => c.productId === stock.productId)
                      .reduce((sum, i) => sum + i.qty, 0);
                    const available = stock.stock - usedStock;
                    return (
                      <li key={stock.productId}>
                        • {prod.name}: {available} cup tersisa
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            {/* Cart */}
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                🛒 Keranjang Transaksi
              </h3>

              {cart.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <ShoppingBag className="w-16 h-16 mx-auto mb-3 opacity-30" />
                  <p>Keranjang masih kosong</p>
                </div>
              ) : (
                <div className="space-y-3 max-h-96 overflow-y-auto mb-4">
                  {cart.map((item, idx) => (
                    <div key={idx} className="border-b pb-3">
                      <div className="font-medium text-gray-900">
                        {item.productName}
                      </div>
                      <div className="text-sm text-gray-600">
                        Varian: {item.variant}
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQty(idx, item.qty - 1)}
                            className="w-6 h-6 rounded bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
                          >
                            -
                          </button>
                          <span className="w-8 text-center font-semibold">
                            {item.qty}
                          </span>
                          <button
                            onClick={() => updateQty(idx, item.qty + 1)}
                            className="w-6 h-6 rounded bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
                          >
                            +
                          </button>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-500">
                            Rp{item.price.toLocaleString("id-ID")} x {item.qty}
                          </div>
                          <div className="font-semibold text-gray-900">
                            Rp{(item.price * item.qty).toLocaleString("id-ID")}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {cart.length > 0 && (
                <>
                  <div className="border-t pt-4 mt-4">
                    <div className="flex justify-between items-center text-xl">
                      <span className="font-bold text-gray-900">Total</span>
                      <span className="font-bold text-orange-600">
                        Rp
                        {cart
                          .reduce((sum, item) => sum + item.price * item.qty, 0)
                          .toLocaleString("id-ID")}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={handleCheckout}
                    className="w-full bg-orange-600 text-white py-3 px-4 rounded-lg hover:bg-orange-700 transition-colors font-bold text-lg mt-4"
                  >
                    Simpan Transaksi
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Transaction History */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Clock className="w-5 h-5 mr-2" />
            Riwayat Trans Hari Ini
          </h3>
          {transactionHistory.length === 0 ? (
            <p className="text-gray-500 text-sm">
              Belum ada transaksi hari ini.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr className="divide-x divide-gray-200">
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                      Waktu
                    </th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                      Produk
                    </th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                      Qty
                    </th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-x divide-gray-200">
                  {transactionHistory.slice(0, 10).map((t) =>
                    t.items.forEach((item) => (
                      <tr
                        key={`${t.id}-${item.variant}`}
                        className="divide-x divide-gray-200"
                      >
                        <td className="px-3 py-2 text-sm text-gray-600">
                          {t.time}
                        </td>
                        <td className="px-3 py-2 text-sm text-gray-900">
                          {item.productName}
                        </td>
                        <td className="px-3 py-2 text-sm text-gray-600">
                          {item.qty}
                        </td>
                        <td className="px-3 py-2 text-sm font-semibold text-orange-600">
                          Rp{(item.price * item.qty).toLocaleString("id-ID")}
                        </td>
                      </tr>
                    )),
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MarasatiSnackPOSModule;
