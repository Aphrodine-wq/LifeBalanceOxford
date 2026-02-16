import React, { useState } from 'react';
import Hero from './Hero';
import IntakeModal from './IntakeModal';
import ScrollReveal from './ScrollReveal';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  usePageMeta({
    title: 'Psychiatric Services in Oxford, MS',
    description: 'Life Balance Psychiatric Services in Oxford, MS. Psychiatric evaluations, medication management, addiction medicine, and GeneSight testing. Accepting new patients. Call (662) 640-4004.',
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="animate-fade-in">
      <Hero onBookAppointment={openModal} />

      {/* ===== About Us Section ===== */}
      <section className="py-20 bg-dark-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-8">
              About Us
            </h2>
            <p className="text-lg leading-relaxed mb-10 text-cream">
              At Life Balance, we're redefining the experience of mental health care across North Mississippi.
              Our family-owned and operated practice in Oxford provides compassionate, personalized
              psychiatric care for clients twelve years and older, including Ole Miss students, faculty, and staff.
              We take time to truly understand each patient's story, needs, and goals, ensuring every person
              receives thoughtful, well-rounded support for their overall well-being.
            </p>
            <Link
              to="/team"
              className="inline-block px-8 py-3 border border-white/60 text-white text-sm font-medium rounded hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== Meet Casey Hester Section ===== */}
      <section className="py-16 border-t border-white/10 bg-dark-green">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-3">
                <span className="text-gold-accent">+ </span>
                Meet Casey Hester, PMHNP-BC
              </h2>
              <p className="text-lg font-medium text-cream">
                Psychiatric Nurse Practitioner | Provider at Life Balance
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-10 items-start">
              <div className="md:w-3/5 space-y-5">
                <p className="leading-relaxed text-cream">
                  Casey Hester is a Board-Certified Psychiatric Mental Health Nurse
                  Practitioner dedicated to helping individuals find balance and peace
                  through personalized care. He specializes in <strong className="text-white">Anxiety</strong>, <strong className="text-white">Depression</strong>, and <strong className="text-white">Addiction</strong>, with expertise across a wide range of mental health
                  concerns.
                </p>
                <p className="leading-relaxed text-cream">
                  A passionate advocate for mental health, Casey is deeply committed
                  to supporting his community and making a positive impact. Outside of
                  work, he enjoys trout fishing, golfing, and spending time with his
                  Rottweiler, Steve.
                </p>
              </div>
              <div className="md:w-2/5 flex justify-center">
                <img
                  src="/casey.png"
                  alt="Casey Hester, PMHNP-BC"
                  className="w-48 h-48 md:w-56 md:h-56 object-cover object-top rounded"
                  loading="lazy"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== Our Services Section ===== */}
      <section className="py-16 border-t border-white/10 bg-dark-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-2">
              Our Services
            </h2>
            <div className="w-12 border-t-2 border-white/40 mb-8"></div>
            <p className="leading-relaxed text-lg text-cream">
              At Life Balance, we offer a comprehensive range of psychiatric services tailored to
              each individual's unique needs. Our care goes beyond prescriptions — we take the
              time to understand your story and create a treatment plan that supports your long-term
              well-being. From personalized medication management to Medication-Assisted Treatment
              (MAT) with Suboxone and Sublocade for those on their recovery journey, our goal is
              to help every patient achieve stability and lasting balance. We also provide psychiatric
              evaluations, ongoing supportive care, and proactive treatment options that promote
              overall mental and emotional wellness.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== Contact Us Section ===== */}
      <section className="py-16 border-t border-white/10 bg-dark-green">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Contact Us
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">
              {/* Address */}
              <div>
                <h3 className="font-bold text-white text-lg mb-3 underline decoration-1 underline-offset-4">
                  Address
                </h3>
                <a
                  href="https://maps.app.goo.gl/qKBd2RMZGnL2wyBUA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-relaxed hover:text-white transition-colors text-cream"
                >
                  405 Galleria Drive, Suite E, Oxford,<br />
                  MS 38655
                </a>
              </div>

              {/* Contact */}
              <div>
                <h3 className="font-bold text-white text-lg mb-3 underline decoration-1 underline-offset-4">
                  Contact
                </h3>
                <a
                  href="tel:6626404004"
                  className="block mb-3 hover:text-white transition-colors text-cream"
                >
                  (662) 640-4004
                </a>
                {/* Social Icons */}
                <div className="flex justify-center gap-4 mb-3">
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80" aria-label="Facebook">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                  </a>
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80" aria-label="Instagram">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                  </a>
                </div>
                <a
                  href="mailto:kim@lifebalanceoxford.com"
                  className="hover:text-white transition-colors underline decoration-1 underline-offset-2 text-cream"
                >
                  kim@lifebalanceoxford.com
                </a>
              </div>

              {/* Hours */}
              <div>
                <h3 className="font-bold text-white text-lg mb-3 underline decoration-1 underline-offset-4">
                  Hours
                </h3>
                <div className="space-y-1 text-cream">
                  <p>Monday - Thursday&nbsp; 8:00 am – 5:00 pm</p>
                  <p>Friday&nbsp; 8:00 am – 12:00 pm</p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-lg overflow-hidden shadow-lg h-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.434458564253!2d-89.5663673236086!3d34.36437597305952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88807b1a2f96303d%3A0x6a0a0a0a0a0a0a0a!2s405%20Galleria%20Dr%20Ste%20E%2C%20Oxford%2C%20MS%2038655!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                className="border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Life Balance Psychiatric Services location"
              ></iframe>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== Footer CTA ===== */}
      <section className="py-10 border-t border-white/10 bg-grey-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-serif text-xl font-medium mb-6 text-white">
            Prioritize your mental health today.
          </p>
          <button
            onClick={openModal}
            className="inline-block px-10 py-3.5 text-white font-serif font-semibold text-base rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 bg-gold-accent"
          >
            New Client Intake
          </button>
        </div>
      </section>

      <IntakeModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Home;
