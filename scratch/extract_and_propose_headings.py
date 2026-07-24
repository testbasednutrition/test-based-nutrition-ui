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

CSV_OUTPUT_PATH = "/Users/user/testbasedweb/test-based-nutrition-ui/Heading_Optimization_Review.csv"
PDF_OUTPUT_PATH = "/Users/user/testbasedweb/test-based-nutrition-ui/Heading_Optimization_Review.pdf"

headings_data = [
    {
        "page": "Homepage",
        "route": "/",
        "file": "src/components/Hero.tsx",
        "current_h1": "A New Era in Personalised, Preventative Nutrition",
        "proposed_h1": "A New Era in Personalised & Preventative Test-Based Healthcare",
        "current_h2": "A Purpose-Driven Movement Transforming Preventative Health / How It Works",
        "proposed_h2": "Why Baseline Blood Spot Testing Matters / 4-Stage Preventative Health Methodology"
    },
    {
        "page": "Testing Pathways",
        "route": "/testing",
        "file": "src/pages/TestingPageV2.tsx",
        "current_h1": "A practitioner-led approach to proactive health",
        "proposed_h1": "Clinical Testing Pathways & Blood Spot Biomarker Screening",
        "current_h2": "WHY WE TEST / FOUNDATIONAL & ADVANCED PATHWAYS",
        "proposed_h2": "Why We Test: Beyond Symptom Suppression / Foundational & Advanced Screening Profiles"
    },
    {
        "page": "The TBN Method",
        "route": "/tbn-method",
        "file": "src/pages/TBNMethod.tsx",
        "current_h1": "THE SCIENCE OF SYMPTOMS",
        "proposed_h1": "The TBN Method: The Science of Symptoms & Test-Based Healthcare",
        "current_h2": "A Four-Stage Preventative System / Academy Education",
        "proposed_h2": "The 4-Stage Preventative Health System / TBN Practitioner Academy & Clinical Integration"
    },
    {
        "page": "Specialists Directory",
        "route": "/specialists",
        "file": "src/pages/SpecialistsDirectory.tsx",
        "current_h1": "Find the right TBN Specialist for your health journey.",
        "proposed_h1": "Find a Specialist Practitioner & Accredited TBN Health Hub",
        "current_h2": "Directory Search / Specialized Health Pathways",
        "proposed_h2": "Search Accredited Healthcare Practitioners / Practitioner Pathway Specialties"
    },
    {
        "page": "Clinics Directory",
        "route": "/collectives",
        "file": "src/pages/ClinicsDirectory.tsx",
        "current_h1": "Partner Clinics & Health Collectives",
        "proposed_h1": "Accredited Partner Clinics & Regional Health Collectives",
        "current_h2": "Find a Clinic Near You / Integration Framework",
        "proposed_h2": "Find an Accredited Partner Clinic Near You / Clinical Integration & Testing Framework"
    },
    {
        "page": "Women's Health Pathway",
        "route": "/treatments/womens-health",
        "file": "src/pages/treatments/WomensHealth.tsx",
        "current_h1": "Women",
        "proposed_h1": "Women's Health Pathways & Biomarker Testing Protocols",
        "current_h2": "Supporting Every Stage / Key Health Indicators",
        "proposed_h2": "Hormonal Balance, Fertility & Menopause Protocols / Key Biomarkers & Testing Profiles"
    },
    {
        "page": "Men's Health Pathway",
        "route": "/treatments/mens-health",
        "file": "src/pages/treatments/MensHealth.tsx",
        "current_h1": "Men",
        "proposed_h1": "Men's Health Pathways & Hormonal Biomarker Screening",
        "current_h2": "Targeted Metabolic Support / Key Indicators",
        "proposed_h2": "Testosterone, Metabolic Health & Energy Protocols / Key Male Health Biomarkers"
    },
    {
        "page": "Children's Health Pathway",
        "route": "/treatments/childrens-health",
        "file": "src/pages/treatments/ChildrensHealth.tsx",
        "current_h1": "CHILDREN & TEEN HEALTH PATHWAYS",
        "proposed_h1": "Pediatric & Teen Health Pathways | Test-Based Nutrition",
        "current_h2": "Growth & Cognitive Support / Pathway Modules",
        "proposed_h2": "Childhood Growth, Immunity & Cognitive Support / Targeted Pediatric Screening Protocols"
    },
    {
        "page": "Skin Health Pathway",
        "route": "/treatments/skin-health",
        "file": "src/pages/treatments/SkinHealth.tsx",
        "current_h1": "SKIN HEALTH PATHWAYS",
        "proposed_h1": "Skin Health Pathways & Cellular Biomarker Screening",
        "current_h2": "Hormonal & Inflammatory Drivers / Testing Options",
        "proposed_h2": "Addressing Gut, Hormonal & Inflammatory Skin Drivers / Targeted Skin Screening Profiles"
    },
    {
        "page": "Neurodivergence Pathway",
        "route": "/treatments/neurodivergence",
        "file": "src/pages/treatments/Neurodivergence.tsx",
        "current_h1": "Neurodivergence Pathways",
        "proposed_h1": "Neurodivergence Pathways: Cognitive & Brain Health Support",
        "current_h2": "Cognitive Wellbeing / Targeted Interventions",
        "proposed_h2": "Supporting Focus, Cognitive Function & Nervous System Health / Targeted Nutritional Protocols"
    },
    {
        "page": "Sports Performance Pathway",
        "route": "/treatments/sports-performance",
        "file": "src/pages/treatments/SportsPerformance.tsx",
        "current_h1": "Performance Pathways",
        "proposed_h1": "Sports Performance & Athletic Biomarker Screening Protocols",
        "current_h2": "Optimising Energy & Recovery / Athlete Testing Profiles",
        "proposed_h2": "Optimising Endurance, Recovery & Cellular Energy / Elite Athletic Testing Profiles"
    },
    {
        "page": "Pain, Fatigue & Inflammation",
        "route": "/treatments/pain-fatigue",
        "file": "src/pages/treatments/PainFatigue.tsx",
        "current_h1": "PAIN, FATIGUE & INFLAMMATION PATHWAYS",
        "proposed_h1": "Chronic Pain, Fatigue & Inflammation Pathways | TBN",
        "current_h2": "Root-Cause Inflammation Support / Clinical Protocols",
        "proposed_h2": "Investigating Chronic Fatigue, Fibromyalgia & Inflammatory Drivers / Clinical Recovery Protocols"
    },
    {
        "page": "Anti-Ageing & Longevity",
        "route": "/treatments/anti-ageing",
        "file": "src/pages/treatments/AntiAgeing.tsx",
        "current_h1": "Bespoke Anti-Ageing: Where Cellular Health Meets Skin Longevity",
        "proposed_h1": "Cellular Longevity & Anti-Ageing Biomarker Pathways",
        "current_h2": "Cellular Health & Telomere Care / Longevity Profiles",
        "proposed_h2": "Cellular Health, Telomere Care & Metabolic Longevity / Targeted Ageing Biomarkers"
    },
    {
        "page": "Fertility Pathway",
        "route": "/treatments/fertility",
        "file": "src/pages/treatments/Fertility.tsx",
        "current_h1": "The science of nutrition in fertility for men + women",
        "proposed_h1": "Preconception & Fertility Biomarker Pathways (Men & Women)",
        "current_h2": "Preconception Nutrition / Hormonal Readiness",
        "proposed_h2": "Preconception Nutritional Optimisation / Male & Female Reproductive Testing Profiles"
    },
    {
        "page": "Support Centre",
        "route": "/support",
        "file": "src/pages/Support.tsx",
        "current_h1": "Support Centre",
        "proposed_h1": "Support Centre & Practitioner Case Consultation Desk",
        "current_h2": "Book Support / Frequently Asked Questions",
        "proposed_h2": "Submit a Clinical Support Request / Practitioner Frequently Asked Questions"
    },
    {
        "page": "Privacy Policy",
        "route": "/privacy-policy",
        "file": "src/pages/PrivacyPolicy.tsx",
        "current_h1": "Privacy Policy & Data Protection",
        "proposed_h1": "Privacy Policy & GDPR Data Protection Notice",
        "current_h2": "1. Introduction & Data Controller / 2. Information We Collect",
        "proposed_h2": "1. Introduction & Data Controller / 2. Categories of Information We Process"
    },
    {
        "page": "Terms of Service",
        "route": "/terms",
        "file": "src/pages/TermsOfService.tsx",
        "current_h1": "Terms of Service & Disclaimer",
        "proposed_h1": "Terms of Service & Medical Disclaimer Notice",
        "current_h2": "1. Acceptance of Terms / 2. Services & Scope",
        "proposed_h2": "1. Acceptance of Terms / 2. Services & Clinical Wellness Scope"
    }
]

def generate_csv():
    fieldnames = [
        "Page Name", "Route Path", "Current H1 Tag (Before)", "Proposed H1 Tag (After - SEO)",
        "Current H2 Tags (Before)", "Proposed H2 Tags (After - SEO)", "Source File"
    ]
    with open(CSV_OUTPUT_PATH, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        for r in headings_data:
            writer.writerow({
                "Page Name": r["page"],
                "Route Path": r["route"],
                "Current H1 Tag (Before)": r["current_h1"],
                "Proposed H1 Tag (After - SEO)": r["proposed_h1"],
                "Current H2 Tags (Before)": r["current_h2"],
                "Proposed H2 Tags (After - SEO)": r["proposed_h2"],
                "Source File": r["file"]
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
            self.drawString(54, 570, "Test-Based Nutrition — H1 & H2 Heading Tag Optimization Review (Before vs After)")
            self.setStrokeColor(colors.HexColor("#e5e7eb"))
            self.setLineWidth(0.5)
            self.line(54, 562, 738, 562)
            
        page_text = f"Page {self._pageNumber} of {page_count}"
        self.drawRightString(738, 25, page_text)
        self.drawString(54, 25, "CONFIDENTIAL • TEST-BASED NUTRITION H1/H2 OPTIMIZATION REVIEW REPORT")
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

    table_cell_page = ParagraphStyle(
        'CellPage',
        fontName='Helvetica-Bold',
        fontSize=8,
        leading=10.5,
        textColor=SECONDARY
    )

    table_cell_route = ParagraphStyle(
        'CellRoute',
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

    elements.append(Paragraph("Test-Based Nutrition — Search Engine Optimization", ParagraphStyle('BrandPrefix', fontName='Helvetica-Bold', fontSize=9, textColor=PRIMARY, leading=11, spaceAfter=2)))
    elements.append(Paragraph("H1 & H2 Heading Optimization Proposal (Before vs. After)", title_style))
    elements.append(Paragraph("A page-by-page review comparing current heading tags against keyword-optimized proposed tags prior to frontend implementation.", subtitle_style))
    elements.append(HRFlowable(width="100%", thickness=1.5, color=PRIMARY, spaceAfter=10))

    headers = [
        "Page & Route Path",
        "Current H1 Tag (Before)",
        "Proposed H1 Tag (After - SEO)",
        "Current H2 Tags (Before)",
        "Proposed H2 Tags (After - SEO)"
    ]

    t_data = [[Paragraph(h, table_header_style) for h in headers]]

    for r in headings_data:
        page_block = [
            Paragraph(r["page"], table_cell_page),
            Paragraph(r["route"], table_cell_route)
        ]
        t_data.append([
            page_block,
            Paragraph(r["current_h1"], before_style),
            Paragraph(r["proposed_h1"], after_style),
            Paragraph(r["current_h2"], before_style),
            Paragraph(r["proposed_h2"], after_style)
        ])

    table = Table(t_data, colWidths=[110, 140, 152, 140, 142])
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
