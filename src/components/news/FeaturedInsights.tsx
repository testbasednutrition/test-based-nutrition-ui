import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import type { Article } from "@/data/newsArticles";
import { getArticleImage } from "@/components/news/newsImages";
import { Link } from "react-router-dom";

interface Props {
  articles: Article[];
}

const FeaturedInsights = ({ articles }: Props) => (
  <section className="py-16 bg-secondary">
    <div className="container px-6">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Featured Insights</h2>
          <p className="text-muted-foreground text-sm mt-1">Deep dives into the stories shaping health & science</p>
        </div>
      </div>
      <div className="space-y-8">
        {articles.map((article, i) => (
          <Link
            to={`/news/${article.id}`}
            key={article.id}
            className={`group cursor-pointer flex flex-col ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } gap-6 md:gap-10 items-center block`}
          >
            <div className="md:w-2/5 rounded-lg overflow-hidden aspect-[4/3]">
              <img
                src={getArticleImage(article.image)}
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="flex-1">
              <Badge variant="outline" className="mb-3 text-[10px]">
                {article.category}
              </Badge>
              <h3 className="text-xl md:text-2xl font-bold leading-snug mb-3 group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              <div className="text-muted-foreground text-sm leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: article.excerpt }} />
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="font-medium text-foreground">{article.author}</span>
                <span>{article.date}</span>
                <span>{article.readTime}</span>
              </div>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-primary mt-4 group-hover:gap-2 transition-all">
                Read Full Article <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedInsights;
