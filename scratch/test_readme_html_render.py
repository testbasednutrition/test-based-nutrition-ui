import markdown
from fpdf import FPDF
import re

try:
    # Sample HTML with lists, code block, and table
    html_text = """
    <h1>Test Markdown elements</h1>
    <p>This is a paragraph with <b>bold</b> and <i>italic</i> and <code>inline code</code>.</p>
    <h2>List elements</h2>
    <ul>
        <li>First bullet point</li>
        <li>Second bullet point</li>
    </ul>
    <h2>Code block</h2>
    <pre><code># Command
npm run dev
</code></pre>
    <h2>Table</h2>
    <table>
        <thead>
            <tr>
                <th>Header A</th>
                <th>Header B</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Cell 1A</td>
                <td>Cell 1B</td>
            </tr>
            <tr>
                <td>Cell 2A</td>
                <td>Cell 2B</td>
            </tr>
        </tbody>
    </table>
    """

    pdf = FPDF()
    pdf.add_page()
    pdf.set_font("Helvetica", size=10)
    pdf.write_html(html_text)
    pdf.output("scratch/readme_render_test.pdf")
    print("PDF generated successfully!")
except Exception as e:
    import traceback
    traceback.print_exc()
