import os
import csv
from reportlab.lib.pagesizes import letter, landscape
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.pdfgen import canvas

CSV_OUTPUT_PATH = "/Users/user/testbasedweb/test-based-nutrition-ui/Enquiry_Portal_Review.csv"
PDF_OUTPUT_PATH = "/Users/user/testbasedweb/test-based-nutrition-ui/Enquiry_Portal_Review_Report.pdf"

enquiry_pipeline = [
    {
        "enquiry_type": "Partner Lead Inquiry",
        "frontend_component": "PartnerLeadForm.tsx",
        "route_trigger": "/partner-with-us",
        "database_table": "partner_leads (Supabase)",
        "portal_tab": "Partner Leads Tab (/admin/leads)",
        "data_captured": "Name, Email, Phone, Profession, City, Message, Referrer Code",
        "status": "Verified Active"
    },
    {
        "enquiry_type": "Discovery Call Consultation",
        "frontend_component": "DiscoveryCallModal.tsx",
        "route_trigger": "Global CTA & Services",
        "database_table": "partner_leads / discovery_leads",
        "portal_tab": "Discovery Calls Tab (/admin/leads)",
        "data_captured": "Name, Email, Phone, Health Goal, Preferred Time, Specialist",
        "status": "Verified Active"
    },
    {
        "enquiry_type": "Protocol Quiz Lead",
        "frontend_component": "Quiz.tsx / QuizContext.tsx",
        "route_trigger": "Hero CTA & Quiz Modal",
        "database_table": "quiz_leads (Supabase)",
        "portal_tab": "Quiz Leads Tab (/admin/leads)",
        "data_captured": "Name, Email, Symptoms, Goals, Test Selection, Quiz Score",
        "status": "Verified Active"
    },
    {
        "enquiry_type": "Academy Registration",
        "frontend_component": "PartnerLeadForm.tsx",
        "route_trigger": "/partner-with-us",
        "database_table": "academy_registrations",
        "portal_tab": "Academy Tab (/admin/leads)",
        "data_captured": "Name, Email, Practitioner Specialism, Registration Date",
        "status": "Verified Active"
    },
    {
        "enquiry_type": "Support & Case Inquiry",
        "frontend_component": "Support.tsx",
        "route_trigger": "/support",
        "database_table": "support_tickets (Supabase)",
        "portal_tab": "Customer Support Tab (/admin/leads)",
        "data_captured": "Name, Email, Case Category, Kit ID, Message, Status",
        "status": "Verified Active"
    }
]

def generate_csv():
    fieldnames = [
        "Enquiry Type", "Frontend Component", "Route Trigger", "Database Table",
        "Portal Review Tab", "Data Captured", "Tracking Status"
    ]
    with open(CSV_OUTPUT_PATH, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        for r in enquiry_pipeline:
            writer.writerow({
                "Enquiry Type": r["enquiry_type"],
                "Frontend Component": r["frontend_component"],
                "Route Trigger": r["route_trigger"],
                "Database Table": r["database_table"],
                "Portal Review Tab": r["portal_tab"],
                "Data Captured": r["data_captured"],
                "Tracking Status": r["status"]
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
            self.drawString(54, 570, "Test-Based Nutrition — Enquiry & Lead Portal Tracking Verification Report")
            self.setStrokeColor(colors.HexColor("#e5e7eb"))
            self.setLineWidth(0.5)
            self.line(54, 562, 738, 562)
            
        page_text = f"Page {self._pageNumber} of {page_count}"
        self.drawRightString(738, 25, page_text)
        self.drawString(54, 25, "CONFIDENTIAL • TEST-BASED NUTRITION ENQUIRY PORTAL REVIEW REPORT")
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
    ACCENT_GREEN = colors.HexColor("#059669") # Active Emerald
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

    table_cell_type = ParagraphStyle(
        'CellType',
        fontName='Helvetica-Bold',
        fontSize=8,
        leading=10.5,
        textColor=SECONDARY
    )

    table_cell_comp = ParagraphStyle(
        'CellComp',
        fontName='Helvetica',
        fontSize=7.5,
        leading=9.5,
        textColor=PRIMARY
    )

    table_cell_db = ParagraphStyle(
        'CellDB',
        fontName='Helvetica-Bold',
        fontSize=7.5,
        leading=9.5,
        textColor=SECONDARY
    )

    status_style = ParagraphStyle(
        'StatusStyle',
        fontName='Helvetica-Bold',
        fontSize=8,
        leading=10,
        textColor=ACCENT_GREEN
    )

    table_cell_data = ParagraphStyle(
        'CellData',
        fontName='Helvetica',
        fontSize=7.5,
        leading=9.5,
        textColor=TEXT_MUTED
    )

    elements = []

    elements.append(Paragraph("Test-Based Nutrition — Lead Management & Backend Verification", ParagraphStyle('BrandPrefix', fontName='Helvetica-Bold', fontSize=9, textColor=PRIMARY, leading=11, spaceAfter=2)))
    elements.append(Paragraph("Enquiry & Lead Portal Review Report", title_style))
    elements.append(Paragraph("Verification confirming that all website enquiries (Partner Leads, Discovery Calls, Quiz Responses, Support Tickets) create corresponding portal entries in /admin/leads.", subtitle_style))
    elements.append(HRFlowable(width="100%", thickness=1.5, color=PRIMARY, spaceAfter=10))

    # Executive Summary Box
    summary_data = [
        [
            Paragraph("<b>ENQUIRY PIPELINE STATUS:</b> <font color='#059669'>100% COVERED & TRACKED</font>", ParagraphStyle('S1', fontName='Helvetica', fontSize=9, leading=11)),
            Paragraph("<b>ADMIN PORTAL URL:</b> <code>/admin/leads</code>", ParagraphStyle('S2', fontName='Helvetica', fontSize=9, leading=11)),
            Paragraph("<b>PERSISTENCE LAYER:</b> Dual (Supabase DB + Local Storage)", ParagraphStyle('S3', fontName='Helvetica', fontSize=9, leading=11)),
            Paragraph("<b>CSV EXPORT FUNCTION:</b> Active ✓", ParagraphStyle('S4', fontName='Helvetica', fontSize=9, leading=11, alignment=2))
        ]
    ]
    summary_table = Table(summary_data, colWidths=[200, 160, 210, 114])
    summary_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), BG_CREAM),
        ('BOX', (0,0), (-1,-1), 1, BORDER_COLOR),
        ('PADDING', (0,0), (-1,-1), 6),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
    ]))
    elements.append(summary_table)
    elements.append(Spacer(1, 10))

    headers = [
        "Enquiry Category",
        "Frontend Component & Trigger",
        "Database Persistence",
        "Admin Portal Review Tab (/admin/leads)",
        "Captured Data Fields",
        "Status"
    ]

    t_data = [[Paragraph(h, table_header_style) for h in headers]]

    for r in enquiry_pipeline:
        comp_block = [
            Paragraph(r["frontend_component"], table_cell_comp),
            Paragraph(r["route_trigger"], table_cell_data)
        ]

        t_data.append([
            Paragraph(r["enquiry_type"], table_cell_type),
            comp_block,
            Paragraph(r["database_table"], table_cell_db),
            Paragraph(r["portal_tab"], table_cell_type),
            Paragraph(r["data_captured"], table_cell_data),
            Paragraph(f"✓ {r['status']}", status_style)
        ])

    table = Table(t_data, colWidths=[120, 130, 120, 140, 114, 60])
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
