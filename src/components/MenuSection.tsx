import React, { useState } from 'react';
import { MENU_CATEGORIES, MENU_ITEMS, MenuItem } from '../data/restaurantData';
import { ImageWithFallback } from './ImageWithFallback';
import { ArrowRight, Sparkles, Search, Info } from 'lucide-react';

interface MenuSectionProps {
  onOpenFullMenu: () => void;
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onOpenFullMenu,
  activeCategory,
  onCategoryChange,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [dietFilter, setDietFilter] = useState<'all' | 'veg' | 'non-veg'>('all');

  // Filter items
  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory =
      activeCategory === 'Popular' ? item.isPopular : item.category === activeCategory;

    const matchesSearch =
      searchQuery.trim() === '' ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesDiet =
      dietFilter === 'all' ||
      (dietFilter === 'veg' && item.vegType === 'veg') ||
      (dietFilter === 'non-veg' && item.vegType === 'non-veg');

    return matchesCategory && matchesSearch && matchesDiet;
  });

  return (
    <section id="menu" className="py-20 bg-[#0f1013] border-t border-[#1e2026] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#c5a059] font-semibold mb-2">
            <span className="w-5 h-[1.5px] bg-[#c5a059]" />
            <span>Curated Culinary Selection</span>
            <span className="w-5 h-[1.5px] bg-[#c5a059]" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Our Menu Showcase
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#a09b90]">
            A rich blend of Indian specialties, Italian wood-fired delights, Asian woks, and gourmet cafe beverages designed for travelers and food lovers.
          </p>

          {/* Restaurant Owner Note Banner */}
          <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#17191d] border border-[#2c2f37] text-xs text-[#9d978b]">
            <Info className="w-4 h-4 text-[#d4af37] shrink-0" />
            <span>
              Sample menu preview for demonstration. Prices and seasonal specialties can be directly updated by restaurant management.
            </span>
          </div>
        </div>

        {/* Filter Bar Controls */}
        <div className="space-y-4 mb-10">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none sm:flex-wrap sm:justify-center">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => onCategoryChange(cat)}
                  className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#e4c278] to-[#c5a059] text-black font-semibold shadow-md shadow-[#c5a059]/20 scale-102'
                      : 'bg-[#16171b] text-[#c4c0b6] hover:bg-[#202227] hover:text-white border border-[#262831]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search & Dietary Segmented Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-[#1d1f25]">
            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-[#8a8579] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search menu dishes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-lg bg-[#141518] border border-[#252830] text-[#ece7df] placeholder-[#6f6b63] focus:outline-none focus:border-[#c5a059] transition-colors"
              />
            </div>

            {/* Diet Filter Buttons */}
            <div className="flex items-center gap-1.5 p-1 bg-[#141518] border border-[#252830] rounded-lg self-stretch sm:self-auto justify-center">
              <button
                type="button"
                onClick={() => setDietFilter('all')}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                  dietFilter === 'all'
                    ? 'bg-[#25272e] text-[#ece7df] shadow-sm'
                    : 'text-[#8f8a80] hover:text-white'
                }`}
              >
                All Dishes
              </button>
              <button
                type="button"
                onClick={() => setDietFilter('veg')}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-colors flex items-center gap-1.5 ${
                  dietFilter === 'veg'
                    ? 'bg-emerald-950/70 text-emerald-300 border border-emerald-700/50'
                    : 'text-[#8f8a80] hover:text-emerald-400'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                Pure Veg
              </button>
              <button
                type="button"
                onClick={() => setDietFilter('non-veg')}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-colors flex items-center gap-1.5 ${
                  dietFilter === 'non-veg'
                    ? 'bg-amber-950/70 text-amber-300 border border-amber-700/50'
                    : 'text-[#8f8a80] hover:text-amber-400'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-amber-500 inline-block" />
                Non-Veg
              </button>
            </div>
          </div>
        </div>

        {/* Menu Cards Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col rounded-2xl overflow-hidden bg-[#141518] border border-[#23252c] hover:border-[#c5a059]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#c5a059]/5"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#1a1b1f]">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    fallbackTitle={item.name}
                    fallbackSubtitle={item.category}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141518] via-transparent to-transparent opacity-60" />

                  {/* Veg / Non-Veg Indicator */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-1 rounded-md bg-[#0c0d0e]/85 backdrop-blur-md border border-[#2b2d35]">
                    {item.vegType === 'veg' && (
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block ring-2 ring-emerald-500/30" />
                    )}
                    {item.vegType === 'non-veg' && (
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block ring-2 ring-amber-500/30" />
                    )}
                    {item.vegType === 'beverage' && (
                      <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 inline-block ring-2 ring-cyan-400/30" />
                    )}
                    <span className="text-[10px] uppercase font-semibold tracking-wider text-[#d0cbc2]">
                      {item.vegType}
                    </span>
                  </div>

                  {item.isPopular && (
                    <div className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#c5a059]/90 text-black text-[10px] font-bold uppercase tracking-wider shadow">
                      <Sparkles className="w-2.5 h-2.5" />
                      <span>Popular</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Category kicker */}
                    <div className="flex items-center justify-between text-xs text-[#8c887f] mb-1">
                      <span>{item.category}</span>
                      <span className="text-[#a09b90] font-mono text-[11px]">{item.priceNote}</span>
                    </div>

                    <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-[#d4af37] transition-colors leading-snug">
                      {item.name}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-[#9c968a] leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#1e2026] flex items-center justify-between text-xs">
                    <span className="text-[#7c776e]">Multi-Cuisine Craft</span>
                    <button
                      type="button"
                      onClick={onOpenFullMenu}
                      className="text-[#d4af37] hover:text-[#f3deab] font-medium inline-flex items-center gap-1 group/btn"
                    >
                      <span>Menu Details</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-12 text-center rounded-2xl bg-[#141518] border border-[#23252c]">
            <p className="text-base text-[#9a9488]">No dishes found matching your current filter criteria.</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setDietFilter('all');
                onCategoryChange('Popular');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-black bg-[#d4af37] rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Big "VIEW FULL MENU →" Button */}
        <div className="mt-14 text-center">
          <button
            type="button"
            onClick={onOpenFullMenu}
            className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 rounded-xl text-sm sm:text-base font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#f0d188] via-[#d4af37] to-[#aa8222] hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-[#d4af37]/20 cursor-pointer"
          >
            <span>View Full Menu</span>
            <ArrowRight className="w-5 h-5 stroke-[2.5]" />
          </button>
          <p className="mt-3 text-xs text-[#8c887f]">
            Explore all starters, sizzlers, mains, pizzas, beverages & desserts in detail.
          </p>
        </div>

      </div>
    </section>
  );
};
