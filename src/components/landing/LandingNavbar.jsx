// src/components/landing/LandingNavbarCoffee.jsx
// Coffee-themed navbar - reusable component

export function LandingNavbarCoffee({ waLink }) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10 text-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-serif text-amber-400">Coffee</h1>

        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#">Home</a>
          <a href="#menu">Menu</a>
        </div>

        <a href={waLink} className="bg-amber-500 px-5 py-2 rounded-xl">
          Order
        </a>
      </div>
    </nav>
  );
}

// Rental Navbar
export function LandingNavbarRental({ waLink }) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#111111]/90 backdrop-blur-md border-b border-white/10 text-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold tracking-wide">
          <span className="text-amber-400">RENTAL</span>
          <span className="text-white ml-1">JAYA</span>
        </h1>

        {/* Menu */}
        <div className="hidden md:flex gap-8 text-gray-300 text-sm">
          <a href="#" className="hover:text-white">Home</a>
          <a href="#mobil" className="hover:text-white">Mobil</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>

        {/* CTA */}
        <a
          href={waLink}
          className="bg-amber-500 text-black px-5 py-2 rounded-lg font-semibold hover:bg-amber-600 transition"
        >
          Booking
        </a>
      </div>
    </nav>
  );
}

// Hotel Navbar
export function LandingNavbarHotel({ waLink }) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/10 text-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-semibold tracking-wide">
          <span className="text-amber-400">HOTEL</span>
          <span className="ml-1">LUXURY</span>
        </h1>

        {/* Menu */}
        <div className="hidden md:flex gap-8 text-gray-300 text-sm">
          <a href="#">Home</a>
          <a href="#room">Rooms</a>
          <a href="#">Contact</a>
        </div>

        {/* CTA */}
        <a
          href={waLink}
          className="bg-white text-black px-5 py-2 rounded-lg font-medium hover:bg-gray-200 transition"
        >
          Booking
        </a>
      </div>
    </nav>
  );
}
