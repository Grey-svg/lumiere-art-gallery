// src/components/ArtCollection.tsx
import React from "react";

const artPieces = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1579783902614-a3db3920b010?w=800&q=80", // flowers still life
    alt: "Floral still life painting",
    aspect: "aspect-[4/5]",
    rowSpan: "row-span-2",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1578926375605-eaf7555635b5?w=800&q=80", // classical dramatic painting
    alt: "Classical dramatic scene",
    aspect: "aspect-square",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1547891654-e66ed7eb9681?w=800&q=80", // abstract fluid orange/blue
    alt: "Abstract fluid art orange blue",
    aspect: "aspect-[3/4]",
    rowSpan: "row-span-2",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1577720119878-8a6d5a8b5335?w=800&q=80", // renaissance portrait style
    alt: "Renaissance style portrait",
    aspect: "aspect-square",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1578926286308-29e9bb6a6d43?w=800&q=80", // classical crowd scene
    alt: "Classical crowd painting",
    aspect: "aspect-[4/5]",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1544964853-0a2c5f522b7e?w=800&q=80", // abstract minimalist figure
    alt: "Minimalist abstract figure",
    aspect: "aspect-[3/5]",
    rowSpan: "row-span-2",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1579783483458-83d02161294e?w=800&q=80", // atmospheric landscape
    alt: "Atmospheric landscape painting",
    aspect: "aspect-[4/3]",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1579783902614-a3db3920b010?w=800&q=80", // retro pop art collage
    alt: "Colorful retro pop art",
    aspect: "aspect-square",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1578926375605-eaf7555635b5?w=800&q=80", // expressive portrait
    alt: "Expressive colorful portrait",
    aspect: "aspect-[2/3]",
  },
];

const ArtCollection = () => {
  return (
    <>
      {/* <div className="h-20 md:h-15 bg-white" /> */}
      <div className="min-h-screen flex justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-10 text-center text-4xl font-light tracking-wider text-gray-800 sm:text-5xl">
            COLLECTION
          </h1>
          <div className="mx-10">
            {/* Masonry grid */}
            <div
              className={`
            grid grid-cols-2 gap-4 
            sm:grid-cols-3 sm:gap-5 
            md:grid-cols-4 md:gap-6 
            lg:grid-cols-5 lg:gap-6
          `}
            >
              {artPieces.map((piece) => (
                <div
                  key={piece.id}
                  className={`
                group relative overflow-hidden rounded-xl bg-gray-200 shadow-sm 
                transition-all duration-300 hover:shadow-l hover:scale-[1.015]
                ${piece.rowSpan || ""}
                ${piece.aspect}
              `}
                >
                  <img
                    src={piece.src}
                    alt={piece.alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Optional subtle overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-chart-5/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArtCollection;
