import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ShieldAlert,
  CodeXml,
  BrainCircuit,
  Eye,
  TrendingUp,
  Award,
  CheckCircle,
  HelpCircle,
  ArrowUpRight,
  X,
  Globe,
  Building,
  Lock,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Scale,
  Plus,
  Check
} from "lucide-react";
import { SERVICE_CATEGORIES } from "../data";

interface CapabilitiesGridProps {
  onServiceClick?: (serviceName: string, categoryName: string) => void;
}

export default function CapabilitiesGrid({ onServiceClick }: CapabilitiesGridProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<typeof SERVICE_CATEGORIES[0] | null>(null);
  const [expandedCategoryFaq, setExpandedCategoryFaq] = useState<{ [catId: string]: number | null }>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedToCompare, setSelectedToCompare] = useState<{ service: typeof SERVICE_CATEGORIES[0]["services"][0]; categoryTitle: string }[]>([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState<boolean>(false);

  const toggleCompareService = (service: typeof SERVICE_CATEGORIES[0]["services"][0], categoryTitle: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedToCompare((prev) => {
      const exists = prev.some((item) => item.service.title === service.title);
      if (exists) {
        return prev.filter((item) => item.service.title !== service.title);
      }
      if (prev.length >= 2) {
        return [prev[0], { service, categoryTitle }];
      }
      return [...prev, { service, categoryTitle }];
    });
  };

  const getTechnicalSpecs = (title: string, category: string, desc: string) => {
    const lowercaseTitle = title.toLowerCase();

    // 27-Service Dedicated Enterprise Mapping Dictionary
    let techStack = "Enterprise Systems, SQL, Cloud Architecture";
    let sla = "Standard Business Days (9am - 6pm)";
    let deployment = "Hybrid Cloud Infrastructure";
    let compliance = "GDPR, SOC 2 Type II, ISO 27001";
    let deliverables = [
      "Full source-code repository ownership",
      "Comprehensive system architecture diagrams",
      "Post-deployment testing and optimization protocols"
    ];

    // Category 1: Enterprise IT & Cybersecurity Solutions
    if (lowercaseTitle.includes("vulnerability assessment") || lowercaseTitle.includes("vapt") || lowercaseTitle.includes("penetration testing")) {
      techStack = "Burp Suite Professional, OWASP ZAP, Metasploit, Nmap, Kali Linux, Nessus, Wireshark, Python";
      sla = "24/7/365 Emergency Incident Response (15-min Remote Isolation SLA)";
      deployment = "Isolated On-Premise Audit Node / Secure Virtual Private Cloud (VPC)";
      compliance = "ISO 27001:2022, SOC 2 Type II, NIST CSF, PCI-DSS v4.0, HIPAA";
      deliverables = [
        "Actionable Code-Level Vulnerability Remediation Guide (PDF & Markdown)",
        "Certified CVSS v3 Threat & Risk Rating Audit Reports",
        "Post-Audit Re-Validation Security Certificate & Digital Compliance Badge"
      ];
    } else if (lowercaseTitle.includes("firewall") || lowercaseTitle.includes("sd-wan")) {
      techStack = "Sophos XGS Firewalls, Fortinet FortiGate NGFW, Cisco Meraki, SD-WAN Orchestrator, IPSec / WireGuard Tunnels";
      sla = "99.99% Network Uptime Guarantee, 15-minute critical packet drop resolution SLA";
      deployment = "Physical Edge Sentry Appliance Stack & Unified Virtual Cloud Controller";
      compliance = "NIST 800-53 Perimeter Controls, ISO 27002, HIPAA Network Security";
      deliverables = [
        "Multi-VLAN Logical Network Segmentation & Routing Topology Map",
        "Automated Dual-ISP Failover & Secure SD-WAN Rule Configurations",
        "Real-time Traffic Telemetry Dashboard Credentials & Log Archiving Schema"
      ];
    } else if (lowercaseTitle.includes("amc") || lowercaseTitle.includes("annual maintenance")) {
      techStack = "CrystalDiskInfo Pro, AIDA64 Systems Diagnostic, Windows Active Directory Admin, Acronis Cyber Backup";
      sla = "Monthly preventative on-site sweeps, guaranteed 2-hour physical engineering dispatch Tricity SLA";
      deployment = "On-Site Physical Dispatch (Panchkula, Mohali, Chandigarh, Baddi, Solan)";
      compliance = "ISO 9001 Quality Standards, OSHA On-site Workplace Safety compliance";
      deliverables = [
        "Detailed IT Asset Inventory & Hardware Thermal Baseline Diagnostics Log",
        "Scheduled Dust-Purge, Mechanical Fan Calibration & Thermal Paste Renewal Cycles",
        "24/7 Emergency Support Ticketing Credentials & Spare Terminal Buffer Inventory"
      ];
    } else if (lowercaseTitle.includes("helpdesk") || lowercaseTitle.includes("managed it")) {
      techStack = "NinjaOne RMM Client, ConnectWise Command, Bitdefender Enterprise Endpoint Protection, Microsoft 365 Admin";
      sla = "Multi-Tier support SLA: Under 15-minute Critical Ticket SLA, 4-hour standard ticket resolution";
      deployment = "Central Remote Monitoring & Management (RMM) Agent Endpoint deployment";
      compliance = "ISO 27001 Access Controls, CIS Benchmarks, GDPR Data Privacy Regulations";
      deliverables = [
        "Hardened Corporate OS Endpoint Security Configurations & Active Policies",
        "Automated Third-Party Software & Operating System Security Patch Management",
        "Quarterly IT Asset Lifecycle Reports & Direct Remote Desktop Helpdesk Access"
      ];
    } else if (lowercaseTitle.includes("backups") || lowercaseTitle.includes("disaster recovery")) {
      techStack = "Veeam Backup & Replication, AWS S3 Immutable Glacier, Azure Recovery Vaults, Synology Enterprise NAS";
      sla = "Zero-Loss Data Recovery SLA: RTO < 30 minutes, RPO < 15 minutes for critical databases";
      deployment = "3-2-1-1-0 Air-Gapped Immutable Storage & Multi-Region Geographic Cloud Sync";
      compliance = "GDPR Storage compliance, ISO 27017 Cloud Security, SOC 1 Type II, HIPAA Backup Rules";
      deliverables = [
        "Immutable S3 Object Lock Policy Schema preventing ransomware overrides",
        "Automated Weekly Disaster Recovery Failover Testing & Drill Logs",
        "Geographic Cloud-Local Disaster Standby Standby Servers configuration map"
      ];
    }
    
    // Category 2: Digital Engineering & Custom Software
    else if (lowercaseTitle.includes("bespoke") || lowercaseTitle.includes("custom software") || lowercaseTitle.includes("enterprise software systems")) {
      techStack = "React 18, Node.js, Express, TypeScript, PostgreSQL, Prisma ORM, Redis Cache, Docker Containers";
      sla = "Bi-weekly sprint milestone reviews, L2 ongoing production support SLA with 24-hour turnaround";
      deployment = "Dedicated AWS/GCP Kubernetes Clusters or Secured Private Multi-Tenant Cloud (VPC)";
      compliance = "OWASP Secure Coding Guidelines, GDPR Right to Data Portability, ISO 27001 SDLC";
      deliverables = [
        "100% Intellectual Property & Production-Ready Git Source Code Transfer",
        "Entity-Relationship (ERD) Database Schema Diagram & Interactive API Sandbox",
        "Containerized Docker Compose Infrastructure Orchestration Scripts"
      ];
    } else if (lowercaseTitle.includes("website design") || lowercaseTitle.includes("web portals") || lowercaseTitle.includes("premium website")) {
      techStack = "Next.js 14, Tailwind CSS, Framer Motion, TypeScript, Headless CMS, Vercel Edge Serverless CDN";
      sla = "Figma UI/UX high-fidelity mockups in 5 business days, 100ms Server Response Time Core Web Vitals guarantee";
      deployment = "Global Edge Serverless CDN Deployment (Vercel / Cloudflare Edge Network)";
      compliance = "WCAG 2.1 AA Web Accessibility, W3C Semantic HTML5 Compliance, Google Search Bot Mobile Optimization";
      deliverables = [
        "Bespoke High-Contrast Desktop & Mobile Figma UI Design Boards",
        "Fully Optimized Semantic, High-Speed Next.js/Tailwind SPA Source Code",
        "Advanced Core Web Vitals Performance Metrics and CDN Routing Blueprint"
      ];
    } else if (lowercaseTitle.includes("mobile applications") || lowercaseTitle.includes("mobile apps")) {
      techStack = "React Native, Flutter SDK, TypeScript, Android SDK, iOS Swift SDK, Firebase Cloud Messaging";
      sla = "Staged App Store & Google Play Console submissions, 24-hour critical crash hot-fix SLA";
      deployment = "Native iOS & Android Client Packages (IPA / APK) & Isolated REST API Gateways";
      compliance = "Apple App Store Review Guidelines, Google Play Developer Policies, OWASP Mobile Top 10";
      deliverables = [
        "Compiled iOS App Bundle (IPA) & Android Application Package (APK)",
        "Verified App Store Connect & Google Play Console Submission Logs",
        "Local Secure Storage Keychain & Memory Buffers Encryption Schema"
      ];
    } else if (lowercaseTitle.includes("crm") || lowercaseTitle.includes("hrms")) {
      techStack = "React, Node.js, TypeScript, PostgreSQL DB, BullMQ Background Process, Redis Queue, Nodemailer API";
      sla = "Staged modular feature rollouts (3-stage release), monthly database query optimization SLA";
      deployment = "Secure Single-Tenant Dedicated Cloud Instances with SSL Encryption Tunnels";
      compliance = "GDPR Employee Data Erasure Rules, Local Regional Labor & Payroll Taxation Compliance";
      deliverables = [
        "Custom Lead Funnel Flowcharts & Complex HR Attendance Policy Maps",
        "Automated Regional Taxation & Payroll Calculator Backend Modules",
        "Complete Interactive System Administrator Training Video Suite & Handbook"
      ];
    } else if (lowercaseTitle.includes("api development") || lowercaseTitle.includes("system integrations")) {
      techStack = "GraphQL Gateway, REST API, Express, TypeScript, Fastify Engine, PostgreSQL, Redis, JWT OAuth2";
      sla = "99.99% API Gateway availability SLA, under 50ms internal endpoint route execution";
      deployment = "High-Throughput AWS/GCP Kubernetes API Clusters behind rate-limiting Cloudflare WAF";
      compliance = "OAuth 2.0 / OpenID Connect Protocol Standards, OWASP API Security Top 10 guidelines";
      deliverables = [
        "Self-Documenting Interactive Swagger/Postman API Playgrounds",
        "OAuth2 JWT JSON Web Token Authentication Security Blueprint",
        "Asynchronous Webhook Trigger Systems & Legacy Database Connection Adapters"
      ];
    }

    // Category 3: Artificial Intelligence & Emerging Tech
    else if (lowercaseTitle.includes("search optimization") || lowercaseTitle.includes("geo") || lowercaseTitle.includes("generative engine")) {
      techStack = "Proprietary Sidigiqor NLP Indexer, Python, LlamaIndex, LangChain framework, Elasticsearch, Schema.org XML";
      sla = "Weekly AI citation position checks, monthly comprehensive LLM recommendation organic growth audits";
      deployment = "Headless Content Semantic Graph Injector & Structured XML Schema Nodes";
      compliance = "Google Search Central Quality Guidelines, W3C Schema markup standards, LLM Crawler Protocols";
      deliverables = [
        "High-Authority Semantic Concept Graph & Search Association Matrix",
        "Generative Engine Optimized JSON-LD Microdata Snippet Arrays",
        "Comprehensive LLM Brand Coverage Audit & Recommendation Penetration Report"
      ];
    } else if (lowercaseTitle.includes("computer vision") || lowercaseTitle.includes("video classification") || lowercaseTitle.includes("vision & smart")) {
      techStack = "Python, OpenCV Deep Learning, TensorFlow, PyTorch, YOLOv8, NVIDIA TensorRT, CUDA Core Accelerations";
      sla = "Sub-300ms video frame classification processing, 98.5% visual model classification accuracy SLA";
      deployment = "NVIDIA Jetson Edge AI hardware nodes & Local VMS NVR Clusters";
      compliance = "IEEE IoT Security Standards, CE Mark, FCC Part 15, GDPR Facial Privacy Masking Regulations";
      deliverables = [
        "Trained Model Checkpoint Binaries & Optimised Weights Format (.onnx / .engine)",
        "Real-time Visual Analytics Dashboard & Customized Alerts Telemetry Triggers",
        "Secure Edge Gateway integration & RTSP video streaming configuration manuals"
      ];
    } else if (lowercaseTitle.includes("machine learning") || lowercaseTitle.includes("predictive analytics")) {
      techStack = "Python Data Stack, Scikit-Learn, Pandas, NumPy, XGBoost, Apache Spark Big Data, MLflow Model Repository";
      sla = "Under 2-hour automated retraining and drift adjustment, monthly algorithm precision checks";
      deployment = "High-Compute Serverless Predict Engine on Dedicated GPU Nodes";
      compliance = "ISO/IEC 22989 AI standard, GDPR Automated Decision-Making Regulations, SOC 2 Data Integrity";
      deliverables = [
        "Trained Machine Learning Model Checkpoint Files & Historical Performance Logs",
        "Secure ML REST API Endpoint for Real-time Predictive System Queries",
        "Mathematical Feature Weight Analysis & Model Prediction Confidence Metrics"
      ];
    } else if (lowercaseTitle.includes("chatbots") || lowercaseTitle.includes("virtual assistants")) {
      techStack = "Python FastAPI Backend, Google Gemini 1.5 Flash SDK, OpenAI GPT API, LangChain Agents, Pinecone Vector DB";
      sla = "99.9% virtual chatbot endpoint availability, sub-1.5 second conversational query reply speed";
      deployment = "Web-Embedded Lightweight Client-side widget & Encrypted Cloud Vector Database Nodes";
      compliance = "GDPR Conversational Log compliance, HIPAA Patient Information Privacy, SOC 2 Client Secrecy";
      deliverables = [
        "Custom-Trained Semantic Vector Knowledge Base & Cognitive Retrieval API",
        "Direct Web Interface Embeddable Chat Widget JS Script & API Keys",
        "Secure Conversation Logs Admin Portal & Human-in-the-Loop Handover Integrations"
      ];
    } else if (lowercaseTitle.includes("iot") || lowercaseTitle.includes("internet of things") || lowercaseTitle.includes("sensor networks")) {
      techStack = "MQTT IoT Protocol, Node-RED Flow Orchestrator, InfluxDB Time-Series DBMS, Grafana Visualization, ESP32";
      sla = "Automatic failsafe sensor heartbeat checks, under 1-second physical sensor anomaly warning dispatch";
      deployment = "Industrial Mesh Sensor Networks & On-Premises Local Edge Gateways";
      compliance = "ISO 27400 IoT Security, WEEE Waste Directive compliance, CE Mark, FCC Part 15 Standards";
      deliverables = [
        "Comprehensive Physical Sensor Placement & Industrial Signal Wiring Schematic",
        "Interactive Grafana Time-Series Telemetry Dashboard & Live Graph Console",
        "Automated System Out-of-Bounds Alert Threshold Script Configurations"
      ];
    }

    // Category 4: Advanced AI Physical Surveillance
    else if (lowercaseTitle.includes("harsh environments") || lowercaseTitle.includes("cctv camera deployments")) {
      techStack = "Hikvision IP67 Sensors, Dahua VMS, PoE Managed Industrial Switches, Cat6 Shielded Copper cablings";
      sla = "Annual preventative physical sweeps, 24-hour on-site engineering physical dispatch Tricity SLA";
      deployment = "Physical Local Rack NVR Storage, Active CCTV Hardware Arrays & Local Hardwired Cables";
      compliance = "OSHA Industrial Workplace Safety standards, Bureau of Indian Standards (BIS) Electronic codes";
      deliverables = [
        "Detailed Camera Lens Geometry & Physical Wiring Topology Blueprint",
        "High-Density RAID Network Video Recorder (NVR) Configuration Schemas",
        "Active Live Video Monitor Control Room Console Credentials & Mobile Client Access"
      ];
    } else if (lowercaseTitle.includes("video analytics") || lowercaseTitle.includes("real-time intelligent video")) {
      techStack = "Milestone VMS Systems, OpenCV Deep Learning, Python AI Agents, RTSP Stream Decoders, Telegram Bot API";
      sla = "Intrusion warning event classification in under 500ms, 95% false-alarm rejection SLA";
      deployment = "Local Edge Server with NVIDIA GPU / Dedicated Video Analytics Cloud Instance";
      compliance = "GDPR Video Privacy Masking, IEEE Security Guidelines, ISO 27001 Video Storage security";
      deliverables = [
        "Custom Security Guard Warning Telegram Bot Integration Script & Blueprint",
        "Real-time Intrusion Zone Boundaries Vector Mapping Config Files",
        "Edge Computer AI Video Stream Server configuration schema"
      ];
    } else if (lowercaseTitle.includes("control room") || lowercaseTitle.includes("video storage")) {
      techStack = "High-Density Video Server, Seagate SkyHawk RAID-6, Honeywell Matrix Systems, UPS Backup Systems";
      sla = "99.999% video recording continuity guarantee, 24/7 remote monitoring of VMS status";
      deployment = "High-Security Physical Control Room Command Rack & Display Panels";
      compliance = "BIS Control Room Design Guidelines, National Building Code (NBC), ISO 27001 CCTV Storage";
      deliverables = [
        "CCTV Control Room Command Desk & Multi-Display Panel Video Wiring Map",
        "RAID-6 high-availability video storage allocation maps & backup storage profiles",
        "Emergency UPS backup automatic shutdown system script & power failure rules"
      ];
    } else if (lowercaseTitle.includes("biometric") || lowercaseTitle.includes("access control")) {
      techStack = "Suprema Facial Scanners, RFID Access Terminals, Honeywell Access Panels, Custom Node.js Sync Service";
      sla = "Attendance log synchronization in under 1 second, physical hardware scanner replacement in under 24 hours";
      deployment = "Physical Entry Turnstiles, RFID Magnetic Access Gates & Local Controller Panels";
      compliance = "Regional Labor Code Regulations, GDPR Biometric Data Opt-in requirements, ISO 27001 Access Control";
      deliverables = [
        "High-Fidelity Facial Scan Terminal Placement Blueprint & Connection Protocols",
        "Custom Corporate HRMS Attendance database API Sync Script",
        "Fail-Secure Magnetic Lock manual override mapping diagram & physical bypass blueprints"
      ];
    }

    // Category 5: Digital Growth & Performance Marketing
    else if (lowercaseTitle.includes("seo") || lowercaseTitle.includes("search engine optimization")) {
      techStack = "Google Search Console, SEMrush Database, Google Analytics 4, Screaming Frog Web Crawler, Schema XML";
      sla = "Weekly organic position tracking, monthly technical site health crawl digests";
      deployment = "Headless Web Coding Optimizations & Rich Semantic Metadata Injections";
      compliance = "Google Search Central Quality Guidelines, W3C HTML Validation, Core Web Vitals Standards";
      deliverables = [
        "Granular Keyword Matrix, Search Intent Analysis & Target Landing Page Map",
        "JSON-LD Local & Corporate Rich Schema Metadata Injections",
        "Detailed Core Web Vitals Speed Metrics & Asset Optimization Audit Report"
      ];
    } else if (lowercaseTitle.includes("performance marketing") || lowercaseTitle.includes("high-roi")) {
      techStack = "Google Ads, LinkedIn Campaign Manager, Meta Ads Manager, GA4 Custom Funnels, Google Tag Manager";
      sla = "Weekly budget allocation adjustments, monthly deep-dive ROAS / CPA marketing reports";
      deployment = "Targeted Search Engine, Professional Social & Programmatic Ad Network Channels";
      compliance = "GDPR Consent Mode v2, California Consumer Privacy Act (CCPA) Advertising Policies";
      deliverables = [
        "Conversion-Optimized Sales Funnel Landing Page Wireframes & Routing Maps",
        "Google Tag Manager Custom Conversion Event Tracking & Tagging Scripts",
        "Automated Real-Time looker Studio Performance Marketing KPI Dashboard Credentials"
      ];
    } else if (lowercaseTitle.includes("reputation management") || lowercaseTitle.includes("orm")) {
      techStack = "Brand24 Social Crawler, Google Alerts, Mention Engine, PR Newswire Distribution Network, Trustpilot API";
      sla = "Real-time online brand mention monitoring, 4-hour critical negative review warning SLA";
      deployment = "Headless Online Sentiments Monitor Nodes & Global PR Release Networks";
      compliance = "W3C Digital Standards, FTC Endorsement Guides, GDPR Right to Be Forgotten Rules";
      deliverables = [
        "Search Engine Page 1 Reputation Repair & Negative Result Mitigation Blueprint",
        "High-Authority News PR Syndication Portfolio (3 Major Global Portals)",
        "Automated Local Directory Citation Profiles & Customer Review Campaign Roadmap"
      ];
    } else if (lowercaseTitle.includes("content strategy") || lowercaseTitle.includes("thought leadership")) {
      techStack = "SEMrush Keyword Research, Google Docs Workspace, Next.js Technical Blogs, Medium, LinkedIn Articles";
      sla = "4 high-authority technical whitepapers / articles per month, bi-weekly editorial reviews";
      deployment = "Headless Content Management Platforms & Corporate Executive Social Feeds";
      compliance = "W3C Web Publishing Guidelines, Google Helpful Content Quality Standard";
      deliverables = [
        "Comprehensive 6-Month Semantic Content Calendar & Production Pipeline",
        "High-Authority Technical Article Manuscripts & Editorial Sign-off Guidelines",
        "Brand Identity Style Guide, Target Persona Profiles & Industry Narrative Framework"
      ];
    }

    // Category 6: Political Campaign Technology
    else if (lowercaseTitle.includes("war room") || lowercaseTitle.includes("state-of-the-art campaign")) {
      techStack = "Sovereign Multi-Display Controller, Social Listening Engine, VoIP Call Center Desk, TV Satellites";
      sla = "24/7 Dedicated War Room Network Engineers on Field, peak load traffic autoscaling";
      deployment = "Physical Local Campaign Headquarters Command Center & Sovereign Isolated Cloud Servers";
      compliance = "Election Commission Information Security Guidelines, ISO 27001 Physical Command Center security";
      deliverables = [
        "Physical Campaign War Room Multi-Display Panel Hardware & Cable Wiring Blueprint",
        "Interactive Social Listening Trend tracker & Voter Sentiments Console",
        "High-Volume VolP Telephony Calling Stations setup configurations"
      ];
    } else if (lowercaseTitle.includes("constituency analytics") || lowercaseTitle.includes("demographic maps")) {
      techStack = "Python GeoPandas, PostgreSQL PostGIS Spatial DB, QGIS Mapping Software, Apache Spark Big Data Engine";
      sla = "Constituency database queries execution under 2 seconds, weekly demographic roster updates";
      deployment = "Sovereign Isolated Local Data Storage Nodes with local Geographic GIS servers";
      compliance = "Election Commission Roster Security rules, Cyber Security Act, AES-256 DBMS Guidelines";
      deliverables = [
        "Interactive Regional Constituency GIS Voter Density & Swing Potential Heatmaps",
        "Constituency Segment Demographic Analysis & Voter Priorities Summary Report",
        "Regional Constituency Basic Infrastructure Pain Point Mapping GPS coordinates"
      ];
    } else if (lowercaseTitle.includes("booth management") || lowercaseTitle.includes("offline-first")) {
      techStack = "React Native Mobile Engine, SQLite Local Database, Node.js API, Secure PostgreSQL Database";
      sla = "Instant local offline voter matching search speed, 24-hour booth agent ticket resolution SLA";
      deployment = "Secure Offline Android Application Packages (APK) & Encrypted Local DB Nodes";
      compliance = "OWASP Mobile Security, Local Roster Data Storage Policies, Information Technology Act 2000";
      deliverables = [
        "Offline-Enabled Voter Lookup Android Mobile Application (.apk Bundle)",
        "Secure SQLite database local memory sync schema & conflict resolver",
        "Real-time Booth Agent activity & voter attendance logging dashboard credentials"
      ];
    } else if (lowercaseTitle.includes("campaign crm") || lowercaseTitle.includes("voter engagement")) {
      techStack = "Node.js, React, PostgreSQL Spatial DB, Twilio SMS API, Meta WhatsApp Business API Cloud Platform";
      sla = "100,000 hourly campaign messaging capacity, 99.9% queue throughput delivery rate SLA";
      deployment = "Sovereign Secured Cloud Instances running Dedicated Message Queuing Server Nodes";
      compliance = "TRAI regulations (India DLT), Election Commission Media Guidelines, GDPR Opt-In Standards";
      deliverables = [
        "Sovereign Voter CRM Administrator Panel Console Credentials",
        "High-Volume Automated WhatsApp/SMS Message Queue Trigger Schemas",
        "Volunteer Coordination & Regional Campaign Team Assignment Matrix maps"
      ];
    }

    return {
      techStack,
      sla,
      deployment,
      compliance,
      deliverables
    };
  };

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 450);
    return () => clearTimeout(timer);
  }, [activeFilter]);

  const getCategoryIcon = (iconName: string, className: string = "w-6 h-6") => {
    switch (iconName) {
      case "ShieldAlert":
        return <ShieldAlert className={`${className} text-amber-600`} />;
      case "CodeXml":
        return <CodeXml className={`${className} text-amber-600`} />;
      case "BrainCircuit":
        return <BrainCircuit className={`${className} text-amber-600`} />;
      case "Eye":
        return <Eye className={`${className} text-amber-600`} />;
      case "TrendingUp":
        return <TrendingUp className={`${className} text-amber-600`} />;
      case "Award":
        return <Award className={`${className} text-amber-600`} />;
      default:
        return <HelpCircle className={`${className} text-slate-400`} />;
    }
  };

  const filteredCategories = activeFilter === "all"
    ? SERVICE_CATEGORIES
    : SERVICE_CATEGORIES.filter((cat) => cat.id === activeFilter);

  const handleExploreBlueprint = (cat: typeof SERVICE_CATEGORIES[0]) => {
    setSelectedCategory(cat);
  };

  const handleCloseModal = () => {
    setSelectedCategory(null);
  };

  const handleModalServiceClick = (srvTitle: string, catTitle: string) => {
    setSelectedCategory(null);
    onServiceClick?.(srvTitle, catTitle);
  };

  return (
    <div className="space-y-8">
      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-1.5 border-b border-slate-200/80 pb-5">
        <button
          onClick={() => setActiveFilter("all")}
          className={`px-4 py-2 rounded-sm text-xs font-semibold tracking-wider transition-all cursor-pointer border ${
            activeFilter === "all"
              ? "bg-amber-600 border-amber-600 text-white shadow-sm"
              : "bg-slate-50 text-slate-600 hover:text-slate-900 hover:bg-slate-100 border-slate-200"
          }`}
        >
          All Capabilities
        </button>
        {SERVICE_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveFilter(cat.id)}
            className={`px-3.5 py-2 rounded-sm text-xs font-medium tracking-wide flex items-center gap-1.5 transition-all border cursor-pointer ${
              activeFilter === cat.id
                ? "bg-amber-600 text-white border-amber-600 shadow-sm"
                : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-slate-900"
            }`}
          >
            {getCategoryIcon(cat.iconName, "w-4 h-4")}
            {cat.title.replace("Enterprise ", "").replace("Political ", "").replace("Solutions", "")}
          </button>
        ))}
      </div>

      {/* Grid Display - Fixed Sizing with No Blank Spaces */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          Array.from({ length: activeFilter === "all" ? SERVICE_CATEGORIES.length : 1 }).map((_, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 rounded-sm flex flex-col justify-between h-full relative overflow-hidden animate-pulse min-h-[480px] shadow-xs"
            >
              {/* Fake Quick View Badge */}
              <div className="absolute top-2 right-2 px-2 py-0.5 rounded-xs bg-slate-100 border border-slate-200/60 text-[8px] font-mono font-bold tracking-widest text-slate-400 uppercase select-none z-20">
                LOADING...
              </div>

              <div className="p-5 flex-1 flex flex-col">
                {/* Header card info */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-12 h-12 rounded-sm bg-slate-50 border border-slate-200/60 shrink-0"></div>
                  <div className="w-28 h-6 rounded-sm bg-slate-50 border border-slate-200/60 shrink-0"></div>
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    {/* Title */}
                    <div className="h-5 w-2/3 bg-slate-100 rounded-sm mb-3"></div>
                    {/* Description lines */}
                    <div className="space-y-2 mt-1.5 min-h-[48px]">
                      <div className="h-3 w-full bg-slate-50 rounded-sm"></div>
                      <div className="h-3 w-5/6 bg-slate-50 rounded-sm"></div>
                    </div>
                  </div>

                  {/* Core Scope Section */}
                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <div className="h-2.5 w-24 bg-slate-50 rounded-sm mb-3"></div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-amber-500/20 rounded-full shrink-0"></div>
                        <div className="h-3 w-1/2 bg-slate-50 rounded-sm"></div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-amber-500/20 rounded-full shrink-0"></div>
                        <div className="h-3 w-2/3 bg-slate-50 rounded-sm"></div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-amber-500/20 rounded-full shrink-0"></div>
                        <div className="h-3 w-5/12 bg-slate-50 rounded-sm"></div>
                      </div>
                    </div>
                  </div>

                  {/* FAQ Accordion Section */}
                  <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                    <div className="h-2.5 w-32 bg-slate-50 rounded-sm mb-1"></div>
                    <div className="space-y-1.5">
                      <div className="h-8 w-full bg-slate-50 border border-slate-200/40 rounded-sm"></div>
                      <div className="h-8 w-full bg-slate-50 border border-slate-200/40 rounded-sm"></div>
                      <div className="h-8 w-full bg-slate-50 border border-slate-200/40 rounded-sm"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer action */}
              <div className="px-5 py-3.5 bg-slate-50 rounded-b-sm border-t border-slate-100 flex items-center justify-between">
                <div className="h-3 w-28 bg-slate-50 rounded-sm"></div>
                <div className="h-4 w-24 bg-amber-500/10 border border-amber-500/10 rounded-sm"></div>
              </div>
            </div>
          ))
        ) : (
          filteredCategories.map((cat) => {
            return (
              <div
                key={cat.id}
                className="bg-white border border-slate-200/80 rounded-sm flex flex-col justify-between group h-full cursor-pointer relative overflow-hidden transition-all duration-300 ease-in-out hover:scale-[1.05] hover:border-amber-600 hover:shadow-[0_0_15px_rgba(217,119,6,0.15)]"
              >
                {/* Quick View Badge */}
                <div className="absolute top-2 right-2 px-2 py-0.5 rounded-xs bg-slate-900/90 border border-amber-500/20 text-[8px] font-mono font-bold tracking-widest text-amber-400 uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none select-none z-20">
                  Quick View
                </div>

                <div className="p-5 flex-1 flex flex-col">
                  {/* Header card info */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="p-3 rounded-sm bg-slate-50 inline-block border border-slate-200 group-hover:border-amber-600/30 transition-colors">
                      {getCategoryIcon(cat.iconName, "w-6 h-6")}
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleExploreBlueprint(cat);
                      }}
                      className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-600 bg-amber-500/10 px-2.5 py-1 rounded-sm border border-amber-500/25 hover:bg-amber-600 hover:text-white transition-all cursor-pointer z-10"
                    >
                      EXPLORE BLUEPRINT
                    </button>
                  </div>

                  <div className="flex-1 flex flex-col justify-between" onClick={() => handleExploreBlueprint(cat)}>
                    <div>
                      <h4 className="font-display font-semibold text-lg text-slate-900 group-hover:text-amber-600 transition-colors">
                        {cat.title}
                      </h4>
                      <p className="text-slate-600 text-xs mt-1.5 leading-relaxed font-sans min-h-[48px]">
                        {cat.description}
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-slate-100">
                      <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider block mb-2">
                        Core Scope Includes:
                      </span>
                      <ul className="space-y-2">
                        {cat.services.slice(0, 3).map((srv, idx) => {
                          const isSelected = selectedToCompare.some((item) => item.service.title === srv.title);
                          return (
                            <li 
                              key={idx} 
                              onClick={(e) => {
                                e.stopPropagation();
                                onServiceClick?.(srv.title, cat.title);
                              }}
                              className="flex items-center text-xs text-slate-600 hover:text-amber-600 transition-colors cursor-pointer group/line py-1.5 border-b border-slate-100 last:border-0"
                            >
                              <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-2 group-hover/line:scale-125 transition-transform shrink-0"></span>
                              <span className="truncate flex-1 font-medium">{srv.title}</span>
                              <div className="flex items-center gap-2 shrink-0 pl-2">
                                <button
                                  onClick={(e) => toggleCompareService(srv, cat.title, e)}
                                  className={`text-[9px] font-mono px-1.5 py-0.5 rounded-xs border transition-all cursor-pointer ${
                                    isSelected
                                      ? "bg-amber-600 text-white border-amber-600 font-bold"
                                      : "bg-slate-50 text-slate-500 border-slate-200/80 hover:border-amber-600 hover:text-amber-600 hover:bg-amber-500/10"
                                  }`}
                                >
                                  {isSelected ? "Selected" : "Compare"}
                                </button>
                                <span className="text-[9px] font-mono text-amber-600 opacity-0 group-hover/line:opacity-100 transition-opacity font-bold">VIEW &rarr;</span>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    {/* Accordion FAQ Section */}
                    {cat.faqs && cat.faqs.length > 0 && (
                      <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                        <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider block mb-1">
                          Benefits & FAQ Accordion:
                        </span>
                        <div className="space-y-1.5">
                          {cat.faqs.map((faq, fIdx) => {
                            const isOpen = expandedCategoryFaq[cat.id] === fIdx;
                            return (
                              <div 
                                key={fIdx}
                                className={`rounded-sm border transition-all overflow-hidden ${
                                  isOpen 
                                    ? "bg-slate-50 border-amber-600/30 shadow-[0_0_8px_rgba(217,119,6,0.05)]" 
                                    : "bg-slate-50/50 border-slate-200/80 hover:border-amber-600/25 hover:bg-slate-50"
                                }`}
                              >
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setExpandedCategoryFaq((prev) => ({
                                      ...prev,
                                      [cat.id]: isOpen ? null : fIdx
                                    }));
                                  }}
                                  className="w-full px-2.5 py-1.5 flex items-center justify-between text-left text-[11px] font-sans font-medium text-slate-700 hover:text-amber-600 transition-colors cursor-pointer gap-2"
                                >
                                  <span className="truncate">{faq.q}</span>
                                  <span className="shrink-0 text-amber-600">
                                    {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                                  </span>
                                </button>
                                <AnimatePresence initial={false}>
                                  {isOpen && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: "auto", opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.2, ease: "easeInOut" }}
                                      className="overflow-hidden"
                                    >
                                      <div className="px-2.5 pb-2 text-[10px] leading-relaxed text-slate-500 font-sans font-normal border-t border-slate-100 pt-1.5">
                                        {faq.a}
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer actions */}
                <div 
                  onClick={() => handleExploreBlueprint(cat)}
                  className="px-5 py-3.5 bg-slate-50 group-hover:bg-amber-500/5 rounded-b-sm border-t border-slate-100 flex items-center justify-between cursor-pointer transition-colors"
                >
                  <span className="text-[10px] font-mono text-slate-400 font-bold">
                    {cat.services.length} Dedicated Modules
                  </span>
                  <button
                    className="text-xs font-semibold text-slate-800 group-hover:text-amber-600 flex items-center gap-1 group cursor-pointer"
                  >
                    Explore Blueprint
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-amber-600" />
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Interactive Blueprint Exploration Popup Modal */}
      <AnimatePresence>
        {selectedCategory && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative bg-white border border-slate-200 rounded-sm w-full max-w-4xl max-h-[85vh] overflow-y-auto shadow-2xl flex flex-col z-10"
            >
              {/* Gold visual strip at top */}
              <div className="h-[3px] w-full bg-gradient-to-r from-amber-500 via-amber-600 to-transparent shrink-0" />

              {/* Modal Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-amber-600 hover:bg-slate-50 rounded-sm transition-all cursor-pointer z-20"
                aria-label="Close panel"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-6 sm:p-8 md:p-10 flex-1">
                {/* Header Block */}
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 border-b border-slate-100 pb-6 mb-6">
                  <div className="p-3.5 bg-slate-50 rounded-sm border border-slate-200 shrink-0 text-amber-600">
                    {getCategoryIcon(selectedCategory.iconName, "w-8 h-8")}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="text-[9px] font-mono font-bold tracking-widest text-amber-600 uppercase bg-amber-500/10 px-2 py-0.5 rounded-sm">
                        SYSTEM ARCHITECTURE SPECIFICATIONS
                      </span>
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                    </div>
                    <h3 className="font-display font-light text-2xl sm:text-3xl text-slate-900 tracking-tight leading-none">
                      {selectedCategory.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed max-w-2xl font-sans font-medium">
                      {selectedCategory.description}
                    </p>
                  </div>
                </div>

                {/* Sub services Grid / Blueprint list */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 block">
                      DEPLOYABLE CORE BLUEPRINT MODULES
                    </span>
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded-xs bg-amber-500/10 border border-amber-500/20 text-amber-800 font-bold">
                      LOCATION AUDITING COMPLIANCE CERTIFIED
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedCategory.services.map((srv, idx) => (
                      <div
                        key={idx}
                        onClick={() => handleModalServiceClick(srv.title, selectedCategory.title)}
                        className="bg-slate-50 p-4 rounded-sm border border-slate-200 hover:border-amber-600 hover:bg-white hover:ring-1 hover:ring-amber-500/10 transition-all flex flex-col justify-between cursor-pointer group/item text-left relative shadow-xs"
                      >
                        <div>
                          <div className="flex items-start space-x-2.5">
                            <CheckCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                            <div>
                              <span className="text-xs font-bold text-slate-900 group-hover/item:text-amber-600 transition-colors block leading-tight">
                                {srv.title}
                              </span>
                              <span className="text-[11px] text-slate-600 mt-1.5 block leading-relaxed font-sans">
                                {srv.description}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                          <div className="flex flex-wrap gap-1">
                            {srv.locations?.map((loc, lIdx) => (
                              <span 
                                key={lIdx} 
                                className="px-1.5 py-0.5 rounded-xs bg-amber-50 border border-amber-200 text-[9px] font-mono text-amber-800 font-bold"
                              >
                                {loc}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center gap-3">
                            <button
                              onClick={(e) => toggleCompareService(srv, selectedCategory.title, e)}
                              className={`px-2 py-1 rounded-sm text-[9px] font-mono font-bold border transition-all cursor-pointer ${
                                selectedToCompare.some((item) => item.service.title === srv.title)
                                  ? "bg-amber-600 text-white border-amber-600"
                                  : "bg-slate-50 text-slate-500 border-slate-200 hover:border-amber-600 hover:text-amber-600 hover:bg-amber-50"
                              }`}
                            >
                              {selectedToCompare.some((item) => item.service.title === srv.title) ? "COMPARING" : "+ COMPARE"}
                            </button>
                            <span className="text-[9px] font-mono text-amber-600 opacity-80 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 transition-all font-bold inline-flex items-center gap-1 shrink-0">
                              VIEW MODULE <ArrowRight className="w-3 h-3" />
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Secure / Compliant Footnote banner */}
                <div className="mt-8 border-t border-slate-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-left bg-slate-50 p-4 rounded-sm border border-slate-200">
                  <div className="flex items-center space-x-3 text-xs text-slate-600 font-sans">
                    <Lock className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>
                      This technical blueprint is classified as corporate intellectual asset of <strong className="text-slate-900">Sidigiqor Technologies</strong>.
                    </span>
                  </div>
                  <button
                    onClick={handleCloseModal}
                    className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold tracking-wider uppercase rounded-sm border border-slate-200 transition-colors cursor-pointer shrink-0"
                  >
                    Close Blueprint
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Floating Comparison Drawer / Tray */}
      <AnimatePresence>
        {selectedToCompare.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-full max-w-2xl px-4"
          >
            <div className="bg-white/95 backdrop-blur-md border border-slate-200 rounded-md p-4 shadow-[0_10px_30px_rgba(0,0,0,0.1)] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="p-2 rounded-sm bg-amber-500/10 text-amber-600 shrink-0">
                  <Scale className="w-4 h-4 animate-pulse" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-mono text-amber-600 font-bold uppercase tracking-wider">
                    TECHNICAL SERVICE COMPARATOR
                  </div>
                  <div className="text-xs text-slate-600 font-sans mt-0.5">
                    {selectedToCompare.length === 1 
                      ? "Select 1 more service to compare deliverables side-by-side."
                      : "2 services ready for technical side-by-side audit."}
                  </div>
                </div>
              </div>

              {/* Selected items bubbles */}
              <div className="flex flex-wrap gap-2 w-full sm:w-auto justify-start sm:justify-end">
                {selectedToCompare.map((item, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-slate-50 border border-slate-200 text-[10px] text-slate-800 font-sans max-w-[200px]"
                  >
                    <span className="truncate">{item.service.title}</span>
                    <button 
                      onClick={(e) => toggleCompareService(item.service, item.categoryTitle, e)}
                      className="text-slate-400 hover:text-amber-600 text-xs font-mono font-bold ml-1 cursor-pointer"
                    >
                      &times;
                    </button>
                  </div>
                ))}

                {selectedToCompare.length === 1 && (
                  <div className="border border-dashed border-slate-200 rounded-sm px-2.5 py-1 text-[10px] text-slate-400 font-mono flex items-center">
                    + ADD SERVICE
                  </div>
                )}
              </div>

              {/* Action buttons */}
              <div className="flex gap-2 w-full sm:w-auto justify-end">
                <button
                  onClick={() => setSelectedToCompare([])}
                  className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 text-[10px] font-mono font-bold tracking-wider uppercase rounded-sm border border-slate-200 transition-colors cursor-pointer"
                >
                  CLEAR
                </button>
                <button
                  onClick={() => setIsCompareModalOpen(true)}
                  className={`px-4 py-1.5 text-[10px] font-mono font-bold tracking-wider uppercase rounded-sm transition-all cursor-pointer flex items-center gap-1 border ${
                    selectedToCompare.length === 2
                      ? "bg-amber-600 text-white border-amber-600 hover:bg-amber-700"
                      : "bg-amber-500/10 text-amber-600/40 border-amber-500/10 hover:bg-amber-500/20"
                  }`}
                >
                  COMPARE NOW
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Side-by-Side Comparison Modal */}
      <AnimatePresence>
        {isCompareModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCompareModalOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative bg-white border border-slate-200 rounded-sm w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col z-10"
            >
              {/* Gold visual strip at top */}
              <div className="h-[3px] w-full bg-gradient-to-r from-amber-500 via-amber-600 to-transparent shrink-0" />

              {/* Close Button */}
              <button
                onClick={() => setIsCompareModalOpen(false)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-amber-600 hover:bg-slate-50 rounded-sm transition-all cursor-pointer z-20"
                aria-label="Close panel"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-6 sm:p-8 md:p-10 flex-1">
                {/* Header */}
                <div className="border-b border-slate-100 pb-6 mb-8 text-left">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Scale className="w-4 h-4 text-amber-600" />
                    <span className="text-[10px] font-mono font-bold tracking-widest text-amber-600 uppercase">
                      SYSTEM COMPARATOR PLATFORM
                    </span>
                    <span className="w-2 h-2 rounded-full bg-amber-500/80 animate-pulse" />
                  </div>
                  <h3 className="font-display font-light text-2xl sm:text-3xl text-slate-900 tracking-tight">
                    Technical Side-by-Side Audit
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed max-w-2xl font-sans font-medium">
                    Detailed architectural specifications, compliance standards, and deliverable maps compared side-by-side.
                  </p>
                </div>

                {/* Main Comparison Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                  {selectedToCompare.map((item, idx) => {
                    const specs = getTechnicalSpecs(item.service.title, item.categoryTitle, item.service.description);
                    return (
                      <div 
                        key={idx}
                        className="bg-slate-50 border border-slate-200 hover:border-amber-600/30 p-6 rounded-sm relative flex flex-col justify-between transition-all"
                      >
                        {/* Number Indicator */}
                        <div className="absolute top-4 right-4 text-xs font-mono font-bold text-amber-600/10 select-none">
                          SERVICE_NODE_0{idx + 1}
                        </div>

                        <div>
                          {/* Label division */}
                          <div className="text-[10px] font-mono text-amber-600 font-bold uppercase tracking-wider mb-2">
                            {item.categoryTitle}
                          </div>

                          {/* Title */}
                          <h4 className="font-display font-semibold text-xl text-slate-900 tracking-tight mb-3">
                            {item.service.title}
                          </h4>

                          {/* Description */}
                          <p className="text-slate-600 text-xs leading-relaxed font-sans font-medium mb-6">
                            {item.service.description}
                          </p>

                          {/* Specifications Matrix */}
                          <div className="space-y-4 border-t border-slate-200 pt-5">
                            <div>
                              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-1">
                                PRIMARY TECHNOLOGY STACK
                              </span>
                              <span className="text-xs text-slate-800 font-mono font-semibold">
                                {specs.techStack}
                              </span>
                            </div>

                            <div>
                              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-1">
                                SERVICE LEVEL AGREEMENT (SLA)
                              </span>
                              <span className="text-xs text-slate-700 font-sans font-medium">
                                {specs.sla}
                              </span>
                            </div>

                            <div>
                              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-1">
                                INFRASTRUCTURE DEPLOYMENT MODE
                              </span>
                              <span className="text-xs text-slate-700 font-sans font-medium">
                                {specs.deployment}
                              </span>
                            </div>

                            <div>
                              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-1">
                                COMPLIANCE & FRAMEWORKS
                              </span>
                              <span className="text-xs text-amber-700 font-sans font-semibold">
                                {specs.compliance}
                              </span>
                            </div>

                            <div>
                              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-2">
                                KEY TECHNICAL DELIVERABLES
                              </span>
                              <ul className="space-y-1.5">
                                {specs.deliverables.map((del, dIdx) => (
                                  <li key={dIdx} className="flex items-start text-xs text-slate-600 font-sans font-medium gap-2">
                                    <Check className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                                    <span>{del}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>

                        {/* Card CTA/Actions */}
                        <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between">
                          <button
                            onClick={() => {
                              setIsCompareModalOpen(false);
                              setSelectedCategory(null);
                              onServiceClick?.(item.service.title, item.categoryTitle);
                            }}
                            className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-600 bg-amber-500/10 px-3 py-1.5 rounded-sm border border-amber-500/25 hover:bg-amber-600 hover:text-white transition-all cursor-pointer"
                          >
                            GET PROPOSAL FOR THIS SERVICE
                          </button>
                          
                          <button
                            onClick={(e) => toggleCompareService(item.service, item.categoryTitle, e)}
                            className="text-[10px] font-mono text-rose-500 hover:text-rose-600 uppercase font-bold tracking-wider transition-colors cursor-pointer"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    );
                  })}

                  {selectedToCompare.length === 1 && (
                    <div className="border border-dashed border-slate-200 rounded-sm p-8 flex flex-col items-center justify-center text-center min-h-[300px]">
                      <Scale className="w-8 h-8 text-slate-300 mb-3 animate-pulse" />
                      <p className="text-slate-600 text-sm font-sans font-semibold">
                        Ready to compare another module?
                      </p>
                      <p className="text-slate-400 text-xs mt-1 font-sans max-w-xs">
                        Select a secondary service from the capabilities cards or blueprint popups to audit them side-by-side.
                      </p>
                      <button
                        onClick={() => setIsCompareModalOpen(false)}
                        className="mt-4 px-4 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-600 text-[10px] font-mono font-bold uppercase rounded-sm tracking-wider cursor-pointer transition-all"
                      >
                        Browse Services
                      </button>
                    </div>
                  )}
                </div>

                {/* Footer disclaimer */}
                <div className="mt-10 border-t border-slate-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-left bg-slate-50 p-4 rounded-sm border border-slate-200">
                  <div className="flex items-center space-x-3 text-xs text-slate-600 font-sans">
                    <Lock className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>
                      These side-by-side telemetry structures are verified for 2026 deployment and compliant with global enterprise audits.
                    </span>
                  </div>
                  <button
                    onClick={() => setIsCompareModalOpen(false)}
                    className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold tracking-wider uppercase rounded-sm border border-slate-200 transition-colors cursor-pointer shrink-0"
                  >
                    Close Comparison
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
