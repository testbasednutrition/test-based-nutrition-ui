import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchSpecialists } from "@/lib/api";
import { type FocusRailItem } from "@/components/ui/focus-rail";
import { MiniFocusRail } from "@/components/ui/mini-focus-rail";
import { Users } from "lucide-react";

export default function PainSpecialistsSlider() {
  const { data: specialists = [], isLoading } = useQuery({
    queryKey: ['specialists'],
    queryFn: fetchSpecialists
  });

  if (isLoading) {
    return (
      <div className="bg-white p-6 lg:p-8 rounded-3xl shadow-sm border border-gray-100 flex items-center justify-center h-[500px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#7a2a33]"></div>
      </div>
    );
  }

  const targetNames = ["Mel Kingdom", "Sara Lovett", "Nannette Shepherd"];
  
  // Try to find them in the specialists data
  const expertItems: FocusRailItem[] = targetNames.map((name, index) => {
    const s = specialists.find(spec => spec.name.toLowerCase() === name.toLowerCase());
    
    if (s) {
      return {
        id: s.slug || `expert-${index}`,
        title: s.name,
        description: s.bio?.[0] || 'Chronic Pain Specialist',
        meta: `${s.category || 'Specialist'} • ${s.role || 'Consultant'}`,
        imageSrc: s.image || "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
        href: `/specialists/${s.slug}`,
      };
    }
    
    // Fallback if not found in db
    const initials = name.split(" ").map(n => n[0]).join("");
    return {
      id: `expert-${index}`,
      title: name,
      description: 'Chronic Pain Specialist',
      meta: 'Pain & Fatigue • Consultant',
      // We will use a placeholder image
      imageSrc: `https://ui-avatars.com/api/?name=${initials}&background=f3f4f6&color=4b5563&size=400`,
      href: "#",
    };
  });

  return (
    <div className="bg-white p-5 lg:p-6 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden shrink-0">
      <h3 className="font-playfair text-[18px] font-bold tracking-wider text-gray-900 mb-6 uppercase text-center xl:text-left flex items-center justify-center xl:justify-start gap-2">
        <Users className="w-5 h-5 text-[#7a2a33]" /> Chronic Pain Specialists
      </h3>
      
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
