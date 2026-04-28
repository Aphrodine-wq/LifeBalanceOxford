import React from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { pageMeta } from '../seo/pages.js';
import { ClockSketch, HandSketch, PathSketch, PillSketch, WaveRule, ArrowSketch } from './Sketches';
import FAQ from './FAQ';

const FentanylTreatment: React.FC = () => {
    usePageMeta(pageMeta['/fentanyl-addiction-treatment-mississippi']);

    return (
        <div className="bg-white min-h-screen animate-fade-in">

            <section className="bg-dark-green pt-20 pb-24">
                <div className="max-w-4xl mx-auto px-6">
                    <p className="text-sm tracking-widest uppercase text-gold-accent mb-6">
                        Fentanyl Addiction Treatment &nbsp;·&nbsp; Oxford &amp; Mississippi
                    </p>
                    <h1 className="font-serif text-[2.6rem] md:text-[3.4rem] leading-[1.08] font-semibold text-white mb-8 max-w-3xl">
                        Fentanyl is a different problem.<br />
                        <span className="text-gold-accent italic font-normal">The medicine is the same.</span>
                    </h1>
                    <p className="text-xl text-cream max-w-2xl leading-relaxed mb-10">
                        Buprenorphine works for fentanyl-driven opioid use disorder — but the induction timing and
                        microdosing protocol are not the same as for heroin or pills. We treat
                        what's actually in front of us.
                    </p>
                    <div className="flex flex-wrap items-center gap-5 text-cream">
                        <a href="tel:6626404004" className="text-lg underline decoration-gold-accent decoration-2 underline-offset-[6px] hover:text-white transition-colors">
                            Call (662) 640-4004
                        </a>
                        <span className="opacity-50">·</span>
                        <span className="text-sm opacity-80">Same-week start &middot; Telehealth statewide</span>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="font-serif text-2xl md:text-3xl text-slate-900 leading-snug mb-10">
                        Most of the opioids in Mississippi now contain fentanyl. Often only fentanyl. Many of our new
                        patients haven't actually used heroin or pills in years —
                        <span className="italic"> they've been using fentanyl thinking it was something else.</span>
                    </div>
                    <p className="text-lg text-slate-600 leading-relaxed mb-5">
                        That changes how addiction looks, how withdrawal looks, and how induction has to be timed. The
                        medicine itself — buprenorphine — works exactly the same. What changes is the protocol getting
                        onto it.
                    </p>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        We have inducted hundreds of fentanyl patients onto Suboxone. Some same-day, some
                        with a microdosing protocol over a week. The plan depends on you, not on the textbook.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-[#faf7f1]">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="flex items-start gap-8 mb-10">
                        <ClockSketch className="hidden md:block text-slate-900 w-20 flex-shrink-0 mt-1" />
                        <div>
                            <p className="text-sm tracking-widest uppercase text-slate-500 mb-3">One — why fentanyl induction is different</p>
                            <h2 className="font-serif text-4xl text-slate-900 mb-6 leading-tight">
                                Fentanyl stores in fat. That changes everything about timing.
                            </h2>
                        </div>
                    </div>

                    <div className="md:pl-28 space-y-6 text-lg text-slate-700 leading-relaxed">
                        <p>
                            Heroin and oxycodone clear from your body in a few hours. Fentanyl is lipophilic — it gets
                            absorbed into fat tissue and slowly leaches back out for days after your last use. That
                            means your blood levels can stay high enough to trigger precipitated withdrawal long after
                            you'd expect to be in normal withdrawal.
                        </p>
                        <p>
                            For most patients using only short-acting opioids, twelve to twenty-four hours of abstinence
                            is enough before the first Suboxone dose. <span className="font-semibold text-slate-900">For
                            fentanyl, that's not enough.</span> The standard recommendation is now thirty-six to
                            seventy-two hours, sometimes longer, and we use the COWS withdrawal scale — not just the
                            clock — to confirm your receptors are clear.
                        </p>
                        <p>
                            For patients who can't tolerate that long a wait, we offer a <span className="font-semibold text-slate-900">microdosing
                            (Bernese) protocol</span> — small, escalating doses of buprenorphine started while you're
                            still using, gradually replacing the fentanyl on your receptors over five to seven days. No
                            withdrawal window. We have done this many times.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-4xl mx-auto px-6">
                    <p className="text-sm tracking-widest uppercase text-slate-500 mb-3">Two — the two paths in</p>
                    <h2 className="font-serif text-4xl text-slate-900 mb-10 leading-tight max-w-2xl">
                        Standard induction, or microdosing.
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-14 mt-8">
                        <div>
                            <h3 className="font-serif text-2xl text-slate-900 mb-1">Standard induction</h3>
                            <p className="text-sm text-slate-500 mb-5 italic">36–72 hours abstinence before first dose</p>
                            <div className="border-l-2 border-gold-accent pl-5 space-y-3 text-slate-700 leading-relaxed">
                                <p>
                                    Stop using. Wait until you're in moderate withdrawal — COWS score of 12 or higher.
                                    First dose of Suboxone film, two to four milligrams. Repeat dosing through the day
                                    until withdrawal is gone. Most patients land between twelve and twenty-four mg total
                                    on day one.
                                </p>
                                <p>
                                    The hard part is the wait. The advantage is that it's the simplest protocol and
                                    works for most fentanyl patients we see.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-serif text-2xl text-slate-900 mb-1">Microdosing (Bernese protocol)</h3>
                            <p className="text-sm text-slate-500 mb-5 italic">Gradual induction while still using</p>
                            <div className="border-l-2 border-gold-accent pl-5 space-y-3 text-slate-700 leading-relaxed">
                                <p>
                                    Day 1: 0.5 mg buprenorphine. Day 2: 1 mg. Day 3: 2 mg. Day 4: 4 mg. Day 5: 8 mg.
                                    Day 6: 12–16 mg. Stop fentanyl on Day 7. The buprenorphine has gradually replaced
                                    the fentanyl on your receptors, so there's no precipitated withdrawal.
                                </p>
                                <p>
                                    The hard part is the cost and the discipline of low doses. The advantage is no
                                    withdrawal window — useful for patients who cannot stop using long enough to do a
                                    standard induction.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <WaveRule className="text-slate-300 w-40 mx-auto my-4" />

            <section className="py-20">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="flex items-start gap-8 mb-10">
                        <HandSketch className="hidden md:block text-slate-900 w-20 flex-shrink-0 mt-1" />
                        <div>
                            <p className="text-sm tracking-widest uppercase text-slate-500 mb-3">Three — staying alive while you decide</p>
                            <h2 className="font-serif text-4xl text-slate-900 mb-6 leading-tight max-w-2xl">
                                Naloxone and fentanyl test strips. Free at most Mississippi pharmacies.
                            </h2>
                        </div>
                    </div>

                    <div className="md:pl-28 space-y-6 text-lg text-slate-700 leading-relaxed">
                        <p>
                            Until your first Suboxone dose, the goal is staying alive. Two pieces of harm reduction
                            matter, and both are free or near-free in Mississippi.
                        </p>
                        <p>
                            <span className="font-semibold text-slate-900">Narcan (naloxone).</span> Available
                            over-the-counter in Mississippi, free at many pharmacies through state and federal harm
                            reduction programs. Carry it. Have one at home, one in your car, one with anyone who lives
                            with you. If you overdose, naloxone reverses fentanyl effects long enough to get you to a
                            hospital. Two doses per overdose is now common with fentanyl.
                        </p>
                        <p>
                            <span className="font-semibold text-slate-900">Fentanyl test strips.</span> Cheap, available
                            online or through harm reduction programs. They detect fentanyl in pill, powder, or solution
                            in under a minute. They are not foolproof — some pills contain fentanyl analogs that don't
                            cross-react — but they are better than nothing by a long way.
                        </p>
                        <p>
                            We do not lecture about this. We do not require abstinence to start. The point is keeping
                            you alive until the medicine takes over.
                        </p>
                    </div>
                </div>
            </section>

            <WaveRule className="text-slate-300 w-40 mx-auto my-4" />

            <section className="py-20 bg-[#faf7f1]">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <PathSketch className="text-slate-400 w-60 mx-auto mb-8" />
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                        Ready to start same-day? Most weekday calls land an appointment within hours.
                    </p>
                    <Link
                        to="/same-day-suboxone-oxford-ms"
                        className="inline-flex items-center gap-3 text-lg text-slate-900 font-serif underline decoration-gold-accent decoration-2 underline-offset-[6px] hover:text-gold-accent transition-colors mb-10"
                    >
                        Same-day Suboxone induction in Oxford
                        <ArrowSketch className="w-8 text-gold-accent" />
                    </Link>
                </div>
            </section>

            <FAQ
                theme="light"
                eyebrow="Fentanyl-specific questions"
                title="What patients ask about fentanyl induction"
                items={[
                    {
                        q: 'Does Suboxone work for fentanyl addiction?',
                        aText:
                            'Yes. Buprenorphine, the active ingredient in Suboxone, works the same way for fentanyl-driven opioid use disorder as it does for heroin or pill addiction. The medicine is the same. The induction timing is what differs because fentanyl stores in fat tissue and clears more slowly.',
                        a: (
                            <>
                                Yes. <strong>Buprenorphine</strong> works for fentanyl. Same medicine, same outcomes — the only
                                difference is induction timing because fentanyl stores in fat tissue and clears more slowly.
                            </>
                        ),
                    },
                    {
                        q: 'How long do I have to wait after my last fentanyl use before starting Suboxone?',
                        aText:
                            'For most patients, 36 to 72 hours, sometimes longer. Fentanyl is lipophilic — it absorbs into fat tissue and leaches back out for days. We use the Clinical Opiate Withdrawal Scale (COWS) on top of the clock to confirm your receptors are clear before the first dose.',
                        a: (
                            <>
                                Usually <strong>36–72 hours</strong>, sometimes longer. We use the COWS withdrawal scale plus the
                                clock to confirm receptors are clear before the first dose.
                            </>
                        ),
                    },
                    {
                        q: 'What if I cannot stop using long enough to wait that out?',
                        aText:
                            'We offer a microdosing protocol — also known as the Bernese method — where small, escalating doses of buprenorphine are started while you are still using fentanyl. Over five to seven days, the buprenorphine gradually replaces fentanyl on your receptors with no withdrawal window. We have used this many times.',
                        a: (
                            <>
                                We offer the <strong>Bernese microdosing protocol</strong> — small escalating buprenorphine doses
                                while still using fentanyl. Over 5–7 days, buprenorphine replaces fentanyl on your receptors with
                                no withdrawal window.
                            </>
                        ),
                    },
                    {
                        q: 'Is precipitated withdrawal as bad as people say?',
                        aText:
                            'It is genuinely worse than the withdrawal you were already in — sudden, severe vomiting, diarrhea, body pain, agitation. The point of careful timing or microdosing is to avoid it. If precipitated withdrawal does happen during induction, we treat it aggressively with comfort medications and continue dosing buprenorphine until receptors equilibrate.',
                        a: (
                            <>
                                Yes — sudden severe vomiting, diarrhea, body pain. Careful timing or microdosing prevents it. If
                                it happens during induction, we treat aggressively and keep dosing buprenorphine until receptors
                                equilibrate.
                            </>
                        ),
                    },
                    {
                        q: 'I keep relapsing on fentanyl after starting Suboxone. What should I change?',
                        aText:
                            'Two common adjustments: increase the daily dose (most patients underdose initially — 16 to 24 mg is common), and address co-occurring anxiety or depression that may be driving relapse. Relapse is information about the plan, not a reason to quit treatment.',
                        a: (
                            <>
                                Two adjustments: <strong>raise the dose</strong> (16–24 mg is common — most patients underdose)
                                and <strong>treat co-occurring</strong> anxiety or depression. Relapse is information,
                                not failure.
                            </>
                        ),
                    },
                    {
                        q: 'Will Suboxone protect me from fentanyl overdose if I relapse?',
                        aText:
                            'Partially. Buprenorphine has high affinity for opioid receptors, so when receptors are well occupied it makes it physically harder for fentanyl to cause effect. This reduces overdose risk substantially but does not eliminate it. Always carry naloxone.',
                        a: (
                            <>
                                Partially. Buprenorphine has high receptor affinity, making it physically harder for fentanyl
                                to cause effect when receptors are well occupied. Risk is reduced, not eliminated. Always
                                carry naloxone.
                            </>
                        ),
                    },
                ]}
            />

            <section className="py-24 bg-dark-green">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">
                        Stay alive long enough to call.
                    </h2>
                    <p className="text-lg text-cream mb-10 max-w-xl mx-auto leading-relaxed">
                        Carry Narcan. Use test strips. When you're ready, call us. Most fentanyl patients are seen
                        within the same week.
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

export default FentanylTreatment;
