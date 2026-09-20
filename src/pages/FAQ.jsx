import FAQSection from "../features/home/sections/FAQSection";
import BigCTASection from "../features/home/sections/BigCTASection";
import usePageMeta from "../hooks/usePageMeta";

export default function FAQ() {
  usePageMeta({
    title: "FAQ - Pertanyaan Umum",
    description: "Temukan jawaban lengkap seputar alur pembuatan website, garansi, skema pembayaran, dan pemeliharaan di GapaiDigital."
  });

  return (
    <>
      <FAQSection isStandalone={true} />
      <BigCTASection />
    </>
  );
}
