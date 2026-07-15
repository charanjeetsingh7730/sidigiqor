import React from "react";
import { MapPin } from "lucide-react";
import { TEAM_MEMBERS } from "../data";

interface LeadershipSectionProps {
  showMeetTeamButton?: boolean;
  onMeetTeam?: () => void;
}

export default function LeadershipSection({
  showMeetTeamButton = false,
  onMeetTeam
}: LeadershipSectionProps) {
  return (
    <section id="team" className="py-12 bg-[#0a0a0a] border-b border-white/5 relative overflow-hidden">
      {/* Decorative subtle background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-100 pointer-events-none"></div>
      
      {/* Radial highlight spot */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-radial from-brand-gold/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center mb-10 max-w-3xl mx-auto text-center">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-[1px] w-8 bg-brand-gold"></span>
            <span className="text-xs text-brand-gold font-bold tracking-[0.2em] uppercase">01b. Our Corporate Brain Trust</span>
          </div>
          <h2 className="font-display font-light text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase leading-tight">
            MEET THE <span className="font-medium italic text-brand-gold">EXPERTS</span> & ADVISORS
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base max-w-xl mx-auto font-medium leading-relaxed">
            Our multidisciplinary brain trust brings together elite cybersecurity consultants, artificial intelligence developers, digital transformation strategists, and seasoned campaign analysts.
          </p>
          
          {showMeetTeamButton && onMeetTeam && (
            <div className="pt-6">
              <button
                onClick={onMeetTeam}
                className="bg-brand-gold hover:bg-brand-gold-dark text-black px-6 py-2.5 rounded-sm text-xs font-bold tracking-widest uppercase inline-flex items-center justify-center transition-all cursor-pointer shadow-md"
              >
                Meet Experts
              </button>
            </div>
          )}
        </div>

        {/* Redesigned Departmental Segments */}
        <div className="space-y-16">
          {[
            {
              id: "exec",
              title: "Executive Leadership",
              tagline: "Corporate governance and strategic expansion steering global operations.",
              match: (m: any) => m.department === "Executive Leadership"
            },
            {
              id: "growth",
              title: "International Business & Growth",
              tagline: "Drives international business expansion, strategic partnerships, and global client acquisition.",
              match: (m: any) => m.department === "International Business & Growth"
            },
            {
              id: "eng",
              title: "Engineering & Technology",
              tagline: "Pioneering machine learning developments, predictive systems, and institutional-grade cloud systems.",
              match: (m: any) => m.department === "Engineering & Technology"
            },
            {
              id: "sec",
              title: "Cyber Security & AI Consulting",
              tagline: "Provides strategic cybersecurity firewalls, offensive security audits, VAPT, and smart surveillance.",
              match: (m: any) => m.department === "Cyber Security & AI Consulting"
            },
            {
              id: "digi",
              title: "Digital Engineering",
              tagline: "Crafting scalable custom enterprise applications, portals, CRM systems, and digital architectures.",
              match: (m: any) => m.department === "Digital Engineering"
            },
            {
              id: "ops",
              title: "Operations & Customer Success",
              tagline: "Ensuring flawless operational scaling, continuous relationship management, and generative search visibility.",
              match: (m: any) => m.department === "Customer Success" || m.department === "Human Resources" || m.department === "Digital Marketing"
            },
            {
              id: "pol",
              title: "Political Consulting Division",
              tagline: "Structuring custom campaign management war rooms, Booth Android applications, and strategic analytics.",
              match: (m: any) => m.department === "Political Consulting Division"
            }
          ].map((dept, deptIdx) => {
            const members = TEAM_MEMBERS.filter(dept.match);
            if (members.length === 0) return null;

            return (
              <div key={dept.id} className="space-y-6">
                {/* Department Header */}
                <div className="border-b border-white/5 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-brand-gold font-bold">0{deptIdx + 1} // DEPT</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
                    </div>
                    <h3 className="font-display font-medium text-lg sm:text-xl text-white tracking-wide uppercase mt-1">
                      {dept.title}
                    </h3>
                  </div>
                  <p className="text-xs text-gray-500 max-w-md font-medium md:text-right">
                    {dept.tagline}
                  </p>
                </div>

                {/* Department Grid */}
                <div className={`grid grid-cols-1 ${members.length === 1 ? "md:grid-cols-1 max-w-2xl" : members.length === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"} gap-6`}>
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
                        <span>Global Operations Portfolio</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
