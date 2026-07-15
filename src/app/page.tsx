"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import CredentialsSection from "../sections/CredentialsSection";
import LeadershipSection from "../sections/LeadershipSection";
import AlliancesSection from "../components/AlliancesSection";
import DivisionsSection from "../sections/DivisionsSection";
import TechnologySection from "../sections/TechnologySection";
import MethodologySection from "../sections/MethodologySection";
import IndustriesSection from "../sections/IndustriesSection";
import TestimonialsShowcase from "../components/TestimonialsShowcase";
import GlobalPresenceSection from "../sections/GlobalPresenceSection";
import ContactSection from "../sections/ContactSection";
import LegalSection from "../components/LegalSection";
import SectionDivider from "../components/SectionDivider";

export default function HomePage() {
  const router = useRouter();

  // Contact form initial states for Adviser pre-population
  const [contactInitialMessage, setContactInitialMessage] = useState("");
  const [contactInitialIndustry, setContactInitialIndustry] = useState("Manufacturing & Industrial");
  const [contactContextActive, setContactContextActive] = useState(false);

  const handlePlanSelected = (industry: string, contextText: string) => {
    setContactInitialIndustry(industry);
    setContactInitialMessage(
      `Greetings Sidigiqor Team. I ran the Consulting Adviser tool on the website.\n\n[DRAFTED ADVISER DETAILS]:\n${contextText}\n\nWe would like to request an assessment session to review this roadmap and explore how we can optimize our technology footprint.`
    );
    setContactContextActive(true);

    // Scroll to the contact form on homepage
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <div className="pt-20">
      {/* Hero Portal */}
      <HeroSection
        onExploreDivisions={() => navigateTo("/divisions")}
        onInteractiveAssessment={() => navigateTo("/industries")}
      />

      {/* About Preview */}
      <AboutSection
        showFullContent={false}
        onReadMore={() => navigateTo("/about")}
      />

      {/* Credentials */}
      <CredentialsSection />

      <SectionDivider />

      {/* Leadership Preview */}
      <LeadershipSection
        showMeetTeamButton={true}
        onMeetTeam={() => navigateTo("/leadership")}
      />

      <SectionDivider />

      <AlliancesSection />

      <SectionDivider />

      {/* Business Divisions Preview */}
      <DivisionsSection
        showFullContent={false}
        onBrowseScope={(id) => navigateTo(`/divisions#${id}`)}
      />

      <SectionDivider />

      {/* Technology Capabilities Preview */}
      <TechnologySection
        showPreviewOnly={true}
        onViewDetails={() => navigateTo("/technology")}
        onServiceClick={(name, category) => {
          router.push(`/services?service=${encodeURIComponent(name)}&category=${encodeURIComponent(category)}`);
        }}
      />

      <SectionDivider />

      {/* Methodology Section */}
      <MethodologySection
        showExploreButton={true}
        onExplore={() => navigateTo("/consulting")}
      />

      <SectionDivider />

      {/* Industries Preview */}
      <IndustriesSection
        onPlanSelected={handlePlanSelected}
        showExploreButton={true}
        onExplore={() => navigateTo("/industries")}
      />

      <SectionDivider />

      <TestimonialsShowcase />

      <SectionDivider />

      {/* Global Presence */}
      <GlobalPresenceSection
        showExploreButton={true}
        onExplore={() => navigateTo("/global-offices")}
      />

      <SectionDivider />

      {/* Legal & Governance */}
      <LegalSection />

      {/* Contact Section */}
      <ContactSection
        initialMessage={contactInitialMessage}
        initialIndustry={contactInitialIndustry}
        initialContextActive={contactContextActive}
      />
    </div>
  );
}
