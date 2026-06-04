import { motion } from "framer-motion";
import { Instagram, Heart, MessageCircle, ArrowUpRight } from "lucide-react";

interface InstagramPost {
  id: string;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: number;
  date: string;
}

const instagramPosts: InstagramPost[] = [
  {
    id: "post-1",
    imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600",
    caption: "Why cellular health begins at the membrane. Our finger-prick Omega Balance test measures key fatty acids to optimize your cellular protection.",
    likes: 142,
    comments: 18,
    date: "2d ago"
  },
  {
    id: "post-2",
    imageUrl: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&q=80&w=600",
    caption: "Unlocking results through practitioner insight. Connect with a certified TBN specialist for a personalised protocol designed around your biology.",
    likes: 98,
    comments: 12,
    date: "4d ago"
  },
  {
    id: "post-3",
    imageUrl: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=600",
    caption: "Food is information. Restoring your Omega 6:3 ratio isn't just about supplementation—it's about combining nutrient-dense foundations for long-term vitality.",
    likes: 215,
    comments: 31,
    date: "1w ago"
  },
  {
    id: "post-4",
    imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=600",
    caption: "Performance is non-negotiable. From ex-Olympic wrestlers to professional rugby players, optimising internal balance is the first step to peak recovery.",
    likes: 187,
    comments: 24,
    date: "1w ago"
  },
  {
    id: "post-5",
    imageUrl: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=600",
    caption: "Skin health is a reflection of internal balance. Target systemic inflammation at the root to improve skin barrier function, hydration, and cellular aging.",
    likes: 156,
    comments: 14,
    date: "2w ago"
  },
  {
    id: "post-6",
    imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600",
    caption: "Empowering clinics and practitioners through world-leading training. Inside our recent academy session covering gut health and point-of-care diagnostics.",
    likes: 112,
    comments: 9,
    date: "2w ago"
  }
];

const InstagramFeed = () => {
  const handleUrl = "https://www.instagram.com/testbasedltd/";

  return (
    <section className="py-20 md:py-28 bg-[#fdfcfb] border-t border-border/40">
      <div className="container px-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9f1e13] mb-3">
              Social Feed
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-foreground tracking-tight mb-2">
              Inside Test-Based Nutrition
            </h2>
            <p className="text-muted-foreground text-[15px] max-w-xl leading-relaxed">
              Follow our journey for cellular health insights, practitioner stories, academy updates, and science-led nutrition protocols.
            </p>
          </div>
          
          <div className="flex items-center gap-4 shrink-0">
            <a 
              href={handleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-border shadow-sm hover:border-[#bdae97] hover:shadow-md transition-all duration-300"
            >
              <Instagram className="w-4 h-4 text-[#9f1e13]" />
              <span className="text-sm font-bold text-gray-800 group-hover:text-[#9f1e13] transition-colors">
                @testbasedltd
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Feed Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
          {instagramPosts.map((post, idx) => (
            <motion.a
              key={post.id}
              href={handleUrl}
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
                alt={`Instagram post by testbasedltd ${idx + 1}`}
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
