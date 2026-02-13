import emailjs from '@emailjs/browser';
import { generateIntakePdf } from './pdfGenerator';
import type { FullIntakeData } from './intakeTypes';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

export async function sendIntakeEmail(data: FullIntakeData): Promise<{ success: boolean; error?: string }> {
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
        return sendViaMailto(data, pdfBase64);
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

        if (pdfBase64) {
            // EmailJS attachment via 'content' or variable. 
            // Usually 'content' is used for the file content if the template supports it 
            // or we might need to rely on the user downloading it if the plan doesn't support attachments.
            // But we will try to send it.
            templateParams.content = pdfBase64;
            // In case the template uses a different variable for attachment
            templateParams.pdf_attachment = pdfBase64;
        }

        await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
        return { success: true };
    } catch (err: any) {
        console.error('EmailJS send failed:', err);
        return sendViaMailto(data, pdfBase64);
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
