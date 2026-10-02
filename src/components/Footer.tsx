import React from 'react';
import { UtensilsCrossed, Phone, MapPin, Globe, Instagram, Facebook, Twitter, ArrowUp } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface FooterProps {
  onOpenFullMenu: () => void;
  onOpenReservation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenFullMenu, onOpenReservation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#08090a] border-t border-[#1c1d22] text-[#ece7df] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1a1b20]">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#c5a059] to-[#8d6d2b] flex items-center justify-center text-black">
                <UtensilsCrossed className="w-4 h-4 text-[#0c0d0e]" />
              </div>
              <span className="font-display text-2xl font-bold tracking-tight text-white">
                De Mandarin Resto Cafe
              </span>
            </div>

            <p className="font-display text-base italic text-[#d4af37] tracking-wide">
              “{RESTAURANT_INFO.tagline}”
            </p>

            <p className="text-xs sm:text-sm text-[#969186] max-w-sm leading-relaxed">
              Multi-cuisine restaurant and cafe located conveniently on the Bangalore Highway near Tumakuru. A perfect stopover for travelers, friends, and families.
            </p>

            {/* Social Media Placeholders */}
            <div className="pt-2">
              <span className="text-[11px] uppercase tracking-wider text-[#736f66] block mb-2 font-medium">
                Connect With Us
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram profile"
                  className="w-8 h-8 rounded-lg bg-[#141519] border border-[#24262f] flex items-center justify-center text-[#a09b90] hover:text-[#d4af37] hover:border-[#c5a059]/40 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook page"
                  className="w-8 h-8 rounded-lg bg-[#141519] border border-[#24262f] flex items-center justify-center text-[#a09b90] hover:text-[#d4af37] hover:border-[#c5a059]/40 transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter profile"
                  className="w-8 h-8 rounded-lg bg-[#141519] border border-[#24262f] flex items-center justify-center text-[#a09b90] hover:text-[#d4af37] hover:border-[#c5a059]/40 transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#c5a059]">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#a6a297]">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#d4af37] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={onOpenFullMenu}
                  className="hover:text-[#d4af37] transition-colors text-left text-xs sm:text-sm cursor-pointer"
                >
                  Full Menu Catalog
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenReservation}
                  className="hover:text-[#d4af37] transition-colors text-left text-xs sm:text-sm cursor-pointer"
                >
                  Reserve a Table
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Location Column */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#c5a059]">
              Contact & Highway Stop
            </h4>

            <div className="space-y-3 text-xs sm:text-sm text-[#a6a297]">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <a
                    href={RESTAURANT_INFO.phoneHref}
                    className="font-semibold text-white hover:text-[#d4af37] transition-colors tabular-nums"
                  >
                    {RESTAURANT_INFO.phone}
                  </a>
                  <p className="text-[11px] text-[#736f66]">Direct desk & orders</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <p className="leading-snug">
                    T.Begur, Bangalore Highway,<br />
                    Near Sri Sidhartha Medical College,<br />
                    Tumakuru, Karnataka 562123
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#d4af37] shrink-0" />
                <a
                  href={`https://${RESTAURANT_INFO.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#d4af37] transition-colors"
                >
                  {RESTAURANT_INFO.website}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <span className="inline-block text-[11px] text-[#c5a059] bg-[#c5a059]/10 px-3 py-1 rounded-md border border-[#c5a059]/20">
                {RESTAURANT_INFO.hoursNote}
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#736f66]">
          <p>© {new Date().getFullYear()} De Mandarin Resto Cafe. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span>Tumakuru · Karnataka 562123</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#a09b90] hover:text-[#d4af37] transition-colors focus:outline-none"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
