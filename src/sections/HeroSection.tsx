import React from "react";
import { Sparkles, ArrowRight, Shield, CheckCircle2 } from "lucide-react";
import { CORE_PILLARS } from "../data";

interface HeroSectionProps {
  onExploreDivisions: () => void;
  onInteractiveAssessment: () => void;
}

export default function HeroSection({
  onExploreDivisions,
  onInteractiveAssessment
}: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-black border-b border-white/5"
    >
      {/* Dynamic backdrop radial glow */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-gold/15 via-transparent to-transparent"></div>
      </div>

      {/* Dynamic backdrop grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:4rem_4rem]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Texts */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="inline-flex items-center px-3 py-1 rounded-sm text-xs font-mono font-bold bg-brand-gold/10 text-brand-gold border border-brand-gold/20 tracking-wider">
              <Sparkles className="w-3.5 h-3.5 mr-1.5 text-brand-gold animate-pulse" />
              BUILT IN INDIA. SCALING GLOBALLY.
            </span>

            <div className="flex items-center gap-2 mb-2">
              <span className="h-[1px] w-8 bg-brand-gold"></span>
              <span className="text-xs text-brand-gold font-bold tracking-[0.2em] uppercase">Leading the Digital Frontier</span>
            </div>

            <h1 className="font-display font-light text-white text-4xl sm:text-5xl lg:text-7xl tracking-tighter leading-none uppercase">
              Architecting <span className="font-medium italic text-brand-gold">Resilient</span> <br />
              Technology Ecosystems.
            </h1>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl font-medium">
              Sidigiqor Technologies is an elite, multidisciplinary global technology consulting organization. We architect high-performance digital systems, execute highly rigorous cybersecurity audits (VAPT), deploy advanced secure firewalls, and develop state-of-the-art AI/ML models. With strategic operations across India, the GCC region, Europe, the United Kingdom, and North America, we build and manage resilient technological foundations for leading enterprises and public-sector operations.
            </p>

            {/* Core Pillars quick overview chips */}
            <div className="flex flex-wrap gap-2 pt-2">
              {CORE_PILLARS.map((p, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center px-2.5 py-1 rounded-sm text-[10px] font-mono font-bold bg-[#0f0f0f] text-gray-300 border border-white/5 hover:bg-white/5 hover:border-white/10 transition-colors shadow-xs"
                >
                  <CheckCircle2 className="w-3 h-3 text-brand-gold mr-1.5" />
                  {p}
                </span>
              ))}
            </div>

            {/* Action row */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                id="hero-primary-cta"
                onClick={onExploreDivisions}
                className="bg-brand-gold hover:bg-brand-gold-dark text-black px-6 py-3 rounded-sm text-xs font-bold tracking-widest uppercase inline-flex items-center justify-center transition-all shadow-md group cursor-pointer"
              >
                Explore Divisions
                <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                id="hero-secondary-cta"
                onClick={onInteractiveAssessment}
                className="bg-white/5 hover:bg-white/10 text-white border border-white/5 px-6 py-3 rounded-sm text-xs font-bold tracking-widest uppercase inline-flex items-center justify-center transition-all cursor-pointer"
              >
                Interactive Assessment
              </button>
            </div>
          </div>

          {/* Right Hero Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md bg-[#0f0f0f] text-gray-300 rounded-sm p-6 sm:p-8 shadow-2xl border border-white/5">
              {/* SVG ambient graphics */}
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                <Shield className="w-40 h-40 text-white" />
              </div>

              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-brand-gold font-bold uppercase">
                    SYSTEM CAPABILITY STATUS
                  </span>
                  <h2 className="font-display font-light text-xl text-white mt-1 uppercase">
                    Technology That Protects. <br />
                    Intelligence That Delivers.
                  </h2>
                </div>

                {/* Core highlight metrics in card */}
                <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-5">
                  <div>
                    <span className="text-[9px] font-mono text-gray-500 uppercase">Consulting Ethos</span>
                    <span className="text-xs font-bold text-gray-200 block mt-1">Discovery First</span>
                    <span className="text-[10px] text-gray-400 block">Assess before solving</span>
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-gray-500 uppercase">Security Footprint</span>
                    <span className="text-xs font-bold text-gray-200 block mt-1">Security by Design</span>
                    <span className="text-[10px] text-gray-400 block">Default perimeter hardening</span>
                  </div>
                </div>

                <div className="bg-black/40 p-4 rounded-sm border border-white/5">
                  <span className="text-[9px] font-mono text-brand-gold uppercase font-bold block mb-2">
                    Active Geographies
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-400">
                    <div className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></span>
                      <span>India HQ (Panchkula)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></span>
                      <span>GCC (Kuwait/Dubai)</span>
                    </div>
                    <div className="flex items-center col-span-2">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></span>
                      <span>Americas Hub (New York)</span>
                    </div>
                  </div>
                </div>

                <p className="text-[11px] text-brand-gold font-mono text-center tracking-wider uppercase max-w-xl mx-auto">
                  Securing enterprise perimeters, architecting resilient infrastructure, and powering global digital transformation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
