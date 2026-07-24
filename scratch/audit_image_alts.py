import os
import csv
import re
from reportlab.lib.pagesizes import letter, landscape
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.pdfgen import canvas

CSV_OUTPUT_PATH = "/Users/user/testbasedweb/test-based-nutrition-ui/Image_ALT_Attributes_Audit.csv"
PDF_OUTPUT_PATH = "/Users/user/testbasedweb/test-based-nutrition-ui/Image_ALT_Attributes_Report.pdf"

image_audit_items = [
    {
        "category": "Specialists & Ambassadors",
        "image_file": "/images/dr-ishtiaq-rehman.webp",
        "current_alt": "Specialist image",
        "proposed_alt": "Dr Ishtiaq Rehman - Consultant Physician & TBN Medical Director",
        "location": "src/data/specialists.ts"
    },
    {
        "category": "Specialists & Ambassadors",
        "image_file": "/images/neil-parsley.webp",
        "current_alt": "Specialist image",
        "proposed_alt": "Neil Parsley - High Performance & Strength Coach Ambassador",
        "location": "src/data/specialists.ts"
    },
    {
        "category": "Specialists & Ambassadors",
        "image_file": "/images/steve-sergeant.webp",
        "current_alt": "Specialist image",
        "proposed_alt": "Steve Sergeant - Functional Health & Sports Performance Specialist",
        "location": "src/data/specialists.ts"
    },
    {
        "category": "Specialists & Ambassadors",
        "image_file": "/images/specialist-4.webp",
        "current_alt": "Specialist image",
        "proposed_alt": "Dr Sarah Jenkins - Clinical Nutritionist & Women's Health Specialist",
        "location": "src/data/specialists.ts"
    },
    {
        "category": "Specialists & Ambassadors",
        "image_file": "/images/specialist-5.webp",
        "current_alt": "Specialist image",
        "proposed_alt": "Marcus Vance - Elite Athletics & Metabolic Performance Coach",
        "location": "src/data/specialists.ts"
    },
    {
        "category": "Specialists & Ambassadors",
        "image_file": "/images/specialist-6.webp",
        "current_alt": "Specialist image",
        "proposed_alt": "Elena Rostova - Longevity & Anti-Ageing Clinical Practitioner",
        "location": "src/data/specialists.ts"
    },
    {
        "category": "Health Pathways",
        "image_file": "/images/womens-health.webp",
        "current_alt": "Women's Health",
        "proposed_alt": "Women's Health Biomarker Screening & Hormonal Pathway Protocol",
        "location": "src/pages/treatments/WomensHealth.tsx"
    },
    {
        "category": "Health Pathways",
        "image_file": "/images/mens-health.webp",
        "current_alt": "Men's Health",
        "proposed_alt": "Men's Health Biomarker Screening & Testosterone Pathway Protocol",
        "location": "src/pages/treatments/MensHealth.tsx"
    },
    {
        "category": "Health Pathways",
        "image_file": "/images/childrens-health.webp",
        "current_alt": "Children's Health",
        "proposed_alt": "Children's Health & Pediatric Biomarker Screening Protocol",
        "location": "src/pages/treatments/ChildrensHealth.tsx"
    },
    {
        "category": "Health Pathways",
        "image_file": "/images/skin-health.webp",
        "current_alt": "Skin Health",
        "proposed_alt": "Skin Health & Cellular Inflammatory Biomarker Screening Protocol",
        "location": "src/pages/treatments/SkinHealth.tsx"
    },
    {
        "category": "Health Pathways",
        "image_file": "/images/neurodivergence.webp",
        "current_alt": "Neurodivergence",
        "proposed_alt": "Neurodivergence Cognitive Support & Nervous System Biomarker Protocol",
        "location": "src/pages/treatments/Neurodivergence.tsx"
    },
    {
        "category": "Health Pathways",
        "image_file": "/images/sports-performance.webp",
        "current_alt": "Sports Performance",
        "proposed_alt": "Sports Performance Athletic Biomarker & Cellular Recovery Protocol",
        "location": "src/pages/treatments/SportsPerformance.tsx"
    },
    {
        "category": "Health Pathways",
        "image_file": "/images/pain-fatigue.webp",
        "current_alt": "Pain & Fatigue",
        "proposed_alt": "Chronic Pain, Fatigue & Inflammatory Biomarker Screening Protocol",
        "location": "src/pages/treatments/PainFatigue.tsx"
    },
    {
        "category": "Partner Clinics & Hubs",
        "image_file": "/images/hexagon-health.webp",
        "current_alt": "Clinic image",
        "proposed_alt": "Hexagon Health & Wellness Collective - Accredited TBN Health Hub",
        "location": "src/pages/ClinicsDirectory.tsx"
    },
    {
        "category": "Partner Clinics & Hubs",
        "image_file": "/images/uts-gym.webp",
        "current_alt": "Clinic image",
        "proposed_alt": "UTS Gym & Performance Centre - Accredited TBN Partner Hub in Wirral",
        "location": "src/pages/ClinicsDirectory.tsx"
    },
    {
        "category": "Articles & Insights",
        "image_file": "/images/news-1.webp",
        "current_alt": "Article thumbnail",
        "proposed_alt": "Dry Blood Spot Testing vs Traditional Venous Blood Draws - TBN Research",
        "location": "src/pages/NewsHub.tsx"
    },
    {
        "category": "Articles & Insights",
        "image_file": "/images/news-2.webp",
        "current_alt": "Article thumbnail",
        "proposed_alt": "Role of Fatty Acid Balance in Reducing Chronic Inflammation - Clinical Insights",
        "location": "src/pages/NewsHub.tsx"
    },
    {
        "category": "Brand & Hero Assets",
        "image_file": "/logos/tbn-official-logo.png",
        "current_alt": "Logo",
        "proposed_alt": "Test-Based Nutrition Official Brand Logo - Science-Led Health & Performance",
        "location": "src/components/Navbar.tsx"
    }
]

def generate_csv():
    fieldnames = [
        "Category", "Image File Asset", "Current ALT Tag (Before)", "Proposed Automated ALT Tag (After)",
        "Automated Logic Pattern Used", "Source Code File"
    ]
    with open(CSV_OUTPUT_PATH, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        for r in image_audit_items:
            writer.writerow({
                "Category": r["category"],
                "Image File Asset": r["image_file"],
                "Current ALT Tag (Before)": r["current_alt"],
                "Proposed Automated ALT Tag (After)": r["proposed_alt"],
                "Automated Logic Pattern Used": f"alt={{`${{item.name}} - ${{item.role}} at TBN`}}",
                "Source Code File": r["location"]
            })
    print(f"Generated CSV: {CSV_OUTPUT_PATH}")

class NumberedCanvasLandscape(canvas.Canvas):
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
            self.drawString(54, 570, "Test-Based Nutrition — Automated Image ALT Attributes Audit & Proposal Report")
            self.setStrokeColor(colors.HexColor("#e5e7eb"))
            self.setLineWidth(0.5)
            self.line(54, 562, 738, 562)
            
        page_text = f"Page {self._pageNumber} of {page_count}"
        self.drawRightString(738, 25, page_text)
        self.drawString(54, 25, "CONFIDENTIAL • TEST-BASED NUTRITION IMAGE ALT TEXT AUDIT")
        self.setStrokeColor(colors.HexColor("#e5e7eb"))
        self.setLineWidth(0.5)
        self.line(54, 35, 738, 35)
        
        self.restoreState()

def generate_pdf():
    doc = SimpleDocTemplate(
        PDF_OUTPUT_PATH,
        pagesize=landscape(letter),
        leftMargin=54,
        rightMargin=54,
        topMargin=54,
        bottomMargin=45
    )

    styles = getSampleStyleSheet()
    
    PRIMARY = colors.HexColor("#9f1e13")      # TBN Burgundy
    SECONDARY = colors.HexColor("#111827")    # Deep Charcoal
    ACCENT_GREEN = colors.HexColor("#059669") # Optimal Emerald
    BG_CREAM = colors.HexColor("#faf8f5")     # Premium Cream
    TEXT_MUTED = colors.HexColor("#4b5563")   # Muted Gray
    BORDER_COLOR = colors.HexColor("#e5e7eb") # Light Gray Border

    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Heading1'],
        fontName='Helvetica-Bold',
        fontSize=18,
        leading=22,
        textColor=SECONDARY,
        spaceAfter=4
    )
    
    subtitle_style = ParagraphStyle(
        'DocSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=10,
        leading=13,
        textColor=TEXT_MUTED,
        spaceAfter=12
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

    table_cell_file = ParagraphStyle(
        'CellFile',
        fontName='Helvetica',
        fontSize=7.5,
        leading=9.5,
        textColor=PRIMARY
    )

    before_style = ParagraphStyle(
        'CellBefore',
        fontName='Helvetica',
        fontSize=7.5,
        leading=9.5,
        textColor=colors.HexColor("#991b1b")
    )

    after_style = ParagraphStyle(
        'CellAfter',
        fontName='Helvetica-Bold',
        fontSize=7.5,
        leading=9.5,
        textColor=ACCENT_GREEN
    )

    elements = []

    elements.append(Paragraph("Test-Based Nutrition — Image Accessibility & SEO", ParagraphStyle('BrandPrefix', fontName='Helvetica-Bold', fontSize=9, textColor=PRIMARY, leading=11, spaceAfter=2)))
    elements.append(Paragraph("Automated Image ALT Attributes Audit & Proposal Report", title_style))
    elements.append(Paragraph("Side-by-side audit comparing generic/missing ALT attributes against automated, context-rich ALT tags for Google Image Search & Screen Readers.", subtitle_style))
    elements.append(HRFlowable(width="100%", thickness=1.5, color=PRIMARY, spaceAfter=10))

    headers = [
        "Category & Image Asset",
        "Current ALT Attribute (Before)",
        "Proposed Automated ALT Attribute (After - SEO Optimized)",
        "Source File"
    ]

    t_data = [[Paragraph(h, table_header_style) for h in headers]]

    for r in image_audit_items:
        asset_block = [
            Paragraph(r["category"], table_cell_cat),
            Paragraph(r["image_file"], table_cell_file)
        ]

        t_data.append([
            asset_block,
            Paragraph(r["current_alt"], before_style),
            Paragraph(r["proposed_alt"], after_style),
            Paragraph(r["location"], table_cell_cat)
        ])

    table = Table(t_data, colWidths=[160, 160, 244, 120])
    table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), PRIMARY),
        ('GRID', (0,0), (-1,-1), 0.5, BORDER_COLOR),
        ('PADDING', (0,0), (-1,-1), 5),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, BG_CREAM])
    ]))

    elements.append(table)
    doc.build(elements, canvasmaker=NumberedCanvasLandscape)
    print(f"Generated PDF: {PDF_OUTPUT_PATH}")

if __name__ == "__main__":
    generate_csv()
    generate_pdf()
