import markdown
from fpdf import FPDF

html_content = """
<h1>Test Title</h1>
<p>This is a paragraph with <b>bold</b> and <i>italic</i> text.</p>
"""

pdf = FPDF()
pdf.add_page()
pdf.set_font("Helvetica", size=12)
pdf.write_html(html_content)
pdf.output("/Users/user/testbasedweb/test-based-nutrition-ui/scratch/test.pdf")
print("PDF created successfully!")
