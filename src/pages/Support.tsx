import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  LifeBuoy, Stethoscope, Users, Check, AlertCircle, 
  ChevronDown, Send, CheckCircle2, ArrowLeft 
} from "lucide-react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { Link } from "react-router-dom";

export default function SupportPage() {
  const [user, setUser] = useState<any>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    category: "general",
    patientId: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) {
        setUser(user);
        setForm(prev => ({ ...prev, email: user.email || "" }));
        
        // Load user name details if profile is set up
        supabase
          .from("profiles")
          .select("first_name, last_name")
          .eq("id", user.id)
          .maybeSingle()
          .then(({ data: profile }) => {
            if (profile) {
              const name = `${profile.first_name || ""} ${profile.last_name || ""}`.trim();
              if (name) {
                setForm(prev => ({ ...prev, name }));
              }
            }
          });
      }
    });
  }, []);

  const supportCategories = [
    {
      title: "Clinical Case Support",
      desc: "For questions about interpreting unusual blood profiles, complex patient symptom paths, and escalation triggers.",
      icon: Stethoscope,
      hours: "Mon-Fri, 9:00 - 17:00"
    },
    {
      title: "Partner Support",
      desc: "For help with kit order status, back-office points tracking, portal errors, or commission payouts.",
      icon: LifeBuoy,
      hours: "24/7 Digital Ticket Desk"
    },
    {
      title: "Press & Marketing",
      desc: "For inquiries regarding press releases, brand marketing materials, media kits, or public outreach.",
      icon: Users,
      hours: "Mon-Fri, 9:00 - 17:00"
    }
  ];

  const faqs = [
    {
      q: "How long do dry blood spot laboratory results take?",
      a: "Typically, dry blood spot samples (such as the Omega Balance Test) are analyzed and results uploaded to your partner dashboard within 10 to 14 business days from the date they are mailed."
    },
    {
      q: "Can point-of-care baseline screening tests be run on children?",
      a: "Yes, certain baseline screening finger-prick tests (like Vitamin D) are suitable for pediatric and teen pathways. However, please consult the specific children & teen pathway protocol guides for dosage and reference range adjustments."
    },
    {
      q: "What is Zinzino Fast Start qualification exactly?",
      a: "Fast Start is Zinzino's primary onboarding target for new clinic partners: securing 25 active personal customer subscriptions within your first 90 days of registration. Achieving this unlocks advanced retail payouts."
    },
    {
      q: "How do I update my public directory profile?",
      a: "You can update your practitioner details, specialty areas, clinic hours, and affiliate links by logging into the Partner Portal and clicking 'My Profile'."
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.message || !form.email || !form.name) return;

    setIsLoading(true);
    setSubmitted(false);
    setErrorMsg(null);

    try {
      let submissionError = null;

      // If user is authenticated, write to support_tickets table
      if (user) {
        const { error } = await supabase
          .from("support_tickets")
          .insert([
            {
              user_id: user.id,
              user_email: form.email,
              category: form.category,
              patient_id: form.patientId || null,
              message: `Name: ${form.name}. Message: ${form.message}`,
              status: "open"
            }
          ]);
        submissionError = error;
      } else {
        // If unauthenticated visitor, write to partner_leads (public table)
        const { error } = await supabase
          .from("partner_leads")
          .insert([
            {
              name: form.name,
              email: form.email,
              mobile: form.phone || null,
              lead_type: `Support Request (${form.category})`,
              source_page: "Website Support Centre",
              referrer_code: form.patientId ? `Patient ID: ${form.patientId}` : "public-support",
              created_at: new Date().toISOString(),
            }
          ]);
        submissionError = error;
      }

      if (submissionError) throw submissionError;

      // Dispatch background email alert using portal Resend endpoint
      try {
        const baseUrl = "https://partner-hub-jade.vercel.app";
        
        await fetch(`${baseUrl}/api/leads/notify`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            selection: `Support Request (${form.category})`,
            sourcePage: "Website Support Centre",
            message: `Category: ${form.category}\nPatient ID / Lab Barcode: ${form.patientId || "N/A"}\nPhone: ${form.phone || "N/A"}\n\nMessage Description:\n${form.message}`
          })
        });
      } catch (emailErr) {
        console.error("Resend API trigger notification fail (non-blocking):", emailErr);
      }

      setSubmitted(true);
      setForm(prev => ({ ...prev, message: "", patientId: "" }));
      toast.success("Support ticket submitted successfully!");
    } catch (err: any) {
      console.error("Support submission error:", err);
      setErrorMsg(err.message || "Failed to submit support request.");
      toast.error("Failed to submit support request.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SEO 
        title="Support Centre & Clinical Help | Test-Based Nutrition"
        description="Submit clinical case inquiries, kit status questions, or general support tickets. Access practitioner FAQs and assistance."
        canonical="https://testbasednutrition.com/support"
      />
      <SchemaMarkup 
        type="FAQPage" 
        faqs={faqs.map(f => ({ question: f.q, answer: f.a }))} 
      />
      <Navbar alwaysSolid />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-4 md:px-8 w-full space-y-8">
          
          {/* Header */}
          <div className="border-b border-border/60 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5">
                <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
                <span>/</span>
                <span className="text-foreground">Support Centre</span>
              </div>
              <h1 className="text-3xl font-serif text-foreground tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
                Support Centre
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                Access clinical consultation guidance, submit support tickets, and review practitioner FAQs.
              </p>
            </div>
            
            <Link to="/partner-with-us" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#9f1e13] hover:underline shrink-0">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Partner Program
            </Link>
          </div>

          {/* Support Categories Cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {supportCategories.map((cat, idx) => (
              <div key={idx} className="bg-card border border-border/80 rounded-2xl p-5 shadow-xs hover:shadow-sm transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="p-2.5 rounded-xl bg-muted/30 border border-border text-[#9f1e13] w-fit">
                    <cat.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-sm font-bold text-foreground leading-tight" style={{ fontFamily: "Georgia, serif" }}>
                    {cat.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-border/60 flex items-center justify-between text-[10px] font-bold text-muted-foreground/80">
                  <span>Availability:</span>
                  <span className="text-foreground">{cat.hours}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Form and FAQ Section */}
          <div className="grid gap-8 md:grid-cols-2 mt-4">
            
            {/* Support Request Form */}
            <div className="bg-card border border-border/80 rounded-2xl p-6 shadow-xs flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-lg font-bold text-foreground border-b border-border/60 pb-3" style={{ fontFamily: "Georgia, serif" }}>
                  Book Support / Ask a Question
                </h3>
                
                {submitted && (
                  <div className="bg-emerald-50 border border-emerald-250 text-emerald-800 rounded-xl p-4 text-xs font-semibold mt-4 flex items-center gap-2 animate-in fade-in duration-150">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Support request submitted successfully. Our team will reply shortly.</span>
                  </div>
                )}

                {errorMsg && (
                  <div className="bg-red-50 border border-red-250 text-red-800 rounded-xl p-4 text-xs font-semibold mt-4 flex items-center gap-2 animate-in fade-in duration-150">
                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-foreground block mb-1">Your Name</label>
                      <Input
                        type="text"
                        placeholder="Dr. Jane Doe"
                        value={form.name}
                        onChange={(e) => setForm(prev => ({ ...prev, name: e.target.value }))}
                        disabled={isLoading}
                        required
                        className="rounded-xl border-border/80 text-xs focus:ring-[#9f1e13]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-foreground block mb-1">Email Address</label>
                      <Input
                        type="email"
                        placeholder="jane@clinic.com"
                        value={form.email}
                        onChange={(e) => setForm(prev => ({ ...prev, email: e.target.value }))}
                        disabled={isLoading}
                        required
                        className="rounded-xl border-border/80 text-xs focus:ring-[#9f1e13]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-foreground block mb-1">
                        Phone <span className="text-[10px] text-muted-foreground font-normal">(Optional)</span>
                      </label>
                      <Input
                        type="text"
                        placeholder="07700 900077"
                        value={form.phone}
                        onChange={(e) => setForm(prev => ({ ...prev, phone: e.target.value }))}
                        disabled={isLoading}
                        className="rounded-xl border-border/80 text-xs focus:ring-[#9f1e13]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-foreground block mb-1">Inquiry Category</label>
                      <select
                        value={form.category}
                        onChange={(e) => setForm(prev => ({ ...prev, category: e.target.value }))}
                        disabled={isLoading}
                        className="w-full px-3 py-2 border border-input rounded-xl text-xs bg-background focus:outline-none focus:ring-1 focus:ring-[#9f1e13] disabled:opacity-50 h-10 cursor-pointer"
                      >
                        <option value="clinical">Clinical Case Support (Test Interpretations)</option>
                        <option value="partner">Partner Support (Orders & Commissions)</option>
                        <option value="compliance">Press & Marketing</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-foreground block mb-1">
                      Patient ID / Lab Barcode <span className="text-[10px] text-muted-foreground font-normal">(Optional)</span>
                    </label>
                    <Input
                      type="text"
                      placeholder="e.g. LAB-829310"
                      value={form.patientId}
                      onChange={(e) => setForm(prev => ({ ...prev, patientId: e.target.value }))}
                      disabled={isLoading}
                      className="rounded-xl border-border/80 text-xs focus:ring-[#9f1e13]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-foreground block mb-1">Message Description</label>
                    <Textarea
                      rows={5}
                      placeholder="Describe your clinical scenario or question in detail. Do not include patient name or private identifying data."
                      value={form.message}
                      onChange={(e) => setForm(prev => ({ ...prev, message: e.target.value }))}
                      disabled={isLoading}
                      required
                      className="rounded-xl border-border/80 text-xs font-sans focus:ring-[#9f1e13]"
                    />
                  </div>

                  <div className="flex justify-end pt-2">
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="bg-[#9f1e13] hover:bg-[#861910] text-white font-bold text-xs rounded-xl shadow-xs cursor-pointer flex items-center gap-1.5 transition-all disabled:opacity-50 h-10 px-5 border-none"
                    >
                      <Send className="w-3.5 h-3.5" /> {isLoading ? "Submitting..." : "Submit Support Request"}
                    </Button>
                  </div>
                </form>
              </div>
            </div>

            {/* FAQs Accordion */}
            <div className="bg-card border border-border/80 rounded-2xl p-6 shadow-xs h-fit">
              <h3 className="font-serif text-lg font-bold text-foreground border-b border-border/60 pb-3" style={{ fontFamily: "Georgia, serif" }}>
                Frequently Asked Questions
              </h3>

              <div className="space-y-4 mt-4">
                {faqs.map((faq, idx) => {
                  const isExpanded = expandedFaq === idx;
                  return (
                    <div key={idx} className="border-b border-border/60 pb-3 last:border-0 last:pb-0">
                      <div
                        onClick={() => setExpandedFaq(isExpanded ? null : idx)}
                        className="flex justify-between items-start cursor-pointer select-none py-1 group"
                      >
                        <h4 className="text-xs font-bold text-foreground group-hover:text-[#9f1e13] transition-colors pr-4 leading-relaxed">
                          {faq.q}
                        </h4>
                        <ChevronDown className={`w-4 h-4 text-muted-foreground shrink-0 mt-0.5 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`} />
                      </div>
                      
                      {isExpanded && (
                        <p className="text-xs text-muted-foreground mt-2 leading-relaxed pl-1 animate-in slide-in-from-top-1 duration-150">
                          {faq.a}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
