import React from 'react';
import { Utensils, Coffee, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

export const About: React.FC = () => {
  const features = [
    {
      icon: Utensils,
      title: 'Multi-Cuisine Dining',
      description: 'A wide variety of dishes for different tastes, from clay-oven Indian delights to wood-fired pizzas, hearty pasta, and oriental noodles.',
      tagline: 'Diverse Palates Welcome',
    },
    {
      icon: Coffee,
      title: 'Cafe & Beverages',
      description: 'Refreshing coffees, teas, signature highway mojitos, fruit chillers, and decadent dessert sundaes crafted for a refreshing rest.',
      tagline: 'Artisan Brews & Chillers',
    },
    {
      icon: Sparkles,
      title: 'Great Ambience',
      description: 'A cozy and lively space for friends and family, featuring warm lighting, spacious booths, and a vibrant atmosphere along the highway.',
      tagline: 'Relaxed Highway Haven',
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#0f1013] border-t border-[#1d1f24] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#c5a059]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Polished Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#c5a059] font-semibold">
              <span className="w-6 h-[1.5px] bg-[#c5a059]" />
              <span>About De Mandarin</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              A Place to Eat. <br />
              <span className="text-[#f5e2b3]">A Place to Unwind.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#b8b3a8] leading-relaxed font-normal">
              De Mandarin Resto Cafe is a welcoming dining destination near Tumakuru, offering a relaxed ambience, delicious multi-cuisine food and a comfortable space for friends and families. Whether you're stopping by during a highway journey, meeting friends or enjoying a family meal, De Mandarin brings together great food and a lively atmosphere.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#15171b] border border-[#23262e]">
                <MapPin className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Prime Location</h4>
                  <p className="text-xs text-[#9a9488] mt-0.5">Bangalore Highway, near Sri Sidhartha Medical College</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#15171b] border border-[#23262e]">
                <CheckCircle2 className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">4.6 Rated Spot</h4>
                  <p className="text-xs text-[#9a9488] mt-0.5">Over 3,786 genuine diners on Google</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#2a2c34] shadow-2xl bg-[#14161a]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
                alt="Dining Experience at De Mandarin Resto Cafe"
                fallbackTitle="De Mandarin Resto Cafe Tumakuru"
                fallbackSubtitle="Good Food · Great Ambience"
                className="w-full h-[360px] sm:h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d0e] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#0c0d0e]/85 backdrop-blur-md border border-[#2b2e37]">
                <p className="text-xs font-semibold tracking-wider text-[#d4af37] uppercase">
                  Bangalore-Tumakuru Highway Oasis
                </p>
                <p className="text-sm font-medium text-white mt-1">
                  Crafting memorable moments over comforting food and refreshing beverages since day one.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Feature Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="relative group p-7 rounded-2xl bg-gradient-to-b from-[#16171b] to-[#121316] border border-[#242730] hover:border-[#c5a059]/50 transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#c5a059]/20 to-[#c5a059]/5 border border-[#c5a059]/30 flex items-center justify-center text-[#d4af37] mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 stroke-[1.75]" />
                </div>
                
                <span className="text-xs font-semibold text-[#c5a059] uppercase tracking-wider block mb-1">
                  0{idx + 1} · {feature.tagline}
                </span>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
                  {feature.title}
                </h3>

                <p className="text-sm text-[#a8a398] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
