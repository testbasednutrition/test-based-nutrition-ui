import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { Article } from "@/data/newsArticles";
import { getArticleImage } from "@/components/news/newsImages";

interface Props {
  featured: Article;
  trending: Article[];
}

const NewsHero = ({ featured, trending }: Props) => (
  <section className="pt-24 pb-12 md:pt-32 md:pb-16">
    <div className="container px-6">
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main featured */}
        <div className="lg:col-span-2 group relative rounded-lg overflow-hidden cursor-pointer">
          <div className="aspect-[16/9] md:aspect-[2/1]">
            <img
              src={getArticleImage(featured.image)}
              alt={featured.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="eager"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <Badge className="mb-3 bg-primary text-primary-foreground border-none">
              {featured.category}
            </Badge>
            <h1 className="text-2xl md:text-4xl font-bold text-background leading-tight mb-3">
              {featured.title}
            </h1>
            <p className="text-background/80 text-sm md:text-base max-w-2xl mb-4 line-clamp-2">
              {featured.excerpt}
            </p>
            <Button size="sm" className="gap-2">
              Read Full Story <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Trending sidebar */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Trending Now
          </h2>
          {trending.map((article, i) => (
            <div
              key={article.id}
              className="group flex gap-4 cursor-pointer p-3 rounded-lg hover:bg-secondary transition-colors"
            >
              <span className="text-3xl font-bold text-border font-serif leading-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1 min-w-0">
                <Badge variant="outline" className="mb-1 text-[10px] px-2 py-0">
                  {article.category}
                </Badge>
                <h3 className="text-sm font-semibold leading-snug group-hover:text-primary transition-colors line-clamp-3">
                  {article.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {article.readTime}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default NewsHero;
