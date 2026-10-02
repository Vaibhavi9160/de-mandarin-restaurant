import React from 'react';
import { Star, MapPin, ChevronDown, Compass, Utensils } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HeroProps {
  onExploreMenu: () => void;
  onGetDirections: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onGetDirections }) => {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background imagery with dark atmospheric gradient scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=85"
          alt="De Mandarin Resto Cafe Ambiance"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-[pulse_10s_ease-in-out_infinite] opacity-40 brightness-75"
          referrerPolicy="no-referrer"
        />
        {/* Layered luxury scrim gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d0e] via-[#0c0d0e]/75 to-[#0c0d0e]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0c0d0e]/40 to-[#0c0d0e]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Small Rating & Trust Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181a1e]/90 border border-[#c5a059]/40 shadow-lg mb-6 backdrop-blur-md">
          <div className="flex items-center gap-0.5 text-[#d4af37]">
            <Star className="w-3.5 h-3.5 fill-[#d4af37]" />
            <span className="text-xs font-bold text-white tabular-nums ml-1">4.6</span>
          </div>
          <span className="text-[#5c606a]" aria-hidden="true">·</span>
          <span className="text-xs font-medium text-[#c8c4bd]">
            3,786+ Verified Reviews
          </span>
          <span className="text-[#5c606a]" aria-hidden="true">·</span>
          <span className="text-xs text-[#d4af37] font-medium hidden sm:inline-block">
            Bangalore Highway
          </span>
        </div>

        {/* Main Title */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white max-w-4xl text-balance">
          DE MANDARIN <span className="text-gold-gradient block sm:inline">RESTO CAFE</span>
        </h1>

        {/* Brand Tagline */}
        <p className="mt-4 font-display text-xl sm:text-2xl md:text-3xl italic text-[#f0e6d2] font-normal tracking-wide">
          “Good Food. Great Ambience. Memorable Moments.”
        </p>

        {/* Subtext */}
        <p className="mt-4 max-w-2xl text-sm sm:text-base md:text-lg text-[#b8b3a8] font-normal leading-relaxed text-balance">
          {RESTAURANT_INFO.subtext}
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            type="button"
            onClick={onExploreMenu}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold tracking-wider uppercase text-black bg-gradient-to-r from-[#f0d188] via-[#d4af37] to-[#aa8222] rounded-xl hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-[#d4af37]/20 cursor-pointer"
          >
            <Utensils className="w-4 h-4" />
            <span>Explore Menu</span>
          </button>

          <button
            type="button"
            onClick={onGetDirections}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium text-[#ece7df] bg-[#1a1c21]/90 hover:bg-[#252830] border border-[#3b3e47] rounded-xl hover:border-[#c5a059]/60 active:scale-95 transition-all cursor-pointer"
          >
            <Compass className="w-4 h-4 text-[#d4af37]" />
            <span>Get Directions</span>
          </button>
        </div>

        {/* Quick Highlights Strip */}
        <div className="mt-12 pt-8 border-t border-[#22242a] w-full grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
          <div className="p-3 rounded-lg bg-[#141518]/60 border border-[#202227]">
            <span className="text-[11px] uppercase tracking-wider text-[#8b877f] font-medium block">
              Cuisine
            </span>
            <span className="text-xs sm:text-sm font-semibold text-[#ece7df] mt-0.5 block truncate">
              Multi-Cuisine & Cafe
            </span>
          </div>

          <div className="p-3 rounded-lg bg-[#141518]/60 border border-[#202227]">
            <span className="text-[11px] uppercase tracking-wider text-[#8b877f] font-medium block">
              Price Range
            </span>
            <span className="text-xs sm:text-sm font-semibold text-[#d4af37] mt-0.5 block tabular-nums">
              ₹200–₹1,200 / person
            </span>
          </div>

          <div className="p-3 rounded-lg bg-[#141518]/60 border border-[#202227]">
            <span className="text-[11px] uppercase tracking-wider text-[#8b877f] font-medium block">
              Location
            </span>
            <span className="text-xs sm:text-sm font-semibold text-[#ece7df] mt-0.5 block truncate">
              Near Siddhartha Med College
            </span>
          </div>

          <div className="p-3 rounded-lg bg-[#141518]/60 border border-[#202227]">
            <span className="text-[11px] uppercase tracking-wider text-[#8b877f] font-medium block">
              Timings
            </span>
            <span className="text-xs sm:text-sm font-semibold text-[#ece7df] mt-0.5 block truncate">
              Open Late Night
            </span>
          </div>
        </div>

        {/* Subtle scroll cue */}
        <a
          href="#about"
          className="mt-8 text-[#8c877d] hover:text-[#d4af37] transition-colors p-2"
          aria-label="Scroll to about section"
        >
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
