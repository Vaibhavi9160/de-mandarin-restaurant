import React, { useState } from 'react';
import { Eye, ShieldCheck, Sparkles, X, ChevronRight, Check } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const OwnerProposalBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  return (
    <>
      {/* Floating Pill Toggle */}
      <div className="fixed bottom-4 left-4 z-40">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-3 py-2 rounded-full bg-[#181a1f]/95 text-[#d4af37] border border-[#c5a059]/40 backdrop-blur-md shadow-xl text-xs font-medium hover:bg-[#22252c] transition-all cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          <span className="hidden sm:inline">Owner Proposal Mode</span>
          <span className="sm:hidden">Proposal Info</span>
        </button>
      </div>

      {/* Modal Drawer with Owner Specifications */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative max-w-lg w-full rounded-2xl bg-[#131418] border border-[#2d303b] p-6 text-[#ece7df] shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#22242c]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#d4af37]" />
                <h3 className="font-display text-lg font-bold text-white">
                  De Mandarin Resto Cafe — Proposal Brief
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg text-[#8c887f] hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-xs text-[#a09b90] space-y-3 leading-relaxed">
              <p>
                This website is custom-architected for <strong className="text-white">De Mandarin Resto Cafe</strong> on Bangalore Highway, Tumakuru.
              </p>

              <div className="p-3 rounded-xl bg-[#191b22] border border-[#262832] space-y-1.5 font-mono text-[11px]">
                <div className="flex justify-between">
                  <span className="text-[#7c776e]">Phone:</span>
                  <span className="text-white">{RESTAURANT_INFO.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7c776e]">Target Domain:</span>
                  <span className="text-[#d4af37]">{RESTAURANT_INFO.website}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7c776e]">Location:</span>
                  <span className="text-white text-right">T.Begur, Bangalore Highway</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7c776e]">Public Google Rating:</span>
                  <span className="text-emerald-400">4.6 ★ (3,786+ Reviews)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7c776e]">Price Range:</span>
                  <span className="text-[#f5e2b3]">{RESTAURANT_INFO.priceRange}</span>
                </div>
              </div>

              <div className="space-y-1 text-left">
                <span className="text-[11px] font-semibold text-white uppercase tracking-wider block">
                  Proposal Highlights Built:
                </span>
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <span className="flex items-center gap-1.5 text-[#b8b3a8]">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    Mobile responsive & fast
                  </span>
                  <span className="flex items-center gap-1.5 text-[#b8b3a8]">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    Interactive Full Menu
                  </span>
                  <span className="flex items-center gap-1.5 text-[#b8b3a8]">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    Photo Lightbox Gallery
                  </span>
                  <span className="flex items-center gap-1.5 text-[#b8b3a8]">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    Reservation Form + WhatsApp
                  </span>
                  <span className="flex items-center gap-1.5 text-[#b8b3a8]">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    Embedded Highway Map
                  </span>
                  <span className="flex items-center gap-1.5 text-[#b8b3a8]">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    Zero broken images guarantee
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#22242c] flex items-center justify-between">
              <button
                type="button"
                onClick={() => setIsDismissed(true)}
                className="text-[11px] text-[#78746c] hover:text-[#9a9488]"
              >
                Hide indicator
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-xs font-semibold text-black bg-[#d4af37] rounded-lg hover:brightness-110"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
