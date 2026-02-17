import emailjs from '@emailjs/browser';
import { generateIntakePdf } from './pdfGenerator';
import type { FullIntakeData } from './intakeTypes';

// Hardcoded for debugging to ensure correct ID is used
const SERVICE_ID = 'service_9vitjto';
const TEMPLATE_ID = 'template_5hioh65';
const PUBLIC_KEY = 'WgqZwkJgrF6WRIlcQ';

// EmailJS free-tier payload limit is ~50 KB; skip attaching if larger
const MAX_PDF_SIZE_KB = 45;

export async function sendIntakeEmail(data: FullIntakeData): Promise<{ success: boolean; error?: string }> {
    // ── 1. Generate the PDF ────────────────────────────────────────
    let pdfBase64 = '';
    try {
        const dataUri = generateIntakePdf(data);
        pdfBase64 = dataUri.split('base64,')[1] || '';
    } catch (err) {
        console.warn('PDF generation failed:', err);
    }

    // ── 2. Check EmailJS config ────────────────────────────────────
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        console.warn('EmailJS is not configured — falling back to mailto.');
        triggerPdfDownload(data, pdfBase64);
        sendViaMailto(data);
        return { success: true };
    }

    // ── 3. Compute scores ──────────────────────────────────────────
    const phqScore = data.phq9.reduce((a, b) => a + (b >= 0 ? b : 0), 0);
    const gadScore = data.gad7.reduce((a, b) => a + (b >= 0 ? b : 0), 0);
    const mdqYes = data.mdqItems.filter(Boolean).length;

    const templateParams: Record<string, string> = {
        from_name: data.patientName,
        from_email: data.email,
        reply_to: data.email,
        from_phone: data.primaryPhone,
        anxiety: `GAD-7 Score: ${gadScore}`,
        depression: `PHQ-9 Score: ${phqScore}`,
        sleep: `PHQ-9 Sleep Item: ${data.phq9[2] >= 0 ? data.phq9[2] : 'N/A'}`,
        focus: `PHQ-9 Focus Item: ${data.phq9[6] >= 0 ? data.phq9[6] : 'N/A'}`,
        mood: `MDQ Positive Items: ${mdqYes}/13`,
        message: data.reasonForVisit || '(none provided)',
        to_email: 'jamesburge.mcm@gmail.com',
    };

    // ── 4. Attach PDF only if within EmailJS size limits ───────────
    const pdfSizeKB = pdfBase64 ? (pdfBase64.length * 0.75) / 1024 : 0;
    const includePdf = pdfBase64 !== '' && pdfSizeKB <= MAX_PDF_SIZE_KB;

    if (pdfBase64 && !includePdf) {
        console.warn(`PDF too large for EmailJS (${pdfSizeKB.toFixed(1)} KB > ${MAX_PDF_SIZE_KB} KB) — sending without attachment.`);
        templateParams.message += '\n\n(PDF was too large to attach — patient received a downloaded copy.)';
    }

    if (includePdf) {
        // Must match the variable name in the EmailJS template Attachments tab
        templateParams.pdf_attachment = pdfBase64;
        console.log(`📎 PDF attached as 'pdf_attachment' [~${pdfSizeKB.toFixed(1)} KB]`);
    }

    // ── 5. Send the email ──────────────────────────────────────────
    console.log(`🚀 Sending to Service: ${SERVICE_ID}, Template: ${TEMPLATE_ID}`);

    try {
        const res = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
        console.log('✅ EmailJS send success:', res.status, res.text);
        triggerPdfDownload(data, pdfBase64);
        return { success: true };
    } catch (err: any) {
        console.error('❌ EmailJS send failed:', err);
        if (err.text) console.error('Error text:', err.text);

        // If we included the PDF, retry without it (payload may have been too large)
        if (includePdf) {
            console.warn('Retrying without PDF attachment...');
            delete templateParams.pdf_attachment;
            templateParams.message += '\n\n(PDF attachment was too large — patient received a downloaded copy.)';

            try {
                const retryRes = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
                console.log('✅ EmailJS retry success (no PDF):', retryRes.status, retryRes.text);
                triggerPdfDownload(data, pdfBase64);
                return { success: true };
            } catch (retryErr: any) {
                console.error('❌ Retry also failed:', retryErr);
            }
        }

        // Both attempts failed — fall back to mailto and report the failure
        triggerPdfDownload(data, pdfBase64);
        sendViaMailto(data);
        return { success: false, error: err?.text || 'Email delivery failed. A mailto fallback was opened.' };
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
        `Scores:\nPHQ-9: ${phqScore}\nGAD-7: ${gadScore}\n\n` +
        `PLEASE SEE DOWNLOADED PDF FOR FULL DETAILS.`
    );

    window.open(`mailto:jamesburge.mcm@gmail.com?subject=${subject}&body=${body}`, '_blank');
}
