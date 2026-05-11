export default function UmrohLanding() {
  const phone = "628123456789";
  const message = "Halo, saya tertarik paket umroh";
  const waLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  const packages = [
    {
      name: "Paket Hemat",
      price: "Rp25jt",
      desc: "9 Hari - Hotel bintang 3",
    },
    {
      name: "Paket Reguler",
      price: "Rp30jt",
      desc: "10 Hari - Hotel bintang 4",
    },
    {
      name: "Paket VIP",
      price: "Rp40jt",
      desc: "12 Hari - Hotel bintang 5",
    },
  ];

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      {/* HERO */}
      <div className="text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          Travel <span className="text-amber-400">Umroh Amanah</span>
        </h1>
        <p className="text-gray-400 mt-4">
          Ibadah nyaman dengan pelayanan profesional & terpercaya
        </p>

        <a
          href={waLink}
          target="_blank"
          className="inline-block mt-6 bg-amber-500 text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition"
        >
          Konsultasi Sekarang
        </a>
      </div>

      {/* PACKAGES */}
      <div className="max-w-5xl mx-auto px-6 pb-20 grid md:grid-cols-3 gap-6">
        {packages.map((item, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-amber-400 transition"
          >
            <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
            <p className="text-amber-400 text-xl font-bold">{item.price}</p>
            <p className="text-gray-400 text-sm mt-2">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center pb-20">
        <a
          href={waLink}
          target="_blank"
          className="bg-amber-500 text-black px-8 py-3 rounded-full font-medium hover:scale-105 transition"
        >
          Daftar Sekarang
        </a>
      </div>
    </div>
  );
}
