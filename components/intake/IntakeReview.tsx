import React from 'react';
import type { FullIntakeData } from '../../services/intakeTypes';
import { Pencil } from 'lucide-react';

interface Props {
    data: FullIntakeData;
}

const IntakeReview: React.FC<Props> = ({ data }) => {
    const getProgress = (arr: number[]) => {
        const answered = arr.filter(v => v >= 0).length;
        const total = arr.length;
        return `${answered}/${total}`;
    };

    const mdqYes = data.mdqItems.filter(Boolean).length;

    return (
        <div>
            <div className="mb-8">
                <h3 className="font-serif text-2xl font-bold text-slate-900 mb-2">Review & Submit</h3>
                <p className="text-slate-500 text-sm">
                    Please review your information below. Once you click "Submit", a secure PDF will be generated and sent to our office.
                </p>
            </div>

            <div className="space-y-6">
                {/* Patient Info */}
                <section className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                    <div className="bg-slate-50 px-4 py-3 border-b border-slate-100 flex justify-between items-center">
                        <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wide">Patient Information</h4>
                    </div>
                    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm">
                        <div>
                            <span className="text-slate-400 block text-xs">Name</span>
                            <span className="font-medium text-slate-900">{data.patientName || '—'}</span>
                        </div>
                        <div>
                            <span className="text-slate-400 block text-xs">Date of Birth</span>
                            <span className="font-medium text-slate-900">{data.dob || '—'}</span>
                        </div>
                        <div className="sm:col-span-2">
                            <span className="text-slate-400 block text-xs">Address</span>
                            <span className="font-medium text-slate-900">
                                {data.address}, {data.city}, {data.state} {data.zip}
                            </span>
                        </div>
                        <div>
                            <span className="text-slate-400 block text-xs">Primary Phone</span>
                            <span className="font-medium text-slate-900">{data.primaryPhone} <span className="text-slate-400 font-normal">({data.primaryPhoneMayContact === 'yes' ? 'OK to contact' : 'Do not contact'})</span></span>
                        </div>
                        <div>
                            <span className="text-slate-400 block text-xs">Email</span>
                            <span className="font-medium text-slate-900">{data.email}</span>
                        </div>
                        <div>
                            <span className="text-slate-400 block text-xs">Emergency Contact</span>
                            <span className="font-medium text-slate-900">{data.emergencyName} ({data.emergencyRelationship})</span>
                        </div>
                        <div>
                            <span className="text-slate-400 block text-xs">Insurance</span>
                            <span className="font-medium text-slate-900">{data.insuranceCompany}</span>
                        </div>
                    </div>
                </section>

                {/* Medical History */}
                <section className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                    <div className="bg-slate-50 px-4 py-3 border-b border-slate-100">
                        <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wide">Medical History</h4>
                    </div>
                    <div className="p-4 space-y-4 text-sm">
                        <div>
                            <span className="text-slate-400 block text-xs mb-1">Reason for Visit</span>
                            <p className="text-slate-900 bg-stone-50 p-2 rounded border border-stone-100">{data.reasonForVisit || '—'}</p>
                        </div>
                        <div>
                            <span className="text-slate-400 block text-xs mb-1">Current Medications</span>
                            {data.currentMedications.length > 0 && data.currentMedications[0].medication ? (
                                <ul className="list-disc list-inside text-slate-900">
                                    {data.currentMedications.map((m, i) => (
                                        <li key={i}>{m.medication} ({m.howOften})</li>
                                    ))}
                                </ul>
                            ) : (
                                <span className="text-slate-500 italic">None listed</span>
                            )}
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <span className="text-slate-400 block text-xs mb-1">Symptoms Endorsed</span>
                                <span className="font-medium text-slate-900">{data.currentSymptoms.length} selected</span>
                            </div>
                            <div>
                                <span className="text-slate-400 block text-xs mb-1">Physical Illnesses</span>
                                <span className="font-medium text-slate-900">{data.physicalIllnesses.length} selected</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Measures Summary */}
                <section className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                    <div className="bg-slate-50 px-4 py-3 border-b border-slate-100">
                        <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wide">Clinical Measures Completion</h4>
                    </div>
                    <div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 text-sm">
                        <div className="bg-teal-50 p-3 rounded-lg border border-teal-100 text-center">
                            <span className="block text-teal-800 font-bold mb-1">PHQ-9</span>
                            <span className="text-slate-600 text-xs">{getProgress(data.phq9)}</span>
                        </div>
                        <div className="bg-teal-50 p-3 rounded-lg border border-teal-100 text-center">
                            <span className="block text-teal-800 font-bold mb-1">GAD-7</span>
                            <span className="text-slate-600 text-xs">{getProgress(data.gad7)}</span>
                        </div>
                        <div className="bg-teal-50 p-3 rounded-lg border border-teal-100 text-center">
                            <span className="block text-teal-800 font-bold mb-1">MDQ</span>
                            <span className="text-slate-600 text-xs">{mdqYes}/13 Yes</span>
                        </div>
                        <div className="bg-teal-50 p-3 rounded-lg border border-teal-100 text-center">
                            <span className="block text-teal-800 font-bold mb-1">PCL-C</span>
                            <span className="text-slate-600 text-xs">{getProgress(data.pclc)}</span>
                        </div>
                        <div className="bg-teal-50 p-3 rounded-lg border border-teal-100 text-center">
                            <span className="block text-teal-800 font-bold mb-1">ASRS</span>
                            <span className="text-slate-600 text-xs">{getProgress(data.asrs)}</span>
                        </div>
                    </div>
                </section>

                {/* Agreements */}
                <section className="bg-amber-50 border border-amber-100 rounded-xl p-4">
                    <h4 className="font-bold text-slate-900 text-sm mb-2">Agreements</h4>
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center ${data.cancellationPolicyAcknowledged ? 'bg-teal-600 text-white' : 'bg-slate-200'}`}>
                            {data.cancellationPolicyAcknowledged && <CheckIcon size={10} />}
                        </div>
                        <span>Cancellation & No-Show Policy Agreement</span>
                    </div>
                    {data.emergencyConsentSignature && (
                        <div className="flex items-center gap-2 text-sm text-slate-700 mt-2">
                            <div className="w-4 h-4 rounded-full bg-teal-600 text-white flex items-center justify-center">
                                <CheckIcon size={10} />
                            </div>
                            <span>Information Release Consent Signed ({data.emergencyConsentSignature})</span>
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
};

// Mini icon component for local use
const CheckIcon = ({ size }: { size: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

export default IntakeReview;
