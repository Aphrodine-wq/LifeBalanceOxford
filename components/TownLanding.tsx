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
    usePageMeta(pageMeta[`/psychiatric-care-${town.slug}-ms`]);

    return (
        <div className="bg-white min-h-screen animate-fade-in">

            {/* Opener */}
            <section className="bg-dark-green pt-20 pb-24">
                <div className="max-w-4xl mx-auto px-6">
                    <p className="text-sm tracking-widest uppercase text-gold-accent mb-6">
                        Psychiatric Care &nbsp;·&nbsp; {town.fullName}
                    </p>
                    <h1 className="font-serif text-[2.6rem] md:text-[3.4rem] leading-[1.08] font-semibold text-white mb-8 max-w-3xl">
                        Psychiatric care for <span className="text-gold-accent italic font-normal">{town.name}</span>{' '}
                        residents.
                    </h1>
                    <p className="text-xl text-cream max-w-2xl leading-relaxed mb-10">
                        Life Balance, PLLC sees patients from {town.name} and across {town.county} for psychiatric
                        evaluations, medication management, and addiction treatment &mdash; including Suboxone and
                        Sublocade. About {town.distanceMin} minutes from {town.name} via {town.route}.
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
                        For most of {town.county}, real psychiatric care still means
                        <span className="italic"> driving to find it.</span>
                    </div>
                    <p className="text-lg text-slate-600 leading-relaxed mb-5">
                        {town.name} is {town.notable}. It is also one of dozens of communities across north Mississippi
                        where a person looking for thoughtful, continuous psychiatric care has to leave their own town
                        to get it. We built Life Balance for the patient who is willing to make that drive &mdash; once
                        a month, every few weeks &mdash; in exchange for a provider who will still be here a year from now.
                    </p>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        We are roughly {town.distanceMin} minutes from {town.name}. Same-week appointments are usually
                        available. The same provider sees you every visit.
                    </p>
                </div>
            </section>

            {/* What we treat */}
            <section className="py-20 bg-[#faf7f1]">
                <div className="max-w-4xl mx-auto px-6">
                    <p className="text-sm tracking-widest uppercase text-slate-500 mb-3">One &mdash; what we treat</p>
                    <h2 className="font-serif text-4xl text-slate-900 mb-6 leading-tight max-w-2xl">
                        What we see {town.name} patients for.
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-12 max-w-2xl">
                        Casey Hester, PMHNP-BC, is board-certified in psychiatric mental health and prescribes for
                        adolescents (12+) and adults across the full range of psychiatric conditions.
                    </p>

                    <div className="space-y-10 md:pl-6">
                        <div>
                            <h3 className="font-serif text-2xl text-slate-900 mb-2">Anxiety, depression, and trauma.</h3>
                            <p className="text-slate-700 text-lg leading-relaxed">
                                Generalized anxiety, panic, major depressive disorder, PTSD, and the patterns that show
                                up alongside them &mdash; sleep loss, irritability, focus problems, the slow drift away
                                from things you used to enjoy. Medication management combined with the room to actually
                                talk through what's changing.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-serif text-2xl text-slate-900 mb-2">ADHD and bipolar.</h3>
                            <p className="text-slate-700 text-lg leading-relaxed">
                                Adult ADHD, including patients who were never evaluated as kids. Bipolar I and II,
                                including misdiagnosed patients who have been treated as depression for years. We also
                                run GeneSight pharmacogenomic testing when a medication search is going long.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-serif text-2xl text-slate-900 mb-2">Addiction and Suboxone.</h3>
                            <p className="text-slate-700 text-lg leading-relaxed">
                                {town.county} has the same opioid and alcohol use challenges as the rest of north
                                Mississippi, and far fewer providers willing to treat them. We prescribe Suboxone and
                                Sublocade alongside the psychiatric care that usually sits underneath the substance
                                use. Federal 42 CFR Part 2 confidentiality applies &mdash; stricter than standard
                                HIPAA. <Link to="/suboxone-doctor-oxford-ms" className="text-teal-700 underline decoration-1 underline-offset-4 hover:text-teal-800">More on Suboxone &rarr;</Link>
                            </p>
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
                    <p className="text-sm tracking-widest uppercase text-slate-500 mb-3">Three &mdash; why drive</p>
                    <h2 className="font-serif text-4xl text-slate-900 mb-6 leading-tight">
                        One provider. Every visit.
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-5">
                        The reason most {town.name} patients keep making the drive is simple. The person you see on
                        day one is the person you see on day three hundred. No revolving door of strangers. No retelling
                        the worst year of your life to a different face every visit.
                    </p>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Casey Hester runs Life Balance with Kim Underwood, our office manager. That is the entire
                        front-of-house. When you call, Kim answers. When you sit down, Casey is there. The continuity
                        is the medicine.
                    </p>
                </div>
            </section>

            {/* FAQ */}
            <FAQ
                theme="dark"
                eyebrow={`${town.fullName} &middot; FAQ`}
                title={`${town.name} questions we answer most`}
                items={[
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
                        q: `Do you accept ${town.name} patients on insurance?`,
                        aText:
                            'Yes. We accept most major commercial plans and offer self-pay pricing. Call (662) 640-4004 to verify your specific plan.',
                        a: (
                            <>
                                Yes &mdash; we accept most major commercial plans and offer self-pay pricing. Call{' '}
                                <a href="tel:6626404004" className="text-gold-accent underline decoration-1 underline-offset-4">
                                    (662) 640-4004
                                </a>{' '}
                                to verify your specific plan.
                            </>
                        ),
                    },
                    {
                        q: `Does ${town.name} have a Suboxone provider closer?`,
                        aText: `Coverage in ${town.county} is limited. Many of our addiction patients drive in from across north Mississippi specifically because continuous, same-provider MAT is hard to find locally.`,
                        a: (
                            <>
                                Coverage in {town.county} is limited. Many of our addiction patients drive in from
                                across north Mississippi specifically because continuous, same-provider MAT is hard to
                                find locally.
                            </>
                        ),
                    },
                    {
                        q: 'Can I do follow-up visits by telehealth?',
                        aText:
                            'For established patients, follow-up visits can often be done by telehealth in compliance with Mississippi rules. The first visit is in person.',
                        a: (
                            <>
                                For established patients, follow-up visits can often be done by telehealth in compliance
                                with Mississippi rules. <strong>The first visit is in person.</strong>
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

            {/* Nearby towns / internal linking */}
            <section className="py-16 bg-white border-t border-slate-100">
                <div className="max-w-5xl mx-auto px-6">
                    <p className="text-sm tracking-widest uppercase text-teal-700 mb-3">Other Communities We Serve</p>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                        Nearby towns who drive to Oxford.
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mb-8">
                        Patients from across north Mississippi make the drive to Life Balance because continuity of
                        care is rare in our region. If you're nearer one of these communities, the same drive applies.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {town.nearbyTowns.map((t) => (
                            <Link
                                key={t.slug}
                                to={`/psychiatric-care-${t.slug}-ms`}
                                className="block py-3 px-4 border border-slate-200 rounded hover:border-teal-700 hover:bg-teal-50/40 transition-colors text-slate-900 font-medium"
                            >
                                Psychiatric Care &mdash; {t.name} &rarr;
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Closing CTA */}
            <section className="py-16 bg-grey-green border-t border-white/10">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <p className="font-serif text-xl font-medium mb-6 text-white">
                        From {town.name}? We'd love to see you.
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
