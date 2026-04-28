import React, { useState, useEffect, useCallback } from 'react';
import ScrollReveal from './ScrollReveal';

interface Testimonial {
    name: string;
    date: string;
    text: string;
}

// All 64 reviews pulled from the Life Balance, PLLC Google Business Profile.
// Refresh by re-running the playwright scrape against the public Maps page.
const testimonials: Testimonial[] = [
    { name: 'Bolton F.', date: '2 years ago', text: 'I have had the privilege of knowing Casey (for nearly 10 years) and the ethos behind Life Balance, a mental health clinic that truly stands out for its values. Although I am not a direct recipient of the services, it is clear that Casey’s integrity, empathy, and character are the cornerstone of the practice. Casey’s integrity is evident in every aspect of his work. He consistently upholds the highest ethical standards, ensuring that each patient receives the care they need with respect and confidentiality. His approach is not just about treating symptoms but addressing the whole person, which speaks volumes about his commitment to genuine healing. What strikes me most is Casey’s deep empathy. He possesses a rare ability to understand and share the feelings of others, making him not just a healthcare provider but a true ally in his clients’ mental health journeys. This empathy, combined with his strong character, creates a safe and nurturing environment for everyone who seeks help at Life Balance. Casey’s character shines through his dedication to making a positive impact in his clients’ lives. He is not just running a clinic; he is fostering a community where healing and growth are nurtured. Life Balance, under Casey’s guidance, is more than a mental health clinic—it’s a place where integrity, empathy, and character translate into life-changing support for those in need. I wholeheartedly endorse Life Balance for anyone looking for compassionate, ethical, and effective mental health care. Casey’s leadership and values truly set this clinic apart.' },
    { name: 'Ava B.', date: 'a year ago', text: 'I genuinely cannot express enough how grateful I am for the care and support I’ve received from Casey Hester. From the very first appointment, I knew I was in the hands of someone truly special. Casey is not only highly skilled and knowledgeable, but he also genuinely cares about his patients\' well-being on a deep and personal level. He takes the time to really listen, understand, and offer thoughtful advice, going far beyond what is expected. He doesn’t rush through appointments but instead creates a safe and comfortable space, always ensuring I feel heard and supported. His compassion has made a tremendous difference in my life, and I always leave feeling hopeful and encouraged. What really stands out is how Casey goes the extra mile. Whether it’s checking in during difficult times or adjusting his schedule to accommodate mine, he always makes me feel like my well-being is his top priority. His kindness, patience, and dedication to helping me navigate through challenges have truly made such an impact. If you’re looking for a psychiatrist who combines expertise with genuine care, I cannot recommend Casey Hester enough. He is amazing at what he does, and I am so thankful to have him as part of my support system.' },
    { name: 'Kristian L.', date: '2 years ago', text: 'This place is a life saver and I highly recommend. Casey not only treats everyone like family, but he goes way above and beyond what any doctor I have ever saw before has ever done. He is always there when you need him, either over the phone or in person, and will work with you as much as possible to make sure you get the help you not only need but deserve. There are plenty of times he has made himself available outside of normal business hours because I needed something or someone. His goal is to make sure that people get where they need to be in life so they can live their life. He is not one of those doctors that writes whatever script is high on the market right then and will make him more money. He truly cares about people and wants them to have the best in life. If anyone is looking for a doctor that has values and really honest to God cares about you, then this is the right place for you!! Thank you Casey for always being there for me and my family. We honestly appreciate everything you do for us, after all these years and many different doctors I am glad we have finally found one we are valued at and can stay with for good.' },
    { name: 'Samara S.', date: 'a year ago', text: 'Casey and the front desk woman were incredible. I walked in and the woman at the front desk was so calm, kind and genuinely nice. I felt so welcome and comfortable! Casey is the most honest and real person. What I love most about him is his honesty, he doesn’t hide anything from his patients, he is as real as it gets which make him relatable. I know that he’s been through the same thing as me, he understands me and my feelings. I feel like he was born to help others and his passion for doing so really shows. I felt so comfortable opening up and sharing my feelings with him. I’m confident that he can help me and get me on the right path! He also puts your mind at ease with his knowledge and understanding of medication and treatments! Outstanding first appointment with him! Best in oxford! (I’ve been to several) I look forward to continuing my health journey with life balance and Casey! I recommend them 100%' },
    { name: 'Raegan B.', date: 'a year ago', text: 'I have been seeing Casey since August 2023, and I can confidently say that my life has drastically changed for the better. I was scared to seek psychiatric help for a long time, but during my first appointment, I quickly realized that I made the right decision. If you’re looking for help, Casey is a great source of support and guidance. I know that I can open up on anything I am feeling and experiencing without worrying about being judged. He will listen to and work with you when it comes to figuring out the right course of treatment. I know he cares, I know that I am in a safe space, and I know that I will walk out of our appointment feeling uplifted and confident. I genuinely look forward to going to my appointments, and I will forever be thankful for Casey for the genuine, positive impact he has had on my life in just a year and a half.' },
    { name: 'Mason W.', date: 'a year ago', text: 'I’ve been seeing Casey for a couple of years now. I found him when I moved into town & needed a new psychiatrist. I appreciate his genuine concern for my mental health. When I first moved here, I was on a medication regimen, which I thought was good, but wasn’t feeling 100%. Casey was able to address & prescribe medication that managed & improved my symptoms. At times when I’ve had problems with medications, he has worked with me to figure out a solution. The amount of care he gives is genuine. He treats me like a person, listening & talking to me, asking me about my life, instead of only prescribing me meds. He manages his time so he can give his full attention to his current patient. I’ve never felt rushed. He seems to enjoy his job, & take pride in it not because of the money he makes, but because of the people he helps. He’s amazing.' },
    { name: 'Emily F.', date: '2 years ago', text: 'As a PLLC, Casey brings a personal touch to his practice, his genuine understanding and empathy are evident in how he interacts with clients and prioritizes their well-being. Casey approaches each case with a level of care and commitment that is truly rare in the industry. His ability to connect with clients and his unwavering support for their journey towards better mental health is what sets Life Balance apart. For anyone seeking compassionate, personalized mental health care, I highly recommend Life Balance. Casey’s professionalism, coupled with his genuine care for clients, makes this clinic a standout in the mental health community.' },
    { name: 'Victoria D.', date: '2 years ago', text: 'Life balance is the best experience I’ve ever had at a mental health clinic. Casey Hester values his patients time, listens fully, and will do everything in his power to help you become the best version of yourself. It’s very affordable and you definitely get your moneys worth. In the amount of time I have been going to life balance I have felt seen, heard, and valued as a person. Casey and the staff at life balance are remarkable and you will come out so much happier in the long run ❤️' },
    { name: 'zoe r.', date: 'a year ago', text: 'As a patient of Casey\'s for almost a year now, I can say so much not only about his practice but his character as well. Casey gives 110% to each person he sees and has personally completely changed my life for the better. He takes the time to get to know each client personally and becomes a friend and a supporter. He\'s always there to answer a call and take extra time out of his day for anybody that needs it. I feel extremely blessed to have been connected with him.' },
    { name: 'Tori H.', date: 'a year ago', text: 'Casey and Ms. Kim have always gone above and beyond to make sure that I am taking care of even if it’s after hours are on the weekends. Casey is very helpful and educated wonderfully mental health. I am so grateful to have found someone that truly listens to me and can help me figure out the best plan of action. If you are in need of a doctor to help with your mental health, I highly recommend Casey and his staff!' },
    { name: 'James J.', date: 'a month ago', text: 'Have had some issues in my life, and love how the doctor can fully understand and get what I\'ve been through. The front desk is lovely and just as caring as Dr. Casey is as well! Extremely grateful to have found this place and be a patient here, and would suggest it to anyone else dealing with any issues!! Can\'t express how grateful I am to have found this place! Dr. Casey is an amazing person.' },
    { name: 'Ryan R.', date: 'a year ago', text: 'Casey is one of the most genuine people I have ever met. He doesn’t just sit behind a desk, reading from a textbook with a certificate on the wall; he truly connects with his patients. He understands them, relates to them, and takes their care personally. If you’re looking for someone who will listen to you, care about you, and have your best interests at heart, Casey is the person you need.' },
    { name: 'Mackenzie D.', date: 'a year ago', text: 'Casey is the best psychiatrist I’ve ever been to. He really understands patients and cares for them like no other. He gives great insightful care, and I’ve personally recommended him to many of my friends. Casey helped me find the right medicine that has been working amazing, and I can’t stress enough the quality of care at Life Balance is top-tier.' },
    { name: 'Meghan G.', date: 'a year ago', text: 'After being a patient of Casey’s for a little under a year now, I can confidently say that I would recommend him whole heartedly. He is truly one of the best healthcare providers that I have seen. If you are looking for a great person that is knowledgeable while also truly caring about your wellbeing and life journey, please go see him!' },
    { name: 'Matthew M.', date: '3 years ago', text: 'Casey Hester is a well-spoken, transparent and caring psychiatric nurse practitioner.  He has helped me through some difficult times with his advice.  He is accessible and knowledgeable and truly knows the ins and outs of his profession.  He made great recommendations and I am thriving as a result of his help and advice to me.' },
    { name: 'Shannon I.', date: 'a year ago', text: 'Casey has the ability most people in this profession do not, he can see past all your walls and find the core underneath it all. He will be patient and kind and remind you that it is ok to be a mess.  He will laugh or cry with you when you need it and he will help carry whatever load you may have crushing your world.' },
    { name: 'D', date: 'a year ago', text: 'Casey is awesome. After my first appointment, I knew I had made the right choice. He is very personable and genuinely cares about helping his patients overcome whatever challenges they are facing. If you want an honest and straight forward doctor that cares about his patients then Casey is the way to go!' },
    { name: 'Kaylen T.', date: 'a year ago', text: 'If you not made that call to get the help you NEED, please do it now. Casey has changed my entire outlook on life! Basically saved me! He is beyond a miracle for me. He takes his time with his patients and has more than enough patience to hear you out! Make the call TODAY to see him! You won’t regret it.' },
    { name: 'Triston C.', date: '2 years ago', text: 'Before my first appointment here, I haven’t had much quality mental healthcare from other clinics. I felt that I was able to freely discuss my needs and that Casey really listened and clearly explained the options we could explore. Glad to have a new provider who works with me to improve my mental health' },
    { name: 'Leah', date: '4 months ago', text: 'Casey has helped me more than anyone else has! I have spent years seeing different doctors and he is the only one that has ever helped me! He shows compassion and empathy and doesn\'t just treat you as a "number". He genuinely cares. His receptionist, Kim, is also amazing! They both feel like family!' },
    { name: 'Lisa', date: 'a year ago', text: 'Casey is thorough, transparent, very compassionate and nonjudgmental in his approach to helping patients. He makes them feel heard from the beginning and know they are getting quality care. I highly recommend Life Balance and have referred others to him to become the best version of themselves.' },
    { name: 'breanna f.', date: 'a year ago', text: 'Casey and Kim are the absolutely best! They both work so hard to provide the best care for the patients. Ive struggled for years finding a good doctor who cares about me and my mental health.  I can rest assured that I will never have to change doctors again now that I have found Life Balance.' },
    { name: 'Anabella Y.', date: '2 years ago', text: 'Dr. Casey Hester truly is the best psychiatrist I’ve seen. He cares about his patients and goes the extra mile. He as well makes sure he takes precautions with every step. He asks thorough questions and makes his patients feel heard. I recommend life balance to anyone looking for help!' },
    { name: 'Kristen T.', date: 'a year ago', text: 'Dr. Casey is amazing! He’s the first doctor that actually learned about me and diagnosed me properly so I could live the best life for myself. Everyone else I’ve been through just threw medicine at me without really trying to figure out my true diagnosis. Definitely recommend!' },
    { name: 'Jessica Q.', date: '2 years ago', text: 'Casey Hester is a caring and compassionate practitioner.  He listens and helps come up with achievable goals that ultimately lead to better mental health.  I feel more like myself than I have in a really long time and it is due to Casey Hester.' },
    { name: 'Christie B.', date: '2 years ago', text: 'It\'s so good to be able to hear the feedback from my clients after they\'ve been to see Casey at Life Balance PLLC. Not only is it good to know they\'re in good hands in terms of medication. They come back feeling heard, informed and cared about!' },
    { name: 'Jim B.', date: '3 days ago', text: 'We all need someone to listen to us from time to time. Casey is one of those who listens. There’s no judgement. No white coat condescension. No intimidation. He’s been where you are before. He understands you and shows great empathy.' },
    { name: 'Megan F.', date: '9 months ago', text: 'I am moving and have to leave Casey’s office which I am so sad about, he is the best! I’ve always been nervous going to the psychiatrist be he makes it fun and easy! I definitely recommend him to anyone looking for a psychiatrist!' },
    { name: 'Katlynn G.', date: 'a year ago', text: 'Casey is one of the best things that has happen to me. I have seen such a difference in myself since going to him and he is so helpful and always makes sure that everything is okay. If you are looking for someone he is the guy!' },
    { name: 'Natalie L.', date: 'a year ago', text: 'Dr. Hester is great! He does an outstanding job of listening to fully assess your needs! He is also great with accommodations and communication! I’ve gone to several other doctors, but Dr. Hester is by far the best I’ve had.' },
    { name: 'Katie H.', date: 'a year ago', text: 'Dr. Hester is wonderful. He is very personable and easy to talk to. He takes a genuine interest in your progress. You can tell he truly cares for his patients. His receptionist is friendly as well. I highly recommend him!' },
    { name: 'Emma C.', date: '2 years ago', text: 'Casey & all of the Life Balance staff are simply wonderful! Casey truly cares about his patients and always listens to what they have to say. I’m so thankful that I found this place and would recommend Casey to anyone!' },
    { name: 'Amanda A.', date: '2 years ago', text: 'Casey is the best!! He is soo patient with his patients and he goes above and beyond to get you feeling your absolute best!! He has truly been a blessing for me and my family!!  Highly recommend!!' },
    { name: 'Daniel F.', date: '2 years ago', text: 'Casey does a great job of making you feel comfortable and heard.  I always refer friends and family to Life Balance and will continue to do so.  I cannot speak highly enough about Casey\'s work.' },
    { name: 'Joshua M.', date: '5 months ago', text: 'Casey is the best! He is kind, caring, and listens with no judgment! His office staff is amazing - Kim is always helpful and prompt if you need questions answered! Highly recommend!!!' },
    { name: 'Amanda K.', date: 'a year ago', text: 'I can not say enough wonderful things about Casey and his staff.   He has tremendously helped me since I began seeing him. The only regret I have is that I didn’t find him years ago.' },
    { name: 'Dylan R.', date: '3 years ago', text: 'These people are some of the greatest people I know. They are good-hearted and have dedicated their lives to helping people. Smart, savvy, humble, and caring, to name a few. 5 stars!' },
    { name: 'Elizabeth C.', date: 'a year ago', text: 'Casey has improved my life so much since I’ve been a patient of his! He cares so much about his patients and I’m so grateful for how far I’ve come over the past year with his help!' },
    { name: 'Lacie F.', date: 'a year ago', text: 'When I tell you I look forward to my appointments with Casey Hester, It’s so true!! He is very personal and easy to talk too! I’m super thankful he was recommended to me!!' },
    { name: 'Catherine J.', date: 'a year ago', text: 'Amazing establishment! Everyone is so nice and Dr. Casey really takes the time to listen to you and share his knowledge. I recommend Life Balance to all of my friends!' },
    { name: 'Lacey E.', date: '3 years ago', text: 'Super warm and welcoming staff and private property. They go over and beyond to help their clients! Highly recommend to anyone needing their services' },
    { name: 'molly b.', date: '2 years ago', text: 'Casey is attentive and works hard to get you where you need to be with medication. He listens and pays attention to your needs as the patient.' },
    { name: 'Brandon B.', date: 'a year ago', text: 'Super chill experience. Very easy to talk to and really seems to care about getting people to a place where they are comfortable and happy.' },
    { name: 'Debbie P.', date: '10 months ago', text: 'My first visit. Amazing. Thank you so very much.Casey is so knowledgeable and kind. Thank you Kim for your kindness. See you next month.' },
    { name: 'Joseph C.', date: 'a year ago', text: 'Casey is thoughtful & thorough. Always makes me comfortable with his hospitality. I’ll send business his way every chance I get.' },
    { name: 'Billie C.', date: '2 months ago', text: 'I love Casey and Kim and if course his sweet momma. He cares about what u have to say and about it well being. Thank u Casey' },
    { name: 'clayton p.', date: '3 years ago', text: 'Very thorough from the first appointment, it’s nice being seen as a patient and not just a number like at other clinics.' },
    { name: 'Nat J.', date: '8 months ago', text: 'Completely changed my life and how I see mental health. Very personable and made me feel that being “not okay” is okay.' },
    { name: 'Mary C.', date: '3 years ago', text: 'Friendly staff, extremely thorough, and the quality of care is unlike any I have experienced before.' },
    { name: 'Jacob A.', date: 'a year ago', text: 'Very relatable and has helped me pick myself back up from rock bottom. Cannot recommend enough!!' },
    { name: 'Dara S.', date: '2 years ago', text: 'I had a wonderful experience and will be recommending Dr.Casey Hester to everyone!' },
    { name: 'William S.', date: 'a year ago', text: 'Casey is so personable and caring. He helps people become the best of themselves.' },
    { name: 'Candace S.', date: 'a month ago', text: 'My first experience was wonderful! I actually left out feeling hopeful.' },
    { name: 'George P.', date: '3 years ago', text: 'Casey is very professional and personable. Treats name like family.' },
    { name: 'Amanda S.', date: '10 months ago', text: 'Love this place, these guys are always so friendly and helpful.' },
    { name: 'Jon O.', date: '8 months ago', text: 'Casey is very personable and compassionate.  A good listener!' },
    { name: 'allison b.', date: 'a year ago', text: 'The best place! Everyone is so friendly and helpful!' },
    { name: 'Hillary W.', date: 'a year ago', text: '' },
    { name: 'Jon D.', date: 'a year ago', text: '' },
    { name: 'Kelly G.', date: 'a year ago', text: '' },
    { name: 'Katherine T.', date: 'a year ago', text: '' },
    { name: 'Hannah I.', date: '2 years ago', text: '' },
    { name: 'Sophie h.', date: '2 years ago', text: '' },
    { name: 'Joseph C.', date: '3 years ago', text: '' },
];

/* Google star icon */
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
                    <div className="text-center mb-14">
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-3">
                            What Our Patients Say
                        </h2>
                        <div className="flex items-center justify-center gap-1 mb-2">
                            {[...Array(5)].map((_, i) => (
                                <StarIcon key={i} />
                            ))}
                        </div>
                        <a
                            href="https://maps.app.goo.gl/qKBd2RMZGnL2wyBUA"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cream text-sm hover:text-white underline decoration-1 underline-offset-4 transition-colors"
                        >
                            5.0 &middot; {testimonials.length} reviews on Google &rarr;
                        </a>
                        <p className="text-cream/60 text-xs mt-2">
                            Seen on Google?{' '}
                            <a
                                href="https://maps.app.goo.gl/qKBd2RMZGnL2wyBUA"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline decoration-1 underline-offset-4 hover:text-cream"
                            >
                                Leave a review
                            </a>
                            .
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                        {visible.map((t) => (
                            <div
                                key={t.name + t.date}
                                className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col transition-colors duration-300 hover:bg-white/10"
                            >
                                <div className="flex gap-0.5 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <StarIcon key={i} />
                                    ))}
                                </div>

                                <p className="text-cream leading-relaxed text-sm flex-1 mb-5 whitespace-pre-line">
                                    &ldquo;{t.text}&rdquo;
                                </p>

                                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                                    <div className="w-9 h-9 rounded-full bg-gold-accent flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                                        {t.name.charAt(0)}
                                    </div>
                                    <div className="flex flex-col leading-tight">
                                        <span className="text-white font-medium text-sm">{t.name}</span>
                                        <span className="text-cream/50 text-xs">{t.date}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

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
                                    className={`w-2.5 h-2.5 rounded-full transition-[transform,background-color] duration-300 ${i === page ? 'bg-gold-accent scale-110' : 'bg-white/30 hover:bg-white/50'}`}
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
