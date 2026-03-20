import { useState, useEffect, useRef } from "react";
import { coffee } from "../data/coffee";
import gsap from "gsap";

export default function CoffeeLanding() {
  const data = coffee;
  const [open, setOpen] = useState(false);

  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const btnRef = useRef(null);
  const imageRef = useRef(null);

  const phone = "628123456789";
  const message = `Halo, saya tertarik dengan ${data.name}`;
  const waLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  /* 🔥 HERO REPEAT (NO LAG) */
  const playHeroAnimation = () => {
    gsap.killTweensOf([titleRef.current, subtitleRef.current, btnRef.current]);

    const tl = gsap.timeline();

    tl.fromTo(
      imageRef.current,
      { scale: 1.2 },
      { scale: 1.1, duration: 1 },
    ).fromTo(
      [titleRef.current, subtitleRef.current, btnRef.current],
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      },
      "-=0.6",
    );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) playHeroAnimation();
      },
      { threshold: 0.6 },
    );

    observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  /* 🔥 PARALLAX SUPER SMOOTH */
  useEffect(() => {
    let raf;

    const animate = () => {
      const scroll = window.scrollY;

      if (imageRef.current) {
        imageRef.current.style.transform = `translate3d(0,${
          scroll * 0.15
        }px,0) scale(1.1)`;
      }

      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="bg-[#0b0b0b] text-white min-h-screen font-sans">
      {/* NAVBAR */}
      {/* FLOATING NAVBAR */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-black/40 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-full flex items-center gap-6 shadow-lg">
          <h1 className="text-sm font-serif text-amber-300 tracking-widest">
            COFFEE
          </h1>

          <div className="hidden md:flex gap-6 text-gray-300 text-sm">
            <a href="#" className="hover:text-white transition">
              Home
            </a>
            <a href="#menu" className="hover:text-white transition">
              Menu
            </a>
            <a href="#about" className="hover:text-white transition">
              About
            </a>
          </div>

          <a
            href={waLink}
            className="bg-amber-500 px-4 py-1.5 rounded-full text-xs hover:bg-amber-600 transition"
          >
            Order
          </a>
        </div>
      </div>

      {/* HERO */}
      <section
        ref={heroRef}
        className="relative h-[100vh] flex items-center justify-center text-center overflow-hidden"
      >
        <img
          ref={imageRef}
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
          className="absolute inset-0 w-full h-full object-cover will-change-transform"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-2xl px-6">
          <h1 ref={titleRef} className="text-5xl md:text-7xl font-serif mb-6">
            {data.hero.title}
          </h1>

          <p ref={subtitleRef} className="text-gray-400 mb-8 text-lg">
            {data.hero.subtitle}
          </p>

          <div ref={btnRef} className="flex gap-4 justify-center">
            <a href={waLink} className="bg-amber-500 px-7 py-3 rounded-full">
              Order Coffee
            </a>

            <a
              href="#menu"
              className="border border-white/20 px-7 py-3 rounded-full"
            >
              Explore
            </a>
          </div>
        </div>
      </section>

      {/* ⭐ SIGNATURE */}
      <SignatureSection />

      <CoffeeSection waLink={waLink} />
      <CoffeeAmbience />

      {/* 💬 TESTIMONIAL */}
      <TestimonialSection />

      {/* 📍 LOCATION */}
      <LocationSection />
    </div>
  );
}

/* ⭐ SIGNATURE (TAMBAHAN) */
function SignatureSection() {
  const items = ["Caramel Latte", "Vanilla Latte", "Mocha"];

  return (
    <section className="px-6 py-24 text-center">
      <h2 className="text-4xl font-serif mb-10">Signature Menu</h2>
      <div className="grid md:grid-cols-3 gap-10">
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-[#121212] p-8 rounded-3xl border border-amber-500/20"
          >
            <h3 className="text-xl mb-2">{item}</h3>
            <p className="text-amber-300 mb-2">Best Seller ⭐</p>
            <p className="text-gray-400 text-sm">
              Premium taste & creamy texture
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* 🔥 SLIDER NO GAP (PUNYA KAMU - TIDAK DIUBAH) */
function CoffeeSection({ waLink }) {
  const trackRef = useRef(null);

  useEffect(() => {
    const el = trackRef.current;
    const width = el.scrollWidth / 2;

    gsap.to(el, {
      x: -width,
      duration: 20,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % width),
      },
    });
  }, []);

  const menu = [
    {
      name: "Cappuccino",
      price: "18K",
      img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    },
    {
      name: "Latte",
      price: "20K",
      img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
    },
    {
      name: "Espresso",
      price: "15K",
      img: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    },
  ];

  const loop = [...menu, ...menu];

  return (
    <section id="menu" className="px-6 py-24 bg-[#0d0d0d] overflow-hidden">
      <h2 className="text-4xl text-center mb-16 font-serif">Our Coffee</h2>

      <div className="overflow-hidden">
        <div ref={trackRef} className="flex gap-10 w-max will-change-transform">
          {loop.map((item, i) => (
            <div key={i} className="w-[300px] bg-[#121212] rounded-3xl">
              <img src={item.img} className="h-72 w-full object-cover" />

              <div className="p-6">
                <h3>{item.name}</h3>
                <p className="text-amber-300">{item.price}</p>

                <a
                  href={waLink}
                  className="block text-center bg-amber-500 py-2 rounded-full mt-4"
                >
                  Order
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 🔥 AMBIENCE (PUNYA KAMU - TIDAK DIUBAH) */
function CoffeeAmbience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            el.children[0].children,
            { y: 60, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              stagger: 0.2,
            },
          );
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="px-6 py-24 bg-black">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <img
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24"
          className="rounded-2xl h-[400px] object-cover"
        />

        <div>
          <h2 className="text-4xl font-serif mb-4">Cozy & Aesthetic Space</h2>

          <p className="text-gray-400 mb-6">
            Tempat terbaik untuk menikmati kopi dan bersantai.
          </p>

          <a className="bg-amber-500 px-6 py-3 rounded-full">Visit Us</a>
        </div>
      </div>
    </section>
  );
}

/* 💬 TESTIMONIAL */
function TestimonialSection() {
  const data = [
    {
      name: "Andi",
      text: "Kopi terenak 🔥",
    },
    {
      name: "Rina",
      text: "Tempat cozy banget",
    },
    {
      name: "Budi",
      text: "Wajib balik lagi!",
    },
  ];

  return (
    <section className="px-6 py-28 bg-gradient-to-b from-black to-[#0b0b0b]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-serif mb-4">What They Say</h2>
        <p className="text-gray-400 mb-16 text-sm">
          Real experience from our customers
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {data.map((item, i) => (
            <div
              key={i}
              className="relative bg-[#111] p-8 rounded-3xl border border-white/5 hover:border-amber-400/30 transition duration-500 hover:-translate-y-2"
            >
              {/* glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-amber-500/5 opacity-0 hover:opacity-100 transition"></div>

              <div className="relative z-10">
                <p className="text-lg italic mb-6 text-gray-200">
                  “{item.text}”
                </p>

                <div className="flex items-center justify-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-amber-400"></div>
                  <span className="text-sm text-gray-400">{item.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 📍 LOCATION */
function LocationSection() {
  return (
    <section className="px-6 py-28 bg-black">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            Visit Our Coffee Space
          </h2>

          <p className="text-gray-400 mb-6 leading-relaxed">
            Nikmati suasana hangat dan kopi premium langsung di tempat kami.
            Tempat sempurna untuk bekerja, bersantai, dan bertemu teman.
          </p>

          <div className="space-y-2 text-gray-300 text-sm mb-6">
            <p>📍 Jl. Coffee No. 123, Indonesia</p>
            <p>🕒 Open Everyday: 08.00 - 22.00</p>
            <p>📞 +62 812-3456-789</p>
          </div>

          <a
            href="https://maps.google.com"
            target="_blank"
            className="inline-block bg-amber-500 px-6 py-3 rounded-full hover:bg-amber-600 transition"
          >
            Open Maps
          </a>
        </div>

        {/* RIGHT MAP */}
        <div className="rounded-3xl overflow-hidden border border-white/10 shadow-lg">
          <iframe
            className="w-full h-[400px]"
            src="https://maps.google.com/maps?q=jakarta&t=&z=13&ie=UTF8&iwloc=&output=embed"
          />
        </div>
      </div>
    </section>
  );
}
