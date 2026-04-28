import React from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { pageMeta } from '../seo/pages.js';
import FAQ from './FAQ';
import type { TownData } from './towns';

interface Props {
    town: TownData;
}

const TownLanding: React.FC<Props> = ({ town }) => {
    usePageMeta(pageMeta[`/suboxone-doctor-${town.slug}-ms`]);

    return (
        <div className="bg-white min-h-screen animate-fade-in">

            {/* Opener — Suboxone-led */}
            <section className="bg-dark-green pt-20 pb-24">
                <div className="max-w-4xl mx-auto px-6">
                    <p className="text-sm tracking-widest uppercase text-gold-accent mb-6">
                        Suboxone Doctor &nbsp;·&nbsp; {town.fullName}
                    </p>
                    <h1 className="font-serif text-[2.6rem] md:text-[3.4rem] leading-[1.08] font-semibold text-white mb-8 max-w-3xl">
                        Suboxone treatment for{' '}
                        <span className="text-gold-accent italic font-normal">{town.name}, Mississippi.</span>
                    </h1>
                    <p className="text-xl text-cream max-w-2xl leading-relaxed mb-10">
                        Suboxone and Sublocade for opioid use disorder, prescribed by a board-certified psychiatric
                        provider. About {town.distanceMin} minutes from {town.name} via {town.route}. Same provider
                        every visit. Federal 42 CFR Part 2 confidentiality &mdash; stricter than HIPAA.
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

            {/* Letter intro — addiction-focused */}
            <section className="py-20">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="font-serif text-2xl md:text-3xl text-slate-900 leading-snug mb-10">
                        For most of {town.county}, finding a real Suboxone doctor still means
                        <span className="italic"> driving to find one.</span>
                    </div>
                    <p className="text-lg text-slate-600 leading-relaxed mb-5">
                        {town.name} is {town.notable}. It is also one of dozens of north Mississippi communities where
                        a person looking for medication-assisted treatment has to leave their own town to get it.
                        Life Balance, PLLC sees patients from {town.name} and across {town.county} for Suboxone,
                        Sublocade, and the psychiatric care that usually sits underneath the substance use.
                    </p>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        We are roughly {town.distanceMin} minutes from {town.name}. Same-week appointments are usually
                        available. The same provider sees you every visit &mdash; the continuity is the medicine.
                    </p>
                </div>
            </section>

            {/* Suboxone & MAT — primary section */}
            <section className="py-20 bg-[#faf7f1]">
                <div className="max-w-4xl mx-auto px-6">
                    <p className="text-sm tracking-widest uppercase text-slate-500 mb-3">One &mdash; the medicine</p>
                    <h2 className="font-serif text-4xl text-slate-900 mb-6 leading-tight max-w-2xl">
                        Suboxone &amp; Sublocade for {town.name} patients.
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-2xl">
                        Casey Hester, PMHNP-BC, is board-certified in psychiatric mental health and prescribes
                        buprenorphine-based medication-assisted treatment (MAT) for opioid use disorder.
                    </p>

                    <div className="space-y-10 md:pl-6">
                        <div>
                            <h3 className="font-serif text-2xl text-slate-900 mb-2">Suboxone (buprenorphine / naloxone).</h3>
                            <p className="text-slate-700 text-lg leading-relaxed">
                                A daily film or tablet that stops withdrawal and cravings without producing the high.
                                Within an hour of the first correctly-timed dose, the sweating, restlessness, and
                                cold panic of being dope sick turn off. You feel like a person again.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-serif text-2xl text-slate-900 mb-2">Sublocade (extended-release buprenorphine).</h3>
                            <p className="text-slate-700 text-lg leading-relaxed">
                                A monthly injection &mdash; same medicine, no daily film. For patients who want fewer
                                touchpoints with their addiction or have struggled with adherence on the daily form.
                                We'll talk about which fits you.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-serif text-2xl text-slate-900 mb-2">42 CFR Part 2 confidentiality.</h3>
                            <p className="text-slate-700 text-lg leading-relaxed">
                                Substance use treatment records are protected by a federal rule stricter than standard
                                HIPAA. Employers, family members, and law enforcement cannot access your records
                                without your written consent. This matters in a small town. We take it seriously.
                            </p>
                        </div>
                        <div className="pt-4">
                            <Link
                                to="/suboxone-doctor-oxford-ms"
                                className="inline-flex items-center gap-2 text-teal-700 font-semibold text-lg hover:text-teal-800 underline decoration-1 underline-offset-4"
                            >
                                Read the full Suboxone &amp; Sublocade walkthrough &rarr;
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* The drive */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-6">
                    <p className="text-sm tracking-widest uppercase text-slate-500 mb-3">Two &mdash; the drive</p>
                    <h2 className="font-serif text-4xl text-slate-900 mb-6 leading-tight max-w-2xl">
                        Getting here from {town.name}.
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 mt-10">
                        <div>
                            <h3 className="font-serif text-xl text-slate-900 mb-3">The route</h3>
                            <p className="text-slate-700 text-lg leading-relaxed mb-4">
                                Take {town.route}. Total drive time is roughly{' '}
                                <strong>{town.distanceMin} minutes</strong> depending on traffic through Oxford.
                            </p>
                            <p className="text-slate-700 text-lg leading-relaxed">
                                Our office is at <strong>405 Galleria Drive, Suite E, Oxford, MS 38655</strong> &mdash;
                                in the Galleria shopping center off Jackson Avenue. Easy parking, ground-floor entry.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-serif text-xl text-slate-900 mb-3">What to bring</h3>
                            <ul className="space-y-2 text-slate-700 text-lg leading-relaxed">
                                <li>&middot; Insurance card (we accept most major plans)</li>
                                <li>&middot; Photo ID</li>
                                <li>&middot; Current medication list</li>
                                <li>&middot; Records from prior providers, if available</li>
                            </ul>
                            <p className="text-slate-600 text-base leading-relaxed mt-4">
                                Self-pay pricing also available &mdash; call the office for current rates.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Continuity pitch */}
            <section className="py-20 bg-[#faf7f1]">
                <div className="max-w-3xl mx-auto px-6">
                    <p className="text-sm tracking-widest uppercase text-slate-500 mb-3">Three &mdash; why it works</p>
                    <h2 className="font-serif text-4xl text-slate-900 mb-6 leading-tight">
                        One provider. Every visit.
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-5">
                        The reason most {town.name} patients keep making the drive is simple. The person who induces
                        you on Suboxone on day one is the same person you see on day three hundred. No revolving door
                        of strangers. No retelling the worst year of your life to a different face every visit.
                    </p>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Recovery is not a prescription. It's a relationship, a dose, a check-in, a hard conversation,
                        another dose, a reset. The medication does the chemistry. The continuity does the rest.
                    </p>
                </div>
            </section>

            {/* What else we treat — secondary */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-6">
                    <p className="text-sm tracking-widest uppercase text-slate-500 mb-3">Four &mdash; we also treat</p>
                    <h2 className="font-serif text-4xl text-slate-900 mb-6 leading-tight max-w-2xl">
                        Suboxone is the door. The rest of the work is what keeps you here.
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-2xl">
                        Most of our addiction patients also have something underneath &mdash; anxiety, depression,
                        unaddressed trauma, undiagnosed ADHD or bipolar. We treat all of it in the same visit, with
                        the same provider. No separate referral. No second copay.
                    </p>
                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 md:pl-6 text-slate-700 text-lg leading-relaxed">
                        <div>
                            <strong className="text-slate-900">Anxiety &amp; depression.</strong> Generalized anxiety,
                            panic, major depressive disorder, PTSD &mdash; the patterns that often drove the substance
                            use to begin with.
                        </div>
                        <div>
                            <strong className="text-slate-900">ADHD &amp; bipolar.</strong> Adult ADHD, including
                            patients never evaluated as kids. Bipolar I and II, including patients misdiagnosed as
                            depression for years.
                        </div>
                        <div>
                            <strong className="text-slate-900">Alcohol use disorder.</strong> Naltrexone, acamprosate,
                            and the psychiatric care that usually sits underneath alcohol misuse.
                        </div>
                        <div>
                            <strong className="text-slate-900">GeneSight testing.</strong> Pharmacogenomic testing
                            when a medication search is going long. Saves months of trial-and-error.
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ — Suboxone-led */}
            <FAQ
                theme="dark"
                eyebrow={`${town.fullName} · FAQ`}
                title={`Suboxone questions from ${town.name}`}
                items={[
                    {
                        q: `Is there a Suboxone doctor in ${town.name}?`,
                        aText: `Coverage in ${town.county} is limited. Many of our addiction patients drive in from across north Mississippi specifically because continuous, same-provider Suboxone treatment is hard to find locally.`,
                        a: (
                            <>
                                Coverage in {town.county} is limited. Many of our addiction patients drive in from
                                across north Mississippi specifically because continuous, same-provider Suboxone
                                treatment is hard to find locally.
                            </>
                        ),
                    },
                    {
                        q: 'How does Suboxone induction work on the first visit?',
                        aText:
                            'You arrive in mild-to-moderate withdrawal. Within an hour of your first correctly-timed dose, withdrawal symptoms reverse. We monitor for a few hours, dial in the dose, and send you home with a prescription. Most patients leave feeling more like themselves than they have in months.',
                        a: (
                            <>
                                You arrive in mild-to-moderate withdrawal. Within an hour of your first correctly-timed
                                dose, withdrawal symptoms reverse. We monitor for a few hours, dial in the dose, and
                                send you home with a prescription. Most patients leave feeling more like themselves
                                than they have in months.
                            </>
                        ),
                    },
                    {
                        q: 'Will my insurance cover Suboxone?',
                        aText:
                            'Generic buprenorphine/naloxone is on almost every commercial and Medicaid formulary. Sublocade is covered under most plans with prior authorization, which we handle. Self-pay pricing is also available.',
                        a: (
                            <>
                                Generic buprenorphine/naloxone is on almost every commercial and Medicaid formulary.
                                <strong> Sublocade</strong> is covered under most plans with prior authorization, which
                                we handle. Self-pay pricing is also available.
                            </>
                        ),
                    },
                    {
                        q: `How far is Life Balance from ${town.name}?`,
                        aText: `About ${town.distanceMin} minutes via ${town.route}. We're at 405 Galleria Drive, Suite E, in Oxford, MS 38655.`,
                        a: (
                            <>
                                About <strong>{town.distanceMin} minutes</strong> via {town.route}. Our office is at{' '}
                                <strong>405 Galleria Drive, Suite E, Oxford, MS 38655</strong>.
                            </>
                        ),
                    },
                    {
                        q: 'Is Suboxone treatment confidential? My employer can\'t know.',
                        aText:
                            'Yes. Substance use treatment records are protected by 42 CFR Part 2 — a federal rule stricter than HIPAA. Employers, family members, and law enforcement cannot access your records without your written consent.',
                        a: (
                            <>
                                Yes. Substance use treatment records are protected by <strong>42 CFR Part 2</strong>
                                {' '}&mdash; a federal rule stricter than HIPAA. Employers, family members, and law
                                enforcement cannot access your records without your written consent.
                            </>
                        ),
                    },
                    {
                        q: 'Can I do follow-up visits by telehealth?',
                        aText:
                            'For established Suboxone patients, follow-up visits can often be done by telehealth in compliance with Mississippi rules. The first visit (induction) is in person.',
                        a: (
                            <>
                                For established Suboxone patients, follow-up visits can often be done by telehealth in
                                compliance with Mississippi rules. <strong>The first visit (induction) is in person.</strong>
                            </>
                        ),
                    },
                    {
                        q: 'How soon can I be seen?',
                        aText:
                            'Same-week appointments are typically available for new patients. Call (662) 640-4004 to check current availability.',
                        a: (
                            <>
                                Same-week appointments are typically available for new patients. Call to check current
                                availability.
                            </>
                        ),
                    },
                ]}
            />

            {/* Nearby towns */}
            <section className="py-16 bg-white border-t border-slate-100">
                <div className="max-w-5xl mx-auto px-6">
                    <p className="text-sm tracking-widest uppercase text-teal-700 mb-3">Other Communities We Serve</p>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                        Nearby towns who drive to Oxford for Suboxone.
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mb-8">
                        Patients from across north Mississippi make the drive to Life Balance because continuous,
                        same-provider Suboxone treatment is rare in our region. If you're nearer one of these
                        communities, the same drive applies.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {town.nearbyTowns.map((t) => (
                            <Link
                                key={t.slug}
                                to={`/suboxone-doctor-${t.slug}-ms`}
                                className="block py-3 px-4 border border-slate-200 rounded hover:border-teal-700 hover:bg-teal-50/40 transition-colors text-slate-900 font-medium"
                            >
                                Suboxone Doctor &mdash; {t.name} &rarr;
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Closing CTA */}
            <section className="py-16 bg-grey-green border-t border-white/10">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <p className="font-serif text-xl font-medium mb-6 text-white">
                        From {town.name}? Pick up the phone.
                    </p>
                    <a
                        href="tel:6626404004"
                        className="inline-block px-10 py-3.5 text-white font-serif font-semibold text-base rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-[transform,box-shadow] duration-200 bg-gold-accent"
                    >
                        Call (662) 640-4004
                    </a>
                </div>
            </section>
        </div>
    );
};

export default TownLanding;
