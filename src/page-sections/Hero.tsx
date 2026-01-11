// src/components/Hero.tsx
import React from 'react';

interface HeroProps {
  firstWord: string;
  firstColor: string;
  secondWord: string;
  secondColor: string;
  buttonText: string;
  buttonBgColor: string;
  buttonTextColor: string;
  backgroundImage: string;
}

const Hero: React.FC<HeroProps> = ({
  firstWord,
  firstColor,
  secondWord,
  secondColor,
  buttonText,
  buttonBgColor,
  buttonTextColor,
  backgroundImage,
}) => {
  return (
    <section
      className="relative flex flex-col items-center justify-center h-96 bg-cover bg-center text-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1 className="text-8xl font-bold uppercase">
        <span className={firstColor}>{firstWord}</span>
        <span className={secondColor}> {secondWord}</span>
      </h1>
      <button
        className={`mt-4 px-6 py-2 font-bold uppercase ${buttonBgColor} ${buttonTextColor} hover:opacity-90`}
      >
        {buttonText}
      </button>
    </section>
  );
};

export default Hero;