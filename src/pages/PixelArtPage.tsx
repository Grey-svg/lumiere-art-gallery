// Example usage for PixelArtPage.tsx
import React from 'react';
import Navbar from '../component/Navbar';
import Hero from '../page-sections/Hero';
import Gallery from '../page-sections/Gallery';
import ContactForm from '../page-sections/ContactForm';
import Footer from '../page-sections/Footer';

// Import local pixel art images
import art1 from '../assets/image/art1.jpg';
import art2 from '../assets/image/art2.jpg';
import art3 from '../assets/image/art3.jpg';
import art4 from '../assets/image/art4.jpg';
import art5 from '../assets/image/art5.png';
import art6 from '../assets/image/art6.jpg';
import art7 from '../assets/image/art7.png';
import art8 from '../assets/image/art8.png';
import art9 from '../assets/image/art9.jpg';



const pixelImages = [
  art1,
  art2,
  art3,
  art4,
  art5,
  art6,
  art7,
  art8,
  art9,
  
];
const PixelArtPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero
        firstWord="Pixel"
        firstColor="text-white"
        secondWord="Art"
        secondColor="text-black"
        buttonText="Explore"
        buttonBgColor="bg-black"
        buttonTextColor="text-white"
        backgroundImage='https://images.unsplash.com/photo-1501854140801-50d01698950b' // Replace with actual image path
      />
      <Gallery images={pixelImages} />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default PixelArtPage;