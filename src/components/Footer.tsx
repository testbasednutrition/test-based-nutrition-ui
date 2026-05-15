import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:pr-4">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/logos/test-based-logotype-460x92.png" 
                alt="Test-Based Nutrition" 
                className="h-8 object-contain"
              />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Uniting elite experts in health and performance. Science-led, results-driven.
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
              <li><Link to="/retreats/st-michaels" className="hover:text-foreground transition-colors">Retreats</Link></li>
              <li><Link to="/news" className="hover:text-foreground transition-colors">News Hub</Link></li>
            </ul>
          </div>

          {/* Directory & Partners */}
          <div>
            <h4 className="font-semibold text-sm mb-4 font-sans text-foreground">Directory & Partners</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/collectives" className="hover:text-foreground transition-colors">Find a Collective</Link></li>
              <li><Link to="/specialists" className="hover:text-foreground transition-colors">Find a Specialist</Link></li>
              <li><Link to="/partner-with-us-2" className="hover:text-foreground transition-colors font-semibold text-[#9f1e13]">Partner With Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-4 font-sans text-foreground">Get Started</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Book your free consultation or find a clinic near you to start your journey.
            </p>
            <a
              href="https://calendar.app.google/CDYDAvjFmMvJP3S88"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-[#9f1e13] text-white px-6 py-2.5 text-sm font-bold hover:bg-[#80180f] transition-colors w-full"
            >
              Book Now
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col items-center justify-center gap-4">
          
          <div className="max-w-5xl w-full text-center px-4">
            <p className="text-[11px] text-muted-foreground leading-relaxed">
              <span className="font-bold text-foreground uppercase tracking-widest mr-1">Disclaimer:</span>
              This service provides wellness screening and educational insight. It does not diagnose, treat or replace medical or sports medicine advice. Any information provided is for general wellbeing purposes only and should be discussed with a qualified healthcare professional where appropriate.
            </p>
          </div>

          <p className="text-[11px] text-muted-foreground font-medium">
            © {new Date().getFullYear()} Test-Based Nutrition. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
