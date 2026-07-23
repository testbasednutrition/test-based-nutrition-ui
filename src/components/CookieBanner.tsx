import React, { useState, useEffect } from "react";
import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("tbn_cookies_accepted");
    if (!accepted) {
      // Delay entrance slightly for a premium feel
      const timer = setTimeout(() => {
        setVisible(true);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("tbn_cookies_accepted", "true");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("tbn_cookies_accepted", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 animate-in slide-in-from-bottom duration-500 ease-out pointer-events-none">
      <div className="max-w-6xl mx-auto bg-stone-50/95 backdrop-blur-md border border-stone-200/80 rounded-2xl shadow-xl p-4 md:py-3 md:px-5 flex flex-col md:flex-row md:items-center justify-between gap-4 pointer-events-auto">
        
        {/* Info Text */}
        <div className="flex items-center gap-3 flex-1">
          <div className="p-1.5 rounded-lg bg-[#9f1e13]/10 text-[#9f1e13] shrink-0 hidden sm:block">
            <Shield className="w-4 h-4" />
          </div>
          <div className="flex-1">
            <p className="text-[11px] text-stone-700 leading-relaxed font-sans font-medium">
              We use cookies to analyze site traffic, optimize performance, and support clinical features. By accepting, you agree to our{" "}
              <Link to="/privacy-policy" className="underline font-semibold hover:text-[#9f1e13] transition-colors">
                GDPR-compliant privacy & cookie policy
              </Link>.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 shrink-0 self-end md:self-auto">
          <button
            onClick={handleDecline}
            className="text-[11px] font-bold text-stone-500 hover:text-stone-850 px-3 py-1.5 transition-colors cursor-pointer border-none bg-transparent"
          >
            Essential Only
          </button>
          <button
            onClick={handleAccept}
            className="bg-[#9f1e13] hover:bg-[#861910] text-white text-[11px] font-bold px-4 py-2 rounded-xl transition-all cursor-pointer shadow-xs border-none"
          >
            Accept All
          </button>
        </div>

      </div>
    </div>
  );
}
