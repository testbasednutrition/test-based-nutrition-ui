import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useQuiz } from "@/components/QuizContext";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { X, Loader2, CheckCircle2 } from "lucide-react";

const GOAL_MAPPING: Record<string, string> = {
  "womens-health": "Women's Health",
  "mens-health": "Men's Health",
  "childrens-health": "Children's Health",
  "neurodivergence": "Neurodivergence",
  "skin-health": "Skin Health",
  "sports-performance": "Sports Performance",
  "pain-fatigue": "Pain & Fatigue",
};

const Quiz = () => {
  const { isOpen, closeQuiz, preselectedGoal } = useQuiz();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pathway, setPathway] = useState("");
  const [postcode, setPostcode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setName("");
      setEmail("");
      setPhone("");
      setPostcode("");
      setIsSubmitted(false);
      setIsLoading(false);
      
      if (preselectedGoal && GOAL_MAPPING[preselectedGoal]) {
        setPathway(GOAL_MAPPING[preselectedGoal]);
      } else {
        setPathway("");
      }
    }
  }, [isOpen, preselectedGoal]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !pathway || !postcode) {
      toast.error("Please fill in all fields.");
      return;
    }
    setIsLoading(true);

    const referrerCode = localStorage.getItem("tbn_referrer_code");

    try {
      const { error } = await supabase.from("customer_leads").insert([
        {
          name,
          email,
          phone,
          pathway,
          postcode,
          referrer_code: referrerCode || null,
          created_at: new Date().toISOString(),
        },
      ]);

      if (error) throw error;
      toast.success("Enquiry submitted successfully!");
      setIsSubmitted(true);
    } catch (err) {
      console.warn("Supabase submission failed, falling back to local storage:", err);
      try {
        const localData = JSON.parse(localStorage.getItem("customer_leads") || "[]");
        localData.push({
          name,
          email,
          phone,
          goal: pathway,
          pathway,
          postcode,
          referrerCode: referrerCode || null,
          date: new Date().toISOString(),
        });
        localStorage.setItem("customer_leads", JSON.stringify(localData));
        toast.success("Enquiry saved locally!");
        setIsSubmitted(true);
      } catch (storageErr) {
        console.error("Local storage fallback failed:", storageErr);
        toast.error("Failed to submit enquiry. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }

    const mailtoUrl = `mailto:thinkjsk@gmail.com?subject=${encodeURIComponent(
      `TBN Customer Enquiry - ${pathway}`
    )}&body=${encodeURIComponent(
      `Hello Admin,\n\nWe have received a new customer booking/enquiry.\n\nDetails:\n- Name: ${name}\n- Email: ${email}\n- Phone: ${phone}\n- Area of Interest: ${pathway}\n- Postcode: ${postcode}\n- Referrer Partner: ${referrerCode || "None"}\n\nDate: ${new Date().toLocaleDateString()}\n\nKind regards,\nTBN System`
    )}`;

    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 1000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && closeQuiz()}>
      <DialogContent className="sm:max-w-[480px] p-0 bg-transparent border-none shadow-none">
        <div className="bg-[#faf8f5] border border-[#dbd4c9] rounded-3xl p-6 md:p-8 w-full max-w-md relative mx-auto shadow-2xl animate-in fade-in zoom-in duration-250 font-montserrat">
          {/* Close Button */}
          <button
            onClick={closeQuiz}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors p-1.5 rounded-full hover:bg-gray-100/50 cursor-pointer z-50 animate-in fade-in duration-200"
          >
            <X className="w-4 h-4" />
          </button>

          {isSubmitted ? (
            <div className="text-center space-y-4 py-4">
              <CheckCircle2 className="w-14 h-14 mx-auto text-[#9f1e13] animate-bounce" />
              <h4 className="font-playfair text-2xl font-bold text-gray-900">Enquiry Submitted!</h4>
              <p className="text-xs text-gray-600 leading-relaxed max-w-xs mx-auto">
                Thank you for starting your journey. We have saved your enquiry and are redirecting you to your email client to notify our team.
              </p>
              <div className="pt-2">
                <button
                  onClick={closeQuiz}
                  className="px-6 py-2.5 bg-[#9f1e13] hover:bg-[#861910] text-white text-[11px] uppercase tracking-wider font-bold rounded-xl transition-all cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              <div>
                <h3 className="font-playfair text-[22px] font-bold text-gray-900 leading-tight mb-1">
                  Book Free Consultation
                </h3>
                <p className="text-xs text-gray-500">
                  Find a clinic or book a free consultation to start your journey.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 pl-0.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={isLoading}
                    className="w-full h-10 px-3.5 rounded-xl bg-white border border-[#dbd4c9] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#9f1e13] focus:ring-1 focus:ring-[#9f1e13] transition-all text-xs"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 pl-0.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                    className="w-full h-10 px-3.5 rounded-xl bg-white border border-[#dbd4c9] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#9f1e13] focus:ring-1 focus:ring-[#9f1e13] transition-all text-xs"
                  />
                </div>

                {/* Tel */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 pl-0.5">
                    Telephone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    disabled={isLoading}
                    className="w-full h-10 px-3.5 rounded-xl bg-white border border-[#dbd4c9] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#9f1e13] focus:ring-1 focus:ring-[#9f1e13] transition-all text-xs"
                  />
                </div>

                {/* Pathway Dropdown */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 pl-0.5">
                    Area of Interest
                  </label>
                  <select
                    required
                    value={pathway}
                    onChange={(e) => setPathway(e.target.value)}
                    disabled={isLoading}
                    className="w-full h-10 px-3 rounded-xl bg-white border border-[#dbd4c9] text-gray-900 focus:outline-none focus:border-[#9f1e13] focus:ring-1 focus:ring-[#9f1e13] transition-all text-xs cursor-pointer bg-white"
                  >
                    <option value="">Select a Pathway</option>
                    <option value="Women's Health">Women's Health</option>
                    <option value="Men's Health">Men's Health</option>
                    <option value="Children's Health">Children's Health</option>
                    <option value="Neurodivergence">Neurodivergence</option>
                    <option value="Skin Health">Skin Health</option>
                    <option value="Sports Performance">Sports Performance</option>
                    <option value="Pain & Fatigue">Pain & Fatigue</option>
                  </select>
                </div>

                {/* Postcode */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 pl-0.5">
                    Postcode
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Postcode"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                    disabled={isLoading}
                    className="w-full h-10 px-3.5 rounded-xl bg-white border border-[#dbd4c9] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#9f1e13] focus:ring-1 focus:ring-[#9f1e13] transition-all text-xs"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full h-11 bg-[#9f1e13] hover:bg-[#861910] disabled:bg-gray-400 text-white font-bold text-[11px] uppercase tracking-widest rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Send Booking Request"
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Quiz;
