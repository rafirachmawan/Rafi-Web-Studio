import DemoCard from "../cards/DemoCard";

export default function DemoSection({ filter, setFilter, filtered }) {
  return (
    <>
      {/* HEADER */}
      <div id="demo" className="text-center mb-16 mt-10">
        <h2 className="text-2xl md:text-4xl font-heading font-bold tracking-tight leading-snug max-w-2xl mx-auto">
          Hasil Nyata Yang Sudah{" "}
          <span className="text-amber-400">Kami Kerjakan</span>
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">
          Beberapa project yang telah kami bantu untuk meningkatkan kepercayaan
          dan penjualan bisnis klien.
        </p>
      </div>

      {/* FILTER */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {["all", "food", "service", "education", "religion"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-1.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 border ${
              filter === cat
                ? "bg-amber-500 text-black border-amber-400 shadow-[0_0_20px_rgba(255,180,0,0.4)] scale-105"
                : "bg-white/10 text-gray-300 border-white/10 hover:bg-white/20 hover:text-white hover:scale-105"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((demo, i) => (
          <DemoCard key={i} demo={demo} index={i} />
        ))}
      </div>
    </>
  );
}
