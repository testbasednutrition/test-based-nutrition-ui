import { useState } from "react";
import { Check, CheckCircle2, Loader2, X } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

interface PartnerLeadFormProps {
  partnerLabel?: string;
  inviteLabel?: string;
  sourcePage: string;
}

export default function PartnerLeadForm({
  partnerLabel = "Become a Partner",
  inviteLabel = "Invite Us to Your Clinic",
  sourcePage,
}: PartnerLeadFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [leadType, setLeadType] = useState<"partner" | "clinic" | "ambassador">("partner");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOpen = (type: "partner" | "clinic" | "ambassador") => {
    setLeadType(type);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsSubmitted(false);
    setName("");
    setEmail("");
    setMobile("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const chosenOption = 
      leadType === "partner" 
        ? partnerLabel 
        : leadType === "clinic" 
          ? inviteLabel 
          : "Become a TBN Brand Ambassador";
    const referrerCode = localStorage.getItem("tbn_referrer_code");

    try {
      const { error } = await supabase.from("partner_leads").insert([
        {
          name,
          email,
          mobile,
          lead_type: chosenOption,
          source_page: sourcePage,
          referrer_code: referrerCode || null,
          created_at: new Date().toISOString(),
        },
      ]);

      if (error) throw error;
      toast.success("Interest submitted successfully!");
    } catch (err) {
      console.warn("Supabase submission failed, falling back to local storage:", err);
      try {
        const localData = JSON.parse(localStorage.getItem("partner_leads") || "[]");
        localData.push({
          name,
          email,
          mobile,
          leadType: chosenOption,
          sourcePage,
          referrerCode: referrerCode || null,
          date: new Date().toISOString(),
        });
        localStorage.setItem("partner_leads", JSON.stringify(localData));
        toast.success("Interest saved locally!");
      } catch (storageErr) {
        console.error("Local storage fallback failed:", storageErr);
      }
    } finally {
      setIsLoading(false);
      setIsSubmitted(true);
    }

    // Trigger background email notification via Next.js partner-hub API
    try {
      const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
      const baseUrl = isLocal ? "http://localhost:3000" : "https://partner-hub-jade.vercel.app";
      
      const apiRes = await fetch(`${baseUrl}/api/leads/notify`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          mobile,
          selection: chosenOption,
          sourcePage
        })
      });

      if (!apiRes.ok) throw new Error("API response was not ok");
      console.log("Background email notification sent successfully via partner-hub!");
    } catch (err) {
      console.warn("Background email notification failed, launching client-side fallback mailto:", err);
      // Launch mailto option fallback
      const mailtoUrl = `mailto:thinkjsk@gmail.com?subject=${encodeURIComponent(
        `TBN Partnership Inquiry - ${chosenOption}`
      )}&body=${encodeURIComponent(
        `Hello Admin,\n\nWe have received a new partnership lead.\n\nDetails:\n- Name: ${name}\n- Email: ${email}\n- Mobile: ${mobile}\n- Selection: ${chosenOption}\n- Source Page: ${sourcePage}\n- Referrer Partner: ${referrerCode || "None"}\n\nDate: ${new Date().toLocaleDateString()}\n\nKind regards,\nTBN System`
      )}`;
      
      // Smooth delay before triggering mailto so the user sees the success state
      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 800);
    }
  };

  return (
    <div className="w-full">
      {/* Original Inline CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={() => handleOpen("partner")}
          className="flex-1 bg-[#9f1e13] text-white px-5 py-4 rounded-xl font-bold text-[12px] md:text-[13px] uppercase tracking-wider hover:bg-[#861910] transition-colors shadow-sm text-center"
        >
          {partnerLabel}
        </button>
        <button
          onClick={() => handleOpen("clinic")}
          className="flex-1 bg-white border border-gray-200 text-gray-900 px-5 py-4 rounded-xl font-bold text-[12px] md:text-[13px] uppercase tracking-wider hover:bg-gray-50 transition-colors shadow-sm text-center"
        >
          {inviteLabel}
        </button>
      </div>

      {/* Modal Popup Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          {/* Backdrop Click Close */}
          <div className="absolute inset-0" onClick={handleClose} />

          {/* Modal Content */}
          <div className="bg-[#faf8f5] border border-[#dbd4c9] rounded-3xl p-6 md:p-8 w-full max-w-md relative z-10 shadow-2xl animate-in fade-in zoom-in duration-250">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors p-1.5 rounded-full hover:bg-gray-100/50"
            >
              <X className="w-4 h-4" />
            </button>

            {isSubmitted ? (
              <div className="text-center space-y-4 py-4">
                <CheckCircle2 className="w-14 h-14 mx-auto text-[#9f1e13] animate-bounce" />
                <h4 className="font-playfair text-2xl font-bold text-gray-900">Thank You!</h4>
                <p className="text-xs text-gray-600 leading-relaxed max-w-xs mx-auto">
                  Your request has been saved. We are redirecting you to your email client to notify our team.
                </p>
                <div className="pt-2">
                  <button
                    onClick={handleClose}
                    className="px-6 py-2.5 bg-[#9f1e13] hover:bg-[#861910] text-white text-[11px] uppercase tracking-wider font-bold rounded-xl transition-all"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <h3 className="font-playfair text-[22px] font-bold text-gray-900 leading-tight mb-1">
                    Partner With TBN
                  </h3>
                  <p className="font-montserrat text-xs text-gray-500">
                    Provide your contact details below to get started.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Styled Checkboxes (Intention) */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 pl-0.5">
                      Your Intention
                    </label>
                    <div className="flex flex-col gap-2">
                      <button
                        type="button"
                        onClick={() => setLeadType("partner")}
                        className={`w-full flex items-center justify-start gap-2.5 px-3 py-2.5 rounded-xl border text-[12px] font-bold uppercase tracking-wider transition-all duration-200 text-left ${
                          leadType === "partner"
                            ? "bg-[#9f1e13] border-[#9f1e13] text-white shadow-sm"
                            : "bg-white border-[#dbd4c9] text-gray-700 hover:bg-gray-50/50"
                        }`}
                      >
                        <div
                          className={`w-4.5 h-4.5 rounded-md border flex items-center justify-center transition-colors shrink-0 ${
                            leadType === "partner"
                              ? "bg-white border-white text-[#9f1e13]"
                              : "bg-white border-gray-300"
                          }`}
                        >
                          {leadType === "partner" && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="truncate">{partnerLabel}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setLeadType("clinic")}
                        className={`w-full flex items-center justify-start gap-2.5 px-3 py-2.5 rounded-xl border text-[12px] font-bold uppercase tracking-wider transition-all duration-200 text-left ${
                          leadType === "clinic"
                            ? "bg-[#9f1e13] border-[#9f1e13] text-white shadow-sm"
                            : "bg-white border-[#dbd4c9] text-gray-700 hover:bg-gray-50/50"
                        }`}
                      >
                        <div
                          className={`w-4.5 h-4.5 rounded-md border flex items-center justify-center transition-colors shrink-0 ${
                            leadType === "clinic"
                              ? "bg-white border-white text-[#9f1e13]"
                              : "bg-white border-gray-300"
                          }`}
                        >
                          {leadType === "clinic" && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="truncate">{inviteLabel}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setLeadType("ambassador")}
                        className={`w-full flex items-center justify-start gap-2.5 px-3 py-2.5 rounded-xl border text-[12px] font-bold uppercase tracking-wider transition-all duration-200 text-left ${
                          leadType === "ambassador"
                            ? "bg-[#9f1e13] border-[#9f1e13] text-white shadow-sm"
                            : "bg-white border-[#dbd4c9] text-gray-700 hover:bg-gray-50/50"
                        }`}
                      >
                        <div
                          className={`w-4.5 h-4.5 rounded-md border flex items-center justify-center transition-colors shrink-0 ${
                            leadType === "ambassador"
                              ? "bg-white border-white text-[#9f1e13]"
                              : "bg-white border-gray-300"
                          }`}
                        >
                          {leadType === "ambassador" && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="truncate">Become a TBN Brand Ambassador</span>
                      </button>
                    </div>
                  </div>

                  {/* Staged vertical inputs for maximum length and readability */}
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 pl-0.5">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        disabled={isLoading}
                        className="w-full h-10 px-3.5 rounded-xl bg-white border border-[#dbd4c9] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#9f1e13] focus:ring-1 focus:ring-[#9f1e13] transition-all text-xs"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 pl-0.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isLoading}
                        className="w-full h-10 px-3.5 rounded-xl bg-white border border-[#dbd4c9] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#9f1e13] focus:ring-1 focus:ring-[#9f1e13] transition-all text-xs"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 pl-0.5">
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Mobile Number"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        disabled={isLoading}
                        className="w-full h-10 px-3.5 rounded-xl bg-white border border-[#dbd4c9] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#9f1e13] focus:ring-1 focus:ring-[#9f1e13] transition-all text-xs"
                      />
                    </div>
                  </div>

                  {/* Centered Submit Button */}
                  <div className="flex justify-center pt-2">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full h-11 bg-[#9f1e13] hover:bg-[#861910] disabled:bg-gray-400 text-white font-bold text-[11px] uppercase tracking-widest rounded-xl transition-all shadow-sm flex items-center justify-center gap-2"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Submit Request"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
