import React, { useEffect } from "react";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SchemaMarkupProps {
  type: "Organization" | "FAQPage" | "MedicalBusiness" | "BreadcrumbList";
  faqs?: FAQItem[];
  breadcrumbs?: BreadcrumbItem[];
  businessDetails?: {
    name: string;
    description: string;
    image?: string;
    telephone?: string;
    address?: string;
    priceRange?: string;
  };
}

export default function SchemaMarkup({ type, faqs = [], breadcrumbs = [], businessDetails }: SchemaMarkupProps) {
  useEffect(() => {
    let schemaData: object | null = null;

    if (type === "Organization") {
      schemaData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Test-Based Nutrition",
        "alternateName": "TBN",
        "url": "https://testbasednutrition.com",
        "logo": "https://testbasednutrition.com/logos/tbn-official-logo.png",
        "description": "A New Era in Nutritional Preventative Healthcare. Personalised health pathways guided by lab-grade blood spot screening.",
        "slogan": "Test. Target. Transform.™",
        "sameAs": [
          "https://www.instagram.com/testbasednutrition"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "email": "privacy@testbasednutrition.com"
        }
      };
    } else if (type === "FAQPage" && faqs.length > 0) {
      schemaData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      };
    } else if (type === "MedicalBusiness" || type === "HealthAndBeautyBusiness") {
      schemaData = {
        "@context": "https://schema.org",
        "@type": type,
        "name": businessDetails?.name || "Test-Based Nutrition Specialist Network",
        "description": businessDetails?.description || "Accredited healthcare specialists, clinical practitioners, and TBN hubs.",
        "url": "https://testbasednutrition.com/specialists",
        "image": businessDetails?.image || "https://testbasednutrition.com/logos/tbn-official-logo.png",
        "priceRange": businessDetails?.priceRange || "$$",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "UK"
        }
      };
    } else if (type === "BreadcrumbList" && breadcrumbs.length > 0) {
      schemaData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": crumb.name,
          "item": crumb.url
        }))
      };
    }

    if (!schemaData) return;

    // Create script element
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = `schema-${type.toLowerCase()}`;
    script.text = JSON.stringify(schemaData);

    // Remove existing schema script of same type if present
    const existing = document.getElementById(script.id);
    if (existing) {
      existing.remove();
    }

    document.head.appendChild(script);

    return () => {
      const el = document.getElementById(script.id);
      if (el) el.remove();
    };
  }, [type, faqs, breadcrumbs, businessDetails]);

  return null;
}
