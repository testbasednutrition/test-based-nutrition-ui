import React, { useState, useEffect } from "react";
import { Lock, ShieldAlert, ArrowLeft, Key } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/lib/supabase";

interface ProtectedRouteProps {
  children: React.ReactNode;
  title?: string;
}

export default function ProtectedRoute({ children, title = "Admin & Partner Access" }: ProtectedRouteProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // Check if session token exists or if Supabase session is active
    const sessionAuth = sessionStorage.getItem("tbn_admin_auth");
    if (sessionAuth === "true") {
      setIsAuthenticated(true);
      return;
    }

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        sessionStorage.setItem("tbn_admin_auth", "true");
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });
  }, []);

  const handleAuthenticate = (e: React.FormEvent) => {
    e.preventDefault();
    // Default admin access key (case-insensitive)
    const validKeys = ["tbn2026", "tbn-admin", "admin2026"];
    if (validKeys.includes(passcode.trim().toLowerCase())) {
      sessionStorage.setItem("tbn_admin_auth", "true");
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Invalid passcode. Please enter a valid administrator or partner key.");
    }
  };

  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="animate-pulse text-xs text-muted-foreground font-bold">Verifying authorization...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-4 md:p-6">
        <div className="max-w-md w-full bg-card border border-border/80 rounded-2xl shadow-xl p-6 md:p-8 space-y-6">
          
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-[#9f1e13]/10 text-[#9f1e13] flex items-center justify-center mx-auto mb-3">
              <Lock className="w-6 h-6" />
            </div>
            <h1 className="text-xl font-serif font-bold text-foreground" style={{ fontFamily: "Georgia, serif" }}>
              {title}
            </h1>
            <p className="text-xs text-muted-foreground">
              This route is restricted to authorized Test-Based Nutrition staff and clinic partners.
            </p>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-700 text-xs font-semibold rounded-xl p-3 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleAuthenticate} className="space-y-4">
            <div>
              <label className="text-xs font-bold text-foreground block mb-1.5 flex items-center gap-1.5">
                <Key className="w-3.5 h-3.5 text-[#9f1e13]" /> Admin / Partner Passcode
              </label>
              <input
                type="password"
                placeholder="Enter access code..."
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="w-full px-3 py-2.5 border border-input rounded-xl text-xs bg-background focus:outline-none focus:ring-1 focus:ring-[#9f1e13]"
                autoFocus
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#9f1e13] hover:bg-[#861910] text-white text-xs font-bold py-2.5 rounded-xl transition-all cursor-pointer shadow-xs border-none"
            >
              Unlock Access
            </button>
          </form>

          <div className="pt-4 border-t border-border/60 text-center">
            <Link to="/" className="inline-flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" /> Return to Public Website
            </Link>
          </div>

        </div>
      </div>
    );
  }

  return <>{children}</>;
}
