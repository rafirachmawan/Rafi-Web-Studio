import { motion } from "framer-motion";
const hotelHeroImg = "/assets/hotel_hero.jpg";
const roomSuperiorImg = "/assets/room_superior.jpg";
const roomDeluxeImg = "/assets/room_deluxe.jpg";
const hotelBallroomImg = "/assets/hotel_ballroom.jpg";
const roomSuiteImg = "/assets/room_suite.jpg";
const hotelRestoImg = "/assets/hotel_resto.jpg";

export function HotelGallerySection() {
  const images = [
    { src: hotelHeroImg, span: "col-span-1", label: "Lobby" },
    { src: roomSuperiorImg, span: "col-span-1", label: "Superior Room" },
    { src: roomDeluxeImg, span: "col-span-2", label: "Deluxe Balcony" },
    { src: hotelBallroomImg, span: "col-span-2", label: "Victoria Ballroom" },
    { src: roomSuiteImg, span: "col-span-1", label: "Executive Suite" },
    { src: hotelRestoImg, span: "col-span-1", label: "Dining Room" },
  ];

  return (
    <section id="gallery" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-xs text-purple-400 uppercase tracking-[0.3em] font-extrabold mb-4">Aesthetics</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-black text-white">Visual Journey</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <motion.img 
              key={i}
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              viewport={{ once: true }} 
              transition={{ delay: i * 0.1 }}
              src={img.src} 
              loading="lazy" 
              className={`w-full ${img.span} h-48 md:h-64 object-cover rounded-xl brightness-[0.8] hover:brightness-100 transition-all duration-300`} 
              alt={img.label} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
