import emailjs from '@emailjs/browser';
import { generateIntakePdf } from './pdfGenerator';

// ============================================================
// EmailJS Configuration
// ============================================================
// To set up EmailJS (free tier: 200 emails/month):
//
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Add an Email Service (Gmail, Outlook, etc.) — note the Service ID
// 3. Create an Email Template with these variables:
//      {{from_name}}, {{from_email}}, {{from_phone}},
//      {{anxiety}}, {{depression}}, {{sleep}},
//      {{focus}}, {{mood}}, {{message}}
//    Set the "To Email" in the template to: jamesburge.mcm@gmail.com
//    Note the Template ID
// 4. Copy your Public Key from Account > API Keys
// 5. Put all three values in your .env.local file
// ============================================================

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

interface IntakeFormData {
    name: string;
    email: string;
    phone: string;
    anxiety: number;
    depression: number;
    sleep: number;
    focus: number;
    mood: number;
    message: string;
}

function formatScaleLabel(value: number): string {
    const labels: Record<number, string> = {
        1: '1 — Not at all',
        2: '2 — A little',
        3: '3 — Moderately',
        4: '4 — Quite a bit',
        5: '5 — Extremely',
    };
    return labels[value] || `${value}`;
}

export async function sendIntakeEmail(data: IntakeFormData): Promise<{ success: boolean; error?: string }> {
    // Generate the PDF
    let pdfBase64 = '';
    try {
        const dataUri = generateIntakePdf(data);
        // Extract just the base64 part from the data URI
        // Format: "data:application/pdf;filename=generated.pdf;base64,XXXXXX"
        pdfBase64 = dataUri.split('base64,')[1] || '';
    } catch (err) {
        console.warn('PDF generation failed, sending without attachment:', err);
    }

    // If EmailJS isn't configured, fall back to mailto + offer a PDF download
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        console.warn('EmailJS is not configured — falling back to mailto link.');
        return sendViaMailto(data, pdfBase64);
    }

    try {
        const templateParams: Record<string, string> = {
            from_name: data.name,
            from_email: data.email,
            from_phone: data.phone,
            anxiety: formatScaleLabel(data.anxiety),
            depression: formatScaleLabel(data.depression),
            sleep: formatScaleLabel(data.sleep),
            focus: formatScaleLabel(data.focus),
            mood: formatScaleLabel(data.mood),
            message: data.message || '(none)',
            to_email: 'jamesburge.mcm@gmail.com',
        };

        // Include PDF as attachment if generated
        // EmailJS supports attachments via the "content" template variable
        // The template needs a {{pdf_attachment}} variable set up as attachment
        if (pdfBase64) {
            templateParams.pdf_attachment = pdfBase64;
        }

        await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
        return { success: true };
    } catch (err: any) {
        console.error('EmailJS send failed:', err);
        // Fall back to mailto if EmailJS errors
        return sendViaMailto(data, pdfBase64);
    }
}

/**
 * Fallback: opens the user's mail client with pre-filled data.
 * Also triggers a PDF download so they can attach it manually.
 */
function sendViaMailto(data: IntakeFormData, pdfBase64: string): { success: boolean } {
    // Trigger PDF download so user has the file
    if (pdfBase64) {
        try {
            const link = document.createElement('a');
            link.href = `data:application/pdf;base64,${pdfBase64}`;
            link.download = `Life-Balance-Intake_${data.name.replace(/\s+/g, '-')}.pdf`;
            link.click();
        } catch (e) {
            console.warn('PDF download failed:', e);
        }
    }

    const subject = encodeURIComponent(`New Patient Intake: ${data.name}`);
    const body = encodeURIComponent(
        `New Patient Intake Request\n` +
        `========================\n\n` +
        `Name: ${data.name}\n` +
        `Email: ${data.email}\n` +
        `Phone: ${data.phone}\n\n` +
        `--- Assessment (1-5 scale) ---\n` +
        `Anxiety: ${data.anxiety}/5\n` +
        `Depression: ${data.depression}/5\n` +
        `Sleep Issues: ${data.sleep}/5\n` +
        `Focus/Concentration: ${data.focus}/5\n` +
        `Mood Swings: ${data.mood}/5\n\n` +
        `Additional Notes:\n${data.message || '(none)'}` +
        `\n\n(A formatted PDF was also downloaded — please attach it to this email.)\n`
    );

    window.open(`mailto:jamesburge.mcm@gmail.com?subject=${subject}&body=${body}`, '_blank');
    return { success: true };
}
