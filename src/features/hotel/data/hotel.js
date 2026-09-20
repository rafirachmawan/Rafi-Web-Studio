export const hotel = {
  type: "hotel",
  name: "Crown Victoria Hotel Tulungagung",
  hero: {
    title: "Crown Victoria Hotel",
    subtitle: "The Premier Victorian Luxury 4-Star Experience in Tulungagung",
  },
  theme: {
    bg: "bg-[#050505]",
    primary: "text-purple-500",
    button: "bg-purple-500 text-black",
  },
  promotions: [
    {
      id: 1,
      title: "Weekend Escape Package",
      desc: "Nikmati akhir pekan yang tenang dengan diskon 15% untuk kamar Deluxe & Suite. Sudah termasuk sarapan untuk 2 orang.",
      code: "WKNDESCAPE",
      period: "Berlaku hingga Des 2026",
    },
    {
      id: 2,
      title: "Victorian Honeymoon Dream",
      desc: "Paket bulan madu romantis di Victoria Grand Suite lengkap dengan dekorasi bunga, private dinner, dan layanan butler.",
      code: "HONEYMOON",
      period: "Berlaku Setiap Hari",
    },
    {
      id: 3,
      title: "Business Meeting Package",
      desc: "Rapat bisnis sukses dengan ruangan lengkap. Termasuk 2x coffee break, prasmanan makan siang, dan peralatan banquet.",
      code: "BIZMEET",
      period: "Senin - Jumat",
    },
  ],
  touristSpots: [
    {
      name: "Pantai Gemah",
      distance: "30 menit berkendara",
      desc: "Pantai berpasir coklat yang indah dengan ombak tenang, rimbun pohon cemara, dan wahana ATV/banana boat.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=600",
    },
    {
      name: "Ranu Gumbolo",
      distance: "25 menit berkendara",
      desc: "Danau tenang berhutan pinus sejuk yang menyuguhkan pemandangan hijau asri, spot memancing, dan gazebo santai.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=600",
    },
    {
      name: "Pantai Kedung Tumpang",
      distance: "45 menit berkendara",
      desc: "Keunikan gugusan karang dengan kolam-kolam air laut alami berwarna jernih kehijauan di tepi tebing laut selatan.",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=600",
    },
  ],
};
