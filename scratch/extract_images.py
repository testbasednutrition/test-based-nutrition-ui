import pypdf

reader = pypdf.PdfReader("TBN_Start_Here_COMPLETE_Section_Canva_Ready.pptx.pdf")
page = reader.pages[0]

print("Images on page 1:", len(page.images))
for i, image_file in enumerate(page.images):
    name = f"scratch/extracted_img_{i}.png"
    with open(name, "wb") as fp:
        fp.write(image_file.data)
    print(f"Saved image {i} as {name}")
