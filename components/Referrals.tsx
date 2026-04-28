import React, { useState } from 'react';
import { Printer, Send, Phone, Mail } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';

type FormState = {
  date: string;
  providerName: string;
  providerPractice: string;
  providerPhone: string;
  providerEmail: string;
  patientName: string;
  patientDob: string;
  patientAddress: string;
  patientPhone: string;
  patientInsurance: string;
  reason: string;
};

const initialState: FormState = {
  date: new Date().toISOString().slice(0, 10),
  providerName: '',
  providerPractice: '',
  providerPhone: '',
  providerEmail: '',
  patientName: '',
  patientDob: '',
  patientAddress: '',
  patientPhone: '',
  patientInsurance: '',
  reason: '',
};

const OFFICE_EMAIL = 'kim@lifebalanceoxford.com';
const FAX = '662-238-4122';
const PHONE = '662-640-4004';

const Referrals: React.FC = () => {
  usePageMeta({
    title: 'Provider Referrals',
    description:
      'Refer a patient to Life Balance, PLLC in Oxford, MS. Submit an electronic referral, fax to (662) 238-4122, or download the printable referral form. Psychiatric and addiction care for adults and adolescents.',
    keywords: [
      'psychiatric referral Oxford MS',
      'refer patient Oxford Mississippi',
      'Life Balance referral form',
      'provider referrals North Mississippi',
    ],
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Provider Referrals', path: '/referrals' },
    ],
  });

  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const buildEmailBody = (f: FormState) =>
    [
      `Date: ${f.date}`,
      '',
      '— REFERRING PROVIDER —',
      `Provider: ${f.providerName}`,
      `Practice: ${f.providerPractice}`,
      `Phone: ${f.providerPhone}`,
      `Email: ${f.providerEmail}`,
      '',
      '— PATIENT —',
      `Name: ${f.patientName}`,
      `DOB: ${f.patientDob}`,
      `Address: ${f.patientAddress}`,
      `Phone: ${f.patientPhone}`,
      `Insurance: ${f.patientInsurance}`,
      '',
      '— REASON FOR REFERRAL —',
      f.reason,
      '',
      '—',
      'Submitted via lifebalanceoxford.com referral form.',
    ].join('\n');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Patient Referral: ${form.patientName || '(unnamed)'}`);
    const body = encodeURIComponent(buildEmailBody(form));
    window.location.href = `mailto:${OFFICE_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <div className="border-b border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-teal-700 font-medium tracking-wide mb-3">For Providers</p>
          <h1 className="font-serif text-4xl font-bold text-slate-900 mb-4">Refer a Patient</h1>
          <p className="text-xl text-slate-600 max-w-2xl">
            Submit a referral electronically, fax the printable form, or call the office. We'll fax documentation back after the patient is seen.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-sm text-slate-400 font-medium uppercase tracking-wider mb-3">Fax</h3>
              <a href={`tel:${FAX.replace(/-/g, '')}`} className="text-lg text-slate-800 font-semibold hover:text-teal-700 transition-colors">
                {FAX}
              </a>
              <p className="text-sm text-slate-500 mt-1">Send the printable form directly.</p>
            </div>

            <div>
              <h3 className="text-sm text-slate-400 font-medium uppercase tracking-wider mb-3">Phone</h3>
              <a href={`tel:${PHONE.replace(/-/g, '')}`} className="text-lg text-slate-800 font-semibold hover:text-teal-700 transition-colors">
                ({PHONE.slice(0, 3)}) {PHONE.slice(4)}
              </a>
            </div>

            <div>
              <h3 className="text-sm text-slate-400 font-medium uppercase tracking-wider mb-3">Office Email</h3>
              <a href={`mailto:${OFFICE_EMAIL}`} className="text-lg text-slate-800 hover:text-teal-700 transition-colors break-all">
                {OFFICE_EMAIL}
              </a>
            </div>

            <div>
              <h3 className="text-sm text-slate-400 font-medium uppercase tracking-wider mb-3">Address</h3>
              <p className="text-lg text-slate-800 leading-relaxed">
                Life Balance, PLLC<br />
                405 Galleria Drive, Suite E<br />
                Oxford, MS 38655
              </p>
            </div>

            <div className="pt-4 space-y-3">
              <a
                href="/life-balance-referral-form.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
              >
                <Printer size={16} />
                Printable Form (PDF)
              </a>
              <p className="text-xs text-slate-500">
                Fax completed forms to <strong>{FAX}</strong>.
              </p>
            </div>

            <div className="border-l-2 border-teal-700 pl-4 mt-8">
              <p className="text-sm text-slate-600 leading-relaxed italic">
                "Please kindly fax back to us patient's documentation after they are seen."
              </p>
              <p className="text-xs text-slate-500 mt-2">— Casey Hester, PMHNP-BC</p>
            </div>
          </aside>

          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-teal-50 border border-teal-200 rounded-xl p-8">
                <h2 className="font-serif text-2xl font-bold text-slate-900 mb-3">Referral opened in your email</h2>
                <p className="text-slate-700 mb-4">
                  Your email client should have opened a pre-filled message to <strong>{OFFICE_EMAIL}</strong>. Review and send to complete the referral.
                </p>
                <p className="text-slate-600 text-sm mb-6">
                  If nothing opened, you can fax the printable form to <strong>{FAX}</strong> or call <strong>({PHONE.slice(0, 3)}) {PHONE.slice(4)}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-teal-700 font-semibold hover:text-teal-800"
                >
                  ← Submit another referral
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-slate-900 mb-1">Electronic Referral Form</h2>
                  <p className="text-sm text-slate-500">Fields marked required are needed to process the referral.</p>
                </div>

                {/* Date */}
                <div>
                  <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Date</label>
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    required
                    className="w-full sm:w-56 border border-slate-200 rounded-md px-3 py-2.5 text-slate-800 focus:outline-none focus:border-teal-700 focus:ring-1 focus:ring-teal-700"
                  />
                </div>

                {/* Referring Provider */}
                <fieldset className="border-t border-slate-100 pt-6">
                  <legend className="text-xs font-semibold text-teal-700 uppercase tracking-wider mb-4">Referring Provider</legend>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field label="Provider Name" name="providerName" value={form.providerName} onChange={handleChange} required />
                    <Field label="Practice / Clinic" name="providerPractice" value={form.providerPractice} onChange={handleChange} />
                    <Field label="Phone" name="providerPhone" value={form.providerPhone} onChange={handleChange} type="tel" required />
                    <Field label="Email" name="providerEmail" value={form.providerEmail} onChange={handleChange} type="email" />
                  </div>
                </fieldset>

                {/* Patient */}
                <fieldset className="border-t border-slate-100 pt-6">
                  <legend className="text-xs font-semibold text-teal-700 uppercase tracking-wider mb-4">Patient</legend>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field label="Patient Name" name="patientName" value={form.patientName} onChange={handleChange} required />
                    <Field label="Date of Birth" name="patientDob" value={form.patientDob} onChange={handleChange} type="date" />
                    <Field label="Patient Phone" name="patientPhone" value={form.patientPhone} onChange={handleChange} type="tel" />
                    <Field label="Insurance" name="patientInsurance" value={form.patientInsurance} onChange={handleChange} required />
                    <div className="md:col-span-2">
                      <Field label="Patient Address" name="patientAddress" value={form.patientAddress} onChange={handleChange} />
                    </div>
                  </div>
                </fieldset>

                {/* Reason */}
                <fieldset className="border-t border-slate-100 pt-6">
                  <legend className="text-xs font-semibold text-teal-700 uppercase tracking-wider mb-4">Reason for Referral</legend>
                  <textarea
                    name="reason"
                    value={form.reason}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Relevant diagnoses, current medications, prior treatment, urgency, and anything else we should know before the first visit."
                    className="w-full border border-slate-200 rounded-md px-3 py-2.5 text-slate-800 focus:outline-none focus:border-teal-700 focus:ring-1 focus:ring-teal-700"
                  />
                </fieldset>

                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-100">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-800 transition-colors"
                  >
                    <Send size={16} />
                    Send Referral
                  </button>
                  <a
                    href={`tel:${PHONE.replace(/-/g, '')}`}
                    className="inline-flex items-center justify-center gap-2 border border-slate-300 text-slate-800 px-6 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors"
                  >
                    <Phone size={16} />
                    Call Office
                  </a>
                  <a
                    href={`mailto:${OFFICE_EMAIL}`}
                    className="inline-flex items-center justify-center gap-2 border border-slate-300 text-slate-800 px-6 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors"
                  >
                    <Mail size={16} />
                    Email Directly
                  </a>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed">
                  This form opens your email client with the referral details pre-filled. For PHI-sensitive documentation, please fax to <strong>{FAX}</strong> or use a HIPAA-compliant secure channel.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

type FieldProps = {
  label: string;
  name: keyof FormState;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
};

const Field: React.FC<FieldProps> = ({ label, name, value, onChange, type = 'text', required }) => (
  <div>
    <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">
      {label}{required && <span className="text-teal-700 ml-1">*</span>}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full border border-slate-200 rounded-md px-3 py-2.5 text-slate-800 focus:outline-none focus:border-teal-700 focus:ring-1 focus:ring-teal-700"
    />
  </div>
);

export default Referrals;
