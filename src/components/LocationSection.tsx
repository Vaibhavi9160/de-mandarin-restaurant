import React from 'react';
import { MapPin, Phone, Clock, Compass, ExternalLink, Navigation } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const LocationSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-[#0f1013] border-t border-[#1e2026] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#c5a059] font-semibold mb-2">
            <span className="w-5 h-[1.5px] bg-[#c5a059]" />
            <span>Visit Us on Bangalore Highway</span>
            <span className="w-5 h-[1.5px] bg-[#c5a059]" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Find Us
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#a09b90]">
            Strategically situated on the main Bangalore Highway right near Sri Sidhartha Medical College in Tumakuru, Karnataka.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Details & Action Buttons */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#141518] border border-[#23252d] shadow-xl">
            <div className="space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold">
                  Location & Contact
                </span>
                <h3 className="font-display text-2xl font-bold text-white mt-1">
                  De Mandarin Resto Cafe
                </h3>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#191b20] border border-[#262832]">
                <MapPin className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <div className="text-sm">
                  <span className="font-semibold text-white block">Highway Address</span>
                  <p className="text-[#a49f94] mt-1 leading-relaxed">
                    T.Begur, Bangalore Highway,<br />
                    Near Sri Sidhartha Medical College,<br />
                    Tumakuru, Karnataka – 562123
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#191b20] border border-[#262832]">
                <Phone className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <div className="text-sm">
                  <span className="font-semibold text-white block">Direct Line</span>
                  <a
                    href={RESTAURANT_INFO.phoneHref}
                    className="text-lg font-bold text-[#d4af37] hover:text-[#f3deab] transition-colors mt-0.5 block tabular-nums"
                  >
                    {RESTAURANT_INFO.phone}
                  </a>
                  <p className="text-xs text-[#8c887f] mt-0.5">
                    For table enquiries, takeaway & party arrangements
                  </p>
                </div>
              </div>

              {/* Timings */}
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#191b20] border border-[#262832]">
                <Clock className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <div className="text-sm">
                  <span className="font-semibold text-white block">Opening Information</span>
                  <p className="text-sm font-medium text-[#f0e8dc] mt-0.5">
                    {RESTAURANT_INFO.hoursNote}
                  </p>
                  <p className="text-xs text-[#8c887f] mt-1">
                    Multi-cuisine kitchen and cafe beverages available throughout the day and late evening.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 pt-6 border-t border-[#1e2026] flex flex-col sm:flex-row gap-3">
              <a
                href={RESTAURANT_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-[#e4c278] to-[#c5a059] hover:brightness-110 active:scale-95 transition-all shadow-md shadow-[#c5a059]/20"
              >
                <Compass className="w-4 h-4" />
                <span>Get Directions</span>
              </a>

              <a
                href={RESTAURANT_INFO.phoneHref}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#ece7df] bg-[#1d1f25] hover:bg-[#272a33] border border-[#343843] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Embed with Map Controls */}
          <div className="lg:col-span-7 flex flex-col rounded-2xl overflow-hidden bg-[#141518] border border-[#23252d] shadow-xl">
            {/* Map Top Bar */}
            <div className="px-5 py-3.5 bg-[#17191e] border-b border-[#242730] flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs">
                <Navigation className="w-4 h-4 text-[#d4af37]" />
                <span className="font-semibold text-white">Bangalore Highway Navigation</span>
                <span className="text-[#6d6a62]">· Tumakuru Corridor</span>
              </div>
              <a
                href={RESTAURANT_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#d4af37] hover:underline inline-flex items-center gap-1 font-medium"
              >
                <span>Open in Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Map Frame Embed */}
            <div className="relative flex-1 min-h-[360px] sm:min-h-[440px] w-full bg-[#111215]">
              <iframe
                title="De Mandarin Resto Cafe Google Map Location"
                src="https://maps.google.com/maps?q=T.Begur,+Tumakuru,+Karnataka+562123&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 filter contrast-105 brightness-90 hover:brightness-100 transition-all duration-300"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Highway landmark card pinned on map */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs p-3.5 rounded-xl bg-[#0c0d0e]/90 backdrop-blur-md border border-[#2e313b] text-xs shadow-2xl">
                <div className="flex items-center gap-2 text-[#d4af37] font-semibold mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Landmark Guide</span>
                </div>
                <p className="text-[#a49f94]">
                  Located conveniently on Bangalore Highway near Sri Sidhartha Medical College with clear parking entrance.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
