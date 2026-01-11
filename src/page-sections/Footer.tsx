// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16 px-8 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Left - Brand & Description */}
        <div className="text-center md:text-left">
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Lumière Arts</h3>
          <p className="mt-3 text-gray-400 text-lg">
            Art & History exploration.
          </p>
        </div>

        {/* Right - Socials */}
        <div className="flex flex-col items-center md:items-end">
          <span className="text-gray-300 uppercase tracking-wider text-sm mb-3 font-medium">
            Socials
          </span>
          <div className="flex gap-8 text-xl md:text-2xl">
            <a
              href="#"
              className="hover:text-gray-300 transition-colors"
              aria-label="Instagram"
            >
              Instagram
            </a>
            <a
              href="#"
              className="hover:text-gray-300 transition-colors"
              aria-label="Facebook"
            >
              Facebook
            </a>
            <a
              href="#"
              className="hover:text-gray-300 transition-colors"
              aria-label="Pinterest"
            >
              Pinterest
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-500 text-sm border-t border-gray-800 pt-8">
        © {new Date().getFullYear()} Lumière Arts. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;