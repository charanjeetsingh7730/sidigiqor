import React, { useState } from "react";
import { 
  Quote, 
  CheckCircle, 
  Shield, 
  Cpu, 
  Layers, 
  Users, 
  TrendingUp, 
  Activity, 
  MapPin, 
  ArrowRight,
  ExternalLink,
  ChevronDown,
  Building,
  Check,
  Star
} from "lucide-react";
import { CLIENT_TESTIMONIALS } from "../data";
import { ClientTestimonial } from "../types";

export default function TestimonialsShowcase() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <section id="testimonials" className="py-12 bg-[#0a0a0a] border-b border-white/5 relative overflow-hidden">
      {/* Decorative background grid and ambient lighting */}
      <div className="absolute top-0 right-0 w-1/3 h-[500px] opacity-10 pointer-events-none">
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-gold/30 via-transparent to-transparent"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-1/4 h-[400px] opacity-5 pointer-events-none">
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="h-[1px] w-8 bg-brand-gold"></span>
            <span className="text-xs text-brand-gold font-bold tracking-[0.2em] uppercase font-mono">06. SUCCESS & TRUST</span>
            <span className="h-[1px] w-8 bg-brand-gold"></span>
          </div>
          <h2 className="font-display font-light text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Enterprise <span className="font-medium italic text-brand-gold">Success</span> Blueprints
          </h2>
          <p className="mt-4 text-gray-400 text-sm max-w-xl mx-auto font-medium">
            Verifiable corporate success metrics, operational outcomes, and custom engineering case studies delivered by Sidigiqor Technologies globally.
          </p>
        </div>

        {/* Dynamic Corporate Trust Signals / Quantitative Counter Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 border-t border-b border-white/5 py-8 bg-[#0d0d0d]/40 rounded-sm">
          <div className="text-center space-y-1">
            <div className="text-2xl sm:text-3xl font-mono font-bold text-white tracking-tight">
              99.98%
            </div>
            <div className="text-[10px] sm:text-xs text-gray-500 font-mono tracking-wider uppercase font-bold">
              AMC Uptime Maintained
            </div>
          </div>
          <div className="text-center space-y-1 border-l border-white/5">
            <div className="text-2xl sm:text-3xl font-mono font-bold text-brand-gold tracking-tight">
              Zero
            </div>
            <div className="text-[10px] sm:text-xs text-gray-500 font-mono tracking-wider uppercase font-bold">
              Security Breaches Post-VAPT
            </div>
          </div>
          <div className="text-center space-y-1 border-l border-white/5">
            <div className="text-2xl sm:text-3xl font-mono font-bold text-white tracking-tight">
              50M+
            </div>
            <div className="text-[10px] sm:text-xs text-gray-500 font-mono tracking-wider uppercase font-bold">
              AI Vision Frames Logged
            </div>
          </div>
          <div className="text-center space-y-1 border-l border-white/5">
            <div className="text-2xl sm:text-3xl font-mono font-bold text-brand-gold tracking-tight">
              4.5M+
            </div>
            <div className="text-[10px] sm:text-xs text-gray-500 font-mono tracking-wider uppercase font-bold">
              Voter Profiles Synced
            </div>
          </div>
        </div>

        {/* Testimonials Masonry Column Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 [column-fill:balance]">
          {CLIENT_TESTIMONIALS.map((t, idx) => {
            const id = t.clientName;
            const isHovered = hoveredId === id;
            const isExpanded = expandedId === id;

            return (
              <div
                key={idx}
                id={`testimonial-${idx}`}
                className="break-inside-avoid bg-[#0f0f0f] border border-white/5 rounded-sm p-6 hover:border-brand-gold/25 hover:bg-white/[0.01] transition-all duration-300 relative group flex flex-col justify-between"
                onMouseEnter={() => setHoveredId(id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Visual Accent */}
                <div className={`absolute top-0 left-0 w-full h-[2px] bg-brand-gold transform origin-left transition-transform duration-300 ${isHovered ? "scale-x-100" : "scale-x-0"}`} />

                {/* Header Information */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-brand-gold font-bold uppercase tracking-wider block">
                        {t.industry}
                      </span>
                      <h4 className="font-display font-bold text-base text-white mt-1 group-hover:text-brand-gold-light transition-colors">
                        {t.company || "Enterprise Partner"}
                      </h4>
                    </div>
                    
                    {/* Star Rating & Quote Decor */}
                    <div className="flex flex-col items-end gap-1.5 shrink-0">
                      <div className="flex text-brand-gold">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-brand-gold" />
                        ))}
                      </div>
                      <Quote className="w-5 h-5 text-white/5 group-hover:text-brand-gold/10 transition-colors" />
                    </div>
                  </div>

                  {/* Quantitative High-Density Metric Badge */}
                  <div className="bg-black/40 p-3 rounded-sm border border-white/5 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-gray-400 font-semibold">Outcome Achieved</span>
                    <span className="text-xs font-mono font-bold text-brand-gold ml-2 shrink-0">{t.resultMetric}</span>
                  </div>

                  {/* Client Quote */}
                  <p className="text-gray-300 text-xs leading-relaxed font-sans font-medium italic pt-1 relative z-10">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  {/* Client Author Profile */}
                  <div className="flex items-center space-x-3 pt-3 border-t border-white/5">
                    <div className="w-8 h-8 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold font-mono text-xs font-bold shrink-0">
                      {t.clientName.replace("Er. ", "").replace("Dr. ", "").split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <strong className="text-white text-xs block font-display leading-tight">{t.clientName}</strong>
                      <span className="text-[10px] text-gray-500 block leading-normal">{t.clientRole || "Executive Lead"}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1.5 text-[9px] font-mono text-gray-500">
                    <MapPin className="w-3 h-3 text-brand-gold shrink-0" />
                    <span>{t.location || "Global Operations"}</span>
                  </div>
                </div>

                {/* Hover-to-expand details / Click-to-toggle Technical Blueprint */}
                <div className="mt-5 pt-4 border-t border-white/5">
                  <button
                    onClick={() => toggleExpand(id)}
                    className="w-full inline-flex items-center justify-between text-[10px] font-mono font-bold text-gray-400 hover:text-brand-gold transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-brand-gold" />
                      {isExpanded ? "HIDE TECHNICAL DEPLOYMENT" : "EXPAND TECHNICAL BLUEPRINT"}
                    </span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? "rotate-180 text-brand-gold" : ""}`} />
                  </button>

                  {/* Expandable Technical Content */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isExpanded ? "max-h-[400px] opacity-100 mt-4" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="space-y-3 bg-black/40 p-4 border border-white/5 rounded-sm text-left">
                      <div>
                        <strong className="text-white text-[9px] font-mono tracking-wider block uppercase mb-1">
                          Project Summary & Objective:
                        </strong>
                        <p className="text-[10px] text-gray-400 font-sans leading-relaxed">
                          {t.projectSummary}
                        </p>
                      </div>

                      {t.technicalChallenge && (
                        <div className="border-t border-white/5 pt-2">
                          <strong className="text-white text-[9px] font-mono tracking-wider block uppercase mb-1">
                            The Challenge:
                          </strong>
                          <p className="text-[10px] text-gray-400 font-sans leading-relaxed">
                            {t.technicalChallenge}
                          </p>
                        </div>
                      )}

                      {t.technicalSolution && (
                        <div className="border-t border-white/5 pt-2">
                          <strong className="text-white text-[9px] font-mono tracking-wider block uppercase mb-1">
                            The Sidigiqor Solution:
                          </strong>
                          <p className="text-[10px] text-gray-300 font-sans leading-relaxed">
                            {t.technicalSolution}
                          </p>
                        </div>
                      )}

                      {t.techStack && t.techStack.length > 0 && (
                        <div className="border-t border-white/5 pt-2">
                          <strong className="text-white text-[9px] font-mono tracking-wider block uppercase mb-1.5">
                            Ecosystem Specs:
                          </strong>
                          <div className="flex flex-wrap gap-1">
                            {t.techStack.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-1.5 py-0.5 rounded bg-white/5 text-[9px] font-mono text-gray-400 border border-white/5"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Global Security / Trust Credentials Footer */}
        <div className="mt-16 border-t border-white/5 pt-12 flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#0c0c0c]/30 p-6 rounded-sm border border-white/5">
          <div className="flex items-center space-x-3.5">
            <div className="p-2 rounded-sm bg-brand-gold/10 border border-brand-gold/20 text-brand-gold shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <strong className="text-white text-xs block font-mono uppercase tracking-wider">REGULATORY COMPLIANCE HARDENING</strong>
              <p className="text-[10px] text-gray-500 max-w-xl leading-normal font-sans">
                Every software build, physical surveillance array, and penetration audit aligns with international regulations (GDPR, ISO 27001) and regional industrial standards.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-brand-gold font-mono font-bold shrink-0">
            <span>VERIFIED ADVISORY</span>
            <CheckCircle className="w-4 h-4 fill-brand-gold text-black shrink-0" />
          </div>
        </div>

      </div>
    </section>
  );
}
