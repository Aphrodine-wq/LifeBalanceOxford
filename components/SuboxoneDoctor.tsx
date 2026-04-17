import React from 'react';
import { Phone, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';

const SuboxoneDoctor: React.FC = () => {
    usePageMeta({
        title: 'Suboxone Doctor in Oxford, MS',
        description: 'Suboxone and Sublocade treatment for opioid use disorder in Oxford, Mississippi. Medication-assisted treatment (MAT) and buprenorphine prescribing from a board-certified psychiatric provider. Call (662) 640-4004.',
        path: '/suboxone-doctor-oxford-ms',
    });

    const timeline = [
        {
            step: '01',
            title: 'Initial call',
            body: 'Call (662) 640-4004. Kim will answer your questions, confirm insurance or self-pay pricing, and get you on the schedule — usually within the same week.',
        },
        {
            step: '02',
            title: 'First appointment',
            body: 'A thorough psychiatric evaluation with Casey Hester, PMHNP-BC. We talk about your history with opioids, any past treatment, and what you want out of recovery.',
        },
        {
            step: '03',
            title: 'Induction',
            body: 'If Suboxone is the right fit, we start you on it. Induction is done safely and on your timeline — at home or in-office depending on your situation.',
        },
        {
            step: '04',
            title: 'Stabilization',
            body: 'Weekly or biweekly follow-up visits while we dial in your dose. Cravings drop. Sleep and appetite come back. Withdrawal stops running your day.',
        },
        {
            step: '05',
            title: 'Maintenance',
            body: 'Monthly visits once you are stable. We keep watching for interactions, monitor your overall mental health, and taper only when you are ready.',
        },
    ];

    const differences = [
        'Board-certified psychiatric provider (not just a prescriber)',
        'Suboxone AND Sublocade (monthly injection) available',
        'Treats co-occurring anxiety, depression, trauma in the same visit',
        'Confidential — protected under 42 CFR Part 2 and HIPAA',
        'Accepts most major insurance plus self-pay options',
        'Same provider every visit — no rotating staff',
    ];

    return (
        <div className="bg-white min-h-screen animate-fade-in">
            {/* Hero */}
            <section className="bg-dark-green py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-sm text-gold-accent font-medium tracking-wide mb-3">Suboxone Doctor · Oxford, MS</p>
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 max-w-3xl">
                        A Suboxone doctor in Oxford who gives you the time and privacy this deserves.
                    </h1>
                    <p className="text-xl text-cream max-w-2xl leading-relaxed mb-8">
                        Medication-assisted treatment using Suboxone (buprenorphine/naloxone) or Sublocade — combined with
                        the full psychiatric care most MAT programs skip. Stop chasing withdrawal. Start building
                        stability.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <a
                            href="tel:6626404004"
                            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gold-accent text-white font-serif font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                        >
                            <Phone size={18} />
                            Call (662) 640-4004
                        </a>
                        <Link
                            to="/addiction-treatment-oxford-ms"
                            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/60 text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
                        >
                            See full addiction treatment
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* What is Suboxone */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
                        What Suboxone actually does
                    </h2>
                    <div className="space-y-5 text-lg text-slate-600 leading-relaxed">
                        <p>
                            Suboxone is a prescription medication that combines <strong className="text-slate-900">buprenorphine</strong> (a partial opioid
                            agonist) with <strong className="text-slate-900">naloxone</strong>. In practical terms: it occupies the same brain receptors
                            that opioids like heroin, fentanyl, hydrocodone, and oxycodone bind to — but in a way that
                            <em> stops cravings and blocks withdrawal without getting you high</em>.
                        </p>
                        <p>
                            People on a properly dosed Suboxone plan usually describe the same experience: within a few days
                            the fog lifts, sleep returns, and the constant hum of "when am I getting more" finally goes quiet.
                            That's not weakness. That's medicine doing what it was designed to do.
                        </p>
                        <p>
                            For patients who'd rather not think about a daily film, we also offer <strong className="text-slate-900">Sublocade</strong>,
                            a monthly injection of extended-release buprenorphine. One shot, done for the month.
                        </p>
                    </div>
                </div>
            </section>

            {/* What to expect timeline */}
            <section className="py-20 bg-stone-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-serif text-3xl font-bold text-slate-900 mb-3">What to expect, step by step</h2>
                    <p className="text-lg text-slate-600 mb-12 max-w-2xl">
                        From your first phone call to steady-state maintenance.
                    </p>
                    <div className="space-y-6">
                        {timeline.map((t) => (
                            <div key={t.step} className="flex gap-6 bg-white rounded-lg p-6 border border-stone-200">
                                <div className="flex-shrink-0">
                                    <div className="text-2xl font-serif font-bold text-gold-accent">{t.step}</div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">{t.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{t.body}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What makes us different */}
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                        <div>
                            <h2 className="font-serif text-3xl font-bold text-slate-900 mb-4">
                                Not every Suboxone clinic is the same.
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Some MAT programs hand you a prescription and a quarterly check-in. That's not care, that's
                                dispensing. Here's what you get at Life Balance:
                            </p>
                        </div>
                        <div className="space-y-3">
                            {differences.map((d, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="text-gold-accent flex-shrink-0 mt-1" size={20} />
                                    <p className="text-slate-700">{d}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-stone-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-serif text-3xl font-bold text-slate-900 mb-10">Common questions about Suboxone treatment</h2>
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Is Suboxone just trading one addiction for another?</h3>
                            <p className="text-slate-600 leading-relaxed">
                                No. Buprenorphine occupies opioid receptors without producing the euphoria that drives
                                addiction. Every major medical body — SAMHSA, ASAM, the CDC — recognizes MAT as the gold
                                standard for opioid use disorder.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">How long will I be on Suboxone?</h3>
                            <p className="text-slate-600 leading-relaxed">
                                As long as it's working for you. Some patients taper off after a year. Others stay on it
                                indefinitely because it's the treatment that keeps them stable. Neither answer is wrong —
                                what's wrong is tapering too soon and relapsing.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Do I need to be in active withdrawal to start?</h3>
                            <p className="text-slate-600 leading-relaxed">
                                You need to be in <em>mild to moderate</em> withdrawal before your first Suboxone dose —
                                otherwise it can trigger precipitated withdrawal. We walk you through exactly how to time
                                it before your induction appointment.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Will my employer find out?</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Not from us. Your treatment is covered under federal confidentiality rules stricter than
                                standard HIPAA. We don't release records to employers without your written consent.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Can I get Suboxone without insurance?</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Yes. We offer transparent self-pay pricing and work with generic buprenorphine/naloxone when
                                insurance isn't an option. Call the office for current rates.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-dark-green">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
                        Same-week appointments available.
                    </h2>
                    <p className="text-lg text-cream mb-8 max-w-2xl mx-auto">
                        If you're ready to start, we're ready to see you. Call during business hours and Kim will get you on
                        the schedule.
                    </p>
                    <a
                        href="tel:6626404004"
                        className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-gold-accent text-white font-serif font-semibold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all"
                    >
                        <Phone size={18} />
                        (662) 640-4004
                    </a>
                    <p className="text-sm text-cream/80 mt-6">
                        Monday – Thursday 8:00 AM – 5:00 PM · Friday 8:00 AM – 12:00 PM
                    </p>
                </div>
            </section>

            {/* Page-level schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'MedicalWebPage',
                        name: 'Suboxone Doctor in Oxford, MS',
                        url: 'https://lifebalanceoxford.com/suboxone-doctor-oxford-ms',
                        about: {
                            '@type': 'MedicalCondition',
                            name: 'Opioid Use Disorder',
                        },
                        mainContentOfPage: {
                            '@type': 'MedicalTherapy',
                            name: 'Medication-Assisted Treatment',
                            alternateName: ['MAT', 'Suboxone Treatment', 'Buprenorphine Treatment'],
                            drug: [
                                { '@type': 'Drug', name: 'Suboxone', activeIngredient: 'Buprenorphine/Naloxone' },
                                { '@type': 'Drug', name: 'Sublocade', activeIngredient: 'Buprenorphine extended-release' },
                            ],
                        },
                        provider: { '@id': 'https://lifebalanceoxford.com/#business' },
                        mainEntity: {
                            '@type': 'FAQPage',
                            mainEntity: [
                                {
                                    '@type': 'Question',
                                    name: 'Is Suboxone just trading one addiction for another?',
                                    acceptedAnswer: {
                                        '@type': 'Answer',
                                        text: 'No. Buprenorphine occupies opioid receptors without producing euphoria. SAMHSA, ASAM, and the CDC all recognize medication-assisted treatment as the gold standard for opioid use disorder.',
                                    },
                                },
                                {
                                    '@type': 'Question',
                                    name: 'How long will I be on Suboxone?',
                                    acceptedAnswer: {
                                        '@type': 'Answer',
                                        text: 'As long as it works for you. Some patients taper off after a year, others remain on maintenance indefinitely. The decision is made together with your provider.',
                                    },
                                },
                                {
                                    '@type': 'Question',
                                    name: 'Do I need to be in withdrawal to start Suboxone?',
                                    acceptedAnswer: {
                                        '@type': 'Answer',
                                        text: 'You need to be in mild to moderate withdrawal before your first dose to avoid precipitated withdrawal. Your provider will guide timing before induction.',
                                    },
                                },
                                {
                                    '@type': 'Question',
                                    name: 'Can I get Suboxone without insurance?',
                                    acceptedAnswer: {
                                        '@type': 'Answer',
                                        text: 'Yes. Life Balance offers transparent self-pay pricing for Suboxone treatment. Call (662) 640-4004 for current rates.',
                                    },
                                },
                            ],
                        },
                    }),
                }}
            />
        </div>
    );
};

export default SuboxoneDoctor;
