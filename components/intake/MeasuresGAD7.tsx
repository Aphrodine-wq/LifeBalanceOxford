import React from 'react';
import type { FullIntakeData } from '../../services/intakeTypes';

interface Props {
    data: FullIntakeData;
    onChange: (partial: Partial<FullIntakeData>) => void;
}

const QUESTIONS = [
    'Feeling nervous, anxious, or on edge',
    'Not being able to stop or control worrying',
    'Worrying too much about different things',
    'Trouble relaxing',
    'Being so restless that it\'s hard to sit still',
    'Becoming easily annoyed or irritable',
    'Feeling afraid as if something awful might happen',
];

const OPTIONS = [
    { label: 'Not at all', value: 0 },
    { label: 'Several days', value: 1 },
    { label: 'Over half the days', value: 2 },
    { label: 'Nearly every day', value: 3 },
];

const MeasuresGAD7: React.FC<Props> = ({ data, onChange }) => {
    const setAnswer = (idx: number, value: number) => {
        const updated = [...data.gad7];
        updated[idx] = value;
        onChange({ gad7: updated });
    };

    const total = data.gad7.reduce((sum, v) => sum + (v >= 0 ? v : 0), 0);
    const answered = data.gad7.filter(v => v >= 0).length;

    const getSeverity = (score: number) => {
        if (score <= 4) return { label: 'Minimal anxiety', color: 'text-green-600' };
        if (score <= 9) return { label: 'Mild anxiety', color: 'text-yellow-600' };
        if (score <= 14) return { label: 'Moderate anxiety', color: 'text-orange-600' };
        return { label: 'Severe anxiety', color: 'text-red-700' };
    };

    return (
        <div>
            <div className="mb-6">
                <div className="flex items-start gap-3 mb-1">
                    <span className="mt-0.5 w-8 h-8 bg-teal-700 text-white rounded-lg text-xs flex items-center justify-center font-bold flex-shrink-0">GAD-7</span>
                    <div>
                        <h3 className="font-serif text-lg font-bold text-slate-900">Generalized Anxiety Disorder Scale</h3>
                        <p className="text-xs text-slate-400 mt-0.5">Anxiety screening — 7 questions</p>
                    </div>
                </div>
            </div>

            <div className="bg-stone-50 rounded-xl p-4 mb-6">
                <p className="text-sm text-slate-600">
                    Over the <strong>last 2 weeks</strong>, how often have you been bothered by the following problems?
                </p>
            </div>

            <div className="space-y-4">
                {QUESTIONS.map((q, i) => (
                    <div key={i} className="border border-slate-100 rounded-xl p-4">
                        <p className="text-sm text-slate-800 font-medium mb-3">
                            <span className="text-slate-400 mr-1.5">{i + 1}.</span> {q}
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            {OPTIONS.map(opt => {
                                const isSelected = data.gad7[i] === opt.value;
                                return (
                                    <button
                                        key={opt.value}
                                        type="button"
                                        onClick={() => setAnswer(i, opt.value)}
                                        className={`py-2 px-3 rounded-lg text-xs font-medium transition-all ${isSelected
                                            ? 'bg-teal-700 text-white shadow-sm'
                                            : 'bg-white border border-slate-200 text-slate-500 hover:border-teal-200 hover:text-teal-700'
                                            }`}
                                    >
                                        <span className="block font-bold text-sm">{opt.value}</span>
                                        <span className="block mt-0.5 opacity-80">{opt.label}</span>
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
                        <p className="text-xs text-slate-400 uppercase tracking-wider font-medium">GAD-7 Score</p>
                        <p className={`text-2xl font-bold ${getSeverity(total).color}`}>{total}<span className="text-sm font-normal text-slate-400">/21</span></p>
                    </div>
                    <div className="text-right">
                        <p className={`text-sm font-semibold ${getSeverity(total).color}`}>{getSeverity(total).label}</p>
                        <p className="text-xs text-slate-400">{answered}/7 answered</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MeasuresGAD7;
