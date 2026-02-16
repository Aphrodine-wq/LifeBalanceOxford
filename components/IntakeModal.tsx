import React, { useState, useRef, useEffect } from 'react';
import { X, Loader2, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { sendIntakeEmail } from '../services/emailService';
import IntakeFormStep1 from './intake/IntakeFormStep1';
import IntakeFormStep2 from './intake/IntakeFormStep2';
import MeasuresPHQ9 from './intake/MeasuresPHQ9';
import MeasuresGAD7 from './intake/MeasuresGAD7';
import MeasuresMDQ from './intake/MeasuresMDQ';
import MeasuresPCLC from './intake/MeasuresPCLC';
import MeasuresASRS from './intake/MeasuresASRS';
import IntakeReview from './intake/IntakeReview';
import { FullIntakeData, defaultIntakeData } from '../services/intakeTypes';

interface IntakeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const STEPS = [
  { label: 'Patient Info', short: '1' },
  { label: 'Medical History', short: '2' },
  { label: 'PHQ-9', short: '3' },
  { label: 'GAD-7', short: '4' },
  { label: 'MDQ', short: '5' },
  { label: 'PCL-C', short: '6' },
  { label: 'ASRS', short: '7' },
  { label: 'Review', short: '✓' },
];

const IntakeModal: React.FC<IntakeModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<FullIntakeData>({ ...defaultIntakeData });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [step]);

  /* Lock body scroll while modal is open (critical for mobile) */
  useEffect(() => {
    if (!isOpen) return;
    const scrollY = window.scrollY;
    const body = document.body;
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.left = '0';
    body.style.right = '0';
    body.style.overflow = 'hidden';
    return () => {
      body.style.position = '';
      body.style.top = '';
      body.style.left = '';
      body.style.right = '';
      body.style.overflow = '';
      window.scrollTo(0, scrollY);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const updateData = (partial: Partial<FullIntakeData>) => {
    setFormData(prev => ({ ...prev, ...partial }));
  };

  const handleClose = () => {
    setFormData({ ...defaultIntakeData });
    setStep(0);
    setSubmitted(false);
    setError(false);
    onClose();
  };

  const handleSubmit = async () => {
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

  const canGoNext = () => {
    if (step === 0) {
      return !!(formData.patientName && formData.primaryPhone && formData.email);
    }
    return true;
  };

  const next = () => { if (step < STEPS.length - 1) setStep(s => s + 1); };
  const prev = () => { if (step > 0) setStep(s => s - 1); };

  // ─── Success ──────────────────────────────
  if (submitted) {
    return (
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/50">
        <div className="bg-white rounded-2xl w-full max-w-md p-8 text-center shadow-xl animate-fade-in">
          <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-5">
            <Check size={32} className="text-teal-700" />
          </div>
          <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">All set — thanks!</h3>
          <p className="text-slate-500 text-sm mb-4">
            Your intake forms and clinical measures have been received. Kim will give you a call within one business day to get you scheduled.
          </p>
          <p className="text-slate-400 text-xs mb-6">
            A copy of your intake form has been downloaded to your computer for your records.
          </p>
          <button onClick={handleClose} className="w-full py-3 bg-slate-900 text-white rounded-lg font-semibold text-sm hover:bg-slate-800 transition-colors">
            Close
          </button>
        </div>
      </div>
    );
  }

  // ─── Render current step ──────────────────
  const renderStep = () => {
    switch (step) {
      case 0: return <IntakeFormStep1 data={formData} onChange={updateData} />;
      case 1: return <IntakeFormStep2 data={formData} onChange={updateData} />;
      case 2: return <MeasuresPHQ9 data={formData} onChange={updateData} />;
      case 3: return <MeasuresGAD7 data={formData} onChange={updateData} />;
      case 4: return <MeasuresMDQ data={formData} onChange={updateData} />;
      case 5: return <MeasuresPCLC data={formData} onChange={updateData} />;
      case 6: return <MeasuresASRS data={formData} onChange={updateData} />;
      case 7: return <IntakeReview data={formData} />;
      default: return null;
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-4 bg-slate-900/55">
      <div className="bg-white rounded-2xl w-full max-w-3xl shadow-2xl overflow-hidden max-h-[94vh] flex flex-col animate-fade-in">

        {/* Header */}
        <div className="px-5 sm:px-7 pt-5 pb-4 border-b border-slate-100 flex-shrink-0">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">New Patient Intake</h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-0.5">{STEPS[step].label} — Step {step + 1} of {STEPS.length}</p>
            </div>
            <button onClick={handleClose} aria-label="Close" className="text-slate-300 hover:text-slate-500 transition-colors mt-1">
              <X size={20} />
            </button>
          </div>

          {/* Stepper */}
          <div className="flex items-center gap-1">
            {STEPS.map((s, i) => (
              <button
                key={i}
                onClick={() => i <= step && setStep(i)}
                className={`flex-1 h-1.5 rounded-full transition-all duration-300 ${i < step ? 'bg-teal-600' : i === step ? 'bg-teal-700' : 'bg-slate-100'
                  } ${i <= step ? 'cursor-pointer' : 'cursor-default'}`}
                title={s.label}
              />
            ))}
          </div>
        </div>

        {/* Scrollable Body */}
        <div ref={scrollRef} className="overflow-y-auto flex-1 p-5 sm:p-7">
          {renderStep()}

          {error && (
            <div className="mt-4 p-3 bg-red-50 rounded-lg text-sm text-red-700">
              Couldn't send — try again or call us at{' '}
              <a href="tel:6626404004" className="font-semibold underline">(662) 640-4004</a>.
            </div>
          )}
        </div>

        {/* Footer Nav */}
        <div className="px-5 sm:px-7 py-4 border-t border-slate-100 flex items-center justify-between flex-shrink-0 bg-stone-50/50">
          <button
            onClick={prev}
            disabled={step === 0}
            className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft size={16} /> Back
          </button>

          {step < STEPS.length - 1 ? (
            <button
              onClick={next}
              disabled={!canGoNext()}
              className="flex items-center gap-1.5 px-6 py-2.5 bg-teal-700 text-white rounded-lg text-sm font-semibold hover:bg-teal-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Continue <ChevronRight size={16} />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="flex items-center gap-2 px-6 py-2.5 bg-teal-700 text-white rounded-lg text-sm font-semibold hover:bg-teal-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              {isSubmitting ? (
                <><Loader2 size={16} className="animate-spin" /> Submitting...</>
              ) : (
                <><Check size={16} /> Submit Intake</>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default IntakeModal;
