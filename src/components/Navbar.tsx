import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
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
  "Acne & Breakouts": "/treatments/skin-health",
  "Eczema & Psoriasis": "/treatments/skin-health",
  "Rosacea & Sensitive Skin": "/treatments/skin-health",
  "Hormonal & Perimenopause Skin": "/treatments/skin-health",
  "Baby & Children's Skin": "/treatments/skin-health",
  "Skin Ageing & Longevity": "/treatments/anti-ageing",

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
    heading: "Children & Teen", 
    href: "/treatments/childrens-health",
    subtitle: "",
    items: ["Early Development", "Gut Health", "Neurodivergent Children", "Immunity & Growth", "Teen Girls", "Teen Boys", "Emotional Wellbeing"] 
  },
  { 
    heading: "Neurodivergence", 
    href: "/treatments/neurodivergence",
    subtitle: "",
    items: ["Neuro Curious", "Diagnosed", "Neuro Mums", "Women (Perimenopause & Menopause)", "Men", "Children", "Teen Girls", "Teen Boys"] 
  },
  { 
    heading: "Skin Health", 
    href: "/treatments/skin-health",
    subtitle: "",
    items: ["Acne & Breakouts", "Eczema & Psoriasis", "Rosacea & Sensitive Skin", "Hormonal & Perimenopause Skin", "Baby & Children's Skin", "Skin Ageing & Longevity"] 
  },
  { 
    heading: "Sports Performance", 
    href: "/treatments/sports-performance",
    subtitle: "",
    items: ["Youth Performance", "Athletes", "Competition Prep", "Coaches & Teams", "Cognitive & Gaming", "Performance & Longevity"] 
  },
  {
    heading: "Pain & Fatigue",
    href: "/treatments/pain-fatigue",
    subtitle: "",
    items: ["Chronic Pain", "Fibromyalgia", "Hormonal Pain", "Joint Pain", "Injury & Recovery", "Surgery Support", "Gut & Inflammation"]
  },
];

const testingMenuItems = [
  { label: "Foundations", href: "/testing#foundations" },
  { label: "Rapid Screening", href: "/testing#rapid-screening" },
  { label: "Advanced Testing", href: "/testing#advanced-testing" },
  { label: "Test Packages", href: "/testing#test-packages" },
];

const tbnMethodMenuItems = [
  { label: "Overview", href: "/tbn-method" },
  { label: "How It Works", href: "/tbn-method#how-it-works" },
  { label: "The Science", href: "/tbn-method#science" },
  { label: "Our Specialists", href: "/tbn-method#science" },
  { label: "TBN Academy", href: "/tbn-method#academy" },
];

const clinicsMenuItems = [
  { label: "A Specialist", href: "/specialists" },
  { label: "An Ambassador", href: "/specialists?ambassadors=true" },
  { label: "A Health Club", href: "/collectives", disabled: true },
  { label: "A Clinic", href: "/collectives", disabled: true },
];

const partnerMenuItems: { label: string; href: string | null }[] = [
  { label: "Host a TBN Hub", href: "/partner-with-us#host-hub" },
  { label: "Clinics & Practitioners", href: "/partner-with-us#partner-segments" },
  { label: "Health Clubs", href: "/partner-with-us#partner-segments" },
  { label: "Events & Workshops", href: null },
  { label: "Retreats", href: null },
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
        window.location.href = `${baseUrl}/dashboard?access_token=${data.session.access_token}&refresh_token=${data.session.refresh_token}`;
      } else {
        window.location.href = `${baseUrl}/dashboard`;
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
  const [mobileActivePathwaySection, setMobileActivePathwaySection] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isSolid = alwaysSolid || isScrolled || mobileOpen;

  const navBgClass = isSolid ? "bg-stone-50 shadow-md border-b border-border/20" : "bg-transparent";
  
  const currentPath = location.pathname;

  const isPathwaysActive = currentPath.startsWith("/treatments");
  const isTestingActive = currentPath.startsWith("/testing");
  const isMethodActive = currentPath.startsWith("/tbn-method");
  const isCollectiveActive = currentPath === "/specialists" || currentPath === "/collectives";
  const isNewsActive = currentPath.startsWith("/news");

  const isRouteActive = (href: string) => {
    if (href.includes("#")) {
      const [path, hash] = href.split("#");
      return location.pathname === path && location.hash === "#" + hash;
    }
    if (href.includes("?")) {
      const [path, search] = href.split("?");
      return location.pathname === path && location.search === "?" + search;
    }
    return location.pathname === href;
  };

  const getDropdownItemClass = (href: string) => {
    const active = isRouteActive(href);
    return `font-playfair font-bold text-[12px] xl:text-[13px] uppercase tracking-[0.08em] transition-colors py-1 px-2 rounded block w-full outline-none focus:!text-black hover:!text-black data-[highlighted]:!text-black ${
      active 
        ? "text-black font-extrabold bg-black/5" 
        : "text-muted-foreground hover:text-black focus:text-black"
    }`;
  };

  const getMegaMenuSubItemClass = (label: string) => {
    const href = treatmentRoutes[label];
    const active = href ? isRouteActive(href) : false;
    return `cursor-pointer py-1 px-1.5 -mx-1 text-[10px] xl:text-[10.5px] font-bold uppercase tracking-[0.1em] transition-colors leading-snug whitespace-normal break-words rounded block w-full focus:!text-black hover:!text-black data-[highlighted]:!text-black ${
      active
        ? "text-black font-extrabold bg-black/5"
        : "text-muted-foreground hover:text-black focus:text-black focus:bg-black/5"
    }`;
  };

  const getMegaMenuHeadingClass = (href: string | undefined) => {
    const active = href && currentPath === href;
    return `font-playfair font-heading text-xs md:text-[13px] font-bold uppercase tracking-widest transition-colors border-b border-primary/20 pb-1.5 mb-1.5 block w-full outline-none focus:!text-black hover:!text-black data-[highlighted]:!text-black ${
      active ? "text-black font-extrabold" : "text-foreground hover:text-primary"
    }`;
  };

  const getTriggerClass = (active: boolean) => {
    const activeColorClass = isSolid ? "text-black border-black font-extrabold" : "text-white border-white font-extrabold";
    const inactiveColorClass = isSolid ? "text-black/70 hover:text-black border-transparent" : "text-white/80 hover:text-white border-transparent drop-shadow-md";
    return "cursor-pointer border-none bg-transparent outline-none focus:bg-transparent data-[state=open]:bg-transparent text-[11px] uppercase font-montserrat font-semibold tracking-wider transition-colors pb-1 border-b-2 " +
      (active ? activeColorClass : inactiveColorClass) + 
      (isSolid ? " data-[state=open]:!text-black focus:!text-black hover:!text-black focus-visible:!text-black active:!text-black" : " data-[state=open]:!text-white focus:!text-white hover:!text-white focus-visible:!text-white active:!text-white");
  };

  const getLinkClass = (active: boolean) => {
    const activeColorClass = isSolid ? "text-black border-black font-extrabold" : "text-white border-white font-extrabold";
    const inactiveColorClass = isSolid ? "text-black/70 hover:text-black border-transparent" : "text-white/80 hover:text-white border-transparent drop-shadow-md";
    return "text-[11px] uppercase font-montserrat font-semibold tracking-wider transition-colors pb-1 border-b-2 " +
      (active ? activeColorClass : inactiveColorClass) +
      (isSolid ? " focus:!text-black hover:!text-black focus-visible:!text-black active:!text-black" : " focus:!text-white hover:!text-white focus-visible:!text-white active:!text-white");
  };

  const logoClass = "h-14 md:h-[4.5rem] object-contain transition-all duration-300 " + (!isSolid ? "brightness-0 invert" : "");
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
              src="/logos/tbn-official-logo.png" 
              alt="Test-Based Nutrition" 
              className={logoClass}
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center">
            <Menubar className="border-none bg-transparent p-0 space-x-0">
              <MenubarMenu>
                <MenubarTrigger className={getTriggerClass(isPathwaysActive)}>
                  TBN Pathways
                </MenubarTrigger>
                <MenubarContent align="start" alignOffset={-250} sideOffset={24} className="p-4 md:p-6 w-[98vw] max-w-[1400px] max-h-[85vh] overflow-y-auto shadow-2xl bg-background border border-border rounded-xl">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 xl:gap-4">
                    {megaMenuData.map((col) => (
                      <div key={col.heading} className="flex flex-col">
                        {col.href ? (
                          <a 
                            href={col.href} 
                            className={getMegaMenuHeadingClass(col.href)}
                          >
                            {col.heading}
                          </a>
                        ) : (
                          <h4 className="font-playfair font-heading text-xs md:text-[13px] font-bold uppercase tracking-widest text-foreground border-b border-primary/20 pb-1.5 mb-1.5">
                            {col.heading}
                          </h4>
                        )}
                        {col.subtitle && (
                          <p className="text-[9px] italic text-muted-foreground mb-2 leading-snug">{col.subtitle}</p>
                        )}
                        <div className="flex flex-col gap-0.5">
                          {col.items.length > 0 ? (
                            col.items.map((item) => (
                              <MenubarItem 
                                key={item} 
                                onClick={() => {
                                  const route = treatmentRoutes[item];
                                  if (route) navigate(route);
                                }}
                                className={getMegaMenuSubItemClass(item)}
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
                  <MenubarTrigger 
                    className={getTriggerClass(isTestingActive)}
                    onClick={() => navigate('/testing')}
                  >
                    Testing
                  </MenubarTrigger>
                  <MenubarContent align="center" sideOffset={24} className="min-w-[200px] p-3 bg-background border border-border rounded-xl shadow-xl flex flex-col gap-0.5">
                    {testingMenuItems.map((item) => (
                      <MenubarItem key={item.label} className="cursor-pointer p-0 focus:bg-transparent data-[highlighted]:bg-transparent" asChild>
                        <a href={item.href} className={getDropdownItemClass(item.href)}>{item.label}</a>
                      </MenubarItem>
                    ))}
                  </MenubarContent>
                </MenubarMenu>

                {/* TBN Method Dropdown */}
                <MenubarMenu>
                  <MenubarTrigger 
                    className={getTriggerClass(isMethodActive)}
                    onClick={() => navigate('/tbn-method')}
                  >
                    The TBN Method
                  </MenubarTrigger>
                  <MenubarContent align="center" sideOffset={24} className="min-w-[200px] p-3 bg-background border border-border rounded-xl shadow-xl flex flex-col gap-0.5">
                    {tbnMethodMenuItems.map((item) => (
                      <MenubarItem key={item.label} className="cursor-pointer p-0 focus:bg-transparent data-[highlighted]:bg-transparent" asChild>
                        <a href={item.href} className={getDropdownItemClass(item.href)}>{item.label}</a>
                      </MenubarItem>
                    ))}
                  </MenubarContent>
                </MenubarMenu>

                {/* Directory Dropdown */}
                <MenubarMenu>
                  <MenubarTrigger className={getTriggerClass(isCollectiveActive)}>
                    Directory
                  </MenubarTrigger>
                  <MenubarContent align="center" sideOffset={24} className="min-w-[200px] p-3 bg-background border border-border rounded-xl shadow-xl flex flex-col gap-0.5">
                    <div className="px-2 py-1 text-[10px] font-extrabold uppercase tracking-widest text-[#9f1e13]">
                      Find a:
                    </div>
                    {clinicsMenuItems.map((item) => (
                      <MenubarItem 
                        key={item.label} 
                        className={item.disabled ? "p-0 focus:bg-transparent data-[highlighted]:bg-transparent" : "cursor-pointer p-0 focus:bg-transparent data-[highlighted]:bg-transparent"} 
                        disabled={item.disabled}
                        asChild={!item.disabled}
                      >
                        {item.disabled ? (
                          <span className="font-playfair font-bold text-[12px] xl:text-[13px] uppercase tracking-[0.08em] py-1 px-2 pl-5 block w-full text-muted-foreground/45 cursor-not-allowed select-none opacity-60">
                            {item.label}
                          </span>
                        ) : (
                          <a href={item.href} className={`${getDropdownItemClass(item.href)} pl-5`}>{item.label}</a>
                        )}
                      </MenubarItem>
                    ))}
                  </MenubarContent>
                </MenubarMenu>

                {/* News */}
                <MenubarMenu>
                  <MenubarTrigger 
                    className={getTriggerClass(isNewsActive)}
                    onClick={() => navigate('/news')}
                  >
                    News
                  </MenubarTrigger>
                </MenubarMenu>
              </Menubar>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Menubar className="border-none bg-transparent p-0 space-x-0">
              <MenubarMenu>
                <MenubarTrigger 
                  className={"cursor-pointer border-[1.5px] rounded-md px-4 py-1.5 text-[11px] uppercase font-montserrat font-semibold tracking-wider transition-colors outline-none focus:bg-transparent data-[state=open]:bg-transparent " + (isSolid ? "border-black text-black hover:bg-black/5 data-[state=open]:!text-black focus:!text-black hover:!text-black focus-visible:!text-black active:!text-black" : "border-white/80 text-white hover:bg-white/10 backdrop-blur-sm data-[state=open]:!text-white focus:!text-white hover:!text-white focus-visible:!text-white active:!text-white")}
                  onClick={() => navigate('/partner-with-us')}
                >
                  Partner With Us
                </MenubarTrigger>                <MenubarContent align="end" sideOffset={24} className="min-w-[220px] p-3 bg-background border border-border rounded-xl shadow-xl flex flex-col gap-0.5">
                  {partnerMenuItems.map((item) => (
                    <MenubarItem 
                      key={item.label} 
                      className={`p-0 focus:bg-transparent data-[highlighted]:bg-transparent ${item.href ? 'cursor-pointer' : 'cursor-default'}`} 
                      asChild
                    >
                      {item.href ? (
                        <a href={item.href} className={getDropdownItemClass(item.href)}>{item.label}</a>
                      ) : (
                        <span className="font-playfair font-bold text-[12px] xl:text-[13px] uppercase tracking-[0.08em] py-1 px-2 rounded block w-full outline-none text-muted-foreground/40 select-none cursor-default">
                          {item.label}{" "}
                          <span className="text-[10px] normal-case font-normal text-muted-foreground/50 ml-1">
                            (coming soon)
                          </span>
                        </span>
                      )}
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
                className={`flex items-center justify-between text-[11px] uppercase font-montserrat font-semibold tracking-wider py-2 transition-colors ${
                  isPathwaysActive 
                    ? "text-black font-extrabold border-b border-black" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setMobileMegaOpen(!mobileMegaOpen)}
              >
                TBN Pathways
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileMegaOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileMegaOpen && (
                <div className="pl-4 pb-2 flex flex-col gap-3 border-l border-border/80 ml-1">
                  {megaMenuData.map((col) => {
                    const isSectionOpen = mobileActivePathwaySection === col.heading;
                    return (
                      <div key={col.heading} className="flex flex-col gap-1.5">
                        <button
                          onClick={() => setMobileActivePathwaySection(isSectionOpen ? null : col.heading)}
                          className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-foreground hover:text-primary py-1 text-left w-full"
                        >
                          <span>{col.heading}</span>
                          <ChevronDown className={`w-3.5 h-3.5 text-muted-foreground transition-transform ${isSectionOpen ? "rotate-180" : ""}`} />
                        </button>
                        
                        {isSectionOpen && (
                          <div className="pl-3 pb-1.5 flex flex-col gap-2 border-l border-border/50 ml-1 mt-0.5 animate-[fadeIn_0.2s_ease-out]">
                            {/* Main pathway overview link */}
                            {col.href && (
                              <button
                                className="text-[13px] text-left font-medium transition-colors text-primary hover:underline"
                                onClick={() => {
                                  setMobileOpen(false);
                                  setMobileMegaOpen(false);
                                  setMobileActivePathwaySection(null);
                                  navigate(col.href);
                                }}
                              >
                                View Pathway Overview
                              </button>
                            )}
                            
                            {col.items.length > 0 ? (
                              col.items.map((item) => {
                                const route = treatmentRoutes[item];
                                const active = route ? isRouteActive(route) : false;
                                return (
                                  <button
                                    key={item}
                                    className={`text-[13px] text-left transition-colors ${
                                      active
                                        ? "text-black font-extrabold"
                                        : "text-muted-foreground hover:text-primary"
                                    }`}
                                    onClick={() => {
                                      setMobileOpen(false);
                                      setMobileMegaOpen(false);
                                      setMobileActivePathwaySection(null);
                                      if (route) navigate(route);
                                    }}
                                  >
                                    {item}
                                  </button>
                                );
                              })
                            ) : (
                              <span className="text-xs text-muted-foreground italic pl-1">Coming soon</span>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Mobile Testing Accordion */}
              <div className="flex items-center justify-between py-2">
                <button
                  className={`text-[11px] uppercase font-montserrat font-semibold tracking-wider transition-colors ${
                    isTestingActive 
                      ? "text-black font-extrabold border-b border-black" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => {
                    setMobileOpen(false);
                    navigate('/testing');
                  }}
                >
                  Testing
                </button>
                <button
                  className="text-muted-foreground hover:text-foreground px-4 -mr-4"
                  onClick={() => setMobileTestingOpen(!mobileTestingOpen)}
                >
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileTestingOpen ? "rotate-180" : ""}`} />
                </button>
              </div>
              {mobileTestingOpen && (
                <div className="pl-4 pb-2 flex flex-col gap-2">
                  {testingMenuItems.map((item) => (
                    <a 
                      key={item.label} 
                      href={item.href} 
                      className={`text-sm font-semibold transition-colors block ${
                        isRouteActive(item.href)
                          ? "text-black font-extrabold"
                          : "text-muted-foreground hover:text-primary"
                      }`} 
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}

              {/* Mobile TBN Method Accordion */}
              <div className="flex items-center justify-between py-2">
                <button
                  className={`text-[11px] uppercase font-montserrat font-semibold tracking-wider transition-colors ${
                    isMethodActive 
                      ? "text-black font-extrabold border-b border-black" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => {
                    setMobileOpen(false);
                    navigate('/tbn-method');
                  }}
                >
                  The TBN Method
                </button>
                <button
                  className="text-muted-foreground hover:text-foreground px-4 -mr-4"
                  onClick={() => setMobileTbnMethodOpen(!mobileTbnMethodOpen)}
                >
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileTbnMethodOpen ? "rotate-180" : ""}`} />
                </button>
              </div>
              {mobileTbnMethodOpen && (
                <div className="pl-4 pb-2 flex flex-col gap-2">
                  {tbnMethodMenuItems.map((item) => (
                    <a 
                      key={item.label} 
                      href={item.href} 
                      className={`text-sm font-semibold transition-colors block ${
                        isRouteActive(item.href)
                          ? "text-black font-extrabold"
                          : "text-muted-foreground hover:text-primary"
                      }`} 
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}

              {/* Mobile Directory Accordion */}
              <button
                className={`flex items-center justify-between text-[11px] uppercase font-montserrat font-semibold tracking-wider py-2 transition-colors ${
                  isCollectiveActive 
                    ? "text-black font-extrabold border-b border-black" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setMobileClinicsOpen(!mobileClinicsOpen)}
              >
                Directory
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileClinicsOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileClinicsOpen && (
                <div className="pl-4 pb-2 flex flex-col gap-2">
                  <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#9f1e13] px-1 py-1">
                    Find a:
                  </div>
                  {clinicsMenuItems.map((item) => 
                    item.disabled ? (
                      <span 
                        key={item.label} 
                        className="text-sm font-semibold block pl-4 text-muted-foreground/45 cursor-not-allowed select-none opacity-60"
                      >
                        {item.label}
                      </span>
                    ) : (
                      <a 
                        key={item.label} 
                        href={item.href} 
                        className={`text-sm font-semibold transition-colors block pl-4 ${
                          isRouteActive(item.href)
                            ? "text-black font-extrabold"
                            : "text-muted-foreground hover:text-primary"
                        }`} 
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </a>
                    )
                  )}
                </div>
              )}

              <a
                href="/news"
                className={`text-[11px] uppercase font-montserrat font-semibold tracking-wider transition-colors py-2 block ${
                  isNewsActive 
                    ? "text-black font-extrabold border-b border-black w-max" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                News
              </a>

              {/* Mobile Partner With Us Accordion */}
              <button
                className="flex items-center justify-between text-[11px] uppercase font-montserrat font-semibold tracking-wider text-primary py-2 mt-2 border-t border-border pt-4 w-full"
                onClick={() => setMobilePartnerOpen(!mobilePartnerOpen)}
              >
                Partner With Us
                <ChevronDown className={`w-4 h-4 transition-transform ${mobilePartnerOpen ? "rotate-180" : ""}`} />
              </button>
              {mobilePartnerOpen && (
                <div className="pl-4 pb-2 flex flex-col gap-2">
                  {partnerMenuItems.map((item) => 
                    item.href ? (
                      <a 
                        key={item.label} 
                        href={item.href} 
                        className={`text-sm font-semibold transition-colors block ${
                          isRouteActive(item.href)
                            ? "text-black font-extrabold"
                            : "text-muted-foreground hover:text-primary"
                        }`} 
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <span 
                        key={item.label} 
                        className="text-sm font-semibold text-muted-foreground/40 block select-none cursor-default"
                      >
                        {item.label}{" "}
                        <span className="text-xs normal-case font-normal text-muted-foreground/50 ml-1">
                          (coming soon)
                        </span>
                      </span>
                    )
                  )}
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
