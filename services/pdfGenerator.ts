import jsPDF from 'jspdf';

interface IntakeData {
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

const TEAL = [15, 118, 110] as const;     // teal-700
const DARK = [15, 23, 42] as const;       // slate-900
const MID = [100, 116, 139] as const;     // slate-500
const LIGHT_BG = [248, 250, 252] as const; // slate-50
const WHITE = [255, 255, 255] as const;
const BAR_BG = [226, 232, 240] as const;  // slate-300
const BAR_FILL = [20, 184, 166] as const; // teal-500

function scaleLabel(value: number): string {
    const labels: Record<number, string> = {
        0: 'Not rated',
        1: 'Not at all',
        2: 'A little',
        3: 'Moderate',
        4: 'A lot',
        5: 'Severe',
    };
    return labels[value] || `${value}`;
}

export function generateIntakePdf(data: IntakeData): string {
    const doc = new jsPDF({ unit: 'mm', format: 'a4' });
    const pageW = 210;
    const margin = 20;
    const contentW = pageW - margin * 2;
    let y = 0;

    // ─── Header banner ────────────────────────
    doc.setFillColor(...DARK);
    doc.rect(0, 0, pageW, 52, 'F');

    // Accent line
    doc.setFillColor(...TEAL);
    doc.rect(0, 52, pageW, 2, 'F');

    // Practice name
    doc.setTextColor(...WHITE);
    doc.setFontSize(22);
    doc.setFont('helvetica', 'bold');
    doc.text('Life Balance', margin, 22);

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(148, 163, 184); // slate-400
    doc.text('Psychiatric Services  ·  Oxford, Mississippi', margin, 30);

    // Document label
    doc.setFontSize(11);
    doc.setTextColor(94, 234, 212); // teal-300
    doc.setFont('helvetica', 'bold');
    doc.text('NEW PATIENT INTAKE', margin, 44);

    // Date on right
    const today = new Date();
    const dateStr = today.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(148, 163, 184);
    doc.text(dateStr, pageW - margin, 44, { align: 'right' });

    y = 66;

    // ─── Patient Info Card ────────────────────
    doc.setFillColor(...LIGHT_BG);
    doc.roundedRect(margin, y, contentW, 38, 3, 3, 'F');

    // Card header
    doc.setFontSize(8);
    doc.setTextColor(...TEAL);
    doc.setFont('helvetica', 'bold');
    doc.text('PATIENT INFORMATION', margin + 6, y + 8);

    // Info grid
    const infoY = y + 16;
    const col1 = margin + 6;
    const col2 = margin + 65;
    const col3 = margin + 125;

    // Name
    doc.setFontSize(8);
    doc.setTextColor(...MID);
    doc.setFont('helvetica', 'normal');
    doc.text('Full Name', col1, infoY);
    doc.setFontSize(11);
    doc.setTextColor(...DARK);
    doc.setFont('helvetica', 'bold');
    doc.text(data.name || '—', col1, infoY + 6);

    // Phone
    doc.setFontSize(8);
    doc.setTextColor(...MID);
    doc.setFont('helvetica', 'normal');
    doc.text('Phone', col2, infoY);
    doc.setFontSize(11);
    doc.setTextColor(...DARK);
    doc.setFont('helvetica', 'bold');
    doc.text(data.phone || '—', col2, infoY + 6);

    // Email
    doc.setFontSize(8);
    doc.setTextColor(...MID);
    doc.setFont('helvetica', 'normal');
    doc.text('Email', col3, infoY);
    doc.setFontSize(11);
    doc.setTextColor(...DARK);
    doc.setFont('helvetica', 'bold');
    doc.text(data.email || '—', col3, infoY + 6);

    y += 50;

    // ─── Assessment Section ───────────────────
    doc.setFontSize(8);
    doc.setTextColor(...TEAL);
    doc.setFont('helvetica', 'bold');
    doc.text('SYMPTOM ASSESSMENT', margin + 1, y);
    doc.setFontSize(7);
    doc.setTextColor(...MID);
    doc.setFont('helvetica', 'normal');
    doc.text('Self-reported over the past two weeks  ·  Scale: 1 (Not at all) to 5 (Severe)', margin + 43, y);

    y += 8;

    const assessments = [
        { label: 'Anxiety', value: data.anxiety, desc: 'Feeling nervous, anxious, or on edge' },
        { label: 'Depression', value: data.depression, desc: 'Feeling down, depressed, or hopeless' },
        { label: 'Sleep Issues', value: data.sleep, desc: 'Trouble falling or staying asleep' },
        { label: 'Focus', value: data.focus, desc: 'Difficulty concentrating on tasks' },
        { label: 'Mood Swings', value: data.mood, desc: 'Rapid changes in mood or energy' },
    ];

    assessments.forEach((item) => {
        const rowH = 18;

        // Row background (alternating)
        if (assessments.indexOf(item) % 2 === 0) {
            doc.setFillColor(252, 252, 253);
            doc.rect(margin, y, contentW, rowH, 'F');
        }

        // Label
        doc.setFontSize(10);
        doc.setTextColor(...DARK);
        doc.setFont('helvetica', 'bold');
        doc.text(item.label, margin + 6, y + 7);

        // Description
        doc.setFontSize(7);
        doc.setTextColor(...MID);
        doc.setFont('helvetica', 'normal');
        doc.text(item.desc, margin + 6, y + 13);

        // Bar background
        const barX = margin + 80;
        const barW = 60;
        const barH = 6;
        const barY = y + 4;

        doc.setFillColor(...BAR_BG);
        doc.roundedRect(barX, barY, barW, barH, 3, 3, 'F');

        // Bar fill
        if (item.value > 0) {
            const fillW = (item.value / 5) * barW;
            // Color intensity based on severity
            const r = item.value <= 2 ? 20 : item.value <= 3 ? 245 : 239;
            const g = item.value <= 2 ? 184 : item.value <= 3 ? 158 : 68;
            const b = item.value <= 2 ? 166 : item.value <= 3 ? 11 : 68;
            doc.setFillColor(r, g, b);
            doc.roundedRect(barX, barY, fillW, barH, 3, 3, 'F');
        }

        // Score text
        doc.setFontSize(11);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(...DARK);
        const scoreText = item.value > 0 ? `${item.value}/5` : '—';
        doc.text(scoreText, margin + 148, y + 8);

        // Scale label
        doc.setFontSize(7);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(...MID);
        doc.text(scaleLabel(item.value), margin + 148, y + 14);

        y += rowH;
    });

    // Divider
    y += 6;
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.3);
    doc.line(margin, y, pageW - margin, y);
    y += 10;

    // ─── Additional Notes ─────────────────────
    doc.setFontSize(8);
    doc.setTextColor(...TEAL);
    doc.setFont('helvetica', 'bold');
    doc.text('ADDITIONAL NOTES', margin + 1, y);
    y += 7;

    doc.setFillColor(...LIGHT_BG);
    const noteText = data.message?.trim() || 'No additional notes provided.';
    const noteLines = doc.splitTextToSize(noteText, contentW - 12);
    const noteH = Math.max(20, noteLines.length * 5 + 12);
    doc.roundedRect(margin, y, contentW, noteH, 3, 3, 'F');

    doc.setFontSize(9);
    doc.setTextColor(...DARK);
    doc.setFont('helvetica', 'normal');
    doc.text(noteLines, margin + 6, y + 8);

    y += noteH + 16;

    // ─── Footer ───────────────────────────────
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.3);
    doc.line(margin, y, pageW - margin, y);
    y += 8;

    doc.setFontSize(7);
    doc.setTextColor(...MID);
    doc.setFont('helvetica', 'normal');
    doc.text('This form was submitted through lifebalanceoxford.com', margin, y);
    doc.text('(662) 640-4004  ·  405 Galleria Drive, Suite E, Oxford, MS 38655', margin, y + 5);

    doc.setTextColor(180, 190, 200);
    doc.text('CONFIDENTIAL', pageW - margin, y + 2, { align: 'right' });

    // Return as base64 data URI
    return doc.output('datauristring');
}

/**
 * Triggers a browser download of the PDF
 */
export function downloadIntakePdf(data: IntakeData): void {
    const doc = rebuildDoc(data);
    doc.save(`Life-Balance-Intake_${data.name.replace(/\s+/g, '-')}.pdf`);
}

// We reuse the same layout logic for download
function rebuildDoc(data: IntakeData): jsPDF {
    // For download, we regenerate using the same approach.
    // Since generateIntakePdf returns a data URI string,
    // we just create a fresh one directly.
    const uri = generateIntakePdf(data);
    // jsPDF doesn't support re-hydrating from data URI easily,
    // so for download we'll just trigger from the data URI
    const link = document.createElement('a');
    link.href = uri;
    link.download = `Life-Balance-Intake_${data.name.replace(/\s+/g, '-')}.pdf`;
    link.click();
    return new jsPDF(); // dummy return
}
