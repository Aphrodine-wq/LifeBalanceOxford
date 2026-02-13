import emailjs from '@emailjs/browser';
import { generateIntakePdf } from './pdfGenerator';
import type { FullIntakeData } from './intakeTypes';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

// Debug logging to help troubleshoot (check console)
console.log('EmailJS Config:', {
    hasServiceId: !!SERVICE_ID,
    hasTemplateId: !!TEMPLATE_ID,
    hasPublicKey: !!PUBLIC_KEY,
    serviceIdPreview: SERVICE_ID ? `${SERVICE_ID.slice(0, 4)}...` : 'MISSING',
});

export async function sendIntakeEmail(data: FullIntakeData): Promise<{ success: boolean; error?: string; usingFallback?: boolean }> {
    // Generate the PDF
    let pdfBase64 = '';
    let dataUri = '';
    try {
        dataUri = generateIntakePdf(data);
        // Extract just the base64 part
        pdfBase64 = dataUri.split('base64,')[1] || '';
    } catch (err) {
        console.warn('PDF generation failed:', err);
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        console.warn('EmailJS is not configured — falling back to mailto link.');
        const fallback = sendViaMailto(data, pdfBase64);
        return { ...fallback, usingFallback: true };
    }

    try {
        const phqScore = data.phq9.reduce((a, b) => a + (b >= 0 ? b : 0), 0);
        const gadScore = data.gad7.reduce((a, b) => a + (b >= 0 ? b : 0), 0);
        const mdqYes = data.mdqItems.filter(Boolean).length;

        const templateParams: Record<string, string> = {
            from_name: data.patientName,
            from_email: data.email,
            from_phone: data.primaryPhone,
            // Mapping scores to the 1-5 scale fields in the template as best we can or using string description
            // Since the template expects {{anxiety}}, {{depression}}, etc.
            anxiety: `GAD-7 Score: ${gadScore}`,
            depression: `PHQ-9 Score: ${phqScore}`,
            sleep: `PHQ-9 Sleep Item: ${data.phq9[2] >= 0 ? data.phq9[2] : 'N/A'}`, // Item 3 is sleep
            focus: `PHQ-9 Focus Item: ${data.phq9[6] >= 0 ? data.phq9[6] : 'N/A'}`, // Item 7 is concentration
            mood: `MDQ Positive Items: ${mdqYes}/13`,
            message: `Reason for visit: ${data.reasonForVisit}\n\n[FULL DETAILS IN ATTACHED PDF]`,
            to_email: 'jamesburge.mcm@gmail.com',
        };

        // Check PDF size
        const pdfSizeKB = pdfBase64.length ? (pdfBase64.length * 0.75) / 1024 : 0;
        console.log(`Generated PDF Size: ${pdfSizeKB.toFixed(2)} KB`);

        // WARN if likely to exceed limits (EmailJS free tier often has trouble > 50KB in total payload)
        if (pdfSizeKB > 40) {
            console.warn('PDF size is large (>40KB). This might exceed EmailJS limits.');
        }

        if (pdfBase64) {
            // EmailJS attachment via 'content' or variable. 
            // Usually 'content' is used for the file content if the template supports it 
            // or we might need to rely on the user downloading it if the plan doesn't support attachments.
            // But we will try to send it.
            templateParams.content = pdfBase64;
            // In case the template uses a different variable for attachment
            templateParams.pdf_attachment = pdfBase64;
        }

        const res = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
        console.log('EmailJS Send Success:', res);
        return { success: true, usingFallback: false };
    } catch (err: any) {
        console.error('EmailJS send failed (falling back to mailto):', err);

        // RETRY WITHOUT ATTACHMENT
        // If the error might be size related, try sending just the text
        if (pdfBase64 && (err?.status === 413 || err?.text?.includes('large') || true)) {
            try {
                console.log('Retrying without attachment to see if it sends...');
                // We recreate params without the huge base64 strings
                const phqScore = data.phq9.reduce((a, b) => a + (b >= 0 ? b : 0), 0);
                const gadScore = data.gad7.reduce((a, b) => a + (b >= 0 ? b : 0), 0);
                const retryParams = {
                    from_name: data.patientName,
                    from_email: data.email,
                    from_phone: data.primaryPhone,
                    anxiety: `GAD-7 Score: ${gadScore}`,
                    depression: `PHQ-9 Score: ${phqScore}`,
                    sleep: `PHQ-9 Score: ${data.phq9[2] ?? 'N/A'}`,
                    focus: `PHQ-9 Focus: ${data.phq9[6] ?? 'N/A'}`,
                    mood: `MDQ Positive: ${data.mdqItems.filter(Boolean).length}/13`,
                    message: `Reason: ${data.reasonForVisit}\n\n[PDF WAS TOO LARGE TO ATTACH - PLEASE SEE EMR or DOWNLOAD]`,
                    to_email: 'jamesburge.mcm@gmail.com',
                };
                await emailjs.send(SERVICE_ID, TEMPLATE_ID, retryParams, PUBLIC_KEY);
                console.log('EmailJS Retry Success (Text Only)');
                // If text-only succeeds, we still return "usingFallback: true" so the user knows
                // to download the PDF, but at least the notification got through.
                // However, the UI expects "success: false" to trigger the logic.
                // Let's stick to the fallback logic for now so the user gets the PDF.
            } catch (retryErr) {
                console.error('Retry also failed:', retryErr);
            }
        }

        const fallback = sendViaMailto(data, pdfBase64);
        return { ...fallback, error: err?.text || err?.message || 'Unknown error', usingFallback: true };
    }
}

function sendViaMailto(data: FullIntakeData, pdfBase64: string): { success: boolean } {
    if (pdfBase64) {
        try {
            const link = document.createElement('a');
            link.href = `data:application/pdf;base64,${pdfBase64}`;
            link.download = `Life-Balance-Intake_${data.patientName.replace(/\s+/g, '-')}.pdf`;
            link.click();
        } catch (e) {
            console.warn('PDF download failed:', e);
        }
    }

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
        `PLEASE SEE ATTACHED PDF FOR FULL DETAILS.`
    );

    window.open(`mailto:jamesburge.mcm@gmail.com?subject=${subject}&body=${body}`, '_blank');
    return { success: true };
}
