import React from 'react';

interface HeroProps {
  onBookAppointment: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookAppointment }) => {
  return (
    <section className="relative min-h-hero overflow-hidden">
      {/* Background image */}
      <img
        src="/hero-top.jpg"
        alt="Peaceful countryside landscape"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Centered content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-hero px-6 sm:px-12 text-center">
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-2xl text-white mb-8">
          Personalized Psychiatric Care for a Balanced Life
        </h1>
        <button
          onClick={onBookAppointment}
          className="inline-block px-10 py-3.5 text-white font-serif font-semibold text-base rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 bg-gold-accent"
        >
          New Client Intake
        </button>
      </div>
    </section>
  );
};

export default Hero;