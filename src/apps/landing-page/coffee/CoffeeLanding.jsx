import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { Menu, X, Star, MapPin, Clock3, Phone, Coffee, Gift, Sparkles, ChevronRight, Check, Leaf, Heart, Users, Award, Briefcase, ShoppingBag, Globe } from "lucide-react";

// Import Starbucks-themed images
import bgHero from "./assets/bgHero_starbucks.jpg";
import coffe1 from "./assets/coffee1_starbucks.jpg";
import espressoShotImg from "./assets/espresso_shot.jpg";
import caramelMacchiatoImg from "./assets/coffee1_starbucks.jpg";
import matchaLatteImg from "./assets/matcha_latte.jpg";
import ecoCupImg from "./assets/eco_cup.jpg";
import seasonalCupsImg from "./assets/seasonal_cups.jpg";
import coffeeBeansBagImg from "./assets/coffee_beans_bag.jpg";
import coffeeFarmersImg from "./assets/coffee_farmers.jpg";

// New food & merch images
import croissantImg from "./assets/croissant.jpg";
import paniniImg from "./assets/panini.jpg";
import cheesecakeImg from "./assets/cheesecake.jpg";
import tumblerImg from "./assets/tumbler.jpg";
import baliMugImg from "./assets/bali_mug.jpg";
import frenchPressImg from "./assets/french_press.jpg";

export default function CoffeeLanding() {
  const [open, setOpen] = useState(false);

  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const btnRef = useRef(null);
  const imageRef = useRef(null);

  const phone = "6285707185783"; // Rafi's WhatsApp number
  const waLink = `https://wa.me/${phone}`;

  const [menuTab, setMenuTab] = useState("beverages");



  // Rewards simulator state
  const [monthlySpend, setMonthlySpend] = useState(250000); // default Rp 250.000

  // Calculate stars: 1 Star for every Rp 10.000 spent
  const starsEarned = Math.floor(monthlySpend / 10000);

  const getUnlockedRewards = (stars) => {
    const rewards = [
      { minStars: 5, text: "Free Extra Syrup / Sauce Customization" },
      { minStars: 25, text: "Free Extra Espresso Shot Add-on" },
      { minStars: 50, text: "Free Brewed Coffee or Fresh Bakery Item" },
      { minStars: 100, text: "Free Grande Handcrafted Beverage" },
      { minStars: 150, text: "Free Starbucks Reserve Special Tumbler" },
    ];
    return rewards.map(r => ({
      ...r,
      unlocked: stars >= r.minStars
    }));
  };

  const rewardsList = getUnlockedRewards(starsEarned);

  const menuItems = {
    beverages: [
      {
        id: "b1",
        name: "Double Shot Espresso",
        desc: "Rich, full-bodied espresso with a caramel sweetness.",
        basePrice: 35000,
        badge: "Signature",
        tag: "Intense",
        image: espressoShotImg
      },
      {
        id: "b2",
        name: "Caramel Macchiato",
        desc: "Steamed milk with vanilla-flavored syrup, marked with espresso and drizzled with caramel.",
        basePrice: 58000,
        badge: "Best Seller",
        tag: "Sweet",
        image: caramelMacchiatoImg
      },
      {
        id: "b3",
        name: "Matcha Green Tea Latte",
        desc: "Smooth Uji matcha green tea powder blended with steamed milk.",
        basePrice: 55000,
        badge: "Classic",
        tag: "Earthy",
        image: matchaLatteImg
      }
    ],
    food: [
      {
        id: "f1",
        name: "Butter Croissant",
        desc: "Classic buttery, flaky pastry. Perfect with your morning coffee.",
        basePrice: 25000,
        badge: "Core Menu",
        tag: "Bakery",
        image: croissantImg
      },
      {
        id: "f2",
        name: "Truffle Mushroom Panini",
        desc: "Savory mushrooms with truffle oil, melted cheese on artisan bread.",
        basePrice: 45000,
        badge: "Reserve",
        tag: "Savory",
        image: paniniImg
      },
      {
        id: "f3",
        name: "New York Cheesecake",
        desc: "Rich and creamy cheesecake with a graham cracker crust.",
        basePrice: 40000,
        badge: "Sweet",
        tag: "Dessert",
        image: cheesecakeImg
      }
    ],
    merchandise: [
      {
        id: "m1",
        name: "Siren Logo Tumbler",
        desc: "16oz stainless steel tumbler to keep your drinks hot or cold.",
        basePrice: 250000,
        badge: "Classic",
        tag: "Tumbler",
        image: tumblerImg
      },
      {
        id: "m2",
        name: "Dewata Bali Mug",
        desc: "Exclusive 12oz ceramic mug featuring Balinese motifs.",
        basePrice: 180000,
        badge: "Special Edition",
        tag: "Mug",
        image: baliMugImg
      },
      {
        id: "m3",
        name: "French Press Brewer",
        desc: "Classic coffee press for the perfect home brew.",
        basePrice: 350000,
        badge: "Brewing Gear",
        tag: "Equipment",
        image: frenchPressImg
      }
    ]
  };



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
      <div className="
        fixed
        top-0
        left-1/2
        -translate-x-1/2
        z-50
        w-full
        border-b
        border-white/5
        backdrop-blur-xl
        bg-[#0B1512]/80
      ">
        <div className="
          max-w-7xl
          mx-auto
          px-6
          h-[90px]
          flex
          items-center
          justify-between
        ">
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
            <a href="#menu" className="hover:text-emerald-400 transition-colors">Menu</a>
            <a href="#coffee" className="hover:text-emerald-400 transition-colors">Coffee</a>
            <a href="#rewards" className="hover:text-emerald-400 transition-colors">Rewards</a>
            <a href="#responsibility" className="hover:text-emerald-400 transition-colors">Responsibility</a>
            <a href="#about" className="hover:text-emerald-400 transition-colors">About Us</a>
          </div>

          <a
            href="#menu"
            className="hidden md:block border-2 border-[#00704A] bg-[#00704A]/10 hover:bg-[#00704A] hover:text-white text-[#D4E9E2] px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition duration-300"
          >
            Explore Menu
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden bg-[#0B1512] border-t border-white/10 px-6 py-6 flex flex-col gap-5 text-sm font-semibold">
            <a href="#menu" onClick={() => setOpen(false)} className="hover:text-emerald-400">Menu</a>
            <a href="#coffee" onClick={() => setOpen(false)} className="hover:text-emerald-400">Coffee</a>
            <a href="#rewards" onClick={() => setOpen(false)} className="hover:text-emerald-400">Rewards</a>
            <a href="#responsibility" onClick={() => setOpen(false)} className="hover:text-emerald-400">Responsibility</a>
            <a href="#about" onClick={() => setOpen(false)} className="hover:text-emerald-400">About Us</a>

            <a
              href="#menu"
              onClick={() => setOpen(false)}
              className="border-2 border-[#00704A] bg-[#00704A] text-white py-3 text-center rounded-xl font-bold uppercase"
            >
              Explore Menu
            </a>
          </div>
        )}
      </div>

      {/* ================= HERO ================= */}
      <section
        ref={heroRef}
        className="
          relative
          min-h-screen
          overflow-hidden
          flex
          items-center
          justify-center
          bg-[#0B1512]
        "
      >
        {/* BG IMAGE */}
        <img
          ref={imageRef}
          src={bgHero}
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            opacity-45
            scale-105
            will-change-transform
          "
          alt="Starbucks Reserve Vibe"
        />

        {/* DARK OVERLAY */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-[#0B1512]/90
            via-[#0B1512]/70
            to-[#0B1512]
          "
        />

        {/* HERO CONTENT */}
        <div className="relative z-10 text-center px-6 pt-28">
          {/* SUBTITLE */}
          <div
            ref={subtitleRef}
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-1.5
              rounded-full
              border
              border-[#00704A]/30
              bg-[#00704A]/10
              text-[#D4E9E2]
              text-[10px]
              sm:text-xs
              font-extrabold
              uppercase
              tracking-[4px]
              mb-8
            "
          >
            <Sparkles size={12} className="text-emerald-400 animate-pulse" />
            Everyday Premium Coffee Ritual
          </div>

          {/* TITLE */}
          <h1
            ref={titleRef}
            className="
              text-4xl
              sm:text-5xl
              md:text-7xl
              lg:text-8xl
              font-serif
              font-black
              leading-[1.05]
              max-w-4xl
              mx-auto
              text-white
            "
          >
            To Inspire & Nurture <br />
            The Human <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-200 to-[#D4E9E2]">Spirit</span>
          </h1>

          <p className="mt-6 text-zinc-400 max-w-xl mx-auto text-xs sm:text-sm md:text-base font-medium">
            One person, one cup, and one neighborhood at a time. Experience Starbucks' signature crafting and ethically sourced Arabica beans.
          </p>

          {/* BUTTON */}
          <div
            ref={btnRef}
            className="
              flex
              justify-center
              mt-10
            "
          >
            <a
              href="#menu"
              className="
                bg-[#00704A]
                hover:bg-[#00875a]
                text-white
                px-10
                py-4
                rounded-full
                text-sm
                font-extrabold
                hover:scale-[1.03]
                transition-all
                shadow-lg
                shadow-[#00704A]/25
              "
            >
              Explore Our Menu
            </a>
          </div>
        </div>

        {/* CINEMATIC TRANSITION */}
        <div
          className="
            absolute
            bottom-[-1px]
            left-0
            w-full
            h-[220px]
            pointer-events-none
          "
        >
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-b
              from-transparent
              via-[#0B1512]
              to-[#0B1512]
            "
          />
        </div>
      </section>

      {/* ================= COFFEE EDUCATION ================= */}
      <section
        id="coffee"
        className="
          relative
          py-36
          px-6
          overflow-hidden
          bg-[#0B1512]
        "
      >
        <div
          className="
            max-w-7xl
            mx-auto
            relative
            z-10
          "
        >
          <div className="text-center mb-20">
            <p className="text-xs tracking-[4px] text-[#00704A] font-extrabold uppercase mb-3">
              Coffee Info & Education
            </p>
            <h2 className="text-3xl sm:text-5xl font-serif font-black text-white">
              The Art of Roasting & Brewing
            </h2>
            <p className="text-zinc-400 text-sm mt-4 max-w-2xl mx-auto">
              From selected coffee beans to your cup. Learn the unique characteristics of each Roast Spectrum and how to brew the best coffee at home.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            {/* LEFT IMAGE */}
            <div className="relative">
              <div className="absolute -left-12 top-1/2 -translate-y-1/2 rotate-180 hidden lg:block">
                <p className="text-[10px] tracking-[8px] text-[#00704A] [writing-mode:vertical-rl] font-extrabold">
                  STARBUCKS ROAST SPECTRUM
                </p>
              </div>

              <div className="relative group max-w-[420px] mx-auto lg:max-w-none">
                <div className="absolute inset-0 bg-[#00704A]/10 blur-[80px] scale-90 opacity-60" />
                <div className="relative overflow-hidden border border-white/10 bg-zinc-900 rounded-[2rem] shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/50 z-10" />
                  <img
                    src={coffeeBeansBagImg}
                    className="w-full h-[450px] object-cover brightness-[0.8] contrast-[1.1] group-hover:scale-105 transition duration-700"
                    alt="Starbucks Coffee Beans"
                  />
                </div>
                <div className="absolute -bottom-6 right-[-20px] w-[180px] h-[180px] border-2 border-[#00704A]/30 rounded-[2rem] pointer-events-none" />
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="space-y-8 text-left">
              <div>
                <h3 className="text-2xl font-serif font-bold text-white mb-3">Selected Coffee Varieties</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  We offer a wide variety of high-quality coffees to satisfy your taste, ranging from <strong>Whole Bean</strong> (whole coffee beans) roasted to perfection, premium instant coffee <strong>VIA Ready Brew</strong>, to our exclusive and rare <strong>Starbucks Reserve®</strong> collections.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-bold text-white mb-3">Characteristics & Roast Spectrum</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  Each coffee requires a different roasting profile to reach its peak aroma, acidity, body, and flavor.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-200 mt-1 shrink-0"></span>
                    <div>
                      <strong className="text-amber-200">Blonde Roast:</strong> <span className="text-zinc-400">Light, smooth, and slightly sweet.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-600 mt-1 shrink-0"></span>
                    <div>
                      <strong className="text-amber-600">Medium Roast:</strong> <span className="text-zinc-400">Balanced, smooth, and rich in flavor.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#3d2314] border border-white/20 mt-1 shrink-0"></span>
                    <div>
                      <strong className="text-[#D4E9E2]">Dark Roast:</strong> <span className="text-zinc-400">Strong, full-bodied, with a touch of rich flavor. Our highlight: Sumatra coffee with low acidity and an earthy character.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* BREWING GUIDES */}
          <div className="mt-20">
            <h3 className="text-2xl text-center font-serif font-bold text-white mb-10">Home Brewing Guide</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Coffee Press", desc: "Classic method for producing thick, full-flavored coffee. Perfect for Sumatra coffee." },
                { title: "Pour-Over", desc: "Produces a clean cup of coffee and highlights the complex aromas of selected coffee beans." },
                { title: "Iced Pour-Over", desc: "The best way to enjoy refreshing cold coffee without sacrificing flavor quality." }
              ].map((guide, idx) => (
                <div key={idx} className="bg-zinc-900/50 border border-white/5 p-8 rounded-3xl hover:bg-[#00704A]/10 hover:border-[#00704A]/40 transition-all text-center">
                  <div className="w-12 h-12 mx-auto rounded-full bg-[#00704A]/20 text-emerald-400 flex items-center justify-center mb-4">
                    <Coffee size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{guide.title}</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">{guide.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ================= MENU ================= */}
      <section
        id="menu"
        className="py-32 px-6 bg-[#09100E] border-y border-white/5 relative"
      >
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
              Discover a wide selection of signature beverages, delicious food, and exclusive merchandise available at all Starbucks Indonesia stores.
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-12">
            {[
              { id: "beverages", label: "Beverages", icon: <Coffee size={16} /> },
              { id: "food", label: "Food", icon: <Heart size={16} /> },
              { id: "merchandise", label: "Merchandise", icon: <ShoppingBag size={16} /> }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setMenuTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold transition-all border ${
                  menuTab === tab.id
                    ? "bg-[#00704A] text-white border-transparent"
                    : "bg-transparent text-zinc-400 border-white/20 hover:border-white/50 hover:text-white"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {menuItems[menuTab].map((item) => {
              return (
                <div
                  key={item.id}
                  className="
                    group
                    border
                    border-white/5
                    bg-[#0B1512]/60
                    backdrop-blur-md
                    rounded-3xl
                    p-6
                    hover:border-[#00704A]/40
                    hover:shadow-[0_10px_30px_rgba(0,112,74,0.1)]
                    transition-all
                    duration-500
                    flex
                    flex-col
                    justify-between
                    relative
                    overflow-hidden
                  "
                >
                  <div>
                    {/* Badge */}
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[10px] uppercase tracking-wider font-extrabold px-2.5 py-1 bg-emerald-500/10 text-emerald-400 rounded-full">
                        {item.badge}
                      </span>
                      <span className="text-[10px] text-zinc-500 font-bold uppercase">
                        {item.tag}
                      </span>
                    </div>

                    {/* Drink/Item Image */}
                    <div
                      className="
                        h-[200px]
                        bg-[#0B1512]
                        border
                        border-white/5
                        mb-6
                        rounded-2xl
                        relative
                        overflow-hidden
                      "
                    >
                      <div className="absolute inset-0 bg-[#00704A]/5 group-hover:bg-[#00704A]/10 transition-colors z-10" />
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="flex justify-between items-start mb-2 gap-2">
                      <h3 className="text-xl font-bold font-serif text-white">
                        {item.name}
                      </h3>
                      <span className="text-[#D4E9E2] font-black text-sm shrink-0">
                        Rp {item.basePrice.toLocaleString("id-ID")}
                      </span>
                    </div>

                    <p className="text-zinc-500 text-xs leading-relaxed mb-4">
                      {item.desc}
                    </p>
                  </div>

                  <div className="border-t border-white/5 pt-4 mt-2 flex items-center justify-between text-[10px] text-zinc-500 font-semibold uppercase tracking-wider">
                    <span>
                      {menuTab === "beverages" ? "Available Hot / Iced" : menuTab === "food" ? "Served Warm" : "Limited Collection"}
                    </span>
                    <span className="text-[#00704A] font-bold">
                      Original
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= STARBUCKS REWARDS ================= */}
      <section
        id="rewards"
        className="py-32 px-6 bg-[#09100E] relative overflow-hidden"
      >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00704A]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] uppercase font-black rounded-full mb-3 tracking-widest animate-pulse">
              <Star size={12} fill="currentColor" /> Starbucks Rewards
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-white">
              One Star for Every Sip
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm mt-3 max-w-md mx-auto">
              Join our loyalty program. Manage your card, collect Stars, and redeem them for free drinks or food.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Card Management / Features */}
            <div className="space-y-6">
              {[
                { title: "Card Management", desc: "Register your Starbucks Card, check balance, and manage your account easily in one place.", icon: <Award size={20} /> },
                { title: "Collect Stars", desc: "Get 1 Star for every Rp 10.000 spent using your Starbucks Card.", icon: <Star size={20} /> },
                { title: "Balance Protection", desc: "Report immediately if your card is lost. Your balance is safe and can be transferred to a new card.", icon: <Award size={20} /> },
              ].map((feature, idx) => (
                <div key={idx} className="bg-[#0B1512] border border-white/5 p-6 rounded-2xl flex items-start gap-4 hover:border-[#00704A]/30 transition-all">
                  <div className="w-10 h-10 rounded-full bg-[#00704A]/20 flex items-center justify-center text-emerald-400 shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">{feature.title}</h4>
                    <p className="text-zinc-400 text-xs leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
              
              <div className="pt-4">
                <a
                  href="#find"
                  className="inline-flex items-center justify-center gap-2 bg-[#00704A] hover:bg-[#00875a] text-white px-8 py-3 rounded-full text-sm font-extrabold transition-all"
                >
                  Find Nearest Store
                </a>
              </div>
            </div>

            {/* Special Edition Card Visual */}
            <div className="relative">
              <div className="absolute inset-0 bg-amber-400/5 blur-[80px] rounded-full" />
              <div className="bg-zinc-900 border border-white/10 rounded-[2.5rem] p-10 relative shadow-2xl overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                
                <p className="text-[10px] tracking-widest uppercase text-amber-400 font-black mb-6">Special Edition Starbucks Card</p>
                <h3 className="text-2xl font-serif font-bold text-white mb-8">Indonesia Heritage Collection</h3>
                
                {/* 3D-like Card effect */}
                <div className="relative w-full aspect-[1.58/1] rounded-2xl shadow-2xl bg-gradient-to-tr from-[#1a2e25] via-[#0B1512] to-[#00704A] p-6 flex flex-col justify-between transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-1 overflow-hidden">
                  <div 
                    className="absolute inset-0 opacity-20 mix-blend-overlay rounded-2xl"
                    style={{ backgroundImage: `url(${coffeeBeansBagImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                  ></div>
                  
                  <div className="flex justify-between items-start relative z-10">
                    <span className="text-xs font-bold tracking-widest text-white drop-shadow-md">STARBUCKS</span>
                    <Star size={20} className="text-amber-400 fill-current drop-shadow-md" />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="text-[10px] tracking-widest text-zinc-300 uppercase mb-1">Limited Edition</div>
                    <div className="text-sm font-mono text-white tracking-[0.2em] opacity-80">**** **** **** 8892</div>
                  </div>
                </div>

                <p className="text-zinc-400 text-xs leading-relaxed mt-8">
                  Own a special edition Starbucks Card with thematic designs celebrating the rich culture and nature of Indonesia. Available in limited quantities at selected stores.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= RESPONSIBILITY ================= */}
      <section id="responsibility" className="py-24 px-6 border-y border-white/5 bg-[#09100E]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[4px] text-[#00704A] font-extrabold uppercase mb-3">
              Social & Environmental Responsibility
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-white">
              Commitment to the Planet & People
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-0 border border-white/10 rounded-[2rem] overflow-hidden bg-[#0B1512]">
            {[
              {
                title: "Ethical Sourcing",
                desc: "We ensure the entire supply of coffee, tea, and cocoa is ethically sourced and processed through C.A.F.E. Practices, directly supporting coffee farmers' livelihoods.",
                icon: <Leaf className="text-amber-400 mb-6" size={32} />
              },
              {
                title: "Environment",
                desc: "Focus on waste reduction, recycling initiatives, energy and water efficiency, and supporting global climate change campaigns.",
                icon: <Globe className="text-emerald-400 mb-6" size={32} />
              },
              {
                title: "Community",
                desc: "Encouraging partners (employees) and customers to actively participate in social community actions and support local communities across Indonesia.",
                icon: <Users className="text-amber-400 mb-6" size={32} />
              },
            ].map((item, i) => (
              <div key={i} className="p-12 border-b md:border-b-0 md:border-r border-white/10 text-left hover:bg-white/5 transition-colors">
                {item.icon}
                <h3 className="text-2xl font-serif font-bold text-white mb-4">{item.title}</h3>
                <p className="text-zinc-400 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ABOUT US & CAREERS ================= */}
      <section id="about" className="py-32 px-6 bg-[#0B1512] relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* About & Certifications */}
            <div>
              <p className="text-xs tracking-[4px] text-[#00704A] font-extrabold uppercase mb-3">About Our Company</p>
              <h2 className="text-3xl sm:text-5xl font-serif font-black text-white mb-6">Our Mission & Values</h2>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Since establishing our presence in Indonesia, Starbucks has been committed to being more than just a coffee shop. We are a community gathering place. Our mission: To inspire and nurture the human spirit — one person, one cup, and one neighborhood at a time.
              </p>
              
              <div className="bg-zinc-900 border border-white/10 p-6 rounded-2xl mb-8 relative overflow-hidden group">
                <div className="absolute inset-0 bg-[#00704A]/5 group-hover:bg-[#00704A]/10 transition-colors" />
                <h4 className="text-lg font-bold text-white mb-2 relative z-10">Starbucks Dewata Coffee Sanctuary</h4>
                <p className="text-xs text-zinc-400 leading-relaxed relative z-10">
                  Southeast Asia's largest concept store located in Bali, presenting an unparalleled experience of the coffee journey from seed to cup.
                </p>
              </div>

              <div className="flex gap-4 items-center border-t border-white/10 pt-8">
                <div className="flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-4 py-2 rounded-full border border-emerald-500/20">
                  <Check size={16} />
                  <span className="text-xs font-bold uppercase tracking-wider">MUI Halal Certified</span>
                </div>
                <div className="flex items-center gap-2 bg-zinc-800 text-zinc-300 px-4 py-2 rounded-full border border-white/10">
                  <Award size={16} />
                  <span className="text-xs font-bold uppercase tracking-wider">ISO Certified</span>
                </div>
              </div>
            </div>

            {/* Careers */}
            <div className="bg-[#09100E] border border-white/10 p-10 rounded-[2.5rem] shadow-2xl relative">
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-amber-400/5 blur-[80px] rounded-full pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="text-amber-400" size={24} />
                <h3 className="text-2xl font-serif font-bold text-white">Career Opportunities</h3>
              </div>

              <div className="space-y-4">
                {[
                  { role: "Retail Barista", desc: "Be the face of Starbucks. Create unforgettable experiences for every customer through your handcrafted coffee." },
                  { role: "Retail Store Management", desc: "Lead a team, manage store operations, and grow the coffee community in your neighborhood." },
                  { role: "Support Center", desc: "Join our support center and make an impact across departments, from Marketing and Supply Chain to IT." }
                ].map((job, idx) => (
                  <div key={idx} className="p-5 border border-white/5 rounded-2xl bg-[#0B1512] hover:border-[#00704A]/40 transition-colors">
                    <h4 className="text-sm font-bold text-white mb-2">{job.role}</h4>
                    <p className="text-xs text-zinc-500 leading-relaxed">{job.desc}</p>
                  </div>
                ))}
              </div>

              <a
                href={`https://wa.me/${phone}?text=${encodeURIComponent("Halo Starbucks Indonesia, saya tertarik untuk mengetahui informasi lebih lanjut mengenai lowongan pekerjaan dan karier.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 block w-full text-center bg-white hover:bg-zinc-200 text-zinc-900 py-4 rounded-xl font-extrabold text-sm transition-all"
              >
                Contact Recruitment via WA
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer
        id="find"
        className="border-t border-white/10 pt-24 pb-12 px-6 bg-[#09100E]"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 text-left mb-16">
          {/* Brand Col */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-6">
              <svg className="w-8 h-8 text-[#00704A] fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 1.5c4.76 0 8.78 3.2 10.05 7.55A10.45 10.45 0 0 0 12 6.5a10.45 10.45 0 0 0-10.05 2.55C3.22 4.7 7.24 1.5 12 1.5zm0 10c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5zm0-2c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5zm0-5c-5.79 0-10.5 4.71-10.5 10.5 0 2.21.68 4.26 1.84 5.97A10.4 10.4 0 0 1 12 11.5a10.4 10.4 0 0 1 8.66 9.47c1.16-1.71 1.84-3.76 1.84-5.97 0-5.79-4.71-10.5-10.5-10.5z"/>
              </svg>
              <h2 className="text-2xl font-serif font-black text-white">
                STARBUCKS
              </h2>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8 max-w-xs">
              To inspire and nurture the human spirit — one person, one cup, and one neighborhood at a time.
            </p>
            <div className="space-y-3 text-xs font-semibold text-zinc-500">
              <div className="flex gap-3 items-center">
                <MapPin size={16} className="text-[#00704A]" />
                <span>Jakarta, Indonesia</span>
              </div>
              <div className="flex gap-3 items-center">
                <Clock3 size={16} className="text-[#00704A]" />
                <span>08:00 — 22:00</span>
              </div>
            </div>
          </div>

          {/* Links Col */}
          <div className="md:col-span-2">
            <h4 className="mb-6 font-extrabold uppercase tracking-widest text-[#D4E9E2] text-xs">
              Navigation
            </h4>
            <div className="space-y-4 text-xs font-semibold text-zinc-500">
              <p className="hover:text-emerald-400 transition-colors cursor-pointer">Menu & Products</p>
              <p className="hover:text-emerald-400 transition-colors cursor-pointer">Coffee Education</p>
              <p className="hover:text-emerald-400 transition-colors cursor-pointer">Starbucks Rewards</p>
              <p className="hover:text-emerald-400 transition-colors cursor-pointer">Responsibility</p>
              <p className="hover:text-emerald-400 transition-colors cursor-pointer">About Us</p>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="mb-6 font-extrabold uppercase tracking-widest text-[#D4E9E2] text-xs">
              Help
            </h4>
            <div className="space-y-4 text-xs font-semibold text-zinc-500">
              <p className="hover:text-emerald-400 transition-colors cursor-pointer flex items-center gap-2">
                <Phone size={14} className="text-[#00704A]" /> Customer Care
              </p>
              <p className="hover:text-emerald-400 transition-colors cursor-pointer">FAQ</p>
              <p className="hover:text-emerald-400 transition-colors cursor-pointer">Terms & Conditions</p>
              <p className="hover:text-emerald-400 transition-colors cursor-pointer">Privacy Policy</p>
            </div>
          </div>

          {/* Newsletter Col */}
          <div className="md:col-span-4">
            <h3 className="mb-6 text-xs font-extrabold uppercase tracking-widest text-[#D4E9E2]">Newsletter</h3>
            <p className="text-xs text-zinc-500 leading-relaxed mb-4">
              Get the latest seasonal menu updates & double-star promotions sent directly to your email.
            </p>
            <div className="flex items-center bg-zinc-900 border border-white/10 rounded-full overflow-hidden p-1">
              <input
                type="email"
                placeholder="Your Email Address"
                className="bg-transparent outline-none flex-1 text-xs text-white px-4 py-2"
              />
              <button className="bg-[#00704A] hover:bg-[#00875a] text-white px-6 py-2 rounded-full text-xs font-bold transition-colors">
                Submit
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-[10px] font-bold tracking-widest uppercase">
            © {new Date().getFullYear()} STARBUCKS TRIBUTE EXPERIENCE. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-6 text-xs font-bold text-zinc-500 uppercase tracking-widest">
            <span className="hover:text-white cursor-pointer transition-colors">Instagram</span>
            <span className="hover:text-white cursor-pointer transition-colors">Twitter</span>
            <span className="hover:text-white cursor-pointer transition-colors">Facebook</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
