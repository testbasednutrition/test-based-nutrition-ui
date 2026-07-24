import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
}

export default function SEO({
  title = "Test-Based Nutrition | Science-Led Health & Performance",
  description = "Customized nutritional pathways driven by clinical blood spot biomarker testing. Partnering with elite clinics, practitioners, and athletes across the UK.",
  canonical,
  ogImage = "https://www.test-basednutrition.com/og-image.jpg",
  ogType = "website"
}: SEOProps) {
  const location = useLocation();
  const currentUrl = canonical || `https://www.test-basednutrition.com${location.pathname}`;

  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // Helper function to update or create meta tag
    const setMetaTag = (selector: string, attrName: string, attrVal: string, content: string) => {
      let element = document.querySelector(selector) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // 2. Update Meta Description
    setMetaTag('meta[name="description"]', 'name', 'description', description);

    // 3. Update Open Graph Tags
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', title);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', currentUrl);
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', ogImage);
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', ogType);

    // 4. Update Twitter Card Tags
    setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage);

    // 5. Update Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", currentUrl);

  }, [title, description, currentUrl, ogImage, ogType]);

  return null;
}
