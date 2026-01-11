// src/components/CategoryCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  title: string;
  description: string;
  imageUrl: string;
  linkTo: string;
  /**
   * Optional: custom height for the image container
   * @default "h-64"
   */
  imageHeight?: string;
  /**
   * Optional: additional className for the outer container
   */
  className?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  description,
  imageUrl,
  linkTo,
  imageHeight = 'h-64',
  className = '',
}) => {
  return (
    <Link
      to={linkTo}
      className={`group block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-lg ${className}`}
    >
      <div className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
        {/* Image */}
        <img
          src={imageUrl}
          alt={title}
          className={`w-full ${imageHeight} object-cover transition-transform duration-500 group-hover:scale-110`}
          loading="lazy"
        />

        {/* Overlay gradient + content */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Text content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
          <h3 className="text-2xl font-bold tracking-tight drop-shadow-md">
            {title}
          </h3>

          <p className="mt-2 text-sm text-gray-200 line-clamp-3 drop-shadow">
            {description}
          </p>

          <div className="mt-4 flex items-center text-white font-medium">
            <span className="transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;