import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroProps {
  onBookAppointment: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookAppointment }) => {
  return (
    <>
      {/* Welcome Banner — inspired by original lifebalanceoxford.com */}
      <section className="relative bg-slate-900 overflow-hidden">
        {/* Background image with dark overlay */}
        <div className="absolute inset-0">
          <img
            src="/hero-top.jpg"
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/90" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <p className="text-teal-400 font-medium text-sm tracking-widest uppercase mb-6">
            Oxford, Mississippi
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
            Life Balance Oxford{' '}
            <span className="text-teal-400">is ready to help.</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-4 leading-relaxed">
            High-quality psychiatric treatment for clients twelve years of age and older. Serving North Mississippi, including Ole Miss students, faculty, and staff.
          </p>
          <p className="text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">
            We provide medication management for mental health needs and cooperate with local medical providers and counselors to ensure our clients enjoy well-balanced lives.
          </p>

          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {['Depression', 'Anxiety', 'ADHD', 'Bipolar Disorder', 'PTSD', 'Eating Disorders', 'Addiction'].map(condition => (
              <span key={condition} className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full text-sm text-slate-200 font-medium">
                {condition}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={onBookAppointment}
              className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors text-lg"
            >
              Fill Out Intake Paperwork
            </button>
            <a
              href="tel:6626404004"
              className="inline-flex justify-center items-center gap-2 px-8 py-4 border border-slate-600 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors text-lg"
            >
              <Phone size={18} />
              (662) 640-4004
            </a>
          </div>
        </div>
      </section>

      {/* Main Hero — current site design */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-14 md:py-24">

            {/* Left Column */}
            <div className="flex flex-col items-start lg:col-span-5">
              <p className="text-teal-700 font-medium text-sm tracking-wide mb-4">
                Oxford, Mississippi
              </p>

              <h2 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-slate-900 mb-6 leading-[1.15]">
                Mental health care{' '}
                <span className="text-teal-700">that feels like family.</span>
              </h2>

              <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                Oxford's elite team providing psychiatric evaluations, medication management, and addiction medicine services. We take the time to actually listen.
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
            <div className="relative hidden lg:block lg:col-span-7">
              {/* Soft glow behind the image */}
              <div className="absolute -inset-8 bg-gradient-to-br from-teal-50 via-stone-100 to-transparent rounded-3xl opacity-60" />
              <div className="relative">
                <img
                  src="/hero.png"
                  alt="Life Balance Psychiatric Services — stacked stones representing balance"
                  className="w-full rounded-2xl object-cover hero-image"
                />
              </div>
            </div>

            {/* Mobile hero image — simpler, full-width */}
            <div className="lg:hidden -mx-4 sm:-mx-6">
              <img
                src="/hero.png"
                alt="Balanced stones"
                className="w-full h-80 sm:h-96 object-cover"
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
                <p className="font-semibold text-slate-800 group-hover:text-teal-700 transition-colors">Addiction Medicine</p>
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
    </>
  );
};

export default Hero;