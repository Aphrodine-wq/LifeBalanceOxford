import React from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { pageMeta } from '../seo/pages.js';
import { PathSketch, ClockSketch, WaveRule, ArrowSketch } from './Sketches';
import FAQ from './FAQ';

const BcbsSuboxone: React.FC = () => {
    usePageMeta(pageMeta['/blue-cross-suboxone-mississippi']);

    return (
        <div className="bg-white min-h-screen animate-fade-in">

            {/* Opener — coverage / document feel */}
            <section className="bg-white pt-20 pb-24 border-b-4 border-[#c8b560]">
                <div className="max-w-5xl mx-auto px-6">
                    <p className="text-sm tracking-widest uppercase text-slate-500 mb-4">
                        Insurance Coverage &nbsp;·&nbsp; Blue Cross Blue Shield
                    </p>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-10 text-[11px] tracking-[0.18em] uppercase text-slate-700">
                        <span className="border border-slate-300 rounded-sm px-2 py-1">BCBS Mississippi</span>
                        <span className="border border-slate-300 rounded-sm px-2 py-1">BlueCard</span>
                        <span className="border border-slate-300 rounded-sm px-2 py-1">FEP</span>
                        <span className="border border-slate-300 rounded-sm px-2 py-1">Anthem</span>
                        <span className="border border-slate-300 rounded-sm px-2 py-1">Federal Plans</span>
                    </div>
                    <h1 className="font-serif text-[2.6rem] md:text-[3.4rem] leading-[1.08] font-semibold text-slate-900 mb-8 max-w-3xl">
                        Yes, your BCBS plan covers this. Here's what to expect.
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl leading-relaxed mb-10">
                        Blue Cross Blue Shield of Mississippi and most out-of-state BCBS plans cover Suboxone and MAT
                        visits at Life Balance, PLLC in Oxford. We're in network. The honest details on copays,
                        prior auths, and the EOB question are below.
                    </p>
                    <div className="flex flex-wrap items-center gap-5 text-slate-700">
                        <a href="tel:6626404004" className="text-lg underline decoration-[#3d5a4c] decoration-2 underline-offset-[6px] hover:text-slate-900 transition-colors">
                            Call (662) 640-4004
                        </a>
                        <span className="opacity-50">·</span>
                        <span className="text-sm opacity-80">Verification before your first visit</span>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="font-serif text-2xl md:text-3xl text-slate-900 leading-snug mb-10">
                        BCBS plans cover medication-assisted treatment for opioid use disorder the same way they cover
                        any other psychiatric care. <span className="italic">Mississippi parity law makes that explicit.</span>
                    </div>
                    <p className="text-lg text-slate-600 leading-relaxed mb-5">
                        Under federal Mental Health Parity and the Mississippi Mental Health Parity Act, plans cannot
                        impose different treatment limits, copays, or prior-auth thresholds on substance use treatment
                        than they do on physical health care. In practice, that means Suboxone visits run on your
                        regular specialist copay and the medication itself usually goes through your standard pharmacy
                        benefit.
                    </p>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        We verify your specific plan before your first visit. The notes below cover the patterns we see
                        most.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-[#faf7f1]">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="flex items-start gap-8 mb-10">
                        <PathSketch className="hidden md:block text-slate-900 w-24 flex-shrink-0 mt-2" />
                        <div>
                            <p className="text-sm tracking-widest uppercase text-slate-500 mb-3">One — what BCBS covers</p>
                            <h2 className="font-serif text-4xl text-slate-900 mb-6 leading-tight">
                                The three things your benefit pays for.
                            </h2>
                        </div>
                    </div>

                    <div className="space-y-8 md:pl-32 text-lg text-slate-700 leading-relaxed">
                        <div>
                            <h3 className="font-serif text-xl text-slate-900 mb-2">The visit itself.</h3>
                            <p>
                                In-person or telehealth, billed as psychiatric specialist evaluation and management.
                                Copay is whatever your plan lists for a behavioral-health specialist visit — for most
                                BCBS Mississippi plans that's between thirty and fifty dollars after deductible. Plans
                                that haven't met deductible may pay a contracted rate first.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-serif text-xl text-slate-900 mb-2">Generic Suboxone (buprenorphine/naloxone).</h3>
                            <p>
                                Covered on virtually every BCBS formulary. Tier 1 or Tier 2 in most cases. Pharmacy
                                copay is what you'd pay for any generic. No prior authorization required for
                                buprenorphine/naloxone film at standard maintenance doses on most plans.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-serif text-xl text-slate-900 mb-2">Telehealth visits.</h3>
                            <p>
                                Mississippi parity law requires BCBS to cover telehealth at the same rate as in-person
                                for behavioral health and substance use. We verify each plan, but we have not yet seen a
                                BCBS Mississippi plan that doesn't cover telehealth Suboxone follow-ups.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="flex items-start gap-8 mb-10">
                        <ClockSketch className="hidden md:block text-slate-900 w-20 flex-shrink-0 mt-1" />
                        <div>
                            <p className="text-sm tracking-widest uppercase text-slate-500 mb-3">Two — out-of-state BCBS</p>
                            <h2 className="font-serif text-4xl text-slate-900 mb-6 leading-tight max-w-2xl">
                                If your card says BCBS Tennessee, Texas, Alabama, Georgia, or Illinois.
                            </h2>
                        </div>
                    </div>

                    <div className="md:pl-28 space-y-6 text-lg text-slate-700 leading-relaxed">
                        <p>
                            Out-of-state BCBS plans are processed through the BlueCard program, which means we usually
                            still bill them as in-network. Common patterns we see:
                        </p>
                        <p>
                            <span className="font-semibold text-slate-900">BCBS Tennessee, Alabama, Georgia, Texas, Illinois,
                            Florida, North Carolina</span> — all process through BlueCard. Specialist copay applies.
                            Telehealth covered.
                        </p>
                        <p>
                            <span className="font-semibold text-slate-900">Federal Employee Program (FEP)</span> — BCBS
                            FEP covers Suboxone as a federal benefit. Strong telehealth and behavioral health coverage.
                        </p>
                        <p>
                            <span className="font-semibold text-slate-900">Anthem BCBS plans (multi-state)</span> — same
                            BlueCard processing. We check formulary specifics on each call because Anthem's tier
                            placement varies by state.
                        </p>
                        <p>
                            For Ole Miss students on a parent's out-of-state BCBS plan, this is the most common scenario
                            we run. Coverage is essentially identical to in-state Mississippi plans for our visits.
                        </p>
                    </div>
                </div>
            </section>

            <WaveRule className="text-slate-300 w-40 mx-auto my-4" />

            <section className="py-20 bg-[#faf7f1]">
                <div className="max-w-3xl mx-auto px-6">
                    <p className="text-sm tracking-widest uppercase text-slate-500 mb-3">Three — the EOB question</p>
                    <h2 className="font-serif text-4xl text-slate-900 mb-6 leading-tight">
                        Will the policyholder see this on a statement?
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                        This is the most common question from patients on a parent's plan, a spouse's plan, or any plan
                        where someone other than the patient holds the policy. The honest answer:
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed mb-5">
                        BCBS sends an Explanation of Benefits to the policyholder for every claim paid. The EOB usually
                        shows the date of service, the provider name, the procedure code, and the amount paid. The
                        diagnosis is not typically listed.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed mb-5">
                        For patients who need full privacy from the policyholder, we offer self-pay. Many of our adult
                        children on parent BCBS plans choose self-pay specifically for this reason — Kim quotes the
                        visit fee on the first call so you can compare.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                        Some patients use insurance for the medication (filled at the pharmacy under their pharmacy
                        benefit) and self-pay for the visit. We can structure it that way.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <PathSketch className="text-slate-400 w-60 mx-auto mb-8" />
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                        For the full walk through Suboxone treatment itself — protocol, side effects, and induction —
                        start here.
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
                eyebrow="BCBS coverage questions"
                title="What patients ask before verifying benefits"
                items={[
                    {
                        q: 'Is Life Balance in network with Blue Cross Blue Shield of Mississippi?',
                        aText:
                            'Yes. Life Balance, PLLC is in network with Blue Cross Blue Shield of Mississippi for psychiatric and substance use disorder services, including Suboxone treatment. Out-of-state BCBS plans are processed through the BlueCard program at the same in-network rates.',
                        a: (
                            <>
                                Yes. We are in network with <strong>BCBS Mississippi</strong>. Out-of-state BCBS plans process
                                through <strong>BlueCard</strong> at the same in-network rates.
                            </>
                        ),
                    },
                    {
                        q: 'How much does a Suboxone visit cost with BCBS?',
                        aText:
                            'For most BCBS Mississippi plans, you pay the standard behavioral-health specialist copay (typically $30–$50 after deductible). Plans that have not yet met deductible may apply a contracted rate first. We verify your specific benefits before the first visit.',
                        a: (
                            <>
                                For most plans, the standard <strong>specialist copay</strong> ($30–$50 after deductible).
                                Pre-deductible may apply contracted rate first. We verify before your first visit.
                            </>
                        ),
                    },
                    {
                        q: 'Does BCBS require prior authorization for Suboxone?',
                        aText:
                            'For generic buprenorphine/naloxone film at standard maintenance doses, no prior authorization is required on most BCBS plans. For some non-generic formulations, prior authorization is required. Our office handles the PA paperwork — you do not.',
                        a: (
                            <>
                                <strong>Generic buprenorphine/naloxone film</strong> — no PA on most plans.{' '}
                                <strong>Some non-generic forms</strong> — PA required, we handle it. Approval typically
                                3–7 business days.
                            </>
                        ),
                    },
                    {
                        q: 'Will my parent see the EOB if I am on their BCBS plan?',
                        aText:
                            'BCBS mails an Explanation of Benefits to the policyholder for every paid claim. The EOB lists the date, provider, procedure code, and amount — diagnosis is not typically shown. Many adult patients on a parent plan choose self-pay specifically to avoid the EOB. Some pay cash for the visit and use the parent plan only for the medication at the pharmacy.',
                        a: (
                            <>
                                Yes — BCBS mails an <strong>EOB</strong> to the policyholder per claim. Procedure and amount are
                                listed; diagnosis usually isn't. Many patients self-pay the visit and use insurance only for the
                                pharmacy fill.
                            </>
                        ),
                    },
                    {
                        q: 'Does BCBS cover telehealth Suboxone visits?',
                        aText:
                            'Yes. Mississippi parity law requires BCBS to cover behavioral-health and substance use telehealth visits at the same rate as in-person. We have not encountered a BCBS Mississippi plan that excludes telehealth MAT, and the major out-of-state BCBS plans we see (Tennessee, Texas, Alabama, Georgia, Illinois, FEP) all cover it.',
                        a: (
                            <>
                                Yes. <strong>Mississippi parity law</strong> requires BCBS to cover telehealth at the same rate
                                as in-person for behavioral health and substance use. All major out-of-state BCBS plans we see
                                cover it as well.
                            </>
                        ),
                    },
                    {
                        q: 'I have a high-deductible BCBS plan. Will I pay full price for early visits?',
                        aText:
                            'On a high-deductible plan, you pay the contracted (in-network) rate for visits until you meet your deductible. That contracted rate is usually significantly lower than the billed rate. After deductible, the standard specialist copay applies. For some patients, self-pay is comparable to the pre-deductible cost — Kim will compare numbers on your first call.',
                        a: (
                            <>
                                Pre-deductible, you pay the <strong>contracted in-network rate</strong> — lower than billed. After
                                deductible, regular copay. For some patients, self-pay runs similar to pre-deductible cost. Kim
                                compares numbers on the first call.
                            </>
                        ),
                    },
                ]}
            />

            <section className="py-24 bg-dark-green">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">
                        Have your card ready and call us.
                    </h2>
                    <p className="text-lg text-cream mb-10 max-w-xl mx-auto leading-relaxed">
                        Kim verifies BCBS benefits in under fifteen minutes on a first call. We confirm copays, prior
                        auth requirements, and telehealth eligibility before you book.
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

export default BcbsSuboxone;
