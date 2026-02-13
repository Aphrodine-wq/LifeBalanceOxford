import jsPDF from 'jspdf';
import type { FullIntakeData } from './intakeTypes';

const TEAL = [15, 118, 110] as const;     // teal-700
const DARK = [15, 23, 42] as const;       // slate-900
const MID = [100, 116, 139] as const;     // slate-500
const LIGHT_BG = [248, 250, 252] as const; // slate-50
const WHITE = [255, 255, 255] as const;
const BAR_BG = [226, 232, 240] as const;  // slate-300

// Helper to check if a value is meaningful
const hasVal = (v: any) => v && v !== '' && v !== -1;

export function generateIntakePdf(data: FullIntakeData): string {
    const doc = new jsPDF({ unit: 'mm', format: 'a4' });
    const pageW = 210;
    const pageH = 297;
    const margin = 15;
    const contentW = pageW - margin * 2;
    let y = 0;

    // Helper functions
    const addPage = () => {
        doc.addPage();
        y = margin;
    };

    const checkPageBreak = (h: number) => {
        if (y + h > pageH - margin) {
            addPage();
        }
    };

    const drawHeader = (title: string) => {
        doc.setFillColor(...TEAL);
        doc.rect(0, 0, pageW, 20, 'F');
        doc.setFontSize(14);
        doc.setTextColor(...WHITE);
        doc.setFont('helvetica', 'bold');
        doc.text(title, margin, 13);
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.text('Life Balance Psychiatric Services', pageW - margin, 13, { align: 'right' });
        y = 30;
    };

    const drawSectionTitle = (title: string) => {
        checkPageBreak(15);
        doc.setFontSize(11);
        doc.setTextColor(...TEAL);
        doc.setFont('helvetica', 'bold');
        doc.text(title.toUpperCase(), margin, y);
        doc.setLineWidth(0.5);
        doc.setDrawColor(...TEAL);
        doc.line(margin, y + 2, pageW - margin, y + 2);
        y += 10;
    };

    const drawField = (label: string, value: string | undefined, w: number = contentW, sameLine: boolean = false) => {
        // Simple simplified field drawing
        checkPageBreak(10);
        doc.setFontSize(8);
        doc.setTextColor(...MID);
        doc.setFont('helvetica', 'normal');
        doc.text(label, margin, y);

        doc.setFontSize(10);
        doc.setTextColor(...DARK);
        doc.setFont('helvetica', 'bold');
        doc.text(value || '—', margin, y + 5);

        if (!sameLine) y += 12;
        // NOTE: multiline / width logic omitted for brevity in this helper, 
        // specialized drawing below for complex layouts
    };

    // ─── PAGE 1: DEMOGRAPHICS ────────────────────────
    drawHeader('New Patient Intake Form');

    drawSectionTitle('Patient Information');

    // Row 1
    doc.setFontSize(8); doc.setTextColor(...MID); doc.setFont('helvetica', 'normal');
    doc.text('Name', margin, y);
    doc.text('DOB', margin + 80, y);
    doc.text('Email', margin + 120, y);
    doc.setFontSize(10); doc.setTextColor(...DARK); doc.setFont('helvetica', 'bold');
    doc.text(data.patientName, margin, y + 5);
    doc.text(data.dob || '—', margin + 80, y + 5);
    doc.text(data.email, margin + 120, y + 5);
    y += 12;

    // Row 2
    doc.setFontSize(8); doc.setTextColor(...MID); doc.setFont('helvetica', 'normal');
    doc.text('Address', margin, y);
    doc.text('Phone (Primary)', margin + 120, y);
    doc.setFontSize(10); doc.setTextColor(...DARK); doc.setFont('helvetica', 'bold');
    doc.text(`${data.address}, ${data.city}, ${data.state} ${data.zip}`, margin, y + 5);
    doc.text(`${data.primaryPhone} (${data.primaryPhoneMayContact === 'yes' ? 'OK to contact' : 'No contact'})`, margin + 120, y + 5);
    y += 12;

    // Row 3
    doc.setFontSize(8); doc.setTextColor(...MID); doc.setFont('helvetica', 'normal');
    doc.text('Marital Status', margin, y);
    doc.text('Phone (Secondary)', margin + 120, y);
    doc.setFontSize(10); doc.setTextColor(...DARK); doc.setFont('helvetica', 'bold');
    doc.text(data.maritalStatus || '—', margin, y + 5);
    doc.text(data.secondaryPhone ? `${data.secondaryPhone} (${data.secondaryPhoneMayContact === 'yes' ? 'OK' : 'No'})` : '—', margin + 120, y + 5);
    y += 18;

    if (data.guardianName) {
        drawSectionTitle('Parent / Guardian');
        doc.setFontSize(9); doc.setTextColor(...DARK); doc.setFont('helvetica', 'normal');
        doc.text(`${data.guardianName} (DOB: ${data.guardianDob || '—'})`, margin, y);
        y += 5;
        doc.text(`Phone: ${data.guardianPhone}`, margin, y);
        y += 5;
        doc.text(`Address: ${data.guardianAddress}, ${data.guardianCity}, ${data.guardianState} ${data.guardianZip}`, margin, y);
        y += 12;
    }

    drawSectionTitle('Emergency Contact');
    doc.setFontSize(10); doc.setTextColor(...DARK); doc.setFont('helvetica', 'bold');
    doc.text(`${data.emergencyName} (${data.emergencyRelationship})`, margin, y);
    y += 5;
    doc.setFontSize(9); doc.setFont('helvetica', 'normal');
    doc.text(`Phone: ${data.emergencyPhone}`, margin, y);
    y += 5;
    doc.text(`Address: ${data.emergencyAddress}, ${data.emergencyCity}, ${data.emergencyState} ${data.emergencyZip}`, margin, y);
    y += 8;
    doc.setFontSize(8); doc.setTextColor(...MID); doc.setFont('helvetica', 'italic');
    doc.text(`Consent Signature: ${data.emergencyConsentSignature || 'Not signed'}`, margin, y);
    y += 15;

    drawSectionTitle('Insurance & Payment');
    doc.setFontSize(9); doc.setTextColor(...DARK); doc.setFont('helvetica', 'normal');
    doc.text(`Carrier: ${data.insuranceCompany}`, margin, y);
    doc.text(`Policyholder: ${data.policyholderName} (${data.policyholderRelationship})`, margin + 100, y);
    y += 5;
    doc.text(`Member ID: ${data.memberId}`, margin, y);
    doc.text(`Group: ${data.groupNumber}`, margin + 100, y);
    y += 8;
    doc.text(`Credit Card on File: ${data.creditCardCompany} ending in ${data.creditCardNumber.slice(-4)}`, margin, y);
    y += 5;
    doc.text(`Cancellation Policy Accepted: ${data.cancellationPolicyAcknowledged ? 'YES' : 'NO'}`, margin, y);
    y += 15;

    drawSectionTitle('Providers');
    doc.setFontSize(9); doc.setTextColor(...DARK); doc.setFont('helvetica', 'normal');
    doc.text(`PCP: ${data.pcpName} (${data.pcpPhone}) - Contact OK: ${data.pcpPermissionToContact}`, margin, y);
    y += 5;
    doc.text(`Pharmacy: ${data.pharmacyName} (${data.pharmacyCityState})`, margin, y);
    y += 15;

    drawSectionTitle('Medical History');

    // Reason
    doc.setFontSize(8); doc.setTextColor(...MID); doc.text('Reason for Visit:', margin, y); y += 4;
    doc.setFontSize(10); doc.setTextColor(...DARK);
    const reasonLines = doc.splitTextToSize(data.reasonForVisit || '—', contentW);
    doc.text(reasonLines, margin, y);
    y += reasonLines.length * 5 + 8;

    // Current Meds
    doc.setFontSize(8); doc.setTextColor(...MID); doc.text('Current Medications:', margin, y); y += 4;
    if (data.currentMedications.length && data.currentMedications[0].medication) {
        data.currentMedications.forEach(m => {
            checkPageBreak(5);
            doc.setFontSize(9); doc.setTextColor(...DARK);
            doc.text(`• ${m.medication} (${m.howOften}) - Started: ${m.dateStarted}`, margin + 5, y);
            y += 5;
        });
    } else {
        doc.setFontSize(9); doc.setTextColor(...DARK); doc.text('None listed', margin + 5, y);
        y += 5;
    }
    y += 5;

    checkPageBreak(40);

    // Symptoms
    doc.setFontSize(8); doc.setTextColor(...MID); doc.text('Current Symptoms:', margin, y); y += 4;
    doc.setFontSize(9); doc.setTextColor(...DARK);
    const symLines = doc.splitTextToSize(data.currentSymptoms.join(', ') || 'None', contentW);
    doc.text(symLines, margin, y);
    y += symLines.length * 5 + 5;

    // Suicidal
    if (data.suicidalThoughts === 'yes') {
        doc.setTextColor(200, 50, 50); // Red
        doc.text(`History of Suicidal Thoughts: YES - ${data.suicidalThoughtsDetail}`, margin, y);
        doc.setTextColor(...DARK);
        y += 8;
    }

    // Physical Illnesses
    doc.setFontSize(8); doc.setTextColor(...MID); doc.text('Physical Illnesses:', margin, y); y += 4;
    doc.setFontSize(9); doc.setTextColor(...DARK);
    const physLines = doc.splitTextToSize(data.physicalIllnesses.join(', ') + (data.physicalIllnessOther ? `, ${data.physicalIllnessOther}` : '') || 'None', contentW);
    doc.text(physLines, margin, y);
    y += physLines.length * 5 + 5;

    // Family History
    doc.setFontSize(8); doc.setTextColor(...MID); doc.text('Family History:', margin, y); y += 4;
    doc.setFontSize(9); doc.setTextColor(...DARK);
    const famLines = doc.splitTextToSize(data.familyHistory.join(', ') + (data.familyHistoryOther ? `, ${data.familyHistoryOther}` : '') || 'None', contentW);
    doc.text(famLines, margin, y);
    y += famLines.length * 5 + 5;

    // ─── PAGE 2+: MEASURES ────────────────────────
    addPage();
    drawHeader('Clinical Measures');

    // Helper for grid scales (PHQ-9, GAD-7)
    const drawGridScale = (title: string, questions: string[], answers: number[], labels: string[]) => {
        drawSectionTitle(title);
        checkPageBreak(questions.length * 8 + 20);

        doc.setFontSize(9);
        doc.setTextColor(...MID);

        questions.forEach((q, i) => {
            checkPageBreak(12);
            // Bg stripe
            if (i % 2 === 0) {
                doc.setFillColor(248, 250, 252);
                doc.rect(margin, y - 3, contentW, 10, 'F');
            }

            doc.setTextColor(...DARK);
            doc.setFont('helvetica', 'normal');
            doc.text(`${i + 1}.`, margin + 2, y + 3);
            doc.text(q.substring(0, 85) + (q.length > 85 ? '...' : ''), margin + 10, y + 3);

            const ans = answers[i];
            if (ans >= 0) {
                doc.setFont('helvetica', 'bold');
                doc.text(`${ans}`, pageW - margin - 10, y + 3, { align: 'right' });
            } else {
                doc.text('—', pageW - margin - 10, y + 3, { align: 'right' });
            }

            y += 8;
        });

        const score = answers.reduce((a, b) => a + (b >= 0 ? b : 0), 0);
        y += 2;
        doc.setFont('helvetica', 'bold');
        doc.text(`Total Score: ${score}`, pageW - margin - 10, y, { align: 'right' });
        y += 10;
    };

    // PHQ-9
    drawGridScale('PHQ-9 (Depression)', [
        'Little interest or pleasure', 'Feeling down, depressed, hopeless', 'Sleep trouble', 'Tired/low energy',
        'Appetite changes', 'Failure/let down', 'Concentration trouble', 'Moving slow/restless',
        'Thoughts of dead/hurting self'
    ], data.phq9, ['0', '1', '2', '3']);

    if (data.phq9Difficulty) {
        doc.setFontSize(9); doc.setFont('helvetica', 'italic');
        doc.text(`Difficulty caused by problems: ${data.phq9Difficulty}`, margin, y);
        y += 10;
    }

    // GAD-7
    drawGridScale('GAD-7 (Anxiety)', [
        'Nervous, anxious, on edge', 'Uncontrollable worrying', 'Worrying too much', 'Trouble relaxing',
        'Restless/hard to sit', 'Easily annoyed/irritable', 'Afraid something awful might happen'
    ], data.gad7, ['0', '1', '2', '3']);

    // MDQ
    drawSectionTitle('MDQ (Mood Disorder)');
    doc.setFontSize(9); doc.setTextColor(...DARK); doc.setFont('helvetica', 'normal');
    const mdqYes = data.mdqItems.filter(Boolean).length;
    doc.text(`Total "Yes" Answers: ${mdqYes} / 13`, margin, y); y += 5;
    doc.text(`Co-occurrence (same time): ${data.mdqSameTime || '—'}`, margin, y); y += 5;
    doc.text(`Problem Severity: ${data.mdqProblemLevel || '—'}`, margin, y); y += 5;
    doc.text(`Family History: ${data.mdqFamilyHistory || '—'}`, margin, y); y += 10;

    checkPageBreak(50);

    // PCL-C
    const pclcScore = data.pclc.reduce((a, b) => a + (b >= 1 ? b : 0), 0);
    drawSectionTitle(`PCL-C (PTSD) - Score: ${pclcScore}`);
    // Summary only to save space
    doc.setFontSize(8); doc.setTextColor(...MID);
    doc.text('17 items rated 1-5. Full details available in EMR.', margin, y);
    y += 10;

    // ASRS
    const asrsAnswered = data.asrs.filter(v => v >= 0).length;
    drawSectionTitle(`ASRS (ADHD) - Answered: ${asrsAnswered}/18`);
    const partAScore = data.asrs.slice(0, 6).filter(v => v >= 2).length; // Rough screening metric (often/very often usually)
    doc.setFontSize(9); doc.setTextColor(...DARK);
    doc.text(`Part A Hints (Items 1-6 high scores): ${partAScore}`, margin, y);
    y += 10;

    // ─── FINAL FOOTER ────────────────────────
    checkPageBreak(20);
    y = pageH - 20;
    doc.setDrawColor(200, 200, 200);
    doc.line(margin, y, pageW - margin, y);
    doc.setFontSize(8); doc.setTextColor(...MID);
    doc.text(`Generated on ${new Date().toLocaleDateString()} via Life Balance Intake Portal`, margin, y + 5);

    return doc.output('datauristring');
}

export function downloadIntakePdf(data: FullIntakeData): void {
    // same implementation as before, just calling the new generate
    const uri = generateIntakePdf(data);
    const link = document.createElement('a');
    link.href = uri;
    link.download = `Life-Balance-Intake_${data.patientName.replace(/\s+/g, '-')}.pdf`;
    link.click();
}
