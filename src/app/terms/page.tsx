"use client";

import React from "react";
import { FileText, Info, FileCheck2 } from "lucide-react";

export default function TermsPage() {
  const sections = [
    {
      heading: "1. Acceptance of Terms",
      content: "Welcome to Sidigiqor Technologies OPC Private Limited ('Sidigiqor', 'we', 'our', or 'us'). By accessing our website, purchasing our services, signing Annual Maintenance Contracts (AMC), or utilizing our consulting products, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services or platforms."
    },
    {
      heading: "2. Scope of Services",
      content: [
        "IT & Enterprise Infrastructure: We offer hardware provisioning, server installation, and computer Annual Maintenance Contracts (AMC) to optimize operational uptime.",
        "Cybersecurity & VAPT: Our team delivers rigorous Vulnerability Assessment and Penetration Testing (VAPT), firewall perimeter deployments, and active threat containment blueprints.",
        "Digital Engineering: We develop bespoke custom software systems, premium web portals, and native or cross-platform mobile apps (iOS & Android).",
        "Artificial Intelligence & Surveillance: We design and deploy smart edge video analytics, AI surveillance cameras, machine learning predictive models, and Generative Engine Optimization (GEO) strategies.",
        "Political Campaigns: We engineer secure constituency databases, offline-first mobile booth applications, and live campaign war room solutions."
      ]
    },
    {
      heading: "3. Service Delivery & Client Obligations",
      content: "For custom digital projects, execution schedules and delivery milestones are governed by individual Statement of Work (SOW) documents. The client must cooperate fully, providing necessary database access, system credentials, and operational feedback in a timely manner. Delays in providing credentials may result in proportional shifts in milestone delivery dates."
    },
    {
      heading: "4. Annual Maintenance Contracts (AMC) Terms",
      content: "AMC contracts for hardware, computers, and server nodes are signed for a minimum duration of twelve (12) months unless agreed otherwise. Scheduled diagnostic checks, preventative physical cleaning, and software patch monitoring will occur according to the agreed SLA. Routine AMC visits do not cover hardware replacements due to physical damage, lightning strikes, or unauthorized third-party tampering."
    },
    {
      heading: "5. Intellectual Property Rights",
      content: "Unless specifically stated in a separate written agreement or SOW, all custom software, bespoke source code repositories, databases, and assets developed specifically for the client shall be transferred 100% to the client upon full payment. Sidigiqor retains ownership of its pre-existing proprietary libraries, frameworks, methodologies, and general toolsets."
    },
    {
      heading: "6. Limitation of Liability",
      content: "Sidigiqor Technologies shall not be liable for any indirect, incidental, consequential, special, or exemplary damages, including but not limited to loss of revenue, profits, data, or operational downtime resulting from system breaches, network outages, or hardware wear, even if advised of the possibility of such damages. Our maximum liability is capped at the fees paid to us under the specific active contract or milestone."
    },
    {
      heading: "7. Governing Law & Dispute Resolution",
      content: "These terms and all contracts are governed by and construed in accordance with the laws of India. Any disputes arising out of these terms shall be subject to the exclusive jurisdiction of the competent courts located in Panchkula, Haryana, India."
    },
    {
      heading: "8. Contact & Legal Address",
      content: "Sidigiqor Technologies OPC Private Limited, Ramgarh, Panchkula, Haryana - 134118, India. Official Corporate Email: Sahil@Sidigiqor.com | Backup: sidigiqor@gmail.com."
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
            Terms & Conditions
          </h1>
          <p className="text-xs text-gray-500 font-mono mt-2">
            Last Updated: July 12, 2026
          </p>
        </div>

        <div className="bg-[#121212] border border-white/5 rounded-xs p-4 flex items-start gap-3 mb-8">
          <FileText className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
          <p className="text-xs text-gray-400 font-medium leading-relaxed">
            This document serves as an active legal agreement for client operations, service deliveries, and contract obligations of **Sidigiqor Technologies OPC Private Limited**.
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
              For administrative inquiries, email Sahil@Sidigiqor.com.
            </p>
          </div>
          <span className="text-[9px] font-mono text-gray-600 font-bold uppercase tracking-wider">
            GOVERNANCE BLUEPRINTS
          </span>
        </div>
      </div>
    </div>
  );
}
