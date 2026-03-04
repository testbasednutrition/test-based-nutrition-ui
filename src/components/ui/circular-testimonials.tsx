"use client";
import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
}
interface Colors {
  name?: string;
  designation?: string;
  testimony?: string;
  arrowBackground?: string;
  arrowForeground?: string;
  arrowHoverBackground?: string;
}
interface FontSizes {
  name?: string;
  designation?: string;
  quote?: string;
}
interface CircularTestimonialsProps {
  testimonials: Testimonial[];
  autoplay?: boolean;
  colors?: Colors;
  fontSizes?: FontSizes;
}

function calculateGap(width: number) {
  const minWidth = 1024;
  const maxWidth = 1456;
  const minGap = 60;
  const maxGap = 86;
  if (width <= minWidth) return minGap;
  if (width >= maxWidth)
    return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
  return minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth));
}

export const CircularTestimonials = ({
  testimonials,
  autoplay = true,
  colors = {},
  fontSizes = {},
}: CircularTestimonialsProps) => {
  const colorName = colors.name ?? "hsl(var(--foreground))";
  const colorDesignation = colors.designation ?? "hsl(var(--muted-foreground))";
  const colorTestimony = colors.testimony ?? "hsl(var(--muted-foreground))";
  const colorArrowBg = colors.arrowBackground ?? "hsl(var(--primary))";
  const colorArrowFg = colors.arrowForeground ?? "hsl(var(--primary-foreground))";
  const colorArrowHoverBg = colors.arrowHoverBackground ?? "hsl(var(--accent))";
  const fontSizeName = fontSizes.name ?? "1.5rem";
  const fontSizeDesignation = fontSizes.designation ?? "0.925rem";
  const fontSizeQuote = fontSizes.quote ?? "1.125rem";

  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverPrev, setHoverPrev] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);
  const [containerWidth, setContainerWidth] = useState(1200);

  const imageContainerRef = useRef<HTMLDivElement>(null);
  const autoplayIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const testimonialsLength = useMemo(() => testimonials.length, [testimonials]);
  const activeTestimonial = useMemo(
    () => testimonials[activeIndex],
    [activeIndex, testimonials]
  );

  useEffect(() => {
    function handleResize() {
      if (imageContainerRef.current) {
        setContainerWidth(imageContainerRef.current.offsetWidth);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (autoplay) {
      autoplayIntervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonialsLength);
      }, 5000);
    }
    return () => {
      if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    };
  }, [autoplay, testimonialsLength]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
    // eslint-disable-next-line
  }, [activeIndex, testimonialsLength]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonialsLength);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [testimonialsLength]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonialsLength) % testimonialsLength);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [testimonialsLength]);

  function getImageStyle(index: number): React.CSSProperties {
    const gap = calculateGap(containerWidth);
    const maxStickUp = gap * 0.8;
    const isActive = index === activeIndex;
    const isLeft = (activeIndex - 1 + testimonialsLength) % testimonialsLength === index;
    const isRight = (activeIndex + 1) % testimonialsLength === index;
    if (isActive) {
      return {
        zIndex: 3,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(0px) translateY(0px) scale(1) rotateY(0deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    if (isLeft) {
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(-${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    if (isRight) {
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(-15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    return {
      zIndex: 1,
      opacity: 0,
      pointerEvents: "none",
      transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
    };
  }

  const quoteVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div style={{ width: "100%", maxWidth: 1200, margin: "0 auto", padding: "2rem 1rem" }}>
      <div
        className="testimonial-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "2rem",
          alignItems: "center",
        }}
      >
        {/* Images */}
        <div
          ref={imageContainerRef}
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "1 / 1",
            maxWidth: 400,
            margin: "0 auto",
            perspective: 1000,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <img
              key={testimonial.src}
              src={testimonial.src}
              alt={testimonial.name}
              draggable={false}
              onClick={() => {
                setActiveIndex(index);
                if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
              }}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "50%",
                cursor: "pointer",
                userSelect: "none",
                ...getImageStyle(index),
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              variants={quoteVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <h3
                style={{
                  fontSize: fontSizeName,
                  fontWeight: 700,
                  color: colorName,
                  fontFamily: "var(--font-heading, 'Syne', sans-serif)",
                }}
              >
                {activeTestimonial.name}
              </h3>
              <p
                style={{
                  fontSize: fontSizeDesignation,
                  color: colorDesignation,
                  marginTop: "0.25rem",
                }}
              >
                {activeTestimonial.designation}
              </p>
              <motion.blockquote
                style={{
                  fontSize: fontSizeQuote,
                  color: colorTestimony,
                  marginTop: "1rem",
                  lineHeight: 1.7,
                }}
              >
                {activeTestimonial.quote.split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ filter: "blur(8px)", opacity: 0, y: 5 }}
                    animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut", delay: 0.015 * i }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.blockquote>
            </motion.div>
          </AnimatePresence>

          <div className="arrow-buttons" style={{ display: "flex", gap: "0.75rem", paddingTop: "1rem" }}>
            <button
              onClick={handlePrev}
              onMouseEnter={() => setHoverPrev(true)}
              onMouseLeave={() => setHoverPrev(false)}
              aria-label="Previous testimonial"
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: hoverPrev ? colorArrowHoverBg : colorArrowBg,
                color: colorArrowFg,
                border: "none",
                cursor: "pointer",
                transition: "background 0.2s",
              }}
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              onMouseEnter={() => setHoverNext(true)}
              onMouseLeave={() => setHoverNext(false)}
              aria-label="Next testimonial"
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: hoverNext ? colorArrowHoverBg : colorArrowBg,
                color: colorArrowFg,
                border: "none",
                cursor: "pointer",
                transition: "background 0.2s",
              }}
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .testimonial-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .arrow-buttons {
            padding-top: 0 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default CircularTestimonials;
