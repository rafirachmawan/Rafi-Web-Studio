import WhyUsSection from "../components/home/WhyUsSection";
import ProcessSection from "../components/home/ProcessSection";
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
