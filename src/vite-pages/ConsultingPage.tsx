import React from "react";
import SEO from "../components/SEO";
import MethodologySection from "../sections/MethodologySection";

export default function ConsultingPage() {
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
        "name": "Consulting Process",
        "item": "https://sidigiqor.com/consulting"
      }
    ]
  };

  return (
    <>
      <SEO
        title="Consulting Model & Methodology Slider | Sidigiqor Technologies"
        description="Learn about our structured 6-stage lifecycle: Discover, Assess, Design, Implement, Secure, and Support to minimize deployment risks."
        canonicalUrl="https://sidigiqor.com/consulting"
        breadcrumbSchema={breadcrumbSchema}
      />
      <div className="pt-20">
        <MethodologySection showExploreButton={false} />
      </div>
    </>
  );
}
