"use client";

import React from "react";
import { useRouter } from "next/navigation";
import IndustriesSection from "../../sections/IndustriesSection";

export default function IndustriesPage() {
  const router = useRouter();

  const handlePlanSelected = (industry: string, contextText: string) => {
    router.push(`/contact?message=${encodeURIComponent(`Greetings Sidigiqor Team. We ran the Consulting Adviser tool on the website.\n\n[DRAFTED ADVISER DETAILS]:\n${contextText}\n\nWe would like to request an assessment session to review this roadmap.`)}&industry=${encodeURIComponent(industry)}`);
  };

  return (
    <div className="pt-24 min-h-screen bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="border-b border-white/5 pb-6 mb-6">
          <span className="text-xs text-brand-gold font-mono tracking-widest uppercase font-bold">
            Target Sectors & Simulation
          </span>
          <h1 className="font-display font-light text-3xl sm:text-5xl text-white uppercase mt-1">
            Industries & Client Segments
          </h1>
        </div>
      </div>
      <IndustriesSection
        onPlanSelected={handlePlanSelected}
        showWarRoom={true}
      />
    </div>
  );
}
