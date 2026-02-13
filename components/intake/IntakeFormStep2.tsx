import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import type { FullIntakeData } from '../../services/intakeTypes';

interface Props {
    data: FullIntakeData;
    onChange: (partial: Partial<FullIntakeData>) => void;
}

const inputClass = 'w-full px-3.5 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-800 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500 transition-shadow bg-white';
const labelClass = 'block text-sm font-medium text-slate-700 mb-1';
const sectionClass = 'mb-8';
const sectionTitleClass = 'text-sm font-semibold text-teal-700 uppercase tracking-wider mb-4 flex items-center gap-2';

const SYMPTOMS = [
    'Depressed mood', 'Avoidance', 'Excessive energy', 'Racing thoughts',
    'Impulsivity', 'Excessive guilt', 'Excessive worry', 'Loss of interests',
    'Tiredness/Fatigue', 'Unable to enjoy usual activities', 'Hallucinations',
    'Crying spells', 'Forgetfulness', 'Trouble concentrating',
    'Anxiety/Panic Attacks', 'Increased anger/irritability', 'Libido/drive changes',
    'Trouble falling/staying asleep', 'Substance use', 'Weight changes', 'Appetite changes',
];

const PHYSICAL_ILLNESSES = [
    'Anemia', 'Thyroid problems/diseases', 'Liver problems/diseases',
    'Chronic fatigue', 'Kidney disease', 'Diabetes',
    'Asthma/respiratory problems', 'Heart disease', 'Stomach/GI tract problems',
    'Epilepsy/seizures', 'Fibromyalgia', 'Chronic pain',
    'High blood pressure', 'High cholesterol', 'Brain/head trauma',
];

const FAMILY_HISTORY_OPTIONS = [
    'Anxiety', 'Depression', 'Post-traumatic stress', 'Drug/Alcohol abuse',
    'Anger issues', 'Bipolar disorder', 'Schizophrenia', 'Self harm/attempted suicide',
];

const IntakeFormStep2: React.FC<Props> = ({ data, onChange }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        onChange({ [e.target.name]: e.target.value } as any);
    };

    const toggleSymptom = (symptom: string) => {
        const updated = data.currentSymptoms.includes(symptom)
            ? data.currentSymptoms.filter(s => s !== symptom)
            : [...data.currentSymptoms, symptom];
        onChange({ currentSymptoms: updated });
    };

    const toggleIllness = (illness: string) => {
        const updated = data.physicalIllnesses.includes(illness)
            ? data.physicalIllnesses.filter(i => i !== illness)
            : [...data.physicalIllnesses, illness];
        onChange({ physicalIllnesses: updated });
    };

    const toggleFamily = (item: string) => {
        const updated = data.familyHistory.includes(item)
            ? data.familyHistory.filter(f => f !== item)
            : [...data.familyHistory, item];
        onChange({ familyHistory: updated });
    };

    const addMedication = () => {
        onChange({ currentMedications: [...data.currentMedications, { medication: '', howOften: '', dateStarted: '' }] });
    };

    const removeMedication = (idx: number) => {
        const updated = data.currentMedications.filter((_, i) => i !== idx);
        onChange({ currentMedications: updated.length ? updated : [{ medication: '', howOften: '', dateStarted: '' }] });
    };

    const updateMedication = (idx: number, field: string, value: string) => {
        const updated = [...data.currentMedications];
        (updated[idx] as any)[field] = value;
        onChange({ currentMedications: updated });
    };

    const addPastMed = () => {
        onChange({ pastMedications: [...data.pastMedications, { medication: '', howOften: '', dateStarted: '', outcome: '' }] });
    };

    const removePastMed = (idx: number) => {
        const updated = data.pastMedications.filter((_, i) => i !== idx);
        onChange({ pastMedications: updated.length ? updated : [{ medication: '', howOften: '', dateStarted: '', outcome: '' }] });
    };

    const updatePastMed = (idx: number, field: string, value: string) => {
        const updated = [...data.pastMedications];
        (updated[idx] as any)[field] = value;
        onChange({ pastMedications: updated });
    };

    return (
        <div>
            {/* Reason for Visit */}
            <div className={sectionClass}>
                <h3 className={sectionTitleClass}>
                    <span className="w-5 h-5 bg-teal-700 text-white rounded text-xs flex items-center justify-center font-bold">1</span>
                    Reason for Visit
                </h3>
                <label htmlFor="reasonForVisit" className={labelClass}>
                    Briefly describe what problem(s) or challenges you are seeking help for:
                </label>
                <textarea
                    id="reasonForVisit" name="reasonForVisit" rows={4}
                    value={data.reasonForVisit} onChange={handleChange}
                    className={inputClass + ' resize-none'}
                    placeholder="Tell us what's going on —  we're listening..."
                />
            </div>

            {/* Current Symptoms */}
            <div className={sectionClass}>
                <h3 className={sectionTitleClass}>
                    <span className="w-5 h-5 bg-slate-500 text-white rounded text-xs flex items-center justify-center font-bold">2</span>
                    Current Symptoms
                </h3>
                <p className="text-xs text-slate-400 mb-3 -mt-2">Select all that apply.</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {SYMPTOMS.map(symptom => {
                        const isSelected = data.currentSymptoms.includes(symptom);
                        return (
                            <button
                                key={symptom}
                                type="button"
                                onClick={() => toggleSymptom(symptom)}
                                className={`text-left px-3 py-2 rounded-lg text-xs font-medium transition-all border ${isSelected
                                    ? 'bg-teal-50 border-teal-300 text-teal-800'
                                    : 'bg-white border-slate-100 text-slate-500 hover:border-slate-200 hover:text-slate-700'
                                    }`}
                            >
                                {symptom}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Suicidal Thoughts */}
            <div className={sectionClass}>
                <div className="bg-red-50 rounded-xl p-4 border border-red-100">
                    <label htmlFor="suicidalThoughts" className="block text-sm font-medium text-slate-800 mb-2">
                        Have you ever felt that you did not want to live anymore or had suicidal thoughts?
                    </label>
                    <select id="suicidalThoughts" name="suicidalThoughts" value={data.suicidalThoughts} onChange={handleChange} className={inputClass + ' max-w-xs mb-3'}>
                        <option value="">Select</option>
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                    </select>
                    {data.suicidalThoughts === 'yes' && (
                        <div>
                            <label htmlFor="suicidalThoughtsDetail" className={labelClass}>If yes, how often and for how long?</label>
                            <textarea id="suicidalThoughtsDetail" name="suicidalThoughtsDetail" rows={2} value={data.suicidalThoughtsDetail} onChange={handleChange} className={inputClass + ' resize-none'} />
                        </div>
                    )}
                </div>
            </div>

            {/* Current Medications */}
            <div className={sectionClass}>
                <h3 className={sectionTitleClass}>
                    <span className="w-5 h-5 bg-slate-500 text-white rounded text-xs flex items-center justify-center font-bold">3</span>
                    Current Medications
                </h3>
                <p className="text-xs text-slate-400 mb-3 -mt-2">List ALL prescription/OTC medications, vitamins, and supplements.</p>
                <div className="space-y-3">
                    {data.currentMedications.map((med, i) => (
                        <div key={i} className="flex gap-2 items-start">
                            <div className="flex-1 grid grid-cols-3 gap-2">
                                <input type="text" placeholder="Medication & dosage" value={med.medication} onChange={e => updateMedication(i, 'medication', e.target.value)} className={inputClass} />
                                <input type="text" placeholder="How often?" value={med.howOften} onChange={e => updateMedication(i, 'howOften', e.target.value)} className={inputClass} />
                                <input type="text" placeholder="Date started" value={med.dateStarted} onChange={e => updateMedication(i, 'dateStarted', e.target.value)} className={inputClass} />
                            </div>
                            <button type="button" aria-label="Remove current medication" onClick={() => removeMedication(i)} className="mt-2 text-slate-300 hover:text-red-400 transition-colors">
                                <Trash2 size={14} />
                            </button>
                        </div>
                    ))}
                    <button type="button" aria-label="Add another current medication" onClick={addMedication} className="text-xs text-teal-700 font-medium hover:text-teal-800 flex items-center gap-1">
                        <Plus size={14} /> Add another medication
                    </button>
                </div>
            </div>

            {/* Physical Illnesses */}
            <div className={sectionClass}>
                <h3 className={sectionTitleClass}>
                    <span className="w-5 h-5 bg-slate-500 text-white rounded text-xs flex items-center justify-center font-bold">4</span>
                    Physical Illnesses & Symptoms
                </h3>
                <p className="text-xs text-slate-400 mb-3 -mt-2">Select all that apply.</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-3">
                    {PHYSICAL_ILLNESSES.map(illness => {
                        const isSelected = data.physicalIllnesses.includes(illness);
                        return (
                            <button
                                key={illness}
                                type="button"
                                onClick={() => toggleIllness(illness)}
                                className={`text-left px-3 py-2 rounded-lg text-xs font-medium transition-all border ${isSelected
                                    ? 'bg-teal-50 border-teal-300 text-teal-800'
                                    : 'bg-white border-slate-100 text-slate-500 hover:border-slate-200 hover:text-slate-700'
                                    }`}
                            >
                                {illness}
                            </button>
                        );
                    })}
                </div>
                <div>
                    <label htmlFor="physicalIllnessOther" className={labelClass}>Other</label>
                    <input id="physicalIllnessOther" name="physicalIllnessOther" type="text" value={data.physicalIllnessOther} onChange={handleChange} className={inputClass} placeholder="Any other conditions..." />
                </div>
            </div>

            {/* Past Treatment History */}
            <div className={sectionClass}>
                <h3 className={sectionTitleClass}>
                    <span className="w-5 h-5 bg-slate-500 text-white rounded text-xs flex items-center justify-center font-bold">5</span>
                    Past Treatment History
                </h3>
                <div className="space-y-4">
                    <div>
                        <label htmlFor="outpatientHistory" className={labelClass}>Have you previously received outpatient mental health treatment?</label>
                        <select id="outpatientHistory" name="outpatientHistory" value={data.outpatientHistory} onChange={handleChange} className={inputClass + ' max-w-xs'}>
                            <option value="">Select</option>
                            <option value="no">No</option>
                            <option value="yes">Yes</option>
                        </select>
                        {data.outpatientHistory === 'yes' && (
                            <div className="mt-2">
                                <label htmlFor="outpatientHistoryDetail" className={labelClass}>Provider/clinic, when, and for what problems:</label>
                                <textarea id="outpatientHistoryDetail" name="outpatientHistoryDetail" rows={3} value={data.outpatientHistoryDetail} onChange={handleChange} className={inputClass + ' resize-none'} />
                            </div>
                        )}
                    </div>
                    <div>
                        <label htmlFor="inpatientHistory" className={labelClass}>Have you previously received inpatient mental health treatment?</label>
                        <select id="inpatientHistory" name="inpatientHistory" value={data.inpatientHistory} onChange={handleChange} className={inputClass + ' max-w-xs'}>
                            <option value="">Select</option>
                            <option value="no">No</option>
                            <option value="yes">Yes</option>
                        </select>
                        {data.inpatientHistory === 'yes' && (
                            <div className="mt-2">
                                <label htmlFor="inpatientHistoryDetail" className={labelClass}>Facility, when, and for what problems:</label>
                                <textarea id="inpatientHistoryDetail" name="inpatientHistoryDetail" rows={3} value={data.inpatientHistoryDetail} onChange={handleChange} className={inputClass + ' resize-none'} />
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Past Mental Health Medications */}
            <div className={sectionClass}>
                <h3 className={sectionTitleClass}>
                    <span className="w-5 h-5 bg-slate-500 text-white rounded text-xs flex items-center justify-center font-bold">6</span>
                    Past Mental Health Medications
                </h3>
                <p className="text-xs text-slate-400 mb-3 -mt-2">List ALL mental health medications you have previously taken.</p>
                <div className="space-y-3">
                    {data.pastMedications.map((med, i) => (
                        <div key={i} className="flex gap-2 items-start">
                            <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-2">
                                <input type="text" placeholder="Medication & dosage" value={med.medication} onChange={e => updatePastMed(i, 'medication', e.target.value)} className={inputClass} />
                                <input type="text" placeholder="How often?" value={med.howOften} onChange={e => updatePastMed(i, 'howOften', e.target.value)} className={inputClass} />
                                <input type="text" placeholder="Date started" value={med.dateStarted} onChange={e => updatePastMed(i, 'dateStarted', e.target.value)} className={inputClass} />
                                <select aria-label="Medication outcome" value={med.outcome} onChange={e => updatePastMed(i, 'outcome', e.target.value)} className={inputClass}>
                                    <option value="">Outcome</option>
                                    <option value="Helpful">Helpful</option>
                                    <option value="Somewhat helpful">Somewhat helpful</option>
                                    <option value="Not helpful">Not helpful</option>
                                    <option value="Side effects">Side effects</option>
                                </select>
                            </div>
                            <button type="button" aria-label="Remove past medication" onClick={() => removePastMed(i)} className="mt-2 text-slate-300 hover:text-red-400 transition-colors">
                                <Trash2 size={14} />
                            </button>
                        </div>
                    ))}
                    <button type="button" onClick={addPastMed} className="text-xs text-teal-700 font-medium hover:text-teal-800 flex items-center gap-1">
                        <Plus size={14} /> Add another medication
                    </button>
                </div>
            </div>

            {/* Family History */}
            <div className={sectionClass}>
                <h3 className={sectionTitleClass}>
                    <span className="w-5 h-5 bg-slate-500 text-white rounded text-xs flex items-center justify-center font-bold">7</span>
                    Family History
                </h3>
                <p className="text-xs text-slate-400 mb-3 -mt-2">Has anyone in your immediate or extended family been diagnosed with or treated for:</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-3">
                    {FAMILY_HISTORY_OPTIONS.map(item => {
                        const isSelected = data.familyHistory.includes(item);
                        return (
                            <button
                                key={item}
                                type="button"
                                onClick={() => toggleFamily(item)}
                                className={`text-left px-3 py-2 rounded-lg text-xs font-medium transition-all border ${isSelected
                                    ? 'bg-teal-50 border-teal-300 text-teal-800'
                                    : 'bg-white border-slate-100 text-slate-500 hover:border-slate-200 hover:text-slate-700'
                                    }`}
                            >
                                {item}
                            </button>
                        );
                    })}
                </div>
                <div>
                    <label htmlFor="familyHistoryOther" className={labelClass}>Other</label>
                    <input id="familyHistoryOther" name="familyHistoryOther" type="text" value={data.familyHistoryOther} onChange={handleChange} className={inputClass} />
                </div>
            </div>

            {/* Additional Info */}
            <div className={sectionClass}>
                <h3 className={sectionTitleClass}>
                    <span className="w-5 h-5 bg-slate-500 text-white rounded text-xs flex items-center justify-center font-bold">8</span>
                    Additional Information
                </h3>
                <label htmlFor="additionalInfo" className={labelClass}>
                    Any additional information you would like us to know or to consider in your treatment:
                </label>
                <textarea
                    id="additionalInfo" name="additionalInfo" rows={4}
                    value={data.additionalInfo} onChange={handleChange}
                    className={inputClass + ' resize-none'}
                    placeholder="Current medications, past diagnoses, what you're hoping for..."
                />
            </div>
        </div>
    );
};

export default IntakeFormStep2;
