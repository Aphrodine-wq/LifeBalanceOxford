# Life Balance Psychiatric Services -- Oxford, MS

Website and patient intake system for Life Balance Psychiatric Services.

## What it does

- Marketing website with services, team bios, testimonials, and contact info
- Multi-step patient intake form with clinical screening measures (GAD-7, PHQ-9, MDQ, PCL-C, ASRS)
- Generates a formatted PDF of intake data
- Sends intake submissions via EmailJS (branded email + PDF attachment to clinic inbox)
- MAT (Medication-Assisted Treatment) program information page
- Privacy policy page

## Stack

| Layer | Tech |
|-------|------|
| Framework | React 18, TypeScript, Vite |
| Styling | Tailwind CSS 4 |
| Routing | React Router 6 |
| Email | EmailJS (@emailjs/browser) |
| PDF | jsPDF |
| Analytics | Vercel Analytics |
| Hosting | Vercel |

## Project layout

```
lifebalance-oxford/
  components/           # Page sections (Hero, Services, Team, Contact, etc.)
    intake/             # Multi-step intake form (Step1, Step2, Review, measures)
  hooks/                # usePageMeta, useScrollReveal
  services/             # emailService, intakeTypes, pdfGenerator
  public/               # Images (team photos, hero, logo)
  App.tsx               # Main app with routing
  index.tsx             # Entry point
```

## Development

```bash
npm install
npm run dev        # Vite dev server
npm run build      # Production build
npm run preview    # Preview production build
```

## EmailJS setup

See [EMAILJS_SETUP.md](EMAILJS_SETUP.md) for configuration of the intake form email delivery.

Environment variables (set in .env.local and Vercel dashboard):

```
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

## Deployment

Deployed to Vercel. Domain: lifebalanceoxford.com
