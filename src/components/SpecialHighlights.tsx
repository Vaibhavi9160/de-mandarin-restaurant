import React from 'react';
import { SPECIAL_HIGHLIGHTS } from '../data/restaurantData';
import { ImageWithFallback } from './ImageWithFallback';
import { ArrowRight } from 'lucide-react';

interface SpecialHighlightsProps {
  onSelectCategory: (categoryName: string) => void;
}

export const SpecialHighlights: React.FC<SpecialHighlightsProps> = ({ onSelectCategory }) => {
  const getMappedCategory = (title: string): string => {
    switch (title) {
      case 'Pizza':
      case 'Pasta':
        return 'Pizza & Pasta';
      case 'Dimsum':
        return 'Chinese';
      case 'Burgers':
        return 'Burgers';
      case 'Mojitos':
      case 'Coffee & Tea':
        return 'Beverages';
      case 'Desserts':
        return 'Desserts';
      default:
        return 'Popular';
    }
  };

  return (
    <section className="py-20 bg-[#0c0d0e] relative overflow-hidden border-t border-[#1c1d22]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#c5a059] font-semibold mb-2">
              <span className="w-6 h-[1.5px] bg-[#c5a059]" />
              <span>Signature Cravings</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Special Highlights
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#a09b90] max-w-xl">
              From stone-baked pizzas to chilled craft mojitos, explore our most beloved culinary stops along the highway.
            </p>
          </div>
          
          <div className="mt-4 md:mt-0 text-xs text-[#8c887f]">
            <span>Click any card to filter menu items</span>
          </div>
        </div>

        {/* 8 Highlight Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {SPECIAL_HIGHLIGHTS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelectCategory(getMappedCategory(item.title))}
              className="group text-left relative rounded-2xl overflow-hidden bg-[#151619] border border-[#23252c] hover:border-[#c5a059]/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#c5a059]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059] cursor-pointer"
            >
              {/* Card Image */}
              <div className="aspect-[4/3] w-full overflow-hidden relative">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  fallbackTitle={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                />
                {/* Gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0f12] via-[#0e0f12]/30 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />
                
                {/* Floating Emoji Badge */}
                <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-[#0c0d0e]/80 backdrop-blur-md border border-[#2d3038] flex items-center justify-center text-base shadow">
                  <span role="img" aria-label={item.title}>{item.emoji}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4 sm:p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-[#d4af37] transition-colors">
                    {item.title}
                  </h3>
                  <ArrowRight className="w-4 h-4 text-[#8a857a] group-hover:text-[#d4af37] group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-xs text-[#9a958b] mt-1 line-clamp-1 leading-snug">
                  {item.tagline}
                </p>
              </div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
