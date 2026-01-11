// Example usage for AncientArtPage.tsx
import React from 'react';
import Navbar from '../component/Navbar';
import Hero from '../page-sections/Hero';
import Gallery from '../page-sections/Gallery';
import ContactForm from '../page-sections/ContactForm';
import Footer from '../page-sections/Footer';


const AncientArtPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero
        firstWord="Ancient"
        firstColor="text-blue-800"
        secondWord="Art"
        secondColor="text-pink-500"
        buttonText="Explore"
        buttonBgColor="bg-white"
        buttonTextColor="text-pink-500"
        backgroundImage="/path/to/ancient-art-bg.jpg" // Replace with actual image path
      />
      <Gallery />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default AncientArtPage;