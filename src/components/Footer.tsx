import { Link } from "react-router-dom";
import InstagramFeed from "./InstagramFeed";
import { useQuiz } from "@/components/QuizContext";

interface FooterProps {
  hideInstagram?: boolean;
}

const Footer = ({ hideInstagram = false }: FooterProps) => {
  const { openBooking } = useQuiz();

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
                <li><Link to="/partner-with-us" className="hover:text-foreground transition-colors">Retreats</Link></li>
                <li><Link to="/news" className="hover:text-foreground transition-colors">News Hub</Link></li>
                <li><Link to="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
              </ul>
            </div>

            {/* Directory & Partners */}
            <div>
              <h4 className="font-semibold text-sm mb-4 font-sans text-foreground">Directory & Partners</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="text-[10px] font-extrabold uppercase tracking-widest text-[#9f1e13] mt-2 mb-1">Find a:</li>
                <li className="pl-3"><Link to="/specialists" className="hover:text-foreground transition-colors">A Specialist</Link></li>
                <li className="pl-3"><span className="text-muted-foreground/45 cursor-not-allowed select-none opacity-60">A Health Club</span></li>
                <li className="pl-3"><span className="text-muted-foreground/45 cursor-not-allowed select-none opacity-60">A Clinic</span></li>
                <li className="pt-2 border-t border-border/40 mt-2"><Link to="/partner-with-us" className="hover:text-[#9f1e13] transition-colors font-semibold text-[#9f1e13]">Partner With Us</Link></li>
                <li className="pt-2 border-t border-border/40 mt-2"><Link to="/support" className="hover:text-foreground transition-colors">Support Centre</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-sm mb-4 font-sans text-foreground">Get Started</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Book your free consultation or find a clinic near you to start your journey.
              </p>
              <button
                onClick={() => openBooking()}
                className="inline-flex items-center justify-center rounded-md bg-[#9f1e13] text-white px-6 py-2.5 text-sm font-bold hover:bg-[#861910] transition-colors w-full cursor-pointer"
              >
                Book Now
              </button>
            </div>
          </div>

          <div className="border-t border-border mt-12 pt-8 flex flex-col items-center justify-center gap-4">
            <div className="max-w-5xl w-full text-center px-4 space-y-3">
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                <span className="font-bold text-foreground uppercase tracking-widest mr-1">Disclaimer:</span>
                This service provides wellness screening and educational insight. It does not diagnose, treat or replace medical or sports medicine advice. Any information provided is for general wellbeing purposes only and should be discussed with a qualified healthcare professional where appropriate.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground border-t border-border/40 pt-4">
                <span>© {new Date().getFullYear()} Test-Based Nutrition. All rights reserved.</span>
                <span>•</span>
                <Link to="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
                <span>•</span>
                <Link to="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
