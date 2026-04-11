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
*   **Targeted Treatment Pathways**: Specially crafted landing pages (Women's Health, Sports Performance, Men's Health, etc.) mapping symptoms to diagnostic testing solutions with deep educational content and an elevated editorial design.
*   **Practitioner & Clinic Directory**: Rich, dynamic profiles for partnered specialists featuring credentials, "before and after" Omega 6:3 diagnostic impact results, and direct booking integrations automatically populated from the Supabase backend.
*   **Dynamic 3D Gallery "What We Treat" Section**: Interactive flip cards for overarching service categories that engage users and reveal detailed treatment information seamlessly.
*   **Live News & Insights Hub**: A dynamic editorial platform displaying the latest holistic health insights, inherently synchronized with the admin Partner Hub platform. 
*   **Refined Global Design System**: Luxurious aesthetics leveraging *Playfair Display* and *Montserrat* fonts alongside a cohesive signature red/cream palette that establishes absolute trust and authority.

### Partner Hub (B2B Admin & Content Portal)
*   **Partner Application Management**: A comprehensive Next.js dashboard where administrators can review, approve, and revoke new practitioner and clinic listings submitted to the platform.
*   **Draft & Live Previews**: Capability to instantaneously preview pending partner directory profiles directly on the main site (using cross-platform live routing integration) prior to making them publicly visible.
*   **Secure Server Actions Architecture**: Built-in backend permission flows bypassing restrictive RLS client policies securely, giving admins full permission capabilities without exposing privileged keys to the client.
*   **Dynamic Content Management System (CMS)**: Fully authenticated backend enabling platform directors to seamlessly publish, edit, manage, and categorize rich-text articles directly to the public-facing News Hub.

## Business Benefits

1.  **Unified Ecosystem & Scale**: By heavily integrating the public website with a specialized administrative hub, the business achieves complete, instant control over its professional network and editorial content without constant developer intervention.
2.  **Frictionless B2B Expansion**: The dedicated "Partner With Us" acquisition funnel feeds directly into a robust CRM-style dashboard for admins, dramatically reducing onboarding overhead while allowing rigorous curation of the network's quality.
3.  **Elevated Brand Trust**: By spotlighting expert medical directors and clearly articulating the testing methodology with a clean, high-end aesthetic, prospective patients and partners instantly recognize Test-Based Nutrition's authority.
4.  **Operational Automation**: Real-time structured data via Supabase vastly reduces the time it takes to activate new practitioners. Approved specialist profiles are dynamically assembled into SEO-friendly, highly-converting public pages the moment an admin hits 'Approve'.
5.  **High Conversion UX Architecture**: The platform leverages strategically targeted landing pages mapping specific life-stages/symptoms (e.g. Perimenopause, Burnout, Elite Athletic Recovery) to relevant experts, lowering bounce rates and accelerating the consultation funnel.
