import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroProps {
  onBookAppointment: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookAppointment }) => {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-14 md:py-24">

          {/* Left Column */}
          <div className="flex flex-col items-start">
            <p className="text-teal-700 font-medium text-sm tracking-wide mb-4">
              Oxford, Mississippi
            </p>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-slate-900 mb-6 leading-[1.15]">
              Mental health care{' '}
              <span className="text-teal-700">that feels like family.</span>
            </h1>

            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              We're Casey and Kim — a small team in Oxford providing psychiatric evaluations, medication management, and MAT services. We take the time to actually listen.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={onBookAppointment}
                className="inline-flex justify-center items-center gap-2 px-7 py-3.5 bg-teal-700 text-white rounded-lg font-semibold hover:bg-teal-800 transition-colors"
              >
                Request an Appointment
              </button>
              <a
                href="tel:6626404004"
                className="inline-flex justify-center items-center gap-2 px-7 py-3.5 text-slate-700 border border-slate-200 rounded-lg font-semibold hover:border-slate-300 hover:bg-slate-50 transition-colors"
              >
                <Phone size={16} />
                (662) 640-4004
              </a>
            </div>

            <div className="mt-8 flex items-center gap-5 text-sm text-slate-500">
              <span>✓ Accepting new patients</span>
              <span>✓ In-person & telehealth</span>
            </div>
          </div>

          {/* Right Column: Hero Image — blended into the page */}
          <div className="relative hidden lg:block">
            {/* Soft glow behind the image */}
            <div className="absolute -inset-8 bg-gradient-to-br from-teal-50 via-stone-100 to-transparent rounded-3xl opacity-60" />
            <div className="relative">
              <img
                src="/hero.png"
                alt="Life Balance Psychiatric Services — stacked stones representing balance"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>

          {/* Mobile hero image — simpler, full-width */}
          <div className="lg:hidden -mx-4 sm:-mx-6">
            <img
              src="/hero.png"
              alt="Balanced stones"
              className="w-full h-64 sm:h-80 object-cover"
            />
          </div>

        </div>
      </div>

      {/* Quick Info bar */}
      <div className="border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-slate-100">

            <Link to="/services" className="py-6 px-4 group">
              <p className="text-sm text-slate-400 mb-1">What we do</p>
              <p className="font-semibold text-slate-800 group-hover:text-teal-700 transition-colors">Psychiatric Services</p>
            </Link>

            <Link to="/mat-program" className="py-6 px-4 group">
              <p className="text-sm text-slate-400 mb-1">Specialized care</p>
              <p className="font-semibold text-slate-800 group-hover:text-teal-700 transition-colors">MAT Program</p>
            </Link>

            <Link to="/team" className="py-6 px-4 group hidden lg:block">
              <p className="text-sm text-slate-400 mb-1">Our team</p>
              <p className="font-semibold text-slate-800 group-hover:text-teal-700 transition-colors">Meet Casey & Kim</p>
            </Link>

            <Link to="/contact" className="py-6 px-4 group hidden lg:block">
              <p className="text-sm text-slate-400 mb-1">Location</p>
              <p className="font-semibold text-slate-800 group-hover:text-teal-700 transition-colors">405 Galleria Dr, Oxford</p>
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;