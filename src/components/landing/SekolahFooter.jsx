import { GraduationCap } from "lucide-react";

export function SekolahFooter() {
  return (
    <footer className="bg-[#09090b] pt-16 pb-8 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <GraduationCap className="text-teal-500 w-6 h-6" />
          <span className="text-xl font-bold text-white">Sekolah Masa Depan</span>
        </div>
        <div className="text-zinc-500 text-sm font-medium">
          © 2026 Sekolah Masa Depan. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
