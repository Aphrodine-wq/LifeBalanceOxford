// Shared page metadata — single source of truth for:
//   - runtime usePageMeta hook (React)
//   - build-time prerender script (scripts/prerender.mjs)
//
// Keys are canonical paths. Every sitemap URL must have an entry.

export const SITE_URL = 'https://lifebalanceoxford.com';
export const TITLE_SUFFIX = ' | Life Balance Psychiatric Services';

const caseyRef = { '@id': `${SITE_URL}/#casey-hester` };
const businessRef = { '@id': `${SITE_URL}/#business` };
const websiteRef = { '@id': `${SITE_URL}/#website` };

const medicalAudience = (geo = 'North Mississippi') => ({
    '@type': 'MedicalAudience',
    audienceType: 'Patient',
    geographicArea: { '@type': 'AdministrativeArea', name: geo },
});

const speakable = {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2'],
};

export const pageMeta = {
    '/addiction-treatment-oxford-ms': {
        title: 'Addiction Treatment in Oxford, MS',
        description:
            'Addiction treatment in Oxford, Mississippi for opioid use disorder, alcohol use disorder, and substance recovery. Medication-assisted treatment, counseling, and ongoing care from a board-certified psychiatric provider. Call (662) 640-4004.',
        path: '/addiction-treatment-oxford-ms',
        keywords: [
            'addiction treatment Oxford MS',
            'opioid use disorder Mississippi',
            'alcohol use disorder Oxford',
            'substance abuse treatment Oxford Mississippi',
            'MAT program North Mississippi',
            'outpatient addiction treatment Oxford',
        ],
        breadcrumbs: [
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: 'Addiction Treatment', path: '/addiction-treatment-oxford-ms' },
        ],
        jsonLd: {
            '@context': 'https://schema.org',
            '@type': 'MedicalWebPage',
            '@id': `${SITE_URL}/addiction-treatment-oxford-ms#page`,
            name: 'Addiction Treatment in Oxford, MS',
            url: `${SITE_URL}/addiction-treatment-oxford-ms`,
            inLanguage: 'en-US',
            isPartOf: websiteRef,
            about: [
                { '@type': 'MedicalCondition', name: 'Opioid Use Disorder' },
                { '@type': 'MedicalCondition', name: 'Alcohol Use Disorder' },
                { '@type': 'MedicalCondition', name: 'Substance Use Disorder' },
            ],
            audience: medicalAudience(),
            author: caseyRef,
            reviewedBy: caseyRef,
            publisher: businessRef,
            lastReviewed: '2026-04-20',
            dateModified: '2026-04-20',
            speakable,
        },
    },

    '/suboxone-doctor-oxford-ms': {
        title: 'Suboxone Doctor in Oxford, MS',
        description:
            'Suboxone and Sublocade treatment for opioid use disorder in Oxford, Mississippi. Medication-assisted treatment (MAT) and buprenorphine prescribing from a board-certified psychiatric provider. Call (662) 640-4004.',
        path: '/suboxone-doctor-oxford-ms',
        keywords: [
            'Suboxone doctor Oxford MS',
            'Sublocade Oxford Mississippi',
            'buprenorphine prescriber Oxford',
            'Suboxone clinic North Mississippi',
            'opioid treatment Oxford MS',
        ],
        breadcrumbs: [
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: 'Addiction Treatment', path: '/addiction-treatment-oxford-ms' },
            { name: 'Suboxone Treatment', path: '/suboxone-doctor-oxford-ms' },
        ],
        jsonLd: {
            '@context': 'https://schema.org',
            '@type': 'MedicalWebPage',
            '@id': `${SITE_URL}/suboxone-doctor-oxford-ms#page`,
            name: 'Suboxone Doctor in Oxford, MS',
            url: `${SITE_URL}/suboxone-doctor-oxford-ms`,
            inLanguage: 'en-US',
            isPartOf: websiteRef,
            about: [
                { '@type': 'Drug', name: 'Suboxone', alternateName: 'Buprenorphine/Naloxone' },
                { '@type': 'Drug', name: 'Sublocade', alternateName: 'Buprenorphine Extended-Release' },
                { '@type': 'MedicalCondition', name: 'Opioid Use Disorder' },
                { '@type': 'MedicalTherapy', name: 'Medication-Assisted Treatment', alternateName: 'MAT' },
            ],
            audience: medicalAudience(),
            author: caseyRef,
            reviewedBy: caseyRef,
            publisher: businessRef,
            lastReviewed: '2026-04-20',
            dateModified: '2026-04-20',
            speakable,
        },
    },

    '/mat-program': {
        title: 'Medication-Assisted Treatment (MAT) Program',
        description:
            'Medication-Assisted Treatment for opioid dependence in Oxford, MS. Suboxone and Sublocade combined with counseling, medication management for co-occurring conditions, and long-term recovery support. Private, respectful, judgment-free. Call (662) 640-4004.',
        path: '/mat-program',
        keywords: [
            'MAT program Oxford MS',
            'medication-assisted treatment Mississippi',
            'MAT clinic North Mississippi',
            'opioid recovery Oxford',
            'outpatient MAT program Mississippi',
        ],
        breadcrumbs: [
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: 'Addiction Treatment', path: '/addiction-treatment-oxford-ms' },
            { name: 'MAT Program', path: '/mat-program' },
        ],
        jsonLd: {
            '@context': 'https://schema.org',
            '@type': 'MedicalWebPage',
            '@id': `${SITE_URL}/mat-program#page`,
            name: 'Medication-Assisted Treatment (MAT) Program',
            url: `${SITE_URL}/mat-program`,
            inLanguage: 'en-US',
            isPartOf: websiteRef,
            about: [
                { '@type': 'MedicalTherapy', name: 'Medication-Assisted Treatment', alternateName: 'MAT' },
                { '@type': 'MedicalCondition', name: 'Opioid Use Disorder' },
                { '@type': 'Drug', name: 'Buprenorphine' },
            ],
            audience: medicalAudience(),
            author: caseyRef,
            reviewedBy: caseyRef,
            publisher: businessRef,
            lastReviewed: '2026-04-20',
            dateModified: '2026-04-20',
            speakable,
        },
    },

    // Lightweight entries — just title/description for prerender so each
    // sitemap URL gets unique crawler-visible meta. Runtime meta continues
    // to come from each component's usePageMeta call for deeper content.
    '/services': {
        title: 'Services',
        description:
            'Psychiatric evaluations, medication management, GeneSight testing, and medication-assisted treatment (MAT) in Oxford, MS. Accepting new patients ages 12 and up.',
        path: '/services',
    },
    '/team': {
        title: 'Our Team',
        description:
            'Meet Casey Hester, PMHNP-BC — board-certified psychiatric nurse practitioner in Oxford, MS — and office manager Kim Underwood.',
        path: '/team',
    },
    '/contact': {
        title: 'Contact',
        description:
            'Call (662) 640-4004 or visit 405 Galleria Drive, Suite E, Oxford, MS 38655. Accepting new patients.',
        path: '/contact',
    },
    '/referrals': {
        title: 'Provider Referrals',
        description:
            'Refer a patient to Life Balance Psychiatric Services in Oxford, MS. Referral form, fax, and direct contact.',
        path: '/referrals',
    },
    '/privacy': {
        title: 'Privacy Policy & Notice of Privacy Practices',
        description:
            'Privacy policy for lifebalanceoxford.com and the HIPAA Notice of Privacy Practices for Life Balance, PLLC — what we collect, how we use it, your rights, and who to contact.',
        path: '/privacy',
    },
};
