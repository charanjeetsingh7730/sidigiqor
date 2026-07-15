import React from "react";
import CapabilitiesGrid from "../components/CapabilitiesGrid";
import { INNOVATION_DIMENSIONS } from "../data";

interface TechnologySectionProps {
  onServiceClick?: (name: string, category: string) => void;
  showPreviewOnly?: boolean;
  onViewDetails?: () => void;
}

export default function TechnologySection({
  onServiceClick,
  showPreviewOnly = false,
  onViewDetails
}: TechnologySectionProps) {
  return (
    <section id="services" className="py-12 bg-[#0a0a0a] border-b border-white/5">
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
          
          {showPreviewOnly && onViewDetails && (
            <div className="pt-6">
              <button
                onClick={onViewDetails}
                className="bg-brand-gold hover:bg-brand-gold-dark text-black px-6 py-2.5 rounded-sm text-xs font-bold tracking-widest uppercase inline-flex items-center justify-center transition-all cursor-pointer shadow-md"
              >
                View Details
              </button>
            </div>
          )}
        </div>

        {/* Capabilities Grid */}
        <CapabilitiesGrid
          onServiceClick={onServiceClick || (() => {})}
        />

        {/* Innovation Matrix (Only display when NOT in preview mode, or on full page view) */}
        {!showPreviewOnly && (
          <div className="mt-20 border-t border-white/5 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-[10px] font-mono font-bold tracking-widest text-brand-gold uppercase block mb-3">
                INNOVATION WITH PURPOSE
              </span>
              <h3 className="font-display font-light text-2xl text-white tracking-tight uppercase">
                Our Innovation Evaluation Matrix
              </h3>
              <p className="mt-2 text-gray-500 text-xs sm:text-sm max-w-lg mx-auto font-medium">
                Emerging tools (AI, ML, IoT, Blockchain) are evaluated through four specific pillars before we suggest them in our design blueprints.
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
                    <p className="text-[11px] sm:text-xs text-gray-400 leading-relaxed font-sans font-medium">
                      {dim.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
