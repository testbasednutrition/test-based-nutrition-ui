import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/lib/supabase";
import { fetchSpecialists } from "@/lib/api";
import { type Specialist } from "@/data/specialists";
import { toast } from "sonner";
import { 
  Key, ArrowLeft, Copy, Check, Users, BookOpen, Search, LogOut, 
  Award, Info, TrendingUp, Share2, HelpCircle, Activity, ChevronRight 
} from "lucide-react";

interface LocalLead {
  name: string;
  email: string;
  mobile?: string;
  leadType?: string;
  lead_type?: string;
  sourcePage?: string;
  source_page?: string;
  date?: string;
  created_at?: string;
  referrerCode?: string | null;
  referrer_code?: string | null;
}

interface QuizLead {
  name: string;
  email: string;
  phone?: string;
  goal?: string | null;
  specialist?: string;
  date?: string;
  time?: string;
  referrerCode?: string | null;
  created_at?: string;
}

interface PartnerStats {
  specialist: Specialist;
  partnerLeadsCount: number;
  academyLeadsCount: number;
  quizLeadsCount: number;
  totalLeadsCount: number;
}

// High-quality mockup referred leads for the sandbox simulation mode
const MOCK_REFERRAL_LEADS: LocalLead[] = [
  { name: "Eleanor Vance", email: "eleanor@vance-aesthetics.co.uk", mobile: "07712345678", lead_type: "Become a Partner", source_page: "Homepage", created_at: "2026-06-04T10:14:00.000Z", referrerCode: "bryony-alford" },
  { name: "George Miller", email: "george@miller-clinics.com", mobile: "07887654321", lead_type: "Invite Us to Your Clinic", source_page: "Partner With Us", created_at: "2026-06-03T14:25:00.000Z", referrerCode: "bryony-alford" },
  { name: "Alice Cooper", email: "alice.cooper@chronicpain-wellness.com", mobile: "07998877665", lead_type: "Become a Partner", source_page: "Chronic Pain Pathway", created_at: "2026-06-02T09:12:00.000Z", referrerCode: "neil-parsley" },
  { name: "David Beckham", email: "david@davidbeckham.co.uk", mobile: "07112233445", lead_type: "Become a Partner", source_page: "Sports Performance", created_at: "2026-06-01T16:30:00.000Z", referrerCode: "neil-parsley" },
  { name: "Sophia Loren", email: "sophia@loren-beauty.it", mobile: "07665544332", lead_type: "Become a Partner", source_page: "Skin Health", created_at: "2026-05-30T11:45:00.000Z", referrerCode: "sarah-abell" },
  { name: "Robert Downey", email: "robert@downey-wellness.com", mobile: "07223344556", lead_type: "Invite Us to Your Clinic", source_page: "Homepage", created_at: "2026-05-28T08:15:00.000Z", referrerCode: "vian-hurle" },
  { name: "Emma Watson", email: "emma@watson-holistics.org", mobile: "07334455667", lead_type: "Become a Partner", source_page: "Women's Health", created_at: "2026-05-25T15:20:00.000Z", referrerCode: "kareem-ibrahim" }
];

const MOCK_REFERRAL_ACADEMY: LocalLead[] = [
  { name: "Claire Fraser", email: "claire@lallybroch-health.com", academy_opt_in: true, created_at: "2026-06-04T12:00:00.000Z", referrerCode: "bryony-alford" },
  { name: "Jamie Fraser", email: "jamie@lallybroch-health.com", academy_opt_in: true, created_at: "2026-06-03T18:40:00.000Z", referrerCode: "neil-parsley" },
  { name: "John Snow", email: "john@bastard-wellness.north", academy_opt_in: true, created_at: "2026-06-02T10:15:00.000Z", referrerCode: "vian-hurle" },
  { name: "Diana Prince", email: "diana@themyscira-fit.net", academy_opt_in: true, created_at: "2026-05-29T14:35:00.000Z", referrerCode: "sarah-abell" }
];

const MOCK_REFERRAL_QUIZ: QuizLead[] = [
  { name: "Bruce Wayne", email: "bruce@wayne-enterprises.com", goal: "mens-health", specialist: "Neil Parsley", created_at: "2026-06-04T19:30:00.000Z", referrerCode: "neil-parsley" },
  { name: "Selina Kyle", email: "selina@catnap-holistics.com", goal: "skin-health", specialist: "Sarah Abell", created_at: "2026-06-03T11:20:00.000Z", referrerCode: "sarah-abell" },
  { name: "Peter Parker", email: "peter@dailybugle-nutrition.org", goal: "mens-health", specialist: "Bryony Alford", created_at: "2026-06-02T16:45:00.000Z", referrerCode: "bryony-alford" },
  { name: "Mary Jane", email: "mary.jane@broadway-wellness.com", goal: "womens-health", specialist: "Bryony Alford", created_at: "2026-06-01T10:05:00.000Z", referrerCode: "bryony-alford" }
];

export default function AdminAffiliates() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // Specialists from DB
  const [partners, setPartners] = useState<Specialist[]>([]);
  
  // Leads aggregated
  const [partnerLeads, setPartnerLeads] = useState<LocalLead[]>([]);
  const [academyLeads, setAcademyLeads] = useState<LocalLead[]>([]);
  const [quizLeads, setQuizLeads] = useState<QuizLead[]>([]);
  
  // Link generator states
  const [selectedPartnerSlug, setSelectedPartnerSlug] = useState<string>("");
  const [searchPartnerQuery, setSearchPartnerQuery] = useState("");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  
  // Dashboard modes
  const [sandboxMode, setSandboxMode] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState("");

  // Authenticate with session storage
  useEffect(() => {
    const authSession = sessionStorage.getItem("tbn_admin_auth");
    if (authSession === "true") {
      setIsAuthenticated(true);
      loadData();
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "TBNAdmin2026") {
      sessionStorage.setItem("tbn_admin_auth", "true");
      setIsAuthenticated(true);
      toast.success("Welcome back, Administrator!");
      loadData();
    } else {
      toast.error("Incorrect password. Please try again.");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("tbn_admin_auth");
    setIsAuthenticated(false);
    setPassword("");
    toast.success("Successfully logged out.");
  };

  const loadData = async () => {
    setIsLoading(true);
    try {
      // Load Specialists
      const specialistsData = await fetchSpecialists();
      setPartners(specialistsData);
      if (specialistsData.length > 0) {
        setSelectedPartnerSlug(specialistsData[0].slug);
      }
      
      // Load live leads from localStorage
      const livePartners: LocalLead[] = JSON.parse(localStorage.getItem("partner_leads") || "[]");
      const liveAcademy: LocalLead[] = JSON.parse(localStorage.getItem("academy_registrations") || "[]");
      const liveQuiz: QuizLead[] = JSON.parse(localStorage.getItem("quiz_leads") || "[]");
      
      setPartnerLeads(livePartners);
      setAcademyLeads(liveAcademy);
      setQuizLeads(liveQuiz);
    } catch (e) {
      console.error("Failed to load data", e);
      toast.error("Failed to load partners data.");
    } finally {
      setIsLoading(false);
    }
  };

  // Switch between Sandbox Mockups & Live tracking
  const activePartnerLeads = sandboxMode ? MOCK_REFERRAL_LEADS : partnerLeads;
  const activeAcademyLeads = sandboxMode ? MOCK_REFERRAL_ACADEMY : academyLeads;
  const activeQuizLeads = sandboxMode ? MOCK_REFERRAL_QUIZ : quizLeads;

  // Process data to build partner referral leaderboard
  const partnerStats: PartnerStats[] = partners.map(partner => {
    const pLeads = activePartnerLeads.filter(lead => {
      const ref = lead.referrer_code || lead.referrerCode;
      return ref && ref.trim().toLowerCase() === partner.slug.toLowerCase();
    });

    const aLeads = activeAcademyLeads.filter(lead => {
      const ref = lead.referrer_code || lead.referrerCode;
      return ref && ref.trim().toLowerCase() === partner.slug.toLowerCase();
    });

    const qLeads = activeQuizLeads.filter(lead => {
      const ref = lead.referrerCode;
      return ref && ref.trim().toLowerCase() === partner.slug.toLowerCase();
    });

    return {
      specialist: partner,
      partnerLeadsCount: pLeads.length,
      academyLeadsCount: aLeads.length,
      quizLeadsCount: qLeads.length,
      totalLeadsCount: pLeads.length + aLeads.length + qLeads.length
    };
  }).sort((a, b) => b.totalLeadsCount - a.totalLeadsCount);

  // Filters leaderboard based on search query
  const filteredStats = partnerStats.filter(stat => {
    const name = stat.specialist.name.toLowerCase();
    const clinic = (stat.specialist.clinic_name || "").toLowerCase();
    const query = searchTerm.toLowerCase();
    return name.includes(query) || clinic.includes(query);
  });

  // Calculate high level dashboard totals
  const totalPartnerLeadsCount = activePartnerLeads.length;
  const totalAcademyLeadsCount = activeAcademyLeads.length;
  const totalQuizLeadsCount = activeQuizLeads.length;
  const totalReferralsCombined = totalPartnerLeadsCount + totalAcademyLeadsCount + totalQuizLeadsCount;

  // Selected partner details for the link generator
  const selectedPartner = partners.find(p => p.slug === selectedPartnerSlug);
  
  // Link generation helper
  const getReferralUrls = (slug: string) => {
    const host = window.location.origin;
    return {
      homepage: `${host}/?ref=${slug}`,
      quiz: `${host}/testing?ref=${slug}`,
      specialistProfile: `${host}/specialists/${slug}`,
      womensHealth: `${host}/treatments/womens-health?ref=${slug}`,
      sportsPerformance: `${host}/treatments/sports-performance?ref=${slug}`,
    };
  };

  const referralUrls = selectedPartner ? getReferralUrls(selectedPartner.slug) : null;

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    toast.success("Link copied to clipboard!");
    setTimeout(() => setCopiedKey(null), 2000);
  };

  // Filtered partners for dropdown selection search
  const filteredPartnerOptions = partners.filter(p => 
    p.name.toLowerCase().includes(searchPartnerQuery.toLowerCase())
  );

  // Activity log combining all sources
  interface CombinedActivityItem {
    name: string;
    email: string;
    type: "Partner Lead" | "Academy Registration" | "Quiz Consult";
    date: string;
    referrerName: string;
    referrerSlug: string;
  }

  const combinedActivities: CombinedActivityItem[] = [
    ...activePartnerLeads.map(l => {
      const refCode = l.referrer_code || l.referrerCode || "";
      const partnerObj = partners.find(p => p.slug.toLowerCase() === refCode.toLowerCase());
      return {
        name: l.name,
        email: l.email,
        type: "Partner Lead" as const,
        date: l.created_at || l.date || "",
        referrerName: partnerObj ? partnerObj.name : refCode,
        referrerSlug: refCode
      };
    }),
    ...activeAcademyLeads.map(l => {
      const refCode = l.referrer_code || l.referrerCode || "";
      const partnerObj = partners.find(p => p.slug.toLowerCase() === refCode.toLowerCase());
      return {
        name: l.name,
        email: l.email,
        type: "Academy Registration" as const,
        date: l.created_at || l.date || "",
        referrerName: partnerObj ? partnerObj.name : refCode,
        referrerSlug: refCode
      };
    }),
    ...activeQuizLeads.map(l => {
      const refCode = l.referrerCode || "";
      const partnerObj = partners.find(p => p.slug.toLowerCase() === refCode.toLowerCase());
      return {
        name: l.name,
        email: l.email,
        type: "Quiz Consult" as const,
        date: l.created_at || "",
        referrerName: partnerObj ? partnerObj.name : refCode,
        referrerSlug: refCode
      };
    })
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#faf8f5] flex flex-col justify-between">
        <Navbar alwaysSolid={true} />
        
        <div className="flex-grow flex items-center justify-center p-6 pt-32">
          <div className="bg-white border border-[#dbd4c9] rounded-[2rem] p-8 md:p-10 w-full max-w-md shadow-lg space-y-6">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-[#9f1e13]/10 flex items-center justify-center mx-auto text-[#9f1e13]">
                <Key className="w-6 h-6" />
              </div>
              <h2 className="font-playfair text-[28px] font-bold text-gray-900">Admin Portal</h2>
              <p className="font-montserrat text-xs text-gray-500 max-w-xs mx-auto">
                Please enter the administrator password to access Affiliate Tracking.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 pl-0.5">
                  Security Password
                </label>
                <input
                  type="password"
                  required
                  placeholder="Enter administrator password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-11 px-4 rounded-xl bg-white border border-[#dbd4c9] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#9f1e13] focus:ring-1 focus:ring-[#9f1e13] transition-all text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full h-11 bg-[#9f1e13] hover:bg-[#861910] text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-sm flex items-center justify-center gap-2"
              >
                Access Affiliate Dashboard
              </button>
            </form>
          </div>
        </div>

        <Footer hideInstagram={true} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf8f5] flex flex-col justify-between font-montserrat">
      <Navbar alwaysSolid={true} />

      <div className="flex-grow container px-6 pt-32 pb-24 max-w-6xl">
        {/* Header navigation and titles */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-[#dbd4c9]/60 pb-6 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <button 
                onClick={() => navigate("/admin/leads")}
                className="text-xs font-bold text-gray-500 hover:text-[#9f1e13] transition-colors flex items-center gap-1"
              >
                <ArrowLeft className="w-3 h-3" />
                Leads Portal
              </button>
            </div>
            <h1 className="font-playfair text-3xl font-bold text-gray-900">Affiliate Link Tracker</h1>
            <p className="text-xs text-gray-500 mt-1">
              Analyze partner referral performance, manage affiliate links, and optimize campaign promotion.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            {/* Sandbox switch */}
            <div className="bg-white border border-[#dbd4c9] rounded-xl px-3 py-1.5 flex items-center gap-2 shadow-sm text-xs">
              <span className="font-bold text-gray-500">Sandbox Data Mode:</span>
              <button
                onClick={() => {
                  setSandboxMode(!sandboxMode);
                  toast.success(`Switched to ${!sandboxMode ? "Sandbox Data" : "Live Local Data"} mode`);
                }}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
                  sandboxMode 
                    ? "bg-[#9f1e13] text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {sandboxMode ? "ON (Simulated)" : "OFF (Live Local)"}
              </button>
            </div>

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 border border-[#dbd4c9] rounded-xl text-xs font-bold text-gray-700 bg-white hover:bg-gray-50 transition-all shadow-sm"
            >
              <LogOut className="w-3.5 h-3.5" />
              Logout
            </button>
          </div>
        </div>

        {/* Sandbox indicator alert banner */}
        {sandboxMode && (
          <div className="bg-amber-50 border border-amber-200 text-amber-800 rounded-2xl p-4 mb-8 text-xs flex items-start gap-3 shadow-sm">
            <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="font-bold">Sandbox Mode Active</p>
              <p className="text-amber-700">
                You are currently viewing simulated tracking analytics. Toggle "Sandbox Data Mode" to **OFF** in the top right header to review actual live entries stored in local storage.
              </p>
            </div>
          </div>
        )}

        {/* Statistical Overview grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white border border-[#dbd4c9] rounded-2xl p-6 flex items-center gap-4 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#9f1e13]/10 flex items-center justify-center text-[#9f1e13] shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Total Partners</p>
              <h3 className="text-2xl font-bold text-gray-950 mt-1">{partners.length}</h3>
            </div>
          </div>

          <div className="bg-white border border-[#dbd4c9] rounded-2xl p-6 flex items-center gap-4 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
              <Activity className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Partner Inquiries</p>
              <h3 className="text-2xl font-bold text-gray-950 mt-1">{totalPartnerLeadsCount}</h3>
            </div>
          </div>

          <div className="bg-white border border-[#dbd4c9] rounded-2xl p-6 flex items-center gap-4 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 shrink-0">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Academy Inquiries</p>
              <h3 className="text-2xl font-bold text-gray-950 mt-1">{totalAcademyLeadsCount}</h3>
            </div>
          </div>

          <div className="bg-white border border-[#dbd4c9] rounded-2xl p-6 flex items-center gap-4 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-700 shrink-0">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Quiz Consultations</p>
              <h3 className="text-2xl font-bold text-gray-950 mt-1">{totalQuizLeadsCount}</h3>
            </div>
          </div>
        </div>

        {/* Visual analysis and Link generator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          {/* Top Promoters Graph */}
          <div className="bg-white border border-[#dbd4c9] rounded-3xl p-6 shadow-sm lg:col-span-7 flex flex-col justify-between">
            <div>
              <h3 className="font-playfair text-xl font-bold text-gray-900 mb-1">Referral Volume Leaderboard</h3>
              <p className="text-xs text-gray-500 mb-6">Visual breakdown of combined referral data by top promoting partners.</p>
            </div>

            {/* Custom interactive progress bar chart */}
            <div className="space-y-4">
              {partnerStats.filter(stat => stat.totalLeadsCount > 0).slice(0, 5).map((stat, idx) => {
                const percentage = totalReferralsCombined > 0 
                  ? Math.round((stat.totalLeadsCount / totalReferralsCombined) * 100) 
                  : 0;

                return (
                  <div key={stat.specialist.slug} className="space-y-1">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-gray-800 flex items-center gap-1.5">
                        <span className="w-4.5 h-4.5 rounded bg-stone-100 border border-stone-200 text-[#9f1e13] font-bold text-[10px] flex items-center justify-center">
                          #{idx + 1}
                        </span>
                        {stat.specialist.name}
                      </span>
                      <span className="text-gray-500 font-semibold">
                        {stat.totalLeadsCount} leads ({percentage}%)
                      </span>
                    </div>
                    <div className="w-full h-3 bg-stone-100 rounded-full overflow-hidden border border-stone-200 flex">
                      {/* Partner Leads segment */}
                      {stat.partnerLeadsCount > 0 && (
                        <div 
                          className="h-full bg-[#9f1e13] transition-all" 
                          style={{ width: `${(stat.partnerLeadsCount / stat.totalLeadsCount) * 100}%` }}
                          title={`Partner Leads: ${stat.partnerLeadsCount}`}
                        />
                      )}
                      {/* Academy segment */}
                      {stat.academyLeadsCount > 0 && (
                        <div 
                          className="h-full bg-blue-500 transition-all" 
                          style={{ width: `${(stat.academyLeadsCount / stat.totalLeadsCount) * 100}%` }}
                          title={`Academy: ${stat.academyLeadsCount}`}
                        />
                      )}
                      {/* Quiz segment */}
                      {stat.quizLeadsCount > 0 && (
                        <div 
                          className="h-full bg-purple-500 transition-all" 
                          style={{ width: `${(stat.quizLeadsCount / stat.totalLeadsCount) * 100}%` }}
                          title={`Quiz Consults: ${stat.quizLeadsCount}`}
                        />
                      )}
                    </div>
                  </div>
                );
              })}

              {partnerStats.filter(s => s.totalLeadsCount > 0).length === 0 && (
                <div className="text-center py-12 text-gray-400 italic text-xs">
                  No referred leads found yet. Check link parameters or switch to Sandbox mode!
                </div>
              )}
            </div>

            {/* Chart legend */}
            <div className="flex gap-4 border-t border-stone-100 pt-4 mt-6 text-[10px] font-bold text-gray-500 uppercase tracking-wider">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded bg-[#9f1e13]" />
                Partner Leads
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded bg-blue-500" />
                Academy Inquiries
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded bg-purple-500" />
                Quiz Consultations
              </div>
            </div>
          </div>

          {/* Referral Link Generator */}
          <div className="bg-white border border-[#dbd4c9] rounded-3xl p-6 shadow-sm lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <h3 className="font-playfair text-xl font-bold text-gray-900 mb-1">Link Builder</h3>
                <p className="text-xs text-gray-500">Generate trackable URLs for specific partners and campaigns.</p>
              </div>

              {/* Selector Search Box */}
              <div className="space-y-2 relative">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  Select Partner / Specialist
                </label>
                <div className="relative">
                  <Search className="w-3.5 h-3.5 absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search specialists by name..."
                    value={searchPartnerQuery}
                    onChange={(e) => {
                      setSearchPartnerQuery(e.target.value);
                      // Auto-select first matching option
                      const matches = partners.filter(p => p.name.toLowerCase().includes(e.target.value.toLowerCase()));
                      if (matches.length > 0 && e.target.value !== "") {
                        setSelectedPartnerSlug(matches[0].slug);
                      }
                    }}
                    className="w-full h-9 pl-8 pr-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#9f1e13] focus:ring-1 focus:ring-[#9f1e13] text-xs transition-all"
                  />
                </div>

                {/* Selected Dropdown value preview */}
                <select
                  value={selectedPartnerSlug}
                  onChange={(e) => {
                    setSelectedPartnerSlug(e.target.value);
                    const selectedName = partners.find(p => p.slug === e.target.value)?.name || "";
                    setSearchPartnerQuery(selectedName);
                  }}
                  className="w-full h-10 px-3 rounded-xl bg-white border border-[#dbd4c9] text-gray-800 focus:outline-none focus:border-[#9f1e13] text-xs font-semibold shadow-sm"
                >
                  {filteredPartnerOptions.map((p) => (
                    <option key={p.slug} value={p.slug}>
                      {p.name} ({p.clinic_name || "Independent"})
                    </option>
                  ))}
                  {filteredPartnerOptions.length === 0 && (
                    <option value="" disabled>No partners match search</option>
                  )}
                </select>
              </div>

              {/* Generated Links Display */}
              {referralUrls && selectedPartner && (
                <div className="space-y-3 pt-2">
                  <div className="space-y-1 border-b border-stone-100 pb-2.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-gray-600">Homepage Ref Link</span>
                      <button
                        onClick={() => copyToClipboard(referralUrls.homepage, "homepage")}
                        className="text-[10px] font-bold text-[#9f1e13] hover:underline flex items-center gap-1"
                      >
                        {copiedKey === "homepage" ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                        Copy Link
                      </button>
                    </div>
                    <p className="text-[10px] text-gray-500 font-mono break-all bg-stone-50 p-2 rounded-lg border border-stone-200/50">
                      {referralUrls.homepage}
                    </p>
                  </div>

                  <div className="space-y-1 border-b border-stone-100 pb-2.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-gray-600">Quiz Link</span>
                      <button
                        onClick={() => copyToClipboard(referralUrls.quiz, "quiz")}
                        className="text-[10px] font-bold text-[#9f1e13] hover:underline flex items-center gap-1"
                      >
                        {copiedKey === "quiz" ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                        Copy Link
                      </button>
                    </div>
                    <p className="text-[10px] text-gray-500 font-mono break-all bg-stone-50 p-2 rounded-lg border border-stone-200/50">
                      {referralUrls.quiz}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-gray-600">Direct Profile Link</span>
                      <button
                        onClick={() => copyToClipboard(referralUrls.specialistProfile, "profile")}
                        className="text-[10px] font-bold text-[#9f1e13] hover:underline flex items-center gap-1"
                      >
                        {copiedKey === "profile" ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                        Copy Link
                      </button>
                    </div>
                    <p className="text-[10px] text-gray-500 font-mono break-all bg-stone-50 p-2 rounded-lg border border-stone-200/50">
                      {referralUrls.specialistProfile}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Detailed leaderboard list */}
        <div className="bg-white border border-[#dbd4c9] rounded-2xl shadow-sm mb-8">
          <div className="p-6 border-b border-[#dbd4c9]/60 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h3 className="font-playfair text-xl font-bold text-gray-900">Partner Leaderboard Rankings</h3>
              <p className="text-xs text-gray-500 mt-1">Detailed list of specialists sorted by total referred inquiry registrations.</p>
            </div>
            
            {/* Search filter for list */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 absolute left-3 top-3.5 text-gray-400" />
              <input
                type="text"
                placeholder="Filter partners by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full h-11 pl-10 pr-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#9f1e13] focus:ring-1 focus:ring-[#9f1e13] transition-all text-xs"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-[#dbd4c9]/60 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                  <th className="px-6 py-4">Rank / Name</th>
                  <th className="px-6 py-4">Clinic Name / Slug</th>
                  <th className="px-6 py-4 text-center">Partner Leads</th>
                  <th className="px-6 py-4 text-center">Academy</th>
                  <th className="px-6 py-4 text-center">Quiz Consults</th>
                  <th className="px-6 py-4 text-right pr-8">Total Referrals</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-xs text-gray-700">
                {filteredStats.map((stat, idx) => (
                  <tr key={stat.specialist.slug} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 font-bold text-gray-900">
                      <div className="flex items-center gap-3">
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] ${
                          idx === 0 
                            ? "bg-amber-100 text-amber-800 border border-amber-200" 
                            : idx === 1 
                              ? "bg-stone-200 text-stone-800 border border-stone-300"
                              : idx === 2 
                                ? "bg-amber-50 text-amber-700 border border-amber-100"
                                : "bg-gray-50 text-gray-500 border border-gray-100"
                        }`}>
                          {idx + 1}
                        </span>
                        {stat.specialist.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-500 font-medium">
                      <div>{stat.specialist.clinic_name || "Independent"}</div>
                      <div className="text-[10px] font-mono text-[#9f1e13] mt-0.5">{stat.specialist.slug}</div>
                    </td>
                    <td className="px-6 py-4 text-center font-semibold text-gray-800">{stat.partnerLeadsCount}</td>
                    <td className="px-6 py-4 text-center font-semibold text-gray-800">{stat.academyLeadsCount}</td>
                    <td className="px-6 py-4 text-center font-semibold text-gray-800">{stat.quizLeadsCount}</td>
                    <td className="px-6 py-4 text-right font-bold text-gray-900 pr-8">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                        stat.totalLeadsCount > 0 
                          ? "bg-[#9f1e13]/10 text-[#9f1e13] border border-[#9f1e13]/25" 
                          : "bg-gray-100 text-gray-400 border border-gray-200"
                      }`}>
                        {stat.totalLeadsCount}
                      </span>
                    </td>
                  </tr>
                ))}
                
                {filteredStats.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-gray-400 italic">
                      No matching partners found in leaderboard.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Detailed referred leads log */}
        <div className="bg-white border border-[#dbd4c9] rounded-2xl shadow-sm">
          <div className="p-6 border-b border-[#dbd4c9]/60">
            <h3 className="font-playfair text-xl font-bold text-gray-900">Captured Referral Leads Log</h3>
            <p className="text-xs text-gray-500 mt-1">A real-time audit log tracking each referred user signup and the attributing partner.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-[#dbd4c9]/60 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                  <th className="px-6 py-4">User Details</th>
                  <th className="px-6 py-4">Inquiry / Lead Type</th>
                  <th className="px-6 py-4">Attributed Partner</th>
                  <th className="px-6 py-4">Date Registered</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-xs text-gray-700">
                {combinedActivities.map((act, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-bold text-gray-900">{act.name}</div>
                      <div className="text-[11px] text-gray-500 font-semibold mt-0.5">{act.email}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border ${
                        act.type === "Partner Lead" 
                          ? "bg-emerald-50 text-emerald-700 border-emerald-100" 
                          : act.type === "Academy Registration" 
                            ? "bg-blue-50 text-blue-700 border-blue-100" 
                            : "bg-purple-50 text-purple-700 border-purple-100"
                      }`}>
                        {act.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-semibold text-[#9f1e13]">
                      <div>{act.referrerName}</div>
                      <div className="text-[10px] font-mono text-gray-400 mt-0.5">code: {act.referrerSlug}</div>
                    </td>
                    <td className="px-6 py-4 text-gray-400">
                      {act.date ? new Date(act.date).toLocaleString() : "—"}
                    </td>
                  </tr>
                ))}

                {combinedActivities.length === 0 && (
                  <tr>
                    <td colSpan={4} className="px-6 py-12 text-center text-gray-400 italic">
                      No tracked referral events recorded.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer hideInstagram={true} />
    </div>
  );
}
