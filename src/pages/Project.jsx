import RealProjectsSection from "../features/home/sections/RealProjectsSection";
import usePageMeta from "../hooks/usePageMeta";

export default function Project() {
  usePageMeta({
    title: "Portofolio Project Client Nyata",
    description: "Lihat deretan proyek digital nyata (PWA, Sistem Informasi, App Mobile) yang telah kami bangun untuk klien GapaiDigital."
  });

  return <RealProjectsSection isStandalone={true} />;
}
