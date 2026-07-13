import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchSpecialists } from "@/lib/api";
import NotFound from "./NotFound";
import { AMBASSADOR_SLUGS } from "@/data/specialists";
import SpecialistProfile from "./SpecialistProfile";

const AmbassadorProfile = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const { data: specialists = [], isLoading } = useQuery({
    queryKey: ['specialists'],
    queryFn: fetchSpecialists
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    if (slug) {
      const spec = specialists.find((s) => s.slug === slug);
      if (spec && !AMBASSADOR_SLUGS.includes(slug) && spec.primary_category !== "TBN Brand Ambassador") {
        navigate(`/specialists/${slug}`, { replace: true });
      }
    }
  }, [slug, specialists, navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-secondary/30 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  const ambassador = specialists.find((s) => s.slug === slug);
  if (!ambassador) return <NotFound />;

  return <SpecialistProfile />;
};

export default AmbassadorProfile;
