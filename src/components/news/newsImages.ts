import heroFeatured from "@/assets/news/hero-featured.jpg";
import aiHealth from "@/assets/news/ai-health.jpg";
import biotech from "@/assets/news/biotech.jpg";
import publicHealth from "@/assets/news/public-health.jpg";
import pharma from "@/assets/news/pharma.jpg";
import globalHealth from "@/assets/news/global-health.jpg";
import research from "@/assets/news/research.jpg";
import nutrition from "@/assets/news/nutrition.jpg";

const imageMap: Record<string, string> = {
  "hero-featured": heroFeatured,
  "ai-health": aiHealth,
  biotech,
  "public-health": publicHealth,
  pharma,
  "global-health": globalHealth,
  research,
  nutrition,
};

export function getArticleImage(key: string): string {
  return imageMap[key] ?? heroFeatured;
}
