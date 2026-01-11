// import { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const HeroSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const heroImages = [
//     "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800&q=80",
//     "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800&q=80",
//     "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80",
//     "https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?w=800&q=80",
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % heroImages.length);
//     }, 4000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="relative flex flex-col md:flex-row min-h-[600px] md:h-screen bg-[#72655e] overflow-hidden">

//       {/* Left Content Area */}
//       <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 py-12 md:py-0 text-white text-center md:text-left">
//         <h1 className="text-5xl md:text-7xl font-serif mb-6">
//           <span className="text-[#d9a05b]">Lumiere</span> Arts
//         </h1>
//         <p className="text-lg md:text-xl leading-relaxed text-gray-200 max-w-md mx-auto md:mx-0">
//           Lumière Arts is a digital art gallery that showcases the evolution of
//           creativity through Heritage, PixelArt, and Modern art in a simple and
//           interactive way.
//         </p>
//       </div>

//       {/* The "Explore" Button - The Bridge */}
//       {/* This div sits exactly in the middle of the screen on desktop */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block">
//         <button className="w-32 h-32 rounded-full bg-[#72655e] text-white font-semibold text-lg shadow-xl hover:scale-105 transition-transform flex items-center justify-center border-4 border-transparent hover:border-white/20">
//           Explore
//         </button>
//       </div>

//       {/* Mobile Explore Button (Simple version) */}
//       <div className="md:hidden flex justify-center pb-8">
//          <button className="px-8 py-3 rounded-full bg-white text-[#72655e] font-bold">
//             Explore
//          </button>
//       </div>

//       {/* Right Image/Slideshow Area */}
//       <div className="w-full md:w-1/2 h-[400px] md:h-full relative">
//         {heroImages.map((img, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
//               index === currentSlide ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             <img
//               src={img}
//               alt="Art"
//               className="w-full h-full object-cover"
//             />
//             {/* Dark overlay to help text/button pop if needed */}
//             <div className="absolute inset-0 bg-black/10" />
//           </div>
//         ))}

//         {/* Navigation Dots */}
//         <div className="absolute bottom-6 right-6 flex gap-2">
//           {heroImages.map((_, i) => (
//             <div
//               key={i}
//               className={`h-1 transition-all ${i === currentSlide ? "w-8 bg-white" : "w-2 bg-white/50"}`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import { useState, useEffect } from "react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800&q=80",
    "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800&q=80",
    "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    /* h-[45vh] makes it take up less than half the screen on mobile, 
       md:h-screen makes it full screen on laptop 
    */
    <section className="relative flex flex-row h-[45vh] md:h-screen bg-[#72655e] overflow-hidden">
      {/* LEFT SIDE: Text Content */}
      <div className="w-1/2 flex flex-col justify-center items-center px-4 md:px-12 text-white text-center">
        <h1 className="text-xl sm:text-3xl md:text-7xl font-serif mb-2 md:mb-6 leading-tight">
          <span className="text-[#d9a05b]">Lumiere</span> Arts
        </h1>
        <p className="text-[9px] sm:text-sm md:text-xl leading-relaxed text-gray-200 max-w-[120px] sm:max-w-xs md:max-w-md">
          Lumière Arts is a digital art gallery that showcases the evolution of
          creativity through Heritage, PixelArt, and Modern art in a simple and
          interactive way.
        </p>
      </div>
      {/* RIGHT SIDE: Slideshow */}
      <div className="w-1/2 h-full relative">
        {heroImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Art"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* THE EXPLORE BUTTON: Circular and Centered on the seam */}
      {/* Mobile: w-16 h-16 (smaller circle)
          Desktop: md:w-32 md:h-32 (larger circle)
      */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
        <button className="w-16 h-16 md:w-32 md:h-32 rounded-full bg-[#72655e] text-white font-semibold text-lg shadow-xl hover:scale-105 transition-transform flex items-center justify-center border-4 border-transparent hover:border-white/20">
          Explore
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
