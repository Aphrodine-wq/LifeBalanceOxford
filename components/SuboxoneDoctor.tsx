import React from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { PillSketch, ClockSketch, PathSketch, HandSketch, WaveRule, ArrowSketch } from './Sketches';

const SuboxoneDoctor: React.FC = () => {
    usePageMeta({
        title: 'Suboxone Doctor in Oxford, MS',
        description: 'Suboxone and Sublocade treatment for opioid use disorder in Oxford, Mississippi. Medication-assisted treatment (MAT) and buprenorphine prescribing from a board-certified psychiatric provider. Call (662) 640-4004.',
        path: '/suboxone-doctor-oxford-ms',
        keywords: [
            'Suboxone doctor Oxford MS',
            'Sublocade Oxford Mississippi',
            'buprenorphine prescriber Oxford',
            'Suboxone clinic North Mississippi',
            'opioid treatment Oxford MS',
        ],
        breadcrumbs: [
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: 'Addiction Treatment', path: '/addiction-treatment-oxford-ms' },
            { name: 'Suboxone Treatment', path: '/suboxone-doctor-oxford-ms' },
        ],
        jsonLd: {
            '@context': 'https://schema.org',
            '@type': 'MedicalWebPage',
            '@id': 'https://lifebalanceoxford.com/suboxone-doctor-oxford-ms#page',
            name: 'Suboxone Doctor in Oxford, MS',
            url: 'https://lifebalanceoxford.com/suboxone-doctor-oxford-ms',
            inLanguage: 'en-US',
            isPartOf: { '@id': 'https://lifebalanceoxford.com/#website' },
            about: [
                { '@type': 'Drug', name: 'Suboxone', alternateName: 'Buprenorphine/Naloxone' },
                { '@type': 'Drug', name: 'Sublocade', alternateName: 'Buprenorphine Extended-Release' },
                { '@type': 'MedicalCondition', name: 'Opioid Use Disorder' },
            ],
            publisher: { '@id': 'https://lifebalanceoxford.com/#business' },
        },
    });

    return (
        <div className="bg-white min-h-screen animate-fade-in">

            {/* Opener — editorial, not hero-card */}
            <section className="bg-dark-green pt-20 pb-24">
                <div className="max-w-4xl mx-auto px-6">
                    <p className="text-sm tracking-widest uppercase text-gold-accent mb-6">
                        Suboxone Treatment &nbsp;·&nbsp; Oxford, MS
                    </p>
                    <h1 className="font-serif text-[2.6rem] md:text-[3.4rem] leading-[1.08] font-semibold text-white mb-8 max-w-3xl">
                        Stop chasing the next dose.<br />
                        <span className="text-gold-accent italic font-normal">Start getting your life back.</span>
                    </h1>
                    <p className="text-xl text-cream max-w-2xl leading-relaxed mb-10">
                        Suboxone and Sublocade treatment with a board-certified psychiatric provider who actually sits
                        with you, answers the question you're too embarrassed to ask, and gives recovery the time it
                        deserves.
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

            {/* Letter-style intro */}
            <section className="py-20">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="font-serif text-2xl md:text-3xl text-slate-900 leading-snug mb-10">
                        There are a lot of places in Mississippi that will write you a Suboxone prescription.
                        There are not many that will <span className="italic">know your name</span> a year from now.
                    </div>
                    <p className="text-lg text-slate-600 leading-relaxed mb-5">
                        At Life Balance, the person you see on day one is the person you see on day three hundred.
                        Casey Hester, PMHNP-BC. One provider. One room. No revolving door of strangers asking you to
                        tell the worst year of your life to a different face every visit.
                    </p>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        That matters because recovery is not a prescription. It's a relationship, a dose, a check-in,
                        a hard conversation, another dose, a reset, another check-in. The medication does the
                        chemistry. The continuity does the rest.
                    </p>
                </div>
            </section>

            {/* What Suboxone does — narrative, no cards */}
            <section className="py-20 bg-[#faf7f1]">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="flex items-start gap-8 mb-10">
                        <PillSketch className="hidden md:block text-slate-900 w-24 flex-shrink-0 mt-2" />
                        <div>
                            <p className="text-sm tracking-widest uppercase text-slate-500 mb-3">One — the medicine</p>
                            <h2 className="font-serif text-4xl text-slate-900 mb-6 leading-tight">
                                What Suboxone actually does in your body.
                            </h2>
                        </div>
                    </div>

                    <div className="space-y-6 text-lg text-slate-700 leading-relaxed md:pl-32">
                        <p>
                            Suboxone is two things put together. <span className="font-semibold text-slate-900">Buprenorphine</span>,
                            which is a partial opioid agonist — it binds to the same receptors heroin, fentanyl, and pills
                            bind to, but only partly activates them. And <span className="font-semibold text-slate-900">naloxone</span>,
                            which sits alongside the buprenorphine as a safeguard against misuse.
                        </p>
                        <p>
                            The honest version of what this feels like: within an hour of your first dose, the sweating
                            stops, the restlessness quiets, the cold panic of being <em>dope sick</em> turns off. You do
                            not get high. You just feel like a person again. For a lot of patients it is the first time
                            in a long time that the constant static in their head goes silent.
                        </p>
                        <p>
                            For people who would rather not think about a daily film, there is <span className="font-semibold text-slate-900">Sublocade</span> —
                            an extended-release buprenorphine shot given once a month. Same medicine, different
                            delivery. We'll talk about which fits you.
                        </p>
                    </div>
                </div>
            </section>

            {/* Withdrawal timing — plain table, no icons */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="flex items-start gap-8 mb-10">
                        <ClockSketch className="hidden md:block text-slate-900 w-20 flex-shrink-0 mt-1" />
                        <div>
                            <p className="text-sm tracking-widest uppercase text-slate-500 mb-3">Two — the timing</p>
                            <h2 className="font-serif text-4xl text-slate-900 mb-6 leading-tight">
                                When will you be ready for your first dose?
                            </h2>
                            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
                                Timing matters more than most people realize. Take Suboxone while you still have full
                                opioids on your receptors and you'll trigger <em>precipitated withdrawal</em>, which is
                                worse than what you were already feeling. These are the clinical rules of thumb.
                            </p>
                        </div>
                    </div>

                    <div className="md:pl-28">
                        <div className="border-t border-slate-200 divide-y divide-slate-200">
                            <div className="grid grid-cols-12 gap-4 py-5 text-sm tracking-wide uppercase text-slate-500">
                                <div className="col-span-5">What you were using</div>
                                <div className="col-span-4">Wait before first dose</div>
                                <div className="col-span-3">Withdrawal target</div>
                            </div>
                            <div className="grid grid-cols-12 gap-4 py-5">
                                <div className="col-span-5">
                                    <p className="font-semibold text-slate-900">Short-acting opioids</p>
                                    <p className="text-sm text-slate-500">Heroin, oxycodone, hydrocodone</p>
                                </div>
                                <div className="col-span-4 text-slate-700">12 – 24 hours</div>
                                <div className="col-span-3 text-slate-700">COWS 12+</div>
                            </div>
                            <div className="grid grid-cols-12 gap-4 py-5">
                                <div className="col-span-5">
                                    <p className="font-semibold text-slate-900">Long-acting opioids</p>
                                    <p className="text-sm text-slate-500">OxyContin ER, MS Contin</p>
                                </div>
                                <div className="col-span-4 text-slate-700">24 – 72 hours</div>
                                <div className="col-span-3 text-slate-700">COWS 12+</div>
                            </div>
                            <div className="grid grid-cols-12 gap-4 py-5">
                                <div className="col-span-5">
                                    <p className="font-semibold text-slate-900">Fentanyl</p>
                                    <p className="text-sm text-slate-500">Illicit or patches — stores in fat</p>
                                </div>
                                <div className="col-span-4 text-slate-700">36 – 72 hours, sometimes longer</div>
                                <div className="col-span-3 text-slate-700">COWS 12+</div>
                            </div>
                            <div className="grid grid-cols-12 gap-4 py-5">
                                <div className="col-span-5">
                                    <p className="font-semibold text-slate-900">Methadone</p>
                                    <p className="text-sm text-slate-500">Requires microdosing protocol</p>
                                </div>
                                <div className="col-span-4 text-slate-700">72+ hours</div>
                                <div className="col-span-3 text-slate-700">Talk to us</div>
                            </div>
                        </div>

                        <p className="mt-8 text-slate-600 italic leading-relaxed">
                            COWS is the Clinical Opiate Withdrawal Scale — an eleven-item checklist your provider walks
                            through with you to measure real withdrawal. Sweating, restlessness, runny nose, yawning,
                            tremor, goosebumps, anxiety. A score of twelve or more means your receptors are clear enough
                            to start. Don't guess it on your own. We'll do it with you.
                        </p>
                    </div>
                </div>
            </section>

            <WaveRule className="text-slate-300 w-40 mx-auto my-4" />

            {/* Induction day — numbered editorial, not 4 boxes */}
            <section className="py-20 bg-[#faf7f1]">
                <div className="max-w-4xl mx-auto px-6">
                    <p className="text-sm tracking-widest uppercase text-slate-500 mb-3">Three — the first day</p>
                    <h2 className="font-serif text-4xl text-slate-900 mb-10 leading-tight max-w-2xl">
                        Induction day, told the way we'd tell a friend.
                    </h2>

                    <div className="space-y-10 md:pl-6">
                        <div className="grid grid-cols-12 gap-6">
                            <div className="col-span-12 md:col-span-2">
                                <div className="font-serif text-5xl text-gold-accent leading-none">01</div>
                            </div>
                            <div className="col-span-12 md:col-span-10 text-slate-700 text-lg leading-relaxed">
                                <p className="font-semibold text-slate-900 mb-2">The morning of.</p>
                                <p>
                                    Don't take your usual. You need to be in real withdrawal. Eat something small —
                                    Gatorade, toast, a banana. Have a support person in the house if you can. When the
                                    symptoms start coming on, text the office. We'll check in.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-12 gap-6">
                            <div className="col-span-12 md:col-span-2">
                                <div className="font-serif text-5xl text-gold-accent leading-none">02</div>
                            </div>
                            <div className="col-span-12 md:col-span-10 text-slate-700 text-lg leading-relaxed">
                                <p className="font-semibold text-slate-900 mb-2">The first dose. Usually two to four milligrams.</p>
                                <p>
                                    Film goes under the tongue. It has to dissolve on its own — don't chew it, don't
                                    swallow it, don't drink water. No food or smoking for fifteen minutes on either side.
                                    Effects kick in between thirty and sixty minutes.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-12 gap-6">
                            <div className="col-span-12 md:col-span-2">
                                <div className="font-serif text-5xl text-gold-accent leading-none">03</div>
                            </div>
                            <div className="col-span-12 md:col-span-10 text-slate-700 text-lg leading-relaxed">
                                <p className="font-semibold text-slate-900 mb-2">The next few hours.</p>
                                <p>
                                    Most people describe the same thing: the sweating stops, the restlessness quiets,
                                    the shoulders drop about an inch. If the cravings and withdrawal aren't meaningfully
                                    better at the one-hour mark, we dose again. A typical first-day total lands between
                                    eight and sixteen milligrams, depending on your history.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-12 gap-6">
                            <div className="col-span-12 md:col-span-2">
                                <div className="font-serif text-5xl text-gold-accent leading-none">04</div>
                            </div>
                            <div className="col-span-12 md:col-span-10 text-slate-700 text-lg leading-relaxed">
                                <p className="font-semibold text-slate-900 mb-2">Day two, and the weeks after.</p>
                                <p>
                                    Take whatever worked on day one as a single morning dose. Over the next week or two
                                    we fine-tune the number together. Most patients settle between twelve and
                                    twenty-four milligrams daily. Some need more. Some need less. There is no right
                                    answer — just the answer that works for you.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Suboxone vs Sublocade — side-by-side editorial */}
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-6">
                    <p className="text-sm tracking-widest uppercase text-slate-500 mb-3">Four — the choice</p>
                    <h2 className="font-serif text-4xl text-slate-900 mb-4 leading-tight">
                        Film or injection?
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl leading-relaxed mb-14">
                        Most people start on the film while we dial in the dose, then switch to the monthly shot once
                        stable — <em>if</em> it fits their life better. Neither is the "right" answer. Here's how to
                        think about it.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
                        <div>
                            <h3 className="font-serif text-2xl text-slate-900 mb-1">Suboxone film</h3>
                            <p className="text-sm text-slate-500 mb-5 italic">Buprenorphine + naloxone, taken daily</p>
                            <div className="border-l-2 border-gold-accent pl-5 space-y-3 text-slate-700 leading-relaxed">
                                <p>
                                    Taken under the tongue once a day. Dose is easy to adjust week to week, cash price
                                    is lower if you're self-paying, and most insurance plans cover the generic without
                                    argument.
                                </p>
                                <p>
                                    It works best for patients who can keep a daily rhythm. The tradeoff is that you
                                    have to store it carefully — a single film can be dangerous to a child or pet — and
                                    missing a dose tends to bring cravings back the same day.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-serif text-2xl text-slate-900 mb-1">Sublocade injection</h3>
                            <p className="text-sm text-slate-500 mb-5 italic">Extended-release buprenorphine, monthly</p>
                            <div className="border-l-2 border-gold-accent pl-5 space-y-3 text-slate-700 leading-relaxed">
                                <p>
                                    One shot in our office, once a month. Nothing to remember, nothing to store, nothing
                                    sitting in a medicine cabinet. Blood levels stay steady — no peaks or troughs — and
                                    a lot of patients say this is when recovery stopped feeling like a daily task.
                                </p>
                                <p>
                                    The tradeoff: you need to be stabilized on Suboxone first, usually a week or more,
                                    and it's harder to adjust mid-month if the dose isn't right. Insurance usually
                                    covers it with a prior authorization — we handle the paperwork.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <WaveRule className="text-slate-300 w-40 mx-auto my-4" />

            {/* Side effects — editorial, three short sections */}
            <section className="py-20 bg-[#faf7f1]">
                <div className="max-w-3xl mx-auto px-6">
                    <p className="text-sm tracking-widest uppercase text-slate-500 mb-3">Five — the side effects</p>
                    <h2 className="font-serif text-4xl text-slate-900 mb-6 leading-tight">
                        What's common, what's not, what's worth a phone call.
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-12">
                        Most people tolerate Suboxone well — usually better than whatever they were using. That said,
                        here's what's actually going to happen and what's worth telling us about.
                    </p>

                    <div className="space-y-10">
                        <div>
                            <h3 className="font-serif text-xl text-slate-900 mb-3">The common stuff — usually fades.</h3>
                            <p className="text-slate-700 leading-relaxed">
                                Constipation. A headache the first few days. Mild nausea. Some sweating. Sleep being
                                a little off at the start, then sorting itself out. Dry mouth. Most of it settles down
                                within a week or two as your body gets used to the medicine.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-serif text-xl text-slate-900 mb-3">The less common stuff — tell us.</h3>
                            <p className="text-slate-700 leading-relaxed">
                                Tooth or dental issues are the one worth naming out loud — after the film fully
                                dissolves, swish water in your mouth and swallow. Drops it nearly to zero. Some patients
                                notice changes in testosterone or menstrual cycles, shifts in weight, or low mood if
                                they're underdosed. Every one of these is fixable with an adjustment, so don't sit on
                                it.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-serif text-xl text-slate-900 mb-3">The rare stuff — call us or 911.</h3>
                            <p className="text-slate-700 leading-relaxed">
                                Severe allergic reaction, trouble breathing, yellowing of the skin or eyes, extreme
                                confusion or drowsiness, severe abdominal pain. These are not common. But if they show
                                up, do not wait them out.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cost — editorial prose, no cards */}
            <section className="py-20">
                <div className="max-w-3xl mx-auto px-6">
                    <p className="text-sm tracking-widest uppercase text-slate-500 mb-3">Six — the money</p>
                    <h2 className="font-serif text-4xl text-slate-900 mb-6 leading-tight">
                        What will this actually cost?
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                        The honest answer is: it depends on whether you have insurance, what kind, what dose you land
                        on, and whether you pick the film or the shot. That's not a dodge — it's just the truth.
                        Here's the range.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed mb-5">
                        <span className="font-semibold text-slate-900">With insurance,</span> visits are usually covered
                        at your normal specialist copay. Generic buprenorphine/naloxone is on almost every formulary.
                        Sublocade often needs a prior auth, which we handle.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed mb-5">
                        <span className="font-semibold text-slate-900">Self-pay,</span> we keep it simple. Kim will
                        tell you the exact visit fee on your first call. Generic buprenorphine/naloxone at most Oxford
                        pharmacies runs roughly thirty to eighty dollars a month depending on dose.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                        <span className="font-semibold text-slate-900">Discount programs</span> like GoodRx, SingleCare,
                        and the Inside Rx card can cut cash prices substantially. We'll point you to what's working
                        locally.
                    </p>
                </div>
            </section>

            <WaveRule className="text-slate-300 w-40 mx-auto my-4" />

            {/* Safety — editorial with sketch */}
            <section className="py-20 bg-[#faf7f1]">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="flex items-start gap-10 mb-10">
                        <HandSketch className="hidden md:block text-slate-900 w-20 flex-shrink-0 mt-1" />
                        <div>
                            <p className="text-sm tracking-widest uppercase text-slate-500 mb-3">Seven — staying safe</p>
                            <h2 className="font-serif text-4xl text-slate-900 mb-6 leading-tight max-w-2xl">
                                A few things we'll tell you on day one, and keep telling you.
                            </h2>
                        </div>
                    </div>

                    <div className="md:pl-28 space-y-8 text-lg text-slate-700 leading-relaxed">
                        <div>
                            <h3 className="font-serif text-xl text-slate-900 mb-2">Keep naloxone in the house.</h3>
                            <p>
                                Even on Suboxone. Have Narcan at home, in the car, in a partner's bag — for you, for
                                anyone you live with, for anyone who walks in. It's over the counter in Mississippi,
                                usually free or under twenty dollars. If you relapse and what you use is cut with
                                fentanyl, it's the thing that keeps you alive long enough to get to a hospital.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-serif text-xl text-slate-900 mb-2">Tell us everything you take.</h3>
                            <p>
                                Prescribed, over-the-counter, recreational — all of it. The combinations we care most
                                about are benzodiazepines (Xanax, Klonopin, Valium) plus alcohol, sleep medications,
                                other opioids of any kind, and a couple of seizure and antifungal drugs that interact
                                with buprenorphine. None of this is about getting you in trouble. It's about not
                                missing something that could hurt you.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-serif text-xl text-slate-900 mb-2">Store it like a controlled substance.</h3>
                            <p>
                                A single film can be lethal to a child or a pet. Original packaging. Locked if there
                                are kids in the house. Not in a shared medicine cabinet. Dispose of expired film at a
                                pharmacy take-back — don't flush it.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-serif text-xl text-slate-900 mb-2">Pregnancy or breastfeeding? Tell us immediately.</h3>
                            <p>
                                Buprenorphine is the gold standard in pregnancy — relapsing is much more dangerous to
                                the baby than staying on MAT. If you're pregnant, thinking about it, or breastfeeding,
                                let us know on the first call so we can coordinate with your OB from the start.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ — long-form Q&A typography */}
            <section className="py-20">
                <div className="max-w-3xl mx-auto px-6">
                    <p className="text-sm tracking-widest uppercase text-slate-500 mb-3">Eight — the questions people ask</p>
                    <h2 className="font-serif text-4xl text-slate-900 mb-12 leading-tight">
                        The questions we hear most, answered plainly.
                    </h2>

                    <div className="space-y-10">
                        <div>
                            <h3 className="font-serif text-xl text-slate-900 mb-2">Is Suboxone just trading one addiction for another?</h3>
                            <p className="text-slate-700 leading-relaxed">
                                No. Buprenorphine sits on the opioid receptors without producing the euphoria that
                                drives addiction. The World Health Organization, SAMHSA, ASAM, and the CDC all name
                                medication-assisted treatment the standard of care for opioid use disorder. This is
                                not fringe medicine.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-serif text-xl text-slate-900 mb-2">How long will I be on it?</h3>
                            <p className="text-slate-700 leading-relaxed">
                                As long as it works for you. Some patients taper off after a year. Others stay on it
                                indefinitely because it is the thing that keeps them well. Neither is wrong. What's
                                wrong is tapering on an arbitrary calendar and relapsing.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-serif text-xl text-slate-900 mb-2">Do I have to be in withdrawal to start?</h3>
                            <p className="text-slate-700 leading-relaxed">
                                You need to be in mild to moderate withdrawal — otherwise the first dose can trigger
                                precipitated withdrawal, which is worse than what you were already feeling. We'll walk
                                you through the timing before your induction.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-serif text-xl text-slate-900 mb-2">Will my employer find out?</h3>
                            <p className="text-slate-700 leading-relaxed">
                                Not from us. Substance use treatment is covered under 42 CFR Part 2 — a federal
                                confidentiality rule stricter than standard HIPAA. We do not release records to
                                employers without your written consent, period.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-serif text-xl text-slate-900 mb-2">Can I drink on Suboxone?</h3>
                            <p className="text-slate-700 leading-relaxed">
                                We strongly recommend no alcohol. Mixed with buprenorphine — especially if benzos are
                                in the picture — it slows breathing and raises overdose risk. If alcohol is hard to
                                stop, tell us. We treat that too.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-serif text-xl text-slate-900 mb-2">What if I miss a dose?</h3>
                            <p className="text-slate-700 leading-relaxed">
                                Take it as soon as you remember that day. If it's close to your next scheduled dose,
                                skip the missed one — don't double up. If you're missing doses regularly, tell us so
                                we can problem-solve, or we move you to Sublocade.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-serif text-xl text-slate-900 mb-2">Can I drive on it?</h3>
                            <p className="text-slate-700 leading-relaxed">
                                Once you're stable on your dose — yes. Suboxone at a therapeutic dose doesn't cause the
                                sedation short-acting opioids do. Hold off on driving the first few days while we
                                dial it in.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-serif text-xl text-slate-900 mb-2">What if I relapse?</h3>
                            <p className="text-slate-700 leading-relaxed">
                                Relapse is not a reason to quit treatment. It's a signal something in the plan needs
                                adjusting — dose, support, underlying mental health, life circumstances. Come in. We
                                will not shame you out of recovery.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <WaveRule className="text-slate-300 w-40 mx-auto my-4" />

            {/* First visit checklist — looser, not bullet cards */}
            <section className="py-20 bg-[#faf7f1]">
                <div className="max-w-3xl mx-auto px-6">
                    <p className="text-sm tracking-widest uppercase text-slate-500 mb-3">Nine — the first visit</p>
                    <h2 className="font-serif text-4xl text-slate-900 mb-6 leading-tight">
                        What to bring. What not to stress about.
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-10">
                        Your first appointment is sixty to ninety minutes. It's a real conversation, not a rushed
                        intake. Bring what you have.
                    </p>

                    <ul className="space-y-3 text-lg text-slate-700 leading-relaxed">
                        <li>— A photo ID.</li>
                        <li>— Your insurance card, if you have one.</li>
                        <li>— A list of what you currently take — doses if you know them.</li>
                        <li>— A rough list of what you've been using recently. Names, amounts, when.</li>
                        <li>— Your primary care doctor's name and your pharmacy's phone.</li>
                        <li>— A support person, if it helps. Optional.</li>
                        <li>— The questions you want to ask. Write them down. Seriously.</li>
                    </ul>

                    <p className="mt-10 text-slate-600 italic leading-relaxed">
                        Don't have half of this? Come anyway. We'd rather see you than have you put it off because you
                        couldn't find a pharmacy phone number.
                    </p>
                </div>
            </section>

            {/* Cross-link section */}
            <section className="py-20">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <PathSketch className="text-slate-400 w-60 mx-auto mb-8" />
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                        If you're looking at addiction treatment more broadly — not just the Suboxone piece — start here.
                    </p>
                    <Link
                        to="/addiction-treatment-oxford-ms"
                        className="inline-flex items-center gap-3 text-lg text-slate-900 font-serif underline decoration-gold-accent decoration-2 underline-offset-[6px] hover:text-gold-accent transition-colors"
                    >
                        Our full addiction treatment approach
                        <ArrowSketch className="w-8 text-gold-accent" />
                    </Link>
                </div>
            </section>

            {/* Closing CTA */}
            <section className="py-24 bg-dark-green">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">
                        Ready when you are.
                    </h2>
                    <p className="text-lg text-cream mb-10 max-w-xl mx-auto leading-relaxed">
                        Call during business hours. Kim answers the phone. Most new patients are seen within the same
                        week. No lecture, no script — just a conversation about whether we're a fit.
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
                        name: 'Suboxone Doctor in Oxford, MS',
                        url: 'https://lifebalanceoxford.com/suboxone-doctor-oxford-ms',
                        about: { '@type': 'MedicalCondition', name: 'Opioid Use Disorder' },
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
                                        text: 'No. Buprenorphine occupies opioid receptors without producing euphoria. The WHO, SAMHSA, ASAM, and the CDC all recognize medication-assisted treatment as the standard of care for opioid use disorder.',
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
                            ],
                        },
                    }),
                }}
            />
        </div>
    );
};

export default SuboxoneDoctor;
