import React from 'react';
import type { FullIntakeData } from '../../services/intakeTypes';

interface Props {
    data: FullIntakeData;
    onChange: (partial: Partial<FullIntakeData>) => void;
}

const PART_A_QUESTIONS = [
    'How often do you have trouble wrapping up the final details of a project, once the challenging parts have been done?',
    'How often do you have difficulty getting things in order when you have to do a task that requires organization?',
    'How often do you have problems remembering appointments or obligations?',
    'When you have a task that requires a lot of thought, how often do you avoid or delay getting started?',
    'How often do you fidget or squirm with your hands or feet when you have to sit down for a long time?',
    'How often do you feel overly active and compelled to do things, like you were driven by a motor?',
];

const PART_B_QUESTIONS = [
    'How often do you make careless mistakes when you have to work on a boring or difficult project?',
    'How often do you have difficulty keeping your attention when you are doing boring or repetitive work?',
    'How often do you have difficulty concentrating on what people say to you, even when they are speaking to you directly?',
    'How often do you misplace or have difficulty finding things at home or at work?',
    'How often are you distracted by activity or noise around you?',
    'How often do you leave your seat in meetings or other situations in which you are expected to remain seated?',
    'How often do you feel restless or fidgety?',
    'How often do you have difficulty unwinding and relaxing when you have time to yourself?',
    'How often do you find yourself talking too much when you are in social situations?',
    'When you’re in a conversation, how often do you find yourself finishing the sentences of the people you are talking to, before they can finish them themselves?',
    'How often do you have difficulty waiting your turn in situations when turn taking is required?',
    'How often do you interrupt others when they are busy?',
];

const OPTIONS = [
    { label: 'Never', value: 0 },
    { label: 'Rarely', value: 1 },
    { label: 'Sometimes', value: 2 },
    { label: 'Often', value: 3 },
    { label: 'Very Often', value: 4 },
];

const MeasuresASRS: React.FC<Props> = ({ data, onChange }) => {
    const setAnswer = (idx: number, value: number) => {
        const updated = [...data.asrs];
        updated[idx] = value;
        onChange({ asrs: updated });
    };

    const answered = data.asrs.filter(v => v >= 0).length;

    // Screening logic for ASRS Usually involves counting items in grey area (Often/Very Often for most, Sometimes+ for some)
    // For simplicity here, we just display count. Clinical interpretation is complex.

    return (
        <div>
            <div className="mb-6">
                <div className="flex items-start gap-3 mb-1">
                    <span className="mt-0.5 w-8 h-8 bg-teal-700 text-white rounded-lg text-xs flex items-center justify-center font-bold flex-shrink-0">ASRS</span>
                    <div>
                        <h3 className="font-serif text-lg font-bold text-slate-900">Adult ADHD Self-Report Scale</h3>
                        <p className="text-xs text-slate-400 mt-0.5">Part A & Part B — 18 questions</p>
                    </div>
                </div>
            </div>

            <div className="bg-stone-50 rounded-xl p-4 mb-6">
                <p className="text-sm text-slate-600">
                    Please answer the questions below, rating yourself on each of the criteria shown using the scale on the right side of the page. As you answer each question, check the box that best describes how you have felt and conducted yourself <strong>over the past 6 months</strong>.
                </p>
            </div>

            {/* Part A */}
            <h4 className="text-sm font-bold text-teal-800 uppercase tracking-wider mb-4 border-b border-teal-100 pb-2">Part A</h4>

            {/* Column headers for desktop */}
            <div className="hidden sm:grid sm:grid-cols-[1fr,auto] gap-4 px-4 mb-2">
                <div />
                <div className="grid grid-cols-5 gap-1 text-center w-[300px]">
                    {OPTIONS.map(opt => (
                        <span key={opt.value} className="text-[10px] text-slate-400 font-medium">{opt.label}</span>
                    ))}
                </div>
            </div>

            <div className="space-y-4 mb-8">
                {PART_A_QUESTIONS.map((q, i) => (
                    <div key={i} className={`border rounded-xl p-4 ${i % 2 === 0 ? 'bg-white border-slate-100' : 'bg-slate-50/50 border-slate-100'}`}>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
                            <p className="text-sm text-slate-800 font-medium mb-3 sm:mb-0 sm:flex-1">
                                <span className="text-slate-400 mr-1.5">{i + 1}.</span> {q}
                            </p>

                            <div className="grid grid-cols-5 gap-1 sm:w-[300px] flex-shrink-0">
                                {OPTIONS.map(opt => {
                                    const isSelected = data.asrs[i] === opt.value;
                                    // For Part A, usually shade boxes for screening. 
                                    // Q1-3: Sometimes, Often, Very Often are shaded
                                    // Q4-6: Often, Very Often are shaded
                                    // Let's just do standard selection for UI cleanliness
                                    return (
                                        <button
                                            key={opt.value}
                                            type="button"
                                            onClick={() => setAnswer(i, opt.value)}
                                            className={`flex flex-col items-center justify-center py-2 px-1 rounded-lg transition-all h-full ${isSelected
                                                ? 'bg-teal-700 text-white shadow-sm'
                                                : 'bg-white border border-slate-200 text-slate-500 hover:border-teal-200 hover:text-teal-700'
                                                }`}
                                            title={opt.label}
                                        >
                                            <span className="block font-bold text-sm leading-none">{opt.value}</span>
                                            <span className="sm:hidden text-[9px] mt-1">{opt.label}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Part B */}
            <h4 className="text-sm font-bold text-teal-800 uppercase tracking-wider mb-4 border-b border-teal-100 pb-2">Part B</h4>

            <div className="space-y-4">
                {PART_B_QUESTIONS.map((q, idx) => {
                    const i = idx + 6; // Offset for Part B
                    return (
                        <div key={i} className={`border rounded-xl p-4 ${idx % 2 === 0 ? 'bg-white border-slate-100' : 'bg-slate-50/50 border-slate-100'}`}>
                            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
                                <p className="text-sm text-slate-800 font-medium mb-3 sm:mb-0 sm:flex-1">
                                    <span className="text-slate-400 mr-1.5">{i + 1}.</span> {q}
                                </p>

                                <div className="grid grid-cols-5 gap-1 sm:w-[300px] flex-shrink-0">
                                    {OPTIONS.map(opt => {
                                        const isSelected = data.asrs[i] === opt.value;
                                        return (
                                            <button
                                                key={opt.value}
                                                type="button"
                                                onClick={() => setAnswer(i, opt.value)}
                                                className={`flex flex-col items-center justify-center py-2 px-1 rounded-lg transition-all h-full ${isSelected
                                                    ? 'bg-teal-700 text-white shadow-sm'
                                                    : 'bg-white border border-slate-200 text-slate-500 hover:border-teal-200 hover:text-teal-700'
                                                    }`}
                                                title={opt.label}
                                            >
                                                <span className="block font-bold text-sm leading-none">{opt.value}</span>
                                                <span className="sm:hidden text-[9px] mt-1">{opt.label}</span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Score summary */}
            {answered > 0 && (
                <div className="mt-6 bg-stone-50 rounded-xl p-4 flex items-center justify-between">
                    <div>
                        <p className="text-xs text-slate-400 uppercase tracking-wider font-medium">Progress</p>
                        <p className="text-lg font-bold text-slate-800">{answered} <span className="text-sm font-normal text-slate-400">of 18 answered</span></p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MeasuresASRS;
