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
    const doc = new jsPDF({ unit: 'mm', format: 'a4', compress: true });
    const pageW = 210;
    const pageH = 297;
    const margin = 12; // Slightly reduced margin for more space
    const contentW = pageW - (margin * 2);
    let y = margin;

    // -- Styles --
    const setHeaderFont = () => {
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(14);
        doc.setTextColor(...WHITE);
    };
    const setSectionFont = () => {
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(11);
        doc.setTextColor(...TEAL);
    };
    const setLabelFont = () => {
        doc.setFont('helvetica', 'bold'); // Changed to bold for better readability
        doc.setFontSize(7); // Slightly smaller
        doc.setTextColor(...MID);
    };
    const setValueFont = () => {
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9);
        doc.setTextColor(...DARK);
    };
    const setSmallNoteFont = () => {
        doc.setFont('helvetica', 'italic');
        doc.setFontSize(8);
        doc.setTextColor(...MID);
    };

    // -- Helpers --
    const checkPageBreak = (neededH: number) => {
        if (y + neededH > pageH - margin) {
            doc.addPage();
            y = margin;
            return true;
        }
        return false;
    };

    const drawHeader = (title: string, subtitle: string = '') => {
        // Draw teal background
        doc.setFillColor(...TEAL);
        doc.rect(0, 0, pageW, 24, 'F');

        setHeaderFont();
        doc.text(title.toUpperCase(), margin, 16);

        if (subtitle) {
            doc.setFontSize(10);
            doc.setFont('helvetica', 'normal');
            doc.text(subtitle, pageW - margin, 16, { align: 'right' });
        }
        y = 34; // Start content below header
    };

    const drawSectionTitle = (title: string) => {
        checkPageBreak(12);
        y += 2; // spacing before
        setSectionFont();
        doc.text(title.toUpperCase(), margin, y);
        y += 2;
        doc.setDrawColor(...TEAL);
        doc.setLineWidth(0.5);
        doc.line(margin, y, pageW - margin, y);
        y += 5; // spacing after
    };

    // Compact field drawer: Label top, Value bottom
    const drawField = (label: string, value: string | undefined | null, xOffset: number, width: number) => {
        // We assume checkPageBreak is called by the row container, but let's be safe for large text
        // For simple fields, height is ~8mm
        setLabelFont();
        doc.text(label.toUpperCase(), margin + xOffset, y);

        setValueFont();
        const safeValue = (value === null || value === undefined || value === '') ? '—' : String(value);

        // Handle wrapping for long values
        const splitVal = doc.splitTextToSize(safeValue, width - 2);
        doc.text(splitVal, margin + xOffset, y + 4);

        return splitVal.length * 4; // Return height used by value
    };

    // -- Content Generation --

    // Header
    drawHeader('New Patient Intake Form', 'Life Balance Psychiatric Services');

    // 1. Demographics (Compact Grid)
    drawSectionTitle('Patient Information');

    // Row 1: Name (40%), DOB (20%), Email (40%)
    checkPageBreak(12);
    let h1 = drawField('Name', data.patientName, 0, contentW * 0.4);
    let h2 = drawField('Date of Birth', data.dob, contentW * 0.4, contentW * 0.2);
    let h3 = drawField('Email', data.email, contentW * 0.6, contentW * 0.4);
    y += Math.max(h1, h2, h3) + 4; // Row spacing

    // Row 2: Address (60%), Phone (40%)
    checkPageBreak(12);
    const fullAddress = `${data.address}, ${data.city}, ${data.state} ${data.zip}`;
    h1 = drawField('Address', fullAddress, 0, contentW * 0.6);
    h2 = drawField('Primary Phone', `${data.primaryPhone} (${data.primaryPhoneMayContact === 'yes' ? 'OK' : 'No'})`, contentW * 0.6, contentW * 0.4);
    y += Math.max(h1, h2) + 4;

    // Row 3: Marital (30%), Secondary Phone (40%), Gender? (leftover)
    checkPageBreak(12);
    h1 = drawField('Marital Status', data.maritalStatus, 0, contentW * 0.3);
    const secPhone = data.secondaryPhone ? `${data.secondaryPhone} (${data.secondaryPhoneMayContact === 'yes' ? 'OK' : 'No'})` : '—';
    h2 = drawField('Secondary Phone', secPhone, contentW * 0.3, contentW * 0.4);
    y += Math.max(h1, h2) + 6;

    // Guardian (if exists) - Compact single row if possible
    if (data.guardianName) {
        checkPageBreak(25);
        doc.setDrawColor(...BAR_BG);
        doc.setLineWidth(0.1);
        doc.line(margin, y - 2, pageW - margin, y - 2); // Separator

        h1 = drawField('Guardian Name', data.guardianName, 0, contentW * 0.35);
        h2 = drawField('Relationship/DOB', `DOB: ${data.guardianDob || '—'}`, contentW * 0.35, contentW * 0.25);
        h3 = drawField('Guardian Phone', data.guardianPhone, contentW * 0.6, contentW * 0.4);
        y += Math.max(h1, h2, h3) + 4;

        // Guardian Address
        const gAddress = `${data.guardianAddress}, ${data.guardianCity}, ${data.guardianState} ${data.guardianZip}`;
        let hAddr = drawField('Guardian Address', gAddress, 0, contentW);
        y += hAddr + 4;
    }

    // Emergency Contact & Providers (2 cols)
    checkPageBreak(35);
    drawSectionTitle('Emergency Contact & Providers');

    // Col 1: Emergency
    let curY = y;
    let colW = (contentW / 2) - 4;

    // Emergency
    setLabelFont(); doc.text('EMERGENCY CONTACT', margin, curY);
    setValueFont(); doc.text(`${data.emergencyName} (${data.emergencyRelationship})`, margin, curY + 4);

    // Emergency Address
    const eAddr = `${data.emergencyAddress}, ${data.emergencyCity}, ${data.emergencyState}`;
    const eLines = doc.splitTextToSize(eAddr, colW);
    doc.text(eLines, margin, curY + 9);

    const phoneY = curY + 9 + (eLines.length * 4);
    doc.text(data.emergencyPhone, margin, phoneY);

    // Consent
    setSmallNoteFont();
    const consentY = phoneY + 5;
    doc.text(`Consent: ${data.emergencyConsentSignature || 'None'}`, margin, consentY);

    const emergencyH = Math.max(20, consentY - curY + 5);

    // Col 2: Providers
    let rightX = margin + (contentW / 2) + 4;
    let col2Y = y;
    const col2W = (contentW / 2) - 4;

    setLabelFont(); doc.text('PRIMARY CARE PHYSICIAN', rightX, col2Y);
    setValueFont();
    const pcpText = `${data.pcpName} (${data.pcpPhone})`;
    const pcpLines = doc.splitTextToSize(pcpText, col2W);
    doc.text(pcpLines, rightX, col2Y + 4);

    col2Y += 4 + (pcpLines.length * 4) + 4;

    setLabelFont(); doc.text('PHARMACY', rightX, col2Y);
    setValueFont();
    const pharmText = `${data.pharmacyName} (${data.pharmacyCityState})`;
    const pharmLines = doc.splitTextToSize(pharmText, col2W);
    doc.text(pharmLines, rightX, col2Y + 4);

    const providersH = (col2Y + 4 + (pharmLines.length * 4)) - y;

    y += Math.max(emergencyH, providersH) + 6;

    // Insurance & Payment
    checkPageBreak(25);
    drawSectionTitle('Insurance & Payment');

    checkPageBreak(12);
    h1 = drawField('Insurance Carrier', data.insuranceCompany, 0, contentW * 0.3);
    h2 = drawField('Member ID', data.memberId, contentW * 0.3, contentW * 0.25);
    h3 = drawField('Group', data.groupNumber, contentW * 0.55, contentW * 0.2);
    let h4 = drawField('Policy Holder', `${data.policyholderName} (${data.policyholderRelationship})`, contentW * 0.75, contentW * 0.25);
    y += Math.max(h1, h2, h3, h4) + 4;

    checkPageBreak(12);
    h1 = drawField('Payment Method', data.creditCardCompany, 0, contentW * 0.5);
    h2 = drawField('Policy Accepted', data.cancellationPolicyAcknowledged ? 'Yes' : 'No', contentW * 0.5, contentW * 0.5);
    y += Math.max(h1, h2) + 6;

    // Medical History
    drawSectionTitle('Medical History');

    // Reason
    checkPageBreak(15);
    h1 = drawField('Reason for Visit', data.reasonForVisit, 0, contentW);
    y += h1 + 4;

    // Meds
    checkPageBreak(15);
    setLabelFont(); doc.text('CURRENT MEDICATIONS', margin, y);
    y += 4;
    setValueFont();
    if (data.currentMedications.length && data.currentMedications[0].medication) {
        data.currentMedications.forEach(m => {
            checkPageBreak(6);
            doc.text(`• ${m.medication} (${m.howOften}) - Started: ${m.dateStarted}`, margin + 4, y);
            y += 5;
        });
    } else {
        doc.text('None listed', margin + 4, y);
        y += 5;
    }
    y += 2;

    // Three blocks: Symptoms, Physical, Family (Compact blocks)
    const drawBlock = (title: string, items: string[], other: string | undefined) => {
        checkPageBreak(15);
        setLabelFont(); doc.text(title.toUpperCase(), margin, y);
        y += 4;
        setValueFont();
        const text = items.join(', ') + (other ? `, ${other}` : '');
        const lines = doc.splitTextToSize(text || 'None', contentW);
        doc.text(lines, margin, y);
        y += lines.length * 4.5 + 4;
    };

    drawBlock('Current Symptoms', data.currentSymptoms, undefined);
    drawBlock('Physical Illnesses', data.physicalIllnesses, data.physicalIllnessOther);
    drawBlock('Family History', data.familyHistory, data.familyHistoryOther);

    if (data.suicidalThoughts === 'yes') {
        checkPageBreak(10);
        doc.setTextColor(200, 50, 50); // Warning Red
        doc.setFontSize(9); doc.setFont('helvetica', 'bold');
        doc.text(`⚠️ HISTORY OF SUICIDAL THOUGHTS: ${data.suicidalThoughtsDetail}`, margin, y);
        y += 8;
    }


    // ─── Measures (Compact Grid) ───
    // We try to fit Measures on same page if space permits, otherwise break.
    // Given the compact nature, we might fit one or two.

    const drawMeasureGrid = (title: string, questions: string[], answers: number[], labels: string[]) => {
        // Calculate needed height approx
        const estH = 10 + (questions.length * 6) + 10;
        checkPageBreak(estH);

        drawSectionTitle(title);

        doc.setFontSize(8);
        questions.forEach((q, i) => {
            checkPageBreak(7);
            // Stripe
            if (i % 2 === 0) {
                doc.setFillColor(...LIGHT_BG);
                doc.rect(margin, y - 2, contentW, 6, 'F');
            }

            doc.setTextColor(...DARK);
            doc.setFont('helvetica', 'normal');
            doc.text(`${i + 1}.`, margin + 2, y + 2);
            doc.text(q.substring(0, 95) + (q.length > 95 ? '...' : ''), margin + 8, y + 2);

            const ans = answers[i];
            doc.setFont('helvetica', 'bold');
            const ansText = ans >= 0 ? String(ans) : '—';
            doc.text(ansText, pageW - margin - 5, y + 2, { align: 'right' });

            y += 6; // tighter row height
        });

        // Total
        const score = answers.reduce((a, b) => a + (b >= 0 ? b : 0), 0);
        y += 2;
        doc.setFont('helvetica', 'bold');
        doc.text(`Total Score: ${score}`, pageW - margin - 5, y, { align: 'right' });
        y += 8;
    };

    drawMeasureGrid('PHQ-9 (Depression)', [
        'Little interest or pleasure in doing things',
        'Feeling down, depressed, or hopeless',
        'Trouble falling/sticking asleep, or sleeping too much',
        'Feeling tired or having little energy',
        'Poor appetite or overeating',
        'Feeling bad about yourself / let family down',
        'Trouble concentrating on things',
        'Moving/speaking slowly or fidgety/restless',
        'Thoughts that you would be better off dead'
    ], data.phq9, []);

    if (data.phq9Difficulty) {
        checkPageBreak(8);
        setSmallNoteFont();
        doc.text(`Difficulty: ${data.phq9Difficulty}`, margin, y);
        y += 8;
    }

    drawMeasureGrid('GAD-7 (Anxiety)', [
        'Feeling nervous, anxious, or on edge',
        'Not being able to stop or control worrying',
        'Worrying too much about different things',
        'Trouble relaxing',
        'Being so restless that it is hard to sit still',
        'Becoming easily annoyed or irritable',
        'Feeling afraid, as if something awful might happen'
    ], data.gad7, []);

    // ─── Additional Screenings (Full Grid) ───

    // MDQ (Mood Disorder Questionnaire)
    const MDQ_PDF_ITEMS = [
        'Felt so good/hyper that others thought you weren\'t yourself, or got into trouble?',
        'Were so irritable that you shouted at people or started fights or arguments?',
        'Felt much more self-confident than usual?',
        'Got much less sleep than usual and found you didn\'t really miss it?',
        'Were much more talkative or spoke much faster than usual?',
        'Had thoughts racing through your head that you couldn\'t slow down?',
        'Were so easily distracted that you had trouble concentrating or staying on track?',
        'Had much more energy than usual?',
        'Were much more active or did many more things than usual?',
        'Were much more social or outgoing than usual?',
        'Were much more interested in sex than usual?',
        'Did things unusual for you that others might have thought excessive, foolish, or risky?',
        'Spending money got you or your family into trouble?',
    ];

    checkPageBreak(20);
    drawSectionTitle('MDQ (Mood Disorder Questionnaire)');

    checkPageBreak(8);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'italic');
    doc.setTextColor(...MID);
    doc.text('1. Has there ever been a period of time when you were not your usual self and...', margin + 2, y);
    y += 7;

    MDQ_PDF_ITEMS.forEach((q, i) => {
        checkPageBreak(7);
        if (i % 2 === 0) {
            doc.setFillColor(...LIGHT_BG);
            doc.rect(margin, y - 2, contentW, 6, 'F');
        }
        doc.setTextColor(...DARK);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8);
        doc.text(`${String.fromCharCode(97 + i)}.`, margin + 2, y + 2);
        doc.text(q.substring(0, 95) + (q.length > 95 ? '...' : ''), margin + 8, y + 2);
        doc.setFont('helvetica', 'bold');
        doc.text(data.mdqItems[i] ? 'Yes' : 'No', pageW - margin - 5, y + 2, { align: 'right' });
        y += 6;
    });

    const mdqYesTotal = data.mdqItems.filter(Boolean).length;
    y += 2;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(...DARK);
    doc.text(`Total: ${mdqYesTotal}/13 Yes`, pageW - margin - 5, y, { align: 'right' });
    y += 6;

    const mdqFollowUps = [
        { q: '2. Did several of these happen during the same period of time?', val: data.mdqSameTime },
        { q: '3. How much of a problem did any of these cause you?', val: data.mdqProblemLevel },
        { q: '4. Blood relatives ever had manic-depressive illness or bipolar disorder?', val: data.mdqFamilyHistory },
        { q: '5. Has a health professional told you that you have bipolar disorder?', val: data.mdqProfessionalDiagnosis },
    ];
    mdqFollowUps.forEach((fu, i) => {
        checkPageBreak(7);
        if (i % 2 === 0) {
            doc.setFillColor(...LIGHT_BG);
            doc.rect(margin, y - 2, contentW, 6, 'F');
        }
        doc.setTextColor(...DARK);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8);
        doc.text(fu.q.substring(0, 95), margin + 2, y + 2);
        doc.setFont('helvetica', 'bold');
        doc.text(fu.val || '—', pageW - margin - 5, y + 2, { align: 'right' });
        y += 6;
    });
    y += 4;

    // PCL-C (PTSD Checklist — Civilian)
    drawMeasureGrid('PCL-C (PTSD Checklist — Civilian)', [
        'Repeated, disturbing memories, thoughts, or images of a stressful past experience',
        'Repeated, disturbing dreams of a stressful experience from the past',
        'Suddenly acting or feeling as if a stressful experience were happening again',
        'Feeling very upset when something reminded you of a stressful experience',
        'Physical reactions (heart pounding, trouble breathing) when reminded of past stress',
        'Avoiding thinking about or talking about a stressful experience from the past',
        'Avoiding activities or situations because they reminded you of a stressful experience',
        'Trouble remembering important parts of a stressful experience from the past',
        'Loss of interest in activities that you used to enjoy',
        'Feeling distant or cut off from other people',
        'Feeling emotionally numb or unable to have loving feelings for those close to you',
        'Feeling as if your future will somehow be cut short',
        'Trouble falling or staying asleep',
        'Feeling irritable or having angry outbursts',
        'Having difficulty concentrating',
        'Being "super-alert" or watchful or on guard',
        'Feeling jumpy or easily startled',
    ], data.pclc, []);

    {
        const pclcTotal = data.pclc.reduce((a, b) => a + (b >= 1 ? b : 0), 0);
        const pclcSev = pclcTotal < 28 ? 'Below clinical threshold' : pclcTotal < 44 ? 'Possible PTSD' : 'Probable PTSD';
        checkPageBreak(8);
        setSmallNoteFont();
        doc.text(`Severity: ${pclcSev} (range 17-85; clinical threshold >=28)`, margin, y);
        y += 8;
    }

    // ASRS (ADHD) — Part A
    drawMeasureGrid('ASRS (ADHD) — Part A', [
        'Trouble wrapping up final details of a project after the challenging parts are done?',
        'Difficulty getting things in order when doing a task that requires organization?',
        'Problems remembering appointments or obligations?',
        'Avoid or delay getting started on tasks that require a lot of thought?',
        'Fidget or squirm with hands or feet when you have to sit down for a long time?',
        'Feel overly active and compelled to do things, like driven by a motor?',
    ], data.asrs.slice(0, 6), []);

    {
        const partAScreenScore = data.asrs.slice(0, 6).filter(v => v >= 2).length;
        checkPageBreak(8);
        setSmallNoteFont();
        doc.text(`Part A Screening Score: ${partAScreenScore}/6 items at or above threshold (0=Never to 4=Very Often; cutoff >=2)`, margin, y);
        y += 8;
    }

    // ASRS (ADHD) — Part B
    drawMeasureGrid('ASRS (ADHD) — Part B', [
        'Make careless mistakes when working on a boring or difficult project?',
        'Difficulty keeping attention when doing boring or repetitive work?',
        'Difficulty concentrating on what people say, even when speaking to you directly?',
        'Misplace or have difficulty finding things at home or at work?',
        'Distracted by activity or noise around you?',
        'Leave your seat in meetings when expected to remain seated?',
        'Feel restless or fidgety?',
        'Difficulty unwinding and relaxing when you have time to yourself?',
        'Find yourself talking too much in social situations?',
        'Find yourself finishing others\' sentences before they can finish themselves?',
        'Difficulty waiting your turn in situations when turn taking is required?',
        'Interrupt others when they are busy?',
    ], data.asrs.slice(6), []);

    y += 4;

    // Footer
    const footerY = pageH - 15;
    if (y < footerY) {
        // Draw footer on last page
        doc.setDrawColor(...BAR_BG);
        doc.line(margin, footerY, pageW - margin, footerY);
        setSmallNoteFont();
        doc.text(`Generated on ${new Date().toLocaleDateString()} - Life Balance Psychiatric Services`, margin, footerY + 5);
    }

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
