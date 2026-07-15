"use client";

import React from "react";
import { Truck, Info, FileCheck2 } from "lucide-react";

export default function ShippingPolicyPage() {
  const sections = [
    {
      heading: "1. Scope of Physical Goods & Deployments",
      content: "Sidigiqor Technologies provides both physical hardware (such as next-generation firewall appliances, enterprise network switches, high-definition CCTV dome cameras, industrial edge computing clusters, NVR servers, and employee biometric gates) and digital delivery of software code bases."
    },
    {
      heading: "2. Hardware Shipping Timelines",
      content: [
        "Domestic Deliveries (India): Physical hardware components are shipped from our technical distribution hubs within 2-4 business days. Delivery to site locations (including Punjab, Haryana, Himachal Pradesh, Chandigarh, Mohali, Panchkula, and nationwide) generally takes 3-7 business days.",
        "International Deliveries (GCC & Global): Hardware shipped to our international client offices (Kuwait, UAE, etc.) takes 7-14 business days, depending on customs clearance procedures and global transit lanes."
      ]
    },
    {
      heading: "3. On-Site Installation and AMC Setup",
      content: "Physical hardware delivery is accompanied by scheduled on-site engineering deployments. For Annual Maintenance Contracts (AMC) and complex security setups, our technicians coordinate on-site arrivals within 48 hours of hardware delivery to begin physical wiring, structural mounting, and network configuration."
    },
    {
      heading: "4. Shipping Costs & Import Tariffs",
      content: "Shipping costs are detailed transparently on project invoices or individual quotation proposals. For international deliveries, the client is responsible for standard regional customs duties, tariffs, and taxes unless specified otherwise in the written corporate agreement."
    },
    {
      heading: "5. Digital Software Delivery",
      content: "All custom websites, bespoke enterprise software, mobile apps, CRM systems, and database configurations are delivered electronically. We hand over compressed source codes, active GitHub repository ownership, credentials, and deployment documentation within 24 hours of final milestone sign-off."
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
            Shipping & Delivery Policy
          </h1>
          <p className="text-xs text-gray-500 font-mono mt-2">
            Last Updated: July 12, 2026
          </p>
        </div>

        <div className="bg-[#121212] border border-white/5 rounded-xs p-4 flex items-start gap-3 mb-8">
          <Truck className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
          <p className="text-xs text-gray-400 font-medium leading-relaxed">
            This document outlines shipping times, transport logistics, and digital/physical delivery setups of **Sidigiqor Technologies OPC Private Limited**.
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
              For tracking details or delivery inquiries, email Sahil@Sidigiqor.com.
            </p>
          </div>
          <span className="text-[9px] font-mono text-gray-600 font-bold uppercase tracking-wider">
            LOGISTICS Blueprints
          </span>
        </div>
      </div>
    </div>
  );
}
