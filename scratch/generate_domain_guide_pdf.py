import os
import csv
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.pdfgen import canvas

PDF_OUTPUT_PATH = "/Users/user/testbasedweb/test-based-nutrition-ui/Live_Domain_Deployment_Guide.pdf"

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
            self.drawString(54, 750, "Test-Based Nutrition — Production Domain Deployment Guide")
            self.setStrokeColor(colors.HexColor("#e5e7eb"))
            self.setLineWidth(0.5)
            self.line(54, 742, 558, 742)
            
        page_text = f"Page {self._pageNumber} of {page_count}"
        self.drawRightString(558, 36, page_text)
        self.drawString(54, 36, "CONFIDENTIAL • TEST-BASED NUTRITION GO-LIVE DEPLOYMENT DECK")
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
    ACCENT_GREEN = colors.HexColor("#059669") # Emerald
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
        fontSize=10.5,
        leading=14,
        textColor=TEXT_MUTED,
        spaceAfter=14
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

    table_cell_type = ParagraphStyle(
        'CellType',
        fontName='Helvetica-Bold',
        fontSize=8.5,
        leading=10.5,
        textColor=PRIMARY
    )

    table_cell_name = ParagraphStyle(
        'CellName',
        fontName='Helvetica-Bold',
        fontSize=8.5,
        leading=10.5,
        textColor=SECONDARY
    )

    table_cell_val = ParagraphStyle(
        'CellVal',
        fontName='Helvetica',
        fontSize=8,
        leading=10,
        textColor=SECONDARY
    )

    elements = []

    # Title Header Block
    elements.append(Paragraph("Test-Based Nutrition — Vercel Production Deployment", ParagraphStyle('BrandPrefix', fontName='Helvetica-Bold', fontSize=9.5, textColor=PRIMARY, leading=11, spaceAfter=2)))
    elements.append(Paragraph("Domain Go-Live Step-by-Step Deployment Guide", title_style))
    elements.append(Paragraph("Step-by-step instructions to connect test-basednutrition.com and partner-hub subdomains from Vercel to your domain registrar.", subtitle_style))
    elements.append(HRFlowable(width="100%", thickness=1.5, color=PRIMARY, spaceAfter=12))

    # DNS Records Table
    elements.append(Paragraph("1. Required DNS Records (At Your Registrar: GoDaddy / Hostinger / Namecheap)", h1_style))
    
    t_headers = ["Record Type", "Host / Name", "Target Value / Points To", "Purpose & Target Project"]
    t_rows = [
        ["A Record", "@ (apex)", "76.76.21.21", "Directs test-basednutrition.com to main website UI"],
        ["CNAME", "www", "cname.vercel-dns.com", "Directs www.test-basednutrition.com to main website UI"],
        ["CNAME", "partner-hub", "cname.vercel-dns.com", "Directs partner-hub.test-basednutrition.com to Partner Hub"]
    ]

    t_data = [[Paragraph(h, table_header_style) for h in t_headers]]
    for r in t_rows:
        t_data.append([
            Paragraph(r[0], table_cell_type),
            Paragraph(r[1], table_cell_name),
            Paragraph(r[2], table_cell_val),
            Paragraph(r[3], table_cell_val)
        ])

    table = Table(t_data, colWidths=[80, 80, 160, 184])
    table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), PRIMARY),
        ('GRID', (0,0), (-1,-1), 0.5, BORDER_COLOR),
        ('PADDING', (0,0), (-1,-1), 6),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, BG_CREAM])
    ]))
    elements.append(table)
    elements.append(Spacer(1, 12))

    # Section 2: Step-by-Step Procedure
    elements.append(Paragraph("2. Step-by-Step Go-Live Action Plan", h1_style))
    elements.append(Paragraph("• <b>Step 1: Add Custom Domain in Vercel UI Project:</b> Log into Vercel Dashboard ➔ Select <code>test-based-nutrition-ui</code> project ➔ Settings ➔ Domains ➔ Add <code>test-basednutrition.com</code>.", bullet_style))
    elements.append(Paragraph("• <b>Step 2: Add Custom Subdomain for Partner Hub:</b> Select <code>partner-hub</code> project ➔ Settings ➔ Domains ➔ Add <code>partner-hub.test-basednutrition.com</code>.", bullet_style))
    elements.append(Paragraph("• <b>Step 3: Update DNS Records at Domain Registrar:</b> Log into GoDaddy / Hostinger / 123-Reg ➔ Open DNS Management ➔ Add the A & CNAME records shown in the table above.", bullet_style))
    elements.append(Paragraph("• <b>Step 4: Automated SSL Certification:</b> Vercel will automatically issue free SSL/TLS certificates once DNS propagation completes (typically 2 to 15 minutes).", bullet_style))
    elements.append(Paragraph("• <b>Step 5: Verify Production Environment Variables:</b> Confirm <code>VITE_SUPABASE_URL</code> and <code>VITE_SUPABASE_ANON_KEY</code> are active in Vercel settings for production environment.", bullet_style))
    elements.append(Spacer(1, 12))

    # Section 3: Verification Checklist
    elements.append(Paragraph("3. Post-Deployment Verification Checklist", h1_style))
    elements.append(Paragraph("• Check <code>https://www.test-basednutrition.com</code> renders with green SSL lock icon.", bullet_style))
    elements.append(Paragraph("• Test submitting a Quiz lead and Support ticket to verify live data persistence.", bullet_style))
    elements.append(Paragraph("• Confirm <code>https://www.test-basednutrition.com/sitemap.xml</code> is accessible for search crawlers.", bullet_style))
    elements.append(Spacer(1, 15))

    doc.build(elements, canvasmaker=NumberedCanvas)
    print(f"Generated PDF: {PDF_OUTPUT_PATH}")

if __name__ == "__main__":
    generate_pdf()
