// Example usage for AncientArtPage.tsx
import React from 'react';
import Navbar from '../component/Navbar';
import Hero from '../page-sections/Hero';
import Gallery from '../page-sections/Gallery';
import ContactForm from '../page-sections/ContactForm';
import Footer from '../page-sections/Footer';

const ancientImages = [
  'https://images.unsplash.com/photo-1599889959407-598566c6e1f1?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1568564321589-3e581d074f9b?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1524397057410-1e775ed476f3?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1000',
  'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&q=80&w=1000',
  'https://images.unsplash.com/photo-1533050487297-09b450131914?auto=format&fit=crop&q=80&w=1000',
  'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=1000',
  'https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?auto=format&fit=crop&q=80&w=1000',
  'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80&w=1000',
  'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
  'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg',
  'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg',
  'https://images.pexels.com/photos/957061/milky-way-starry-sky-night-sky-star-957061.jpeg',
  'https://images.unsplash.com/photo-1501854140801-50d01698950b',
  // ... add 5–20 more real images
];


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
        backgroundImage='https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1000&auto=format&fit=crop' // Replace with actual image path
      />
      <Gallery images={ancientImages} />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default AncientArtPage;