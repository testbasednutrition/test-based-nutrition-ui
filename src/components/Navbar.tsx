import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const treatmentRoutes: Record<string, string> = {
  "Skin Health": "/treatments/skin-health",
  "Anti-Ageing": "/treatments/anti-ageing",
  "Testosterone": "/treatments/mens-health",
  "Weight Loss": "/treatments/mens-health",
  "Diabetes": "/treatments/mens-health",
  "Mental Health": "/treatments/mens-health",
  "Fertility": "/treatments/fertility",
  "Pregnancy": "/treatments/womens-health",
  "Hormones": "/treatments/womens-health",
  "Perimenopause": "/treatments/womens-health",
  "Youth Sport": "/treatments/childrens-health",
  "Baby": "/treatments/childrens-health",
  "Junior": "/treatments/childrens-health",
  "Teen": "/treatments/childrens-health",
  "Neuro": "/treatments/childrens-health",
};

const megaMenuData = [
  { heading: "Skin", items: ["Skin Health", "Anti-Ageing"] },
  { heading: "Men", items: ["Testosterone", "Weight Loss", "Diabetes", "Mental Health"] },
  { heading: "Women", items: ["Fertility", "Pregnancy", "Hormones", "Perimenopause", "Weight Loss", "Mental Health"] },
  { heading: "Children", items: ["Youth Sport", "Baby", "Junior", "Teen", "Neuro"] },
  { heading: "Sport", items: ["Youth", "Coaches", "Athletes", "Hyrox", "Peak Performance"] },
];

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Specialists", href: "/specialists" },
  { label: "News Hub", href: "#news" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileMegaOpen, setMobileMegaOpen] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        megaRef.current &&
        !megaRef.current.contains(e.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node)
      ) {
        setMegaOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full border-2 border-primary-foreground relative">
            <div className="absolute bottom-0.5 right-0.5 w-2 h-2 rounded-full bg-primary" />
          </div>
          <div className="leading-tight">
            <span className="font-semibold text-sm tracking-wide text-primary-foreground">Test-based</span>
            <span className="block text-[10px] tracking-[0.2em] text-primary-foreground/70 uppercase">
              Nutrition + Performance
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="relative">
            <button
              ref={triggerRef}
              onClick={() => setMegaOpen(!megaOpen)}
              className="flex items-center gap-1 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              Treatments
              <ChevronDown className={`w-4 h-4 transition-transform ${megaOpen ? "rotate-180" : ""}`} />
            </button>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Button asChild>
            <a href="https://calendar.app.google/CDYDAvjFmMvJP3S88" target="_blank" rel="noopener noreferrer">
              Partner With Us
            </a>
          </Button>
          <Button variant="ghost" asChild className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10">
            <a href="/partner-sign-in">Sign In</a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Desktop Mega Menu */}
      {megaOpen && (
        <div
          ref={megaRef}
          className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-full bg-background border border-border shadow-lg rounded-b-lg animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="px-8 py-4">
            <div className="flex gap-8">
              {megaMenuData.map((col) => (
                <div key={col.heading} className="min-w-[120px]">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-foreground mb-2 pb-1.5 border-b border-border">
                    {col.heading}
                  </h4>
                  {col.items.length > 0 ? (
                    <ul className="space-y-1">
                      {col.items.map((item) => (
                        <li key={item}>
                          <button
                            className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                            onClick={() => {
                              setMegaOpen(false);
                              const route = treatmentRoutes[item];
                              if (route) navigate(route);
                            }}
                          >
                            {item}
                          </button>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-muted-foreground italic">Coming soon</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="container py-6 flex flex-col gap-4">
            {/* Mobile Treatments Accordion */}
            <button
              className="flex items-center justify-between text-base font-medium text-muted-foreground hover:text-foreground py-2"
              onClick={() => setMobileMegaOpen(!mobileMegaOpen)}
            >
              Treatments
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileMegaOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileMegaOpen && (
              <div className="pl-4 pb-2 grid grid-cols-2 gap-4">
                {megaMenuData.map((col) => (
                  <div key={col.heading}>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-foreground mb-2">
                      {col.heading}
                    </h4>
                    {col.items.length > 0 ? (
                      <ul className="space-y-1.5">
                         {col.items.map((item) => (
                          <li key={item}>
                            <button
                              className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                              onClick={() => {
                                setMobileOpen(false);
                                setMobileMegaOpen(false);
                                const route = treatmentRoutes[item];
                                if (route) navigate(route);
                              }}
                            >
                              {item}
                            </button>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-xs text-muted-foreground italic">Coming soon</p>
                    )}
                  </div>
                ))}
              </div>
            )}

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-base font-medium text-muted-foreground hover:text-foreground py-2"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="mt-2 w-full">
              <a href="https://calendar.app.google/CDYDAvjFmMvJP3S88" target="_blank" rel="noopener noreferrer">
                Partner With Us
              </a>
            </Button>
            <Button variant="ghost" asChild className="w-full text-muted-foreground hover:text-foreground">
              <a href="/partner-sign-in">Sign In</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
