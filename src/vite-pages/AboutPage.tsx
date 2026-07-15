import React from "react";
import SEO from "../components/SEO";
import AboutSection from "../sections/AboutSection";
import CredentialsSection from "../sections/CredentialsSection";

export default function AboutPage() {
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
        "name": "About Us",
        "item": "https://sidigiqor.com/about"
      }
    ]
  };

  return (
    <>
      <SEO
        title="About Us | Sidigiqor Technologies Corporate Overview"
        description="Learn about Sidigiqor Technologies, our mission to simplify technology, secure businesses, and enable growth, and our core corporate values."
        canonicalUrl="https://sidigiqor.com/about"
        breadcrumbSchema={breadcrumbSchema}
      />
      <div className="pt-20">
        <AboutSection showFullContent={true} />
        <CredentialsSection />
      </div>
    </>
  );
}
