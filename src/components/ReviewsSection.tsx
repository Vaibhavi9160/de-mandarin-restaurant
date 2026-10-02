import React from 'react';
import { Star, MessageSquare, ExternalLink, ThumbsUp } from 'lucide-react';
import { RESTAURANT_INFO, CUSTOMER_REVIEWS } from '../data/restaurantData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-[#0c0d0e] border-t border-[#1e2026] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header & Rating Summary */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#c5a059] font-semibold mb-2">
              <span className="w-5 h-[1.5px] bg-[#c5a059]" />
              <span>Public Customer Feedback</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Loved by Travelers & Locals
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#a09b90]">
              Real dining themes reflected across thousands of public reviews from highway travelers, families, and college diners.
            </p>
          </div>

          {/* Rating Scorecard Box */}
          <div className="p-5 rounded-2xl bg-[#141518] border border-[#262831] flex items-center gap-6 shadow-xl shrink-0">
            <div className="text-center">
              <div className="font-display text-4xl sm:text-5xl font-bold text-white tabular-nums">
                {RESTAURANT_INFO.rating}
              </div>
              <div className="flex items-center justify-center gap-1 text-[#d4af37] mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#d4af37]" />
                ))}
              </div>
            </div>

            <div className="h-10 w-[1px] bg-[#2a2d36]" />

            <div>
              <div className="text-sm font-semibold text-white">
                {RESTAURANT_INFO.reviewsCount}
              </div>
              <div className="text-xs text-[#8c887f]">Public Google Reviews</div>
              <div className="text-[11px] text-[#c5a059] font-medium mt-0.5">
                Bangalore Highway Tumakuru
              </div>
            </div>
          </div>
        </div>

        {/* 6 Theme-Based Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CUSTOMER_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-2xl bg-[#141518] border border-[#23252d] hover:border-[#c5a059]/40 transition-all duration-300 flex flex-col justify-between shadow-sm"
            >
              <div>
                {/* Theme & Rating */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#d4af37]">
                    {rev.theme}
                  </span>
                  <div className="flex items-center text-[#d4af37]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-[#d4af37]" />
                    ))}
                  </div>
                </div>

                <h3 className="font-display text-base font-bold text-white mb-2 leading-snug">
                  “{rev.highlight}”
                </h3>

                <p className="text-xs sm:text-sm text-[#9c978c] leading-relaxed">
                  {rev.text}
                </p>
              </div>

              {/* Attribution */}
              <div className="mt-5 pt-3.5 border-t border-[#1e2026] flex items-center justify-between text-xs text-[#78746c]">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#202228] border border-[#2b2e37] flex items-center justify-center text-[10px] font-medium text-[#c5a059]">
                    {rev.authorLabel.charAt(0)}
                  </div>
                  <span className="font-medium text-[#a09b90]">{rev.authorLabel}</span>
                </div>
                <span className="text-[11px]">{rev.timeAgo}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Read More Reviews Button */}
        <div className="mt-12 text-center">
          <a
            href={RESTAURANT_INFO.googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#ece7df] bg-[#1a1c21] hover:bg-[#252831] border border-[#353944] hover:border-[#c5a059]/50 transition-all shadow-md"
          >
            <MessageSquare className="w-4 h-4 text-[#d4af37]" />
            <span>Read More Reviews on Google</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#8c887f]" />
          </a>
          <p className="mt-2 text-xs text-[#7c776e]">
            Based on publicly available ratings for De Mandarin Resto Cafe (T.Begur, Tumakuru).
          </p>
        </div>

      </div>
    </section>
  );
};
