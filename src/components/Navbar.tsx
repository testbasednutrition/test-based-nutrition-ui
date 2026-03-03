import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Treatments", href: "#services" },
  { label: "How we Works", href: "#how-it-works" },
  { label: "Specialists", href: "#experts" },
  { label: "News Hub", href: "#news" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full border-2 border-foreground relative">
            <div className="absolute bottom-0.5 right-0.5 w-2 h-2 rounded-full bg-primary" />
          </div>
          <div className="leading-tight">
            <span className="font-semibold text-sm tracking-wide">Test-based</span>
            <span className="block text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
              Nutrition + Performance
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button asChild>
            <a href="https://calendar.app.google/CDYDAvjFmMvJP3S88" target="_blank" rel="noopener noreferrer">
              Partner With Us
            </a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="container py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-base font-medium text-muted-foreground hover:text-foreground py-2"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="mt-2 w-full">
              <a href="https://calendar.app.google/CDYDAvjFmMvJP3S88" target="_blank" rel="noopener noreferrer">
                Partner With Us
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
