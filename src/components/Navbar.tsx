import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const treatmentRoutes: Record<string, string> = {
  // Women's Health
  "Fertility & Conception": "/treatments/fertility",
  "Pregnancy & Postnatal": "/treatments/womens-health",
  "Perimenopause & Menopause": "/treatments/womens-health",
  "Hormonal Conditions": "/treatments/womens-health",
  "Mood & Burnout": "/treatments/womens-health",
  "Weight, Pre-Diabetes & Type 2 Diabetes": "/treatments/womens-health",
  "Gut Health": "/treatments/womens-health",
  
  // Men's Health
  "Testosterone & Hormones": "/treatments/mens-health",
  "Male Fertility": "/treatments/fertility",
  "Stress & Burnout": "/treatments/mens-health",
  "Healthy Ageing": "/treatments/anti-ageing",
  
  // Children's Health
  "Early Development": "/treatments/childrens-health",
  "Neurodivergent Children": "/treatments/childrens-health",
  "Immunity & Growth": "/treatments/childrens-health",
  "Teen Girls": "/treatments/childrens-health",
  "Teen Boys": "/treatments/childrens-health",
  "Emotional Wellbeing": "/treatments/childrens-health",

  // Neurodivergence
  "Neuro Curious": "/treatments/neurodivergence",
  "Diagnosed": "/treatments/neurodivergence",
  "Neuro Mums": "/treatments/neurodivergence",
  "Women (Perimenopause & Menopause)": "/treatments/neurodivergence",
  "Men": "/treatments/neurodivergence",
  "Children": "/treatments/neurodivergence",

  // Skin Health
  "Acne & Teen Skin": "/treatments/skin-health",
  "Hormonal Skin": "/treatments/skin-health",
  "Chronic Conditions": "/treatments/skin-health",
  "Skin & Gut": "/treatments/skin-health",
  "Skin Ageing": "/treatments/anti-ageing",
  "Perimenopause Skin": "/treatments/skin-health",

  // Sports Performance
  "Youth Performance": "/treatments/sports-performance",
  "Athletes": "/treatments/sports-performance",
  "Competition Prep": "/treatments/sports-performance",
  "Coaches & Teams": "/treatments/sports-performance",
  "Cognitive & Gaming": "/treatments/sports-performance",
  "Performance & Longevity": "/treatments/sports-performance",

  // Pain, Fatigue & Inflammation
  "Chronic Pain": "/treatments/pain-fatigue",
  "Fibromyalgia": "/treatments/pain-fatigue",
  "Hormonal Pain": "/treatments/pain-fatigue",
  "Joint Pain": "/treatments/pain-fatigue",
  "Injury & Recovery": "/treatments/pain-fatigue",
  "Surgery Support": "/treatments/pain-fatigue",
  "Gut & Inflammation": "/treatments/pain-fatigue",
};

const megaMenuData = [
  { 
    heading: "Women's Health", 
    href: "/treatments/womens-health",
    subtitle: "",
    items: ["Fertility & Conception", "Pregnancy & Postnatal", "Perimenopause & Menopause", "Hormonal Conditions", "Mood & Burnout", "Weight, Pre-Diabetes & Type 2 Diabetes", "Gut Health"] 
  },
  { 
    heading: "Men's Health", 
    href: "/treatments/mens-health",
    subtitle: "",
    items: ["Testosterone & Hormones", "Male Fertility", "Weight, Pre-Diabetes & Type 2 Diabetes", "Stress & Burnout", "Healthy Ageing", "Gut Health"] 
  },
  { 
    heading: "Children & Teen Health", 
    href: "/treatments/childrens-health",
    subtitle: "",
    items: ["Early Development", "Gut Health", "Neurodivergent Children", "Immunity & Growth", "Teen Girls", "Teen Boys", "Emotional Wellbeing"] 
  },
  { 
    heading: "Neurodivergence", 
    href: "/treatments/neurodivergence",
    subtitle: "Built by neuro specialists with lived experience",
    items: ["Neuro Curious", "Diagnosed", "Neuro Mums", "Women (Perimenopause & Menopause)", "Men", "Children", "Teen Girls", "Teen Boys"] 
  },
  { 
    heading: "Skin Health", 
    href: "/treatments/skin-health",
    subtitle: "",
    items: ["Acne & Teen Skin", "Hormonal Skin", "Chronic Conditions", "Skin & Gut", "Skin Ageing", "Perimenopause Skin"] 
  },
  { 
    heading: "Sports Performance", 
    href: "/treatments/sports-performance",
    subtitle: "",
    items: ["Youth Performance", "Athletes", "Competition Prep", "Coaches & Teams", "Cognitive & Gaming", "Performance & Longevity"] 
  },
  {
    heading: "Pain, Fatigue & Inflammation",
    href: "/treatments/pain-fatigue",
    subtitle: "",
    items: ["Chronic Pain", "Fibromyalgia", "Hormonal Pain", "Joint Pain", "Injury & Recovery", "Surgery Support", "Gut & Inflammation"]
  },
];

const testingMenuItems = [
  { label: "Foundations", href: "#" },
  { label: "Rapid Screening", href: "#" },
  { label: "Advanced Testing", href: "#" },
  { label: "Test Packages", href: "#" },
];

const tbnMethodMenuItems = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "The Science", href: "#" },
  { label: "Our Specialists", href: "/specialists" },
  { label: "TBN Academy", href: "#" },
  { label: "Why TBN", href: "#" },
];

const clinicsMenuItems = [
  { label: "Find a Specialist", href: "/specialists" },
  { label: "Find a Clinic", href: "/clinics" },
];

const partnerMenuItems = [
  { label: "Host a TBN Hub", href: "/partner-with-us" },
  { label: "Clinics & Practitioners", href: "/partner-with-us" },
  { label: "Health Clubs", href: "/partner-with-us" },
  { label: "Events & Workshops", href: "/partner-with-us" },
];

interface NavbarProps {
  alwaysSolid?: boolean;
}

import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

const PartnerLoginModal = ({ children }: { children: React.ReactNode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      toast.error("Please enter both email and password.");
      return;
    }
    
    setLoading(true);
    const { error, data } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setLoading(false);

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Successfully authenticated!");
      
      // Pass the tokens to the separated partner-hub so it can securely bypass the cross-domain login wall
      const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
      const baseUrl = isLocal ? "http://localhost:3000" : "https://partner-hub-jade.vercel.app";
      
      if (data?.session) {
        window.location.href = `${baseUrl}/login?access_token=${data.session.access_token}&refresh_token=${data.session.refresh_token}`;
      } else {
        window.location.href = `${baseUrl}/login`;
      }
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold font-playfair tracking-tight">Partner Portal</DialogTitle>
          <DialogDescription>
            Sign in to access marketing assets, manage your profile, and publish news to the Hub.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Work Email</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="doctor@clinic.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input 
              id="password" 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-2">
          <Button 
            className="w-full font-bold bg-[#1a3646] hover:bg-[#112430]" 
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? "Authenticating..." : "Sign In to Dashboard"}
          </Button>
          <p className="text-xs text-center text-muted-foreground mt-4">
            Not a partner yet? <a href="/partner-with-us" className="text-primary hover:underline">Apply here</a>.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Navbar = ({ alwaysSolid = false }: NavbarProps) => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileMegaOpen, setMobileMegaOpen] = useState(false);
  const [mobileTestingOpen, setMobileTestingOpen] = useState(false);
  const [mobileTbnMethodOpen, setMobileTbnMethodOpen] = useState(false);
  const [mobileClinicsOpen, setMobileClinicsOpen] = useState(false);
  const [mobilePartnerOpen, setMobilePartnerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isSolid = alwaysSolid || isScrolled || mobileOpen;

  const navBgClass = isSolid ? "bg-stone-50 shadow-md border-b border-border/20" : "bg-transparent pb-4 pt-2"; // add padding when transparent so it feels like it "drops down" on scroll
  const linkClass = "text-[11px] uppercase font-montserrat font-semibold tracking-wider transition-colors " + (isSolid ? "text-black/80 hover:text-black" : "text-white/90 hover:text-white drop-shadow-md");
  const triggerClass = "cursor-pointer border-none outline-none focus:bg-transparent data-[state=open]:bg-transparent " + linkClass + " data-[state=open]:!text-[#7a2a33]";
  const logoClass = "h-8 md:h-10 object-contain transition-all duration-300 " + (!isSolid ? "brightness-0 invert" : "");
  const btnOutlineClass = "bg-transparent border-[1.5px] transition-colors " + (isSolid ? "border-primary text-primary hover:bg-primary/5 hover:text-primary" : "border-white/80 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm");
  const btnGhostClass = "transition-colors " + (isSolid ? "text-black/80 hover:text-black hover:bg-black/10" : "text-white/90 hover:text-white hover:bg-white/10 backdrop-blur-sm");
  const mobileToggleClass = "lg:hidden p-2 transition-colors " + (isSolid ? "text-black" : "text-white drop-shadow-md");


  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBgClass}`}>
        <div className="container flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img 
              src="/logos/test-based-logotype-460x92.png" 
              alt="Test-Based Nutrition" 
              className={logoClass}
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center">
            <Menubar className="border-none bg-transparent p-0 space-x-0">
              <MenubarMenu>
                <MenubarTrigger className={triggerClass}>
                  TBN Pathways
                </MenubarTrigger>
                <MenubarContent align="start" alignOffset={-250} sideOffset={24} className="p-6 md:p-8 w-[98vw] max-w-[1400px] max-h-[85vh] overflow-y-auto shadow-2xl bg-background border border-border rounded-xl">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 xl:gap-6">
                    {megaMenuData.map((col) => (
                      <div key={col.heading} className="flex flex-col">
                        {col.href ? (
                          <a 
                            href={col.href} 
                            className="font-playfair font-heading text-xs md:text-[13px] font-bold uppercase tracking-widest text-foreground hover:text-primary transition-colors border-b border-primary/20 pb-2 mb-2 block w-full outline-none"
                          >
                            {col.heading}
                          </a>
                        ) : (
                          <h4 className="font-playfair font-heading text-xs md:text-[13px] font-bold uppercase tracking-widest text-foreground border-b border-primary/20 pb-2 mb-2">
                            {col.heading}
                          </h4>
                        )}
                        {col.subtitle && (
                          <p className="text-[9px] italic text-muted-foreground mb-2 leading-snug">{col.subtitle}</p>
                        )}
                        <div className="flex flex-col gap-2.5">
                          {col.items.length > 0 ? (
                            col.items.map((item) => (
                              <MenubarItem 
                                key={item} 
                                onClick={() => {
                                  const route = treatmentRoutes[item];
                                  if (route) navigate(route);
                                }}
                                className="cursor-pointer text-[10px] xl:text-[10.5px] font-bold uppercase tracking-[0.1em] text-muted-foreground hover:text-primary focus:bg-primary/5 focus:text-primary transition-colors leading-relaxed whitespace-normal break-words"
                              >
                                {item}
                              </MenubarItem>
                            ))
                          ) : (
                            <span className="text-[10px] text-muted-foreground italic">Coming soon</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>

            <div className="flex items-center gap-1 ml-6">
              <Menubar className="border-none bg-transparent p-0 space-x-0">
                {/* Testing Dropdown */}
                <MenubarMenu>
                  <MenubarTrigger className={triggerClass}>
                    Testing
                  </MenubarTrigger>
                  <MenubarContent align="center" sideOffset={24} className="min-w-[200px] p-4 bg-background border border-border rounded-xl shadow-xl flex flex-col gap-1">
                    {testingMenuItems.map((item) => (
                      <MenubarItem key={item.label} className="cursor-pointer p-0 focus:bg-transparent data-[highlighted]:bg-transparent" asChild>
                        <a href={item.href} className="text-[10px] xl:text-[10.5px] font-bold uppercase tracking-[0.1em] text-muted-foreground hover:!text-primary focus:!text-primary transition-colors py-1.5 block w-full outline-none">{item.label}</a>
                      </MenubarItem>
                    ))}
                  </MenubarContent>
                </MenubarMenu>

                {/* TBN Method Dropdown */}
                <MenubarMenu>
                  <MenubarTrigger className={triggerClass}>
                    The TBN Method
                  </MenubarTrigger>
                  <MenubarContent align="center" sideOffset={24} className="min-w-[200px] p-4 bg-background border border-border rounded-xl shadow-xl flex flex-col gap-1">
                    {tbnMethodMenuItems.map((item) => (
                      <MenubarItem key={item.label} className="cursor-pointer p-0 focus:bg-transparent data-[highlighted]:bg-transparent" asChild>
                        <a href={item.href} className="text-[10px] xl:text-[10.5px] font-bold uppercase tracking-[0.1em] text-muted-foreground hover:!text-primary focus:!text-primary transition-colors py-1.5 block w-full outline-none">{item.label}</a>
                      </MenubarItem>
                    ))}
                  </MenubarContent>
                </MenubarMenu>

                {/* Clinics & Health Clubs Dropdown */}
                <MenubarMenu>
                  <MenubarTrigger className={triggerClass}>
                    Clinics & Health Clubs
                  </MenubarTrigger>
                  <MenubarContent align="center" sideOffset={24} className="min-w-[200px] p-4 bg-background border border-border rounded-xl shadow-xl flex flex-col gap-1">
                    {clinicsMenuItems.map((item) => (
                      <MenubarItem key={item.label} className="cursor-pointer p-0 focus:bg-transparent data-[highlighted]:bg-transparent" asChild>
                        <a href={item.href} className="text-[10px] xl:text-[10.5px] font-bold uppercase tracking-[0.1em] text-muted-foreground hover:!text-primary focus:!text-primary transition-colors py-1.5 block w-full outline-none">{item.label}</a>
                      </MenubarItem>
                    ))}
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>

              <a
                href="/news"
                className={linkClass}
              >
                News
              </a>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Menubar className="border-none bg-transparent p-0 space-x-0">
              <MenubarMenu>
                <MenubarTrigger className={"cursor-pointer border-[1.5px] rounded-md px-4 py-1.5 text-[11px] uppercase font-montserrat font-semibold tracking-wider transition-colors outline-none focus:bg-transparent data-[state=open]:bg-transparent " + (isSolid ? "border-primary text-primary hover:bg-primary/5 data-[state=open]:!text-[#7a2a33]" : "border-white/80 text-white hover:bg-white/10 backdrop-blur-sm data-[state=open]:!text-white")}>
                  Partner With Us
                </MenubarTrigger>
                <MenubarContent align="end" sideOffset={24} className="min-w-[220px] p-4 bg-background border border-border rounded-xl shadow-xl flex flex-col gap-1">
                  {partnerMenuItems.map((item) => (
                    <MenubarItem key={item.label} className="cursor-pointer p-0 focus:bg-transparent data-[highlighted]:bg-transparent" asChild>
                      <a href={item.href} className="text-[10px] xl:text-[10.5px] font-bold uppercase tracking-[0.1em] text-muted-foreground hover:!text-primary focus:!text-primary transition-colors py-1.5 block w-full outline-none">{item.label}</a>
                    </MenubarItem>
                  ))}
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
            <PartnerLoginModal>
              <Button variant="ghost" className={btnGhostClass}>
                Sign In
              </Button>
            </PartnerLoginModal>
          </div>

          {/* Mobile Toggle */}
          <button
            className={mobileToggleClass}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            <div className="container py-6 flex flex-col gap-4">
              {/* Mobile Treatments Accordion */}
              <button
                className="flex items-center justify-between text-[11px] uppercase font-montserrat font-semibold tracking-wider text-muted-foreground hover:text-foreground py-2"
                onClick={() => setMobileMegaOpen(!mobileMegaOpen)}
              >
                TBN Pathways
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

              {/* Mobile Testing Accordion */}
              <button
                className="flex items-center justify-between text-[11px] uppercase font-montserrat font-semibold tracking-wider text-muted-foreground hover:text-foreground py-2"
                onClick={() => setMobileTestingOpen(!mobileTestingOpen)}
              >
                Testing
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileTestingOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileTestingOpen && (
                <div className="pl-4 pb-2 flex flex-col gap-2">
                  {testingMenuItems.map((item) => (
                    <a key={item.label} href={item.href} className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors block" onClick={() => setMobileOpen(false)}>{item.label}</a>
                  ))}
                </div>
              )}

              {/* Mobile TBN Method Accordion */}
              <button
                className="flex items-center justify-between text-[11px] uppercase font-montserrat font-semibold tracking-wider text-muted-foreground hover:text-foreground py-2"
                onClick={() => setMobileTbnMethodOpen(!mobileTbnMethodOpen)}
              >
                The TBN Method
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileTbnMethodOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileTbnMethodOpen && (
                <div className="pl-4 pb-2 flex flex-col gap-2">
                  {tbnMethodMenuItems.map((item) => (
                    <a key={item.label} href={item.href} className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors block" onClick={() => setMobileOpen(false)}>{item.label}</a>
                  ))}
                </div>
              )}

              {/* Mobile Clinics & Health Clubs Accordion */}
              <button
                className="flex items-center justify-between text-[11px] uppercase font-montserrat font-semibold tracking-wider text-muted-foreground hover:text-foreground py-2"
                onClick={() => setMobileClinicsOpen(!mobileClinicsOpen)}
              >
                Clinics & Health Clubs
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileClinicsOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileClinicsOpen && (
                <div className="pl-4 pb-2 flex flex-col gap-2">
                  {clinicsMenuItems.map((item) => (
                    <a key={item.label} href={item.href} className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors block" onClick={() => setMobileOpen(false)}>{item.label}</a>
                  ))}
                </div>
              )}

              <a
                href="/news"
                className="text-[11px] uppercase font-montserrat font-semibold tracking-wider text-muted-foreground hover:text-foreground py-2"
                onClick={() => setMobileOpen(false)}
              >
                News
              </a>

              {/* Mobile Partner With Us Accordion */}
              <button
                className="flex items-center justify-between text-[11px] uppercase font-montserrat font-semibold tracking-wider text-primary py-2 mt-2 border-t border-border pt-4"
                onClick={() => setMobilePartnerOpen(!mobilePartnerOpen)}
              >
                Partner With Us
                <ChevronDown className={`w-4 h-4 transition-transform ${mobilePartnerOpen ? "rotate-180" : ""}`} />
              </button>
              {mobilePartnerOpen && (
                <div className="pl-4 pb-2 flex flex-col gap-2">
                  {partnerMenuItems.map((item) => (
                    <a key={item.label} href={item.href} className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors block" onClick={() => setMobileOpen(false)}>{item.label}</a>
                  ))}
                </div>
              )}
              <PartnerLoginModal>
                <Button variant="ghost" className="w-full text-muted-foreground hover:text-foreground">
                  Sign In
                </Button>
              </PartnerLoginModal>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
