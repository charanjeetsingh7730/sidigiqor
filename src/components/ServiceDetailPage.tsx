import React, { useEffect } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  Clock,
  Briefcase,
  Layers,
  MapPin,
  Sparkles,
  Shield,
  Zap,
  Target,
  Settings,
  Terminal,
  Cpu,
  Bookmark,
  Quote,
  MessageSquare,
  Phone,
  Mail,
  Globe,
  AlertTriangle,
  Award
} from "lucide-react";
import { getSpecificServiceData, ServiceData } from "../utils/serviceContent";
import { SERVICE_CATEGORIES } from "../data";

interface ServiceDetailPageProps {
  serviceName: string;
  categoryName: string;
  onBack: () => void;
  onServiceSelect?: (serviceName: string, categoryName: string) => void;
  onConsult: (serviceName: string) => void;
}

export default function ServiceDetailPage({
  serviceName,
  categoryName,
  onBack,
  onServiceSelect,
  onConsult
}: ServiceDetailPageProps) {
  
  // Scroll to top on mount or service name change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [serviceName]);

  // Dynamic content generator ensuring 100% unique, keyword-rich, 19-section metadata
  const getEnrichedServiceData = () => {
    const isSurveillance = serviceName.toLowerCase().includes("surveillance") || 
                           serviceName.toLowerCase().includes("cctv") ||
                           serviceName.toLowerCase().includes("video analytics") ||
                           serviceName.toLowerCase().includes("control room");
                           
    if (isSurveillance) {
      return {
        title: "AI Industrial Surveillance Services",
        subtitle: "AI Industrial Surveillance Services in Chandigarh, Mohali, Panchkula, Punjab & Across India",
        tagline: "Transform Traditional CCTV into Intelligent Business Visibility with Enterprise AI Surveillance Solutions",
        overview: "Artificial Intelligence is redefining the way businesses protect their facilities, monitor operations, and make critical security decisions. Traditional CCTV systems are no longer sufficient for organizations that require real-time visibility, automated threat detection, workplace safety monitoring, and operational intelligence. Sidigiqor Technologies provides AI Industrial Surveillance Services in Chandigarh, Mohali, Panchkula, Punjab, Haryana, Himachal Pradesh, and across India, helping manufacturing plants, warehouses, corporate offices, healthcare organizations, educational institutions, logistics companies, and government facilities deploy intelligent surveillance ecosystems that go far beyond video recording.\n\nOur AI-enabled surveillance solutions combine enterprise IP cameras, intelligent video analytics, centralized monitoring, advanced networking, cybersecurity best practices, and real-time event detection to create a secure and scalable monitoring environment. Whether your objective is to strengthen perimeter security, monitor production areas, improve employee safety, manage vehicle movement, or build a modern command centre, Sidigiqor designs surveillance architectures that align with your business goals rather than simply installing hardware.\n\nAs organizations across Chandigarh, Mohali, Panchkula, Punjab, Haryana, Himachal Pradesh, and global markets continue adopting Industry 4.0 technologies, AI surveillance has become a strategic business investment that improves security, compliance, operational efficiency, and decision-making.",
        ceoInsight: "At Sidigiqor Technologies, we believe surveillance should not be limited to recording events after they occur. Modern organizations require intelligent systems capable of understanding activities, identifying risks, and providing actionable information in real time. AI Industrial Surveillance is no longer just a security solution—it has become a business intelligence platform that supports operational excellence, workplace safety, and informed decision-making.",
        challenges: [
          "Manual monitoring of multiple camera feeds causing fatigue and security gaps.",
          "Delayed detection of security incidents, allowing threats to remain unnoticed.",
          "Unauthorized entry into restricted areas and sensitive facility zones.",
          "Workplace safety violations, such as failure to wear helmets or safety gear.",
          "Theft, vandalism, and asset loss across warehouses and parking yards.",
          "Limited visibility across complex manufacturing or warehouse floor lines.",
          "Difficulty investigating incidents due to hours of manual CCTV video scrubbing.",
          "High dependence on physical security personnel with high overheads and turnover.",
          "Lack of centralized monitoring across multi-facility regional locations.",
          "Growing compliance and safety audit requirements across industrial belts."
        ],
        needWhy: [
          "Perimeter intrusion detection to secure remote fence limits.",
          "Line-crossing alerts for automated sub-second border alarms.",
          "Unauthorized access monitoring in critical operator rooms.",
          "People and vehicle classification to instantly detect anomalies.",
          "Crowd and occupancy analytics to manage visitor flows.",
          "Heat mapping to optimize factory layouts and bottleneck zones.",
          "Queue management to decrease administrative wait times.",
          "License plate recognition (ANPR) for automated access gates.",
          "Face detection and recognition (where appropriate and legally compliant).",
          "Workplace safety monitoring (auditing hard-hats, vests, safety gear).",
          "Intelligent search and forensic investigation to find specific footage in seconds.",
          "Centralized command centre operations for unified physical oversight."
        ],
        outcomes: [
          "Faster identification and sub-second response to security threats.",
          "Improved workplace safety compliance scores and reduced liabilities.",
          "Enhanced visibility across manufacturing, assembly, and warehouse operations.",
          "Reduced manual screen monitoring and video scanning efforts by up to 90%.",
          "Better physical utilization of security personnel on active guard duties.",
          "Improved audit readiness with automated, searchable visual logs.",
          "Centralized monitoring across multiple distinct local or national sites.",
          "Stronger absolute protection of people, assets, and capital infrastructure.",
          "Actionable operational insights through real-time video analytics matrices."
        ],
        approach: "Unlike companies that focus only on camera installation, Sidigiqor follows a consulting-led methodology. Every engagement begins with understanding your facility, operational processes, business risks, and future growth plans. Our consultants perform site assessments, evaluate existing infrastructure, identify surveillance gaps, and recommend a scalable architecture that integrates AI cameras, networking, storage, cybersecurity, and monitoring platforms into a single ecosystem. The result is a solution tailored to your organization rather than a one-size-fits-all deployment.",
        frameworkSteps: [
          { num: "01", title: "Discover", desc: "Understand business objectives, security requirements, and operational challenges." },
          { num: "02", title: "Assess", desc: "Conduct site surveys, infrastructure reviews, and risk assessments." },
          { num: "03", title: "Design", desc: "Develop surveillance architecture, camera placement, networking, storage, and command centre plans." },
          { num: "04", title: "Deploy", desc: "Install, configure, integrate, and validate the complete solution." },
          { num: "05", title: "Secure", desc: "Apply cybersecurity controls, access management, and system hardening." },
          { num: "06", title: "Support", desc: "Provide monitoring, AMC, firmware updates, health checks, and optimization." }
        ],
        portfolio: [
          { title: "AI Industrial Surveillance Systems", desc: "Deploying high-speed edge intelligence models directly on local processing units." },
          { title: "Enterprise CCTV Solutions", desc: "Planning and deploying resilient weather-hardened high-definition security camera networks." },
          { title: "Smart IP Camera Deployment", desc: "Selecting optimal visual, thermal, and varifocal sensors for 100% blindspot elimination." },
          { title: "Video Analytics Implementation", desc: "Configuring custom virtual tripwires, loitering detectors, and directional crowd counting." },
          { title: "Central Monitoring & Command Centres", desc: "Building full-scale physical operator walls, failover NVR configurations, and console layouts." },
          { title: "ANPR (Automatic Number Plate Recognition)", desc: "Automated license plate logging mapped directly to corporate access barriers." },
          { title: "Access Control Integration", desc: "Interfacing CCTV alerts with biometric scanners and facial-recognition door locks." },
          { title: "Visitor Management Systems", desc: "Creating automated front-desk guest logging systems with ID verification alerts." },
          { title: "Warehouse & Logistics Surveillance", desc: "Continuous auditing of dock doors, packing tables, and high-rack lanes." },
          { title: "Manufacturing Plant Surveillance", desc: "Monitoring raw material intake, active conveyor lines, and operator safety." },
          { title: "Campus Surveillance", desc: "Securing school, college, and university perimeters with automated intrusion alerts." },
          { title: "Construction Site Monitoring", desc: "Deploying wire-free solar-powered surveillance nodes with cellular uplinks." },
          { title: "Critical Infrastructure Security", desc: "High-grade monitoring solutions protecting utilities, power hubs, and pipelines." },
          { title: "Multi-location Surveillance Management", desc: "Consolidating distinct regional feeds into a single secure web portal." },
          { title: "Surveillance Health Monitoring & AMC", desc: "Automated continuous sensor pings, physical realignments, and firmware patching." }
        ],
        industries: [
          "Manufacturing & Industrial Plants",
          "Pharmaceuticals",
          "Warehousing & Logistics",
          "Healthcare & Hospitals",
          "Educational Institutions",
          "Government Departments",
          "Smart Cities",
          "Hospitality & Hotels",
          "Retail & Shopping Centres",
          "Real Estate",
          "Data Centres",
          "Corporate Offices",
          "Utilities & Energy",
          "Transportation Hubs"
        ],
        regions: {
          onsite: ["Chandigarh", "Mohali", "Panchkula", "Zirakpur", "Dera Bassi", "Pinjore", "Barwala", "Baddi", "Solan", "Punjab", "Haryana", "Himachal Pradesh"],
          national: ["Pan India multi-location surveillance projects are delivered across India for manufacturing companies, logistics providers, healthcare organizations, educational institutions, and government bodies."],
          intl: ["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Oman", "Qatar", "United Kingdom", "Europe", "United States", "Canada", "Australia", "New Zealand", "Singapore"]
        },
        process: [
          { stage: "Discover", desc: "Understand business objectives, security requirements, and operational challenges." },
          { stage: "Assess", desc: "Conduct site surveys, infrastructure reviews, and risk assessments." },
          { stage: "Design", desc: "Develop surveillance architecture, camera placement, networking, storage, and command centre plans." },
          { stage: "Deploy", desc: "Install, configure, integrate, and validate the complete solution." },
          { stage: "Secure", desc: "Apply cybersecurity controls, access management, and system hardening." },
          { stage: "Support", desc: "Provide monitoring, AMC, firmware updates, health checks, and optimization." }
        ],
        whyChoose: [
          "Business-first consulting, matching hardware to your actual commercial objectives",
          "Vendor-neutral recommendations, selecting only the top-performing sensors for your space",
          "AI-enabled surveillance expertise with deep experience deploying local neural networks",
          "Cybersecurity integration, ensuring your camera streams cannot be digitally hijacked",
          "Enterprise networking capabilities, configuring fiber loops and optimized network subnets",
          "Scalable solution architecture designed to comfortably grow with your organization",
          "Experienced local implementation teams, facilitating rapid deployment across Tricity/Punjab",
          "Long-term AMC and managed support agreements, guaranteeing strict uptime metrics",
          "Transparent project management with clear milestones and direct developer communication",
          "End-to-end technology ownership, transferring complete admin control to your team"
        ],
        techStack: [
          "AI IP Cameras",
          "Enterprise Video Management Systems (VMS)",
          "Network Video Recorders (NVR)",
          "Video Analytics Platforms",
          "Enterprise Networking Equipment",
          "Firewalls",
          "Storage Solutions",
          "Cloud Monitoring Platforms",
          "Mobile Monitoring Applications",
          "AI Analytics Engines",
          "Access Control Systems",
          "Visitor Management Solutions"
        ],
        engagementModels: [
          "Technology Consulting & Site Assessment",
          "Pilot Proof of Concept (PoC)",
          "Turnkey Deployment",
          "System Modernization",
          "Annual Maintenance Contracts (AMC)",
          "Managed Surveillance Services",
          "Multi-site Enterprise Rollouts",
          "Remote Monitoring & Advisory"
        ],
        faqs: [
          { q: "Can AI surveillance work with my existing CCTV system?", a: "In many cases, yes. We assess your existing infrastructure and recommend whether AI analytics can be integrated or whether specific upgrades are required." },
          { q: "Is AI surveillance suitable for small businesses?", a: "Yes. Solutions can be scaled for SMEs as well as large enterprises." },
          { q: "Can AI surveillance help improve workplace safety?", a: "Yes. Depending on the selected analytics and camera placement, AI can assist in monitoring predefined safety conditions and restricted areas." },
          { q: "Do you provide AMC and support?", a: "Yes. Sidigiqor offers annual maintenance, health monitoring, firmware updates, troubleshooting, and ongoing optimization." }
        ],
        relatedServices: [
          "Technical Search Engine Optimization (SEO)",
          "Computer Annual Maintenance Contracts (AMC)",
          "Perimeter Firewall & Secure SD-WAN Management",
          "Secure API Development & Core System Integrations",
          "Campaign CRM & Large-Scale Voter Engagement"
        ],
        conclusion: "Whether you are planning a new surveillance deployment, upgrading an existing CCTV system, or implementing AI-powered operational monitoring, Sidigiqor Technologies is ready to help. Our consulting-led approach ensures every solution is aligned with your business objectives, security requirements, and future growth plans."
      };
    }

    // General fallback for all other services
    const fallback = getSpecificServiceData(serviceName, categoryName);
    const capitalizedService = serviceName.charAt(0).toUpperCase() + serviceName.slice(1);
    const words = serviceName.split(" ");
    const keyword = words[words.length - 1] || "Technology";

    // Deduce related services
    const relatedList: string[] = [];
    SERVICE_CATEGORIES.forEach(cat => {
      cat.services.forEach(s => {
        if (s.title.toLowerCase() !== serviceName.toLowerCase() && relatedList.length < 5) {
          relatedList.push(s.title);
        }
      });
    });

    return {
      title: fallback.title || capitalizedService,
      subtitle: fallback.subtitle || `${capitalizedService} Strategies, Systems Integration & Enterprise Execution`,
      tagline: fallback.tagline || `Powering Sidigiqor's Global Customers with Optimized, High-Performance ${capitalizedService} Frameworks.`,
      overview: fallback.overview || `In the modern era of automated business operations, technology acts as the primary engine of corporate scaling, security, and administrative efficiency. The implementation of ${capitalizedService} requires deep technical specialized knowledge, secure data architectures, and disciplined methodologies. Sidigiqor Technologies acts as a trusted advisory partner, helping organizations design, deploy, and manage advanced ${capitalizedService} capabilities. We bridge the gap between complex engineering and practical operational outcomes, delivering systems that protect your margins, secure your pipelines, and scale your brand globally.`,
      ceoInsight: `At Sidigiqor Technologies, we believe that ${capitalizedService} is not merely an auxiliary operational component—it has become a core business driver. Organizations that fail to optimize this capability face persistent vulnerabilities and lost margins. Modern enterprises require highly secure, automated systems that provide real-time metrics and long-term continuity. Our mission is to engineer frameworks that combine top-tier technical safety with effortless corporate scaling.`,
      challenges: fallback.challenges && fallback.challenges.length > 0 ? fallback.challenges : [
        `Fragmented operational processes with staff wasting time manually tracking ${keyword} workflows.`,
        `Loss of critical tracking data due to poor system configurations or legacy databases.`,
        `High operational downtime caused by un-optimized legacy server nodes or weak networking.`,
        `Lack of standardized operating blueprints, resulting in inconsistent business execution.`,
        `Exposure to modern cyber security threats and data compliance vulnerabilities.`,
        `Struggling to scale systems as order or tracking volume increases tenfold.`,
        `High internal overheads trying to recruit specialized full-time teams regional to Panchkula.`,
        `Communication gaps between front-line operators and executive decision makers.`,
        `Audit discrepancies due to un-automated reporting channels and data silos.`,
        `Difficulty adjusting system variables in real-time as market conditions fluctuate.`
      ],
      needWhy: fallback.needWhy && fallback.needWhy.length > 0 ? fallback.needWhy : [
        `Tailored ${capitalizedService} Workflows engineered to match your operational rules.`,
        `Rigorous Compliance Alignment (GDPR, ISO, Regional Frameworks) by default.`,
        `High-Performance System Architecture resolving data processing bottlenecks.`,
        `Seamless Integration with modern cloud APIs and legacy databases.`,
        `Real-Time Enterprise Dashboards showing active operational metrics.`,
        `Modular Scalability to confidently support 10x business volumetric spikes.`,
        `Secure isolated host architectures preventing database tampering or lateral breaches.`,
        `Automated instant messaging warnings dispatched upon key workflow changes.`,
        `Hands-on training, comprehensive documentation, and credential escrow transparency.`,
        `Comprehensive warranty metrics ensuring maximum server and physical uptime.`,
        `Proactive software patch management and continuous diagnostic audits.`
      ],
      outcomes: fallback.benefits && fallback.benefits.length > 0 ? fallback.benefits : [
        `Immediate decrease in employee downtime and operational friction.`,
        `Highly secured endpoints blocking malware and external intrusions.`,
        `Substantially faster data delivery and real-time reporting cycles.`,
        `Clear technical roadmaps enabling confident expansion planning.`,
        `Lowered internal overhead costs compared to hiring full-time managers.`,
        `Assured business continuity for your partners and enterprise clients.`,
        `Consolidated oversight via neat web-accessible command portals.`,
        `Reduced audit preparation effort with standardized automated logging.`,
        `Enhanced customer trust through seamless, rapid operational executions.`
      ],
      approach: fallback.approach || `We do not believe in cookie-cutter software or pushy product sales. Our methodology starts with a structured consulting assessment. Our regional senior consultants sit down with your department heads to review business objectives, evaluate existing software and hardware topologies, catalog data flow restrictions, and chart your commercial scaling milestones. This allows us to select and build exactly what your organization requires, optimizing capital expenditure and ensuring maximum operational return.`,
      frameworkSteps: fallback.frameworkSteps && fallback.frameworkSteps.length > 0 ? fallback.frameworkSteps : [
        { num: "01", title: "Objective Alignment", desc: `Drafting concrete business outcomes, workflows, and performance metrics for ${capitalizedService}.` },
        { num: "02", title: "Architecture Design", desc: "Designing isolated data structures, security firewalls, and node models." },
        { num: "03", title: "Hardened Engineering", desc: "Clean TypeScript-led coding, hardware installation, or configuration." },
        { num: "04", title: "System Hardening", desc: "Embedding security matrices, access levels, and isolated encrypted vaults." },
        { num: "05", title: "Staging & Integration", desc: "Testing systems under mock load vectors and bridging fragmented pipelines." },
        { num: "06", title: "Managed Support", desc: "Ongoing stress testing, proactive patch setups, and advisory AMC checkups." }
      ],
      portfolio: fallback.portfolio && fallback.portfolio.length > 0 ? fallback.portfolio : [
        { title: `Bespoke ${capitalizedService} Consulting`, desc: "Interactive strategic planning sessions, gap audits, and technical compliance advisory." },
        { title: "Enterprise Systems Integration", desc: "Connecting disparate regional databases, third-party software, and legacy systems." },
        { title: "Custom Dashboard Engineering", desc: "Developing elegant real-time performance tracking walls for decision-makers." },
        { title: "Proactive Security Shielding", desc: "Embedding security controls, multi-factor barriers, and encrypted data tunnels." },
        { title: "Comprehensive SLA Support", desc: "Guaranteed responsive helpdesk loops, physical diagnostics, and uptime monitoring." },
        { title: "Emerging Tech Architecture", desc: "Injecting machine learning, cloud elasticity, or IoT sensory inputs into operations." }
      ],
      industries: fallback.industries && fallback.industries.length > 0 ? fallback.industries : [
        "Heavy Manufacturing & Assembly Plants",
        "Logistics Complexes & Large Warehousing Hubs",
        "Clinical Medical Networks & Private Hospitals",
        "Corporate Administrative Headquarters",
        "Emerging Technology SaaS Startups"
      ],
      regions: fallback.regions && fallback.regions.onsite ? fallback.regions : {
        onsite: ["Panchkula HQ Core", "Mohali Tech District", "Chandigarh Corporate Sectors", "Baddi Industrial Area", "Punjab", "Haryana", "Himachal Pradesh"],
        national: ["Pan India Corporate Service Delivery"],
        intl: ["Kuwait Office (Al Sahab Tower)", "Dubai UAE (One Central)", "London (UK)", "New York City (US)"]
      },
      process: fallback.process && fallback.process.length > 0 ? fallback.process : [
        { stage: "Discovery Workshops", desc: "Mapping current manual spreadsheets, staff roles, and bottleneck workflows." },
        { stage: "Technical Audit", desc: "Reviewing active infrastructure assets, database schemas, and cyber defense postures." },
        { stage: "Detailed Blueprinting", desc: "Drafting clear software architecture, hardware specs, API maps, and SLA standards." },
        { stage: "Active Engineering", desc: "Sprint-based software development, hardware configurations, and system staging." },
        { stage: "Vulnerability Scanning", desc: "Exposing the solution to security stress testing, penetration audits, and load scans." },
        { stage: "Corporate Handover", desc: "Comprehensive operator training, administrative documentation, and credential escrow." },
        { stage: "Long-Term Advisory", desc: "Continuous AMC alignment, regular system patches, and quarterly strategy audits." }
      ],
      whyChoose: fallback.whyChoose && fallback.whyChoose.length > 0 ? fallback.whyChoose : [
        `Led by practical business objectives rather than aesthetic or trendy buzzwords.`,
        `Uncompromising focus on multi-tier cybersecurity standards by default.`,
        `Fully custom, clean software architecture ensuring total intellectual property ownership.`,
        `Direct access to Sidigiqor co-founder and lead engineers throughout the project lifecycle.`,
        `Proven regional delivery capability with physical offices in Panchkula Tricity.`,
        `Sustained global footprint supporting international scaling through Kuwait and Dubai towers.`
      ],
      techStack: fallback.techStack && fallback.techStack.length > 0 ? fallback.techStack : ["React, TypeScript & Node.js frameworks", "PostgreSQL & Secured NoSQL Databases", "AWS & Google Cloud Managed Architectures", "Next-Gen Enterprise Firewalls & SSL tunnels", "RESTful & GraphQL API Integrations", "Docker Container Systems", "Sentry & Prometheus Health Monitors"],
      engagementModels: fallback.engagementModels && fallback.engagementModels.length > 0 ? fallback.engagementModels : [
        "Fixed-Scope Turnkey Project Execution",
        "Strategic Technology Advisory Retainer",
        "Annual Maintenance Contract (AMC) & Operations Support",
        "Dedicated Team & Resource Staffing Alignment"
      ],
      faqs: fallback.faqs && fallback.faqs.length > 0 ? fallback.faqs : [
        { q: `What is the typical timeline for implementing a ${capitalizedService} project?`, a: "Depending on the scope and complexity, initial consulting blueprints require 1-2 weeks, while active turnkey deployments usually range from 4 to 12 weeks with staged milestones." },
        { q: "Will our existing databases or historical records be preserved?", a: "Absolutely. Data integrity is our priority. We write custom migration scripts and perform isolated dry-runs to ensure zero historical record loss during systems transitions." },
        { q: "Do we own the full source code and intellectual property?", a: "Yes. For all custom software development and digital engineering deliverables, the complete source code, server credentials, and intellectual property are fully transferred to your company upon project completion." },
        { q: "How do we handle ongoing support after the project goes live?", a: "We transition your project into our Managed Support loop. This can be structured via an Annual Maintenance Contract (AMC) or a dedicated monthly support SLA matching your team's operational hours." }
      ],
      relatedServices: relatedList,
      conclusion: `We invite you to experience the Sidigiqor difference. By aligning robust, secure technology with your core commercial objectives, we construct scalable ecosystems that eliminate bottlenecks, enhance security, and scale your brand securely. Let's design and engineer a stronger digital future together.`
    };
  };

  const data = getEnrichedServiceData();

  // Helper to resolve category title based on target service name
  const handleRelatedClick = (relName: string) => {
    if (!onServiceSelect) return;
    
    // Find category of related service
    let targetCatName = categoryName;
    for (const cat of SERVICE_CATEGORIES) {
      const match = cat.services.find(s => s.title.toLowerCase() === relName.toLowerCase());
      if (match) {
        targetCatName = cat.title;
        break;
      }
    }
    
    onServiceSelect(relName, targetCatName);
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-700 font-sans antialiased pb-24 pt-28">
      {/* Radial background decoration */}
      <div className="absolute top-0 left-0 w-full h-[600px] opacity-10 pointer-events-none">
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-gold/15 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Back navigation button */}
        <button
          onClick={onBack}
          className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-slate-500 hover:text-amber-700 transition-colors mb-8 cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>BACK TO SERVICES</span>
        </button>

        {/* 1. Hero Section */}
        <section id="hero-section" className="border border-slate-200/80 rounded-sm p-6 sm:p-10 md:p-16 bg-white relative overflow-hidden mb-16 shadow-md">
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] [background-size:2rem_2rem]" />
          
          <div className="relative z-10 max-w-4xl space-y-4">
            <span className="inline-flex items-center px-2.5 py-1 rounded-sm text-[10px] font-mono font-bold bg-amber-50 text-amber-700 border border-amber-200 uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 mr-1.5 text-amber-600 animate-pulse" />
              {categoryName}
            </span>
            
            <h1 className="font-display font-light text-slate-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight uppercase">
              {data.title}
            </h1>
            
            <p className="text-amber-700 font-mono text-xs sm:text-sm font-semibold tracking-wider">
              {data.subtitle}
            </p>
            
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl font-medium pt-2 border-l-2 border-brand-gold/60 pl-4">
              {data.tagline}
            </p>

            <div className="pt-6">
              <button
                onClick={() => onConsult(serviceName)}
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-sm text-xs font-bold tracking-widest uppercase inline-flex items-center transition-all shadow-sm cursor-pointer"
              >
                REQUEST EXPERT SESSION
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </section>

        {/* Flow of the 19 subsequent sections */}
        <div className="space-y-16">

          {/* 1. Individual Service Details */}
          <section id="individual-service-details" className="bg-white p-6 sm:p-8 rounded-sm border border-slate-200/80 space-y-6 shadow-xs">
            <div className="flex items-center space-x-2 border-b border-slate-100 pb-3">
              <Layers className="w-4 h-4 text-amber-600" />
              <h2 className="text-xs font-mono font-bold tracking-widest text-amber-700 uppercase">
                1. Individual Service Details & Scope
              </h2>
            </div>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans font-medium">
              We design and engineer specialized technology frameworks and direct integrations across 
              <span className="text-slate-900 font-semibold"> Chandigarh, Mohali, Panchkula, Zirakpur, Dera Bassi, Baddi, Punjab, Haryana</span>, and nationwide markets. 
              Review the detailed specifications of our high-performing individual capabilities and custom-architected services below:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {data.portfolio.map((item, idx) => (
                <div key={idx} className="bg-slate-50 p-5 rounded-sm border border-slate-100 hover:border-amber-500/20 hover:bg-white transition-all space-y-2 group">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <span className="text-amber-700 font-mono text-[10px] font-bold">CAPABILITY 0{idx + 1}</span>
                    <span className="text-[9px] font-mono text-slate-400 font-bold uppercase">TRICITY REGIONAL DEPLOYMENT</span>
                  </div>
                  <h3 className="text-xs font-mono font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-sans">
                    {item.desc} This bespoke service is tailored specifically for enterprise infrastructure environments in the Chandigarh capital region, Punjab industrial corridors, and Baddi manufacturing zones.
                  </p>
                  <div className="flex items-center gap-1.5 pt-2 text-[10px] font-mono text-amber-700/60 font-semibold">
                    <MapPin className="w-3 h-3 text-amber-600/60" />
                    <span>Chandigarh, Mohali, Panchkula, Baddi, Punjab</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* 2. Executive Overview */}
          <section id="executive-overview" className="bg-white p-6 sm:p-8 rounded-sm border border-slate-200/80 space-y-4 shadow-xs">
            <div className="flex items-center space-x-2 border-b border-slate-100 pb-3">
              <Bookmark className="w-4 h-4 text-amber-600" />
              <h2 className="text-xs font-mono font-bold tracking-widest text-amber-700 uppercase">
                2. Executive Overview
              </h2>
            </div>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed whitespace-pre-line font-medium">
              {data.overview}
            </p>
          </section>

          {/* 3. CEO Insight */}
          <section id="ceo-insight" className="bg-gradient-to-r from-amber-500/5 via-transparent to-transparent p-6 sm:p-8 rounded-sm border border-brand-gold/20 space-y-4 relative bg-white">
            <Quote className="absolute top-4 right-4 w-12 h-12 text-brand-gold/15 pointer-events-none" />
            <div className="flex items-center space-x-2 border-b border-slate-100 pb-3">
              <Award className="w-4 h-4 text-amber-600" />
              <h2 className="text-xs font-mono font-bold tracking-widest text-amber-700 uppercase">
                3. CEO Insight & Perspective
              </h2>
            </div>
            <div className="space-y-3">
              <blockquote className="text-slate-800 text-xs sm:text-sm font-sans italic leading-relaxed font-medium">
                "{data.ceoInsight}"
              </blockquote>
              <div className="text-xs font-mono text-amber-700 pt-1">
                &mdash; Sahil Rana, Co-Founder & Managing Director, Sidigiqor Technologies
              </div>
            </div>
          </section>

          {/* 4. Industry Challenges */}
          <section id="industry-challenges" className="bg-white p-6 sm:p-8 rounded-sm border border-slate-200/80 space-y-4 shadow-xs">
            <div className="flex items-center space-x-2 border-b border-slate-100 pb-3">
              <AlertTriangle className="w-4 h-4 text-rose-500" />
              <h2 className="text-xs font-mono font-bold tracking-widest text-amber-700 uppercase">
                4. Industry & Business Challenges
              </h2>
            </div>
            <p className="text-slate-500 text-xs font-medium">
              Organizations across Chandigarh, Panchkula, Mohali, Punjab, Haryana, and global markets face severe vulnerabilities and systematic leaks due to archaic systems and un-optimized workflows:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {data.challenges.map((challenge, idx) => (
                <div key={idx} className="flex items-start space-x-2.5 text-xs text-slate-700 bg-slate-50 p-3 rounded-sm border border-slate-100 hover:border-rose-200 hover:bg-white transition-all">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-1.5"></span>
                  <span className="leading-relaxed font-sans">{challenge}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 5. Why Organizations Need This Service */}
          <section id="why-organizations-need" className="bg-white p-6 sm:p-8 rounded-sm border border-slate-200/80 space-y-4 shadow-xs">
            <div className="flex items-center space-x-2 border-b border-slate-100 pb-3">
              <Zap className="w-4 h-4 text-amber-600" />
              <h2 className="text-xs font-mono font-bold tracking-widest text-amber-700 uppercase">
                5. Why Organizations Need This Service
              </h2>
            </div>
            <p className="text-slate-500 text-xs font-medium">
              Modernizing these frameworks allows rapid workflow automation, zero data leaks, and consistent enterprise scaling across Chandigarh, Mohali, Panchkula, Zirakpur, Baddi, and all regional hubs:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {data.needWhy.map((need, idx) => (
                <div key={idx} className="flex items-start space-x-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed font-sans font-semibold">{need}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 6. Business Outcomes */}
          <section id="business-outcomes" className="bg-white p-6 sm:p-8 rounded-sm border border-slate-200/80 space-y-4 shadow-xs">
            <div className="flex items-center space-x-2 border-b border-slate-100 pb-3">
              <Target className="w-4 h-4 text-amber-600" />
              <h2 className="text-xs font-mono font-bold tracking-widest text-amber-700 uppercase">
                6. Strategic Business Outcomes
              </h2>
            </div>
            <p className="text-slate-500 text-xs font-medium">
              Measurable improvements achieved through Sidigiqor's rigorous deployment methodologies for our Tricity clients and global partners:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
              {data.outcomes.map((outcome, idx) => (
                <div key={idx} className="bg-slate-50 p-4 border border-slate-100 rounded-sm hover:border-amber-500/20 hover:bg-white transition-all">
                  <span className="text-amber-700 font-mono text-[10px] font-bold block mb-1">OUTCOME 0{idx + 1}</span>
                  <p className="text-xs text-slate-700 font-sans leading-relaxed font-semibold">
                    {outcome}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 7. Sidigiqor Consulting Approach */}
          <section id="consulting-approach" className="bg-white p-6 sm:p-8 rounded-sm border border-slate-200/80 space-y-4 shadow-xs">
            <div className="flex items-center space-x-2 border-b border-slate-100 pb-3">
              <Target className="w-4 h-4 text-amber-600" />
              <h2 className="text-xs font-mono font-bold tracking-widest text-amber-700 uppercase">
                7. Sidigiqor Consulting Approach
              </h2>
            </div>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed whitespace-pre-line font-medium">
              {data.approach}
            </p>
          </section>

          {/* 8. Consulting Framework */}
          <section id="consulting-framework" className="bg-white p-6 sm:p-8 rounded-sm border border-slate-200/80 space-y-4 shadow-xs">
            <div className="flex items-center space-x-2 border-b border-slate-100 pb-3">
              <Layers className="w-4 h-4 text-amber-600" />
              <h2 className="text-xs font-mono font-bold tracking-widest text-amber-700 uppercase">
                8. Consulting & Engineering Framework
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 pt-2">
              {data.frameworkSteps.map((f, idx) => (
                <div key={idx} className="bg-slate-50 p-4 border border-slate-100 rounded-sm space-y-1 hover:border-amber-500/20 hover:bg-white transition-all flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono font-bold text-amber-700 block mb-1">{f.num}</span>
                    <h4 className="text-xs font-bold text-slate-900 tracking-tight">{f.title}</h4>
                  </div>
                  <p className="text-[10px] text-slate-400 leading-normal font-sans pt-2">{f.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 9. Detailed Service Portfolio */}
          <section id="service-portfolio" className="space-y-4">
            <div className="flex items-center space-x-2 border-b border-slate-200/60 pb-2">
              <Briefcase className="w-4 h-4 text-amber-600" />
              <h2 className="text-xs font-mono font-bold tracking-widest text-amber-700 uppercase">
                9. Detailed Service Portfolio
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {data.portfolio.map((port, idx) => (
                <div key={idx} className="bg-white p-5 rounded-sm border border-slate-200/80 hover:bg-slate-50 transition-colors flex flex-col justify-between space-y-2 shadow-xs">
                  <h4 className="text-xs font-bold text-slate-900 font-mono tracking-tight">{port.title}</h4>
                  <p className="text-[11px] text-slate-500 leading-normal font-sans">{port.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 10. Industries We Serve */}
          <section id="industries-we-serve" className="bg-white p-6 sm:p-8 rounded-sm border border-slate-200/80 space-y-4 shadow-xs">
            <div className="flex items-center space-x-2 border-b border-slate-100 pb-3">
              <Globe className="w-4 h-4 text-amber-600" />
              <h2 className="text-xs font-mono font-bold tracking-widest text-amber-700 uppercase">
                10. Industries We Serve
              </h2>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {data.industries.map((ind, idx) => (
                <span key={idx} className="px-3 py-1 text-xs font-sans rounded bg-slate-50 text-slate-700 border border-slate-100">
                  {ind}
                </span>
              ))}
            </div>
          </section>

          {/* 11. Geographic Coverage */}
          <section id="geographic-coverage" className="bg-white p-6 sm:p-8 rounded-sm border border-slate-200/80 space-y-5 shadow-xs">
            <div className="flex items-center space-x-2 border-b border-slate-100 pb-3">
              <MapPin className="w-4 h-4 text-amber-600" />
              <h2 className="text-xs font-mono font-bold tracking-widest text-amber-700 uppercase">
                11. Geographic Coverage
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-amber-700 tracking-wider font-bold block">
                  REGIONAL TRICITY & INDUSTRIAL
                </span>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {data.regions.onsite.map((loc, idx) => (
                    <span key={idx} className="px-1.5 py-0.5 text-[9px] font-mono rounded bg-slate-50 text-slate-600 border border-slate-100">
                      {loc}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2 border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-6">
                <span className="text-[10px] font-mono text-amber-700 tracking-wider font-bold block">
                  PAN INDIA DEPLOYMENT
                </span>
                <p className="text-xs text-slate-500 font-sans leading-relaxed">
                  {data.regions.national.join(", ") || "Corporate and multi-facility solutions deployed seamlessly across Chandigarh, Mohali, Panchkula, Zirakpur, Baddi, Punjab, Haryana, and all national states."}
                </p>
              </div>

              <div className="space-y-2 border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-6">
                <span className="text-[10px] font-mono text-amber-700 tracking-wider font-bold block">
                  GLOBAL STRATEGIC CONSULTING
                </span>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {data.regions.intl.map((loc, idx) => (
                    <span key={idx} className="px-1.5 py-0.5 text-[9px] font-mono rounded bg-amber-50 text-amber-700 border border-amber-200 font-bold">
                      {loc}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 12. Our Delivery Process */}
          <section id="delivery-process" className="bg-white p-6 sm:p-8 rounded-sm border border-slate-200/80 space-y-6 shadow-xs">
            <div className="flex items-center space-x-2 border-b border-slate-100 pb-3">
              <Clock className="w-4 h-4 text-amber-600" />
              <h2 className="text-xs font-mono font-bold tracking-widest text-amber-700 uppercase">
                12. Our Delivery Process
              </h2>
            </div>
            
            <div className="relative border-l border-slate-200 pl-6 ml-3 space-y-6">
              {data.process.map((p, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[31px] top-1 w-2.5 h-2.5 rounded-full bg-white border-2 border-amber-500 group-hover:bg-amber-600 transition-colors" />
                  
                  <span className="text-[10px] font-mono text-amber-700 block font-bold uppercase">
                    Stage 0{idx + 1} &middot; {p.stage}
                  </span>
                  <p className="text-xs text-slate-600 mt-1 leading-normal font-medium max-w-xl">
                    {p.desc} Optimized for streamlined delivery across Chandigarh Tricity and Baddi industrial parks.
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 13. Why Sidigiqor */}
          <section id="why-sidigiqor" className="bg-white p-6 sm:p-8 rounded-sm border border-slate-200/80 space-y-4 shadow-xs">
            <div className="flex items-center space-x-2 border-b border-slate-100 pb-3">
              <Shield className="w-4 h-4 text-amber-600" />
              <h2 className="text-xs font-mono font-bold tracking-widest text-amber-700 uppercase">
                13. Why Sidigiqor
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.whyChoose.map((pt, idx) => (
                <div key={idx} className="flex items-start space-x-2 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span className="text-slate-600 leading-normal font-sans font-medium">{pt}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 14. Technology Ecosystem */}
          <section id="technology-ecosystem" className="bg-white p-6 sm:p-8 rounded-sm border border-slate-200/80 space-y-4 shadow-xs">
            <div className="flex items-center space-x-2 border-b border-slate-100 pb-3">
              <Cpu className="w-4 h-4 text-amber-600" />
              <h2 className="text-xs font-mono font-bold tracking-widest text-amber-700 uppercase">
                14. Technology Ecosystem
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {data.techStack.map((tech, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-sm bg-slate-50 border border-slate-100 text-xs font-mono text-slate-600">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* 15. Engagement Models */}
          <section id="engagement-models" className="bg-white p-6 sm:p-8 rounded-sm border border-slate-200/80 space-y-4 shadow-xs">
            <div className="flex items-center space-x-2 border-b border-slate-100 pb-3">
              <Settings className="w-4 h-4 text-amber-600" />
              <h2 className="text-xs font-mono font-bold tracking-widest text-amber-700 uppercase">
                15. Engagement Models
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {data.engagementModels.map((em, idx) => (
                <div key={idx} className="bg-slate-50 p-4 border border-slate-100 rounded-sm hover:border-amber-500/20 hover:bg-white transition-all flex flex-col justify-between">
                  <span className="text-[10px] font-mono text-amber-700 block mb-2 font-bold">MODEL 0{idx + 1}</span>
                  <p className="text-xs text-slate-800 font-mono font-semibold">{em}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 16. Frequently Asked Questions */}
          <section id="faqs" className="bg-white p-6 sm:p-8 rounded-sm border border-slate-200/80 space-y-4 shadow-xs">
            <div className="flex items-center space-x-2 border-b border-slate-100 pb-3">
              <HelpCircle className="w-4 h-4 text-amber-600" />
              <h2 className="text-xs font-mono font-bold tracking-widest text-amber-700 uppercase">
                16. Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-4 pt-2">
              {data.faqs.map((faq, idx) => (
                <div key={idx} className="space-y-2 border-b border-slate-100 pb-4 last:border-b-0 last:pb-0">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 flex items-start gap-2">
                    <span className="text-amber-700 font-mono text-[11px] mt-0.5 font-bold">Q:</span>
                    <span>{faq.q}</span>
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-sans pl-4">
                    {faq.a} Our local experts are based in Panchkula Tricity for direct physical troubleshooting and diagnostics.
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 17. Related Services */}
          <section id="related-services" className="space-y-4">
            <div className="flex items-center space-x-2 border-b border-slate-200/60 pb-2">
              <Terminal className="w-4 h-4 text-amber-600" />
              <h2 className="text-xs font-mono font-bold tracking-widest text-amber-700 uppercase">
                17. Related Services & Capabilities
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {data.relatedServices.map((relName, idx) => (
                <div 
                  key={idx} 
                  onClick={() => handleRelatedClick(relName)}
                  className="bg-white p-5 rounded-sm border border-slate-200/80 hover:border-amber-500/30 transition-all cursor-pointer group flex flex-col justify-between shadow-xs"
                >
                  <div>
                    <span className="text-[9px] font-mono text-amber-700 tracking-widest block mb-1">CAPABILITY</span>
                    <h4 className="text-xs font-bold text-slate-900 group-hover:text-amber-700 transition-colors font-mono tracking-tight">{relName}</h4>
                  </div>
                  <div className="flex items-center text-[10px] text-slate-400 group-hover:text-amber-700 pt-4 transition-colors font-mono font-bold">
                    <span>EXPLORE CAPABILITY</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 18. Conclusion */}
          <section id="conclusion" className="bg-white p-6 sm:p-8 rounded-sm border-t border-b border-slate-200/80 space-y-4">
            <div className="flex items-center space-x-2 pb-1">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <h2 className="text-xs font-mono font-bold tracking-widest text-amber-700 uppercase">
                18. Enterprise Vision & Conclusion
              </h2>
            </div>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-medium">
              {data.conclusion} Our regional core operations are based right here in Panchkula Tricity, perfectly positioned to guide your local plants, warehouses, or campaigns to global-grade success.
            </p>
          </section>

          {/* 19. Call to Action */}
          <section id="call-to-action" className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-sm p-6 sm:p-10 border border-slate-800 space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 space-y-4 max-w-3xl">
              <span className="text-[10px] font-mono text-brand-gold tracking-widest font-bold block">
                19. SECURE STRATEGIC BRIEFING & CALL TO ACTION
              </span>
              <h3 className="font-display font-light text-xl sm:text-2xl md:text-3xl text-white tracking-tight leading-tight">
                Initiate a High-Ticket Operational Assessment
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                Establish direct communication channels with Co-Founder Sahil Rana and our lead technology architects. We will construct a bespoke, secure blueprint detailing the exact hardware, software, security profiles, and SLA frameworks for your facilities in Chandigarh, Mohali, Panchkula, Baddi, or nationwide.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800 max-w-2xl">
                <div className="flex items-center space-x-3 text-xs text-slate-300">
                  <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                  <div>
                    <span className="text-slate-500 block text-[10px] font-mono">DIRECT ADVISORY PHONE</span>
                    <a href="tel:+919911539101" className="hover:text-brand-gold font-semibold text-white">+91 99115 39101</a>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-xs text-slate-300">
                  <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                  <div>
                    <span className="text-slate-500 block text-[10px] font-mono">ENTERPRISE SALES CHANNEL</span>
                    <a href="mailto:Sahil@Sidigiqor.com" className="hover:text-brand-gold font-semibold text-white">Sahil@Sidigiqor.com</a>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-xs text-slate-300">
                  <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                  <div>
                    <span className="text-slate-500 block text-[10px] font-mono">OPERATIONAL SUPPORT LINK</span>
                    <a href="mailto:sidigiqor@gmail.com" className="hover:text-brand-gold font-semibold text-white">sidigiqor@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-xs text-slate-300">
                  <Globe className="w-4 h-4 text-brand-gold shrink-0" />
                  <div>
                    <span className="text-slate-500 block text-[10px] font-mono">OFFICIAL DIGITAL PORTAL</span>
                    <a href="https://www.sidigiqor.com" target="_blank" rel="noreferrer" className="hover:text-brand-gold font-semibold text-white">www.sidigiqor.com</a>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => onConsult(serviceName)}
                  className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-sm text-xs font-bold tracking-widest uppercase inline-flex items-center transition-all shadow-md cursor-pointer"
                >
                  BOOK STRATEGIC ASSESSMENT SESSION
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}
