import React, { useState } from 'react';
import Hero from './Hero';
import IntakeModal from './IntakeModal';
import ScrollReveal from './ScrollReveal';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  usePageMeta({
    title: 'Psychiatric Services in Oxford, MS',
    description: 'Life Balance Psychiatric Services in Oxford, MS — psychiatric evaluations, medication management, addiction treatment (Suboxone), and GeneSight testing. Accepting new patients. Call (662) 640-4004.',
    keywords: [
      'psychiatrist Oxford MS',
      'psychiatric services Oxford Mississippi',
      'mental health Oxford MS',
      'medication management Oxford',
      'Suboxone Oxford Mississippi',
      'addiction treatment North Mississippi',
      'Casey Hester PMHNP',
      'Life Balance Oxford',
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': 'https://lifebalanceoxford.com/#webpage',
      url: 'https://lifebalanceoxford.com/',
      name: 'Life Balance Psychiatric Services | Oxford, MS',
      isPartOf: { '@id': 'https://lifebalanceoxford.com/#website' },
      about: { '@id': 'https://lifebalanceoxford.com/#business' },
      primaryImageOfPage: { '@id': 'https://lifebalanceoxford.com/#logo' },
      inLanguage: 'en-US',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', 'h2', '[data-speakable]'],
      },
    },
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="animate-fade-in">
      <Hero onBookAppointment={openModal} />

      {/* ===== About Us Section ===== */}
      <section className="py-24 bg-dark-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-10">
              About Us
            </h2>
            <p className="text-lg leading-relaxed mb-12 text-cream">
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
      <section className="py-20 border-t border-white/10 bg-dark-green">
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
                  src="/casey.webp"
                  alt="Casey Hester, PMHNP-BC"
                  width="224"
                  height="224"
                  className="w-48 h-48 md:w-56 md:h-56 object-cover object-top rounded"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== Our Services Section ===== */}
      <section className="py-20 border-t border-white/10 bg-dark-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-2">
              Our Services
            </h2>
            <div className="w-12 border-t-2 border-white/40 mb-8"></div>
            <p className="leading-relaxed text-lg text-cream mb-10">
              At Life Balance, we offer a comprehensive range of psychiatric services tailored to
              each individual's unique needs. Our care goes beyond prescriptions — we take the
              time to understand your story and create a treatment plan that supports your long-term
              well-being. From personalized medication management to Medication-Assisted Treatment
              (MAT) with Suboxone for those on their recovery journey, our goal is
              to help every patient achieve stability and lasting balance. We also provide psychiatric
              evaluations, ongoing supportive care, and proactive treatment options that promote
              overall mental and emotional wellness.
            </p>
            <button
              onClick={openModal}
              className="inline-block px-10 py-3.5 text-white font-serif font-semibold text-base rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-[transform,box-shadow] duration-200 bg-gold-accent"
            >
              New Client Intake
            </button>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== Addiction Care Section ===== */}
      <section className="py-24 border-t border-white/10 bg-dark-green">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-sm tracking-widest uppercase text-gold-accent mb-4">
              Addiction Care
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-3 max-w-2xl leading-tight">
              Real recovery care in Oxford —{' '}
              <span className="italic text-gold-accent font-normal">not a prescription pad.</span>
            </h2>
            <div className="w-12 border-t-2 border-white/40 mb-10"></div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
              <div className="md:col-span-3 space-y-5 text-lg leading-relaxed text-cream">
                <p>
                  We treat opioid use disorder, alcohol use disorder, and the anxiety or depression
                  that often sit underneath — in the same visit, with the same provider, every time.
                  No rotating faces. No fifteen-minute refills. No judgment.
                </p>
                <p>
                  Medication-assisted treatment with Suboxone is the backbone for most
                  of our addiction patients. Combined with real psychiatric care for what's
                  underneath, it's the difference between a prescription and a recovery that
                  actually holds.
                </p>
                <p className="text-cream/80 italic">
                  You don't need to hit rock bottom. You don't need to be sure. You just need to
                  pick up the phone.
                </p>
              </div>

              <div className="md:col-span-2 space-y-6 md:pl-4 md:border-l md:border-white/15">
                <Link to="/addiction-treatment-oxford-ms" className="block group md:pl-6">
                  <span className="block font-serif text-xl text-white group-hover:text-gold-accent transition-colors">
                    Our approach to addiction →
                  </span>
                  <span className="block text-sm text-cream/70 mt-1 leading-relaxed">
                    Conditions we treat, what the first visit looks like, how recovery actually
                    unfolds here.
                  </span>
                </Link>

                <Link to="/suboxone-doctor-oxford-ms" className="block group md:pl-6">
                  <span className="block font-serif text-xl text-white group-hover:text-gold-accent transition-colors">
                    Suboxone treatment →
                  </span>
                  <span className="block text-sm text-cream/70 mt-1 leading-relaxed">
                    How Suboxone works, the induction day walkthrough, side effects, cost
                    transparency.
                  </span>
                </Link>

                <Link to="/mat-program" className="block group md:pl-6">
                  <span className="block font-serif text-xl text-white group-hover:text-gold-accent transition-colors">
                    MAT program →
                  </span>
                  <span className="block text-sm text-cream/70 mt-1 leading-relaxed">
                    All three FDA-approved medications, a realistic year-one timeline, life on
                    MAT.
                  </span>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== Testimonials Section ===== */}
      <Testimonials />

      {/* ===== Find Us — map only, contact details live in footer ===== */}
      <section className="py-20 border-t border-white/10 bg-dark-green">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white text-center mb-3">
              Find Us
            </h2>
            <p className="text-cream text-center mb-10">
              <a
                href="https://maps.app.goo.gl/qKBd2RMZGnL2wyBUA"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white underline decoration-1 underline-offset-4"
              >
                405 Galleria Drive, Suite E · Oxford, MS 38655
              </a>
            </p>
            <div className="rounded-lg overflow-hidden shadow-lg h-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.4!2d-89.5607193!3d34.3655987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88807b6624e78cd5%3A0x16ad515ed93a64f0!2sLife%20Balance%2C%20PLLC!5e0!3m2!1sen!2sus!4v1744977600000!5m2!1sen!2sus"
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

      {/* ===== Service Areas ===== */}
      <section className="py-16 bg-white border-t border-slate-100" aria-labelledby="service-areas-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-sm tracking-widest uppercase text-teal-700 mb-3">Serving North Mississippi</p>
            <h2 id="service-areas-heading" className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
              Psychiatric and addiction care for Oxford and the surrounding communities.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mb-6">
              Our office on Galleria Drive in Oxford sees patients from across Lafayette County and the wider
              North Mississippi region — including Batesville, New Albany, Water Valley, Holly Springs, Pontotoc,
              Bruce, Tupelo, and the Ole Miss community.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
              Life Balance, PLLC is located at 405 Galleria Drive, Suite E, Oxford, MS 38655. Call{' '}
              <a href="tel:6626404004" className="text-teal-700 font-semibold underline decoration-1 underline-offset-4 hover:text-teal-800">
                (662) 640-4004
              </a>{' '}
              or fax (662) 238-4122.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== FAQ — logistical, schema-rich ===== */}
      <FAQ
        theme="dark"
        eyebrow="Common Questions"
        title="What people ask us most"
        items={[
          {
            q: 'Where is Life Balance located?',
            aText:
              'Life Balance, PLLC is located at 405 Galleria Drive, Suite E, Oxford, MS 38655 — in the Galleria shopping center off Jackson Avenue. We serve patients across Lafayette County and North Mississippi.',
            a: (
              <>
                Our office is at <strong>405 Galleria Drive, Suite E, Oxford, MS 38655</strong> — in the Galleria shopping
                center off Jackson Avenue. We see patients from Lafayette County, Batesville, New Albany, Water Valley,
                Holly Springs, Tupelo, and the Ole Miss community.
              </>
            ),
          },
          {
            q: 'How do I schedule an appointment?',
            aText:
              'Call (662) 640-4004 and Kim, our office manager, will answer. She will confirm your insurance, walk through self-pay pricing if needed, and get you on the schedule — usually the same week.',
            a: (
              <>
                Call{' '}
                <a href="tel:6626404004" className="text-gold-accent underline decoration-1 underline-offset-4">
                  (662) 640-4004
                </a>{' '}
                and Kim will answer. She'll confirm your insurance, walk through self-pay pricing if needed, and get
                you on the schedule — usually the same week.
              </>
            ),
          },
          {
            q: 'What are your office hours?',
            aText:
              'Monday through Thursday 8:00 AM to 5:00 PM, Friday 8:00 AM to 12:00 PM. Closed Saturday and Sunday.',
            a: (
              <>
                Monday – Thursday, 8:00 AM – 5:00 PM. Friday, 8:00 AM – 12:00 PM. Closed weekends.
              </>
            ),
          },
          {
            q: 'What ages do you see?',
            aText:
              'Life Balance provides psychiatric care for patients aged 12 and older, including adolescents, Ole Miss students, faculty and staff, and adults of all ages.',
            a: (
              <>
                We see patients <strong>twelve years and older</strong> — including adolescents, Ole Miss students,
                faculty and staff, and adults of all ages.
              </>
            ),
          },
          {
            q: 'What services do you offer?',
            aText:
              'Psychiatric evaluations, medication management for anxiety, depression, bipolar disorder, and ADHD, GeneSight genetic testing, ADHD assessment coordination, and medication-assisted treatment (Suboxone) for opioid use disorder.',
            a: (
              <>
                Psychiatric evaluations, medication management for anxiety, depression, bipolar disorder, and ADHD;
                <Link to="/services" className="text-gold-accent underline decoration-1 underline-offset-4 ml-1">GeneSight genetic testing</Link>;
                ADHD assessment coordination; and{' '}
                <Link to="/addiction-treatment-oxford-ms" className="text-gold-accent underline decoration-1 underline-offset-4">
                  addiction treatment
                </Link>{' '}
                with Suboxone.
              </>
            ),
          },
          {
            q: 'Do you prescribe Suboxone?',
            aText:
              'Yes. Casey Hester, PMHNP-BC, prescribes Suboxone (buprenorphine/naloxone) for opioid use disorder, combined with ongoing psychiatric care.',
            a: (
              <>
                Yes — Casey prescribes{' '}
                <Link to="/suboxone-doctor-oxford-ms" className="text-gold-accent underline decoration-1 underline-offset-4">
                  Suboxone
                </Link>{' '}
                for opioid use disorder, combined with ongoing psychiatric care in the same visit.
              </>
            ),
          },
          {
            q: 'Is addiction treatment confidential?',
            aText:
              'Yes. Substance use treatment records are protected by 42 CFR Part 2, a federal confidentiality rule stricter than standard HIPAA. Employers, family members, and law enforcement cannot access your records without your written consent.',
            a: (
              <>
                Yes. Substance use treatment is protected by <strong>42 CFR Part 2</strong>, a federal rule stricter than
                standard HIPAA. Employers, family members, and law enforcement cannot access your records without your
                written consent.
              </>
            ),
          },
          {
            q: 'Do you accept insurance?',
            aText:
              'Most major insurance plans are accepted. Generic buprenorphine/naloxone is on almost every formulary. Self-pay pricing is also available. Call (662) 640-4004 to verify your specific plan.',
            a: (
              <>
                We accept most major insurance plans and offer self-pay pricing. Generic buprenorphine/naloxone is on
                almost every formulary. Call{' '}
                <a href="tel:6626404004" className="text-gold-accent underline decoration-1 underline-offset-4">
                  (662) 640-4004
                </a>{' '}
                to verify your specific plan.
              </>
            ),
          },
          {
            q: 'How soon can I be seen?',
            aText:
              'Same-week appointments are typically available for new patients. Call (662) 640-4004 to check current availability.',
            a: <>Same-week appointments are typically available for new patients. Call to check current availability.</>,
          },
          {
            q: 'How do providers refer a patient?',
            aText:
              'Providers can submit a referral electronically at lifebalanceoxford.com/referrals, fax the printable referral form to (662) 238-4122, or call (662) 640-4004.',
            a: (
              <>
                Submit a referral electronically at{' '}
                <Link to="/referrals" className="text-gold-accent underline decoration-1 underline-offset-4">
                  lifebalanceoxford.com/referrals
                </Link>
                , fax to (662) 238-4122, or call (662) 640-4004.
              </>
            ),
          },
        ]}
      />

      {/* ===== Footer CTA ===== */}
      <section className="py-14 bg-dark-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-serif text-xl font-medium mb-6 text-white">
            Prioritize your mental health today.
          </p>
          <button
            onClick={openModal}
            className="inline-block px-10 py-3.5 text-white font-serif font-semibold text-base rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-[transform,box-shadow] duration-200 bg-gold-accent"
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
