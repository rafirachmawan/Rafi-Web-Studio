// src/components/landing/coffee/CoffeeFooter.jsx
// Starbucks-style Footer Component with Complete Navigation

import { Button } from "../../atoms/Button/Button";
import { ShieldCheck } from "lucide-react";

const coffee = {
  about: {
    mission:
      "To inspire and nurture the human spirit – one person, one cup and one neighborhood at a time.",
  },
  socialMedia: {
    instagram: "https://www.instagram.com/starbucksindonesia/",
    facebook: "https://www.facebook.com/StarbucksIndonesia",
    twitter: "https://twitter.com/SbuxIndonesia",
  },
  certifications: [
    {
      name: "ISO CERTIFIED",
      link: "/about-us/our-heritage/starbucks-in-indonesia",
    },
    {
      name: "HALAL CERTIFIED",
      link: "/about-us/our-heritage/starbucks-in-indonesia",
    },
  ],
  footerLinks: {
    aboutUs: [
      { name: "Our Heritage", link: "/about-us/our-heritage" },
      { name: "Pressroom", link: "/about-us/pressroom" },
      { name: "Our Company", link: "/about-us/company-information" },
      { name: "Career Center", link: "/about-us/career-center" },
    ],
    customerService: [
      { name: "FAQ", link: "/customer-service/frequently-asked-questions/" },
    ],
    legal: [
      { name: "Privacy Statement", link: "/card/learn-more/privacy-policy" },
      {
        name: "Terms of Use",
        link: "/learn-more/starbucks-card-terms-and-condition",
      },
      { name: "Site Map", link: "/site-map" },
    ],
  },
  rewards: {
    description:
      "Join Starbucks Rewards and unlock exclusive benefits. Earn stars for every purchase and redeem for free items.",
    ctaText: "Join Now",
  },
  copyright: "© 2026 Starbucks Coffee Company, All Rights Reserved.",
};

export function CoffeeFooter({ waLink }) {
  return (
    <footer className="bg-[#0B1512] border-t border-white/10 py-16 px-6">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="col-span-1">
            <h3 className="text-xl font-black tracking-[0.3em] font-serif text-[#D4E9E2] mb-4">
              STARBUCKS
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed mb-5">
              {coffee.about.mission}
            </p>

            {/* Social Media - Circular Buttons */}
            <div className="flex gap-3 mb-5">
              {coffee.socialMedia?.instagram && (
                <a
                  href={coffee.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#00704A] transition-all duration-300 transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-4.5 h-4.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              )}

              {coffee.socialMedia?.facebook && (
                <a
                  href={coffee.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#00704A] transition-all duration-300 transform hover:scale-110"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-4.5 h-4.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.995 0-2.137-.49-4.177-1.345-6.008z" />
                  </svg>
                </a>
              )}
            </div>

            {/* Certifications */}
            {coffee.certifications && coffee.certifications.length > 0 && (
              <div className="flex gap-3 flex-wrap">
                {coffee.certifications.map((cert, idx) => (
                  <a
                    key={idx}
                    href={cert.link}
                    className="inline-flex items-center gap-1.5 text-[10px] text-zinc-500 hover:text-[#00704A] transition-colors font-semibold uppercase tracking-wider"
                  >
                    <ShieldCheck size={9} className="shrink-0" />
                    {cert.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Links Column 1 - About Us */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-5">
              About Us
            </h4>
            <ul className="space-y-3">
              {coffee.footerLinks?.aboutUs?.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.link}
                    className="text-sm text-zinc-400 hover:text-[#00704A] transition-colors inline-block"
                    target={link.link.startsWith("http") ? "_blank" : "_self"}
                    rel={
                      link.link.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 - Customer Service */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-5">
              Customer Service
            </h4>
            <ul className="space-y-3">
              {coffee.footerLinks?.customerService?.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.link}
                    className="text-sm text-zinc-400 hover:text-[#00704A] transition-colors inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              {/* Additional quick links */}
              <li>
                <a
                  href="#store-locator"
                  className="text-sm text-zinc-400 hover:text-[#00704A] transition-colors inline-block"
                >
                  Store Locator
                </a>
              </li>
              <li>
                <a
                  href="#order"
                  className="text-sm text-zinc-400 hover:text-[#00704A] transition-colors inline-block"
                >
                  Order Online
                </a>
              </li>
            </ul>
          </div>

          {/* CTA Column - Rewards */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Join Rewards
            </h4>
            <p className="text-sm text-zinc-400 leading-relaxed mb-5">
              {coffee.rewards.description}
            </p>
            <Button
              variant="primary"
              fullWidth
              className="bg-[#00704A] hover:bg-[#00875a] px-6 py-3.5 rounded-full font-semibold text-sm"
            >
              {coffee.rewards.ctaText}
            </Button>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-white/5 mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-500">{coffee.copyright}</p>

          <div className="flex flex-wrap justify-center gap-6">
            {coffee.footerLinks?.legal?.map((link, idx) => (
              <a
                key={idx}
                href={link.link}
                className="text-xs text-zinc-500 hover:text-[#00704A] transition-colors"
                target={link.link.startsWith("http") ? "_blank" : "_self"}
                rel={
                  link.link.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
