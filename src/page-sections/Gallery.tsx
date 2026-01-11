// src/components/Gallery.tsx
import React from 'react';

interface GalleryProps {
  images?: string[];           // optional: array of image URLs
  className?: string;
}

const Gallery: React.FC<GalleryProps> = ({ images = [], className = '' }) => {
  // Fallback placeholders if no images provided
  const placeholderImages = Array(12).fill(null).map((_, i) => ({
    id: i,
    color: `bg-gray-${300 + (i % 7) * 100}`,
  }));

  const displayImages = images.length > 0 ? images : placeholderImages;

  return (
    <section className={`py-16 px-6 md:px-12 bg-white ${className}`}>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[180px] md:auto-rows-[220px]">
        {displayImages.map((img, index) => (
          <div
            key={index}
            className={`
              rounded-xl overflow-hidden shadow-md transition-transform duration-300
              hover:scale-[1.03] hover:shadow-xl
              ${index % 5 === 1 ? 'row-span-2' : ''}
              ${index % 7 === 3 ? 'col-span-2 row-span-1' : ''}
              ${typeof img === 'string' ? '' : img?.color || 'bg-gray-200'}
            `}
          >
            {typeof img === 'string' ? (
              <img
                src={img}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full" /> // placeholder
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;