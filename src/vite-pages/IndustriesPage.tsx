import React from "react";
import { useNavigate } from "react-router-dom";
import SEO from "../components/SEO";
import IndustriesSection from "../sections/IndustriesSection";

export default function IndustriesPage() {
  const navigate = useNavigate();

  const handlePlanSelected = (industry: string, contextText: string) => {
    navigate("/contact", { state: { industry, issue: contextText } });
  };

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
        "name": "Industries",
        "item": "https://sidigiqor.com/industries"
      }
    ]
  };

  return (
    <>
      <SEO
        title="Industries We Empower & Political War Rooms | Sidigiqor Technologies"
        description="Providing specialized IT solutions across Industrial Manufacturing, Healthcare, Logistics, and domestic Indian Political Campaigns."
        canonicalUrl="https://sidigiqor.com/industries"
        breadcrumbSchema={breadcrumbSchema}
      />
      <div className="pt-20">
        <IndustriesSection
          onPlanSelected={handlePlanSelected}
          showExploreButton={false}
        />
      </div>
    </>
  );
}
