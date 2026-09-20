import { RestoNavbar } from "./components/RestoNavbar";
import { RestoFooter } from "./components/RestoFooter";
import { RestoHero } from "./sections/RestoHero";
import { RestoFeatures } from "./sections/RestoFeatures";
import { RestoMenu } from "./sections/RestoMenu";
import { RestoCTA } from "./sections/RestoCTA";
import { restoInfo } from "./data/resto";

export default function RestoLanding() {
  const phone = restoInfo.phone;
  const waLink = restoInfo.waOrderUrl;

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-violet-500/20 selection:text-violet-950">
      <RestoNavbar waLink={waLink} />
      
      <main>
        <RestoHero />
        <RestoFeatures />
        <RestoMenu phone={phone} />
        <RestoCTA phone={phone} />
      </main>

      <RestoFooter />
    </div>
  );
}
