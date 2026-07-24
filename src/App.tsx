import React, { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QuizProvider } from "@/components/QuizContext";
import Quiz from "@/components/Quiz";
import BookingModal from "@/components/BookingModal";
import FloatingQuizCTA from "@/components/FloatingQuizCTA";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import CopyProtection from "@/components/CopyProtection";
import ReferralTracker from "@/components/ReferralTracker";
import TrafficTracker from "@/components/TrafficTracker";
import CookieBanner from "@/components/CookieBanner";
import ProtectedRoute from "@/components/ProtectedRoute";
import ErrorBoundary from "@/components/ErrorBoundary";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

// Lazy-loaded pages for optimal bundle splitting
const SpecialistsDirectory = lazy(() => import("./pages/SpecialistsDirectory"));
const SpecialistProfile = lazy(() => import("./pages/SpecialistProfile"));
const AmbassadorProfile = lazy(() => import("./pages/AmbassadorProfile"));
const ClinicsDirectory = lazy(() => import("./pages/ClinicsDirectory"));
const ClinicProfile = lazy(() => import("./pages/ClinicProfile"));
const AreaProfile = lazy(() => import("./pages/AreaProfile"));
const TestingPageV2 = lazy(() => import("./pages/TestingPageV2"));
const NotFound = lazy(() => import("./pages/NotFound"));
const NewsHub = lazy(() => import("./pages/NewsHub"));
const NewsArticle = lazy(() => import("./pages/NewsArticle"));
const MensHealth = lazy(() => import("./pages/treatments/MensHealth"));
const WomensHealth = lazy(() => import("./pages/treatments/WomensHealth"));
const ChildrensHealth = lazy(() => import("./pages/treatments/ChildrensHealth"));
const SkinHealth = lazy(() => import("./pages/treatments/SkinHealth"));
const AntiAgeing = lazy(() => import("./pages/treatments/AntiAgeing"));
const Fertility = lazy(() => import("./pages/treatments/Fertility"));
const Neurodivergence = lazy(() => import("./pages/treatments/Neurodivergence"));
const SportsPerformance = lazy(() => import("./pages/treatments/SportsPerformance"));
const PainFatigue = lazy(() => import("./pages/treatments/PainFatigue"));
const PartnerWithUs = lazy(() => import("./pages/PartnerWithUs"));
const PartnerWithUs3 = lazy(() => import("./pages/PartnerWithUs3"));
const TBNMethod = lazy(() => import("./pages/TBNMethod"));
const AdminLeads = lazy(() => import("./pages/AdminLeads"));
const AdminAffiliates = lazy(() => import("./pages/AdminAffiliates"));
const PartnerOnboarding = lazy(() => import("./pages/PartnerOnboarding"));
const SupportPage = lazy(() => import("./pages/Support"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));

const PageLoader = () => (
  <div className="min-h-screen bg-background flex items-center justify-center p-4">
    <div className="flex flex-col items-center gap-3">
      <div className="w-8 h-8 border-2 border-[#9f1e13]/20 border-t-[#9f1e13] rounded-full animate-spin"></div>
      <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Loading...</span>
    </div>
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <QuizProvider>
        <BrowserRouter>
          <Toaster />
          <Sonner />
          <CopyProtection />
          <Quiz />
          <BookingModal />
          <CookieBanner />
          <ScrollToTop />
          <FloatingQuizCTA />
          <ReferralTracker />
          <TrafficTracker />
          <ErrorBoundary>
            <Suspense fallback={<PageLoader />}>
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
                <Route path="/testing" element={<TestingPageV2 />} />
                <Route path="/testing-v2" element={<TestingPageV2 />} />
                <Route path="/tbn-method" element={<TBNMethod />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/support" element={<SupportPage />} />

                {/* Protected Admin & Internal Partner Routes */}
                <Route path="/admin" element={<ProtectedRoute title="Admin Leads Dashboard"><AdminLeads /></ProtectedRoute>} />
                <Route path="/admin/leads" element={<ProtectedRoute title="Admin Leads Dashboard"><AdminLeads /></ProtectedRoute>} />
                <Route path="/admin/affiliates" element={<ProtectedRoute title="Admin Affiliates Portal"><AdminAffiliates /></ProtectedRoute>} />
                <Route path="/onboarding" element={<ProtectedRoute title="Partner Onboarding Portal"><PartnerOnboarding /></ProtectedRoute>} />

                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </BrowserRouter>
      </QuizProvider>
    </TooltipProvider>
    <Analytics />
    <SpeedInsights />
  </QueryClientProvider>
);

export default App;
