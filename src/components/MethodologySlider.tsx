import React, { useState } from "react";
import {
  FileText,
  ClipboardList,
  Compass,
  Code,
  ShieldCheck,
  LifeBuoy,
  ArrowRight,
  ArrowLeft,
  CheckCircle2
} from "lucide-react";
import { METHODOLOGY_STAGES } from "../data";

export default function MethodologySlider() {
  const [activeStepIdx, setActiveStepIdx] = useState<number>(0);

  const activeStage = METHODOLOGY_STAGES[activeStepIdx];

  const handleNext = () => {
    setActiveStepIdx((prev) => (prev + 1) % METHODOLOGY_STAGES.length);
  };

  const handlePrev = () => {
    setActiveStepIdx((prev) => (prev - 1 + METHODOLOGY_STAGES.length) % METHODOLOGY_STAGES.length);
  };

  // Maps step digits to beautiful Lucide icons representing the scope
  const getStepIcon = (stepStr: string, active: boolean) => {
    const className = `w-7 h-7 transition-all ${
      active ? "text-brand-gold-light" : "text-gray-500 group-hover:text-white"
    }`;
    switch (stepStr) {
      case "01":
        return <ClipboardList className={className} />;
      case "02":
        return <FileText className={className} />;
      case "03":
        return <Compass className={className} />;
      case "04":
        return <Code className={className} />;
      case "05":
        return <ShieldCheck className={className} />;
      case "06":
        return <LifeBuoy className={className} />;
      default:
        return <Compass className={className} />;
    }
  };

  return (
    <div className="w-full bg-[#0a0a0a] rounded-sm border border-white/5 p-6 sm:p-8">
      {/* Horizontal Steps Navigator */}
      <div className="hidden sm:flex items-center justify-between border-b border-white/5 pb-6 mb-8 overflow-x-auto gap-4">
        {METHODOLOGY_STAGES.map((stage, idx) => {
          const isActive = idx === activeStepIdx;
          return (
            <button
              key={stage.step}
              onClick={() => setActiveStepIdx(idx)}
              className="flex-1 flex items-center space-x-3 text-left pb-4 relative group cursor-pointer"
            >
              {/* Bottom active line tracker */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-[2px] transition-all duration-300 ${
                  isActive ? "bg-brand-gold" : "bg-transparent group-hover:bg-white/10"
                }`}
              />

              {/* Number bubble */}
              <div
                className={`w-12 h-12 rounded-sm flex items-center justify-center transition-all border ${
                  isActive
                    ? "bg-white/10 border-brand-gold text-brand-gold-light shadow-lg"
                    : "bg-white/5 border-white/5 text-gray-400 group-hover:border-white/10 group-hover:bg-white/10"
                }`}
              >
                {getStepIcon(stage.step, isActive)}
              </div>

              <div>
                <span className="block text-[10px] font-mono font-bold text-gray-500">
                  PHASE {stage.step}
                </span>
                <span
                  className={`block font-display text-xs font-bold transition-colors ${
                    isActive ? "text-white" : "text-gray-500 group-hover:text-gray-300"
                  }`}
                >
                  {stage.title}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Mobile Steps Pills */}
      <div className="sm:hidden flex items-center justify-between gap-1 border-b border-white/5 pb-4 mb-6 overflow-x-auto">
        {METHODOLOGY_STAGES.map((stage, idx) => (
          <button
            key={stage.step}
            onClick={() => setActiveStepIdx(idx)}
            className={`px-3 py-1.5 rounded-sm text-xs font-mono font-medium shrink-0 cursor-pointer ${
              idx === activeStepIdx
                ? "bg-brand-gold text-black font-bold"
                : "bg-white/5 text-gray-400 border border-white/5"
            }`}
          >
            {stage.step} {stage.title}
          </button>
        ))}
      </div>

      {/* Detail Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center min-h-[290px]">
        {/* Left Col: Core numbers and text */}
        <div className="md:col-span-7 space-y-4">
          <div className="flex items-center space-x-3">
            <span className="font-mono text-5xl font-extrabold text-white/[0.03] tracking-tight select-none">
              {activeStage.step}
            </span>
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-gold-light block">
                Consulting Lifecycle
              </span>
              <h4 className="font-display font-light text-xl sm:text-2xl text-white">
                {activeStage.title} Phase
              </h4>
            </div>
          </div>

          <p className="text-gray-300 text-xs leading-relaxed font-sans font-medium">
            {activeStage.subtitle}
          </p>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-sans">
            {activeStage.description}
          </p>

          {/* Active Deliverable showcase */}
          <div className="bg-white/[0.01] p-4 rounded-sm border border-white/5 max-w-xl">
            <span className="text-[9px] font-mono uppercase tracking-wider text-gray-500 font-bold block">
              Core Deliverable:
            </span>
            <span className="font-display font-light text-sm text-white block mt-0.5">
              {activeStage.deliverables}
            </span>
          </div>
        </div>

        {/* Right Col: Deliverable details checkmarks */}
        <div className="md:col-span-5 bg-[#0f0f0f] text-white rounded-sm p-6 border border-white/5 space-y-4 h-full flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-brand-gold-light font-bold uppercase block mb-3">
              Phase {activeStage.step} Focus Points
            </span>
            <ul className="space-y-3">
              {activeStage.keyPoints.map((point, idx) => (
                <li key={idx} className="flex items-start text-xs font-sans">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold-light shrink-0 mr-3 mt-0.5" />
                  <span className="text-gray-300 leading-normal">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav arrows */}
          <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-4">
            <span className="text-[10px] font-mono text-gray-500">
              Step {activeStepIdx + 1} of {METHODOLOGY_STAGES.length}
            </span>
            <div className="flex space-x-2">
              <button
                onClick={handlePrev}
                className="p-2 rounded-sm bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-gray-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Previous step"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-sm bg-brand-gold hover:bg-brand-gold-light text-black font-bold transition-colors shadow-md cursor-pointer border border-brand-gold"
                aria-label="Next step"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
