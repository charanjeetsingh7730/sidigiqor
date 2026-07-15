import React from "react";
import InteractiveAdviser from "../components/InteractiveAdviser";
import WarRoomShowcase from "../components/WarRoomShowcase";

interface IndustriesSectionProps {
  onPlanSelected?: (industry: string, contextText: string) => void;
  showWarRoom?: boolean;
  showExploreButton?: boolean;
  onExplore?: () => void;
}

export default function IndustriesSection({
  onPlanSelected,
  showWarRoom = true,
  showExploreButton = false,
  onExplore
}: IndustriesSectionProps) {
  const dummyOnPlanSelected = (industry: string, contextText: string) => {
    console.log("Selected plan for", industry, ":", contextText);
  };

  return (
    <section id="industries" className="py-12 bg-[#0a0a0a] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-[10px] font-mono font-bold tracking-widest text-brand-gold uppercase block mb-3">
            05. CLIENT SEGMENTS
          </span>
          <h2 className="font-display font-light text-3xl sm:text-4xl text-white tracking-tight uppercase">
            Industries & Client Segments
          </h2>
          <p className="mt-2 text-gray-500 text-sm max-w-lg mx-auto font-medium mb-6">
            Formulating specific architectures for high-governance and industrial enterprises. Run our consulting adviser tool below to test your operational readiness.
          </p>
          
          {showExploreButton && onExplore && (
            <div className="pt-2">
              <button
                onClick={onExplore}
                className="bg-brand-gold hover:bg-brand-gold-dark text-black px-6 py-2.5 rounded-sm text-xs font-bold tracking-widest uppercase inline-flex items-center justify-center transition-all cursor-pointer shadow-md"
              >
                Explore Industries Detail
              </button>
            </div>
          )}
        </div>

        {/* Interactive Adviser Wizard Component */}
        <InteractiveAdviser onPlanSelected={onPlanSelected || dummyOnPlanSelected} />

        {/* Political War Room Live Simulation */}
        {showWarRoom && (
          <div className="mt-12 border-t border-white/5 pt-10">
            <div className="max-w-2xl mx-auto text-center mb-6">
              <span className="text-[10px] font-mono tracking-widest text-brand-gold font-bold uppercase block">
                SPECIAL OPERATIONS SPOTLIGHT
              </span>
              <h3 className="font-display font-light text-2xl text-white tracking-tight mt-1.5 uppercase">
                Indian Political Campaign Management
              </h3>
              <p className="mt-2 text-gray-400 text-xs sm:text-sm font-medium">
                Sidigiqor operates a high-intensity, data-driven political operations division across India, managing campaign CRMs, constituency surveys, and multi-feed command war rooms.
              </p>
            </div>

            {/* War Room Simulator Dashboard */}
            <WarRoomShowcase />
          </div>
        )}
      </div>
    </section>
  );
}
