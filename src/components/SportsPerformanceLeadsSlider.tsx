import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchSpecialists } from "@/lib/api";
import { type FocusRailItem } from "@/components/ui/focus-rail";
import { MiniFocusRail } from "@/components/ui/mini-focus-rail";
import { Dumbbell } from "lucide-react";

export default function SportsPerformanceLeadsSlider() {
  const { data: specialists = [], isLoading } = useQuery({
    queryKey: ['specialists'],
    queryFn: fetchSpecialists
  });

  if (isLoading) {
    return (
      <div className="bg-white p-6 lg:p-8 rounded-3xl shadow-sm border border-gray-100 flex items-center justify-center h-[520px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#7a2a33]"></div>
      </div>
    );
  }

  // Filter out any specialists that might be missing an image or profile info
  const expertItems: FocusRailItem[] = specialists.map((s, index) => ({
    id: s.slug || `expert-${index}`,
    title: s.name,
    description: s.bio[0] || 'Sports Performance Specialist',
    meta: `${s.category} • ${s.role}`,
    imageSrc: s.image || "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
    href: `/specialists/${s.slug}`,
  }));

  if (expertItems.length === 0) return null;

  return (
    <div className="bg-white p-5 lg:p-6 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden">
      <h3 className="font-playfair text-[18px] font-bold tracking-wider text-gray-900 mb-6 uppercase text-center xl:text-left flex items-center justify-center xl:justify-start gap-2">
        <Dumbbell className="w-5 h-5 text-[#7a2a33]" /> Sports Specialists
      </h3>
      
      {/* Using the specialized MiniFocusRail for proper sidebar scaling and stacking */}
      <div className="w-full relative -mx-2 sm:mx-0">
        <MiniFocusRail 
          items={expertItems} 
          autoPlay={true} 
          interval={5000}
          loop={true} 
        />
      </div>
    </div>
  );
}
