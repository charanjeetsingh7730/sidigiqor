"use client";

import React from "react";
import { ShieldCheck, Info, FileCheck2 } from "lucide-react";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      heading: "1. Commitment to Data Privacy",
      content: "At Sidigiqor Technologies, we take the confidentiality of your personal, financial, and proprietary business information very seriously. This Privacy Policy describes how we collect, store, process, and safeguard data when you interact with our consulting services, custom websites, CRM platforms, HRMS portals, or campaign applications."
    },
    {
      heading: "2. Information We Collect",
      content: [
        "Client Contact Data: Names, business email addresses, telephone numbers, and corporate physical locations.",
        "Technical Infrastructure Data: Network IP addresses, firewall log structures, server configuration files, and VAPT target listings provided for diagnostic audits.",
        "Operational Data: Employee attendance records (for custom HRMS integrations), customer lead information (for bespoke CRM deployments), and localized voter demographics (for campaign analytical portals).",
        "Payment Data: Billing addresses, GST numbers, and payment gateway transaction references. We do not store full credit card numbers; payment processing is handled securely by certified third-party gateways."
      ]
    },
    {
      heading: "3. How We Use Your Data",
      content: "We use the collected information solely to perform our contractual duties, optimize networking setups, deliver secure software solutions, respond to support tickets, process milestone payments, and provide cybersecurity alerts. We never sell, lease, rent, or trade your corporate or consumer data with third parties."
    },
    {
      heading: "4. Database Isolation & Cybersecurity",
      content: "All client databases, custom software workloads, and campaign analytics run inside physically isolated Virtual Private Clouds (VPC). We employ end-to-end encryption (AES-256 for data-at-rest and TLS 1.3 for data-in-transit), secure Multi-Factor Authentication (MFA), and automated routine security patching to prevent unauthorized access."
    },
    {
      heading: "5. Compliance with Global Standards",
      content: "We design and deploy digital architectures that support client compliance with GDPR, regional GCC digital protection frameworks, and Indian digital data protection (DPDP) acts. If you require specialized data residency constraints (e.g. hosting databases purely within Kuwait or the UAE), we configure cloud boundaries accordingly."
    },
    {
      heading: "6. User Rights & Data Deletion",
      content: "You have the right to inspect, correct, update, or request the permanent deletion of your personal data stored on our servers. Requests should be emailed directly to Sahil@Sidigiqor.com. We process compliant requests within 10 business days, subject to regulatory tax and record-keeping laws."
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-[#0a0a0a] pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="border-b border-white/5 pb-6 mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-[1px] w-6 bg-brand-gold"></span>
            <span className="text-xs text-brand-gold font-mono tracking-widest uppercase font-bold">
              Sidigiqor Corporate Policy
            </span>
          </div>
          <h1 className="font-display font-light text-3xl sm:text-5xl text-white uppercase mt-1">
            Privacy Policy
          </h1>
          <p className="text-xs text-gray-500 font-mono mt-2">
            Last Updated: July 12, 2026
          </p>
        </div>

        <div className="bg-[#121212] border border-white/5 rounded-xs p-4 flex items-start gap-3 mb-8">
          <ShieldCheck className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
          <p className="text-xs text-gray-400 font-medium leading-relaxed">
            This document serves as an active legal agreement for client operations, data security safeguards, and privacy controls of **Sidigiqor Technologies OPC Private Limited**.
          </p>
        </div>

        <div className="space-y-8 text-sm leading-relaxed text-gray-300 font-sans">
          {sections.map((sec, idx) => (
            <div key={idx} className="space-y-3 border-b border-white/5 pb-6 last:border-0 last:pb-0">
              <h2 className="font-display font-bold text-base text-white uppercase tracking-wide flex items-center gap-2">
                <FileCheck2 className="w-4 h-4 text-brand-gold" />
                {sec.heading}
              </h2>
              
              {Array.isArray(sec.content) ? (
                <ul className="space-y-2.5 pl-6 list-disc text-xs sm:text-sm text-gray-400">
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
                <p className="text-xs sm:text-sm text-gray-400 font-medium leading-relaxed pl-6">
                  {sec.content}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#0c0c0c] border border-white/5 rounded-sm p-4 flex flex-col sm:flex-row items-center gap-4 justify-between">
          <div className="flex items-center gap-3">
            <Info className="w-4 h-4 text-brand-gold shrink-0" />
            <p className="text-[11px] text-gray-500 font-medium">
              If you have any questions or data concerns, contact Sahil@Sidigiqor.com.
            </p>
          </div>
          <span className="text-[9px] font-mono text-gray-600 font-bold uppercase tracking-wider">
            SECURE ADVISORY Blueprints
          </span>
        </div>
      </div>
    </div>
  );
}
