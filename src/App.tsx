import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

// Service Pages
import DataAnalytics from "./pages/services/DataAnalytics";
import TrainingSupport from "./pages/services/TrainingSupport";
import DataManagement from "./pages/services/DataManagement";
import ReportingVisualization from "./pages/services/ReportingVisualization";
import DataStrategy from "./pages/services/DataStrategy";

// Industry Pages
import Healthcare from "./pages/industries/Healthcare";
import Finance from "./pages/industries/Finance";
import Retail from "./pages/industries/Retail";
import Manufacturing from "./pages/industries/Manufacturing";
import Technology from "./pages/industries/Technology";
import Agriculture from "./pages/industries/Agriculture";
import OtherIndustries from "./pages/industries/OtherIndustries";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" storageKey="datafronteira-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            
            {/* Service Routes */}
            <Route path="/services/data-analytics" element={<DataAnalytics />} />
            <Route path="/services/training-support" element={<TrainingSupport />} />
            <Route path="/services/data-management" element={<DataManagement />} />
            <Route path="/services/reporting-visualization" element={<ReportingVisualization />} />
            <Route path="/services/data-strategy" element={<DataStrategy />} />
            
            {/* Industry Routes */}
            <Route path="/industries/healthcare" element={<Healthcare />} />
            <Route path="/industries/finance" element={<Finance />} />
            <Route path="/industries/retail" element={<Retail />} />
            <Route path="/industries/manufacturing" element={<Manufacturing />} />
            <Route path="/industries/technology" element={<Technology />} />
            <Route path="/industries/agriculture" element={<Agriculture />} />
            <Route path="/industries/others" element={<OtherIndustries />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
