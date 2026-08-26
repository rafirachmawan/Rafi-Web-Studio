import TestimoniSection from "../components/home/TestimoniSection";
import usePageMeta from "../hooks/usePageMeta";

export default function Testimoni() {
  usePageMeta({
    title: "Testimoni Klien & Review Nyata",
    description: "Baca pengalaman jujur dari institusi pendidikan, perbankan, restoran, dan UMKM yang telah mempercayakan sistem digital mereka ke GapaiDigital."
  });

  return <TestimoniSection />;
}
