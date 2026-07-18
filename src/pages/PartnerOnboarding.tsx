import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Circle,
  PlayCircle,
  Building2,
  FileText,
  GraduationCap,
  ClipboardCheck,
  ChevronRight,
  ExternalLink,
  BookOpen,
  Users,
  ShieldCheck,
  Beaker,
  Target,
  Sparkles,
  Check,
  Activity,
  HeartPulse,
} from "lucide-react";

/* ──────────────────────────────────────────────
   STEP DEFINITIONS
   ────────────────────────────────────────────── */
const STEPS = [
  { id: 1, title: "Welcome", icon: PlayCircle },
  { id: 2, title: "Clinic Details", icon: Building2 },
  { id: 3, title: "Practice & Services", icon: HeartPulse },
  { id: 4, title: "Goals & Growth", icon: Target },
  { id: 5, title: "Microsite", icon: FileText },
  { id: 6, title: "Confirm", icon: ClipboardCheck },
] as const;

/* ──────────────────────────────────────────────
   FORM OPTIONS
   ────────────────────────────────────────────── */
const WORK_STYLES = [
  "In clinic",
  "Online",
  "Mobile",
  "Across multiple sites",
];

const CLINIC_TYPES = [
  "Private clinic",
  "Aesthetic clinic",
  "Osteopath",
  "Chiropractor",
  "Physiotherapist",
  "Pharmacy",
  "Vitamin therapy clinic",
  "Nutritionist",
  "Health coach",
  "Health club",
  "Resort / spa",
  "Wellness clinic",
  "Performance clinic",
  "Other",
];

const INTEGRATION_PATHWAYS = [
  "Women’s health",
  "Perimenopause / menopause",
  "Mental wellbeing",
  "Skin health",
  "Pain / inflammation",
  "Fatigue",
  "Gut health",
  "Sports performance",
  "Weight / metabolic health",
  "Hormones",
  "Recovery",
  "Longevity / prevention",
];

const POSTING_FREQUENCIES = [
  "Daily",
  "Weekly",
  "Occasionally",
  "Rarely",
  "Not yet",
];

const PRIORITIES_1TO1 = [
  "Understand how TBN fits into my clinic",
  "Launch or optimise my microsite",
  "Get more customer consultations",
  "Integrate testing into my current services",
  "Create or strengthen a programme",
  "Plan my first workshop or hub day",
  "Improve my launch marketing",
  "Identify local venues or hub partners",
  "Understand partner opportunities",
  "Build recurring income",
  "Other",
];

const TESTING_ROUTES = [
  "Omega Balance Testing",
  "Gut Health Testing",
  "Baseline rapid point-of-care screening",
  "Advanced point-of-care screening",
  "Hub days",
  "Workshops",
  "Programmes",
  "Retesting journeys",
  "Not sure yet",
];

const REVENUE_GROWTH_ROUTES = [
  "Test sales",
  "Product retail",
  "Monthly subscriptions",
  "Retesting journeys",
  "Programmes",
  "Workshops",
  "Testing hub days",
  "Partner referrals",
  "Building a team",
  "Not sure yet",
];

const PROGRAMME_ROUTE_INTERESTS = [
  "1:1 programme",
  "Group programme",
  "Monthly workshop",
  "Testing hub day",
  "Clinic open day",
  "Health club event",
  "Corporate / workplace event",
  "Retest campaign",
  "Membership-style support",
  "Other",
];

const SPECIFIC_PROGRAMMES = [
  "Omega Balance 120-day programme",
  "Gut health programme",
  "Women’s health programme",
  "Perimenopause programme",
  "Skin from within programme",
  "Pain and inflammation programme",
  "Mental wellbeing programme",
  "Performance recovery programme",
  "Metabolic health programme",
  "Other",
];

const MARKETING_HELP_TOPICS = [
  "What to post",
  "Launch campaign",
  "Customer messages",
  "Partner messages",
  "Workshop promotion",
  "Case studies",
  "Compliance wording",
  "Canva assets",
  "Email follow-up",
  "WhatsApp follow-up",
  "Local PR",
  "Google Business",
  "Facebook groups",
  "Microsite optimisation",
  "Other",
];

/* ──────────────────────────────────────────────
   FORM DATA STRUCTURE
   ────────────────────────────────────────────── */
interface OnboardingFormData {
  // Section 1: Clinic Details
  clinicName: string;
  contactName: string;
  roleProfession: string;
  email: string;
  phone: string;
  businessAddress: string;
  website: string;
  bookingLink: string;
  locationServed: string;
  workStyle: string[];
  
  // Section 2: Clinic Type, Services & Programmes
  businessType: string;
  servicesOffered: string;
  bestsellingTreatments: string;
  tbnIntegrationPathways: string[];
  knownForArea: string;
  
  // Section 3 & 4: Online Presence & Marketing Agency
  facebookLink: string;
  instagramHandle: string;
  linkedinPage: string;
  googleBusinessLink: string;
  tiktokYtThreads: string;
  emailDbSize: string;
  whatsappGroup: string;
  postingFrequency: string;
  worksWithAgency: string; // 'Yes', 'No'
  agencyName: string;
  
  // Section 6: What You Want From Your 1:1 Session
  priorities1to1: string[];
  helpNeeded1to1: string;
  
  // Section 7: First Customer Opportunities
  hasIdealCustomers: string; // 'Yes', 'No', 'Not sure yet'
  potentialCustomers: string[];
  idealForOmega: string;
  idealForGut: string;
  idealForPoc: string;
  idealFor120day: string;
  idealForCaseStudy: string;
  
  // Section 8: Consultation Process, CRM & Booking System
  crmSystem: string;
  hasConsultationProcess: string; // 'Yes', 'No'
  useTbnConsultation: string; // 'Yes', 'No', 'Maybe', 'Need to discuss'
  integrationPreference: string;
  
  // Section 9: Testing, Screening & Key Pathways
  testingRoutesPurchased: string[];
  marketingSupportPathways: string[];
  
  // Section 10: Revenue & Fast Start Awareness
  growthRoutesInterest: string[];
  
  // Section 11: Local Hubs, Venues & Partner Opportunities
  localHubsInterest: string; // 'Yes', 'No', 'Not sure yet'
  localVenuesList: string[];
  approachPartnersInterest: string; // 'Yes', 'No', 'Not sure yet'
  approachPartnersList: string[];
  wantsApproachSupport: string; // 'Yes', 'No', 'Maybe'
  
  // Section 12: Programmes, Workshops & Events
  wantsIntegrateProgrammes: string; // 'Yes', 'No', 'Maybe', 'Need support'
  programmeEventRoutes: string[];
  firstProgrammeChoice: string;
  hasLaunchIdea: string; // 'Yes', 'No', 'Maybe'
  launchIdeaDetails: string;
  
  // Section 13: Marketing & Launch Support
  marketingHelpTopics: string[];
  additionalPaidMarketing: string; // 'Yes', 'No', 'Maybe', 'Discuss during 1:1'
}

const emptyForm: OnboardingFormData = {
  clinicName: "",
  contactName: "",
  roleProfession: "",
  email: "",
  phone: "",
  businessAddress: "",
  website: "",
  bookingLink: "",
  locationServed: "",
  workStyle: [],
  
  businessType: "",
  servicesOffered: "",
  bestsellingTreatments: "",
  tbnIntegrationPathways: [],
  knownForArea: "",
  
  facebookLink: "",
  instagramHandle: "",
  linkedinPage: "",
  googleBusinessLink: "",
  tiktokYtThreads: "",
  emailDbSize: "",
  whatsappGroup: "",
  postingFrequency: "",
  worksWithAgency: "",
  agencyName: "",
  
  priorities1to1: [],
  helpNeeded1to1: "",
  
  hasIdealCustomers: "",
  potentialCustomers: ["", "", "", "", ""],
  idealForOmega: "",
  idealForGut: "",
  idealForPoc: "",
  idealFor120day: "",
  idealForCaseStudy: "",
  
  crmSystem: "",
  hasConsultationProcess: "",
  useTbnConsultation: "",
  integrationPreference: "",
  
  testingRoutesPurchased: [],
  marketingSupportPathways: [],
  
  growthRoutesInterest: [],
  
  localHubsInterest: "",
  localVenuesList: ["", "", "", "", ""],
  approachPartnersInterest: "",
  approachPartnersList: ["", "", "", "", ""],
  wantsApproachSupport: "",
  
  wantsIntegrateProgrammes: "",
  programmeEventRoutes: [],
  firstProgrammeChoice: "",
  hasLaunchIdea: "",
  launchIdeaDetails: "",
  
  marketingHelpTopics: [],
  additionalPaidMarketing: "",
};

/* ──────────────────────────────────────────────
   ANIMATION CONFIGS
   ────────────────────────────────────────────── */
const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 100 : -100, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -100 : 100, opacity: 0 }),
};

/* ──────────────────────────────────────────────
   MAIN CONTAINER
   ────────────────────────────────────────────── */
export default function PartnerOnboarding() {
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [formData, setFormData] = useState<OnboardingFormData>(emptyForm);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());
  const [listingMarkedDone, setListingMarkedDone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [draftId, setDraftId] = useState<string | null>(null);
  const [isSavingDraft, setIsSavingDraft] = useState(false);

  // Load draft from URL parameters or localStorage on mount
  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const draftParam = params.get("draft");
    if (draftParam) {
      setDraftId(draftParam);
      loadDraft(draftParam);
    } else {
      const storedDraft = localStorage.getItem("tbn_onboarding_draft_id");
      if (storedDraft) {
        setDraftId(storedDraft);
        loadDraft(storedDraft);
      }
    }
  }, []);

  const loadDraft = async (id: string) => {
    try {
      const { data, error } = await supabase
        .from("partner_onboarding")
        .select("*")
        .eq("id", id)
        .maybeSingle();

      if (error) throw error;

      if (data) {
        setFormData({
          clinicName: data.clinic_name || "",
          contactName: data.contact_name || "",
          roleProfession: data.role_profession || "",
          email: data.email || "",
          phone: data.phone || "",
          businessAddress: data.business_address || "",
          website: data.website || "",
          bookingLink: data.booking_link || "",
          locationServed: data.location_served || "",
          workStyle: data.work_style || [],

          businessType: data.business_type || "",
          servicesOffered: data.services_offered || "",
          bestsellingTreatments: data.bestselling_treatments || "",
          tbnIntegrationPathways: data.tbn_integration_pathways || [],
          knownForArea: data.known_for_area || "",

          facebookLink: data.social_links?.facebook || "",
          instagramHandle: data.social_links?.instagram || "",
          linkedinPage: data.social_links?.linkedin || "",
          googleBusinessLink: data.social_links?.google_business || "",
          tiktokYtThreads: data.social_links?.tiktok_yt_threads || "",
          emailDbSize: data.social_links?.email_db_size || "",
          whatsappGroup: data.social_links?.whatsapp_group || "",
          postingFrequency: data.posting_frequency || "",
          worksWithAgency: data.works_with_agency ? "Yes" : "No",
          agencyName: data.agency_name || "",

          priorities1to1: data.priorities_1to1 || [],
          helpNeeded1to1: data.help_needed_1to1 || "",

          hasIdealCustomers: data.has_ideal_customers || "",
          potentialCustomers: data.potential_customers && data.potential_customers.length === 5 
            ? data.potential_customers 
            : [...(data.potential_customers || []), "", "", "", "", ""].slice(0, 5),
          idealForOmega: data.ideal_for_omega || "",
          idealForGut: data.ideal_for_gut || "",
          idealForPoc: data.ideal_for_poc || "",
          idealFor120day: data.ideal_for_120day || "",
          idealForCaseStudy: data.ideal_for_casestudy || "",

          crmSystem: data.crm_system || "",
          hasConsultationProcess: data.has_consultation_process ? "Yes" : "No",
          useTbnConsultation: data.use_tbn_consultation || "",
          integrationPreference: data.integration_preference || "",

          testingRoutesPurchased: data.testing_routes_purchased || [],
          marketingSupportPathways: data.marketing_support_pathways || [],
          growthRoutesInterest: data.growth_routes_interest || [],

          localHubsInterest: data.local_hubs_interest || "",
          localVenuesList: data.local_venues_list && data.local_venues_list.length === 5 
            ? data.local_venues_list 
            : [...(data.local_venues_list || []), "", "", "", "", ""].slice(0, 5),
          approachPartnersInterest: data.approach_partners_interest || "",
          approachPartnersList: data.approach_partners_list && data.approach_partners_list.length === 5 
            ? data.approach_partners_list 
            : [...(data.approach_partners_list || []), "", "", "", "", ""].slice(0, 5),
          wantsApproachSupport: data.wants_approach_support || "",

          wantsIntegrateProgrammes: data.wants_integrate_programmes || "",
          programmeEventRoutes: data.programme_event_routes || [],
          firstProgrammeChoice: data.first_programme_choice || "",
          hasLaunchIdea: data.has_launch_idea || "",
          launchIdeaDetails: data.launch_idea_details || "",

          marketingHelpTopics: data.marketing_help_topics || [],
          additionalPaidMarketing: data.additional_paid_marketing || "",
        });
        
        if (data.listing_form_completed) {
          setListingMarkedDone(true);
        }

        // Restore to details step on load
        setCurrentStep(2);
        toast.success("Saved draft found and restored!");
      }
    } catch (err) {
      console.warn("Failed to load onboarding draft:", err);
    }
  };

  const autoSaveDraft = async (idToUse?: string) => {
    if (!isStep2Valid) return; // Cannot save without clinic_name, contact_name, email

    setIsSavingDraft(true);
    const activeId = idToUse || draftId;
    try {
      const payload = {
        clinic_name: formData.clinicName,
        contact_name: formData.contactName,
        role_profession: formData.roleProfession || null,
        email: formData.email,
        phone: formData.phone || null,
        business_address: formData.businessAddress || null,
        website: formData.website || null,
        booking_link: formData.bookingLink || null,
        location_served: formData.locationServed || null,
        work_style: formData.workStyle,

        business_type: formData.businessType || null,
        services_offered: formData.servicesOffered || null,
        bestselling_treatments: formData.bestsellingTreatments || null,
        tbn_integration_pathways: formData.tbnIntegrationPathways,
        known_for_area: formData.knownForArea || null,

        social_links: {
          facebook: formData.facebookLink,
          instagram: formData.instagramHandle,
          linkedin: formData.linkedinPage,
          google_business: formData.googleBusinessLink,
          tiktok_yt_threads: formData.tiktokYtThreads,
          whatsapp_group: formData.whatsappGroup,
          email_db_size: formData.emailDbSize,
        },
        posting_frequency: formData.postingFrequency || null,
        works_with_agency: formData.worksWithAgency === "Yes",
        agency_name: formData.agencyName || null,

        priorities_1to1: formData.priorities1to1,
        help_needed_1to1: formData.helpNeeded1to1 || null,

        has_ideal_customers: formData.hasIdealCustomers || null,
        potential_customers: formData.potentialCustomers.filter(s => s.trim() !== ""),
        ideal_for_omega: formData.idealForOmega || null,
        ideal_for_gut: formData.idealForGut || null,
        ideal_for_poc: formData.idealForPoc || null,
        ideal_for_120day: formData.idealFor120day || null,
        ideal_for_casestudy: formData.idealForCaseStudy || null,

        crm_system: formData.crmSystem || null,
        has_consultation_process: formData.hasConsultationProcess === "Yes",
        use_tbn_consultation: formData.useTbnConsultation || null,
        integration_preference: formData.integrationPreference || null,

        testing_routes_purchased: formData.testingRoutesPurchased,
        marketing_support_pathways: formData.marketingSupportPathways,
        growth_routes_interest: formData.growthRoutesInterest,

        local_hubs_interest: formData.localHubsInterest || null,
        local_venues_list: formData.localVenuesList.filter(s => s.trim() !== ""),
        approach_partners_interest: formData.approachPartnersInterest || null,
        approach_partners_list: formData.approachPartnersList.filter(s => s.trim() !== ""),
        wants_approach_support: formData.wantsApproachSupport || null,

        wants_integrate_programmes: formData.wantsIntegrateProgrammes || null,
        programme_event_routes: formData.programmeEventRoutes,
        first_programme_choice: formData.firstProgrammeChoice || null,
        has_launch_idea: formData.hasLaunchIdea || null,
        launch_idea_details: formData.launchIdeaDetails || null,

        marketing_help_topics: formData.marketingHelpTopics,
        additional_paid_marketing: formData.additionalPaidMarketing || null,
        
        listing_form_completed: listingMarkedDone,
      };

      if (activeId) {
        const { error } = await supabase
          .from("partner_onboarding")
          .update(payload)
          .eq("id", activeId);
        if (error) throw error;
      } else {
        const { data, error } = await supabase
          .from("partner_onboarding")
          .insert([payload])
          .select("id")
          .single();
        if (error) throw error;
        
        if (data?.id) {
          setDraftId(data.id);
          localStorage.setItem("tbn_onboarding_draft_id", data.id);
          const newUrl = `${window.location.origin}${window.location.pathname}?draft=${data.id}`;
          window.history.replaceState({ path: newUrl }, "", newUrl);
        }
      }
    } catch (err) {
      console.warn("Failed to auto-save draft:", err);
    } finally {
      setIsSavingDraft(false);
    }
  };

  const goTo = (step: number) => {
    if (step < 1 || step > 6) return;
    setDirection(step > currentStep ? 1 : -1);
    setCurrentStep(step);
  };

  const next = async () => {
    setCompletedSteps((prev) => new Set(prev).add(currentStep));
    if (currentStep >= 2) {
      await autoSaveDraft();
    }
    goTo(currentStep + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const prev = () => {
    goTo(currentStep - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const updateForm = (field: keyof OnboardingFormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleArrayItem = (field: keyof OnboardingFormData, item: string) => {
    const arr = (formData[field] as string[]) || [];
    if (arr.includes(item)) {
      updateForm(field, arr.filter((x) => x !== item));
    } else {
      updateForm(field, [...arr, item]);
    }
  };

  const handleListChange = (field: "potentialCustomers" | "localVenuesList" | "approachPartnersList", index: number, val: string) => {
    const list = [...(formData[field] as string[])];
    list[index] = val;
    updateForm(field, list);
  };

  const isStep2Valid =
    formData.clinicName.trim() !== "" &&
    formData.contactName.trim() !== "" &&
    formData.email.trim() !== "";

  /* ──── DATABASE SUBMISSION ──── */
  const handleFinalSubmit = async () => {
    setIsSubmitting(true);
    try {
      const socialLinksJson = {
        facebook: formData.facebookLink,
        instagram: formData.instagramHandle,
        linkedin: formData.linkedinPage,
        google_business: formData.googleBusinessLink,
        tiktok_yt_threads: formData.tiktokYtThreads,
        whatsapp_group: formData.whatsappGroup,
        email_db_size: formData.emailDbSize,
      };

      const crmDetailsJson = {
        crm_system: formData.crmSystem,
        has_consultation_process: formData.hasConsultationProcess === "Yes",
        use_tbn_consultation: formData.useTbnConsultation,
        integration_preference: formData.integrationPreference,
      };

      const firstCustomersJson = {
        has_ideal_customers: formData.hasIdealCustomers,
        potential_customers: formData.potentialCustomers.filter((s) => s.trim() !== ""),
        ideal_for_omega: formData.idealForOmega,
        ideal_for_gut: formData.idealForGut,
        ideal_for_poc: formData.idealForPoc,
        ideal_for_120day: formData.idealFor120day,
        ideal_for_casestudy: formData.idealForCaseStudy,
      };

      const localHubsJson = {
        local_hubs_interest: formData.localHubsInterest,
        local_venues_list: formData.localVenuesList.filter((s) => s.trim() !== ""),
        approach_partners_interest: formData.approachPartnersInterest,
        approach_partners_list: formData.approachPartnersList.filter((s) => s.trim() !== ""),
        wants_approach_support: formData.wantsApproachSupport,
      };

      const programmesJson = {
        wants_integrate_programmes: formData.wantsIntegrateProgrammes,
        programme_event_routes: formData.programmeEventRoutes,
        first_programme_choice: formData.firstProgrammeChoice,
        has_launch_idea: formData.hasLaunchIdea,
        launch_idea_details: formData.launchIdeaDetails,
      };

      const payload = {
        clinic_name: formData.clinicName,
        contact_name: formData.contactName,
        role_profession: formData.roleProfession || null,
        email: formData.email,
        phone: formData.phone || null,
        business_address: formData.businessAddress || null,
        website: formData.website || null,
        booking_link: formData.bookingLink || null,
        location_served: formData.locationServed || null,
        work_style: formData.workStyle,
        
        business_type: formData.businessType,
        services_offered: formData.servicesOffered || null,
        bestselling_treatments: formData.bestsellingTreatments || null,
        tbn_integration_pathways: formData.tbnIntegrationPathways,
        known_for_area: formData.knownForArea || null,
        
        social_links: socialLinksJson,
        posting_frequency: formData.postingFrequency || null,
        works_with_agency: formData.worksWithAgency === "Yes",
        agency_name: formData.agencyName || null,
        
        priorities_1to1: formData.priorities1to1,
        help_needed_1to1: formData.helpNeeded1to1 || null,
        
        has_ideal_customers: formData.hasIdealCustomers || null,
        potential_customers: firstCustomersJson.potential_customers,
        ideal_for_omega: formData.idealForOmega || null,
        ideal_for_gut: formData.idealForGut || null,
        ideal_for_poc: formData.idealForPoc || null,
        ideal_for_120day: formData.idealFor120day || null,
        ideal_for_casestudy: formData.idealForCaseStudy || null,
        
        crm_system: formData.crmSystem || null,
        has_consultation_process: formData.hasConsultationProcess === "Yes",
        use_tbn_consultation: formData.useTbnConsultation || null,
        integration_preference: formData.integrationPreference || null,
        
        testing_routes_purchased: formData.testingRoutesPurchased,
        marketing_support_pathways: formData.marketingSupportPathways,
        
        growth_routes_interest: formData.growthRoutesInterest,
        
        local_hubs_interest: localHubsJson.local_hubs_interest || null,
        local_venues_list: localHubsJson.local_venues_list,
        approach_partners_interest: localHubsJson.approach_partners_interest || null,
        approach_partners_list: localHubsJson.approach_partners_list,
        wants_approach_support: localHubsJson.wants_approach_support || null,
        
        wants_integrate_programmes: programmesJson.wants_integrate_programmes || null,
        programme_event_routes: programmesJson.programme_event_routes,
        first_programme_choice: programmesJson.first_programme_choice || null,
        has_launch_idea: programmesJson.has_launch_idea || null,
        launch_idea_details: programmesJson.launch_idea_details || null,
        
        marketing_help_topics: formData.marketingHelpTopics,
        additional_paid_marketing: formData.additionalPaidMarketing || null,
        
        listing_form_completed: listingMarkedDone,
        completed_at: new Date().toISOString(),
      };

      let error;
      if (draftId) {
        const res = await supabase
          .from("partner_onboarding")
          .update(payload)
          .eq("id", draftId);
        error = res.error;
      } else {
        const res = await supabase
          .from("partner_onboarding")
          .insert([payload]);
        error = res.error;
      }

      if (error) throw error;

      localStorage.removeItem("tbn_onboarding_draft_id");
      setCompletedSteps((prev) => new Set(prev).add(6));
      setIsComplete(true);
      toast.success("Clinic Onboarding Form submitted successfully!");
    } catch (err) {
      console.warn("Supabase onboarding submission error:", err);
      toast.error("Database submission failed. Please try again or contact support.");
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ──────────────────────────────────────────────
     STEP COMPONENTS
     ────────────────────────────────────────────── */

  /* STEP 1: Welcome */
  const renderWelcomeStep = () => (
    <div className="flex flex-col gap-6">
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a1a2e] to-[#16213e] aspect-[21/9] flex items-center justify-center">
        <img
          src="/images/partner-hero-2.jpg"
          alt="TBN Integration"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 text-center px-4">
          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mx-auto mb-2">
            <PlayCircle className="w-6 h-6 text-white" />
          </div>
          <p className="text-white/90 text-xs font-montserrat uppercase tracking-widest font-semibold">
            TBN Integration Video Walkthrough
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-2xl md:text-3xl font-playfair font-bold text-foreground">
          TBN Clinic Onboarding Form
        </h2>
        <p className="text-[#9f1e13] font-semibold text-sm uppercase tracking-wider font-montserrat">
          To complete before your 1:1 clinic integration session
        </p>
        <p className="text-muted-foreground leading-relaxed text-sm">
          Before your 1:1 clinic integration session, please complete this short onboarding form so we can understand your clinic, current services, best-selling treatments, key client pathways, local opportunities, and microsite needs.
        </p>
        <p className="text-muted-foreground leading-relaxed text-sm">
          This will help us prepare your personalised clinic integration plan and make your 1:1 session practical, focused, and action-led.
        </p>
      </div>

      <div className="p-4 rounded-xl bg-secondary/30 border border-border/40">
        <p className="text-xs text-muted-foreground leading-relaxed">
          💡 Your current onboarding form already includes the microsite setup and 120-day launch planning foundation; this version has been streamlined into a clinic-focused pre-integration form.
        </p>
      </div>

      <Button
        onClick={next}
        size="lg"
        className="w-full bg-[#9f1e13] hover:bg-[#9f1e13]/90 text-white rounded-full cursor-pointer h-12 text-sm font-semibold"
      >
        Get Started <ArrowRight className="ml-2 w-4 h-4" />
      </Button>
    </div>
  );

  /* STEP 2: Clinic Details */
  const renderDetailsStep = () => (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-playfair font-bold text-foreground">1. Clinic Details & Online Presence</h2>
        <p className="text-muted-foreground text-xs mt-1">Please provide your core business details and online channels.</p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xs font-bold text-[#9f1e13] uppercase tracking-wider border-b border-border pb-1">Section 1: Contact Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-[11px] font-bold uppercase tracking-wider text-foreground">Clinic / Company Name *</label>
            <Input
              value={formData.clinicName}
              onChange={(e) => updateForm("clinicName", e.target.value)}
              placeholder="e.g. Health & Longevity Clinic"
              className="h-10 text-sm"
            />
          </div>
          <div className="space-y-1">
            <label className="text-[11px] font-bold uppercase tracking-wider text-foreground">Primary Contact Name *</label>
            <Input
              value={formData.contactName}
              onChange={(e) => updateForm("contactName", e.target.value)}
              placeholder="e.g. Dr. Sarah Mitchell"
              className="h-10 text-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-[11px] font-bold uppercase tracking-wider text-foreground">Role / Profession</label>
            <Input
              value={formData.roleProfession}
              onChange={(e) => updateForm("roleProfession", e.target.value)}
              placeholder="e.g. Clinical Nutritionist"
              className="h-10 text-sm"
            />
          </div>
          <div className="space-y-1">
            <label className="text-[11px] font-bold uppercase tracking-wider text-foreground">Email Address *</label>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => updateForm("email", e.target.value)}
              placeholder="e.g. contact@yourclinic.com"
              className="h-10 text-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-[11px] font-bold uppercase tracking-wider text-foreground">Phone Number</label>
            <Input
              value={formData.phone}
              onChange={(e) => updateForm("phone", e.target.value)}
              placeholder="e.g. +44 20 7946 0958"
              className="h-10 text-sm"
            />
          </div>
          <div className="space-y-1">
            <label className="text-[11px] font-bold uppercase tracking-wider text-foreground">Main Location / Area Served</label>
            <Input
              value={formData.locationServed}
              onChange={(e) => updateForm("locationServed", e.target.value)}
              placeholder="e.g. London / Kensington"
              className="h-10 text-sm"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-[11px] font-bold uppercase tracking-wider text-foreground">Business Address</label>
          <Textarea
            value={formData.businessAddress}
            onChange={(e) => updateForm("businessAddress", e.target.value)}
            placeholder="Complete postal address"
            className="min-h-[60px] text-sm resize-none"
          />
        </div>

        <div className="space-y-2">
          <label className="text-[11px] font-bold uppercase tracking-wider text-foreground">Do you work?</label>
          <div className="flex flex-wrap gap-2">
            {WORK_STYLES.map((style) => {
              const active = formData.workStyle.includes(style);
              return (
                <button
                  key={style}
                  type="button"
                  onClick={() => toggleArrayItem("workStyle", style)}
                  className={`cursor-pointer px-3 py-1.5 rounded-full border text-xs font-semibold transition-all ${
                    active
                      ? "border-[#9f1e13] bg-[#9f1e13]/5 text-[#9f1e13]"
                      : "border-border text-muted-foreground hover:bg-secondary"
                  }`}
                >
                  {active ? "✓ " : ""}{style}
                </button>
              );
            })}
          </div>
        </div>

        <h3 className="text-xs font-bold text-[#9f1e13] uppercase tracking-wider border-b border-border pb-1 pt-3">Section 3: Online Presence</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-[11px] font-bold uppercase tracking-wider text-foreground">Website URL</label>
            <Input
              value={formData.website}
              onChange={(e) => updateForm("website", e.target.value)}
              placeholder="https://yourclinic.com"
              className="h-10 text-sm"
            />
          </div>
          <div className="space-y-1">
            <label className="text-[11px] font-bold uppercase tracking-wider text-foreground">Booking System Link</label>
            <Input
              value={formData.bookingLink}
              onChange={(e) => updateForm("bookingLink", e.target.value)}
              placeholder="https://calendly.com/yourclinic"
              className="h-10 text-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-1">
            <label className="text-[11px] font-bold uppercase tracking-wider text-foreground">Facebook Link</label>
            <Input
              value={formData.facebookLink}
              onChange={(e) => updateForm("facebookLink", e.target.value)}
              placeholder="facebook.com/username"
              className="h-9 text-xs"
            />
          </div>
          <div className="space-y-1">
            <label className="text-[11px] font-bold uppercase tracking-wider text-foreground">Instagram Handle</label>
            <Input
              value={formData.instagramHandle}
              onChange={(e) => updateForm("instagramHandle", e.target.value)}
              placeholder="@username"
              className="h-9 text-xs"
            />
          </div>
          <div className="space-y-1">
            <label className="text-[11px] font-bold uppercase tracking-wider text-foreground">LinkedIn Page</label>
            <Input
              value={formData.linkedinPage}
              onChange={(e) => updateForm("linkedinPage", e.target.value)}
              placeholder="linkedin.com/company/username"
              className="h-9 text-xs"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-[11px] font-bold uppercase tracking-wider text-foreground">Google Business Profile Link</label>
            <Input
              value={formData.googleBusinessLink}
              onChange={(e) => updateForm("googleBusinessLink", e.target.value)}
              placeholder="Google Maps / Business Link"
              className="h-9 text-xs"
            />
          </div>
          <div className="space-y-1">
            <label className="text-[11px] font-bold uppercase tracking-wider text-foreground">TikTok / YouTube / Threads Link</label>
            <Input
              value={formData.tiktokYtThreads}
              onChange={(e) => updateForm("tiktokYtThreads", e.target.value)}
              placeholder="Other platforms"
              className="h-9 text-xs"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-[11px] font-bold uppercase tracking-wider text-foreground">Email Database / Newsletter Size</label>
            <Input
              value={formData.emailDbSize}
              onChange={(e) => updateForm("emailDbSize", e.target.value)}
              placeholder="e.g. 1,500 active contacts"
              className="h-10 text-sm"
            />
          </div>
          <div className="space-y-1">
            <label className="text-[11px] font-bold uppercase tracking-wider text-foreground">WhatsApp Broadcast / Client Group</label>
            <Input
              value={formData.whatsappGroup}
              onChange={(e) => updateForm("whatsappGroup", e.target.value)}
              placeholder="e.g. Yes, 200 members in community group"
              className="h-10 text-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold uppercase tracking-wider text-foreground font-montserrat">Do you currently post regularly?</label>
            <div className="flex flex-wrap gap-1.5">
              {POSTING_FREQUENCIES.map((freq) => (
                <button
                  key={freq}
                  type="button"
                  onClick={() => updateForm("postingFrequency", freq)}
                  className={`cursor-pointer px-2.5 py-1 text-[11px] font-semibold rounded-md border ${
                    formData.postingFrequency === freq
                      ? "border-[#9f1e13] bg-[#9f1e13]/5 text-[#9f1e13]"
                      : "border-border text-muted-foreground hover:bg-secondary"
                  }`}
                >
                  {freq}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[11px] font-bold uppercase tracking-wider text-foreground font-montserrat">Working with a Marketing Agency?</label>
            <div className="flex gap-3">
              {["Yes", "No"].map((choice) => (
                <button
                  key={choice}
                  type="button"
                  onClick={() => updateForm("worksWithAgency", choice)}
                  className={`cursor-pointer px-4 py-1 text-[11px] font-bold uppercase tracking-wider rounded border ${
                    formData.worksWithAgency === choice
                      ? "border-[#9f1e13] bg-[#9f1e13]/5 text-[#9f1e13]"
                      : "border-border text-muted-foreground hover:bg-secondary"
                  }`}
                >
                  {choice}
                </button>
              ))}
            </div>
            {formData.worksWithAgency === "Yes" && (
              <Input
                value={formData.agencyName}
                onChange={(e) => updateForm("agencyName", e.target.value)}
                placeholder="Agency Name"
                className="h-9 text-xs mt-1.5"
              />
            )}
          </div>
        </div>
      </div>

      <div className="flex gap-3 pt-3 border-t border-border mt-4">
        <Button
          onClick={prev}
          variant="outline"
          className="flex-1 h-11 rounded-full cursor-pointer border-border"
        >
          <ArrowLeft className="mr-2 w-4 h-4" /> Back
        </Button>
        <Button
          onClick={next}
          disabled={!isStep2Valid}
          className="flex-1 h-11 rounded-full cursor-pointer bg-[#9f1e13] hover:bg-[#9f1e13]/90 text-white disabled:opacity-40"
        >
          Continue <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </div>
  );

  /* STEP 3: Practice & Services */
  const renderServicesStep = () => (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-playfair font-bold text-foreground">2. Clinic Type, Services & Testing</h2>
        <p className="text-muted-foreground text-xs mt-1">Let's look at your current business type, best-sellers, and integration plans.</p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xs font-bold text-[#9f1e13] uppercase tracking-wider border-b border-border pb-1">Section 2: Clinic Profile</h3>
        
        <div className="space-y-2">
          <label className="text-[11px] font-bold uppercase tracking-wider text-foreground">Which best describes your business?</label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {CLINIC_TYPES.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => updateForm("businessType", type)}
                className={`cursor-pointer px-3 py-2 rounded-lg border text-left text-xs font-semibold transition-all ${
                  formData.businessType === type
                    ? "border-[#9f1e13] bg-[#9f1e13]/5 text-[#9f1e13]"
                    : "border-border text-muted-foreground hover:bg-secondary"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-[11px] font-bold uppercase tracking-wider text-foreground">What services do you currently offer?</label>
          <Textarea
            value={formData.servicesOffered}
            onChange={(e) => updateForm("servicesOffered", e.target.value)}
            placeholder="Describe your current therapeutic, screening, or diagnostic services..."
            className="min-h-[60px] text-sm resize-none"
          />
        </div>

        <div className="space-y-1">
          <label className="text-[11px] font-bold uppercase tracking-wider text-foreground">What are your best-selling treatments, services or programmes?</label>
          <Textarea
            value={formData.bestsellingTreatments}
            onChange={(e) => updateForm("bestsellingTreatments", e.target.value)}
            placeholder="e.g. 1:1 hormone balancing package, bespoke nutrition consultations..."
            className="min-h-[60px] text-sm resize-none"
          />
        </div>

        <div className="space-y-2">
          <label className="text-[11px] font-bold uppercase tracking-wider text-foreground">What treatments or programmes could TBN testing be integrated into?</label>
          <p className="text-[10px] text-muted-foreground italic mb-1">Select all that apply:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {INTEGRATION_PATHWAYS.map((path) => {
              const active = formData.tbnIntegrationPathways.includes(path);
              return (
                <button
                  key={path}
                  type="button"
                  onClick={() => toggleArrayItem("tbnIntegrationPathways", path)}
                  className={`cursor-pointer px-3 py-2 rounded-lg border text-left text-[11px] font-semibold transition-all leading-tight ${
                    active
                      ? "border-[#9f1e13] bg-[#9f1e13]/5 text-[#9f1e13]"
                      : "border-border text-muted-foreground hover:bg-secondary"
                  }`}
                >
                  {active ? "✓ " : ""}{path}
                </button>
              );
            })}
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-[11px] font-bold uppercase tracking-wider text-foreground">Which area would you most like to become known for?</label>
          <Input
            value={formData.knownForArea}
            onChange={(e) => updateForm("knownForArea", e.target.value)}
            placeholder="e.g. The leading gut health clinic in Manchester"
            className="h-10 text-sm"
          />
        </div>

        <h3 className="text-xs font-bold text-[#9f1e13] uppercase tracking-wider border-b border-border pb-1 pt-3">Section 8: Consultation & Booking</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-[11px] font-bold uppercase tracking-wider text-foreground">Current Booking system / CRM Software</label>
            <Input
              value={formData.crmSystem}
              onChange={(e) => updateForm("crmSystem", e.target.value)}
              placeholder="e.g. Cliniko, Jane, Halaxy, Mindbody"
              className="h-10 text-sm"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[11px] font-bold uppercase tracking-wider text-foreground">Do you have a consultation/intake form?</label>
            <div className="flex gap-3">
              {["Yes", "No"].map((choice) => (
                <button
                  key={choice}
                  type="button"
                  onClick={() => updateForm("hasConsultationProcess", choice)}
                  className={`cursor-pointer px-4 py-1 text-[11px] font-bold uppercase tracking-wider rounded border ${
                    formData.hasConsultationProcess === choice
                      ? "border-[#9f1e13] bg-[#9f1e13]/5 text-[#9f1e13]"
                      : "border-border text-muted-foreground hover:bg-secondary"
                  }`}
                >
                  {choice}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold uppercase tracking-wider text-foreground font-montserrat">Would you like to use TBN consultation process?</label>
            <div className="flex flex-wrap gap-1.5">
              {["Yes", "No", "Maybe", "Need to discuss"].map((choice) => (
                <button
                  key={choice}
                  type="button"
                  onClick={() => updateForm("useTbnConsultation", choice)}
                  className={`cursor-pointer px-2.5 py-1 text-[11px] font-semibold rounded-md border ${
                    formData.useTbnConsultation === choice
                      ? "border-[#9f1e13] bg-[#9f1e13]/5 text-[#9f1e13]"
                      : "border-border text-muted-foreground hover:bg-secondary"
                  }`}
                >
                  {choice}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[11px] font-bold uppercase tracking-wider text-foreground">Preferred booking flow integration:</label>
            <select
              value={formData.integrationPreference}
              onChange={(e) => updateForm("integrationPreference", e.target.value)}
              className="w-full h-9 rounded border border-border bg-white px-2.5 text-xs text-foreground focus-visible:ring-[#9f1e13]/30"
            >
              <option value="">-- Choose Option --</option>
              <option value="Use TBN booking system & consultation form">Use the TBN booking system and consultation form</option>
              <option value="Integrate TBN consultation form into current process">Integrate the TBN consultation form into your current process</option>
              <option value="Use own booking system but align TBN questions">Use your own booking system but align the consultation questions with TBN</option>
              <option value="Discuss options during 1:1">Discuss the best option during the 1:1</option>
            </select>
          </div>
        </div>

        <h3 className="text-xs font-bold text-[#9f1e13] uppercase tracking-wider border-b border-border pb-1 pt-3">Section 9: Testing Routes & Pathways</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-[11px] font-bold uppercase tracking-wider text-foreground">Which TBN routes have you purchased or plan to offer?</label>
            <div className="flex flex-col gap-1">
              {TESTING_ROUTES.map((route) => {
                const active = formData.testingRoutesPurchased.includes(route);
                return (
                  <button
                    key={route}
                    type="button"
                    onClick={() => toggleArrayItem("testingRoutesPurchased", route)}
                    className={`cursor-pointer px-3 py-1.5 rounded border text-left text-xs font-medium transition-all ${
                      active
                        ? "border-[#9f1e13] bg-[#9f1e13]/5 text-[#9f1e13]"
                        : "border-border text-muted-foreground hover:bg-secondary"
                    }`}
                  >
                    {active ? "✓ " : ""}{route}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[11px] font-bold uppercase tracking-wider text-foreground">Which key pathways do you want marketing support for first?</label>
            <div className="flex flex-col gap-1">
              {INTEGRATION_PATHWAYS.map((pathway) => {
                const active = formData.marketingSupportPathways.includes(pathway);
                return (
                  <button
                    key={pathway}
                    type="button"
                    onClick={() => toggleArrayItem("marketingSupportPathways", pathway)}
                    className={`cursor-pointer px-3 py-1.5 rounded border text-left text-xs font-medium transition-all ${
                      active
                        ? "border-[#9f1e13] bg-[#9f1e13]/5 text-[#9f1e13]"
                        : "border-border text-muted-foreground hover:bg-secondary"
                    }`}
                  >
                    {active ? "✓ " : ""}{pathway}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-3 pt-3 border-t border-border mt-4">
        <Button
          onClick={prev}
          variant="outline"
          className="flex-1 h-11 rounded-full cursor-pointer border-border"
        >
          <ArrowLeft className="mr-2 w-4 h-4" /> Back
        </Button>
        <Button
          onClick={next}
          className="flex-1 h-11 rounded-full cursor-pointer bg-[#9f1e13] hover:bg-[#9f1e13]/90 text-white"
        >
          Continue <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </div>
  );

  /* STEP 4: Goals & Growth */
  const renderGoalsStep = () => (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-playfair font-bold text-foreground">3. Integration Goals, Launch & Revenue</h2>
        <p className="text-muted-foreground text-xs mt-1">Specify what you want to achieve Commercial-wise and during your 1:1 integration.</p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xs font-bold text-[#9f1e13] uppercase tracking-wider border-b border-border pb-1">Section 6: Integration Priorities</h3>
        
        <div className="space-y-2">
          <label className="text-[11px] font-bold uppercase tracking-wider text-foreground">What would make your 1:1 session most valuable?</label>
          <p className="text-[10px] text-muted-foreground italic mb-1">Choose your top priorities:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {PRIORITIES_1TO1.map((p) => {
              const active = formData.priorities1to1.includes(p);
              return (
                <button
                  key={p}
                  type="button"
                  onClick={() => toggleArrayItem("priorities1to1", p)}
                  className={`cursor-pointer px-3 py-1.5 rounded border text-left text-xs font-medium transition-all ${
                    active
                      ? "border-[#9f1e13] bg-[#9f1e13]/5 text-[#9f1e13]"
                      : "border-border text-muted-foreground hover:bg-secondary"
                  }`}
                >
                  {active ? "✓ " : ""}{p}
                </button>
              );
            })}
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-[11px] font-bold uppercase tracking-wider text-foreground">What do you feel you need the most help with right now?</label>
          <Textarea
            value={formData.helpNeeded1to1}
            onChange={(e) => updateForm("helpNeeded1to1", e.target.value)}
            placeholder="Add details..."
            className="min-h-[50px] text-sm resize-none"
          />
        </div>

        <h3 className="text-xs font-bold text-[#9f1e13] uppercase tracking-wider border-b border-border pb-1 pt-3">Section 7: First Customer Opportunities</h3>
        
        <div className="space-y-2">
          <label className="text-[11px] font-bold uppercase tracking-wider text-foreground">Do you already have ideal candidates/clients for TBN testing, programmes or case studies?</label>
          <div className="flex gap-3">
            {["Yes", "No", "Not sure yet"].map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => updateForm("hasIdealCustomers", c)}
                className={`cursor-pointer px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded border ${
                  formData.hasIdealCustomers === c
                    ? "border-[#9f1e13] bg-[#9f1e13]/5 text-[#9f1e13]"
                    : "border-border text-muted-foreground hover:bg-secondary"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {formData.hasIdealCustomers === "Yes" && (
          <div className="space-y-2.5 p-3.5 bg-secondary/20 rounded-xl border border-border/30">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-wider text-foreground block">Please list potential first customers or client types:</label>
              <div className="grid grid-cols-1 gap-1.5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground w-4">{i + 1}.</span>
                    <Input
                      value={formData.potentialCustomers[i] || ""}
                      onChange={(e) => handleListChange("potentialCustomers", i, e.target.value)}
                      placeholder={`Customer / Client Type ${i + 1}`}
                      className="h-8 text-xs bg-white"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            <p className="text-[10px] font-bold text-foreground uppercase tracking-widest pt-1 border-t border-border/40">Who could be ideal for:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground">Omega Balance testing</label>
                <Input value={formData.idealForOmega} onChange={(e) => updateForm("idealForOmega", e.target.value)} placeholder="Name or type..." className="h-8 text-xs" />
              </div>
              <div className="space-y-1">
                <label className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground">Gut Health testing</label>
                <Input value={formData.idealForGut} onChange={(e) => updateForm("idealForGut", e.target.value)} placeholder="Name or type..." className="h-8 text-xs" />
              </div>
              <div className="space-y-1">
                <label className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground">Point-of-care screening</label>
                <Input value={formData.idealForPoc} onChange={(e) => updateForm("idealForPoc", e.target.value)} placeholder="Name or type..." className="h-8 text-xs" />
              </div>
              <div className="space-y-1">
                <label className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground">A 120-day programme</label>
                <Input value={formData.idealFor120day} onChange={(e) => updateForm("idealFor120day", e.target.value)} placeholder="Name or type..." className="h-8 text-xs" />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground">A transformation case study</label>
              <Input value={formData.idealForCaseStudy} onChange={(e) => updateForm("idealForCaseStudy", e.target.value)} placeholder="Name or type..." className="h-8 text-xs" />
            </div>
          </div>
        )}

        <h3 className="text-xs font-bold text-[#9f1e13] uppercase tracking-wider border-b border-border pb-1 pt-3">Section 10 & 11: Revenue Growth & Local Venues</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-[11px] font-bold uppercase tracking-wider text-foreground">Which growth routes are you most interested in?</label>
            <div className="flex flex-col gap-1">
              {REVENUE_GROWTH_ROUTES.map((route) => {
                const active = formData.growthRoutesInterest.includes(route);
                return (
                  <button
                    key={route}
                    type="button"
                    onClick={() => toggleArrayItem("growthRoutesInterest", route)}
                    className={`cursor-pointer px-3 py-1 text-xs font-medium rounded border text-left transition-all ${
                      active
                        ? "border-[#9f1e13] bg-[#9f1e13]/5 text-[#9f1e13]"
                        : "border-border text-muted-foreground hover:bg-secondary"
                    }`}
                  >
                    {active ? "✓ " : ""}{route}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-3">
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold uppercase tracking-wider text-foreground">Local gyms, clinics, resorts where you'd run testing hubs/events?</label>
              <div className="flex gap-2">
                {["Yes", "No", "Not sure yet"].map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => updateForm("localHubsInterest", c)}
                    className={`cursor-pointer px-2.5 py-1 text-[11px] font-semibold rounded border ${
                      formData.localHubsInterest === c
                        ? "border-[#9f1e13] bg-[#9f1e13]/5 text-[#9f1e13]"
                        : "border-border text-muted-foreground hover:bg-secondary"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
              {formData.localHubsInterest === "Yes" && (
                <div className="grid grid-cols-1 gap-1.5 mt-2 bg-secondary/15 p-2 rounded-lg border border-border/30">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <span className="text-[10px] text-muted-foreground w-3">{i + 1}.</span>
                      <Input
                        value={formData.localVenuesList[i] || ""}
                        onChange={(e) => handleListChange("localVenuesList", i, e.target.value)}
                        placeholder={`Venue / Location ${i + 1}`}
                        className="h-7 text-[11px] bg-white"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-1.5 pt-1">
              <label className="text-[11px] font-bold uppercase tracking-wider text-foreground">Local businesses you'd like TBN's help to approach?</label>
              <div className="flex gap-2">
                {["Yes", "No", "Not sure yet"].map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => updateForm("approachPartnersInterest", c)}
                    className={`cursor-pointer px-2.5 py-1 text-[11px] font-semibold rounded border ${
                      formData.approachPartnersInterest === c
                        ? "border-[#9f1e13] bg-[#9f1e13]/5 text-[#9f1e13]"
                        : "border-border text-muted-foreground hover:bg-secondary"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
              {formData.approachPartnersInterest === "Yes" && (
                <div className="space-y-1.5">
                  <div className="grid grid-cols-1 gap-1.5 bg-secondary/15 p-2 rounded-lg border border-border/30">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <span className="text-[10px] text-muted-foreground w-3">{i + 1}.</span>
                        <Input
                          value={formData.approachPartnersList[i] || ""}
                          onChange={(e) => handleListChange("approachPartnersList", i, e.target.value)}
                          placeholder={`Partner / Business ${i + 1}`}
                          className="h-7 text-[11px] bg-white"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-foreground font-semibold">Wants TBN support approaching them?</span>
                    {["Yes", "No", "Maybe"].map((c) => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => updateForm("wantsApproachSupport", c)}
                        className={`cursor-pointer px-2.5 py-0.5 text-[10px] font-semibold rounded border ${
                          formData.wantsApproachSupport === c
                            ? "border-[#9f1e13] bg-[#9f1e13]/5 text-[#9f1e13]"
                            : "border-border text-muted-foreground hover:bg-secondary"
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <h3 className="text-xs font-bold text-[#9f1e13] uppercase tracking-wider border-b border-border pb-1 pt-3">Section 12 & 13: Programmes & Marketing</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-[11px] font-bold uppercase tracking-wider text-foreground">Interested in integrating TBN programmes?</label>
            <div className="flex gap-2">
              {["Yes", "No", "Maybe", "Need support"].map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => updateForm("wantsIntegrateProgrammes", c)}
                  className={`cursor-pointer px-2.5 py-1 text-[11px] font-semibold rounded border ${
                    formData.wantsIntegrateProgrammes === c
                      ? "border-[#9f1e13] bg-[#9f1e13]/5 text-[#9f1e13]"
                      : "border-border text-muted-foreground hover:bg-secondary"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            {formData.wantsIntegrateProgrammes !== "No" && (
              <div className="space-y-2 pt-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-foreground">Which program / event route interests you first?</label>
                <div className="grid grid-cols-2 gap-1 bg-secondary/10 p-2 rounded-lg border border-border/40">
                  {PROGRAMME_ROUTE_INTERESTS.map((route) => {
                    const active = formData.programmeEventRoutes.includes(route);
                    return (
                      <button
                        key={route}
                        type="button"
                        onClick={() => toggleArrayItem("programmeEventRoutes", route)}
                        className={`cursor-pointer px-2 py-1 text-[10px] rounded text-left transition-all ${
                          active
                            ? "bg-[#9f1e13] text-white"
                            : "hover:bg-secondary text-muted-foreground"
                        }`}
                      >
                        {route}
                      </button>
                    );
                  })}
                </div>

                <label className="text-[10px] font-bold uppercase tracking-wider text-foreground block pt-1.5">Which program would you most like to integrate first?</label>
                <select
                  value={formData.firstProgrammeChoice}
                  onChange={(e) => updateForm("firstProgrammeChoice", e.target.value)}
                  className="w-full h-8 rounded border border-border bg-white px-2 text-[11px] focus-visible:ring-[#9f1e13]/30"
                >
                  <option value="">-- Choose Programme --</option>
                  {SPECIFIC_PROGRAMMES.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>
            )}
          </div>

          <div className="space-y-3">
            <div className="space-y-2">
              <label className="text-[11px] font-bold uppercase tracking-wider text-foreground">What marketing topics do you need the most help with?</label>
              <div className="grid grid-cols-2 gap-1.5 max-h-[160px] overflow-y-auto border border-border/50 p-2 rounded-lg bg-secondary/10">
                {MARKETING_HELP_TOPICS.map((topic) => {
                  const active = formData.marketingHelpTopics.includes(topic);
                  return (
                    <button
                      key={topic}
                      type="button"
                      onClick={() => toggleArrayItem("marketingHelpTopics", topic)}
                      className={`cursor-pointer px-2 py-1 rounded text-left text-[10px] font-semibold transition-all ${
                        active
                          ? "bg-[#9f1e13] text-white"
                          : "bg-white text-muted-foreground border border-border/50"
                      }`}
                    >
                      {active ? "✓ " : ""}{topic}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-1.5 pt-1">
              <label className="text-[11px] font-bold uppercase tracking-wider text-foreground block">Interested in additional paid marketing support?</label>
              <div className="flex flex-wrap gap-2">
                {["Yes", "No", "Maybe", "Discuss during 1:1"].map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => updateForm("additionalPaidMarketing", c)}
                    className={`cursor-pointer px-2.5 py-1 text-[11px] font-semibold rounded border ${
                      formData.additionalPaidMarketing === c
                        ? "border-[#9f1e13] bg-[#9f1e13]/5 text-[#9f1e13]"
                        : "border-border text-muted-foreground hover:bg-secondary"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-3 pt-3 border-t border-border mt-4">
        <Button
          onClick={prev}
          variant="outline"
          className="flex-1 h-11 rounded-full cursor-pointer border-border"
        >
          <ArrowLeft className="mr-2 w-4 h-4" /> Back
        </Button>
        <Button
          onClick={next}
          className="flex-1 h-11 rounded-full cursor-pointer bg-[#9f1e13] hover:bg-[#9f1e13]/90 text-white"
        >
          Continue <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </div>
  );

  /* STEP 5: Microsite setup */
  const renderListingStep = () => {
    const formUrl = "https://listing.test-basednutrition.com/";

    return (
      <div className="flex flex-col gap-6">
        <div>
          <h2 className="text-2xl font-playfair font-bold text-foreground">
            Section 5: Create / Optimise Your TBN Microsite
          </h2>
          <p className="text-muted-foreground text-xs mt-2 leading-relaxed">
            As part of your onboarding, you will receive a TBN microsite feature to support visibility, credibility, client education and bookings.
          </p>
        </div>

        <div className="relative rounded-2xl overflow-hidden border border-border/50 bg-gradient-to-br from-[#faf8f5] to-white p-6 flex flex-col md:flex-row items-center gap-6">
          <div className="w-12 h-12 rounded-xl bg-[#9f1e13]/10 flex items-center justify-center shrink-0">
            <FileText className="w-6 h-6 text-[#9f1e13]" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h4 className="text-sm font-bold text-foreground font-montserrat">TBN Microsite Registration</h4>
            <p className="text-xs text-muted-foreground mt-0.5">Please complete the microsite details form before your 1:1 session so we can review, optimise and align it with your clinic launch plan.</p>
          </div>
          <a
            href={formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#9f1e13] hover:bg-[#9f1e13]/90 text-white font-semibold text-xs transition-colors shrink-0"
          >
            Open Form <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="space-y-2 bg-secondary/10 p-4 rounded-xl border border-border/40">
          <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">Your microsite can help you:</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted-foreground">
            <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-[#9f1e13]" /> Attract new customers</li>
            <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-[#9f1e13]" /> Generate consultation enquiries</li>
            <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-[#9f1e13]" /> Showcase specialist pathways</li>
            <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-[#9f1e13]" /> Promote testing & workshops</li>
            <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-[#9f1e13]" /> Support local visibility</li>
            <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-[#9f1e13]" /> Introduce partner clinics</li>
          </ul>
        </div>

        <button
          onClick={() => setListingMarkedDone(!listingMarkedDone)}
          className={`cursor-pointer flex items-center gap-3 p-4 rounded-xl border transition-all text-left ${
            listingMarkedDone
              ? "border-emerald-300 bg-emerald-50 text-emerald-800"
              : "border-border text-muted-foreground hover:bg-secondary/40"
          }`}
        >
          <div
            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
              listingMarkedDone
                ? "border-emerald-500 bg-emerald-500"
                : "border-muted-foreground/40"
            }`}
          >
            {listingMarkedDone && <Check className="w-3 h-3 text-white" />}
          </div>
          <span className="text-xs font-semibold">
            {listingMarkedDone
              ? "✓ I have completed / reviewed the microsite details"
              : "Tick this once you have visited and completed the microsite form."}
          </span>
        </button>

        <div className="flex gap-3 pt-3 border-t border-border mt-4">
          <Button
            onClick={prev}
            variant="outline"
            className="flex-1 h-11 rounded-full cursor-pointer border-border"
          >
            <ArrowLeft className="mr-2 w-4 h-4" /> Back
          </Button>
          <Button
            onClick={next}
            className="flex-1 h-11 rounded-full cursor-pointer bg-[#9f1e13] hover:bg-[#9f1e13]/90 text-white"
          >
            Continue <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    );
  };

  /* STEP 6: Confirm & Submit */
  const renderConfirmStep = () => (
    <div className="flex flex-col gap-6">
      {isComplete ? (
        <div className="flex flex-col items-center text-center gap-6 py-6">
          <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8 text-emerald-600" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-playfair font-bold text-foreground">Onboarding Form Submitted</h2>
            <p className="text-muted-foreground text-xs font-montserrat max-w-md mx-auto leading-relaxed">
              Thank you, {formData.contactName}! Your onboarding details have been submitted securely to the TBN Team.
            </p>
          </div>

          <div className="text-left w-full max-w-md bg-secondary/20 p-4 rounded-xl border border-border/50 space-y-2 text-xs">
            <h4 className="font-bold text-foreground">Next Steps:</h4>
            <ol className="list-decimal pl-4 space-y-1 text-muted-foreground">
              <li>Review your clinic, audience, services and key pathways</li>
              <li>Prepare your 1:1 clinic integration session</li>
              <li>Review and optimise your microsite direction</li>
              <li>Map your first customer opportunities</li>
              <li>Identify local hub, venue or partner opportunities</li>
              <li>Recommend your first launch route</li>
              <li>Support your first workshop, programme or testing hub plan</li>
              <li>Complete your revenue goal sheet during the 1:1</li>
              <li>Agree your next actions for launch and growth</li>
            </ol>
            <p className="font-bold text-foreground pt-1.5 text-center text-[#9f1e13]">This is where your first 120 days begin.</p>
          </div>

          <a
            href="/"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#9f1e13] hover:bg-[#9f1e13]/90 text-white font-semibold text-xs transition-colors mt-2"
          >
            Return to TBN Home
          </a>
        </div>
      ) : (
        <>
          <div>
            <h2 className="text-2xl font-playfair font-bold text-foreground">Review & Submit</h2>
            <p className="text-muted-foreground text-xs mt-1">Please confirm the details of your onboarding response before submitting.</p>
          </div>

          <div className="space-y-3">
            <div className="rounded-xl border border-border/50 bg-white overflow-hidden text-xs">
              <div className="flex items-center justify-between px-4 py-2.5 bg-secondary/30 border-b border-border/30 font-bold">
                <span>Clinic & Team Profile</span>
                <button onClick={() => goTo(2)} className="cursor-pointer text-[#9f1e13] hover:underline">Edit</button>
              </div>
              <div className="p-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Clinic Name:</span>
                  <span className="font-semibold text-foreground">{formData.clinicName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Contact:</span>
                  <span className="font-semibold text-foreground">{formData.contactName} ({formData.roleProfession || "No Role"})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Email / Phone:</span>
                  <span className="font-semibold text-foreground">{formData.email} / {formData.phone || "—"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Business Model:</span>
                  <span className="font-semibold text-foreground">{formData.businessType || "—"}</span>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border/50 bg-white overflow-hidden text-xs">
              <div className="flex items-center justify-between px-4 py-2.5 bg-secondary/30 border-b border-border/30 font-bold">
                <span>Microsite Listing Completion</span>
                <button onClick={() => goTo(5)} className="cursor-pointer text-[#9f1e13] hover:underline">Edit</button>
              </div>
              <div className="p-4 flex items-center gap-2">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center ${listingMarkedDone ? "bg-emerald-100 text-emerald-600" : "bg-amber-100 text-amber-600"}`}>
                  {listingMarkedDone ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Circle className="w-3.5 h-3.5" />}
                </div>
                <span className="font-semibold">
                  {listingMarkedDone ? "Microsite details form marked as completed" : "Microsite details form pending (can complete later)"}
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-3 border-t border-border mt-4">
            <Button
              onClick={prev}
              variant="outline"
              className="flex-1 h-11 rounded-full cursor-pointer border-border"
            >
              <ArrowLeft className="mr-2 w-4 h-4" /> Back
            </Button>
            <Button
              onClick={handleFinalSubmit}
              disabled={isSubmitting}
              className="flex-1 h-11 rounded-full cursor-pointer bg-[#9f1e13] hover:bg-[#9f1e13]/90 text-white font-semibold text-sm"
            >
              {isSubmitting ? "Submitting..." : "Submit Onboarding response"}
            </Button>
          </div>
        </>
      )}
    </div>
  );

  const renderStepContent = () => {
    switch (currentStep) {
      case 1: return renderWelcomeStep();
      case 2: return renderDetailsStep();
      case 3: return renderServicesStep();
      case 4: return renderGoalsStep();
      case 5: return renderListingStep();
      case 6: return renderConfirmStep();
      default: return null;
    }
  };

  /* ──────────────────────────────────────────────
     MAIN WRAPPER RENDER
     ────────────────────────────────────────────── */
  return (
    <div className="min-h-screen bg-[#faf8f5] flex flex-col justify-between">
      <Navbar alwaysSolid />

      <section className="relative pt-24 pb-6 md:pt-28 md:pb-8 flex-1">
        <div className="container max-w-5xl">
          <div className="text-center mb-6">
            <span className="text-[#9f1e13] uppercase tracking-[0.2em] font-semibold text-[10px] font-montserrat">
              Partnership Onboarding
            </span>
            <h1 className="text-2xl md:text-3xl font-playfair font-bold text-foreground mt-1.5">
              TBN Pre-Integration Form
            </h1>
            <p className="text-muted-foreground font-montserrat text-xs mt-1.5 max-w-xl mx-auto">
              Please complete this streamlined questionnaire before our scheduled 1:1 integration clinic setup session.
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex items-center justify-between relative">
              <div className="absolute top-4 left-0 right-0 h-0.5 bg-border/40 mx-8" />
              <div
                className="absolute top-4 left-0 h-0.5 bg-[#9f1e13] mx-8 transition-all duration-500"
                style={{
                  width: `calc(${((currentStep - 1) / (STEPS.length - 1)) * 100}% - 4rem)`,
                }}
              />

              {STEPS.map((step) => {
                const isCompleted = completedSteps.has(step.id);
                const isCurrent = step.id === currentStep;
                const Icon = step.icon;

                return (
                  <button
                    key={step.id}
                    onClick={() => goTo(step.id)}
                    className="cursor-pointer relative flex flex-col items-center gap-1.5 z-10 group"
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
                        isCompleted
                          ? "bg-[#9f1e13] border-[#9f1e13] text-white"
                          : isCurrent
                            ? "bg-white border-[#9f1e13] text-[#9f1e13] shadow-md shadow-[#9f1e13]/10"
                            : "bg-white border-border text-muted-foreground"
                      }`}
                    >
                      {isCompleted ? <Check className="w-3.5 h-3.5" /> : <Icon className="w-3.5 h-3.5" />}
                    </div>
                    <span
                      className={`text-[9px] font-bold uppercase tracking-wider transition-colors hidden sm:block ${
                        isCurrent ? "text-[#9f1e13]" : "text-muted-foreground/60"
                      }`}
                    >
                      {step.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Form card */}
            <div className="flex-1 min-w-0">
              <div className="bg-white rounded-xl border border-border/40 shadow-sm p-6 md:p-8 overflow-hidden">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentStep}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    {renderStepContent()}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Sticky Sidebar */}
            <aside className="lg:w-[260px] shrink-0">
              <div className="lg:sticky lg:top-24 space-y-4">
                <div className="rounded-xl border border-border/40 bg-white shadow-sm p-4">
                  <h3 className="text-[10px] font-bold uppercase tracking-wider text-[#9f1e13] font-montserrat mb-3">
                    Progress checklist
                  </h3>
                  <div className="space-y-2">
                    {STEPS.map((step) => {
                      const isCompleted = completedSteps.has(step.id);
                      const isCurrent = step.id === currentStep;
                      return (
                        <button
                          key={step.id}
                          onClick={() => goTo(step.id)}
                          className={`cursor-pointer flex items-center gap-2.5 w-full text-left px-2 py-1.5 rounded-lg transition-all ${
                            isCurrent ? "bg-[#9f1e13]/5 border border-[#9f1e13]/10" : ""
                          }`}
                        >
                          <div
                            className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                              isCompleted
                                ? "bg-emerald-50 text-emerald-600"
                                : isCurrent
                                  ? "bg-[#9f1e13]/10 text-[#9f1e13]"
                                  : "bg-secondary text-muted-foreground/30"
                            }`}
                          >
                            {isCompleted ? (
                              <CheckCircle2 className="w-3 h-3" />
                            ) : isCurrent ? (
                              <ArrowRight className="w-2.5 h-2.5" />
                            ) : (
                              <Circle className="w-2.5 h-2.5" />
                            )}
                          </div>
                          <span
                            className={`text-[11px] font-semibold transition-colors ${
                              isCompleted ? "text-foreground" : isCurrent ? "text-[#9f1e13]" : "text-muted-foreground/50"
                            }`}
                          >
                            {step.title}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {draftId ? (
                  <div className="rounded-xl border border-emerald-100 bg-emerald-50/40 p-4 text-xs shadow-sm space-y-2 transition-all">
                    <div className="flex items-center gap-2 text-emerald-800 font-semibold font-montserrat">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                      <span>Progress saved</span>
                    </div>
                    <p className="text-[10px] text-emerald-950/70 leading-normal font-medium font-montserrat">
                      Copy this unique link to resume filling this form on any device at any time:
                    </p>
                    <Button
                      onClick={() => {
                        const url = `${window.location.origin}${window.location.pathname}?draft=${draftId}`;
                        navigator.clipboard.writeText(url);
                        toast.success("Draft magic link copied to clipboard!");
                      }}
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg text-[10px] py-1 h-8 cursor-pointer flex items-center justify-center gap-1.5 border-0"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Copy Draft Link
                    </Button>
                  </div>
                ) : (
                  currentStep >= 2 && (
                    <div className="rounded-xl border border-border/40 bg-zinc-50/50 p-4 text-xs shadow-sm space-y-1.5">
                      <p className="text-[10px] text-muted-foreground/80 leading-normal font-medium font-montserrat">
                        Fill out your clinic details on Step 2 to save progress and get a magic draft link.
                      </p>
                    </div>
                  )
                )}

                <div className="rounded-xl border border-border/40 bg-white shadow-sm p-4 text-xs text-muted-foreground leading-relaxed">
                  <h3 className="font-bold text-foreground mb-1">Clinic 1:1 Integration</h3>
                  <p>Upon submission of this questionnaire, the TBN team will schedule your clinic integration mapping session.</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
