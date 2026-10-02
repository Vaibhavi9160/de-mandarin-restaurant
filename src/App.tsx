import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { SpecialHighlights } from './components/SpecialHighlights';
import { MenuSection } from './components/MenuSection';
import { GallerySection } from './components/GallerySection';
import { WhyVisitUs } from './components/WhyVisitUs';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { ReservationSection } from './components/ReservationSection';
import { Footer } from './components/Footer';
import { FullMenuModal } from './components/FullMenuModal';
import { OwnerProposalBar } from './components/OwnerProposalBar';

export default function App() {
  const [isFullMenuOpen, setIsFullMenuOpen] = useState(false);
  const [activeMenuCategory, setActiveMenuCategory] = useState<string>('Popular');

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleExploreMenu = () => {
    scrollToSection('menu');
  };

  const handleGetDirections = () => {
    scrollToSection('contact');
  };

  const handleOpenReservation = () => {
    scrollToSection('reservation');
  };

  const handleSelectHighlightCategory = (categoryName: string) => {
    setActiveMenuCategory(categoryName);
    scrollToSection('menu');
  };

  return (
    <div className="min-h-screen bg-[#0c0d0e] text-[#ece7df] flex flex-col selection:bg-[#c5a059] selection:text-black font-sans">
      {/* Sticky Top Navbar */}
      <Navbar
        onOpenFullMenu={() => setIsFullMenuOpen(true)}
        onOpenReservation={handleOpenReservation}
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* Cinematic Hero */}
        <Hero
          onExploreMenu={handleExploreMenu}
          onGetDirections={handleGetDirections}
        />

        {/* About Section */}
        <About />

        {/* Special Highlights */}
        <SpecialHighlights onSelectCategory={handleSelectHighlightCategory} />

        {/* Interactive Menu Section */}
        <MenuSection
          activeCategory={activeMenuCategory}
          onCategoryChange={setActiveMenuCategory}
          onOpenFullMenu={() => setIsFullMenuOpen(true)}
        />

        {/* Photo Gallery with Lightbox */}
        <GallerySection />

        {/* Why Visit Us */}
        <WhyVisitUs />

        {/* Public Reviews & Feedback */}
        <ReviewsSection />

        {/* Location & Embedded Map */}
        <LocationSection />

        {/* Table Reservation & Contact */}
        <ReservationSection />
      </main>

      {/* Dark Footer */}
      <Footer
        onOpenFullMenu={() => setIsFullMenuOpen(true)}
        onOpenReservation={handleOpenReservation}
      />

      {/* Full Menu Modal Book */}
      <FullMenuModal
        isOpen={isFullMenuOpen}
        onClose={() => setIsFullMenuOpen(false)}
        onOpenReservation={() => {
          setIsFullMenuOpen(false);
          handleOpenReservation();
        }}
      />

      {/* Owner Proposal Preview Mode Bar */}
      <OwnerProposalBar />
    </div>
  );
}
