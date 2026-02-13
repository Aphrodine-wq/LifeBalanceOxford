import React from 'react';
import type { FullIntakeData } from '../../services/intakeTypes';

interface Props {
    data: FullIntakeData;
    onChange: (partial: Partial<FullIntakeData>) => void;
}

const QUESTIONS = [
    'Little interest or pleasure in doing things',
    'Feeling down, depressed, or hopeless',
    'Trouble falling or staying asleep, or sleeping too much',
    'Feeling tired or having little energy',
    'Poor appetite or overeating',
    'Feeling bad about yourself — or that you are a failure or have let yourself or your family down',
    'Trouble concentrating on things, such as reading the newspaper or watching television',
    'Moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual',
    'Thoughts that you would be better off dead, or of hurting yourself in some way',
];

const OPTIONS = [
    { label: 'Not at all', value: 0 },
    { label: 'Several days', value: 1 },
    { label: 'More than half the days', value: 2 },
    { label: 'Nearly every day', value: 3 },
];

const MeasuresPHQ9: React.FC<Props> = ({ data, onChange }) => {
    const setAnswer = (idx: number, value: number) => {
        const updated = [...data.phq9];
        updated[idx] = value;
        onChange({ phq9: updated });
    };

    const total = data.phq9.reduce((sum, v) => sum + (v >= 0 ? v : 0), 0);
    const answered = data.phq9.filter(v => v >= 0).length;

    const getSeverity = (score: number) => {
        if (score <= 4) return { label: 'Minimal depression', color: 'text-green-600' };
        if (score <= 9) return { label: 'Mild depression', color: 'text-yellow-600' };
        if (score <= 14) return { label: 'Moderate depression', color: 'text-orange-600' };
        if (score <= 19) return { label: 'Moderately severe depression', color: 'text-red-500' };
        return { label: 'Severe depression', color: 'text-red-700' };
    };

    return (
        <div>
            <div className="mb-6">
                <div className="flex items-start gap-3 mb-1">
                    <span className="mt-0.5 w-8 h-8 bg-teal-700 text-white rounded-lg text-xs flex items-center justify-center font-bold flex-shrink-0">PHQ-9</span>
                    <div>
                        <h3 className="font-serif text-lg font-bold text-slate-900">Patient Health Questionnaire</h3>
                        <p className="text-xs text-slate-400 mt-0.5">Depression screening — 9 questions</p>
                    </div>
                </div>
            </div>

            <div className="bg-stone-50 rounded-xl p-4 mb-6">
                <p className="text-sm text-slate-600">
                    Over the <strong>last 2 weeks</strong>, how often have you been bothered by any of the following problems?
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
                                const isSelected = data.phq9[i] === opt.value;
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

            {/* Impact question */}
            <div className="mt-6 border border-slate-100 rounded-xl p-4">
                <p className="text-sm text-slate-800 font-medium mb-3">
                    If you checked off any problems, how difficult have these made it for you to do your work, take care of things at home, or get along with other people?
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {['Not difficult at all', 'Somewhat difficult', 'Very difficult', 'Extremely difficult'].map(opt => {
                        const isSelected = data.phq9Difficulty === opt;
                        return (
                            <button
                                key={opt}
                                type="button"
                                onClick={() => onChange({ phq9Difficulty: opt })}
                                className={`py-2 px-3 rounded-lg text-xs font-medium transition-all ${isSelected
                                    ? 'bg-teal-700 text-white shadow-sm'
                                    : 'bg-white border border-slate-200 text-slate-500 hover:border-teal-200 hover:text-teal-700'
                                    }`}
                            >
                                {opt}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Score */}
            {answered > 0 && (
                <div className="mt-6 bg-stone-50 rounded-xl p-4 flex items-center justify-between">
                    <div>
                        <p className="text-xs text-slate-400 uppercase tracking-wider font-medium">PHQ-9 Score</p>
                        <p className={`text-2xl font-bold ${getSeverity(total).color}`}>{total}<span className="text-sm font-normal text-slate-400">/27</span></p>
                    </div>
                    <div className="text-right">
                        <p className={`text-sm font-semibold ${getSeverity(total).color}`}>{getSeverity(total).label}</p>
                        <p className="text-xs text-slate-400">{answered}/9 answered</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MeasuresPHQ9;
