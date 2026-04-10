"use client";

import * as React from "react";
import { motion, AnimatePresence, PanInfo, type Transition } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { type FocusRailItem } from "./focus-rail";

interface MiniFocusRailProps {
  items: FocusRailItem[];
  initialIndex?: number;
  loop?: boolean;
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

function wrap(min: number, max: number, v: number) {
  if (max === 0) return 0;
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
}

const BASE_SPRING: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
  mass: 1,
};

const TAP_SPRING: Transition = {
  type: "spring",
  stiffness: 450,
  damping: 18,
  mass: 1,
};

export function MiniFocusRail({
  items,
  initialIndex = 0,
  loop = true,
  autoPlay = false,
  interval = 4000,
  className,
}: MiniFocusRailProps) {
  const [active, setActive] = React.useState(initialIndex);
  const [isHovering, setIsHovering] = React.useState(false);
  const lastWheelTime = React.useRef<number>(0);
  const navigate = useNavigate();

  const count = items.length;
  if (count === 0) {
    return <div className="text-center text-muted-foreground p-8">No items to display</div>;
  }

  const activeIndex = wrap(0, count, active);
  const activeItem = items[activeIndex];

  const handlePrev = React.useCallback(() => {
    if (!loop && active === 0) return;
    setActive((p) => p - 1);
  }, [loop, active]);

  const handleNext = React.useCallback(() => {
    if (!loop && active === count - 1) return;
    setActive((p) => p + 1);
  }, [loop, active, count]);

  const onWheel = React.useCallback(
    (e: React.WheelEvent) => {
      const now = Date.now();
      if (now - lastWheelTime.current < 400) return;
      const isHorizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY);
      const delta = isHorizontal ? e.deltaX : e.deltaY;
      if (Math.abs(delta) > 20) {
        if (delta > 0) handleNext();
        else handlePrev();
        lastWheelTime.current = now;
      }
    },
    [handleNext, handlePrev]
  );

  React.useEffect(() => {
    if (!autoPlay || isHovering) return;
    const timer = setInterval(() => handleNext(), interval);
    return () => clearInterval(timer);
  }, [autoPlay, isHovering, handleNext, interval]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") handlePrev();
    if (e.key === "ArrowRight") handleNext();
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => Math.abs(offset) * velocity;

  const onDragEnd = (e: MouseEvent | TouchEvent | PointerEvent, { offset, velocity }: PanInfo) => {
    const swipe = swipePower(offset.x, velocity.x);
    if (swipe < -swipeConfidenceThreshold) handleNext();
    else if (swipe > swipeConfidenceThreshold) handlePrev();
  };

  const visibleIndices = [-2, -1, 0, 1, 2];

  return (
    <div
      className={cn(
        "group relative flex h-[520px] pb-2 w-full flex-col overflow-hidden bg-transparent text-foreground outline-none select-none overflow-x-hidden rounded-3xl",
        className
      )}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      tabIndex={0}
      onKeyDown={onKeyDown}
      onWheel={onWheel}
    >
      <div className="relative z-10 flex flex-1 flex-col justify-center px-0">
        <motion.div
          className="relative mx-auto flex h-[260px] w-full items-center justify-center perspective-[1000px] cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={onDragEnd}
        >
          {visibleIndices.map((offset) => {
            const absIndex = active + offset;
            const index = wrap(0, count, absIndex);
            const item = items[index];

            if (!loop && (absIndex < 0 || absIndex >= count)) return null;
            if (!item) return null;

            const isCenter = offset === 0;
            const dist = Math.abs(offset);

            // Shrunk transforms for mini view
            const xOffset = offset * 200;
            const zOffset = -dist * 120;
            const scale = isCenter ? 1 : 0.8;
            const rotateY = offset * -15;

            const opacity = isCenter ? 1 : Math.max(0.1, 1 - dist * 0.5);
            const blur = isCenter ? 0 : dist * 5;
            const brightness = isCenter ? 1 : 0.6;

            return (
              <motion.div
                key={absIndex}
                className={cn(
                  "absolute aspect-[3/4] w-[180px] rounded-2xl border-t border-black/5 bg-white shadow-xl transition-shadow duration-300",
                  isCenter ? "z-20 shadow-black/10 cursor-pointer" : "z-10"
                )}
                initial={false}
                animate={{
                  x: xOffset,
                  z: zOffset,
                  scale: scale,
                  rotateY: rotateY,
                  opacity: opacity,
                  filter: `blur(${blur}px) brightness(${brightness})`,
                }}
                transition={{ default: BASE_SPRING, scale: TAP_SPRING }}
                style={{ transformStyle: "preserve-3d" }}
                onClick={() => {
                  if (offset !== 0) setActive((p) => p + offset);
                  else if (item.href) navigate(item.href);
                }}
              >
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="h-full w-full rounded-2xl object-cover pointer-events-none"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
                <div className="absolute inset-0 rounded-2xl bg-black/10 pointer-events-none mix-blend-multiply" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Info & Controls - Strictly stacked vertically for narrow columns */}
        <div className="mx-auto mt-6 flex w-full flex-col items-center justify-between pointer-events-auto px-4">
          <div className="flex flex-col items-center text-center min-h-[140px] justify-start pt-2 mb-2">
            <AnimatePresence mode="wait">
              {activeItem && (
                <motion.div
                  key={activeItem.id}
                  initial={{ opacity: 0, y: 5, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -5, filter: "blur(4px)" }}
                  transition={{ duration: 0.2 }}
                  className="space-y-1.5"
                >
                  {activeItem.meta && (
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#7a2a33] leading-tight block">
                      {activeItem.meta}
                    </span>
                  )}
                  <h2 className="text-[18px] font-bold tracking-tight text-foreground leading-tight">
                    {activeItem.title}
                  </h2>
                  {activeItem.description && (
                    <p className="max-w-[250px] mx-auto text-[11px] text-neutral-500 line-clamp-3 leading-relaxed">
                      {activeItem.description}
                    </p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex flex-col items-center gap-3 w-full">
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="rounded-full p-1.5 text-neutral-500 transition hover:bg-neutral-100 active:scale-95"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <span className="min-w-[40px] text-center text-[11px] font-mono font-bold text-neutral-600">
                {activeIndex + 1} / {count}
              </span>
              <button
                onClick={handleNext}
                className="rounded-full p-1.5 text-neutral-500 transition hover:bg-neutral-100 active:scale-95"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {activeItem?.href && (
              <Link
                to={activeItem.href}
                className="group flex w-full justify-center items-center gap-2 rounded-full bg-white border border-[#7a2a33]/30 text-[#7a2a33] hover:bg-[#7a2a33] hover:text-white px-4 py-2 text-[13px] font-bold transition-all active:scale-95 shadow-sm"
              >
                View Profile
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
