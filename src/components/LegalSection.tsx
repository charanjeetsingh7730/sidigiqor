import React, { useState } from "react";
import { 
  Scale, 
  FileText, 
  ShieldCheck, 
  Truck, 
  RefreshCw, 
  X, 
  CheckCircle2, 
  FileCheck2,
  ExternalLink,
  ShieldAlert,
  Info
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { POLICIES_DATA } from "../legalData";

const iconMap: Record<string, React.ComponentType<any>> = {
  terms: FileText,
  privacy: ShieldCheck,
  shipping: Truck,
  refund: RefreshCw
};

export default function LegalSection() {
  const [activePolicyId, setActivePolicyId] = useState<string | null>(null);

  const policies = POLICIES_DATA.map(p => ({
    ...p,
    icon: iconMap[p.id] || FileText
  }));

  const activePolicy = policies.find(p => p.id === activePolicyId);

  return (
    <section id="legal-policies" className="py-16 bg-[#0a0a0a] border-b border-white/5 relative overflow-hidden">
      {/* Dynamic graphic lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/15 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="h-[1px] w-6 bg-brand-gold"></span>
            <span className="text-[10px] text-brand-gold font-bold tracking-[0.2em] uppercase font-mono">08. COMPLIANCE & LEGAL</span>
            <span className="h-[1px] w-6 bg-brand-gold"></span>
          </div>
          <h2 className="font-display font-light text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight uppercase leading-tight">
            Corporate <span className="font-medium italic text-brand-gold">Governance</span> & Merchant Policies
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm mt-3 leading-relaxed font-medium max-w-2xl mx-auto">
            Authorized merchant frameworks and statutory legal disclosures for Sidigiqor Technologies OPC Private Limited. Tap any card below to open the complete governing policy.
          </p>
        </div>

        {/* 4 Cards Grid - Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {policies.map((policy) => {
            const Icon = policy.icon;
            return (
              <button
                key={policy.id}
                onClick={() => setActivePolicyId(policy.id)}
                className="bg-[#0f0f0f] border border-white/5 hover:border-brand-gold/30 hover:bg-[#141414] rounded-sm p-5 text-left transition-all duration-300 group relative flex flex-col justify-between h-[210px] cursor-pointer shadow-xl"
              >
                {/* Visual hover border overlay */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-brand-gold/0 via-brand-gold/30 to-brand-gold/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-2 bg-brand-gold/10 border border-brand-gold/20 text-brand-gold rounded-xs">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[8px] font-mono text-gray-500 group-hover:text-brand-gold transition-colors font-bold uppercase tracking-widest">
                      SECURE DOCUMENT
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-sm text-white uppercase tracking-wider group-hover:text-brand-gold transition-colors">
                    {policy.title}
                  </h3>

                  <p className="text-[11px] text-gray-400 leading-normal line-clamp-3 font-medium">
                    {policy.shortDesc}
                  </p>
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-gray-500 pt-3 border-t border-white/5 w-full">
                  <span>LAST REVISED: 2026</span>
                  <span className="flex items-center gap-1 text-brand-gold font-bold uppercase tracking-wider text-[9px]">
                    Read Policy
                    <ExternalLink className="w-3 h-3 text-brand-gold/70" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Payment Gateway Compliance Footer Banner */}
        <div className="mt-8 bg-[#0c0c0c] border border-white/5 rounded-sm p-4 flex flex-col sm:flex-row items-center gap-4 justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-brand-gold/5 border border-brand-gold/10 rounded-full text-brand-gold shrink-0">
              <Info className="w-4 h-4" />
            </div>
            <p className="text-[11px] text-gray-400 font-medium leading-relaxed">
              These policies ensure absolute operational transparency, licensing safety, and 100% compliance with digital payment gateways, RBI regulations, and consumer safety charters.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-[9px] font-mono text-gray-500 font-bold uppercase tracking-wider">
              AUTHORIZED GATEWAY MERCHANT
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-brand-gold shadow-[0_0_6px_#c5a880]"></div>
          </div>
        </div>
      </div>

      {/* Pop-up Window Modal */}
      <AnimatePresence>
        {activePolicyId && activePolicy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePolicyId(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            />

            {/* Modal Body container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="bg-[#0d0d0d] border border-white/10 rounded-md w-full max-w-3xl max-h-[85vh] overflow-hidden flex flex-col relative z-10 shadow-2xl"
            >
              {/* Modal Header */}
              <div className="px-6 py-4 border-b border-white/5 bg-black/50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-brand-gold/10 border border-brand-gold/20 text-brand-gold rounded-xs">
                    {React.createElement(activePolicy.icon, { className: "w-4 h-4" })}
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-sm sm:text-base text-white uppercase tracking-wider">
                      {activePolicy.title}
                    </h2>
                    <p className="text-[10px] font-mono text-brand-gold/80 font-bold uppercase tracking-wider">
                      Sidigiqor Corporate Policy • Last Updated: {activePolicy.lastUpdated}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setActivePolicyId(null)}
                  className="p-2 hover:bg-white/5 text-gray-400 hover:text-white rounded-full transition-colors cursor-pointer"
                  title="Close Policy Window"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body Scroll Area */}
              <div className="px-6 py-6 overflow-y-auto space-y-6 text-sm leading-relaxed text-gray-300 font-sans custom-scrollbar">
                
                {/* Top overview note */}
                <div className="bg-[#121212] border border-white/5 rounded-xs p-4 flex items-start gap-3">
                  <ShieldAlert className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <p className="text-xs text-gray-400 font-medium leading-relaxed">
                    This document serves as an active legal agreement for client operations, digital solutions delivery, and merchant accounts of **Sidigiqor Technologies OPC Private Limited**.
                  </p>
                </div>

                {activePolicy.sections.map((sec, idx) => (
                  <div key={idx} className="space-y-2 border-b border-white/5 pb-4 last:border-0 last:pb-0">
                    <h4 className="font-display font-bold text-xs sm:text-sm text-white uppercase tracking-wide flex items-center gap-2">
                      <FileCheck2 className="w-3.5 h-3.5 text-brand-gold" />
                      {sec.heading}
                    </h4>
                    
                    {Array.isArray(sec.content) ? (
                      <ul className="space-y-2.5 pl-5 list-disc text-xs text-gray-400">
                        {sec.content.map((bullet, bIdx) => {
                          const parts = bullet.split(":");
                          if (parts.length > 1) {
                            return (
                              <li key={bIdx} className="leading-relaxed font-medium">
                                <strong className="text-gray-200">{parts[0]}:</strong>{parts.slice(1).join(":")}
                              </li>
                            );
                          }
                          return (
                            <li key={bIdx} className="leading-relaxed font-medium">
                              {bullet}
                            </li>
                          );
                        })}
                      </ul>
                    ) : (
                      <p className="text-xs sm:text-sm text-gray-400 font-medium leading-relaxed pl-5">
                        {sec.content}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 border-t border-white/5 bg-black/50 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-[10px] font-mono text-gray-500 font-bold uppercase tracking-widest">
                  SECURED VIA AES-256 ENCRYPTION
                </span>
                <button
                  onClick={() => setActivePolicyId(null)}
                  className="px-5 py-2 bg-brand-gold hover:bg-brand-gold/90 text-black font-display font-bold text-xs uppercase tracking-wider rounded-xs cursor-pointer transition-all w-full sm:w-auto text-center"
                >
                  Acknowledge & Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
