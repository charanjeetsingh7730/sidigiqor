import React from "react";
import { Target, Users, CheckCircle2, Building2, Shield, Award } from "lucide-react";
import { 
  CO_FOUNDER, 
  GENERAL_METRICS, 
  CORE_VALUES, 
  ETHICS_COMMITMENTS 
} from "../data";

interface AboutSectionProps {
  showFullContent?: boolean;
  onReadMore?: () => void;
}

export default function AboutSection({
  showFullContent = false,
  onReadMore
}: AboutSectionProps) {
  return (
    <section id="overview" className="py-12 bg-[#0a0a0a] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Title Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-10">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-[1px] w-8 bg-brand-gold"></span>
              <span className="text-xs text-brand-gold font-bold tracking-[0.2em] uppercase">01. Corporate Overview</span>
            </div>
            <h2 className="font-display font-light text-3xl sm:text-4xl text-white tracking-tight leading-none uppercase">
              About <span className="font-medium italic text-brand-gold">Sidigiqor</span> Technologies.
            </h2>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed font-medium">
              Headquartered in Panchkula, Haryana, India, Sidigiqor is a premier multidisciplinary enterprise consulting firm. We represent a new paradigm in global technology service execution, merging tactical on-the-ground support with highly specialized cloud, VAPT cyber security, and machine learning software engineering.
            </p>
            
            {/* Highlight Box */}
            <div className="mt-6 border-l-2 border-brand-gold bg-[#0f0f0f] pl-4 py-3 pr-2 rounded-sm italic text-xs sm:text-sm text-gray-300 font-medium border-r border-y border-white/5 shadow-xs">
              &ldquo;Rather than operating as a conventional IT services provider, we position ourselves as a long-term technology consulting partner, helping organizations design, implement, secure, and optimize technology ecosystems.&rdquo;
            </div>

            {!showFullContent && onReadMore && (
              <div className="pt-6">
                <button
                  onClick={onReadMore}
                  className="bg-brand-gold hover:bg-brand-gold-dark text-black px-6 py-2.5 rounded-sm text-xs font-bold tracking-widest uppercase inline-flex items-center justify-center transition-all cursor-pointer shadow-md"
                >
                  Read More
                </button>
              </div>
            )}
          </div>

          <div className="lg:col-span-7 space-y-6 text-gray-400 text-xs sm:text-sm leading-relaxed">
            <p>
              In today&apos;s highly competitive and security-sensitive digital economy, enterprises are constantly challenged to accelerate development, secure multi-cloud perimeters, optimize complex networking topologies, and extract value from data. Sidigiqor was founded to bridge the gap between high-level advisory and hands-on, high-caliber implementation. We operate with a core belief that secure digital perimeters and robust network infrastructure are not optional extras, but fundamental pillars of a resilient, sustainable business strategy.
            </p>
            <p>
              Whether designing a custom zero-trust microsegmentation architecture for a manufacturing group, auditing a banking portal for deep VAPT compliance, compiling bespoke generative AI models, or building specialized offline-first campaign management applications for our Political Consulting Division, Sidigiqor engineers solutions that are meticulously designed, carefully optimized, and backed by institutional-grade support.
            </p>

            {/* General Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {GENERAL_METRICS.map((metric, idx) => (
                <div key={idx} className="bg-[#0f0f0f] hover:bg-white/[0.02] transition-colors p-4 rounded-sm border border-white/5 shadow-xs">
                  <span className="font-display font-light text-2xl text-white block">
                    {metric.value}
                  </span>
                  <span className="text-[10px] font-mono text-brand-gold font-bold block mt-1 uppercase tracking-wider">
                    {metric.label}
                  </span>
                  <span className="text-[10px] text-gray-500 block mt-0.5 leading-snug">
                    {metric.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Conditionally show full content or only show on dedicated about page */}
        {(showFullContent || !onReadMore) && (
          <>
            {/* Leaders Quote block */}
            <div className="bg-[#0f0f0f] rounded-sm border border-white/5 p-6 sm:p-8 mb-16 hover:bg-white/[0.01] transition-colors shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-8 space-y-4">
                  <span className="text-[10px] font-mono tracking-widest text-brand-gold font-bold uppercase block">
                    LEADERSHIP PHILOSOPHY
                  </span>
                  <blockquote className="font-display font-light text-lg sm:text-xl md:text-2xl text-white tracking-tight leading-snug uppercase">
                    &ldquo;Technology Should <span className="font-medium italic text-brand-gold">Simplify</span> Business, Not Complicate It.&rdquo;
                  </blockquote>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-2xl font-medium">
                    Every client engagement begins with understanding the business objective, identifying operational challenges, assessing existing environments, and designing solutions that align with long-term strategic goals. This approach enables us to deliver technology that is not only technically sound but also commercially valuable.
                  </p>
                  <div>
                    <span className="font-display font-bold text-sm text-white block uppercase">
                      {CO_FOUNDER}
                    </span>
                    <span className="text-[10px] font-mono text-gray-500 font-bold block uppercase mt-0.5">
                      Co-Founder, Sidigiqor Technologies
                    </span>
                  </div>
                </div>

                {/* Side Stats Info Table */}
                <div className="md:col-span-4 bg-black/40 text-gray-300 rounded-sm p-5 border border-white/5 space-y-4">
                  <span className="text-[9px] font-mono tracking-widest text-brand-gold font-bold uppercase block border-b border-white/5 pb-2">
                    Corporate Highlights
                  </span>
                  <div className="space-y-2.5 text-[11px] font-sans">
                    <div className="flex justify-between">
                      <span className="text-gray-500 font-medium">Headquarters</span>
                      <span className="text-white text-right font-semibold">Panchkula, Haryana</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500 font-medium">Founders Scope</span>
                      <span className="text-white text-right font-semibold">Consulting & AI Dev</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500 font-medium">Legal Status</span>
                      <span className="text-white text-right font-semibold">OPC Private Limited</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500 font-medium">Delivery</span>
                      <span className="text-white text-right font-semibold">On-site / Remote / Hybrid</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission & Vision Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-[#0f0f0f] hover:bg-white/[0.01] transition-colors rounded-sm border border-white/5 p-6 sm:p-8 space-y-3.5 shadow-xl">
                <div className="p-3 bg-brand-gold/10 border border-brand-gold/20 text-brand-gold rounded-sm inline-block">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="font-display font-light text-lg text-white uppercase">
                  Our Corporate Mission
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-medium">
                  <strong className="text-white">Simplifying Technology. Securing Businesses. Enabling Growth.</strong> At Sidigiqor, our mission is to help businesses simplify technology management through consulting-led solutions that improve security, scalability, efficiency, and innovation.
                </p>
                <ul className="space-y-2 pt-2 text-xs text-gray-400 font-medium">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-2"></span>
                    Understand business challenges before selecting technology.
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-2"></span>
                    Deliver measurable business value through practical innovation.
                  </li>
                </ul>
              </div>

              <div className="bg-[#0f0f0f] hover:bg-white/[0.01] transition-colors rounded-sm border border-white/5 p-6 sm:p-8 space-y-3.5 shadow-xl">
                <div className="p-3 bg-brand-gold/10 border border-brand-gold/20 text-brand-gold rounded-sm inline-block">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="font-display font-light text-lg text-white uppercase">
                  Our Corporate Vision
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-medium">
                  <strong className="text-white">Building a Global Technology Consulting Organization from India.</strong> We believe that Indian engineering talent, combined with disciplined consulting and customer-centric execution, can compete on the global stage. Our ambition is to serve organizations across India, the Gulf, Europe, North America, and Asia-Pacific.
                </p>
                <ul className="space-y-2 pt-2 text-xs text-gray-400 font-medium">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-2"></span>
                    Become trusted advisors who understand long-term priorities.
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-2"></span>
                    Embed rigorous cybersecurity standards by default.
                  </li>
                </ul>
              </div>
            </div>

            {/* Ethics and Core Values Expandable Grid */}
            <div className="space-y-6">
              <div className="text-center max-w-xl mx-auto">
                <h3 className="font-display font-light text-xl sm:text-2xl text-white uppercase">
                  Values & Business Ethics
                </h3>
                <p className="mt-1.5 text-gray-500 text-xs sm:text-sm font-medium">
                  Sidigiqor operates with confidentiality, transparency, and deep accountability in all professional client relations.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {CORE_VALUES.map((val, idx) => (
                  <div key={idx} className="bg-[#0f0f0f] hover:bg-white/[0.01] p-5 rounded-sm border border-white/5 shadow-xl transition-colors">
                    <span className="text-xs font-bold font-mono text-brand-gold">0{idx + 1}</span>
                    <h4 className="font-display font-bold text-sm text-white mt-1 uppercase">
                      {val.title}
                    </h4>
                    <p className="text-gray-400 text-xs mt-2 leading-relaxed font-sans font-medium">
                      {val.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Ethics Commitments Panel */}
              <div className="bg-[#0f0f0f] text-gray-300 rounded-sm p-6 border border-white/5 shadow-xl hover:bg-white/[0.01] transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono tracking-widest text-brand-gold font-bold uppercase">
                      TRUSTED PARTNERSHIP
                    </span>
                    <h4 className="font-display font-light text-base text-white uppercase">
                      Our Ethical Compliance Assurances
                    </h4>
                    <p className="text-xs text-gray-500 max-w-xl font-medium">
                      Technology consulting requires organizations to place significant trust in their consulting partners. We protect client databases, intellectual property, and network access under strict protocols.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 shrink-0">
                    {ETHICS_COMMITMENTS.slice(0, 4).map((cmt, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-gray-300 text-xs font-medium">
                        <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                        <span>{cmt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
