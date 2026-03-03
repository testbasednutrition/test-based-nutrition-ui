import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuiz } from "@/components/QuizContext";
import { Link } from "react-router-dom";

const links = [
  { label: "Home", href: "/" },
  { label: "Specialists", href: "/specialists" },
];

const NewsNavbar = () => {
  const [open, setOpen] = useState(false);
  const { openQuiz } = useQuiz();

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-14 md:h-16 px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full border-2 border-foreground relative">
            <div className="absolute bottom-0.5 right-0.5 w-1.5 h-1.5 rounded-full bg-primary" />
          </div>
          <div className="leading-tight">
            <span className="font-semibold text-sm">News Hub</span>
            <span className="block text-[9px] tracking-[0.2em] text-muted-foreground uppercase">
              Health & Science
            </span>
          </div>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <button className="text-muted-foreground hover:text-foreground transition-colors">
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
                className="text-sm font-medium text-muted-foreground hover:text-foreground py-2"
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
