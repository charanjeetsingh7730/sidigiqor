import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText } from "lucide-react";
import SEO from "../components/SEO";

export default function TermsPage() {
  const lastUpdated = "July 12, 2026";
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
        "name": "Terms and Conditions",
        "item": "https://sidigiqor.com/terms"
      }
    ]
  };

  return (
    <>
      <SEO
        title="Terms and Conditions | Sidigiqor Technologies Client Agreement"
        description="Understand the rules, guidelines, service level commitments, and statutory regulations governing Sidigiqor Technologies contracts."
        canonicalUrl="https://sidigiqor.com/terms"
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
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h1 className="font-display font-light text-2xl sm:text-4xl text-white uppercase tracking-tight">
                  Terms and Conditions
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
