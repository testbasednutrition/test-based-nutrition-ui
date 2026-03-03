import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SpecialistsDirectory from "./pages/SpecialistsDirectory";
import SpecialistProfile from "./pages/SpecialistProfile";
import NotFound from "./pages/NotFound";
import MensHealth from "./pages/treatments/MensHealth";
import WomensHealth from "./pages/treatments/WomensHealth";
import ChildrensHealth from "./pages/treatments/ChildrensHealth";
import SkinHealth from "./pages/treatments/SkinHealth";
import AntiAgeing from "./pages/treatments/AntiAgeing";
import Fertility from "./pages/treatments/Fertility";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/specialists" element={<SpecialistsDirectory />} />
          <Route path="/specialists/:slug" element={<SpecialistProfile />} />
          <Route path="/treatments/mens-health" element={<MensHealth />} />
          <Route path="/treatments/womens-health" element={<WomensHealth />} />
          <Route path="/treatments/childrens-health" element={<ChildrensHealth />} />
          <Route path="/treatments/skin-health" element={<SkinHealth />} />
          <Route path="/treatments/anti-ageing" element={<AntiAgeing />} />
          <Route path="/treatments/fertility" element={<Fertility />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
