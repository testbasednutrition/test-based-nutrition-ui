import os
import re
import markdown
from fpdf import FPDF

class TBNPDF(FPDF):
    def header(self):
        # Draw top page header for all pages except the first page
        if self.page_no() > 1:
            self.set_font("Helvetica", "I", 8)
            self.set_text_color(120, 120, 120)
            self.cell(0, 10, "TestBased Nutrition -- Ecosystem Documentation", align="R")
            self.ln(8)
            # Draw a light grey line below the header
            self.set_draw_color(220, 220, 220)
            self.line(self.l_margin, self.get_y(), self.w - self.r_margin, self.get_y())
            self.ln(4)

    def footer(self):
        # Position at 15 mm from bottom
        self.set_y(-15)
        self.set_font("Helvetica", "I", 8)
        self.set_text_color(120, 120, 120)
        # Page number
        self.cell(0, 10, f"Page {self.page_no()}", align="C")

def clean_text(text):
    # Unicode punctuation mapping
    replacements = {
        '\u2019': "'",
        '\u2018': "'",
        '\u201c': '"',
        '\u201d': '"',
        '\u2013': '-',
        '\u2014': '--',
        '\u2022': '*', # bullet point
        '\u2714': '[x]', # checkmark
        '\u2713': '[x]', # checkmark
    }
    for k, v in replacements.items():
        text = text.replace(k, v)
    
    # Emojis and other non-latin1 symbols mapping
    emoji_map = {
        '🧭': '',
        '🛠': '',
        '🚀': '',
        '🌟': '',
        '📈': '',
        '🧪': '',
        '🔵': '*',
        '👉': '->',
    }
    for k, v in emoji_map.items():
        text = text.replace(k, v)
        
    # Eliminate characters that cannot be represented in latin-1 (to prevent fpdf encoding crash)
    cleaned = []
    for char in text:
        try:
            char.encode('latin-1')
            cleaned.append(char)
        except UnicodeEncodeError:
            cleaned.append(' ')
    return "".join(cleaned)

def convert_readme_to_pdf():
    readme_path = "README.md"
    pdf_path = "README.pdf"
    
    if not os.path.exists(readme_path):
        print(f"Error: {readme_path} not found.")
        return

    # Read markdown file
    with open(readme_path, "r", encoding="utf-8") as f:
        md_content = f.read()

    # Clean non-latin-1 characters and emojis
    cleaned_md = clean_text(md_content)

    # Convert to HTML using python-markdown with tables and extra extensions
    html_content = markdown.markdown(cleaned_md, extensions=['extra', 'tables'])

    # Setup FPDF
    pdf = TBNPDF(orientation='P', unit='mm', format='A4')
    pdf.set_margins(15, 15, 15)
    pdf.add_page()
    
    # Set default text style
    pdf.set_font("Helvetica", size=10)
    pdf.set_text_color(50, 50, 50) # Charcoal color for readability

    # Write HTML contents into the PDF
    pdf.write_html(html_content)

    # Output to file
    pdf.output(pdf_path)
    print(f"README.pdf created successfully at {pdf_path}!")

if __name__ == "__main__":
    convert_readme_to_pdf()
