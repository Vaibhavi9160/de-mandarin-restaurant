import React, { useState } from 'react';
import { GALLERY_PHOTOS, GalleryPhoto } from '../data/restaurantData';
import { ImageWithFallback } from './ImageWithFallback';
import { X, ChevronLeft, ChevronRight, Eye, Camera } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [showAllPhotos, setShowAllPhotos] = useState<boolean>(false);

  const categories = ['All', 'Food', 'Ambience', 'Outdoor Seating', 'Drinks', 'Desserts'];

  const filteredPhotos = GALLERY_PHOTOS.filter((photo) =>
    activeFilter === 'All' ? true : photo.category === activeFilter
  );

  const displayedPhotos = showAllPhotos ? filteredPhotos : filteredPhotos.slice(0, 6);

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % filteredPhotos.length);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-[#0c0d0e] border-t border-[#1e2026] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#c5a059] font-semibold mb-2">
            <span className="w-5 h-[1.5px] bg-[#c5a059]" />
            <span>Visual Glimpse</span>
            <span className="w-5 h-[1.5px] bg-[#c5a059]" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Photo Gallery
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#a09b90]">
            Take a visual tour through our welcoming ambience, open-air seating, artisanal food, and refreshing highway drinks.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setActiveFilter(cat);
                setShowAllPhotos(false);
              }}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-[#e4c278] to-[#c5a059] text-black font-semibold shadow-md'
                  : 'bg-[#15161a] text-[#b6b2a8] hover:bg-[#1f2127] hover:text-white border border-[#23252d]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-Style Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-2xl overflow-hidden bg-[#16171b] border border-[#242730] cursor-pointer hover:border-[#c5a059]/60 transition-all duration-300 shadow-lg"
            >
              {/* Image Container with Zoom */}
              <div className="aspect-[4/3] overflow-hidden relative">
                <ImageWithFallback
                  src={photo.image}
                  alt={photo.title}
                  fallbackTitle={photo.title}
                  fallbackSubtitle={photo.category}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                {/* Hover Overlay with Category and Caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d0e]/95 via-[#0c0d0e]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#d4af37] bg-[#c5a059]/15 px-2.5 py-0.5 rounded-full border border-[#c5a059]/30">
                      {photo.category}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#1b1c21] flex items-center justify-center text-[#d4af37]">
                      <Eye className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-display text-lg font-bold text-white leading-snug">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-[#a49f94] mt-1 line-clamp-2">
                    {photo.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* "View More Photos" Button */}
        {filteredPhotos.length > 6 && !showAllPhotos && (
          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={() => setShowAllPhotos(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#ece7df] bg-[#1a1c21] hover:bg-[#252831] border border-[#353944] hover:border-[#c5a059]/50 transition-all cursor-pointer"
            >
              <Camera className="w-4 h-4 text-[#d4af37]" />
              <span>View More Photos ({filteredPhotos.length - 6} more)</span>
            </button>
          </div>
        )}

      </div>

      {/* Lightbox Modal */}
      {selectedPhotoIndex !== null && filteredPhotos[selectedPhotoIndex] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-5 right-5 p-3 rounded-full bg-[#1e2026] text-white hover:bg-[#2d303a] border border-[#353842] z-50 transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#1e2026]/80 text-white hover:bg-[#2d303a] border border-[#353842] z-50 transition-colors"
            aria-label="Previous Photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#1e2026]/80 text-white hover:bg-[#2d303a] border border-[#353842] z-50 transition-colors"
            aria-label="Next Photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            className="relative max-w-4xl max-h-[85vh] w-full flex flex-col rounded-2xl overflow-hidden bg-[#121316] border border-[#2b2e38] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-black flex items-center justify-center">
              <img
                src={filteredPhotos[selectedPhotoIndex].image}
                alt={filteredPhotos[selectedPhotoIndex].title}
                className="max-h-full max-w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-4 sm:p-6 bg-[#16171c] border-t border-[#252730] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#d4af37]">
                  {filteredPhotos[selectedPhotoIndex].category}
                </span>
                <h3 className="font-display text-xl font-bold text-white mt-0.5">
                  {filteredPhotos[selectedPhotoIndex].title}
                </h3>
                <p className="text-xs text-[#a09b90] mt-1">
                  {filteredPhotos[selectedPhotoIndex].caption}
                </p>
              </div>

              <span className="text-xs text-[#7c776e] tabular-nums self-end sm:self-center">
                {selectedPhotoIndex + 1} / {filteredPhotos.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
