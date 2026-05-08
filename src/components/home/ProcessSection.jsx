export default function ProcessSection() {
  return (
    <div id="proses" className="mt-32 grid md:grid-cols-2 gap-10 items-start">
      {/* LEFT */}
      <div className="md:sticky md:top-32 h-fit">
        <p className="text-amber-400 text-sm tracking-widest mb-4">
          CARA KAMI BEKERJA
        </p>

        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Proses <br />
          Pembuatan yang <span className="text-amber-400">Transparan.</span>
        </h2>

        <p className="text-gray-400 mt-6 max-w-md">
          Kami memecah proyek kompleks menjadi langkah-langkah sederhana agar
          Anda selalu tahu apa yang sedang kami kerjakan.
        </p>
      </div>

      {/* RIGHT */}
      <div className="space-y-20">
        {/* STEP 1 */}
        <div className="flex gap-6 items-start">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 font-bold">
              01
            </div>

            <div className="w-[2px] h-24 bg-white/10 mt-2"></div>
          </div>

          <div>
            <h3 className="text-2xl font-heading font-semibold tracking-tight">
              Konsultasi Gratis
            </h3>

            <p className="text-gray-400 mt-2">
              Kami dengarkan kebutuhan dan tujuan bisnis kamu.
            </p>
          </div>
        </div>

        {/* STEP 2 */}
        <div className="flex gap-6 items-start">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 font-bold">
              02
            </div>

            <div className="w-[2px] h-24 bg-white/10 mt-2"></div>
          </div>

          <div>
            <h3 className="text-2xl font-heading font-semibold tracking-tight">
              Konsep & Desain
            </h3>

            <p className="text-gray-400 mt-2">
              Kami kirim preview sebelum website online.
            </p>
          </div>
        </div>

        {/* STEP 3 */}
        <div className="flex gap-6 items-start">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 font-bold">
              03
            </div>

            <div className="w-[2px] h-24 bg-white/10 mt-2"></div>
          </div>

          <div>
            <h3 className="text-2xl font-heading font-semibold tracking-tight">
              Revisi & Finalisasi
            </h3>

            <p className="text-gray-400 mt-2">
              Pastikan semuanya sesuai dengan keinginan kamu.
            </p>
          </div>
        </div>

        {/* STEP 4 */}
        <div className="flex gap-6 items-start">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 font-bold">
              04
            </div>

            <div className="w-[2px] h-24 bg-white/10 mt-2"></div>
          </div>

          <div>
            <h3 className="text-2xl font-heading font-semibold tracking-tight">
              Launching
            </h3>

            <p className="text-gray-400 mt-2">
              Website aktif dan siap digunakan.
            </p>
          </div>
        </div>

        {/* STEP 5 */}
        <div className="flex gap-6 items-start">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 font-bold">
              05
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-heading font-semibold tracking-tight">
              Support
            </h3>

            <p className="text-gray-400 mt-2">
              Kami tetap membantu setelah website selesai.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
