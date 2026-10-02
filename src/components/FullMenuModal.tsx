import React, { useState } from 'react';
import { X, UtensilsCrossed, Phone, Share2, Check, Download, AlertCircle } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS, RESTAURANT_INFO } from '../data/restaurantData';

interface FullMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenReservation: () => void;
}

export const FullMenuModal: React.FC<FullMenuModalProps> = ({
  isOpen,
  onClose,
  onOpenReservation,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [copiedLink, setCopiedLink] = useState(false);

  if (!isOpen) return null;

  const categories = ['All', ...MENU_CATEGORIES.filter((c) => c !== 'Popular')];

  const displayedItems =
    selectedCategory === 'All'
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === selectedCategory);

  const handleShareMenu = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.origin + '#menu');
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-[#111215] border border-[#262831] shadow-2xl overflow-hidden text-[#ece7df]">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#202229] bg-[#141519]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#c5a059] to-[#8d6d2b] flex items-center justify-center text-black">
              <UtensilsCrossed className="w-4 h-4 text-[#0c0d0e]" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-white leading-tight">
                De Mandarin Resto Cafe — Complete Menu
              </h3>
              <p className="text-xs text-[#9a958b]">
                Multi-Cuisine & Cafe · Tumakuru Bangalore Highway
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleShareMenu}
              className="p-2 rounded-lg text-[#9a958b] hover:text-white bg-[#1b1d22] border border-[#2b2d36] transition-colors"
              title="Share Menu Link"
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            </button>
            <button
              type="button"
              onClick={handlePrint}
              className="p-2 rounded-lg text-[#9a958b] hover:text-white bg-[#1b1d22] border border-[#2b2d36] transition-colors hidden sm:inline-flex"
              title="Print Menu"
            >
              <Download className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg text-[#9a958b] hover:text-white bg-[#1b1d22] border border-[#2b2d36] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Category Navigation inside modal */}
        <div className="px-6 py-3 bg-[#16171d] border-b border-[#22242c] overflow-x-auto flex items-center gap-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#d4af37] text-black font-semibold shadow'
                  : 'bg-[#1b1c21] text-[#b6b1a6] hover:bg-[#25272e] hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Modal Body / Menu Listing */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="p-3.5 rounded-xl bg-[#191b21] border border-[#2a2d36] flex items-start gap-2.5 text-xs text-[#9d978a]">
            <AlertCircle className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
            <p>
              <strong>Notice for Diners & Restaurant Management:</strong> Items shown represent our diverse multi-cuisine catalog. Exact daily specials and seasonal items can be verified directly with our staff at <a href={RESTAURANT_INFO.phoneHref} className="text-[#d4af37] underline">{RESTAURANT_INFO.phone}</a>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {displayedItems.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-xl bg-[#15161b] border border-[#23252d] flex flex-col justify-between hover:border-[#c5a059]/40 transition-colors"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-1.5">
                    <div className="flex items-center gap-2">
                      {item.vegType === 'veg' && (
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block shrink-0 ring-2 ring-emerald-500/20" />
                      )}
                      {item.vegType === 'non-veg' && (
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block shrink-0 ring-2 ring-amber-500/20" />
                      )}
                      {item.vegType === 'beverage' && (
                        <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 inline-block shrink-0 ring-2 ring-cyan-400/20" />
                      )}
                      <h4 className="font-display text-base font-bold text-white">
                        {item.name}
                      </h4>
                    </div>
                    <span className="text-[11px] font-mono text-[#d4af37] bg-[#c5a059]/10 px-2 py-0.5 rounded border border-[#c5a059]/20 whitespace-nowrap">
                      {item.category}
                    </span>
                  </div>

                  <p className="text-xs text-[#9a9488] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-[#1e2027] flex items-center justify-between text-xs">
                  <span className="text-[#7c776f] text-[11px] font-medium">Standard Portion</span>
                  <span className="text-[#a09a8f] italic text-[11px]">{item.priceNote}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:px-6 bg-[#141519] border-t border-[#202229] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-[#8c887f]">
            <span>Average Dining Price:</span>
            <span className="font-bold text-[#d4af37]">{RESTAURANT_INFO.priceRange}</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={RESTAURANT_INFO.phoneHref}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[#1e2026] text-xs font-medium text-white hover:bg-[#282b34] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Call {RESTAURANT_INFO.phone}</span>
            </a>

            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenReservation();
              }}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center px-5 py-2 rounded-lg text-xs font-semibold text-black bg-gradient-to-r from-[#e4c278] to-[#c5a059] hover:brightness-110 transition-all uppercase tracking-wider"
            >
              Book Table
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
