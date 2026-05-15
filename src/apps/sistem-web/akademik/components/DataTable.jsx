import { useState, useMemo } from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";

export default function DataTable({
  columns,
  data,
  searchable = true,
  searchKeys = [],
  pageSize = 5,
  emptyMessage = "Tidak ada data.",
}) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);

  const filtered = useMemo(() => {
    if (!search.trim() || searchKeys.length === 0) return data;
    const q = search.toLowerCase();
    return data.filter((row) =>
      searchKeys.some((key) =>
        String(row[key] || "").toLowerCase().includes(q),
      ),
    );
  }, [data, search, searchKeys]);

  const totalPages = Math.ceil(filtered.length / pageSize);
  const paged = filtered.slice(page * pageSize, (page + 1) * pageSize);

  return (
    <div className="bg-zinc-900 border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
      {searchable && (
        <div className="p-6 border-b border-white/5">
          <div className="flex items-center gap-3 bg-white/5 border border-white/5 rounded-xl px-4 py-2.5 max-w-sm focus-within:border-indigo-500/50 transition-all">
            <Search size={18} className="text-zinc-500" />
            <input
              type="text"
              placeholder="Cari data..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(0);
              }}
              className="bg-transparent text-sm text-white placeholder:text-zinc-600 outline-none w-full"
            />
          </div>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/5 bg-white/[0.02]">
              {columns.map((col, i) => (
                <th
                  key={i}
                  className="px-6 py-5 text-xs font-bold text-zinc-500 uppercase tracking-widest"
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {paged.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-6 py-12 text-center text-zinc-500"
                >
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              paged.map((row, i) => (
                <tr
                  key={i}
                  className="hover:bg-white/[0.02] transition-colors group"
                >
                  {columns.map((col, j) => (
                    <td key={j} className="px-6 py-4">
                      {col.render ? (
                        col.render(row[col.key], row)
                      ) : (
                        <span className="text-sm font-medium text-zinc-300">
                          {row[col.key]}
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="p-6 border-t border-white/5 flex items-center justify-between">
          <p className="text-xs text-zinc-500">
            Menampilkan {paged.length} dari {filtered.length} data
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="p-2 rounded-lg bg-white/5 text-zinc-400 disabled:opacity-50"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-1">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
                    page === i
                      ? "bg-indigo-500 text-white"
                      : "bg-white/5 text-zinc-500 hover:text-white"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <button
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page >= totalPages - 1}
              className="p-2 rounded-lg bg-white/5 text-zinc-400 disabled:opacity-50"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
