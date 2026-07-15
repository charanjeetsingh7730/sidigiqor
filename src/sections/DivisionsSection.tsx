import React from "react";
import { Shield, Award, Cpu, CheckCircle2 } from "lucide-react";
import { DIVISIONS } from "../data";

interface DivisionsSectionProps {
  showFullContent?: boolean;
  onBrowseScope?: (id: string) => void;
}

export default function DivisionsSection({
  showFullContent = false,
  onBrowseScope
}: DivisionsSectionProps) {
  return (
    <section id="divisions" className="py-12 bg-[#0a0a0a] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-10 max-w-2xl mx-auto text-center">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-[1px] w-8 bg-brand-gold"></span>
            <span className="text-xs text-brand-gold font-bold tracking-[0.2em] uppercase">02. Strategic Deployments</span>
          </div>
          <h2 className="font-display font-light text-3xl sm:text-4xl text-white tracking-tight uppercase">
            Three Core Business Divisions
          </h2>
          <p className="mt-2 text-gray-500 text-sm max-w-lg mx-auto font-medium">
            Our service portfolio is organized into three distinct operational pillars designed around specific local and global markets.
          </p>
        </div>

        {/* Division Card Bento Block Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {DIVISIONS.map((div, idx) => {
            return (
              <div
                key={div.id}
                className="bg-[#0f0f0f] border border-white/5 rounded-sm p-6 flex flex-col justify-between hover:bg-white/[0.01] hover:border-brand-gold/20 transition-all duration-300 relative overflow-hidden group shadow-xl"
              >
                <div className="space-y-5">
                  {/* Header info */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-brand-gold/10 border border-brand-gold/20 text-brand-gold rounded-sm">
                      {div.iconName === "Shield" && <Shield className="w-5 h-5" />}
                      {div.iconName === "Vote" && <Award className="w-5 h-5" />}
                      {div.iconName === "Cpu" && <Cpu className="w-5 h-5" />}
                    </div>
                    <span className="text-[10px] font-mono text-gray-500 font-bold uppercase">
                      Division 0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-brand-gold font-bold uppercase tracking-widest block">
                      {div.tagline}
                    </span>
                    <h3 className="font-display font-light text-xl text-white mt-1 leading-snug uppercase">
                      {div.title}
                    </h3>
                    <span className="text-xs font-sans text-gray-400 font-medium block mt-0.5">
                      {div.subtitle}
                    </span>
                  </div>

                  <p className="text-gray-400 text-xs leading-relaxed font-sans font-medium">
                    {div.description}
                  </p>

                  {/* Division core bullets */}
                  <div className="border-t border-white/5 pt-4">
                    <span className="text-[9px] font-mono text-gray-500 uppercase font-bold block mb-2.5">
                      Core Service Scope:
                    </span>
                    <ul className="space-y-2">
                      {(showFullContent ? div.points : div.points.slice(0, 4)).map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start text-xs font-sans text-gray-400 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mr-2.5 mt-0.5" />
                          <span className="leading-normal font-medium">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer details: serving markets */}
                <div className="mt-8 pt-4 border-t border-white/5 space-y-2.5">
                  <div>
                    <span className="text-[8px] font-mono text-gray-500 uppercase font-bold block">
                      Key Markets Served:
                    </span>
                    <div className="flex flex-wrap gap-1 mt-1.5">
                      {(showFullContent ? div.markets : div.markets.slice(0, 4)).map((m, mIdx) => (
                        <span
                          key={mIdx}
                          className="inline-block px-2 py-0.5 rounded-sm bg-[#0a0a0a] border border-white/5 text-[9px] text-gray-400 font-mono"
                        >
                          {m}
                        </span>
                      ))}
                      {!showFullContent && div.markets.length > 4 && (
                        <span className="inline-block px-2 py-0.5 rounded-sm bg-black text-[9px] text-gray-500 font-mono">
                          +{div.markets.length - 4} More
                        </span>
                      )}
                    </div>
                  </div>

                  {onBrowseScope && (
                    <button
                      onClick={() => onBrowseScope(div.id)}
                      className="w-full bg-brand-gold hover:bg-brand-gold-dark text-black rounded-sm text-center py-2 text-xs font-bold tracking-widest uppercase transition-all shadow-xl cursor-pointer"
                    >
                      Browse Scope
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
