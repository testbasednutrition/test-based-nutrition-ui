const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-full border-2 border-foreground relative">
                <div className="absolute bottom-0.5 right-0.5 w-1.5 h-1.5 rounded-full bg-primary" />
              </div>
              <div className="leading-tight">
                <span className="font-semibold text-sm">Test-based</span>
                <span className="block text-[9px] tracking-[0.2em] text-muted-foreground uppercase">
                  Nutrition + Performance
                </span>
              </div>
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

        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 Test-Based Nutrition. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Independent Partner of Zinzino
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
