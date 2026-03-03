export type Category =
  | "Public Health"
  | "Medical Research"
  | "Biotechnology"
  | "AI & Digital Health"
  | "Pharma & Policy"
  | "Global Health";

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: Category;
  author: string;
  date: string;
  image: string;
  readTime: string;
  featured?: boolean;
  longRead?: boolean;
}

export const categories: Category[] = [
  "Public Health",
  "Medical Research",
  "Biotechnology",
  "AI & Digital Health",
  "Pharma & Policy",
  "Global Health",
];

export const articles: Article[] = [
  {
    id: "1",
    title: "CRISPR Gene Therapy Achieves First Complete Remission in Sickle Cell Trial",
    excerpt: "A landmark clinical trial has demonstrated full remission in patients with sickle cell disease using a novel CRISPR-based gene editing approach, marking a new era in genetic medicine.",
    category: "Biotechnology",
    author: "Dr. Sarah Chen",
    date: "Mar 3, 2026",
    image: "biotech",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: "2",
    title: "AI Diagnostic Tool Outperforms Radiologists in Early Lung Cancer Detection",
    excerpt: "A deep learning model trained on 2 million chest scans achieves 97.3% accuracy in identifying Stage 1 lung cancers, potentially revolutionising early screening protocols.",
    category: "AI & Digital Health",
    author: "James Mitchell",
    date: "Mar 2, 2026",
    image: "ai-health",
    readTime: "6 min read",
  },
  {
    id: "3",
    title: "WHO Launches Global Framework for Pandemic Preparedness 2.0",
    excerpt: "The World Health Organisation unveils an updated pandemic response framework incorporating lessons from COVID-19 and recent outbreak data.",
    category: "Global Health",
    author: "Maria Rodriguez",
    date: "Mar 1, 2026",
    image: "global-health",
    readTime: "5 min read",
  },
  {
    id: "4",
    title: "New Study Links Omega-3 Index to Cardiovascular Risk Reduction",
    excerpt: "Researchers find that maintaining an Omega-3 index above 8% correlates with a 35% reduction in major cardiovascular events across a 10-year longitudinal study.",
    category: "Medical Research",
    author: "Dr. Emily Watson",
    date: "Feb 28, 2026",
    image: "research",
    readTime: "7 min read",
    longRead: true,
  },
  {
    id: "5",
    title: "FDA Fast-Tracks Approval for Novel Alzheimer's Antibody Treatment",
    excerpt: "A new monoclonal antibody therapy shows significant cognitive improvement in early-stage Alzheimer's patients, prompting accelerated regulatory review.",
    category: "Pharma & Policy",
    author: "Dr. Robert Kim",
    date: "Feb 27, 2026",
    image: "pharma",
    readTime: "6 min read",
  },
  {
    id: "6",
    title: "UK Public Health Report Reveals Rising Vitamin D Deficiency in Children",
    excerpt: "A comprehensive national survey shows 42% of UK children under 12 have insufficient vitamin D levels, raising concerns about bone health and immunity.",
    category: "Public Health",
    author: "Dr. Hannah Price",
    date: "Feb 26, 2026",
    image: "public-health",
    readTime: "5 min read",
  },
  {
    id: "7",
    title: "Personalised Nutrition Algorithms Show Promise in Type 2 Diabetes Management",
    excerpt: "Machine learning models that tailor dietary recommendations based on microbiome analysis demonstrate superior glucose control compared to standard dietary guidelines.",
    category: "AI & Digital Health",
    author: "Prof. Li Wei",
    date: "Feb 25, 2026",
    image: "nutrition",
    readTime: "9 min read",
    longRead: true,
  },
  {
    id: "8",
    title: "Synthetic Biology Startup Creates Plant-Based Omega-3 Rival to Fish Oil",
    excerpt: "Using engineered yeast strains, researchers have produced EPA and DHA at scale without marine sources, offering a sustainable alternative to traditional fish oil supplements.",
    category: "Biotechnology",
    author: "Alex Turner",
    date: "Feb 24, 2026",
    image: "biotech",
    readTime: "6 min read",
  },
  {
    id: "9",
    title: "Global Antibiotic Resistance Deaths Projected to Double by 2035",
    excerpt: "New modelling data from The Lancet warns that antimicrobial resistance could claim 2 million lives annually within the next decade without urgent policy intervention.",
    category: "Global Health",
    author: "Dr. Amara Osei",
    date: "Feb 23, 2026",
    image: "global-health",
    readTime: "7 min read",
  },
  {
    id: "10",
    title: "Blood Biomarker Panel Can Predict Athletic Overtraining with 90% Accuracy",
    excerpt: "A panel of 12 blood biomarkers has been validated to detect overtraining syndrome weeks before clinical symptoms appear, enabling preventive intervention for elite athletes.",
    category: "Medical Research",
    author: "Dr. Marcus Foley",
    date: "Feb 22, 2026",
    image: "research",
    readTime: "8 min read",
  },
  {
    id: "11",
    title: "European Commission Proposes Stricter Regulations on Health Supplements",
    excerpt: "New draft legislation aims to standardise quality testing and labelling requirements for dietary supplements across EU member states.",
    category: "Pharma & Policy",
    author: "Sophie Laurent",
    date: "Feb 21, 2026",
    image: "pharma",
    readTime: "5 min read",
  },
  {
    id: "12",
    title: "Community Health Workers Cut Maternal Mortality by 40% in Rural Sub-Saharan Africa",
    excerpt: "A WHO-backed programme training local health workers in prenatal care has dramatically reduced maternal deaths across six countries.",
    category: "Public Health",
    author: "Dr. Grace Njoku",
    date: "Feb 20, 2026",
    image: "public-health",
    readTime: "6 min read",
  },
];
