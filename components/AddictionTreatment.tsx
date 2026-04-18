import React from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { PlantSketch, PathSketch, HandSketch, WaveRule, ArrowSketch } from './Sketches';

const AddictionTreatment: React.FC = () => {
    usePageMeta({
        title: 'Addiction Treatment in Oxford, MS',
        description: 'Addiction treatment in Oxford, Mississippi for opioid use disorder, alcohol use disorder, and substance recovery. Medication-assisted treatment, counseling, and ongoing care from a board-certified psychiatric provider. Call (662) 640-4004.',
        path: '/addiction-treatment-oxford-ms',
        keywords: [
            'addiction treatment Oxford MS',
            'opioid use disorder Mississippi',
            'alcohol use disorder Oxford',
            'substance abuse treatment Oxford Mississippi',
            'MAT program North Mississippi',
            'outpatient addiction treatment Oxford',
        ],
        breadcrumbs: [
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: 'Addiction Treatment', path: '/addiction-treatment-oxford-ms' },
        ],
        jsonLd: {
            '@context': 'https://schema.org',
            '@type': 'MedicalWebPage',
            '@id': 'https://lifebalanceoxford.com/addiction-treatment-oxford-ms#page',
            name: 'Addiction Treatment in Oxford, MS',
            url: 'https://lifebalanceoxford.com/addiction-treatment-oxford-ms',
            inLanguage: 'en-US',
            isPartOf: { '@id': 'https://lifebalanceoxford.com/#website' },
            about: [
                { '@type': 'MedicalCondition', name: 'Opioid Use Disorder' },
                { '@type': 'MedicalCondition', name: 'Alcohol Use Disorder' },
                { '@type': 'MedicalCondition', name: 'Substance Use Disorder' },
            ],
            mainContentOfPage: {
                '@type': 'WebPageElement',
                cssSelector: 'main',
            },
            publisher: { '@id': 'https://lifebalanceoxford.com/#business' },
        },
    });

    return (
        <div className="bg-white min-h-screen animate-fade-in">

            {/* Opener */}
            <section className="bg-dark-green pt-20 pb-24">
                <div className="max-w-4xl mx-auto px-6">
                    <p className="text-sm tracking-widest uppercase text-gold-accent mb-6">
                        Addiction Treatment &nbsp;·&nbsp; Oxford, MS
                    </p>
                    <h1 className="font-serif text-[2.6rem] md:text-[3.4rem] leading-[1.08] font-semibold text-white mb-8 max-w-3xl">
                        You don't have to hit rock bottom.<br />
                        <span className="text-gold-accent italic font-normal">You just have to pick up the phone.</span>
                    </h1>
                    <p className="text-xl text-cream max-w-2xl leading-relaxed mb-10">
                        Outpatient addiction treatment for adults and adolescents in North Mississippi — opioid use
                        disorder, alcohol use disorder, and the anxiety, depression, or trauma that often sit
                        underneath. One provider. Real conversation. No judgment.
                    </p>
                    <div className="flex flex-wrap items-center gap-5 text-cream">
                        <a href="tel:6626404004" className="text-lg underline decoration-gold-accent decoration-2 underline-offset-[6px] hover:text-white transition-colors">
                            Call (662) 640-4004
                        </a>
                        <span className="opacity-50">·</span>
                        <span className="text-sm opacity-80">Same-week appointments available</span>
                    </div>
                </div>
            </section>

            {/* Letter intro */}
            <section className="py-20">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="font-serif text-2xl md:text-3xl text-slate-900 leading-snug mb-10">
                        If substance use is costing you sleep, work, relationships, or peace of mind —
                        <span className="italic"> that's enough.</span>
                    </div>
                    <p className="text-lg text-slate-600 leading-relaxed mb-5">
                        You don't need a dramatic story, a crisis, a court order, or a stay in rehab to start
                        treatment. Most of our patients walk in because they're tired. Tired of the math, the hiding,
                        the mornings. Tired of pretending the pattern will sort itself out.
                    </p>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Addiction is a medical condition. We treat it the same way we treat any other — with a real
                        evaluation, a real plan, and a real provider who will still be here a year from now.
                    </p>
                </div>
            </section>

            <WaveRule className="text-slate-300 w-40 mx-auto my-4" />

            {/* What we treat */}
            <section className="py-20 bg-[#faf7f1]">
                <div className="max-w-4xl mx-auto px-6">
                    <p className="text-sm tracking-widest uppercase text-slate-500 mb-3">One — what we treat</p>
                    <h2 className="font-serif text-4xl text-slate-900 mb-6 leading-tight max-w-2xl">
                        The conditions we see most.
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-12 max-w-2xl">
                        We focus on outpatient addiction medicine in the context of comprehensive psychiatric care —
                        not a standalone prescribing mill, not a detox facility. Here's what that looks like.
                    </p>

                    <div className="space-y-10 md:pl-6">
                        <div>
                            <h3 className="font-serif text-2xl text-slate-900 mb-2">Opioid use disorder.</h3>
                            <p className="text-slate-700 text-lg leading-relaxed">
                                Prescription opioids, heroin, fentanyl. Most of our patients start on Suboxone or
                                Sublocade, sometimes after a rough first try somewhere else. Cravings stop, withdrawal
                                stops, and the constant noise in your head finally quiets.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-serif text-2xl text-slate-900 mb-2">Alcohol use disorder.</h3>
                            <p className="text-slate-700 text-lg leading-relaxed">
                                Problem drinking that is running your life more than you are. We treat the medical
                                piece — including medications like naltrexone or acamprosate when they fit — alongside
                                the anxiety and depression that so often drive heavy drinking in the first place.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-serif text-2xl text-slate-900 mb-2">Co-occurring mental health.</h3>
                            <p className="text-slate-700 text-lg leading-relaxed">
                                Anxiety, depression, PTSD, trauma — the things that were there before the substance
                                use and often are the reason for it. We treat these in the same visit as your addiction
                                care, so you're not retelling your story to a new stranger every six weeks.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-serif text-2xl text-slate-900 mb-2">Early recovery support.</h3>
                            <p className="text-slate-700 text-lg leading-relaxed">
                                You've been through detox, or through a program, and what you need now is
                                continuity — a provider who actually knows you, checks in, adjusts the plan when life
                                changes, and stays with you as the months turn into years.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How it starts */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-6">
                    <p className="text-sm tracking-widest uppercase text-slate-500 mb-3">Two — how it starts</p>
                    <h2 className="font-serif text-4xl text-slate-900 mb-6 leading-tight max-w-2xl">
                        What the first visit actually looks like.
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-2xl">
                        If you have searched for addiction treatment in Oxford, you've probably run into ten different
                        versions of what "getting help" means. Here's our version. It is not complicated.
                    </p>

                    <div className="space-y-10 md:pl-6">
                        <div className="grid grid-cols-12 gap-6">
                            <div className="col-span-12 md:col-span-2">
                                <div className="font-serif text-5xl text-gold-accent leading-none">01</div>
                            </div>
                            <div className="col-span-12 md:col-span-10 text-slate-700 text-lg leading-relaxed">
                                <p className="font-semibold text-slate-900 mb-2">You call. Kim answers.</p>
                                <p>
                                    You say as much or as little as you want. She'll confirm your insurance or walk
                                    through self-pay pricing, and get you on the schedule — usually the same week.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-12 gap-6">
                            <div className="col-span-12 md:col-span-2">
                                <div className="font-serif text-5xl text-gold-accent leading-none">02</div>
                            </div>
                            <div className="col-span-12 md:col-span-10 text-slate-700 text-lg leading-relaxed">
                                <p className="font-semibold text-slate-900 mb-2">The first appointment — sixty to ninety minutes.</p>
                                <p>
                                    A real psychiatric evaluation. We go through your history — what you've used, what's
                                    worked, what hasn't, and what's actually going on in your life right now. This is
                                    not a checklist. This is a conversation.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-12 gap-6">
                            <div className="col-span-12 md:col-span-2">
                                <div className="font-serif text-5xl text-gold-accent leading-none">03</div>
                            </div>
                            <div className="col-span-12 md:col-span-10 text-slate-700 text-lg leading-relaxed">
                                <p className="font-semibold text-slate-900 mb-2">A plan that fits you.</p>
                                <p>
                                    This may include medication-assisted treatment, medication for underlying mental
                                    health conditions, a counseling referral, regular follow-up — or all of the above.
                                    You leave knowing what's next.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-12 gap-6">
                            <div className="col-span-12 md:col-span-2">
                                <div className="font-serif text-5xl text-gold-accent leading-none">04</div>
                            </div>
                            <div className="col-span-12 md:col-span-10 text-slate-700 text-lg leading-relaxed">
                                <p className="font-semibold text-slate-900 mb-2">Follow-up, with the same provider.</p>
                                <p>
                                    Weekly at first, then every other week, then monthly as things settle. Same person
                                    every time. No starting over. No rotating strangers. Continuity is how recovery
                                    actually holds.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <WaveRule className="text-slate-300 w-40 mx-auto my-4" />

            {/* Why this approach */}
            <section className="py-20 bg-[#faf7f1]">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="flex items-start gap-10 mb-10">
                        <PlantSketch className="hidden md:block text-slate-900 w-20 flex-shrink-0 mt-1" />
                        <div>
                            <p className="text-sm tracking-widest uppercase text-slate-500 mb-3">Three — why this approach</p>
                            <h2 className="font-serif text-4xl text-slate-900 mb-6 leading-tight max-w-2xl">
                                Recovery that treats the whole person, not just the symptom.
                            </h2>
                        </div>
                    </div>

                    <div className="md:pl-28 space-y-8 text-lg text-slate-700 leading-relaxed">
                        <div>
                            <h3 className="font-serif text-xl text-slate-900 mb-2">Judgment-free, and we mean it.</h3>
                            <p>
                                Addiction is a medical condition. We treat it the same way we treat high blood
                                pressure or thyroid disease. Nobody in this office is going to lecture you, moralize,
                                or make you feel small. That's not therapy. That's why people don't come back.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-serif text-xl text-slate-900 mb-2">Same provider, every visit.</h3>
                            <p>
                                You see Casey Hester, PMHNP-BC. Every time. Not a rotating roster of nurse
                                practitioners taking fifteen-minute slots. The relationship is the treatment — the
                                medication just makes the relationship possible.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-serif text-xl text-slate-900 mb-2">We treat what's underneath.</h3>
                            <p>
                                Most substance use does not happen in isolation. There's usually anxiety, depression,
                                trauma, chronic pain, or life pressure sitting underneath. Because we're a psychiatric
                                practice first, we can treat those in the same visit — not in a separate referral at a
                                separate building six weeks from now.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-serif text-xl text-slate-900 mb-2">Your information stays here.</h3>
                            <p>
                                Substance use treatment is protected by a federal confidentiality rule called
                                42 CFR Part 2 — stricter than standard HIPAA. Employers, family members, and law
                                enforcement cannot access your records without your written consent. Period.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How we approach it / treatment tools */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-6">
                    <p className="text-sm tracking-widest uppercase text-slate-500 mb-3">Four — the tools we use</p>
                    <h2 className="font-serif text-4xl text-slate-900 mb-4 leading-tight max-w-2xl">
                        A few different tools, chosen to fit you.
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-12 max-w-2xl">
                        There is no single correct path through addiction treatment. Here are the tools we most often
                        reach for, and rough guidance on when each one fits.
                    </p>

                    <div className="space-y-10">
                        <div>
                            <h3 className="font-serif text-2xl text-slate-900 mb-1">Medication-assisted treatment.</h3>
                            <p className="text-sm text-gold-accent uppercase tracking-wide mb-4">
                                Most common path for opioid use disorder
                            </p>
                            <p className="text-slate-700 leading-relaxed">
                                Suboxone or Sublocade — both forms of buprenorphine. Cravings stop. Withdrawal stops.
                                Your brain chemistry lands back on level ground so the rest of the work can happen.
                            </p>
                            <div className="flex flex-wrap gap-5 mt-4">
                                <Link
                                    to="/suboxone-doctor-oxford-ms"
                                    className="inline-flex items-center gap-2 text-slate-900 font-serif underline decoration-gold-accent decoration-2 underline-offset-[6px] hover:text-gold-accent transition-colors"
                                >
                                    Suboxone in detail
                                    <ArrowSketch className="w-7 text-gold-accent" />
                                </Link>
                                <Link
                                    to="/mat-program"
                                    className="inline-flex items-center gap-2 text-slate-900 font-serif underline decoration-gold-accent decoration-2 underline-offset-[6px] hover:text-gold-accent transition-colors"
                                >
                                    MAT program detail
                                    <ArrowSketch className="w-7 text-gold-accent" />
                                </Link>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-serif text-2xl text-slate-900 mb-1">Psychiatric medication management.</h3>
                            <p className="text-sm text-slate-500 uppercase tracking-wide mb-4">
                                For the anxiety, depression, or PTSD underneath
                            </p>
                            <p className="text-slate-700 leading-relaxed">
                                Treating the substance use without treating what drives it rarely sticks. We'll work on
                                the underlying psychiatric condition — anxiety, depression, PTSD, ADHD — in the same
                                visit, with the same provider.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-serif text-2xl text-slate-900 mb-1">Counseling and peer support referrals.</h3>
                            <p className="text-sm text-slate-500 uppercase tracking-wide mb-4">
                                When the work needs a therapist or a community
                            </p>
                            <p className="text-slate-700 leading-relaxed">
                                We have working relationships with local therapists who specialize in addiction and
                                trauma. We can also point you to MAT-friendly recovery meetings — SMART Recovery,
                                Narcotics Anonymous, or others — that actually fit the way you want to work.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-serif text-2xl text-slate-900 mb-1">Coordination with higher levels of care.</h3>
                            <p className="text-sm text-slate-500 uppercase tracking-wide mb-4">
                                When outpatient isn't enough
                            </p>
                            <p className="text-slate-700 leading-relaxed">
                                Most of our patients do well on outpatient care. When a higher level is clinically
                                appropriate — inpatient detox, residential treatment, an intensive outpatient
                                program — we'll tell you plainly and help you get there.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <WaveRule className="text-slate-300 w-40 mx-auto my-4" />

            {/* Questions */}
            <section className="py-20 bg-[#faf7f1]">
                <div className="max-w-3xl mx-auto px-6">
                    <p className="text-sm tracking-widest uppercase text-slate-500 mb-3">Five — the questions people ask</p>
                    <h2 className="font-serif text-4xl text-slate-900 mb-12 leading-tight">
                        Common questions, answered plainly.
                    </h2>

                    <div className="space-y-10">
                        <div>
                            <h3 className="font-serif text-xl text-slate-900 mb-2">Do I have to go to rehab first?</h3>
                            <p className="text-slate-700 leading-relaxed">
                                No. Most of our patients begin treatment on an outpatient basis directly with us. If a
                                higher level of care is clinically appropriate, we'll say so and help coordinate it.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-serif text-xl text-slate-900 mb-2">Do I have to be "ready to quit"?</h3>
                            <p className="text-slate-700 leading-relaxed">
                                Ambivalence is normal. You don't have to walk in with a clean commitment to sobriety to
                                make progress. Come in, tell us what's going on, and we'll figure out what's next
                                together.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-serif text-xl text-slate-900 mb-2">Is treatment confidential?</h3>
                            <p className="text-slate-700 leading-relaxed">
                                Yes — protected by 42 CFR Part 2, a federal rule specifically for substance use
                                treatment that is stricter than standard HIPAA. Your information stays between you and
                                your provider.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-serif text-xl text-slate-900 mb-2">Do you accept insurance?</h3>
                            <p className="text-slate-700 leading-relaxed">
                                We accept most major insurance plans and offer self-pay options for patients without
                                coverage. Call and Kim will help you verify coverage before your first visit.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-serif text-xl text-slate-900 mb-2">What areas do you serve?</h3>
                            <p className="text-slate-700 leading-relaxed">
                                We see patients from Oxford, Batesville, New Albany, Water Valley, and throughout North
                                Mississippi. Our office is on Galleria Drive in Oxford.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-serif text-xl text-slate-900 mb-2">What if I relapse during treatment?</h3>
                            <p className="text-slate-700 leading-relaxed">
                                Relapse is not a reason to end treatment. It's a signal something in the plan needs
                                adjusting — dose, support, co-occurring mental health, or life circumstances. Come in.
                                We will not shame you out of care.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cross-link */}
            <section className="py-20">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <PathSketch className="text-slate-400 w-60 mx-auto mb-8" />
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                        If you already know you're looking for Suboxone specifically, or the medication-assisted
                        treatment detail — here's where to go.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <Link
                            to="/suboxone-doctor-oxford-ms"
                            className="inline-flex items-center gap-3 text-lg text-slate-900 font-serif underline decoration-gold-accent decoration-2 underline-offset-[6px] hover:text-gold-accent transition-colors"
                        >
                            Suboxone treatment, in detail
                            <ArrowSketch className="w-7 text-gold-accent" />
                        </Link>
                        <span className="text-slate-400">·</span>
                        <Link
                            to="/mat-program"
                            className="inline-flex items-center gap-3 text-lg text-slate-900 font-serif underline decoration-gold-accent decoration-2 underline-offset-[6px] hover:text-gold-accent transition-colors"
                        >
                            The MAT program
                            <ArrowSketch className="w-7 text-gold-accent" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Closing CTA */}
            <section className="py-24 bg-dark-green">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <HandSketch className="text-gold-accent w-16 mx-auto mb-8 opacity-80" />
                    <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">
                        When you're ready, we're here.
                    </h2>
                    <p className="text-lg text-cream mb-10 max-w-xl mx-auto leading-relaxed">
                        Call during business hours. Kim answers. Most new patients are seen within the week. No
                        lecture, no script — just a conversation about whether we're a fit.
                    </p>
                    <a
                        href="tel:6626404004"
                        className="inline-block font-serif text-3xl text-gold-accent underline decoration-2 underline-offset-[10px] hover:text-white transition-colors"
                    >
                        (662) 640-4004
                    </a>
                    <p className="text-sm text-cream/70 mt-6">
                        Monday – Thursday, 8 to 5 &nbsp;·&nbsp; Friday, 8 to noon
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
