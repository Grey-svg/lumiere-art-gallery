// src/components/Collection.tsx
import React from 'react';
import art1 from '../assets/image/art1.jpg'; // keep your local import if needed

// Type definition for each artwork
interface Artwork {
  id: number;
  src: string;        // can be local import or remote URL
  alt: string;
  title?: string;     // optional: for future tooltip/caption
}

// Props for the Collection component (makes it reusable & configurable)
interface CollectionProps {
  artworks: Artwork[];
  title?: string;                // default: "COLLECTION"
  maxWidth?: string;             // e.g. "max-w-7xl", "max-w-5xl"
  columns?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
  imageHeight?: string;          // e.g. "h-48", "h-64"
  className?: string;            // additional classes for the section
}

const Collection: React.FC<CollectionProps> = ({
  artworks,
  title = "COLLECTION",
  maxWidth = "max-w-7xl",
  columns = {
    mobile: 2,
    tablet: 3,
    desktop: 4,
  },
  imageHeight = "h-56",
  className = "",
}) => {
  return (
    <section className={`bg-white py-16 md:py-20 ${className}`}>
      <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${maxWidth}`}>
        {/* Header */}
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-lg md:text-xl font-semibold tracking-widest uppercase text-black">
            {title}
          </h2>
          <div className="mt-3 h-0.5 w-16 bg-black mx-auto md:mx-0" />
        </div>

        {/* Responsive Masonry-like Gallery */}
        <div
          className={`
            grid gap-4 sm:gap-6 
            grid-cols-${columns.mobile} 
            md:grid-cols-${columns.tablet} 
            lg:grid-cols-${columns.desktop}
          `}
        >
          {artworks.map((art) => (
            <div
              key={art.id}
              className="
                group relative overflow-hidden rounded-md shadow-sm
                transition-all duration-300 hover:shadow-md hover:scale-[1.02]
              "
            >
              <img
                src={art.src}
                alt={art.alt}
                className={`
                  w-full ${imageHeight} object-cover object-center
                  transition-transform duration-500 group-hover:scale-110
                `}
                loading="lazy"
              />

              {/* Optional subtle overlay + title on hover */}
              {art.title && (
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm font-medium">
                    {art.title}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Default artworks (you can export this too or keep it separate)
export const defaultArtworks: Artwork[] = [
  { id: 1, src: art1, alt: "Artwork 1", title: "Golden Hour" },
  { id: 2, src: "/images/art2.jpg", alt: "Artwork 2", title: "Abstract Flow" },
  { id: 3, src: "/images/art3.jpg", alt: "Artwork 3" },
  { id: 4, src: "/images/art4.jpg", alt: "Artwork 4" },
  { id: 5, src: "/images/art5.jpg", alt: "Artwork 5" },
  { id: 6, src: "/images/art6.jpg", alt: "Artwork 6" },
  { id: 7, src: "/images/art7.jpg", alt: "Artwork 7" },
  { id: 8, src: "/images/art8.jpg", alt: "Artwork 8" },
  { id: 9, src: "/images/art9.jpg", alt: "Artwork 9" },
  // Add more as needed...
];

export default Collection;