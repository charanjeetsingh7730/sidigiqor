import React from "react";
import { useNavigate } from "react-router-dom";
import SEO from "../components/SEO";
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import CredentialsSection from "../sections/CredentialsSection";
import LeadershipSection from "../sections/LeadershipSection";
import DivisionsSection from "../sections/DivisionsSection";
import TechnologySection from "../sections/TechnologySection";
import MethodologySection from "../sections/MethodologySection";
import IndustriesSection from "../sections/IndustriesSection";
import GlobalPresenceSection from "../sections/GlobalPresenceSection";
import ContactSection from "../sections/ContactSection";
import LegalSection from "../components/LegalSection";
import AlliancesSection from "../components/AlliancesSection";
import TestimonialsShowcase from "../components/TestimonialsShowcase";
import SectionDivider from "../components/SectionDivider";

export default function HomePage() {
  const navigate = useNavigate();

  const handlePlanSelected = (industry: string, contextText: string) => {
    navigate("/contact", { state: { industry, issue: contextText } });
  };

  const homeLdSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Sidigiqor Technologies",
    "description": "Sidigiqor is a premier global IT consulting, cybersecurity audits (VAPT), custom AI/ML model developments, secure network firewalls, and digital transformation consulting.",
    "url": "https://sidigiqor.com",
    "telephone": "+91-99115-39101",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ramgarh",
      "addressLocality": "Panchkula",
      "addressRegion": "Haryana",
      "postalCode": "134118",
      "addressCountry": "IN"
    }
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
      }
    ]
  };

  return (
    <>
      <SEO
        title="Sidigiqor Technologies | Enterprise IT Consulting, Cyber Security & AI Systems"
        description="Sidigiqor Technologies is a premier global IT consulting, cybersecurity audits (VAPT), custom AI/ML model developments, secure network firewalls, and digital transformation consulting."
        keywords="Sidigiqor, IT Consulting India, Cybersecurity Audits VAPT, custom AI solutions, secure network firewalls, enterprise IT AMC"
        canonicalUrl="https://sidigiqor.com/"
        jsonLdSchema={homeLdSchema}
        breadcrumbSchema={breadcrumbSchema}
      />

      <HeroSection
        onExploreDivisions={() => navigate("/divisions")}
        onInteractiveAssessment={() => navigate("/industries")}
      />

      <AboutSection
        showFullContent={false}
        onReadMore={() => navigate("/about")}
      />

      <CredentialsSection />

      <SectionDivider />

      <LeadershipSection
        showMeetTeamButton={true}
        onMeetTeam={() => navigate("/leadership")}
      />

      <SectionDivider />

      <AlliancesSection />

      <SectionDivider />

      <DivisionsSection
        showBrowseButton={true}
        onBrowseServices={() => navigate("/divisions")}
      />

      <SectionDivider />

      <TechnologySection
        showPreviewOnly={true}
        onViewDetails={() => navigate("/technology")}
        onServiceClick={(name, category) => navigate("/services", { state: { serviceName: name, categoryName: category } })}
      />

      <SectionDivider />

      <MethodologySection
        showExploreButton={true}
        onExplore={() => navigate("/consulting")}
      />

      <SectionDivider />

      <IndustriesSection
        onPlanSelected={handlePlanSelected}
        showExploreButton={true}
        onExplore={() => navigate("/industries")}
      />

      <SectionDivider />

      <TestimonialsShowcase />

      <SectionDivider />

      <GlobalPresenceSection
        showExploreButton={true}
        onExplore={() => navigate("/global-offices")}
      />

      <SectionDivider />

      <LegalSection />

      <ContactSection />
    </>
  );
}
