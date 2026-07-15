import {
  OfficeLocation,
  ServiceCategory,
  IndustryItem,
  MethodologyStage,
  DivisionInfo,
  MetricHighlight,
  ClientTestimonial,
  TeamMember
} from "./types";

export const COMPANY_NAME = "Sidigiqor Technologies";
export const COMPANY_FULL_NAME = "Sidigiqor Technologies OPC Private Limited";
export const TAGLINE = "Built in India. Scaling Globally.";
export const SLOGAN = "Technology That Protects. Intelligence That Delivers.";
export const CO_FOUNDER = "Sahil Rana";

export const CORE_PILLARS = [
  "Technology Consulting",
  "Cyber Security",
  "Artificial Intelligence",
  "Digital Transformation",
  "Enterprise Solutions"
];

export const GENERAL_METRICS: MetricHighlight[] = [
  { label: "Global Offices", value: "4", description: "Panchkula, Kuwait, Dubai, New York" },
  { label: "Core Divisions", value: "3", description: "Enterprise, Political, Global Digital" },
  { label: "Key Geographies", value: "15+", description: "Countries across GCC, Europe, and Americas" },
  { label: "Sectors Served", value: "10+", description: "From Manufacturing to Political Campaigns" }
];

export const CORE_VALUES = [
  {
    title: "Integrity",
    description: "We conduct business honestly, ethically, and transparently. Trust is earned through consistent actions and responsible decision-making."
  },
  {
    title: "Innovation",
    description: "We continuously explore emerging technologies and practical innovations that create measurable business value."
  },
  {
    title: "Client Success",
    description: "Our focus remains on helping clients achieve their business objectives through technology rather than simply delivering technical solutions."
  },
  {
    title: "Excellence",
    description: "We maintain high standards of quality, professionalism, and attention to detail in everything we do."
  },
  {
    title: "Security",
    description: "Security is embedded into our consulting, engineering, and delivery processes to protect business operations and digital assets."
  },
  {
    title: "Collaboration",
    description: "Strong partnerships, open communication, and teamwork enable better outcomes for our clients and our organization."
  }
];

export const ETHICS_COMMITMENTS = [
  "Protect confidential information.",
  "Provide honest and transparent recommendations.",
  "Maintain accountability throughout every engagement.",
  "Comply with applicable legal and regulatory requirements.",
  "Deliver technology responsibly and ethically.",
  "Build long-term partnerships based on trust."
];

export const GOALS = [
  {
    title: "Technology Leadership",
    description: "Deliver enterprise-grade consulting and engineering solutions that align technology with business strategy."
  },
  {
    title: "Cyber Resilience",
    description: "Help organizations identify, manage, and reduce cybersecurity risks while strengthening their overall security posture."
  },
  {
    title: "Digital Transformation",
    description: "Support organizations in modernizing legacy systems, automating business processes, and accelerating digital innovation."
  },
  {
    title: "Operational Excellence",
    description: "Improve efficiency, reduce downtime, and create technology environments that support business continuity."
  },
  {
    title: "Customer Success",
    description: "Measure our success through the measurable outcomes achieved by our clients."
  },
  {
    title: "Global Expansion",
    description: "Expand our consulting and delivery capabilities into international markets while maintaining world-class quality standards."
  }
];

export const DIVISIONS: DivisionInfo[] = [
  {
    id: "enterprise",
    title: "Enterprise Technology & Cybersecurity",
    subtitle: "On-site & Managed Infrastructure Solutions",
    tagline: "Technology That Protects.",
    description: "Providing on-site technology consulting, managed IT services, computer AMC, cybersecurity, firewall management, networking, AI-enabled surveillance, and enterprise infrastructure solutions.",
    iconName: "Shield",
    points: [
      "Vulnerability Assessment & Penetration Testing (VAPT)",
      "Firewall Management & Custom Perimeter Defense",
      "Computer Annual Maintenance Contracts (AMC)",
      "Managed IT Support & Desktop Security Solutions",
      "Network Engineering & Server Infrastructure",
      "AI Industrial Surveillance & Intelligent Video Analytics",
      "Data Backup, Cloud Migration & Disaster Recovery"
    ],
    markets: ["Chandigarh", "Mohali", "Panchkula", "Zirakpur", "Dera Bassi", "Baddi", "Solan", "Punjab", "Haryana", "Himachal Pradesh"]
  },
  {
    id: "political",
    title: "Political Campaign Management",
    subtitle: "Campaign Intelligence & Voter Outreach Platforms",
    tagline: "Intelligence That Delivers.",
    description: "Delivering election campaign technology, management systems, digital campaigning, war room operations, booth management, voter engagement platforms, and constituency analytics across India.",
    iconName: "Vote",
    points: [
      "Election Campaign Strategy & Field Consulting",
      "Advanced Constituency Analytics & Demographics Mapping",
      "State-of-the-Art Campaign War Room Solutions",
      "Booth Management Systems & Voter Search Tools",
      "Digital Outreach & GEO (AI Search Engine Optimization)",
      "Dedicated Volunteer Management Networks",
      "Campaign CRM, Survey Platforms & Real-time Dashboards"
    ],
    markets: ["Pan India", "State-Level Campaigns", "Constituency Headquarters", "National Operations"]
  },
  {
    id: "digital",
    title: "Global Digital Engineering",
    subtitle: "High-End Software, AI, and Automation for Global Markets",
    tagline: "Modernization at Scale.",
    description: "Providing premium custom software, web platforms, mobile applications, AI, Machine Learning, IoT, Blockchain, CRM, HRMS, and digital growth services to organizations globally.",
    iconName: "Cpu",
    points: [
      "Enterprise Custom Software Development",
      "Premium Web Applications & Custom Brand Portals",
      "Native & Cross-Platform Mobile Apps (iOS/Android)",
      "Artificial Intelligence, NLP & Machine Learning Integrations",
      "Tailored CRM & Custom HRMS Solutions",
      "AI-Powered Search Optimization & Advanced SEO",
      "Internet of Things (IoT) & Smart Industry Solutions"
    ],
    markets: ["Kuwait", "United Arab Emirates", "Saudi Arabia", "Qatar", "United Kingdom", "Germany", "United States", "Canada", "Australia", "Singapore"]
  }
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "cat-cybersecurity",
    title: "Enterprise IT & Cybersecurity Solutions",
    description: "End-to-end cyber defense blueprints and physical infrastructure management to safeguard enterprise assets, maintain compliance, and protect business continuity.",
    iconName: "ShieldAlert",
    services: [
      { 
        title: "Vulnerability Assessment & Penetration Testing (VAPT)", 
        description: "Rigorous corporate-level security audits, ethical hacking, and white-hat penetration testing. We identify network loopholes, API vulnerabilities, and social-engineering entry points, delivering prioritized remediation reports.",
        locations: ["India HQ", "Kuwait Office", "Dubai Office", "New York Office"]
      },
      { 
        title: "Perimeter Firewall & Secure SD-WAN Management", 
        description: "Round-the-clock monitoring and configuration of next-generation enterprise firewalls, secure remote gateways, and custom Software-Defined Wide Area Networks to block lateral threats.",
        locations: ["India HQ", "Kuwait Office", "Dubai Office"]
      },
      { 
        title: "Computer Annual Maintenance Contracts (AMC)", 
        description: "Comprehensive physical hardware maintenance, periodic diagnostic server checkups, desktop optimization, internal node cleaning, and on-site hardware repairs to maximize terminal uptime.",
        locations: ["India HQ (Primary Region Only)"]
      },
      { 
        title: "Managed IT Helpdesk & Systems Security", 
        description: "On-demand responsive helpdesk support, enterprise patch management, remote configuration, software license compliance audits, and security endpoint protection across all endpoints.",
        locations: ["India HQ", "Kuwait Office", "Dubai Office"]
      },
      { 
        title: "High-Availability Cloud Backups & Disaster Recovery", 
        description: "Zero-loss data backup strategies using encrypted hybrid cloud storage vaults. We engineer automatic disaster recovery plans to bring critical databases back online within minutes of any event.",
        locations: ["India HQ", "Kuwait Office", "Dubai Office", "New York Office"]
      }
    ],
    faqs: [
      {
        q: "What is your response time for critical security incidents?",
        a: "We operate a 24/7 emergency response protocol. Remote isolation begins within 15 minutes, with full mitigation starting under 1 hour."
      },
      {
        q: "How does your corporate VAPT audit process work?",
        a: "We perform systematic black-box, white-box, and grey-box audits following OWASP Top 10 standards, providing an actionable remediation roadmap."
      },
      {
        q: "Does your Computer AMC cover both hardware and software issues?",
        a: "Yes, our AMC covers hardware diagnostics, physical cleanup, virus removal, network troubleshooting, and preventative system tuning."
      }
    ]
  },
  {
    id: "cat-engineering",
    title: "Digital Engineering & Custom Software",
    description: "Premium tailor-made web systems, desktop portals, and high-performance mobile software built from scratch to streamline unique operations and scale commercial operations.",
    iconName: "CodeXml",
    services: [
      { 
        title: "Bespoke Enterprise Software Systems", 
        description: "Architecting custom software tools designed to replace messy legacy workflows. We consolidate internal business data, inventory levels, and logistics records into a secure multi-tenant platform.",
        locations: ["Kuwait Office", "Dubai Office", "New York Office", "India HQ"]
      },
      { 
        title: "Premium Website Design & Custom Web Portals", 
        description: "Engineering stunning, secure, and fast responsive web platforms. We prioritize custom typography, high-contrast layouts, smooth animations, and optimized SEO structure for maximum brand impact.",
        locations: ["Kuwait Office", "Dubai Office", "New York Office", "India HQ"]
      },
      { 
        title: "Native & Cross-Platform Mobile Applications", 
        description: "Developing beautiful, feature-rich mobile applications for iOS and Android platforms using React Native and Flutter. We build secure native integrations with device hardware and payment gateways.",
        locations: ["Kuwait Office", "Dubai Office", "New York Office", "India HQ"]
      },
      { 
        title: "Tailored Corporate CRM & Integrated HRMS", 
        description: "Custom-built Customer Relationship Management tools and Human Resource Management software tailored to match your specific lead funnels, attendance rules, payroll metrics, and team hierarchy.",
        locations: ["Kuwait Office", "Dubai Office", "India HQ"]
      },
      { 
        title: "Secure API Development & Core System Integrations", 
        description: "Designing RESTful and GraphQL API backends to bridge fragmented databases. We connect third-party platforms, global payment processors, inventory services, and legacy servers securely.",
        locations: ["New York Office", "Dubai Office", "India HQ"]
      }
    ],
    faqs: [
      {
        q: "Do we get full source code ownership upon delivery?",
        a: "Absolutely. All custom software intellectual property, clean source code repositories, and documentation are transferred 100% to your enterprise."
      },
      {
        q: "What programming languages and frameworks do you utilize?",
        a: "We primarily develop with React, Node.js, TypeScript, Flutter, and secure PostgreSQL or MongoDB databases tailored for high performance and scalability."
      },
      {
        q: "How are custom CRM and HRMS systems integrated?",
        a: "We map your specific lead funnels or HR workflows first, then architect clean APIs to seamlessly bridge your legacy software or spreadsheets."
      }
    ]
  },
  {
    id: "cat-ai",
    title: "Artificial Intelligence & Emerging Tech",
    description: "Applying practical neural networks, predictive learning, and digital automation to solve production, classification, and visibility bottlenecks in modern businesses.",
    iconName: "BrainCircuit",
    services: [
      { 
        title: "AI Search Optimization & Generative Engine Optimization (GEO)", 
        description: "Our proprietary digital indexing and context structuring strategy. We optimize your brand parameters, whitepapers, and service profiles to rank high in AI search tools like ChatGPT, Gemini, and Perplexity.",
        locations: ["New York Office", "Dubai Office", "Kuwait Office"]
      },
      { 
        title: "Computer Vision & Smart Video Classification", 
        description: "Training custom neural networks for real-time edge analytics. We implement automatic license plate recognition (ANPR), facial classification matching, industrial defects sorting, and regional heatmaps.",
        locations: ["India HQ", "Dubai Office"]
      },
      { 
        title: "Machine Learning Solutions & Predictive Analytics", 
        description: "Building custom mathematical algorithms to mine raw company data, predicting supply chain demand, equipment maintenance cycles, customer attrition rates, and high-margin product opportunities.",
        locations: ["New York Office", "Dubai Office", "India HQ"]
      },
      { 
        title: "NLP AI Chatbots & Unified Virtual Assistants", 
        description: "Deploying highly contextual Natural Language Processing assistants trained on your internal documentation. Automate client inquiry responses, scheduling bookings, and internal tier-1 technical support.",
        locations: ["New York Office", "Dubai Office", "Kuwait Office", "India HQ"]
      },
      { 
        title: "Internet of Things (IoT) & Smart Sensor Networks", 
        description: "Deploying and managing mesh sensor networks to monitor industrial environments, warehouse temperatures, and remote infrastructure nodes, feedings real-time alerts into a centralized control panel.",
        locations: ["India HQ", "Dubai Office"]
      }
    ],
    faqs: [
      {
        q: "What is GEO (Generative Engine Optimization)?",
        a: "GEO structures your digital profile, technical whitepapers, and brand signals so AI engines (Gemini, ChatGPT, Perplexity) recommend you by name."
      },
      {
        q: "Is our proprietary data secure when training custom AI models?",
        a: "Yes. All AI workloads run inside isolated VPCs. We configure private endpoints and never train public models on your proprietary datasets."
      },
      {
        q: "Can computer vision run on standard security cameras?",
        a: "Yes, our edge vision modules process standard RTSP video feeds, meaning you don't need to replace your existing CCTV camera hardware."
      }
    ]
  },
  {
    id: "cat-surveillance",
    title: "Advanced AI Physical Surveillance",
    description: "High-definition physical security systems integrated with edge-computing classifiers to protect large campuses, factories, and warehouses.",
    iconName: "Eye",
    services: [
      { 
        title: "CCTV Camera Deployments for Harsh Environments", 
        description: "Planning, wiring, and installing industrial-grade, weather-resistant security cameras. We optimize camera placements to eliminate blind spots across massive manufacturing plants and warehouse complexes.",
        locations: ["India HQ (Regional On-site Execution)"]
      },
      { 
        title: "Real-time Intelligent Video Analytics", 
        description: "Augmenting standard video streams with AI filters to auto-detect boundary intrusions, trace suspicious abandoned packages, count vehicle entry-exit rates, and trigger real-time guard alerts.",
        locations: ["India HQ", "Dubai Office"]
      },
      { 
        title: "Central Control Room Infrastructure & Video Storage", 
        description: "Designing and building centralized command centers equipped with high-density Network Video Recorders (NVR), reliable power fallbacks, and multi-display viewing walls for instant coordination.",
        locations: ["India HQ (Regional On-site Execution)"]
      },
      { 
        title: "Biometric Access Control & Attendance Integration", 
        description: "Deploying high-security facial recognition nodes and RFID access gates at critical perimeters. We integrate entry logs directly into corporate HRMS databases for automated attendance reporting.",
        locations: ["India HQ (Regional On-site Execution)"]
      }
    ],
    faqs: [
      {
        q: "Are your CCTV cameras suited for heavy industrial environments?",
        a: "Yes, we install IP67 weather-resistant, dust-proof, and explosion-rated hardware designed to survive harsh factory floors and warehouses."
      },
      {
        q: "How are real-time AI security alerts delivered?",
        a: "Our edge classification clusters dispatch push notifications, Telegram bot alerts, or native VMS console warnings in under 500ms."
      },
      {
        q: "Do you integrate access control with biometric scanners?",
        a: "We deploy facial recognition readers and high-speed RFID turnstiles, mapping attendance records in real-time to your existing HR database."
      }
    ]
  },
  {
    id: "cat-marketing",
    title: "Digital Growth & Performance Marketing",
    description: "Data-driven outreach, local authority amplification, and highly technical optimization to capture high-intent audiences and expand market share.",
    iconName: "TrendingUp",
    services: [
      { 
        title: "Technical Search Engine Optimization (SEO)", 
        description: "Maximizing visibility through technical site speed improvements, rich schema microdata, local search pack optimization, and high-authority contextual link acquisitions.",
        locations: ["New York Office", "Dubai Office", "Kuwait Office"]
      },
      { 
        title: "High-ROI Performance Marketing Campaigns", 
        description: "Designing and managing conversion-focused ad spending on Google Ads, LinkedIn, and Meta. We utilize high-fidelity funnel attribution modeling and continuous A/B testing to lower customer acquisition costs.",
        locations: ["New York Office", "Dubai Office", "Kuwait Office"]
      },
      { 
        title: "Digital Reputation Management (ORM) & PR", 
        description: "Monitoring and shaping online brand sentiment. We counter negative search outcomes, secure high-profile business directory listings, and coordinate press distribution across authoritative tech portals.",
        locations: ["New York Office", "Dubai Office"]
      },
      { 
        title: "B2B Content Strategy & Thought Leadership", 
        description: "Authoring deep-dive technical blogs, comprehensive industry whitepapers, and operational guides that position your leadership team as premier experts in your vertical.",
        locations: ["New York Office", "Dubai Office", "Kuwait Office"]
      }
    ],
    faqs: [
      {
        q: "How do you track and guarantee marketing campaign ROI?",
        a: "We build precise conversion attribution funnels, monitor cost-per-acquisition (CPA) closely, and conduct rigorous daily A/B split-tests."
      },
      {
        q: "How long does technical SEO take to boost our ranking?",
        a: "Site speed and code schema optimizations yield crawl improvements within weeks, while organic authority ranks rise steadily in 3 to 6 months."
      },
      {
        q: "What does Digital Reputation Management (ORM) involve?",
        a: "We continuously monitor reviews, optimize positive brand assets to outrank negative mentions, and secure high-authority PR placements."
      }
    ]
  },
  {
    id: "cat-campaign",
    title: "Political Campaign Technology",
    description: "Highly secure voter roster intelligence, offline-first booth coordination, and dynamic physical war room installations for high-tempo modern campaigns.",
    iconName: "Award",
    services: [
      { 
        title: "State-of-the-Art Campaign War Room Setups", 
        description: "Building physical and digital command centers combining satellite television monitoring, live internet trend crawlers, social listening alerts, and direct voter calling stations.",
        locations: ["India HQ (Pan India Execution)"]
      },
      { 
        title: "Advanced Constituency Analytics & Demographic Maps", 
        description: "Synthesizing massive public data assets to locate high-density vote targets, predict swing-voter trends, map regional infrastructure pain points, and allocate field resources efficiently.",
        locations: ["India HQ (Pan India Execution)"]
      },
      { 
        title: "Offline-First Booth Management Applications", 
        description: "A secure, resilient mobile application allowing field agents to register voter metrics, flag address migrations, track door-to-door checklist compliance, and sync results securely when connected.",
        locations: ["India HQ (Pan India Execution)"]
      },
      { 
        title: "Campaign CRM & Large-Scale Voter Engagement", 
        description: "A centralized platform to coordinate thousands of campaign volunteers, distribute digital marketing material via targeted broad-spectrum SMS/WhatsApp queues, and register direct feedback.",
        locations: ["India HQ (Pan India Execution)"]
      }
    ],
    faqs: [
      {
        q: "How secure is constituent voter data within your platform?",
        a: "Extremely secure. All voter demographic databases operate behind multi-factor authentication (MFA) VPN tunnels with AES-256 data encryption."
      },
      {
        q: "Does your booth coordination app work in remote, offline zones?",
        a: "Yes. Field volunteers can catalog data, log checklists, and trace analytics entirely offline. The local store auto-syncs when signal returns."
      },
      {
        q: "What is included in your Campaign War Room setup?",
        a: "We engineer physical viewing walls, real-time voter swing projection charts, localized social media trend trackers, and high-volume calling lines."
      }
    ]
  }
];

export const METHODOLOGY_STAGES: MethodologyStage[] = [
  {
    step: "01",
    title: "Discover",
    subtitle: "Understanding Business Objectives First",
    description: "We invest time in interactive leadership workshops, stakeholder interviews, and process analysis. Our priority is defining your commercial goals before touching any technology.",
    deliverables: "Current State Assessment",
    keyPoints: ["Leadership workshops", "Business objective analysis", "Technology landscape review", "Risk identification"]
  },
  {
    step: "02",
    title: "Assess",
    subtitle: "Evaluating Environments and Gaps",
    description: "Our engineering and security specialists inspect existing IT networks, software applications, physical surveillance, and operational bottlenecks to build an objective diagnostic report.",
    deliverables: "Gap Analysis Report",
    keyPoints: ["Infrastructure reviews", "Security & VAPT audits", "Compliance verification", "Maturity benchmarking"]
  },
  {
    step: "03",
    title: "Design",
    subtitle: "Engineering the Future State",
    description: "Our consultants formulate a comprehensive blueprint, spanning network topologies, customized software architectures, database designs, and timelines aligned with your growth strategy.",
    deliverables: "Solution Blueprint & Roadmap",
    keyPoints: ["Technology Strategy", "Enterprise Architecture", "Cybersecurity Roadmap", "Implementation Timelines"]
  },
  {
    step: "04",
    title: "Implement",
    subtitle: "Disciplined Engineering and Integration",
    description: "A coordinated multidisciplinary team of developers, systems engineers, and project managers deploys hardware, builds software, and integrates APIs with minimum disruption to daily operations.",
    deliverables: "Operational Technology Environment",
    keyPoints: ["Infrastructure deployment", "Custom coding & database setups", "API integrations", "Surveillance setups"]
  },
  {
    step: "05",
    title: "Secure",
    subtitle: "Rigorous Testing and Hardening",
    description: "Before going live, the solution undergoes extreme security stress, vulnerability scans, penetration testing, compliance checks, and configuration reviews.",
    deliverables: "Secure Production Environment",
    keyPoints: ["Penetration Testing (VAPT)", "Performance & stress tests", "Compliance validation", "Config review"]
  },
  {
    step: "06",
    title: "Support",
    subtitle: "Proactive Managed Optimization",
    description: "We transition into long-term technology partners, providing computer AMC, firewall monitoring, continuous systems patch setups, helpdesk support, and continuous strategy updates.",
    deliverables: "Long-Term Managed Services Agreement",
    keyPoints: ["Computer AMC & hardware health", "Firewall & security monitoring", "Continuous code updates", "Helpdesk support"]
  }
];

export const INDUSTRIES_WE_SERVE: IndustryItem[] = [
  {
    id: "manufacturing",
    name: "Manufacturing & Industrial",
    iconName: "Factory",
    challenges: [
      "Securing expansive premises with limited manual guarding staff",
      "Industrial network outages halting assembly lines",
      "Lack of centralized tracking for critical machine alerts"
    ],
    solution: "Deploy AI Industrial Surveillance equipped with video-analytic heatmaps and restricted zone automated triggers. Partnered with high-resilience structured networking and hardware AMC support.",
    technologies: ["AI Surveillance", "Video Analytics", "Enterprise Networking", "Computer AMC"]
  },
  {
    id: "healthcare",
    name: "Healthcare & Clinics",
    iconName: "Hospital",
    challenges: [
      "Strict data compliance requirements regarding patient files",
      "Vulnerability to ransomware targeted at internal hospital networks",
      "Connecting fragmented clinical software across departments"
    ],
    solution: "Implement enterprise-grade firewalls, conduct security audits (VAPT), set up highly secured and encrypted remote database backups, and custom-integrate department APIs.",
    technologies: ["Firewall Management", "VAPT Audits", "Data Backups", "API Integration"]
  },
  {
    id: "political",
    name: "Political Campaigns & Groups",
    iconName: "Vote",
    challenges: [
      "Coordinating thousands of booth-level volunteers in real time",
      "Analyzing massive voter databases to identify swing regions",
      "Maintaining a secure, high-tempo digital communications loop"
    ],
    solution: "A complete election war room setup powered by constituency analytical dashboards, offline-first mobile booth applications, and advanced volunteer tracking CRMs.",
    technologies: ["Campaign CRM", "Booth App", "War Room Dashboard", "GEO SEO"]
  },
  {
    id: "logistics",
    name: "Warehousing & Logistics",
    iconName: "Truck",
    challenges: [
      "Inventory theft and asset tracking over multi-acre facilities",
      "Unsynchronized warehouse tracking spreadsheets",
      "Lack of real-time transit visibility for high-value cargo"
    ],
    solution: "Integrate automatic license plate recognition (ANPR) systems with custom warehouse management applications and secure industrial fiber networks.",
    technologies: ["ANPR Cameras", "Custom Software", "IoT Networks", "Cloud Storage"]
  },
  {
    id: "education",
    name: "Education & Large Campuses",
    iconName: "GraduationCap",
    challenges: [
      "Distributing reliable, safe high-bandwidth Wi-Fi to thousands of students",
      "Tracking student attendance and automating administrative files",
      "Securing student dormitories and open grounds"
    ],
    solution: "Implement centralized campus Wi-Fi infrastructure, deploy unified custom HRMS/student portals, and install wide-area high-definition surveillance setups.",
    technologies: ["Campus Networking", "Custom Portals", "Biometric Access", "Surveillance"]
  },
  {
    id: "startups",
    name: "Startups & Scaleups",
    iconName: "Rocket",
    challenges: [
      "Limited technical talent to architect initial MVP products",
      "Slow organic user acquisition channels on search engine listings",
      "Rapidly scaling cloud hosting costs as user base grows"
    ],
    solution: "Full-stack software engineering support (Web and Mobile), combined with AI-powered search optimization (GEO) and high-efficiency cost-conscious cloud setup.",
    technologies: ["Web/Mobile Apps", "GEO Search Optimization", "Cloud Architectures", "SEO"]
  }
];

export const GLOBAL_OFFICES: OfficeLocation[] = [
  {
    id: "hq",
    city: "Panchkula",
    country: "India (Headquarters)",
    building: "Ramgarh Area Office",
    address: "Ramgarh, Panchkula, Haryana – 134118",
    details: "On-site regional technical delivery & administrative headquarters.",
    timezone: "Asia/Kolkata",
    coordinates: { x: 67, y: 55 }
  },
  {
    id: "kuwait",
    city: "Kuwait City",
    country: "Kuwait",
    building: "Al Sahab Tower",
    address: "Level 18, Al-Ghanim Street, Kuwait City, Kuwait",
    details: "Strategic consulting and Gulf Cooperation Council (GCC) business operations.",
    timezone: "Asia/Kuwait",
    coordinates: { x: 50, y: 50 }
  },
  {
    id: "dubai",
    city: "Dubai",
    country: "United Arab Emirates",
    building: "One Central Complex",
    address: "8th & 9th Floor, Trade Center Second, Dubai, UAE",
    details: "Global business strategy and regional client coordination terminal.",
    timezone: "Asia/Dubai",
    coordinates: { x: 54, y: 52 }
  },
  {
    id: "ny",
    city: "New York",
    country: "United States",
    building: "One World Trade Center",
    address: "85th Floor, Lower Manhattan, New York, USA",
    details: "International technology development, IP scaling, and Americas advisory.",
    timezone: "America/New_York",
    coordinates: { x: 25, y: 38 }
  }
];

export const ENGAGEMENT_MODELS = [
  {
    title: "Consulting Engagements",
    description: "Strategic partnerships focused on formulation of technology strategies, structural digital audits, enterprise architecture roadmaps, and global cyber security advisory.",
    bullets: ["Technology Strategy & Audits", "Digital Transformation Plans", "Cybersecurity Advisory"]
  },
  {
    title: "Project-Based Executions",
    description: "Turnkey delivery of clearly bounded technical requirements like software development, industrial networking deployment, network security firewalls, or physical surveillance integration.",
    bullets: ["Web & Mobile App Builds", "AI Surveillance Setups", "Core Firewall & Networks"]
  },
  {
    title: "Managed IT Services & AMC",
    description: "Ongoing operational security and performance monitoring through Annual Maintenance Contracts (AMC), active firewall configurations, backups, and proactive helpdesk support.",
    bullets: ["Annual Computer Maintenance (AMC)", "Firewall & Security Management", "Proactive Helpdesk Operations"]
  },
  {
    title: "Dedicated Technical Staffing",
    description: "Augment your existing staff with highly trained, full-time remote engineers including software developers, AI specialists, VAPT cybersecurity experts, and digital growth managers.",
    bullets: ["Software & AI Engineers", "Security & VAPT Specialists", "Digital Growth Strategists"]
  }
];

export const INNOVATION_DIMENSIONS = [
  {
    label: "Business Value",
    question: "Does the technology solve a meaningful business challenge?",
    details: "We ensure every R&D initiative delivers measurable cost reductions, increased efficiency, or safety improvements before offering it to clients."
  },
  {
    label: "Technical Feasibility",
    question: "Can the technology integrate with existing legacy systems?",
    details: "We analyze compatibility, modular replacement potential, API wrappers, and operational complexity to guarantee smooth deployment."
  },
  {
    label: "Security",
    question: "Can the technology operate securely without creating risks?",
    details: "Security is non-negotiable. Every innovation is subjected to extreme vulnerability scans and secure code reviews."
  },
  {
    label: "Scalability",
    question: "Can the solution support future growth?",
    details: "Our software architectures and infrastructure setups are designed to handle 10x traffic expansion without complete structural replacement."
  }
];

export const CLIENT_TESTIMONIALS: ClientTestimonial[] = [
  {
    clientName: "Er. Ramesh Patyal",
    industry: "AI Industrial Surveillance & Manufacturing",
    projectSummary: "Deployed edge convolutional neural network (CNN) classifiers tuned to identify polychem PPE patterns, operating at sub-500ms latency with 24 enterprise dome cameras connected to a local Nvidia Jetson cluster.",
    resultMetric: "99.2% PPE compliance trigger rate",
    quote: "Sidigiqor's AI physical surveillance system transformed our Baddi factory plant. We don't have to manually check hundreds of cameras. The neural models detect boundary crossing and hard-hat violations in real-time, sending immediate Telegram alerts to our site supervisors.",
    company: "Shimla Hills Polychem Corp",
    clientRole: "VP of Operations & Industrial Safety",
    location: "Baddi, Himachal Pradesh (Industrial Hub)",
    technicalChallenge: "Manual auditing of safety compliance was slow, unreliable, and cost us multiple compliance safety penalties. Workers frequently entered high-risk chemical storage corridors without proper high-visibility jackets and protective gear.",
    technicalSolution: "Deployed 24 enterprise AI dome cameras connected to a local Nvidia Jetson Orin edge cluster. Built real-time convolutional neural network (CNN) classifiers tuned to identify customized polychem PPE patterns, operating at sub-500ms latency.",
    techStack: ["Nvidia Jetson Edge Modules", "Custom CNN", "Milestone VMS", "Telegram Bot API Gateway"],
    size: "lg"
  },
  {
    clientName: "Nasser Al-Subaie",
    industry: "Cyber Security & Finance",
    projectSummary: "Executed white-hat attack simulations, secured API route tokens with encrypted JSON Web Tokens (JWT), and drafted custom firewall containment rules.",
    resultMetric: "Zero critical penetration vulnerabilities",
    quote: "The comprehensive black-box VAPT audit conducted by Sidigiqor uncovered multiple deep API vulnerabilities in our primary customer portal. Their direct remediation roadmap made it incredibly simple for our local internal developer team to patch the gaps within 48 hours.",
    company: "Al-Sahab Investment Group",
    clientRole: "Director of Digital Infrastructure",
    location: "Kuwait City (Al Sahab Tower Link)",
    technicalChallenge: "Facing frequent micro-brute-force attacks and a lack of transparency into our global ERP endpoint security, exposing customer database records to potential leaks.",
    technicalSolution: "Executed an intense 10-day white-hat attack simulation targeting ERP endpoints, database layers, and remote VPN gateways. Drafted custom firewall containment rules and secured API route tokens with encrypted JSON Web Tokens (JWT).",
    techStack: ["Burp Suite Professional", "Custom Exploit Scripts", "Fortinet Hardening", "JSON Web Token Security"],
    size: "md"
  },
  {
    clientName: "Abhimanyu Chautala",
    industry: "Political Campaigns & Public Sector",
    projectSummary: "Engineered a centralized multi-tenant SQLite database running on secure servers and created an offline-capable field survey dashboard for ground volunteer analytics.",
    resultMetric: "4.2M+ constituent data points mapped",
    quote: "Operating a statewide election campaign requires absolute structural data accuracy. Sidigiqor designed and managed our central database architecture and built a real-time war room map that tracked voting trends and volunteer telemetry in under three seconds.",
    company: "Haryana Pragati Front",
    clientRole: "Campaign Lead & Coordinator",
    location: "Haryana (Panchkula-Chandigarh Core)",
    technicalChallenge: "Fragmented physical spreadsheets, slow ground feedback channels, and zero analytical insight into volunteer performance in crucial swing voting booths.",
    technicalSolution: "Engineered a centralized multi-tenant SQLite database running on secure servers. Created an offline-capable field survey dashboard for ground volunteers, rendering localized trend analytics onto high-density dashboard displays.",
    techStack: ["React", "PostgreSQL", "Real-Time WebSockets", "D3.js Trend Visualization"],
    size: "lg"
  },
  {
    clientName: "Dr. Ananya Sood",
    industry: "Healthcare & Digital Systems",
    projectSummary: "Rebuilt entire inpatient logistics routing using custom React and Node.js with real-time sync, eliminating administrative friction.",
    resultMetric: "4.8x patient allocation speedup",
    quote: "Our administrative staff was completely bogged down by legacy systems. Sidigiqor built a pristine Patient Logistics dashboard that syncs clinical records instantly. It completely eliminated our bottleneck.",
    company: "Vikas Meditech Systems",
    clientRole: "Head of Digital Patient Experience",
    location: "Mohali, Punjab",
    technicalChallenge: "Patient intake logs lagged behind clinical status, resulting in long waiting queues, duplicate paper files, and frustrated personnel.",
    technicalSolution: "Rebuilt their entire intranet queue logic using custom React and Node.js. Integrated an automated notification layer that pings attending clinicians the moment emergency ward intake coordinates change.",
    techStack: ["React 18", "Node.js Express", "Tailwind CSS", "Redis Queue Cache"],
    size: "sm"
  },
  {
    clientName: "Satish Grover",
    industry: "Logistics & IT Infrastructure Support",
    projectSummary: "Established comprehensive hardware computer AMC routines, physical deep cleanups, high-density backup power UPS modules, and failsafe fiber subnet ring re-routing.",
    resultMetric: "99.98% server node uptime",
    quote: "Having critical systems crash at our Zirakpur shipping yard halts dozens of cargo trucks immediately. Sidigiqor's Annual Maintenance Contract is our operational safety net. Their preventative checks ensure our systems are always solid.",
    company: "Apex Warehousing & Logistics",
    clientRole: "Chief Technology Officer",
    location: "Zirakpur, Punjab (Multi-Acre Hub)",
    technicalChallenge: "Frequent server freezes due to heavy local dust accumulation, unpredictable voltage spikes, and outdated switch configurations.",
    technicalSolution: "Created a comprehensive hardware computer AMC routine. Conducted physical deep cleanups, set up high-density backup power UPS modules, and re-routed fiber subnet rings to guarantee failsafe networking.",
    techStack: ["Fiber Ring Topologies", "Enterprise PoE Switches", "Hardware AMC Diagnostic Routines"],
    size: "md"
  },
  {
    clientName: "Sarah Jenkins",
    industry: "Digital Growth & Search Optimization",
    projectSummary: "Audited global technical footprint and restructured whitepapers with GEO metadata tags, compiling clean markdown arrays and citations.",
    resultMetric: "+320% LLM recommended search visibility",
    quote: "With modern buyers bypassing standard Google queries to ask LLMs for advice, we had no strategy. Sidigiqor's Generative Engine Optimization restructured our technical whitepapers to make sure we are recommended by name.",
    company: "Zeta Energy Solutions",
    clientRole: "Global Marketing VP",
    location: "London, United Kingdom (Strategic Partnership)",
    technicalChallenge: "Completely invisible in synthesized AI search results (Gemini, Perplexity, ChatGPT), losing high-ticket enterprise leads to competitors.",
    technicalSolution: "Audited entire technical footprint. Restructured text schemas with specialized metadata tags, compiled clean markdown arrays, and built citations across authoritative contextual indexes.",
    techStack: ["GEO Schema Architectures", "Markdown Optimization", "Semantic Keyword Indexing"],
    size: "sm"
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Meena Rana",
    role: "Director | Board Member",
    bio: "Provides strategic leadership, corporate governance, and organizational direction while supporting long-term business growth, operational excellence, and global expansion initiatives.",
    category: "executive",
    department: "Executive Leadership"
  },
  {
    name: "Sahil Rana",
    role: "Co-Founder | Board Member",
    bio: "Leads enterprise technology consulting, digital transformation, cybersecurity strategy, AI-driven business solutions, IT infrastructure modernization, and international business development across multiple industries.",
    category: "executive",
    department: "Executive Leadership"
  },
  {
    name: "Akshay Thakur",
    role: "Head of International Business Development",
    bio: "Drives international business expansion, strategic partnerships, enterprise sales, and client acquisition across India, GCC, Europe, the United Kingdom, and North America.",
    category: "development",
    department: "International Business & Growth"
  },
  {
    name: "Sumeet Thakur",
    role: "Head of Artificial Intelligence & Machine Learning",
    bio: "Leads AI research, machine learning solutions, intelligent automation, predictive analytics, and next-generation AI product development.",
    category: "engineering",
    department: "Engineering & Technology"
  },
  {
    name: "Naveen Sharma",
    role: "Head of IT Infrastructure & Enterprise Systems",
    bio: "Responsible for enterprise infrastructure architecture, cloud solutions, server management, networking, virtualization, and managed IT services.",
    category: "engineering",
    department: "Engineering & Technology"
  },
  {
    name: "Rahul Kashyap",
    role: "Head of Cyber Security Consulting",
    bio: "Provides cybersecurity strategy, VAPT, governance, compliance, risk assessment, firewall security, endpoint protection, and security consulting.",
    category: "consultant",
    department: "Cyber Security & AI Consulting"
  },
  {
    name: "Mahak Khanda",
    role: "Head of AI Video Analytics Consulting",
    bio: "Specializes in AI-powered surveillance systems, intelligent video analytics, industrial monitoring, smart security solutions, and operational intelligence.",
    category: "consultant",
    department: "Cyber Security & AI Consulting"
  },
  {
    name: "Sandeep Sharma",
    role: "Lead Consultant – Website Design & Development",
    bio: "Delivers enterprise websites, corporate portals, UI/UX strategy, CMS platforms, and digital experience solutions.",
    category: "consultant",
    department: "Digital Engineering"
  },
  {
    name: "Ishant Rana",
    role: "Lead Consultant – Software & Mobile Application Development",
    bio: "Designs and develops scalable enterprise software, business applications, ERP, CRM, and mobile solutions.",
    category: "consultant",
    department: "Digital Engineering"
  },
  {
    name: "Anshul Rana",
    role: "Head of Customer Relationship Management",
    bio: "Leads customer engagement, account management, client success initiatives, project coordination, and long-term relationship development.",
    category: "development",
    department: "Customer Success"
  },
  {
    name: "Ishita Verma",
    role: "Head of Human Resources",
    bio: "Oversees talent acquisition, employee engagement, organizational development, performance management, and corporate culture.",
    category: "executive",
    department: "Human Resources"
  },
  {
    name: "Avneet Kaur",
    role: "Head of Digital Marketing",
    bio: "Leads SEO, AEO (Answer Engine Optimization), GEO (Generative Engine Optimization), paid advertising, social media strategy, content marketing, and digital brand growth.",
    category: "development",
    department: "Digital Marketing"
  },
  {
    name: "Shivam Rana",
    role: "Head of Political Consulting",
    bio: "Provides strategic election campaign planning, political technology solutions, voter outreach strategies, digital campaigning, and constituency engagement.",
    category: "consultant",
    department: "Political Consulting Division"
  },
  {
    name: "Meenakshi Thakur",
    role: "Political Advisor",
    bio: "Advises on political communication, campaign strategy, public engagement, constituency development, and policy support.",
    category: "consultant",
    department: "Political Consulting Division"
  }
];


