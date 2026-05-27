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
import ClinicsDirectory from "./pages/ClinicsDirectory";
import ClinicProfile from "./pages/ClinicProfile";
import AreaProfile from "./pages/AreaProfile";
import TestingPage from "./pages/TestingPage";
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
import StMichaels from "./pages/StMichaels";
import TBNMethod from "./pages/TBNMethod";
import AdminLeads from "./pages/AdminLeads";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <QuizProvider>
        <Toaster />
        <Sonner />
        <Quiz />
        <FloatingQuizCTA />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/specialists" element={<SpecialistsDirectory />} />
            <Route path="/specialists/:slug" element={<SpecialistProfile />} />
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
            <Route path="/partner-with-us" element={<PartnerWithUs />} />
            <Route path="/partner-with-us-2" element={<PartnerWithUs2 />} />
            <Route path="/testing" element={<TestingPage />} />
            <Route path="/tbn-method" element={<TBNMethod />} />
            <Route path="/retreats/st-michaels" element={<StMichaels />} />
            <Route path="/admin/leads" element={<AdminLeads />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </QuizProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
