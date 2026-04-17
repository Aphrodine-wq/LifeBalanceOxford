import React from 'react';
import { Phone, CheckCircle2, Heart, Users, Shield, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';

const MatProgram: React.FC = () => {
    usePageMeta({
        title: 'Medication-Assisted Treatment (MAT) Program',
        description: 'Medication-Assisted Treatment for opioid dependence in Oxford, MS. Suboxone and Sublocade combined with counseling, medication management for co-occurring conditions, and long-term recovery support. Private, respectful, judgment-free. Call (662) 640-4004.',
        path: '/mat-program',
    });

    return (
        <div className="bg-white min-h-screen animate-fade-in">
            {/* Page Header */}
            <div className="bg-slate-900 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-sm text-teal-400 font-medium tracking-wide mb-3">Specialized Program</p>
                    <h1 className="font-serif text-4xl font-bold text-white mb-4">Medication-Assisted Treatment</h1>
                    <p className="text-xl text-slate-300 max-w-2xl">
                        Recovery support with Suboxone and Sublocade, combined with counseling and care for the
                        anxiety, depression, and trauma that often sit underneath substance use.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* How it works */}
                        <div>
                            <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">How MAT actually works</h2>
                            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                                <p>
                                    Medication-Assisted Treatment combines FDA-approved medication with counseling and
                                    whole-person psychiatric care. The medication piece — usually buprenorphine/naloxone
                                    (Suboxone) or long-acting buprenorphine (Sublocade) — occupies the same brain
                                    receptors that opioids bind to, but in a way that quiets cravings and blocks
                                    withdrawal <em>without</em> producing the euphoria that drives addictive use.
                                </p>
                                <p>
                                    In plain terms: your brain chemistry gets put back on level ground. The constant
                                    noise of "when am I getting more" turns off. Your sleep, appetite, and ability to
                                    think clearly come back. Once you're stable, we can actually work on the things
                                    underneath — the anxiety, the depression, the trauma, the life stress — that kept
                                    the cycle running in the first place.
                                </p>
                                <p>
                                    Decades of research show MAT is the single most effective treatment for opioid use
                                    disorder. It cuts overdose risk by more than half, roughly doubles the odds of
                                    staying in recovery long-term, and outperforms abstinence-only approaches by wide
                                    margins. This is not a controversial position in medicine — SAMHSA, ASAM, the
                                    World Health Organization, and the CDC all name it the standard of care.
                                </p>
                            </div>
                        </div>

                        {/* The three FDA medications */}
                        <div>
                            <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">The three FDA-approved MAT medications</h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-5">
                                Three medications are approved for opioid use disorder. Each works differently. We
                                prescribe buprenorphine-based treatment at Life Balance — here's how all three compare
                                so you can understand your options.
                            </p>

                            <div className="space-y-4">
                                <div className="bg-teal-50 rounded-lg p-5 border-l-[3px] border-teal-700">
                                    <h3 className="font-bold text-slate-900 mb-1">Buprenorphine (Suboxone / Sublocade)</h3>
                                    <p className="text-sm text-teal-900 mb-2">Partial opioid agonist · what we prescribe</p>
                                    <p className="text-slate-700 text-sm leading-relaxed">
                                        Binds strongly to opioid receptors but only partially activates them. Cravings
                                        stop, withdrawal stops, and there's a built-in ceiling — higher doses don't
                                        produce euphoria, so it's much harder to misuse than full opioid agonists.
                                        Works for the majority of patients and is safe long-term.
                                    </p>
                                    <Link to="/suboxone-doctor-oxford-ms" className="inline-block mt-3 text-teal-700 font-semibold text-sm hover:text-teal-800">
                                        Read more about Suboxone treatment →
                                    </Link>
                                </div>

                                <div className="bg-slate-50 rounded-lg p-5 border-l-[3px] border-slate-400">
                                    <h3 className="font-bold text-slate-900 mb-1">Naltrexone (Vivitrol)</h3>
                                    <p className="text-sm text-slate-500 mb-2">Opioid antagonist · monthly injection</p>
                                    <p className="text-slate-700 text-sm leading-relaxed">
                                        Blocks opioids from working at all. No cravings relief in the same way
                                        buprenorphine provides, but it makes using ineffective. Requires you to be fully
                                        detoxed first (7–14 days opioid-free) which is the main barrier. Best for
                                        patients who have already gotten through withdrawal and want to prevent relapse.
                                    </p>
                                </div>

                                <div className="bg-slate-50 rounded-lg p-5 border-l-[3px] border-slate-400">
                                    <h3 className="font-bold text-slate-900 mb-1">Methadone</h3>
                                    <p className="text-sm text-slate-500 mb-2">Full opioid agonist · daily clinic dosing</p>
                                    <p className="text-slate-700 text-sm leading-relaxed">
                                        Highly effective but only available through federally licensed opioid treatment
                                        programs (OTPs) — not regular medical offices. Requires daily in-person dosing
                                        for months before any take-home privileges. For patients who need it, it works.
                                        We can coordinate a referral if methadone is the better fit.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Realistic recovery timeline */}
                        <div>
                            <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">A realistic recovery timeline</h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                Everyone's path is different, but here's what most patients actually experience on MAT.
                                Not a sales pitch — the real thing.
                            </p>

                            <div className="space-y-5">
                                <div className="flex gap-5">
                                    <div className="flex-shrink-0 w-20 text-right">
                                        <span className="font-serif font-bold text-teal-700 text-lg">Week 1</span>
                                    </div>
                                    <div className="flex-1 border-l-2 border-teal-200 pl-5 pb-2">
                                        <p className="text-slate-700 leading-relaxed">
                                            Withdrawal stops. Sleep comes back. Cravings drop significantly. Some mild
                                            side effects as your body adjusts — headaches, constipation, maybe some
                                            sweating. You'll feel strange for a few days; that passes.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <div className="flex-shrink-0 w-20 text-right">
                                        <span className="font-serif font-bold text-teal-700 text-lg">Weeks 2–4</span>
                                    </div>
                                    <div className="flex-1 border-l-2 border-teal-200 pl-5 pb-2">
                                        <p className="text-slate-700 leading-relaxed">
                                            Dose is dialed in. You feel like a person again. Energy returns. You start
                                            noticing how exhausting the cycle was. This is also when we dig in on what's
                                            underneath — mood, sleep, trauma, relationships — because you finally have
                                            the bandwidth to work on it.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <div className="flex-shrink-0 w-20 text-right">
                                        <span className="font-serif font-bold text-teal-700 text-lg">Months 2–3</span>
                                    </div>
                                    <div className="flex-1 border-l-2 border-teal-200 pl-5 pb-2">
                                        <p className="text-slate-700 leading-relaxed">
                                            Visits move to biweekly. Many patients are back at work full-time, repairing
                                            relationships, catching up on life. Co-occurring anxiety or depression often
                                            gets addressed here with medication or therapy referral. This is the
                                            foundation-building phase.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <div className="flex-shrink-0 w-20 text-right">
                                        <span className="font-serif font-bold text-teal-700 text-lg">Months 4–12</span>
                                    </div>
                                    <div className="flex-1 border-l-2 border-teal-200 pl-5 pb-2">
                                        <p className="text-slate-700 leading-relaxed">
                                            Monthly visits. Some patients switch from daily Suboxone to monthly Sublocade
                                            here to simplify life. Relapse risk drops dramatically the longer you stay
                                            engaged. This is when recovery stops feeling like a fight and starts feeling
                                            like a routine.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <div className="flex-shrink-0 w-20 text-right">
                                        <span className="font-serif font-bold text-teal-700 text-lg">Year 2+</span>
                                    </div>
                                    <div className="flex-1 border-l-2 border-teal-200 pl-5">
                                        <p className="text-slate-700 leading-relaxed">
                                            Some patients begin a slow, structured taper. Others stay on maintenance
                                            indefinitely — which is completely legitimate. Like insulin for diabetes or
                                            a statin for cholesterol, staying on the medication that keeps you well is
                                            not a failure. We make this decision together, not on an arbitrary clock.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* What to expect */}
                        <div>
                            <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">What to expect from treatment</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {[
                                    'Cravings reduce dramatically — most patients describe the "noise" getting quiet',
                                    'Withdrawal stops — no more sweating, shaking, dope sick mornings',
                                    'Brain chemistry stabilizes — sleep, appetite, and focus return',
                                    'Co-occurring anxiety and depression get treated in the same visit',
                                    'Judgment-free visits with the same provider every time',
                                    'Counseling support — either with us or coordinated with a therapist',
                                    'Flexible dosing — Suboxone daily or Sublocade monthly',
                                    'Insurance handled — we deal with prior authorizations, not you',
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3 text-slate-700 bg-stone-50 rounded-lg p-4">
                                        <CheckCircle2 className="text-teal-700 flex-shrink-0 mt-0.5" size={18} />
                                        <span className="text-sm leading-relaxed">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Counseling integration */}
                        <div>
                            <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">
                                Medication is half the work. Here's the other half.
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-5">
                                Suboxone fixes the brain chemistry piece. It does not fix the reasons you started using
                                in the first place. That part takes counseling, behavioral support, and sometimes
                                medication for co-occurring conditions. All of that happens here or through providers
                                we trust.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white rounded-lg p-5 border border-stone-200">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Users className="text-teal-700" size={18} />
                                        <h3 className="font-bold text-slate-900">In-house psychiatric care</h3>
                                    </div>
                                    <p className="text-slate-600 text-sm">
                                        Anxiety, depression, PTSD, ADHD — we treat the mental health side of recovery in
                                        the same visit as your MAT medication. No separate referrals needed.
                                    </p>
                                </div>
                                <div className="bg-white rounded-lg p-5 border border-stone-200">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Heart className="text-teal-700" size={18} />
                                        <h3 className="font-bold text-slate-900">Counseling referrals</h3>
                                    </div>
                                    <p className="text-slate-600 text-sm">
                                        We have relationships with local therapists who specialize in addiction and
                                        co-occurring trauma. We'll get you to someone good.
                                    </p>
                                </div>
                                <div className="bg-white rounded-lg p-5 border border-stone-200">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Shield className="text-teal-700" size={18} />
                                        <h3 className="font-bold text-slate-900">Peer support</h3>
                                    </div>
                                    <p className="text-slate-600 text-sm">
                                        SMART Recovery, Narcotics Anonymous, and MAT-friendly recovery groups meet in
                                        and around Oxford. We'll point you to options that fit your style.
                                    </p>
                                </div>
                                <div className="bg-white rounded-lg p-5 border border-stone-200">
                                    <div className="flex items-center gap-2 mb-2">
                                        <TrendingUp className="text-teal-700" size={18} />
                                        <h3 className="font-bold text-slate-900">Life coordination</h3>
                                    </div>
                                    <p className="text-slate-600 text-sm">
                                        Work letters, return-to-work planning, family conversations, probation paperwork —
                                        recovery touches real life, and we help navigate it.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Life on MAT */}
                        <div>
                            <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">Life on MAT: what's actually normal</h2>
                            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                                <p>
                                    You can work. You can drive. You can be present with your kids. You can travel —
                                    domestically without restriction and internationally with a letter from your
                                    provider. You can exercise, date, attend family events, have surgery (we coordinate
                                    with surgeons on pain management), have a baby, adopt, foster, and live a life that
                                    has nothing to do with your medication.
                                </p>
                                <p>
                                    The only thing you can't do is drink heavily, mix with benzodiazepines without
                                    supervision, or relapse on other opioids safely. Everything else is just your life.
                                </p>
                            </div>
                        </div>

                        {/* Privacy note */}
                        <div className="bg-teal-50 rounded-lg p-6 border-l-[3px] border-teal-600">
                            <p className="text-teal-900 font-semibold mb-2">A note on privacy</p>
                            <p className="text-teal-800 leading-relaxed">
                                Recovery is a personal journey, and we treat it that way. Your information stays between
                                you and your provider under 42 CFR Part 2 — the federal confidentiality rule for
                                substance use treatment. It is stricter than standard HIPAA. Employers, family members,
                                and law enforcement cannot access your records without your written consent.
                            </p>
                        </div>

                    </div>

                    {/* Payment & Contact Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-stone-50 rounded-xl p-8 sticky top-24">
                            <h3 className="text-xl font-bold text-slate-900 mb-6">Get Started</h3>

                            <div className="space-y-4">
                                <div className="bg-white rounded-lg p-5 border border-stone-200">
                                    <h4 className="font-semibold text-slate-900 mb-2">Insurance</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        We accept most major insurance plans. Call to verify your specific coverage
                                        before your visit.
                                    </p>
                                </div>

                                <div className="bg-white rounded-lg p-5 border border-stone-200">
                                    <h4 className="font-semibold text-slate-900 mb-2">Self-Pay Options</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        Transparent self-pay pricing for patients without insurance coverage. Call for
                                        exact rates before your first visit.
                                    </p>
                                </div>

                                <div className="bg-white rounded-lg p-5 border border-stone-200">
                                    <h4 className="font-semibold text-slate-900 mb-2">First appointment</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        60–90 minutes. Thorough evaluation, not rushed. Usually scheduled within the
                                        same week you call.
                                    </p>
                                </div>

                                <div className="bg-white rounded-lg p-5 border border-stone-200">
                                    <h4 className="font-semibold text-slate-900 mb-2">Who you'll see</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        Casey Hester, PMHNP-BC. Same provider every visit — no rotating staff.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-slate-200">
                                <p className="text-xs text-slate-400 mb-4 text-center">Cash, credit, and debit accepted</p>
                                <a
                                    href="tel:6626404004"
                                    className="flex items-center justify-center gap-2 w-full bg-slate-900 text-white py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors mb-3"
                                >
                                    <Phone size={16} />
                                    Call to Schedule
                                </a>
                                <Link
                                    to="/addiction-treatment-oxford-ms"
                                    className="flex items-center justify-center gap-2 w-full border border-slate-300 text-slate-700 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors text-sm"
                                >
                                    See full addiction treatment
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MatProgram;
