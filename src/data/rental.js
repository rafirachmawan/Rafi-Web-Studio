import hondaBeat from "../apps/landing-page/rental/assets/honda_beat.jpg";
import hondaVario from "../apps/landing-page/rental/assets/honda_vario.jpg";
import hondaPcx from "../apps/landing-page/rental/assets/honda_pcx.jpg";
import yamahaVega from "../apps/landing-page/rental/assets/yamaha_vega.jpg";
import yamahaMio from "../apps/landing-page/rental/assets/yamaha_mio.jpg";
import yamahaNmax from "../apps/landing-page/rental/assets/yamaha_nmax.jpg";

export const rental = {
  type: "motor_dealer",
  name: "UD Arya Motor",
  shortName: "Arya Motor",
  tagline: "Jual Beli Motor Bekas Berkualitas & Terpercaya di Tulungagung",
  established: "2010",
  address: "Jl. Pahlawan No. 45, Kedungwaru, Kab. Tulungagung, Jawa Timur 66224",
  phone: "0812-3456-7890",
  wa: "6281234567890",
  email: "info@udaryamotor.com",
  mapsEmbed: "https://maps.google.com/maps?q=Tulungagung&t=&z=14&ie=UTF8&iwloc=&output=embed",
  vision: "Menjadi dealer motor bekas pilihan utama di Tulungagung dengan memberikan kualitas unit terbaik dan pelayanan yang jujur serta transparan.",
  stats: [
    { label: "Tahun Berdiri", value: "2010" },
    { label: "Unit Terjual", value: "5.000+" },
    { label: "Stok Ready", value: "50+" },
    { label: "Pelanggan Puas", value: "99%" },
  ],
  services: [
    {
      title: "Jual Beli Motor Bekas",
      desc: "Menjual berbagai merk motor bekas berkualitas dengan harga bersaing. Terima tukar tambah.",
      icon: "🏍️",
    },
    {
      title: "Garansi Mesin 1 Bulan",
      desc: "Setiap unit yang dibeli dari kami mendapatkan garansi mesin selama 1 bulan penuh.",
      icon: "🛡️",
    },
    {
      title: "Surat-surat Lengkap & Sah",
      desc: "Jaminan BPKB dan STNK asli. Pajak hidup dan siap proses balik nama (mutasi).",
      icon: "📄",
    },
    {
      title: "Bisa Cash & Kredit",
      desc: "Melayani pembelian secara tunai maupun kredit dengan proses cepat dan DP ringan.",
      icon: "💳",
    },
  ],
  inventory: [
    {
      id: 1,
      name: "Honda Beat CBS ISS",
      year: "2022",
      price: "Rp 15.800.000",
      dp: "Mulai Rp 1.500.000",
      image: hondaBeat,
      specs: ["Pajak Hidup", "Surat Lengkap", "Body Mulus", "Irit BBM 60km/L"],
    },
    {
      id: 2,
      name: "Honda Vario 150 Keyless",
      year: "2021",
      price: "Rp 19.500.000",
      dp: "Mulai Rp 2.500.000",
      image: hondaVario,
      specs: ["Warna Matte Black", "Kunci Keyless", "Ban Tubeless Baru", "Mesin Halus"],
    },
    {
      id: 3,
      name: "Honda PCX 160 ABS",
      year: "2022",
      price: "Rp 29.800.000",
      dp: "Mulai Rp 4.000.000",
      image: hondaPcx,
      specs: ["Rem ABS Aktif", "Bagasi Sangat Luas", "Kelistrikan Normal", "KM Rendah"],
    },
    {
      id: 4,
      name: "Yamaha Vega Force",
      year: "2020",
      price: "Rp 10.500.000",
      dp: "Mulai Rp 1.000.000",
      image: yamahaVega,
      specs: ["Mesin Bebek Tangguh", "Pajak Baru Gress", "Sparepart Murah", "Siap Kerja Keras"],
    },
    {
      id: 5,
      name: "Yamaha Mio Gear 125",
      year: "2022",
      price: "Rp 14.500.000",
      dp: "Mulai Rp 1.500.000",
      image: yamahaMio,
      specs: ["Desain Utility Scooter", "Double Hook", "Mesin Blue Core", "KM < 8000"],
    },
    {
      id: 6,
      name: "Yamaha NMAX 155 Connected",
      year: "2022",
      price: "Rp 27.500.000",
      dp: "Mulai Rp 3.500.000",
      image: yamahaNmax,
      specs: ["Y-Connect Aktif", "Shock Tabung", "Traction Control", "Tangan Pertama"],
    },
  ],
  gallery: [
    hondaBeat,
    hondaVario,
    hondaPcx,
    yamahaVega,
    yamahaMio,
    yamahaNmax,
  ],
  testimonials: [
    {
      text: "Pelayanan sangat memuaskan. Cari NMAX bekas dapat yang kondisinya masih seperti baru, mesin halus. Proses kredit juga dibantu sampai ACC.",
      author: "Budi Santoso",
      role: "Wiraswasta",
      date: "Okt 2023",
    },
    {
      text: "Jual motor Scoopy lama saya di UD Arya Motor harganya masuk akal. Langsung tukar tambah dengan Aerox. Mantap pokoknya!",
      author: "Deni Pratama",
      role: "Karyawan Swasta",
      date: "Nov 2023",
    },
    {
      text: "Garansi mesin 1 bulan benar-benar dijamin. Kemarin ada kendala sedikit di kelistrikan, langsung ditangani montirnya gratis.",
      author: "Siti Aminah",
      role: "Guru",
      date: "Des 2023",
    },
  ],
};
