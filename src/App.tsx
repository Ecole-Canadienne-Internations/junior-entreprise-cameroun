import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import CreerUneJE from "./pages/CreerUneJE.tsx";
import Universite from "./pages/creer-une-je/Universite.tsx";
import Etudiant from "./pages/creer-une-je/Etudiant.tsx";
import Startup from "./pages/creer-une-je/Startup.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/creer-une-je" element={<CreerUneJE />} />
          <Route path="/creer-une-je/universite" element={<Universite />} />
          <Route path="/creer-une-je/etudiant" element={<Etudiant />} />
          <Route path="/creer-une-je/startup" element={<Startup />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
