import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, UtensilsCrossed } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  onOpenFullMenu: () => void;
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenFullMenu, onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0c0d0e]/90 backdrop-blur-md border-b border-[#24262b] shadow-xl py-3.5'
            : 'bg-gradient-to-b from-[#0c0d0e]/90 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Single text element wordmark */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="group flex items-center gap-2.5 text-left focus:outline-none"
            >
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#c5a059] to-[#8d6d2b] flex items-center justify-center text-black shadow-md group-hover:scale-105 transition-transform duration-200">
                <UtensilsCrossed className="w-5 h-5 text-[#0c0d0e]" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl font-bold tracking-tight text-white group-hover:text-[#d4af37] transition-colors">
                  De Mandarin
                </span>
                <span className="text-[10px] tracking-widest uppercase text-[#c5a059] font-medium hidden sm:inline-block">
                  Resto Cafe · Tumakuru
                </span>
              </div>
            </a>

            {/* Zone 2: 4-6 clean text navigation links */}
            <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#c8c4bd]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="hover:text-[#d4af37] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#d4af37] hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: 1-2 primary actions */}
            <div className="flex items-center gap-3">
              <a
                href={RESTAURANT_INFO.phoneHref}
                className="hidden lg:flex items-center gap-2 text-xs font-medium text-[#c5a059] hover:text-[#e4c278] px-3 py-2 rounded-lg bg-[#c5a059]/10 border border-[#c5a059]/20 transition-all"
                title="Call Restaurant Directly"
              >
                <Phone className="w-3.5 h-3.5" />
                <span className="tabular-nums">{RESTAURANT_INFO.phone}</span>
              </a>

              <button
                type="button"
                onClick={onOpenFullMenu}
                className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-[#e4c278] via-[#d4af37] to-[#b38827] rounded-lg hover:brightness-110 active:scale-95 transition-all shadow-md shadow-[#d4af37]/15 whitespace-nowrap cursor-pointer"
              >
                View Menu
              </button>

              <button
                type="button"
                onClick={onOpenReservation}
                className="hidden xl:inline-flex items-center justify-center px-3.5 py-2 text-xs font-medium text-[#ece7df] bg-[#1d1f23] hover:bg-[#282b31] border border-[#32363d] rounded-lg transition-colors whitespace-nowrap cursor-pointer"
              >
                Book Table
              </button>

              {/* Mobile menu trigger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-[#ece7df] bg-[#1a1c20] hover:bg-[#25282e] border border-[#2d3038] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059]"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex flex-col bg-[#0c0d0e]/95 backdrop-blur-xl border-b border-[#24262b] animate-in fade-in duration-200">
          <div className="flex items-center justify-between p-5 border-b border-[#202227]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#c5a059] to-[#8d6d2b] flex items-center justify-center text-black">
                <UtensilsCrossed className="w-4 h-4 text-[#0c0d0e]" />
              </div>
              <span className="font-display text-xl font-bold text-white">
                De Mandarin
              </span>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg text-[#9A9488] hover:text-white bg-[#1a1c20]"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-3 text-lg font-medium text-[#ece7df] rounded-xl bg-[#141518] hover:bg-[#1f2126] hover:text-[#d4af37] transition-colors border border-[#22242a]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-4 space-y-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenFullMenu();
                }}
                className="w-full py-3.5 px-4 text-center font-semibold text-black bg-gradient-to-r from-[#e4c278] via-[#d4af37] to-[#b38827] rounded-xl text-sm uppercase tracking-wider shadow-lg shadow-[#d4af37]/20"
              >
                View Full Menu
              </button>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full py-3 px-4 text-center font-medium text-white bg-[#1e2025] hover:bg-[#282b32] border border-[#32363e] rounded-xl text-sm"
              >
                Reserve a Table
              </button>

              <a
                href={RESTAURANT_INFO.phoneHref}
                className="flex items-center justify-center gap-2.5 w-full py-3 px-4 rounded-xl bg-[#c5a059]/10 text-[#d4af37] border border-[#c5a059]/30 text-sm font-medium"
              >
                <Phone className="w-4 h-4" />
                <span>Call {RESTAURANT_INFO.phone}</span>
              </a>
            </div>

            <div className="pt-4 text-center text-xs text-[#8c887f]">
              <p>T.Begur, Bangalore Highway, Tumakuru</p>
              <p className="mt-1 text-[#c5a059] font-medium">{RESTAURANT_INFO.hoursNote}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
