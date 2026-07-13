import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QuizProvider } from "@/components/QuizContext";
import Quiz from "@/components/Quiz";
import FloatingQuizCTA from "@/components/FloatingQuizCTA";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import SpecialistsDirectory from "./pages/SpecialistsDirectory";
import SpecialistProfile from "./pages/SpecialistProfile";
import AmbassadorProfile from "./pages/AmbassadorProfile";
import ClinicsDirectory from "./pages/ClinicsDirectory";
import ClinicProfile from "./pages/ClinicProfile";
import AreaProfile from "./pages/AreaProfile";
import TestingPage from "./pages/TestingPage";
import TestingPageV2 from "./pages/TestingPageV2";
import NotFound from "./pages/NotFound";
import NewsHub from "./pages/NewsHub";
import NewsArticle from "./pages/NewsArticle";
import MensHealth from "./pages/treatments/MensHealth";
import WomensHealth from "./pages/treatments/WomensHealth";
import ChildrensHealth from "./pages/treatments/ChildrensHealth";
import SkinHealth from "./pages/treatments/SkinHealth";
import AntiAgeing from "./pages/treatments/AntiAgeing";
import Fertility from "./pages/treatments/Fertility";
import Neurodivergence from "./pages/treatments/Neurodivergence";
import SportsPerformance from "./pages/treatments/SportsPerformance";
import PainFatigue from "./pages/treatments/PainFatigue";
import PartnerWithUs from "./pages/PartnerWithUs";
import PartnerWithUs2 from "./pages/PartnerWithUs2";
import PartnerWithUs3 from "./pages/PartnerWithUs3";

import TBNMethod from "./pages/TBNMethod";
import AdminLeads from "./pages/AdminLeads";
import PartnerPortal2 from "./pages/PartnerPortal2";
import CopyProtection from "@/components/CopyProtection";
import ReferralTracker from "@/components/ReferralTracker";
import AdminAffiliates from "./pages/AdminAffiliates";
import TrafficTracker from "@/components/TrafficTracker";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <QuizProvider>
        <Toaster />
        <Sonner />
        <CopyProtection />
        <Quiz />
        <FloatingQuizCTA />
        <BrowserRouter>
          <ScrollToTop />
          <ReferralTracker />
          <TrafficTracker />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/specialists" element={<SpecialistsDirectory />} />
            <Route path="/specialists/:slug" element={<SpecialistProfile />} />
            <Route path="/ambassadors/:slug" element={<AmbassadorProfile />} />
            <Route path="/collectives" element={<ClinicsDirectory />} />
            <Route path="/collectives/:slug" element={<ClinicProfile />} />
            <Route path="/locations/:area" element={<AreaProfile />} />
            <Route path="/treatments/mens-health" element={<MensHealth />} />
            <Route path="/treatments/womens-health" element={<WomensHealth />} />
            <Route path="/treatments/childrens-health" element={<ChildrensHealth />} />
            <Route path="/treatments/skin-health" element={<SkinHealth />} />
            <Route path="/treatments/neurodivergence" element={<Neurodivergence />} />
            <Route path="/treatments/sports-performance" element={<SportsPerformance />} />
            <Route path="/treatments/pain-fatigue" element={<PainFatigue />} />
            <Route path="/treatments/anti-ageing" element={<AntiAgeing />} />
            <Route path="/treatments/fertility" element={<Fertility />} />
            <Route path="/news" element={<NewsHub />} />
            <Route path="/news/:id" element={<NewsArticle />} />
            <Route path="/partner-with-us" element={<PartnerWithUs3 />} />
            <Route path="/partner-with-us-2" element={<PartnerWithUs />} />
            <Route path="/partner-with-us-3" element={<PartnerWithUs3 />} />
            <Route path="/partner-portal-2" element={<PartnerPortal2 />} />
            <Route path="/testing" element={<TestingPageV2 />} />
            <Route path="/testing-v2" element={<TestingPageV2 />} />
            <Route path="/tbn-method" element={<TBNMethod />} />

            <Route path="/admin/leads" element={<AdminLeads />} />
            <Route path="/admin/affiliates" element={<AdminAffiliates />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </QuizProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
