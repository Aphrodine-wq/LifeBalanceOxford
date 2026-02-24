import React from 'react';
import ScrollReveal from './ScrollReveal';
import { usePageMeta } from '../hooks/usePageMeta';

const PrivacyPolicy: React.FC = () => {
  usePageMeta({
    title: 'Notice of Privacy Practices',
    description:
      'Notice of Privacy Practices for Life Balance, PLLC — how we use, disclose, and protect your protected health information (PHI) as required by HIPAA.',
  });

  return (
    <div className="animate-fade-in bg-dark-green">
      {/* ===== Page Header ===== */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Notice of Privacy Practices
            </h1>
            <p className="text-cream text-lg">
              Effective Date: February 16, 2026
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== Notice Body ===== */}
      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 md:p-12 space-y-10 text-cream leading-relaxed">

              {/* Preamble */}
              <div className="space-y-4">
                <p className="text-white font-semibold text-lg uppercase tracking-wide">
                  This notice describes how medical information about you may be
                  used and disclosed and how you can get access to this
                  information. Please review it carefully.
                </p>
                <p>
                  If you have any questions about this Notice, please contact our
                  Privacy Officer at{' '}
                  <a
                    href="tel:6626404004"
                    className="text-gold-accent hover:underline"
                  >
                    662-640-4004
                  </a>
                  .
                </p>
              </div>

              {/* Who Presents This Notice */}
              <div className="space-y-3">
                <h2 className="font-serif text-xl md:text-2xl font-bold text-white">
                  Who Presents This Notice
                </h2>
                <p>
                  This Notice describes the privacy practices of Life Balance,
                  PLLC, located at 405 Galleria Drive, Suite E, Oxford, MS 38655
                  ("Life Balance") and all members of its workforce. This Notice
                  applies to services provided to you at Life Balance that
                  involve the use or disclosure of your protected health
                  information ("PHI"). PHI is information about you, including
                  demographic information, that identifies you and relates to
                  your past, present, or future physical or mental health or
                  condition and related health care services.
                </p>
              </div>

              {/* Our Privacy Obligations */}
              <div className="space-y-3">
                <h2 className="font-serif text-xl md:text-2xl font-bold text-white">
                  Our Privacy Obligations
                </h2>
                <ul className="list-disc list-outside pl-5 space-y-2">
                  <li>
                    Life Balance is required by law to maintain the privacy and
                    security of your PHI and to provide you with this Notice of
                    our legal duties and privacy practices.
                  </li>
                  <li>
                    We must follow the terms of the Notice that is currently in
                    effect.
                  </li>
                  <li>
                    We use secure electronic systems that may disclose your PHI
                    electronically for treatment, payment, and health care
                    operations as described below.
                  </li>
                  <li>
                    We are required by law to notify you following a breach of
                    your unsecured PHI, consistent with HIPAA breach notification
                    rules.
                  </li>
                </ul>
              </div>

              {/* How We May Use and Disclose PHI Without Authorization */}
              <div className="space-y-3">
                <h2 className="font-serif text-xl md:text-2xl font-bold text-white">
                  How We May Use and Disclose Your PHI Without Your Written
                  Authorization
                </h2>
                <p>
                  In many situations, we must obtain your written authorization
                  before using or disclosing your PHI. However, the law allows us
                  to use and disclose your PHI without your written authorization
                  for the purposes described below.
                </p>
              </div>

              {/* Treatment */}
              <div className="space-y-3">
                <h3 className="font-serif text-lg md:text-xl font-bold text-white">
                  Treatment
                </h3>
                <p>
                  We may use and disclose your PHI to provide, coordinate, or
                  manage your health care and related services. For example, we
                  may disclose PHI to other health care providers who treat you,
                  to consult about your care, or to coordinate follow‑up services
                  after you leave our office.
                </p>
              </div>

              {/* Payment */}
              <div className="space-y-3">
                <h3 className="font-serif text-lg md:text-xl font-bold text-white">
                  Payment
                </h3>
                <p>
                  We may use and disclose your PHI as needed to obtain payment
                  for services we provide to you. For example, we may disclose
                  information to your health plan to verify coverage, obtain
                  prior authorization, determine eligibility for benefits, and
                  obtain payment for services.
                </p>
              </div>

              {/* Health Care Operations */}
              <div className="space-y-3">
                <h3 className="font-serif text-lg md:text-xl font-bold text-white">
                  Health Care Operations
                </h3>
                <p>
                  We may use and disclose your PHI to support our business
                  operations, such as quality assessment and improvement
                  activities, staff training, licensing, legal, auditing, or
                  general administrative activities. For example, we may use PHI
                  to evaluate the performance of our staff or to improve the
                  services we provide. We may also use or disclose PHI as needed
                  to maintain and secure our electronic health information
                  systems.
                </p>
              </div>

              {/* Business Associates */}
              <div className="space-y-3">
                <h3 className="font-serif text-lg md:text-xl font-bold text-white">
                  Business Associates
                </h3>
                <p>
                  We may disclose your PHI to third‑party "business associates"
                  that perform certain services for us, such as billing,
                  transcription, or data storage, provided they agree in writing
                  to protect your information in accordance with HIPAA.
                </p>
              </div>

              {/* Individuals Involved in Your Care */}
              <div className="space-y-3">
                <h3 className="font-serif text-lg md:text-xl font-bold text-white">
                  Individuals Involved in Your Care or Payment
                </h3>
                <p>
                  We may disclose limited PHI to a family member, other relative,
                  a close personal friend, or any other person you identify as
                  involved in your care or involved in paying for your care, when
                  you agree or when we can reasonably infer your agreement from
                  the circumstances. If you are unable to agree because of
                  incapacity or an emergency, we may use our professional
                  judgment to determine whether a disclosure is in your best
                  interests and will disclose only information directly relevant
                  to that person's involvement.
                </p>
              </div>

              {/* Public Health Activities */}
              <div className="space-y-3">
                <h3 className="font-serif text-lg md:text-xl font-bold text-white">
                  Public Health Activities
                </h3>
                <p>
                  We may disclose PHI to public health authorities that are
                  authorized by law to collect or receive such information for
                  the purpose of preventing or controlling disease, injury, or
                  disability, reporting births and deaths, or reporting adverse
                  events. We may also disclose PHI to a foreign government agency
                  that is working with a public health authority, if authorized
                  by law.
                </p>
              </div>

              {/* Communicable Diseases */}
              <div className="space-y-3">
                <h3 className="font-serif text-lg md:text-xl font-bold text-white">
                  Communicable Diseases
                </h3>
                <p>
                  We may disclose PHI, if authorized by law, to a person who may
                  have been exposed to a communicable disease or may otherwise be
                  at risk of contracting or spreading the disease or condition.
                </p>
              </div>

              {/* Health Oversight */}
              <div className="space-y-3">
                <h3 className="font-serif text-lg md:text-xl font-bold text-white">
                  Health Oversight Activities
                </h3>
                <p>
                  We may disclose PHI to health oversight agencies for activities
                  authorized by law, such as audits, investigations, inspections,
                  licensure, or disciplinary actions.
                </p>
              </div>

              {/* Abuse, Neglect, or Domestic Violence */}
              <div className="space-y-3">
                <h3 className="font-serif text-lg md:text-xl font-bold text-white">
                  Abuse, Neglect, or Domestic Violence
                </h3>
                <p>
                  We may disclose PHI to a government authority that is
                  authorized by law to receive reports of abuse, neglect, or
                  domestic violence if we reasonably believe you are a victim, as
                  required or permitted by law.
                </p>
              </div>

              {/* FDA */}
              <div className="space-y-3">
                <h3 className="font-serif text-lg md:text-xl font-bold text-white">
                  Food and Drug Administration (FDA) Purposes
                </h3>
                <p>
                  We may disclose PHI to persons or entities subject to FDA
                  oversight to report adverse events; product defects or
                  problems; biologic product deviations; to track products;
                  enable product recalls; make repairs or replacements; or
                  conduct post‑marketing surveillance.
                </p>
              </div>

              {/* Legal Proceedings */}
              <div className="space-y-3">
                <h3 className="font-serif text-lg md:text-xl font-bold text-white">
                  Legal Proceedings
                </h3>
                <p>
                  We may disclose PHI in response to a court or administrative
                  order, and in certain circumstances in response to a subpoena,
                  discovery request, or other lawful process, to the extent such
                  disclosure is authorized by law.
                </p>
              </div>

              {/* Law Enforcement */}
              <div className="space-y-3">
                <h3 className="font-serif text-lg md:text-xl font-bold text-white">
                  Law Enforcement
                </h3>
                <p>
                  We may disclose PHI for certain law enforcement purposes, such
                  as in response to legal process, to help identify or locate a
                  suspect or missing person, about the victim of a crime in
                  limited circumstances, about a death that may be the result of
                  criminal conduct, about criminal conduct occurring on our
                  premises, or in emergencies when necessary to report a crime.
                </p>
              </div>

              {/* Coroners, Medical Examiners, Funeral Directors, Organ Donation */}
              <div className="space-y-3">
                <h3 className="font-serif text-lg md:text-xl font-bold text-white">
                  Coroners, Medical Examiners, Funeral Directors, and Organ
                  Donation
                </h3>
                <p>
                  We may disclose PHI to coroners or medical examiners for
                  identification, determination of cause of death, or other
                  duties authorized by law, and to funeral directors as necessary
                  to carry out their duties. We may also disclose PHI for organ,
                  eye, or tissue donation purposes as permitted by law.
                </p>
              </div>

              {/* Research */}
              <div className="space-y-3">
                <h3 className="font-serif text-lg md:text-xl font-bold text-white">
                  Research
                </h3>
                <p>
                  We may use or disclose PHI for research when an institutional
                  review board or privacy board has reviewed and approved the
                  research and established protocols to protect your privacy, or
                  when you have given your authorization.
                </p>
              </div>

              {/* Serious Threat */}
              <div className="space-y-3">
                <h3 className="font-serif text-lg md:text-xl font-bold text-white">
                  To Avert a Serious Threat to Health or Safety
                </h3>
                <p>
                  We may use or disclose PHI when necessary to prevent or lessen
                  a serious and reasonably foreseeable threat to the health or
                  safety of a person or the public, consistent with applicable
                  law and ethical standards.
                </p>
              </div>

              {/* Military and National Security */}
              <div className="space-y-3">
                <h3 className="font-serif text-lg md:text-xl font-bold text-white">
                  Military and National Security
                </h3>
                <p>
                  If you are a member of the Armed Forces, we may disclose PHI as
                  required by military command authorities. We may also disclose
                  PHI to authorized federal officials for national security,
                  intelligence, and protective services activities.
                </p>
              </div>

              {/* Inmates */}
              <div className="space-y-3">
                <h3 className="font-serif text-lg md:text-xl font-bold text-white">
                  Inmates and Law Enforcement Custody
                </h3>
                <p>
                  If you are an inmate of a correctional institution or are in
                  the custody of law enforcement, we may disclose PHI to the
                  institution or law enforcement when necessary for your health
                  and safety, the health and safety of others, or the
                  institution's administration and safety.
                </p>
              </div>

              {/* Workers' Compensation */}
              <div className="space-y-3">
                <h3 className="font-serif text-lg md:text-xl font-bold text-white">
                  Workers' Compensation
                </h3>
                <p>
                  We may disclose PHI as necessary to comply with workers'
                  compensation or similar programs that provide benefits for
                  work‑related injuries or illnesses.
                </p>
              </div>

              {/* Emergencies */}
              <div className="space-y-3">
                <h3 className="font-serif text-lg md:text-xl font-bold text-white">
                  Emergencies
                </h3>
                <p>
                  We may use or disclose PHI in an emergency treatment situation,
                  consistent with applicable law. We will seek to obtain your
                  acknowledgment of receipt of this Notice as soon as reasonably
                  practicable after treatment is provided.
                </p>
              </div>

              {/* Fundraising */}
              <div className="space-y-3">
                <h3 className="font-serif text-lg md:text-xl font-bold text-white">
                  Fundraising
                </h3>
                <p>
                  We may use or disclose limited information (such as your name,
                  contact information, and dates of service) to contact you for
                  fundraising activities that support Life Balance. You have the
                  right to opt out of receiving fundraising communications, and
                  choosing not to receive such communications will not affect
                  your treatment or payment.
                </p>
              </div>

              {/* Required by Law */}
              <div className="space-y-3">
                <h3 className="font-serif text-lg md:text-xl font-bold text-white">
                  Required by Law and Government Oversight
                </h3>
                <p>
                  We must disclose PHI to you upon your request, as described
                  below, and to the U.S. Department of Health and Human Services
                  when requested to investigate or determine our compliance with
                  HIPAA. We may also use or disclose PHI when required by other
                  laws.
                </p>
              </div>

              {/* Appointment Reminders */}
              <div className="space-y-3">
                <h3 className="font-serif text-lg md:text-xl font-bold text-white">
                  Appointment Reminders and Health‑Related Communications
                </h3>
                <p>
                  We may use and disclose PHI to contact you with appointment
                  reminders or with information about treatment alternatives or
                  health‑related benefits and services that may be of interest to
                  you. If you are not home, we may leave a limited message on
                  your voicemail or with a person who answers your phone, unless
                  you request a different communication method. If you opt in to
                  receive SMS/text messages, we will not share SMS content or
                  phone numbers with any third party except as required by law or
                  necessary to send the messages securely, and you may opt out at
                  any time.
                </p>
              </div>

              {/* Divider */}
              <div className="border-t border-white/20 pt-8">
                <h2 className="font-serif text-xl md:text-2xl font-bold text-white mb-4">
                  Uses and Disclosures Requiring Your Written Authorization
                </h2>
                <p className="mb-3">
                  For any purpose not described above, we will use or disclose
                  your PHI only with your written authorization. This includes,
                  for example:
                </p>
                <ul className="list-disc list-outside pl-5 space-y-2">
                  <li>
                    Most uses and disclosures of psychotherapy notes.
                  </li>
                  <li>
                    Uses and disclosures of PHI for marketing that are not
                    otherwise permitted by law.
                  </li>
                  <li>Any sale of your PHI, as defined by HIPAA.</li>
                </ul>
                <p className="mt-3">
                  You may revoke your authorization at any time by submitting a
                  written revocation to Life Balance, except to the extent we
                  have already relied on it. We will not condition your
                  treatment, payment, enrollment, or eligibility for benefits on
                  providing an authorization, except as allowed by law.
                </p>
              </div>

              {/* Your Rights */}
              <div className="border-t border-white/20 pt-8 space-y-6">
                <h2 className="font-serif text-xl md:text-2xl font-bold text-white">
                  Your Rights Regarding Your PHI
                </h2>
                <p>
                  You have the following rights concerning your PHI.
                </p>

                <div className="space-y-3">
                  <h3 className="font-serif text-lg font-bold text-white">
                    Right to Request Restrictions
                  </h3>
                  <p>
                    You may request restrictions on how we use and disclose your
                    PHI for treatment, payment, or health care operations, and to
                    individuals involved in your care or payment. We are not
                    required to agree to most requested restrictions, but we must
                    agree not to disclose PHI to a health plan about a specific
                    service or item if the disclosure is for payment or health
                    care operations and you have paid in full, out of pocket, for
                    that service.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-serif text-lg font-bold text-white">
                    Right to Request Confidential Communications
                  </h3>
                  <p>
                    You may request that we communicate with you about your PHI
                    in a certain way or at a certain location (for example, only
                    at your work address or through a particular phone number).
                    We will accommodate reasonable requests.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-serif text-lg font-bold text-white">
                    Right to Access and Obtain Copies
                  </h3>
                  <p>
                    You have the right to inspect and obtain a copy of PHI that
                    we maintain about you in a designated record set, including
                    medical and billing records, with certain limited exceptions
                    as allowed by law. If your PHI is maintained electronically,
                    you may request an electronic copy, and we will provide it in
                    the requested format if readily producible, or in a readable
                    alternative format if not. We may charge a reasonable,
                    cost‑based fee as permitted by law.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-serif text-lg font-bold text-white">
                    Right to Request Amendment
                  </h3>
                  <p>
                    If you believe that PHI we have about you is incorrect or
                    incomplete, you may request that we amend it. We may deny
                    your request in certain circumstances, but if we deny it, we
                    will explain why in writing and inform you of your rights.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-serif text-lg font-bold text-white">
                    Right to an Accounting of Disclosures
                  </h3>
                  <p>
                    You may request an accounting of certain disclosures of your
                    PHI made by us during the six years prior to your request,
                    excluding disclosures for treatment, payment, health care
                    operations, and certain other disclosures as allowed by law.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-serif text-lg font-bold text-white">
                    Right to a Paper Copy of This Notice
                  </h3>
                  <p>
                    You may request a paper copy of this Notice at any time, even
                    if you have agreed to receive it electronically.
                  </p>
                </div>
              </div>

              {/* How to Exercise Your Rights */}
              <div className="border-t border-white/20 pt-8 space-y-4">
                <h2 className="font-serif text-xl md:text-2xl font-bold text-white">
                  How to Exercise Your Rights
                </h2>
                <p>
                  You may exercise your rights by submitting a written request
                  (except for requesting a paper copy of this Notice, which may
                  be made orally or in writing) to our Privacy Officer at:
                </p>
                <address className="not-italic bg-white/5 rounded-lg p-5 border border-white/10 space-y-1 text-white">
                  <strong>Privacy Officer</strong>
                  <br />
                  Life Balance, PLLC
                  <br />
                  405 Galleria Drive, Suite E
                  <br />
                  Oxford, MS 38655
                  <br />
                  Phone:{' '}
                  <a
                    href="tel:6626404004"
                    className="text-gold-accent hover:underline"
                  >
                    662-640-4004
                  </a>
                </address>
              </div>

              {/* Changes to This Notice */}
              <div className="border-t border-white/20 pt-8 space-y-3">
                <h2 className="font-serif text-xl md:text-2xl font-bold text-white">
                  Changes to This Notice
                </h2>
                <p>
                  We reserve the right to change the terms of this Notice at any
                  time, and the revised Notice will apply to all PHI we maintain,
                  including PHI created or received before the change. If we
                  change this Notice, we will post the updated version in our
                  office, on our website at{' '}
                  <a
                    href="https://www.lifebalanceoxford.com"
                    className="text-gold-accent hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.lifebalanceoxford.com
                  </a>
                  , and make it available upon request.
                </p>
              </div>

              {/* Complaints and Questions */}
              <div className="border-t border-white/20 pt-8 space-y-3">
                <h2 className="font-serif text-xl md:text-2xl font-bold text-white">
                  Complaints and Questions
                </h2>
                <p>
                  If you have questions about this Notice or believe your privacy
                  rights have been violated, you may contact:
                </p>
                <address className="not-italic bg-white/5 rounded-lg p-5 border border-white/10 space-y-1 text-white">
                  <strong>Privacy Officer</strong>
                  <br />
                  Life Balance, PLLC
                  <br />
                  405 Galleria Drive, Suite E
                  <br />
                  Oxford, MS 38655
                  <br />
                  Phone:{' '}
                  <a
                    href="tel:6626404004"
                    className="text-gold-accent hover:underline"
                  >
                    662-640-4004
                  </a>
                </address>
                <p>
                  You may also file a complaint with the U.S. Department of
                  Health and Human Services, Office for Civil Rights, by visiting{' '}
                  <a
                    href="https://www.hhs.gov/ocr/privacy/hipaa/complaints/"
                    className="text-gold-accent hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.hhs.gov/ocr
                  </a>{' '}
                  or calling 1-877-696-6775. We will not retaliate against you
                  for filing a complaint.
                </p>
              </div>

            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
