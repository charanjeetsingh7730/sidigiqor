import React from "react";
import SEO from "../components/SEO";
import TestimonialsShowcase from "../components/TestimonialsShowcase";

export default function CaseStudiesPage() {
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
        "name": "Case Studies",
        "item": "https://sidigiqor.com/case-studies"
      }
    ]
  };

  return (
    <>
      <SEO
        title="Case Studies & Client Testimonials | Sidigiqor Technologies"
        description="Read detailed accounts of our network deployments, cybersecurity audits, AI integrations, and successful client growth stories."
        canonicalUrl="https://sidigiqor.com/case-studies"
        breadcrumbSchema={breadcrumbSchema}
      />
      <div className="pt-20">
        <TestimonialsShowcase />
      </div>
    </>
  );
}
