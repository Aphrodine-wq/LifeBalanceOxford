import React from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { pageMeta } from '../seo/pages.js';
import { PillSketch, ClockSketch, PathSketch, HandSketch, WaveRule, ArrowSketch } from './Sketches';
import FAQ from './FAQ';

const OleMissSuboxone: React.FC = () => {
    usePageMeta(pageMeta['/ole-miss-suboxone-doctor']);

    return (
        <div className="bg-white min-h-screen animate-fade-in">

            {/* Opener */}
            <section className="bg-dark-green pt-20 pb-24">
                <div className="max-w-4xl mx-auto px-6">
                    <p className="text-sm tracking-widest uppercase text-gold-accent mb-6">
                        Suboxone Care &nbsp;·&nbsp; Ole Miss &amp; North Mississippi
                    </p>
                    <h1 className="font-serif text-[2.6rem] md:text-[3.4rem] leading-[1.08] font-semibold text-white mb-8 max-w-3xl">
                        You don't have to drive to Memphis<br />
                        <span className="text-gold-accent italic font-normal">to keep this private.</span>
                    </h1>
                    <p className="text-xl text-cream max-w-2xl leading-relaxed mb-10">
                        Quiet, continuous Suboxone and psychiatric care for the Ole Miss community — students,
                        graduate students, faculty, staff, and the rest of North Mississippi. A mile and a half from
                        campus. Records that stay with us.
                    </p>
                    <div className="flex flex-wrap items-center gap-5 text-cream">
                        <a href="tel:6626404004" className="text-lg underline decoration-gold-accent decoration-2 underline-offset-[6px] hover:text-white transition-colors">
                            Call (662) 640-4004
                        </a>
                        <span className="opacity-50">·</span>
                        <span className="text-sm opacity-80">Same-week appointments · Walk-in friendly</span>
                    </div>
                </div>
            </section>

            {/* Letter intro — why off-campus exists for a reason */}
            <section className="py-20">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="font-serif text-2xl md:text-3xl text-slate-900 leading-snug mb-10">
                        The Counseling Center has good people. So does Student Health. There's still a kind of care
                        they were never designed to give.
                    </div>
                    <p className="text-lg text-slate-600 leading-relaxed mb-5">
                        On-campus services run on referral and triage. Their job is to stabilize and route. They are
                        not, and were not built to be, a long-term private psychiatric home — and they sit inside a
                        university health system that touches insurance, advisors, and (for some students) family
                        notification.
                    </p>
                    <p className="text-lg text-slate-600 leading-relaxed mb-5">
                        For a lot of students who land here, the medicine they need — buprenorphine,
                        psychiatric medication management for ADHD or anxiety, treatment for what started as Adderall
                        and turned into something else — is the kind of care that needs continuity, dose adjustments
                        across a semester, and the privacy of a small office that does not share a database with the
                        University of Mississippi.
                    </p>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Same is true for graduate students, faculty kids, visiting professors, and staff. We see all of
                        them. The records stay here.
                    </p>
                </div>
            </section>

            {/* Who actually walks through the door */}
            <section className="py-20 bg-[#faf7f1]">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="flex items-start gap-8 mb-10">
                        <PathSketch className="hidden md:block text-slate-900 w-24 flex-shrink-0 mt-2" />
                        <div>
                            <p className="text-sm tracking-widest uppercase text-slate-500 mb-3">One — who shows up here</p>
                            <h2 className="font-serif text-4xl text-slate-900 mb-6 leading-tight">
                                The Ole Miss community we already see.
                            </h2>
                        </div>
                    </div>

                    <div className="space-y-8 text-lg text-slate-700 leading-relaxed md:pl-32">
                        <p>
                            <span className="font-semibold text-slate-900">Undergraduates</span> — most often someone
                            whose pill habit started in a study group during finals and never let go. Hydrocodone from
                            a wisdom-tooth surgery. A friend's Adderall that turned into something stronger. The fentanyl
                            in everything now is a different kind of dangerous than what existed five years ago, and we
                            see the result of it weekly.
                        </p>
                        <p>
                            <span className="font-semibold text-slate-900">Graduate students</span> — pharmacy, law,
                            nursing, business, MFA. They are sharper than most about the cost of a record showing up in
                            the wrong place during licensing or board exams. They want privacy, and they're right to
                            want it.
                        </p>
                        <p>
                            <span className="font-semibold text-slate-900">Faculty and staff</span> — including faculty
                            and staff kids home from a school in Texas, Georgia, Tennessee, or Florida who need
                            continuity while they're back in Oxford. We coordinate with their out-of-state provider when
                            it helps.
                        </p>
                        <p>
                            <span className="font-semibold text-slate-900">Athletes and Greek life members</span> —
                            quietly, with the privacy you'd expect. We do not communicate with athletic departments,
                            chapter officers, or coaches. Medical questions about NCAA-required documentation should be
                            handled with team physicians; we are happy to coordinate where appropriate and the patient
                            authorizes it.
                        </p>
                        <p>
                            <span className="font-semibold text-slate-900">North Mississippi residents who happen to
                            live near Ole Miss</span> — Oxford locals, Lafayette County, and patients driving in from
                            across the region. We are the regional Suboxone hub for North Mississippi, not just the
                            university crowd.
                        </p>
                    </div>
                </div>
            </section>

            {/* The privacy specifics — the part students actually want to read */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="flex items-start gap-8 mb-10">
                        <HandSketch className="hidden md:block text-slate-900 w-20 flex-shrink-0 mt-1" />
                        <div>
                            <p className="text-sm tracking-widest uppercase text-slate-500 mb-3">Two — the privacy specifics</p>
                            <h2 className="font-serif text-4xl text-slate-900 mb-6 leading-tight max-w-2xl">
                                What 42 CFR Part 2 actually means for an Ole Miss student.
                            </h2>
                            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
                                This isn't marketing language. It's a federal rule that applies specifically to substance
                                use treatment records — and it is stricter than HIPAA. Here's what it means in practical
                                terms.
                            </p>
                        </div>
                    </div>

                    <div className="md:pl-28 space-y-8 text-lg text-slate-700 leading-relaxed">
                        <div>
                            <h3 className="font-serif text-xl text-slate-900 mb-2">We are not part of the University Health System.</h3>
                            <p>
                                Life Balance, PLLC is a private outpatient practice. Your record is not visible in any
                                Ole Miss system, EMR, or database. Not Student Health. Not the Counseling Center. Not
                                Athletics. Not the Dean's office. Not housing. Not academic advising.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-serif text-xl text-slate-900 mb-2">No release without your written consent.</h3>
                            <p>
                                Substance use records under 42 CFR Part 2 cannot be released to a third party without
                                your specific, written, time-limited authorization — and that includes parents, even
                                under FERPA, for any patient eighteen or older. Most subpoenas do not pierce it without
                                a court order specifically referencing 42 CFR Part 2.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-serif text-xl text-slate-900 mb-2">Insurance is the one thing to think through.</h3>
                            <p>
                                If you use insurance, the insurance company sees that a claim was paid. If you're on a
                                parent's plan, an Explanation of Benefits gets mailed home — usually showing date, code,
                                and amount, sometimes the provider name. Many of our students choose self-pay
                                specifically to avoid this. We will help you think through the tradeoff on your first
                                call.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-serif text-xl text-slate-900 mb-2">Nothing on a transcript. Nothing in a graduation file.</h3>
                            <p>
                                Outside medical care has no path to academic records. Treatment here will not appear on
                                a transcript, in a graduate school application, in an athletic eligibility file, or in a
                                bar / nursing / pharmacy / counseling licensure background unless you yourself disclose
                                it.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <WaveRule className="text-slate-300 w-40 mx-auto my-4" />

            {/* The geography — Oxford and the wider North MS region */}
            <section className="py-20 bg-[#faf7f1]">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="flex items-start gap-8 mb-10">
                        <ClockSketch className="hidden md:block text-slate-900 w-20 flex-shrink-0 mt-1" />
                        <div>
                            <p className="text-sm tracking-widest uppercase text-slate-500 mb-3">Three — where we sit</p>
                            <h2 className="font-serif text-4xl text-slate-900 mb-6 leading-tight">
                                A mile and a half from the Square. The hub for North Mississippi.
                            </h2>
                        </div>
                    </div>

                    <div className="md:pl-28 space-y-6 text-lg text-slate-700 leading-relaxed">
                        <p>
                            We're at <span className="font-semibold text-slate-900">405 Galleria Drive, Suite E</span> —
                            in the Galleria off Jackson Avenue West. From the Lyceum it's about six minutes by car,
                            twenty by bike. From the Grove it's the same. From any sorority or fraternity house on the
                            row it's under ten minutes.
                        </p>
                        <p>
                            Outside the Ole Miss community, we are the Suboxone and MAT clinic for the broader{' '}
                            <span className="font-semibold text-slate-900">North Mississippi region</span> — Lafayette,
                            Panola, Tate, Marshall, Yalobusha, Calhoun, Pontotoc, Union, Lee, Tippah, DeSoto, Tunica,
                            Coahoma, and Quitman counties. Patients drive in from Batesville, Senatobia, Holly Springs,
                            New Albany, Water Valley, Bruce, Pontotoc, Tupelo, Olive Branch, Southaven, Hernando,
                            Sardis, Como, Clarksdale.
                        </p>
                        <p>
                            For students from the Delta, the river towns, or the Pine Belt who would rather not drive,
                            we also see telehealth Suboxone patients across all of Mississippi.
                        </p>
                        <div className="pt-3">
                            <Link
                                to="/suboxone-telehealth-mississippi"
                                className="inline-flex items-center gap-2 text-teal-700 font-semibold text-base hover:text-teal-800 underline decoration-1 underline-offset-4"
                            >
                                Telehealth Suboxone across Mississippi &rarr;
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Insurance reality */}
            <section className="py-20">
                <div className="max-w-3xl mx-auto px-6">
                    <p className="text-sm tracking-widest uppercase text-slate-500 mb-3">Four — paying for it</p>
                    <h2 className="font-serif text-4xl text-slate-900 mb-6 leading-tight">
                        How students and faculty actually pay for this.
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                        Mississippi has a few common patterns for the Ole Miss community. Here's the honest version of
                        each.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed mb-5">
                        <span className="font-semibold text-slate-900">A parent's BCBS Mississippi or out-of-state BCBS
                        plan,</span> covering you up to age twenty-six. Most are in network. The catch is the EOB —
                        the Explanation of Benefits gets mailed to whoever holds the policy. If that matters, ask Kim
                        about self-pay before your first appointment.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed mb-5">
                        <span className="font-semibold text-slate-900">Mississippi Medicaid or Magnolia Health</span> for
                        students who qualify. Both cover Suboxone visits and generic buprenorphine/naloxone.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed mb-5">
                        <span className="font-semibold text-slate-900">Student health insurance plans,</span> which vary
                        widely — many are administered by Aetna or BCBS and do cover behavioral health and substance use
                        treatment. We'll verify on the call.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed mb-5">
                        <span className="font-semibold text-slate-900">Self-pay, by far the most private route.</span>{' '}
                        Kim quotes the visit fee on your first call. Generic buprenorphine/naloxone at most Oxford
                        pharmacies — Walmart on Jackson Ave, CVS on University, Walgreens on West Jackson, the
                        independents — runs roughly thirty to eighty dollars a month depending on dose. GoodRx and
                        SingleCare can drop that further.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                        Some patients use insurance for the medication and self-pay for the visit. We can structure it
                        that way.
                    </p>
                </div>
            </section>

            <WaveRule className="text-slate-300 w-40 mx-auto my-4" />

            {/* Schedule realities */}
            <section className="py-20">
                <div className="max-w-3xl mx-auto px-6">
                    <p className="text-sm tracking-widest uppercase text-slate-500 mb-3">Five — fitting it into the week</p>
                    <h2 className="font-serif text-4xl text-slate-900 mb-6 leading-tight">
                        Between classes. Between practices. Over breaks.
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                        Office hours are Monday through Thursday eight to five, Friday eight to noon. Most established
                        Suboxone follow-ups take fifteen to twenty minutes. We schedule realistically.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed mb-5">
                        <span className="font-semibold text-slate-900">During the semester</span> — early morning before
                        an eight-AM, between back-to-back blocks, late afternoon after practice. We work around your
                        schedule, not the other way around.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed mb-5">
                        <span className="font-semibold text-slate-900">Over fall break, Thanksgiving, winter break, and
                        spring break,</span> if you're going home in Mississippi, telehealth keeps your continuity from
                        wherever you are in state. If you're going out of state, we plan ahead — prescription length
                        and a refill plan that doesn't leave you empty in another time zone.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                        <span className="font-semibold text-slate-900">Over summer,</span> if you're back home in
                        Mississippi for the summer, we keep seeing you. If you're at an internship out of state, we
                        coordinate a transfer or a bridge — which we have done many times.
                    </p>
                </div>
            </section>

            {/* Cross-link */}
            <section className="py-20 bg-[#faf7f1]">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <PathSketch className="text-slate-400 w-60 mx-auto mb-8" />
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                        For the deeper walk through Suboxone itself — what it does, the induction protocol, and side
                        effects — start here.
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

            {/* FAQ — Ole Miss specific, schema-rich */}
            <FAQ
                theme="light"
                eyebrow="Questions from the Ole Miss community"
                title="What students, parents, and faculty actually ask first."
                items={[
                    {
                        q: 'Will my parents find out I am being treated for Suboxone?',
                        aText:
                            'Not from us. Substance use treatment records are protected by 42 CFR Part 2, which is stricter than HIPAA. We do not release records to parents — even FERPA does not override this — without your specific written consent. The one thing to plan for is insurance: if you are on a parent plan, the Explanation of Benefits is mailed to the policyholder. Many students self-pay specifically to avoid this. Kim will walk you through the tradeoff on your first call.',
                        a: (
                            <>
                                Not from us. Substance use treatment records are protected by{' '}
                                <strong>42 CFR Part 2</strong> — stricter than HIPAA. We do not release records to parents
                                without your written consent. The one thing to plan for is the insurance EOB if you're on a
                                parent plan. Many students self-pay to avoid this — Kim walks through it on the first call.
                            </>
                        ),
                    },
                    {
                        q: 'Will Ole Miss know I am being treated here?',
                        aText:
                            'No. Life Balance is a private practice unaffiliated with the University of Mississippi. Our records do not touch any Ole Miss system — not Student Health, not the Counseling Center, not Athletics, not advising, not the Dean. There is no pathway from our chart to a transcript or a university file.',
                        a: (
                            <>
                                No. Life Balance is a private practice unaffiliated with the University of Mississippi. Our
                                records do not touch <strong>any</strong> Ole Miss system — not Student Health, not the Counseling
                                Center, not Athletics, not advising. No pathway to a transcript or university file.
                            </>
                        ),
                    },
                    {
                        q: 'Can a Suboxone record affect my graduate or professional school applications?',
                        aText:
                            'Outside medical treatment does not appear on academic transcripts or in graduate school files. It is not part of any record schools can pull. The only path to disclosure is you choosing to disclose it, which most licensure applications only require for active legal or disciplinary issues.',
                        a: (
                            <>
                                Outside medical treatment does not appear on transcripts or in graduate school files. The only
                                disclosure path is you choosing to disclose — which most licensure applications only require for
                                active legal or disciplinary issues.
                            </>
                        ),
                    },
                    {
                        q: 'I am an Ole Miss athlete. Can I be on Suboxone?',
                        aText:
                            'Buprenorphine is not a banned substance under standard NCAA testing protocols when prescribed for opioid use disorder. However, NCAA medical exception documentation is handled through team physicians, not outside providers. Our role is to provide the prescription and continuity privately; coordination with your team physician should go through the patient with appropriate consent.',
                        a: (
                            <>
                                Buprenorphine is not a banned substance under standard NCAA protocols when prescribed for opioid
                                use disorder. NCAA medical exception documentation runs through team physicians, not outside
                                providers. Our role is private continuity. Coordination with team docs is patient-led with
                                consent.
                            </>
                        ),
                    },
                    {
                        q: 'I am visiting Oxford for a semester. Can I get a short-term Suboxone bridge here?',
                        aText:
                            'Yes. Visiting students, exchange students, and visiting faculty are common patients. We bridge from your home provider for the duration you are in Oxford and coordinate the transition back. Bring records from your previous prescriber when possible.',
                        a: (
                            <>
                                Yes. Visiting students, exchange students, and visiting faculty are common patients. We bridge
                                from your home provider for the duration you're in Oxford and coordinate the transition back.
                            </>
                        ),
                    },
                    {
                        q: 'I am a graduate student worried about future licensure exams. Should I avoid treatment?',
                        aText:
                            'No. Avoiding medication-assisted treatment carries far more risk for licensure than receiving it — relapse, untreated illness, and crisis events are what create disclosable problems. Treatment for opioid use disorder is the standard of care recognized by the WHO, SAMHSA, ASAM, and the CDC. Most licensure boards distinguish between active problems and treated, stable conditions.',
                        a: (
                            <>
                                No. Avoiding treatment carries <strong>more</strong> licensure risk than receiving it — relapse and crisis
                                events are what create disclosable problems. MAT is the standard of care per WHO, SAMHSA, ASAM,
                                and the CDC. Most boards distinguish active problems from treated, stable conditions.
                            </>
                        ),
                    },
                    {
                        q: 'Do you treat Adderall, alcohol, or benzodiazepine issues — not just opioids?',
                        aText:
                            'Yes. Casey is a board-certified psychiatric mental health nurse practitioner who treats substance use disorders, alcohol use disorder, ADHD, anxiety, depression, and co-occurring conditions. Suboxone is one part of the practice. Many patients arrive with a primary opioid concern and a secondary issue that has gone untreated.',
                        a: (
                            <>
                                Yes. Casey treats substance use disorders, alcohol use disorder, ADHD, anxiety, depression, and
                                co-occurring conditions. Suboxone is one part of the practice. Many patients arrive with a
                                primary opioid issue and a secondary, untreated condition.
                            </>
                        ),
                    },
                    {
                        q: 'Where exactly are you, and how do I get there from campus?',
                        aText:
                            'Life Balance is at 405 Galleria Drive, Suite E, Oxford, MS 38655 — in the Galleria shopping center off Jackson Avenue West. From the Lyceum it is about six minutes by car. There is easy parking and ground-floor entry. Our number is (662) 640-4004.',
                        a: (
                            <>
                                <strong>405 Galleria Drive, Suite E, Oxford, MS 38655</strong> — Galleria shopping center off Jackson Avenue
                                West. About six minutes from the Lyceum. Easy parking, ground-floor entry. Call{' '}
                                <strong>(662) 640-4004</strong>.
                            </>
                        ),
                    },
                ]}
            />

            {/* Closing CTA */}
            <section className="py-24 bg-dark-green">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">
                        Same medicine the rest of the country has.<br />
                        <span className="text-gold-accent italic font-normal">The privacy you'd want.</span>
                    </h2>
                    <p className="text-lg text-cream mb-10 max-w-xl mx-auto leading-relaxed">
                        Call during business hours. Kim answers the phone. Most new patients — students, faculty,
                        staff, and patients from across North Mississippi — are seen within the same week.
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

        </div>
    );
};

export default OleMissSuboxone;
