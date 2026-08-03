import yamahaVega from "../apps/landing-page/rental/assets/yamaha_vega.jpg";
import yamahaMio from "../apps/landing-page/rental/assets/yamaha_mio.jpg";
import yamahaNmax from "../apps/landing-page/rental/assets/yamaha_nmax.jpg";
import yamahaLogo from "../assets/Yamaha/yamahalogo.png";
import iconYamaha from "../assets/Yamaha/iconyamaha.png";
import yamahaCoverImg from "../assets/Yamaha/image.png";
import heroYamaha from "../assets/Yamaha/heroyamaha.jpg";

export const rental = {
  type: "motor_dealer",
  name: "PT Yamaha Indonesia Motor Manufacturing (YIMM)",
  shortName: "Yamaha Motor",
  tagline: "Revs Your Heart — Portal Informasi Produk, Layanan & Aktivitas Yamaha Indonesia",
  established: "1974",
  address: "Jl. DR KRT Radjiman Widyodiningrat, Rawa Terate, Cakung, Jakarta Timur 13920",
  phone: "021-2457-5555",
  wa: "6281212345678",
  email: "contact_center@yamaha-motor.co.id",
  logo: iconYamaha,
  heroImage: heroYamaha,
  mapsEmbed: "https://maps.google.com/maps?q=PT+Yamaha+Indonesia+Motor+Manufacturing&t=&z=14&ie=UTF8&iwloc=&output=embed",
  vision: "Website resmi PT Yamaha Indonesia Motor Manufacturing (YIMM) yang berfungsi sebagai portal informasi produk, layanan, dan aktivitas Yamaha di Indonesia.",
  stats: [
    { label: "Kategori Motor", value: "6 Kategori" },
    { label: "Dealer Resmi", value: "Find Dealer" },
    { label: "Service Booking", value: "Online 24/7" },
    { label: "Member Community", value: "bLU cRU" },
  ],
  services: [
    {
      title: "Credit Simulation",
      desc: "Simulasi perhitungan kredit pembelian motor Yamaha impian Anda dengan skema DP dan angsuran yang transparan.",
      icon: "💳",
    },
    {
      title: "Service Booking",
      desc: "Layanan booking jadwal servis sepeda motor secara online di dealer resmi Yamaha tanpa antre.",
      icon: "🛠️",
    },
    {
      title: "Find Dealer",
      desc: "Pencarian lokasi dealer dan bengkel resmi Yamaha terdekat di seluruh Indonesia.",
      icon: "📍",
    },
    {
      title: "My Yamaha Motor Members",
      desc: "Akses area keanggotaan eksklusif untuk informasi servis, riwayat motor, dan poin reward.",
      icon: "⭐",
    },
    {
      title: "Yamaha Genuine Parts & Yamalube",
      desc: "Suku cadang resmi Yamaha Genuine Parts (YGP), pelumas Yamalube, helm, apparel, dan aksesoris.",
      icon: "⚙️",
    },
    {
      title: "Owners Manual Online",
      desc: "Buku manual digital online untuk panduan perawatan dan pengoperasian motor Yamaha Anda.",
      icon: "📖",
    },
  ],
  inventory: [
    {
      id: 1,
      name: "Yamaha NMAX Turbo (MAXi)",
      year: "2026",
      price: "Rp 37.750.000",
      dp: "Simulasi Kredit Ready",
      image: yamahaNmax,
      specs: ["Skutik Premium MAXi", "Y-Shift Electronic CVT", "TFT Infotainment Display", "Dual Channel ABS"],
    },
    {
      id: 2,
      name: "Yamaha Fazzio Hybrid (Classy)",
      year: "2026",
      price: "Rp 22.700.000",
      dp: "Simulasi Kredit Ready",
      image: yamahaMio,
      specs: ["Kategori Classy", "Blue Core Hybrid 125cc", "Smart Key System", "Digital Speedometer"],
    },
    {
      id: 3,
      name: "Yamaha Gear Ultima 125 (Matic)",
      year: "2026",
      price: "Rp 18.500.000",
      dp: "Simulasi Kredit Ready",
      image: yamahaMio,
      specs: ["Skutik Matic Multiguna", "Double Hook", "Mesin Blue Core Irit", "Electric Power Socket"],
    },
    {
      id: 4,
      name: "Yamaha R15 Connected (Sport)",
      year: "2026",
      price: "Rp 39.875.000",
      dp: "Simulasi Kredit Ready",
      image: yamahaCoverImg,
      specs: ["Kategori Sport R-Series", "Mesin 155cc VVA", "Assist & Slipper Clutch", "Y-Connect System"],
    },
    {
      id: 5,
      name: "Yamaha WR 155 R (Off-Road)",
      year: "2026",
      price: "Rp 38.600.000",
      dp: "Simulasi Kredit Ready",
      image: yamahaCoverImg,
      specs: ["Motor Off-Road Dual Purpose", "Suspensi Long Travel", "Liquid Cooled VVA Engine", "Frame Kokoh"],
    },
    {
      id: 6,
      name: "Yamaha MX King 150 (Moped)",
      year: "2026",
      price: "Rp 26.300.000",
      dp: "Simulasi Kredit Ready",
      image: yamahaVega,
      specs: ["Motor Moped Bebek Sport", "Mesin 150cc Fuel Injection", "Desain Aerodinamis", "Digital Speedometer"],
    },
  ],
  gallery: [
    yamahaCoverImg,
    yamahaCoverImg,
    yamahaCoverImg,
  ],
  testimonials: [
    {
      text: "Fitur Service Booking di portal Yamaha sangat memudahkan booking servis NMAX saya di dealer resmi tanpa harus mengantre lama.",
      author: "Budi Santoso",
      role: "Pengguna Yamaha NMAX",
      date: "Agustus 2026",
    },
    {
      text: "Simulasi kredit akurat dan informasi lokasi Find Dealer sangat jelas. Sangat membantu saat mau membeli Yamaha Fazzio.",
      author: "Deni Pratama",
      role: "My Yamaha Member",
      date: "Agustus 2026",
    },
    {
      text: "Akses Owners Manual online dan update event bLU cRU balap Yamaha di website resminya sangat lengkap dan intuitif.",
      author: "Siti Aminah",
      role: "Komunitas Yamaha",
      date: "Agustus 2026",
    },
  ],
};
