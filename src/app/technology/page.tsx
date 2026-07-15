"use client";

import React from "react";
import { Cpu, ShieldCheck, Terminal, Award } from "lucide-react";
import { CORE_PILLARS, INNOVATION_DIMENSIONS } from "../../data";

export default function TechnologyPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#0a0a0a] pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header */}
        <div className="border-b border-white/5 pb-6 mb-12">
          <span className="text-xs text-brand-gold font-mono tracking-widest uppercase font-bold">
            Sidigiqor Systems Architecture
          </span>
          <h1 className="font-display font-light text-3xl sm:text-5xl text-white uppercase mt-1">
            Technology Capabilities
          </h1>
          <p className="mt-2 text-gray-500 text-sm max-w-xl font-medium">
            Meticulously engineered enterprise hardware deployments, custom neural models, and secure software solutions.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {CORE_PILLARS.map((pillar, idx) => (
            <div key={idx} className="bg-[#0f0f0f] border border-white/5 rounded-sm p-6 shadow-xl hover:border-brand-gold/20 transition-all">
              <span className="text-[10px] font-mono text-brand-gold font-bold">CORE AREA // 0{idx + 1}</span>
              <h3 className="font-display font-medium text-lg text-white mt-1 uppercase">
                {pillar}
              </h3>
            </div>
          ))}
        </div>

        {/* Stack details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-display font-light text-2xl sm:text-3xl text-white uppercase">
              Engineering <span className="font-medium italic text-brand-gold">Infrastructure</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              We leverage cloud environments (AWS VPCs, Azure Private Links) and regional bare-metal computing resources. All algorithms, database operations, and user profiles are secured with cryptographic keys, firewall perimeters, and active threat audits.
            </p>
          </div>

          <div className="lg:col-span-7 bg-[#0f0f0f] border border-white/5 rounded-sm p-6 sm:p-8 space-y-6 shadow-xl">
            <h3 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Bespoke System Infrastructure Highlights
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-brand-gold">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-xs font-mono font-bold uppercase">Zero-Trust Perimeter</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Network segmentations, secure edge tunnels, and micro-access verification systems.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-brand-gold">
                  <Cpu className="w-4 h-4" />
                  <span className="text-xs font-mono font-bold uppercase">AI & Edge Analytics</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Bespoke object classifiers, automated ANPR feeds, and NLP chatbot assistance.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-brand-gold">
                  <Terminal className="w-4 h-4" />
                  <span className="text-xs font-mono font-bold uppercase">Full Source Ownership</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Clear repositories, structured documentation, and 100% IP transfer on delivery.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-brand-gold">
                  <Award className="w-4 h-4" />
                  <span className="text-xs font-mono font-bold uppercase">Certified Standards</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Active team registrations align with GDPR, Dun & Bradstreet, MSME, ISO, NESA, and OWASP.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Innovation Evaluation Matrix */}
        <div className="border-t border-white/5 pt-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[10px] font-mono font-bold tracking-widest text-brand-gold uppercase block mb-3">
              INNOVATION WITH PURPOSE
            </span>
            <h3 className="font-display font-light text-2xl text-white tracking-tight uppercase">
              Our Innovation Evaluation Matrix
            </h3>
            <p className="mt-2 text-gray-500 text-xs sm:text-sm max-w-lg mx-auto font-medium">
              We evaluate emerging technologies across four distinct pillars before recommending them.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INNOVATION_DIMENSIONS.map((dim, idx) => (
              <div
                key={idx}
                className="bg-[#0f0f0f] rounded-sm border border-white/5 p-5 flex flex-col justify-between hover:bg-white/[0.01] transition-colors shadow-xl"
              >
                <div className="space-y-3">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-sm bg-brand-gold/10 border border-brand-gold/20 text-[10px] font-mono font-bold text-brand-gold uppercase">
                    Pillar 0{idx + 1}
                  </span>
                  <h4 className="font-display font-bold text-base text-white uppercase">
                    {dim.label}
                  </h4>
                  <p className="text-xs text-gray-500 font-mono italic">
                    &ldquo;{dim.question}&rdquo;
                  </p>
                  <p className="text-xs text-gray-400 leading-relaxed font-sans font-medium">
                    {dim.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
