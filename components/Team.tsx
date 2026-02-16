import React from 'react';
import { usePageMeta } from '../hooks/usePageMeta';

const Team: React.FC = () => {
  usePageMeta({
    title: 'Our Team — Casey Hester & Kim Underwood',
    description: 'Meet Casey Hester, PMHNP-BC, and Kim Underwood at Life Balance Psychiatric Services in Oxford, MS. Oxford\'s elite team that genuinely cares.',
  });
  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <div className="border-b border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-teal-700 font-medium tracking-wide mb-3">Who We Are</p>
          <h1 className="font-serif text-4xl font-bold text-slate-900 mb-4">Meet Our Team</h1>
          <p className="text-xl text-slate-600 max-w-2xl">
            Two people who genuinely care about what they do.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        {/* Casey — Lead Provider */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-2">
            <div className="aspect-[3/4] rounded-xl overflow-hidden bg-gradient-to-b from-slate-100 to-slate-200">
              <img
                src="/casey.png"
                alt="Casey Hester"
                className="w-full h-full object-cover object-top"
                loading="eager"
              />
            </div>
          </div>
          <div className="lg:col-span-3 lg:pt-4">
            <p className="text-sm text-teal-700 font-medium tracking-wide mb-2">Lead Provider</p>
            <h2 className="font-serif text-3xl font-bold text-slate-900 mb-1">Casey Hester</h2>
            <p className="text-slate-500 mb-6">PMHNP-BC</p>

            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
              <p>
                Casey is the primary provider at Life Balance. He specializes in anxiety, depression, and addiction treatment, with a particular focus on making patients feel heard during every visit.
              </p>
              <p>
                More than a clinician, Casey is a mental health advocate committed to making a real impact in the Oxford community. His philosophy is simple: treat the person, not just the symptoms.
              </p>
            </div>

            <div className="mt-8 bg-stone-50 p-5 rounded-lg border-l-[3px] border-l-teal-600">
              <p className="text-slate-700 italic">
                "Outside of work, I enjoy trout fishing, golfing, and spending time with my Rottweiler, Steve."
              </p>
            </div>
          </div>
        </div>

        <hr className="border-slate-100" />

        {/* Kim */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-2">
            <div className="aspect-[4/5] rounded-xl overflow-hidden bg-gradient-to-b from-slate-100 to-slate-200">
              <img
                src="/kim.png"
                alt="Kim Underwood"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
          </div>
          <div className="lg:col-span-3 lg:pt-4">
            <p className="text-sm text-teal-700 font-medium tracking-wide mb-2">Office Manager</p>
            <h2 className="font-serif text-3xl font-bold text-slate-900 mb-1">Kim Underwood</h2>
            <p className="text-slate-600 text-lg leading-relaxed mt-6">
              Kim makes sure everything runs smoothly — from scheduling to insurance questions. She's usually the first person you'll talk to, and she'll make sure you feel welcome from the start.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Team;