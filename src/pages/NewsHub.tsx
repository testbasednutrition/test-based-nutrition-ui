import { useState, useMemo } from "react";
import NewsNavbar from "@/components/news/NewsNavbar";
import BreakingTicker from "@/components/news/BreakingTicker";
import NewsHero from "@/components/news/NewsHero";
import CategoryFilter from "@/components/news/CategoryFilter";
import ArticleCard from "@/components/news/ArticleCard";
import FeaturedInsights from "@/components/news/FeaturedInsights";
import NewsletterSignup from "@/components/news/NewsletterSignup";
import Footer from "@/components/Footer";
import { articles, type Category } from "@/data/newsArticles";

const NewsHub = () => {
  const [activeCategory, setActiveCategory] = useState<Category | "All">("All");
  const [search, setSearch] = useState("");

  const featured = articles.find((a) => a.featured)!;
  const trending = articles.filter((a) => !a.featured).slice(0, 4);
  const longReads = articles.filter((a) => a.longRead);

  const filtered = useMemo(() => {
    let result = articles.filter((a) => !a.featured);
    if (activeCategory !== "All") result = result.filter((a) => a.category === activeCategory);
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.author.toLowerCase().includes(q)
      );
    }
    return result;
  }, [activeCategory, search]);

  return (
    <div className="min-h-screen bg-background">
      <NewsNavbar />
      <BreakingTicker />
      <NewsHero featured={featured} trending={trending} />

      {/* Latest Articles */}
      <section className="py-12">
        <div className="container px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Latest Articles</h2>
          <CategoryFilter
            active={activeCategory}
            onCategoryChange={setActiveCategory}
            search={search}
            onSearchChange={setSearch}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {filtered.length > 0 ? (
              filtered.map((a) => <ArticleCard key={a.id} {...a} />)
            ) : (
              <p className="text-muted-foreground col-span-full text-center py-12">
                No articles found. Try a different search or category.
              </p>
            )}
          </div>
        </div>
      </section>

      <FeaturedInsights articles={longReads} />
      <NewsletterSignup />
      <Footer />
    </div>
  );
};

export default NewsHub;
