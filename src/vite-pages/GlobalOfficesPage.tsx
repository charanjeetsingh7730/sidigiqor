import React from "react";
import SEO from "../components/SEO";
import GlobalPresenceSection from "../sections/GlobalPresenceSection";

export default function GlobalOfficesPage() {
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
        "name": "Global Offices",
        "item": "https://sidigiqor.com/global-offices"
      }
    ]
  };

  return (
    <>
      <SEO
        title="Global Offices & Delivery Locations | Sidigiqor Technologies"
        description="Coordinates and addresses for our local support offices and technical operations in Chandigarh Tricity, Baddi, Dubai, and New York."
        canonicalUrl="https://sidigiqor.com/global-offices"
        breadcrumbSchema={breadcrumbSchema}
      />
      <div className="pt-20">
        <GlobalPresenceSection showExploreButton={false} />
      </div>
    </>
  );
}
