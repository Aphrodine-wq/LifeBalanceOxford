import React from 'react';
import type { FullIntakeData } from '../../services/intakeTypes';

interface Props {
    data: FullIntakeData;
    onChange: (partial: Partial<FullIntakeData>) => void;
}

const inputClass = 'w-full px-3.5 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-800 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500 transition-shadow bg-white';
const labelClass = 'block text-sm font-medium text-slate-700 mb-1';
const sectionClass = 'mb-8';
const sectionTitleClass = 'text-sm font-semibold text-teal-700 uppercase tracking-wider mb-4 flex items-center gap-2';

const IntakeFormStep1: React.FC<Props> = ({ data, onChange }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        onChange({ [e.target.name]: e.target.value } as any);
    };

    const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange({ [e.target.name]: e.target.checked } as any);
    };

    return (
        <div>
            {/* Patient Information */}
            <div className={sectionClass}>
                <h3 className={sectionTitleClass}>
                    <span className="w-5 h-5 bg-teal-700 text-white rounded text-xs flex items-center justify-center font-bold">1</span>
                    Patient Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div className="sm:col-span-2">
                        <label htmlFor="patientName" className={labelClass}>Full Name <span className="text-red-400">*</span></label>
                        <input id="patientName" name="patientName" type="text" required value={data.patientName} onChange={handleChange} className={inputClass} placeholder="First, MI, Last" />
                    </div>
                    <div>
                        <label htmlFor="dob" className={labelClass}>Date of Birth</label>
                        <input id="dob" name="dob" type="date" value={data.dob} onChange={handleChange} className={inputClass} />
                    </div>
                    <div>
                        <label htmlFor="email" className={labelClass}>Email <span className="text-red-400">*</span></label>
                        <input id="email" name="email" type="email" required value={data.email} onChange={handleChange} className={inputClass} placeholder="you@email.com" />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div className="sm:col-span-2">
                        <label htmlFor="address" className={labelClass}>Address</label>
                        <input id="address" name="address" type="text" value={data.address} onChange={handleChange} className={inputClass} placeholder="Street address" />
                    </div>
                    <div>
                        <label htmlFor="city" className={labelClass}>City</label>
                        <input id="city" name="city" type="text" value={data.city} onChange={handleChange} className={inputClass} placeholder="City" />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label htmlFor="state" className={labelClass}>State</label>
                            <input id="state" name="state" type="text" value={data.state} onChange={handleChange} className={inputClass} placeholder="MS" />
                        </div>
                        <div>
                            <label htmlFor="zip" className={labelClass}>Zip</label>
                            <input id="zip" name="zip" type="text" value={data.zip} onChange={handleChange} className={inputClass} placeholder="38655" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label htmlFor="primaryPhone" className={labelClass}>Primary Phone <span className="text-red-400">*</span></label>
                        <input id="primaryPhone" name="primaryPhone" type="tel" required value={data.primaryPhone} onChange={handleChange} className={inputClass} placeholder="(555) 123-4567" />
                    </div>
                    <div>
                        <label htmlFor="primaryPhoneMayContact" className={labelClass}>May Call/Text?</label>
                        <select id="primaryPhoneMayContact" name="primaryPhoneMayContact" value={data.primaryPhoneMayContact} onChange={handleChange} className={inputClass}>
                            <option value="">Select</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="secondaryPhone" className={labelClass}>Secondary Phone</label>
                        <input id="secondaryPhone" name="secondaryPhone" type="tel" value={data.secondaryPhone} onChange={handleChange} className={inputClass} placeholder="(555) 987-6543" />
                    </div>
                    <div>
                        <label htmlFor="secondaryPhoneMayContact" className={labelClass}>May Call/Text?</label>
                        <select id="secondaryPhoneMayContact" name="secondaryPhoneMayContact" value={data.secondaryPhoneMayContact} onChange={handleChange} className={inputClass}>
                            <option value="">Select</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="maritalStatus" className={labelClass}>Marital Status</label>
                    <select id="maritalStatus" name="maritalStatus" value={data.maritalStatus} onChange={handleChange} className={inputClass + ' max-w-xs'}>
                        <option value="">Select</option>
                        <option value="Single">Single</option>
                        <option value="Married">Married</option>
                        <option value="Partnered">Partnered</option>
                        <option value="Divorced">Divorced</option>
                        <option value="Widowed">Widowed</option>
                    </select>
                </div>
            </div>

            {/* Parent/Guardian */}
            <div className={sectionClass}>
                <h3 className={sectionTitleClass}>
                    <span className="w-5 h-5 bg-slate-500 text-white rounded text-xs flex items-center justify-center font-bold">2</span>
                    Parent / Guardian
                </h3>
                <p className="text-xs text-slate-400 mb-4 -mt-2">Complete only if patient is 17 years old or younger.</p>
                <div className="bg-stone-50 rounded-xl p-4 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="guardianName" className={labelClass}>Name</label>
                            <input id="guardianName" name="guardianName" type="text" value={data.guardianName} onChange={handleChange} className={inputClass} placeholder="Parent/Guardian name" />
                        </div>
                        <div>
                            <label htmlFor="guardianDob" className={labelClass}>Date of Birth</label>
                            <input id="guardianDob" name="guardianDob" type="date" value={data.guardianDob} onChange={handleChange} className={inputClass} />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="guardianAddress" className={labelClass}>Address</label>
                        <input id="guardianAddress" name="guardianAddress" type="text" value={data.guardianAddress} onChange={handleChange} className={inputClass} placeholder="Street address" />
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                        <div>
                            <label htmlFor="guardianCity" className={labelClass}>City</label>
                            <input id="guardianCity" name="guardianCity" type="text" value={data.guardianCity} onChange={handleChange} className={inputClass} />
                        </div>
                        <div>
                            <label htmlFor="guardianState" className={labelClass}>State</label>
                            <input id="guardianState" name="guardianState" type="text" value={data.guardianState} onChange={handleChange} className={inputClass} />
                        </div>
                        <div>
                            <label htmlFor="guardianZip" className={labelClass}>Zip</label>
                            <input id="guardianZip" name="guardianZip" type="text" value={data.guardianZip} onChange={handleChange} className={inputClass} />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="guardianPhone" className={labelClass}>Phone</label>
                            <input id="guardianPhone" name="guardianPhone" type="tel" value={data.guardianPhone} onChange={handleChange} className={inputClass} />
                        </div>
                        <div>
                            <label htmlFor="guardianPhoneMayContact" className={labelClass}>May Call/Text?</label>
                            <select id="guardianPhoneMayContact" name="guardianPhoneMayContact" value={data.guardianPhoneMayContact} onChange={handleChange} className={inputClass}>
                                <option value="">Select</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* Emergency Contact */}
            <div className={sectionClass}>
                <h3 className={sectionTitleClass}>
                    <span className="w-5 h-5 bg-slate-500 text-white rounded text-xs flex items-center justify-center font-bold">3</span>
                    Emergency Contact
                </h3>
                <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="emergencyName" className={labelClass}>Name</label>
                            <input id="emergencyName" name="emergencyName" type="text" value={data.emergencyName} onChange={handleChange} className={inputClass} placeholder="Emergency contact name" />
                        </div>
                        <div>
                            <label htmlFor="emergencyRelationship" className={labelClass}>Relationship</label>
                            <input id="emergencyRelationship" name="emergencyRelationship" type="text" value={data.emergencyRelationship} onChange={handleChange} className={inputClass} placeholder="Spouse, parent, etc." />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="emergencyAddress" className={labelClass}>Address</label>
                        <input id="emergencyAddress" name="emergencyAddress" type="text" value={data.emergencyAddress} onChange={handleChange} className={inputClass} />
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                        <div>
                            <label htmlFor="emergencyCity" className={labelClass}>City</label>
                            <input id="emergencyCity" name="emergencyCity" type="text" value={data.emergencyCity} onChange={handleChange} className={inputClass} />
                        </div>
                        <div>
                            <label htmlFor="emergencyState" className={labelClass}>State</label>
                            <input id="emergencyState" name="emergencyState" type="text" value={data.emergencyState} onChange={handleChange} className={inputClass} />
                        </div>
                        <div>
                            <label htmlFor="emergencyZip" className={labelClass}>Zip</label>
                            <input id="emergencyZip" name="emergencyZip" type="text" value={data.emergencyZip} onChange={handleChange} className={inputClass} />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="emergencyPhone" className={labelClass}>Phone</label>
                            <input id="emergencyPhone" name="emergencyPhone" type="tel" value={data.emergencyPhone} onChange={handleChange} className={inputClass} />
                        </div>
                        <div>
                            <label htmlFor="emergencyPhoneMayContact" className={labelClass}>May Call/Text?</label>
                            <select id="emergencyPhoneMayContact" name="emergencyPhoneMayContact" value={data.emergencyPhoneMayContact} onChange={handleChange} className={inputClass}>
                                <option value="">Select</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                    </div>
                    <div className="bg-stone-50 rounded-xl p-4">
                        <p className="text-xs text-slate-500 leading-relaxed mb-3">
                            By providing your signature below, you consent to your protected medical information involving your treatment at Life Balance, PLLC being discussed with the emergency contact listed above.
                        </p>
                        <label htmlFor="emergencyConsentSignature" className={labelClass}>Signature (type your full name)</label>
                        <input id="emergencyConsentSignature" name="emergencyConsentSignature" type="text" value={data.emergencyConsentSignature} onChange={handleChange} className={inputClass + ' font-serif italic'} placeholder="Type your full name as signature" />
                    </div>
                </div>
            </div>

            {/* Insurance */}
            <div className={sectionClass}>
                <h3 className={sectionTitleClass}>
                    <span className="w-5 h-5 bg-slate-500 text-white rounded text-xs flex items-center justify-center font-bold">4</span>
                    Insurance Information
                </h3>
                <div className="space-y-4">
                    <div>
                        <label htmlFor="insuranceCompany" className={labelClass}>Company / Provider Name</label>
                        <input id="insuranceCompany" name="insuranceCompany" type="text" value={data.insuranceCompany} onChange={handleChange} className={inputClass} placeholder="Insurance company" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="memberId" className={labelClass}>Member ID</label>
                            <input id="memberId" name="memberId" type="text" value={data.memberId} onChange={handleChange} className={inputClass} />
                        </div>
                        <div>
                            <label htmlFor="groupNumber" className={labelClass}>Group Number</label>
                            <input id="groupNumber" name="groupNumber" type="text" value={data.groupNumber} onChange={handleChange} className={inputClass} />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="policyholderName" className={labelClass}>Policyholder Name</label>
                            <input id="policyholderName" name="policyholderName" type="text" value={data.policyholderName} onChange={handleChange} className={inputClass} />
                        </div>
                        <div>
                            <label htmlFor="policyholderDob" className={labelClass}>Policyholder DOB</label>
                            <input id="policyholderDob" name="policyholderDob" type="date" value={data.policyholderDob} onChange={handleChange} className={inputClass} />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="policyholderRelationship" className={labelClass}>Relationship to Patient</label>
                            <input id="policyholderRelationship" name="policyholderRelationship" type="text" value={data.policyholderRelationship} onChange={handleChange} className={inputClass} placeholder="Self, spouse, parent..." />
                        </div>
                        <div>
                            <label htmlFor="policyholderEmployer" className={labelClass}>Employer</label>
                            <input id="policyholderEmployer" name="policyholderEmployer" type="text" value={data.policyholderEmployer} onChange={handleChange} className={inputClass} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Credit Card & Cancellation Policy */}
            <div className={sectionClass}>
                <h3 className={sectionTitleClass}>
                    <span className="w-5 h-5 bg-slate-500 text-white rounded text-xs flex items-center justify-center font-bold">5</span>
                    Payment Information (Secure)
                </h3>
                <div className="space-y-4">
                    <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl">
                        <div className="flex items-start gap-3">
                            <div className="mt-0.5 text-blue-600">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-blue-900 text-sm mb-1">We protect your financial security</h4>
                                <p className="text-xs text-blue-700 leading-relaxed">
                                    To ensure the highest level of security for your sensitive data, we do not collect full credit card numbers through this online form.
                                    <strong> Please provide your payment information over the phone or in-person at your first appointment.</strong>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="creditCardCompany" className={labelClass}>Preferred Payment Method</label>
                        <select id="creditCardCompany" name="creditCardCompany" value={data.creditCardCompany} onChange={handleChange} className={inputClass + ' max-w-xs'}>
                            <option value="">Select</option>
                            <option value="Visa">Visa</option>
                            <option value="Mastercard">Mastercard</option>
                            <option value="Amex">American Express</option>
                            <option value="Discover">Discover</option>
                            <option value="HSA/FSA">HSA / FSA Card</option>
                            <option value="Other">Other / Cash</option>
                        </select>
                        <p className="text-xs text-slate-400 mt-1">This helps us prepare your file.</p>
                    </div>

                    {/* Cancellation Policy */}
                    <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
                        <h4 className="text-sm font-bold text-slate-900 mb-2">Cancellation & No-Show Policy</h4>
                        <p className="text-xs text-slate-600 leading-relaxed mb-3">
                            I understand that I am required to provide a valid credit/debit/HSA card to be kept on file. This card will be charged the full appointment amount (<strong>$275 for the initial intake</strong> and <strong>$175 for follow-up</strong>) in the event that I do not attend my scheduled appointment or if I cancel my appointment within 24 hours prior to the scheduled time. I also understand that if the card company declines any credit or debit payment, I shall be billed the full amount of the visit, and that the balance shall be paid in full before another appointment will be made. This agreement shall be governed by the laws of the state of Mississippi.
                        </p>
                        <label className="flex items-start gap-3 cursor-pointer">
                            <input
                                type="checkbox"
                                name="cancellationPolicyAcknowledged"
                                checked={data.cancellationPolicyAcknowledged}
                                onChange={handleCheckbox}
                                className="mt-0.5 w-4 h-4 accent-teal-700"
                            />
                            <span className="text-sm text-slate-700 font-medium">I have read and agree to the cancellation and no-show policy, and I will provide a valid card for the file upon scheduling.</span>
                        </label>
                    </div>
                </div>
            </div>

            {/* PCP & Pharmacy */}
            <div className={sectionClass}>
                <h3 className={sectionTitleClass}>
                    <span className="w-5 h-5 bg-slate-500 text-white rounded text-xs flex items-center justify-center font-bold">6</span>
                    Primary Care Provider & Pharmacy
                </h3>
                <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="pcpName" className={labelClass}>Physician / Clinic Name</label>
                            <input id="pcpName" name="pcpName" type="text" value={data.pcpName} onChange={handleChange} className={inputClass} />
                        </div>
                        <div>
                            <label htmlFor="pcpPhone" className={labelClass}>Phone</label>
                            <input id="pcpPhone" name="pcpPhone" type="tel" value={data.pcpPhone} onChange={handleChange} className={inputClass} />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="pcpPermissionToContact" className={labelClass}>Permission to contact?</label>
                        <select id="pcpPermissionToContact" name="pcpPermissionToContact" value={data.pcpPermissionToContact} onChange={handleChange} className={inputClass + ' max-w-xs'}>
                            <option value="">Select</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="pharmacyName" className={labelClass}>Pharmacy Name</label>
                            <input id="pharmacyName" name="pharmacyName" type="text" value={data.pharmacyName} onChange={handleChange} className={inputClass} />
                        </div>
                        <div>
                            <label htmlFor="pharmacyCityState" className={labelClass}>City & State</label>
                            <input id="pharmacyCityState" name="pharmacyCityState" type="text" value={data.pharmacyCityState} onChange={handleChange} className={inputClass} placeholder="Oxford, MS" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntakeFormStep1;
