export const restoInfo = {
  name: "Mie Gacoan Mojokerto",
  tagline: "Spicy Food Revolution — Mie Pedas No.1 di Indonesia",
  heroTitle: "Mie Pedas No.1 Indonesia",
  heroSubtitle: "Nikmati sensasi mie pedas legendaris, dimsum renyah gurih, dan kesegaran es manis khas Mie Gacoan Mojokerto. Tempat nongkrong asyik dengan harga super bersahabat!",
  address: "Jl. Jenderal Sudirman, Mergelo, Jagalan, Kec. Magersari, Kota Mojokerto, Jawa Timur",
  hours: "Setiap Hari: 24 Jam (00.00 – 23.59 WIB)",
  phone: "6285142529294",
  phoneDisplay: "+62 851-4252-9294",
  reservationContact: "A.N Kartika (085708428376)",
  logo: "https://assets.olaclick.app/companies/logos/aae26a78-e7f2-46c5-8c24-93419262555e.png",
  logoThumbnail: "https://assets.olaclick.app/companies/logos/thumbnails/aae26a78-e7f2-46c5-8c24-93419262555e.webp",
  banner: "https://assets.olaclick.app/companies/backgrounds/0eff30f1-217e-4f89-880f-5b57bd36cc65.webp",
  waOrderUrl: "https://wa.me/6285142529294",
  stats: [
    { value: "46+", label: "Varian Menu" },
    { value: "24 Jam", label: "Buka Setiap Hari" },
    { value: "100k+", label: "Pelanggan Puas" },
    { value: "4.9★", label: "Rating Google" },
  ],
  features: [
    {
      icon: "Flame",
      title: "Level Kepedasan Ikonik",
      description: "Pilihan Mie Gacoan (manis pedas) & Hompimpa (asin pedas) dari Level 0 hingga Level 8 yang meledak di lidah."
    },
    {
      icon: "Utensils",
      title: "Dimsum Renyah & Gurih",
      description: "Udang Keju meleleh, Udang Rambutan krispi, Lumpia Udang, hingga Siomay & Pangsit Goreng juara."
    },
    {
      icon: "Sparkles",
      title: "Es Segar Tradisional",
      description: "Penyegar pedas legendaris: Es Gobak Sodor, Es Petak Umpet, Es Teklek, dan Es Sluku Bathok."
    },
    {
      icon: "Clock",
      title: "Layanan 24 Jam & Ramah",
      description: "Siap melayani dine-in, takeaway, maupun pesanan online via WhatsApp kapan saja Anda lapar."
    }
  ]
};

export const menuCategories = [
  { id: "all", name: "Semua Menu", icon: "UtensilsCrossed" },
  { id: "mie", name: "Mie Pedas", icon: "Flame" },
  { id: "dimsum", name: "Dimsum", icon: "Cookie" },
  { id: "es-buah", name: "Es Buah", icon: "IceCream" },
  { id: "beverage", name: "Beverage", icon: "Coffee" },
  { id: "gacoan-fest", name: "Gacoan Fest", icon: "Sparkles" },
  { id: "gacoan-combat", name: "Gacoan Combat", icon: "Users" },
];

export const menuItems = [
  // ================= 1. MIE (14 items) =================
  {
    id: "mie-gacoan-lv0",
    name: "Mie Gacoan Lv 0",
    category: "mie",
    price: 10000,
    formattedPrice: "Rp 10.000",
    image: "https://assets.olaclick.app/companies/products/images/800/a745345f-959c-4527-808d-cd0d6417cc12.jpeg",
    description: "Mie manis gurih tanpa rasa pedas, cocok untuk pemula dan pecinta mie gurih manis.",
    spicyLevel: 0,
    popular: true
  },
  {
    id: "mie-gacoan-lv1",
    name: "Mie Gacoan Lv 1",
    category: "mie",
    price: 10000,
    formattedPrice: "Rp 10.000",
    image: "https://assets.olaclick.app/companies/products/images/800/7373313f-b1dc-4a1f-96d5-29ca17414932.jpeg",
    description: "Mie manis pedas level 1 yang ringan dan lezat berpadu taburan ayam dan pangsit renyah.",
    spicyLevel: 1,
    popular: true
  },
  {
    id: "mie-gacoan-lv2",
    name: "Mie Gacoan Lv 2",
    category: "mie",
    price: 10000,
    formattedPrice: "Rp 10.000",
    image: "https://assets.olaclick.app/companies/products/images/800/7373313f-b1dc-4a1f-96d5-29ca17414932.jpeg",
    description: "Mie manis pedas level 2 dengan sensasi pedas pas yang bikin nagih.",
    spicyLevel: 2,
    popular: true
  },
  {
    id: "mie-gacoan-lv3",
    name: "Mie Gacoan Lv 3",
    category: "mie",
    price: 10000,
    formattedPrice: "Rp 10.000",
    image: "https://assets.olaclick.app/companies/products/images/800/7373313f-b1dc-4a1f-96d5-29ca17414932.jpeg",
    description: "Mie manis pedas level 3 untuk sensasi hangat pedas yang makin nendang.",
    spicyLevel: 3,
    popular: false
  },
  {
    id: "mie-gacoan-lv4",
    name: "Mie Gacoan Lv 4",
    category: "mie",
    price: 10000,
    formattedPrice: "Rp 10.000",
    image: "https://assets.olaclick.app/companies/products/images/800/7373313f-b1dc-4a1f-96d5-29ca17414932.jpeg",
    description: "Mie manis pedas level 4 dengan kepedasan intens yang menggigit.",
    spicyLevel: 4,
    popular: false
  },
  {
    id: "mie-gacoan-lv6",
    name: "Mie Gacoan Lv 6",
    category: "mie",
    price: 11000,
    formattedPrice: "Rp 11.000",
    image: "https://assets.olaclick.app/companies/products/images/800/7373313f-b1dc-4a1f-96d5-29ca17414932.jpeg",
    description: "Mie manis pedas level 6 untuk para penantang pedas sejati!",
    spicyLevel: 6,
    popular: false
  },
  {
    id: "mie-gacoan-lv8",
    name: "Mie Gacoan Lv 8",
    category: "mie",
    price: 11000,
    formattedPrice: "Rp 11.000",
    image: "https://assets.olaclick.app/companies/products/images/800/7373313f-b1dc-4a1f-96d5-29ca17414932.jpeg",
    description: "Mie manis pedas level maksimal 8! Ekstrem membakar lidah.",
    spicyLevel: 8,
    popular: true
  },
  {
    id: "mie-suit",
    name: "Mie Suit",
    category: "mie",
    price: 10000,
    formattedPrice: "Rp 10.000",
    image: "https://assets.olaclick.app/companies/products/images/800/6a44a838-913c-4d4c-8add-b10229800451.jpeg",
    description: "Mie gurih original tanpa cabe sama sekali, favorit anak-anak dan yang tidak tahan pedas.",
    spicyLevel: 0,
    popular: true
  },
  {
    id: "mie-hompimpa-lv1",
    name: "Mie Hompimpa Lv 1",
    category: "mie",
    price: 10000,
    formattedPrice: "Rp 10.000",
    image: "https://assets.olaclick.app/companies/products/images/800/28090efc-6f59-4c05-9237-e77e638a3175.jpeg",
    description: "Mie asin gurih pedas level 1, gurih renyah dengan cabai segar pilihan.",
    spicyLevel: 1,
    popular: true
  },
  {
    id: "mie-hompimpa-lv2",
    name: "Mie Hompimpa Lv 2",
    category: "mie",
    price: 10000,
    formattedPrice: "Rp 10.000",
    image: "https://assets.olaclick.app/companies/products/images/800/28090efc-6f59-4c05-9237-e77e638a3175.jpeg",
    description: "Mie asin gurih pedas level 2 dengan cita rasa gurih asin yang dominan dan pedas mantap.",
    spicyLevel: 2,
    popular: true
  },
  {
    id: "mie-hompimpa-lv3",
    name: "Mie Hompimpa Lv 3",
    category: "mie",
    price: 10000,
    formattedPrice: "Rp 10.000",
    image: "https://assets.olaclick.app/companies/products/images/800/28090efc-6f59-4c05-9237-e77e638a3175.jpeg",
    description: "Mie asin gurih pedas level 3 dengan kepedasan cabai segar yang menggugah selera.",
    spicyLevel: 3,
    popular: false
  },
  {
    id: "mie-hompimpa-lv4",
    name: "Mie Hompimpa Lv 4",
    category: "mie",
    price: 10000,
    formattedPrice: "Rp 10.000",
    image: "https://assets.olaclick.app/companies/products/images/800/28090efc-6f59-4c05-9237-e77e638a3175.jpeg",
    description: "Mie asin gurih pedas level 4 dengan rasa pedas membakar yang tegas.",
    spicyLevel: 4,
    popular: false
  },
  {
    id: "mie-hompimpa-lv6",
    name: "Mie Hompimpa Lv 6",
    category: "mie",
    price: 11000,
    formattedPrice: "Rp 11.000",
    image: "https://assets.olaclick.app/companies/products/images/800/28090efc-6f59-4c05-9237-e77e638a3175.jpeg",
    description: "Mie asin gurih pedas level 6 berkeringat dan memacu adrenalin.",
    spicyLevel: 6,
    popular: false
  },
  {
    id: "mie-hompimpa-lv8",
    name: "Mie Hompimpa Lv 8",
    category: "mie",
    price: 11000,
    formattedPrice: "Rp 11.000",
    image: "https://assets.olaclick.app/companies/products/images/800/28090efc-6f59-4c05-9237-e77e638a3175.jpeg",
    description: "Mie asin gurih level 8 puncak kepedasan Hompimpa!",
    spicyLevel: 8,
    popular: true
  },

  // ================= 2. DIMSUM (5 items) =================
  {
    id: "udang-keju",
    name: "Udang Keju",
    category: "dimsum",
    price: 9000,
    formattedPrice: "Rp 9.000",
    image: "https://assets.olaclick.app/companies/products/images/800/78fefd6a-3926-43fc-904e-ed5a02533d50.jpeg",
    description: "Olahan udang lembut berbalut tepung roti dengan lelehan keju mozarella gurih di dalamnya.",
    spicyLevel: 0,
    popular: true
  },
  {
    id: "lumpia-udang",
    name: "Lumpia Udang",
    category: "dimsum",
    price: 9000,
    formattedPrice: "Rp 9.000",
    image: "https://assets.olaclick.app/companies/products/images/800/2dcdfaf9-db05-4e22-91ac-b28086f165b4.jpeg",
    description: "Kulit tahu renyah berisikan cincangan udang gurih, digoreng garing keemasan.",
    spicyLevel: 0,
    popular: true
  },
  {
    id: "udang-rambutan",
    name: "Udang Rambutan",
    category: "dimsum",
    price: 9000,
    formattedPrice: "Rp 9.000",
    image: "https://assets.olaclick.app/companies/products/images/800/3a3a0f32-76a3-478a-aaf8-7878e81959e3.jpeg",
    description: "Bola udang lembut yang diselimuti serabut pangsit renyah mirip buah rambutan.",
    spicyLevel: 0,
    popular: true
  },
  {
    id: "siomay-ayam",
    name: "Siomay Ayam",
    category: "dimsum",
    price: 9000,
    formattedPrice: "Rp 9.000",
    image: "https://assets.olaclick.app/companies/products/images/800/91faf3db-f899-4bb8-bb84-d600aa156a2c.jpeg",
    description: "Siomay kukus lembut dari daging ayam pilihan dengan saus cocolan khas.",
    spicyLevel: 0,
    popular: false
  },
  {
    id: "pangsit-goreng",
    name: "Pangsit Goreng",
    category: "dimsum",
    price: 10000,
    formattedPrice: "Rp 10.000",
    image: "https://assets.olaclick.app/companies/products/images/800/fe45960a-4de5-4a6b-a8d9-150395d27d14.jpeg",
    description: "Pangsit renyah gurih ukuran jumbo dengan isian ayam gurih lezat.",
    spicyLevel: 0,
    popular: true
  },

  // ================= 3. ES BUAH (4 items) =================
  {
    id: "es-gobak-sodor",
    name: "Es Gobak Sodor",
    category: "es-buah",
    price: 9000,
    formattedPrice: "Rp 9.000",
    image: "https://assets.olaclick.app/companies/products/images/800/3c616825-0edd-460d-86f3-99f476488dd9.jpeg",
    description: "Es buah manis segar perpaduan aneka buah segar, cincau, dan sirup istimewa peluruh rasa pedas.",
    spicyLevel: 0,
    popular: true
  },
  {
    id: "es-petak-umpet",
    name: "Es Petak Umpet",
    category: "es-buah",
    price: 9000,
    formattedPrice: "Rp 9.000",
    image: "https://assets.olaclick.app/companies/products/images/800/51cccbdc-879a-4e94-ab1a-f2f56f9a9a81.jpeg",
    description: "Es buah segar berpadu irisan jeruk nipis dan buah tropis manis asam penyegar dahaga.",
    spicyLevel: 0,
    popular: true
  },
  {
    id: "es-teklek",
    name: "Es Teklek",
    category: "es-buah",
    price: 6300,
    formattedPrice: "Rp 6.300",
    image: "https://assets.olaclick.app/companies/products/images/800/03ad5f7d-c8a0-40a8-bd47-5717c21684be.jpeg",
    description: "Es buah tradisional dengan campuran buah segar dan kuah manis yang nikmat.",
    spicyLevel: 0,
    popular: false
  },
  {
    id: "es-sluku-bathok",
    name: "Es Sluku Bathok",
    category: "es-buah",
    price: 6300,
    formattedPrice: "Rp 6.300",
    image: "https://assets.olaclick.app/companies/products/images/800/f6e034c3-ed6c-4eb7-a525-60ab6b63d307.jpeg",
    description: "Es kelapa muda berpadu sirup manis kental yang dingin melegakan tenggorokan.",
    spicyLevel: 0,
    popular: false
  },

  // ================= 4. BEVERAGE (15 items) =================
  {
    id: "air-mineral",
    name: "Air Mineral",
    category: "beverage",
    price: 4500,
    formattedPrice: "Rp 4.500",
    image: "https://assets.olaclick.app/companies/products/images/800/9541d19b-4ebd-4e0d-a468-3c7e2d8980db.jpeg",
    description: "Air mineral botol dingin atau netral.",
    spicyLevel: 0,
    popular: false
  },
  {
    id: "tea-ice",
    name: "Tea Ice",
    category: "beverage",
    price: 4500,
    formattedPrice: "Rp 4.500",
    image: "https://assets.olaclick.app/companies/products/images/800/e912c031-2b46-43a4-9407-79ae0923bb58.jpeg",
    description: "Es teh manis segar pelepas dahaga.",
    spicyLevel: 0,
    popular: true
  },
  {
    id: "tea-hot",
    name: "Tea Hot",
    category: "beverage",
    price: 4500,
    formattedPrice: "Rp 4.500",
    image: "https://assets.olaclick.app/companies/products/images/800/e912c031-2b46-43a4-9407-79ae0923bb58.jpeg",
    description: "Teh manis hangat wangi melati.",
    spicyLevel: 0,
    popular: false
  },
  {
    id: "lemon-tea-ice",
    name: "Lemon Tea Ice",
    category: "beverage",
    price: 6500,
    formattedPrice: "Rp 6.500",
    image: "https://assets.olaclick.app/companies/products/images/800/1d5378ce-8023-4b87-bfde-570a1c82fe38.jpeg",
    description: "Teh segar dingin berpadu perasan lemon asli asam manis menyegarkan.",
    spicyLevel: 0,
    popular: true
  },
  {
    id: "lemon-tea-hot",
    name: "Lemon Tea Hot",
    category: "beverage",
    price: 6500,
    formattedPrice: "Rp 6.500",
    image: "https://assets.olaclick.app/companies/products/images/800/1d5378ce-8023-4b87-bfde-570a1c82fe38.jpeg",
    description: "Teh lemon hangat yang menenangkan tenggorokan.",
    spicyLevel: 0,
    popular: false
  },
  {
    id: "orange-ice",
    name: "Orange Ice",
    category: "beverage",
    price: 5500,
    formattedPrice: "Rp 5.500",
    image: "https://assets.olaclick.app/companies/products/images/800/36a442b7-e97a-4556-b714-69279ac2ef3b.jpeg",
    description: "Es jeruk manis segar penuh vitamin C.",
    spicyLevel: 0,
    popular: true
  },
  {
    id: "orange-hot",
    name: "Orange Hot",
    category: "beverage",
    price: 5500,
    formattedPrice: "Rp 5.500",
    image: "https://assets.olaclick.app/companies/products/images/800/36a442b7-e97a-4556-b714-69279ac2ef3b.jpeg",
    description: "Jeruk peras hangat manis alami.",
    spicyLevel: 0,
    popular: false
  },
  {
    id: "teh-tarik-ice",
    name: "Teh Tarik Ice",
    category: "beverage",
    price: 7000,
    formattedPrice: "Rp 7.000",
    image: "https://assets.olaclick.app/companies/products/images/800/a2147938-b4a2-479c-a424-cb604b76987c.jpeg",
    description: "Teh tarik creamy berbuih lembut disajikan dingin menyegarkan.",
    spicyLevel: 0,
    popular: false
  },
  {
    id: "teh-tarik-hot",
    name: "Teh Tarik Hot",
    category: "beverage",
    price: 7000,
    formattedPrice: "Rp 7.000",
    image: "https://assets.olaclick.app/companies/products/images/800/a2147938-b4a2-479c-a424-cb604b76987c.jpeg",
    description: "Teh tarik hangat nikmat khas Melayu berbusa creamy.",
    spicyLevel: 0,
    popular: false
  },
  {
    id: "vanilla-latte-ice",
    name: "Vanilla Latte Ice",
    category: "beverage",
    price: 8500,
    formattedPrice: "Rp 8.500",
    image: "https://assets.olaclick.app/companies/products/images/800/607b6bf3-ee07-49bb-bde4-b9b1b47070ee.jpeg",
    description: "Kopi susu beraroma vanila manis lembut dengan sensasi es segar.",
    spicyLevel: 0,
    popular: true
  },
  {
    id: "vanilla-latte-hot",
    name: "Vanilla Latte Hot",
    category: "beverage",
    price: 8500,
    formattedPrice: "Rp 8.500",
    image: "https://assets.olaclick.app/companies/products/images/800/607b6bf3-ee07-49bb-bde4-b9b1b47070ee.jpeg",
    description: "Kopi susu hangat aroma vanila yang wangi dan menenangkan.",
    spicyLevel: 0,
    popular: false
  },
  {
    id: "chocoan-ice",
    name: "Chocoan Ice",
    category: "beverage",
    price: 8500,
    formattedPrice: "Rp 8.500",
    image: "https://assets.olaclick.app/companies/products/images/800/887a1d83-86da-46d3-92a0-de463b6a6219.jpeg",
    description: "Minuman cokelat pekat khas Gacoan dengan rasa cokelat creamy manis pas.",
    spicyLevel: 0,
    popular: true
  },
  {
    id: "chocoan-hot",
    name: "Chocoan Hot",
    category: "beverage",
    price: 8500,
    formattedPrice: "Rp 8.500",
    image: "https://assets.olaclick.app/companies/products/images/800/887a1d83-86da-46d3-92a0-de463b6a6219.jpeg",
    description: "Cokelat panas kental dan creamy menghangatkan suasana.",
    spicyLevel: 0,
    popular: false
  },
  {
    id: "thai-tea",
    name: "Thai Tea",
    category: "beverage",
    price: 8500,
    formattedPrice: "Rp 8.500",
    image: "https://assets.olaclick.app/companies/products/images/800/ec4e985e-ec57-41f4-a4dc-3d2fb4c5e041.jpeg",
    description: "Teh Thailand otentik berwarna oranye berpadu susu kental manis legit.",
    spicyLevel: 0,
    popular: true
  },
  {
    id: "green-thai-tea",
    name: "Green Thai Tea",
    category: "beverage",
    price: 8500,
    formattedPrice: "Rp 8.500",
    image: "https://assets.olaclick.app/companies/products/images/800/bd9ccb98-4553-4546-b300-7d2439503c84.jpeg",
    description: "Teh hijau khas Thailand dengan aroma harum dan susu lembut creamy.",
    spicyLevel: 0,
    popular: false
  },

  // ================= 5. GACOAN FEST (2 items) =================
  {
    id: "gacoan-fest-a",
    name: "GACOAN FEST A",
    category: "gacoan-fest",
    price: 24500,
    formattedPrice: "Rp 24.500",
    image: "https://assets.olaclick.app/companies/products/images/800/7fbe4586-2ad1-4c7e-b356-8367b1ce0c25.jpeg",
    description: "Paket hemat komplit: Mie Gacoan Lv 1 + Lumpia Udang + Orange Ice.",
    packageDetails: ["Mie Gacoan Lv 1", "Lumpia Udang", "Orange Ice"],
    spicyLevel: 1,
    popular: true
  },
  {
    id: "gacoan-fest-c",
    name: "GACOAN FEST C",
    category: "gacoan-fest",
    price: 25500,
    formattedPrice: "Rp 25.500",
    image: "https://assets.olaclick.app/companies/products/images/800/08cd1d2a-0590-4158-b764-b1807dce17a7.jpeg",
    description: "Paket hemat favorit: Mie Gacoan Lv 1 + Udang Keju + Lemon Tea Ice.",
    packageDetails: ["Mie Gacoan Lv 1", "Udang Keju", "Lemon Tea Ice"],
    spicyLevel: 1,
    popular: true
  },

  // ================= 6. GACOAN COMBAT (6 items) =================
  {
    id: "combat-a",
    name: "COMBAT A",
    category: "gacoan-combat",
    price: 48000,
    formattedPrice: "Rp 48.000",
    image: "https://assets.olaclick.app/companies/products/images/800/f83e67d8-1508-4c8e-a725-daeeaa391d03.jpeg",
    description: "Paket berdua kenyang: Mie Gacoan Lv 1 (2 porsi) + Udang Keju + Udang Rambutan + Lemon Tea Ice (2 gelas).",
    packageDetails: ["Mie Gacoan Lv 1 (x2)", "Udang Keju & Udang Rambutan", "Lemon Tea Ice (x2)"],
    spicyLevel: 1,
    popular: true
  },
  {
    id: "combat-b",
    name: "COMBAT B",
    category: "gacoan-combat",
    price: 48000,
    formattedPrice: "Rp 48.000",
    image: "https://assets.olaclick.app/companies/products/images/800/cddd2103-d84a-4b24-9482-9c2c9fa100b2.jpeg",
    description: "Mie Gacoan Lv 0 & Lv 1 + Udang Keju & Udang Rambutan + Lemon Tea Ice (2 gelas).",
    packageDetails: ["Mie Gacoan Lv 0 & Lv 1", "Udang Keju & Udang Rambutan", "Lemon Tea Ice (x2)"],
    spicyLevel: 1,
    popular: false
  },
  {
    id: "combat-c",
    name: "COMBAT C",
    category: "gacoan-combat",
    price: 48000,
    formattedPrice: "Rp 48.000",
    image: "https://assets.olaclick.app/companies/products/images/800/0f8b859c-cd12-4ddc-8c59-aad4a53232c2.jpeg",
    description: "Mie Hompimpa Lv 1 & Gacoan Lv 1 + Udang Keju & Udang Rambutan + Lemon Tea Ice (2 gelas).",
    packageDetails: ["Mie Hompimpa Lv 1 & Gacoan Lv 1", "Udang Keju & Udang Rambutan", "Lemon Tea Ice (x2)"],
    spicyLevel: 1,
    popular: true
  },
  {
    id: "combat-d",
    name: "COMBAT D",
    category: "gacoan-combat",
    price: 48000,
    formattedPrice: "Rp 48.000",
    image: "https://assets.olaclick.app/companies/products/images/800/1c8bfc5b-ef2b-42b5-adc3-9a60ddee38ad.jpeg",
    description: "Mie Suit & Gacoan Lv 1 + Udang Keju & Udang Rambutan + Lemon Tea Ice (2 gelas).",
    packageDetails: ["Mie Suit & Gacoan Lv 1", "Udang Keju & Udang Rambutan", "Lemon Tea Ice (x2)"],
    spicyLevel: 1,
    popular: false
  },
  {
    id: "combat-e",
    name: "COMBAT E",
    category: "gacoan-combat",
    price: 48000,
    formattedPrice: "Rp 48.000",
    image: "https://assets.olaclick.app/companies/products/images/800/1fc72a28-9437-4d82-8f03-5a2387ab9715.jpeg",
    description: "Mie Gacoan Lv 0 (2 porsi) + Udang Keju & Udang Rambutan + Lemon Tea Ice (2 gelas).",
    packageDetails: ["Mie Gacoan Lv 0 (x2)", "Udang Keju & Udang Rambutan", "Lemon Tea Ice (x2)"],
    spicyLevel: 0,
    popular: false
  },
  {
    id: "combat-f",
    name: "COMBAT F",
    category: "gacoan-combat",
    price: 48000,
    formattedPrice: "Rp 48.000",
    image: "https://assets.olaclick.app/companies/products/images/800/f32e20eb-e1b5-4f05-bdad-82eeba83dc85.jpeg",
    description: "Mie Hompimpa Lv 1 (2 porsi) + Udang Keju & Udang Rambutan + Lemon Tea Ice (2 gelas).",
    packageDetails: ["Mie Hompimpa Lv 1 (x2)", "Udang Keju & Udang Rambutan", "Lemon Tea Ice (x2)"],
    spicyLevel: 1,
    popular: false
  }
];

// Backwards compatibility export for any existing imports
export const resto = restoInfo;
