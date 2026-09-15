// src/components/landing/coffee/CoffeeFooter.jsx
// Starbucks-style Footer Component

import { Button } from '../../atoms/Button/Button';

export function CoffeeFooter({ waLink }) {
  return (
    <footer className="bg-[#0B1512] border-t border-white/10 py-16 px-6">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="col-span-1">
            <h3 className="text-xl font-black tracking-[0.25em] font-serif text-[#D4E9E2] mb-4">
              STARBUCKS
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed mb-6">
              Inspiring and nurturing the human spirit one person, one cup, and one neighborhood at a time.
            </p>
            <div className="flex gap-4">
              {/* Social icons placeholder */}
              <a href="#" className="text-zinc-400 hover:text-emerald-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-zinc-400 hover:text-emerald-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.995 0-2.137-.49-4.177-1.345-6.008z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">About</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors">Our Story</a></li>
              <li><a href="#responsibility" className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors">Responsibility</a></li>
              <li><a href="#careers" className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors">Careers</a></li>
              <li><a href="#investors" className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors">Investors</a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">Connect</h4>
            <ul className="space-y-3">
              <li><a href="#help" className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors">Help</a></li>
              <li><a href="#privacy" className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors">Terms of Use</a></li>
              <li><a href="#cookies" className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors">Cookie Settings</a></li>
            </ul>
          </div>

          {/* CTA Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">Join Rewards</h4>
            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
              Join Starbucks Rewards and earn points every time you buy a drink or food item.
            </p>
            <Button variant="primary" fullWidth className="bg-[#00704A] hover:bg-[#00875a] px-6 py-3 rounded-full">
              Sign Up Now
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-500">
            © 2026 Starbucks Corporation. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#privacy" className="text-xs text-zinc-500 hover:text-emerald-400 transition-colors">
              Privacy
            </a>
            <a href="#terms" className="text-xs text-zinc-500 hover:text-emerald-400 transition-colors">
              Terms
            </a>
            <a href="#sitemap" className="text-xs text-zinc-500 hover:text-emerald-400 transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
