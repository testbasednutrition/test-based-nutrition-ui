"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

export interface Gallery4Props {
  title?: React.ReactNode | string;
  subtitle?: string;
  description?: string;
  items?: Gallery4Item[];
  compact?: boolean;
}

const data = [
  {
    id: "shadcn-ui",
    title: "shadcn/ui: Building a Modern Component Library",
    description:
      "Explore how shadcn/ui revolutionized React component libraries by providing a unique approach to component distribution and customization, making it easier for developers to build beautiful, accessible applications.",
    href: "https://ui.shadcn.com",
    image:
      "https://images.unsplash.com/photo-1551250928-243dc937c49d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjN8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: "tailwind",
    title: "Tailwind CSS: The Utility-First Revolution",
    description:
      "Discover how Tailwind CSS transformed the way developers style their applications, offering a utility-first approach that speeds up development while maintaining complete design flexibility.",
    href: "https://tailwindcss.com",
    image:
      "https://images.unsplash.com/photo-1551250928-e4a05afaed1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjR8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: "astro",
    title: "Astro: The All-in-One Web Framework",
    description:
      "Learn how Astro's innovative 'Islands Architecture' and zero-JS-by-default approach is helping developers build faster websites while maintaining rich interactivity where needed.",
    href: "https://astro.build",
    image:
      "https://images.unsplash.com/photo-1536735561749-fc87494598cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxNzd8fHx8fHwyfHwxNzIzNjM0NDc0fA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: "react",
    title: "React: Pioneering Component-Based UI",
    description:
      "See how React continues to shape modern web development with its component-based architecture, enabling developers to build complex user interfaces with reusable, maintainable code.",
    href: "https://react.dev",
    image:
      "https://images.unsplash.com/photo-1548324215-9133768e4094?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMzF8fHx8fHwyfHwxNzIzNDM1MzA1fA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: "nextjs",
    title: "Next.js: The React Framework for Production",
    description:
      "Explore how Next.js has become the go-to framework for building full-stack React applications, offering features like server components, file-based routing, and automatic optimization.",
    href: "https://nextjs.org",
    image:
      "https://images.unsplash.com/photo-1550070881-a5d71eda5800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjV8fHx8fHwyfHwxNzIzNDM1Mjk4fA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Gallery4 = ({
  title = "Case Studies",
  subtitle = "What We Treat",
  description = "Discover how leading companies and developers are leveraging modern web technologies to build exceptional digital experiences. These case studies showcase real-world applications and success stories.",
  items = data,
  compact = false,
}: Gallery4Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className={`bg-background text-foreground ${compact ? "pt-12 pb-4 md:pt-16 md:pb-6" : "py-32"}`}>
      <div className="container mx-auto px-4 md:px-6">
        {compact ? (
          <div className="text-center max-w-4xl mx-auto mb-12 flex flex-col items-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
              {subtitle}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-playfair font-heading mb-2">
              {typeof title === 'string' ? (
                <>{title}<span className="text-primary">.</span></>
              ) : (
                title
              )}
            </h2>
            {description && (
              <p className="font-montserrat text-[14px] text-muted-foreground/90 max-w-2xl mx-auto leading-relaxed">
                {description}
              </p>
            )}
          </div>
        ) : (
          <div className="mb-8 flex items-end justify-between md:mb-14 lg:mb-16">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-medium md:text-4xl lg:text-5xl">
                {title}
              </h2>
              <p className="max-w-lg text-muted-foreground">{description}</p>
            </div>
            <div className="hidden shrink-0 gap-2 md:flex">
              <Button
                size="icon"
                variant="outline"
                onClick={() => {
                  carouselApi?.scrollPrev();
                }}
                disabled={!canScrollPrev}
                className="disabled:pointer-events-auto border-border text-foreground hover:bg-secondary"
              >
                <ArrowLeft className="size-5" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                onClick={() => {
                  carouselApi?.scrollNext();
                }}
                disabled={!canScrollNext}
                className="disabled:pointer-events-auto border-border text-foreground hover:bg-secondary"
              >
                <ArrowRight className="size-5" />
              </Button>
            </div>
          </div>
        )}
      </div>
      <div className="w-full">
        {compact ? (
          <div className="container mx-auto px-4 md:px-6">
            <div className={`grid grid-cols-2 gap-3 md:gap-4 lg:gap-4 ${items.length === 5 ? 'lg:grid-cols-5' : 'lg:grid-cols-6'}`}>
              {items.map((item) => (
              <a key={item.id} href={item.href} className="group w-full h-full min-h-[14rem] sm:min-h-[16rem] md:aspect-[3/4] lg:aspect-[4/5] perspective-1000">
                <div className="relative w-full h-full transition-transform duration-700 preserve-3d group-hover:rotate-y-180 cursor-pointer shadow-sm rounded-xl">
                  
                  {/* Front Side */}
                  <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden bg-muted border-b-2 border-primary">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute h-full w-full object-cover object-center transition-transform duration-[2000ms] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-2 md:p-4 flex flex-col justify-end h-full w-full">
                      <div className="font-bold font-montserrat text-xs md:text-sm xl:text-base text-primary-foreground leading-tight text-center w-full break-words px-1">
                        {item.title}
                      </div>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl overflow-hidden bg-[#F3F2EE] border-[0.5px] border-primary/70 px-2.5 md:px-3 pt-3 pb-3 md:pt-4 md:pb-3 flex flex-col items-center justify-between text-center">
                    <div className="font-bold font-montserrat text-[13px] xl:text-[14px] text-stone-900 leading-snug shrink-0">
                      {item.title}
                    </div>
                    <div className="text-[9.5px] md:text-[10.5px] xl:text-[12px] font-montserrat text-stone-800 leading-snug overflow-y-auto w-full px-1 scrollbar-hide py-1">
                      <span className="whitespace-normal break-words">{item.description}</span>
                    </div>
                    <div className="flex items-center text-[9px] xl:text-[10px] font-bold font-montserrat uppercase tracking-wider text-primary hover:text-stone-900 transition-colors w-full justify-center shrink-0">
                      Read more{" "}
                      <ArrowRight className="ml-1 md:ml-2 size-3 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>

                </div>
              </a>
            ))}
            </div>
          </div>
        ) : (
          <Carousel
            setApi={setCarouselApi}
            opts={{
              align: "start",
              breakpoints: {
                "(max-width: 768px)": {
                  dragFree: true,
                },
              },
            }}
          >
            <CarouselContent className="ml-0 md:ml-4 2xl:ml-[max(8rem,calc(50vw-700px))] 2xl:mr-[max(0rem,calc(50vw-700px))]">
              {items.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="pl-[20px] max-w-[320px] lg:max-w-[360px]"
                >
                  <a href={item.href} className="group rounded-xl">
                    <div className="group relative h-full max-w-full overflow-hidden rounded-xl bg-muted min-h-[27rem] md:aspect-[5/4] lg:aspect-[16/9]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 h-full bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 flex flex-col items-start text-primary-foreground p-6 md:p-8">
                        <div className="mb-2 pt-2 font-semibold text-xl md:mb-3 md:pt-4 lg:pt-4">
                          {item.title}
                        </div>
                        <div className="line-clamp-3 text-sm text-primary-foreground/90 mb-8 md:mb-12 lg:mb-9">
                          {item.description}
                        </div>
                        <div className="flex items-center text-xs font-medium uppercase tracking-wider text-primary-foreground/80 hover:text-primary-foreground transition-colors mt-auto">
                          Read more{" "}
                          <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        )}
      </div>
    </section>
  );
};

export { Gallery4 };
