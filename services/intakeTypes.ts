export interface FullIntakeData {
    patientName: string;
    dob: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    primaryPhone: string;
    primaryPhoneMayContact: string; // 'yes' | 'no'
    secondaryPhone: string;
    secondaryPhoneMayContact: string;
    maritalStatus: string;

    guardianName: string;
    guardianDob: string;
    guardianAddress: string;
    guardianCity: string;
    guardianState: string;
    guardianZip: string;
    guardianPhone: string;
    guardianPhoneMayContact: string;

    emergencyName: string;
    emergencyRelationship: string;
    emergencyAddress: string;
    emergencyCity: string;
    emergencyState: string;
    emergencyZip: string;
    emergencyPhone: string;
    emergencyPhoneMayContact: string;
    emergencyConsentSignature: string;

    insuranceCompany: string;
    memberId: string;
    groupNumber: string;
    policyholderName: string;
    policyholderDob: string;
    policyholderRelationship: string;
    policyholderEmployer: string;

    creditCardCompany: string; // Visa, Mastercard, etc.
    cancellationPolicyAcknowledged: boolean;

    pcpName: string;
    pcpPhone: string;
    pcpPermissionToContact: string; // 'yes' | 'no'
    pharmacyName: string;
    pharmacyCityState: string;

    email: string;

    // Medical History
    reasonForVisit: string;
    currentSymptoms: string[];
    suicidalThoughts: string; // 'yes' | 'no'
    suicidalThoughtsDetail: string;

    currentMedications: { medication: string; howOften: string; dateStarted: string }[];

    physicalIllnesses: string[];
    physicalIllnessOther: string;

    outpatientHistory: string; // 'yes' | 'no'
    outpatientHistoryDetail: string;
    inpatientHistory: string; // 'yes' | 'no'
    inpatientHistoryDetail: string;

    pastMedications: { medication: string; howOften: string; dateStarted: string; outcome: string }[];

    familyHistory: string[];
    familyHistoryOther: string;

    additionalInfo: string;

    // Measures
    phq9: number[]; // 0-3
    phq9Difficulty: string;
    gad7: number[]; // 0-3
    mdqItems: boolean[]; // true/false
    mdqSameTime: string; // 'Yes' | 'No'
    mdqProblemLevel: string;
    mdqFamilyHistory: string; // 'Yes' | 'No'
    mdqProfessionalDiagnosis: string; // 'Yes' | 'No'
    pclc: number[]; // 1-5
    asrs: number[]; // 0-4
}

export const defaultIntakeData: FullIntakeData = {
    patientName: '', dob: '', address: '', city: '', state: '', zip: '',
    primaryPhone: '', primaryPhoneMayContact: '', secondaryPhone: '', secondaryPhoneMayContact: '',
    maritalStatus: '',
    guardianName: '', guardianDob: '', guardianAddress: '', guardianCity: '', guardianState: '', guardianZip: '',
    guardianPhone: '', guardianPhoneMayContact: '',
    emergencyName: '', emergencyRelationship: '', emergencyAddress: '', emergencyCity: '', emergencyState: '', emergencyZip: '',
    emergencyPhone: '', emergencyPhoneMayContact: '', emergencyConsentSignature: '',
    insuranceCompany: '', memberId: '', groupNumber: '', policyholderName: '', policyholderDob: '',
    policyholderRelationship: '', policyholderEmployer: '',
    creditCardCompany: '',
    cancellationPolicyAcknowledged: false,
    pcpName: '', pcpPhone: '', pcpPermissionToContact: '', pharmacyName: '', pharmacyCityState: '',
    email: '',
    reasonForVisit: '', currentSymptoms: [], suicidalThoughts: '', suicidalThoughtsDetail: '',
    currentMedications: [{ medication: '', howOften: '', dateStarted: '' }],
    physicalIllnesses: [], physicalIllnessOther: '',
    outpatientHistory: '', outpatientHistoryDetail: '',
    inpatientHistory: '', inpatientHistoryDetail: '',
    pastMedications: [{ medication: '', howOften: '', dateStarted: '', outcome: '' }],
    familyHistory: [], familyHistoryOther: '',
    additionalInfo: '',
    phq9: Array(9).fill(-1), phq9Difficulty: '',
    gad7: Array(7).fill(-1),
    mdqItems: Array(13).fill(false), mdqSameTime: '', mdqProblemLevel: '', mdqFamilyHistory: '', mdqProfessionalDiagnosis: '',
    pclc: Array(17).fill(-1),
    asrs: Array(18).fill(-1),
};
