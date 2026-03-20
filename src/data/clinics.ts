export interface Clinic {
  slug: string;
  name: string;
  description: string;
  image: string;
  location: string;
  address: string;
  contactEmail: string;
  contactPhone: string;
  specialties: string[];
  specialistSlugs: string[]; // Ties the clinic to the specialist profiles
}

export const clinics: Clinic[] = [
  {
    slug: "hexagon-health",
    name: "Hexagon Health",
    description: "A lifestyle and longevity clinic providing proactive, personalised care for people seeking clarity about their current health, support with weight, menopause, energy, and metabolic concerns.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
    location: "Cardiff",
    address: "Suite 34, Sophia House, 28 Cathedral Road, Cardiff CF11 9LJ",
    contactEmail: "vhurle@hexagon.health",
    contactPhone: "07815 753332",
    specialties: ["Longevity", "Lifestyle Medicine", "Metabolic Health", "Women's Health"],
    specialistSlugs: ["dr-ishtiaq-rehman"], // Using our mock GP specialist from earlier
  },
  {
    slug: "optimise-performance",
    name: "Optimise Performance",
    description: "Elite performance coaching for Olympic and professional athletes, bringing 25 years of global elite environment experience to dedicated individuals seeking peak physical conditioning.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
    location: "Wirral",
    address: "16 Burlingham Ave, West Kirby, Wirral, CH48 8AP",
    contactEmail: "utsneil@gmail.com",
    contactPhone: "07798 782699",
    specialties: ["Sports Performance", "Rehabilitation", "Strength & Conditioning"],
    specialistSlugs: ["neil-parsley"], 
  },
  {
    slug: "cedar-hall-clinic",
    name: "Cedar Hall Clinic",
    description: "An award-winning clinic specialising in chronic pain, neurology, sports injuries and aesthetic medicine, combining osteopathy, injectable treatments and test-based nutrition.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
    location: "Essex",
    address: "14 Grover Walk, Corringham, Thurrock, Essex, SS17 7 LY",
    contactEmail: "contact@cedarhallclinics.co.uk",
    contactPhone: "01375 678877",
    specialties: ["Osteopathy", "Chronic Pain", "Aesthetic Medicine", "Women's Health"],
    specialistSlugs: [], // Placeholder, can link to others as needed
  },
];

export function getClinicBySlug(slug: string): Clinic | undefined {
  return clinics.find((c) => c.slug === slug);
}
