import React from "react";
import SEO from "../components/SEO";
import DivisionsSection from "../sections/DivisionsSection";

export default function DivisionsPage() {
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
        "name": "Divisions",
        "item": "https://sidigiqor.com/divisions"
      }
    ]
  };

  return (
    <>
      <SEO
        title="Business Divisions | Sidigiqor Technologies Corporate Structure"
        description="Explore the three core divisions of Sidigiqor Technologies: Secure IT Infrastructure, Digital Engineering, and Political Consulting Division."
        canonicalUrl="https://sidigiqor.com/divisions"
        breadcrumbSchema={breadcrumbSchema}
      />
      <div className="pt-20">
        <DivisionsSection showFullContent={true} />
      </div>
    </>
  );
}
