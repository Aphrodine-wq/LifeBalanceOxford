import React from 'react';
import { usePageMeta } from '../hooks/usePageMeta';

const PrivacyPolicy: React.FC = () => {
    usePageMeta({
        title: 'Privacy Policy & Notice of Privacy Practices',
        description:
            'Privacy policy for lifebalanceoxford.com and the HIPAA Notice of Privacy Practices for Life Balance, PLLC — what we collect, how we use it, your rights, and who to contact.',
        path: '/privacy',
        breadcrumbs: [
            { name: 'Home', path: '/' },
            { name: 'Privacy', path: '/privacy' },
        ],
    });

    return (
        <div className="bg-white min-h-screen animate-fade-in">
            {/* Opener — matches service page style */}
            <section className="bg-dark-green pt-20 pb-20">
                <div className="max-w-4xl mx-auto px-6">
                    <p className="text-sm tracking-widest uppercase text-gold-accent mb-6">
                        Privacy &nbsp;·&nbsp; Your Information
                    </p>
                    <h1 className="font-serif text-[2.4rem] md:text-[3rem] leading-[1.08] font-semibold text-white mb-8 max-w-3xl">
                        Privacy Policy &{' '}
                        <span className="text-gold-accent italic font-normal">
                            Notice of Privacy Practices
                        </span>
                    </h1>
                    <p className="text-xl text-cream max-w-2xl leading-relaxed">
                        How we handle your information — on this website, in our administrative systems, and in
                        clinical care.
                    </p>
                    <p className="text-cream/60 text-sm mt-6">Effective: April 20, 2026</p>
                </div>
            </section>

            {/* PART 1 — Website Privacy Policy */}
            <section className="py-20 bg-white">
                <div className="max-w-3xl mx-auto px-6 space-y-12">
                    <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-3">Part 1</p>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mb-5">
                            Website Privacy Policy
                        </h2>
                        <p className="text-slate-700 leading-relaxed">
                            This section covers how <strong>lifebalanceoxford.com</strong> handles information from
                            visitors and patients who interact with the website. It is written in plain language. For
                            the HIPAA notice that covers your clinical record, see Part 2.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">Who Operates This Site</h3>
                        <p className="text-slate-700 leading-relaxed">
                            The website is owned by <strong>Life Balance, PLLC</strong>, located at 405 Galleria
                            Drive, Suite E, Oxford, MS 38655. It is built and maintained by{' '}
                            <strong>Strata Software Group, LLC</strong>, which acts as a HIPAA Business Associate of
                            Life Balance under a signed agreement.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">What We Collect</h3>
                        <ul className="space-y-4 text-slate-700 leading-relaxed">
                            <li>
                                <strong className="text-slate-900">Anonymous analytics.</strong> We use Vercel
                                Analytics to count page views, referrers, country, and device type. It does not set
                                cookies, does not collect IP addresses, and cannot identify individual visitors.
                            </li>
                            <li>
                                <strong className="text-slate-900">Appointment requests.</strong> When you click
                                "Request Appointment," you are sent to our electronic health record's patient portal
                                (Valant Medical Solutions). Any information you enter there is governed by Valant's
                                privacy policy and by Part 2 of this notice.
                            </li>
                            <li>
                                <strong className="text-slate-900">Review requests.</strong> If you give us your first
                                name, phone number, or email address at a visit and consent to receive a follow-up
                                message, we store that record in a secure database (Google Firestore) and use it once
                                to send you a single post-visit text and/or email inviting you to leave a Google
                                review. Consent is recorded separately for SMS and email. Records are automatically
                                deleted after 30 days.
                            </li>
                            <li>
                                <strong className="text-slate-900">Contact messages.</strong> If you send us a message
                                through the site, your name and message are delivered to our Privacy Officer so we can
                                reply.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">How We Use It</h3>
                        <ul className="space-y-2 text-slate-700 leading-relaxed list-disc pl-5">
                            <li>Analytics — to understand which pages are useful.</li>
                            <li>Appointment requests — handled inside Valant, our HIPAA-compliant EHR.</li>
                            <li>Review requests — to send one post-visit message, then the record expires.</li>
                            <li>Contact messages — to reply to your question.</li>
                        </ul>
                        <p className="text-slate-700 leading-relaxed mt-4">
                            We do not sell your information, we do not share it with advertisers, and we do not use it
                            for any marketing beyond the review request you've explicitly consented to.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">
                            Vendors That Process Data on Our Behalf
                        </h3>
                        <p className="text-slate-700 leading-relaxed mb-3">
                            Each vendor below has signed (or will sign before patient data is transmitted) a HIPAA
                            Business Associate Agreement where applicable:
                        </p>
                        <ul className="space-y-2 text-slate-700 leading-relaxed list-disc pl-5">
                            <li>
                                <strong>Strata Software Group, LLC</strong> — website developer and operator
                            </li>
                            <li>
                                <strong>Vercel, Inc.</strong> — website hosting and anonymous analytics
                            </li>
                            <li>
                                <strong>Google LLC (Firestore)</strong> — secure storage of review-request records
                            </li>
                            <li>
                                <strong>Twilio, Inc.</strong> — SMS delivery for review requests
                            </li>
                            <li>
                                <strong>Email service provider</strong> — email delivery for review requests (specific
                                vendor disclosed on request)
                            </li>
                            <li>
                                <strong>Valant Medical Solutions, Inc.</strong> — electronic health record and patient
                                portal for clinical services
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">Your Choices</h3>
                        <ul className="space-y-4 text-slate-700 leading-relaxed">
                            <li>
                                <strong className="text-slate-900">Stop SMS review requests.</strong> Reply{' '}
                                <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">STOP</code> to
                                any text. You will be opted out immediately.
                            </li>
                            <li>
                                <strong className="text-slate-900">Stop email review requests.</strong> Use the
                                unsubscribe link in any email, or reply asking to be removed.
                            </li>
                            <li>
                                <strong className="text-slate-900">Delete your contact record.</strong> Call or email
                                the Privacy Officer (below). We will remove you from our review queue.
                            </li>
                            <li>
                                <strong className="text-slate-900">Access your clinical record.</strong> See Part 2
                                for your HIPAA rights to inspect, copy, amend, or receive an accounting of your PHI.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">Cookies and Tracking</h3>
                        <p className="text-slate-700 leading-relaxed">
                            This site does not use advertising cookies or cross-site tracking pixels. Our analytics
                            tool is cookie-less. If you log in to the administrative console, we use one session
                            cookie to keep you logged in; that cookie is cleared when you log out.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">Children Under 13</h3>
                        <p className="text-slate-700 leading-relaxed">
                            Our practice serves patients ages 12 and older. Patients under 18 should use this website
                            only with a parent or guardian's involvement. We do not knowingly collect personal
                            information from children under 13 without parental consent.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">Security</h3>
                        <p className="text-slate-700 leading-relaxed">
                            All data transmitted to and from this site is encrypted in transit using TLS 1.2 or
                            higher. Review-request records in Firestore and clinical records in Valant are encrypted
                            at rest. Access to administrative systems requires authenticated login. Security incidents
                            are investigated and addressed promptly, and material breaches of unsecured PHI are
                            reported per HIPAA breach notification rules.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">Changes to This Policy</h3>
                        <p className="text-slate-700 leading-relaxed">
                            If we make material changes to this policy, we will update the effective date above and
                            post the new version on this page. For significant changes, we may also post notice in
                            our office.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">Questions</h3>
                        <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                            <p className="font-semibold text-slate-900">Privacy Officer</p>
                            <p className="text-slate-700">
                                Life Balance, PLLC<br />
                                405 Galleria Drive, Suite E<br />
                                Oxford, MS 38655
                            </p>
                            <p className="text-slate-700 mt-2">
                                Phone:{' '}
                                <a href="tel:6626404004" className="text-slate-900 underline">
                                    (662) 640-4004
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="max-w-3xl mx-auto px-6">
                <hr className="border-slate-200" />
            </div>

            {/* PART 2 — HIPAA Notice of Privacy Practices */}
            <section className="py-20 bg-white">
                <div className="max-w-3xl mx-auto px-6 space-y-10">
                    <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-3">Part 2</p>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mb-5">
                            Notice of Privacy Practices
                        </h2>
                        <p className="text-slate-900 font-semibold uppercase tracking-wide text-sm mb-4">
                            This notice describes how medical information about you may be used and disclosed and how
                            you can get access to this information. Please review it carefully.
                        </p>
                        <p className="text-slate-700 leading-relaxed">
                            If you have any questions about this Notice, please contact our Privacy Officer at{' '}
                            <a href="tel:6626404004" className="text-slate-900 underline">
                                (662) 640-4004
                            </a>
                            .
                        </p>
                    </div>

                    <div>
                        <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">Who Presents This Notice</h3>
                        <p className="text-slate-700 leading-relaxed">
                            This Notice describes the privacy practices of <strong>Life Balance, PLLC</strong>, 405
                            Galleria Drive, Suite E, Oxford, MS 38655 ("Life Balance") and all members of its
                            workforce. It applies to services provided to you at Life Balance that involve the use or
                            disclosure of your <strong>Protected Health Information (PHI)</strong> — information that
                            identifies you and relates to your past, present, or future physical or mental health or
                            related health care services.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">Our Privacy Obligations</h3>
                        <ul className="space-y-2 text-slate-700 leading-relaxed list-disc pl-5">
                            <li>
                                Life Balance is required by law to maintain the privacy and security of your PHI and
                                to provide you with this Notice of our legal duties and privacy practices.
                            </li>
                            <li>We must follow the terms of the Notice currently in effect.</li>
                            <li>
                                We use secure electronic systems that may transmit your PHI electronically for
                                treatment, payment, and health care operations as described below.
                            </li>
                            <li>
                                We are required by law to notify you following a breach of your unsecured PHI,
                                consistent with HIPAA breach notification rules.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">
                            Uses and Disclosures Without Your Written Authorization
                        </h3>
                        <p className="text-slate-700 leading-relaxed mb-4">
                            The law permits us to use and disclose your PHI without your written authorization for
                            the following purposes:
                        </p>

                        <div className="space-y-5 text-slate-700 leading-relaxed">
                            <div>
                                <p className="font-semibold text-slate-900">Treatment.</p>
                                <p>
                                    To provide, coordinate, or manage your health care — including disclosures to
                                    other providers who treat you or to coordinate follow-up services.
                                </p>
                            </div>
                            <div>
                                <p className="font-semibold text-slate-900">Payment.</p>
                                <p>
                                    To obtain payment for services — for example, disclosures to your health plan for
                                    eligibility, prior authorization, or claims processing.
                                </p>
                            </div>
                            <div>
                                <p className="font-semibold text-slate-900">Health Care Operations.</p>
                                <p>
                                    For quality assessment, staff training, licensing, legal, auditing, and general
                                    administrative activities, and to maintain and secure our electronic health
                                    systems.
                                </p>
                            </div>
                            <div>
                                <p className="font-semibold text-slate-900">Business Associates.</p>
                                <p>
                                    To third parties that perform services on our behalf (such as billing, data
                                    storage, or secure messaging), provided they have signed a HIPAA Business
                                    Associate Agreement. See Part 1 for the current list.
                                </p>
                            </div>
                            <div>
                                <p className="font-semibold text-slate-900">
                                    Individuals Involved in Your Care or Payment.
                                </p>
                                <p>
                                    Limited PHI to a family member, friend, or other person you identify as involved,
                                    when you agree or we can reasonably infer your agreement. In an emergency, we may
                                    use professional judgment consistent with your best interests.
                                </p>
                            </div>
                            <div>
                                <p className="font-semibold text-slate-900">
                                    Appointment Reminders, Treatment Alternatives, and Review Requests.
                                </p>
                                <p>
                                    To contact you with appointment reminders, information about treatment
                                    alternatives or health-related benefits, and — only if you have consented — a
                                    post-visit invitation to leave a Google review. We will not share your phone
                                    number or email with any third party except as necessary to deliver the message
                                    securely or as required by law. You may opt out of SMS at any time by replying{' '}
                                    <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">STOP</code>,
                                    and out of email via the unsubscribe link.
                                </p>
                            </div>
                            <div>
                                <p className="font-semibold text-slate-900">Required or Permitted by Law.</p>
                                <p>
                                    For public health activities; reporting of communicable diseases; health oversight
                                    audits and investigations; reports of abuse, neglect, or domestic violence; FDA
                                    adverse-event reporting; court or administrative orders and lawful subpoenas; law
                                    enforcement purposes authorized by law; coroner, medical examiner, or funeral
                                    director duties; organ or tissue donation; approved research; to avert a serious
                                    threat to health or safety; military and national security activities; correctional
                                    custody; workers' compensation programs; and other uses required by law.
                                </p>
                            </div>
                            <div>
                                <p className="font-semibold text-slate-900">Emergencies.</p>
                                <p>
                                    In an emergency treatment situation, consistent with applicable law. We will seek
                                    your acknowledgment of this Notice as soon as reasonably practicable.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">
                            Uses and Disclosures Requiring Your Written Authorization
                        </h3>
                        <p className="text-slate-700 leading-relaxed mb-3">
                            For any purpose not listed above, we will use or disclose your PHI only with your written
                            authorization. This includes:
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-slate-700 leading-relaxed">
                            <li>Most uses and disclosures of psychotherapy notes</li>
                            <li>
                                Uses and disclosures of PHI for marketing that are not otherwise permitted by law
                            </li>
                            <li>Any sale of your PHI as defined by HIPAA</li>
                        </ul>
                        <p className="text-slate-700 leading-relaxed mt-3">
                            You may revoke your authorization at any time in writing, except to the extent we have
                            already relied on it. We will not condition your treatment, payment, enrollment, or
                            eligibility for benefits on providing an authorization, except as allowed by law.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">
                            Your Rights Regarding Your PHI
                        </h3>
                        <div className="space-y-5 text-slate-700 leading-relaxed">
                            <div>
                                <p className="font-semibold text-slate-900">Request Restrictions.</p>
                                <p>
                                    You may request restrictions on how we use or disclose your PHI for treatment,
                                    payment, or operations. We are not required to agree to most restrictions, but we
                                    must agree not to disclose PHI to a health plan for payment or operations if you
                                    have paid in full out of pocket for that service.
                                </p>
                            </div>
                            <div>
                                <p className="font-semibold text-slate-900">Confidential Communications.</p>
                                <p>
                                    You may request that we communicate with you a certain way or at a certain
                                    location (for example, a specific phone number). We will accommodate reasonable
                                    requests.
                                </p>
                            </div>
                            <div>
                                <p className="font-semibold text-slate-900">Access and Copies.</p>
                                <p>
                                    You may inspect and obtain a copy of PHI in your designated record set, including
                                    electronic copies if maintained electronically. A reasonable, cost-based fee may
                                    apply as permitted by law.
                                </p>
                            </div>
                            <div>
                                <p className="font-semibold text-slate-900">Amendment.</p>
                                <p>
                                    If you believe PHI we have about you is incorrect or incomplete, you may request
                                    an amendment. If we deny it, we will explain why in writing and inform you of your
                                    rights.
                                </p>
                            </div>
                            <div>
                                <p className="font-semibold text-slate-900">Accounting of Disclosures.</p>
                                <p>
                                    You may request an accounting of certain disclosures made in the six years prior
                                    to your request, excluding disclosures for treatment, payment, or operations and
                                    certain other categories.
                                </p>
                            </div>
                            <div>
                                <p className="font-semibold text-slate-900">Paper Copy.</p>
                                <p>
                                    You may request a paper copy of this Notice at any time, even if you have agreed
                                    to receive it electronically.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">How to Exercise Your Rights</h3>
                        <p className="text-slate-700 leading-relaxed mb-4">
                            Submit a written request (except for requesting a paper copy, which may be oral or
                            written) to our Privacy Officer:
                        </p>
                        <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                            <p className="font-semibold text-slate-900">Privacy Officer</p>
                            <p className="text-slate-700">
                                Life Balance, PLLC<br />
                                405 Galleria Drive, Suite E<br />
                                Oxford, MS 38655
                            </p>
                            <p className="text-slate-700 mt-2">
                                Phone:{' '}
                                <a href="tel:6626404004" className="text-slate-900 underline">
                                    (662) 640-4004
                                </a>
                            </p>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">Changes to This Notice</h3>
                        <p className="text-slate-700 leading-relaxed">
                            We reserve the right to change the terms of this Notice at any time. The revised Notice
                            will apply to all PHI we maintain, including PHI created or received before the change.
                            The updated version will be posted in our office and on this website at{' '}
                            <a
                                href="https://www.lifebalanceoxford.com"
                                className="text-slate-900 underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                www.lifebalanceoxford.com
                            </a>
                            , and will be available on request.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">Complaints</h3>
                        <p className="text-slate-700 leading-relaxed mb-4">
                            If you believe your privacy rights have been violated, contact our Privacy Officer above.
                            You may also file a complaint with the U.S. Department of Health and Human Services,
                            Office for Civil Rights, at{' '}
                            <a
                                href="https://www.hhs.gov/ocr/privacy/hipaa/complaints/"
                                className="text-slate-900 underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                hhs.gov/ocr
                            </a>{' '}
                            or by calling 1-877-696-6775. We will not retaliate against you for filing a complaint.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
