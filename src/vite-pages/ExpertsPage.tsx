import React from "react";
import SEO from "../components/SEO";
import LeadershipSection from "../sections/LeadershipSection";

export default function ExpertsPage() {
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
        "name": "Experts",
        "item": "https://sidigiqor.com/experts"
      }
    ]
  };

  return (
    <>
      <SEO
        title="Our Experts & Advisory Team | Sidigiqor Technologies Brain Trust"
        description="Connect with our VAPT auditors, custom software architects, and AI developers. Real experts scaling robust global systems."
        canonicalUrl="https://sidigiqor.com/experts"
        breadcrumbSchema={breadcrumbSchema}
      />
      <div className="pt-20">
        {/* We reuse the Leadership/Team Section which lists all experts & segment domains */}
        <LeadershipSection showMeetTeamButton={false} />
      </div>
    </>
  );
}
