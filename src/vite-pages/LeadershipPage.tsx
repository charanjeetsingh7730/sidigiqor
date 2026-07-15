import React from "react";
import SEO from "../components/SEO";
import LeadershipSection from "../sections/LeadershipSection";

export default function LeadershipPage() {
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
        "name": "Leadership",
        "item": "https://sidigiqor.com/leadership"
      }
    ]
  };

  return (
    <>
      <SEO
        title="Corporate Leadership | Sidigiqor Technologies Directors & Steering Board"
        description="Meet the executive leadership and steering committee driving global technology consulting expansion at Sidigiqor Technologies."
        canonicalUrl="https://sidigiqor.com/leadership"
        breadcrumbSchema={breadcrumbSchema}
      />
      <div className="pt-20">
        <LeadershipSection showMeetTeamButton={false} />
      </div>
    </>
  );
}
