import os
import csv
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, KeepTogether, HRFlowable
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.pdfgen import canvas

CSV_OUTPUT_PATH = "/Users/user/testbasedweb/test-based-nutrition-ui/TBN_Partner_Portal_Benefits.csv"
PDF_OUTPUT_PATH = "/Users/user/testbasedweb/test-based-nutrition-ui/TBN_Partner_Portal_Benefits_Guide.pdf"

detailed_modules = [
    {
        "category": "1. Inbound Patient Lead Generation",
        "feature": "Specialist Directory & Geographic Matching",
        "description": "Verified listing on testbasednutrition.com/specialists. Patients search by location, health concern (Women's, Sports, Skin, Longevity), and book directly with your practice.",
        "benefit": "Automated inbound patient leads & enhanced local practice visibility."
    },
    {
        "category": "1. Inbound Patient Lead Generation",
        "feature": "Direct Booking & Calendar Integration",
        "description": "Connect your online booking calendar (Calendly, Acuity, website link) directly to your TBN directory card for frictionless patient conversions.",
        "benefit": "Eliminates booking friction and increases consultation bookings."
    },
    {
        "category": "2. Practitioner Profile Management",
        "feature": "Self-Service Digital Business Card",
        "description": "Full control to edit bio, clinical credentials, clinic address, opening hours, consultation rates, headshot, and social media channels.",
        "benefit": "Professional brand presentation showcasing your clinical expertise."
    },
    {
        "category": "2. Practitioner Profile Management",
        "feature": "Pathway & Speciality Badging",
        "description": "Highlight specific accredited pathway badges (e.g. Certified Women's Health Specialist, Performance Coach, Fertility Specialist).",
        "benefit": "Positions practitioner as an authority in specific health niches."
    },
    {
        "category": "3. Practice Administration & Automation",
        "feature": "Centralized Electronic Patient Dashboard",
        "description": "Access all patient lab reports, biomarker graphs, protocol histories, and consultation notes in a single HIPAA/GDPR-compliant portal.",
        "benefit": "Saves 5+ hours weekly on practice administration and record keeping."
    },
    {
        "category": "3. Practice Administration & Automation",
        "feature": "Automated Re-Test & Retention Engine",
        "description": "Portal automatically triggers patient re-test notifications at 120-day intervals, tracking long-term biomarker progress and securing repeat visits.",
        "benefit": "Drives automated patient retention without manual admin follow-ups."
    },
    {
        "category": "4. Clinical Testing & Protocol Engine",
        "feature": "Instant Lab Analysis & Protocol Generator",
        "description": "Upload or review blood spot biomarker data to instantly generate evidence-based dietary, lifestyle, and dosage protocol documents for patients.",
        "benefit": "Delivers precision health protocols in minutes instead of hours."
    },
    {
        "category": "4. Clinical Testing & Protocol Engine",
        "feature": "Wholesale Lab Kit Order Management",
        "description": "Order dry blood spot test kits in bulk or drop-ship directly to patient home addresses with real-time laboratory tracking.",
        "benefit": "Seamless kit logistics with zero inventory holding stress."
    },
    {
        "category": "5. Revenue Growth & Affiliate Tracking",
        "feature": "Multi-Tier Commission & Wholesale Margins",
        "description": "Earn high profit margins on test kit sales plus recurring commissions on patient protocol re-orders.",
        "benefit": "Creates a lucrative, recurring high-margin revenue stream."
    },
    {
        "category": "5. Revenue Growth & Affiliate Tracking",
        "feature": "Personalized QR Codes & Trackable Assets",
        "description": "Download unique QR codes and referral links for clinic reception desks, email signatures, social media, and printed brochures.",
        "benefit": "Effortless passive lead capture and commission attribution."
    },
    {
        "category": "6. Academy & Clinical Advisory Support",
        "feature": "TBN Academy & CPD Masterclasses",
        "description": "Access video masterclasses, research whitepapers, clinical protocols, and earned CPD accreditation certificates.",
        "benefit": "Continuous professional development & medical network support."
    },
    {
        "category": "6. Academy & Clinical Advisory Support",
        "feature": "Priority Case Consultation Desk",
        "description": "Direct portal desk to submit complex patient case inquiries directly to TBN Medical Directors for clinical review.",
        "benefit": "Ultimate clinical confidence when handling complex patient cases."
    }
]

def generate_csv():
    fieldnames = ["Category", "Portal Feature", "Detailed Feature Description", "Core Practitioner Benefit"]
    with open(CSV_OUTPUT_PATH, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        for r in detailed_modules:
            writer.writerow({
                "Category": r["category"],
                "Portal Feature": r["feature"],
                "Detailed Feature Description": r["description"],
                "Core Practitioner Benefit": r["benefit"]
            })
    print(f"Generated CSV: {CSV_OUTPUT_PATH}")

class NumberedCanvas(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_page_decorations(num_pages)
            canvas.Canvas.showPage(self)
        canvas.Canvas.save(self)

    def draw_page_decorations(self, page_count):
        self.saveState()
        self.setFont("Helvetica", 8)
        self.setFillColor(colors.HexColor("#6b7280"))
        
        if self._pageNumber > 1:
            self.drawString(54, 750, "Test-Based Nutrition — Comprehensive Partner Portal Benefits Report")
            self.setStrokeColor(colors.HexColor("#e5e7eb"))
            self.setLineWidth(0.5)
            self.line(54, 742, 558, 742)
            
        page_text = f"Page {self._pageNumber} of {page_count}"
        self.drawRightString(558, 36, page_text)
        self.drawString(54, 36, "CONFIDENTIAL • TEST-BASED NUTRITION PARTNER PORTAL COMPREHENSIVE GUIDE")
        self.setStrokeColor(colors.HexColor("#e5e7eb"))
        self.setLineWidth(0.5)
        self.line(54, 48, 558, 48)
        
        self.restoreState()

def generate_pdf():
    doc = SimpleDocTemplate(
        PDF_OUTPUT_PATH,
        pagesize=letter,
        leftMargin=54,
        rightMargin=54,
        topMargin=54,
        bottomMargin=54
    )

    styles = getSampleStyleSheet()
    
    PRIMARY = colors.HexColor("#9f1e13")      # TBN Burgundy
    SECONDARY = colors.HexColor("#111827")    # Deep Charcoal
    ACCENT_GREEN = colors.HexColor("#059669") # Value Emerald
    BG_CREAM = colors.HexColor("#faf8f5")     # Premium Cream
    TEXT_MUTED = colors.HexColor("#4b5563")   # Muted Gray
    BORDER_COLOR = colors.HexColor("#e5e7eb") # Light Gray Border

    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Heading1'],
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=24,
        textColor=SECONDARY,
        spaceAfter=4
    )
    
    subtitle_style = ParagraphStyle(
        'DocSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=10,
        leading=14,
        textColor=TEXT_MUTED,
        spaceAfter=12
    )

    h1_style = ParagraphStyle(
        'Heading1Custom',
        parent=styles['Heading2'],
        fontName='Helvetica-Bold',
        fontSize=12,
        leading=16,
        textColor=PRIMARY,
        spaceBefore=12,
        spaceAfter=6
    )

    body_style = ParagraphStyle(
        'BodyCustom',
        parent=styles['BodyText'],
        fontName='Helvetica',
        fontSize=9,
        leading=13,
        textColor=SECONDARY,
        spaceAfter=5
    )

    bullet_style = ParagraphStyle(
        'BulletCustom',
        parent=body_style,
        leftIndent=12,
        firstLineIndent=-8,
        spaceAfter=4
    )

    table_header_style = ParagraphStyle(
        'TableHeader',
        fontName='Helvetica-Bold',
        fontSize=8.5,
        leading=10,
        textColor=colors.white
    )

    table_cell_cat = ParagraphStyle(
        'CellCat',
        fontName='Helvetica-Bold',
        fontSize=8,
        leading=10.5,
        textColor=SECONDARY
    )

    table_cell_feat = ParagraphStyle(
        'CellFeat',
        fontName='Helvetica-Bold',
        fontSize=8,
        leading=10.5,
        textColor=PRIMARY
    )

    table_cell_desc = ParagraphStyle(
        'CellDesc',
        fontName='Helvetica',
        fontSize=7.5,
        leading=9.5,
        textColor=SECONDARY
    )

    table_cell_benefit = ParagraphStyle(
        'CellBenefit',
        fontName='Helvetica-Bold',
        fontSize=7.5,
        leading=9.5,
        textColor=ACCENT_GREEN
    )

    elements = []

    # Title Header Block
    elements.append(Paragraph("Test-Based Nutrition — Comprehensive Partner Ecosystem Guide", ParagraphStyle('BrandPrefix', fontName='Helvetica-Bold', fontSize=9.5, textColor=PRIMARY, leading=11, spaceAfter=2)))
    elements.append(Paragraph("Partner Portal Comprehensive Benefits & Administrative Guide", title_style))
    elements.append(Paragraph("A detailed report outlining lead generation, profile management, practice administration, clinical automation, and financial growth benefits for approved partners.", subtitle_style))
    elements.append(HRFlowable(width="100%", thickness=1.5, color=PRIMARY, spaceAfter=12))

    # Executive Overview Box
    summary_data = [
        [
            Paragraph("<b>ECOSYSTEM VISION:</b> Empowering Practitioners with Precision Medicine & Lead Growth", ParagraphStyle('S1', fontName='Helvetica', fontSize=9, leading=11.5)),
            Paragraph("<b>TARGET ROLES:</b> Clinics, Doctors, Nutritionists, Resorts", ParagraphStyle('S2', fontName='Helvetica', fontSize=9, leading=11.5, alignment=2))
        ],
        [
            Paragraph("<b>PORTAL REASONS:</b> Lead Gen, Profile Control, Admin Automation, Protocol Output", ParagraphStyle('S3', fontName='Helvetica', fontSize=9, leading=11.5)),
            Paragraph("<b>STATUS:</b> Fully Operational Partner Hub", ParagraphStyle('S4', fontName='Helvetica', fontSize=9, leading=11.5, alignment=2))
        ]
    ]
    summary_table = Table(summary_data, colWidths=[270, 234])
    summary_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), BG_CREAM),
        ('BOX', (0,0), (-1,-1), 1, BORDER_COLOR),
        ('PADDING', (0,0), (-1,-1), 6),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
    ]))
    elements.append(summary_table)
    elements.append(Spacer(1, 10))

    # Section 1: Inbound Lead Generation
    elements.append(Paragraph("1. Inbound Patient Lead Generation & Practice Growth", h1_style))
    elements.append(Paragraph("• <b>High-Authority Directory Listing:</b> Approved partners are featured on <code>testbasednutrition.com/specialists</code>, driving direct patient inquiries to your clinic.", bullet_style))
    elements.append(Paragraph("• <b>Geographic & Specialty Search Engine:</b> Patients search by city, postcode, and health concern (Women's Health, Sports, Longevity), matching patients directly to your profile.", bullet_style))
    elements.append(Paragraph("• <b>Direct Appointment Conversion:</b> Connect your booking calendar (Calendly, Acuity, website URL) for seamless patient booking without third-party commission fees.", bullet_style))
    elements.append(Paragraph("• <b>Brand Co-Marketing:</b> Leverage TBN national marketing campaigns to position your practice as a leader in preventative healthcare.", bullet_style))
    elements.append(Spacer(1, 8))

    # Section 2: Profile Customization
    elements.append(Paragraph("2. Profile Customization & Digital Business Card Control", h1_style))
    elements.append(Paragraph("• <b>Full Administrative Profile Control:</b> Easily update your bio, qualifications, clinic address, opening hours, consultation fees, and professional headshot.", bullet_style))
    elements.append(Paragraph("• <b>Specialty Pathway Badging:</b> Display verified TBN accreditation badges (e.g., <i>Certified Women's Health Practitioner</i>) to build patient trust.", bullet_style))
    elements.append(Paragraph("• <b>Social & Web Link Integration:</b> Promote your personal website, Instagram, LinkedIn, and research publications directly on your card.", bullet_style))
    elements.append(Spacer(1, 8))

    # Section 3: Detailed Modules Table
    elements.append(Paragraph("3. Complete Partner Portal Modules & Operational Benefits", h1_style))

    t_headers = ["Module Category", "Portal Feature", "Detailed Feature Description", "Core Practitioner Benefit"]
    t_data = [[Paragraph(h, table_header_style) for h in t_headers]]

    for r in detailed_modules:
        t_data.append([
            Paragraph(r["category"], table_cell_cat),
            Paragraph(r["feature"], table_cell_feat),
            Paragraph(r["description"], table_cell_desc),
            Paragraph(r["benefit"], table_cell_benefit)
        ])

    table = Table(t_data, colWidths=[110, 110, 164, 120])
    table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), PRIMARY),
        ('GRID', (0,0), (-1,-1), 0.5, BORDER_COLOR),
        ('PADDING', (0,0), (-1,-1), 5),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, BG_CREAM])
    ]))
    elements.append(table)
    elements.append(Spacer(1, 10))

    # Section 4: Practice Automation & Retention
    elements.append(Paragraph("4. Practice Administration & Patient Retention Automation", h1_style))
    elements.append(Paragraph("• <b>Centralized Patient Records:</b> Access all lab results, biomarker trend lines, and consultation history in one secure digital dashboard.", bullet_style))
    elements.append(Paragraph("• <b>Automated 120-Day Re-Testing Engine:</b> The portal sends automated re-test prompts to patients, documenting biomarker improvements and securing repeat consultation visits.", bullet_style))
    elements.append(Paragraph("• <b>Automated Protocol Engine:</b> Translates complex blood spot lab data into clear dietary & supplement protocols in minutes, saving hours of prep time.", bullet_style))
    elements.append(Paragraph("• <b>Multi-Tier Revenue & QR Assets:</b> Track trade-price kit sales, protocol re-order commissions, and print custom QR codes for your clinic reception desk.", bullet_style))
    elements.append(Spacer(1, 10))

    # Onboarding Footer Box
    onboarding_data = [
        [
            Paragraph("<b>ONBOARDING & PORTAL ACCESS STEPS</b><br/><font color='#4b5563'>Submit application at <code>/partner-with-us</code> • Complete accreditation training • Receive login credentials & launch in clinic.</font>", ParagraphStyle('OB1', fontName='Helvetica', fontSize=8.5, leading=11.5))
        ]
    ]
    onboarding_table = Table(onboarding_data, colWidths=[504])
    onboarding_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), BG_CREAM),
        ('BOX', (0,0), (-1,-1), 1, PRIMARY),
        ('PADDING', (0,0), (-1,-1), 8),
    ]))
    elements.append(onboarding_table)

    doc.build(elements, canvasmaker=NumberedCanvas)
    print(f"Generated PDF: {PDF_OUTPUT_PATH}")

if __name__ == "__main__":
    generate_csv()
    generate_pdf()
