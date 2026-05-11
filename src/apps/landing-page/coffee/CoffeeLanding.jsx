import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { Menu, X, Star, MapPin, Clock3, Phone } from "lucide-react";

// Import image
import bgHero from "./assets/bgHero.png";
import coffe1 from "./assets/coffee1.png";

export default function CoffeeLanding() {
  const [open, setOpen] = useState(false);

  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const btnRef = useRef(null);
  const imageRef = useRef(null);

  const phone = "628123456789";
  const waLink = `https://wa.me/${phone}`;

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

    observer.observe(heroRef.current);

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
    <div className="bg-black text-white overflow-hidden">
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
  bg-black/20
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
          <h1 className="text-2xl tracking-widest font-serif text-[#d6a16b]">
            NOIR BREW
          </h1>

          <div className="hidden md:flex items-center gap-10 text-sm text-gray-300">
            <a href="#">Home</a>
            <a href="#beans">The Beans</a>
            <a href="#menu">Menu</a>
            <a href="#gallery">Gallery</a>
            <a href="#find">Find Us</a>
          </div>

          <a
            href={waLink}
            className="hidden md:block border border-[#d6a16b] px-6 py-3 text-sm hover:bg-[#d6a16b] hover:text-black transition"
          >
            Order Now
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden bg-black border-t border-white/10 px-6 py-6 flex flex-col gap-5 text-sm">
            <a href="#">Home</a>
            <a href="#beans">The Beans</a>
            <a href="#menu">Menu</a>
            <a href="#gallery">Gallery</a>

            <a
              href={waLink}
              className="border border-[#d6a16b] py-3 text-center"
            >
              Order Now
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
    bg-black
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
      opacity-70
      scale-105
      will-change-transform
    "
  />

  {/* DARK OVERLAY */}
  <div
    className="
      absolute
      inset-0
      bg-gradient-to-b
  from-black/75
via-black/60
to-black
    "
  />



  {/* HERO CONTENT */}
  <div className="relative z-10 text-center px-6 pt-20">
    {/* SUBTITLE */}
    <p
      ref={subtitleRef}
      className="
        text-[#d6a16b]
        uppercase
        tracking-[6px]
        text-xs
        mb-8
      "
    >
      Luxury Coffee Experience
    </p>

    {/* TITLE */}
    <h1
      ref={titleRef}
      className="
        text-5xl
        sm:text-6xl
        md:text-8xl
        font-serif
        leading-[0.95]
        max-w-5xl
        mx-auto
        text-[#f5e7da]
      "
    >
      Artisanship in Every
      <span className="block">
        Drop
      </span>
    </h1>

    {/* BUTTON */}
    <div
      ref={btnRef}
      className="
        flex
        flex-col
        sm:flex-row
        justify-center
        gap-4
        mt-12
      "
    >
      <a
        href={waLink}
        className="
          bg-[#d6a16b]
          text-black
          px-10
          py-4
          text-sm
          font-medium
          hover:scale-105
          transition
        "
      >
        Order Now
      </a>

      <a
        href="#menu"
        className="
          bg-white/10
          backdrop-blur-md
          border
          border-white/10
          px-10
          py-4
          text-sm
          hover:bg-white/20
          transition
        "
      >
        Explore Menu
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
    h-[420px]
    pointer-events-none
  "
>
  {/* BLACK FADE */}
  <div
    className="
      absolute
      inset-0
      bg-gradient-to-b
      from-transparent
  via-black
to-black
    "
  />



</div>
</section>

     {/* ================= SOUL ================= */}
<section
  id="beans"
className="
  relative
  py-52
  px-6
  overflow-hidden
bg-black

  "
>
  {/* TOP GRADIENT */}
  <div
    className="
      absolute
      top-0
      left-0
      w-full
      h-[200px]
      bg-gradient-to-b
      from-white/[0.02]
      to-transparent
      pointer-events-none
    "
  />



  <div
    className="
      max-w-7xl
      mx-auto
      grid
      md:grid-cols-2
      gap-24
      items-center
      relative
      z-10
    "
  >
    {/* LEFT IMAGE */}
    <div className="relative">
      {/* VERTICAL TEXT */}
      <div
        className="
          absolute
          -left-10
          top-1/2
          -translate-y-1/2
          rotate-180
          hidden
          lg:block
        "
      >
        <p
          className="
            text-[10px]
            tracking-[8px]
            text-[#8f6a47]
            [writing-mode:vertical-rl]
          "
        >
          EST. MMXIV — ROASTING LAB
        </p>
      </div>

     {/* IMAGE */}
<div className="relative group">
  {/* IMAGE GLOW */}
  <div
    className="
      absolute
      inset-0
      bg-[#d6a16b]/10
      blur-[80px]
      scale-90
      opacity-60
    "
  />

  {/* IMAGE WRAPPER */}
  <div
    className="
      relative
      overflow-hidden
      border
      border-white/10
      bg-black
      shadow-[0_20px_80px_rgba(0,0,0,0.7)]
    "
  >
    {/* LIGHT OVERLAY */}
    <div
      className="
        absolute
        inset-0
        bg-gradient-to-br
     from-black/10
via-transparent
to-black/50
        z-10
      "
    />

    {/* IMAGE */}
    <img
      src={coffe1}
      className="
        w-full
        h-[600px]
        object-cover
     brightness-[0.75]
contrast-[1.15]
        group-hover:scale-105
        transition
        duration-700
      "
    />
  </div>

  {/* FRAME */}
  <div
    className="
      absolute
      -bottom-10
      right-[-40px]
      w-[220px]
      h-[220px]
      border
      border-[#d6a16b]/20
    "
  />

  {/* SMALL LIGHT */}
  <div
    className="
      absolute
      top-[-30px]
      left-[10%]
      w-[140px]
      h-[140px]
      bg-[#d6a16b]/20
      blur-[90px]
      rounded-full
    "
  />
</div>
    </div>

    {/* RIGHT CONTENT */}
    <div>
      <p
        className="
          uppercase
          tracking-[6px]
          text-xs
          text-[#d6a16b]
          mb-6
        "
      >
        Artisan Coffee Philosophy
      </p>

      <h2
        className="
          text-5xl
          md:text-6xl
          font-serif
          leading-tight
          mb-10
          text-[#f5e7da]
        "
      >
        The Soul of
        <span className="block">
          Our Beans
        </span>
      </h2>

      <p
        className="
          text-gray-400
          leading-[2]
          mb-8
          text-lg
        "
      >
        At NOIR BREW, we view roasting as a precise dialogue
        between heat and bean. Every batch is traced to its
        origin, ensuring that the farmers who nurture these
        crops are rewarded for their exceptional dedication.
      </p>

      <p
        className="
          text-gray-500
          italic
          leading-[2]
          mb-12
        "
      >
        “We don’t just brew coffee; we curate a sensory
        journey that begins in the high-altitude hills
        of Ethiopia and ends in your porcelain cup.”
      </p>

      <a
        href="#"
        className="
          inline-flex
          items-center
          gap-3
          text-[#d6a16b]
          uppercase
          tracking-[4px]
          text-xs
          border-b
          border-[#d6a16b]
          pb-2
          hover:gap-5
          transition-all
        "
      >
        Read Our Manifesto
      </a>
    </div>
  </div>

  {/* BOTTOM FADE */}
  <div
    className="
      absolute
      bottom-0
      left-0
      w-full
      h-[250px]
      bg-gradient-to-t
      from-black
      to-transparent
      pointer-events-none
    "
  />
</section>

      {/* ================= MENU ================= */}
      <section
        id="menu"
        className="py-32 px-6 bg-[#050505]"
      >
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-[4px] text-[#d6a16b] uppercase mb-4">
            Our Selection
          </p>

          <h2 className="text-5xl font-serif mb-20">
            Curated Brews
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                name: "Obsidian Espresso",
                price: "$6.00",
              },
              {
                name: "Creamy Latte",
                price: "$8.50",
              },
              {
                name: "Gold Brew",
                price: "$12.00",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="
                  group
                  border
                  border-white/10
                  bg-[#0b0b0b]
                  p-5
                  hover:border-[#d6a16b]/40
                  transition
                "
              >
                {/* IMAGE */}
                <div
                  className="
                    h-[350px]
                    bg-[#111]
                    border
                    border-white/10
                    mb-6
                  "
                />

                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-serif">
                      {item.name}
                    </h3>

                    <p className="text-gray-500 text-sm mt-2">
                      Premium Signature Coffee
                    </p>
                  </div>

                  <span className="text-[#d6a16b]">
                    {item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-24 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-0 border border-white/10">
          {[
            {
              title: "Ethical Sourcing",
              desc: "Every bean is sourced ethically from sustainable farms.",
            },
            {
              title: "Expert Baristas",
              desc: "Crafted by professionals with deep coffee expertise.",
            },
            {
              title: "Luxury Ambience",
              desc: "Experience sophisticated spaces and premium comfort.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="
                p-12
                border-b
                md:border-b-0
                md:border-r
                border-white/10
              "
            >
              <Star className="text-[#d6a16b] mb-6" />

              <h3 className="text-2xl font-serif mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section
        id="gallery"
        className="py-32 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-5xl font-serif">
              Visual Notes
            </h2>

            <p className="text-xs tracking-[4px] uppercase text-gray-500">
              Explore Our Journey
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="md:col-span-2 h-[500px] bg-[#111] border border-white/10" />

            <div className="space-y-6">
              <div className="h-[240px] bg-[#111] border border-white/10" />
              <div className="h-[240px] bg-[#111] border border-white/10" />
            </div>

            <div className="space-y-6">
              <div className="h-[240px] bg-[#111] border border-white/10" />
              <div className="h-[240px] bg-[#111] border border-white/10" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIAL ================= */}
      <section className="py-32 px-6 bg-[#090909]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-serif text-center mb-20">
            Voices of Coffee Lovers
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Noir Brew is more than coffee.",
              "The atmosphere is luxurious.",
              "Every cup feels premium.",
            ].map((item, i) => (
              <div
                key={i}
                className="
                  border
                  border-white/10
                  p-10
                  bg-black
                "
              >
                <div className="flex gap-1 text-[#d6a16b] mb-6">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>

                <p className="text-gray-300 leading-relaxed mb-8">
                  "{item}"
                </p>

                <p className="text-[#d6a16b]">
                  — Customer
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MEMBERSHIP ================= */}
      <section className="py-24 px-6">
        <div
          className="
            max-w-7xl
            mx-auto
            bg-gradient-to-r
            from-[#3a2615]
            to-[#7a5634]
            p-16
            grid
            md:grid-cols-2
            gap-10
            items-center
          "
        >
          <div>
            <p className="uppercase tracking-[4px] text-xs mb-4">
              Exclusive Society
            </p>

            <h2 className="text-5xl font-serif mb-6">
              Membership Gold
            </h2>

            <p className="text-gray-200 leading-loose mb-10">
              Join our premium membership for access to
              limited brews, exclusive events, and more.
            </p>

            <button
              className="
                bg-white
                text-black
                px-8
                py-4
              "
            >
              Apply Membership
            </button>
          </div>

          {/* placeholder */}
          <div
            className="
              h-[300px]
              border
              border-white/20
            "
          />
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer
        id="find"
        className="border-t border-white/10 py-24 px-6"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-14">
          <div>
            <h2 className="text-4xl font-serif text-[#d6a16b] mb-6">
              NOIR BREW
            </h2>

            <p className="text-gray-400 leading-loose mb-8">
              Crafting more than coffee —
              creating unforgettable moments.
            </p>

            <div className="space-y-4 text-sm text-gray-400">
              <div className="flex gap-3 items-center">
                <MapPin size={16} />
                <span>Jakarta, Indonesia</span>
              </div>

              <div className="flex gap-3 items-center">
                <Clock3 size={16} />
                <span>08:00 — 22:00</span>
              </div>

              <div className="flex gap-3 items-center">
                <Phone size={16} />
                <span>+62 812-3456-7890</span>
              </div>
            </div>
          </div>

          {/* placeholder */}
          <div className="h-[250px] bg-[#111] border border-white/10" />

          <div>
            <h3 className="mb-6 text-lg">Newsletter</h3>

            <div className="border border-white/10 flex items-center px-4 py-4">
              <input
                placeholder="Enter Email Address"
                className="
                  bg-transparent
                  outline-none
                  flex-1
                  text-sm
                "
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 text-sm">
            <div>
              <h4 className="mb-6 text-white">
                Links
              </h4>

              <div className="space-y-4 text-gray-400">
                <p>Privacy Policy</p>
                <p>Terms</p>
                <p>Refund</p>
                <p>Careers</p>
              </div>
            </div>

            <div>
              <h4 className="mb-6 text-white">
                Social
              </h4>

              <div className="space-y-4 text-gray-400">
                <p>Instagram</p>
                <p>LinkedIn</p>
                <p>Twitter</p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-600 text-sm mt-20">
          © 2025 NOIR BREW. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </div>
  );
}