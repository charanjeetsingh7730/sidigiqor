import React from "react";
import { useNavigate } from "react-router-dom";
import SEO from "../components/SEO";
import BlogsPage from "../components/BlogsPage";

export default function InsightsPage() {
  const navigate = useNavigate();

  const handleConsult = () => {
    navigate("/contact");
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
        "name": "Insights",
        "item": "https://sidigiqor.com/insights"
      }
    ]
  };

  return (
    <>
      <SEO
        title="Corporate Insights & GEO Blog | Sidigiqor Technologies"
        description="Stay ahead with technical columns about AI edge surveillance, zero-trust firewalls, VAPT remediations, and Generative Engine Optimization."
        canonicalUrl="https://sidigiqor.com/insights"
        breadcrumbSchema={breadcrumbSchema}
      />
      <div className="pt-20">
        <BlogsPage
          onReadArticle={() => {}}
          onConsult={handleConsult}
        />
      </div>
    </>
  );
}
