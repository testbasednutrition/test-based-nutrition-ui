import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable, KeepTogether
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle

def generate_pdf():
    pdf_path = "/Users/user/.gemini/antigravity-ide/brain/4fdaa61e-8309-4676-aa65-0bb647d2c3d1/Zinzino_Mentions_Audit_Report.pdf"
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
        fontSize=20,
        leading=24,
        textColor=colors.HexColor('#9f1e13'),
        spaceAfter=6
    )

    subtitle_style = ParagraphStyle(
        'DocSubTitle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=10,
        leading=14,
        textColor=colors.HexColor('#555555'),
        spaceAfter=15
    )

    section_heading = ParagraphStyle(
        'SectionHeading',
        parent=styles['Heading2'],
        fontName='Helvetica-Bold',
        fontSize=13,
        leading=17,
        textColor=colors.HexColor('#111827'),
        spaceBefore=12,
        spaceAfter=8
    )

    body_style = ParagraphStyle(
        'BodyTextCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=14,
        textColor=colors.HexColor('#374151'),
        spaceAfter=8
    )

    table_header_style = ParagraphStyle(
        'TableHeader',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9,
        leading=12,
        textColor=colors.white
    )

    table_cell_style = ParagraphStyle(
        'TableCell',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=colors.HexColor('#1f2937')
    )

    table_cell_bold = ParagraphStyle(
        'TableCellBold',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.5,
        leading=11.5,
        textColor=colors.HexColor('#9f1e13')
    )

    elements = []

    # Header Banner
    elements.append(Paragraph("TEST-BASED NUTRITION | AUDIT REPORT", title_style))
    elements.append(Paragraph("Codebase Review for Mentions of the Keyword <b>'Zinzino'</b> & Impact Analysis", subtitle_style))
    elements.append(HRFlowable(width="100%", thickness=1.5, color=colors.HexColor('#9f1e13'), spaceAfter=15))

    # Executive Summary Box
    summary_text = (
        "<b>Executive Summary:</b> A thorough automated scan was performed across the entire website codebase "
        "(<code>test-based-nutrition-ui</code>) and the Partner Portal codebase (<code>partner-hub</code>). "
        "The keyword <b>'Zinzino'</b> was identified in <b>2 active locations</b> on the public main website, and in "
        "<b>12 internal training modules</b> on the Partner Portal. Details and recommended actions are outlined below."
    )
    
    summary_table = Table(
        [[Paragraph(summary_text, body_style)]],
        colWidths=[540]
    )
    summary_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor('#fef2f2')),
        ('BOX', (0,0), (-1,-1), 1, colors.HexColor('#fca5a5')),
        ('PADDING', (0,0), (-1,-1), 10),
    ]))
    elements.append(summary_table)
    elements.append(Spacer(1, 15))

    # Section 1: Main Website
    elements.append(Paragraph("1. Main Website Audit (www.test-basednutrition.com)", section_heading))
    elements.append(Paragraph("The following table details all occurrences of 'Zinzino' found on the public patient-facing website:", body_style))

    site_data = [
        [
            Paragraph("Component / File", table_header_style),
            Paragraph("Context / Exact Phrase", table_header_style),
            Paragraph("Location", table_header_style),
            Paragraph("Action Required", table_header_style)
        ],
        [
            Paragraph("<b>Support.tsx</b><br/>(Line 88-89)", table_cell_bold),
            Paragraph("<i>FAQ:</i> 'What is Zinzino Fast Start qualification exactly? ... Securing 25 active personal customer subscriptions...'", table_cell_style),
            Paragraph("Public Support Centre Page<br/>(/support)", table_cell_style),
            Paragraph("<b>Remove or Replace:</b> Rephrase to 'What is the Partner Fast Start qualification?'", table_cell_style)
        ],
        [
            Paragraph("<b>TestimonialsDemo.tsx</b><br/>(Line 18)", table_cell_bold),
            Paragraph("<i>Testimonial Quote:</i> '...Zinzino BalanceOil has been a game changer. My elbow pain has completely gone...'", table_cell_style),
            Paragraph("Homepage Testimonials Section<br/>(Main Landing Page)", table_cell_style),
            Paragraph("<b>Remove or Replace:</b> Rephrase to '...Test-Based Balance Oil has been a game changer...'", table_cell_style)
        ]
    ]

    site_table = Table(site_data, colWidths=[120, 200, 110, 110])
    site_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#9f1e13')),
        ('ALIGN', (0,0), (-1,-1), 'LEFT'),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('GRID', (0,0), (-1,-1), 0.5, colors.HexColor('#e5e7eb')),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, colors.HexColor('#f9fafb')]),
        ('PADDING', (0,0), (-1,-1), 7),
    ]))
    elements.append(site_table)
    elements.append(Spacer(1, 15))

    # Section 2: Partner Portal
    elements.append(Paragraph("2. Partner Portal Audit (portal.test-basednutrition.com)", section_heading))
    elements.append(Paragraph("The internal partner portal contains references within partner onboarding, training manuals, and recurring revenue calculators:", body_style))

    portal_data = [
        [
            Paragraph("Portal Section", table_header_style),
            Paragraph("Context / Content Description", table_header_style),
            Paragraph("Current Usage", table_header_style)
        ],
        [
            Paragraph("<b>Academy & Onboarding</b><br/>(zinzino-training/page.tsx)", table_cell_bold),
            Paragraph("Partner training modules covering 'Why Zinzino from Day One?', Back Office guides, and Fast Start milestones.", table_cell_style),
            Paragraph("Internal Partner Training Only", table_cell_style)
        ],
        [
            Paragraph("<b>Growth & Sales Tools</b><br/>(sell-kits/page.tsx)", table_cell_bold),
            Paragraph("Guides for clinics on keeping on-site inventory of partner kits and subscription retail margins.", table_cell_style),
            Paragraph("Internal Practitioner Growth Tool", table_cell_style)
        ],
        [
            Paragraph("<b>Marketing & Support</b><br/>(marketing-hub & support-centre)", table_cell_bold),
            Paragraph("Internal FAQs and marketing resources explaining subscription revenue models.", table_cell_style),
            Paragraph("Internal Partner Support", table_cell_style)
        ],
        [
            Paragraph("<b>Navigation Sidebar</b><br/>(app-sidebar.tsx)", table_cell_bold),
            Paragraph("Menu items named 'Zinzino Set-Up' and 'Zinzino Partner Growth'.", table_cell_style),
            Paragraph("Internal Dashboard Navigation", table_cell_style)
        ]
    ]

    portal_table = Table(portal_data, colWidths=[140, 270, 130])
    portal_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#374151')),
        ('ALIGN', (0,0), (-1,-1), 'LEFT'),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('GRID', (0,0), (-1,-1), 0.5, colors.HexColor('#e5e7eb')),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, colors.HexColor('#f9fafb')]),
        ('PADDING', (0,0), (-1,-1), 7),
    ]))
    elements.append(portal_table)
    elements.append(Spacer(1, 15))

    # Section 3: Summary & Next Steps
    elements.append(Paragraph("3. Summary & Recommended Action Plan", section_heading))
    
    action_items = (
        "1. <b>Main Site Cleanup (Instant)</b>: Remove or rephrase the 2 public occurrences in <code>Support.tsx</code> and <code>TestimonialsDemo.tsx</code> so that public visitors see only 'Test-Based Nutrition' or 'Balance Oil'.<br/>"
        "2. <b>Partner Portal Review</b>: Determine whether Zinzino training guides in the internal portal should remain as-is for partner onboarding, or be white-labeled under TBN brand names.<br/>"
        "3. <b>Zero Operational Risk</b>: Replacing these terms will have zero impact on site functionality or routing."
    )
    
    action_box = Table([[Paragraph(action_items, body_style)]], colWidths=[540])
    action_box.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor('#f3f4f6')),
        ('BOX', (0,0), (-1,-1), 1, colors.HexColor('#d1d5db')),
        ('PADDING', (0,0), (-1,-1), 10),
    ]))
    elements.append(action_box)

    doc.build(elements)
    print("PDF generated successfully at:", pdf_path)

if __name__ == "__main__":
    generate_pdf()
