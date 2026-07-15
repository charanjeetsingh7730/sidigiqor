"use client";

import React from "react";
import DivisionsSection from "../../sections/DivisionsSection";

export default function DivisionsPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="border-b border-white/5 pb-6 mb-6">
          <span className="text-xs text-brand-gold font-mono tracking-widest uppercase font-bold">
            Operational Pillars
          </span>
          <h1 className="font-display font-light text-3xl sm:text-5xl text-white uppercase mt-1">
            Business Divisions
          </h1>
        </div>
      </div>
      <DivisionsSection showFullContent={true} />
    </div>
  );
}
