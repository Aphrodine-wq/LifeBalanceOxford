import React from 'react';
import type { FullIntakeData } from '../../services/intakeTypes';

interface Props {
    data: FullIntakeData;
    onChange: (partial: Partial<FullIntakeData>) => void;
}

const QUESTIONS = [
    'Repeated, disturbing memories, thoughts, or images of a stressful experience from the past',
    'Repeated, disturbing dreams of a stressful experience from the past',
    'Suddenly acting or feeling as if a stressful experience were happening again (as if you were reliving it)',
    'Feeling very upset when something reminded you of a stressful experience from the past',
    'Having physical reactions (e.g., heart pounding, trouble breathing, sweating) when something reminded you of a stressful experience from the past',
    'Avoiding thinking about or talking about a stressful experience from the past or avoiding having feelings related to it',
    'Avoiding activities or situations because they reminded you of a stressful experience from the past',
    'Trouble remembering important parts of a stressful experience from the past',
    'Loss of interest in activities that you used to enjoy',
    'Feeling distant or cut off from other people',
    'Feeling emotionally numb or being unable to have loving feelings for those close to you',
    'Feeling as if your future will somehow be cut short',
    'Trouble falling or staying asleep',
    'Feeling irritable or having angry outbursts',
    'Having difficulty concentrating',
    'Being "super-alert" or watchful or on guard',
    'Feeling jumpy or easily startled',
];

const OPTIONS = [
    { label: 'Not at all', value: 1 },
    { label: 'A little bit', value: 2 },
    { label: 'Moderately', value: 3 },
    { label: 'Quite a bit', value: 4 },
    { label: 'Extremely', value: 5 },
];

const MeasuresPCLC: React.FC<Props> = ({ data, onChange }) => {
    const setAnswer = (idx: number, value: number) => {
        const updated = [...data.pclc];
        updated[idx] = value;
        onChange({ pclc: updated });
    };

    const answered = data.pclc.filter(v => v >= 1).length;
    const total = data.pclc.reduce((sum, v) => sum + (v >= 1 ? v : 0), 0);

    const getSeverity = (score: number) => {
        if (score < 28) return { label: 'Below clinical threshold', color: 'text-green-600' };
        if (score < 44) return { label: 'Possible PTSD', color: 'text-yellow-600' };
        return { label: 'Probable PTSD', color: 'text-red-600' };
    };

    return (
        <div>
            <div className="mb-6">
                <div className="flex items-start gap-3 mb-1">
                    <span className="mt-0.5 w-8 h-8 bg-teal-700 text-white rounded-lg text-xs flex items-center justify-center font-bold flex-shrink-0">PCL-C</span>
                    <div>
                        <h3 className="font-serif text-lg font-bold text-slate-900">PTSD Checklist — Civilian Version</h3>
                        <p className="text-xs text-slate-400 mt-0.5">PTSD screening — 17 questions</p>
                    </div>
                </div>
            </div>

            <div className="bg-stone-50 rounded-xl p-4 mb-6">
                <p className="text-sm text-slate-600">
                    Below is a list of problems and complaints that people sometimes have in response to stressful life experiences. Please read each one carefully, then indicate how much you have been bothered by that problem <strong>in the last month</strong>.
                </p>
            </div>

            {/* Column headers */}
            <div className="hidden sm:grid sm:grid-cols-[1fr,auto] gap-4 px-4 mb-2">
                <div />
                <div className="grid grid-cols-5 gap-1 text-center">
                    {OPTIONS.map(opt => (
                        <span key={opt.value} className="text-[10px] text-slate-400 font-medium w-14">{opt.label}</span>
                    ))}
                </div>
            </div>

            <div className="space-y-3">
                {QUESTIONS.map((q, i) => (
                    <div key={i} className="border border-slate-100 rounded-xl p-4">
                        <p className="text-sm text-slate-800 font-medium mb-3">
                            <span className="text-slate-400 mr-1.5">{i + 1}.</span> {q}
                        </p>
                        <div className="grid grid-cols-5 gap-1.5">
                            {OPTIONS.map(opt => {
                                const isSelected = data.pclc[i] === opt.value;
                                return (
                                    <button
                                        key={opt.value}
                                        type="button"
                                        onClick={() => setAnswer(i, opt.value)}
                                        className={`py-2 px-1 rounded-lg text-xs font-medium transition-all ${isSelected
                                            ? 'bg-teal-700 text-white shadow-sm'
                                            : 'bg-white border border-slate-200 text-slate-500 hover:border-teal-200 hover:text-teal-700'
                                            }`}
                                    >
                                        <span className="block font-bold text-sm">{opt.value}</span>
                                        <span className="hidden sm:block mt-0.5 opacity-80 text-[10px] leading-tight">{opt.label}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>

            {/* Score */}
            {answered > 0 && (
                <div className="mt-6 bg-stone-50 rounded-xl p-4 flex items-center justify-between">
                    <div>
                        <p className="text-xs text-slate-400 uppercase tracking-wider font-medium">PCL-C Score</p>
                        <p className={`text-2xl font-bold ${getSeverity(total).color}`}>{total}<span className="text-sm font-normal text-slate-400">/85</span></p>
                    </div>
                    <div className="text-right">
                        <p className={`text-sm font-semibold ${getSeverity(total).color}`}>{getSeverity(total).label}</p>
                        <p className="text-xs text-slate-400">{answered}/17 answered</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MeasuresPCLC;
