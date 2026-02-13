import emailjs from '@emailjs/browser';
import { generateIntakePdf } from './pdfGenerator';
import type { FullIntakeData } from './intakeTypes';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

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
        from_phone: data.primaryPhone,
        anxiety: `GAD-7 Score: ${gadScore}`,
        depression: `PHQ-9 Score: ${phqScore}`,
        sleep: `PHQ-9 Sleep Item: ${data.phq9[2] >= 0 ? data.phq9[2] : 'N/A'}`,
        focus: `PHQ-9 Focus Item: ${data.phq9[6] >= 0 ? data.phq9[6] : 'N/A'}`,
        mood: `MDQ Positive Items: ${mdqYes}/13`,
        message: data.reasonForVisit || '(none provided)',
        to_email: 'jamesburge.mcm@gmail.com',
    };

    // ── 4. Try sending WITH the PDF attachment ─────────────────────
    if (pdfBase64) {
        templateParams.pdf_attachment = pdfBase64;
        const pdfSizeKB = (pdfBase64.length * 0.75) / 1024;
        console.log(`📎 PDF Payload: ${pdfBase64.substring(0, 50)}... [length: ${pdfBase64.length} chars | ~${pdfSizeKB.toFixed(1)} KB]`);
    }

    try {
        const res = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
        console.log('✅ EmailJS send success:', res.status, res.text);

        // ALWAYS download the PDF locally for the user as a backup record
        console.log('⬇️ Triggering local PDF download...');
        triggerPdfDownload(data, pdfBase64);

        return { success: true };
    } catch (firstErr: any) {
        console.warn('Send with PDF failed, retrying without attachment...', firstErr);

        // ── 5. Retry WITHOUT the PDF (payload was too big) ─────────
        delete templateParams.pdf_attachment;
        templateParams.message += '\n\n⚠️ PDF attachment was too large. Patient received a downloaded copy.';

        try {
            await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
            console.log('✅ EmailJS retry success (text only)');
        } catch (retryErr) {
            console.error('Retry also failed:', retryErr);
        }

        // Download the PDF to the patient's machine so it's not lost
        triggerPdfDownload(data, pdfBase64);
        return { success: true };
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
