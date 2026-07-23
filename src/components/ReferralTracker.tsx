import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchSpecialists } from "@/lib/api";

export default function ReferralTracker() {
  const location = useLocation();
  
  // Fetch specialists to validate the referrer code if needed
  const { data: specialists = [] } = useQuery({
    queryKey: ['specialists'],
    queryFn: fetchSpecialists
  });

  useEffect(() => {
    // 1. Intercept URL Query Parameters (e.g. ?ref=bryony-alford)
    const params = new URLSearchParams(location.search);
    const refParam = params.get("ref") || params.get("partner") || params.get("via") || params.get("code");
    
    if (refParam) {
      const cleanParam = refParam.trim().toLowerCase();
      
      // Look for a specialist matching this slug, affiliate_code, or email
      const matchedSpecialist = specialists.find(
        s => s.slug.toLowerCase() === cleanParam || 
             (s.affiliate_code && s.affiliate_code.toLowerCase() === cleanParam) ||
             (s.email_address && s.email_address.toLowerCase() === cleanParam)
      );

      // If we find a match, store their slug as the referrer. 
      // Otherwise, store the raw param so new partners can still track leads.
      const finalReferrerCode = matchedSpecialist ? matchedSpecialist.slug : cleanParam;
      
      localStorage.setItem("tbn_referrer_code", finalReferrerCode);
      sessionStorage.setItem("tbn_referrer_code", finalReferrerCode);
      if (import.meta.env.DEV) {
        console.log(`[ReferralTracker] URL Intercept: Referrer code set to "${finalReferrerCode}"`);
      }
    }

    // 2. Intercept direct specialist profile visits (e.g. /specialists/bryony-alford)
    const specialistsPathPattern = /^\/specialists\/([a-zA-Z0-9_-]+)$/;
    const match = location.pathname.match(specialistsPathPattern);
    
    if (match && match[1]) {
      const specialistSlug = match[1].trim().toLowerCase();
      
      // Verify the specialist exists
      const exists = specialists.some(s => s.slug.toLowerCase() === specialistSlug);
      
      if (exists || specialists.length === 0) {
        localStorage.setItem("tbn_referrer_code", specialistSlug);
        sessionStorage.setItem("tbn_referrer_code", specialistSlug);
        if (import.meta.env.DEV) {
          console.log(`[ReferralTracker] Profile Intercept: Referrer code set to "${specialistSlug}"`);
        }
      }
    }
  }, [location, specialists]);

  return null; // This tracker component does not render any visual UI
}
