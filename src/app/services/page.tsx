"use client";

import React, { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import CapabilitiesGrid from "../../components/CapabilitiesGrid";
import ServiceDetailPage from "../../components/ServiceDetailPage";

function ServicesContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const serviceName = searchParams?.get("service");
  const categoryName = searchParams?.get("category");

  const handleServiceSelect = (name: string, category: string) => {
    router.push(`/services?service=${encodeURIComponent(name)}&category=${encodeURIComponent(category)}`);
  };

  const handleBack = () => {
    router.push("/services");
  };

  const handleConsult = (srvName: string) => {
    router.push(`/contact?message=${encodeURIComponent(`Greetings Sidigiqor Team. We are interested in scheduling a professional gap-assessment briefing for: "${srvName}".`)}`);
  };

  if (serviceName && categoryName) {
    return (
      <ServiceDetailPage
        serviceName={serviceName}
        categoryName={categoryName}
        onBack={handleBack}
        onServiceSelect={handleServiceSelect}
        onConsult={handleConsult}
      />
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-[#0a0a0a] pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="border-b border-white/5 pb-6 mb-12">
          <span className="text-xs text-brand-gold font-mono tracking-widest uppercase font-bold">
            Capabilities
          </span>
          <h1 className="font-display font-light text-3xl sm:text-5xl text-white uppercase mt-1">
            Technology Capabilities
          </h1>
          <p className="mt-2 text-gray-400 text-sm max-w-xl font-medium">
            Explore our end-to-end cyber defense blueprints, physical infrastructure operations, AI analytics, and custom software systems.
          </p>
        </div>

        <CapabilitiesGrid onServiceClick={handleServiceSelect} />
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <Suspense fallback={
      <div className="pt-32 min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <span className="w-8 h-8 border-2 border-brand-gold border-t-transparent rounded-full animate-spin"></span>
      </div>
    }>
      <ServicesContent />
    </Suspense>
  );
}
