// src/components/landing/RentalFooter.jsx
// Clean footer for Yamaha Motor / Rental websites

export function RentalFooter() {
  // Simple SVG icons as components
  const MailIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.979 9.426a2 2 0 0 1-2.656.088l-.147-.113a2 2 0 0 0-2.308-.088L2 17"></path>
    </svg>
  );

  const SocialIcon = ({ name }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M8 12h8"></path>
    </svg>
  );

  return (
    <footer className="bg-white border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-blue-500 font-bold text-lg mb-4">YAMAHA</h3>
            <p className="text-zinc-600 text-sm mb-4">
              PT Yamaha Motor Indonesia Manufacturing
              <br />
              "Revs Your Heart"
            </p>
            <div className="flex gap-3">
              <a
                href="mailto:info@yamaha.co.id"
                className="w-8 h-8 rounded bg-zinc-100 flex items-center justify-center text-zinc-600 hover:bg-blue-500 hover:text-white transition-colors"
              >
                <MailIcon />
              </a>
              <a
                href="https://instagram.com/yamahaindonesia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded bg-zinc-100 flex items-center justify-center text-zinc-600 hover:bg-blue-500 hover:text-white transition-colors"
              >
                <SocialIcon name="social" />
              </a>
              <a
                href="https://twitter.com/yamahaindonesia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded bg-zinc-100 flex items-center justify-center text-zinc-600 hover:bg-blue-500 hover:text-white transition-colors"
              >
                <SocialIcon name="social" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-zinc-900 font-semibold text-sm mb-4">
              Products
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#motorcycles"
                  className="text-zinc-600 hover:text-blue-500 transition-colors"
                >
                  Motorcycles
                </a>
              </li>
              <li>
                <a
                  href="#rts"
                  className="text-zinc-600 hover:text-blue-500 transition-colors"
                >
                  RTS (Racing)
                </a>
              </li>
              <li>
                <a
                  href="#boat"
                  className="text-zinc-600 hover:text-blue-500 transition-colors"
                >
                  Boat
                </a>
              </li>
              <li>
                <a
                  href="#ev"
                  className="text-zinc-600 hover:text-blue-500 transition-colors"
                >
                  Electric Vehicle
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-zinc-900 font-semibold text-sm mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#parts"
                  className="text-zinc-600 hover:text-blue-500 transition-colors"
                >
                  Genuine Parts
                </a>
              </li>
              <li>
                <a
                  href="#service"
                  className="text-zinc-600 hover:text-blue-500 transition-colors"
                >
                  Service Center
                </a>
              </li>
              <li>
                <a
                  href="#accessories"
                  className="text-zinc-600 hover:text-blue-500 transition-colors"
                >
                  Accessories
                </a>
              </li>
              <li>
                <a
                  href="#membership"
                  className="text-zinc-600 hover:text-blue-500 transition-colors"
                >
                  Yamaha Members
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-zinc-900 font-semibold text-sm mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-zinc-600">
              <li>Jalan Raya Husein Mutahar</li>
              <li>Kabupaten Bogor, Jawa Barat</li>
              <li>Tel: +62 21 1234 5678</li>
              <li>Email: info@yamaha.co.id</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-200 pt-6 text-center">
          <p className="text-zinc-500 text-xs">
            © {new Date().getFullYear()} PT Yamaha Motor Indonesia
            Manufacturing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
