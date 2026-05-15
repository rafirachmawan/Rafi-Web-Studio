import { useState, useMemo } from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";

export default function DataTable({
  columns,
  data,
  searchable = true,
  searchKeys = [],
  pageSize = 10,
  onRowClick,
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
    <div className="rounded-[24px] border border-white/[0.06] bg-white/[0.02] overflow-hidden backdrop-blur-md">
      {/* SEARCH */}
      {searchable && (
        <div className="p-6 border-b border-white/[0.06]">
          <div className="flex items-center gap-3 bg-white/[0.04] border border-white/[0.08] rounded-2xl px-4 py-2.5 max-w-xs transition-all focus-within:border-cyan-500/40 focus-within:bg-white/[0.06]">
            <Search size={15} className="text-zinc-500" />
            <input
              type="text"
              placeholder="Search records..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(0);
              }}
              className="bg-transparent text-xs text-zinc-300 placeholder:text-zinc-600 outline-none w-full font-medium"
            />
          </div>
        </div>
      )}

      {/* TABLE */}
      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-white/[0.06] bg-white/[0.01]">
              {columns.map((col) => (
                <th
                  key={col.key}
                  className="text-left px-6 py-4 text-zinc-500 font-black uppercase tracking-widest"
                  style={{ width: col.width }}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/[0.03]">
            {paged.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-6 py-16 text-center text-zinc-500 text-sm font-medium"
                >
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              paged.map((row, i) => (
                <tr
                  key={row.id || i}
                  onClick={() => onRowClick?.(row)}
                  className={`transition-all duration-300 hover:bg-white/[0.04] ${onRowClick ? "cursor-pointer active:bg-white/[0.06]" : ""}`}
                >
                  {columns.map((col) => (
                    <td key={col.key} className="px-6 py-4 text-zinc-300 font-medium whitespace-nowrap">
                      {col.render ? col.render(row[col.key], row) : row[col.key]}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between px-6 py-4 border-t border-white/[0.06] bg-black/10">
          <p className="text-[11px] text-zinc-500 font-bold uppercase tracking-wider">
            Showing {paged.length} of {filtered.length} entries
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="p-2 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 text-zinc-400 disabled:opacity-20 transition-all"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="flex items-center gap-1">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className={`w-8 h-8 rounded-lg text-[10px] font-black transition-all ${page === i ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/20" : "text-zinc-500 hover:text-white hover:bg-white/5"}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <button
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page >= totalPages - 1}
              className="p-2 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 text-zinc-400 disabled:opacity-20 transition-all"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
