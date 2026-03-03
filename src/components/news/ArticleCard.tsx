import { Badge } from "@/components/ui/badge";
import type { Article } from "@/data/newsArticles";
import { getArticleImage } from "@/components/news/newsImages";

const ArticleCard = ({ title, excerpt, category, author, date, image, readTime }: Article) => (
  <article className="group cursor-pointer">
    <div className="rounded-lg overflow-hidden mb-4 aspect-[3/2]">
      <img
        src={getArticleImage(image)}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
    </div>
    <Badge variant="outline" className="mb-2 text-[10px]">
      {category}
    </Badge>
    <h3 className="font-bold text-lg leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2">
      {title}
    </h3>
    <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{excerpt}</p>
    <div className="flex items-center gap-2 text-xs text-muted-foreground">
      <span className="font-medium text-foreground">{author}</span>
      <span>·</span>
      <span>{date}</span>
      <span>·</span>
      <span>{readTime}</span>
    </div>
  </article>
);

export default ArticleCard;
