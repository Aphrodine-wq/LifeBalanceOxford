import React from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { PlantSketch, WaveRule, PathSketch, ArrowSketch } from './Sketches';
import FAQ from './FAQ';

const MatProgram: React.FC = () => {
    usePageMeta({
        title: 'Medication-Assisted Treatment (MAT) Program',
        description: 'Medication-Assisted Treatment for opioid dependence in Oxford, MS. Suboxone and Sublocade combined with counseling, medication management for co-occurring conditions, and long-term recovery support. Private, respectful, judgment-free. Call (662) 640-4004.',
        path: '/mat-program',
        keywords: [
            'MAT program Oxford MS',
            'medication-assisted treatment Mississippi',
            'MAT clinic North Mississippi',
            'opioid recovery Oxford',
            'outpatient MAT program Mississippi',
        ],
        breadcrumbs: [
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: 'Addiction Treatment', path: '/addiction-treatment-oxford-ms' },
            { name: 'MAT Program', path: '/mat-program' },
        ],
        jsonLd: {
            '@context': 'https://schema.org',
            '@type': 'MedicalWebPage',
            '@id': 'https://lifebalanceoxford.com/mat-program#page',
            name: 'Medication-Assisted Treatment (MAT) Program',
            url: 'https://lifebalanceoxford.com/mat-program',
            inLanguage: 'en-US',
            isPartOf: { '@id': 'https://lifebalanceoxford.com/#website' },
            about: [
                { '@type': 'MedicalTherapy', name: 'Medication-Assisted Treatment', alternateName: 'MAT' },
                { '@type': 'MedicalCondition', name: 'Opioid Use Disorder' },
                { '@type': 'Drug', name: 'Buprenorphine' },
            ],
            audience: {
                '@type': 'MedicalAudience',
                audienceType: 'Patient',
                geographicArea: { '@type': 'AdministrativeArea', name: 'North Mississippi' },
            },
            author: { '@id': 'https://lifebalanceoxford.com/#casey-hester' },
            reviewedBy: { '@id': 'https://lifebalanceoxford.com/#casey-hester' },
            publisher: { '@id': 'https://lifebalanceoxford.com/#business' },
            lastReviewed: '2026-04-18',
            dateModified: '2026-04-18',
            speakable: {
                '@type': 'SpeakableSpecification',
                cssSelector: ['h1', 'h2'],
            },
        },
    });

    return (
        <div className="bg-white min-h-screen animate-fade-in">

            {/* Opener */}
            <section className="bg-dark-green pt-20 pb-24">
                <div className="max-w-4xl mx-auto px-6">
                    <p className="text-sm tracking-widest uppercase text-gold-accent mb-6">
                        Medication-Assisted Treatment &nbsp;·&nbsp; Oxford, MS
                    </p>
                    <h1 className="font-serif text-[2.6rem] md:text-[3.4rem] leading-[1.08] font-semibold text-white mb-8 max-w-3xl">
                        Recovery is a relationship,<br />
                        <span className="text-gold-accent italic font-normal">not a prescription pad.</span>
                    </h1>
                    <p className="text-xl text-cream max-w-2xl leading-relaxed">
                        Suboxone and Sublocade combined with real psychiatric care — for the anxiety, depression, and
                        trauma that often sit underneath. Same provider, every visit. Private, respectful,
                        judgment-free.
                    </p>
                </div>
            </section>

            {/* Letter intro */}
            <section className="py-20">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="font-serif text-2xl md:text-3xl text-slate-900 leading-snug mb-10">
                        MAT is not the same thing as getting a prescription and checking back in a month.
                        The medicine is <span className="italic">half</span> the work.
                    </div>
                    <p className="text-lg text-slate-600 leading-relaxed mb-5">
                        Suboxone and Sublocade fix the brain-chemistry piece — the cravings, the withdrawal, the static
                        in your head. What they don't fix is the anxiety, the depression, the trauma, or the life
                        stress that was there before you started using. That's the other half. It takes conversation,
                        follow-up, sometimes different medication, sometimes therapy — and it takes time with a provider
                        who knows you.
                    </p>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        At Life Balance you'll see Casey Hester, PMHNP-BC, every visit. Not a rotating cast. Not a
                        fifteen-minute refill slot. A real clinical relationship — the kind that makes recovery
                        actually hold.
                    </p>
                </div>
            </section>

            <WaveRule className="text-slate-300 w-40 mx-auto my-4" />

            {/* How MAT works */}
            <section className="py-20 bg-[#faf7f1]">
                <div className="max-w-4xl mx-auto px-6">
                    <p className="text-sm tracking-widest uppercase text-slate-500 mb-3">One — the science</p>
                    <h2 className="font-serif text-4xl text-slate-900 mb-8 leading-tight max-w-2xl">
                        What MAT actually does — in plain language.
                    </h2>

                    <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                        <p>
                            The medications used in MAT — usually <span className="font-semibold text-slate-900">buprenorphine</span>,
                            in the form of Suboxone or Sublocade — occupy the same brain receptors that opioids bind to,
                            but in a way that quiets cravings and blocks withdrawal without producing the euphoria
                            that drives addictive use.
                        </p>
                        <p>
                            In practice: your brain chemistry gets put back on level ground. The "when am I getting
                            more" loop turns off. Sleep comes back, appetite comes back, concentration comes back.
                            Once you're stable, we can actually work on the pieces underneath — the anxiety, the
                            depression, the trauma, the life pressure — that kept the cycle running in the first
                            place.
                        </p>
                        <p>
                            This is not a fringe idea. Decades of research, and every major medical body that studies
                            it, name MAT the single most effective treatment for opioid use disorder. It cuts overdose
                            death by more than half. It roughly doubles long-term recovery rates compared to
                            abstinence-only approaches.
                        </p>
                    </div>
                </div>
            </section>

            {/* The three medications */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-6">
                    <p className="text-sm tracking-widest uppercase text-slate-500 mb-3">Two — your options</p>
                    <h2 className="font-serif text-4xl text-slate-900 mb-4 leading-tight max-w-2xl">
                        The three FDA-approved medications for opioid use disorder.
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-12 max-w-2xl">
                        Three are approved. Each works differently. We prescribe buprenorphine-based treatment here —
                        which covers the majority of patients — but you should understand all three.
                    </p>

                    <div className="space-y-12">
                        <div>
                            <h3 className="font-serif text-2xl text-slate-900 mb-1">Buprenorphine — Suboxone or Sublocade</h3>
                            <p className="text-sm text-gold-accent uppercase tracking-wide mb-4">
                                What we prescribe &nbsp;·&nbsp; Partial opioid agonist
                            </p>
                            <p className="text-slate-700 leading-relaxed">
                                Binds strongly to opioid receptors but only partially activates them. Cravings stop,
                                withdrawal stops, and there's a built-in ceiling — higher doses don't produce euphoria,
                                which makes it much harder to misuse than full opioids. Taken daily as a film under the
                                tongue (Suboxone) or as a monthly injection (Sublocade). Safe long-term. Works for most
                                patients.
                            </p>
                            <Link
                                to="/suboxone-doctor-oxford-ms"
                                className="inline-flex items-center gap-2 mt-4 text-slate-900 font-serif underline decoration-gold-accent decoration-2 underline-offset-[6px] hover:text-gold-accent transition-colors"
                            >
                                Read more about Suboxone treatment
                                <ArrowSketch className="w-7 text-gold-accent" />
                            </Link>
                        </div>

                        <div>
                            <h3 className="font-serif text-2xl text-slate-900 mb-1">Naltrexone — Vivitrol</h3>
                            <p className="text-sm text-slate-500 uppercase tracking-wide mb-4">
                                Opioid antagonist &nbsp;·&nbsp; Monthly injection
                            </p>
                            <p className="text-slate-700 leading-relaxed">
                                Blocks opioids from working at all. It does not quiet cravings the way buprenorphine
                                does — it makes using ineffective. The main barrier is that you have to be fully
                                detoxed before starting, usually seven to fourteen days opioid-free. Best for patients
                                who have already made it through withdrawal and want protection against relapse.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-serif text-2xl text-slate-900 mb-1">Methadone</h3>
                            <p className="text-sm text-slate-500 uppercase tracking-wide mb-4">
                                Full opioid agonist &nbsp;·&nbsp; Clinic-based only
                            </p>
                            <p className="text-slate-700 leading-relaxed">
                                Highly effective, but only available through federally licensed opioid treatment
                                programs — not regular medical offices. Daily in-person dosing for months before any
                                take-home privileges. When methadone is the right fit, it works. We'll help coordinate
                                a referral if that's the path.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <WaveRule className="text-slate-300 w-40 mx-auto my-4" />

            {/* Recovery timeline */}
            <section className="py-20 bg-[#faf7f1]">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="flex items-start gap-10 mb-10">
                        <PlantSketch className="hidden md:block text-slate-900 w-20 flex-shrink-0 mt-1" />
                        <div>
                            <p className="text-sm tracking-widest uppercase text-slate-500 mb-3">Three — the arc</p>
                            <h2 className="font-serif text-4xl text-slate-900 mb-4 leading-tight max-w-2xl">
                                A realistic arc of the first year.
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                                Everyone's path is different, but this is what most of our patients actually live
                                through. No sales pitch, no "miracle at four weeks." Just the real pattern.
                            </p>
                        </div>
                    </div>

                    <div className="md:pl-28 space-y-8">
                        <div>
                            <p className="font-serif text-lg text-gold-accent mb-2">Week one</p>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                Withdrawal stops. Sleep comes back. Cravings drop — not to zero, but noticeably. Some
                                mild side effects as the body adjusts: headaches, constipation, maybe some sweating.
                                You'll feel strange for a few days. It passes.
                            </p>
                        </div>
                        <div>
                            <p className="font-serif text-lg text-gold-accent mb-2">Weeks two through four</p>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                Dose is dialed in. You start to feel like a person again. Energy returns. You notice
                                how exhausting the cycle was. This is when we start digging into what's underneath —
                                mood, sleep, trauma, relationships — because you finally have the bandwidth to do it.
                            </p>
                        </div>
                        <div>
                            <p className="font-serif text-lg text-gold-accent mb-2">Months two and three</p>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                Visits move to every other week. Many patients are back at work full time, repairing
                                relationships, catching up on life. Co-occurring anxiety or depression often gets
                                addressed here with medication or a therapist referral. Foundation-building phase.
                            </p>
                        </div>
                        <div>
                            <p className="font-serif text-lg text-gold-accent mb-2">Months four through twelve</p>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                Monthly visits. Some patients switch from daily Suboxone to monthly Sublocade here to
                                simplify life. Relapse risk drops the longer you stay engaged. This is when recovery
                                stops feeling like a fight and starts feeling like a routine.
                            </p>
                        </div>
                        <div>
                            <p className="font-serif text-lg text-gold-accent mb-2">Year two and beyond</p>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                Some patients begin a slow, structured taper. Others stay on maintenance indefinitely,
                                which is completely legitimate. Like insulin for diabetes or a statin for cholesterol,
                                staying on a medication that keeps you well is not a failure. We make this decision
                                together — not on an arbitrary clock.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Medication is half the work */}
            <section className="py-20">
                <div className="max-w-3xl mx-auto px-6">
                    <p className="text-sm tracking-widest uppercase text-slate-500 mb-3">Four — the other half</p>
                    <h2 className="font-serif text-4xl text-slate-900 mb-6 leading-tight">
                        Medication is half the work. Here's the other half.
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-10">
                        Suboxone fixes the chemistry. It does not fix the reasons you started using in the first place.
                        That takes counseling, behavioral support, and sometimes separate medication for co-occurring
                        conditions. All of that happens here or through providers we trust.
                    </p>

                    <div className="space-y-8 border-l-2 border-gold-accent pl-6">
                        <div>
                            <h3 className="font-serif text-xl text-slate-900 mb-2">In-house psychiatric care.</h3>
                            <p className="text-slate-700 leading-relaxed">
                                Anxiety, depression, PTSD, ADHD — we treat the mental-health side of recovery in the
                                same visit as your MAT medication. No separate referral, no second copay, no retelling
                                your story to someone new.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-serif text-xl text-slate-900 mb-2">Counseling referrals.</h3>
                            <p className="text-slate-700 leading-relaxed">
                                We have working relationships with local therapists who specialize in addiction and
                                co-occurring trauma. We'll get you to someone good — not a random name off a list.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-serif text-xl text-slate-900 mb-2">Peer support.</h3>
                            <p className="text-slate-700 leading-relaxed">
                                SMART Recovery, Narcotics Anonymous, MAT-friendly recovery meetings in and around
                                Oxford — there are more options than most people realize. We'll point you to the ones
                                that fit your style.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-serif text-xl text-slate-900 mb-2">Life coordination.</h3>
                            <p className="text-slate-700 leading-relaxed">
                                Work letters. Return-to-work planning. Family conversations. Probation paperwork.
                                Recovery touches real life, and we help you navigate the parts that exist outside the
                                exam room.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <WaveRule className="text-slate-300 w-40 mx-auto my-4" />

            {/* Life on MAT */}
            <section className="py-20 bg-[#faf7f1]">
                <div className="max-w-3xl mx-auto px-6">
                    <p className="text-sm tracking-widest uppercase text-slate-500 mb-3">Five — the real thing</p>
                    <h2 className="font-serif text-4xl text-slate-900 mb-6 leading-tight">
                        Life on MAT. What actually becomes normal.
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-5">
                        You can work. You can drive. You can be present with your kids. You can travel — anywhere in
                        the country without restriction, internationally with a note from your provider. You can
                        exercise, date, attend family events, have surgery (we coordinate with surgeons on pain
                        management), have a baby, adopt, foster.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                        The only things you can't do are drink heavily, mix with benzodiazepines without supervision,
                        or relapse safely. Everything else is just your life.
                    </p>
                </div>
            </section>

            {/* Privacy note */}
            <section className="py-20">
                <div className="max-w-3xl mx-auto px-6">
                    <p className="text-sm tracking-widest uppercase text-slate-500 mb-3">Six — your privacy</p>
                    <h2 className="font-serif text-4xl text-slate-900 mb-6 leading-tight">
                        What stays between you and this office, stays there.
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-5">
                        Substance use treatment is protected by a specific federal rule called <span className="font-semibold text-slate-900">42 CFR Part 2</span> —
                        stricter than standard HIPAA. Employers, family members, law enforcement, insurance actuaries —
                        none of them get access to your records without your written consent. Period.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                        Recovery is a personal thing, and we treat it that way. The only person in the room who needs
                        to know what happened last weekend is your provider — not your employer, not your ex, not the
                        insurance company. You decide what leaves this building.
                    </p>
                </div>
            </section>

            {/* Cross-link */}
            <section className="py-20 bg-[#faf7f1]">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <PathSketch className="text-slate-400 w-60 mx-auto mb-8" />
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                        If what you really want to know about is the Suboxone piece specifically — dose, timing,
                        induction day — start here.
                    </p>
                    <Link
                        to="/suboxone-doctor-oxford-ms"
                        className="inline-flex items-center gap-3 text-lg text-slate-900 font-serif underline decoration-gold-accent decoration-2 underline-offset-[6px] hover:text-gold-accent transition-colors"
                    >
                        Suboxone treatment, in detail
                        <ArrowSketch className="w-8 text-gold-accent" />
                    </Link>
                </div>
            </section>

            {/* FAQ */}
            <FAQ
                theme="light"
                eyebrow="Questions people ask"
                title="Common questions about our MAT program"
                items={[
                    {
                        q: 'What is Medication-Assisted Treatment (MAT)?',
                        aText:
                            'MAT combines FDA-approved medications (usually buprenorphine in the form of Suboxone or Sublocade) with psychiatric care and counseling to treat opioid use disorder. The medication quiets cravings and withdrawal so the rest of recovery can happen.',
                        a: (
                            <>
                                MAT combines FDA-approved medication — usually{' '}
                                <strong>buprenorphine</strong> in the form of Suboxone or Sublocade — with psychiatric care and
                                counseling to treat opioid use disorder. The medication quiets cravings and withdrawal so the
                                rest of recovery can actually happen.
                            </>
                        ),
                    },
                    {
                        q: 'What medications are used in MAT?',
                        aText:
                            'We primarily prescribe buprenorphine — either as Suboxone (daily dissolvable film taken under the tongue) or Sublocade (monthly injection of extended-release buprenorphine). Naltrexone and acamprosate are also used for alcohol use disorder when indicated.',
                        a: (
                            <>
                                Primarily buprenorphine — <strong>Suboxone</strong> (daily dissolvable film) or{' '}
                                <strong>Sublocade</strong> (monthly injection). For alcohol use disorder we also prescribe
                                naltrexone or acamprosate when indicated.
                            </>
                        ),
                    },
                    {
                        q: 'How long does MAT last?',
                        aText:
                            'As long as it works for you. Some patients taper off after a year, many stay engaged long-term. Research consistently shows that longer engagement with MAT reduces relapse risk. The timeline is decided together between you and Casey.',
                        a: (
                            <>
                                As long as it works for you. Some patients taper off after a year, many stay engaged long-term.
                                Research consistently shows longer engagement reduces relapse risk. The timeline is decided
                                between you and Casey.
                            </>
                        ),
                    },
                    {
                        q: 'Is MAT confidential?',
                        aText:
                            'Yes. MAT records are protected by 42 CFR Part 2, a federal confidentiality rule stricter than standard HIPAA. Employers, family members, law enforcement, and insurance actuaries cannot access your records without your written consent.',
                        a: (
                            <>
                                Yes — protected by <strong>42 CFR Part 2</strong>, stricter than HIPAA. Employers, family,
                                law enforcement, and insurance actuaries cannot access your records without your written consent.
                            </>
                        ),
                    },
                    {
                        q: 'Do you combine MAT with counseling?',
                        aText:
                            'Yes. Casey provides psychiatric care in the same visit as your MAT, including treatment for anxiety, depression, PTSD, and trauma that often sit underneath substance use. For dedicated therapy, we coordinate counseling referrals.',
                        a: (
                            <>
                                Yes. Casey treats the psychiatric conditions that often underlie substance use — anxiety,
                                depression, PTSD, trauma — in the same visit. For dedicated therapy, we coordinate counseling
                                referrals.
                            </>
                        ),
                    },
                    {
                        q: 'Will insurance cover MAT?',
                        aText:
                            'Most major insurance plans cover generic buprenorphine/naloxone and MAT visits at the standard specialist copay. Sublocade often requires a prior authorization, which our office handles. Self-pay pricing is available.',
                        a: (
                            <>
                                Most plans cover generic buprenorphine/naloxone and MAT visits at your specialist copay.
                                Sublocade usually needs a prior auth, which we handle. Self-pay pricing is available.
                            </>
                        ),
                    },
                    {
                        q: 'Can I switch from Suboxone to Sublocade later?',
                        aText:
                            'Yes. Many patients begin with daily Suboxone and transition to monthly Sublocade once they are stable, to simplify daily life. We will discuss what fits your circumstances.',
                        a: (
                            <>
                                Yes — many patients start on daily Suboxone and switch to monthly Sublocade once stable, to
                                simplify daily life. We'll talk about what fits your circumstances.
                            </>
                        ),
                    },
                ]}
            />

            {/* Closing CTA */}
            <section className="py-24 bg-dark-green">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">
                        When you're ready, pick up the phone.
                    </h2>
                    <p className="text-lg text-cream mb-10 max-w-xl mx-auto leading-relaxed">
                        Kim answers. Most new patients are seen within the week. No lecture, no script —
                        just a conversation about whether we're a fit.
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

export default MatProgram;
