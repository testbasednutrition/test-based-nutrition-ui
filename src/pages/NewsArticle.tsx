import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { type Article } from "@/data/newsArticles";
import { fetchNewsArticleById } from "@/lib/api";
import { getArticleImage } from "@/components/news/newsImages";

const NewsArticle = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadArticle() {
      if (!id) return;
      try {
        const data = await fetchNewsArticleById(id);
        setArticle(data);
      } catch (error) {
        console.error("Failed to load article:", error);
      } finally {
        setLoading(false);
      }
    }
    loadArticle();
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center">
        <Navbar alwaysSolid />
        <div className="animate-pulse flex flex-col items-center mt-20 gap-4">
          <div className="h-8 w-64 bg-muted rounded"></div>
          <div className="h-4 w-48 bg-muted rounded"></div>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center">
        <Navbar alwaysSolid />
        <div className="text-center mt-20">
          <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">The story you are looking for does not exist or has been removed.</p>
          <Button asChild>
            <Link to="/news">Return to News Hub</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar alwaysSolid />
      
      {/* Article Header */}
      <div className="pt-24 pb-12 md:pt-32 md:pb-16 bg-secondary/50">
        <div className="container px-6 max-w-4xl mx-auto">
          <Link to="/news" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to News
          </Link>
          
          <Badge variant="outline" className="mb-6 bg-background/50 backdrop-blur-sm px-3 py-1">
            {article.category}
          </Badge>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-balance">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center justify-between gap-6 py-6 border-y border-border/60">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                {article.author.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-sm">{article.author}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>
            
            {/* Share Links */}
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-sm font-medium mr-2 hidden sm:block">Share:</span>
              <button className="p-2 hover:bg-secondary rounded-full transition-colors hover:text-foreground"><Twitter className="w-4 h-4" /></button>
              <button className="p-2 hover:bg-secondary rounded-full transition-colors hover:text-foreground"><Linkedin className="w-4 h-4" /></button>
              <button className="p-2 hover:bg-secondary rounded-full transition-colors hover:text-foreground"><Facebook className="w-4 h-4" /></button>
              <button className="p-2 hover:bg-secondary rounded-full transition-colors hover:text-foreground"><Share2 className="w-4 h-4" /></button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="container px-6 max-w-5xl mx-auto -mt-8 relative z-10">
        <div className="rounded-2xl overflow-hidden aspect-[21/9] shadow-2xl bg-muted bg-cover bg-center">
            <img 
              src={getArticleImage(article.image)} 
              alt={article.title} 
              className="w-full h-full object-cover"
            />
        </div>
      </div>

      {/* Article Body */}
      <article className="container px-6 max-w-3xl mx-auto py-16 md:py-24">
        {/* Because the excerpt field now acts as the WYSIWYG content body, we render it directly */}
        <div 
          className="prose prose-lg md:prose-xl dark:prose-invert max-w-none 
                    prose-headings:font-bold prose-headings:tracking-tight
                    prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                    prose-img:rounded-xl prose-img:shadow-md
                    prose-p:leading-relaxed prose-p:text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: article.excerpt }}
        />
        
        <div className="mt-16 pt-8 border-t border-border flex justify-between items-center">
          <Badge variant="secondary" className="px-4 py-2 text-sm">{article.category}</Badge>
          <Button variant="outline" asChild>
            <Link to="/news">Read More News</Link>
          </Button>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default NewsArticle;
