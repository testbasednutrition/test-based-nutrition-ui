import React, { useState, useEffect } from "react";
import { 
  Folder, BookOpen, Layers, Award, Users, TrendingUp, Share2, Clipboard, 
  HelpCircle, Settings, Plus, Search, FileText, CheckCircle2, ChevronRight, 
  ArrowLeft, Copy, UserCheck, ShieldAlert, BookMarked, Download, Info, Video, 
  Check, Lock, PlayCircle, Eye, Star, PlusCircle, AlertCircle, Trash2, Upload,
  Briefcase, MessageSquare, Filter, Grid, List, Calendar, ArrowRight, UserPlus
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

// Interface Definitions
interface ResourceItem {
  id: string;
  title: string;
  type: "pdf" | "video" | "script" | "template" | "link" | "prompt";
  description: string;
  url?: string;
  content?: string; // Rich content or copyable prompts
  isCompleted?: boolean;
}

interface SubFolder {
  id: string;
  name: string;
  resources: ResourceItem[];
}

interface FolderSection {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  subFolders: SubFolder[];
  category: "onboarding" | "academy" | "hubs" | "growth" | "operations" | "marketing";
}

// Initial Data Structure exactly matching the user request
const initialFolders: FolderSection[] = [
  {
    id: "start-here",
    number: 1,
    title: "START HERE",
    subtitle: "Onboarding & Foundational Systems",
    description: "Welcome to TBN! Your journey starts here. Access the core mission, setup plans, and scope guidelines.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
    category: "onboarding",
    subFolders: [
      {
        id: "welcome-tbn",
        name: "Welcome to TBN",
        resources: [
          { id: "sh-1", title: "Welcome to TBN Video Walkthrough", type: "video", description: "A message from the co-founders.", url: "#" },
          { id: "sh-2", title: "TBN Story & History", type: "pdf", description: "Our timeline and evolution of test-based care.", url: "#" },
          { id: "sh-3", title: "TBN Mission Document", type: "pdf", description: "Aligning on core vision and customer care.", url: "#" },
          { id: "sh-4", title: "Meet the Team", type: "link", description: "Meet our board, medical directors, and specialists.", url: "#" }
        ]
      },
      {
        id: "tbn-method",
        name: "The TBN Method™",
        resources: [
          { id: "sh-5", title: "Method Overview: How We Support Partners", type: "pdf", description: "Supports clinics, practitioners, health clubs and venues.", url: "#" },
          { id: "sh-6", title: "The Client Journey: Discover, Test, Target, Transform, Retest, Escalate", type: "script", description: "Flowchart and verbal walkthrough of client journey.", url: "#" }
        ]
      },
      {
        id: "screening-standards",
        name: "How We Test & Screen",
        resources: [
          { id: "sh-7", title: "Foundational Testing (Omega & Gut)", type: "pdf", description: "Cellular health and microbiome indicators.", url: "#" },
          { id: "sh-8", title: "Baseline Screening (Rapid Point-of-Care)", type: "pdf", description: "Finger-prick tests yielding results in under 15 mins.", url: "#" },
          { id: "sh-9", title: "Advanced Screening (Phlebotomy / Blood Draw)", type: "pdf", description: "Venous draw protocols for advanced metabolic markers.", url: "#" },
          { id: "sh-10", title: "Medical-Clinical Referral Support", type: "link", description: "Private GP referral pathways and support systems.", url: "#" }
        ]
      },
      {
        id: "getting-started",
        name: "Getting Started & Onboarding",
        resources: [
          { id: "sh-11", title: "Partner Onboarding Checklist", type: "template", description: "Step-by-step checklist for the first 7 days.", url: "#" },
          { id: "sh-12", title: "First 30 Days Launch Plan", type: "pdf", description: "Commercial checklist to secure your first 10 testing clients.", url: "#" },
          { id: "sh-13", title: "Setting up your clinic or venue", type: "pdf", description: "Optimal layout, equipment, and presentation tips.", url: "#" },
          { id: "sh-14", title: "Introducing TBN to your staff team", type: "script", description: "Staff presentation deck and presentation script.", url: "#" },
          { id: "sh-15", title: "Launch Day Clinic Checklist", type: "template", description: "Checklist for hosting your first testing clinic day.", url: "#" }
        ]
      },
      {
        id: "compliance-scope",
        name: "Compliance & Scope of Practice",
        resources: [
          { id: "sh-16", title: "What We Can & Cannot Say", type: "pdf", description: "Crucial guidelines on phrasing.", url: "#" },
          { id: "sh-17", title: "EFSA / ASA / MHRA-Safe Language Guide", type: "pdf", description: "Compliant wording directory.", url: "#" },
          { id: "sh-18", title: "Screening vs Diagnosis Guideline", type: "pdf", description: "Maintaining scope of practice boundaries.", url: "#" },
          { id: "sh-19", title: "Referral Guidance & Trigger Chart", type: "link", description: "When to escalate to clinical support.", url: "#" }
        ]
      }
    ]
  },
  {
    id: "training-academy",
    number: 2,
    title: "TRAINING ACADEMY",
    subtitle: "Course Structure & Pathway Certification",
    description: "Access structured clinical and consultation courses to get certified in TBN pathways.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800",
    category: "academy",
    subFolders: [
      {
        id: "fast-track",
        name: "Quick-Start Training",
        resources: [
          { id: "ta-1", title: "Balance Concept Fast-Track Training (1hr)", type: "video", description: "Get your first sale or subscription within 48 hours." },
          { id: "ta-2", title: "BalanceTest Walkthrough & Consultation Script", type: "script", description: "Word-for-word script to guide your first assessment." },
          { id: "ta-3", title: "Launch Day Setup: Booking your first testing clinic", type: "pdf", description: "How to invite clients and package the offering." }
        ]
      },
      {
        id: "zinzino-partner",
        name: "Zinzino Independent Partner Training",
        resources: [
          { id: "ta-4", title: "Zinzino Back Office Navigation Guide", type: "video", description: "How to manage orders, subscriptions, and client lists." },
          { id: "ta-5", title: "Core Products deep dive: BalanceOil+, ZinoBiotic+, Xtend+, Viva+", type: "pdf", description: "Ingredients, science, and delivery instructions." },
          { id: "ta-6", title: "Maximising Earnings with Subscriptions & Stock Kits", type: "pdf", description: "Commission structures and product pricing strategies." }
        ]
      },
      {
        id: "pathway-certifications",
        name: "TBN Pathway Certification (e.g. Menopause)",
        resources: [
          { id: "ta-7", title: "Expert-Led Menopause Science: Cellular Health & Inflammation", type: "video", description: "Cellular changes during menopause explained by Dr Ishtiaq." },
          { id: "ta-8", title: "Why Omega Testing Matters in Peri- to Post-Menopause", type: "pdf", description: "Reducing cellular load and inflammation with targeted ratios." },
          { id: "ta-9", title: "Gut-Brain-Hormone Axis & Skin, Ageing & Cellular Repair", type: "pdf", description: "Cross-system pathways in mid-life women." },
          { id: "ta-10", title: "Full Protocol Case Studies & Practical Outcomes", type: "pdf", description: "Real patient reviews and protocol adjustments." },
          { id: "ta-11", title: "Take Menopause Support Certificate Exam", type: "link", description: "Get TBN Certified in Menopause Pathway Support." }
        ]
      },
      {
        id: "practitioner-skills",
        name: "Core Practitioner Skills",
        resources: [
          { id: "ta-12", title: "Consultation + Protocol Delivery Training", type: "video", description: "Standardising client communication." },
          { id: "ta-13", title: "Symptom-to-Product Matching Tools", type: "template", description: "Interactive matrix matching symptoms to TBN/Zinzino protocols." }
        ]
      },
      {
        id: "client-engagement-acad",
        name: "Client Engagement & blue prints",
        resources: [
          { id: "ta-14", title: "Workshop & Group Programme Blueprints", type: "pdf", description: "Blueprints for 6-week wellness group runs." },
          { id: "ta-15", title: "Existing Treatments Integration Checklist", type: "template", description: "Integrate tests to boost existing revenue streams." }
        ]
      }
    ]
  },
  {
    id: "testing-hub",
    number: 3,
    title: "TESTING HUB",
    subtitle: "Biomarkers & Test Management",
    description: "Deep dive into what we test: foundational test kits, baseline finger-pricks, and advanced blood panels.",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351166?auto=format&fit=crop&q=80&w=800",
    category: "hubs",
    subFolders: [
      {
        id: "foundational-tests",
        name: "Foundational Tests",
        resources: [
          { id: "th-1", title: "Omega Balance Test: What it measures & Why it matters", type: "pdf", description: "Cell health, inflammation protection value, brain index, and fatty acid profile." },
          { id: "th-2", title: "Gut Health Test: What it measures & Why it matters", type: "pdf", description: "Gut function, gut barrier integrity, and immune resilience." }
        ]
      },
      {
        id: "baseline-fingerprick",
        name: "Baseline Point-of-Care Markers (Finger-Prick)",
        resources: [
          { id: "th-3", title: "Vitamin D & HbA1c testing workflow", type: "pdf", description: "What it is, why we test it, pathways, and script guidelines." },
          { id: "th-4", title: "CRP & hs-CRP (Inflammation Markers)", type: "pdf", description: "Key indicators for cardiac, metabolic, and recovery load." },
          { id: "th-5", title: "Ferritin, Cortisol & Folate protocols", type: "pdf", description: "Iron stores, stress, and cell replication metrics." },
          { id: "th-6", title: "Hormone Markers: AMH, Progesterone, HCG-β", type: "pdf", description: "Fertility and hormonal environment parameters." }
        ]
      },
      {
        id: "advanced-blood-markers",
        name: "Advanced Phlebotomy Markers",
        resources: [
          { id: "th-7", title: "Testosterone Panel Details", type: "pdf", description: "Total vs Free Testosterone, SHBG, and Men's Health integration." },
          { id: "th-8", title: "Thyroid (TSH) & Vitamin B12 panels", type: "pdf", description: "Metabolic rate markers and methylation/nervous system indicators." },
          { id: "th-9", title: "FSH & LH Hormonal Panels", type: "pdf", description: "Ovarian reserve, cycle timing, and menopause confirmation." }
        ]
      }
    ]
  },
  {
    id: "pathways-hub",
    number: 4,
    title: "PATHWAYS HUB",
    subtitle: "Treatment Pathway Files",
    description: "Detailed pathways covering Women's Health, Men's Health, Pain, and Sports performance.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800",
    category: "hubs",
    subFolders: [
      {
        id: "core-pathways",
        name: "Core Clinical Pathways",
        resources: [
          { id: "ph-1", title: "Women's Health Pathway File", type: "pdf", description: "Hormones, perimenopause, fertility, and gut connections." },
          { id: "ph-2", title: "Men's Health Pathway File", type: "pdf", description: "Beyond Testosterone, energy, mood, and fat loss." },
          { id: "ph-3", title: "Sports Performance Pathway File", type: "pdf", description: "Recovery load, cellular fuel, and anti-inflammation." },
          { id: "ph-4", title: "Chronic Pain & Inflammation Pathway File", type: "pdf", description: "Joint integrity, hs-CRP, autoimmune screening, and gut barriers." }
        ]
      },
      {
        id: "specialist-pathways",
        name: "Specialist Pathways",
        resources: [
          { id: "ph-5", title: "Neurodivergence Pathway File", type: "pdf", description: "ADHD, autism, lipid balancing, and focus index." },
          { id: "ph-6", title: "Skin Health Pathway (Skin From Within)", type: "pdf", description: "Acne, eczema, psoriasis, gut-skin axis." },
          { id: "ph-7", title: "Weight Loss & Metabolic Health Pathway File", type: "pdf", description: "Pre-diabetes, HbA1c, insulin sensitivity, and fat metabolism." }
        ]
      }
    ]
  },
  {
    id: "gain-clients",
    number: 5,
    title: "GAIN CLIENTS / PATIENTS",
    subtitle: "Acquisition & Marketing Campaigns",
    description: "Campaign scripts, win-back emails, social calendars, and tools to fill your testing booking list.",
    image: "https://images.unsplash.com/photo-1552581230-c01374138763?auto=format&fit=crop&q=80&w=800",
    category: "growth",
    subFolders: [
      {
        id: "client-types",
        name: "The 3 Client Types Campaigns",
        resources: [
          { id: "gc-1", title: "Type 1: Old / Inactive Client Reactivation Sequence", type: "template", description: "Email series: 'We now offer cellular testing'." },
          { id: "gc-2", title: "Type 2: Active Client Treatment Upgrade Script", type: "script", description: "Positioning tests naturally during current sessions." },
          { id: "gc-3", title: "Type 3: New Client Acquisition Campaigns", type: "pdf", description: "Local lead generation, discovery calls, and workshops." }
        ]
      },
      {
        id: "acquisition-tools",
        name: "Client Acquisition Scripts & Templates",
        resources: [
          { id: "gc-4", title: "Discovery Call Booking Script (Word-for-Word)", type: "script", description: "Convert inquiries to booked testing consultations." },
          { id: "gc-5", title: "Objection Handling Guide (Price, Finger-Prick)", type: "script", description: "How to answer: 'Why do I need a blood test?'." },
          { id: "gc-6", title: "WhatsApp Templates for Retest Bookings", type: "template", description: "Short, high-converting copy to book the 120-day retest." }
        ]
      }
    ]
  },
  {
    id: "scale-business",
    number: 6,
    title: "SCALE YOUR BUSINESS",
    subtitle: "Commercial Models & Clinic Systems",
    description: "Commercial growth, pricing models, subscription packages, and adding additional practitioners.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    category: "growth",
    subFolders: [
      {
        id: "revenue-growth",
        name: "Revenue Optimization",
        resources: [
          { id: "sb-1", title: "Earning Guide: Retail Kits, Subscriptions & Packages", type: "pdf", description: "Breakdown of margins on tests and protocol products." },
          { id: "sb-2", title: "Pricing Sheet: Test Profiles & Multi-test Pathways", type: "pdf", description: "Suggested client pricing models for high profit." },
          { id: "sb-3", title: "Creating Recurring Revenue with Product Subscriptions", type: "pdf", description: "Secure monthly cash flow via client oil orders." }
        ]
      },
      {
        id: "programme-building",
        name: "Programme Building & Integration",
        resources: [
          { id: "sb-4", title: "30 / 60 / 90 / 120 Day Transformation Models", type: "template", description: "Framework for packaging testing + protocols + follow-up." },
          { id: "sb-5", title: "Integrating TBN with current treatment flows", type: "pdf", description: "Increase average spend per client by 40%." },
          { id: "sb-6", title: "Building a Clinic Membership Model", type: "pdf", description: "Client retention structures for continuous support." }
        ]
      }
    ]
  },
  {
    id: "lead-partners",
    number: 7,
    title: "LEAD WITH PARTNERS",
    subtitle: "Referrals & Network Expansion",
    description: "Grow your network by onboarding other clinics, health clubs, and practitioners.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    category: "growth",
    subFolders: [
      {
        id: "get-partners",
        name: "How to Recruit & Position",
        resources: [
          { id: "lp-1", title: "Clinic & Practitioner Outreach Scripts", type: "script", description: "Introduce TBN to health clubs, gyms, and aesthetic clinics." },
          { id: "lp-2", title: "TBN Partnership Business Presentation Deck", type: "template", description: "Slides to pitch the financial and clinical benefits." },
          { id: "lp-3", title: "Local Collaboration & Referral Systems", type: "pdf", description: "How to partner with local gyms for joint testing days." }
        ]
      },
      {
        id: "mentoring-leadership",
        name: "Mentoring & Team Management",
        resources: [
          { id: "lp-4", title: "How to Support and Mentor New Partners", type: "pdf", description: "Checklists for your referred clinics' first 30 days." },
          { id: "lp-5", title: "Running Region Check-ins & Growth Meetings", type: "template", description: "Keeping partners active, motivated, and compliant." }
        ]
      }
    ]
  },
  {
    id: "point-of-care",
    number: 8,
    title: "POINT-OF-CARE SCREENING",
    subtitle: "Finger-Prick & Phlebotomy Workflows",
    description: "Practical step-by-step guides for rapid finger-prick testing and blood draw services.",
    image: "https://images.unsplash.com/photo-1584515901367-f134706efc3c?auto=format&fit=crop&q=80&w=800",
    category: "operations",
    subFolders: [
      {
        id: "screening-workflow",
        name: "Screening Operations",
        resources: [
          { id: "poc-1", title: "Finger-prick testing: Step-by-step workflow video", type: "video", description: "Maximising client comfort and sample accuracy." },
          { id: "poc-2", title: "Phlebotomy blood draw SOP & safety protocols", type: "pdf", description: "Standard operating procedures for clinic rooms." },
          { id: "poc-3", title: "Marker Timing & Sample Shipping SOP", type: "pdf", description: "How to package and ship to ensure sample viability." }
        ]
      },
      {
        id: "profile-upsells",
        name: "Profile Upsells & Packages",
        resources: [
          { id: "poc-4", title: "Men's Health profiles & Finger-prick combinations", type: "template", description: "Bundling Hormone tests with inflammation markers." },
          { id: "poc-5", title: "Sports Performance recovery screening packages", type: "template", description: "Combine hs-CRP, Vitamin D, and Ferritin for athletes." }
        ]
      }
    ]
  },
  {
    id: "protocol-hub",
    number: 9,
    title: "PROTOCOL HUB",
    subtitle: "Client Treatment Protocols",
    description: "Pre-made nutritional and lifestyle protocols for cellular inflammation and pathways.",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
    category: "operations",
    subFolders: [
      {
        id: "foundational-protocols",
        name: "Foundational Protocols",
        resources: [
          { id: "pr-1", title: "Omega 6:3 Balance Protocol Sheet", type: "template", description: "Dosing calculator based on weight and test results." },
          { id: "pr-2", title: "Microbiome Restoration Protocol Sheet", type: "template", description: "Prebiotics, fibers, and gut-barrier support dosing." }
        ]
      },
      {
        id: "pathway-protocols",
        name: "Pathway Protocols",
        resources: [
          { id: "pr-3", title: "Menopause & Perimenopause Support Protocol", type: "pdf", description: "Hormone balancing, sleep support, inflammation control." },
          { id: "pr-4", title: "Sports Performance Recovery Protocol", type: "pdf", description: "Muscle repair, cellular energy boost, mitochondrial health." },
          { id: "pr-5", title: "Skin Health (Inside-Out) Protocol Sheet", type: "pdf", description: "Anti-acne diet, sebum control, cellular renewal." }
        ]
      },
      {
        id: "retest-strategies",
        name: "Retesting Strategy",
        resources: [
          { id: "pr-6", title: "The 120-Day Retest Strategy", type: "pdf", description: "Why we wait 120 days (red blood cell cycle) to test again." },
          { id: "pr-7", title: "Client accountability & protocol compliance trackers", type: "template", description: "Daily checklists to keep clients on track." }
        ]
      }
    ]
  },
  {
    id: "zinzino-training",
    number: 10,
    title: "ZINZINO TRAINING",
    subtitle: "Fast Start & Network Operations",
    description: "Setting up your independent partner account, ordering starter kits, and customer mapping.",
    image: "https://images.unsplash.com/photo-1611095790444-1dfa4825a5a2?auto=format&fit=crop&q=80&w=800",
    category: "operations",
    subFolders: [
      {
        id: "zz-fast-start",
        name: "Zinzino Fast Start",
        resources: [
          { id: "zz-1", title: "Zinzino Back Office Setup & Wallet Activation", type: "video", description: "Setting up commissions and payment methods." },
          { id: "zz-2", title: "Securing your first 4 customer subscriptions", type: "pdf", description: "The critical fast-track commercial milestone." }
        ]
      },
      {
        id: "zz-product-train",
        name: "Zinzino Product Training",
        resources: [
          { id: "zz-3", title: "BalanceOil+ (Premium, Olive, AquaX) Positioning", type: "video", description: "How to explain premium oils vs standard supermarket fish oil." },
          { id: "zz-4", title: "Synergistic Health: Xtend+ and ZinoBiotic+ integration", type: "pdf", description: "The health protocol: cellular, metabolic, and gut care combined." }
        ]
      }
    ]
  },
  {
    id: "marketing-hub",
    number: 11,
    title: "MARKETING HUB",
    subtitle: "Branding Library & Partner Toolkits",
    description: "Download logos, brand assets, social media templates, posters, and local campaign toolkits.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    category: "marketing",
    subFolders: [
      {
        id: "master-resources",
        name: "Master Branding Resources",
        resources: [
          { id: "mk-1", title: "TBN Brand Book & Visual Guidelines", type: "pdf", description: "Logos, color codes, fonts, style guides." },
          { id: "mk-2", title: "Microsite Photography Guidance", type: "pdf", description: "Using AI tools and templates for personal branding images." },
          { id: "mk-3", title: "Master TBN Campaign Planner", type: "template", description: "12-month calendar mapping awareness days and local outreach." }
        ]
      },
      {
        id: "post-formats",
        name: "Ready-To-Use Marketing Formats",
        resources: [
          { id: "mk-4", title: "Instagram & Facebook Reels Templates", type: "template", description: "Download short video clips, captions, and music suggestions." },
          { id: "mk-5", title: "Educational Carousel Slides (Canva Links)", type: "template", description: "Editable carousels on Vitamin D, hs-CRP, and Omega Ratios." },
          { id: "mk-6", title: "A4 Flyers & In-Clinic Posters (Print-Ready PDF)", type: "pdf", description: "Flyers explaining point-of-care testing for your front desk." }
        ]
      },
      {
        id: "partner-toolkits",
        name: "Partner-Type Custom Toolkits",
        resources: [
          { id: "mk-7", title: "Skin & Aesthetics Clinic Toolkit", type: "pdf", description: "Acne, eczema, rosacea campaign templates and 'Skin from Within' flyers." },
          { id: "mk-8", title: "Chronic Pain & Rehabilitation Clinic Toolkit", type: "pdf", description: "Inflammation posts, osteopath/chiropractor reactivation templates." },
          { id: "mk-9", title: "Health Clubs & Gyms Marketing Bundle", type: "pdf", description: "Member retention posters, testing day flyers, recovery assets." },
          { id: "mk-10", title: "Pharmacy POS & Patient Email sequences", type: "pdf", description: "POS materials, patient newsletters, and screening day signboards." },
          { id: "mk-11", title: "Health Food Store Event Assets", type: "pdf", description: "Gut health and Omega balance in-store banners and signage." }
        ]
      },
      {
        id: "chatgpt-prompts",
        name: "TBN ChatGPT Prompt Library",
        resources: [
          { 
            id: "mk-12", 
            title: "Social Media & Reels Script Generator Prompts", 
            type: "prompt", 
            description: "Prompts to generate engaging social posts about biomarkers.",
            content: "Act as an expert functional health copywriter. Write a 45-second Instagram Reels script addressing chronic fatigue and cell membrane health. Start with a hook about mitochondria, explain how the Omega 6:3 ratio affects nutrient intake, and end with a call to action to book a finger-prick screening."
          },
          { 
            id: "mk-13", 
            title: "Workshop & Consultation Dialogue Prompts", 
            type: "prompt", 
            description: "Prompts to design local workshops or practice client objections.",
            content: "Create a 5-day email nurture sequence targeting local gym members. The emails should educate on the difference between standard lab ranges and optimal biomarker levels for recovery, specifically covering Vitamin D, hs-CRP, and Ferritin."
          }
        ]
      }
    ]
  },
  {
    id: "support-centre",
    number: 12,
    title: "SUPPORT CENTRE",
    subtitle: "Clinical Library & Documents",
    description: "Direct downloads, FAQs, Clinical education recordings, and GP coordination guidelines.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800",
    category: "operations",
    subFolders: [
      {
        id: "partner-support",
        name: "General Partner Support",
        resources: [
          { id: "sc-1", title: "Partner FAQs & Technical Troubleshooting", type: "pdf", description: "Logistics, test registration errors, account locks." },
          { id: "sc-2", title: "Clinical Support Directory & Email channels", type: "link", description: "Direct channels to the medical director." }
        ]
      },
      {
        id: "clinical-education",
        name: "Clinical Education Library",
        resources: [
          { id: "sc-3", title: "Dr Ishtiaq Sessions: Deep-dive webinars", type: "video", description: "Cellular inflammation and cardiovascular health." },
          { id: "sc-4", title: "Medication Interactions & Contraindications Directory", type: "pdf", description: "Safety instructions for omega oil, prebiotics, and screenings." },
          { id: "sc-5", title: "GP Referral SOP & Communication Letters", type: "template", description: "Formal template letters to send to patients' GPs." }
        ]
      }
    ]
  }
];

interface LocalLead {
  name: string;
  email: string;
  mobile?: string;
  leadType?: string;
  lead_type?: string;
  sourcePage?: string;
  source_page?: string;
  date?: string;
  created_at?: string;
  academyOptIn?: boolean;
  academy_opt_in?: boolean;
  isAcademy?: boolean;
}

interface LeadCRMInfo {
  status: string;        // "New" | "Contacted" | "Meeting Scheduled" | "Proposal Sent" | "Onboarded" | "Lost"
  assignedTo: string;    // "Unassigned" | "Dr Ishtiaq Rehman" | "Dr Vian Hurle" | "Neil Parsley"
  notes: Array<{
    date: string;
    text: string;
  }>;
}

export default function PartnerPortal2() {
  const [folders, setFolders] = useState<FolderSection[]>(initialFolders);
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [adminMode, setAdminMode] = useState<boolean>(false);
  const [selectedFolder, setSelectedFolder] = useState<FolderSection | null>(null);
  const [selectedSubFolder, setSelectedSubFolder] = useState<SubFolder | null>(null);

  // CRM States
  const [leads, setLeads] = useState<LocalLead[]>([]);
  const [crmMetadata, setCrmMetadata] = useState<Record<string, LeadCRMInfo>>({});
  const [crmView, setCrmView] = useState<"pipeline" | "table">("pipeline");
  const [selectedLeadForNotes, setSelectedLeadForNotes] = useState<LocalLead | null>(null);
  const [newNoteText, setNewNoteText] = useState<string>("");
  const [crmStatusFilter, setCrmStatusFilter] = useState<string>("All");
  const [crmAssigneeFilter, setCrmAssigneeFilter] = useState<string>("All");
  const [isLeadsLoading, setIsLeadsLoading] = useState<boolean>(false);

  // Load CRM Metadata and Leads
  useEffect(() => {
    try {
      const storedCrm = localStorage.getItem("tbn_crm_metadata");
      if (storedCrm) {
        setCrmMetadata(JSON.parse(storedCrm));
      }
    } catch (e) {
      console.error("Failed to load CRM metadata", e);
    }
    
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    setIsLeadsLoading(true);
    let allLeads: LocalLead[] = [];

    // Local fallback leads
    let localPartner: LocalLead[] = [];
    let localAcademy: LocalLead[] = [];
    try {
      localPartner = JSON.parse(localStorage.getItem("partner_leads") || "[]");
      localAcademy = JSON.parse(localStorage.getItem("academy_registrations") || "[]");
    } catch (e) {
      console.error("Failed to load local leads fallback", e);
    }

    try {
      const { data: partners, error: pError } = await supabase
        .from("partner_leads")
        .select("*")
        .order("created_at", { ascending: false });
      
      const { data: academies, error: aError } = await supabase
        .from("academy_registrations")
        .select("*")
        .order("created_at", { ascending: false });

      const dbPartners = (!pError && partners) ? partners : [];
      const dbAcademies = (!aError && academies) ? academies : [];

      const combinedPartners = [...dbPartners, ...localPartner];
      const combinedAcademies = [...dbAcademies, ...localAcademy];

      // Mapped combined leads
      const mappedPartners = combinedPartners.map(p => ({
        ...p,
        lead_type: p.lead_type || p.leadType || "Partner Inquiry",
        source_page: p.source_page || p.sourcePage || "General",
        created_at: p.created_at || p.date || new Date().toISOString(),
        isAcademy: false
      }));

      const mappedAcademies = combinedAcademies.map(a => ({
        ...a,
        lead_type: "Academy Registration",
        source_page: "Academy",
        created_at: a.created_at || a.date || new Date().toISOString(),
        isAcademy: true
      }));

      allLeads = [...mappedPartners, ...mappedAcademies].sort((a, b) => {
        return new Date(b.created_at || "").getTime() - new Date(a.created_at || "").getTime();
      });
    } catch (err) {
      console.warn("Could not fetch Supabase leads, fallback to local storage:", err);
      const mappedPartners = localPartner.map(p => ({
        ...p,
        lead_type: p.lead_type || p.leadType || "Partner Inquiry",
        source_page: p.source_page || p.sourcePage || "General",
        created_at: p.created_at || p.date || new Date().toISOString(),
        isAcademy: false
      }));
      const mappedAcademies = localAcademy.map(a => ({
        ...a,
        lead_type: "Academy Registration",
        source_page: "Academy",
        created_at: a.created_at || a.date || new Date().toISOString(),
        isAcademy: true
      }));
      allLeads = [...mappedPartners, ...mappedAcademies].sort((a, b) => {
        return new Date(b.created_at || "").getTime() - new Date(a.created_at || "").getTime();
      });
    }

    setLeads(allLeads);
    setIsLeadsLoading(false);
  };

  // CRM Helper methods
  const getLeadId = (lead: LocalLead) => {
    return `${lead.email}_${lead.created_at || lead.date || ""}`;
  };

  const getLeadCrm = (lead: LocalLead): LeadCRMInfo => {
    const id = getLeadId(lead);
    return crmMetadata[id] || {
      status: "New",
      assignedTo: "Unassigned",
      notes: []
    };
  };

  const updateLeadCrm = (lead: LocalLead, updates: Partial<LeadCRMInfo>) => {
    const id = getLeadId(lead);
    const current = getLeadCrm(lead);
    const updated = {
      ...current,
      ...updates
    };

    const newMetadata = {
      ...crmMetadata,
      [id]: updated
    };

    setCrmMetadata(newMetadata);
    localStorage.setItem("tbn_crm_metadata", JSON.stringify(newMetadata));
  };

  const handleAddNote = (lead: LocalLead) => {
    if (!newNoteText.trim()) return;
    const current = getLeadCrm(lead);
    const newNote = {
      date: new Date().toISOString(),
      text: newNoteText.trim()
    };
    
    updateLeadCrm(lead, {
      notes: [...current.notes, newNote]
    });
    setNewNoteText("");
    toast.success("Note added successfully!");
  };
  
  // LMS/Academy states
  const [activeCourseStep, setActiveCourseStep] = useState<ResourceItem | null>(null);
  const [completedSteps, setCompletedSteps] = useState<Record<string, boolean>>({
    "ta-1": true, "sh-1": true
  });
  
  // Search state within folder detailed view
  const [folderSearch, setFolderSearch] = useState<string>("");

  // Admin uploader form states
  const [showUploaderModal, setShowUploaderModal] = useState<boolean>(false);
  const [uploadTargetSubFolderId, setUploadTargetSubFolderId] = useState<string>("");
  const [newTitle, setNewTitle] = useState("");
  const [newType, setNewType] = useState<"pdf" | "video" | "script" | "template" | "link" | "prompt">("pdf");
  const [newDesc, setNewDesc] = useState("");
  const [newUrl, setNewUrl] = useState("");
  const [newPromptContent, setNewPromptContent] = useState("");
  const [uploadSource, setUploadSource] = useState<"link" | "computer">("link");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  // Copy indicator state
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleDeleteResource = (folderId: string, subFolderId: string, resourceId: string) => {
    const updatedFolders = folders.map(f => {
      if (f.id === folderId) {
        return {
          ...f,
          subFolders: f.subFolders.map(sf => {
            if (sf.id === subFolderId) {
              return {
                ...sf,
                resources: sf.resources.filter(r => r.id !== resourceId)
              };
            }
            return sf;
          })
        };
      }
      return f;
    });

    setFolders(updatedFolders);

    if (selectedFolder && selectedFolder.id === folderId) {
      const updatedSelFolder = updatedFolders.find(f => f.id === folderId);
      if (updatedSelFolder) {
        setSelectedFolder(updatedSelFolder);
        if (selectedSubFolder && selectedSubFolder.id === subFolderId) {
          const updatedSub = updatedSelFolder.subFolders.find(sf => sf.id === subFolderId);
          if (updatedSub) setSelectedSubFolder(updatedSub);
        }
      }
    }
  };

  const handleToggleStepComplete = (id: string) => {
    setCompletedSteps(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredFolders = folders.filter(folder => {
    const matchesTab = activeTab === "all" || folder.category === activeTab;
    const matchesSearch = folder.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          folder.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          folder.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          folder.subFolders.some(sf => sf.name.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTab && matchesSearch;
  });

  // Handle Admin upload submission
  const handleUploadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle) return;

    const newItem: ResourceItem = {
      id: `custom-${Date.now()}`,
      title: newTitle,
      type: newType,
      description: newDesc,
      url: (uploadSource === "computer" && uploadedFile) ? URL.createObjectURL(uploadedFile) : (newUrl || "#"),
      content: newType === "prompt" ? newPromptContent : undefined,
      isCompleted: false
    };

    const updatedFolders = folders.map(f => {
      if (selectedFolder && f.id === selectedFolder.id) {
        return {
          ...f,
          subFolders: f.subFolders.map(sf => {
            if (sf.id === uploadTargetSubFolderId) {
              return {
                ...sf,
                resources: [newItem, ...sf.resources]
              };
            }
            return sf;
          })
        };
      }
      return f;
    });

    setFolders(updatedFolders);
    
    // Update selected states to show new file immediately
    if (selectedFolder) {
      const updatedSelFolder = updatedFolders.find(f => f.id === selectedFolder.id);
      if (updatedSelFolder) {
        setSelectedFolder(updatedSelFolder);
        if (selectedSubFolder) {
          const updatedSub = updatedSelFolder.subFolders.find(sf => sf.id === selectedSubFolder.id);
          if (updatedSub) setSelectedSubFolder(updatedSub);
        }
      }
    }

    // Reset Form
    setNewTitle("");
    setNewDesc("");
    setNewUrl("");
    setNewPromptContent("");
    setUploadedFile(null);
    setUploadSource("link");
    setShowUploaderModal(false);
  };

  const getFolderCompletionPercent = (folder: FolderSection) => {
    const allResources = folder.subFolders.flatMap(sf => sf.resources);
    if (allResources.length === 0) return 100;
    const completedCount = allResources.filter(r => completedSteps[r.id]).length;
    return Math.round((completedCount / allResources.length) * 100);
  };

  return (
    <div className="min-h-screen flex flex-col pt-[85px] md:pt-[96px] bg-[#faf8f5] font-montserrat antialiased">
      <Navbar alwaysSolid />
      
      {/* HEADER BANNER */}
      <div className="bg-[#111] text-white py-12 px-4 sm:px-8 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#9f1e13]/25 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
          <div>
            <span className="text-[11px] font-bold text-[#9f1e13] uppercase tracking-[0.25em] bg-[#9f1e13]/10 px-3 py-1 rounded-full border border-[#9f1e13]/30">DRAFT PORTAL DESIGN</span>
            <h1 className="font-playfair text-[32px] md:text-[44px] font-bold mt-3 tracking-tight">TBN PARTNER BACK OFFICE</h1>
            <p className="text-gray-400 text-sm md:text-base font-medium mt-1">Training, Marketing & Growth Operations System</p>
          </div>

          <div className="flex items-center gap-3 self-stretch md:self-auto">
            {/* Super Admin Toggle Switch */}
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-3 px-4 shadow-inner">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Super Admin Mode</span>
                <span className="text-[9px] text-gray-500 font-medium">Allows resource uploads</span>
              </div>
              <button 
                onClick={() => setAdminMode(!adminMode)}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${adminMode ? 'bg-[#9f1e13]' : 'bg-gray-700'}`}
              >
                <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${adminMode ? 'translate-x-5' : 'translate-x-0'}`} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* QUICK STATS & CORE JOURNEY TRACKER */}
      <div className="bg-white border-b border-[#dbd4c9]/40 py-6 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          {/* CORE PROCESS FLOW BANNER */}
          <div className="mb-8 bg-[#faf8f5] border border-[#dbd4c9] p-4 rounded-2xl flex flex-col xl:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3 shrink-0">
              <Award className="w-5 h-5 text-[#9f1e13]" />
              <span className="font-bold text-xs uppercase tracking-widest text-gray-900">Partner Journey Flow:</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-wider text-gray-600">
              {["Start Here", "Training Academy", "Testing Hub", "Pathways Hub", "Protocol Hub", "Get Clients", "Scale Business", "Lead with Partners", "Marketing", "Support"].map((step, idx) => (
                <React.Fragment key={step}>
                  <span className={`px-2.5 py-1.5 rounded-lg border ${idx === 0 ? 'bg-[#9f1e13] text-white border-transparent' : 'bg-white border-gray-200 text-gray-600'}`}>{step}</span>
                  {idx < 9 && <ChevronRight className="w-3.5 h-3.5 text-gray-400" />}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-[#faf8f5] p-4 rounded-xl border border-gray-100 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-[#9f1e13]/10 flex items-center justify-center text-[#9f1e13] shrink-0"><UserCheck className="w-5 h-5"/></div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Partner Profile</p>
                <p className="font-playfair font-bold text-base mt-1 text-gray-900">Elite Practitioner</p>
              </div>
            </div>
            <div className="bg-[#faf8f5] p-4 rounded-xl border border-gray-100 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-[#9f1e13]/10 flex items-center justify-center text-[#9f1e13] shrink-0"><BookMarked className="w-5 h-5"/></div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Onboarding Progress</p>
                <p className="font-playfair font-bold text-base mt-1 text-gray-900">{getFolderCompletionPercent(folders[0])}% Completed</p>
              </div>
            </div>
            <div className="bg-[#faf8f5] p-4 rounded-xl border border-gray-100 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-[#9f1e13]/10 flex items-center justify-center text-[#9f1e13] shrink-0"><TrendingUp className="w-5 h-5"/></div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Active Clients</p>
                <p className="font-playfair font-bold text-base mt-1 text-gray-900">42 Monitored</p>
              </div>
            </div>
            <div className="bg-[#faf8f5] p-4 rounded-xl border border-gray-100 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-[#9f1e13]/10 flex items-center justify-center text-[#9f1e13] shrink-0"><Lock className="w-5 h-5"/></div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Compliance Level</p>
                <p className="font-playfair font-bold text-base mt-1 text-green-600 flex items-center gap-1">100% Certified <Check className="w-4 h-4"/></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTAINER */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-8 py-10">
        {!selectedFolder ? (
          activeTab === "crm" ? (
            /* CRM VIEW PORTAL */
            <div className="space-y-8 animate-in fade-in duration-200">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#dbd4c9]/60 pb-6">
                <div>
                  <h2 className="font-playfair text-[28px] font-bold text-gray-900">Lead Sales Pipeline & CRM</h2>
                  <p className="font-sans text-xs text-gray-500 mt-1">Super Admin Dashboard: Track client inquiries, assign leads, and log sales progress.</p>
                </div>
                
                <div className="flex items-center gap-3">
                  {/* View Toggles */}
                  <div className="flex bg-gray-100 p-1 rounded-xl border border-gray-200 shadow-inner">
                    <button 
                      onClick={() => setCrmView("pipeline")}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${crmView === "pipeline" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-950"}`}
                    >
                      <Grid className="w-3.5 h-3.5" /> Board
                    </button>
                    <button 
                      onClick={() => setCrmView("table")}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${crmView === "table" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-950"}`}
                    >
                      <List className="w-3.5 h-3.5" /> Sheet
                    </button>
                  </div>
                </div>
              </div>

              {/* CRM KPI CARDS */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-xl border border-[#dbd4c9]/50 shadow-sm">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Total Inquiries</span>
                  <p className="font-playfair font-bold text-2xl mt-1.5 text-gray-900">{leads.length}</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-[#dbd4c9]/50 shadow-sm">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">New Leads</span>
                  <p className="font-playfair font-bold text-2xl mt-1.5 text-[#9f1e13]">{leads.filter(l => getLeadCrm(l).status === "New").length}</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-[#dbd4c9]/50 shadow-sm">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">In Pipeline</span>
                  <p className="font-playfair font-bold text-2xl mt-1.5 text-amber-600">{leads.filter(l => ["Contacted", "Meeting Scheduled", "Proposal Sent"].includes(getLeadCrm(l).status)).length}</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-[#dbd4c9]/50 shadow-sm">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Onboarded (Won)</span>
                  <p className="font-playfair font-bold text-2xl mt-1.5 text-green-600">{leads.filter(l => getLeadCrm(l).status === "Onboarded").length}</p>
                </div>
              </div>

              {/* SEARCH & FILTERS BAR */}
              <div className="bg-white border border-[#dbd4c9] rounded-2xl p-4 shadow-sm flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
                <div className="relative flex-grow">
                  <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
                  <input 
                    type="text"
                    placeholder="Search leads by name, email, or option chosen..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full h-11 pl-10 pr-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#9f1e13] focus:ring-1 focus:ring-[#9f1e13] transition-all text-xs"
                  />
                </div>
                
                <div className="flex flex-wrap gap-3 items-center">
                  <div className="flex items-center gap-2 bg-[#faf8f5] px-3.5 py-2 border border-[#dbd4c9] rounded-xl">
                    <Filter className="w-3.5 h-3.5 text-gray-500" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Stage:</span>
                    <select
                      value={crmStatusFilter}
                      onChange={(e) => setCrmStatusFilter(e.target.value)}
                      className="bg-transparent text-xs font-bold text-gray-800 focus:outline-none select-none cursor-pointer"
                    >
                      <option value="All">All Stages</option>
                      <option value="New">New</option>
                      <option value="Contacted">Contacted</option>
                      <option value="Meeting Scheduled">Meeting Scheduled</option>
                      <option value="Proposal Sent">Proposal Sent</option>
                      <option value="Onboarded">Onboarded</option>
                      <option value="Lost">Lost</option>
                    </select>
                  </div>

                  <div className="flex items-center gap-2 bg-[#faf8f5] px-3.5 py-2 border border-[#dbd4c9] rounded-xl">
                    <Users className="w-3.5 h-3.5 text-gray-500" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Assignee:</span>
                    <select
                      value={crmAssigneeFilter}
                      onChange={(e) => setCrmAssigneeFilter(e.target.value)}
                      className="bg-transparent text-xs font-bold text-gray-800 focus:outline-none select-none cursor-pointer"
                    >
                      <option value="All">All Assignees</option>
                      <option value="Unassigned">Unassigned</option>
                      <option value="Dr Ishtiaq Rehman">Dr Ishtiaq Rehman</option>
                      <option value="Dr Vian Hurle">Dr Vian Hurle</option>
                      <option value="Neil Parsley">Neil Parsley</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* CORE LEADS CONTAINER */}
              {isLeadsLoading ? (
                <div className="p-12 text-center text-gray-400 italic font-medium">Loading CRM Leads...</div>
              ) : (
                (() => {
                  const filteredLeads = leads.filter(lead => {
                    const crm = getLeadCrm(lead);
                    const query = searchQuery.toLowerCase();
                    
                    const matchesSearch = lead.name.toLowerCase().includes(query) || 
                                          lead.email.toLowerCase().includes(query) ||
                                          (lead.mobile || "").toLowerCase().includes(query) ||
                                          (lead.lead_type || "").toLowerCase().includes(query);
                    
                    const matchesStatus = crmStatusFilter === "All" || crm.status === crmStatusFilter;
                    const matchesAssignee = crmAssigneeFilter === "All" || crm.assignedTo === crmAssigneeFilter;

                    return matchesSearch && matchesStatus && matchesAssignee;
                  });

                  if (crmView === "table") {
                    return (
                      <div className="bg-white border border-[#dbd4c9] rounded-2xl overflow-hidden shadow-sm">
                        <div className="overflow-x-auto">
                          <table className="w-full text-left border-collapse">
                            <thead>
                              <tr className="bg-gray-50 border-b border-[#dbd4c9]/60 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                                <th className="px-6 py-4">Client Name</th>
                                <th className="px-6 py-4">Contact Info</th>
                                <th className="px-6 py-4">Intent & Source</th>
                                <th className="px-6 py-4">Assigned To</th>
                                <th className="px-6 py-4">Deal Stage</th>
                                <th className="px-6 py-4 text-center">Actions</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 font-montserrat text-xs text-gray-700">
                              {filteredLeads.length === 0 ? (
                                <tr>
                                  <td colSpan={6} className="px-6 py-12 text-center text-gray-450 italic">No leads matching filters found.</td>
                                </tr>
                              ) : (
                                filteredLeads.map((lead, idx) => {
                                  const crm = getLeadCrm(lead);
                                  return (
                                  <tr key={idx} className="hover:bg-gray-50/30 transition-colors">
                                    <td className="px-6 py-4">
                                      <p className="font-playfair font-bold text-gray-900 text-sm">{lead.name}</p>
                                      <p className="text-[10px] text-gray-400 font-medium mt-0.5">{new Date(lead.created_at || "").toLocaleDateString()}</p>
                                    </td>
                                    <td className="px-6 py-4">
                                      <p className="font-medium text-gray-700">{lead.email}</p>
                                      <p className="text-[10px] text-gray-400 font-medium mt-0.5">{lead.mobile || "No phone"}</p>
                                    </td>
                                    <td className="px-6 py-4">
                                      <span className="px-2.5 py-1 text-[9.5px] font-bold rounded-full bg-[#9f1e13]/10 text-[#9f1e13] border border-[#9f1e13]/20">
                                        {lead.lead_type}
                                      </span>
                                      <p className="text-[9.5px] font-bold text-gray-400 uppercase tracking-widest mt-1.5">{lead.source_page || "General"}</p>
                                    </td>
                                    <td className="px-6 py-4">
                                      <select
                                        value={crm.assignedTo}
                                        onChange={(e) => updateLeadCrm(lead, { assignedTo: e.target.value })}
                                        className="bg-gray-50 border border-gray-200 rounded-xl px-2.5 py-1.5 font-bold text-gray-800 text-[11px] focus:outline-none focus:border-[#9f1e13] cursor-pointer"
                                      >
                                        <option value="Unassigned">Unassigned</option>
                                        <option value="Dr Ishtiaq Rehman">Dr Ishtiaq Rehman</option>
                                        <option value="Dr Vian Hurle">Dr Vian Hurle</option>
                                        <option value="Neil Parsley">Neil Parsley</option>
                                      </select>
                                    </td>
                                    <td className="px-6 py-4">
                                      <select
                                        value={crm.status}
                                        onChange={(e) => updateLeadCrm(lead, { status: e.target.value })}
                                        className={`border rounded-xl px-2.5 py-1.5 font-bold text-[11px] focus:outline-none focus:ring-1 focus:ring-[#9f1e13] cursor-pointer ${
                                          crm.status === "New" ? "bg-red-50 text-[#9f1e13] border-red-200" :
                                          crm.status === "Contacted" ? "bg-blue-50 text-blue-700 border-blue-200" :
                                          crm.status === "Meeting Scheduled" ? "bg-amber-50 text-amber-700 border-amber-200" :
                                          crm.status === "Proposal Sent" ? "bg-purple-50 text-purple-700 border-purple-200" :
                                          crm.status === "Onboarded" ? "bg-green-50 text-green-700 border-green-200" :
                                          "bg-gray-100 text-gray-600 border-gray-200"
                                        }`}
                                      >
                                        <option value="New">New</option>
                                        <option value="Contacted">Contacted</option>
                                        <option value="Meeting Scheduled">Meeting Scheduled</option>
                                        <option value="Proposal Sent">Proposal Sent</option>
                                        <option value="Onboarded">Onboarded</option>
                                        <option value="Lost">Lost</option>
                                      </select>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                      <button
                                        onClick={() => setSelectedLeadForNotes(lead)}
                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 border border-gray-200 hover:border-gray-300 font-bold text-[10px] text-gray-700 uppercase tracking-wider rounded-xl transition-all"
                                      >
                                        <MessageSquare className="w-3.5 h-3.5 text-gray-500" />
                                        Notes ({crm.notes.length})
                                      </button>
                                    </td>
                                  </tr>
                                );
                              }))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    );
                  }

                  // Render Kanban Board view
                  const columns = [
                    { id: "New", title: "New Inquiries", bg: "bg-stone-50 border-stone-200 text-stone-700" },
                    { id: "Contacted", title: "Contacted / Nurturing", bg: "bg-blue-50/40 border-blue-100 text-blue-800" },
                    { id: "Meeting Scheduled", title: "Meeting Scheduled", bg: "bg-amber-50/40 border-amber-100 text-amber-800" },
                    { id: "Proposal Sent", title: "Proposal Sent", bg: "bg-purple-50/40 border-purple-100 text-purple-800" },
                    { id: "Onboarded", title: "Onboarded (Won)", bg: "bg-green-50/40 border-green-100 text-green-800" },
                    { id: "Lost", title: "Archived / Lost", bg: "bg-gray-100 border-gray-200 text-gray-500" }
                  ];

                  return (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-5 items-stretch overflow-x-auto pb-4">
                      {columns.map(col => {
                        const colLeads = filteredLeads.filter(l => getLeadCrm(l).status === col.id);
                        return (
                          <div key={col.id} className="flex flex-col bg-[#faf8f5] border border-[#dbd4c9]/60 rounded-2xl p-4 min-w-[260px] flex-grow">
                            {/* Column Header */}
                            <div className={`p-2.5 rounded-xl border mb-4 font-bold text-[11px] uppercase tracking-wider flex items-center justify-between ${col.bg}`}>
                              <span>{col.title}</span>
                              <span className="bg-white/90 border border-current px-2 py-0.5 rounded-full text-[10px]">{colLeads.length}</span>
                            </div>

                            {/* Cards Stack */}
                            <div className="flex-grow space-y-3.5 max-h-[600px] overflow-y-auto pr-1">
                              {colLeads.length === 0 ? (
                                <div className="text-center py-10 text-[10.5px] italic text-gray-400 bg-white/40 border border-dashed border-gray-200 rounded-xl">No leads here</div>
                              ) : (
                                colLeads.map((lead, idx) => {
                                  const crm = getLeadCrm(lead);
                                  return (
                                    <div key={idx} className="bg-white border border-gray-100 hover:border-[#9f1e13]/20 p-4 rounded-xl shadow-sm hover:shadow-md transition-all group flex flex-col justify-between gap-3 relative">
                                      {/* Header badges */}
                                      <div className="flex justify-between items-start gap-2">
                                        <span className="text-[9px] font-bold px-2 py-0.5 rounded-md bg-stone-100 text-stone-600 truncate max-w-[140px]" title={lead.lead_type}>
                                          {lead.lead_type}
                                        </span>
                                        <span className="text-[8.5px] text-gray-400 shrink-0 font-medium">{new Date(lead.created_at || "").toLocaleDateString()}</span>
                                      </div>

                                      {/* Contact Details */}
                                      <div>
                                        <h4 className="font-playfair font-bold text-sm text-gray-900 group-hover:text-[#9f1e13] transition-colors">{lead.name}</h4>
                                        <p className="text-[10px] text-gray-500 font-medium truncate mt-0.5">{lead.email}</p>
                                        {lead.mobile && <p className="text-[10px] text-gray-400 font-medium mt-0.5">{lead.mobile}</p>}
                                      </div>

                                      {/* Source */}
                                      <div className="border-t border-gray-100 pt-2 flex items-center justify-between text-[9px] text-gray-400 font-semibold">
                                        <span>SOURCE PAGE:</span>
                                        <span className="text-[#9f1e13] uppercase font-bold">{lead.source_page}</span>
                                      </div>

                                      {/* Assignee select */}
                                      <div className="bg-gray-50/80 p-2 rounded-lg border border-gray-100 flex items-center justify-between gap-1.5 mt-1">
                                        <UserPlus className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                                        <select
                                          value={crm.assignedTo}
                                          onChange={(e) => updateLeadCrm(lead, { assignedTo: e.target.value })}
                                          className="bg-transparent font-bold text-gray-700 text-[10px] focus:outline-none w-full cursor-pointer select-none"
                                        >
                                          <option value="Unassigned">Unassigned</option>
                                          <option value="Dr Ishtiaq Rehman">Dr Ishtiaq Rehman</option>
                                          <option value="Dr Vian Hurle">Dr Vian Hurle</option>
                                          <option value="Neil Parsley">Neil Parsley</option>
                                        </select>
                                      </div>

                                      {/* Action buttons */}
                                      <div className="flex justify-between items-center gap-2 border-t border-gray-100 pt-2.5">
                                        {/* Shift status selectors */}
                                        <div className="flex gap-1.5">
                                          <select
                                            value={crm.status}
                                            onChange={(e) => updateLeadCrm(lead, { status: e.target.value })}
                                            className="bg-white border border-gray-200 rounded-lg py-1 px-1.5 text-[9.5px] font-bold text-gray-700 focus:outline-none focus:border-[#9f1e13]"
                                          >
                                            <option value="New">New</option>
                                            <option value="Contacted">Contacted</option>
                                            <option value="Meeting Scheduled">Meet</option>
                                            <option value="Proposal Sent">Proposal</option>
                                            <option value="Onboarded">Won</option>
                                            <option value="Lost">Lost</option>
                                          </select>
                                        </div>

                                        {/* Notes Button */}
                                        <button
                                          onClick={() => setSelectedLeadForNotes(lead)}
                                          className="flex items-center gap-1 text-[9.5px] font-bold text-gray-500 hover:text-gray-950"
                                        >
                                          <MessageSquare className="w-3.5 h-3.5 text-gray-400" />
                                          ({crm.notes.length})
                                        </button>
                                      </div>
                                    </div>
                                  );
                                })
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                })()
              )}

              {/* CRM NOTES MODAL OVERLAY */}
              {selectedLeadForNotes && (
                <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
                  <div className="bg-white border border-[#dbd4c9] w-full max-w-[480px] rounded-2xl overflow-hidden shadow-2xl p-6 relative">
                    {/* Close Button */}
                    <button
                      onClick={() => {
                        setSelectedLeadForNotes(null);
                        setNewNoteText("");
                      }}
                      className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors p-1.5 rounded-full hover:bg-gray-100/50"
                    >
                      <X className="w-4 h-4" />
                    </button>

                    <h3 className="font-playfair text-[20px] font-bold text-gray-900 mb-1 uppercase tracking-wide">
                      Lead Activity & CRM Notes
                    </h3>
                    <p className="text-gray-400 text-xs font-semibold mb-4">
                      Lead Name: <span className="text-[#9f1e13] font-bold">{selectedLeadForNotes.name}</span> • {selectedLeadForNotes.email}
                    </p>

                    {/* Conversation Log list */}
                    <div className="space-y-3 max-h-[220px] overflow-y-auto border border-gray-100 rounded-xl p-3 bg-stone-50/50 mb-4 pr-2">
                      {getLeadCrm(selectedLeadForNotes).notes.length === 0 ? (
                        <p className="text-center py-6 text-xs text-gray-400 italic font-medium">No sales logs or notes recorded yet.</p>
                      ) : (
                        getLeadCrm(selectedLeadForNotes).notes.map((note, idx) => (
                          <div key={idx} className="bg-white border border-gray-100 p-3 rounded-lg shadow-sm">
                            <p className="text-[10px] text-gray-400 font-bold mb-1">{new Date(note.date).toLocaleString()}</p>
                            <p className="text-xs text-gray-700 font-medium leading-relaxed whitespace-pre-wrap">{note.text}</p>
                          </div>
                        ))
                      )}
                    </div>

                    {/* Add New Note form */}
                    <div className="space-y-3">
                      <label className="block text-[9.5px] font-bold text-gray-400 uppercase tracking-widest pl-0.5">Add internal meeting logs / updates</label>
                      <textarea
                        rows={3}
                        placeholder="Type your notes here..."
                        value={newNoteText}
                        onChange={(e) => setNewNoteText(e.target.value)}
                        className="w-full px-3.5 py-2 text-xs bg-[#faf8f5] border border-[#dbd4c9] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#9f1e13] font-medium"
                      />
                      <div className="flex justify-end gap-2.5 pt-2">
                        <button
                          onClick={() => {
                            setSelectedLeadForNotes(null);
                            setNewNoteText("");
                          }}
                          className="px-4 py-2 border border-gray-200 hover:bg-gray-50 text-gray-800 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors"
                        >
                          Close
                        </button>
                        <button
                          onClick={() => handleAddNote(selectedLeadForNotes)}
                          className="px-5 py-2 bg-[#9f1e13] hover:bg-[#861910] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md"
                        >
                          Save Note
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <>
              {/* SUB-HEADER & FILTERBAR */}
              <div className="flex flex-col md:flex-row gap-5 justify-between items-center mb-8">
                {/* Category Tabs */}
                <div className="flex flex-wrap gap-2 w-full md:w-auto">
                  {[
                    { id: "all", label: "All Sections" },
                    { id: "onboarding", label: "Start Here" },
                    { id: "academy", label: "Academy" },
                    { id: "hubs", label: "Hubs" },
                    { id: "growth", label: "Growth" },
                    { id: "operations", label: "Operations" },
                    { id: "marketing", label: "Marketing" },
                    ...(adminMode ? [{ id: "crm", label: "Manage Leads & CRM" }] : [])
                  ].map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all border ${
                        activeTab === tab.id 
                          ? "bg-[#9f1e13] border-[#9f1e13] text-white shadow-md" 
                          : "bg-white border-[#dbd4c9] text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Search input */}
                <div className="relative w-full md:w-[320px] shrink-0">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input 
                    type="text"
                    placeholder="Search resources, folders, biomarkers..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 text-xs bg-white border border-[#dbd4c9] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#9f1e13] focus:border-[#9f1e13] font-medium"
                  />
                </div>
              </div>

              {/* DIRECTORY GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredFolders.map((folder) => {
                  const completedPercent = getFolderCompletionPercent(folder);
                  const fileCount = folder.subFolders.flatMap(sf => sf.resources).length;
                  return (
                    <div 
                      key={folder.id}
                      onClick={() => {
                        setSelectedFolder(folder);
                        setSelectedSubFolder(folder.subFolders[0]);
                        setFolderSearch("");
                      }}
                      className="group bg-white rounded-2xl overflow-hidden border border-[#dbd4c9]/60 hover:border-[#9f1e13]/40 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col relative"
                    >
                      {/* Dummy image backdrop with title text overlay */}
                      <div className="h-[140px] w-full relative overflow-hidden shrink-0 bg-stone-900">
                        <img 
                          src={folder.image} 
                          alt={folder.title} 
                          className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                        
                        {/* Section Badge */}
                        <span className="absolute top-3 left-3 bg-[#9f1e13] text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                          Folder {folder.number}
                        </span>

                        {/* File count indicator */}
                        <span className="absolute top-3 right-3 bg-black/40 backdrop-blur-md text-white text-[9px] font-bold px-2.5 py-1 rounded-lg flex items-center gap-1">
                          <Folder className="w-3 h-3" /> {folder.subFolders.length} Folders
                        </span>

                        <div className="absolute bottom-3 left-4 right-4">
                          <h3 className="font-playfair text-lg font-bold text-white leading-tight uppercase tracking-wide">
                            {folder.title}
                          </h3>
                          <p className="text-white/70 text-[10px] font-medium mt-0.5 tracking-wider truncate">
                            {folder.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="p-5 flex-grow flex flex-col justify-between gap-4">
                        <p className="text-[11.5px] leading-relaxed text-gray-500 font-medium">
                          {folder.description}
                        </p>

                        {/* Content quick overview list */}
                        <div className="border-t border-gray-100 pt-3">
                          <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-2">Folder Sections</p>
                          <div className="space-y-1">
                            {folder.subFolders.slice(0, 3).map(sf => (
                              <div key={sf.id} className="flex items-center gap-1.5 text-[10px] text-gray-700 font-bold">
                                <span className="w-1.5 h-1.5 bg-[#9f1e13] rounded-full shrink-0" />
                                <span className="truncate">{sf.name}</span>
                              </div>
                            ))}
                            {folder.subFolders.length > 3 && (
                              <span className="text-[9px] text-gray-400 font-bold block mt-1">+ {folder.subFolders.length - 3} more sub-folders</span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Progress tracking foot */}
                      <div className="bg-[#faf8f5] border-t border-gray-100 px-5 py-3 shrink-0 flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-[10.5px] text-gray-600 font-bold">
                          <FileText className="w-3.5 h-3.5 text-gray-400" />
                          <span>{fileCount} Resources</span>
                        </div>
                        
                        {folder.category === "academy" || folder.category === "onboarding" ? (
                          <div className="flex items-center gap-2">
                            <div className="w-[60px] h-1.5 bg-gray-200 rounded-full overflow-hidden">
                              <div className="bg-green-600 h-full transition-all" style={{ width: `${completedPercent}%` }} />
                            </div>
                            <span className="text-[9.5px] font-bold text-green-600">{completedPercent}%</span>
                          </div>
                        ) : (
                          <span className="text-[9.5px] font-bold text-[#9f1e13] uppercase tracking-wider flex items-center gap-1">Access Active <Check className="w-3 h-3" /></span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )
        ) : (
          /* SECTION DETAIL WORKSPACE VIEW */
          <div className="bg-white border border-[#dbd4c9] rounded-2xl overflow-hidden shadow-xl flex flex-col lg:flex-row min-h-[680px]">
            {/* LEFT BAR: SUBFOLDERS LIST & WORKSPACE NAV */}
            <div className="w-full lg:w-[280px] shrink-0 border-r border-[#dbd4c9] bg-[#faf8f5] flex flex-col justify-between">
              <div>
                <div className="p-4 border-b border-[#dbd4c9] flex items-center gap-2">
                  <button 
                    onClick={() => {
                      setSelectedFolder(null);
                      setSelectedSubFolder(null);
                      setActiveCourseStep(null);
                    }}
                    className="p-1 rounded-lg hover:bg-gray-100 transition-colors text-gray-700"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <div className="overflow-hidden">
                    <span className="text-[8px] font-bold uppercase tracking-widest text-[#9f1e13] block">Folder {selectedFolder.number}</span>
                    <span className="text-[13px] font-bold text-gray-900 leading-tight block truncate uppercase">{selectedFolder.title}</span>
                  </div>
                </div>

                <div className="p-3">
                  <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-2 px-1">Sub-Folders & Sub-Sections</p>
                  <div className="space-y-1">
                    {selectedFolder.subFolders.map(sf => {
                      const isSel = selectedSubFolder && selectedSubFolder.id === sf.id;
                      return (
                        <button
                          key={sf.id}
                          onClick={() => {
                            setSelectedSubFolder(sf);
                            setActiveCourseStep(null);
                          }}
                          className={`w-full text-left p-3 rounded-xl transition-all flex items-center justify-between ${
                            isSel 
                              ? "bg-[#9f1e13] text-white shadow-md" 
                              : "bg-white border border-gray-100 text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          <div className="flex items-center gap-2 overflow-hidden">
                            <Folder className={`w-4 h-4 shrink-0 ${isSel ? 'text-white' : 'text-gray-400'}`} />
                            <span className="text-[11px] font-bold truncate">{sf.name}</span>
                          </div>
                          <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${isSel ? 'text-white' : 'text-gray-400'}`} />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Left Bar Admin Mode Action */}
              {adminMode && selectedFolder && (
                <div className="p-4 border-t border-[#dbd4c9] bg-[#9f1e13]/5">
                  <p className="text-[10px] font-bold text-[#9f1e13] uppercase tracking-wider mb-2 flex items-center gap-1.5"><ShieldAlert className="w-3.5 h-3.5" /> SUPER ADMIN ACTIONS</p>
                  <button 
                    onClick={() => {
                      if (selectedSubFolder) {
                        setUploadTargetSubFolderId(selectedSubFolder.id);
                        setShowUploaderModal(true);
                      }
                    }}
                    className="w-full bg-[#9f1e13] text-white p-2.5 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#9f1e13] transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <PlusCircle className="w-4 h-4" /> Add File / Resource
                  </button>
                </div>
              )}
            </div>

            {/* RIGHT WORKSPACE DISPLAY */}
            <div className="flex-grow p-6 sm:p-8 flex flex-col justify-between bg-white relative">
              <div>
                {/* Workspace Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-gray-100 pb-5 mb-6">
                  <div>
                    <h2 className="font-playfair text-[22px] font-bold text-gray-900 tracking-wide uppercase">
                      {selectedSubFolder?.name || "Select Sub-Folder"}
                    </h2>
                    <p className="text-gray-400 text-xs mt-0.5 font-medium">
                      Showing resources in this subfolder.
                    </p>
                  </div>

                  {/* Local Resource Search */}
                  <div className="relative w-full sm:w-[220px]">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                    <input 
                      type="text"
                      placeholder="Search inside folder..."
                      value={folderSearch}
                      onChange={(e) => setFolderSearch(e.target.value)}
                      className="w-full pl-8 pr-4 py-2 text-[11px] bg-[#faf8f5] border border-[#dbd4c9] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#9f1e13] focus:border-[#9f1e13] font-medium"
                    />
                  </div>
                </div>

                {/* DETAILED RESOURCES VIEW */}
                {selectedSubFolder && (
                  <div className="space-y-4">
                    {selectedSubFolder.resources.filter(r => r.title.toLowerCase().includes(folderSearch.toLowerCase())).length === 0 ? (
                      <div className="flex flex-col items-center justify-center py-12 text-center">
                        <AlertCircle className="w-10 h-10 text-gray-300 mb-2" />
                        <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">No resources found in this folder</p>
                        <p className="text-gray-500 text-[11px] mt-1">Check back later or upload one as admin.</p>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 gap-3">
                        {selectedSubFolder.resources
                          .filter(r => r.title.toLowerCase().includes(folderSearch.toLowerCase()))
                          .map((resource) => {
                            const isComp = completedSteps[resource.id];
                            const isSelectedCourse = activeCourseStep && activeCourseStep.id === resource.id;
                            
                            return (
                              <div 
                                key={resource.id}
                                className={`border rounded-xl p-4 transition-all flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 ${
                                  isSelectedCourse 
                                    ? 'border-[#9f1e13]/50 bg-[#9f1e13]/5' 
                                    : 'border-gray-200 hover:border-gray-300'
                                }`}
                              >
                                <div className="flex items-start gap-3">
                                  <button 
                                    onClick={() => handleToggleStepComplete(resource.id)}
                                    className={`mt-0.5 p-0.5 rounded-full border transition-colors ${
                                      isComp ? 'bg-green-600 border-green-600 text-white' : 'border-gray-300 text-transparent'
                                    }`}
                                  >
                                    <Check className="w-3.5 h-3.5" />
                                  </button>
                                  <div>
                                    <div className="flex items-center gap-2 flex-wrap">
                                      <h4 className="font-bold text-gray-900 text-[13px] leading-tight">
                                        {resource.title}
                                      </h4>
                                      <span className={`text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${
                                        resource.type === 'video' ? 'bg-red-100 text-red-700' :
                                        resource.type === 'pdf' ? 'bg-blue-100 text-blue-700' :
                                        resource.type === 'script' ? 'bg-purple-100 text-purple-700' :
                                        resource.type === 'prompt' ? 'bg-green-100 text-green-700' :
                                        'bg-amber-100 text-amber-700'
                                      }`}>
                                        {resource.type}
                                      </span>
                                    </div>
                                    <p className="text-gray-500 text-[11px] font-medium mt-1 leading-snug">
                                      {resource.description}
                                    </p>
                                  </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
                                  {adminMode && (
                                    <button 
                                      onClick={() => handleDeleteResource(selectedFolder.id, selectedSubFolder.id, resource.id)}
                                      className="bg-red-50 hover:bg-red-100 border border-red-200 text-red-700 text-[10px] font-bold uppercase tracking-wider p-2.5 rounded-lg transition-all flex items-center justify-center shadow-sm"
                                      title="Delete Resource"
                                    >
                                      <Trash2 className="w-3.5 h-3.5" />
                                    </button>
                                  )}

                                  {resource.type === "prompt" && resource.content && (
                                    <button 
                                      onClick={() => handleCopyText(resource.content || "", resource.id)}
                                      className="bg-[#faf8f5] hover:bg-gray-100 border border-[#dbd4c9] text-gray-800 text-[10px] font-bold uppercase tracking-wider px-3.5 py-2 rounded-lg transition-all flex items-center gap-1.5 shadow-sm"
                                    >
                                      {copiedId === resource.id ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                                      {copiedId === resource.id ? "Copied" : "Copy Prompt"}
                                    </button>
                                  )}
                                  
                                  {selectedFolder.category === "academy" ? (
                                    <button 
                                      onClick={() => setActiveCourseStep(resource)}
                                      className="bg-[#9f1e13] hover:bg-[#9f1e13] text-white text-[10px] font-bold uppercase tracking-wider px-4 py-2 rounded-lg transition-all flex items-center gap-1 shadow-md"
                                    >
                                      <PlayCircle className="w-3.5 h-3.5" /> Start Module
                                    </button>
                                  ) : (
                                    resource.url && (
                                      <a 
                                        href={resource.url}
                                        className="bg-[#9f1e13] hover:bg-[#9f1e13] text-white text-[10px] font-bold uppercase tracking-wider px-4 py-2 rounded-lg transition-all flex items-center gap-1.5 shadow-md"
                                        download
                                      >
                                        <Download className="w-3.5 h-3.5" /> Download
                                      </a>
                                    )
                                  )}
                                </div>
                              </div>
                            );
                          })}
                      </div>
                    )}
                  </div>
                )}

                {/* INTERACTIVE COURSE LMS PLAYER PANEL */}
                {activeCourseStep && selectedFolder.category === "academy" && (
                  <div className="mt-8 border border-[#dbd4c9] rounded-2xl p-6 bg-[#faf8f5] relative shadow-md">
                    <button 
                      onClick={() => setActiveCourseStep(null)}
                      className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
                    >
                      <Lock className="w-4 h-4" /> Close Content View
                    </button>

                    <span className="text-[9px] font-bold uppercase tracking-widest text-[#9f1e13] block mb-1">Active Course Module Player</span>
                    <h3 className="font-playfair text-[18px] font-bold text-gray-900 mb-4">{activeCourseStep.title}</h3>
                    
                    {/* Simulated Player View */}
                    <div className="aspect-video bg-black/90 rounded-xl overflow-hidden flex flex-col justify-between p-6 relative text-white mb-4 border border-white/10 shadow-inner">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#9f1e13]/25 via-transparent to-transparent pointer-events-none"></div>
                      
                      <div className="flex justify-between items-center w-full z-10">
                        <span className="bg-[#9f1e13] text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-widest">TBN Video Module</span>
                        <span className="text-white/60 text-[10px] font-medium">Duration: 42 mins</span>
                      </div>
                      
                      <div className="flex flex-col items-center justify-center gap-3 z-10">
                        <PlayCircle className="w-16 h-16 text-white/95 hover:text-white hover:scale-105 transition-all cursor-pointer drop-shadow-lg" />
                        <span className="text-[11px] text-white/70 font-semibold tracking-wider uppercase">Click to Stream Webinar</span>
                      </div>
                      
                      <div className="flex justify-between items-center w-full text-white/40 text-[9.5px] z-10">
                        <span>Speaker: Dr. Ishtiaq Rehman / Medical Director</span>
                        <span>HD 1080p Stream</span>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-[#dbd4c9] mb-4">
                      <h4 className="font-bold text-gray-900 text-xs uppercase tracking-widest mb-1.5 flex items-center gap-1.5"><Info className="w-3.5 h-3.5 text-[#9f1e13]" /> Key Training Notes:</h4>
                      <p className="text-gray-700 text-xs leading-relaxed font-medium">
                        This module covers core diagnostic thresholds and client scripts. Review the attached script document, practice with your clinical coordinator, and complete the pathway assessment to get TBN certified.
                      </p>
                    </div>

                    <div className="flex justify-between items-center">
                      <button 
                        onClick={() => handleToggleStepComplete(activeCourseStep.id)}
                        className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-sm ${
                          completedSteps[activeCourseStep.id]
                            ? 'bg-green-600 text-white hover:bg-green-700'
                            : 'bg-white border border-[#dbd4c9] text-gray-800 hover:bg-gray-50'
                        }`}
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        {completedSteps[activeCourseStep.id] ? "Completed Module" : "Mark as Completed"}
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Workspace Navigation Foot */}
              <div className="border-t border-gray-100 pt-6 mt-8 flex justify-between items-center text-xs">
                <button 
                  onClick={() => {
                    setSelectedFolder(null);
                    setSelectedSubFolder(null);
                    setActiveCourseStep(null);
                  }}
                  className="font-bold text-gray-500 hover:text-gray-900 uppercase tracking-widest flex items-center gap-1"
                >
                  <ArrowLeft className="w-4 h-4" /> Back to Dashboard
                </button>

                <p className="text-gray-400 font-bold uppercase tracking-widest text-[9.5px]">TBN PARTNER PORTAL 2.0</p>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* SUPER ADMIN FILE UPLOADER MODAL */}
      {showUploaderModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-[#dbd4c9] w-full max-w-[480px] rounded-2xl overflow-hidden shadow-2xl p-6 relative">
            <h3 className="font-playfair text-[20px] font-bold text-gray-900 mb-2 uppercase tracking-wide">
              Super Admin: Upload Content
            </h3>
            <p className="text-gray-400 text-xs font-semibold mb-6">
              Add new resource to: <span className="text-[#9f1e13] font-bold">{selectedSubFolder?.name}</span>
            </p>

            <form onSubmit={handleUploadSubmit} className="space-y-4">
              {/* Upload Source Selector */}
              <div className="flex bg-[#faf8f5] p-1 rounded-xl border border-[#dbd4c9] mb-4">
                <button
                  type="button"
                  onClick={() => {
                    setUploadSource("link");
                    setUploadedFile(null);
                  }}
                  className={`flex-1 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-lg transition-all ${
                    uploadSource === "link" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-950"
                  }`}
                >
                  External Link
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setUploadSource("computer");
                    setNewUrl("");
                  }}
                  className={`flex-1 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-lg transition-all ${
                    uploadSource === "computer" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-950"
                  }`}
                >
                  Upload from Computer
                </button>
              </div>

              {uploadSource === "computer" && (
                <div className="border-2 border-dashed border-[#dbd4c9] hover:border-[#9f1e13]/40 rounded-xl p-6 text-center cursor-pointer hover:bg-stone-50 transition-all relative">
                  <input 
                    type="file" 
                    required={!uploadedFile}
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        setUploadedFile(file);
                        setNewTitle(file.name.substring(0, file.name.lastIndexOf('.')) || file.name);
                        // Determine content type automatically based on file extension
                        const ext = file.name.split('.').pop()?.toLowerCase();
                        if (ext === 'pdf') setNewType('pdf');
                        else if (['mp4', 'mov', 'avi', 'mkv'].includes(ext || '')) setNewType('video');
                        else if (['xlsx', 'csv', 'xls'].includes(ext || '')) setNewType('template');
                        else setNewType('pdf');
                      }
                    }}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  {uploadedFile ? (
                    <div>
                      <p className="text-xs font-bold text-gray-900 truncate">{uploadedFile.name}</p>
                      <p className="text-[10px] text-[#9f1e13] font-bold">{(uploadedFile.size / 1024 / 1024).toFixed(2)} MB • Auto-detected type</p>
                    </div>
                  ) : (
                    <div>
                      <p className="text-xs font-bold text-gray-700">Drag & drop or click to choose file</p>
                      <p className="text-[10px] text-gray-400 font-medium">PDF, Video, Excel, Doc or Image formats</p>
                    </div>
                  )}
                </div>
              )}

              <div>
                <label className="block text-[9.5px] font-bold text-gray-400 uppercase tracking-widest mb-1">Resource Title</label>
                <input 
                  type="text"
                  required
                  placeholder="e.g. Clinical Menopause Script V2"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs bg-[#faf8f5] border border-[#dbd4c9] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#9f1e13] font-medium"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[9.5px] font-bold text-gray-400 uppercase tracking-widest mb-1">Content Type</label>
                  <select 
                    value={newType}
                    onChange={(e) => setNewType(e.target.value as any)}
                    className="w-full px-3.5 py-2 text-xs bg-[#faf8f5] border border-[#dbd4c9] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#9f1e13] font-bold text-gray-700"
                  >
                    <option value="pdf">PDF Document</option>
                    <option value="video">Video Webinar</option>
                    <option value="script">Script Dialogue</option>
                    <option value="template">Spreadsheet Template</option>
                    <option value="link">External Resource Link</option>
                    <option value="prompt">ChatGPT Prompt Text</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[9.5px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                    {uploadSource === "computer" ? "File URL (Auto-Generated)" : "Resource URL (Optional)"}
                  </label>
                  <input 
                    type="text"
                    disabled={uploadSource === "computer"}
                    placeholder={uploadSource === "computer" ? "Generated local blob URL" : "https://tbn.com/files/..."}
                    value={uploadSource === "computer" ? (uploadedFile ? "Local File: " + uploadedFile.name : "") : newUrl}
                    onChange={(e) => setNewUrl(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs bg-[#faf8f5] border border-[#dbd4c9] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#9f1e13] font-medium disabled:opacity-60 disabled:cursor-not-allowed"
                  />
                </div>
              </div>

              {newType === "prompt" && (
                <div>
                  <label className="block text-[9.5px] font-bold text-gray-400 uppercase tracking-widest mb-1">ChatGPT Copyable Prompt</label>
                  <textarea 
                    rows={3}
                    placeholder="Enter the copyable prompt text for partners..."
                    value={newPromptContent}
                    onChange={(e) => setNewPromptContent(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs bg-[#faf8f5] border border-[#dbd4c9] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#9f1e13] font-medium"
                  />
                </div>
              )}

              <div>
                <label className="block text-[9.5px] font-bold text-gray-400 uppercase tracking-widest mb-1">Short Description</label>
                <textarea 
                  rows={2}
                  required
                  placeholder="Explain what this file provides to the partners..."
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs bg-[#faf8f5] border border-[#dbd4c9] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#9f1e13] font-medium"
                />
              </div>

              <div className="flex justify-end gap-3 border-t border-gray-100 pt-4 mt-6">
                <button 
                  type="button"
                  onClick={() => {
                    setUploadedFile(null);
                    setUploadSource("link");
                    setShowUploaderModal(false);
                  }}
                  className="px-4 py-2 border border-gray-200 hover:bg-gray-50 text-gray-800 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-5 py-2 bg-[#9f1e13] hover:bg-[#9f1e13] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md"
                >
                  Confirm Upload
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer hideInstagram={true} />
    </div>
  );
}
