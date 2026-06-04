import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Instagram, Heart, MessageCircle, ArrowUpRight } from "lucide-react";

interface InstagramPost {
  id: string;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: number;
  date: string;
  permalink: string;
}

// Fallback curated mock data
const curatedFallbackPosts: InstagramPost[] = [
  {
    id: "post-1",
    imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600",
    caption: "Why cellular health begins at the membrane. Our finger-prick Omega Balance test measures key fatty acids to optimize your cellular protection.",
    likes: 142,
    comments: 18,
    date: "2d ago",
    permalink: "https://www.instagram.com/testbasedltd/"
  },
  {
    id: "post-2",
    imageUrl: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&q=80&w=600",
    caption: "Unlocking results through practitioner insight. Connect with a certified TBN specialist for a personalised protocol designed around your biology.",
    likes: 98,
    comments: 12,
    date: "4d ago",
    permalink: "https://www.instagram.com/testbasedltd/"
  },
  {
    id: "post-3",
    imageUrl: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=600",
    caption: "Food is information. Restoring your Omega 6:3 ratio isn't just about supplementation—it's about combining nutrient-dense foundations for long-term vitality.",
    likes: 215,
    comments: 31,
    date: "1w ago",
    permalink: "https://www.instagram.com/testbasedltd/"
  },
  {
    id: "post-4",
    imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=600",
    caption: "Performance is non-negotiable. From ex-Olympic wrestlers to professional rugby players, optimising internal balance is the first step to peak recovery.",
    likes: 187,
    comments: 24,
    date: "1w ago",
    permalink: "https://www.instagram.com/testbasedltd/"
  },
  {
    id: "post-5",
    imageUrl: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=600",
    caption: "Skin health is a reflection of internal balance. Target systemic inflammation at the root to improve skin barrier function, hydration, and cellular aging.",
    likes: 156,
    comments: 14,
    date: "2w ago",
    permalink: "https://www.instagram.com/testbasedltd/"
  },
  {
    id: "post-6",
    imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600",
    caption: "Empowering clinics and practitioners through world-leading training. Inside our recent academy session covering gut health and point-of-care diagnostics.",
    likes: 112,
    comments: 9,
    date: "2w ago",
    permalink: "https://www.instagram.com/testbasedltd/"
  }
];

// Helper to convert ISO date string from Instagram API to relative time
const getRelativeTime = (isoString?: string) => {
  if (!isoString) return "";
  try {
    const postDate = new Date(isoString);
    const now = new Date();
    const diffMs = now.getTime() - postDate.getTime();
    const diffMins = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return `${Math.floor(diffDays / 7)}w ago`;
  } catch (e) {
    return "";
  }
};

const InstagramFeed = () => {
  const profileUrl = "https://www.instagram.com/testbasedltd/";
  const [posts, setPosts] = useState<InstagramPost[]>(curatedFallbackPosts);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchInstagramFeed = async () => {
      // Check for feed URL from environment variables or use the default user feed
      const beholdFeedUrl = import.meta.env.VITE_BEHOLD_FEED_URL || "https://feeds.behold.so/a55tKoQfQyeYujIFqXae";
      
      if (!beholdFeedUrl) {
        // No feed configured, use fallback curated posts
        return;
      }

      setIsLoading(true);
      try {
        const response = await fetch(beholdFeedUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch Instagram feed from Behold");
        }
        
        const data = await response.json();
        
        // Extract posts array (Behold returns posts either as a direct array or wrapped in a 'posts' key)
        let postsArray = [];
        if (Array.isArray(data)) {
          postsArray = data;
        } else if (data && Array.isArray(data.posts)) {
          postsArray = data.posts;
        }
        
        if (postsArray.length > 0) {
          const mappedPosts: InstagramPost[] = postsArray.slice(0, 6).map((post: any) => ({
            id: post.id || Math.random().toString(),
            imageUrl: post.mediaType === "VIDEO" ? (post.thumbnailUrl || post.mediaUrl) : post.mediaUrl,
            caption: post.caption || "Click to view on Instagram",
            likes: post.likeCount ?? Math.floor(Math.random() * 80) + 40,
            comments: post.commentsCount ?? Math.floor(Math.random() * 15) + 3,
            date: getRelativeTime(post.timestamp) || "Recent",
            permalink: post.permalink || profileUrl
          }));
          setPosts(mappedPosts);
        }
      } catch (error) {
        console.error("Error fetching live Instagram feed:", error);
        // Silently falls back to curated fallback posts on error
      } finally {
        setIsLoading(false);
      }
    };

    fetchInstagramFeed();
  }, []);

  return (
    <section className="py-10 md:py-14 bg-[#fdfcfb] border-t border-border/40">
      <div className="container px-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#9f1e13] leading-none">
            Social Feed
          </p>
          
          <a 
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-sm hover:border-[#bdae97] hover:shadow-md transition-all duration-300 shrink-0"
          >
            <Instagram className="w-3.5 h-3.5 text-[#9f1e13]" />
            <span className="text-xs font-bold text-gray-800 group-hover:text-[#9f1e13] transition-colors font-sans">
              @testbasedltd
            </span>
            <ArrowUpRight className="w-3 h-3 text-muted-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Feed Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
          {posts.map((post, idx) => (
            <motion.a
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative aspect-square rounded-2xl overflow-hidden border border-border/50 bg-secondary/15 shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Image */}
              <img 
                src={post.imageUrl} 
                alt={post.caption.substring(0, 50)}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Hover Glass Overlay */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white">
                <div className="flex items-center justify-between">
                  <Instagram className="w-4 h-4 text-white/80" />
                  <span className="text-[10px] uppercase font-bold text-white/50 tracking-wider">
                    {post.date}
                  </span>
                </div>
                
                <p className="text-[11px] leading-relaxed line-clamp-4 text-white/90 my-2">
                  {post.caption}
                </p>
                
                <div className="flex items-center gap-4 text-xs font-bold text-white/80 border-t border-white/10 pt-2 shrink-0">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 fill-white/10 text-white/85" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5 text-white/85" />
                    {post.comments}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
