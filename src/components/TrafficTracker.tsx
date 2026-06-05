import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { supabase } from "@/lib/supabase";

export default function TrafficTracker() {
  const location = useLocation();
  const lastLoggedPath = useRef<string | null>(null);

  useEffect(() => {
    const currentPath = location.pathname;
    
    // Prevent logging exact duplicate paths on quick consecutive renders
    if (lastLoggedPath.current === currentPath) return;
    lastLoggedPath.current = currentPath;

    // Track page view in the database
    const trackPageView = async () => {
      try {
        // 1. Resolve Device Type
        const ua = navigator.userAgent.toLowerCase();
        let device = "desktop";
        if (/tablet|ipad|playbook|silk/i.test(ua)) {
          device = "tablet";
        } else if (/mobile|iphone|ipod|android|blackberry|iemobile|opera mini/i.test(ua)) {
          device = "mobile";
        }

        // 2. Resolve Referrer
        // Check if there's a stored affiliate/referral code first
        let referrer = localStorage.getItem("tbn_referrer_code") || sessionStorage.getItem("tbn_referrer_code") || "";
        
        if (!referrer) {
          // Fall back to HTTP referrer header, cleaning up subpages
          const rawReferrer = document.referrer;
          if (rawReferrer) {
            try {
              const url = new URL(rawReferrer);
              // If it came from our own site, mark it as Direct to avoid internal noise
              if (url.hostname === window.location.hostname) {
                referrer = "Direct";
              } else {
                referrer = url.hostname;
              }
            } catch (e) {
              referrer = rawReferrer.substring(0, 100);
            }
          } else {
            referrer = "Direct";
          }
        }

        // 3. Resolve Approx Location via IP Geolocation API
        let locationStr = "Unknown Location";
        try {
          const res = await fetch("https://ipapi.co/json/", { signal: AbortSignal.timeout(2000) });
          if (res.ok) {
            const geo = await res.json();
            if (geo.city && geo.country_name) {
              locationStr = `${geo.city}, ${geo.country_name}`;
            } else if (geo.country_name) {
              locationStr = geo.country_name;
            }
          }
        } catch (geoError) {
          // Fallback silently if geolocation is blocked or fails
          console.warn("[TrafficTracker] Geolocation resolution failed, using fallback:", geoError);
        }

        // 4. Resolve Visitor ID
        let visitorId = localStorage.getItem("tbn_visitor_id");
        if (!visitorId) {
          visitorId = crypto.randomUUID ? crypto.randomUUID() : (Math.random().toString(36).substring(2) + Date.now().toString(36));
          localStorage.setItem("tbn_visitor_id", visitorId);
        }

        // 5. Save Pageview to Supabase
        const { error } = await supabase
          .from("page_views")
          .insert({
            page_path: currentPath,
            referrer: referrer,
            device: device,
            location: locationStr,
            visitor_id: visitorId
          });

        if (error) {
          console.error("[TrafficTracker] Error inserting pageview:", error.message);
        } else {
          console.log(`[TrafficTracker] Logged pageview: ${currentPath} | Ref: ${referrer} | Geo: ${locationStr} | Vis: ${visitorId.substring(0, 8)}`);
        }
      } catch (err) {
        console.error("[TrafficTracker] Unexpected tracking error:", err);
      }
    };

    // Run trackPageView asynchronously after render cycle
    const timer = setTimeout(trackPageView, 1500);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return null; // Silent component, no rendering
}
