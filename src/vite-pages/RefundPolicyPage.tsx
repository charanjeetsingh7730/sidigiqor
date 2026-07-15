import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, RefreshCw } from "lucide-react";
import SEO from "../components/SEO";

export default function RefundPolicyPage() {
  const lastUpdated = "July 12, 2026";
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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://sidigiqor.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Refund Policy",
        "item": "https://sidigiqor.com/refund-policy"
      }
    ]
  };

  return (
    <>
      <SEO
        title="Cancellation & Refund Policy | Sidigiqor Technologies"
        description="Read our refund guidelines, milestone-based cancellation terms, cybersecurity audit bookings, and computer AMC terminations."
        canonicalUrl="https://sidigiqor.com/refund-policy"
        breadcrumbSchema={breadcrumbSchema}
      />
      <div className="pt-28 pb-16 bg-[#0a0a0a] min-h-screen text-gray-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center text-xs font-mono text-brand-gold hover:text-brand-gold-dark transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            BACK TO HOME
          </Link>

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-brand-gold/10 border border-brand-gold/20 text-brand-gold rounded-sm">
                <RefreshCw className="w-6 h-6" />
              </div>
              <div>
                <h1 className="font-display font-light text-2xl sm:text-4xl text-white uppercase tracking-tight">
                  Cancellation & Refund Policy
                </h1>
                <span className="text-[10px] font-mono text-gray-500 block mt-1 uppercase">
                  Last Updated: {lastUpdated}
                </span>
              </div>
            </div>

            <div className="border-t border-white/5 pt-8 space-y-8">
              {sections.map((section, idx) => (
                <div key={idx} className="space-y-3">
                  <h2 className="font-display font-medium text-lg text-white uppercase tracking-wide">
                    {section.heading}
                  </h2>
                  {Array.isArray(section.content) ? (
                    <ul className="space-y-2.5 list-disc pl-5 text-sm text-gray-400">
                      {section.content.map((bullet, i) => (
                        <li key={i} className="leading-relaxed">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-gray-400 leading-relaxed font-sans">
                      {section.content}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
