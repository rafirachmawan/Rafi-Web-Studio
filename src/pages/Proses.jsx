import WhyUsSection from "../features/home/sections/WhyUsSection";
import ProcessSection from "../features/home/sections/ProcessSection";
import usePageMeta from "../hooks/usePageMeta";

export default function Proses() {
  usePageMeta({
    title: "Alur Kerja & Proses Transparan",
    description: "Pelajari bagaimana GapaiDigital merancang dan mengeksekusi proyek digital Anda secara terstruktur dari konsultasi hingga peluncuran."
  });

  return (
    <>
      <WhyUsSection />
      <ProcessSection />
    </>
  );
}
