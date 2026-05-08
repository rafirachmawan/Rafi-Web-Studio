import heroVideo from "../../assets/Video.mp4";

export default function HeroSection() {
  return (
    <div
      id="home"
      className="border border-white/10 rounded-[30px] md:rounded-[40px] p-6 md:p-10 bg-white/[0.02] backdrop-blur-lg mb-16 md:mb-24"
    >
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* TEXT */}
        <div>
          <h1 className="text-3xl md:text-6xl font-heading font-extrabold tracking-tight leading-tight">
            WEBSITE PROFESIONAL UNTUK{" "}
            <span className="text-amber-400">BISNIS KAMU</span>
          </h1>

          <p className="text-gray-400 mt-4 text-sm md:text-base">
            Kami membantu bisnis tampil modern, cepat, dan siap closing dengan
            website berkualitas tinggi.
          </p>

          <a
            href="https://wa.me/6285707185783?text=Halo%20saya%20ingin%20konsultasi%20website"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block bg-amber-500 hover:bg-amber-400 text-black px-5 py-2.5 md:px-6 md:py-3 rounded-full font-semibold transition"
          >
            Konsultasi Gratis
          </a>
        </div>

        {/* VIDEO */}
        <div className="h-[200px] md:h-[300px] rounded-2xl overflow-hidden relative">
          <video
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-transparent"></div>
        </div>
      </div>
    </div>
  );
}
