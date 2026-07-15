import React, { useState } from "react";
import {
  Factory,
  Hospital,
  Vote,
  Truck,
  GraduationCap,
  Rocket,
  HelpCircle,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  RefreshCw
} from "lucide-react";
import { INDUSTRIES_WE_SERVE } from "../data";

interface InteractiveAdviserProps {
  onPlanSelected: (industry: string, issue: string) => void;
}

export default function InteractiveAdviser({ onPlanSelected }: InteractiveAdviserProps) {
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>("manufacturing");
  const [selectedIssueIndex, setSelectedIssueIndex] = useState<number>(0);
  const [customGoal, setCustomGoal] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [, setShowResult] = useState<boolean>(true);

  const selectedIndustry = INDUSTRIES_WE_SERVE.find(
    (ind) => ind.id === selectedIndustryId
  ) || INDUSTRIES_WE_SERVE[0];

  const handleIndustryChange = (id: string) => {
    setSelectedIndustryId(id);
    setSelectedIssueIndex(0);
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setShowResult(true);
    }, 400);
  };

  const handleIssueChange = (idx: number) => {
    setSelectedIssueIndex(idx);
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 300);
  };

  // Get matching Lucide icon helper
  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case "Factory":
        return <Factory className="w-5 h-5 text-brand-gold-light" />;
      case "Hospital":
        return <Hospital className="w-5 h-5 text-brand-gold-light" />;
      case "Vote":
        return <Vote className="w-5 h-5 text-brand-gold-light" />;
      case "Truck":
        return <Truck className="w-5 h-5 text-brand-gold-light" />;
      case "GraduationCap":
        return <GraduationCap className="w-5 h-5 text-brand-gold-light" />;
      case "Rocket":
        return <Rocket className="w-5 h-5 text-brand-gold-light" />;
      default:
        return <HelpCircle className="w-5 h-5 text-gray-400" />;
    }
  };

  const currentChallenge = selectedIndustry.challenges[selectedIssueIndex] || selectedIndustry.challenges[0];

  // Map industry to matching Service Categories
  const getRecommendedServices = (indId: string) => {
    switch (indId) {
      case "manufacturing":
        return ["AI Industrial Surveillance", "Computer AMC Services", "Enterprise Networking", "Firewall Management"];
      case "healthcare":
        return ["Cyber Security Consulting", "Vulnerability Assessment (VAPT)", "Database Encryption & Backups", "API Integrations"];
      case "political":
        return ["Political Campaign Consulting", "Campaign War Room Solutions", "Booth Management Platforms", "AI Search Optimization (GEO)"];
      case "logistics":
        return ["CCTV Camera Solutions", "Custom Software Development", "Enterprise Networking", "Workflow Automation"];
      case "education":
        return ["Enterprise Networking", "CCTV Camera Solutions", "HRMS/Student Portals", "Computer AMC Services"];
      case "startups":
        return ["Custom Software Development", "Website Design & Development", "AI Search Optimization (GEO)", "Search Engine Optimization (SEO)"];
      default:
        return ["Managed IT Services", "Cyber Security Consulting", "Digital Marketing"];
    }
  };

  const handleInquirySubmit = () => {
    const contextText = `Industry: ${selectedIndustry.name}, Primary Bottleneck: ${currentChallenge}. Goals: ${customGoal || "Enterprise technology modernization and security hardening"}`;
    onPlanSelected(selectedIndustry.name, contextText);
  };

  return (
    <div className="w-full bg-[#0a0a0a] rounded-sm border border-white/5 p-6 sm:p-8">
      <div className="max-w-3xl mx-auto text-center mb-8">
        <span className="inline-flex items-center px-3 py-1 rounded-sm text-xs font-mono font-medium bg-white/5 text-brand-gold border border-white/10 mb-3">
          <Sparkles className="w-3.5 h-3.5 mr-1.5 text-brand-gold animate-spin" />
          Interactive Consulting Tool
        </span>
        <h3 className="font-display font-light text-2xl sm:text-3xl text-white tracking-tight">
          Select Your Profile to Formulate a Solution
        </h3>
        <p className="mt-2 text-gray-400 text-sm max-w-xl mx-auto font-sans">
          Every organization has unique compliance, networking, and security parameters. Use this interactive tool to preview our tailored engagement approach.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Input Columns */}
        <div className="lg:col-span-5 space-y-6">
          {/* Step 1: Industry */}
          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-500 mb-3">
              01. Choose Your Sector
            </label>
            <div className="grid grid-cols-2 gap-2.5">
              {INDUSTRIES_WE_SERVE.map((ind) => (
                <button
                  key={ind.id}
                  onClick={() => handleIndustryChange(ind.id)}
                  className={`flex flex-col items-start p-3 rounded-sm border text-left transition-all cursor-pointer ${
                    selectedIndustryId === ind.id
                      ? "border-brand-gold bg-white/5 ring-1 ring-brand-gold/30"
                      : "border-white/5 bg-black/30 hover:border-white/10 hover:bg-white/[0.02]"
                  }`}
                >
                  <div className="p-1.5 bg-white/5 rounded-sm mb-2">
                    {getIndustryIcon(ind.iconName)}
                  </div>
                  <span className="font-display font-semibold text-xs text-white truncate w-full">
                    {ind.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Bottleneck Selection */}
          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-500 mb-3">
              02. Identify Your Primary Bottleneck
            </label>
            <div className="space-y-2">
              {selectedIndustry.challenges.map((challenge, idx) => (
                <button
                  key={idx}
                  onClick={() => handleIssueChange(idx)}
                  className={`w-full flex items-center p-3 rounded-sm border text-left text-xs transition-all cursor-pointer ${
                    selectedIssueIndex === idx
                      ? "border-brand-gold-dark bg-brand-gold text-black font-semibold shadow-md border"
                      : "border-white/5 bg-black/30 text-gray-400 hover:border-white/10 hover:bg-white/[0.02]"
                  }`}
                >
                  <span className="font-mono text-[10px] mr-3 opacity-60">
                    Challenge {idx + 1}
                  </span>
                  <span className="flex-1 line-clamp-2">{challenge}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Optional: custom detail */}
          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-500 mb-2">
              03. Custom Objective (Optional)
            </label>
            <input
              type="text"
              value={customGoal}
              onChange={(e) => setCustomGoal(e.target.value)}
              placeholder="e.g. Expand warehouse by 20,000 sq ft, deploy network firewalls"
              className="w-full px-3.5 py-2.5 rounded-sm border border-white/5 text-xs focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all bg-black/30 text-white placeholder-gray-600"
            />
          </div>
        </div>

        {/* Results Dynamic Panel */}
        <div className="lg:col-span-7 bg-[#0f0f0f] rounded-sm p-6 border border-white/5 relative min-h-[420px] flex flex-col justify-between">
          {isGenerating ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 backdrop-blur-xs rounded-sm z-10">
              <RefreshCw className="w-8 h-8 text-brand-gold animate-spin mb-3" />
              <p className="font-mono text-xs text-gray-500">Formulating Tailored Blueprint...</p>
            </div>
          ) : null}

          {/* Proposal Layout */}
          <div className="space-y-5">
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <div>
                <span className="text-[9px] font-mono tracking-widest uppercase text-brand-gold-light font-bold block">
                  Sidigiqor Response Plan
                </span>
                <h4 className="font-display font-light text-lg text-white mt-0.5">
                  Strategic Framework for {selectedIndustry.name}
                </h4>
              </div>
              <div className="w-8 h-8 bg-white/5 rounded-sm flex items-center justify-center text-brand-gold-light border border-white/10 text-xs font-mono font-bold">
                PRO
              </div>
            </div>

            {/* Analysis */}
            <div className="space-y-1 bg-black/20 p-3.5 rounded-sm border border-white/5 shadow-2xs">
              <span className="text-[10px] font-mono text-brand-gold-light font-semibold uppercase tracking-wider block">
                Target Issue Analysis:
              </span>
              <p className="text-xs text-gray-400 leading-relaxed italic">
                &ldquo;{currentChallenge}&rdquo;
              </p>
            </div>

            {/* Structured Solution Details */}
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-brand-gold-light font-semibold uppercase tracking-wider block">
                Recommended Solution Strategy:
              </span>
              <p className="text-xs text-gray-300 leading-relaxed font-sans">
                {selectedIndustry.solution}
              </p>
            </div>

            {/* Recommended Capabilities List */}
            <div>
              <span className="text-[10px] font-mono text-brand-gold-light font-semibold uppercase tracking-wider block mb-2">
                Required Technology Capabilities:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {getRecommendedServices(selectedIndustryId).map((srv, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-2.5 py-1 rounded-sm text-[10px] font-mono font-medium bg-white/5 text-gray-300 border border-white/10"
                  >
                    <CheckCircle2 className="w-3 h-3 text-brand-gold-light mr-1" />
                    {srv}
                  </span>
                ))}
              </div>
            </div>

            {/* Expected Operational Milestones */}
            <div className="border-t border-white/5 pt-4 grid grid-cols-2 gap-3">
              <div className="bg-black/20 p-2.5 rounded-sm border border-white/5">
                <span className="text-[9px] font-mono text-gray-500 uppercase font-medium block">
                  Immediate Focus (1-2 Weeks)
                </span>
                <span className="text-xs font-semibold text-white block mt-0.5 font-sans">
                  Discover & Assess Audit
                </span>
                <span className="text-[10px] text-gray-400 block font-sans">
                  Gap report & network maps
                </span>
              </div>
              <div className="bg-black/20 p-2.5 rounded-sm border border-white/5">
                <span className="text-[9px] font-mono text-gray-500 uppercase font-medium block">
                  Implementation (3-6 Weeks)
                </span>
                <span className="text-xs font-semibold text-white block mt-0.5 font-sans">
                  Secure Deployment
                </span>
                <span className="text-[10px] text-gray-400 block font-sans">
                  Perimeter hardening & code deployment
                </span>
              </div>
            </div>
          </div>

          {/* Action Trigger */}
          <div className="mt-6 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-[10px] font-mono text-gray-500 leading-tight text-center sm:text-left">
              India: +91 99115 39101 | UAE: +971 56 240 9703
            </span>
            <button
              onClick={handleInquirySubmit}
              className="w-full sm:w-auto bg-brand-gold text-black hover:bg-brand-gold-light px-4.5 py-2.5 rounded-sm text-xs font-bold tracking-widest uppercase inline-flex items-center justify-center transition-all border border-brand-gold-dark group cursor-pointer"
            >
              Apply Selected Roadmap
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
