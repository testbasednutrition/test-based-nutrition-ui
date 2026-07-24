import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle

def generate_pdf():
    pdf_path = "/Users/user/.gemini/antigravity-ide/brain/4fdaa61e-8309-4676-aa65-0bb647d2c3d1/EFSA_Compliance_Audit_Report.pdf"
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
    elements.append(Paragraph("EUROPEAN FOOD SAFETY AUTHORITY (EFSA) COMPLIANCE AUDIT", title_style))
    elements.append(Paragraph("Audit of Health & Nutrition Claims under EC Reg 1924/2006 & UK Retained GB Claims Register", subtitle_style))
    elements.append(HRFlowable(width="100%", thickness=1.5, color=colors.HexColor('#9f1e13'), spaceAfter=12))

    # Executive Summary Box
    summary_text = (
        "<b>Executive Legal Assessment:</b> This audit evaluates <b>Test-Based Nutrition</b> against the legal standards set by "
        "the <b>European Food Safety Authority (EFSA)</b> and the retained <b>Great Britain Nutrition and Health Claims Register (GB NHCR)</b> "
        "under EC Regulation No 1924/2006. The website positions its offerings around <b>laboratory biomarker measurement</b> "
        "(Omega-3 Index, Fatty Acid Ratios, HbA1c, Vitamin D) and <b>educational screening</b>, which falls squarely outside prohibited disease-cure claim restrictions."
    )
    
    summary_table = Table([[Paragraph(summary_text, body_style)]], colWidths=[540])
    summary_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor('#f0fdf4')),
        ('BOX', (0,0), (-1,-1), 1, colors.HexColor('#86efac')),
        ('PADDING', (0,0), (-1,-1), 8),
    ]))
    elements.append(summary_table)
    elements.append(Spacer(1, 10))

    # EFSA Evaluation Matrix
    elements.append(Paragraph("1. EFSA / GB Health Claim Pillar Evaluation", section_heading))

    efsa_data = [
        [
            Paragraph("EFSA Regulation Category", table_header_style),
            Paragraph("EFSA Legal Requirement", table_header_style),
            Paragraph("TBN Website Implementation & Audit Finding", table_header_style),
            Paragraph("Compliance Rating", table_header_style)
        ],
        [
            Paragraph("<b>Article 13.1</b><br/>General Function Claims", table_cell_bold),
            Paragraph("Nutrient claims must be authorized on EFSA/GB register (e.g. EPA/DHA for normal heart, brain & vision function).", table_cell_style),
            Paragraph("Content accurately describes EPA, DHA, and Vitamin D benefits in terms of normal cellular function, heart health, and immune support.", table_cell_style),
            Paragraph("<b>FULL COMPLIANCE</b>", table_cell_style)
        ],
        [
            Paragraph("<b>Article 14</b><br/>Disease Risk Reduction Claims", table_cell_bold),
            Paragraph("Strict prohibition of stating or implying that a food/supplement reduces risk of clinical disease without explicit authorization.", table_cell_style),
            Paragraph("No disease-cure or reduction claims made. Testing is presented as an objective measurement tool to guide lifestyle adjustments.", table_cell_style),
            Paragraph("<b>FULL COMPLIANCE</b>", table_cell_style)
        ],
        [
            Paragraph("<b>Article 10.2</b><br/>Mandatory Information", table_cell_bold),
            Paragraph("Health claims must be accompanied by statements on balanced diet, varied nutrition, and healthy lifestyle.", table_cell_style),
            Paragraph("Footer and pathway disclaimers explicitly emphasize the necessity of a balanced diet, lifestyle, and professional medical advice.", table_cell_style),
            Paragraph("<b>FULL COMPLIANCE</b>", table_cell_style)
        ],
        [
            Paragraph("<b>Biomarker vs Food</b><br/>Diagnostic Distinction", table_cell_bold),
            Paragraph("EFSA regulates commercial food/supplement marketing, not clinical blood spot screening or laboratory analysis.", table_cell_style),
            Paragraph("TBN operates primarily as a <b>test-based screening framework</b>. Measuring Omega-6:3 ratios in laboratory blood tests is fully compliant.", table_cell_style),
            Paragraph("<b>FULL COMPLIANCE</b>", table_cell_style)
        ]
    ]

    efsa_table = Table(efsa_data, colWidths=[110, 130, 210, 90])
    efsa_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#9f1e13')),
        ('ALIGN', (0,0), (-1,-1), 'LEFT'),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('GRID', (0,0), (-1,-1), 0.5, colors.HexColor('#e5e7eb')),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, colors.HexColor('#f9fafb')]),
        ('PADDING', (0,0), (-1,-1), 6),
    ]))
    elements.append(efsa_table)
    elements.append(Spacer(1, 10))

    # Key EFSA Approved Wording Reference
    elements.append(Paragraph("2. EFSA Authorized Wording Reference Guide for TBN Marketing", section_heading))
    
    ref_text = (
        "• <b>EPA & DHA (Omega-3 Fatty Acids)</b>: <i>'EPA and DHA contribute to the normal function of the heart'</i> (daily intake of 250mg).<br/>"
        "• <b>DHA (Brain & Vision)</b>: <i>'DHA contributes to maintenance of normal brain function and normal vision'</i> (daily intake of 250mg).<br/>"
        "• <b>Vitamin D</b>: <i>'Vitamin D contributes to the normal function of the immune system and the maintenance of normal bones, teeth, and muscle function.'</i><br/>"
        "• <b>Olive Oil Polyphenols</b>: <i>'Olive oil polyphenols contribute to the protection of blood lipids from oxidative stress'</i> (5mg hydroxytyrosol per 20g)."
    )

    ref_box = Table([[Paragraph(ref_text, body_style)]], colWidths=[540])
    ref_box.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor('#f9fafb')),
        ('BOX', (0,0), (-1,-1), 1, colors.HexColor('#d1d5db')),
        ('PADDING', (0,0), (-1,-1), 8),
    ]))
    elements.append(ref_box)

    doc.build(elements)
    print("EFSA compliance audit PDF generated at:", pdf_path)

if __name__ == "__main__":
    generate_pdf()
