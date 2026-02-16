import React from 'react';
import { Phone } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';

const MatProgram: React.FC = () => {
    usePageMeta({
        title: 'Addiction Medicine — Medication-Assisted Treatment',
        description: 'Addiction medicine and Medication-Assisted Treatment for opioid dependence in Oxford, MS. Suboxone and Sublocade combined with counseling. Private, respectful, judgment-free. Call (662) 640-4004.',
    });
    return (
        <div className="bg-white min-h-screen">
            {/* Page Header */}
            <div className="bg-slate-900 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-sm text-teal-400 font-medium tracking-wide mb-3">Specialized Program</p>
                    <h1 className="font-serif text-4xl font-bold text-white mb-4">Medication-Assisted Treatment</h1>
                    <p className="text-xl text-slate-300 max-w-2xl">
                        Recovery support with Suboxone and Sublocade, combined with counseling. Private, respectful, and judgment-free.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-10">
                        <div>
                            <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">How the program works</h2>
                            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                                <p>
                                    Our MAT program uses FDA-approved medication to normalize brain chemistry and reduce cravings — without euphoric effects. We combine this with behavioral support and counseling for a complete approach to recovery.
                                </p>
                                <p>
                                    Every patient's situation is different, so we build a plan around your needs. There's no one-size-fits-all here.
                                </p>
                            </div>
                        </div>

                        {/* What to expect */}
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">What to expect</h3>
                            <div className="space-y-3">
                                {[
                                    'Reduction in cravings and withdrawal symptoms',
                                    'Restoring your brain chemistry to a stable baseline',
                                    'Completely private, non-judgmental care',
                                    'Ongoing counseling and behavioral support',
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3 text-slate-600">
                                        <span className="text-teal-600 mt-0.5 font-bold">✓</span>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Important note */}
                        <div className="bg-teal-50 rounded-lg p-6 border-l-[3px] border-teal-600">
                            <p className="text-teal-900 font-semibold mb-2">A note on privacy</p>
                            <p className="text-teal-800">
                                Recovery is a personal journey, and we treat it that way. Your information stays between you and your provider. We're here to help, not to judge.
                            </p>
                        </div>
                    </div>

                    {/* Payment & Contact Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-stone-50 rounded-xl p-8 sticky top-24">
                            <h3 className="text-xl font-bold text-slate-900 mb-6">Get Started</h3>

                            <div className="space-y-4">
                                <div className="bg-white rounded-lg p-5 border border-stone-200">
                                    <h4 className="font-semibold text-slate-900 mb-2">Self-Pay Options Available</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        We offer self-pay options for patients without insurance coverage. Call our office for details on pricing and payment plans.
                                    </p>
                                </div>

                                <div className="bg-white rounded-lg p-5 border border-stone-200">
                                    <h4 className="font-semibold text-slate-900 mb-2">Insurance</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        We accept most major insurance plans. Call to verify your specific coverage before your visit.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-slate-200">
                                <p className="text-xs text-slate-400 mb-4 text-center">Cash, credit, and debit accepted</p>
                                <a
                                    href="tel:6626404004"
                                    className="flex items-center justify-center gap-2 w-full bg-slate-900 text-white py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
                                >
                                    <Phone size={16} />
                                    Call to Schedule
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MatProgram;