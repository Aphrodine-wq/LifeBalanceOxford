import React, { useState } from 'react';
import { X, Loader2 } from 'lucide-react';
import { sendIntakeEmail } from '../services/emailService';

interface IntakeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const IntakeModal: React.FC<IntakeModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    anxiety: 0,
    depression: 0,
    sleep: 0,
    focus: 0,
    mood: 0,
    message: '',
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleScale = (field: string, value: number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleClose = () => {
    setFormData({ name: '', email: '', phone: '', anxiety: 0, depression: 0, sleep: 0, focus: 0, mood: 0, message: '' });
    setSubmitted(false);
    setError(false);
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);
    const result = await sendIntakeEmail(formData);
    setIsSubmitting(false);
    if (result.success) {
      setSubmitted(true);
    } else {
      setError(true);
    }
  };

  const canSubmit = formData.name && formData.phone && formData.email;

  const scaleLabels = ['Not at all', 'A little', 'Moderate', 'A lot', 'Severe'];

  const ScaleRow = ({ label, field, hint }: { label: string; field: string; hint: string }) => (
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 py-3 border-b border-slate-100 last:border-0">
      <div className="sm:w-44 flex-shrink-0">
        <p className="text-sm font-medium text-slate-800">{label}</p>
        <p className="text-xs text-slate-400 leading-tight">{hint}</p>
      </div>
      <div className="flex gap-1.5 flex-1">
        {[1, 2, 3, 4, 5].map((num) => {
          const isSelected = (formData as any)[field] === num;
          return (
            <button
              key={num}
              type="button"
              onClick={() => handleScale(field, num)}
              className={`flex-1 py-2 rounded-md text-xs font-semibold transition-all ${isSelected
                  ? 'bg-teal-700 text-white shadow-sm'
                  : 'bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-600'
                }`}
            >
              <span className="block text-sm">{num}</span>
              <span className="hidden sm:block text-[10px] font-normal mt-0.5 opacity-70">{scaleLabels[num - 1]}</span>
            </button>
          );
        })}
      </div>
    </div>
  );

  // ─── Success ──────────────────────────────
  if (submitted) {
    return (
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(15,23,42,0.5)' }}>
        <div className="bg-white rounded-2xl w-full max-w-md p-8 text-center shadow-xl">
          <p className="text-3xl mb-4">✓</p>
          <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">Got it, thanks!</h3>
          <p className="text-slate-500 text-sm mb-6">
            Kim will give you a call within one business day to get you scheduled.
          </p>
          <button onClick={handleClose} className="w-full py-3 bg-slate-900 text-white rounded-lg font-semibold text-sm hover:bg-slate-800 transition-colors">
            Close
          </button>
        </div>
      </div>
    );
  }

  // ─── Form ─────────────────────────────────
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(15,23,42,0.5)' }}>
      <div className="bg-white rounded-2xl w-full max-w-2xl shadow-xl overflow-hidden max-h-[90vh] flex flex-col">

        {/* Header */}
        <div className="px-7 pt-6 pb-4 border-b border-slate-100 flex justify-between items-start flex-shrink-0">
          <div>
            <h2 className="font-serif text-2xl font-bold text-slate-900">New patient request</h2>
            <p className="text-slate-400 text-sm mt-0.5">Fill this out and we'll call you to schedule.</p>
          </div>
          <button onClick={handleClose} aria-label="Close" className="text-slate-300 hover:text-slate-500 transition-colors mt-1">
            <X size={20} />
          </button>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto flex-1">
          <form id="intake-form" onSubmit={handleSubmit} className="p-7">

            {/* Contact info row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div>
                <label htmlFor="intake-name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                <input
                  id="intake-name" type="text" name="name" required
                  value={formData.name} onChange={handleChange}
                  className="w-full px-3.5 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-800 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500 transition-shadow"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="intake-phone" className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                <input
                  id="intake-phone" type="tel" name="phone" required
                  value={formData.phone} onChange={handleChange}
                  className="w-full px-3.5 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-800 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500 transition-shadow"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <label htmlFor="intake-email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input
                  id="intake-email" type="email" name="email" required
                  value={formData.email} onChange={handleChange}
                  className="w-full px-3.5 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-800 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500 transition-shadow"
                  placeholder="you@email.com"
                />
              </div>
            </div>

            {/* Symptom scales */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-slate-800 mb-1">How have you been feeling lately?</h3>
              <p className="text-xs text-slate-400 mb-4">Rate each over the past two weeks. 1 = not at all, 5 = severe.</p>
              <div className="bg-stone-50 rounded-xl p-4">
                <ScaleRow label="Anxiety" field="anxiety" hint="Nervous or on edge" />
                <ScaleRow label="Depression" field="depression" hint="Down or hopeless" />
                <ScaleRow label="Sleep" field="sleep" hint="Trouble sleeping" />
                <ScaleRow label="Focus" field="focus" hint="Hard to concentrate" />
                <ScaleRow label="Mood Swings" field="mood" hint="Rapid mood changes" />
              </div>
            </div>

            {/* Freeform */}
            <div className="mb-6">
              <label htmlFor="intake-message" className="block text-sm font-medium text-slate-700 mb-1">
                Anything else we should know?
              </label>
              <textarea
                id="intake-message" name="message" rows={3}
                value={formData.message} onChange={handleChange}
                className="w-full px-3.5 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-800 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500 transition-shadow resize-none"
                placeholder="Current medications, past diagnoses, what you're hoping for..."
              />
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-50 rounded-lg text-sm text-red-700">
                Couldn't send — try again or call us at{' '}
                <a href="tel:6626404004" className="font-semibold underline">(662) 640-4004</a>.
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting || !canSubmit}
              className="w-full py-3 bg-teal-700 text-white rounded-lg font-semibold text-sm hover:bg-teal-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <><Loader2 size={16} className="animate-spin" /> Sending...</>
              ) : (
                'Send Request'
              )}
            </button>

            <p className="mt-3 text-center text-xs text-slate-400">
              Or call us directly at{' '}
              <a href="tel:6626404004" className="text-teal-700 font-medium hover:underline">(662) 640-4004</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default IntakeModal;
