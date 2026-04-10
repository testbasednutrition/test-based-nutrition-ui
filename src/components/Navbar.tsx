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
  "Puberty & Teen Hormones": "/treatments/womens-health",
  "Fertility & Conception": "/treatments/fertility",
  "Pregnancy & Postnatal Health": "/treatments/womens-health",
  "Perimenopause & Menopause": "/treatments/womens-health",
  "Hormonal Conditions": "/treatments/womens-health",
  "Mood, Brain Fog & Burnout": "/treatments/womens-health",
  "Weight Loss & Metabolic Support": "/treatments/womens-health",
  "Gut Health Issues": "/treatments/womens-health", // Generic gut mapped to women's health for this section
  
  // Men's Health
  "Teen & Young Men's Hormones": "/treatments/mens-health",
  "Testosterone & Hormonal Health": "/treatments/mens-health",
  "Male Fertility": "/treatments/fertility",
  "Weight Loss & Metabolic Health": "/treatments/mens-health",
  "Stress, Mood & Burnout": "/treatments/mens-health",
  "Healthy Ageing for Men": "/treatments/anti-ageing",
  // "Gut Health Issues" is already declared above, but the route is generic anyway, we will handle potential duplicate keys by using unique maps or just relying on the same generic path:
  // We'll map "Gut Health Issues" to a generic route if needed, or leave the single instance if sufficient.
  
  // Children's Health
  "Early Childhood Development": "/treatments/childrens-health",
  "Gut Health in Children": "/treatments/childrens-health",
  "Neurodivergent Children (ADHD & Focus)": "/treatments/childrens-health",
  "Immunity, Growth & Development": "/treatments/childrens-health",
  "Teen Health & Hormones": "/treatments/childrens-health",
  "Emotional Wellbeing & Behaviour": "/treatments/childrens-health",

  // Neurodivergence
  "ADHD in Children": "/treatments/childrens-health",
  "Neurodivergent Teens": "/treatments/childrens-health",
  "ADHD in Women": "/treatments/womens-health",
  "ADHD in Adults": "/treatments/mens-health",
  "Focus, Brain Fog & Cognitive Health": "/treatments/anti-ageing",
  "Gut Health & Neurodivergence": "/treatments/mens-health",

  // Skin Health
  "Acne & Teen Skin": "/treatments/skin-health",
  "Hormonal Skin": "/treatments/skin-health",
  "Chronic Skin Conditions": "/treatments/skin-health",
  "Skin & Gut Health": "/treatments/skin-health",
  "Skin Ageing & Collagen Health": "/treatments/anti-ageing",
  "Perimenopause Skin": "/treatments/skin-health",

  // Sports Performance
  "Youth Performance": "/treatments/childrens-health",
  "Athletes (Amateur to Elite)": "/treatments/mens-health",
  "Event & Competition Preparation": "/treatments/mens-health",
  "Coaches & Performance Teams": "/treatments/mens-health",
  "Peak Performance & Longevity": "/treatments/anti-ageing",

  // Pain, Fatigue & Inflammation
  "Chronic Pain & Fatigue": "/treatments/pain-fatigue",
  "Hormonal Pain & Inflammation": "/treatments/pain-fatigue",
  "Arthritis, Joint Pain & Stiffness": "/treatments/pain-fatigue",
  "Injury, Recovery & Ongoing Pain": "/treatments/pain-fatigue",
  "Surgery Preparation & Recovery": "/treatments/pain-fatigue",
  "Gut Health & Inflammation": "/treatments/pain-fatigue",
};

const megaMenuData = [
  { 
    heading: "Women's Health", 
    href: "/treatments/womens-health",
    items: ["Puberty & Teen Hormones", "Fertility & Conception", "Pregnancy & Postnatal Health", "Perimenopause & Menopause", "Hormonal Conditions", "Mood, Brain Fog & Burnout", "Weight Loss & Metabolic Support", "Gut Health Issues"] 
  },
  { 
    heading: "Men's Health", 
    href: "/treatments/mens-health",
    items: ["Teen & Young Men's Hormones", "Testosterone & Hormonal Health", "Male Fertility", "Weight Loss & Metabolic Health", "Stress, Mood & Burnout", "Healthy Ageing for Men", "Gut Health Issues"] 
  },
  { 
    heading: "Children's Health", 
    href: "/treatments/childrens-health",
    items: ["Early Childhood Development", "Gut Health in Children", "Neurodivergent Children (ADHD & Focus)", "Immunity, Growth & Development", "Teen Health & Hormones", "Emotional Wellbeing & Behaviour"] 
  },
  { 
    heading: "Neurodivergence", 
    href: "/treatments/neurodivergence",
    items: ["ADHD in Children", "Neurodivergent Teens", "ADHD in Women", "ADHD in Adults", "Focus, Brain Fog & Cognitive Health", "Gut Health & Neurodivergence"] 
  },
  { 
    heading: "Skin Health", 
    href: "/treatments/skin-health",
    items: ["Acne & Teen Skin", "Hormonal Skin", "Chronic Skin Conditions", "Skin & Gut Health", "Skin Ageing & Collagen Health", "Perimenopause Skin"] 
  },
  { 
    heading: "Sports Performance", 
    href: "/treatments/sports-performance",
    items: ["Youth Performance", "Athletes (Amateur to Elite)", "Event & Competition Preparation", "Coaches & Performance Teams", "Peak Performance & Longevity"] 
  },
  {
    heading: "Pain, Fatigue & Inflammation",
    href: "/treatments/pain-fatigue",
    items: ["Chronic Pain & Fatigue", "Hormonal Pain & Inflammation", "Arthritis, Joint Pain & Stiffness", "Injury, Recovery & Ongoing Pain", "Surgery Preparation & Recovery", "Gut Health & Inflammation"]
  },
];

const navLinks = [
  { label: "Testing", href: "#" },
  { label: "TBN Method", href: "/#how-it-works" },
  { label: "News", href: "/news" },
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
  const [mobileDirectoryOpen, setMobileDirectoryOpen] = useState(false);
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
                            className="font-playfair font-heading text-xs md:text-[13px] font-bold uppercase tracking-widest text-foreground hover:text-primary transition-colors border-b border-primary/20 pb-2 mb-4 block w-full outline-none"
                          >
                            {col.heading}
                          </a>
                        ) : (
                          <h4 className="font-playfair font-heading text-xs md:text-[13px] font-bold uppercase tracking-widest text-foreground border-b border-primary/20 pb-2 mb-4">
                            {col.heading}
                          </h4>
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

            <div className="flex items-center gap-6 ml-6">
              <a
                href={navLinks[0].href}
                className={linkClass}
              >
                {navLinks[0].label}
              </a>

              <a
                href={navLinks[1].href}
                className={linkClass}
              >
                {navLinks[1].label}
              </a>

              <Menubar className="border-none bg-transparent p-0 space-x-0">
                <MenubarMenu>
                  <MenubarTrigger className={triggerClass}>
                    Directory
                  </MenubarTrigger>
                  <MenubarContent align="center" sideOffset={24} className="min-w-[200px] p-2 bg-background border border-border rounded-xl shadow-xl flex flex-col gap-1">
                    <MenubarItem className="cursor-pointer" asChild>
                      <a href="/specialists" className="text-sm font-semibold text-muted-foreground hover:text-primary focus:text-primary focus:bg-primary/5 transition-colors py-2 px-3 block rounded-md w-full">Specialists</a>
                    </MenubarItem>
                    <MenubarItem className="cursor-pointer" asChild>
                      <a href="/clinics" className="text-sm font-semibold text-muted-foreground hover:text-primary focus:text-primary focus:bg-primary/5 transition-colors py-2 px-3 block rounded-md w-full">Clinics</a>
                    </MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>

              <a
                href={navLinks[2].href}
                className={linkClass}
              >
                {navLinks[2].label}
              </a>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Button variant="outline" asChild className={btnOutlineClass}>
              <a href="/partner-with-us">
                Partner With Us
              </a>
            </Button>
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

              <a
                href={navLinks[0].href}
                className="text-[11px] uppercase font-montserrat font-semibold tracking-wider text-muted-foreground hover:text-foreground py-2"
                onClick={() => setMobileOpen(false)}
              >
                {navLinks[0].label}
              </a>

              <a
                href={navLinks[1].href}
                className="text-[11px] uppercase font-montserrat font-semibold tracking-wider text-muted-foreground hover:text-foreground py-2"
                onClick={() => setMobileOpen(false)}
              >
                {navLinks[1].label}
              </a>

              {/* Mobile Directory Accordion */}
              <button
                className="flex items-center justify-between text-[11px] uppercase font-montserrat font-semibold tracking-wider text-muted-foreground hover:text-foreground py-2"
                onClick={() => setMobileDirectoryOpen(!mobileDirectoryOpen)}
              >
                Directory
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileDirectoryOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileDirectoryOpen && (
                <div className="pl-4 pb-2 flex flex-col gap-3">
                  <a href="/specialists" className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors block" onClick={() => setMobileOpen(false)}>Specialists</a>
                  <a href="/clinics" className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors block" onClick={() => setMobileOpen(false)}>Clinics</a>
                </div>
              )}

              <a
                href={navLinks[2].href}
                className="text-[11px] uppercase font-montserrat font-semibold tracking-wider text-muted-foreground hover:text-foreground py-2"
                onClick={() => setMobileOpen(false)}
              >
                {navLinks[2].label}
              </a>
              <Button variant="outline" asChild className="mt-2 w-full border-primary text-primary hover:bg-primary/5 hover:text-primary transition-colors bg-transparent border-[1.5px]">
                <a href="/partner-with-us">
                  Partner With Us
                </a>
              </Button>
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
