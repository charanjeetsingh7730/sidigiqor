import React from "react";
import { useNavigate } from "react-router-dom";
import SEO from "../components/SEO";
import CareersPageContent from "../components/CareersPage";

export default function CareersPage() {
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
        "name": "Careers",
        "item": "https://sidigiqor.com/careers"
      }
    ]
  };

  return (
    <>
      <SEO
        title="Careers & Opportunities | Join Sidigiqor Technologies Engineering"
        description="Build robust technology foundations. Explore active openings in IT engineering, cybersecurity assessments, and AI software design."
        canonicalUrl="https://sidigiqor.com/careers"
        breadcrumbSchema={breadcrumbSchema}
      />
      <div className="pt-20">
        <CareersPageContent
          onConsult={handleConsult}
        />
      </div>
    </>
  );
}
