import React from 'react';

interface HeroProps {
  onBookAppointment: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookAppointment }) => {
  return (
    <section className="relative min-h-hero overflow-hidden">
      {/* Background image — native <img> for highest quality */}
      <img
        src="/hero-top.webp"
        alt="Balanced zen stones along a sunlit riverbank"
        width="1024"
        height="764"
        fetchPriority="high"
        loading="eager"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover object-[center_30%]"
        style={{ willChange: 'transform' }}
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Centered content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-hero px-6 sm:px-12 text-center">
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl text-white mb-5">
          Suboxone Treatment & Psychiatric Care in Oxford, Mississippi
        </h1>
        <p className="font-serif text-lg sm:text-xl text-cream/90 max-w-xl mb-8 italic">
          Personalized care for a balanced life.
        </p>
        <button
          onClick={onBookAppointment}
          className="inline-block px-10 py-3.5 text-white font-serif font-semibold text-base rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-[transform,box-shadow] duration-200 bg-gold-accent"
        >
          New Client Intake
        </button>
      </div>
    </section>
  );
};

export default Hero;