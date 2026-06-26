import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, ChevronRight, BookOpen, Users, Brain, Beaker } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { useQuiz } from "@/components/QuizContext";

const heroImg = "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200";

const TBNMethod = () => {
  const navigate = useNavigate();
  const { openQuiz } = useQuiz();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [academyOptIn, setAcademyOptIn] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const referrerCode = localStorage.getItem("tbn_referrer_code");
    try {
      const { error } = await supabase
        .from('academy_registrations')
        .insert([{ 
          name, 
          email, 
          academy_opt_in: academyOptIn,
          referrer_code: referrerCode || null,
          created_at: new Date().toISOString()
        }]);
      if (error) throw error;
      toast.success("Interest registered successfully!");
    } catch (err) {
      console.warn("Supabase submission failed, falling back to local storage:", err);
      const localData = JSON.parse(localStorage.getItem('academy_registrations') || '[]');
      localData.push({ 
        name, 
        email, 
        academyOptIn, 
        referrerCode: referrerCode || null, 
        date: new Date().toISOString() 
      });
      localStorage.setItem('academy_registrations', JSON.stringify(localData));
      toast.success("Interest registered locally!");
    }

    const mailtoUrl = `mailto:thinkjsk@gmail.com?subject=${encodeURIComponent(
      "TBN Academy - New Registration of Interest"
    )}&body=${encodeURIComponent(
      `Hello Admin,\n\nA new user has registered interest in the TBN Academy.\n\nDetails:\n- Name: ${name}\n- Email: ${email}\n- Academy Tick Box: ${academyOptIn ? "Checked" : "Unchecked"}\n- Referrer Partner: ${referrerCode || "None"}\n\nDate: ${new Date().toLocaleDateString()}\n\nKind regards,\nTBN System`
    )}`;
    window.location.href = mailtoUrl;

    setIsSubmitted(true);
    setName("");
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <Navbar alwaysSolid={false} />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="The TBN Method"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        </div>

        <div className="container relative z-10 text-white">
          <div className="max-w-3xl space-y-8 animate-fade-in">
            <span className="text-[#faf8f5] uppercase tracking-[0.2em] font-semibold text-sm">
              The TBN Method
            </span>
            <h1 className="text-4xl md:text-6xl font-playfair font-bold leading-tight">
              Discover. Test. Target.<br />Transform. Retest. Escalate.
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed max-w-2xl">
              A clear, measurable pathway from your first consultation to personalised support, progress tracking and specialist referral where needed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={openQuiz}
                size="lg" 
                className="bg-[#9f1e13] hover:bg-[#9f1e13]/90 text-white px-8 rounded-full cursor-pointer"
              >
                Start Your TBN Journey <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                onClick={() => navigate("/partner-with-us")}
                size="lg" 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-[#9f1e13] hover:border-[#9f1e13] hover:text-white rounded-full cursor-pointer"
              >
                Partner With TBN
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-[#9f1e13] text-[#faf8f5]">
        <div className="container max-w-4xl text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-playfair font-bold">A New Era in Personalised Preventative Health</h2>
          <p className="text-lg md:text-xl font-light leading-relaxed">
            Your body is not generic. Your health pathway should not be either.
            Across the UK, people are spending money on supplements, treatments, wellness trends, fitness plans and online health advice — often without understanding what their body actually needs.
          </p>
          <div className="py-8 grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-3xl mx-auto">
            <div className="space-y-4">
              <h3 className="font-bold text-xl mb-4">The Old Way</h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-center gap-3"><XCircle className="w-5 h-5 text-white/50" /> Taking generic supplements</li>
                <li className="flex items-center gap-3"><XCircle className="w-5 h-5 text-white/50" /> Trying new diet trends</li>
                <li className="flex items-center gap-3"><XCircle className="w-5 h-5 text-white/50" /> Booking isolated treatments</li>
                <li className="flex items-center gap-3"><XCircle className="w-5 h-5 text-white/50" /> Searching symptoms online</li>
                <li className="flex items-center gap-3"><XCircle className="w-5 h-5 text-white/50" /> Still not feeling yourself</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-xl mb-4 text-[#faf8f5]">The TBN Method</h3>
              <ul className="space-y-3 font-medium">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#faf8f5]" /> Instead of guessing, we test.</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#faf8f5]" /> Instead of generic advice, we educate.</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#faf8f5]" /> Instead of isolated treatments, we build pathways.</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#faf8f5]" /> Instead of short-term fixes, we build foundations.</li>
              </ul>
            </div>
          </div>
          <p className="text-lg font-light leading-relaxed border-t border-white/20 pt-8 mt-8">
            The TBN Method helps clients and practitioners better understand the role of nutrition, omega balance, gut health, cellular wellbeing, inflammation education, metabolic health, recovery, hormones, lifestyle and prevention. Our approach is educational, non-diagnostic and designed to support more informed conversations around health and wellbeing.
          </p>
        </div>
      </section>

      {/* For Clients Section */}
      <section id="how-it-works" className="py-24 bg-[#faf8f5]">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-[#9f1e13] uppercase tracking-[0.2em] font-bold text-sm">For Clients</span>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#9f1e13] mt-4">How the TBN Method Works</h2>
            <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
              A complete pathway from first consultation to long-term progress. Moving away from guesswork and towards a clearer understanding of your health foundations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#dbd4c9]/20 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
              <span className="text-[#9f1e13] font-bold text-6xl opacity-20 absolute top-8 right-8 font-playfair">01</span>
              <h3 className="text-2xl font-bold text-[#9f1e13] mb-2 font-playfair">Step 1: Test</h3>
              <p className="text-[#9f1e13] font-medium mb-6">Insight before action.</p>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                Every TBN pathway starts by understanding the person first. We explore your goals, lifestyle, nutrition, sleep, hormones, and wellbeing to identify the right testing pathway.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Beaker className="w-5 h-5 text-[#9f1e13] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#9f1e13] text-sm">Foundational Testing</strong>
                    <span className="text-gray-500 text-xs">Omega Balance & Gut Health testing to understand internal balance.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-[#9f1e13] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#9f1e13] text-sm">Rapid Point-of-Care</strong>
                    <span className="text-gray-500 text-xs">Selected biomarkers screened on-site in under 15 minutes.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Activity className="w-5 h-5 text-[#9f1e13] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#9f1e13] text-sm">Advanced Pathways</strong>
                    <span className="text-gray-500 text-xs">Deep insights into hormones, metabolic health, and performance.</span>
                  </div>
                </li>
              </ul>
              <p className="text-xs text-gray-500 italic mt-6 border-t pt-4">The aim is not to diagnose. The aim is to understand, educate and guide personalised next steps.</p>
            </div>

            {/* Step 2 */}
            <div className="bg-[#9f1e13] text-white p-10 rounded-3xl shadow-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
              <span className="text-white font-bold text-6xl opacity-10 absolute top-8 right-8 font-playfair">02</span>
              <h3 className="text-2xl font-bold mb-2 font-playfair">Step 2: Target</h3>
              <p className="text-[#faf8f5] font-medium mb-6 opacity-80">Turning insight into a personalised pathway.</p>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                Once we understand your goals and test insights, we help create a targeted education and support pathway. Instead of starting with a generic product, we start with you.
              </p>
              <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-sm text-gray-300">
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-white/80" /> Nutrition Education</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-white/80" /> Lifestyle Guidance</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-white/80" /> Omega Support</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-white/80" /> Gut Health</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-white/80" /> Sleep & Stress</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-white/80" /> Specialist Referrals</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#dbd4c9]/20 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
              <span className="text-[#9f1e13] font-bold text-6xl opacity-20 absolute top-8 right-8 font-playfair">03</span>
              <h3 className="text-2xl font-bold text-[#9f1e13] mb-2 font-playfair">Step 3: Transform</h3>
              <p className="text-[#9f1e13] font-medium mb-6">Practical support. Ongoing review.</p>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                TBN protocols are designed to support clients with practical next steps. The focus is education, consistency and measurable progress.
              </p>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                Clients are encouraged to retest and review their pathway so they can understand what has changed, track progress and refine their next steps.
              </p>
              <div className="bg-[#faf8f5] p-4 rounded-xl border border-gray-100">
                <p className="text-sm font-semibold text-[#9f1e13] mb-2">Measurable Progress In:</p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Cellular Health • Energy • Recovery • Skin Health • Women's Health • Performance • Blood Sugar • Inflammation • Nervous System
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Businesses Section */}
      <section id="for-businesses" className="py-24 bg-[#dbd4c9] border-y border-[#dbd4c9]">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-[#9f1e13] uppercase tracking-[0.2em] font-bold text-sm">For Businesses</span>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#9f1e13] mt-4">Learn. Launch. Lead.</h2>
            <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
              A complete integration model for clinics, pharmacies, health clubs, academies, resorts and wellness businesses. We help you build a commercially sustainable pathway.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 p-8 border border-[#dbd4c9] rounded-3xl bg-[#faf8f5]">
              <h3 className="text-xl font-bold font-playfair text-[#9f1e13]">Phase 1: Learn</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Train your team in the TBN Method, testing ecosystem, consultation pathway, and compliance-conscious communication. Give your business the confidence to introduce test-based nutrition professionally.
              </p>
            </div>
            <div className="text-center space-y-4 p-8 border border-[#dbd4c9] rounded-3xl bg-[#faf8f5]">
              <h3 className="text-xl font-bold font-playfair text-[#9f1e13]">Phase 2: Launch</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Bring test-based nutrition into your real-world service model through consultations, test days, workshops, or screening pathways. The TBN Method becomes part of your business, not an add-on.
              </p>
            </div>
            <div className="text-center space-y-4 p-8 border border-[#dbd4c9] rounded-3xl bg-[#faf8f5]">
              <h3 className="text-xl font-bold font-playfair text-[#9f1e13]">Phase 3: Lead</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Become known for personalised preventative health. Build stronger client engagement, new revenue streams, and recurring wellness programmes with regional visibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Science & Specialists Section */}
      <section id="science" className="py-24 bg-[#faf8f5] text-gray-900 border-t border-gray-100">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="text-[#9f1e13] uppercase tracking-[0.2em] font-bold text-sm">The Science Behind TBN</span>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold">We follow the research as it unfolds.</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                TBN is built on the belief that the future of health must become more personalised, preventative and evidence-informed. We translate complex science into practical, accessible education.
              </p>
              <div className="space-y-4 border-l-2 border-[#9f1e13] pl-6 py-2">
                <p className="text-[#9f1e13] italic text-lg">"Science alone is not enough if clients cannot understand it. Testing alone is not enough if businesses do not know how to integrate it."</p>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We bring together current research, specialist insight, client education, testing systems and practitioner training to create clear, usable pathways for real-world settings.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-4 mb-8">
                <Users className="w-8 h-8 text-[#9f1e13]" />
                <h3 className="text-2xl font-bold font-playfair">Our Specialist Collective</h3>
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed">
                The TBN Method is built with doctors, specialists, practitioners and category leaders. Our partners are not left alone with a test—they are supported by a wider ecosystem of expertise.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Women's & Men's Health", "Sports Performance", 
                  "Chronic Pain", "Skin Health", 
                  "Gut Health", "Neurodivergence",
                  "Mental Wellbeing", "Hormone Health",
                  "Metabolic Health", "Longevity"
                ].map((specialty, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#9f1e13]" />
                    <span className="text-sm text-gray-600">{specialty}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academy Section */}
      <section id="academy" className="py-24 bg-[#9f1e13] text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          {/* Subtle background pattern */}
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="container max-w-4xl text-center relative z-10">
          <Brain className="w-16 h-16 mx-auto text-[#faf8f5] mb-6" />
          <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-6">TBN Academy</h2>
          <p className="text-xl md:text-2xl font-light mb-8 text-[#faf8f5]/90">
            Launching September. Register your interest now.
          </p>
          <p className="text-lg leading-relaxed text-white/80 mb-10 max-w-2xl mx-auto">
            Our professional education and training platform for clinics, practitioners, health clubs, pharmacies, academies, coaches and wellness businesses that want to integrate test-based nutrition into their work.
          </p>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20 shadow-xl mt-8 flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
                <div className="md:col-span-4 space-y-2 text-left">
                  <label htmlFor="academyName" className="text-[10px] font-bold uppercase tracking-wider text-[#faf8f5]/80 pl-1">Full Name</label>
                  <input 
                    type="text" 
                    id="academyName" 
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full h-12 px-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all text-sm"
                  />
                </div>

                <div className="md:col-span-4 space-y-2 text-left">
                  <label htmlFor="academyEmail" className="text-[10px] font-bold uppercase tracking-wider text-[#faf8f5]/80 pl-1">Email Address</label>
                  <input 
                    type="email" 
                    id="academyEmail" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full h-12 px-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all text-sm"
                  />
                </div>

                <div className="md:col-span-4">
                  <Button 
                    type="submit" 
                    className="w-full h-12 bg-[#faf8f5] hover:bg-white text-[#9f1e13] font-bold text-sm uppercase tracking-wider rounded-xl transition-all shadow-md"
                  >
                    Register Interest
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-3 py-1 text-left">
                <input 
                  type="checkbox" 
                  id="academyOptIn" 
                  checked={academyOptIn}
                  onChange={(e) => setAcademyOptIn(e.target.checked)}
                  className="w-5 h-5 rounded border-white/20 bg-white/10 text-[#9f1e13] focus:ring-0 focus:ring-offset-0 accent-[#9f1e13] cursor-pointer shrink-0"
                />
                <label htmlFor="academyOptIn" className="text-xs font-semibold text-[#faf8f5] select-none cursor-pointer">
                  Academy Tick Box (I am interested in TBN Academy updates)
                </label>
              </div>
            </form>
          ) : (
            <div className="max-w-md mx-auto bg-white/15 backdrop-blur-md p-8 rounded-3xl border border-white/25 shadow-xl space-y-4 text-center mt-8">
              <CheckCircle2 className="w-16 h-16 mx-auto text-[#faf8f5] animate-pulse" />
              <h3 className="text-2xl font-bold font-playfair text-[#faf8f5]">Thank You!</h3>
              <p className="text-sm text-white/95 leading-relaxed">
                Your interest has been registered. We have saved your details locally and initiated an email template for the admin.
              </p>
              <Button 
                onClick={() => setIsSubmitted(false)}
                className="bg-transparent border border-white/40 text-white hover:bg-white/10 rounded-xl px-6 h-10"
              >
                Register Another
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Summary / Comparison */}
      <section className="py-24 bg-[#faf8f5]">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#9f1e13]">Why TBN?</h2>
            <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
              Because clients deserve more than guesswork — and businesses deserve more than disconnected tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-[#9f1e13] mb-6 font-playfair border-b pb-4">Why Clients Choose TBN</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-600"><CheckCircle2 className="w-5 h-5 text-[#9f1e13]" /> A clearer starting point</li>
                <li className="flex items-center gap-3 text-gray-600"><CheckCircle2 className="w-5 h-5 text-[#9f1e13]" /> Personalised testing pathways</li>
                <li className="flex items-center gap-3 text-gray-600"><CheckCircle2 className="w-5 h-5 text-[#9f1e13]" /> Education-led support</li>
                <li className="flex items-center gap-3 text-gray-600"><CheckCircle2 className="w-5 h-5 text-[#9f1e13]" /> Specialist-backed insight</li>
                <li className="flex items-center gap-3 text-gray-600"><CheckCircle2 className="w-5 h-5 text-[#9f1e13]" /> Ongoing review and retesting</li>
              </ul>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-[#9f1e13] mb-6 font-playfair border-b pb-4">Why Businesses Choose TBN</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-600"><CheckCircle2 className="w-5 h-5 text-[#9f1e13]" /> A complete integration system</li>
                <li className="flex items-center gap-3 text-gray-600"><CheckCircle2 className="w-5 h-5 text-[#9f1e13]" /> Rapid screening pathways</li>
                <li className="flex items-center gap-3 text-gray-600"><CheckCircle2 className="w-5 h-5 text-[#9f1e13]" /> Certified training & marketing support</li>
                <li className="flex items-center gap-3 text-gray-600"><CheckCircle2 className="w-5 h-5 text-[#9f1e13]" /> Commercial revenue models</li>
                <li className="flex items-center gap-3 text-gray-600"><CheckCircle2 className="w-5 h-5 text-[#9f1e13]" /> Recurring income opportunities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#9f1e13] text-white text-center">
        <div className="container max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-8">Ready to experience the TBN Method?</h2>
          <p className="text-xl text-gray-300 mb-10">
            Whether you are a client looking for a more personalised health pathway, or a business ready to integrate test-based nutrition into your services.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              onClick={openQuiz}
              size="lg" 
              className="bg-[#faf8f5] hover:bg-white text-[#9f1e13] font-bold w-full sm:w-auto px-8 rounded-full cursor-pointer"
            >
              Start Your TBN Journey
            </Button>
            <Button 
              onClick={() => navigate("/partner-with-us")}
              size="lg" 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-[#9f1e13] hover:border-[#9f1e13] hover:text-white w-full sm:w-auto px-8 rounded-full cursor-pointer"
            >
              Partner With TBN
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// Simple icon components for sections that need them without importing
const XCircle = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
);
const Zap = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
);
const Activity = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
);
const Rocket = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
);
const Award = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
);

export default TBNMethod;
