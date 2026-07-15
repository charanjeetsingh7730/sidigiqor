import React from "react";
import MethodologySlider from "../components/MethodologySlider";

interface MethodologySectionProps {
  showExploreButton?: boolean;
  onExplore?: () => void;
}

export default function MethodologySection({
  showExploreButton = false,
  onExplore
}: MethodologySectionProps) {
  return (
    <section id="methodology" className="py-12 bg-[#0a0a0a] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-10">
          <div className="lg:col-span-5">
            <span className="text-[10px] font-mono font-bold tracking-widest text-brand-gold uppercase block mb-3">
              04. METHODOLOGY & FRAMEWORK
            </span>
            <h2 className="font-display font-light text-3xl sm:text-4xl text-white tracking-tight leading-tight uppercase">
              Our Consulting Model
            </h2>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed font-medium">
              We believe that successful technology transformations require rigorous structural discovery. We don&apos;t sell isolate software—we formulate business capabilities.
            </p>
            
            {showExploreButton && onExplore && (
              <div className="pt-6">
                <button
                  onClick={onExplore}
                  className="bg-brand-gold hover:bg-brand-gold-dark text-black px-6 py-2.5 rounded-sm text-xs font-bold tracking-widest uppercase inline-flex items-center justify-center transition-all cursor-pointer shadow-md"
                >
                  Explore Consulting
                </button>
              </div>
            )}
          </div>

          <div className="lg:col-span-7">
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-medium">
              Sidigiqor follows an outcome-driven delivery roadmap spanning discover, assess, design, implement, secure, and support. This structured lifecycle minimizes deployment risk, ensures strict compliance, and creates sustainable competitive advantage.
            </p>
          </div>
        </div>

        {/* Methodology Step-by-Step Interactive Slider */}
        <MethodologySlider />
      </div>
    </section>
  );
}
