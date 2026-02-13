import React from 'react';
import type { FullIntakeData } from '../../services/intakeTypes';

interface Props {
    data: FullIntakeData;
    onChange: (partial: Partial<FullIntakeData>) => void;
}

const MDQ_ITEMS = [
    '...you felt so good or so hyper that other people thought you were not your normal self, or you were so hyper that you got into trouble?',
    '...you were so irritable that you shouted at people or started fights or arguments?',
    '...you felt much more self-confident than usual?',
    '...you got much less sleep than usual and found you didn\'t really miss it?',
    '...you were much more talkative or spoke much faster than usual?',
    '...thoughts raced through your head and you couldn\'t slow your mind down?',
    '...you were so easily distracted by things around you that you had trouble concentrating or staying on track?',
    '...you had much more energy than usual?',
    '...you were much more active or did many more things than usual?',
    '...you were much more social or outgoing than usual; for example, you telephoned friends in the middle of the night?',
    '...you were much more interested in sex than usual?',
    '...you did things that were unusual for you or that other people might have thought were excessive, foolish, or risky?',
    '...spending money got you or your family into trouble?',
];

const MeasuresMDQ: React.FC<Props> = ({ data, onChange }) => {
    const toggleItem = (idx: number) => {
        const updated = [...data.mdqItems];
        updated[idx] = !updated[idx];
        onChange({ mdqItems: updated });
    };

    const yesCount = data.mdqItems.filter(Boolean).length;

    return (
        <div>
            <div className="mb-6">
                <div className="flex items-start gap-3 mb-1">
                    <span className="mt-0.5 w-8 h-8 bg-teal-700 text-white rounded-lg text-xs flex items-center justify-center font-bold flex-shrink-0">MDQ</span>
                    <div>
                        <h3 className="font-serif text-lg font-bold text-slate-900">Mood Disorder Questionnaire</h3>
                        <p className="text-xs text-slate-400 mt-0.5">Bipolar disorder screening</p>
                    </div>
                </div>
            </div>

            {/* Question 1 */}
            <div className="mb-6">
                <div className="bg-stone-50 rounded-xl p-4 mb-4">
                    <p className="text-sm text-slate-700 font-medium">
                        <strong>1.</strong> Has there ever been a period of time when you were not your usual self and...
                    </p>
                </div>

                <div className="space-y-3">
                    {MDQ_ITEMS.map((item, i) => {
                        const isYes = data.mdqItems[i];
                        return (
                            <div key={i} className="flex items-start gap-3 p-3 rounded-lg border border-slate-100 hover:border-slate-200 transition-colors">
                                <p className="text-sm text-slate-700 flex-1">
                                    <span className="text-slate-400 font-medium">{String.fromCharCode(97 + i)}.</span> {item}
                                </p>
                                <div className="flex gap-1.5 flex-shrink-0">
                                    <button
                                        type="button"
                                        onClick={() => { const u = [...data.mdqItems]; u[i] = true; onChange({ mdqItems: u }); }}
                                        className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${isYes === true
                                            ? 'bg-teal-700 text-white'
                                            : 'bg-white border border-slate-200 text-slate-400 hover:text-teal-700 hover:border-teal-200'
                                            }`}
                                    >
                                        Yes
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => { const u = [...data.mdqItems]; u[i] = false; onChange({ mdqItems: u }); }}
                                        className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${isYes === false
                                            ? 'bg-slate-600 text-white'
                                            : 'bg-white border border-slate-200 text-slate-400 hover:text-slate-700 hover:border-slate-300'
                                            }`}
                                    >
                                        No
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Question 2 */}
            <div className="mb-6 border border-slate-100 rounded-xl p-4">
                <p className="text-sm text-slate-800 font-medium mb-3">
                    <strong>2.</strong> If you checked YES to more than one of the above, have several of these ever happened during the same period of time?
                </p>
                <div className="flex gap-2">
                    {['Yes', 'No'].map(opt => (
                        <button
                            key={opt}
                            type="button"
                            onClick={() => onChange({ mdqSameTime: opt })}
                            className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${data.mdqSameTime === opt
                                ? 'bg-teal-700 text-white'
                                : 'bg-white border border-slate-200 text-slate-500 hover:border-teal-200'
                                }`}
                        >
                            {opt}
                        </button>
                    ))}
                </div>
            </div>

            {/* Question 3 */}
            <div className="mb-6 border border-slate-100 rounded-xl p-4">
                <p className="text-sm text-slate-800 font-medium mb-3">
                    <strong>3.</strong> How much of a problem did any of these cause you — like being unable to work; having family, money, or legal troubles; getting into arguments or fights?
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {['No problem', 'Minor problem', 'Moderate problem', 'Serious problem'].map(opt => (
                        <button
                            key={opt}
                            type="button"
                            onClick={() => onChange({ mdqProblemLevel: opt })}
                            className={`py-2 px-3 rounded-lg text-xs font-medium transition-all ${data.mdqProblemLevel === opt
                                ? 'bg-teal-700 text-white shadow-sm'
                                : 'bg-white border border-slate-200 text-slate-500 hover:border-teal-200 hover:text-teal-700'
                                }`}
                        >
                            {opt}
                        </button>
                    ))}
                </div>
            </div>

            {/* Question 4 */}
            <div className="mb-6 border border-slate-100 rounded-xl p-4">
                <p className="text-sm text-slate-800 font-medium mb-3">
                    <strong>4.</strong> Have any of your blood relatives (children, siblings, parents, grandparents, aunts, uncles) had manic-depressive illness or bipolar disorder?
                </p>
                <div className="flex gap-2">
                    {['Yes', 'No'].map(opt => (
                        <button
                            key={opt}
                            type="button"
                            onClick={() => onChange({ mdqFamilyHistory: opt })}
                            className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${data.mdqFamilyHistory === opt
                                ? 'bg-teal-700 text-white'
                                : 'bg-white border border-slate-200 text-slate-500 hover:border-teal-200'
                                }`}
                        >
                            {opt}
                        </button>
                    ))}
                </div>
            </div>

            {/* Question 5 */}
            <div className="mb-6 border border-slate-100 rounded-xl p-4">
                <p className="text-sm text-slate-800 font-medium mb-3">
                    <strong>5.</strong> Has a health professional ever told you that you have manic-depressive illness or bipolar disorder?
                </p>
                <div className="flex gap-2">
                    {['Yes', 'No'].map(opt => (
                        <button
                            key={opt}
                            type="button"
                            onClick={() => onChange({ mdqProfessionalDiagnosis: opt })}
                            className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${data.mdqProfessionalDiagnosis === opt
                                ? 'bg-teal-700 text-white'
                                : 'bg-white border border-slate-200 text-slate-500 hover:border-teal-200'
                                }`}
                        >
                            {opt}
                        </button>
                    ))}
                </div>
            </div>

            {/* Score summary */}
            <div className="bg-stone-50 rounded-xl p-4 flex items-center justify-between">
                <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider font-medium">MDQ Summary</p>
                    <p className="text-lg font-bold text-slate-800">{yesCount} <span className="text-sm font-normal text-slate-400">of 13 items endorsed</span></p>
                </div>
                {yesCount >= 7 && data.mdqSameTime === 'Yes' && (data.mdqProblemLevel === 'Moderate problem' || data.mdqProblemLevel === 'Serious problem') && (
                    <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-3 py-1 rounded-full">Positive screen</span>
                )}
            </div>
        </div>
    );
};

export default MeasuresMDQ;
