import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  ChevronDown,
  ChevronUp,
  FileCheck,
  Send,
  X,
  Sparkles,
  Users
} from "lucide-react";

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  experience: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}

const JOB_POSITIONS: JobPosition[] = [
  {
    id: "vapt-security-engineer",
    title: "VAPT Cyber Security Engineer",
    department: "Enterprise Cybersecurity",
    location: "Panchkula, India (Hybrid) & Kuwait City",
    type: "Full-Time",
    salary: "INR 12,00,000 - 18,00,000 / Year",
    experience: "3 - 5 Years",
    overview: "We are seeking a disciplined Cyber Security Engineer with deep expertise in Vulnerability Assessment and Penetration Testing (VAPT) to lead security audits, white-hat penetration testing simulations, and firewall configurations for corporate clients across India and GCC regions.",
    responsibilities: [
      "Conduct comprehensive vulnerability assessments and penetration testing (VAPT) across client web applications, database layers, and corporate network gateways.",
      "Simulate sophisticated real-world security breaches (red-team attacks) targeting ERP frameworks and remote VPN structures.",
      "Draft detailed, prioritized vulnerability classification summaries and remediation roadmaps for client executive teams.",
      "Audit next-generation firewall rulesets, SD-WAN routing settings, and secure remote gateways.",
      "Conduct technical security compliance mapping (ISO 27001, GDPR, regional guidelines)."
    ],
    requirements: [
      "Proven corporate experience as an ethical hacker, pentester, or security engineer.",
      "Deep familiarity with security tooling (Burp Suite, Metasploit, Nmap, Wireshark, Nessus).",
      "Solid certifications in cyber defense (e.g., CEH, OSCP, CISSP, CompTIA Security+).",
      "Working knowledge of secure coding rules, next-gen firewalls (Fortinet, Sophos), and network engineering.",
      "Excellent technical writing skills to present complex vulnerabilities in clear business-remedy steps."
    ],
    benefits: [
      "Competitive base remuneration with performance-linked scaling bonuses.",
      "Opportunities for strategic on-site client assignments in Kuwait and Dubai towers.",
      "Comprehensive medical insurance and performance rewards.",
      "Generous support budget for premium cybersecurity certifications (OSCP, CISSP)."
    ]
  },
  {
    id: "full-stack-react-engineer",
    title: "Lead React & Node.js Developer (Digital Engineering)",
    department: "Global Digital Engineering",
    location: "Panchkula Tricity Office",
    type: "Full-Time / On-site",
    salary: "INR 10,00,000 - 15,00,000 / Year",
    experience: "4+ Years",
    overview: "Seeking a brilliant, design-focused Full-Stack TypeScript engineer capable of developing stunning, secure, and blazing-fast custom web applications, multi-tenant portal platforms, and complex API pipelines using React, Node.js, and Tailwind CSS.",
    responsibilities: [
      "Lead the development of custom client web software systems, CRM tools, HRMS applications, and secure web portals.",
      "Write clean, modular, and highly performant TypeScript code following modular development conventions.",
      "Design efficient PostgreSQL schemas, database index setups, and secure API backends (RESTful & GraphQL).",
      "Collaborate with visual designers to integrate smooth animations, fluid custom typography, and responsive layouts.",
      "Configure fast server-side routing, automated builds, and deployment workflows."
    ],
    requirements: [
      "4+ years of professional full-stack development experience, specifically within React, TypeScript, and Node.js.",
      "Strong command over Tailwind CSS, responsive prefixes, and animation systems (such as motion/react).",
      "Proven command over database modeling (PostgreSQL, MySQL, Drizzle, Prisma, or Firestore).",
      "Strong understanding of web security fundamentals (OAuth setups, JWT tokens, CSRF defense).",
      "Ability to write well-documented, clean APIs and manage code via strict Git versioning workflows."
    ],
    benefits: [
      "Premium workspace located in Panchkula HQ.",
      "Modern development workstations and ergonomic support.",
      "Annual performance hikes, flexible leaves, and paid team outings.",
      "Collaborative culture with zero micro-management."
    ]
  },
  {
    id: "ai-surveillance-field-engineer",
    title: "AI Surveillance & Systems Field Engineer",
    department: "Advanced Surveillance Divisions",
    location: "Panchkula, Tricity Regional Sites",
    type: "Full-Time / Field Execution",
    salary: "INR 6,00,000 - 9,00,000 / Year",
    experience: "2+ Years",
    overview: "We are seeking an active, practical Systems Field Engineer to manage the planning, wiring, camera placement calibration, physical deployment, and software-level analytics setup of physical AI Surveillance and Enterprise CCTV setups across industrial plants and warehouse corridors.",
    responsibilities: [
      "Plan on-site cabling routes, calculate camera lens focal ranges, and determine strategic camera placements to eliminate blind spots.",
      "Supervise and execute structured fiber/PoE cabling and professional physical installations of IP dome/bullet cameras.",
      "Configure local Network Video Recorders (NVR), RAID arrays, and Video Management Software (Milestone, Nx Witness).",
      "Calibrate edge neural networks for line crossing, perimeter intrusion, object detection, and license plate recognition.",
      "Transition completed security loops to client operators, conducting structured training sessions."
    ],
    requirements: [
      "Proven hands-on experience in corporate CCTV installations, IP camera networking, and fiber optical ring configurations.",
      "Excellent understanding of IP addressing, PoE subnets, network switches, and local video storage setups.",
      "Comfort working on-site in large manufacturing plants, cold warehousing units, and open perimeters.",
      "Basic technical literacy with computer video tools and video analytics configuration interfaces.",
      "Valid driver coordinates to move efficiently between Tricity regional customer facilities."
    ],
    benefits: [
      "Dedicated company vehicle coordinates for on-site travel allocations.",
      "Complete field safety equipment and industrial testing toolkits provided.",
      "Overtime allowances, AMC support bonuses, and comprehensive health insurance.",
      "Technical mentorship in emerging AI vision models and command center console design."
    ]
  },
  {
    id: "seo-geo-analytics-specialist",
    title: "SEO & GEO Growth Analytics Specialist",
    department: "Digital Growth & Marketing",
    location: "Remote / Kuwait Strategic Link",
    type: "Full-Time / Remote",
    salary: "INR 8,00,000 - 12,00,000 / Year",
    experience: "3+ Years",
    overview: "We are seeking a highly analytical SEO & Generative Engine Optimization (GEO) strategist to lead organic visibility, technical site indexing, search-pack rankings, and LLM synthesis visibility campaigns for our global B2B clients.",
    responsibilities: [
      "Perform technical SEO audits, site speed re-engineering, structured schema deployments, and semantic layout optimization.",
      "Execute Generative Engine Optimization (GEO) processes—re-structuring documentation, citations, and data to rank inside AI tool syntheses.",
      "Analyze search engine algorithms and LLM indexing behavior to optimize content relevance scores.",
      "Monitor, analyze, and report on organic traffic loops, conversion rate optimization (CRO) metrics, and keyword dominance.",
      "Construct premium technical blogs and thought-leadership profiles for corporate leadership panels."
    ],
    requirements: [
      "Proven record in driving substantial organic visibility increases for complex B2B niches or technical software.",
      "In-depth familiarity with LLM systems (ChatGPT, Gemini, Perplexity) and how they compile synthesized responses.",
      "Strong skills in Google Search Console, Google Analytics, Ahrefs, SEMrush, and technical schema structuring.",
      "Familiarity with HTML, CSS, page-speed metrics, and semantic keyword matching models.",
      "Outstanding analytical and data extraction skills to track return-on-investment parameters."
    ],
    benefits: [
      "100% remote working layout with flexible working schedules.",
      "Direct integration with high-budget corporate digital expansion frameworks.",
      "Performance incentives based on organic conversion rate targets.",
      "Collaborative exposure with international consulting consultants in Dubai and New York."
    ]
  }
];

interface CareersPageProps {
  onConsult: () => void;
}

export default function CareersPage({ onConsult }: CareersPageProps) {
  const [expandedJobId, setExpandedJobId] = useState<string | null>("vapt-security-engineer");
  
  // Application Form Modal
  const [applicationModalOpen, setApplicationModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [applicantForm, setApplicantForm] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "2-3 Years",
    resumeLink: "",
    about: "",
    portfolio: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [applySuccess, setApplySuccess] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const toggleJob = (id: string) => {
    if (expandedJobId === id) {
      setExpandedJobId(null);
    } else {
      setExpandedJobId(id);
    }
  };

  const handleOpenApplyModal = (job: JobPosition) => {
    setSelectedJob(job);
    setApplicationModalOpen(true);
    setApplySuccess(false);
  };

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API delivery
    setTimeout(() => {
      setIsSubmitting(false);
      setApplySuccess(true);
      // Reset
      setApplicantForm({
        name: "",
        email: "",
        phone: "",
        experience: "2-3 Years",
        resumeLink: "",
        about: "",
        portfolio: ""
      });
    }, 1500);
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-700 font-sans antialiased pb-20 pt-28">
      {/* Background radial highlight */}
      <div className="absolute top-0 left-0 w-full h-[500px] opacity-10 pointer-events-none">
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto border-b border-slate-200 pb-10">
          <span className="inline-flex items-center px-2.5 py-1 rounded-sm text-[10px] font-mono font-bold bg-amber-50 text-amber-700 border border-amber-200 tracking-widest uppercase mb-3">
            <Users className="w-3.5 h-3.5 mr-1 text-amber-600 animate-pulse" />
            Join Our Engineering Core
          </span>
          <h1 className="font-display font-light text-slate-900 text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-none uppercase">
            Careers at <span className="font-medium italic text-amber-600">Sidigiqor</span>
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed font-medium">
            We are building a highly competent, un-compromised multidisciplinary technology company. Work on high-end custom software pipelines, VAPT security defense layouts, and AI computer vision deployments globally.
          </p>
        </div>

        {/* Core Values banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-sm border border-slate-200 space-y-2 shadow-sm">
            <span className="text-[10px] font-mono font-bold text-amber-700 block">01. COMPRESSED HIERARCHY</span>
            <h4 className="text-sm font-bold text-slate-900 uppercase">Direct Executive Alignment</h4>
            <p className="text-xs text-slate-500 font-sans leading-normal">
              No endless layers of micro-managers. You collaborate directly with Sahil Rana and lead product engineers to deliver actual corporate value.
            </p>
          </div>
          <div className="bg-white p-5 rounded-sm border border-slate-200 space-y-2 shadow-sm">
            <span className="text-[10px] font-mono font-bold text-amber-700 block">02. HIGH HARDNESS STANDARDS</span>
            <h4 className="text-sm font-bold text-slate-900 uppercase">Uncompromised Quality</h4>
            <p className="text-xs text-slate-500 font-sans leading-normal">
              We do not copy-paste templates or push generic platforms. Every software build, network ring, and VAPT protocol is engineered from absolute scratch.
            </p>
          </div>
          <div className="bg-white p-5 rounded-sm border border-slate-200 space-y-2 shadow-sm">
            <span className="text-[10px] font-mono font-bold text-amber-700 block">03. REGIONAL & GCC ADVISORY</span>
            <h4 className="text-sm font-bold text-slate-900 uppercase">Global Career Footprints</h4>
            <p className="text-xs text-slate-500 font-sans leading-normal">
              Based in India, we consult across Kuwait, UAE, Saudi Arabia, Europe, and the USA. Grow your professional scope on actual multi-national projects.
            </p>
          </div>
        </div>

        {/* Jobs listings title */}
        <div className="pt-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display font-light text-2xl text-slate-900 tracking-tight uppercase">
              Active Strategic Openings ({JOB_POSITIONS.length})
            </h2>
            <span className="text-[10px] font-mono font-bold text-amber-600 uppercase tracking-wider bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
              Updated Today
            </span>
          </div>

          <div className="space-y-4">
            {JOB_POSITIONS.map((job) => {
              const isExpanded = expandedJobId === job.id;
              return (
                <div
                  key={job.id}
                  className={`bg-white border rounded-sm transition-all duration-300 ${
                    isExpanded ? "border-amber-500 ring-1 ring-amber-500/20 shadow-md" : "border-slate-200 hover:bg-slate-50/50 hover:border-slate-300"
                  }`}
                >
                  {/* Job Header */}
                  <div
                    onClick={() => toggleJob(job.id)}
                    className="p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 cursor-pointer"
                  >
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-mono font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60 uppercase">
                        {job.department}
                      </span>
                      <h3 className="font-display text-lg font-bold text-slate-900">{job.title}</h3>
                      
                      <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-sans">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-amber-600" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-amber-600" />
                          {job.type}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 self-stretch sm:self-auto justify-between sm:justify-start border-t border-slate-100 sm:border-0 pt-3 sm:pt-0">
                      <span className="text-xs font-mono font-bold text-slate-700 hidden sm:inline">
                        {job.experience} Exp
                      </span>
                      <div className="p-1.5 rounded-sm bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200/60">
                        {isExpanded ? <ChevronUp className="w-4 h-4 text-amber-600" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </div>
                  </div>

                  {/* Expanded job details */}
                  {isExpanded && (
                    <div className="px-5 pb-6 border-t border-slate-200 pt-5 space-y-6 animate-fadeIn bg-slate-50/40">
                      
                      <div className="space-y-1">
                        <strong className="text-slate-900 text-xs font-mono tracking-wider block">ROLE OVERVIEW</strong>
                        <p className="text-xs text-slate-600 leading-relaxed font-sans font-medium">{job.overview}</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <strong className="text-slate-900 text-xs font-mono tracking-wider block border-b border-slate-200 pb-1">KEY RESPONSIBILITIES</strong>
                          <ul className="space-y-1.5 text-xs text-slate-600 font-medium">
                            {job.responsibilities.map((resp, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-2 shrink-0 mt-1.5"></span>
                                <span className="leading-relaxed font-sans">{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-2">
                          <strong className="text-slate-900 text-xs font-mono tracking-wider block border-b border-slate-200 pb-1">POSITION REQUIREMENTS</strong>
                          <ul className="space-y-1.5 text-xs text-slate-600 font-medium">
                            {job.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-2 shrink-0 mt-1.5"></span>
                                <span className="leading-relaxed font-sans">{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="bg-white p-4 rounded-sm border border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-xs">
                        <div className="space-y-1">
                          <div className="flex items-center gap-1 text-[11px] font-mono text-slate-500">
                            <DollarSign className="w-3.5 h-3.5 text-amber-600" />
                            <span>ESTIMATED COMPENSATION ARCHITECTURE</span>
                          </div>
                          <strong className="text-slate-900 text-sm">{job.salary}</strong>
                        </div>

                        <button
                          onClick={() => handleOpenApplyModal(job)}
                          className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-2.5 rounded-sm text-xs font-bold tracking-widest uppercase transition-all inline-flex items-center cursor-pointer shadow-sm"
                        >
                          APPLY FOR POSITION
                          <ArrowRight className="w-3.5 h-3.5 ml-2" />
                        </button>
                      </div>

                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA to contact for other roles */}
        <div className="bg-white rounded-sm p-6 sm:p-10 border border-slate-200 text-center space-y-3 shadow-sm">
          <span className="text-[10px] font-mono text-amber-700 tracking-widest font-bold block uppercase">GENERAL INQUIRIES</span>
          <h3 className="font-display font-light text-xl text-slate-900 uppercase">Don't see your specific expertise listed?</h3>
          <p className="text-xs text-slate-500 max-w-lg mx-auto font-sans leading-relaxed">
            We are always looking for exceptional network engineers, custom developers, security advisors, or field technicians who live in Chandigarh, Mohali, or Panchkula. Submit a general resume directly.
          </p>
          <div className="pt-2">
            <button
              onClick={onConsult}
              className="bg-slate-900 text-white hover:bg-slate-800 px-6 py-2.5 rounded-sm text-xs font-bold tracking-widest uppercase transition-all cursor-pointer shadow-sm"
            >
              SEND CO-FOUNDER INQUIRY
            </button>
          </div>
        </div>

      </div>

      {/* Application Form Modal overlay */}
      {applicationModalOpen && selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white border border-slate-200 rounded-sm max-w-xl w-full p-6 sm:p-8 relative space-y-4 max-h-[90vh] overflow-y-auto shadow-2xl">
            
            {/* Close button */}
            <button
              onClick={() => setApplicationModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="border-b border-slate-200 pb-3">
              <span className="text-[9px] font-mono text-amber-700 font-bold uppercase tracking-wider block">
                SIDIGIQOR TALENT GATEWAY
              </span>
              <h3 className="font-display font-light text-xl text-slate-900 mt-1 uppercase">
                Applying for: {selectedJob.title}
              </h3>
              <p className="text-[11px] text-slate-500 font-sans mt-1">
                {selectedJob.department} &middot; {selectedJob.location}
              </p>
            </div>

            {applySuccess ? (
              <div className="py-8 text-center space-y-3 animate-fadeIn">
                <div className="w-12 h-12 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                  <FileCheck className="w-6 h-6" />
                </div>
                <h4 className="font-display text-slate-900 text-base uppercase font-bold">Application Documents Streamed</h4>
                <p className="text-xs text-slate-500 max-w-sm mx-auto font-sans">
                  Excellent. We have registered your application coordinates in our internal recruitment gateway. Our co-founder Sahil Rana or senior staff will contact you directly within 2 business days.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setApplicationModalOpen(false)}
                    className="px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-sm hover:bg-slate-800 uppercase tracking-widest cursor-pointer shadow-sm"
                  >
                    Close Portal
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="space-y-4 text-xs text-slate-700">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-slate-500 block font-semibold font-mono text-[9px] tracking-wider">FULL NAME</label>
                    <input
                      required
                      type="text"
                      value={applicantForm.name}
                      onChange={(e) => setApplicantForm({...applicantForm, name: e.target.value})}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 text-slate-800 placeholder-slate-400 font-sans"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-500 block font-semibold font-mono text-[9px] tracking-wider">EMAIL ADDRESS</label>
                    <input
                      required
                      type="email"
                      value={applicantForm.email}
                      onChange={(e) => setApplicantForm({...applicantForm, email: e.target.value})}
                      placeholder="e.g. rahul@domain.com"
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 text-slate-800 placeholder-slate-400 font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-slate-500 block font-semibold font-mono text-[9px] tracking-wider">PHONE COORDINATES</label>
                    <input
                      required
                      type="text"
                      value={applicantForm.phone}
                      onChange={(e) => setApplicantForm({...applicantForm, phone: e.target.value})}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 text-slate-800 placeholder-slate-400 font-sans"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-500 block font-semibold font-mono text-[9px] tracking-wider">PROFESSIONAL EXPERIENCE</label>
                    <select
                      value={applicantForm.experience}
                      onChange={(e) => setApplicantForm({...applicantForm, experience: e.target.value})}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 text-slate-800 font-sans"
                    >
                      <option value="1-2 Years">1 - 2 Years</option>
                      <option value="2-3 Years">2 - 3 Years</option>
                      <option value="3-5 Years">3 - 5 Years</option>
                      <option value="5+ Years">5+ Years</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-500 block font-semibold font-mono text-[9px] tracking-wider">RESUME LINK / CLOUD URL</label>
                  <input
                    required
                    type="url"
                    value={applicantForm.resumeLink}
                    onChange={(e) => setApplicantForm({...applicantForm, resumeLink: e.target.value})}
                    placeholder="e.g. https://drive.google.com/file/d/.../view"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 text-slate-800 placeholder-slate-400 font-sans"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-500 block font-semibold font-mono text-[9px] tracking-wider">PORTFOLIO / GITHUB / BEHANCE URL (OPTIONAL)</label>
                  <input
                    type="url"
                    value={applicantForm.portfolio}
                    onChange={(e) => setApplicantForm({...applicantForm, portfolio: e.target.value})}
                    placeholder="e.g. https://github.com/rahuldev"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 text-slate-800 placeholder-slate-400 font-sans"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-500 block font-semibold font-mono text-[9px] tracking-wider">BRIEF STATEMENT OF TECHNICAL CAPABILITY</label>
                  <textarea
                    rows={3}
                    value={applicantForm.about}
                    onChange={(e) => setApplicantForm({...applicantForm, about: e.target.value})}
                    placeholder="Briefly state your core project engineering achievements, security certifications, or systems you have configured..."
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 text-slate-800 placeholder-slate-400 font-sans"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white text-center py-3 rounded-sm text-xs font-bold tracking-widest uppercase transition-all inline-flex justify-center items-center gap-2 cursor-pointer disabled:opacity-50 shadow-sm"
                  >
                    {isSubmitting ? (
                      <span>TRANSMITTING FILES...</span>
                    ) : (
                      <>
                        <span>SUBMIT DOCUMENTS</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
