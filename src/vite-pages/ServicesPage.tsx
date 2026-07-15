import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SEO from "../components/SEO";
import CapabilitiesGrid from "../components/CapabilitiesGrid";
import ServiceDetailPage from "../components/ServiceDetailPage";

export default function ServicesPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState<{ name: string; category: string } | null>(null);

  // Read state passed from navigate if a user clicked a service preview
  useEffect(() => {
    if (location.state && (location.state as any).serviceName) {
      setSelectedService({
        name: (location.state as any).serviceName,
        category: (location.state as any).categoryName || ""
      });
    } else {
      setSelectedService(null);
    }
  }, [location.state]);

  const handleConsult = (srvName: string) => {
    navigate("/contact", { state: { initialMessage: `Greetings Sidigiqor Team. We are interested in scheduling a professional gap-assessment briefing for: "${srvName}".\n\nPlease organize a strategy session with Sahil Rana or senior staff.` } });
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://sidigiqor.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://sidigiqor.com/services"
      }
    ]
  };

  if (selectedService) {
    return (
      <>
        <SEO
          title={`${selectedService.name} | Sidigiqor Technologies Capabilities`}
          description={`Enterprise engineering, security hardening, and deployment guidelines for: ${selectedService.name}.`}
          canonicalUrl={`https://sidigiqor.com/services?s=${encodeURIComponent(selectedService.name)}`}
          breadcrumbSchema={breadcrumbSchema}
        />
        <div className="pt-20">
          <ServiceDetailPage
            serviceName={selectedService.name}
            categoryName={selectedService.category}
            onBack={() => {
              setSelectedService(null);
              // Clear location state
              navigate("/services", { replace: true, state: {} });
            }}
            onServiceSelect={(name, category) => setSelectedService({ name, category })}
            onConsult={handleConsult}
          />
        </div>
      </>
    );
  }

  return (
    <>
      <SEO
        title="Technology Services & Capabilities | Sidigiqor Technologies"
        description="Explore our IT consulting services, cybersecurity pen-testing audits, custom software engineering, and edge AI CCTV surveillance frameworks."
        canonicalUrl="https://sidigiqor.com/services"
        breadcrumbSchema={breadcrumbSchema}
      />
      <div className="pt-24 pb-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-10 max-w-2xl mx-auto text-center">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-[1px] w-8 bg-brand-gold"></span>
              <span className="text-xs text-brand-gold font-bold tracking-[0.2em] uppercase">03. Core Portfolio</span>
            </div>
            <h2 className="font-display font-light text-3xl sm:text-4xl text-white tracking-tight uppercase">
              Technology Capabilities
            </h2>
            <p className="mt-2 text-gray-400 text-sm max-w-lg mx-auto font-medium">
              Our multidisciplinary engineering teams design custom software, implement secure networks, and deploy intelligent vision systems.
            </p>
          </div>

          <CapabilitiesGrid
            onServiceClick={(name, category) => setSelectedService({ name, category })}
          />
        </div>
      </div>
    </>
  );
}
