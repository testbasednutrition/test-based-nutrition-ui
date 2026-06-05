import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { Download, Trash2, Key, Users, BookOpen, Search, LogOut, BarChart3, Stethoscope } from "lucide-react";

interface LocalLead {
  id?: any;
  name: string;
  email: string;
  mobile?: string;
  leadType?: string;
  lead_type?: string;
  sourcePage?: string;
  source_page?: string;
  date?: string;
  created_at?: string;
  academyOptIn?: boolean;
  academy_opt_in?: boolean;
  phone?: string;
  goal?: string;
  specialist?: string;
  time?: string;
  referrer_code?: string;
  referrerCode?: string;
  pathway?: string;
  postcode?: string;
}

export default function AdminLeads() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<"partner" | "academy" | "quiz" | "customer">("partner");
  const [searchTerm, setSearchTerm] = useState("");

  const [partnerLeads, setPartnerLeads] = useState<LocalLead[]>([]);
  const [academyRegistrations, setAcademyRegistrations] = useState<LocalLead[]>([]);
  const [quizLeads, setQuizLeads] = useState<LocalLead[]>([]);
  const [customerLeads, setCustomerLeads] = useState<LocalLead[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Authenticate with session storage so users don't need to retype password on refresh
  useEffect(() => {
    const authSession = sessionStorage.getItem("tbn_admin_auth");
    if (authSession === "true") {
      setIsAuthenticated(true);
      loadLeads();
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "TBNAdmin2026") {
      sessionStorage.setItem("tbn_admin_auth", "true");
      setIsAuthenticated(true);
      toast.success("Welcome back, Administrator!");
      loadLeads();
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

  const loadLeads = async () => {
    setIsLoading(true);
    
    // --- 1. Load Local Storage Fallbacks ---
    let localPartner: LocalLead[] = [];
    let localAcademy: LocalLead[] = [];
    let localQuiz: LocalLead[] = [];
    let localCustomer: LocalLead[] = [];
    try {
      localPartner = JSON.parse(localStorage.getItem("partner_leads") || "[]");
      localAcademy = JSON.parse(localStorage.getItem("academy_registrations") || "[]");
      localQuiz = JSON.parse(localStorage.getItem("quiz_leads") || "[]");
      localCustomer = JSON.parse(localStorage.getItem("customer_leads") || "[]");
    } catch (e) {
      console.error("Failed to parse local storage", e);
    }

    // --- 2. Load Supabase Leads (if available) ---
    let dbPartner: LocalLead[] = [];
    let dbAcademy: LocalLead[] = [];
    let dbQuiz: LocalLead[] = [];
    let dbCustomer: LocalLead[] = [];
    
    try {
      const { data: partners, error: pError } = await supabase
        .from("partner_leads")
        .select("*")
        .order("created_at", { ascending: false });
      
      if (!pError && partners) {
        dbPartner = partners;
      }
      
      const { data: academies, error: aError } = await supabase
        .from("academy_registrations")
        .select("*")
        .order("created_at", { ascending: false });
        
      if (!aError && academies) {
        dbAcademy = academies;
      }

      const { data: quizzes, error: qError } = await supabase
        .from("quiz_leads")
        .select("*")
        .order("created_at", { ascending: false });

      if (!qError && quizzes) {
        dbQuiz = quizzes;
      }

      const { data: customers, error: cError } = await supabase
        .from("customer_leads")
        .select("*")
        .order("created_at", { ascending: false });

      if (!cError && customers) {
        dbCustomer = customers;
      }
    } catch (dbErr) {
      console.warn("Could not query Supabase, using local entries only:", dbErr);
    }

    // Combine and remove local storage duplicates if they are already in the DB by checking email and date/time
    // For local fallback prototype, showing both in a unified sorted list is most helpful
    const allPartners = [...dbPartner, ...localPartner].sort((a, b) => {
      const dateA = new Date(a.created_at || a.date || 0).getTime();
      const dateB = new Date(b.created_at || b.date || 0).getTime();
      return dateB - dateA;
    });

    const allAcademies = [...dbAcademy, ...localAcademy].sort((a, b) => {
      const dateA = new Date(a.created_at || a.date || 0).getTime();
      const dateB = new Date(b.created_at || b.date || 0).getTime();
      return dateB - dateA;
    });

    const allQuizzes = [...dbQuiz, ...localQuiz].sort((a, b) => {
      const dateA = new Date(a.created_at || a.date || 0).getTime();
      const dateB = new Date(b.created_at || b.date || 0).getTime();
      return dateB - dateA;
    });

    const allCustomers = [...dbCustomer, ...localCustomer].sort((a, b) => {
      const dateA = new Date(a.created_at || a.date || 0).getTime();
      const dateB = new Date(b.created_at || b.date || 0).getTime();
      return dateB - dateA;
    });

    setPartnerLeads(allPartners);
    setAcademyRegistrations(allAcademies);
    setQuizLeads(allQuizzes);
    setCustomerLeads(allCustomers);
    setIsLoading(false);
  };

  const handleClearLocalStorage = () => {
    if (window.confirm("Are you sure you want to clear local storage entries? Database entries will not be deleted.")) {
      localStorage.removeItem("partner_leads");
      localStorage.removeItem("academy_registrations");
      localStorage.removeItem("quiz_leads");
      localStorage.removeItem("customer_leads");
      toast.success("Local storage leads cleared!");
      loadLeads();
    }
  };

  const handleDeleteLead = async (lead: LocalLead, leadType: "partner" | "academy" | "quiz" | "customer") => {
    if (!window.confirm("Are you sure you want to permanently delete this lead?")) return;

    // 1. Delete from database if it has an id
    if (lead.id) {
      const table = leadType === "partner" 
        ? "partner_leads" 
        : leadType === "academy" 
          ? "academy_registrations" 
          : leadType === "quiz" 
            ? "quiz_leads" 
            : "customer_leads";
      const { error } = await supabase.from(table).delete().eq("id", lead.id);
      if (error) {
        toast.error("Failed to delete lead from database: " + error.message);
        return;
      }
    }

    // 2. Delete from local storage fallback
    try {
      const storageKey = leadType === "partner" 
        ? "partner_leads" 
        : leadType === "academy" 
          ? "academy_registrations" 
          : leadType === "quiz" 
            ? "quiz_leads" 
            : "customer_leads";
      const localData: LocalLead[] = JSON.parse(localStorage.getItem(storageKey) || "[]");
      const filtered = localData.filter(x => {
        if (lead.id && x.id) return x.id !== lead.id;
        const xDate = x.created_at || x.date || "";
        const leadDate = lead.created_at || lead.date || "";
        return !(x.email === lead.email && xDate === leadDate);
      });
      localStorage.setItem(storageKey, JSON.stringify(filtered));
    } catch (e) {
      console.error("Failed to update local storage after delete", e);
    }

    toast.success("Lead successfully deleted!");
    loadLeads();
  };

  const handleExportCSV = () => {
    const listToExport = activeTab === "partner" 
      ? filteredPartnerLeads 
      : activeTab === "academy" 
        ? filteredAcademyLeads 
        : activeTab === "quiz"
          ? filteredQuizLeads
          : filteredCustomerLeads;

    if (listToExport.length === 0) {
      toast.error("No data available to export.");
      return;
    }

    let csvContent = "";
    if (activeTab === "partner") {
      csvContent += "Name,Email,Mobile,Selection,Source Page,Date\n";
      listToExport.forEach((lead) => {
        const date = lead.created_at || lead.date || "";
        const name = lead.name.replace(/"/g, '""');
        const email = lead.email.replace(/"/g, '""');
        const mobile = (lead.mobile || "").replace(/"/g, '""');
        const selection = (lead.lead_type || lead.leadType || "").replace(/"/g, '""');
        const page = (lead.source_page || lead.sourcePage || "").replace(/"/g, '""');
        csvContent += `"${name}","${email}","${mobile}","${selection}","${page}","${date}"\n`;
      });
    } else if (activeTab === "academy") {
      csvContent += "Name,Email,Academy Opt-In,Date\n";
      listToExport.forEach((lead) => {
        const date = lead.created_at || lead.date || "";
        const name = lead.name.replace(/"/g, '""');
        const email = lead.email.replace(/"/g, '""');
        const optIn = lead.academy_opt_in ?? lead.academyOptIn ?? true;
        csvContent += `"${name}","${email}","${optIn ? "Checked" : "Unchecked"}","${date}"\n`;
      });
    } else if (activeTab === "quiz") {
      csvContent += "Name,Email,Phone,Primary Goal,Assigned Doctor,Consultation Date,Consultation Time,Referrer Code,Date\n";
      listToExport.forEach((lead) => {
        const date = lead.created_at || lead.date || "";
        const name = lead.name.replace(/"/g, '""');
        const email = lead.email.replace(/"/g, '""');
        const phone = (lead.phone || "").replace(/"/g, '""');
        const goal = (lead.goal || "").replace(/"/g, '""');
        const specialist = (lead.specialist || "").replace(/"/g, '""');
        const bookDate = (lead.date || "").replace(/"/g, '""');
        const bookTime = (lead.time || "").replace(/"/g, '""');
        const ref = (lead.referrer_code || lead.referrerCode || "").replace(/"/g, '""');
        csvContent += `"${name}","${email}","${phone}","${goal}","${specialist}","${bookDate}","${bookTime}","${ref}","${date}"\n`;
      });
    } else {
      csvContent += "Name,Email,Phone,Pathway,Postcode,Referrer Code,Date\n";
      listToExport.forEach((lead) => {
        const date = lead.created_at || lead.date || "";
        const name = lead.name.replace(/"/g, '""');
        const email = lead.email.replace(/"/g, '""');
        const phone = (lead.phone || "").replace(/"/g, '""');
        const pathway = (lead.pathway || lead.goal || "").replace(/"/g, '""');
        const postcode = (lead.postcode || "").replace(/"/g, '""');
        const ref = (lead.referrer_code || lead.referrerCode || "").replace(/"/g, '""');
        csvContent += `"${name}","${email}","${phone}","${pathway}","${postcode}","${ref}","${date}"\n`;
      });
    }

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `TBN_Leads_${activeTab}_${new Date().toISOString().split("T")[0]}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("CSV Export downloaded successfully.");
  };

  // Search filtering
  const filteredPartnerLeads = partnerLeads.filter((lead) => {
    const query = searchTerm.toLowerCase();
    return (
      lead.name.toLowerCase().includes(query) ||
      lead.email.toLowerCase().includes(query) ||
      (lead.mobile || "").toLowerCase().includes(query) ||
      (lead.source_page || lead.sourcePage || "").toLowerCase().includes(query)
    );
  });

  const filteredAcademyLeads = academyRegistrations.filter((lead) => {
    const query = searchTerm.toLowerCase();
    return (
      lead.name.toLowerCase().includes(query) ||
      lead.email.toLowerCase().includes(query)
    );
  });

  const filteredQuizLeads = quizLeads.filter((lead) => {
    const query = searchTerm.toLowerCase();
    return (
      lead.name.toLowerCase().includes(query) ||
      lead.email.toLowerCase().includes(query) ||
      (lead.phone || "").toLowerCase().includes(query) ||
      (lead.goal || "").toLowerCase().includes(query) ||
      (lead.specialist || "").toLowerCase().includes(query) ||
      (lead.referrer_code || lead.referrerCode || "").toLowerCase().includes(query)
    );
  });

  const filteredCustomerLeads = customerLeads.filter((lead) => {
    const query = searchTerm.toLowerCase();
    return (
      lead.name.toLowerCase().includes(query) ||
      lead.email.toLowerCase().includes(query) ||
      (lead.phone || "").toLowerCase().includes(query) ||
      (lead.pathway || lead.goal || "").toLowerCase().includes(query) ||
      (lead.postcode || "").toLowerCase().includes(query) ||
      (lead.referrer_code || lead.referrerCode || "").toLowerCase().includes(query)
    );
  });

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
                Please enter the administrator password to access Captured Leads.
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
                Access Dashboard
              </button>
            </form>
          </div>
        </div>

        <Footer hideInstagram={true} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf8f5] flex flex-col justify-between">
      <Navbar alwaysSolid={true} />

      <div className="flex-grow container px-6 pt-32 pb-24 max-w-6xl">
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-[#dbd4c9]/60 pb-6 mb-8">
          <div>
            <h1 className="font-playfair text-3xl font-bold text-gray-900">Captured Leads Portal</h1>
            <p className="font-montserrat text-xs text-gray-500 mt-1">
              Review and manage partnership inquiries and academy registrations of interest.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => navigate("/admin/affiliates")}
              className="flex items-center gap-2 px-4 py-2 bg-[#9f1e13] hover:bg-[#861910] text-white border border-[#9f1e13] rounded-xl text-xs font-bold transition-all shadow-sm"
            >
              <BarChart3 className="w-3.5 h-3.5" />
              Affiliate Tracking
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 border border-[#dbd4c9] rounded-xl text-xs font-bold text-gray-700 bg-white hover:bg-gray-50 transition-all"
            >
              <LogOut className="w-3.5 h-3.5" />
              Logout
            </button>
          </div>
        </div>

        {/* Statistical Overview cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <div className="bg-white border border-[#dbd4c9] rounded-2xl p-6 flex items-center gap-4 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#9f1e13]/10 flex items-center justify-center text-[#9f1e13] shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Partner Leads</p>
              <h3 className="text-3xl font-bold text-gray-950 mt-1">{partnerLeads.length}</h3>
            </div>
          </div>

          <div className="bg-white border border-[#dbd4c9] rounded-2xl p-6 flex items-center gap-4 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#1a3646]/10 flex items-center justify-center text-[#1a3646] shrink-0">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Academy Inquiries</p>
              <h3 className="text-3xl font-bold text-gray-950 mt-1">{academyRegistrations.length}</h3>
            </div>
          </div>

          <div className="bg-white border border-[#dbd4c9] rounded-2xl p-6 flex items-center gap-4 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-700 shrink-0">
              <Stethoscope className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Quiz Enquiries</p>
              <h3 className="text-3xl font-bold text-gray-950 mt-1">{quizLeads.length}</h3>
            </div>
          </div>

          <div className="bg-white border border-[#dbd4c9] rounded-2xl p-6 flex items-center gap-4 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-700 shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Customer Leads</p>
              <h3 className="text-3xl font-bold text-gray-950 mt-1">{customerLeads.length}</h3>
            </div>
          </div>

          <div className="bg-white border border-[#dbd4c9] rounded-2xl p-6 flex items-center justify-between shadow-sm sm:col-span-2 lg:col-span-1">
            <div className="space-y-1">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Storage Fallbacks</p>
              <p className="text-[11px] text-gray-500">Local testing data stored inside browser.</p>
            </div>
            <button
              onClick={handleClearLocalStorage}
              className="flex items-center gap-1.5 px-3.5 py-2 border border-red-200 text-red-600 hover:bg-red-50 text-xs font-semibold rounded-xl transition-all"
            >
              <Trash2 className="w-3.5 h-3.5" />
              Clear Local
            </button>
          </div>
        </div>

        {/* Filters and Tab Navigation bar */}
        <div className="bg-white border border-[#dbd4c9] rounded-2xl p-4 shadow-sm space-y-4 mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            {/* Tab switchers */}
            <div className="flex gap-2 p-1 bg-gray-100 rounded-xl w-full sm:w-auto">
              <button
                onClick={() => {
                  setActiveTab("partner");
                  setSearchTerm("");
                }}
                className={`flex-1 sm:flex-initial px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeTab === "partner"
                    ? "bg-[#9f1e13] text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Partner Leads
              </button>
              <button
                onClick={() => {
                  setActiveTab("academy");
                  setSearchTerm("");
                }}
                className={`flex-1 sm:flex-initial px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeTab === "academy"
                    ? "bg-[#9f1e13] text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Academy Registrations
              </button>
              <button
                onClick={() => {
                  setActiveTab("quiz");
                  setSearchTerm("");
                }}
                className={`flex-1 sm:flex-initial px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeTab === "quiz"
                    ? "bg-[#9f1e13] text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Quiz Enquiries
              </button>
              <button
                onClick={() => {
                  setActiveTab("customer");
                  setSearchTerm("");
                }}
                className={`flex-1 sm:flex-initial px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeTab === "customer"
                    ? "bg-[#9f1e13] text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Customer Leads
              </button>
            </div>

            {/* Actions (Export) */}
            <button
              onClick={handleExportCSV}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 bg-[#1a3646] hover:bg-[#112430] text-white text-xs font-bold rounded-xl transition-all shadow-sm"
            >
              <Download className="w-4 h-4" />
              Export current list to CSV
            </button>
          </div>

          {/* Search box */}
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-gray-400" />
            <input
              type="text"
              placeholder={
                activeTab === "partner"
                  ? "Search partner leads by name, email, mobile, source page..."
                  : activeTab === "academy"
                  ? "Search academy registrations by name, email..."
                  : activeTab === "quiz"
                  ? "Search quiz enquiries by name, email, phone, doctor, goal..."
                  : "Search customer leads by name, email, phone, pathway, postcode..."
              }
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-11 pl-10 pr-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#9f1e13] focus:ring-1 focus:ring-[#9f1e13] transition-all text-xs"
            />
          </div>
        </div>

        {/* Results table */}
        <div className="bg-white border border-[#dbd4c9] rounded-2xl overflow-hidden shadow-sm">
          {isLoading ? (
            <div className="p-12 text-center text-gray-500 font-montserrat text-sm">
              Loading Captured Leads...
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-[#dbd4c9]/60 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                    <th className="px-6 py-4">Name</th>
                    <th className="px-6 py-4">Email</th>
                    {activeTab === "partner" ? (
                      <>
                        <th className="px-6 py-4">Mobile</th>
                        <th className="px-6 py-4">Option Chosen</th>
                        <th className="px-6 py-4">Source Page</th>
                      </>
                    ) : activeTab === "academy" ? (
                      <th className="px-6 py-4">Academy Updates</th>
                    ) : activeTab === "quiz" ? (
                      <>
                        <th className="px-6 py-4">Phone</th>
                        <th className="px-6 py-4">Goal</th>
                        <th className="px-6 py-4">TBN Doctor</th>
                        <th className="px-6 py-4">Consultation Slot</th>
                      </>
                    ) : (
                      <>
                        <th className="px-6 py-4">Phone</th>
                        <th className="px-6 py-4">Pathway</th>
                        <th className="px-6 py-4">Postcode</th>
                        <th className="px-6 py-4">Referrer</th>
                      </>
                    )}
                    <th className="px-6 py-4">Date Captured</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 font-montserrat text-xs text-gray-700">
                  {activeTab === "partner" ? (
                    filteredPartnerLeads.length > 0 ? (
                      filteredPartnerLeads.map((lead, idx) => (
                        <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                          <td className="px-6 py-4 font-bold text-gray-900">{lead.name}</td>
                          <td className="px-6 py-4 text-gray-650 font-semibold">{lead.email}</td>
                          <td className="px-6 py-4">{lead.mobile || "—"}</td>
                          <td className="px-6 py-4">
                            <span className="px-2.5 py-1 text-[10px] font-bold rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                              {lead.lead_type || lead.leadType}
                            </span>
                          </td>
                          <td className="px-6 py-4 font-medium text-[#9f1e13]">{lead.source_page || lead.sourcePage}</td>
                          <td className="px-6 py-4 text-gray-400">
                            {new Date(lead.created_at || lead.date || "").toLocaleString()}
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button
                              onClick={() => handleDeleteLead(lead, "partner")}
                              className="text-red-500 hover:text-red-700 p-1 hover:bg-red-50 rounded transition-colors inline-flex items-center"
                              title="Delete Lead"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={7} className="px-6 py-12 text-center text-gray-400 italic">
                          No partner leads found matching the filter.
                        </td>
                      </tr>
                    )
                  ) : activeTab === "academy" ? (
                    filteredAcademyLeads.length > 0 ? (
                      filteredAcademyLeads.map((lead, idx) => {
                        const optIn = lead.academy_opt_in ?? lead.academyOptIn ?? true;
                        return (
                          <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                            <td className="px-6 py-4 font-bold text-gray-900">{lead.name}</td>
                            <td className="px-6 py-4 text-gray-650 font-semibold">{lead.email}</td>
                            <td className="px-6 py-4">
                              <span className={`px-2.5 py-1 text-[10px] font-bold rounded-full ${
                                optIn 
                                  ? "bg-[#1a3646]/10 text-[#1a3646] border border-[#1a3646]/20" 
                                  : "bg-gray-100 text-gray-400 border border-gray-200"
                              }`}>
                                {optIn ? "Opted In" : "Opted Out"}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-gray-400">
                              {new Date(lead.created_at || lead.date || "").toLocaleString()}
                            </td>
                            <td className="px-6 py-4 text-right">
                              <button
                                onClick={() => handleDeleteLead(lead, "academy")}
                                className="text-red-500 hover:text-red-700 p-1 hover:bg-red-50 rounded transition-colors inline-flex items-center"
                                title="Delete Lead"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td colSpan={5} className="px-6 py-12 text-center text-gray-400 italic">
                          No academy registrations found matching the filter.
                        </td>
                      </tr>
                    )
                  ) : activeTab === "quiz" ? (
                    filteredQuizLeads.length > 0 ? (
                      filteredQuizLeads.map((lead, idx) => (
                        <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                          <td className="px-6 py-4 font-bold text-gray-900">{lead.name}</td>
                          <td className="px-6 py-4 text-gray-650 font-semibold">{lead.email}</td>
                          <td className="px-6 py-4">{lead.phone || "—"}</td>
                          <td className="px-6 py-4">
                            <span className="px-2.5 py-1 text-[10px] font-bold rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100 uppercase">
                              {lead.goal ? lead.goal.replace("-", " ") : "—"}
                            </span>
                          </td>
                          <td className="px-6 py-4 font-medium text-[#1a3646]">{lead.specialist || "—"}</td>
                          <td className="px-6 py-4">
                            {lead.date && lead.time ? (
                              <span className="bg-[#faf8f5] border border-[#dbd4c9] text-gray-700 px-2.5 py-1 rounded-lg text-[10px] font-semibold">
                                {lead.date} at {lead.time}
                              </span>
                            ) : "—"}
                          </td>
                          <td className="px-6 py-4 text-gray-400">
                            {new Date(lead.created_at || lead.date || "").toLocaleString()}
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button
                              onClick={() => handleDeleteLead(lead, "quiz")}
                              className="text-red-500 hover:text-red-700 p-1 hover:bg-red-50 rounded transition-colors inline-flex items-center"
                              title="Delete Lead"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={8} className="px-6 py-12 text-center text-gray-400 italic">
                          No quiz enquiries found matching the filter.
                        </td>
                      </tr>
                    )
                  ) : (
                    filteredCustomerLeads.length > 0 ? (
                      filteredCustomerLeads.map((lead, idx) => (
                        <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                          <td className="px-6 py-4 font-bold text-gray-900">{lead.name}</td>
                          <td className="px-6 py-4 text-gray-650 font-semibold">{lead.email}</td>
                          <td className="px-6 py-4 font-medium">{lead.phone || "—"}</td>
                          <td className="px-6 py-4">
                            <span className="px-2.5 py-1 text-[10px] font-bold rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 uppercase">
                              {lead.pathway || lead.goal || "—"}
                            </span>
                          </td>
                          <td className="px-6 py-4 font-medium">{lead.postcode || "—"}</td>
                          <td className="px-6 py-4 text-gray-550 font-medium">
                            {lead.referrer_code || lead.referrerCode ? (
                              <span className="bg-amber-50 border border-amber-100 text-amber-800 px-2 py-0.5 rounded text-[10px] font-bold">
                                {lead.referrer_code || lead.referrerCode}
                              </span>
                            ) : "—"}
                          </td>
                          <td className="px-6 py-4 text-gray-400">
                            {new Date(lead.created_at || lead.date || "").toLocaleString()}
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button
                              onClick={() => handleDeleteLead(lead, "customer")}
                              className="text-red-500 hover:text-red-700 p-1 hover:bg-red-50 rounded transition-colors inline-flex items-center"
                              title="Delete Lead"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={8} className="px-6 py-12 text-center text-gray-400 italic">
                          No customer leads found matching the filter.
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      <Footer hideInstagram={true} />
    </div>
  );
}
