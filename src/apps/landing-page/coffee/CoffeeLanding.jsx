import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { Menu, X, Star, MapPin, Clock3, Phone, Sparkles, ChevronRight } from "lucide-react";

// Import Starbucks-themed images
import bgHero from "./assets/bgHero_starbucks.png";
import coffe1 from "./assets/coffee1_starbucks.png";
import espressoShotImg from "./assets/espresso_shot.png";
import caramelMacchiatoImg from "./assets/coffee1_starbucks.png";
import matchaLatteImg from "./assets/matcha_latte.png";
import ecoCupImg from "./assets/eco_cup.png";
import seasonalCupsImg from "./assets/seasonal_cups.png";
import coffeeBeansBagImg from "./assets/coffee_beans_bag.png";
import coffeeFarmersImg from "./assets/coffee_farmers.png";

export default function CoffeeLanding() {
  const [open, setOpen] = useState(false);

  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const btnRef = useRef(null);
  const imageRef = useRef(null);

  // Menu items config
  const menuItems = [
    {
      id: 0,
      name: "Double Shot Espresso",
      desc: "Rich, full-bodied espresso with a caramel sweetness.",
      badge: "Signature Reserve",
      tag: "Intense & Bold",
      image: espressoShotImg
    },
    {
      id: 1,
      name: "Caramel Macchiato",
      desc: "Steamed milk with vanilla-flavored syrup, marked with espresso and drizzled with caramel.",
      badge: "Best Seller",
      tag: "Sweet & Creamy",
      image: caramelMacchiatoImg
    },
    {
      id: 2,
      name: "Matcha Green Tea Latte",
      desc: "Smooth Uji matcha green tea powder blended with steamed milk for a comforting classic.",
      badge: "Classic Green",
      tag: "Earthy & Smooth",
      image: matchaLatteImg
    }
  ];

  /* HERO ANIMATION */
  const playHeroAnimation = () => {
    gsap.killTweensOf([
      titleRef.current,
      subtitleRef.current,
      btnRef.current,
    ]);

    const tl = gsap.timeline();

    tl.fromTo(
      [titleRef.current, subtitleRef.current, btnRef.current],
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      },
    );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) playHeroAnimation();
      },
      { threshold: 0.4 },
    );

    if (heroRef.current) observer.observe(heroRef.current);

    return () => observer.disconnect();
  }, []);

  /* PARALLAX */
  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;

      if (imageRef.current) {
        imageRef.current.style.transform = `
          translateY(${scroll * 0.2}px)
          scale(1.05)
        `;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-[#0B1512] text-zinc-100 overflow-hidden font-sans selection:bg-[#00704A]/30">
      
      {/* ================= NAVBAR ================= */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full border-b border-white/5 backdrop-blur-xl bg-[#0B1512]/80">
        <div className="max-w-7xl mx-auto px-6 h-[90px] flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Starbucks Siren Emblem SVG */}
            <svg className="w-10 h-10 text-[#00704A] fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 1.5c4.76 0 8.78 3.2 10.05 7.55A10.45 10.45 0 0 0 12 6.5a10.45 10.45 0 0 0-10.05 2.55C3.22 4.7 7.24 1.5 12 1.5zm0 10c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5zm0-2c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5zm0-5c-5.79 0-10.5 4.71-10.5 10.5 0 2.21.68 4.26 1.84 5.97A10.4 10.4 0 0 1 12 11.5a10.4 10.4 0 0 1 8.66 9.47c1.16-1.71 1.84-3.76 1.84-5.97 0-5.79-4.71-10.5-10.5-10.5z"/>
            </svg>
            <span className="text-xl font-black tracking-[0.2em] font-serif text-[#D4E9E2]">
              STARBUCKS
            </span>
          </div>

          <div className="hidden md:flex items-center gap-10 text-sm font-bold text-zinc-300">
            <a href="#" className="hover:text-emerald-400 transition-colors">Home</a>
            <a href="#beans" className="hover:text-emerald-400 transition-colors">Heritage</a>
            <a href="#menu" className="hover:text-emerald-400 transition-colors">Menu</a>
            <a href="#gallery" className="hover:text-emerald-400 transition-colors">Stories & Gallery</a>
            <a href="#find" className="hover:text-emerald-400 transition-colors">Find Store</a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden bg-[#0B1512] border-t border-white/10 px-6 py-6 flex flex-col gap-5 text-sm font-semibold">
            <a href="#" onClick={() => setOpen(false)} className="hover:text-emerald-400">Home</a>
            <a href="#beans" onClick={() => setOpen(false)} className="hover:text-emerald-400">Heritage</a>
            <a href="#menu" onClick={() => setOpen(false)} className="hover:text-emerald-400">Menu</a>
            <a href="#gallery" onClick={() => setOpen(false)} className="hover:text-emerald-400">Stories & Gallery</a>
            <a href="#find" onClick={() => setOpen(false)} className="hover:text-emerald-400">Find Store</a>
          </div>
        )}
      </div>

      {/* ================= HERO ================= */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden flex items-center justify-center bg-[#0B1512]">
        {/* BG IMAGE */}
        <img
          ref={imageRef}
          src={bgHero}
          className="absolute inset-0 w-full h-full object-cover opacity-45 scale-105 will-change-transform"
          alt="Starbucks Reserve Vibe"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1512]/90 via-[#0B1512]/70 to-[#0B1512]" />

        {/* HERO CONTENT */}
        <div className="relative z-10 text-center px-6 pt-28">
          {/* SUBTITLE */}
          <div
            ref={subtitleRef}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00704A]/30 bg-[#00704A]/10 text-[#D4E9E2] text-[10px] sm:text-xs font-extrabold uppercase tracking-[4px] mb-8"
          >
            <Sparkles size={12} className="text-emerald-400 animate-pulse" />
            Everyday Premium Coffee Ritual
          </div>

          {/* TITLE */}
          <h1
            ref={titleRef}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-black leading-[1.05] max-w-4xl mx-auto text-white"
          >
            To Inspire & Nurture <br />
            The Human <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-200 to-[#D4E9E2]">Spirit</span>
          </h1>

          <p className="mt-6 text-zinc-400 max-w-xl mx-auto text-xs sm:text-sm md:text-base font-medium">
            One person, one cup, and one neighborhood at a time. Experience Starbucks' signature crafting and ethically sourced Arabica beans.
          </p>

          {/* BUTTON */}
          <div ref={btnRef} className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <a
              href="#gallery"
              className="bg-[#00704A] hover:bg-[#00875a] text-white px-8 py-3.5 rounded-full text-sm font-extrabold hover:scale-[1.03] transition-all shadow-lg shadow-[#00704A]/25"
            >
              Explore Our Gallery
            </a>
            <a
              href="#menu"
              className="bg-white/5 backdrop-blur-md border border-white/10 text-white px-8 py-3.5 rounded-full text-sm font-extrabold hover:bg-white/10 transition-all"
            >
              Discover Menu
            </a>
          </div>
        </div>

        {/* CINEMATIC TRANSITION */}
        <div className="absolute bottom-[-1px] left-0 w-full h-[220px] pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B1512] to-[#0B1512]" />
        </div>
      </section>

      {/* ================= HERITAGE ================= */}
      <section id="beans" className="relative py-36 px-6 overflow-hidden bg-[#0B1512]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          {/* LEFT IMAGE */}
          <div className="relative">
            <div className="absolute -left-12 top-1/2 -translate-y-1/2 rotate-180 hidden lg:block">
              <p className="text-[10px] tracking-[8px] text-[#00704A] [writing-mode:vertical-rl] font-extrabold">
                100% ETHICALLY SOURCED ARABICA
              </p>
            </div>
            <div className="relative group max-w-[420px] mx-auto md:max-w-none">
              <div className="absolute inset-0 bg-[#00704A]/10 blur-[80px] scale-90 opacity-60" />
              <div className="relative overflow-hidden border border-white/10 bg-zinc-900 rounded-[2rem] shadow-[0_20px_80px_rgba(0,0,0,0.7)]">
                <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/50 z-10" />
                <img
                  src={coffe1}
                  className="w-full h-[450px] object-cover brightness-[0.8] contrast-[1.1] group-hover:scale-105 transition duration-700"
                  alt="Starbucks Caramel Macchiato layered"
                />
              </div>
              <div className="absolute -bottom-6 right-[-20px] w-[180px] h-[180px] border-2 border-[#00704A]/30 rounded-[2rem] pointer-events-none" />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-6 text-left">
            <p className="uppercase tracking-[6px] text-xs text-[#00704A] font-black">Coffee Mastery & Heritage</p>
            <h2 className="text-4xl md:text-5xl font-serif font-black leading-tight text-white">
              C.A.F.E. Practices & <br />
              <span className="text-[#D4E9E2]">Sustained Farmers</span>
            </h2>
            <p className="text-zinc-400 leading-[1.8] text-sm md:text-base">
              At Starbucks, we believe in buying coffee that is grown ethically and responsibly. Our Coffee and Farmer Equity (C.A.F.E.) Practices evaluate economic, social, and environmental indicators to ensure that farms are producing high-quality coffee while supporting the wellbeing of farming communities.
            </p>
            <p className="text-zinc-500 italic leading-relaxed text-xs border-l-2 border-[#00704A] pl-4">
              “Our mission is simple: to roast the absolute finest Arabica beans with integrity, helping preserve agricultural forests and the livelihoods of over 400,000 farmers worldwide.”
            </p>
            <div className="pt-4">
              <a href="#gallery" className="inline-flex items-center gap-3 text-[#D4E9E2] hover:text-emerald-400 uppercase tracking-[4px] text-xs font-extrabold border-b-2 border-[#00704A] pb-2 transition-all">
                Discover Our Impact
                <ChevronRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MENU DISPLAY ================= */}
      <section id="menu" className="py-32 px-6 bg-[#09100E] border-y border-white/5 relative">
        <div className="absolute right-0 top-1/4 w-[250px] h-[250px] bg-[#00704A]/5 blur-[90px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[4px] text-[#00704A] font-extrabold uppercase mb-3">
              Crafted Drinks
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-white">
              Starbucks Classics & Reserve
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm mt-3 max-w-md mx-auto">
              Telusuri koleksi minuman khas kami yang diracik sepenuh hati. Kunjungi gerai terdekat untuk menikmatinya.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {menuItems.map((item) => (
              <div key={item.id} className="group border border-white/5 bg-[#0B1512]/60 backdrop-blur-md rounded-3xl p-6 hover:border-[#00704A]/40 transition-all duration-500 flex flex-col relative">
                {/* Badge */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] uppercase tracking-wider font-extrabold px-2.5 py-1 bg-emerald-500/10 text-emerald-400 rounded-full">
                    {item.badge}
                  </span>
                  <span className="text-[10px] text-zinc-500 font-bold uppercase">
                    {item.tag}
                  </span>
                </div>

                {/* Drink Image */}
                <div className="h-[200px] bg-[#0B1512] border border-white/5 mb-6 rounded-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-[#00704A]/5 group-hover:bg-[#00704A]/10 transition-colors z-10" />
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>

                <div className="mb-2">
                  <h3 className="text-xl font-bold font-serif text-white mb-2">{item.name}</h3>
                </div>

                <p className="text-zinc-500 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-24 px-6 border-b border-white/5 bg-[#09100E]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-0 border border-white/10 rounded-[2rem] overflow-hidden bg-[#0B1512]">
          {[
            {
              title: "Ethical Sourcing",
              desc: "Every single coffee bean is sourced ethically under C.A.F.E. practices supporting sustainable communities.",
            },
            {
              title: "Coffee Masters",
              desc: "Handcrafted beverages by highly trained baristas who know exactly how to pull the perfect espresso shot.",
            },
            {
              title: "Modern Sanctuary",
              desc: "Designed cozy tables, warm aesthetics, and comfortable spots to make you feel right at home.",
            },
          ].map((item, i) => (
            <div key={i} className="p-12 border-b md:border-b-0 md:border-r border-white/10 text-left">
              <Star className="text-amber-400 mb-6" fill="currentColor" size={20} />
              <h3 className="text-2xl font-serif font-bold text-white mb-4">{item.title}</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section id="gallery" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-3xl sm:text-5xl font-serif font-black text-white">
              Stories & Seasons
            </h2>
            <p className="text-xs tracking-[4px] uppercase text-[#00704A] font-extrabold hidden md:block">
              Explore Our Journey
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="md:col-span-2 h-[500px] bg-zinc-900 border border-white/5 rounded-3xl overflow-hidden relative group">
              <img src={ecoCupImg} alt="Eco Cup" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1512] via-transparent to-black/30 z-10" />
              <div className="absolute bottom-6 left-6 right-6 text-left z-20">
                <span className="text-[10px] font-black uppercase text-emerald-400 tracking-wider">Sustainable Cup</span>
                <h4 className="text-lg font-bold text-white mt-1">Bring Your Own Cup Initiative</h4>
              </div>
            </div>

            <div className="space-y-6">
              <div className="h-[238px] bg-zinc-900 border border-white/5 rounded-3xl overflow-hidden relative group">
                <img src={seasonalCupsImg} alt="Seasonal Cups" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1512] via-transparent to-black/30 z-10" />
                <div className="absolute bottom-4 left-4 right-4 text-left z-20">
                  <h4 className="text-sm font-bold text-white">Seasonal Cups</h4>
                </div>
              </div>
              <div className="h-[238px] bg-zinc-900 border border-white/5 rounded-3xl overflow-hidden relative group">
                <img src={coffeeBeansBagImg} alt="Pike Place Roasters" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1512] via-transparent to-black/30 z-10" />
                <div className="absolute bottom-4 left-4 right-4 text-left z-20">
                  <h4 className="text-sm font-bold text-white">Pike Place Roasters</h4>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="h-[238px] bg-zinc-900 border border-white/5 rounded-3xl overflow-hidden relative group">
                <img src={coffeeFarmersImg} alt="Community Care" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1512] via-transparent to-black/30 z-10" />
                <div className="absolute bottom-4 left-4 right-4 text-left z-20">
                  <h4 className="text-sm font-bold text-white">Community Care</h4>
                </div>
              </div>
              <div className="h-[238px] bg-zinc-900 border border-white/5 rounded-3xl overflow-hidden relative group">
                <img src={coffeeFarmersImg} alt="Coffee Farmers" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1512] via-transparent to-black/30 z-10" />
                <div className="absolute bottom-4 left-4 right-4 text-left z-20">
                  <h4 className="text-sm font-bold text-white">Coffee Farmers</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer id="find" className="border-t border-white/10 py-24 px-6 bg-[#0B1512]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-14 text-left">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <svg className="w-8 h-8 text-[#00704A] fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 1.5c4.76 0 8.78 3.2 10.05 7.55A10.45 10.45 0 0 0 12 6.5a10.45 10.45 0 0 0-10.05 2.55C3.22 4.7 7.24 1.5 12 1.5zm0 10c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5zm0-2c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5zm0-5c-5.79 0-10.5 4.71-10.5 10.5 0 2.21.68 4.26 1.84 5.97A10.4 10.4 0 0 1 12 11.5a10.4 10.4 0 0 1 8.66 9.47c1.16-1.71 1.84-3.76 1.84-5.97 0-5.79-4.71-10.5-10.5-10.5z"/>
              </svg>
              <h2 className="text-2xl font-serif font-black text-white">STARBUCKS</h2>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8">
              Crafting premium Arabica coffee since 1971. Bringing community, warmth, and excellent taste closer to your daily life.
            </p>
            <div className="space-y-4 text-xs font-semibold text-zinc-500">
              <div className="flex gap-3 items-center">
                <MapPin size={16} className="text-[#00704A]" />
                <span>Jakarta, Indonesia</span>
              </div>
              <div className="flex gap-3 items-center">
                <Clock3 size={16} className="text-[#00704A]" />
                <span>08:00 — 22:00</span>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={16} className="text-[#00704A]" />
                <span>+62 857-0718-5783</span>
              </div>
            </div>
          </div>

          <div className="h-[250px] bg-zinc-950 border border-white/5 rounded-3xl overflow-hidden relative p-4 flex flex-col justify-between">
            <div className="absolute inset-0 bg-[#00704A]/5 mix-blend-overlay" />
            <div className="relative z-10">
              <span className="text-[10px] font-black uppercase text-emerald-400">Interactive Finder</span>
              <h4 className="text-sm font-bold text-white mt-1">Jakarta Reserve Stores</h4>
            </div>
            <div className="relative z-10 text-xs text-zinc-400 flex flex-col gap-2">
              <div className="p-2 rounded-lg bg-zinc-900 border border-white/5">
                <p className="font-bold text-white text-[11px]">Plaza Indonesia Reserve</p>
                <p className="text-[10px] mt-0.5 text-zinc-500">1.2 km away • Open</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-extrabold uppercase tracking-widest text-[#D4E9E2]">Newsletter</h3>
            <p className="text-xs text-zinc-500 leading-relaxed mb-4">Dapatkan update menu musiman terbaru langsung ke email Anda.</p>
            <div className="border border-white/10 flex items-center px-4 py-3 rounded-xl bg-zinc-950">
              <input placeholder="Enter Email Address" className="bg-transparent outline-none flex-1 text-xs text-white" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 text-xs font-semibold">
            <div>
              <h4 className="mb-6 font-extrabold uppercase tracking-widest text-[#D4E9E2]">Links</h4>
              <div className="space-y-4 text-zinc-500">
                <p className="hover:text-emerald-400 transition-colors cursor-pointer">Privacy Policy</p>
                <p className="hover:text-emerald-400 transition-colors cursor-pointer">Terms</p>
                <p className="hover:text-emerald-400 transition-colors cursor-pointer">Careers</p>
              </div>
            </div>
            <div>
              <h4 className="mb-6 font-extrabold uppercase tracking-widest text-[#D4E9E2]">Social</h4>
              <div className="space-y-4 text-zinc-500">
                <p className="hover:text-emerald-400 transition-colors cursor-pointer">Instagram</p>
                <p className="hover:text-emerald-400 transition-colors cursor-pointer">LinkedIn</p>
                <p className="hover:text-emerald-400 transition-colors cursor-pointer">Twitter</p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-zinc-600 text-xs mt-20">
          © {new Date().getFullYear()} STARBUCKS EXPERIENCE. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </div>
  );
}