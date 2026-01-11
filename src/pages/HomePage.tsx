// src/pages/HomePage.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // assuming react-router for navigation


import Navbar from '../component/Navbar';
import Hero from '../page-sections/Hero';
import Gallery from '../page-sections/Gallery';
import ContactForm from '../page-sections/ContactForm';
import Footer from '../page-sections/Footer';

// New simple component for category cards
const CategoryCard: React.FC<{
  title: string;
  description: string;
  imageUrl: string;
  linkTo: string;
}> = ({ title, description, imageUrl, linkTo }) => (
  <Link to={linkTo} className="group block">
    <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform group-hover:scale-105">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-64 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="mt-2 text-gray-200 text-sm">{description}</p>
        <span className="mt-3 inline-block text-white font-medium group-hover:underline">
          →
        </span>
      </div>
    </div>
  </Link>
);

// New hero/welcome overlay section component
const WelcomeSection: React.FC<{ backgroundImage: string }> = ({ backgroundImage }) => (
  <section className="relative min-h-[600px] flex items-center justify-center">
    <img
      src={backgroundImage}
      alt="Abstract vibrant art"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/40" />
    <div className="relative z-10 text-center text-white px-6 max-w-4xl">
      <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-wide leading-tight mb-6">
        Welcome To
        <br />
        The Art And History Gallery
        <br />
        Lumière Arts
      </h2>
      <button className="mt-8 px-10 py-5 bg-white text-black font-bold text-xl uppercase tracking-wider hover:bg-gray-200 transition">
        Learn More →
      </button>
    </div>
  </section>
);

const HomePage: React.FC = () => {
  // Sample collection images (mix of classical, modern, abstract, pixel)
  const collectionImages = [
    'https://images.unsplash.com/photo-1579783902614-a3db3927b163?w=800', // classical flowers
    'https://images.unsplash.com/photo-1577720118602-70a1b7cf4c76?w=800', // dramatic historical
    'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800', // abstract colorful
    'https://images.unsplash.com/photo-1577720119870-64f822746c1b?w=800', // modern abstract
    'https://images.unsplash.com/photo-1547891654-e66ed7eb9681?w=800', // pixel-inspired digital
    'https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?w=800', // vibrant modern
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Top hero banner with split design + featured art */}
      <section className="relative h-[80vh] md:h-[90vh] flex">
        {/* Left brown panel with text */}
        <div className="w-full md:w-1/2 bg-amber-800/90 flex items-center justify-center p-12">
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold text-white uppercase tracking-wide">
              Lumière
              <br />
              <span className="text-orange-400">Arts</span>
            </h1>
            <p className="mt-6 text-xl text-white/90">
              Early artworks like cave paintings and carvings that show human history and culture
            </p>
            <button className="mt-10 px-12 py-5 bg-white text-black font-bold text-xl uppercase tracking-wider hover:bg-gray-200 transition">
              Explore
            </button>
          </div>
        </div>

        {/* Right featured colorful painting */}
        <div className="hidden md:block w-1/2">
          <img
            src="https://images.unsplash.com/photo-1578926375605-eaf8a526e6b9?w=1200" // vibrant abstract cubist-style figure
            alt="Vibrant abstract art"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Category teasers */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <CategoryCard
            title="Ancient Origins"
            description="Early artworks like cave paintings and carvings that show human history and culture"
            imageUrl="https://images.unsplash.com/photo-1500468756762-a401b6f17b46?w=800" // prehistoric cave art style
            linkTo="/ancient"
          />
          <CategoryCard
            title="Pixel Art"
            description="Digital images made from tiny colored squares, popular in games and illustrations"
            imageUrl="https://images.unsplash.com/photo-1550744829-eb0a3e8b8c5f?w=800" // pixel-inspired portrait
            linkTo="/pixel"
          />
          <CategoryCard
            title="Modern Art"
            description="Creative artworks made with digital tools and photography"
            imageUrl="https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800" // reaching hands abstract
            linkTo="/modern"
          />
        </div>
      </section>

      {/* Welcome overlay section */}
      <WelcomeSection
        backgroundImage="https://images.unsplash.com/photo-1578926375605-eaf8a526e6b9?w=1920" // vibrant geometric abstract with figures
      />

      {/* Collection */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12 uppercase tracking-wide">Collection</h2>
          <Gallery images={collectionImages} />
        </div>
      </section>

      <ContactForm />

      <Footer />
    </div>
  );
};

export default HomePage;