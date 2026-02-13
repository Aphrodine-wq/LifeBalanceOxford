# EmailJS Setup Guide — Life Balance Intake Form

## How It Works

EmailJS sends emails **from your own Gmail account** (the one you authenticate with).
Patients never log in or authenticate — they just fill out the form. Their info
(name, phone, email) becomes content inside the email you receive.

**You authenticate once** in the EmailJS dashboard. After that, every form submission
sends an email from your account to your inbox with the patient's data + a formatted PDF.

---

## Setup (5 minutes)

### 1. Create EmailJS Account
- Go to **https://www.emailjs.com/** and sign up (free = 200 emails/month)

### 2. Add Your Gmail Service
1. Dashboard → **Email Services** → **Add New Service**
2. Choose **Gmail**
3. Complete the **OAuth authentication** with your Gmail account
4. This authorizes EmailJS to send on your behalf
5. **Copy your Service ID** (looks like `service_xxxxxxx`)

> **Important:** If it's not working later, delete and re-add the Gmail service
> to get the correct scopes (including `gmail.send`).

### 3. Create the Email Template
1. Dashboard → **Email Templates** → **Create New Template**
2. **Copy the Template ID** (looks like `template_xxxxxxx`)
3. Fill in these fields:

**To Email:**
```
jamesburge.mcm@gmail.com
```

**Subject:**
```
New Patient Intake: {{from_name}}
```

**Content — paste this entire block:**

```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b;">

  <div style="background-color: #0f172a; padding: 24px 28px; border-radius: 8px 8px 0 0;">
    <h1 style="color: #ffffff; font-size: 20px; margin: 0 0 4px 0;">Life Balance</h1>
    <p style="color: #94a3b8; font-size: 12px; margin: 0;">New Patient Intake Request</p>
  </div>

  <div style="height: 3px; background-color: #0f766e;"></div>

  <div style="padding: 28px; background-color: #ffffff; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">

    <p style="font-size: 11px; color: #0f766e; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 12px 0;">Patient Information</p>

    <table style="width: 100%; margin-bottom: 24px; border-collapse: collapse;">
      <tr>
        <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;">
          <span style="font-size: 11px; color: #94a3b8;">Name</span><br>
          <strong style="font-size: 14px;">{{from_name}}</strong>
        </td>
      </tr>
      <tr>
        <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;">
          <span style="font-size: 11px; color: #94a3b8;">Phone</span><br>
          <strong style="font-size: 14px;">{{from_phone}}</strong>
        </td>
      </tr>
      <tr>
        <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;">
          <span style="font-size: 11px; color: #94a3b8;">Email</span><br>
          <strong style="font-size: 14px;">{{from_email}}</strong>
        </td>
      </tr>
    </table>

    <p style="font-size: 11px; color: #0f766e; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 12px 0;">Symptom Assessment</p>

    <table style="width: 100%; margin-bottom: 24px; border-collapse: collapse;">
      <tr>
        <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; width: 50%;"><span style="font-size: 12px; color: #64748b;">Anxiety</span></td>
        <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; text-align: right;"><strong>{{anxiety}}</strong></td>
      </tr>
      <tr>
        <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;"><span style="font-size: 12px; color: #64748b;">Depression</span></td>
        <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; text-align: right;"><strong>{{depression}}</strong></td>
      </tr>
      <tr>
        <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;"><span style="font-size: 12px; color: #64748b;">Sleep Issues</span></td>
        <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; text-align: right;"><strong>{{sleep}}</strong></td>
      </tr>
      <tr>
        <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;"><span style="font-size: 12px; color: #64748b;">Focus</span></td>
        <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; text-align: right;"><strong>{{focus}}</strong></td>
      </tr>
      <tr>
        <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;"><span style="font-size: 12px; color: #64748b;">Mood Swings</span></td>
        <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; text-align: right;"><strong>{{mood}}</strong></td>
      </tr>
    </table>

    <p style="font-size: 11px; color: #0f766e; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px 0;">Additional Notes</p>
    <div style="background-color: #f8fafc; border-radius: 6px; padding: 14px; margin-bottom: 24px;">
      <p style="font-size: 13px; color: #334155; margin: 0; white-space: pre-wrap;">{{message}}</p>
    </div>

    <div style="border-top: 1px solid #e2e8f0; padding-top: 16px;">
      <p style="font-size: 11px; color: #94a3b8; margin: 0;">
        Submitted via lifebalanceoxford.com — a formatted PDF is also attached.
      </p>
    </div>
  </div>
</div>
```

### 4. Enable PDF Attachment
1. In the template editor, click the **Attachments** tab
2. Add a new attachment
3. Variable name: `pdf_attachment`
4. Filename: `intake-form.pdf`
5. Content type: `application/pdf`

### 5. Get Your Public Key
- Dashboard → **Account** → **API Keys**
- Copy your **Public Key**

### 6. Add Keys to .env.local
Open `.env.local` in the project root and fill in your real values:

```
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### 7. Restart Dev Server
```bash
# Stop current server (Ctrl+C), then:
npm run dev
```

### 8. Test
1. Open http://localhost:3000
2. Click "Request an Appointment"
3. Fill out the form → "Send Request"
4. Check your Gmail inbox — you should get a branded email + PDF attachment

---

## How the Code Sends It

```javascript
// This is what happens behind the scenes (you don't need to change this)
emailjs.send(
  "YOUR_SERVICE_ID",       // The Gmail service you authenticated
  "YOUR_TEMPLATE_ID",      // The template you just created
  {
    from_name: "Patient Name",       // Just data — goes into {{from_name}}
    from_email: "patient@email.com", // Just data — goes into {{from_email}}
    from_phone: "5551234567",        // Just data — goes into {{from_phone}}
    anxiety: "3 — Moderately",
    depression: "2 — A little",
    sleep: "4 — Quite a bit",
    focus: "1 — Not at all",
    mood: "2 — A little",
    message: "I've been struggling with...",
    pdf_attachment: "base64-encoded-pdf-data..."  // becomes the PDF attachment
  },
  "YOUR_PUBLIC_KEY"        // Your EmailJS public key
);
```

The email sends **from** your authenticated Gmail. The patient's email/phone are
just content in the body — they never authenticate anything.

---

## Template Variables Reference

| Variable | What it contains |
|---|---|
| `{{from_name}}` | Patient's full name |
| `{{from_email}}` | Patient's email address |
| `{{from_phone}}` | Patient's phone number |
| `{{anxiety}}` | Anxiety score (e.g. "3 — Moderately") |
| `{{depression}}` | Depression score |
| `{{sleep}}` | Sleep issues score |
| `{{focus}}` | Focus / concentration score |
| `{{mood}}` | Mood swings score |
| `{{message}}` | Free-text notes from the patient |
| `{{pdf_attachment}}` | Base64 PDF (auto-attached as file) |

---

## Troubleshooting

**Gmail auth not working:**
Delete the Gmail service in EmailJS and re-add it. Make sure you grant
the `gmail.send` scope during OAuth.

**No PDF attachment:**
Make sure you added `pdf_attachment` in the template's Attachments tab,
not in the email body.

**"Couldn't send" on the form:**
Check browser console (F12) for the specific error. Most common: wrong
Service ID, Template ID, or Public Key in `.env.local`.

**Free tier limit:**
200 emails/month on the free plan. If you're getting more intake requests
than that, that's a great problem to have — upgrade to the $10/mo plan.
