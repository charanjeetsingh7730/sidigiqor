import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Truck } from "lucide-react";
import SEO from "../components/SEO";

export default function ShippingPolicyPage() {
  const lastUpdated = "July 12, 2026";
  const sections = [
    {
      heading: "1. Digital Delivery Paradigm",
      content: "As a professional technology consulting and software engineering firm, Sidigiqor Technologies primarily delivers solutions digitally. This includes custom source code repositories, compiled software installers, access links to cloud staging environments, digital compliance audit reports, VAPT documentation, and secure firewall configuration profiles. No physical shipping is required for these products."
    },
    {
      heading: "2. Custom Software Staging & Repository Access",
      content: [
        "Repository Transfers: Source code files are delivered securely via cloud-based Git platforms (e.g. GitHub or GitLab). We transfer ownership of the specific repository within two (2) business days of verifying milestone payments.",
        "Staging Environments: Access to live beta portals, custom CRM environments, or test dashboards is provided via direct URL within the project timeline specified in the active Statement of Work (SOW)."
      ]
    },
    {
      heading: "3. Hardware Procurement & Physical Deliveries",
      content: "For Annual Maintenance Contracts (AMC) or projects requiring local server setup, networking cables, firewalls, routers, or surveillance cameras, the following physical delivery rules apply:"
    },
    {
      heading: "4. Shipping Territories & Dispatch Timelines",
      content: [
        "Primary Delivery Scope: Physical hardware setup and deliveries are concentrated within Panchkula, Baddi, the Chandigarh Tricity region, and neighboring industrial hubs in Haryana, Punjab, and Himachal Pradesh.",
        "Dispatch Timelines: Standard in-stock hardware components are delivered to the client's premises within three to five (3-5) business days from order placement.",
        "Transit Costs: Shipping, transport, and insurance charges for physical hardware and components will be clearly quoted beforehand in the hardware invoice."
      ]
    },
    {
      heading: "5. Return & Replacement Policies for Hardware",
      content: "Hardware components (e.g. routers, firewalls, switch boxes, or cameras) are subject to the original manufacturer's warranty policies. Sidigiqor assists clients in coordinating with brand service centers for replacement of defective parts within the active AMC framework."
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
        "name": "Shipping Policy",
        "item": "https://sidigiqor.com/shipping-policy"
      }
    ]
  };

  return (
    <>
      <SEO
        title="Shipping & Delivery Policy | Sidigiqor Technologies"
        description="Review digital delivery guidelines for custom enterprise software and physical transport/setup guidelines for servers and network firewalls."
        canonicalUrl="https://sidigiqor.com/shipping-policy"
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
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h1 className="font-display font-light text-2xl sm:text-4xl text-white uppercase tracking-tight">
                  Shipping & Delivery Policy
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
