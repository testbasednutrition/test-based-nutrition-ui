import { Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const textPattern = "2026 NEW TEST BASED NUTRITION CERTIFIED TRAINING ACADEMY - CLICK HERE";

const TrainingTicker = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show ticker after scrolling past roughly the 100vh hero section height
      if (window.scrollY > window.innerHeight - 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className={`fixed left-0 right-0 top-16 md:top-20 z-40 bg-primary text-primary-foreground overflow-hidden shadow-md transition-transform duration-500 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="container flex items-center h-7 md:h-8 gap-3 px-6">
        <span className="flex items-center gap-1.5 text-[9px] md:text-[10px] font-bold uppercase tracking-widest shrink-0 text-white/90">
          <Sparkles className="w-3 h-3" /> Spotlight
        </span>
        <div className="overflow-hidden flex-1 border-l border-white/20 pl-4 ml-2">
          <Link to="/partner-with-us" className="flex gap-16 animate-marquee whitespace-nowrap items-center h-full hover:opacity-80 transition-opacity block group">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="text-[10px] md:text-sm font-normal tracking-wide font-montserrat uppercase flex items-center gap-2">
                {textPattern}
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </span>
            ))}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrainingTicker;
