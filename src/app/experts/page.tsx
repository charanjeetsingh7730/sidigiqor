"use client";

import React from "react";
import { MapPin } from "lucide-react";
import { TEAM_MEMBERS } from "../../data";

export default function ExpertsPage() {
  // Filter out Executive Leadership to show technical domain experts
  const expertDepartments = [
    {
      title: "Engineering & Technology Experts",
      filter: (m: any) => m.department === "Engineering & Technology"
    },
    {
      title: "Cyber Security & AI Consultants",
      filter: (m: any) => m.department === "Cyber Security & AI Consulting"
    },
    {
      title: "Digital Engineering Specialists",
      filter: (m: any) => m.department === "Digital Engineering"
    },
    {
      title: "International Growth & Advisory Partners",
      filter: (m: any) => m.department === "International Business & Growth"
    },
    {
      title: "Political Campaign Analytics Team",
      filter: (m: any) => m.department === "Political Consulting Division"
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="border-b border-white/5 pb-6 mb-12">
          <span className="text-xs text-brand-gold font-mono tracking-widest uppercase font-bold">
            Technical Brain Trust
          </span>
          <h1 className="font-display font-light text-3xl sm:text-5xl text-white uppercase mt-1">
            Meet the Experts
          </h1>
          <p className="mt-2 text-gray-500 text-sm max-w-xl font-medium">
            Sidigiqor's certified offensive security experts, AI scientists, and software architects delivering resilient system implementations.
          </p>
        </div>

        <div className="space-y-16 pb-16">
          {expertDepartments.map((dept, index) => {
            const members = TEAM_MEMBERS.filter(dept.filter);
            if (members.length === 0) return null;

            return (
              <div key={index} className="space-y-6">
                <div className="border-b border-white/5 pb-3">
                  <h2 className="font-display font-medium text-lg sm:text-xl text-white uppercase">
                    {dept.title}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {members.map((member, idx) => (
                    <div 
                      key={idx} 
                      className="bg-[#0f0f0f] border border-white/5 hover:border-brand-gold/30 hover:bg-[#141414] rounded-sm p-6 flex flex-col justify-between transition-all duration-300 relative group shadow-xl"
                    >
                      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-brand-gold/0 via-brand-gold/30 to-brand-gold/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      
                      <div className="space-y-4">
                        <div className="flex items-start justify-between border-b border-white/5 pb-3">
                          <div>
                            <h4 className="font-display font-medium text-base text-white group-hover:text-brand-gold transition-colors uppercase">
                              {member.name}
                            </h4>
                            <p className="text-xs text-brand-gold font-mono font-bold mt-1">
                              {member.role}
                            </p>
                          </div>
                          <span className="text-[9px] font-mono text-gray-500 font-bold uppercase tracking-wider bg-white/5 px-2 py-0.5 rounded-xs">
                            ACTIVE
                          </span>
                        </div>
                        
                        {member.bio && (
                          <p className="text-xs text-gray-400 leading-relaxed font-medium font-sans italic">
                            &ldquo;{member.bio}&rdquo;
                          </p>
                        )}
                      </div>

                      <div className="flex items-center gap-2 pt-6 mt-4 border-t border-white/5 text-[9px] font-mono text-gray-500 font-bold uppercase">
                        <MapPin className="w-3 h-3 text-brand-gold/60" />
                        <span>Certified Enterprise Advisory</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
