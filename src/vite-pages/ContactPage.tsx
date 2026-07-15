import React from "react";
import { useLocation } from "react-router-dom";
import SEO from "../components/SEO";
import ContactSection from "../sections/ContactSection";

export default function ContactPage() {
  const location = useLocation();
  const state = location.state as any;

  const initialMessage = state?.initialMessage || "";
  const initialIndustry = state?.industry || "Manufacturing & Industrial";
  const advisorContext = state?.issue ? { industry: state.industry, issue: state.issue } : null;

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
        "name": "Contact",
        "item": "https://sidigiqor.com/contact"
      }
    ]
  };

  return (
    <>
      <SEO
        title="Contact Our Advisory Team | Sidigiqor Technologies Assessment Briefing"
        description="Schedule a technical gap-assessment. Connect directly with our lead architects and engineers for VAPT audits or custom software roadmaps."
        canonicalUrl="https://sidigiqor.com/contact"
        breadcrumbSchema={breadcrumbSchema}
      />
      <div className="pt-20">
        <ContactSection
          initialMessage={initialMessage}
          initialIndustry={initialIndustry}
          initialContextActive={!!advisorContext}
        />
      </div>
    </>
  );
}
