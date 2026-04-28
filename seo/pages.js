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
                `Suboxone treatment for ${name}, Mississippi residents — medication-assisted treatment (MAT) for opioid use disorder from a board-certified psychiatric provider. Same-week appointments at Life Balance, PLLC in Oxford. 42 CFR Part 2 confidentiality. Call (662) 640-4004.`,
            path,
            keywords: [
                `Suboxone doctor ${name} MS`,
                `Suboxone clinic ${name} Mississippi`,
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
            'Outpatient addiction treatment in Oxford, Mississippi — Suboxone and MAT for opioid use disorder, plus care for alcohol use disorder. Board-certified psychiatric provider, same-week appointments, 42 CFR Part 2 confidentiality. Call (662) 640-4004.',
        path: '/addiction-treatment-oxford-ms',
        keywords: [
            'addiction treatment Oxford MS',
            'Suboxone Oxford MS',
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
            'Suboxone treatment for opioid use disorder in Oxford, Mississippi. Same-day induction available. Medication-assisted treatment (MAT) and buprenorphine prescribing from a board-certified psychiatric provider. 42 CFR Part 2 confidentiality. Same-week appointments. Call (662) 640-4004.',
        path: '/suboxone-doctor-oxford-ms',
        keywords: [
            'Suboxone doctor Oxford MS',
            'Suboxone clinic Oxford Mississippi',
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

    '/blue-cross-suboxone-mississippi': {
        title: 'Blue Cross Blue Shield Suboxone Coverage — Mississippi',
        description:
            'BCBS Mississippi and out-of-state Blue Cross plans cover Suboxone and MAT visits at Life Balance, PLLC in Oxford. In-network, telehealth-eligible, prior auth handled. Honest details on copays, EOBs, and self-pay alternatives. Call (662) 640-4004.',
        path: '/blue-cross-suboxone-mississippi',
        keywords: [
            'BCBS Suboxone Mississippi',
            'Blue Cross Suboxone Oxford MS',
            'BCBS Mississippi MAT coverage',
            'BCBS in network Suboxone Oxford',
            'BlueCard Suboxone Mississippi',
            'BCBS telehealth Suboxone Mississippi',
            'BCBS FEP Suboxone Mississippi',
            'Anthem BCBS Suboxone Mississippi',
        ],
        breadcrumbs: [
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: 'Addiction Treatment', path: '/addiction-treatment-oxford-ms' },
            { name: 'BCBS Suboxone Coverage', path: '/blue-cross-suboxone-mississippi' },
        ],
        jsonLd: {
            '@context': 'https://schema.org',
            '@type': 'MedicalWebPage',
            '@id': `${SITE_URL}/blue-cross-suboxone-mississippi#page`,
            name: 'Blue Cross Blue Shield Suboxone Coverage in Mississippi',
            url: `${SITE_URL}/blue-cross-suboxone-mississippi`,
            inLanguage: 'en-US',
            isPartOf: websiteRef,
            about: [
                { '@type': 'Drug', name: 'Suboxone', alternateName: 'Buprenorphine/Naloxone' },
                { '@type': 'MedicalCondition', name: 'Opioid Use Disorder' },
                { '@type': 'MedicalTherapy', name: 'Medication-Assisted Treatment', alternateName: 'MAT' },
                { '@type': 'Organization', name: 'Blue Cross Blue Shield of Mississippi' },
            ],
            audience: medicalAudience('Mississippi'),
            author: caseyRef,
            reviewedBy: caseyRef,
            publisher: businessRef,
            lastReviewed: '2026-04-28',
            dateModified: '2026-04-28',
            speakable,
        },
    },

    '/same-day-suboxone-oxford-ms': {
        title: 'Same-Day Suboxone Induction in Oxford, MS',
        description:
            'Same-day and next-day Suboxone induction at Life Balance, PLLC in Oxford. Hold slots for new patients in withdrawal, in-office or telehealth across Mississippi. No 2-week waitlist. Call (662) 640-4004.',
        path: '/same-day-suboxone-oxford-ms',
        keywords: [
            'same day Suboxone Oxford MS',
            'walk in Suboxone Oxford Mississippi',
            'urgent Suboxone induction Oxford',
            'same-day MAT Mississippi',
            'fast Suboxone start Oxford',
            'next day Suboxone North Mississippi',
            'low-barrier Suboxone Oxford',
            'immediate Suboxone Oxford MS',
            'Suboxone today Mississippi',
            'rapid induction buprenorphine Oxford',
        ],
        breadcrumbs: [
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: 'Addiction Treatment', path: '/addiction-treatment-oxford-ms' },
            { name: 'Same-Day Suboxone', path: '/same-day-suboxone-oxford-ms' },
        ],
        jsonLd: {
            '@context': 'https://schema.org',
            '@type': 'MedicalWebPage',
            '@id': `${SITE_URL}/same-day-suboxone-oxford-ms#page`,
            name: 'Same-Day Suboxone Induction in Oxford, MS',
            url: `${SITE_URL}/same-day-suboxone-oxford-ms`,
            inLanguage: 'en-US',
            isPartOf: websiteRef,
            about: [
                { '@type': 'Drug', name: 'Suboxone', alternateName: 'Buprenorphine/Naloxone' },
                { '@type': 'MedicalCondition', name: 'Opioid Use Disorder' },
                { '@type': 'MedicalCondition', name: 'Opioid Withdrawal' },
                { '@type': 'MedicalTherapy', name: 'Medication-Assisted Treatment', alternateName: 'MAT' },
            ],
            audience: medicalAudience('North Mississippi'),
            author: caseyRef,
            reviewedBy: caseyRef,
            publisher: businessRef,
            lastReviewed: '2026-04-28',
            dateModified: '2026-04-28',
            speakable,
        },
    },

    '/fentanyl-addiction-treatment-mississippi': {
        title: 'Fentanyl Addiction Treatment in Mississippi',
        description:
            'Fentanyl-specific Suboxone induction protocols — including the Bernese microdosing method — at Life Balance, PLLC in Oxford, Mississippi. Same-week start, telehealth statewide, harm reduction guidance. Call (662) 640-4004.',
        path: '/fentanyl-addiction-treatment-mississippi',
        keywords: [
            'fentanyl addiction treatment Mississippi',
            'fentanyl Suboxone induction Oxford',
            'Bernese microdosing Mississippi',
            'fentanyl buprenorphine protocol MS',
            'fentanyl detox Oxford Mississippi',
            'fentanyl rehab North Mississippi',
            'fentanyl withdrawal treatment Oxford',
            'fentanyl test strips Mississippi',
            'naloxone Narcan Mississippi',
        ],
        breadcrumbs: [
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: 'Addiction Treatment', path: '/addiction-treatment-oxford-ms' },
            { name: 'Fentanyl Treatment', path: '/fentanyl-addiction-treatment-mississippi' },
        ],
        jsonLd: {
            '@context': 'https://schema.org',
            '@type': 'MedicalWebPage',
            '@id': `${SITE_URL}/fentanyl-addiction-treatment-mississippi#page`,
            name: 'Fentanyl Addiction Treatment in Mississippi',
            url: `${SITE_URL}/fentanyl-addiction-treatment-mississippi`,
            inLanguage: 'en-US',
            isPartOf: websiteRef,
            about: [
                { '@type': 'Drug', name: 'Fentanyl' },
                { '@type': 'Drug', name: 'Buprenorphine' },
                { '@type': 'Drug', name: 'Naloxone', alternateName: 'Narcan' },
                { '@type': 'MedicalCondition', name: 'Opioid Use Disorder' },
                { '@type': 'MedicalTherapy', name: 'Medication-Assisted Treatment', alternateName: 'MAT' },
            ],
            audience: medicalAudience('Mississippi'),
            author: caseyRef,
            reviewedBy: caseyRef,
            publisher: businessRef,
            lastReviewed: '2026-04-28',
            dateModified: '2026-04-28',
            speakable,
            spatialCoverage: {
                '@type': 'State',
                name: 'Mississippi',
            },
        },
    },

    '/adderall-addiction-treatment-oxford-ms': {
        title: 'Stimulant Use Disorder & ADHD Care — Oxford, MS',
        description:
            'Private psychiatric care for prescription stimulant misuse, ADHD evaluation, and co-occurring anxiety or depression in Oxford, Mississippi — including non-stimulant ADHD options. Confidential, 42 CFR Part 2 protected, off-campus from Ole Miss. Call (662) 640-4004.',
        path: '/adderall-addiction-treatment-oxford-ms',
        keywords: [
            'Adderall addiction treatment Oxford MS',
            'stimulant use disorder Oxford',
            'Adderall rehab Mississippi',
            'Vyvanse addiction Oxford MS',
            'Ole Miss Adderall help',
            'cocaine addiction Oxford MS',
            'methamphetamine treatment North Mississippi',
            'private ADHD evaluation Oxford',
            'college Adderall addiction Mississippi',
            'stimulant withdrawal Oxford MS',
            'Strattera prescriber Oxford',
            'non-stimulant ADHD Mississippi',
        ],
        breadcrumbs: [
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: 'Stimulant & ADHD Care', path: '/adderall-addiction-treatment-oxford-ms' },
        ],
        jsonLd: {
            '@context': 'https://schema.org',
            '@type': 'MedicalWebPage',
            '@id': `${SITE_URL}/adderall-addiction-treatment-oxford-ms#page`,
            name: 'Stimulant Use Disorder & ADHD Care in Oxford, MS',
            url: `${SITE_URL}/adderall-addiction-treatment-oxford-ms`,
            inLanguage: 'en-US',
            isPartOf: websiteRef,
            about: [
                { '@type': 'Drug', name: 'Adderall', alternateName: 'Mixed Amphetamine Salts' },
                { '@type': 'Drug', name: 'Vyvanse', alternateName: 'Lisdexamfetamine' },
                { '@type': 'Drug', name: 'Ritalin', alternateName: 'Methylphenidate' },
                { '@type': 'MedicalCondition', name: 'Stimulant Use Disorder' },
                { '@type': 'MedicalCondition', name: 'Attention Deficit Hyperactivity Disorder', alternateName: 'ADHD' },
                { '@type': 'MedicalCondition', name: 'Substance Use Disorder' },
            ],
            audience: medicalAudience('North Mississippi'),
            author: caseyRef,
            reviewedBy: caseyRef,
            publisher: businessRef,
            lastReviewed: '2026-04-28',
            dateModified: '2026-04-28',
            speakable,
            mentions: [
                { '@type': 'CollegeOrUniversity', name: 'University of Mississippi', alternateName: 'Ole Miss', sameAs: 'https://www.olemiss.edu/' },
            ],
        },
    },

    '/ole-miss-suboxone-doctor': {
        title: 'Private Suboxone Doctor Near Ole Miss — North Mississippi',
        description:
            'Private Suboxone and psychiatric care for the Ole Miss community — students, graduate students, faculty, and staff — and patients across North Mississippi. 42 CFR Part 2 confidentiality, same-week appointments, a mile and a half from campus. Call (662) 640-4004.',
        path: '/ole-miss-suboxone-doctor',
        keywords: [
            'Ole Miss Suboxone doctor',
            'private psychiatrist Ole Miss',
            'off-campus Suboxone Oxford MS',
            'confidential Suboxone college student Mississippi',
            'Ole Miss student addiction treatment',
            'University of Mississippi psychiatric care',
            'North Mississippi Suboxone doctor',
            'North MS opioid treatment clinic',
            'Lafayette County Suboxone',
            'DeSoto County Suboxone clinic',
            'North Mississippi MAT clinic',
            'North Mississippi private psychiatry',
            'Ole Miss faculty mental health',
        ],
        breadcrumbs: [
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: 'Addiction Treatment', path: '/addiction-treatment-oxford-ms' },
            { name: 'Ole Miss Suboxone', path: '/ole-miss-suboxone-doctor' },
        ],
        jsonLd: {
            '@context': 'https://schema.org',
            '@type': 'MedicalWebPage',
            '@id': `${SITE_URL}/ole-miss-suboxone-doctor#page`,
            name: 'Private Suboxone Doctor Near Ole Miss — North Mississippi',
            url: `${SITE_URL}/ole-miss-suboxone-doctor`,
            inLanguage: 'en-US',
            isPartOf: websiteRef,
            about: [
                { '@type': 'Drug', name: 'Suboxone', alternateName: 'Buprenorphine/Naloxone' },
                { '@type': 'MedicalCondition', name: 'Opioid Use Disorder' },
                { '@type': 'MedicalCondition', name: 'Substance Use Disorder' },
                { '@type': 'MedicalTherapy', name: 'Medication-Assisted Treatment', alternateName: 'MAT' },
            ],
            audience: {
                '@type': 'MedicalAudience',
                audienceType: 'Patient',
                geographicArea: {
                    '@type': 'AdministrativeArea',
                    name: 'Lafayette County and surrounding North Mississippi counties',
                    containedInPlace: {
                        '@type': 'State',
                        name: 'Mississippi',
                    },
                },
                requiredGender: 'Any',
                suggestedMinAge: 18,
            },
            author: caseyRef,
            reviewedBy: caseyRef,
            publisher: businessRef,
            lastReviewed: '2026-04-28',
            dateModified: '2026-04-28',
            speakable,
            spatialCoverage: {
                '@type': 'AdministrativeArea',
                name: 'North Mississippi',
                containedInPlace: { '@type': 'State', name: 'Mississippi' },
                additionalProperty: [
                    { '@type': 'PropertyValue', name: 'County', value: 'Lafayette County' },
                    { '@type': 'PropertyValue', name: 'County', value: 'DeSoto County' },
                    { '@type': 'PropertyValue', name: 'County', value: 'Marshall County' },
                    { '@type': 'PropertyValue', name: 'County', value: 'Panola County' },
                    { '@type': 'PropertyValue', name: 'County', value: 'Tate County' },
                    { '@type': 'PropertyValue', name: 'County', value: 'Yalobusha County' },
                    { '@type': 'PropertyValue', name: 'County', value: 'Calhoun County' },
                    { '@type': 'PropertyValue', name: 'County', value: 'Pontotoc County' },
                    { '@type': 'PropertyValue', name: 'County', value: 'Lee County' },
                    { '@type': 'PropertyValue', name: 'County', value: 'Union County' },
                    { '@type': 'PropertyValue', name: 'County', value: 'Tippah County' },
                    { '@type': 'PropertyValue', name: 'County', value: 'Tunica County' },
                    { '@type': 'PropertyValue', name: 'County', value: 'Coahoma County' },
                    { '@type': 'PropertyValue', name: 'County', value: 'Quitman County' },
                ],
            },
            mentions: [
                { '@type': 'CollegeOrUniversity', name: 'University of Mississippi', alternateName: 'Ole Miss', sameAs: 'https://www.olemiss.edu/' },
            ],
        },
    },

    '/suboxone-telehealth-mississippi': {
        title: 'Telehealth Suboxone Doctor in Mississippi',
        description:
            'Online Suboxone treatment by video for patients anywhere in Mississippi — buprenorphine prescribing, induction, and ongoing MAT from a board-certified psychiatric provider. Same-week appointments, BCBS / Medicaid / Magnolia accepted. 42 CFR Part 2 confidentiality. Call (662) 640-4004.',
        path: '/suboxone-telehealth-mississippi',
        keywords: [
            'telehealth Suboxone Mississippi',
            'online Suboxone doctor Mississippi',
            'virtual Suboxone clinic MS',
            'telemedicine buprenorphine Mississippi',
            'video Suboxone visit MS',
            'online MAT Mississippi',
            'telehealth buprenorphine Mississippi',
            'remote Suboxone prescribing MS',
            'Suboxone online Mississippi',
            'telehealth opioid use disorder Mississippi',
            'BCBS Mississippi telehealth Suboxone',
            'Mississippi Medicaid telehealth MAT',
            'same-day telehealth Suboxone Mississippi',
            'online Subutex doctor Mississippi',
        ],
        breadcrumbs: [
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: 'Addiction Treatment', path: '/addiction-treatment-oxford-ms' },
            { name: 'Telehealth Suboxone', path: '/suboxone-telehealth-mississippi' },
        ],
        jsonLd: {
            '@context': 'https://schema.org',
            '@type': 'MedicalWebPage',
            '@id': `${SITE_URL}/suboxone-telehealth-mississippi#page`,
            name: 'Telehealth Suboxone Doctor in Mississippi',
            url: `${SITE_URL}/suboxone-telehealth-mississippi`,
            inLanguage: 'en-US',
            isPartOf: websiteRef,
            about: [
                { '@type': 'Drug', name: 'Suboxone', alternateName: 'Buprenorphine/Naloxone' },
                { '@type': 'Drug', name: 'Subutex', alternateName: 'Buprenorphine' },
                { '@type': 'MedicalCondition', name: 'Opioid Use Disorder' },
                { '@type': 'MedicalTherapy', name: 'Medication-Assisted Treatment', alternateName: 'MAT' },
                { '@type': 'MedicalTherapy', name: 'Telehealth Substance Use Treatment' },
            ],
            audience: medicalAudience('Mississippi'),
            author: caseyRef,
            reviewedBy: caseyRef,
            publisher: businessRef,
            lastReviewed: '2026-04-28',
            dateModified: '2026-04-28',
            speakable,
            spatialCoverage: {
                '@type': 'State',
                name: 'Mississippi',
            },
            availableService: {
                '@type': 'MedicalTherapy',
                name: 'Telehealth Suboxone Treatment',
                medicineSystem: 'WesternConventional',
                relevantSpecialty: { '@type': 'MedicalSpecialty', name: 'Psychiatry' },
            },
        },
    },

    '/mat-program': {
        title: 'Medication-Assisted Treatment (MAT) Program',
        description:
            'Medication-Assisted Treatment for opioid dependence in Oxford, MS. Suboxone combined with counseling, medication management for co-occurring conditions, and long-term recovery support. Private, respectful, judgment-free. Call (662) 640-4004.',
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
    ...buildTownMeta('southaven', 'Southaven', 'DeSoto County'),
    ...buildTownMeta('olive-branch', 'Olive Branch', 'DeSoto County'),
    ...buildTownMeta('horn-lake', 'Horn Lake', 'DeSoto County'),
    ...buildTownMeta('hernando', 'Hernando', 'DeSoto County'),

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
