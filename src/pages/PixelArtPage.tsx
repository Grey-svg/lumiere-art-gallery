// Example usage for PixelArtPage.tsx
import React from 'react';
import Navbar from '../component/Navbar';
import Hero from '../page-sections/Hero';
import Gallery from '../page-sections/Gallery';
import ContactForm from '../page-sections/ContactForm';
import Footer from '../page-sections/Footer';


const modernImages = [
  'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
  'https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg',
  'https://images.pexels.com/photos/459301/pexels-photo-459301.jpeg',
  'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
  'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg',
  'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg',
  'https://images.pexels.com/photos/957061/milky-way-starry-sky-night-sky-star-957061.jpeg',
  'https://images.unsplash.com/photo-1501854140801-50d01698950b',
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
  'https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg',
  'https://images.pexels.com/photos/459301/pexels-photo-459301.jpeg',
  'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
  'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg',
  'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg',
  'https://images.pexels.com/photos/957061/milky-way-starry-sky-night-sky-star-957061.jpeg',
  'https://images.unsplash.com/photo-1501854140801-50d01698950b',
  // ... add 5–20 more real images
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
        backgroundImage="/path/to/pixel-art-bg.jpg" // Replace with actual image path
      />
      <Gallery />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default PixelArtPage;