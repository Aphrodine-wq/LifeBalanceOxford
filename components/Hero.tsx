import React from 'react';

interface HeroProps {
  onBookAppointment: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookAppointment }) => {
  return (
    <section className="relative min-h-hero">
      <div className="flex flex-col lg:flex-row min-h-hero">
        {/* Left side — cream background, large heading */}
        <div
          className="flex items-center justify-center lg:w-1/2 px-8 sm:px-12 lg:px-16 py-16 lg:py-24 bg-cream"
        >
          <h1
            className="font-serif text-4xl sm:text-5xl lg:text-[3.25rem] font-bold leading-tight max-w-md text-dark"
          >
            Personalized Psychiatric Care for a Balanced Life
          </h1>
        </div>

        {/* Right side — stacked stones image */}
        <div className="lg:w-1/2 relative overflow-hidden min-h-hero-image">
          <img
            src="/hero.png"
            alt="Stacked stones representing balance and peace"
            className="w-full h-full object-cover absolute inset-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;