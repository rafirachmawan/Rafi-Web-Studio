import { MapPin } from "lucide-react";

export default function MapPreview({ lat, lng, label, zoom = 16, height = 200 }) {
  // Using OpenStreetMap static image
  const mapUrl = `https://staticmap.openstreetmap.de/staticmap.php?center=${lat},${lng}&zoom=${zoom}&size=600x300&markers=${lat},${lng},red-pushpin`;

  return (
    <div className="rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.02]" style={{ height }}>
      <div className="relative w-full h-full">
        <img
          src={mapUrl}
          alt="Lokasi"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = "none";
            e.target.nextSibling.style.display = "flex";
          }}
        />
        {/* Fallback if image fails */}
        <div className="hidden flex-col items-center justify-center w-full h-full bg-white/[0.03]">
          <MapPin size={32} className="text-zinc-500 mb-2" />
          <p className="text-xs text-zinc-500">Peta tidak tersedia</p>
          <p className="text-[10px] text-zinc-600 mt-1">{lat?.toFixed(6)}, {lng?.toFixed(6)}</p>
        </div>

        {/* Label overlay */}
        {label && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
            <div className="flex items-center gap-2">
              <MapPin size={12} className="text-emerald-400" />
              <span className="text-xs text-white font-medium">{label}</span>
            </div>
            <p className="text-[10px] text-zinc-400 mt-0.5 ml-5">
              {lat?.toFixed(6)}, {lng?.toFixed(6)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
