import { Quote, Star } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

import unitaImg from "../../assets/UNITACover.jpg";
import nikoImg from "../../assets/NikoNikoCover.jpg";
import antrianBriCover from "../../assets/sistemAntrianBank/sistem antrian bank bri.jpg";
import tamiyaCover from "../../assets/softwareBalapanTamiya/Dashboard Tamiya.jpeg";

const testimonials = [
  {
    name: "Yayasan Shining Sun School",
    role: {
      id: "Institusi Pendidikan & Kursus",
      en: "Education & Course Institution"
    },
    image: unitaImg,
    text: {
      id: "Sistem PWA jadwal booking & absensi siswa yang dibangun sangat membantu efisiensi operasional cabang kami. Sinkronisasi data real-time dan fitur auto-bookingnya luar biasa bermanfaat!",
      en: "The PWA class scheduling & attendance system built really helped our branch operational efficiency. Real-time data sync and auto-booking features are exceptionally useful!"
    },
  },
  {
    name: "Bank BRI Kantor Cabang Surabaya",
    role: {
      id: "Perbankan & Keuangan",
      en: "Banking & Finance"
    },
    image: antrianBriCover,
    text: {
      id: "Software antrian digital dengan pemanggilan suara otomatis yang dikembangkan sangat stabil. Antrean teller dan customer service menjadi jauh lebih tertib dan profesional.",
      en: "The digital queue software with automatic voice calling developed is extremely stable. Teller and customer service queues have become much more orderly and professional."
    },
  },
  {
    name: "Komunitas Tamiya Indonesia",
    role: {
      id: "Komunitas & Event Organizer",
      en: "Community & Event Organizer"
    },
    image: tamiyaCover,
    text: {
      id: "Software turnamen balap dengan bracket double-elimination dan cetak ID card otomatis membuat event balap Tamiya kami naik kelas. Peserta dan penonton sangat terkesan!",
      en: "The tournament software with double-elimination bracket and auto ID card printing elevated our Tamiya race event. Participants and spectators were deeply impressed!"
    },
  },
  {
    name: "Universitas Tulungagung",
    role: {
      id: "Institusi Pendidikan Tinggi",
      en: "Higher Education Institution"
    },
    image: unitaImg,
    text: {
      id: "Sistem informasi akademik dan portal digital kampus yang dibangun sangat modern dan responsif. Membantu digitalisasi kampus kami menjadi lebih profesional dan mudah diakses.",
      en: "The academic information system and digital campus portal built are highly modern and responsive. It greatly helps digitalize our campus to be more professional and accessible."
    },
  },
  {
    name: "Mie Gacoan Tulungagung",
    role: {
      id: "F&B / Restoran Kuliner",
      en: "F&B / Culinary Restaurant"
    },
    image: nikoImg,
    text: {
      id: "Tampilan website visualnya sangat menarik dan sistem kalkulator pemesanan berjalan mulus. Visibilitas brand dan daya tarik pelanggan kami meningkat pesat sejak web rilis!",
      en: "The visual website design is highly captivating and the order calculator works flawlessly. Our brand visibility and customer pull have increased significantly since launch!"
    },
  }
];

export default function TestimoniSection() {
  const { t } = useLanguage();
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

  return (
    <div id="testimoni" className="mt-16 md:mt-24 mb-16 md:mb-24 w-full overflow-hidden">
      {/* TITLE */}
      <div className="text-center mb-10 md:mb-16 px-4 md:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 leading-tight text-zinc-900 dark:text-white">
          {t("Kisah Sukses", "Success Stories of")}{" "}
          <span className="bg-gradient-to-r from-amber-500 to-yellow-400 bg-clip-text text-transparent">
            {t("Klien Kami", "Our Clients")}
          </span>
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-sm md:text-base font-medium">
          {t("Kepercayaan mereka adalah bukti dedikasi kami dalam menghadirkan solusi digitalisasi bisnis modern yang berkualitas tinggi.", "Their trust is proof of our dedication to presenting high-quality modern business digitalization solutions.")}
        </p>
      </div>

      {/* MARQUEE SLIDER - Pure GPU CSS */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Left & Right gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#fafafc] dark:from-[#050508] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#fafafc] dark:from-[#050508] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex gap-6 md:gap-8 py-4">
          {duplicatedTestimonials.map((item, idx) => (
            <div
              key={idx}
              className="w-[260px] md:w-[320px] shrink-0 bg-white/80 dark:bg-[#0a0a0a] border border-zinc-200/80 dark:border-white/10 rounded-2xl p-5 md:p-6 flex flex-col justify-between group hover:border-amber-500/50 shadow-sm dark:shadow-none transition-all duration-300"
            >
              <div>
                <Quote className="w-6 h-6 text-amber-500 mb-3 opacity-80" />
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-zinc-800 dark:text-zinc-200 text-xs md:text-sm font-medium leading-relaxed mb-6">
                  "{t(item.text)}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-zinc-100 dark:border-white/5">
                <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-amber-500/30 bg-zinc-100 dark:bg-zinc-900 shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xs md:text-sm font-bold text-zinc-900 dark:text-white line-clamp-1">
                    {item.name}
                  </h4>
                  <p className="text-[10px] text-amber-600 dark:text-amber-500 font-medium uppercase tracking-wider">
                    {t(item.role)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
