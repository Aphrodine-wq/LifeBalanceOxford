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

// Generate a town landing page meta entry — Suboxone-led targeting.
// Returns an object with a single keyed entry for the route path.
function buildTownMeta(slug, name, county) {
    const path = `/suboxone-doctor-${slug}-ms`;
    return {
        [path]: {
            title: `Suboxone Doctor in ${name}, MS`,
            description:
                `Suboxone & Sublocade treatment for ${name}, Mississippi residents — medication-assisted treatment (MAT) for opioid use disorder from a board-certified psychiatric provider. Same-week appointments at Life Balance, PLLC in Oxford. 42 CFR Part 2 confidentiality. Call (662) 640-4004.`,
            path,
            keywords: [
                `Suboxone doctor ${name} MS`,
                `Suboxone clinic ${name} Mississippi`,
                `Sublocade ${name} MS`,
                `buprenorphine prescriber ${name}`,
                `MAT clinic ${name} Mississippi`,
                `medication-assisted treatment ${name} MS`,
                `opioid use disorder ${name} Mississippi`,
                `addiction treatment ${name} MS`,
                `${county} Suboxone doctor`,
                `${county} addiction treatment`,
                `psychiatrist ${name} MS`,
            ],
            breadcrumbs: [
                { name: 'Home', path: '/' },
                { name: 'Suboxone Treatment', path: '/suboxone-doctor-oxford-ms' },
                { name: `${name}, MS`, path },
            ],
            jsonLd: {
                '@context': 'https://schema.org',
                '@type': 'MedicalWebPage',
                '@id': `${SITE_URL}${path}#page`,
                name: `Suboxone Doctor in ${name}, MS`,
                url: `${SITE_URL}${path}`,
                inLanguage: 'en-US',
                isPartOf: websiteRef,
                about: [
                    { '@type': 'Drug', name: 'Suboxone', alternateName: 'Buprenorphine/Naloxone' },
                    { '@type': 'Drug', name: 'Sublocade', alternateName: 'Buprenorphine Extended-Release' },
                    { '@type': 'MedicalTherapy', name: 'Medication-Assisted Treatment', alternateName: 'MAT' },
                    { '@type': 'MedicalCondition', name: 'Opioid Use Disorder' },
                    { '@type': 'MedicalCondition', name: 'Substance Use Disorder' },
                ],
                audience: medicalAudience(`${name}, ${county}, Mississippi`),
                author: caseyRef,
                reviewedBy: caseyRef,
                publisher: businessRef,
                lastReviewed: '2026-04-28',
                dateModified: '2026-04-28',
                speakable,
                spatialCoverage: {
                    '@type': 'AdministrativeArea',
                    name: `${name}, ${county}, Mississippi`,
                    containedInPlace: {
                        '@type': 'State',
                        name: 'Mississippi',
                    },
                },
            },
        },
    };
}

export const pageMeta = {
    '/addiction-treatment-oxford-ms': {
        title: 'Addiction Treatment in Oxford, MS — Suboxone & MAT',
        description:
            'Outpatient addiction treatment in Oxford, Mississippi — Suboxone, Sublocade, and MAT for opioid use disorder, plus care for alcohol use disorder. Board-certified psychiatric provider, same-week appointments, 42 CFR Part 2 confidentiality. Call (662) 640-4004.',
        path: '/addiction-treatment-oxford-ms',
        keywords: [
            'addiction treatment Oxford MS',
            'Suboxone Oxford MS',
            'Sublocade Oxford Mississippi',
            'MAT program Oxford MS',
            'medication-assisted treatment Oxford',
            'opioid use disorder Oxford Mississippi',
            'alcohol use disorder Oxford',
            'substance abuse treatment Oxford',
            'outpatient addiction Oxford',
            'opioid addiction North Mississippi',
            'Lafayette County addiction treatment',
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
            'Suboxone & Sublocade treatment for opioid use disorder in Oxford, Mississippi. Same-day induction available. Medication-assisted treatment (MAT) and buprenorphine prescribing from a board-certified psychiatric provider. 42 CFR Part 2 confidentiality. Same-week appointments. Call (662) 640-4004.',
        path: '/suboxone-doctor-oxford-ms',
        keywords: [
            'Suboxone doctor Oxford MS',
            'Suboxone clinic Oxford Mississippi',
            'Sublocade Oxford MS',
            'buprenorphine prescriber Oxford',
            'MAT clinic Oxford MS',
            'medication-assisted treatment Oxford',
            'opioid use disorder Oxford Mississippi',
            'Suboxone induction Oxford',
            'Suboxone telehealth Mississippi',
            'Lafayette County Suboxone doctor',
            'North Mississippi Suboxone clinic',
            'Ole Miss Suboxone provider',
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

    // ─── Town landing pages — local SEO for surrounding North MS communities ───
    ...buildTownMeta('batesville', 'Batesville', 'Panola County'),
    ...buildTownMeta('new-albany', 'New Albany', 'Union County'),
    ...buildTownMeta('water-valley', 'Water Valley', 'Yalobusha County'),
    ...buildTownMeta('holly-springs', 'Holly Springs', 'Marshall County'),
    ...buildTownMeta('pontotoc', 'Pontotoc', 'Pontotoc County'),
    ...buildTownMeta('tupelo', 'Tupelo', 'Lee County'),
    ...buildTownMeta('bruce', 'Bruce', 'Calhoun County'),
    ...buildTownMeta('senatobia', 'Senatobia', 'Tate County'),

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
