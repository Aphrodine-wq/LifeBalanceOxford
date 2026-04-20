// Server-side EmailJS sender (REST API) — no extra npm dep.
// Requires the Private Key ("accessToken") so requests from a non-browser
// origin are accepted. Set strict origin checking to OFF in EmailJS settings
// OR add the Vercel prod domain to the allowlist.

export type EmailOutcome =
    | { status: 'sent'; messageId?: string }
    | { status: 'error'; error: string };

type SendReviewEmailArgs = {
    toEmail: string;
    firstName: string;
    reviewLink: string;
};

export async function sendReviewEmail({
    toEmail,
    firstName,
    reviewLink,
}: SendReviewEmailArgs): Promise<EmailOutcome> {
    const serviceId = process.env.EMAILJS_SERVICE_ID;
    const templateId = process.env.EMAILJS_REVIEW_TEMPLATE_ID;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY;
    const privateKey = process.env.EMAILJS_PRIVATE_KEY;

    if (!serviceId || !templateId || !publicKey || !privateKey) {
        return {
            status: 'error',
            error: 'EmailJS env vars missing (SERVICE_ID / REVIEW_TEMPLATE_ID / PUBLIC_KEY / PRIVATE_KEY).',
        };
    }

    try {
        const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                service_id: serviceId,
                template_id: templateId,
                user_id: publicKey,
                accessToken: privateKey,
                template_params: {
                    to_email: toEmail,
                    first_name: firstName,
                    review_link: reviewLink,
                },
            }),
        });

        if (!res.ok) {
            const body = await res.text();
            return { status: 'error', error: `EmailJS ${res.status}: ${body.slice(0, 300)}` };
        }

        return { status: 'sent' };
    } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : 'unknown email error';
        return { status: 'error', error: msg };
    }
}
