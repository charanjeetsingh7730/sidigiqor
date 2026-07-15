import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

// Import Pages (from vite-pages)
import HomePage from "./vite-pages/HomePage";
import AboutPage from "./vite-pages/AboutPage";
import LeadershipPage from "./vite-pages/LeadershipPage";
import ExpertsPage from "./vite-pages/ExpertsPage";
import DivisionsPage from "./vite-pages/DivisionsPage";
import ServicesPage from "./vite-pages/ServicesPage";
import TechnologyPage from "./vite-pages/TechnologyPage";
import IndustriesPage from "./vite-pages/IndustriesPage";
import ConsultingPage from "./vite-pages/ConsultingPage";
import PartnersPage from "./vite-pages/PartnersPage";
import CaseStudiesPage from "./vite-pages/CaseStudiesPage";
import InsightsPage from "./vite-pages/InsightsPage";
import CareersPage from "./vite-pages/CareersPage";
import GlobalOfficesPage from "./vite-pages/GlobalOfficesPage";
import ContactPage from "./vite-pages/ContactPage";
import PrivacyPolicyPage from "./vite-pages/PrivacyPolicyPage";
import TermsPage from "./vite-pages/TermsPage";
import RefundPolicyPage from "./vite-pages/RefundPolicyPage";
import ShippingPolicyPage from "./vite-pages/ShippingPolicyPage";
import NotFoundPage from "./vite-pages/NotFoundPage";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/leadership" element={<LeadershipPage />} />
          <Route path="/experts" element={<ExpertsPage />} />
          <Route path="/divisions" element={<DivisionsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/technology" element={<TechnologyPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/consulting" element={<ConsultingPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/global-offices" element={<GlobalOfficesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/refund-policy" element={<RefundPolicyPage />} />
          <Route path="/shipping-policy" element={<ShippingPolicyPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
