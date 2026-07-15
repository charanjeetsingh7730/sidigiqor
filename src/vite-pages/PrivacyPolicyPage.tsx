import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import SEO from "../components/SEO";

export default function PrivacyPolicyPage() {
  const lastUpdated = "July 12, 2026";
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
        "name": "Privacy Policy",
        "item": "https://sidigiqor.com/privacy-policy"
      }
    ]
  };

  return (
    <>
      <SEO
        title="Privacy Policy | Sidigiqor Technologies Governance"
        description="Review our data governance guidelines, database isolations, cybersecurity protocols, and statutory compliance certifications."
        canonicalUrl="https://sidigiqor.com/privacy-policy"
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
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h1 className="font-display font-light text-2xl sm:text-4xl text-white uppercase tracking-tight">
                  Privacy Policy
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
