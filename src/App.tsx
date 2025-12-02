
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceMining from "./pages/ServiceMining";
import ServiceExpertise from "./pages/ServiceExpertise";
import ServiceSurvey from "./pages/ServiceSurvey";
import ServiceSupport from "./pages/ServiceSupport";
import Certificates from "./pages/Certificates";
import News from "./pages/News";
import Vacancies from "./pages/Vacancies";
import ObjectsMap from "./pages/ObjectsMap";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/mining" element={<ServiceMining />} />
          <Route path="/services/expertise" element={<ServiceExpertise />} />
          <Route path="/services/survey" element={<ServiceSurvey />} />
          <Route path="/services/support" element={<ServiceSupport />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/news" element={<News />} />
          <Route path="/vacancies" element={<Vacancies />} />
          <Route path="/objects-map" element={<ObjectsMap />} />
          <Route path="/contacts" element={<Contacts />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;