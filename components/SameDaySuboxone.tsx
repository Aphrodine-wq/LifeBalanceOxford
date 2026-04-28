import React from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { pageMeta } from '../seo/pages.js';
import { ClockSketch, HandSketch, PathSketch, WaveRule, ArrowSketch } from './Sketches';
import FAQ from './FAQ';

const SameDaySuboxone: React.FC = () => {
    usePageMeta(pageMeta['/same-day-suboxone-oxford-ms']);

    return (
        <div className="bg-white min-h-screen animate-fade-in">

            {/* Opener — urgent, today */}
            <section className="bg-dark-green pt-20 pb-24">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="inline-flex items-center gap-2 mb-8 px-3 py-1 bg-red-600 text-white text-xs tracking-[0.25em] uppercase font-semibold rounded-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                        Today
                    </div>
                    <p className="text-sm tracking-widest uppercase text-cream/70 mb-6">
                        Same-Day Suboxone &nbsp;·&nbsp; Oxford &amp; North Mississippi
                    </p>
                    <h1 className="font-serif text-[2.6rem] md:text-[3.4rem] leading-[1.08] font-semibold text-white mb-8 max-w-3xl">
                        You don't have to wait two weeks to start.<br />
                        <span className="text-red-400 italic font-normal">Most days, we can see you today.</span>
                    </h1>
                    <p className="text-xl text-cream max-w-2xl leading-relaxed mb-10">
                        If you are in withdrawal — or about to be — call us. Same-day and next-day Suboxone induction is
                        the rule, not the exception, at Life Balance in Oxford.
                    </p>
                    <a
                        href="tel:6626404004"
                        className="inline-flex items-center gap-3 px-7 py-4 bg-red-600 hover:bg-red-700 text-white font-serif text-xl rounded-sm transition-colors"
                    >
                        Call (662) 640-4004 now
                    </a>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="font-serif text-2xl md:text-3xl text-slate-900 leading-snug mb-10">
                        Most clinics make you wait two to four weeks. Most patients in withdrawal cannot wait two to
                        four hours. <span className="italic">That gap is where people die.</span>
                    </div>
                    <p className="text-lg text-slate-600 leading-relaxed mb-5">
                        We hold same-day appointment slots specifically for new Suboxone inductions. If you call in the
                        morning and you're in withdrawal, you are usually in a chair that afternoon. Same goes for next
                        morning if you call after hours.
                    </p>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        This is not a marketing angle. It is the protocol the American Society of Addiction Medicine and
                        SAMHSA both recommend — low-barrier, immediate access to MAT for opioid use disorder. The
                        evidence on outcomes is unambiguous: faster start, lower mortality.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-[#faf7f1]">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="flex items-start gap-8 mb-10">
                        <ClockSketch className="hidden md:block text-slate-900 w-20 flex-shrink-0 mt-1" />
                        <div>
                            <p className="text-sm tracking-widest uppercase text-slate-500 mb-3">One — what same-day actually looks like</p>
                            <h2 className="font-serif text-4xl text-slate-900 mb-6 leading-tight">
                                The hour-by-hour version.
                            </h2>
                        </div>
                    </div>

                    <div className="md:pl-28 space-y-10">
                        <div className="grid grid-cols-12 gap-6">
                            <div className="col-span-12 md:col-span-2">
                                <div className="font-serif text-5xl text-gold-accent leading-none">9 AM</div>
                            </div>
                            <div className="col-span-12 md:col-span-10 text-slate-700 text-lg leading-relaxed">
                                <p className="font-semibold text-slate-900 mb-2">You call. Kim picks up.</p>
                                <p>
                                    She takes a few details — name, insurance or self-pay, what you're using, when you
                                    last used. If you're in withdrawal, she gets you on the schedule today. If you're
                                    not yet, she walks you through when you should be ready and books for then.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-12 gap-6">
                            <div className="col-span-12 md:col-span-2">
                                <div className="font-serif text-5xl text-gold-accent leading-none">11 AM</div>
                            </div>
                            <div className="col-span-12 md:col-span-10 text-slate-700 text-lg leading-relaxed">
                                <p className="font-semibold text-slate-900 mb-2">Forms by phone or at the door.</p>
                                <p>
                                    Most intake forms can be filled out online before you arrive — if not, you fill them
                                    when you get to the office. Bring your ID and insurance card if you have one. If you
                                    don't, come anyway.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-12 gap-6">
                            <div className="col-span-12 md:col-span-2">
                                <div className="font-serif text-5xl text-gold-accent leading-none">1 PM</div>
                            </div>
                            <div className="col-span-12 md:col-span-10 text-slate-700 text-lg leading-relaxed">
                                <p className="font-semibold text-slate-900 mb-2">First appointment with Casey.</p>
                                <p>
                                    Sixty to ninety minutes. Casey walks the COWS withdrawal scale with you, takes a
                                    history, and answers your questions. If you're in mild to moderate withdrawal, she
                                    sends the prescription to your local pharmacy electronically.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-12 gap-6">
                            <div className="col-span-12 md:col-span-2">
                                <div className="font-serif text-5xl text-gold-accent leading-none">2 PM</div>
                            </div>
                            <div className="col-span-12 md:col-span-10 text-slate-700 text-lg leading-relaxed">
                                <p className="font-semibold text-slate-900 mb-2">Pharmacy pickup.</p>
                                <p>
                                    Walmart on Jackson, CVS on University, Walgreens on West Jackson, the independents —
                                    every Oxford pharmacy stocks generic buprenorphine/naloxone. Most fills are ready
                                    within ninety minutes of the script being sent.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-12 gap-6">
                            <div className="col-span-12 md:col-span-2">
                                <div className="font-serif text-5xl text-gold-accent leading-none">3 PM</div>
                            </div>
                            <div className="col-span-12 md:col-span-10 text-slate-700 text-lg leading-relaxed">
                                <p className="font-semibold text-slate-900 mb-2">First dose, on phone or at home.</p>
                                <p>
                                    Two to four milligrams under the tongue. Effects start in thirty to sixty minutes. If
                                    you'd rather, we can keep you in the office for the first dose so we can watch the
                                    effect and adjust. Most patients describe the same thing: the sweating stops, the
                                    cold panic of withdrawal turns off, the shoulders drop.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-3xl mx-auto px-6">
                    <p className="text-sm tracking-widest uppercase text-slate-500 mb-3">Two — when same-day works and when it doesn't</p>
                    <h2 className="font-serif text-4xl text-slate-900 mb-6 leading-tight">
                        Timing matters more than urgency.
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                        Same-day Suboxone induction works when you're in mild-to-moderate withdrawal. If you took your
                        usual dose four hours ago, we can't safely start today — the medicine will trigger precipitated
                        withdrawal, which is worse than what you were already feeling. The clinical rules of thumb:
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed mb-5">
                        <span className="font-semibold text-slate-900">Short-acting opioids</span> (heroin, oxy,
                        hydrocodone) — same-day works if your last use was 12 to 24 hours ago.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed mb-5">
                        <span className="font-semibold text-slate-900">Fentanyl</span> — store in fat, takes longer to
                        clear. Same-day works if last use was 36+ hours ago. Many fentanyl patients need 48–72 hours.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed mb-5">
                        <span className="font-semibold text-slate-900">Long-acting opioids</span> (OxyContin ER, MS
                        Contin) — 24 to 72 hours since last use.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                        <span className="font-semibold text-slate-900">Methadone</span> — requires a microdosing
                        protocol. Not a same-day situation. We have done many of these, but they are scheduled in
                        advance.
                    </p>
                </div>
            </section>

            <WaveRule className="text-slate-300 w-40 mx-auto my-4" />

            <section className="py-20 bg-[#faf7f1]">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="flex items-start gap-8 mb-10">
                        <HandSketch className="hidden md:block text-slate-900 w-20 flex-shrink-0 mt-1" />
                        <div>
                            <p className="text-sm tracking-widest uppercase text-slate-500 mb-3">Three — what to do if you can't wait</p>
                            <h2 className="font-serif text-4xl text-slate-900 mb-6 leading-tight max-w-2xl">
                                If you're reading this in crisis.
                            </h2>
                        </div>
                    </div>

                    <div className="md:pl-28 space-y-6 text-lg text-slate-700 leading-relaxed">
                        <p>
                            <span className="font-semibold text-slate-900">If you've already overdosed today,</span> call
                            911. Do not wait. Naloxone (Narcan) is over-the-counter in Mississippi and free at most
                            pharmacies — anyone with you can administer it.
                        </p>
                        <p>
                            <span className="font-semibold text-slate-900">If you're in active withdrawal and we're
                            closed,</span> call us first thing in the morning. Hours are Monday – Thursday 8 to 5,
                            Friday 8 to noon. Voicemail is checked frequently. If you're using fentanyl, your withdrawal
                            won't peak until 36–72 hours out, so timing tomorrow morning often works.
                        </p>
                        <p>
                            <span className="font-semibold text-slate-900">If you need help right now and we're
                            closed,</span> the Mississippi crisis line is 988. Baptist Memorial Hospital-North
                            Mississippi in Oxford accepts emergency-room buprenorphine starts and refers to outpatient
                            providers — including us — for follow-up.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <PathSketch className="text-slate-400 w-60 mx-auto mb-8" />
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                        For the deeper walk through Suboxone — what it does, the protocol, and what comes after the
                        first dose — start here.
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
                eyebrow="Same-day questions"
                title="What people in withdrawal ask first"
                items={[
                    {
                        q: 'How fast can you actually see me?',
                        aText:
                            'If you call in the morning during business hours and you are in withdrawal, you are usually in a chair the same afternoon. Calls received late in the day are usually scheduled for the following morning. We hold induction slots specifically for new patients.',
                        a: (
                            <>
                                Morning calls in withdrawal — usually in a chair that afternoon. Late-day calls — next morning.
                                We hold induction slots specifically for new patients.
                            </>
                        ),
                    },
                    {
                        q: 'Do I need to be in withdrawal before I call?',
                        aText:
                            'No. Call before withdrawal starts so we can plan timing — when to take your last dose, when to come in, and what to expect. We will walk through the timing on the call and have you arrive in the right window.',
                        a: (
                            <>
                                No. Call <strong>before</strong> withdrawal starts so we can plan timing — last dose, arrival
                                window, what to expect.
                            </>
                        ),
                    },
                    {
                        q: 'I do not have insurance. Can I still get same-day Suboxone?',
                        aText:
                            'Yes. We see self-pay patients and Kim quotes the visit fee on the phone before you come in. Generic buprenorphine/naloxone at most Oxford pharmacies runs roughly $30–$80 a month with a GoodRx or SingleCare card.',
                        a: (
                            <>
                                Yes. Self-pay welcome. Kim quotes the visit fee on the phone. Generic medication runs ~$30–$80 a
                                month at Oxford pharmacies with GoodRx or SingleCare.
                            </>
                        ),
                    },
                    {
                        q: 'Can I get same-day telehealth Suboxone?',
                        aText:
                            'Yes. For patients in Mississippi who cannot make it to Oxford the same day, telehealth induction is available with the same protocol. The first appointment runs 60–90 minutes by video, and the prescription is sent to your local pharmacy.',
                        a: (
                            <>
                                Yes. <Link to="/suboxone-telehealth-mississippi" className="text-teal-700 underline decoration-1 underline-offset-2">Telehealth induction</Link> is available statewide. Same protocol, by video. Prescription sent to your local pharmacy.
                            </>
                        ),
                    },
                    {
                        q: 'I am using fentanyl. Will this still work for me?',
                        aText:
                            'Yes — buprenorphine works for fentanyl-driven opioid use disorder. The timing is different: fentanyl stores in fat tissue, so we usually wait 36–72 hours after last use before the first dose to avoid precipitated withdrawal. We will plan the timing with you.',
                        a: (
                            <>
                                Yes. Buprenorphine works for fentanyl. Timing is different — we usually wait{' '}
                                <strong>36–72 hours</strong> after last fentanyl use before the first dose to avoid precipitated
                                withdrawal. We plan timing together.
                            </>
                        ),
                    },
                    {
                        q: 'Will I have to come back every week?',
                        aText:
                            'After the first visit, we typically see you again on day 3, day 7, and weekly for the first month while we adjust the dose. After that, biweekly, then monthly. Many follow-ups can be done by telehealth.',
                        a: (
                            <>
                                Day 3, day 7, weekly for the first month. Then biweekly, then monthly. Most follow-ups can be by
                                <Link to="/suboxone-telehealth-mississippi" className="text-teal-700 underline decoration-1 underline-offset-2 ml-1">telehealth</Link>.
                            </>
                        ),
                    },
                ]}
            />

            <section className="py-24 bg-dark-green">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">
                        Don't wait it out.
                    </h2>
                    <p className="text-lg text-cream mb-10 max-w-xl mx-auto leading-relaxed">
                        Call us and we'll figure out timing. If today works, today works. If tomorrow morning is better,
                        tomorrow morning is better. We answer the phone.
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

export default SameDaySuboxone;
