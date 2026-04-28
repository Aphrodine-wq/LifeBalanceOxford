import React from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { pageMeta } from '../seo/pages.js';
import { ClockSketch, HandSketch, PathSketch, WaveRule, ArrowSketch } from './Sketches';
import FAQ from './FAQ';

const AdderallTreatment: React.FC = () => {
    usePageMeta(pageMeta['/adderall-addiction-treatment-oxford-ms']);

    return (
        <div className="bg-white min-h-screen animate-fade-in">

            {/* Opener — clinical, restrained */}
            <section className="bg-cream pt-20 pb-24">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="w-10 h-px bg-[#3d5a4c] mb-8"></div>
                    <p className="text-sm tracking-widest uppercase text-slate-500 mb-5">
                        Stimulant Use Disorder &nbsp;·&nbsp; Oxford &amp; Ole Miss
                    </p>
                    <h1 className="font-serif text-[2.4rem] md:text-[3rem] leading-[1.1] font-semibold text-slate-900 mb-8 max-w-3xl">
                        Stimulant use disorder is more common than people say. It's also more treatable.
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl leading-relaxed mb-10">
                        Private psychiatric care for prescription stimulant misuse, ADHD evaluation, and co-occurring
                        anxiety or depression — for patients in the Ole Miss community and across North Mississippi.
                        No lecture, no record on a transcript.
                    </p>
                    <div className="flex flex-wrap items-center gap-5 text-slate-700">
                        <a href="tel:6626404004" className="text-lg underline decoration-[#3d5a4c] decoration-2 underline-offset-[6px] hover:text-slate-900 transition-colors">
                            Call (662) 640-4004
                        </a>
                        <span className="opacity-50">·</span>
                        <span className="text-sm opacity-80">42 CFR Part 2 confidentiality</span>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="font-serif text-2xl md:text-3xl text-slate-900 leading-snug mb-10">
                        For most patients, the slide from regular use to a real problem is gradual.
                        <span className="italic"> By the time it's clear, it doesn't feel like a choice anymore.</span>
                    </div>
                    <p className="text-lg text-slate-600 leading-relaxed mb-5">
                        Stimulant use disorder is what the medical literature calls it. It can involve prescription
                        medications — Adderall, Vyvanse, Ritalin, Concerta — or non-prescription stimulants. It can
                        develop from misuse of someone else's prescription or from escalation on your own. The pathway
                        in matters less than the path out.
                    </p>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        It is not weakness or stupidity. It is a treatable medical condition, and the way out involves
                        real psychiatric care — usually starting with a careful look at whether ADHD, anxiety, or
                        depression has been driving the pattern underneath. We do this work weekly. Most patients are
                        surprised at how quickly things start moving when the right things get treated.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-[#faf7f1]">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="flex items-start gap-8 mb-10">
                        <ClockSketch className="hidden md:block text-slate-900 w-20 flex-shrink-0 mt-1" />
                        <div>
                            <p className="text-sm tracking-widest uppercase text-slate-500 mb-3">One — when use becomes a disorder</p>
                            <h2 className="font-serif text-4xl text-slate-900 mb-6 leading-tight">
                                The line that already crossed.
                            </h2>
                        </div>
                    </div>

                    <div className="md:pl-28 space-y-6 text-lg text-slate-700 leading-relaxed">
                        <p>
                            Stimulant use disorder isn't about whether you have a prescription or whether your friend
                            does. It's about behavior. The clinical criteria, in plainer language:
                        </p>
                        <ul className="space-y-3 list-none pl-4">
                            <li>— Using more, or more often, than you meant to.</li>
                            <li>— Wanting to cut back and not being able to.</li>
                            <li>— Spending real time getting it, using it, or recovering from it.</li>
                            <li>— Cravings between doses.</li>
                            <li>— Using getting in the way of school, work, or relationships.</li>
                            <li>— Using even when you know it's hurting you.</li>
                            <li>— Tolerance — the same dose doesn't do what it used to.</li>
                            <li>— Withdrawal — exhaustion, anhedonia, brain fog, depression when you stop.</li>
                        </ul>
                        <p>
                            Two or three of these is mild stimulant use disorder. Four or five is moderate. Six or more
                            is severe. Most students in trouble fall into mild or moderate before they ever consider
                            calling. We see them at every stage.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-4xl mx-auto px-6">
                    <p className="text-sm tracking-widest uppercase text-slate-500 mb-3">Two — what treatment actually looks like</p>
                    <h2 className="font-serif text-4xl text-slate-900 mb-10 leading-tight max-w-2xl">
                        There's no buprenorphine-equivalent for stimulants. There are real tools.
                    </h2>

                    <div className="space-y-10 md:pl-6">
                        <div className="grid grid-cols-12 gap-6">
                            <div className="col-span-12 md:col-span-2">
                                <div className="font-serif text-5xl text-gold-accent leading-none">01</div>
                            </div>
                            <div className="col-span-12 md:col-span-10 text-slate-700 text-lg leading-relaxed">
                                <p className="font-semibold text-slate-900 mb-2">Diagnose what's actually underneath.</p>
                                <p>
                                    For a meaningful percentage of patients in this situation, untreated ADHD is the
                                    underlying issue. For others, anxiety or depression is the driver, with stimulants
                                    serving as self-medication. The first task is figuring out which — through a careful
                                    psychiatric evaluation — because the treatment plan depends entirely on it.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-12 gap-6">
                            <div className="col-span-12 md:col-span-2">
                                <div className="font-serif text-5xl text-gold-accent leading-none">02</div>
                            </div>
                            <div className="col-span-12 md:col-span-10 text-slate-700 text-lg leading-relaxed">
                                <p className="font-semibold text-slate-900 mb-2">Stabilize the crash.</p>
                                <p>
                                    Stopping stimulants suddenly produces real withdrawal — exhaustion, anhedonia, brain
                                    fog, sometimes depression severe enough to be dangerous. Casey can manage the
                                    withdrawal with sleep regulation, antidepressant or anxiolytic medication if
                                    appropriate, and clear expectations on how long the worst of it lasts (typically
                                    seven to fourteen days for the worst, with gradual improvement over months).
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-12 gap-6">
                            <div className="col-span-12 md:col-span-2">
                                <div className="font-serif text-5xl text-gold-accent leading-none">03</div>
                            </div>
                            <div className="col-span-12 md:col-span-10 text-slate-700 text-lg leading-relaxed">
                                <p className="font-semibold text-slate-900 mb-2">Treat the underlying condition.</p>
                                <p>
                                    If you have ADHD: appropriate, monitored prescribing of long-acting non-abusable
                                    stimulants or non-stimulant alternatives (Strattera, Wellbutrin, guanfacine), with
                                    a structured prescribing plan that prevents re-escalation. If you have anxiety or
                                    depression underneath: SSRIs, SNRIs, or other psychiatric medications appropriate
                                    to your case.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-12 gap-6">
                            <div className="col-span-12 md:col-span-2">
                                <div className="font-serif text-5xl text-gold-accent leading-none">04</div>
                            </div>
                            <div className="col-span-12 md:col-span-10 text-slate-700 text-lg leading-relaxed">
                                <p className="font-semibold text-slate-900 mb-2">Behavioral and structural support.</p>
                                <p>
                                    Stimulant use disorder responds to behavioral interventions — particularly
                                    contingency management and cognitive-behavioral approaches. We refer to local
                                    therapists in Oxford and coordinate care. For Ole Miss students, we can sometimes
                                    work with the Counseling Center for therapy support without sharing prescribing
                                    records.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <WaveRule className="text-slate-300 w-40 mx-auto my-4" />

            <section className="py-20 bg-[#faf7f1]">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="flex items-start gap-8 mb-10">
                        <HandSketch className="hidden md:block text-slate-900 w-20 flex-shrink-0 mt-1" />
                        <div>
                            <p className="text-sm tracking-widest uppercase text-slate-500 mb-3">Three — privacy, again</p>
                            <h2 className="font-serif text-4xl text-slate-900 mb-6 leading-tight max-w-2xl">
                                What a treatment record means — and doesn't mean — for your future.
                            </h2>
                        </div>
                    </div>

                    <div className="md:pl-28 space-y-6 text-lg text-slate-700 leading-relaxed">
                        <p>
                            Stimulant use disorder treatment is covered by 42 CFR Part 2, the same federal
                            confidentiality rule that protects opioid use treatment. Records cannot be released to
                            employers, schools, or family without your written consent.
                        </p>
                        <p>
                            <span className="font-semibold text-slate-900">Will it appear on a transcript?</span> No.
                            Outside medical care has no path to academic records.
                        </p>
                        <p>
                            <span className="font-semibold text-slate-900">Will it affect graduate or professional school
                            applications?</span> Most application forms only require disclosure of active legal or
                            disciplinary issues. Treated, stable medical conditions — including past stimulant use
                            disorder — are not typically required disclosures.
                        </p>
                        <p>
                            <span className="font-semibold text-slate-900">Will it affect bar admission, nursing
                            licensure, pharmacy board, or medical board?</span> Most state boards distinguish between
                            active untreated conditions (which they care about) and treated, stable conditions (which
                            they generally don't). The riskier path for licensure is a future relapse or crisis event,
                            not a treated history.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <PathSketch className="text-slate-400 w-60 mx-auto mb-8" />
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                        For the broader piece on private psychiatric care for the Ole Miss community — students,
                        graduate students, faculty, staff — start here.
                    </p>
                    <Link
                        to="/ole-miss-suboxone-doctor"
                        className="inline-flex items-center gap-3 text-lg text-slate-900 font-serif underline decoration-gold-accent decoration-2 underline-offset-[6px] hover:text-gold-accent transition-colors"
                    >
                        Private care for the Ole Miss community
                        <ArrowSketch className="w-8 text-gold-accent" />
                    </Link>
                </div>
            </section>

            <FAQ
                theme="light"
                eyebrow="Adderall and stimulant questions"
                title="What students and families ask about stimulant treatment"
                items={[
                    {
                        q: 'Is there a medication that treats stimulant use disorder the way buprenorphine treats opioid use disorder?',
                        aText:
                            'No. Buprenorphine works for opioid use disorder because of how opioid receptors work. Stimulant use disorder is a different mechanism — there is no FDA-approved medication that treats it the same way. Treatment combines management of withdrawal, treatment of underlying ADHD or mood conditions, and behavioral support.',
                        a: (
                            <>
                                No — different receptor systems. Stimulant use disorder treatment combines withdrawal management,
                                treatment of underlying conditions (often <strong>ADHD, anxiety, or depression</strong>), and
                                behavioral support.
                            </>
                        ),
                    },
                    {
                        q: 'What if I think I have ADHD underneath this? Can you treat both?',
                        aText:
                            'Yes. This is a common scenario. The first step is a careful evaluation to confirm the ADHD diagnosis and any use disorder. From there, treatment options include long-acting stimulant medications with structured prescribing safeguards, non-stimulant ADHD medications (Strattera, Wellbutrin, guanfacine), or a combined approach. The plan is built with you, not handed to you.',
                        a: (
                            <>
                                Yes — common scenario. Careful evaluation first, then options including long-acting stimulants
                                with structured safeguards, <strong>non-stimulants (Strattera, Wellbutrin, guanfacine)</strong>,
                                or a combined approach.
                            </>
                        ),
                    },
                    {
                        q: 'How bad is stimulant withdrawal?',
                        aText:
                            'Stimulant withdrawal is rarely physically dangerous, but it can be psychologically severe. Exhaustion, brain fog, anhedonia, low mood, sometimes depression severe enough to require monitoring. The worst typically lasts 7–14 days. Significant improvement comes over weeks, with full recovery of normal energy and motivation taking months for heavy users.',
                        a: (
                            <>
                                Rarely physically dangerous, but often psychologically severe. Exhaustion, brain fog, anhedonia,
                                low mood. Worst is <strong>7–14 days</strong>. Significant improvement over weeks, full recovery
                                over months.
                            </>
                        ),
                    },
                    {
                        q: 'Will my parents find out if I use my parent insurance?',
                        aText:
                            'BCBS and most insurers send an Explanation of Benefits to the policyholder. Procedure code and amount appear; diagnosis usually does not. For students who want full privacy from a parent policyholder, we offer self-pay. Many of our Ole Miss patients pay self-pay for the visit and use insurance only for the medication at the pharmacy.',
                        a: (
                            <>
                                EOB is mailed to policyholder — code and amount appear, diagnosis usually doesn't. Many students
                                self-pay the visit and use insurance only for the pharmacy fill. Kim walks through the tradeoff on
                                the first call.
                            </>
                        ),
                    },
                    {
                        q: 'Will Ole Miss know about my treatment?',
                        aText:
                            'No. Life Balance is a private practice unaffiliated with the University of Mississippi. Treatment records do not appear in any Ole Miss system, on transcripts, or in advising files.',
                        a: (
                            <>
                                No. We are a private practice unaffiliated with Ole Miss. Records do not appear in any university
                                system, on transcripts, or in advising files.
                            </>
                        ),
                    },
                    {
                        q: 'Do you treat cocaine and methamphetamine use disorder as well as prescription stimulants?',
                        aText:
                            'Yes. Treatment for stimulant use disorder applies across substances — prescription stimulants like Adderall, Vyvanse, Ritalin, and Concerta, as well as cocaine and methamphetamine. The protocols are the same.',
                        a: (
                            <>
                                Yes. The same protocols apply across prescription stimulants and non-prescription stimulants.
                            </>
                        ),
                    },
                    {
                        q: 'I have an exam in two weeks and need to keep functioning. Can you help?',
                        aText:
                            'Yes. We do not require abstinence to start treatment, and we do not pull stimulants out from under students mid-semester unless safety requires it. We can stabilize, plan a controlled taper or replacement, and time the harder transitions for breaks. Show up. We work with the calendar you actually have.',
                        a: (
                            <>
                                Yes. We don't require abstinence to start, and we don't yank stimulants mid-semester unless safety
                                demands it. We stabilize first, plan controlled changes, time the hard parts for breaks.
                            </>
                        ),
                    },
                ]}
            />

            <section className="py-24 bg-dark-green">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">
                        Better to call than to keep escalating.
                    </h2>
                    <p className="text-lg text-cream mb-10 max-w-xl mx-auto leading-relaxed">
                        Most new patients are seen within the same week. We do this without lectures and without
                        records that follow you anywhere.
                    </p>
                    <a
                        href="tel:6626404004"
                        className="inline-block font-serif text-3xl text-gold-accent underline decoration-2 underline-offset-[10px] hover:text-white transition-colors"
                    >
                        (662) 640-4004
                    </a>
                </div>
            </section>
        </div>
    );
};

export default AdderallTreatment;
