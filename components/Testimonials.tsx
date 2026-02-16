import React, { useState, useEffect, useCallback } from 'react';
import ScrollReveal from './ScrollReveal';

interface Testimonial {
    name: string;
    excerpt: string;
    full?: string;
}

const testimonials: Testimonial[] = [
    {
        name: 'Leah',
        excerpt:
            'Casey has helped me more than anyone else has! I have spent years seeing different doctors and he is the only one that has ever helped me! He shows compassion and empathy and doesn\'t just treat you as a "number". He genuinely cares. His receptionist, Kim, is also amazing! They both feel like family!',
    },
    {
        name: 'Joshua M.',
        excerpt:
            "Casey is the best! He is kind, caring, and listens with no judgment! His office staff is amazing — Kim is always helpful and prompt if you need questions answered! Highly recommend!",
    },
    {
        name: 'D.',
        excerpt:
            'Casey is awesome. After my first appointment, I knew I had made the right choice. He is very personable and genuinely cares about helping his patients overcome whatever challenges they are facing. If you want an honest and straight forward doctor that cares about his patients then Casey is the way to go!',
    },
    {
        name: 'Raegan B.',
        excerpt:
            'I have been seeing Casey since August 2023, and I can confidently say that my life has drastically changed for the better. I was scared to seek psychiatric help for a long time, but during my first appointment, I quickly realized that I had made the right decision.',
    },
    {
        name: 'Mackenzie D.',
        excerpt:
            "Casey is the best psychiatrist I've ever been to. He really understands patients and cares for them like no other. He gives great insightful care, and I've personally recommended him to many of my friends.",
    },
    {
        name: 'Ava B.',
        excerpt:
            "I genuinely cannot express enough how grateful I am for the care and support I've received from Casey Hester. From the very first appointment, I knew I was in the hands of someone truly special. Casey is not only highly skilled but truly extraordinary.",
    },
    {
        name: 'Mason W.',
        excerpt:
            "I've been seeing Casey for a couple of years now. I found him when I moved into town & needed a new psychiatrist. I appreciate his genuine concern for my mental health.",
    },
    {
        name: 'Samara S.',
        excerpt:
            'Casey and the front desk woman were incredible. I walked in and the woman at the front desk was so calm, kind and genuinely nice. I felt so welcome and comfortable!',
    },
    {
        name: 'Kaylen T.',
        excerpt:
            'If you have not made that call to get the help you NEED, please do it now. Casey has changed my entire outlook on life! Basically saved me! He is beyond a miracle for me. He takes his time with his patients and has more than enough patience to hear you out! Make the call TODAY!',
    },
    {
        name: 'Zoe R.',
        excerpt:
            "As a patient of Casey's for almost a year now, I can say so much not only about his practice but his character as well. Casey gives 110% to each person he sees and has personally completely changed my life for the better.",
    },
    {
        name: 'Breanna F.',
        excerpt:
            'Casey and Kim are the absolutely best! They both work so hard to provide the best care for the patients. I have struggled for years finding a good doctor who cares about me and my mental health. I can rest assured that I will never have to change doctors again now that I have found Life Balance.',
    },
    {
        name: 'Ryan R.',
        excerpt:
            "Casey is one of the most genuine people I have ever met. He doesn't just sit behind a desk, reading from a textbook with a certificate on the wall; he truly connects with his patients. He understands them, relates to them, and takes their concerns seriously.",
    },
    {
        name: 'Tori H.',
        excerpt:
            'Casey and Ms. Kim have always gone above and beyond to make sure that I am taken care of even if it\'s after hours or on the weekends. Casey is very helpful and educated wonderfully on mental health.',
    },
    {
        name: 'Lisa',
        excerpt:
            'Casey is thorough, transparent, very compassionate and nonjudgmental in his approach to helping patients. He makes them feel heard from the beginning and know they are getting quality care. I highly recommend Life Balance.',
    },
];

/* ── tiny Google star icon ── */
const StarIcon: React.FC = () => (
    <svg className="w-4 h-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

const VISIBLE_COUNT = 3;
const CYCLE_MS = 6000;

const Testimonials: React.FC = () => {
    const [page, setPage] = useState(0);
    const totalPages = Math.ceil(testimonials.length / VISIBLE_COUNT);

    const next = useCallback(() => setPage((p) => (p + 1) % totalPages), [totalPages]);
    const prev = useCallback(() => setPage((p) => (p - 1 + totalPages) % totalPages), [totalPages]);

    /* auto-advance */
    useEffect(() => {
        const id = setInterval(next, CYCLE_MS);
        return () => clearInterval(id);
    }, [next]);

    const visible = testimonials.slice(
        page * VISIBLE_COUNT,
        page * VISIBLE_COUNT + VISIBLE_COUNT,
    );

    return (
        <section className="py-20 border-t border-white/10 bg-dark-green">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal>
                    {/* Heading */}
                    <div className="text-center mb-14">
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-3">
                            What Our Patients Say
                        </h2>
                        <div className="flex items-center justify-center gap-1 mb-2">
                            {[...Array(5)].map((_, i) => (
                                <StarIcon key={i} />
                            ))}
                        </div>
                        <p className="text-cream text-sm">
                            5.0 · {testimonials.length} reviews on Google
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                        {visible.map((t) => (
                            <div
                                key={t.name}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex flex-col transition-all duration-300 hover:bg-white/10"
                            >
                                {/* Stars */}
                                <div className="flex gap-0.5 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <StarIcon key={i} />
                                    ))}
                                </div>

                                {/* Review text */}
                                <p className="text-cream leading-relaxed text-sm flex-1 mb-5">
                                    "{t.excerpt}"
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                                    <div className="w-9 h-9 rounded-full bg-gold-accent flex items-center justify-center text-white font-semibold text-sm">
                                        {t.name.charAt(0)}
                                    </div>
                                    <span className="text-white font-medium text-sm">{t.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Nav dots + arrows */}
                    <div className="flex items-center justify-center gap-4">
                        <button
                            onClick={prev}
                            aria-label="Previous testimonials"
                            className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <div className="flex gap-2">
                            {[...Array(totalPages)].map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setPage(i)}
                                    aria-label={`Go to page ${i + 1}`}
                                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === page ? 'bg-gold-accent scale-110' : 'bg-white/30 hover:bg-white/50'
                                        }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={next}
                            aria-label="Next testimonials"
                            className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default Testimonials;
