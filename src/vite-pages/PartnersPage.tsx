import React from "react";
import SEO from "../components/SEO";
import AlliancesSection from "../components/AlliancesSection";
import CredentialsSection from "../sections/CredentialsSection";

export default function PartnersPage() {
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
        "name": "Partners",
        "item": "https://sidigiqor.com/partners"
      }
    ]
  };

  return (
    <>
      <SEO
        title="Technology Partners & Alliances | Sidigiqor Technologies"
        description="Explore our strategic collaborations with leading software providers, cloud giants, hardware brands, and government certifications."
        canonicalUrl="https://sidigiqor.com/partners"
        breadcrumbSchema={breadcrumbSchema}
      />
      <div className="pt-20">
        <AlliancesSection />
        <CredentialsSection />
      </div>
    </>
  );
}
