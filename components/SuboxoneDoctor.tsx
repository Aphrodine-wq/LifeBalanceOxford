import React from 'react';
import { Phone, CheckCircle2, ArrowRight, AlertTriangle, Clock, Pill, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';

const SuboxoneDoctor: React.FC = () => {
    usePageMeta({
        title: 'Suboxone Doctor in Oxford, MS',
        description: 'Suboxone and Sublocade treatment for opioid use disorder in Oxford, Mississippi. Medication-assisted treatment (MAT) and buprenorphine prescribing from a board-certified psychiatric provider. Call (662) 640-4004.',
        path: '/suboxone-doctor-oxford-ms',
    });

    const timeline = [
        {
            step: '01',
            title: 'Initial call',
            body: 'Call (662) 640-4004. Kim will answer your questions, confirm insurance or self-pay pricing, and get you on the schedule — usually within the same week.',
        },
        {
            step: '02',
            title: 'First appointment',
            body: 'A thorough psychiatric evaluation with Casey Hester, PMHNP-BC. We talk about your history with opioids, any past treatment, and what you want out of recovery.',
        },
        {
            step: '03',
            title: 'Induction',
            body: 'If Suboxone is the right fit, we start you on it. Induction is done safely and on your timeline — at home or in-office depending on your situation.',
        },
        {
            step: '04',
            title: 'Stabilization',
            body: 'Weekly or biweekly follow-up visits while we dial in your dose. Cravings drop. Sleep and appetite come back. Withdrawal stops running your day.',
        },
        {
            step: '05',
            title: 'Maintenance',
            body: 'Monthly visits once you are stable. We keep watching for interactions, monitor your overall mental health, and taper only when you are ready.',
        },
    ];

    const differences = [
        'Board-certified psychiatric provider (not just a prescriber)',
        'Suboxone AND Sublocade (monthly injection) available',
        'Treats co-occurring anxiety, depression, trauma in the same visit',
        'Confidential — protected under 42 CFR Part 2 and HIPAA',
        'Accepts most major insurance plus self-pay options',
        'Same provider every visit — no rotating staff',
    ];

    return (
        <div className="bg-white min-h-screen animate-fade-in">
            {/* Hero */}
            <section className="bg-dark-green py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-sm text-gold-accent font-medium tracking-wide mb-3">Suboxone Doctor · Oxford, MS</p>
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 max-w-3xl">
                        A Suboxone doctor in Oxford who gives you the time and privacy this deserves.
                    </h1>
                    <p className="text-xl text-cream max-w-2xl leading-relaxed mb-8">
                        Medication-assisted treatment using Suboxone (buprenorphine/naloxone) or Sublocade — combined with
                        the full psychiatric care most MAT programs skip. Stop chasing withdrawal. Start building
                        stability.
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
                            to="/addiction-treatment-oxford-ms"
                            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/60 text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
                        >
                            See full addiction treatment
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* What is Suboxone */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
                        What Suboxone actually does
                    </h2>
                    <div className="space-y-5 text-lg text-slate-600 leading-relaxed">
                        <p>
                            Suboxone is a prescription medication that combines <strong className="text-slate-900">buprenorphine</strong> (a partial opioid
                            agonist) with <strong className="text-slate-900">naloxone</strong>. In practical terms: it occupies the same brain receptors
                            that opioids like heroin, fentanyl, hydrocodone, and oxycodone bind to — but in a way that
                            <em> stops cravings and blocks withdrawal without getting you high</em>.
                        </p>
                        <p>
                            People on a properly dosed Suboxone plan usually describe the same experience: within a few days
                            the fog lifts, sleep returns, and the constant hum of "when am I getting more" finally goes quiet.
                            That's not weakness. That's medicine doing what it was designed to do.
                        </p>
                        <p>
                            For patients who'd rather not think about a daily film, we also offer <strong className="text-slate-900">Sublocade</strong>,
                            a monthly injection of extended-release buprenorphine. One shot, done for the month.
                        </p>
                    </div>
                </div>
            </section>

            {/* Withdrawal timing — when are you ready */}
            <section className="py-20 bg-stone-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-start gap-3 mb-6">
                        <Clock className="text-gold-accent flex-shrink-0 mt-1" size={28} />
                        <div>
                            <h2 className="font-serif text-3xl font-bold text-slate-900 mb-3">
                                When will you be ready for your first dose?
                            </h2>
                            <p className="text-lg text-slate-600 max-w-3xl">
                                Timing matters. Taking Suboxone too early — while you still have full opioids on your
                                receptors — can trigger <strong>precipitated withdrawal</strong>, which is worse than what
                                you were already feeling. These windows are the clinical rule of thumb.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg border border-stone-200 overflow-hidden mt-8">
                        <table className="w-full text-left">
                            <thead className="bg-slate-900 text-white">
                                <tr>
                                    <th className="py-3 px-5 font-semibold">What you were using</th>
                                    <th className="py-3 px-5 font-semibold">Wait time before Suboxone</th>
                                    <th className="py-3 px-5 font-semibold">COWS score target</th>
                                </tr>
                            </thead>
                            <tbody className="text-slate-700">
                                <tr className="border-b border-stone-200">
                                    <td className="py-3 px-5">Short-acting opioids<br /><span className="text-sm text-slate-500">Heroin, oxycodone, hydrocodone</span></td>
                                    <td className="py-3 px-5">12–24 hours</td>
                                    <td className="py-3 px-5">12 or higher</td>
                                </tr>
                                <tr className="border-b border-stone-200">
                                    <td className="py-3 px-5">Long-acting opioids<br /><span className="text-sm text-slate-500">OxyContin ER, MS Contin, methadone</span></td>
                                    <td className="py-3 px-5">24–72 hours</td>
                                    <td className="py-3 px-5">12 or higher</td>
                                </tr>
                                <tr className="border-b border-stone-200">
                                    <td className="py-3 px-5">Fentanyl<br /><span className="text-sm text-slate-500">Illicit or prescribed patches</span></td>
                                    <td className="py-3 px-5">36–72 hours<br /><span className="text-sm text-slate-500">Sometimes longer — fentanyl stores in fat</span></td>
                                    <td className="py-3 px-5">12 or higher</td>
                                </tr>
                                <tr>
                                    <td className="py-3 px-5">Methadone</td>
                                    <td className="py-3 px-5">72+ hours<br /><span className="text-sm text-slate-500">Requires microdosing protocol</span></td>
                                    <td className="py-3 px-5">Discuss with provider</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-6 bg-amber-50 rounded-lg p-5 border-l-[3px] border-amber-500">
                        <p className="text-amber-900 text-sm leading-relaxed">
                            <strong>What's a COWS score?</strong> Clinical Opiate Withdrawal Scale — an 11-item checklist
                            your provider walks through to measure how much withdrawal you're actually in. Symptoms like
                            sweating, restlessness, runny nose, yawning, tremor, goosebumps, and anxiety each get a score.
                            We'll walk you through this before your first dose.
                        </p>
                    </div>
                </div>
            </section>

            {/* Induction day */}
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-serif text-3xl font-bold text-slate-900 mb-4">
                        Induction day: what actually happens
                    </h2>
                    <p className="text-lg text-slate-600 mb-10 max-w-3xl">
                        Induction is the first time you take Suboxone. It sounds clinical but it's mostly about timing
                        and monitoring. Most patients do this at home with phone support — some prefer in-office. Either
                        way, here's the flow.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Morning of</h3>
                            <ul className="space-y-2 text-slate-700">
                                <li className="flex gap-2"><span className="text-gold-accent font-bold">·</span>Do not take your usual opioid. You need to be in real withdrawal.</li>
                                <li className="flex gap-2"><span className="text-gold-accent font-bold">·</span>Eat something small. Gatorade, toast, a banana.</li>
                                <li className="flex gap-2"><span className="text-gold-accent font-bold">·</span>Have a support person nearby if possible.</li>
                                <li className="flex gap-2"><span className="text-gold-accent font-bold">·</span>Text the office when you start feeling withdrawal symptoms.</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">First dose (usually 2–4 mg)</h3>
                            <ul className="space-y-2 text-slate-700">
                                <li className="flex gap-2"><span className="text-gold-accent font-bold">·</span>Place the film under your tongue. Let it dissolve — do not chew or swallow.</li>
                                <li className="flex gap-2"><span className="text-gold-accent font-bold">·</span>No food, drink, or smoking for 15 minutes before or after.</li>
                                <li className="flex gap-2"><span className="text-gold-accent font-bold">·</span>Effects begin in 30–60 minutes.</li>
                                <li className="flex gap-2"><span className="text-gold-accent font-bold">·</span>If cravings and withdrawal aren't significantly better at the 1-hour mark, we dose again.</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Hours 1–4</h3>
                            <ul className="space-y-2 text-slate-700">
                                <li className="flex gap-2"><span className="text-gold-accent font-bold">·</span>Most people feel noticeably better within 90 minutes.</li>
                                <li className="flex gap-2"><span className="text-gold-accent font-bold">·</span>Typical first-day total dose lands between 8–16 mg depending on your history.</li>
                                <li className="flex gap-2"><span className="text-gold-accent font-bold">·</span>Stay in contact with the office by phone or text — we'll check in.</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Day 2 and beyond</h3>
                            <ul className="space-y-2 text-slate-700">
                                <li className="flex gap-2"><span className="text-gold-accent font-bold">·</span>Take whatever worked on day one as a single morning dose.</li>
                                <li className="flex gap-2"><span className="text-gold-accent font-bold">·</span>We adjust over the next 1–2 weeks to find your stable dose.</li>
                                <li className="flex gap-2"><span className="text-gold-accent font-bold">·</span>Most patients stabilize between 12–24 mg daily. Some need more, some less.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* What to expect timeline */}
            <section className="py-20 bg-stone-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-serif text-3xl font-bold text-slate-900 mb-3">What to expect, step by step</h2>
                    <p className="text-lg text-slate-600 mb-12 max-w-2xl">
                        From your first phone call to steady-state maintenance.
                    </p>
                    <div className="space-y-6">
                        {timeline.map((t) => (
                            <div key={t.step} className="flex gap-6 bg-white rounded-lg p-6 border border-stone-200">
                                <div className="flex-shrink-0">
                                    <div className="text-2xl font-serif font-bold text-gold-accent">{t.step}</div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">{t.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{t.body}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What makes us different */}
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                        <div>
                            <h2 className="font-serif text-3xl font-bold text-slate-900 mb-4">
                                Not every Suboxone clinic is the same.
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Some MAT programs hand you a prescription and a quarterly check-in. That's not care, that's
                                dispensing. Here's what you get at Life Balance:
                            </p>
                        </div>
                        <div className="space-y-3">
                            {differences.map((d, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="text-gold-accent flex-shrink-0 mt-1" size={20} />
                                    <p className="text-slate-700">{d}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Suboxone vs Sublocade */}
            <section className="py-20 bg-stone-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-start gap-3 mb-4">
                        <Pill className="text-gold-accent flex-shrink-0 mt-1" size={28} />
                        <h2 className="font-serif text-3xl font-bold text-slate-900">Suboxone or Sublocade — which fits you?</h2>
                    </div>
                    <p className="text-lg text-slate-600 mb-10 max-w-3xl">
                        Both use buprenorphine. The difference is delivery. Most patients start on Suboxone film while
                        we dial in the dose, then switch to Sublocade once stable if it fits their life better.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-lg p-7 border border-stone-200">
                            <h3 className="text-xl font-bold text-slate-900 mb-1">Suboxone film / tablet</h3>
                            <p className="text-sm text-slate-500 mb-5">Buprenorphine + Naloxone · daily</p>
                            <ul className="space-y-3 text-slate-700">
                                <li className="flex gap-2"><CheckCircle2 className="text-gold-accent flex-shrink-0 mt-1" size={16} /><span>Taken under the tongue once a day</span></li>
                                <li className="flex gap-2"><CheckCircle2 className="text-gold-accent flex-shrink-0 mt-1" size={16} /><span>Dose can be adjusted quickly</span></li>
                                <li className="flex gap-2"><CheckCircle2 className="text-gold-accent flex-shrink-0 mt-1" size={16} /><span>Lower cash price if paying out of pocket</span></li>
                                <li className="flex gap-2"><CheckCircle2 className="text-gold-accent flex-shrink-0 mt-1" size={16} /><span>Works best if you can keep a daily routine</span></li>
                                <li className="flex gap-2"><AlertTriangle className="text-amber-600 flex-shrink-0 mt-1" size={16} /><span>Missing a dose can mean cravings or mild withdrawal</span></li>
                                <li className="flex gap-2"><AlertTriangle className="text-amber-600 flex-shrink-0 mt-1" size={16} /><span>Has to be stored securely — especially around kids or roommates</span></li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-lg p-7 border border-stone-200">
                            <h3 className="text-xl font-bold text-slate-900 mb-1">Sublocade injection</h3>
                            <p className="text-sm text-slate-500 mb-5">Extended-release buprenorphine · monthly</p>
                            <ul className="space-y-3 text-slate-700">
                                <li className="flex gap-2"><CheckCircle2 className="text-gold-accent flex-shrink-0 mt-1" size={16} /><span>One injection per month in our office</span></li>
                                <li className="flex gap-2"><CheckCircle2 className="text-gold-accent flex-shrink-0 mt-1" size={16} /><span>No daily medication to think about</span></li>
                                <li className="flex gap-2"><CheckCircle2 className="text-gold-accent flex-shrink-0 mt-1" size={16} /><span>Nothing to store, lose, or have diverted at home</span></li>
                                <li className="flex gap-2"><CheckCircle2 className="text-gold-accent flex-shrink-0 mt-1" size={16} /><span>Steady blood levels — fewer peaks and troughs</span></li>
                                <li className="flex gap-2"><AlertTriangle className="text-amber-600 flex-shrink-0 mt-1" size={16} /><span>Requires prior stabilization on Suboxone (usually 7+ days)</span></li>
                                <li className="flex gap-2"><AlertTriangle className="text-amber-600 flex-shrink-0 mt-1" size={16} /><span>Not as easily adjusted if your dose needs to change</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Side effects — real talk */}
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-serif text-3xl font-bold text-slate-900 mb-4">Side effects, straight up</h2>
                    <p className="text-lg text-slate-600 mb-10 max-w-3xl">
                        Most people tolerate Suboxone well — far better than the opioids they were using. Here's what
                        is actually common, and what is not.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-lg p-6 border border-stone-200">
                            <h3 className="text-lg font-bold text-slate-900 mb-3">Common (and usually mild)</h3>
                            <ul className="text-slate-700 space-y-1.5 text-sm">
                                <li>Constipation</li>
                                <li>Headache (first week)</li>
                                <li>Mild nausea</li>
                                <li>Sweating</li>
                                <li>Trouble sleeping early on</li>
                                <li>Dry mouth</li>
                            </ul>
                            <p className="text-xs text-slate-500 mt-4">Most fade in 1–2 weeks as your body adjusts.</p>
                        </div>

                        <div className="bg-white rounded-lg p-6 border border-stone-200">
                            <h3 className="text-lg font-bold text-slate-900 mb-3">Less common</h3>
                            <ul className="text-slate-700 space-y-1.5 text-sm">
                                <li>Tooth or dental issues (rinse mouth with water after film)</li>
                                <li>Drop in testosterone</li>
                                <li>Irregular menstrual cycle</li>
                                <li>Weight changes</li>
                                <li>Low mood or fatigue if underdosed</li>
                            </ul>
                            <p className="text-xs text-slate-500 mt-4">Always tell us — most are fixable with adjustment.</p>
                        </div>

                        <div className="bg-white rounded-lg p-6 border border-red-100">
                            <h3 className="text-lg font-bold text-slate-900 mb-3">Call us or 911 for</h3>
                            <ul className="text-slate-700 space-y-1.5 text-sm">
                                <li>Severe allergic reaction (rash, swelling)</li>
                                <li>Trouble breathing</li>
                                <li>Yellowing of eyes or skin</li>
                                <li>Extreme confusion or drowsiness</li>
                                <li>Severe abdominal pain</li>
                            </ul>
                            <p className="text-xs text-red-700 mt-4 font-semibold">Rare, but real — do not wait.</p>
                        </div>
                    </div>

                    <div className="mt-8 bg-teal-50 border-l-[3px] border-teal-700 rounded-lg p-5">
                        <p className="text-teal-900 text-sm leading-relaxed">
                            <strong>One important tip:</strong> swish water in your mouth and swallow after the film
                            fully dissolves. This dramatically cuts the risk of tooth problems that can come from
                            prolonged sublingual exposure to acidic buprenorphine.
                        </p>
                    </div>
                </div>
            </section>

            {/* Cost transparency */}
            <section className="py-20 bg-stone-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-serif text-3xl font-bold text-slate-900 mb-4">
                        What will this actually cost?
                    </h2>
                    <p className="text-lg text-slate-600 mb-8">
                        Straight answer: it depends on insurance, dose, and whether you pick Suboxone or Sublocade.
                        Here's the general range — call (662) 640-4004 for your exact numbers.
                    </p>

                    <div className="space-y-4">
                        <div className="bg-white rounded-lg p-6 border border-stone-200">
                            <h3 className="font-bold text-slate-900 mb-2">With most major insurance</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Visits are usually covered at your normal specialist copay. Generic buprenorphine/naloxone
                                is on most formularies. Sublocade often requires prior authorization — we handle the
                                paperwork on our end.
                            </p>
                        </div>
                        <div className="bg-white rounded-lg p-6 border border-stone-200">
                            <h3 className="font-bold text-slate-900 mb-2">Self-pay</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                We keep self-pay pricing clear and predictable. Generic buprenorphine/naloxone at most
                                Oxford pharmacies runs roughly $30–$80 per month depending on dose and pharmacy.
                                We give you the exact visit fee on your first call so there are no surprises.
                            </p>
                        </div>
                        <div className="bg-white rounded-lg p-6 border border-stone-200">
                            <h3 className="font-bold text-slate-900 mb-2">Pharmacy discount programs</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                GoodRx, SingleCare, and the Inside Rx card can substantially cut cash prices on
                                buprenorphine/naloxone. We'll point you to what's working locally when you start.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Safety — naloxone, interactions, storage */}
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-start gap-3 mb-6">
                        <ShieldAlert className="text-gold-accent flex-shrink-0 mt-1" size={28} />
                        <h2 className="font-serif text-3xl font-bold text-slate-900">Safety while you're in treatment</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-lg p-6 border border-stone-200">
                            <h3 className="text-lg font-bold text-slate-900 mb-3">Keep naloxone on hand</h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-3">
                                Even on Suboxone, you should have naloxone (Narcan) accessible — for you, a family member,
                                or anyone you live with. It's free or low-cost at most pharmacies in Mississippi and does
                                not require a prescription.
                            </p>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                If you relapse and also use anything with unknown fentanyl content, Narcan can save your
                                life. Ask us about it at your first visit.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg p-6 border border-stone-200">
                            <h3 className="text-lg font-bold text-slate-900 mb-3">Dangerous combinations</h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-3">
                                Tell us everything you take — prescribed, over-the-counter, recreational. The combinations
                                we care most about:
                            </p>
                            <ul className="text-slate-700 text-sm space-y-1">
                                <li className="flex gap-2"><span className="text-amber-600 font-bold">·</span>Benzodiazepines (Xanax, Klonopin, Valium) + alcohol</li>
                                <li className="flex gap-2"><span className="text-amber-600 font-bold">·</span>Sleep medications (Ambien, Lunesta)</li>
                                <li className="flex gap-2"><span className="text-amber-600 font-bold">·</span>Other opioids of any kind</li>
                                <li className="flex gap-2"><span className="text-amber-600 font-bold">·</span>Some seizure and antifungal medications</li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-lg p-6 border border-stone-200">
                            <h3 className="text-lg font-bold text-slate-900 mb-3">Store it like a controlled substance</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                A single Suboxone film can be lethal to a child or pet. Keep it in its original packaging,
                                locked if you have kids in the house, and out of shared medicine cabinets. Dispose of
                                expired film at a pharmacy take-back — do not flush.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg p-6 border border-stone-200">
                            <h3 className="text-lg font-bold text-slate-900 mb-3">Pregnancy and breastfeeding</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Buprenorphine is the gold-standard treatment during pregnancy — staying on MAT is much
                                safer than relapsing. If you are pregnant, thinking about becoming pregnant, or
                                breastfeeding, tell us immediately so we can coordinate with your OB.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-stone-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-serif text-3xl font-bold text-slate-900 mb-10">Common questions about Suboxone treatment</h2>
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Is Suboxone just trading one addiction for another?</h3>
                            <p className="text-slate-600 leading-relaxed">
                                No. Buprenorphine occupies opioid receptors without producing the euphoria that drives
                                addiction. Every major medical body — SAMHSA, ASAM, the CDC — recognizes MAT as the gold
                                standard for opioid use disorder.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">How long will I be on Suboxone?</h3>
                            <p className="text-slate-600 leading-relaxed">
                                As long as it's working for you. Some patients taper off after a year. Others stay on it
                                indefinitely because it's the treatment that keeps them stable. Neither answer is wrong —
                                what's wrong is tapering too soon and relapsing.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Do I need to be in active withdrawal to start?</h3>
                            <p className="text-slate-600 leading-relaxed">
                                You need to be in <em>mild to moderate</em> withdrawal before your first Suboxone dose —
                                otherwise it can trigger precipitated withdrawal. We walk you through exactly how to time
                                it before your induction appointment.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Will my employer find out?</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Not from us. Your treatment is covered under federal confidentiality rules stricter than
                                standard HIPAA. We don't release records to employers without your written consent.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Can I get Suboxone without insurance?</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Yes. We offer transparent self-pay pricing and work with generic buprenorphine/naloxone when
                                insurance isn't an option. Call the office for current rates.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Can I drink alcohol while on Suboxone?</h3>
                            <p className="text-slate-600 leading-relaxed">
                                We strongly recommend no alcohol. Mixing alcohol with buprenorphine slows your breathing
                                and raises overdose risk — especially with benzodiazepines also in the mix. If alcohol is
                                hard to stop, tell us. We have treatment options for that too.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">What if I miss a dose?</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Take it as soon as you remember that same day. If it's nearly your next scheduled dose,
                                skip the missed one — do not double up. If you're frequently missing doses, tell us so we
                                can problem-solve (or consider Sublocade).
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Will Suboxone show up on a drug test?</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Standard workplace drug panels do not test for buprenorphine by default. Extended panels
                                do. You have a legal prescription — tell your Medical Review Officer and you are protected
                                under the ADA for legitimate medical treatment.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Can I drive on Suboxone?</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Once you're stable on your dose — yes. Buprenorphine at a therapeutic dose does not cause
                                the sedation that short-acting opioids do. Avoid driving during the first few days of
                                induction while your dose is being adjusted.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">What if I also use stimulants or alcohol?</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Tell us. Polysubstance use is common and we will not treat it as a moral failing. We can
                                treat opioid use disorder alongside other substance use issues and work on the whole
                                picture.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">What if I relapse while on Suboxone?</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Relapse is not a reason to end treatment. It is a signal that something in the plan
                                needs adjusting — dose, support, co-occurring mental health care, or life circumstances.
                                Come in. We will not shame you out of treatment.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What to bring to your first visit */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-serif text-3xl font-bold text-slate-900 mb-4">What to bring to your first visit</h2>
                    <p className="text-lg text-slate-600 mb-8">
                        Your first appointment is about 60–90 minutes. It's a real conversation, not a rushed
                        intake. Bring what you have — we'll work with whatever you walk in with.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            'Photo ID (driver\'s license or state ID)',
                            'Insurance card, if you have one',
                            'List of current medications — include doses',
                            'Names and doses of anything you\'ve used recently',
                            'Contact info for your primary care doctor',
                            'Pharmacy name and phone',
                            'A support person, if it helps (optional)',
                            'Questions written down — seriously, bring them',
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-3 bg-stone-50 rounded-lg p-4">
                                <CheckCircle2 className="text-gold-accent flex-shrink-0 mt-1" size={18} />
                                <span className="text-slate-700">{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 text-slate-600 text-sm bg-stone-50 rounded-lg p-5 border border-stone-200">
                        <strong className="text-slate-900">Don't have half this stuff?</strong> Come anyway. We'd rather
                        see you than have you put it off because you couldn't find a pharmacy phone number.
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-dark-green">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
                        Same-week appointments available.
                    </h2>
                    <p className="text-lg text-cream mb-8 max-w-2xl mx-auto">
                        If you're ready to start, we're ready to see you. Call during business hours and Kim will get you on
                        the schedule.
                    </p>
                    <a
                        href="tel:6626404004"
                        className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-gold-accent text-white font-serif font-semibold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all"
                    >
                        <Phone size={18} />
                        (662) 640-4004
                    </a>
                    <p className="text-sm text-cream/80 mt-6">
                        Monday – Thursday 8:00 AM – 5:00 PM · Friday 8:00 AM – 12:00 PM
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
                        about: {
                            '@type': 'MedicalCondition',
                            name: 'Opioid Use Disorder',
                        },
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
                                        text: 'No. Buprenorphine occupies opioid receptors without producing euphoria. SAMHSA, ASAM, and the CDC all recognize medication-assisted treatment as the gold standard for opioid use disorder.',
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
                                {
                                    '@type': 'Question',
                                    name: 'Can I get Suboxone without insurance?',
                                    acceptedAnswer: {
                                        '@type': 'Answer',
                                        text: 'Yes. Life Balance offers transparent self-pay pricing for Suboxone treatment. Call (662) 640-4004 for current rates.',
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
