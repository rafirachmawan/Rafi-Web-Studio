// src/data/umroh.js
// Umroh Travel Package Data

export const umroh = {
  type: "umroh",
  name: "Jabal Noor.official",
  description: "Travel Umroh & Haji Terpercaya",
  
  hero: {
    title: "Wujudkan Rindu Tanah Suci",
    subtitle: "Paket Umroh Terbaik dengan Pelayanan Profesional dan Harga Terjangkau",
    ctaText: "Daftar Sekarang"
  },
  
  theme: {
    bg: "bg-[#fdfbf7]",
    primary: "text-orange-500",
    button: "bg-orange-500",
    accent: "text-stone-900"
  },
  
  packages: [
    {
      id: 1,
      name: "Umroh Reguler",
      duration: "10 Hari",
      price: "Rp 28.500.000",
      description: "Paket Umroh reguler dengan pelayanan terbaik",
      features: [
        "Hotel bintang 4 dekat Masjidil Haram",
        "Pesawat direct flight",
        "Makan 3x sehari menu Indonesia",
        "Bimbingan ibadah oleh pemandu berpengalaman",
        "Visa umroh dan dokumentasi perjalanan"
      ],
      available: true
    },
    {
      id: 2,
      name: "Umroh Plus Turki",
      duration: "13 Hari",
      price: "Rp 35.500.000",
      description: "Pengalaman umroh ditambah wisata Istanbul",
      features: [
        "Semua fasilitas paket reguler",
        "Turis Istanbul termasuk Grand Mosque",
        "Hotel bintang 5 di Mekkah & Madinah",
        "Tour guide berbahasa Indonesia",
        "Voucher shopping di Istanbul"
      ],
      available: true
    },
    {
      id: 3,
      name: "Umroh Premium",
      duration: "12 Hari",
      price: "Rp 42.500.000",
      description: "Pengalaman umroh mewah dengan fasilitas eksklusif",
      features: [
        "Hotel view Ka'bah (bintang 5)",
        "Pesawat full service tanpa transit",
        "Katering buffet internasional",
        "Transportasi AC privatisasi",
        "Personal guide sepanjang perjalanan"
      ],
      available: true
    }
  ],
  
  advantages: [
    {
      icon: "shield",
      title: "Terdaftar Kemenag",
      description: "Legal dan terjamin keabsahan perjalanan ibadah Anda"
    },
    {
      icon: "star",
      title: "Pengalaman 10+ Tahun",
      description: "Telah melayani ribuan jamaah umroh dengan sukses"
    },
    {
      icon: "heart",
      title: "Pelayanan Professional",
      description: "Tim berpengalaman dalam bimbingan dan logistik"
    },
    {
      icon: "wallet",
      title: "Harga Transparan",
      description: "Tanpa biaya tersembunyi, pembayaran aman"
    }
  ],
  
  gallery: [
    {
      id: 1,
      url: "/assets/kaaba.jpg",
      alt: "Ka'bah di Masjidil Haram"
    },
    {
      id: 2,
      url: "/assets/madinah.jpg",
      alt: "Masjid Nabawi"
    },
    {
      id: 3,
      url: "/assets/jemaah.jpg",
      alt: "Jamaah Umroh Indonesia"
    }
  ],
  
  testimonials: [
    {
      name: "Hj. Siti Aminah",
      location: "Jakarta",
      text: "Alhamdulillah perjalanan umroh sangat lancar. Pemandu sangat membantu dan hotelnya strategis sekali.",
      rating: 5
    },
    {
      name: "Ahmad Fauzi",
      location: "Surabaya",
      text: "Fasilitas lengkap, makanan enak, pelayanan ramah. Recommended untuk yang mau pergi umroh!",
      rating: 5
    }
  ],
  
  contact: {
    phone: "628123456789",
    waLink: "https://wa.me/628123456789?text=Assalamu'alaikum,%20saya%20tertarik%20dengan%20program%20umroh.",
    address: "Jl. Raya Utama No. 123, Jakarta Selatan"
  }
};
