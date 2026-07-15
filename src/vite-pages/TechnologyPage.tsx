import React from "react";
import { useNavigate } from "react-router-dom";
import SEO from "../components/SEO";
import TechnologySection from "../sections/TechnologySection";

export default function TechnologyPage() {
  const navigate = useNavigate();

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
        "name": "Technology Capabilities",
        "item": "https://sidigiqor.com/technology"
      }
    ]
  };

  return (
    <>
      <SEO
        title="Technology Capabilities & AI Matrix | Sidigiqor Technologies"
        description="Learn about our high-performance digital systems, custom AI/ML model developments, and zero-trust security perimeters."
        canonicalUrl="https://sidigiqor.com/technology"
        breadcrumbSchema={breadcrumbSchema}
      />
      <div className="pt-20">
        <TechnologySection
          showPreviewOnly={false}
          onServiceClick={(name, category) => navigate("/services", { state: { serviceName: name, categoryName: category } })}
        />
      </div>
    </>
  );
}
