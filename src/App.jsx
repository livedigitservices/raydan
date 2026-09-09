import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout & Global Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CustomCursor from './components/common/CustomCursor';
import LoadingScreen from './components/common/LoadingScreen';
import ScrollToTop from './components/common/ScrollToTop';
import CostEstimatorModal from './components/common/CostEstimatorModal';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Process from './pages/Process';
import WhyRaydan from './pages/WhyRaydan';
import Contact from './pages/Contact';

export default function App() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      {/* Scroll Reset on route transition */}
      <ScrollToTop />

      {/* Desktop Magnetic Custom Cursor */}
      <CustomCursor />

      {/* Fast, Elegant Initial Brand Loader */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      <div className="min-h-screen flex flex-col bg-white text-[#242424] relative selection:bg-[#ED1C24] selection:text-white">
        {/* Sticky Adaptive Navbar */}
        <Navbar onOpenConsultation={() => setConsultationOpen(true)} />

        {/* Dynamic Route Pages */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home onOpenConsultation={() => setConsultationOpen(true)} />} />
            <Route path="/about" element={<About onOpenConsultation={() => setConsultationOpen(true)} />} />
            <Route path="/services" element={<Services onOpenConsultation={() => setConsultationOpen(true)} />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetails onOpenConsultation={() => setConsultationOpen(true)} />} />
            <Route path="/process" element={<Process onOpenConsultation={() => setConsultationOpen(true)} />} />
            <Route path="/why-raydan" element={<WhyRaydan onOpenConsultation={() => setConsultationOpen(true)} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home onOpenConsultation={() => setConsultationOpen(true)} />} />
          </Routes>
        </div>

        {/* Global Architectural Footer */}
        <Footer onOpenConsultation={() => setConsultationOpen(true)} />

        {/* Interactive Consultation & Cost Estimator Wizard Modal */}
        <CostEstimatorModal
          isOpen={consultationOpen}
          onClose={() => setConsultationOpen(false)}
        />
      </div>
    </Router>
  );
}
