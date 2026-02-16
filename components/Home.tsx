import React, { useState } from 'react';
import Hero from './Hero';
import IntakeModal from './IntakeModal';
import ScrollReveal from './ScrollReveal';
import { ArrowRight, Star, Stethoscope, Brain, Pill, Dna } from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';

const reviews = [
  {
    name: 'Leah',
    text: 'Casey has helped me more than anyone else has! I have spent years seeing different doctors and he is the only one that has ever helped me! He shows compassion and empathy and doesn\'t just treat you as a "number". He genuinely cares. His receptionist, Kim, is also amazing! They both feel like family!',
  },
  {
    name: 'Joshua Magruder',
    text: 'Casey is the best! He is kind, caring, and listens with no judgment! His office staff is amazing — Kim is always helpful and prompt if you need questions answered! Highly recommend!',
  },
  {
    name: 'Raegan Banks',
    text: 'I have been seeing Casey since August 2023, and I can confidently say that my life has drastically changed for the better. I was scared to seek psychiatric help for a long time, but during my first appointment, I quickly realized I was in the right place.',
  },
  {
    name: 'Kaylen Taylor',
    text: 'If you haven\'t made that call to get the help you NEED, please do it now. Casey has changed my entire outlook on life! Basically saved me! He takes his time with his patients and has more than enough patience to hear you out!',
  },
  {
    name: 'Ava Barbey',
    text: 'I genuinely cannot express enough how grateful I am for the care and support I\'ve received from Casey Hester. From the very first appointment, I knew I was in the hands of someone truly special.',
  },
  {
    name: 'Mason Wissert',
    text: 'I\'ve been seeing Casey for a couple of years now. I found him when I moved into town & needed a new psychiatrist. I appreciate his genuine concern for my mental health.',
  },
];

const services = [
  {
    icon: Stethoscope,
    title: 'Psychiatric Evaluations',
    desc: 'In-depth initial assessments where we take the time to understand your full picture — not just a checklist of symptoms.',
    accent: 'bg-teal-50 text-teal-700',
  },
  {
    icon: Pill,
    title: 'Medication Management',
    desc: 'Ongoing consultations to track how you\'re doing and adjust your treatment. We follow up like we\'re supposed to.',
    accent: 'bg-slate-100 text-slate-600',
  },
  {
    icon: Brain,
    title: 'Addiction Medicine',
    desc: 'Opioid recovery support with Suboxone and Sublocade, paired with counseling. Judgment-free, always.',
    accent: 'bg-teal-50 text-teal-700',
  },
  {
    icon: Dna,
    title: 'GeneSight Testing',
    desc: 'Genetic testing that helps us figure out which medications are most likely to work for your specific biology.',
    accent: 'bg-amber-50 text-amber-700',
  },
];

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

      {/* About Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-snug">
                We started Life Balance because we felt like patients deserved better.
              </h2>
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>
                  Too many clinics cycle patients through in 15 minutes. We do things differently — our evaluations are thorough, our follow-ups are real conversations, and we genuinely care about what happens after you leave our office.
                </p>
                <p>
                  Whether you're dealing with anxiety, depression, ADHD, or navigating recovery through our addiction medicine program, you'll be treated like a person here, not a chart number.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  to="/team"
                  className="inline-flex items-center gap-2 text-teal-700 font-semibold hover:text-teal-800 transition-colors"
                >
                  More about our team <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services — cards with icons instead of identical borders */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
              <div>
                <p className="text-sm text-teal-700 font-medium tracking-wide mb-3">What We Treat</p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 leading-snug max-w-xl">
                  Focused on the conditions that affect everyday life.
                </h2>
              </div>
              <Link
                to="/services"
                className="mt-4 md:mt-0 inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-lg text-sm font-semibold hover:bg-slate-800 transition-colors"
              >
                All services <ArrowRight size={15} />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {services.map((svc, i) => (
              <ScrollReveal key={svc.title} delay={i * 80}>
                <div className="border border-slate-100 rounded-xl p-6 hover:border-slate-200 hover:shadow-sm transition-all group h-full">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${svc.accent}`}>
                    <svc.icon size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{svc.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance / Payment — different layout: no teal label */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
              <div className="lg:col-span-1">
                <h2 className="font-serif text-2xl md:text-3xl font-bold mb-3 leading-snug">
                  Insurance & payment
                </h2>
                <p className="text-slate-300 leading-relaxed">
                  No surprises. If you have questions about coverage, give Kim a call — she'll help you figure it out.
                </p>
              </div>
              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                  <h3 className="font-semibold text-white mb-2">Accepted Insurance</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    We accept most major insurance plans. Call our office to verify your specific coverage before your visit.
                  </p>
                </div>
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                  <h3 className="font-semibold text-white mb-2">Self-Pay Options</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Self-pay options are available. Cash, credit, and debit accepted. Call our office for details.
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-6 text-sm text-slate-400">
              Questions? Call <a href="tel:6626404004" className="text-teal-400 font-medium hover:text-teal-300">(662) 640-4004</a> and ask for Kim.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Google Reviews — featured review + grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
              <div>
                <p className="text-sm text-teal-700 font-medium tracking-wide mb-3">Patient Reviews</p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 leading-snug">
                  Don't just take our word for it.
                </h2>
              </div>
              <div className="mt-4 md:mt-0 flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star key={i} size={18} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <span className="text-slate-600 text-sm font-medium">5.0 on Google</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Featured review */}
          <ScrollReveal>
            <div className="bg-stone-50 rounded-2xl p-8 md:p-10 mb-6 border border-stone-100">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map(s => (
                  <Star key={s} size={16} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-slate-700 text-lg md:text-xl leading-relaxed font-serif italic max-w-3xl">
                "{reviews[0].text}"
              </p>
              <p className="mt-5 text-slate-900 font-semibold">{reviews[0].name}</p>
            </div>
          </ScrollReveal>

          {/* Remaining reviews */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {reviews.slice(1).map((review, i) => (
              <ScrollReveal key={review.name} delay={i * 60}>
                <div className="bg-stone-50 rounded-xl p-6 h-full flex flex-col border border-stone-100">
                  <div className="flex items-center gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map(s => (
                      <Star key={s} size={12} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed flex-1">
                    "{review.text}"
                  </p>
                  <p className="mt-4 text-slate-900 font-semibold text-sm">{review.name}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 leading-snug">
                  Oxford's elite team.
                </h2>
              </div>
              <Link
                to="/team"
                className="mt-4 md:mt-0 text-teal-700 font-semibold hover:text-teal-800 transition-colors inline-flex items-center gap-1"
              >
                Meet everyone <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: 'Casey Hester', role: 'Psychiatric NP', image: '/casey.png' },
              { name: 'Kim Underwood', role: 'Office Manager', image: '/kim.png' },
            ].map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 100}>
                <Link to="/team" className="group block">
                  <div className="aspect-[4/5] rounded-xl overflow-hidden mb-4 bg-gradient-to-b from-slate-100 to-slate-200">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
                  <p className="text-slate-500 text-sm">{member.role}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — full-width teal instead of plain white */}
      <section className="py-16 bg-teal-700">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-serif text-3xl font-bold text-white mb-4">
              Ready to get started?
            </h2>
            <p className="text-teal-100 text-lg mb-8">
              Give us a call or fill out our intake form. We usually get back to you within one business day.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={openModal}
                className="px-7 py-3.5 bg-white text-teal-700 rounded-lg font-semibold hover:bg-slate-50 transition-colors"
              >
                Fill Out Intake Form
              </button>
              <a
                href="tel:6626404004"
                className="px-7 py-3.5 border border-teal-500 text-white rounded-lg font-semibold hover:bg-teal-600 transition-colors"
              >
                Call (662) 640-4004
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Google Map */}
      <section className="bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <ScrollReveal>
            <div className="text-center mb-8">
              <p className="text-sm text-teal-700 font-medium tracking-wide mb-3">Find Us</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                405 Galleria Drive, Suite E
              </h2>
              <p className="text-slate-500 text-lg">Oxford, MS 38655</p>
            </div>
            <div className="aspect-[16/7] rounded-xl overflow-hidden bg-slate-100 shadow-sm">
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

      <IntakeModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Home;
