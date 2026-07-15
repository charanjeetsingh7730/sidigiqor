"use client";

import React from "react";
import { RefreshCw, Info, FileCheck2 } from "lucide-react";

export default function RefundPolicyPage() {
  const sections = [
    {
      heading: "1. Digital Services & Custom Software Development",
      content: "Bespoke software development, custom web portals, and mobile application engineering are executed in structured stages or milestones. Refunds are structured as follows:"
    },
    {
      heading: "2. Milestone-Based Refund Terms",
      content: [
        "Discovery & Planning Stage: If a project is cancelled by the client before any active development or coding begins, a 100% refund of the initial deposit is processed, minus any consulting hours already logged.",
        "Active Development Milestones: Once active software development, custom UI design, or database engineering begins on a milestone, payments for that active milestone are non-refundable.",
        "Delivered Software: Completed milestones that have been reviewed, approved, and signed off by the client are strictly non-refundable."
      ]
    },
    {
      heading: "3. Cybersecurity Audits & VAPT Audits",
      content: "Cybersecurity audits, network VAPT, and ethical hacking exercises require dedicated pre-allocation of security specialists and virtual sandbox preparation. Once audit activities begin or targets are queued for scanning, fees are 100% non-refundable."
    },
    {
      heading: "4. Annual Maintenance Contracts (AMC) Cancellations",
      content: "Clients may cancel their Annual Maintenance Contracts (AMC) for computers and IT support by providing a written notice at least thirty (30) days in advance to Sahil@Sidigiqor.com. In the event of AMC cancellation, refunds for the remaining unused months will be calculated pro-rata, deducting a 10% administrative cancellation charge."
    },
    {
      heading: "5. Refund Processing Timelines",
      content: "Approved refunds are processed back to the original bank account, corporate card, or payment gateway account within seven to ten (7-10) business days. Sidigiqor Technologies is not responsible for secondary bank delays."
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
            Cancellation & Refund Policy
          </h1>
          <p className="text-xs text-gray-500 font-mono mt-2">
            Last Updated: July 12, 2026
          </p>
        </div>

        <div className="bg-[#121212] border border-white/5 rounded-xs p-4 flex items-start gap-3 mb-8">
          <RefreshCw className="w-5 h-5 text-brand-gold shrink-0 mt-0.5 animate-spin-slow" />
          <p className="text-xs text-gray-400 font-medium leading-relaxed">
            This document outlines the refund terms, milestone cancellation structures, and service terminations of **Sidigiqor Technologies OPC Private Limited**.
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
              If you require a refund check or cancellation request, contact Sahil@Sidigiqor.com.
            </p>
          </div>
          <span className="text-[9px] font-mono text-gray-600 font-bold uppercase tracking-wider">
            TRANSPARENT OPERATIONS Blueprints
          </span>
        </div>
      </div>
    </div>
  );
}
