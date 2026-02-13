import emailjs from '@emailjs/browser';
import { generateIntakePdf } from './pdfGenerator';
import type { FullIntakeData } from './intakeTypes';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

export async function sendIntakeEmail(data: FullIntakeData): Promise<{ success: boolean; error?: string; pdfDownloaded?: boolean }> {
    // ── 1. Generate the PDF (always, for download) ─────────────────
    let pdfBase64 = '';
    try {
        const dataUri = generateIntakePdf(data);
        pdfBase64 = dataUri.split('base64,')[1] || '';
    } catch (err) {
        console.warn('PDF generation failed:', err);
    }

    // ── 2. Check EmailJS config ────────────────────────────────────
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        console.warn('EmailJS is not configured — falling back to mailto link.');
        triggerPdfDownload(data, pdfBase64);
        sendViaMailto(data);
        return { success: true, pdfDownloaded: true };
    }

    // ── 3. Build comprehensive message with ALL data inline ───────
    const phqScore = data.phq9.reduce((a, b) => a + (b >= 0 ? b : 0), 0);
    const gadScore = data.gad7.reduce((a, b) => a + (b >= 0 ? b : 0), 0);
    const mdqYes = data.mdqItems.filter(Boolean).length;
    const pclcScore = data.pclc.reduce((a, b) => a + (b >= 1 ? b : 0), 0);
    const asrsPartA = data.asrs.slice(0, 6).filter(v => v >= 2).length;

    // Build a detailed message body so the email itself has everything,
    // even without the PDF attachment.
    const detailedMessage = [
        `REASON FOR VISIT:`,
        data.reasonForVisit || '(none provided)',
        ``,
        `DEMOGRAPHICS:`,
        `DOB: ${data.dob || 'N/A'}`,
        `Address: ${data.address}, ${data.city}, ${data.state} ${data.zip}`,
        `Phone: ${data.primaryPhone} | Email: ${data.email}`,
        `Marital Status: ${data.maritalStatus || 'N/A'}`,
        ``,
        `INSURANCE:`,
        `Carrier: ${data.insuranceCompany || 'N/A'} | Member ID: ${data.memberId || 'N/A'}`,
        `Policyholder: ${data.policyholderName || 'N/A'} (${data.policyholderRelationship || 'N/A'})`,
        ``,
        `EMERGENCY CONTACT:`,
        `${data.emergencyName || 'N/A'} (${data.emergencyRelationship || 'N/A'}) — ${data.emergencyPhone || 'N/A'}`,
        ``,
        `PROVIDERS:`,
        `PCP: ${data.pcpName || 'N/A'} (${data.pcpPhone || 'N/A'})`,
        `Pharmacy: ${data.pharmacyName || 'N/A'} (${data.pharmacyCityState || 'N/A'})`,
        ``,
        `CURRENT SYMPTOMS: ${data.currentSymptoms.join(', ') || 'None listed'}`,
        `SUICIDAL THOUGHTS: ${data.suicidalThoughts || 'N/A'}${data.suicidalThoughtsDetail ? ' — ' + data.suicidalThoughtsDetail : ''}`,
        ``,
        `CURRENT MEDICATIONS:`,
        ...(data.currentMedications.filter(m => m.medication).map(m =>
            `  • ${m.medication} (${m.howOften}) started ${m.dateStarted}`
        ) || ['  None listed']),
        ``,
        `CLINICAL SCORES:`,
        `  PHQ-9 (Depression): ${phqScore}`,
        `  GAD-7 (Anxiety): ${gadScore}`,
        `  MDQ Positive Items: ${mdqYes}/13 | Same time: ${data.mdqSameTime || 'N/A'} | Severity: ${data.mdqProblemLevel || 'N/A'}`,
        `  PCL-C (PTSD): ${pclcScore}`,
        `  ASRS Part A Flags: ${asrsPartA}/6`,
        ``,
        `FAMILY HISTORY: ${data.familyHistory.join(', ') || 'None'}`,
        `PHYSICAL ILLNESSES: ${data.physicalIllnesses.join(', ') || 'None'}`,
    ].join('\n');

    const templateParams: Record<string, string> = {
        from_name: data.patientName,
        from_email: data.email,
        from_phone: data.primaryPhone,
        anxiety: `GAD-7 Score: ${gadScore}`,
        depression: `PHQ-9 Score: ${phqScore}`,
        sleep: `PHQ-9 Sleep Item: ${data.phq9[2] >= 0 ? data.phq9[2] : 'N/A'}`,
        focus: `PHQ-9 Focus Item: ${data.phq9[6] >= 0 ? data.phq9[6] : 'N/A'}`,
        mood: `MDQ Positive Items: ${mdqYes}/13`,
        message: detailedMessage,
        to_email: 'jamesburge.mcm@gmail.com',
    };

    // ── 4. Send the email (text-only, guaranteed to work) ─────────
    try {
        await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
        console.log('EmailJS send success');

        // Also trigger PDF download for the patient's records
        triggerPdfDownload(data, pdfBase64);

        return { success: true, pdfDownloaded: !!pdfBase64 };
    } catch (err: any) {
        console.error('EmailJS send failed:', err);
        // Last resort: mailto
        triggerPdfDownload(data, pdfBase64);
        sendViaMailto(data);
        return { success: true, pdfDownloaded: !!pdfBase64, error: err?.text || err?.message };
    }
}

/** Downloads the PDF to the patient's computer */
function triggerPdfDownload(data: FullIntakeData, pdfBase64: string): void {
    if (!pdfBase64) return;
    try {
        const link = document.createElement('a');
        link.href = `data:application/pdf;base64,${pdfBase64}`;
        link.download = `Life-Balance-Intake_${data.patientName.replace(/\s+/g, '-')}.pdf`;
        link.click();
    } catch (e) {
        console.warn('PDF download failed:', e);
    }
}

/** Opens the user's email client as a last resort */
function sendViaMailto(data: FullIntakeData): void {
    const phqScore = data.phq9.reduce((a, b) => a + (b >= 0 ? b : 0), 0);
    const gadScore = data.gad7.reduce((a, b) => a + (b >= 0 ? b : 0), 0);

    const subject = encodeURIComponent(`New Intake: ${data.patientName}`);
    const body = encodeURIComponent(
        `Patient: ${data.patientName}\n` +
        `DOB: ${data.dob}\n` +
        `Phone: ${data.primaryPhone}\n\n` +
        `Reason: ${data.reasonForVisit}\n\n` +
        `Scores:\n` +
        `PHQ-9: ${phqScore}\n` +
        `GAD-7: ${gadScore}\n\n` +
        `PLEASE SEE DOWNLOADED PDF FOR FULL DETAILS.`
    );

    window.open(`mailto:jamesburge.mcm@gmail.com?subject=${subject}&body=${body}`, '_blank');
}
