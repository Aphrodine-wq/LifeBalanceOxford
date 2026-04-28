import React from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { pageMeta } from '../seo/pages.js';
import { PillSketch, ClockSketch, PathSketch, HandSketch, WaveRule, ArrowSketch } from './Sketches';
import FAQ from './FAQ';

const Sublocade: React.FC = () => {
    usePageMeta(pageMeta['/sublocade-doctor-oxford-ms']);

    return (
        <div className="bg-white min-h-screen animate-fade-in">

            <section className="bg-dark-green pt-20 pb-24">
                <div className="max-w-4xl mx-auto px-6">
                    <p className="text-sm tracking-widest uppercase text-gold-accent mb-6">
                        Sublocade Injection &nbsp;·&nbsp; Oxford &amp; North Mississippi
                    </p>
                    <h1 className="font-serif text-[2.6rem] md:text-[3.4rem] leading-[1.08] font-semibold text-white mb-8 max-w-3xl">
                        One shot a month.<br />
                        <span className="text-gold-accent italic font-normal">No daily decision.</span>
                    </h1>
                    <p className="text-xl text-cream max-w-2xl leading-relaxed mb-10">
                        Sublocade is a once-a-month buprenorphine injection given in our Oxford office — the same medicine
                        as Suboxone, with steady blood levels and nothing for you to remember between visits.
                    </p>
                    <div className="flex flex-wrap items-center gap-5 text-cream">
                        <a href="tel:6626404004" className="text-lg underline decoration-gold-accent decoration-2 underline-offset-[6px] hover:text-white transition-colors">
                            Call (662) 640-4004
                        </a>
                        <span className="opacity-50">·</span>
                        <span className="text-sm opacity-80">Same-week appointments &middot; Most insurance accepted</span>
                    </div>
                </div>
            </section>

            {/* Letter intro */}
            <section className="py-20">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="font-serif text-2xl md:text-3xl text-slate-900 leading-snug mb-10">
                        For a lot of people, the daily film is the right tool. For others, the daily decision <em>is</em> the
                        problem. Sublocade was built for the second group.
                    </div>
                    <p className="text-lg text-slate-600 leading-relaxed mb-5">
                        Sublocade is extended-release buprenorphine — the same active ingredient as Suboxone film — given
                        as a small injection just under the skin of the abdomen, once a month. It forms a depot that
                        slowly releases medication into your bloodstream over thirty days. Steady blood levels. No
                        peaks, no troughs. Nothing in your medicine cabinet.
                    </p>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Patients who have struggled with daily dosing — missed mornings, stolen films, kids in the
                        house, partners who shouldn't be in the medicine cabinet, travel for work — describe Sublocade
                        as the moment recovery stopped feeling like a daily task and started feeling like a part of
                        their actual life.
                    </p>
                </div>
            </section>

            {/* What it is, how it works */}
            <section className="py-20 bg-[#faf7f1]">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="flex items-start gap-8 mb-10">
                        <PillSketch className="hidden md:block text-slate-900 w-24 flex-shrink-0 mt-2" />
                        <div>
                            <p className="text-sm tracking-widest uppercase text-slate-500 mb-3">One — what Sublocade actually is</p>
                            <h2 className="font-serif text-4xl text-slate-900 mb-6 leading-tight">
                                Buprenorphine, slowly released, for a month at a time.
                            </h2>
                        </div>
                    </div>

                    <div className="space-y-6 text-lg text-slate-700 leading-relaxed md:pl-32">
                        <p>
                            <span className="font-semibold text-slate-900">The medicine.</span> Same buprenorphine you'd
                            get in Suboxone film — a partial opioid agonist that occupies your receptors without
                            producing the euphoria of full agonists like heroin, fentanyl, or oxycodone. The withdrawal
                            stops, the cravings quiet, you feel like a person again.
                        </p>
                        <p>
                            <span className="font-semibold text-slate-900">The delivery.</span> A small subcutaneous
                            injection in the abdomen — about the size of a 23-gauge needle. The medication forms a
                            slow-releasing depot under the skin. Within hours, blood levels begin to rise. Within a
                            week, they reach steady state. They stay there for the rest of the month.
                        </p>
                        <p>
                            <span className="font-semibold text-slate-900">The dosing.</span> Standard maintenance dose
                            is 100&nbsp;mg per month. Some patients do better at 300&nbsp;mg, especially during the first two
                            months. We adjust based on cravings, withdrawal symptoms, and bloodwork — not a calendar.
                        </p>
                    </div>
                </div>
            </section>

            {/* Who it fits */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-6">
                    <p className="text-sm tracking-widest uppercase text-slate-500 mb-3">Two — who Sublocade fits</p>
                    <h2 className="font-serif text-4xl text-slate-900 mb-10 leading-tight max-w-2xl">
                        The patients who switch and don't look back.
                    </h2>

                    <div className="space-y-8 md:pl-6">
                        <div className="grid grid-cols-12 gap-6">
                            <div className="col-span-12 md:col-span-2">
                                <div className="font-serif text-5xl text-gold-accent leading-none">01</div>
                            </div>
                            <div className="col-span-12 md:col-span-10 text-slate-700 text-lg leading-relaxed">
                                <p className="font-semibold text-slate-900 mb-2">Patients who travel for work.</p>
                                <p>
                                    Truckers, oilfield, traveling nurses, construction crews on out-of-state jobs.
                                    Carrying buprenorphine across state lines is legal but stressful. With Sublocade you
                                    don't carry it at all — it's already in you.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-12 gap-6">
                            <div className="col-span-12 md:col-span-2">
                                <div className="font-serif text-5xl text-gold-accent leading-none">02</div>
                            </div>
                            <div className="col-span-12 md:col-span-10 text-slate-700 text-lg leading-relaxed">
                                <p className="font-semibold text-slate-900 mb-2">Households with kids or pets.</p>
                                <p>
                                    A single Suboxone film can be lethal to a small child or a pet. Locking it up works
                                    until someone forgets. Sublocade removes the medication from the home entirely.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-12 gap-6">
                            <div className="col-span-12 md:col-span-2">
                                <div className="font-serif text-5xl text-gold-accent leading-none">03</div>
                            </div>
                            <div className="col-span-12 md:col-span-10 text-slate-700 text-lg leading-relaxed">
                                <p className="font-semibold text-slate-900 mb-2">Patients in early recovery who keep losing or selling films.</p>
                                <p>
                                    Diversion, theft, partners using, friends asking — there are a lot of ways for a
                                    monthly prescription of films to walk out of a house. Sublocade closes that
                                    conversation.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-12 gap-6">
                            <div className="col-span-12 md:col-span-2">
                                <div className="font-serif text-5xl text-gold-accent leading-none">04</div>
                            </div>
                            <div className="col-span-12 md:col-span-10 text-slate-700 text-lg leading-relaxed">
                                <p className="font-semibold text-slate-900 mb-2">Anyone who wants to stop thinking about the medicine.</p>
                                <p>
                                    A meaningful number of patients describe daily dosing as a constant reminder of the
                                    problem. Sublocade lets you go a month without thinking about it. For some people
                                    that is the difference between recovery feeling like a job and recovery feeling like
                                    a life.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-12 gap-6">
                            <div className="col-span-12 md:col-span-2">
                                <div className="font-serif text-5xl text-gold-accent leading-none">05</div>
                            </div>
                            <div className="col-span-12 md:col-span-10 text-slate-700 text-lg leading-relaxed">
                                <p className="font-semibold text-slate-900 mb-2">Ole Miss students heading home for break.</p>
                                <p>
                                    Out-of-state breaks complicate daily films — different time zones, parents at home,
                                    privacy issues. A Sublocade shot the week before break carries you through to spring
                                    semester without any of that.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <WaveRule className="text-slate-300 w-40 mx-auto my-4" />

            {/* The protocol */}
            <section className="py-20 bg-[#faf7f1]">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="flex items-start gap-8 mb-10">
                        <ClockSketch className="hidden md:block text-slate-900 w-20 flex-shrink-0 mt-1" />
                        <div>
                            <p className="text-sm tracking-widest uppercase text-slate-500 mb-3">Three — the protocol</p>
                            <h2 className="font-serif text-4xl text-slate-900 mb-6 leading-tight">
                                You can't go straight to the shot. Here's why, and what the path looks like.
                            </h2>
                        </div>
                    </div>

                    <div className="md:pl-28 space-y-6 text-lg text-slate-700 leading-relaxed">
                        <p>
                            FDA labeling — and clinical good sense — requires that you be stabilized on transmucosal
                            buprenorphine for at least seven days before your first Sublocade injection. The goal is
                            making sure your body tolerates the medicine and that we have your dose dialed in before we
                            commit to a thirty-day depot.
                        </p>
                        <p>
                            <span className="font-semibold text-slate-900">Week one.</span> Suboxone film induction in
                            our office or by telehealth. We start at two to four milligrams and titrate up over the
                            first day. Most patients land between twelve and twenty-four milligrams daily.
                        </p>
                        <p>
                            <span className="font-semibold text-slate-900">Week two.</span> First Sublocade injection in
                            the office once you've had at least seven days of stable Suboxone dosing. The injection
                            takes about thirty seconds. You'll feel the depot under the skin — it shrinks over the
                            following weeks.
                        </p>
                        <p>
                            <span className="font-semibold text-slate-900">Month two.</span> Second injection, twenty-six
                            to thirty days later. We watch for breakthrough cravings between weeks three and four — if
                            you have any, we either adjust the dose to 300&nbsp;mg or schedule the next shot a few days
                            earlier.
                        </p>
                        <p>
                            <span className="font-semibold text-slate-900">Month three forward.</span> Maintenance.
                            Same-day appointments for the injection. Twenty minutes in the office. Out the door.
                        </p>
                    </div>
                </div>
            </section>

            {/* Insurance + cost */}
            <section className="py-20">
                <div className="max-w-3xl mx-auto px-6">
                    <p className="text-sm tracking-widest uppercase text-slate-500 mb-3">Four — paying for it</p>
                    <h2 className="font-serif text-4xl text-slate-900 mb-6 leading-tight">
                        How insurance handles Sublocade in Mississippi.
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                        Sublocade almost always requires a prior authorization, which means more paperwork than a
                        regular Suboxone prescription. We handle that paperwork. You don't.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed mb-5">
                        <span className="font-semibold text-slate-900">Blue Cross Blue Shield of Mississippi</span> covers
                        Sublocade with prior auth on most plans. We submit. Approval typically takes three to seven
                        business days.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed mb-5">
                        <span className="font-semibold text-slate-900">Mississippi Medicaid and Magnolia Health</span>{' '}
                        cover Sublocade for opioid use disorder under their MAT benefit. Prior auth required.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed mb-5">
                        <span className="font-semibold text-slate-900">Indivior, the manufacturer,</span> runs a patient
                        assistance program called inSupport that can substantially reduce or eliminate cost for patients
                        who qualify. We help patients enroll.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                        <span className="font-semibold text-slate-900">Self-pay</span> is possible but expensive at full
                        retail. For most self-pay patients we recommend daily Suboxone film instead.
                    </p>
                </div>
            </section>

            <WaveRule className="text-slate-300 w-40 mx-auto my-4" />

            {/* Side effects + safety */}
            <section className="py-20 bg-[#faf7f1]">
                <div className="max-w-3xl mx-auto px-6">
                    <p className="text-sm tracking-widest uppercase text-slate-500 mb-3">Five — what to expect, what to watch for</p>
                    <h2 className="font-serif text-4xl text-slate-900 mb-6 leading-tight">
                        Side effects and the injection-site reality.
                    </h2>

                    <div className="space-y-10 mt-12">
                        <div>
                            <h3 className="font-serif text-xl text-slate-900 mb-3">The injection itself.</h3>
                            <p className="text-slate-700 leading-relaxed">
                                You'll feel a small lump under the skin for two to three weeks — that's the depot. It is
                                not a cyst, not a problem, and it shrinks. Bruising and tenderness are common. Itching
                                is common. Hot compress and ibuprofen handle most of it.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-serif text-xl text-slate-900 mb-3">Common medicine side effects.</h3>
                            <p className="text-slate-700 leading-relaxed">
                                Same as Suboxone — constipation, mild headache the first weeks, occasional nausea, dry
                                mouth, sweating. Most of it settles within a month. The advantage of steady-state
                                Sublocade levels is that you don't get the dose-related fluctuations some patients feel
                                on daily film.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-serif text-xl text-slate-900 mb-3">Worth a phone call.</h3>
                            <p className="text-slate-700 leading-relaxed">
                                Severe injection-site infection — redness expanding, warmth, fever. Significant
                                breakthrough cravings before the next shot. Trouble breathing, severe abdominal pain,
                                yellowing of skin or eyes — rare, call us or 911. Pregnancy at any point — tell us
                                immediately so we can plan.
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
                        For the full walk through Suboxone — what it is, the induction protocol, and the comparison
                        between film and Sublocade — start here.
                    </p>
                    <Link
                        to="/suboxone-doctor-oxford-ms"
                        className="inline-flex items-center gap-3 text-lg text-slate-900 font-serif underline decoration-gold-accent decoration-2 underline-offset-[6px] hover:text-gold-accent transition-colors"
                    >
                        The full Suboxone treatment guide
                        <ArrowSketch className="w-8 text-gold-accent" />
                    </Link>
                </div>
            </section>

            <FAQ
                theme="light"
                eyebrow="Sublocade questions"
                title="What patients ask before their first injection"
                items={[
                    {
                        q: 'Is Sublocade the same medicine as Suboxone?',
                        aText:
                            'Yes — both contain buprenorphine. Suboxone is daily transmucosal film with naloxone added. Sublocade is monthly extended-release buprenorphine without naloxone, given as a subcutaneous injection in the abdomen.',
                        a: (
                            <>
                                Yes — both contain <strong>buprenorphine</strong>. Suboxone is daily film with naloxone. Sublocade is
                                monthly extended-release buprenorphine without naloxone, injected under the skin of the abdomen.
                            </>
                        ),
                    },
                    {
                        q: 'Can I start Sublocade without trying Suboxone film first?',
                        aText:
                            'No. FDA labeling requires at least seven days of stable transmucosal buprenorphine before the first Sublocade injection, to confirm tolerance and dial in the dose before committing to a 30-day depot.',
                        a: (
                            <>
                                No. FDA labeling requires <strong>at least seven days</strong> of stable Suboxone dosing first — to
                                confirm tolerance and dial in the right dose before committing to a thirty-day depot.
                            </>
                        ),
                    },
                    {
                        q: 'What happens if I miss a Sublocade appointment?',
                        aText:
                            'Buprenorphine levels begin to fall after week five or six post-injection. If you have to miss your monthly appointment, call as soon as you know — we can usually reschedule within the buffer week. If a longer gap is unavoidable, we can bridge with Suboxone film.',
                        a: (
                            <>
                                Levels begin to fall around week 5–6 post-injection. Call as soon as you know — we can usually
                                reschedule inside the buffer week. For longer gaps we bridge with Suboxone film.
                            </>
                        ),
                    },
                    {
                        q: 'How long do most patients stay on Sublocade?',
                        aText:
                            'There is no fixed answer. Some patients use Sublocade for six to twelve months as a stabilization tool, then transition to Suboxone film or taper off entirely. Others remain on monthly injections indefinitely because it is what keeps them well. Both are clinically valid.',
                        a: (
                            <>
                                Some patients use Sublocade for six to twelve months, then transition to film or taper. Others
                                stay on monthly injections indefinitely. Both are clinically valid — the right answer is what
                                keeps you well.
                            </>
                        ),
                    },
                    {
                        q: 'Does Sublocade hurt?',
                        aText:
                            'The injection itself takes about 30 seconds and feels like a small pinch. A firm depot remains under the skin for 2–3 weeks and may be tender or itchy. Most patients describe it as far easier than expected.',
                        a: (
                            <>
                                About thirty seconds, feels like a pinch. A firm depot stays under the skin for two to three
                                weeks — tender or itchy at times. Most patients say it's easier than expected.
                            </>
                        ),
                    },
                    {
                        q: 'Will my insurance cover Sublocade?',
                        aText:
                            'Most BCBS Mississippi, Mississippi Medicaid, and Magnolia Health plans cover Sublocade with prior authorization. Our office submits the prior auth — approval typically takes 3–7 business days. Indivior also runs a patient assistance program (inSupport) for qualifying patients.',
                        a: (
                            <>
                                Most plans cover Sublocade with prior authorization. <strong>BCBS Mississippi, Medicaid, Magnolia
                                Health</strong> all cover it. We handle the prior auth. Indivior's <strong>inSupport</strong>{' '}
                                program helps qualifying patients further.
                            </>
                        ),
                    },
                    {
                        q: 'Can I drink alcohol or take benzodiazepines on Sublocade?',
                        aText:
                            'No. Combining buprenorphine with alcohol or benzodiazepines (Xanax, Klonopin, Valium) significantly increases the risk of respiratory depression and overdose. Tell us about every medication and substance you use, prescribed or not. We treat alcohol use disorder and anxiety as well, so don\'t hide it.',
                        a: (
                            <>
                                No. Buprenorphine plus alcohol or benzos (Xanax, Klonopin, Valium) raises overdose risk
                                significantly. Tell us about everything you take. We treat alcohol use disorder and anxiety —
                                don't hide it.
                            </>
                        ),
                    },
                    {
                        q: 'I am pregnant. Can I get Sublocade?',
                        aText:
                            'Buprenorphine is the gold standard for opioid use disorder in pregnancy, but most pregnant patients use daily Suboxone film rather than Sublocade because dosing flexibility is more important during pregnancy. Tell us immediately if you are pregnant or planning to be — we coordinate with your OB.',
                        a: (
                            <>
                                Buprenorphine is the gold standard in pregnancy, but most pregnant patients use daily film instead
                                of Sublocade because dosing needs to be flexible. Tell us immediately if you're pregnant — we
                                coordinate with your OB from the start.
                            </>
                        ),
                    },
                ]}
            />

            <section className="py-24 bg-dark-green">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">
                        Ready when you are.
                    </h2>
                    <p className="text-lg text-cream mb-10 max-w-xl mx-auto leading-relaxed">
                        Call during business hours. Kim answers the phone. We'll talk through whether Sublocade fits and
                        get you on a path that works for your life.
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

export default Sublocade;
