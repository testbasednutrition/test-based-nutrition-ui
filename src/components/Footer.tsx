import { useState } from "react";
import { Link } from "react-router-dom";
import InstagramFeed from "./InstagramFeed";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { X, Loader2, CheckCircle2 } from "lucide-react";

interface FooterProps {
  hideInstagram?: boolean;
}

const Footer = ({ hideInstagram = false }: FooterProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pathway, setPathway] = useState("");
  const [postcode, setPostcode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleClose = () => {
    setIsModalOpen(false);
    setIsSubmitted(false);
    setName("");
    setEmail("");
    setPhone("");
    setPathway("");
    setPostcode("");
  };

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
    <>
      {!hideInstagram && <InstagramFeed />}
      <footer className="bg-card border-t border-border py-16">
      <div className="container px-6">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1 lg:pr-4">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/logos/tbn-official-logo.png" 
                alt="Test-Based Nutrition" 
                className="h-10 md:h-[3.25rem] object-contain"
              />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              A New Era in Nutritional Preventative Healthcare.
            </p>
            <p className="text-xs font-bold tracking-widest text-[#9f1e13] uppercase font-sans whitespace-nowrap">
              Test. Target. Transform.™
            </p>
          </div>

          {/* Pathways */}
          <div>
            <h4 className="font-semibold text-sm mb-4 font-sans text-foreground">Health Pathways</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/treatments/womens-health" className="hover:text-foreground transition-colors">Women's Health</Link></li>
              <li><Link to="/treatments/mens-health" className="hover:text-foreground transition-colors">Men's Health</Link></li>
              <li><Link to="/treatments/childrens-health" className="hover:text-foreground transition-colors">Children's Health</Link></li>
              <li><Link to="/treatments/neurodivergence" className="hover:text-foreground transition-colors">Neurodivergence</Link></li>
              <li><Link to="/treatments/skin-health" className="hover:text-foreground transition-colors">Skin Health</Link></li>
              <li><Link to="/treatments/sports-performance" className="hover:text-foreground transition-colors">Sports Performance</Link></li>
              <li><Link to="/treatments/pain-fatigue" className="hover:text-foreground transition-colors">Pain & Fatigue</Link></li>
            </ul>
          </div>

          {/* The System */}
          <div>
            <h4 className="font-semibold text-sm mb-4 font-sans text-foreground">The System</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/tbn-method" className="hover:text-foreground transition-colors">The TBN Method</Link></li>
              <li><Link to="/testing" className="hover:text-foreground transition-colors">Testing Pathways</Link></li>
              <li><Link to="/partner-with-us-3" className="hover:text-foreground transition-colors">Retreats</Link></li>
              <li><Link to="/news" className="hover:text-foreground transition-colors">News Hub</Link></li>
            </ul>
          </div>

          {/* Directory & Partners */}
          <div>
            <h4 className="font-semibold text-sm mb-4 font-sans text-foreground">Directory & Partners</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="text-[10px] font-extrabold uppercase tracking-widest text-[#9f1e13] mt-2 mb-1">Find a:</li>
              <li className="pl-3"><Link to="/specialists" className="hover:text-foreground transition-colors">A Specialist</Link></li>
              <li className="pl-3"><Link to="/collectives" className="hover:text-foreground transition-colors">A Health Club</Link></li>
              <li className="pl-3"><Link to="/collectives" className="hover:text-foreground transition-colors">A Clinic</Link></li>
              <li className="pt-2 border-t border-border/40 mt-2"><Link to="/partner-with-us" className="hover:text-[#9f1e13] transition-colors font-semibold text-[#9f1e13]">Partner With Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-4 font-sans text-foreground">Get Started</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Book your free consultation or find a clinic near you to start your journey.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center rounded-md bg-[#9f1e13] text-white px-6 py-2.5 text-sm font-bold hover:bg-[#861910] transition-colors w-full cursor-pointer"
            >
              Book Now
            </button>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col items-center justify-center gap-4">
          
          <div className="max-w-5xl w-full text-center px-4">
            <p className="text-[11px] text-muted-foreground leading-relaxed">
              <span className="font-bold text-foreground uppercase tracking-widest mr-1">Disclaimer:</span>
              This service provides wellness screening and educational insight. It does not diagnose, treat or replace medical or sports medicine advice. Any information provided is for general wellbeing purposes only and should be discussed with a qualified healthcare professional where appropriate.
            </p>
          </div>

        </div>
      </div>
    </footer>

    {/* Modal Popup Overlay */}
    {isModalOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 text-left font-montserrat">
        {/* Backdrop Click Close */}
        <div className="absolute inset-0" onClick={handleClose} />

        {/* Modal Content */}
        <div className="bg-[#faf8f5] border border-[#dbd4c9] rounded-3xl p-6 md:p-8 w-full max-w-md relative z-10 shadow-2xl animate-in fade-in zoom-in duration-250">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors p-1.5 rounded-full hover:bg-gray-100/50 cursor-pointer"
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
                  onClick={handleClose}
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
      </div>
    )}
    </>
  );
};

export default Footer;
