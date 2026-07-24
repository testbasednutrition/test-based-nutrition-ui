import os
import csv
import re

CSV_OUTPUT_PATH = "/Users/user/testbasedweb/test-based-nutrition-ui/SEO_Metadata_Audit.csv"
PAGES_DIR = "src/pages"

routes_info = [
    {
        "route": "/",
        "file": "src/pages/Index.tsx",
        "page_name": "Homepage",
        "category": "Main Landing"
    },
    {
        "route": "/testing",
        "file": "src/pages/TestingPageV2.tsx",
        "page_name": "Testing Pathways",
        "category": "Main Service"
    },
    {
        "route": "/tbn-method",
        "file": "src/pages/TBNMethod.tsx",
        "page_name": "The TBN Method",
        "category": "Main System"
    },
    {
        "route": "/specialists",
        "file": "src/pages/SpecialistsDirectory.tsx",
        "page_name": "Specialists Directory",
        "category": "Directory"
    },
    {
        "route": "/collectives",
        "file": "src/pages/ClinicsDirectory.tsx",
        "page_name": "Clinics Directory",
        "category": "Directory"
    },
    {
        "route": "/treatments/womens-health",
        "file": "src/pages/treatments/WomensHealth.tsx",
        "page_name": "Women's Health Pathway",
        "category": "Health Pathway"
    },
    {
        "route": "/treatments/mens-health",
        "file": "src/pages/treatments/MensHealth.tsx",
        "page_name": "Men's Health Pathway",
        "category": "Health Pathway"
    },
    {
        "route": "/treatments/childrens-health",
        "file": "src/pages/treatments/ChildrensHealth.tsx",
        "page_name": "Children's Health Pathway",
        "category": "Health Pathway"
    },
    {
        "route": "/treatments/skin-health",
        "file": "src/pages/treatments/SkinHealth.tsx",
        "page_name": "Skin Health Pathway",
        "category": "Health Pathway"
    },
    {
        "route": "/treatments/neurodivergence",
        "file": "src/pages/treatments/Neurodivergence.tsx",
        "page_name": "Neurodivergence Pathway",
        "category": "Health Pathway"
    },
    {
        "route": "/treatments/sports-performance",
        "file": "src/pages/treatments/SportsPerformance.tsx",
        "page_name": "Sports Performance Pathway",
        "category": "Health Pathway"
    },
    {
        "route": "/treatments/pain-fatigue",
        "file": "src/pages/treatments/PainFatigue.tsx",
        "page_name": "Pain, Fatigue & Inflammation",
        "category": "Health Pathway"
    },
    {
        "route": "/treatments/anti-ageing",
        "file": "src/pages/treatments/AntiAgeing.tsx",
        "page_name": "Anti-Ageing & Longevity",
        "category": "Health Pathway"
    },
    {
        "route": "/treatments/fertility",
        "file": "src/pages/treatments/Fertility.tsx",
        "page_name": "Fertility Pathway",
        "category": "Health Pathway"
    },
    {
        "route": "/news",
        "file": "src/pages/NewsHub.tsx",
        "page_name": "News Hub & Research",
        "category": "Articles & Press"
    },
    {
        "route": "/partner-with-us",
        "file": "src/pages/PartnerWithUs3.tsx",
        "page_name": "Partner With Us / Retreats",
        "category": "Partner Program"
    },
    {
        "route": "/support",
        "file": "src/pages/Support.tsx",
        "page_name": "Support Centre",
        "category": "Support & Help"
    },
    {
        "route": "/privacy-policy",
        "file": "src/pages/PrivacyPolicy.tsx",
        "page_name": "Privacy Policy",
        "category": "Legal"
    },
    {
        "route": "/terms",
        "file": "src/pages/TermsOfService.tsx",
        "page_name": "Terms of Service",
        "category": "Legal"
    },
    {
        "route": "/specialists/:slug",
        "file": "src/pages/SpecialistProfile.tsx",
        "page_name": "Specialist Profile (Dynamic)",
        "category": "Dynamic Profile"
    },
    {
        "route": "/collectives/:slug",
        "file": "src/pages/ClinicProfile.tsx",
        "page_name": "Clinic Profile (Dynamic)",
        "category": "Dynamic Profile"
    },
    {
        "route": "/ambassadors/:slug",
        "file": "src/pages/AmbassadorProfile.tsx",
        "page_name": "Ambassador Profile (Dynamic)",
        "category": "Dynamic Profile"
    },
    {
        "route": "/locations/:area",
        "file": "src/pages/AreaProfile.tsx",
        "page_name": "Area Location (Dynamic)",
        "category": "Dynamic Location"
    }
]

def extract_seo_info(item):
    filepath = item["file"]
    title = "Test-Based Nutrition | Science-Led Health & Performance"
    description = "Personalised nutrition and performance protocols guided by world-leading experts. Book your free consultation today."
    canonical = f"https://testbasednutrition.com{item['route']}"
    og_image = "https://testbasednutrition.com/logos/tbn-official-logo.png"
    schema_type = "None"

    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()

        # Extract title from SEO component
        title_match = re.search(r'title=["\']([^"\']+)["\']', content)
        if title_match:
            title = title_match.group(1)

        # Extract description from SEO component
        desc_match = re.search(r'description=["\']([^"\']+)["\']', content)
        if desc_match:
            description = desc_match.group(1)

        # Extract canonical URL
        canon_match = re.search(r'canonical=["\']([^"\']+)["\']', content)
        if canon_match:
            canonical = canon_match.group(1)

        # Extract OG Image
        og_match = re.search(r'ogImage=["\']([^"\']+)["\']', content)
        if og_match:
            og_image = og_match.group(1)

        # Extract Schema Type
        schema_match = re.search(r'SchemaMarkup\s+type=["\']([^"\']+)["\']', content)
        if schema_match:
            schema_type = schema_match.group(1)

    title_len = len(title)
    desc_len = len(description)

    # Optimization status recommendation
    title_status = "Optimal" if 30 <= title_len <= 60 else ("Too Long" if title_len > 60 else "Too Short")
    desc_status = "Optimal" if 110 <= desc_len <= 160 else ("Too Long" if desc_len > 160 else "Needs Expansion")

    return {
        "Page Name": item["page_name"],
        "Route Path": item["route"],
        "Category": item["category"],
        "Meta Title": title,
        "Title Character Count": title_len,
        "Title Status": title_status,
        "Meta Description": description,
        "Description Character Count": desc_len,
        "Description Status": desc_status,
        "Canonical URL": canonical,
        "OG Share Image": og_image,
        "JSON-LD Schema Type": schema_type,
        "Source File": item["file"]
    }

def generate_csv():
    rows = []
    for item in routes_info:
        data = extract_seo_info(item)
        rows.append(data)

    fieldnames = [
        "Page Name", "Route Path", "Category", "Meta Title", "Title Character Count",
        "Title Status", "Meta Description", "Description Character Count",
        "Description Status", "Canonical URL", "OG Share Image", "JSON-LD Schema Type", "Source File"
    ]

    with open(CSV_OUTPUT_PATH, 'w', newline='', encoding='utf-8') as csvfile:
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()
        for r in rows:
            writer.writerow(r)

    print(f"Successfully generated SEO Metadata CSV: {CSV_OUTPUT_PATH}")

if __name__ == "__main__":
    generate_csv()
