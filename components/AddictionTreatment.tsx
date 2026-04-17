import React from 'react';
import { Phone, ArrowRight, ShieldCheck, Clock, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';

const AddictionTreatment: React.FC = () => {
    usePageMeta({
        title: 'Addiction Treatment in Oxford, MS',
        description: 'Addiction treatment in Oxford, Mississippi for opioid use disorder, alcohol use disorder, and substance recovery. Medication-assisted treatment, counseling, and ongoing care from a board-certified psychiatric provider. Call (662) 640-4004.',
        path: '/addiction-treatment-oxford-ms',
    });

    const conditions = [
        { name: 'Opioid Use Disorder', detail: 'Prescription opioids, heroin, fentanyl' },
        { name: 'Alcohol Use Disorder', detail: 'Problem drinking, dependence, withdrawal support' },
        { name: 'Co-occurring Mental Health', detail: 'Anxiety, depression, trauma alongside substance use' },
        { name: 'Early Recovery Support', detail: 'Relapse prevention, stability, long-term wellness' },
    ];

    const pillars = [
        {
            icon: ShieldCheck,
            title: 'Judgment-free care',
            body: 'Addiction is a medical condition. We treat it like one — with the same respect we give every other patient.',
        },
        {
            icon: Clock,
            title: 'Same provider, every visit',
            body: 'You see Casey Hester, PMHNP-BC. No rotating staff. No starting over. Continuity is how recovery actually holds.',
        },
        {
            icon: Heart,
            title: 'Whole-person approach',
            body: 'Medication is one tool. We also address the anxiety, depression, and life stress that often sit underneath use.',
        },
    ];

    return (
        <div className="bg-white min-h-screen animate-fade-in">
            {/* Hero */}
            <section className="bg-dark-green py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-sm text-gold-accent font-medium tracking-wide mb-3">Addiction Treatment · Oxford, MS</p>
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 max-w-3xl">
                        Recovery care that treats you like a person, not a case file.
                    </h1>
                    <p className="text-xl text-cream max-w-2xl leading-relaxed mb-8">
                        Life Balance provides addiction treatment in Oxford, Mississippi for adults and adolescents 12 and older.
                        We offer medication-assisted treatment, medication management, and coordinated counseling — all under
                        one roof, from a board-certified provider who knows your name.
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
                            to="/suboxone-doctor-oxford-ms"
                            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/60 text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
                        >
                            Learn about Suboxone treatment
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Intro paragraph */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
                        What addiction treatment looks like here
                    </h2>
                    <div className="space-y-5 text-lg text-slate-600 leading-relaxed">
                        <p>
                            If you're searching for addiction treatment in Oxford, MS, you've probably already tried to figure
                            out whether you need rehab, outpatient care, a detox program, or just somewhere to start. The
                            honest answer for most people is: the first step is an honest conversation with a provider who
                            isn't going to rush you.
                        </p>
                        <p>
                            At Life Balance, recovery starts with a thorough psychiatric evaluation. We listen to your history,
                            what you've used, what's worked, what hasn't, and what's actually going on in your life right now.
                            From there, we build a treatment plan that fits you — which may include medication-assisted
                            treatment (MAT), medication management for underlying mental health conditions, counseling
                            referrals, and regular follow-up.
                        </p>
                        <p>
                            You do not need to be "rock bottom" to start. If substance use is costing you sleep, work,
                            relationships, or peace of mind — that's enough.
                        </p>
                    </div>
                </div>
            </section>

            {/* Conditions we treat */}
            <section className="py-20 bg-stone-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-serif text-3xl font-bold text-slate-900 mb-3">Conditions we treat</h2>
                    <p className="text-lg text-slate-600 mb-10 max-w-2xl">
                        We focus on outpatient addiction medicine alongside comprehensive psychiatric care.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {conditions.map((c, i) => (
                            <div key={i} className="bg-white rounded-lg p-6 border border-stone-200">
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{c.name}</h3>
                                <p className="text-slate-600">{c.detail}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Life Balance */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-serif text-3xl font-bold text-slate-900 mb-12 max-w-2xl">
                        Why people choose Life Balance for recovery care
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {pillars.map((p, i) => {
                            const Icon = p.icon;
                            return (
                                <div key={i}>
                                    <div className="w-12 h-12 rounded-lg bg-dark-green flex items-center justify-center mb-4">
                                        <Icon className="text-gold-accent" size={22} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">{p.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{p.body}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-stone-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-serif text-3xl font-bold text-slate-900 mb-10">Common questions</h2>
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Do I have to go to rehab first?</h3>
                            <p className="text-slate-600 leading-relaxed">
                                No. Most of our patients begin treatment on an outpatient basis directly with us. If a higher
                                level of care is clinically appropriate, we'll tell you and help you coordinate it.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Is this program confidential?</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Yes. Treatment is protected by federal privacy law (42 CFR Part 2 and HIPAA). Your information
                                stays between you and your provider.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Do you accept insurance?</h3>
                            <p className="text-slate-600 leading-relaxed">
                                We accept most major insurance plans and offer self-pay options for patients without coverage.
                                Call (662) 640-4004 and Kim will help you verify coverage before your first visit.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">What areas do you serve?</h3>
                            <p className="text-slate-600 leading-relaxed">
                                We see patients from Oxford, Batesville, New Albany, Water Valley, and throughout North
                                Mississippi. Our office is on Galleria Drive in Oxford.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-dark-green">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to take the first step?
                    </h2>
                    <p className="text-lg text-cream mb-8 max-w-2xl mx-auto">
                        Call our office to schedule a confidential consultation. Most new patients are seen within the week.
                    </p>
                    <a
                        href="tel:6626404004"
                        className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-gold-accent text-white font-serif font-semibold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all"
                    >
                        <Phone size={18} />
                        (662) 640-4004
                    </a>
                </div>
            </section>

            {/* Page-level schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'MedicalWebPage',
                        name: 'Addiction Treatment in Oxford, MS',
                        url: 'https://lifebalanceoxford.com/addiction-treatment-oxford-ms',
                        about: {
                            '@type': 'MedicalCondition',
                            name: 'Substance Use Disorder',
                            alternateName: ['Opioid Use Disorder', 'Alcohol Use Disorder', 'Addiction'],
                        },
                        mainContentOfPage: {
                            '@type': 'MedicalTherapy',
                            name: 'Outpatient Addiction Treatment',
                            description:
                                'Outpatient addiction treatment including medication-assisted treatment, medication management, and coordinated counseling.',
                        },
                        provider: { '@id': 'https://lifebalanceoxford.com/#business' },
                        mainEntity: {
                            '@type': 'FAQPage',
                            mainEntity: [
                                {
                                    '@type': 'Question',
                                    name: 'Do I have to go to rehab first?',
                                    acceptedAnswer: {
                                        '@type': 'Answer',
                                        text: 'No. Most patients begin outpatient treatment directly with us. If a higher level of care is clinically appropriate, we will coordinate it.',
                                    },
                                },
                                {
                                    '@type': 'Question',
                                    name: 'Is addiction treatment confidential?',
                                    acceptedAnswer: {
                                        '@type': 'Answer',
                                        text: 'Yes. Treatment is protected by federal privacy law (42 CFR Part 2 and HIPAA).',
                                    },
                                },
                                {
                                    '@type': 'Question',
                                    name: 'Do you accept insurance for addiction treatment?',
                                    acceptedAnswer: {
                                        '@type': 'Answer',
                                        text: 'We accept most major insurance plans and offer self-pay options. Call (662) 640-4004 to verify coverage.',
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

export default AddictionTreatment;
