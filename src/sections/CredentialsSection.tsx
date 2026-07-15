import React from "react";
import { Building2, Shield, Award } from "lucide-react";

export default function CredentialsSection() {
  return (
    <section className="py-12 bg-[#0a0a0a] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-12 border-t border-white/5 space-y-8">
          <div className="text-center max-w-xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-[10px] font-mono text-brand-gold font-bold uppercase tracking-wider">Credentials & Governance</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
            </div>
            <h3 className="font-display font-light text-xl sm:text-2xl text-white uppercase">
              Institutional Registrations & Standards
            </h3>
            <p className="mt-1.5 text-gray-500 text-xs sm:text-sm font-medium">
              Sidigiqor's enterprise engineering team and corporate entity align with leading regulatory, governmental, and individual standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Company Registrations Card */}
            <div className="bg-[#0f0f0f] p-6 rounded-sm border border-white/5 hover:border-brand-gold/20 transition-all duration-300 shadow-xl flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-brand-gold/10 border border-brand-gold/20 text-brand-gold rounded-sm">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <h4 className="font-display font-bold text-sm text-white uppercase">
                    Company Registrations
                  </h4>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed font-medium">
                  Legally registered and formally authorized corporate entity complying with stringent corporate acts, credit systems, and security guidelines.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {["Government of India", "Startup India", "MSME", "ISO Certified", "Dun & Bradstreet (D&B)", "NESA"].map((tag, i) => (
                    <span key={i} className="inline-flex items-center px-2 py-0.5 rounded-xs text-[10px] font-mono font-bold bg-white/5 border border-white/5 text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Regulatory Alignment Card */}
            <div className="bg-[#0f0f0f] p-6 rounded-sm border border-white/5 hover:border-brand-gold/20 transition-all duration-300 shadow-xl flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-brand-gold/10 border border-brand-gold/20 text-brand-gold rounded-sm">
                    <Shield className="w-4 h-4" />
                  </div>
                  <h4 className="font-display font-bold text-sm text-white uppercase">
                    Regulatory Compliance
                  </h4>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed font-medium">
                  Strict data safety, secure cloud-hosting protocols, and complete compliance alignment for handling confidential public-sector and enterprise resources.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {["GDPR Compliant", "Privacy Shield", "Confidentiality Handshake", "Zero Leak Policy"].map((tag, i) => (
                    <span key={i} className="inline-flex items-center px-2 py-0.5 rounded-xs text-[10px] font-mono font-bold bg-brand-gold/10 border border-brand-gold/20 text-brand-gold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Professional Certifications Card */}
            <div className="bg-[#0f0f0f] p-6 rounded-sm border border-white/5 hover:border-brand-gold/20 transition-all duration-300 shadow-xl flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-brand-gold/10 border border-brand-gold/20 text-brand-gold rounded-sm">
                    <Award className="w-4 h-4" />
                  </div>
                  <h4 className="font-display font-bold text-sm text-white uppercase">
                    Professional Credentials
                  </h4>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed font-medium">
                  Our engineering and advisory team maintains active world-class certifications in cybersecurity, network topology, and governance.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {["OSCP", "CISSP", "CCIE", "CCNP", "ITIL", "PMP"].map((tag, i) => (
                    <span key={i} className="inline-flex items-center px-2 py-0.5 rounded-xs text-[10px] font-mono font-bold bg-white/5 border border-white/5 text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
