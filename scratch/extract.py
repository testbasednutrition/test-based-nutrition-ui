import pypdf

reader = pypdf.PdfReader("TBN_Start_Here_COMPLETE_Section_Canva_Ready.pptx.pdf")
print("Total pages:", len(reader.pages))

with open("scratch/pdf_text.txt", "w") as f:
    for i, page in enumerate(reader.pages):
        f.write(f"--- Page {i + 1} ---\n")
        f.write(page.extract_text() + "\n\n")

print("Text extracted to scratch/pdf_text.txt")
