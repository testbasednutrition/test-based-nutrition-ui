import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { Download, Trash2, Key, Users, BookOpen, Search, LogOut } from "lucide-react";

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
  academyOptIn?: boolean;
  academy_opt_in?: boolean;
}

export default function AdminLeads() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<"partner" | "academy">("partner");
  const [searchTerm, setSearchTerm] = useState("");

  const [partnerLeads, setPartnerLeads] = useState<LocalLead[]>([]);
  const [academyRegistrations, setAcademyRegistrations] = useState<LocalLead[]>([]);
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
    try {
      localPartner = JSON.parse(localStorage.getItem("partner_leads") || "[]");
      localAcademy = JSON.parse(localStorage.getItem("academy_registrations") || "[]");
    } catch (e) {
      console.error("Failed to parse local storage", e);
    }

    // --- 2. Load Supabase Leads (if available) ---
    let dbPartner: LocalLead[] = [];
    let dbAcademy: LocalLead[] = [];
    
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

    setPartnerLeads(allPartners);
    setAcademyRegistrations(allAcademies);
    setIsLoading(false);
  };

  const handleClearLocalStorage = () => {
    if (window.confirm("Are you sure you want to clear local storage entries? Database entries will not be deleted.")) {
      localStorage.removeItem("partner_leads");
      localStorage.removeItem("academy_registrations");
      toast.success("Local storage leads cleared!");
      loadLeads();
    }
  };

  const handleExportCSV = () => {
    const listToExport = activeTab === "partner" ? filteredPartnerLeads : filteredAcademyLeads;
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
    } else {
      csvContent += "Name,Email,Academy Opt-In,Date\n";
      listToExport.forEach((lead) => {
        const date = lead.created_at || lead.date || "";
        const name = lead.name.replace(/"/g, '""');
        const email = lead.email.replace(/"/g, '""');
        const optIn = lead.academy_opt_in ?? lead.academyOptIn ?? true;
        csvContent += `"${name}","${email}","${optIn ? "Checked" : "Unchecked"}","${date}"\n`;
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

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#f9f5f2] flex flex-col justify-between">
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

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f9f5f2] flex flex-col justify-between">
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
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 border border-[#dbd4c9] rounded-xl text-xs font-bold text-gray-700 bg-white hover:bg-gray-50 transition-all"
          >
            <LogOut className="w-3.5 h-3.5" />
            Logout
          </button>
        </div>

        {/* Statistical Overview cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
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
              placeholder={`Search leads by name, email, or mobile...`}
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
                    ) : (
                      <th className="px-6 py-4">Academy Updates</th>
                    )}
                    <th className="px-6 py-4">Date Captured</th>
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
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={6} className="px-6 py-12 text-center text-gray-400 italic">
                          No partner leads found matching the filter.
                        </td>
                      </tr>
                    )
                  ) : filteredAcademyLeads.length > 0 ? (
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
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan={4} className="px-6 py-12 text-center text-gray-400 italic">
                        No academy registrations found matching the filter.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
