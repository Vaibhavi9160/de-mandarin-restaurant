import React from 'react';
import { Wallet, Navigation, Car, Users, Sparkles, HeartHandshake } from 'lucide-react';
import { WHY_VISIT_POINTS } from '../data/restaurantData';

export const WhyVisitUs: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Wallet':
        return Wallet;
      case 'Navigation':
        return Navigation;
      case 'Car':
        return Car;
      case 'Users':
        return Users;
      case 'Sparkles':
        return Sparkles;
      case 'HeartHandshake':
      default:
        return HeartHandshake;
    }
  };

  return (
    <section className="py-20 bg-[#0f1013] border-t border-[#1e2026] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#c5a059] font-semibold mb-2">
            <span className="w-5 h-[1.5px] bg-[#c5a059]" />
            <span>Why Dine With Us</span>
            <span className="w-5 h-[1.5px] bg-[#c5a059]" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Why Visit De Mandarin
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#a09b90]">
            Thoughtfully planned for road-trippers, weekend explorers, college crowds, and family diners traveling along the Bangalore-Tumakuru highway.
          </p>
        </div>

        {/* 6 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_VISIT_POINTS.map((item) => {
            const IconComponent = getIcon(item.iconName);
            return (
              <div
                key={item.id}
                className="p-6 sm:p-7 rounded-2xl bg-[#141518] border border-[#23252d] hover:border-[#c5a059]/50 transition-all duration-300 hover:-translate-y-1 shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#c5a059]/20 to-[#c5a059]/5 border border-[#c5a059]/30 flex items-center justify-center text-[#d4af37] mb-5">
                    <IconComponent className="w-6 h-6 stroke-[1.75]" />
                  </div>

                  <span className="text-xs font-semibold text-[#d4af37] uppercase tracking-wider block mb-1">
                    {item.highlight}
                  </span>

                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#9c978c] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1d1f25] flex items-center justify-between text-[11px] text-[#78746c]">
                  <span>De Mandarin Standard</span>
                  <span className="text-[#a09b90]">Verified Amenity</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
