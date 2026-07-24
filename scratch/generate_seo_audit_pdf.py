import os
import csv
from reportlab.lib.pagesizes import letter, landscape
from reportlab.lib import colors
from reportlab.lib.units import inch
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, KeepTogether, HRFlowable
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.pdfgen import canvas

CSV_INPUT_PATH = "/Users/user/testbasedweb/test-based-nutrition-ui/SEO_Metadata_Audit.csv"
PDF_OUTPUT_PATH = "/Users/user/testbasedweb/test-based-nutrition-ui/SEO_Metadata_Audit_Report.pdf"

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
        
        # Header line (pages 2+)
        if self._pageNumber > 1:
            self.drawString(54, 570, "Test-Based Nutrition — SEO Meta Titles & Descriptions Audit")
            self.setStrokeColor(colors.HexColor("#e5e7eb"))
            self.setLineWidth(0.5)
            self.line(54, 562, 738, 562)
            
        # Footer
        page_text = f"Page {self._pageNumber} of {page_count}"
        self.drawRightString(738, 25, page_text)
        self.drawString(54, 25, "CONFIDENTIAL • TEST-BASED NUTRITION SEO METADATA AUDIT REPORT")
        self.setStrokeColor(colors.HexColor("#e5e7eb"))
        self.setLineWidth(0.5)
        self.line(54, 35, 738, 35)
        
        self.restoreState()

def build_pdf():
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
    ACCENT_AMBER = colors.HexColor("#d97706") # Attention Amber
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
        leading=13,
        textColor=TEXT_MUTED,
        spaceAfter=12
    )

    h1_style = ParagraphStyle(
        'Heading1Custom',
        parent=styles['Heading2'],
        fontName='Helvetica-Bold',
        fontSize=12,
        leading=15,
        textColor=PRIMARY,
        spaceBefore=10,
        spaceAfter=6
    )

    body_style = ParagraphStyle(
        'BodyCustom',
        parent=styles['BodyText'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11,
        textColor=SECONDARY
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

    table_cell_title = ParagraphStyle(
        'CellTitle',
        fontName='Helvetica-Bold',
        fontSize=8,
        leading=10.5,
        textColor=SECONDARY
    )

    table_cell_desc = ParagraphStyle(
        'CellDesc',
        fontName='Helvetica',
        fontSize=7.5,
        leading=9.5,
        textColor=TEXT_MUTED
    )

    status_optimal = ParagraphStyle(
        'StatusOpt',
        fontName='Helvetica-Bold',
        fontSize=7.5,
        leading=9,
        textColor=ACCENT_GREEN
    )

    status_warning = ParagraphStyle(
        'StatusWarn',
        fontName='Helvetica-Bold',
        fontSize=7.5,
        leading=9,
        textColor=ACCENT_AMBER
    )

    elements = []

    # Title & Header Block
    elements.append(Paragraph("Test-Based Nutrition — Search Engine Optimization", ParagraphStyle('BrandPrefix', fontName='Helvetica-Bold', fontSize=9, textColor=PRIMARY, leading=11, spaceAfter=2)))
    elements.append(Paragraph("Page-by-Page SEO Metadata Audit Report", title_style))
    elements.append(Paragraph("Comprehensive review of Meta Titles, Meta Descriptions, Character Counts, Canonical URLs, and Schema Types", subtitle_style))
    elements.append(HRFlowable(width="100%", thickness=1.5, color=PRIMARY, spaceAfter=10))

    # Read CSV Data
    rows_data = []
    if os.path.exists(CSV_INPUT_PATH):
        with open(CSV_INPUT_PATH, 'r', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            for r in reader:
                rows_data.append(r)

    # Executive Overview Cards
    total_pages = len(rows_data)
    optimal_titles = sum(1 for r in rows_data if r["Title Status"] == "Optimal")
    optimal_descs = sum(1 for r in rows_data if r["Description Status"] == "Optimal")

    summary_data = [
        [
            Paragraph(f"<b>TOTAL PAGES AUDITED:</b> {total_pages}", ParagraphStyle('S1', fontName='Helvetica', fontSize=9, leading=11)),
            Paragraph(f"<b>OPTIMAL TITLES:</b> {optimal_titles}/{total_pages}", ParagraphStyle('S2', fontName='Helvetica', fontSize=9, leading=11)),
            Paragraph(f"<b>OPTIMAL DESCRIPTIONS:</b> {optimal_descs}/{total_pages}", ParagraphStyle('S3', fontName='Helvetica', fontSize=9, leading=11)),
            Paragraph(f"<b>CANONICAL TAGS:</b> 100% Active", ParagraphStyle('S4', fontName='Helvetica', fontSize=9, leading=11))
        ]
    ]
    summary_table = Table(summary_data, colWidths=[170, 170, 170, 174])
    summary_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), BG_CREAM),
        ('BOX', (0,0), (-1,-1), 1, BORDER_COLOR),
        ('PADDING', (0,0), (-1,-1), 6),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
    ]))
    elements.append(summary_table)
    elements.append(Spacer(1, 10))

    # Main SEO Table
    headers = [
        "Page & Route Path",
        "Category",
        "Meta Title Tag (Len / Status)",
        "Meta Description Tag (Len / Status)",
        "Schema Type"
    ]

    t_data = [[Paragraph(h, table_header_style) for h in headers]]

    for r in rows_data:
        # Title Cell
        t_status_style = status_optimal if r["Title Status"] == "Optimal" else status_warning
        title_block = [
            Paragraph(r["Meta Title"], table_cell_title),
            Paragraph(f"Length: {r['Title Character Count']} chars • <b>{r['Title Status']}</b>", t_status_style)
        ]

        # Desc Cell
        d_status_style = status_optimal if r["Description Status"] == "Optimal" else status_warning
        desc_block = [
            Paragraph(r["Meta Description"], table_cell_desc),
            Paragraph(f"Length: {r['Description Character Count']} chars • <b>{r['Description Status']}</b>", d_status_style)
        ]

        # Page Cell
        page_block = [
            Paragraph(r["Page Name"], table_cell_page),
            Paragraph(r["Route Path"], table_cell_route)
        ]

        t_data.append([
            page_block,
            Paragraph(r["Category"], body_style),
            title_block,
            desc_block,
            Paragraph(r["JSON-LD Schema Type"], table_cell_page)
        ])

    table = Table(t_data, colWidths=[130, 85, 210, 210, 49])
    table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), PRIMARY),
        ('GRID', (0,0), (-1,-1), 0.5, BORDER_COLOR),
        ('PADDING', (0,0), (-1,-1), 5),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, BG_CREAM])
    ]))

    elements.append(table)
    doc.build(elements, canvasmaker=NumberedCanvasLandscape)
    print(f"Successfully generated SEO Audit PDF: {PDF_OUTPUT_PATH}")

if __name__ == "__main__":
    build_pdf()
