import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { pageMeta } from '../seo/pages.js';
import { WaveRule, ArrowSketch } from './Sketches';
import FAQ from './FAQ';
import IntakeModal from './IntakeModal';

const SuboxoneTreatment: React.FC = () => {
    usePageMeta(pageMeta['/suboxone-treatment-oxford-ms']);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="bg-white min-h-screen animate-fade-in">

            {/* Hero */}
            <section className="bg-dark-green pt-20 pb-24">
                <div className="max-w-4xl mx-auto px-6">
                    <p className="text-sm tracking-widest uppercase text-gold-accent mb-6">
                        Suboxone Treatment &nbsp;·&nbsp; Oxford, MS
                    </p>
                    <h1 className="font-serif text-[2.6rem] md:text-[3.4rem] leading-[1.08] font-semibold text-white mb-8 max-w-3xl">
                        Suboxone Treatment in Oxford, Mississippi.
                    </h1>
                    <p className="text-xl text-cream max-w-2xl leading-relaxed mb-10">
                        Outpatient Suboxone treatment for opioid use disorder — same-week appointments,
                        in-person in Oxford or telehealth across Mississippi. Board-certified psychiatric
                        provider. 42 CFR Part 2 confidentiality. Most insurance accepted.
                    </p>
                    <div className="flex flex-wrap items-center gap-5 text-cream">
                        <a href="tel:6626404004" className="text-lg underline decoration-gold-accent decoration-2 underline-offset-[6px] hover:text-white transition-colors">
                            Call (662) 640-4004
                        </a>
                        <span className="opacity-50">·</span>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="text-lg underline decoration-gold-accent decoration-2 underline-offset-[6px] hover:text-white transition-colors"
                        >
                            Start new client intake
                        </button>
                    </div>
                </div>
            </section>

            {/* What it is — quick summary */}
            <section className="py-20">
                <div className="max-w-3xl mx-auto px-6">
                    <p className="text-sm tracking-widest uppercase text-slate-500 mb-3">What it is</p>
                    <h2 className="font-serif text-4xl text-slate-900 mb-6 leading-tight">
                        Medication-assisted treatment with Suboxone, in a real psychiatric practice.
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-5">
                        Suboxone treatment combines <strong className="text-slate-900">buprenorphine/naloxone</strong> —
                        the FDA-approved medication for opioid use disorder — with ongoing care from a board-certified
                        psychiatric provider. Not a fifteen-minute refill mill. Not a rotating cast of strangers. The
                        same provider, every visit, for as long as you're with us.
                    </p>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Suboxone is the standard of care recommended by SAMHSA, ASAM, the CDC, and the WHO for
                        treating opioid use disorder. It works because it occupies the same opioid receptors as heroin,
                        fentanyl, and prescription pills — without producing the high — so the cravings and withdrawal
                        stop and recovery becomes possible.
                    </p>
                </div>
            </section>

            {/* Who it's for */}
            <section className="py-20 bg-[#faf7f1]">
                <div className="max-w-3xl mx-auto px-6">
                    <p className="text-sm tracking-widest uppercase text-slate-500 mb-3">Who it's for</p>
                    <h2 className="font-serif text-4xl text-slate-900 mb-8 leading-tight">
                        Is Suboxone treatment right for you?
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-8">
                        If any of the following sound familiar, Suboxone treatment is likely a fit. You don't have to
                        be in crisis to start.
                    </p>
                    <ul className="space-y-4 text-lg text-slate-700 leading-relaxed">
                        <li>— You're using prescription opioids, heroin, or fentanyl and want to stop.</li>
                        <li>— You've tried to quit on your own and the withdrawal pulled you back.</li>
                        <li>— You're already on Suboxone elsewhere and need a stable, local prescriber.</li>
                        <li>— You've been clean but the cravings haven't let up.</li>
                        <li>— You're worried about overdose — fentanyl in everything is real, and naloxone alone isn't a plan.</li>
                        <li>— You want treatment that takes mental health seriously, not just the prescription pad.</li>
                    </ul>
                </div>
            </section>

            <WaveRule className="text-slate-300 w-40 mx-auto my-4" />

            {/* What treatment includes */}
            <section className="py-20">
                <div className="max-w-3xl mx-auto px-6">
                    <p className="text-sm tracking-widest uppercase text-slate-500 mb-3">What's included</p>
                    <h2 className="font-serif text-4xl text-slate-900 mb-10 leading-tight">
                        What Suboxone treatment includes here.
                    </h2>

                    <div className="space-y-8">
                        <div>
                            <h3 className="font-serif text-xl text-slate-900 mb-2">Comprehensive psychiatric evaluation.</h3>
                            <p className="text-slate-700 leading-relaxed">
                                A real first visit — sixty to ninety minutes — to understand your history, what you've
                                been using, the mental health under it all, and what you actually want recovery to look
                                like.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-serif text-xl text-slate-900 mb-2">Suboxone induction and dose stabilization.</h3>
                            <p className="text-slate-700 leading-relaxed">
                                Same-day induction available for patients in withdrawal. We dial in your dose over the
                                first week or two — most patients land between twelve and twenty-four milligrams daily.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-serif text-xl text-slate-900 mb-2">Ongoing medication management.</h3>
                            <p className="text-slate-700 leading-relaxed">
                                Monthly visits at first, then less frequent as you stabilize. Same provider every
                                visit. Refills sent to your pharmacy, not handed off to a stranger.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-serif text-xl text-slate-900 mb-2">Care for what's underneath.</h3>
                            <p className="text-slate-700 leading-relaxed">
                                Anxiety, depression, ADHD, PTSD, bipolar disorder — treated in the same visit by the
                                same provider. Most opioid use disorder doesn't show up alone, and we don't pretend it
                                does.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-serif text-xl text-slate-900 mb-2">Telehealth across Mississippi.</h3>
                            <p className="text-slate-700 leading-relaxed">
                                If the drive to Oxford is the obstacle, we see Suboxone patients by video anywhere in
                                the state.{' '}
                                <Link to="/suboxone-telehealth-mississippi" className="text-teal-700 underline decoration-1 underline-offset-4">
                                    Telehealth Suboxone in Mississippi
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How to start */}
            <section className="py-20 bg-[#faf7f1]">
                <div className="max-w-3xl mx-auto px-6">
                    <p className="text-sm tracking-widest uppercase text-slate-500 mb-3">How to start</p>
                    <h2 className="font-serif text-4xl text-slate-900 mb-10 leading-tight">
                        Three steps to start treatment.
                    </h2>

                    <div className="space-y-10">
                        <div className="grid grid-cols-12 gap-6">
                            <div className="col-span-12 md:col-span-2">
                                <div className="font-serif text-5xl text-gold-accent leading-none">01</div>
                            </div>
                            <div className="col-span-12 md:col-span-10 text-slate-700 text-lg leading-relaxed">
                                <p className="font-semibold text-slate-900 mb-2">Call or submit an intake.</p>
                                <p>
                                    Call <a href="tel:6626404004" className="text-teal-700 underline decoration-1 underline-offset-4">(662) 640-4004</a> and
                                    Kim will answer. She'll verify insurance or walk through self-pay pricing and get you on the
                                    schedule — usually the same week.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-12 gap-6">
                            <div className="col-span-12 md:col-span-2">
                                <div className="font-serif text-5xl text-gold-accent leading-none">02</div>
                            </div>
                            <div className="col-span-12 md:col-span-10 text-slate-700 text-lg leading-relaxed">
                                <p className="font-semibold text-slate-900 mb-2">First visit + induction.</p>
                                <p>
                                    Sixty to ninety minutes. Real conversation, full evaluation, induction plan. If you're
                                    ready and in withdrawal, we can start Suboxone the same day.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-12 gap-6">
                            <div className="col-span-12 md:col-span-2">
                                <div className="font-serif text-5xl text-gold-accent leading-none">03</div>
                            </div>
                            <div className="col-span-12 md:col-span-10 text-slate-700 text-lg leading-relaxed">
                                <p className="font-semibold text-slate-900 mb-2">Ongoing care.</p>
                                <p>
                                    Monthly follow-ups at first, then spaced out as you stabilize. Same provider, every
                                    visit. Telehealth available between in-person check-ins for established patients.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cost */}
            <section className="py-20">
                <div className="max-w-3xl mx-auto px-6">
                    <p className="text-sm tracking-widest uppercase text-slate-500 mb-3">What it costs</p>
                    <h2 className="font-serif text-4xl text-slate-900 mb-6 leading-tight">
                        The cost of Suboxone treatment in Mississippi.
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-5">
                        <span className="font-semibold text-slate-900">With insurance,</span> visits are usually a
                        normal specialist copay. Generic buprenorphine/naloxone is on almost every formulary. We accept
                        most major plans —{' '}
                        <Link to="/blue-cross-suboxone-mississippi" className="text-teal-700 underline decoration-1 underline-offset-4">
                            BCBS Mississippi details here
                        </Link>
                        .
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed mb-5">
                        <span className="font-semibold text-slate-900">Self-pay,</span> Kim quotes the exact visit fee
                        on your first call. Generic buprenorphine/naloxone at most Oxford pharmacies runs roughly
                        thirty to eighty dollars a month depending on dose.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                        <span className="font-semibold text-slate-900">Discount programs</span> like GoodRx,
                        SingleCare, and Inside Rx can cut cash prices substantially. We'll point you to what's working
                        locally.
                    </p>
                </div>
            </section>

            {/* Cross-links */}
            <section className="py-20 bg-[#faf7f1]">
                <div className="max-w-3xl mx-auto px-6">
                    <p className="text-sm tracking-widest uppercase text-slate-500 mb-3">Related</p>
                    <h2 className="font-serif text-4xl text-slate-900 mb-10 leading-tight">
                        More on Suboxone treatment.
                    </h2>
                    <div className="space-y-6">
                        <Link to="/suboxone-doctor-oxford-ms" className="block group">
                            <span className="block font-serif text-xl text-slate-900 group-hover:text-teal-700 transition-colors">
                                The full Suboxone walkthrough →
                            </span>
                            <span className="block text-slate-600 mt-1 leading-relaxed">
                                How Suboxone works in your body, induction day step-by-step, side effects, withdrawal timing.
                            </span>
                        </Link>
                        <Link to="/suboxone-telehealth-mississippi" className="block group">
                            <span className="block font-serif text-xl text-slate-900 group-hover:text-teal-700 transition-colors">
                                Telehealth Suboxone across Mississippi →
                            </span>
                            <span className="block text-slate-600 mt-1 leading-relaxed">
                                Online Suboxone treatment by video for patients anywhere in the state.
                            </span>
                        </Link>
                        <Link to="/same-day-suboxone-oxford-ms" className="block group">
                            <span className="block font-serif text-xl text-slate-900 group-hover:text-teal-700 transition-colors">
                                Same-day Suboxone induction →
                            </span>
                            <span className="block text-slate-600 mt-1 leading-relaxed">
                                In withdrawal now? Same-day and next-day induction slots held for new patients.
                            </span>
                        </Link>
                        <Link to="/fentanyl-addiction-treatment-mississippi" className="block group">
                            <span className="block font-serif text-xl text-slate-900 group-hover:text-teal-700 transition-colors">
                                Fentanyl-specific protocols →
                            </span>
                            <span className="block text-slate-600 mt-1 leading-relaxed">
                                Bernese microdosing and other fentanyl-specific Suboxone induction approaches.
                            </span>
                        </Link>
                        <Link to="/addiction-treatment-oxford-ms" className="block group">
                            <span className="block font-serif text-xl text-slate-900 group-hover:text-teal-700 transition-colors">
                                Our full addiction treatment approach →
                            </span>
                            <span className="block text-slate-600 mt-1 leading-relaxed">
                                The broader picture — opioid use disorder, alcohol use disorder, and the mental health under it.
                            </span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* FAQ — auto-generates FAQPage JSON-LD via the FAQ component */}
            <FAQ
                theme="light"
                eyebrow="Common questions"
                title="Common questions about Suboxone treatment"
                items={[
                    {
                        q: 'What is Suboxone treatment?',
                        aText:
                            'Suboxone treatment is medication-assisted treatment (MAT) for opioid use disorder using buprenorphine/naloxone, combined with ongoing psychiatric care. It is the standard of care recommended by SAMHSA, ASAM, the CDC, and the WHO.',
                        a: (
                            <>
                                Suboxone treatment is medication-assisted treatment (MAT) for opioid use disorder
                                using <strong>buprenorphine/naloxone</strong>, combined with ongoing psychiatric care.
                                It's the standard of care recommended by SAMHSA, ASAM, the CDC, and the WHO.
                            </>
                        ),
                    },
                    {
                        q: 'Where can I get Suboxone treatment in Oxford, MS?',
                        aText:
                            'Life Balance Psychiatric Services at 405 Galleria Drive, Suite E, Oxford, MS 38655 provides Suboxone treatment in person and by telehealth across Mississippi. Call (662) 640-4004 for same-week appointments.',
                        a: (
                            <>
                                Life Balance Psychiatric Services at <strong>405 Galleria Drive, Suite E, Oxford, MS 38655</strong>.
                                In-person or telehealth across Mississippi. Call{' '}
                                <a href="tel:6626404004" className="text-teal-700 underline decoration-1 underline-offset-4">
                                    (662) 640-4004
                                </a>{' '}
                                for same-week appointments.
                            </>
                        ),
                    },
                    {
                        q: 'How much does Suboxone treatment cost in Mississippi?',
                        aText:
                            'With insurance, visits are usually at your specialist copay and generic buprenorphine/naloxone is on almost every formulary. Self-pay visit fees are quoted on the first call; the medication itself runs roughly $30 to $80 a month at most Oxford pharmacies depending on dose.',
                        a: (
                            <>
                                With insurance, visits are usually at your specialist copay and generic
                                buprenorphine/naloxone is on almost every formulary. Self-pay visit fees are quoted on the
                                first call; the medication itself runs roughly <strong>$30 to $80 a month</strong> at most
                                Oxford pharmacies depending on dose.
                            </>
                        ),
                    },
                    {
                        q: 'How fast can I start Suboxone treatment?',
                        aText:
                            'Same-week appointments are typically available and same-day induction is available for patients in active withdrawal. Call (662) 640-4004 to check current openings.',
                        a: (
                            <>
                                Same-week appointments are typically available and{' '}
                                <Link to="/same-day-suboxone-oxford-ms" className="text-teal-700 underline decoration-1 underline-offset-4">
                                    same-day induction
                                </Link>{' '}
                                is available for patients in active withdrawal.
                            </>
                        ),
                    },
                    {
                        q: 'Can I get Suboxone treatment online in Mississippi?',
                        aText:
                            'Yes. Life Balance offers telehealth Suboxone treatment statewide — induction, dose stabilization, and ongoing care by secure video for patients anywhere in Mississippi.',
                        a: (
                            <>
                                Yes —{' '}
                                <Link to="/suboxone-telehealth-mississippi" className="text-teal-700 underline decoration-1 underline-offset-4">
                                    telehealth Suboxone treatment
                                </Link>{' '}
                                statewide. Induction, dose stabilization, and ongoing care by secure video.
                            </>
                        ),
                    },
                    {
                        q: 'Is Suboxone treatment confidential?',
                        aText:
                            'Yes. Substance use treatment records are protected by 42 CFR Part 2, a federal confidentiality rule stricter than HIPAA. Employers, family members, and law enforcement cannot access your records without your written consent.',
                        a: (
                            <>
                                Yes. Substance use treatment is protected by <strong>42 CFR Part 2</strong>, a federal
                                rule stricter than standard HIPAA. Employers, family, and law enforcement cannot access
                                your records without your written consent.
                            </>
                        ),
                    },
                    {
                        q: 'Is Suboxone just trading one addiction for another?',
                        aText:
                            'No. Buprenorphine occupies the opioid receptors without producing the euphoria that drives addictive use. SAMHSA, ASAM, the CDC, and the WHO all recognize medication-assisted treatment as a standard of care for opioid use disorder.',
                        a: (
                            <>
                                No. Buprenorphine occupies opioid receptors without producing the euphoria that drives
                                addictive use. <strong>SAMHSA, ASAM, the CDC, and the WHO</strong> all recognize
                                medication-assisted treatment as a standard of care for opioid use disorder.
                            </>
                        ),
                    },
                    {
                        q: 'How long does Suboxone treatment last?',
                        aText:
                            'As long as it works for you. Some patients taper off after a year, others remain on maintenance long-term. The decision is made together with your provider based on stability, goals, and life circumstances.',
                        a: (
                            <>
                                As long as it works for you. Some patients taper off after a year, others stay on
                                maintenance long-term. The decision is made together with your provider based on
                                stability, goals, and life circumstances.
                            </>
                        ),
                    },
                ]}
            />

            {/* Closing CTA */}
            <section className="py-24 bg-dark-green">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">
                        Ready when you are.
                    </h2>
                    <p className="text-lg text-cream mb-10 max-w-xl mx-auto leading-relaxed">
                        Same-week appointments. Same-day induction for patients in withdrawal. One provider, every
                        visit, for as long as you're with us.
                    </p>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="inline-block px-10 py-4 bg-gold-accent text-white font-serif font-semibold text-lg rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-[transform,box-shadow] duration-200"
                    >
                        New Client Intake
                    </button>
                    <p className="text-sm text-cream/70 mt-6">
                        Or call <a href="tel:6626404004" className="underline underline-offset-2 hover:text-white">(662) 640-4004</a> &nbsp;·&nbsp; Mon – Thu 8 to 5, Fri 8 to noon
                    </p>
                </div>
            </section>

            <IntakeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        </div>
    );
};

export default SuboxoneTreatment;
