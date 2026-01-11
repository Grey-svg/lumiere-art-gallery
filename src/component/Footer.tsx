import React from "react";
import { ExternalLink } from "lucide-react";

const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h3 className="text-2xl font-light mb-2">Rotimi Semilore</h3>
          <p className="text-gray-400">Architect</p>
        </div>
        <div className="flex gap-6">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center">
        <p className="text-gray-400 text-sm">
          © 2024 Rotimi Semilore Architecture. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
