const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div>
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

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm mb-4 font-sans">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-foreground transition-colors">Nutrition</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">Performance</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">Omega Balance</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">Vitamin D</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm mb-4 font-sans">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#experts" className="hover:text-foreground transition-colors">Our Experts</a></li>
              <li><a href="#news" className="hover:text-foreground transition-colors">News Hub</a></li>
              <li><a href="https://calendar.app.google/CDYDAvjFmMvJP3S88" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Partner With Us</a></li>
            </ul>
          </div>

          {/* Locations (SEO) */}
          <div>
            <h4 className="font-semibold text-sm mb-4 font-sans">Locations</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/locations/london" className="hover:text-foreground transition-colors">London</a></li>
              <li><a href="/locations/cardiff" className="hover:text-foreground transition-colors">Cardiff</a></li>
              <li><a href="/locations/wirral" className="hover:text-foreground transition-colors">Wirral</a></li>
              <li><a href="/locations/essex" className="hover:text-foreground transition-colors">Essex</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-4 font-sans">Get Started</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Book your free consultation and start your journey to optimal health.
            </p>
            <a
              href="https://calendar.app.google/CDYDAvjFmMvJP3S88"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-2.5 text-sm font-medium hover:bg-primary/90 transition-colors"
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
            © 2026 Test-Based Nutrition. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
