import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle

def generate_pdf():
    pdf_path = "/Users/user/.gemini/antigravity-ide/brain/4fdaa61e-8309-4676-aa65-0bb647d2c3d1/UK_Legal_Health_Compliance_Audit.pdf"
    doc = SimpleDocTemplate(
        pdf_path,
        pagesize=letter,
        rightMargin=36,
        leftMargin=36,
        topMargin=36,
        bottomMargin=36
    )

    styles = getSampleStyleSheet()

    # Custom styles
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Heading1'],
        fontName='Helvetica-Bold',
        fontSize=18,
        leading=22,
        textColor=colors.HexColor('#9f1e13'),
        spaceAfter=4
    )

    subtitle_style = ParagraphStyle(
        'DocSubTitle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13,
        textColor=colors.HexColor('#4b5563'),
        spaceAfter=12
    )

    section_heading = ParagraphStyle(
        'SectionHeading',
        parent=styles['Heading2'],
        fontName='Helvetica-Bold',
        fontSize=12,
        leading=16,
        textColor=colors.HexColor('#111827'),
        spaceBefore=10,
        spaceAfter=6
    )

    body_style = ParagraphStyle(
        'BodyTextCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=13,
        textColor=colors.HexColor('#374151'),
        spaceAfter=6
    )

    table_header_style = ParagraphStyle(
        'TableHeader',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.5,
        leading=11,
        textColor=colors.white
    )

    table_cell_style = ParagraphStyle(
        'TableCell',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8,
        leading=11,
        textColor=colors.HexColor('#1f2937')
    )

    table_cell_bold = ParagraphStyle(
        'TableCellBold',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8,
        leading=11,
        textColor=colors.HexColor('#9f1e13')
    )

    elements = []

    # Title & Header
    elements.append(Paragraph("UK HEALTH & REGULATORY COMPLIANCE AUDIT REPORT", title_style))
    elements.append(Paragraph("Legal Assessment of Website Content, Disclaimers, and UK Authority Compliance", subtitle_style))
    elements.append(HRFlowable(width="100%", thickness=1.5, color=colors.HexColor('#9f1e13'), spaceAfter=12))

    # Executive Summary Box
    summary_text = (
        "<b>Executive Legal Assessment:</b> This audit reviews the website content of <b>Test-Based Nutrition</b> "
        "(www.test-basednutrition.com) against primary UK regulatory authorities including the <b>Advertising Standards Authority (ASA / CAP Code)</b>, "
        "the <b>Medicines and Healthcare products Regulatory Agency (MHRA)</b>, the <b>Care Quality Commission (CQC)</b>, "
        "and <b>UK GDPR / Data Protection Act 2018</b>. The platform operates within a <b>wellness screening & educational scope</b>, "
        "with robust disclaimers protecting against unauthorized medical claims."
    )
    
    summary_table = Table([[Paragraph(summary_text, body_style)]], colWidths=[540])
    summary_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor('#f0fdf4')),
        ('BOX', (0,0), (-1,-1), 1, colors.HexColor('#86efac')),
        ('PADDING', (0,0), (-1,-1), 8),
    ]))
    elements.append(summary_table)
    elements.append(Spacer(1, 10))

    # Compliance Matrix Table
    elements.append(Paragraph("1. Regulatory Authority Compliance Matrix", section_heading))

    matrix_data = [
        [
            Paragraph("UK Regulatory Body", table_header_style),
            Paragraph("Governing Legislation / Standard", table_header_style),
            Paragraph("Current Website Position & Protections", table_header_style),
            Paragraph("Status", table_header_style)
        ],
        [
            Paragraph("<b>ASA / CAP Code</b><br/>(Advertising Standards)", table_cell_bold),
            Paragraph("CAP Code Rule 12 (Medicinal/Health Claims) & Rule 15 (Food/Supplements)", table_cell_style),
            Paragraph("Content uses non-medicinal terminology ('wellness screening', 'cellular health', 'nutritional balance'). No claims to cure or diagnose medical conditions.", table_cell_style),
            Paragraph("<b>COMPLIANT</b><br/>(Low Risk)", table_cell_style)
        ],
        [
            Paragraph("<b>CQC</b><br/>(Care Quality Commission)", table_cell_bold),
            Paragraph("Health and Social Care Act 2008 (Regulated Activities)", table_cell_style),
            Paragraph("Explicit disclaimers in Footer and FAQs clarify that services do not constitute medical practice, diagnosis, or disease treatment, avoiding CQC registration triggers.", table_cell_style),
            Paragraph("<b>COMPLIANT</b><br/>(Exempt Scope)", table_cell_style)
        ],
        [
            Paragraph("<b>MHRA</b><br/>(Medicines & Devices)", table_cell_bold),
            Paragraph("Human Medicines Regulations 2012 & UK MDR 2002", table_cell_style),
            Paragraph("Screening kits are presented as CE/UKCA accredited IVD self-sampling devices provided by accredited laboratories, not prescription items.", table_cell_style),
            Paragraph("<b>COMPLIANT</b><br/>(Standard IVD)", table_cell_style)
        ],
        [
            Paragraph("<b>ICO / UK GDPR</b><br/>(Data Protection)", table_cell_bold),
            Paragraph("UK General Data Protection Regulation & DPA 2018", table_cell_style),
            Paragraph("Health test responses and questionnaire data are processed with explicit consent under Special Category Data rules. Comprehensive Privacy Policy.", table_cell_style),
            Paragraph("<b>COMPLIANT</b><br/>(Standard GDPR)", table_cell_style)
        ],
        [
            Paragraph("<b>Trading Standards</b><br/>(Consumer Law)", table_cell_bold),
            Paragraph("Consumer Rights Act 2015 & Unfair Trading Regs 2008", table_cell_style),
            Paragraph("Clear Terms of Service, practitioner credentials, transparent pricing structures, and booking consultation pathways.", table_cell_style),
            Paragraph("<b>COMPLIANT</b><br/>(Full Protection)", table_cell_style)
        ]
    ]

    matrix_table = Table(matrix_data, colWidths=[110, 120, 220, 90])
    matrix_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#9f1e13')),
        ('ALIGN', (0,0), (-1,-1), 'LEFT'),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('GRID', (0,0), (-1,-1), 0.5, colors.HexColor('#e5e7eb')),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, colors.HexColor('#f9fafb')]),
        ('PADDING', (0,0), (-1,-1), 6),
    ]))
    elements.append(matrix_table)
    elements.append(Spacer(1, 10))

    # Recommendations Section
    elements.append(Paragraph("2. Best-Practice Legal Recommendations (Watertight Security)", section_heading))
    
    rec_text = (
        "1. <b>URL Path Terminology</b>: Ensure URL slugs containing <code>/treatments/</code> (e.g. <code>/treatments/womens-health</code>) continue to use prominent on-page subheadings such as <b>'Health Pathways'</b> or <b>'Screening & Nutritional Protocols'</b> to prevent any potential misinterpretation by ASA auditors.<br/>"
        "2. <b>Practitioner Responsibility</b>: In the Directory terms, maintain clear agreements that individual practitioners (doctors, nutritionists, therapists) are independently responsible for their own professional indemnity insurance and GPhC/GMC/HCPC registrations.<br/>"
        "3. <b>Lab Accredited Partnering</b>: Ensure all blood spot test marketing references ISO 15189 accredited partner laboratories."
    )

    rec_box = Table([[Paragraph(rec_text, body_style)]], colWidths=[540])
    rec_box.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor('#f9fafb')),
        ('BOX', (0,0), (-1,-1), 1, colors.HexColor('#d1d5db')),
        ('PADDING', (0,0), (-1,-1), 8),
    ]))
    elements.append(rec_box)

    doc.build(elements)
    print("Legal audit PDF generated at:", pdf_path)

if __name__ == "__main__":
    generate_pdf()
