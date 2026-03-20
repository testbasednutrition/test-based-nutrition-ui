import { FocusRail, type FocusRailItem } from "@/components/ui/focus-rail";
import { useQuery } from "@tanstack/react-query";
import { fetchSpecialists } from "@/lib/api";

export default function ExpertsFocusRail() {
  const { data: specialists = [], isLoading } = useQuery({
    queryKey: ['specialists'],
    queryFn: fetchSpecialists
  });

  if (isLoading) {
    return (
      <div className="w-full h-[600px] flex items-center justify-center bg-neutral-950">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  // Filter out any specialists that might be missing an image or profile info just in case
  const expertItems: FocusRailItem[] = specialists.map((s, index) => ({
    id: s.slug || `expert-${index}`,
    title: s.name,
    description: s.bio[0] || 'Health & Wellness Expert',
    meta: `${s.category} • ${s.role}`,
    imageSrc: s.image || "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
    href: `/specialists/${s.slug}`,
  }));

  if (expertItems.length === 0) return null;

  return (
    <div className="w-full h-full bg-stone-50/50 py-16 md:py-24 overflow-hidden flex flex-col justify-start">
      <div className="w-full max-w-3xl lg:max-w-none mx-auto px-6 md:px-10 lg:px-12 mb-12 md:mb-16 text-center flex flex-col items-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
          OUR SPECIALISTS
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-playfair font-heading text-foreground mb-4 leading-tight">
          Meet the <br className="hidden sm:block" /> TBN Collective
        </h2>
        <p className="font-montserrat text-[14px] text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Explore our growing network of practitioners, clinicians, pharmacists and performance specialists delivering personalised preventative healthcare through the Test-Based Nutrition approach.
        </p>
      </div>

      <div className="w-full max-w-2xl lg:max-w-none mx-auto px-4 md:px-8">
        <FocusRail 
          items={expertItems} 
          autoPlay={true} 
          interval={4000}
          loop={true} 
        />
      </div>
    </div>
  );
}
