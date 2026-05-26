# TestBased Nutrition - Ecosystem Codebase

This repository contains the frontend codebase for the **TestBased Nutrition Main Website** and the **Partner Hub** administrative portal.

## Tech Stack
- **Framework**: React / Vite (Main Site), Next.js App Router (Partner Hub)
- **Database / Backend**: Supabase (PostgreSQL, Storage, Row Level Security)
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui & Radix UI
- **Routing**: React Router (Main Site), Next.js built-in routing (Partner Hub)

## Getting Started

### Main Website
```bash
npm install
npm run dev
# Runs on http://localhost:8080
```

### Partner Hub (Admin Portal)
```bash
cd partner-hub
npm install
npm run dev
# Runs on http://localhost:3000
```

## Core Features Implemented

### Main Website (B2C & B2B Public Face)
*   **Comprehensive Treatment Pathways**: 7 deep-dive, beautifully engineered landing pages (Women's Health, Men's Health, Sports Performance, Pain & Fatigue, Skin Health, Neurodivergence, Children's Health) featuring cohesive editorial layouts, custom visual assets, and unified "Trust Bars" detailing our 4-stage testing protocol.
*   **Premium Editorial Aesthetic & Rebranding**: Global visual overhaul removing standard UI icons in favor of bespoke, high-end PNG assets. Implementation of refined vertical rhythms, minimalist container styling, and subtle CSS gradient fades between core components to achieve a seamless, luxurious user experience.
*   **Exclusive Retreat & Partnership Pages**: Custom immersive landing experiences showcasing collaborations (e.g., St Michaels Resort) complete with structured pricing tiers, wellness package details, and interactive mock-booking flows.
*   **Practitioner & Clinic Directory**: Rich, dynamic profiles for partnered specialists featuring credentials, "before and after" Omega 6:3 diagnostic impact results, and direct booking integrations automatically populated from the Supabase backend.
*   **Dynamic 3D Gallery "What We Treat" Section**: Interactive flip cards for overarching service categories that engage users and reveal detailed treatment information seamlessly.
*   **Live News & Insights Hub**: A dynamic editorial platform displaying the latest holistic health insights, inherently synchronized with the admin Partner Hub platform. 
*   **Refined Global Design System**: Luxurious aesthetics leveraging *Playfair Display* and *Montserrat* fonts alongside a cohesive signature red/cream palette (`#9f1e13`, `#f9f5f2`, `#dbd4c9`) that establishes absolute trust and authority.

### Partner Hub (B2B Admin & Content Portal)
*   **Comprehensive Resource Centers**: Extensive, role-based cloud file distribution systems (via Supabase Storage) allowing admins to directly upload training PDFs, clinical pathways, and marketing assets for one-click bulk downloads by partners.
*   **Structured Training Modules**: Segregated enablement pathways (Get Started, Customer Builder, Business Builder) equipping practitioners with everything from foundational testing methodologies to advanced sales habits.
*   **Partner Application & Data Management**: A comprehensive Next.js dashboard where administrators can review, manage, and curate the network via a secure Data Table.
*   **Global Profile Management**: Capability for both administrators and individual partners to seamlessly update public-facing specialist profiles and biographies in real-time.
*   **Secure Server Actions Architecture**: Built-in backend permission flows bypassing restrictive RLS client policies securely, giving admins full permission capabilities without exposing privileged keys to the client.
*   **Dynamic Content Management System (CMS)**: Fully authenticated backend enabling platform directors to seamlessly publish, edit, manage, and categorize rich-text articles directly to the public-facing News Hub.

## Business Benefits

1.  **Unified Ecosystem & Scale**: By heavily integrating the public website with a specialized administrative hub, the business achieves complete, instant control over its professional network, clinical assets, and editorial content without constant developer intervention.
2.  **Frictionless B2B Expansion**: The dedicated "Partner With Us" acquisition funnel feeds directly into a robust CRM-style dashboard for admins, dramatically reducing onboarding overhead while allowing rigorous curation of the network's quality.
3.  **Elevated Brand Trust**: By spotlighting expert medical directors, utilizing bespoke visual assets, and articulating the testing methodology with a flawless, high-end aesthetic, prospective patients instantly recognize Test-Based Nutrition's authority.
4.  **Operational Automation**: Real-time structured data via Supabase vastly reduces the time it takes to activate new practitioners. Approved specialist profiles are dynamically assembled into SEO-friendly, highly-converting public pages the moment an admin hits 'Approve'.
5.  **High Conversion UX Architecture**: The platform leverages strategically targeted landing pages mapping specific life-stages/symptoms to relevant experts, lowering bounce rates and accelerating the consultation funnel.
6.  **Partner Enablement & Retention**: The immersive Partner Hub provides immense continuous value to practitioners, offering them out-of-the-box marketing materials, back-office training, and clinical protocols that lock them into the TBN ecosystem.
