import markdown
from fpdf import FPDF
import traceback

try:
    # Read README.md
    with open("README.md", "r", encoding="utf-8") as f:
        md_text = f.read()

    # Convert to HTML
    html_text = markdown.markdown(md_text, extensions=['extra', 'tables'])

    print("HTML converted. Previewing first 500 chars:")
    print(html_text[:500])

    pdf = FPDF()
    pdf.add_page()
    pdf.set_font("Helvetica", size=10)
    pdf.write_html(html_text)
    pdf.output("scratch/readme_test.pdf")
    print("PDF generated successfully!")
except Exception as e:
    print("Error:")
    traceback.print_exc()
