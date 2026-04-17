import React from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';

type Service = {
  title: string;
  description: string;
  tag: string;
  primary?: { label: string; to: string };
  secondary?: { label: string; to: string }[];
};

const Services: React.FC = () => {
  usePageMeta({
    title: 'Services',
    description: 'Psychiatric evaluations, medication management, addiction treatment, Suboxone and Sublocade prescribing, GeneSight testing, and ADHD assessment coordination at Life Balance in Oxford, MS.',
  });

  const services: Service[] = [
    {
      title: 'Psychiatric Evaluations',
      description: "Your first visit is an in-depth assessment — we take the time to understand your full history, your goals, and what hasn't worked before. This isn't a checklist appointment.",
      tag: 'Initial Visit',
      primary: { label: 'Book appointment', to: '/contact' },
    },
    {
      title: 'Medication Management',
      description: "Ongoing follow-up visits to track how you're responding, adjust dosages, and check in on how you're really doing. We don't rush these.",
      tag: 'Ongoing Care',
      primary: { label: 'Book appointment', to: '/contact' },
    },
    {
      title: 'Addiction Treatment',
      description: "Outpatient addiction treatment for opioid use disorder, alcohol use disorder, and co-occurring anxiety, depression, or trauma. Medication-assisted treatment combined with real psychiatric care — same provider, every visit.",
      tag: 'Recovery',
      primary: { label: 'Our addiction treatment approach', to: '/addiction-treatment-oxford-ms' },
      secondary: [
        { label: 'Suboxone & Sublocade treatment', to: '/suboxone-doctor-oxford-ms' },
        { label: 'MAT program detail', to: '/mat-program' },
      ],
    },
    {
      title: 'GeneSight Testing',
      description: 'A genetic test that shows us which psychiatric medications are likely to work best based on your DNA. Takes some of the guesswork out of treatment.',
      tag: 'Precision Medicine',
      primary: { label: 'Book appointment', to: '/contact' },
    },
    {
      title: 'ADHD Assessment Coordination',
      description: 'We work with local providers to coordinate comprehensive ADHD evaluations and build appropriate treatment plans.',
      tag: 'Collaborative',
      primary: { label: 'Book appointment', to: '/contact' },
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="border-b border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-teal-700 font-medium tracking-wide mb-3">What We Offer</p>
          <h1 className="font-serif text-4xl font-bold text-slate-900 mb-4">Our Services</h1>
          <p className="text-xl text-slate-600 max-w-2xl">
            We keep our scope focused so we can do a few things really well.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-0 divide-y divide-slate-100">
          {services.map((service, index) => (
            <div key={index} className="py-10 first:pt-0 last:pb-0">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1 max-w-2xl">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-slate-900">{service.title}</h3>
                    <span className="text-xs font-medium text-slate-400 bg-slate-50 px-2.5 py-1 rounded">{service.tag}</span>
                  </div>
                  <p className="text-slate-600 text-lg leading-relaxed">{service.description}</p>

                  {service.secondary && service.secondary.length > 0 && (
                    <ul className="mt-5 space-y-2">
                      {service.secondary.map((s, i) => (
                        <li key={i}>
                          <Link
                            to={s.to}
                            className="text-slate-700 hover:text-teal-700 text-base underline decoration-teal-700/40 decoration-1 underline-offset-4 hover:decoration-teal-700 transition-colors"
                          >
                            {s.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="flex-shrink-0">
                  {service.primary && (
                    <Link
                      to={service.primary.to}
                      className="text-teal-700 font-semibold hover:text-teal-800 text-sm transition-colors inline-flex items-center gap-2"
                    >
                      {service.primary.label}
                      <span aria-hidden="true">→</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-slate-900 rounded-xl p-8 md:p-12">
          <div className="max-w-2xl">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3">Have questions about what we treat?</h2>
            <p className="text-slate-300 mb-6 text-lg">
              Give us a call. Kim can walk you through what to expect and help you figure out if we're a good fit.
            </p>
            <a href="tel:6626404004" className="inline-block bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
              Call (662) 640-4004
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
