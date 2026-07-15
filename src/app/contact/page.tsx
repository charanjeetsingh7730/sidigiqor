"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ContactSection from "../../sections/ContactSection";

function ContactContent() {
  const searchParams = useSearchParams();
  const message = searchParams ? searchParams.get("message") || "" : "";
  const industry = searchParams ? searchParams.get("industry") || "Manufacturing & Industrial" : "Manufacturing & Industrial";
  const advisorContext = message ? { industry, issue: message } : null;

  return (
    <div className="pt-24 min-h-screen bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="border-b border-white/5 pb-6 mb-6">
          <span className="text-xs text-brand-gold font-mono tracking-widest uppercase font-bold">
            Engagement Inbound
          </span>
          <h1 className="font-display font-light text-3xl sm:text-5xl text-white uppercase mt-1">
            Contact Matrix
          </h1>
        </div>
      </div>
      <ContactSection
        initialMessage={message}
        initialIndustry={industry}
        initialContextActive={!!message}
      />
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={
      <div className="pt-32 min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <span className="w-8 h-8 border-2 border-brand-gold border-t-transparent rounded-full animate-spin"></span>
      </div>
    }>
      <ContactContent />
    </Suspense>
  );
}
