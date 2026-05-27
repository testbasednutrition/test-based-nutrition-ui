import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuiz } from "@/components/QuizContext";
import { Link, useLocation } from "react-router-dom";

const links = [
  { label: "Home", href: "/" },
  { label: "Specialists", href: "/specialists" },
];

const NewsNavbar = () => {
  const [open, setOpen] = useState(false);
  const { openQuiz } = useQuiz();
  const location = useLocation();
  const currentPath = location.pathname;

  const isLinkActive = (href: string) => {
    if (href === "/") {
      return currentPath === "/";
    }
    return currentPath.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-14 md:h-16 px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/logos/test-based-logo-new.png" 
            alt="Test-Based Nutrition" 
            className="h-12 md:h-14 object-contain"
          />
          <div className="leading-tight border-l border-border pl-2 ml-1">
            <span className="font-semibold text-xs whitespace-nowrap">News Hub</span>
          </div>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.href}
              className={`text-[11px] uppercase font-montserrat font-semibold tracking-wider transition-colors pb-1 border-b-2 ${
                isLinkActive(l.href)
                  ? "text-black border-black font-extrabold"
                  : "text-muted-foreground hover:text-black border-transparent"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <button className="text-muted-foreground hover:text-black transition-colors">
            <Search className="w-4 h-4" />
          </button>
          <Button size="sm" onClick={() => openQuiz()}>
            Take the Quiz
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container py-4 flex flex-col gap-3 px-6">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.href}
                className={`text-[11px] uppercase font-montserrat font-semibold tracking-wider transition-colors py-2 block w-max ${
                  isLinkActive(l.href)
                    ? "text-black font-extrabold border-b border-black"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Button size="sm" onClick={() => { openQuiz(); setOpen(false); }} className="mt-2">
              Take the Quiz
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NewsNavbar;
