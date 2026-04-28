import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { pageMeta } from '../seo/pages.js';
import { PillSketch, ClockSketch, PathSketch, HandSketch, WaveRule, ArrowSketch } from './Sketches';
import FAQ from './FAQ';
import IntakeModal from './IntakeModal';

const SuboxoneTelehealth: React.FC = () => {
    usePageMeta(pageMeta['/suboxone-telehealth-mississippi']);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="bg-white min-h-screen animate-fade-in">

            {/* Opener — light editorial, telehealth flavor */}
            <section className="bg-cream pt-20 pb-24 border-b border-slate-200">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="flex flex-wrap items-start justify-between gap-6 mb-10">
                        <p className="text-sm tracking-widest uppercase text-slate-500">
                            Telehealth Suboxone &nbsp;·&nbsp; By Video
                        </p>
                        <p className="text-xs tracking-[0.2em] uppercase text-slate-700 border border-slate-300 rounded-full px-3 py-1">
                            Statewide &middot; Mississippi
                        </p>
                    </div>
                    <h1 className="font-serif text-[2.6rem] md:text-[3.4rem] leading-[1.08] font-semibold text-slate-900 mb-8 max-w-3xl">
                        You don't have to drive four hours to get well.
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl leading-relaxed mb-10">
                        Suboxone treatment by video, anywhere in Mississippi — same provider, same continuity, same
                        confidentiality, no waiting room. Casey Hester, PMHNP-BC, sees telehealth patients statewide.
                    </p>
                    <div className="flex flex-wrap items-center gap-5 text-slate-700">
                        <a href="tel:6626404004" className="text-lg underline decoration-[#3d5a4c] decoration-2 underline-offset-[6px] hover:text-slate-900 transition-colors">
                            Call (662) 640-4004
                        </a>
                        <span className="opacity-50">·</span>
                        <span className="text-sm opacity-80">Same-week telehealth appointments available</span>
                    </div>
                </div>
            </section>

            {/* Letter-style intro */}
            <section className="py-20">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="font-serif text-2xl md:text-3xl text-slate-900 leading-snug mb-10">
                        There are entire counties in Mississippi without a single Suboxone provider.
                        That isn't a Mississippi problem — <span className="italic">it's a logistics problem</span>.
                    </div>
                    <p className="text-lg text-slate-600 leading-relaxed mb-5">
                        If you live in Greenville, in Hattiesburg, in Corinth, in Natchez, in Cleveland — the nearest
                        in-person Suboxone clinic might be ninety minutes one way. Add work, add kids, add a car that
                        doesn't always start. Add the gas. Add the day off.
                    </p>
                    <p className="text-lg text-slate-600 leading-relaxed mb-5">
                        Telehealth Suboxone exists because the federal rules changed. After 2020, the DEA waived the
                        in-person evaluation requirement for buprenorphine. As of 2024, that flexibility was made
                        permanent for ongoing care, with a one-time in-person visit waived in most cases. The medicine
                        is the same. The provider is the same. The relationship is the same.
                    </p>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        What changes is the drive. That is not a small thing. For most of our telehealth patients, the
                        drive was the reason they hadn't started.
                    </p>
                </div>
            </section>

            {/* Where we can see you */}
            <section className="py-20 bg-[#faf7f1]">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="flex items-start gap-8 mb-10">
                        <PathSketch className="hidden md:block text-slate-900 w-24 flex-shrink-0 mt-2" />
                        <div>
                            <p className="text-sm tracking-widest uppercase text-slate-500 mb-3">One — where we can see you</p>
                            <h2 className="font-serif text-4xl text-slate-900 mb-6 leading-tight">
                                Anywhere with a Mississippi address.
                            </h2>
                        </div>
                    </div>

                    <div className="space-y-6 text-lg text-slate-700 leading-relaxed md:pl-32">
                        <p>
                            Casey is licensed across the state of Mississippi. That means telehealth Suboxone is
                            available wherever you are physically located in MS at the time of the visit — your home,
                            your truck on lunch break, your parents' kitchen. The licensure tracks <em>your location</em>,
                            not ours.
                        </p>
                        <p>
                            We see telehealth patients in the Delta — <span className="font-semibold text-slate-900">Greenville,
                            Cleveland, Clarksdale, Indianola, Greenwood</span>. The Pine Belt — <span className="font-semibold text-slate-900">Hattiesburg,
                            Laurel, Petal</span>. The Coast — <span className="font-semibold text-slate-900">Gulfport, Biloxi,
                            Pascagoula, Bay St. Louis</span>. The river towns — <span className="font-semibold text-slate-900">Natchez,
                            Vicksburg, McComb</span>. Central Mississippi — <span className="font-semibold text-slate-900">Jackson,
                            Brandon, Madison, Clinton, Pearl</span>. Northeast — <span className="font-semibold text-slate-900">Corinth,
                            Tupelo, Columbus, Starkville</span>. And every small town in between.
                        </p>
                        <p>
                            If you're in Lafayette, Panola, Marshall, Union, Tate, Pontotoc, Calhoun, Yalobusha, or Lee
                            County and would prefer to come see us in person, we're at 405 Galleria Drive in Oxford.
                            Some patients do a hybrid — first visit in the office, follow-ups by video.
                        </p>
                    </div>
                </div>
            </section>

            {/* How it works — induction over telehealth */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="flex items-start gap-8 mb-10">
                        <ClockSketch className="hidden md:block text-slate-900 w-20 flex-shrink-0 mt-1" />
                        <div>
                            <p className="text-sm tracking-widest uppercase text-slate-500 mb-3">Two — how a telehealth induction actually works</p>
                            <h2 className="font-serif text-4xl text-slate-900 mb-6 leading-tight">
                                The first day, by video.
                            </h2>
                            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
                                Telehealth induction is a real protocol — the same Clinical Opiate Withdrawal Scale, the
                                same dosing logic, the same check-ins as an in-office visit. The difference is that you
                                stay home.
                            </p>
                        </div>
                    </div>

                    <div className="md:pl-28 space-y-10">
                        <div className="grid grid-cols-12 gap-6">
                            <div className="col-span-12 md:col-span-2">
                                <div className="font-serif text-5xl text-gold-accent leading-none">01</div>
                            </div>
                            <div className="col-span-12 md:col-span-10 text-slate-700 text-lg leading-relaxed">
                                <p className="font-semibold text-slate-900 mb-2">The intake call.</p>
                                <p>
                                    Kim takes your information by phone — insurance, ID, pharmacy, brief history. We send
                                    you a link for the secure video platform and a few intake forms to fill out. Most
                                    patients are scheduled for a real appointment within a week.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-12 gap-6">
                            <div className="col-span-12 md:col-span-2">
                                <div className="font-serif text-5xl text-gold-accent leading-none">02</div>
                            </div>
                            <div className="col-span-12 md:col-span-10 text-slate-700 text-lg leading-relaxed">
                                <p className="font-semibold text-slate-900 mb-2">The morning of induction.</p>
                                <p>
                                    Don't take your usual. You need to be in real withdrawal — the COWS scale takes about
                                    two minutes and Casey walks through it with you on camera. Sweating, restlessness,
                                    runny nose, yawning, tremor, goosebumps. Score of twelve or more means we go.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-12 gap-6">
                            <div className="col-span-12 md:col-span-2">
                                <div className="font-serif text-5xl text-gold-accent leading-none">03</div>
                            </div>
                            <div className="col-span-12 md:col-span-10 text-slate-700 text-lg leading-relaxed">
                                <p className="font-semibold text-slate-900 mb-2">The prescription, sent electronically.</p>
                                <p>
                                    Casey sends the buprenorphine/naloxone script to your local pharmacy in real time. CVS,
                                    Walgreens, Walmart, the small independent pharmacies — every Mississippi pharmacy is
                                    set up for it. Most patients have the medicine in hand within ninety minutes.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-12 gap-6">
                            <div className="col-span-12 md:col-span-2">
                                <div className="font-serif text-5xl text-gold-accent leading-none">04</div>
                            </div>
                            <div className="col-span-12 md:col-span-10 text-slate-700 text-lg leading-relaxed">
                                <p className="font-semibold text-slate-900 mb-2">The first dose, on camera.</p>
                                <p>
                                    Two to four milligrams under the tongue. Casey stays on the call. Effects start in
                                    thirty to sixty minutes — sweating drops, the cold panic of withdrawal turns off, you
                                    stop being dope sick. If you're not meaningfully better at the one-hour mark, we dose
                                    again.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-12 gap-6">
                            <div className="col-span-12 md:col-span-2">
                                <div className="font-serif text-5xl text-gold-accent leading-none">05</div>
                            </div>
                            <div className="col-span-12 md:col-span-10 text-slate-700 text-lg leading-relaxed">
                                <p className="font-semibold text-slate-900 mb-2">The follow-ups.</p>
                                <p>
                                    Day three. Day seven. Then weekly for the first month. Then biweekly. Then monthly.
                                    All by video. We adjust the dose, talk through what's working, problem-solve what
                                    isn't. If at any point you want to come in person, the door is open.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <WaveRule className="text-slate-300 w-40 mx-auto my-4" />

            {/* What you need at home */}
            <section className="py-20 bg-[#faf7f1]">
                <div className="max-w-3xl mx-auto px-6">
                    <p className="text-sm tracking-widest uppercase text-slate-500 mb-3">Three — what you need on your end</p>
                    <h2 className="font-serif text-4xl text-slate-900 mb-6 leading-tight">
                        It's less than people think.
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-10">
                        We have patients on telehealth using a flip phone for the audio and a tablet for the video. The
                        list is short.
                    </p>

                    <ul className="space-y-3 text-lg text-slate-700 leading-relaxed">
                        <li>— A phone, tablet, or computer with a working camera and microphone.</li>
                        <li>— A Mississippi address — yours, family's, a sober living, anywhere we can reach you.</li>
                        <li>— A pharmacy nearby. Any chain. Any town.</li>
                        <li>— Twenty minutes of relative privacy for each appointment.</li>
                        <li>— Photo ID and insurance card, if you have one. Photographed and uploaded.</li>
                    </ul>

                    <p className="mt-10 text-slate-600 italic leading-relaxed">
                        No medical equipment. No special app. No good Wi-Fi required for most appointments — cellular
                        is fine.
                    </p>
                </div>
            </section>

            {/* Insurance + cost on telehealth */}
            <section className="py-20">
                <div className="max-w-3xl mx-auto px-6">
                    <p className="text-sm tracking-widest uppercase text-slate-500 mb-3">Four — what it costs by video</p>
                    <h2 className="font-serif text-4xl text-slate-900 mb-6 leading-tight">
                        Insurance treats telehealth like a regular visit.
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                        Mississippi has parity laws — by statute, your insurance has to cover a video visit at the same
                        rate they cover an in-person visit. That's not a loophole; it's the rule.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed mb-5">
                        <span className="font-semibold text-slate-900">Blue Cross Blue Shield of Mississippi</span> covers
                        telehealth Suboxone visits at your standard specialist copay. We're in network.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed mb-5">
                        <span className="font-semibold text-slate-900">Mississippi Medicaid and Magnolia Health</span> cover
                        telehealth substance use visits. Generic buprenorphine/naloxone is on every formulary.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed mb-5">
                        <span className="font-semibold text-slate-900">Self-pay,</span> Kim quotes the visit fee on your
                        first call. Generic medication at most pharmacies runs roughly thirty to eighty dollars a month
                        depending on dose. GoodRx and SingleCare can drop it further.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                        We do not bill for missed video visits the same way some clinics do. Life happens. Reschedule.
                    </p>
                </div>
            </section>

            <WaveRule className="text-slate-300 w-40 mx-auto my-4" />

            {/* Privacy on telehealth */}
            <section className="py-20 bg-[#faf7f1]">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="flex items-start gap-10 mb-10">
                        <HandSketch className="hidden md:block text-slate-900 w-20 flex-shrink-0 mt-1" />
                        <div>
                            <p className="text-sm tracking-widest uppercase text-slate-500 mb-3">Five — privacy on a video call</p>
                            <h2 className="font-serif text-4xl text-slate-900 mb-6 leading-tight max-w-2xl">
                                The video is HIPAA-encrypted. The records are stricter.
                            </h2>
                        </div>
                    </div>

                    <div className="md:pl-28 space-y-6 text-lg text-slate-700 leading-relaxed">
                        <p>
                            We use a HIPAA-compliant telehealth platform — end-to-end encrypted, no recording stored,
                            BAA in place. The video itself is not saved.
                        </p>
                        <p>
                            Your record is protected by <span className="font-semibold text-slate-900">42 CFR Part 2</span> —
                            a federal confidentiality rule for substance use treatment that is stricter than standard
                            HIPAA. Employers, family members, and law enforcement cannot access your records without your
                            written consent. Period. Not even by subpoena in most cases.
                        </p>
                        <p>
                            If you live with people you don't want hearing the visit, AirPods work. If you need to do the
                            appointment from your truck on lunch break, plenty of patients do exactly that.
                        </p>
                    </div>
                </div>
            </section>

            {/* Compare in-person vs telehealth */}
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-6">
                    <p className="text-sm tracking-widest uppercase text-slate-500 mb-3">Six — which is right for you</p>
                    <h2 className="font-serif text-4xl text-slate-900 mb-4 leading-tight">
                        Telehealth or in-person?
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl leading-relaxed mb-14">
                        Both work. Both are real medicine. The right choice usually has more to do with your life than
                        your medicine.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
                        <div>
                            <h3 className="font-serif text-2xl text-slate-900 mb-1">Telehealth</h3>
                            <p className="text-sm text-slate-500 mb-5 italic">Video visits, anywhere in Mississippi</p>
                            <div className="border-l-2 border-gold-accent pl-5 space-y-3 text-slate-700 leading-relaxed">
                                <p>
                                    Best when distance, work hours, or transportation is a real barrier. No drive, no
                                    waiting room, no day off. Same dose adjustments and follow-ups as in-person.
                                </p>
                                <p>
                                    The tradeoff: you need a quiet twenty minutes and a working camera. If your living
                                    situation doesn't allow privacy, in-person may be easier.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-serif text-2xl text-slate-900 mb-1">In-person at our Oxford office</h3>
                            <p className="text-sm text-slate-500 mb-5 italic">405 Galleria Drive, Suite E</p>
                            <div className="border-l-2 border-gold-accent pl-5 space-y-3 text-slate-700 leading-relaxed">
                                <p>
                                    Best for the first visit if you're nearby and for patients who want the room to
                                    feel real. Some people just sit differently in a chair than on a screen.
                                </p>
                                <p>
                                    Many patients do a hybrid — first visit in the office, follow-ups by video.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <WaveRule className="text-slate-300 w-40 mx-auto my-4" />

            {/* Cross-link to pillar */}
            <section className="py-20 bg-[#faf7f1]">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <PathSketch className="text-slate-400 w-60 mx-auto mb-8" />
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                        For a deeper walk through the medicine itself — what Suboxone does, the induction protocol,
                        and side effects — start here.
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

            {/* FAQ — telehealth-specific, schema-rich */}
            <FAQ
                theme="light"
                eyebrow="Telehealth Suboxone questions"
                title="What people ask before their first video visit"
                items={[
                    {
                        q: 'Is telehealth Suboxone legal in Mississippi?',
                        aText:
                            'Yes. The DEA permanently extended telehealth flexibility for buprenorphine prescribing in 2024, allowing licensed providers to prescribe Suboxone without an initial in-person evaluation in most cases. Mississippi state law also requires insurance parity for telehealth services.',
                        a: (
                            <>
                                Yes. The <strong>DEA permanently extended telehealth flexibility</strong> for buprenorphine prescribing
                                in 2024, allowing licensed providers to prescribe Suboxone without an initial in-person visit in most
                                cases. Mississippi state law requires insurance parity for telehealth.
                            </>
                        ),
                    },
                    {
                        q: 'Can I start Suboxone for the first time over telehealth?',
                        aText:
                            'Yes. Telehealth induction is a real clinical protocol. Casey walks you through the Clinical Opiate Withdrawal Scale on camera, confirms you are in moderate withdrawal, sends the prescription electronically to your local pharmacy, and stays on the video for the first dose.',
                        a: (
                            <>
                                Yes. Telehealth induction follows the same protocol as in-office — Casey walks the COWS scale on
                                camera, confirms you're in withdrawal, sends the script to your local pharmacy, and stays on for the
                                first dose.
                            </>
                        ),
                    },
                    {
                        q: 'Where in Mississippi can I get telehealth Suboxone treatment?',
                        aText:
                            'Anywhere in Mississippi. Casey is licensed statewide, so telehealth Suboxone is available in every county — Delta towns like Greenville and Cleveland, the Pine Belt, the Coast, the river towns, central Mississippi, and the northeast. Patients only need to be physically located in Mississippi at the time of the visit.',
                        a: (
                            <>
                                Anywhere in Mississippi. Casey is licensed statewide. Patients in the Delta, Pine Belt, Coast, river
                                towns, central MS, and northeast are all eligible. You only need to be physically in Mississippi
                                during the visit.
                            </>
                        ),
                    },
                    {
                        q: 'Does insurance cover telehealth Suboxone in Mississippi?',
                        aText:
                            'Yes. Mississippi has telehealth parity laws — insurance must cover a video visit at the same rate as an in-person visit. Blue Cross Blue Shield of Mississippi, Mississippi Medicaid, and Magnolia Health all cover telehealth substance use visits, and generic buprenorphine/naloxone is on every formulary.',
                        a: (
                            <>
                                Yes. Mississippi parity law requires insurance to cover telehealth at the same rate as in-person.{' '}
                                <strong>BCBS Mississippi, Medicaid, and Magnolia Health</strong> all cover telehealth substance use
                                visits. Generic medication is on every formulary.
                            </>
                        ),
                    },
                    {
                        q: 'How quickly can I get a telehealth appointment?',
                        aText:
                            'Most new telehealth patients are scheduled within one week of the first phone call. Same-week induction is routine. Call (662) 640-4004 and Kim will walk you through scheduling.',
                        a: (
                            <>
                                Most new patients are scheduled within one week. Same-week induction is routine. Call{' '}
                                <strong>(662) 640-4004</strong> and Kim sets it up.
                            </>
                        ),
                    },
                    {
                        q: 'What technology do I need for a telehealth Suboxone visit?',
                        aText:
                            'A phone, tablet, or computer with a working camera and microphone. The platform is HIPAA-compliant and works on cellular data. No special app required. We send a secure video link before each visit.',
                        a: (
                            <>
                                A phone, tablet, or computer with a camera and mic. The platform is HIPAA-compliant and works on
                                cellular. No special app — we send a secure link.
                            </>
                        ),
                    },
                    {
                        q: 'Is the video visit confidential? Can my employer find out?',
                        aText:
                            'The video platform is HIPAA-encrypted with no recording stored. Substance use treatment records are protected by 42 CFR Part 2, a federal confidentiality rule stricter than HIPAA. Employers, family members, and law enforcement cannot access your records without your written consent.',
                        a: (
                            <>
                                Video is HIPAA-encrypted, not recorded. Records are covered by{' '}
                                <strong>42 CFR Part 2</strong> — stricter than HIPAA. Employers, family, and law enforcement cannot
                                access them without your written consent.
                            </>
                        ),
                    },
                    {
                        q: 'Will I get the same provider every visit?',
                        aText:
                            'Yes. Casey Hester, PMHNP-BC, is the only psychiatric provider at Life Balance. The person you see on day one is the person you see on day three hundred. There is no rotating panel.',
                        a: (
                            <>
                                Yes. Casey is the only psychiatric provider at Life Balance. Same provider, every visit. No rotation.
                            </>
                        ),
                    },
                ]}
            />

            {/* Closing CTA */}
            <section className="py-24 bg-dark-green">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">
                        Wherever you are in Mississippi, we can start.
                    </h2>
                    <p className="text-lg text-cream mb-10 max-w-xl mx-auto leading-relaxed">
                        Start with a new client intake. Most new telehealth patients have their first video visit
                        within the same week.
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

export default SuboxoneTelehealth;
