import { SERVICE_CATEGORIES } from "../data";

export interface ServiceData {
  title: string;
  subtitle: string;
  tagline: string;
  overview: string;
  challenges: string[];
  needWhy: string[];
  approach: string;
  frameworkSteps: { num: string; title: string; desc: string }[];
  portfolio: { title: string; desc: string }[];
  industries: string[];
  regions: {
    onsite: string[];
    national: string[];
    intl: string[];
  };
  process: { stage: string; desc: string }[];
  whyChoose: string[];
  benefits: string[];
  techStack: string[];
  engagementModels: string[];
  faqs: { q: string; a: string }[];
}

export function getSpecificServiceData(serviceName: string, categoryName: string): ServiceData {
  const name = serviceName.toLowerCase();

  // 1. Campaign CRM & Large-Scale Voter Engagement
  if (name.includes("campaign crm") || (name.includes("voter") && name.includes("engagement"))) {
    return {
      title: "Campaign CRM & Large-Scale Voter Engagement",
      subtitle: "Enterprise Voter Relationship Management, High-Volume Broadcasts & Dynamic Volunteer Tracking",
      tagline: "Unify voter demographics, coordinate multi-tier volunteer teams, and manage mass outreach securely on a single command platform.",
      overview: "Electoral scaling requires enterprise-grade communication. Sidigiqor Technologies delivers highly secure, single-tenant Campaign CRM platforms built to manage millions of voter profiles. Our systems connect voter rosters with demographic GIS indicators, coordinate localized ground volunteers, and orchestrate high-throughput SMS, automated calling, and official WhatsApp Business API broadcast queues. We enforce strict role-based access, keeping your critical campaign databases isolated from digital leaks and lateral data theft.",
      challenges: [
        "Fragmented voter records sitting in un-synced spreadsheets across regional offices.",
        "Inefficient volunteer coordination leading to duplicated outreach and wasted operational funds.",
        "Massive delay in dispatching campaign notices and counter-narratives to local booths.",
        "High security risks of database leaks exposing voter alignments to opposing camps.",
        "Blocked messaging campaigns due to non-compliance with local DLT / telecom regulations.",
        "No structured mechanism to track field volunteer door-to-door progress in real-time."
      ],
      needWhy: [
        "Sovereign Campaign CRM Hub protecting voter alignments with strict multi-factor security.",
        "Unified WhatsApp Business API Integration with automated response templates.",
        "Granular Volunteer Progress Tracker mapping door-to-door coverage metrics.",
        "Localized SMS & Voice Broadcast Queues designed to bypass standard congestion.",
        "Dynamic Voter Segment Filters grouping rosters by priority local issues.",
        "Interactive Operational KPI Wall showing active voter sentiments and engagement rates."
      ],
      approach: "We design campaign software with a primary focus on security and high-volume throughput. Our team configures isolated cloud database instances, integrates compliant telecom messaging tunnels, and trains campaign managers to operate clean dashboard metrics confidently under high-stress conditions.",
      frameworkSteps: [
        { num: "01", title: "Roster Structuring", desc: "Ingesting historical constituency voter registries into secure, indexed databases." },
        { num: "02", title: "API Gateway Setup", desc: "Configuring official DLT routing and high-throughput messaging channels." },
        { num: "03", title: "Field App Sync", desc: "Linking CRM profiles with offline-first booth operator applications." },
        { num: "04", title: "Command Handover", desc: "Rigorous system walkthroughs, administrator training, and key escrow." }
      ],
      portfolio: [
        { title: "Sovereign Voter Relationship Portals", desc: "High-security single-tenant databases tracking millions of regional voter records." },
        { title: "Compliant WhatsApp Broadcast Engines", desc: "Official WhatsApp Cloud API systems delivering localized campaign updates." },
        { title: "Field Volunteer Tracking Hubs", desc: "Interactive mobile logs mapping door-to-door canvas progress and feedback." },
        { title: "DLT-Optimized SMS Gateways", desc: "Automated, pre-approved text templates designed for rapid constituency outreach." },
        { title: "Interactive Sentiment Dashboards", desc: "Real-time looker walls monitoring constituency voter priority metrics." },
        { title: "Role-Based Security Locks", desc: "Active data masking shielding voter contact lists from unauthorized operators." }
      ],
      industries: [
        "Constituency Campaign Headquarters",
        "Political Advisory & Public Relations Firms",
        "Non-Profit Advocacy & Civic Organizations",
        "Large-Scale Membership Associations"
      ],
      regions: {
        onsite: ["Panchkula War Room Core", "Mohali Tech Parks", "Tricity Regional Consulting Core"],
        national: ["Pan India Sovereign Political Technology Frameworks"],
        intl: ["Kuwait City Strategy Hub", "Dubai One Central", "London Campaign Centers"]
      },
      process: [
        { stage: "Consulting", desc: "Analyzing constituency sizes, volunteer counts, and digital outreach rules." },
        { stage: "Database Build", desc: "Engineering isolated PostgreSQL schemas with localized spatial indexing." },
        { stage: "API Tunneling", desc: "Configuring high-speed Twilio and WhatsApp Cloud API pipelines." },
        { stage: "Portal Layout", desc: "Designing simple, intuitive, high-contrast dashboards for on-field staff." },
        { stage: "Stress Testing", desc: "Simulating peak message loads of 100,000 broadcasts hourly." },
        { stage: "Operator Launch", desc: "Conducting hands-on command workshops for campaign managers." },
        { stage: "War Room Support", desc: "Active on-field database admins and technical support throughout election cycles." }
      ],
      whyChoose: [
        "Strict database sovereignty with zero third-party data tracking.",
        "Proven capacity managing high-volume, time-sensitive campaigns.",
        "Deep expertise navigating DLT and regional telecom regulations.",
        "Direct access to Sidigiqor developers and database administrators.",
        "Sustained regional presence headquartered in Panchkula Tricity.",
        "Comprehensive training guides ensuring quick volunteer onboarding."
      ],
      benefits: [
        "Complete control over voter database integrity and credentials.",
        "Substantially faster campaign notice dispatch speeds.",
        "Improved volunteer productivity through structured, assigned tasks.",
        "Higher conversion rates from localized, personalized campaign messaging.",
        "Reduced operational wastage through real-time field progress tracking.",
        "Assured business continuity and security throughout high-stress cycles."
      ],
      techStack: ["React & Node.js", "PostgreSQL Spatial DB", "Twilio & WhatsApp Cloud API Platforms", "BullMQ background task queues", "Redis cache buffers", "Docker container clusters"],
      engagementModels: [
        "Constituency Turnkey Campaign Technology Deployment",
        "Campaign CRM Custom Integration Package",
        "Active Election Support & DB Maintenance Retainer",
        "Strategic Political Technology Consulting"
      ],
      faqs: [
        { q: "Is our voter database safe from competitor hacking?", a: "Yes. We build entirely single-tenant environments. Your database is isolated, encrypted at rest with AES-256, and accessible only via strict multi-factor logins." },
        { q: "Do you handle WhatsApp DLT and template approvals?", a: "Absolutely. We manage the entire official registration process, ensuring templates comply with regional guidelines to prevent number blocking." },
        { q: "Can we use the CRM in areas with poor internet connection?", a: "Yes. We pair our campaign CRM with offline-first mobile tools that cache local registries and sync data back when connection resumes." },
        { q: "How long does it take to deploy a custom campaign CRM?", a: "A complete constituency-scale deployment requires 3 to 6 weeks, including data cleaning, API integrations, and volunteer onboarding." }
      ]
    };
  }

  // 2. Machine Learning Solutions & Predictive Analytics
  if (name.includes("predictive") || (name.includes("machine") && name.includes("learning"))) {
    return {
      title: "Machine Learning Solutions & Predictive Analytics",
      subtitle: "Enterprise Data Mining, Statistical Predictive Modelling & Pattern Classifiers",
      tagline: "Turn historical databases into predictive engines that forecast demand, optimize inventories, and automate classification.",
      overview: "Data without forecasting is passive history. Sidigiqor Technologies builds custom Machine Learning solutions and Predictive Analytics models. We process multi-gigabyte transactional histories, customer lifecycle touchpoints, and machinery sensor logs to deploy automated classification systems, sentiment regressors, and anomaly detection pipelines. We train algorithms on local, secure servers, ensuring your intellectual property and user privacy remain perfectly isolated and corporate-aligned.",
      challenges: [
        "Unutilized enterprise transaction logs and historical files sitting dead in legacy warehouses.",
        "High inventory carrying costs due to inaccurate product and demand forecasting.",
        "Slow customer churn detection leaving sales teams blind to accounts at risk.",
        "Undetected operational anomalies in heavy machinery causing costly, sudden breakdowns.",
        "High manual processing error rates in high-volume underwriting or claim categorization.",
        "Struggling to integrate statistical ML algorithms with existing legacy ERP backends."
      ],
      needWhy: [
        "Demand & Sales Forecasting Engine to optimize warehousing overhead.",
        "Dynamic Customer Churn Prediction Models to retain high-ticket B2B accounts.",
        "Automated Document & Transaction Classification pipelines reducing manual labour.",
        "Predictive Maintenance Triggers based on real-time operational sensor feeds.",
        "Tailored Risk Underwriting Algorithms customized to regional market metrics.",
        "Sovereign Model Training ensuring complete data confidentiality and IP ownership."
      ],
      approach: "We design ML systems around business utility, not algorithm hype. We audit your active database structures, extract clean training features, build validation cohorts, and train custom statistical classifiers optimized for sub-second API prediction calls.",
      frameworkSteps: [
        { num: "01", title: "Feature Extraction", desc: "Ingesting historical databases and engineering clean training variables." },
        { num: "02", title: "Model Engineering", desc: "Training custom regressors, decision trees, and ensemble networks." },
        { num: "03", title: "REST API Integration", desc: "Deploying model prediction checkpoints as high-speed internal API endpoints." },
        { num: "04", title: "Drift Calibration", desc: "Continuous model precision monitoring and scheduled retraining cycles." }
      ],
      portfolio: [
        { title: "Dynamic Demand Forecasters", desc: "Time-series predictive models forecasting product demand for regional distributors." },
        { title: "B2B Churn Alert Systems", desc: "Sentiment and activity classifiers flagging accounts with high drop-out risks." },
        { title: "Predictive Thermal Maintenance", desc: "Anomaly detectors analyzing industrial sensor data to warn of mechanical fatigue." },
        { title: "Corporate Expense Categorizer", desc: "Automated NLP classifier labeling and auditing internal finance claims." },
        { title: "Credit Score Modellers", desc: "Alternative risk profiling algorithms utilizing behavioral transactional metrics." },
        { title: "Model Drift Monitors", desc: "Continuous metric collectors measuring live predictive accuracy and data decay." }
      ],
      industries: [
        "Heavy Manufacturing & Assembly Plants",
        "E-Commerce Brands & Logistics Yards",
        "Clinical Networks & Healthcare Groups",
        "Banking & Specialized Financial Houses",
        "Enterprise SaaS Providers"
      ],
      regions: {
        onsite: ["Panchkula HQ Labs", "Mohali Tech District", "Chandigarh Corporate Sectors", "Baddi Industrial Parks"],
        national: ["Pan India Enterprise Predictive Deployments"],
        intl: ["Kuwait Al Sahab Tower Hub", "Dubai One Central", "London", "New York"]
      },
      process: [
        { stage: "Consulting", desc: "Evaluating current database sizes, labeling quality, and operational goals." },
        { stage: "Data Slicing", desc: "Cleaning legacy records and isolating high-correlation feature matrices." },
        { stage: "Algorithm Build", desc: "Training custom decision forests, neural classifiers, or XGBoost clusters." },
        { stage: "Accuracy Tuning", desc: "Testing models against isolated validation cohorts to target >95% precision." },
        { stage: "API Packaging", desc: "Bundling models into containerized Docker images with secure REST endpoints." },
        { stage: "ERP Connecting", desc: "Wiring prediction outputs directly into your active CRM, HRMS, or logistics dashboards." },
        { stage: "SLA Support", desc: "Reviewing prediction drift, updating datasets, and pushing regular weight patches." }
      ],
      whyChoose: [
        "Experienced mathematical modelers and certified data engineers.",
        "Complete source code ownership and model checkpoint transfer.",
        "Focus on practical margin improvements over theoretical buzzwords.",
        "Seamless integration with existing Node/Python backend systems.",
        "Robust regional support coordinate from our Panchkula Tricity core.",
        "Verified delivery track record with leading Middle East distribution conglomerates."
      ],
      benefits: [
        "Dramatically reduced inventory carrying overhead costs.",
        "Proactive client retention via automatic behavioral flag alerts.",
        "Lowered manual document processing and classification error rates.",
        "Fewer mechanical breakdowns through early sensory diagnostic warnings.",
        "Highly confident pricing and distribution expansion forecasting.",
        "Secured market value through custom-built intellectual property."
      ],
      techStack: ["Python", "Scikit-Learn", "Pandas & NumPy", "XGBoost", "Apache Spark Big Data Engine", "MLflow Repository", "TensorFlow & PyTorch", "Docker & AWS ECS Predict Nodes"],
      engagementModels: [
        "Custom Machine Learning Turnkey Project",
        "Predictive Model Architecture Audit",
        "Data Engineering & Pipeline Build Retainer",
        "Long-Term Algorithm Tuning & Support AMC"
      ],
      faqs: [
        { q: "What data volume is required to train custom ML models?", a: "While larger datasets improve precision, we can build highly effective predictive models with a few thousand cleanly formatted, labeled historical records." },
        { q: "Will our customer data leave our local secure servers?", a: "No. We deploy and train all models locally on your private cloud (AWS VPC/GCP) or on-premises server racks, ensuring zero user privacy leaks." },
        { q: "What is model drift and how is it managed?", a: "Model drift is the slow decay of prediction accuracy as real-world market behaviors change. We include continuous monitoring scripts and simple retraining pipelines to prevent drift." },
        { q: "How are the prediction outputs delivered to our active staff?", a: "We wrap our models in fast, lightweight REST APIs that connect directly to your existing CRM, inventory monitors, or Slack alert channels." }
      ]
    };
  }

  // 3. NLP AI Chatbots & Unified Virtual Assistants
  if (name.includes("nlp") || name.includes("chatbot") || name.includes("virtual assistant")) {
    return {
      title: "NLP AI Chatbots & Unified Virtual Assistants",
      subtitle: "Semantic Retrieval-Augmented Generation (RAG), Automated Intent Mapping & Conversational Agent Systems",
      tagline: "Deploy highly intelligent, multi-lingual conversational agents that resolve customer support queries in under 2 seconds.",
      overview: "Standard support templates frustrate users. Sidigiqor Technologies engineers conversational virtual assistants utilizing Gemini models, custom semantic vector databases, and Retrieval-Augmented Generation (RAG). Our chatbots do not guess responses; they fetch answers exclusively from your uploaded manuals, compliance books, and product directories. This guarantees professional, accurate, and secure communication while maintaining full human-in-the-loop escalation paths for high-value enterprise accounts.",
      challenges: [
        "Support teams bogged down resolving repetitive password resets, shipping checks, and FAQ queries.",
        "Choppy, robotic chatbot scripts failing to understand natural user intent and phrases.",
        "Hallucinated or incorrect product information delivered by generic AI engines to active clients.",
        "No structured escalation pipeline to transfer complex, high-value leads to live human agents.",
        "High cost of maintaining multi-lingual customer support reps across global territories.",
        "Struggling to sync chat records with active enterprise CRM and lead databases."
      ],
      needWhy: [
        "RAG-Powered Custom Chatbots retrieving answers from verified company whitepapers.",
        "Semantic Intent Mapping ensuring natural, context-aware conversations.",
        "Multi-Lingual Customer Support fluent in Arabic, English, Spanish, and Hindi by default.",
        "Fail-Safe Human Escapement loops handing off chats to active support staff seamlessly.",
        "Pre-Configured LLM System Prompts blocking prompt injection and hostile queries.",
        "Direct CRM Synchronization loging lead metadata and discussion points instantly."
      ],
      approach: "We build chatbots with an absolute focus on accuracy and brand safety. We construct isolated semantic databases, write strict prompt constraints, and design intuitive chat interfaces that look elegant and render instantly on any browser or device.",
      frameworkSteps: [
        { num: "01", title: "Knowledge Extraction", desc: "Gathering and cleaning company FAQs, PDF manuals, and catalog directories." },
        { num: "02", title: "Vector Indexing", desc: "Converting text assets into high-performance semantic vector embeddings." },
        { num: "03", title: "LLM Orchestration", desc: "Configuring strict system prompts, response constraints, and REST APIs." },
        { num: "04", title: "Handover Routing", desc: "Setting up automated live chat notifications for your support department." }
      ],
      portfolio: [
        { title: "RAG-Powered Corporate Support Bots", desc: "Conversational agents retrieving answers from complex technical catalogs." },
        { title: "Semantic Lead Capture Widgets", desc: "Interactive landing-page widgets qualifying and routing prospective leads." },
        { title: "Multi-Lingual Helpdesk Assistants", desc: "Support bots handling inquiries across Middle East and global divisions." },
        { title: "Automated Ticket Dispatchers", desc: "NLP agents categorizing user issues and emailing appropriate teams." },
        { title: "Interactive Voice Response (IVR) Sync", desc: "Connecting text chatbots with dynamic speech-to-text calling channels." },
        { title: "Corporate Policy Internal Assistants", desc: "Internal HR bots helping employees search staff policies and guidelines." }
      ],
      industries: [
        "E-Commerce & Digital Distributors",
        "Clinical Networks & Healthcare Sites",
        "Technology SaaS Providers",
        "Banking & Wealth Advisors",
        "Large-Scale Educational Institutions"
      ],
      regions: {
        onsite: ["Panchkula HQ Core", "Chandigarh Sectors", "Mohali Tech District"],
        national: ["Pan India Corporate Chatbot Deployments"],
        intl: ["Kuwait City Consulting", "Dubai One Central Hub", "London", "New York"]
      },
      process: [
        { stage: "Consulting", desc: "Mapping current ticket volumes, top queries, and software integration needs." },
        { stage: "Knowledge Cleanse", desc: "Parsing and formatting raw support PDFs, website articles, and guides." },
        { stage: "Database Ingestion", desc: "Indexing content into a high-speed secure vector database (Pinecone/PostgreSQL)." },
        { stage: "Prompt Calibration", desc: "Authoring strict brand voice guidelines and security injection walls." },
        { stage: "Web Development", desc: "Coding responsive, modern React chat widgets with custom color accents." },
        { stage: "System Sync", desc: "Connecting chat webhooks to Slack, Discord, email, or your active CRM portals." },
        { stage: "Launch & Support", desc: "Conducting user testing, analyzing fallback rates, and retraining model vectors." }
      ],
      whyChoose: [
        "Expert engineers certified in advanced LLM prompt architecture.",
        "Complete ownership of vector storage databases and credentials.",
        "Rigorous prompt hardening preventing brand safety infractions.",
        "Lightweight, fast React widget integrations requiring zero maintenance.",
        "Sustained local support coordinate from our Panchkula headquarters.",
        "Proven delivery success boosting conversion rates for Middle East partners."
      ],
      benefits: [
        "Up to 80% reduction in basic, repetitive customer helpdesk tickets.",
        "24/7/365 instant support availability without increased overhead.",
        "Significantly higher conversion rates on organic web visitors.",
        "Clean, structured conversational data logs identifying user pain points.",
        "Consistent, highly professional brand voice delivered on every query.",
        "Reduced workload stress on active human support technicians."
      ],
      techStack: ["Node.js & Python", "Google Gemini 1.5 Flash SDK", "LangChain & LlamaIndex", "Pinecone Vector DBMS", "PostgreSQL pgvector", "React & Tailwind CSS", "WebSockets"],
      engagementModels: [
        "Turnkey AI Chatbot Design & Deployment",
        "Semantic Vector Database Setup Package",
        "Continuous Chatbot Tuning & Retraining Retainer",
        "Strategic LLM Prompt Consulting"
      ],
      faqs: [
        { q: "Can the chatbot hallucinate or deliver false details?", a: "No. By utilizing Retrieval-Augmented Generation (RAG), the bot is strictly locked to retrieve facts from your uploaded documents, falling back to a human transfer if information is missing." },
        { q: "Is it easy to integrate the bot into our existing website?", a: "Yes. We deliver the widget as a lightweight, single-line JavaScript snippet that works instantly on any standard website or custom CMS platform." },
        { q: "How does the live-chat handoff work?", a: "When the bot detects a complex question or a high-intent pricing query, it instantly pings your support team via email or Slack, passing the complete discussion history to a live agent." },
        { q: "What languages are supported by your virtual assistants?", a: "Our models natively support over 50 languages, including English, Arabic, Spanish, French, German, and Hindi, automatically adapting to the user's browser language." }
      ]
    };
  }

  // 4. Internet of Things (IoT) & Smart Sensor Networks
  if (name.includes("iot") || name.includes("internet of things") || name.includes("sensor networks")) {
    return {
      title: "Internet of Things (IoT) & Smart Sensor Networks",
      subtitle: "Telemetry Ingestion, Industrial Mesh Networks & Real-Time Time-Series Visualizations",
      tagline: "Deploy rugged telemetry sensors and edge gateways to monitor temperature, humidity, and machinery status in real-time.",
      overview: "Physical assets operate in silence until they break. Sidigiqor Technologies deploys enterprise-grade IoT mesh sensor networks and high-throughput telemetry ingestion gates. We configure industrial-grade ESP32, Modbus, and Zigbee sensor arrays to track environmental vitals (humidity, temperature, power grid loads), parsing metrics into time-series InfluxDB/PostgreSQL databases. We display all data on custom real-time Grafana dashboards, sending instant Telegram, SMS, or audio warnings when values cross safety thresholds.",
      challenges: [
        "Sudden, catastrophic inventory spoilage in clinical or warehouse cooling bays.",
        "No real-time tracking of voltage fluctuations and backup UPS power health.",
        "Manual parameter logging on paper worksheets causing delayed operational safety audits.",
        "High network latency or signal drops inside isolated steel-framed industrial plants.",
        "Weak security protocols in local IoT devices exposing company networks to hacks.",
        "Struggling to consolidate disparate sensor protocols into a single, unified view."
      ],
      needWhy: [
        "Rugged Environmental Sensors tracking climate metrics in harsh facilities.",
        "Secure Industrial Edge Gateways consolidating disparate hardware signals.",
        "99.9% Reliable Message Queues (MQTT/AMQP) ensuring zero telemetry loss.",
        "Lightweight Time-Series DBMS logging millions of records without database lockup.",
        "Instant Out-of-Bounds Dispatches via SMS, email, or Telegram alerts.",
        "Centralized Grafana Dashboards displaying active metrics on physical display walls."
      ],
      approach: "We build physical networks with 'defense-in-depth' principles. We isolate IoT hardware on secure subnets, use robust transport protocols, and design responsive dashboards that keep on-site operators informed at a glance.",
      frameworkSteps: [
        { num: "01", title: "Hardware Survey", desc: "Profiling physical site boundaries, metal obstructions, and sensor coordinates." },
        { num: "02", title: "Network Layout", desc: "Deploying secure Zigbee/Wi-Fi mesh grids and edge computer controllers." },
        { num: "03", title: "Database Setup", desc: "Configuring high-throughput time-series databases and routing pipelines." },
        { num: "04", title: "Alert Orchestration", desc: "Wiring sensor anomaly limits to automated messaging gateways." }
      ],
      portfolio: [
        { title: "Clinical Cold-Chain Monitors", desc: "Rigorous thermal sensors logging medical storage metrics continuously." },
        { title: "Industrial Vibration Trackers", desc: "Telemetry modules predicting mechanical wear on heavy production lines." },
        { title: "Sovereign Smart Grid Gauges", desc: "Voltage and battery loggers monitoring backup warehouse UPS health." },
        { title: "Automated Facility Air Monitors", desc: "Gas and humidity sensors tracking workplace air quality metrics." },
        { title: "Centralized Grafana consoles", desc: "Real-time telemetry display portals configured for terminal operations rooms." },
        { title: "Mesh Gateway Systems", desc: "Industrial routers linking hundreds of local sensors to secure cloud databases." }
      ],
      industries: [
        "Clinical Networks & Pharmaceutical Sites",
        "Logistics Hubs & Cold-Storage Facilities",
        "Heavy Manufacturing & Steel Assembly Lines",
        "Corporate Offices & Data Centers"
      ],
      regions: {
        onsite: ["Panchkula HQ Lab", "Baddi Industrial Belt", "Mohali Tech Area", "Punjab", "Haryana", "Himachal Pradesh"],
        national: ["Pan India Industrial IoT Implementations"],
        intl: ["Kuwait Office Strategy Hub", "Dubai Trade Tower Core", "London", "New York"]
      },
      process: [
        { stage: "Consulting", desc: "Mapping active metrics, target tolerances, and structural site layouts." },
        { stage: "Sensor Selection", desc: "Sourcing certified, durable physical probes and edge controllers." },
        { stage: "Gateway Assembly", desc: "Assembling secure local edge computers with local caching capacity." },
        { stage: "Network Setup", desc: "Installing and tuning localized Zigbee or Wi-Fi mesh routing networks." },
        { stage: "DBMS Setup", desc: "Configuring high-speed time-series InfluxDB or TimescaleDB instances." },
        { stage: "Visual Coding", desc: "Building clean, high-contrast Grafana dashboard widgets and maps." },
        { stage: "SLA Calibration", desc: "Testing alert dispatches, checking battery levels, and formalizing AMC support." }
      ],
      whyChoose: [
        "Certified IoT specialists experienced in industrial mesh networking.",
        "Vast inventory of certified, rugged physical sensors and adapters.",
        "Total source code ownership and local, secure database setups.",
        "Clean, lightweight edge computing, reducing high cloud bandwidth needs.",
        "Robust support coordinated from our Panchkula headquarters.",
        "Sustained success implementing sensor telemetry in heavy industrial zones."
      ],
      benefits: [
        "Total protection against cold-chain inventory spoilage loss.",
        "Reduced downtime through predictive, automated machine failure alerts.",
        "Dramatically simplified regulatory climate reporting compliance.",
        "Secure digital monitoring of critical power grid assets.",
        "Sustained operational margin gains through smart automated tracking.",
        "Instant visual confirmation of facility vitals across all branches."
      ],
      techStack: ["ESP32 & Raspberry Pi", "MQTT & Modbus Protocols", "Node-RED Flow Orchestrator", "InfluxDB Time-Series DBMS", "Grafana Visualization", "Docker & Linux Edge Controllers", "Telegram API"],
      engagementModels: [
        "Turnkey Custom IoT Sensor Network Setup",
        "Telemetry Database & Grafana Dashboard Package",
        "Continuous Telemetry Auditing & Hardware Support AMC",
        "Strategic IoT Network Architecture Consulting"
      ],
      faqs: [
        { q: "How long do the physical sensor batteries last?", a: "Depending on telemetry update frequencies, our low-power Zigbee/BLE sensors run on standard lithium batteries for 2 to 5 years." },
        { q: "Can the system log metrics when local internet drops?", a: "Yes. Our edge gateways cache all incoming sensor telemetry locally and synchronize records to the central cloud once connection is restored." },
        { q: "How long do you store historical time-series logs?", a: "We design databases to hold multiple years of records, configuring automated data compression policies to optimize storage costs." },
        { q: "What is the typical timeframe for a factory IoT rollout?", a: "A complete physical facility deployment requires 6 to 12 weeks, including site mapping, hardware installation, and dashboard calibration." }
      ]
    };
  }

  // 5. CCTV Camera Deployments for Harsh Environments
  if (name.includes("harsh environments") || name.includes("cctv camera deployments")) {
    return {
      title: "CCTV Camera Deployments for Harsh Environments",
      subtitle: "IP67 Weatherproof Deployments, Optical Zoom Matrices & Heavy-Duty Physical Cable Topologies",
      tagline: "Lock down your manufacturing plants, outdoor fields, and high-dust zones with rugged, bulletproof IP surveillance hardware.",
      overview: "Standard security cameras fail under industrial stress. Sidigiqor Technologies delivers premium CCTV deployments specifically engineered for harsh environments, high-dust assembly lines, extreme heat zones, and high-moisture pharmaceutical blocks. We install certified IP67 weatherproof cameras, heavy-duty optical zooms, and explosion-proof enclosures. By planning precise lens geometry and routing shielded Cat6 copper cabling, we ensure your command monitors receive uninterrupted, high-definition video feeds 24/7.",
      challenges: [
        "Frequent camera failures caused by high industrial dust build-up inside enclosures.",
        "Corrupted video records or signal noise caused by electromagnetic motors.",
        "Inefficient camera placement leaving critical facility zones unmonitored.",
        "Short-lived hard drives in generic NVRs failing under high continuous write stress.",
        "Loss of surveillance records during power outages or facility grid trips.",
        "Struggling to manage and access multiple, disparate video systems across branches."
      ],
      needWhy: [
        "Certified IP67 Weatherproof Cameras resilient against heavy dust and rain.",
        "Explosion-Proof Enclosures engineered for high-risk chemical plants.",
        "Shielded Cat6 Copper Cabling blocking electromagnetic motor interference.",
        "High-Density RAID-6 NVR Arrays securing months of continuous records.",
        "Dedicated UPS Backup Batteries keeping surveillance active during grid drops.",
        "Centralized VMS software grouping all cameras into a single video wall."
      ],
      approach: "We build surveillance systems with a primary focus on physical durability and reliable cabling. We audit site layouts, select appropriate hardware tolerances, and deploy clean routing topologies that protect signal integrity.",
      frameworkSteps: [
        { num: "01", title: "Lens Survey", desc: "Profiling physical site boundaries, light conditions, and focal targets." },
        { num: "02", title: "Cabling Route", desc: "Designing secure Cat6 conduit paths to avoid electromagnetic interference." },
        { num: "03", title: "Server Setup", desc: "Installing rugged NVR equipment and configuring high-density storage arrays." },
        { num: "04", title: "Handover Launch", desc: "Conducting user workshops and handovers of central video keys." }
      ],
      portfolio: [
        { title: "IP67 Weatherproof Camera Deployments", desc: "Continuous outdoor surveillance nodes built to withstand heavy weather." },
        { title: "Explosion-Proof surveillance Systems", desc: "Specialized cameras configured for chemical and fuel processing plants." },
        { title: "High-Density Video Server Vaults", desc: "Centralized RAID-6 network recorders storing months of footage safely." },
        { title: "Thermal Perimeter Systems", desc: "Long-range thermal cameras tracking boundaries in complete darkness." },
        { title: "Optical Zoom Control consoles", desc: "Interactive physical desks with joystick zoom matrix controls." },
        { title: "PoE Fiber Switches Network", desc: "Industrial high-bandwidth networks linking distributed cameras." }
      ],
      industries: [
        "Heavy Manufacturing & Steel Plants",
        "Logistics Yards & High-Dust Warehouses",
        "Chemical & Fuel Processing Facilities",
        "High-Traffic Transport Hubs"
      ],
      regions: {
        onsite: ["Panchkula HQ Core", "Baddi Industrial Belt", "Mohali Tech Area", "Punjab", "Haryana", "Himachal Pradesh"],
        national: ["Pan India Industrial CCTV Deployments"],
        intl: ["Kuwait City Strategy Hub", "Dubai One Central", "Saudi Arabia", "London"]
      },
      process: [
        { stage: "Consulting", desc: "Analyzing operational areas, lighting conditions, and camera resolutions." },
        { stage: "Conduit Layout", desc: "Designing secure, metal-shielded cabling paths across the facility." },
        { stage: "Installation", desc: "Installing certified hardware cameras on structural steel mounts." },
        { stage: "Configuring", desc: "Syncing cameras to central high-density recording servers." },
        { stage: "Testing", desc: "Simulating power trips and checking UPS backup response times." },
        { stage: "Launch", desc: "Hands-on console training for on-site security supervisors." },
        { stage: "SLA support", desc: "Regular physical diagnostic sweeps, camera lens cleaning, and firmware patching." }
      ],
      whyChoose: [
        "Highly experienced field engineers based in Panchkula Tricity.",
        "Vast inventory of certified, durable physical cameras and mounts.",
        "Total source code ownership and local, secure database credentials.",
        "Rigorous stress testing verifying hardware tolerances before launch.",
        "Sustained regional presence with fast on-site dispatch support.",
        "Proven success implementing security systems in heavy industrial zones."
      ],
      benefits: [
        "100% reliable continuous video surveillance records across all zones.",
        "Significantly lower maintenance expenses through rugged hardware selection.",
        "Improved safety compliance scores via complete site monitoring.",
        "Protected digital video records secured inside encrypted server vaults.",
        "Reduced incident investigation times via simple central search tools.",
        "Assured business continuity for your partners and enterprise clients."
      ],
      techStack: ["Hikvision IP67 Dome & Bullet Cameras", "Dahua VMS", "PoE Managed Industrial Switches", "Cat6 Shielded Copper Cabling", "Seagate SkyHawk RAID-6 NVRs", "UPS Power Systems"],
      engagementModels: [
        "Complete End-to-End Turnkey CCTV Deployment",
        "Surveillance Architecture & Cable Design Package",
        "Comprehensive Annual Maintenance Contracts (AMC)",
        "Hybrid Cloud Video Storage Subscription (VSaaS)"
      ],
      faqs: [
        { q: "Can we monitor our cameras securely on mobile phones?", a: "Yes. We configure encrypted VPN tunnels so executives can view live streams and storage from anywhere in the world." },
        { q: "How long can we store continuous video records?", a: "We design high-density RAID-6 server setups that hold 30 to 90 days of high-definition continuous footage safely." },
        { q: "How do you protect cameras from physical vandal attempts?", a: "We install certified IK10 vandal-proof dome cameras designed to withstand severe direct impacts without cracking." },
        { q: "What is the typical timeframe for a factory CCTV deployment?", a: "A complete physical facility deployment requires 4 to 8 weeks, including site mapping, hardware installation, and VMS calibration." }
      ]
    };
  }

  // 6. Real-time Intelligent Video Analytics
  if (name.includes("real-time intelligent video") || name.includes("video analytics")) {
    return {
      title: "Real-time Intelligent Video Analytics",
      subtitle: "Sub-Second Boundary Security, Neural Crowd Mapping & Automated Dispatch Triggers",
      tagline: "Deploy highly accurate AI vision models to automate safety audits, inventory classification, and physical security.",
      overview: "Manual visual checking is slow and prone to human error. Sidigiqor Technologies trains and deploys custom Computer Vision models and Edge AI classifiers. We integrate custom neural networks with standard RTSP video feeds to automate safety compliance (PPE auditing), identify product defects on assembly lines, track vehicle movements (ANPR), and detect security breaches in under 500ms, providing actionable operational alerts.",
      challenges: [
        "Failing to track workplace safety compliance (PPE), resulting in severe penalties.",
        "Manual inspection of manufacturing defects slowing down production output.",
        "Security teams failing to monitor multiple CCTV feeds, missing critical events.",
        "Unsynchronized vehicle logging in logistics yards causing staging bottlenecks.",
        "High cost of specialized industrial cameras stalling vision project rollouts.",
        "Slow incident investigation times due to manual video scrubbing."
      ],
      needWhy: [
        "Automated Safety Compliance (PPE auditing, hard-hat, vest detection).",
        "Real-Time Assembly Defect Identification, minimizing wastage.",
        "Sub-Second Intrusion Detection in restricted facility zones.",
        "Automatic License Plate Recognition (ANPR) and vehicle classification.",
        "Heat-Mapping & Flow Analytics tracking physical site occupancy.",
        "Direct Integration with local VMS software and notification gateways."
      ],
      approach: "We train models using your actual facility images, ensuring maximum classification precision and near-zero false alarms. We deploy models on edge computers (like Nvidia Jetson) to process video locally, optimizing cloud bandwidth costs.",
      frameworkSteps: [
        { num: "01", title: "Dataset Capture", desc: "Recording real-world video segments and labeling target objects." },
        { num: "02", title: "Model Training", desc: "Training custom deep learning networks on isolated GPU clusters." },
        { num: "03", title: "Edge Deployment", desc: "Installing optimized model checkpoints on local Nvidia hardware." },
        { num: "04", title: "SLA Support", desc: "Monitoring model classification precision and updating datasets." }
      ],
      portfolio: [
        { title: "Custom Safety PPE Classifiers", desc: "Real-time auditing of hard-hats, high-visibility vests, and protective gear." },
        { title: "Defect Identification Systems", desc: "High-speed assembly line cameras scanning for physical product defects." },
        { title: "Intelligent ANPR Systems", desc: "Automatic license plate loggers integrated with access gates." },
        { title: "Facility Heat Mapping", desc: "Tracking visitor density, queue times, and layout bottlenecks." },
        { title: "Intrusion Detection Models", desc: "Sub-second boundary security alerts with object classification." },
        { title: "Model Checkpoint Tuning", desc: "Optimizing neural networks for local edge processors." }
      ],
      industries: [
        "Heavy Manufacturing & Steel Plants",
        "Logistics Hubs & Large Warehouses",
        "Hospital Complexes & Parking Lots",
        "Construction Sites & Multi-Acre Projects",
        "High-Traffic Public Transport Hubs"
      ],
      regions: {
        onsite: ["Panchkula HQ Development Lab", "Baddi Industrial Belt", "Tricity Testing Hubs"],
        national: ["Pan India Corporate Vision Deployments"],
        intl: ["Kuwait City Strategy Hub", "Dubai Edge Systems (One Central)", "London", "New York"]
      },
      process: [
        { stage: "Consulting", desc: "Analyzing operational goals, lighting challenges, and camera resolutions." },
        { stage: "Dataset Capture", desc: "Compiling actual video samples of target objects and labeling patterns." },
        { stage: "Model Engineering", desc: "Training custom CNN classifiers tuned for high-precision accuracy." },
        { stage: "Edge Integration", desc: "Deploying model checkpoints on local Nvidia Jetson processors." },
        { stage: "Software Sync", desc: "Connecting alert outputs to local SMS, Telegram, and VMS controllers." },
        { stage: "System Testing", desc: "Executing sandbox trails and validating edge classification speeds." },
        { stage: "Handover & Support", desc: "Providing administrator dashboards, model documentation, and AMC updates." }
      ],
      whyChoose: [
        "Experienced AI specialists certified in deep learning architectures.",
        "Custom datasets trained on your actual facility parameters.",
        "Highly optimized edge computing, eliminating high cloud bandwidth costs.",
        "Sub-500ms warning dispatches via secure messaging APIs.",
        "Proven success deploying vision systems in heavy industrial zones.",
        "Panchkula HQ coordinates fast regional support and upgrades."
      ],
      benefits: [
        "Complete safety compliance, avoiding regulatory liabilities.",
        "Improved product quality with automated defect scanners.",
        "Dramatically reduced manual video scrubbing and inspection times.",
        "Proactive, instant security threat warning dispatches.",
        "Optimized logistics flows through smart ANPR setups.",
        "Deeper visual metrics and business intelligence reporting."
      ],
      techStack: ["Python, OpenCV & CUDA", "TensorFlow, PyTorch & ONNX", "Nvidia Jetson & TensorRT Edge Engines", "YOLO & MobileNet Classifiers", "Milestone & Nx Witness VMS", "Telegram & SMS API Gateways"],
      engagementModels: [
        "Turnkey Custom Computer Vision Deployment",
        "AI Vision Algorithm Design & Training",
        "Edge AI Hardware & VMS Setup",
        "Long-Term Model Tuning & AMC SLA"
      ],
      faqs: [
        { q: "Can we use our existing security cameras for AI vision?", a: "Yes. Our edge processors can connect to standard RTSP video streams from your existing IP cameras, avoiding expensive sensor replacements." },
        { q: "How accurate are your custom AI vision models?", a: "We target a classification accuracy rating of 95% to 99% by training models on actual images of your facility, lighting, and target objects." },
        { q: "Does the system require high-speed cloud internet?", a: "No. All video processing is performed locally on local Nvidia hardware. Internet is only required to send text notifications or analytics digests." },
        { q: "What is the timeline for custom vision systems?", a: "Depending on dataset complexity and training requirements, custom vision projects require 8 to 16 weeks with staged milestones." }
      ]
    };
  }

  // 7. Central Control Room Infrastructure & Video Storage
  if (name.includes("control room") || name.includes("video storage")) {
    return {
      title: "Central Control Room Infrastructure & Video Storage",
      subtitle: "Console Ergonomics, Multi-Display Matrix Routing & High-Availability Server Engineering",
      tagline: "Build a high-security, ergonomic central command center to monitor all facilities on high-visibility wall panels.",
      overview: "Scattered monitors compromise operational visibility. Sidigiqor Technologies designs and deploys high-availability Central Control Room Command centers. We engineer heavy-duty display panel matrices, install high-density video storage vaults, route fiber video lines, configure matrix switches, and optimize operator consoles for minimum cognitive fatigue, bringing all your surveillance feeds under one unified, secure command station.",
      challenges: [
        "Operator fatigue caused by poorly arranged displays and bad console ergonomics.",
        "Corrupted security footage caused by un-optimized storage setups or drives.",
        "Difficulties locating specific camera angles during critical facility incidents.",
        "System downtime during localized power spikes or server room overheating.",
        "Surveillance gaps caused by slow manual stream switches on display walls.",
        "No continuous remote health tracking of recording nodes or drive spaces."
      ],
      needWhy: [
        "Multi-Display Command Walls providing complete concurrent visual coverage.",
        "Ergonomic Operator Consoles built for continuous 24-hour supervisor shifts.",
        "Sovereign Video Servers configured with high-availability RAID backups.",
        "High-Bandwidth Matrix Switches routing any feed to any display instantly.",
        "Automated Storage Health Monitoring alerting on drive sectors or space issues.",
        "Dedicated Server Cooling & UPS configs preventing thermal shutdowns."
      ],
      approach: "We design control rooms around human operators. We plan sight lines, optimize display grid alignments, install high-reliability network switches, and build automated storage checks to keep your operators ready and focused.",
      frameworkSteps: [
        { num: "01", title: "Sight Line Study", desc: "Drafting ergonomic display angles and command desk coordinates." },
        { num: "02", title: "Storage Sizing", desc: "Calculating high-density RAID disk requirements for historical retention." },
        { num: "03", title: "Server Assembly", desc: "Installing robust command switch hardware and racking video servers." },
        { num: "04", title: "SLA Handover", desc: "Hands-on staff workshops and finalizing remote storage health checks." }
      ],
      portfolio: [
        { title: "Ergonomic Command Center Designs", desc: "Complete visual plans, sight studies, and console layouts." },
        { title: "High-Density Video Vaults", desc: "Racked storage systems storing multi-terabyte datasets securely." },
        { title: "Multi-Display Matrix Walls", desc: "High-visibility command panel screens and routing controllers." },
        { title: "Fiber Routing Infrastructure", desc: "Industrial high-speed networks linking distributed cams to command rooms." },
        { title: "UPS Power Backup Clusters", desc: "Automated power failover modules securing constant recording status." },
        { title: "Active VMS Management dashboards", desc: "Centralized panels monitoring server space and drive sectors." }
      ],
      industries: [
        "Heavy Manufacturing & Steel Plants",
        "Logistics Yards & Warehouses",
        "Clinical Networks & Multi-Wing Hospital Sites",
        "Corporate Administrative Headquarters"
      ],
      regions: {
        onsite: ["Panchkula HQ Core", "Baddi Industrial Belt", "Mohali Tech District", "Punjab", "Haryana", "Himachal Pradesh"],
        national: ["Pan India Command Room Deployments"],
        intl: ["Kuwait Al Sahab Tower", "Dubai One Central Core", "London", "New York"]
      },
      process: [
        { stage: "Consulting", desc: "Mapping active feeds, target retention days, and operator seat counts." },
        { stage: "Console Design", desc: "Drafting ergonomic display angles and console structural plans." },
        { stage: "Storage Sizing", desc: "Calculating drive quantities to guarantee 90-day RAID-6 retention." },
        { stage: "Cabinet Setup", desc: "Cabling and mounting video matrix equipment in server racks." },
        { stage: "Calibration", desc: "Structuring video panel layouts and configuring rapid switch rules." },
        { stage: "Staff Workshop", desc: "Hands-on instruction sessions for display-wall supervisors." },
        { stage: "Managed AMC", desc: "Ongoing server dust cleaning, firmware patching, and automated drive checks." }
      ],
      whyChoose: [
        "Highly experienced network and console designers based in Tricity.",
        "Deep partnership with enterprise hardware storage manufacturers.",
        "Total source code ownership and local, secure server configurations.",
        "Rigorous performance testing ensuring zero packet drops during peak loops.",
        "Sustained regional presence with fast physical on-site support.",
        "Sustained success building complex surveillance headquarters."
      ],
      benefits: [
        "100% reliable continuous visual monitoring of all facility areas.",
        "Reduced operator fatigue and improved incident response speeds.",
        "Sustained high-availability video storage preventing database losses.",
        "Sovereign ownership of central video routing software keys.",
        "Simplified security compliance reports via centralized log managers.",
        "Assured business continuity during localized grid or hardware failures."
      ],
      techStack: ["Seagate Enterprise RAID-6 Storage Vaults", "Honeywell Matrix Controllers", "Barco Display Panels", "Ubiquiti PoE Switches", "APC UPS Batteries", "Linux VMS Servers"],
      engagementModels: [
        "Turnkey Central Control Room Command Setup",
        "Command Desk Ergonomics & Video Storage Package",
        "Sovereign Video Storage Support & Maintenance AMC",
        "Strategic Security Command Consulting"
      ],
      faqs: [
        { q: "How do you protect stored video data from hard drive crashes?", a: "We configure storage arrays in RAID-6, allowing the system to continue writing data without any record loss even if two drives fail concurrently." },
        { q: "What is video matrix routing and why is it useful?", a: "Matrix routing allows operators to push any critical camera angle to the main high-visibility wall panel instantly using a simple joystick or shortcut key." },
        { q: "Does the command room have cooling requirements?", a: "Yes. High-density video servers generate heat. We specify precise cooling parameters to prevent hardware throttle or thermal shutdown." },
        { q: "What is the typical timeline for a command center deployment?", a: "A complete physical center setup requires 6 to 10 weeks, including console custom builds, matrix wiring, and NVR calibration." }
      ]
    };
  }

  // 8. Biometric Access Control & Attendance Integration
  if (name.includes("biometric") || name.includes("access control")) {
    return {
      title: "Biometric Access Control & Attendance Integration",
      subtitle: "High-Precision Facial Scanners, Magnetic Turnstile Gates & Real-Time HRMS Integration Services",
      tagline: "Lock down facility boundaries and automate attendance logs with military-grade biometric hardware.",
      overview: "Legacy keycards are easily shared or lost. Sidigiqor Technologies installs enterprise-grade Biometric Access Control systems. We deploy high-precision facial scanners, magnetic turnstiles, and fingerprint nodes. We write custom integration scripts that synchronize physical scan logs with your active corporate HRMS or payroll database in real-time, enforcing strict permission matrices and preventing time-theft.",
      challenges: [
        "Time-theft or buddy punching with employees sharing access cards or pins.",
        "Unauthorized entry to critical data rooms or restricted warehouse zones.",
        "Manual roster reconciliation wasting administrative labor hours weekly.",
        "Broken access gates or locks trapping personnel during emergency drills.",
        "Biometric devices losing local records during sudden network drops.",
        "Slow facial matching speeds causing long queues at facility entry zones."
      ],
      needWhy: [
        "High-Precision Facial Scanners with sub-second matching speeds.",
        "Industrial Magnetic Turnstiles built for extreme daily cycle traffic.",
        "Sovereign Database Tunnels synchronizing attendance logs to HRMS.",
        "Fail-Secure Solenoids unlocking boundaries automatically during emergency trips.",
        "Encrypted Local Memory on readers preventing data loss during network drops.",
        "Role-Based Access Maps restricting areas to verified operator credentials."
      ],
      approach: "We design access control systems with safety and reliability as top priorities. We audit site entry zones, choose rugged hardware readers, and deploy secure databases that lock down critical boundaries while ensuring safe, instant emergency exits.",
      frameworkSteps: [
        { num: "01", title: "Access Audit", desc: "Mapping restricted doors, guest entry corridors, and gate coordinates." },
        { num: "02", title: "Hardware Mount", desc: "Installing magnetic locks, heavy turnstiles, and facial scanners." },
        { num: "03", title: "Database Sync", desc: "Writing API adapters to link biometric readers to your active HRMS database." },
        { num: "04", title: "Fail-Safe Test", desc: "Verifying fire alarm integrations and emergency manual override systems." }
      ],
      portfolio: [
        { title: "High-Precision Facial Terminals", desc: "Biometric readers matching profiles in under 300ms." },
        { title: "Industrial Turnstile Barriers", desc: "Rugged magnetic gates managing staff traffic in factory entry zones." },
        { title: "Custom HRMS Database Syncs", desc: "API tunnels posting access events directly to active payroll software." },
        { title: "Explosion-Proof Access Mounts", desc: "Specialized scanner housings configured for high-risk industrial zones." },
        { title: "Secure Server Room Access Locks", desc: "Multi-factor authentication nodes securing critical server cores." },
        { title: "Emergency Override Systems", desc: "Physical override panels unlocking all gates during fire alerts." }
      ],
      industries: [
        "Heavy Manufacturing & Steel Plants",
        "Logistics Hubs & Large Warehouses",
        "Clinical Networks & Multi-Wing Hospitals",
        "Corporate Administrative Headquarters"
      ],
      regions: {
        onsite: ["Panchkula HQ Core", "Baddi Industrial Belt", "Mohali Tech District", "Punjab", "Haryana", "Himachal Pradesh"],
        national: ["Pan India Corporate Biometric Deployments"],
        intl: ["Kuwait City Strategy Hub", "Dubai One Central Core", "London", "New York"]
      },
      process: [
        { stage: "Consulting", desc: "Mapping active entry zones, employee counts, and safety exit rules." },
        { stage: "Hardware Layout", desc: "Choosing appropriate readers and planning turnstile mount geometry." },
        { stage: "Wiring & Cabling", desc: "Routing shielded network cables and installing heavy backup batteries." },
        { stage: "API Coding", desc: "Writing Node.js sync scripts to connect readers to your payroll database." },
        { stage: "Fire Syncing", desc: "Connecting lock controllers to local fire alarm relay sensors." },
        { stage: "Staff Onboarding", desc: "Enrolling supervisor face prints and training HR system admins." },
        { stage: "Managed AMC", desc: "Ongoing sensor calibration, strike plate realignment, and software patching." }
      ],
      whyChoose: [
        "Highly experienced hardware and software specialists based in Tricity.",
        "Deep expertise integrating physical hardware with web APIs.",
        "Total source code ownership of middleware synchronization scripts.",
        "Rigorous safety testing ensuring failsafe exit compliance.",
        "Sustained regional presence with fast on-site support.",
        "Proven success deploying secure turnstiles in heavy industrial plants."
      ],
      benefits: [
        "100% elimination of buddy punching and employee time-theft.",
        "Automated, error-free attendance reports ready for monthly payroll.",
        "Complete protection of critical server and archive zones.",
        "Reduced administrative hours spent reconciling paper timesheets.",
        "Instant visual logging of employee entries and locations.",
        "Sustained brand value through high-contrast, modern security hardware."
      ],
      techStack: ["Suprema & Anviz Terminals", "Honeywell Access panels", "RFID Proximity Cards", "Solenoid Strike Locks", "Custom Node.js Sync Service", "PostgreSQL Attendance Logs"],
      engagementModels: [
        "Turnkey Biometric Access & Turnstile Setup",
        "Biometric Reader Integration & Sync Package",
        "Comprehensive Hardware AMC & Support",
        "Strategic Access Security Consulting"
      ],
      faqs: [
        { q: "What happens to the locks if the building loses power?", a: "We install heavy-duty backup batteries that keep locks fully operational for up to 8 hours during power outages." },
        { q: "Is facial scan data stored securely?", a: "Yes. Our terminals convert face images into encrypted mathematical hashes, storing no actual face photographs to protect privacy." },
        { q: "Can the access gates unlock automatically during a fire?", a: "Absolutely. We wire our access panels to your local fire alarm system, unlocking all gates instantly when a fire is triggered." },
        { q: "What is the typical timeline for an office turnstile setup?", a: "A complete physical facility deployment requires 3 to 6 weeks, including metal turnstile mounting, cabling, and API syncs." }
      ]
    };
  }

  // 9. Technical Search Engine Optimization (SEO)
  if (name.includes("technical search") || (name.includes("seo") && !name.includes("geo"))) {
    return {
      title: "Technical Search Engine Optimization (SEO)",
      subtitle: "Crawler Optimization, Core Web Vitals Engineering & Rich Schema Metadata Injections",
      tagline: "Lock down your Page 1 rankings by optimizing site code, caching layers, and search schema matrices.",
      overview: "Beautiful websites are useless if search bots cannot index them. Sidigiqor Technologies delivers technical SEO services built on code-level optimization. We audit site indexability, fix page response bottlenecks, build XML sitemaps, inject custom JSON-LD schema metadata, and optimize Core Web Vitals to guarantee search engines index your brand as an authoritative, high-ranking industry recommendation.",
      challenges: [
        "Beautiful websites hidden on page 3 of search engines due to crawl errors.",
        "Slow page loading speeds causing high visitor bounces and lower rank scores.",
        "Unindexed services and whitepapers due to poorly coded legacy CMS themes.",
        "No structured schema metadata making pages look generic in search snippets.",
        "High rates of broken links or circular redirects blocking crawler index bots.",
        "Struggling to track keyword impressions and conversion events accurately."
      ],
      needWhy: [
        "Sovereign Schema Injections (JSON-LD) boosting rich snippet search click rates.",
        "Core Web Vitals Engineering targeting sub-150ms LCP scores.",
        "Clean, Indexable XML Sitemaps guiding crawler bots to critical pages.",
        "Complete Link Resolution eliminating broken links and bad redirects.",
        "Google Analytics 4 Tracking mapping actual B2B conversion events.",
        "Headless Speed Optimizations making service pages render instantly."
      ],
      approach: "We approach SEO from an engineering perspective. We do not write generic blog copy; we optimize sitemaps, compress file sizes, rewrite metadata, and inject rich schema structures to make your code search-engine safe.",
      frameworkSteps: [
        { num: "01", title: "Crawl Audit", desc: "Running deep diagnostic crawls to locate index errors and bottlenecks." },
        { num: "02", title: "Speed Tuning", desc: "Compresing code assets and configuring fast edge caching layers." },
        { num: "03", title: "Schema Injection", desc: "Authoring custom JSON-LD rich sitemap metadata snippets." },
        { num: "04", title: "Goal Tracking", desc: "Setting up Google Search Console and custom GA4 conversion tags." }
      ],
      portfolio: [
        { title: "Technical Crawl Audits", desc: "Deep scans identifying and resolving legacy crawl index blockers." },
        { title: "Core Web Vitals Optimizations", desc: "Code rewrites yielding sub-200ms page response speeds." },
        { title: "Corporate Schema Structuring", desc: "Custom JSON-LD injections generating highlighted rich search results." },
        { title: "Keyword Matrix Mapping", desc: "Detailed target maps aligning service pages with high-intent keywords." },
        { title: "Redirect Repair Campaigns", desc: "Cleaning sitemaps to drop broken links and circular paths." },
        { title: "GA4 Custom Event Dashboards", desc: "Tracking visitor metrics from keyword clicks to service requests." }
      ],
      industries: [
        "Clinical Networks & Healthcare Sites",
        "Heavy Manufacturing & B2B Plants",
        "Technology SaaS Providers",
        "High-End Real Estate Developers",
        "Logistics & Warehousing Groups"
      ],
      regions: {
        onsite: ["Panchkula HQ Strategy Lab", "Chandigarh Sectors", "Mohali Tech District"],
        national: ["Pan India Technical SEO Deployments"],
        intl: ["Kuwait City Strategy Hub", "Dubai One Central Hub", "London", "New York"]
      },
      process: [
        { stage: "Consulting", desc: "Reviewing active search rankings, competitor metrics, and structural goals." },
        { stage: "Deep Crawling", desc: "Scanning sitemaps using Screaming Frog to pinpoint index blockers." },
        { stage: "Code Refactoring", desc: "Removing bloated scripts and optimizing images to boost page speeds." },
        { stage: "Schema Building", desc: "Drafting local, corporate, and product-specific JSON-LD scripts." },
        { stage: "Sitemap Rebuild", desc: "Generating secure, automated XML maps and submitting to search portals." },
        { stage: "Tracking Setup", desc: "Wiring GA4 tags and verification consoles to track goals." },
        { stage: "Monthly Audits", desc: "Delivering detailed keyword progress reports and clean site health scores." }
      ],
      whyChoose: [
        "Experienced web engineers certified in semantic metadata structuring.",
        "Total source code ownership of custom speed and schema scripts.",
        "Zero black-hat techniques; strict compliance with Google Quality rules.",
        "Lightweight Next.js/Tailwind optimizations yielding top page speeds.",
        "Sustained regional presence headquartered in Panchkula Tricity.",
        "Sustained success boosting search presence for global brands."
      ],
      benefits: [
        "Substantially higher organic search rankings on Page 1.",
        "Lower visitor bounce rates through lightning-fast page loading.",
        "Increased click-through rates via highlighted search snippets.",
        "Confidence that all critical services and whitepapers are indexed.",
        "Accurate, clean lead attribution reporting inside your CRM.",
        "Protected digital brand presence secured against index losses."
      ],
      techStack: ["Google Search Console", "Screaming Frog Web Crawler", "Google Analytics 4 & Tag Manager", "Next.js Edge Optimizer", "JSON-LD Schema Creator", "SEMrush Platform"],
      engagementModels: [
        "Fixed-Scope Technical SEO Audit & Code-Fix Campaign",
        "Local Directory & Schema Optimization Package",
        "Continuous SEO Traffic Growth Retainer",
        "Strategic Website Speed Consulting"
      ],
      faqs: [
        { q: "What is Schema.org metadata and why is it important?", a: "Schema is a standardized code format that tells search crawlers exactly what your business is, what services you offer, and where you operate, generating highlighted search results." },
        { q: "Will you edit our website code directly?", a: "Yes. Our engineers can work directly inside your custom React or WordPress codebases to optimize files, structure metadata, and speed up databases." },
        { q: "How long does it take to see ranking improvements?", a: "While content campaigns take months, technical speed and sitemap schema edits usually yield search ranking jumps in 2 to 4 weeks." },
        { q: "Do you use any automated spinner or risky backlinks?", a: "Never. We focus purely on code-level speed, indexability, and clean schema structures, complying fully with search quality guidelines." }
      ]
    };
  }

  // 10. High-ROI Performance Marketing Campaigns
  if (name.includes("performance marketing") || name.includes("high-roi")) {
    return {
      title: "High-ROI Performance Marketing Campaigns",
      subtitle: "B2B Sales Funnels, Conversion Rate Optimization & Multi-Channel Campaign Management",
      tagline: "Accelerate your pipeline growth with highly targeted paid search, professional social campaigns, and looker KPI tracking.",
      overview: "Paid marketing without precise conversion tracking is expensive speculation. Sidigiqor Technologies engineers performance-marketing loops that prioritize return on ad spend (ROAS) and low customer acquisition costs (CPA). We design high-converting sales funnels, set up strict tag triggers, and deploy campaigns across Google Ads and LinkedIn. We consolidate performance indicators inside customized Looker Studio walls, giving your marketing teams real-time visibility into ad spending and lead conversions.",
      challenges: [
        "High marketing budgets wasted on unqualified clicks and spam bot leads.",
        "Struggling to track which keyword ads actually generate closed B2B sales.",
        "Slow-loading campaign landing pages causing visitors to bounce quickly.",
        "Poorly written ad copy failing to convert professional decision-makers.",
        "Ad accounts suspended due to policy flags or unconfigured tags.",
        "No real-time visibility into marketing ROAS across multiple ad networks."
      ],
      needWhy: [
        "Conversion-Optimized Landing Pages engineered to load in under 1 second.",
        "Google Tag Manager Setups tracking actual contact submissions and file downloads.",
        "Highly Targeted Paid Search (Google Ads) capturing high-intent buyer clicks.",
        "LinkedIn Professional Campaigns targeting precise buyer job titles and sizes.",
        "Automated Lead Scoring Tunnels prioritizing high-ticket enterprise leads.",
        "Real-Time Looker Studio dashboards consolidating spend and ROAS metrics."
      ],
      approach: "We design marketing campaigns with an engineering-led mindset. We build high-speed custom landing pages, code clean tag structures, and manage campaign budgets dynamically to isolate the lowest CPA pathways.",
      frameworkSteps: [
        { num: "01", title: "Target Survey", desc: "Profiling ideal buyer personas, job titles, and high-value search keywords." },
        { num: "02", title: "Funnel Build", desc: "Coding fast custom landing pages with clear, highlighted conversion actions." },
        { num: "03", title: "Tag Verification", desc: "Configuring exact Tag Manager events and server-side conversion APIs." },
        { num: "04", title: "Dashboard Sync", desc: "Wiring ad data feeds into live, interactive Looker KPI dashboards." }
      ],
      portfolio: [
        { title: "Google Ads Search Campaigns", desc: "High-intent paid ad setups targeting priority industry keywords." },
        { title: "LinkedIn B2B Campaigns", desc: "Highly targeted professional ad loops targeting corporate decision-makers." },
        { title: "High-Converting Landing Pages", desc: "React-built campaign pages optimized for sub-second mobile speeds." },
        { title: "GTM Conversion Tracking Setups", desc: "Custom tag profiles logging form submissions and phone clicks." },
        { title: "Interactive Looker dashboards", desc: "Real-time KPI reports mapping ad spend, click-through, and CPA." },
        { title: "Dynamic Lead Qualifiers", desc: "Smart forms sorting and routing prospective leads to sales teams." }
      ],
      industries: [
        "Clinical Networks & Medical Centers",
        "Technology SaaS Providers",
        "Heavy Manufacturing & B2B Plants",
        "High-End Real Estate Developers",
        "Logistics & Warehousing Groups"
      ],
      regions: {
        onsite: ["Panchkula HQ Strategy Lab", "Chandigarh Sectors", "Mohali Tech District"],
        national: ["Pan India Corporate Marketing Deployments"],
        intl: ["Kuwait City Strategy Hub", "Dubai One Central Hub", "London", "New York"]
      },
      process: [
        { stage: "Consulting", desc: "Mapping sales pipelines, CPA tolerances, and target keyword volumes." },
        { stage: "Funnel Coding", desc: "Designing and coding high-speed campaign landing pages in React." },
        { stage: "Tag Mapping", desc: "Installing tracking nodes to monitor precise lead submissions." },
        { stage: "Creative Build", desc: "Authoring high-end professional ad copy and designing modern assets." },
        { stage: "Campaign Launch", desc: "Activating target ad groups with precise audience exclusions." },
        { stage: "A/B Testing", desc: "Tuning budgets, bids, and headlines to drop CPA metrics." },
        { stage: "KPI Reporting", desc: "Providing weekly Looker digests and reviewing pipeline conversion progress." }
      ],
      whyChoose: [
        "Experienced B2B marketing engineers certified in Tag Manager operations.",
        "Total ownership of custom landing page source codes and ad accounts.",
        "No agency markup pricing; absolute transparency on media spend.",
        "Next.js landing page assets yielding maximum organic quality scores.",
        "Sustained regional presence coordinate from Panchkula HQ.",
        "Proven delivery success boosting sales pipeline for global brands."
      ],
      benefits: [
        "Significantly lower customer acquisition costs (CPA).",
        "100% accurate attribution mapping spent budget to closed sales.",
        "Higher conversion rates from rapid, custom-coded landing pages.",
        "Clean, high-quality sales leads reaching your CRM in real-time.",
        "Consistent, highly professional ad copy aligned with corporate values.",
        "Complete, real-time control over advertising spend and ROI."
      ],
      techStack: ["Google Ads Manager", "LinkedIn Campaign Manager", "Google Tag Manager & GA4", "Next.js Landing Platforms", "Looker Studio dashboards", "Meta Ads Manager"],
      engagementModels: [
        "Fixed-Scope Paid Campaign Design & Setup",
        "Custom Conversion Funnel & GTM Tag Package",
        "Continuous Paid Campaign Optimization Retainer",
        "Strategic Performance Marketing Consulting"
      ],
      faqs: [
        { q: "What is Google Tag Manager and why do we need it?", a: "GTM allows us to code tracking triggers on your landing pages, logging when a visitor actually clicks 'Submit' or downloads a booklet, keeping analytics clean." },
        { q: "Do you take a percentage markup on our ad spend?", a: "No. We charge a flat professional optimization fee. You pay the ad network (Google/LinkedIn) directly, maintaining complete billing transparency." },
        { q: "How long does it take to deploy a custom marketing campaign?", a: "A complete funnel build, tag verification, and target campaign activation requires 2 to 4 weeks." },
        { q: "What ad budgets do you recommend for B2B targeting?", a: "We recommend starting with moderate daily budgets ($20 to $50 daily) to identify winning keyword groups before scaling up." }
      ]
    };
  }

  // 11. Digital Reputation Management (ORM) & PR
  if (name.includes("reputation") || name.includes("orm") || name.includes("pr")) {
    return {
      title: "Digital Reputation Management (ORM) & PR",
      subtitle: "Search Result Engineering, Online Sentiment Monitoring & Global Authority PR Syndications",
      tagline: "Lock down your brand's digital narrative by monitoring online mentions and syndicating high-authority PR.",
      overview: "Online narrative is your primary currency. Sidigiqor Technologies protects and repairs brand reputations online. We deploy real-time sentiment monitors that crawler major directories, manage customer review campaign pipelines, engineer Page 1 search results to highlight positive corporate milestones, and syndicate verified PR across major global news networks, keeping your public narrative clean and authoritative.",
      challenges: [
        "Hostile review spam or outdated articles ranking on Page 1 of search engines.",
        "Unmonitored online mentions leaking negative brand sentiment unchecked.",
        "No systematic way to capture positive reviews from satisfied partners.",
        "Difficulty syndicating company milestones to reputable news indexes.",
        "Negative review chains damaging conversion rates on prospective clients.",
        "Struggling to track online reviews across multiple local directory profiles."
      ],
      needWhy: [
        "Search Result Engineering pushing high-authority positive news to Page 1.",
        "Real-Time Sentiment Monitors crawler active forums for brand mentions.",
        "Sovereign Review Campaign Tools capturing real client testimonials.",
        "Global PR Distribution Networks syndicating articles to major news indexes.",
        "Local Directory Management structuring clean, verified profiles.",
        "Automated Brand Alert Dashboards delivering immediate warnings on negative reviews."
      ],
      approach: "We approach reputation management from a strategic, data-led perspective. We audit search metrics, map current sentiments, code optimization paths, and distribute verified news to high-authority portals.",
      frameworkSteps: [
        { num: "01", title: "Narrative Audit", desc: "Scanning Page 1 results and cataloging negative mention sources." },
        { num: "02", title: "Monitor Setup", desc: "Activating real-time brand crawler alerts and review widgets." },
        { num: "03", title: "PR Syndication", desc: "Authoring high-end articles and distributing to authority news sites." },
        { num: "04", title: "Review Campaigns", desc: "Automating customer feedback loops to generate positive reviews." }
      ],
      portfolio: [
        { title: "Page 1 Search Repair Campaigns", desc: "Code and PR optimization pushing positive articles to highlighted ranks." },
        { title: "Real-Time Brand Sentiment Trackers", desc: "Custom crawlers alert departments to new forum and directory mentions." },
        { title: "Global PR Syndication Packages", desc: "Syndicated articles secured on high-authority news platforms." },
        { title: "Sovereign Customer Review widgets", desc: "Automated campaign widgets collecting partner testimonials." },
        { title: "Local Directory Profiles Setup", desc: "Clean, consistent, and structured corporate profiles across Google and Yelp." },
        { title: "Negative Sentiment Mitigation manuals", desc: "Actionable corporate response guidelines for social supervisors." }
      ],
      industries: [
        "Clinical Networks & Medical Centers",
        "Technology SaaS Providers",
        "Heavy Manufacturing & B2B Plants",
        "High-End Real Estate Developers",
        "Logistics & Warehousing Groups"
      ],
      regions: {
        onsite: ["Panchkula HQ Strategy Lab", "Chandigarh Sectors", "Mohali Tech District"],
        national: ["Pan India Corporate ORM Deployments"],
        intl: ["Kuwait City Strategy Hub", "Dubai One Central Hub", "London", "New York"]
      },
      process: [
        { stage: "Consulting", desc: "Evaluating Page 1 rankings, review scores, and target audience narratives." },
        { stage: "Audit Setup", desc: "Configuring automated brand alerts to track mentions continuously." },
        { stage: "Content Creation", desc: "Drafting professional articles highlighting company milestones." },
        { stage: "News Syndication", desc: "Publishing optimized content on major authority portals." },
        { stage: "Review Launch", desc: "Deploying email and SMS workflows to capture satisfied customer feedback." },
        { stage: "Search Optimization", desc: "Improving search ranking factors for positive brand news." },
        { stage: "Monthly Progress", desc: "Delivering sentiment analysis charts and updated Page 1 rank checks." }
      ],
      whyChoose: [
        "Experienced PR specialists and search engineers based in Tricity.",
        "Deep relationships with high-authority news publishing channels.",
        "Absolute data privacy; strict non-disclosure contracts by default.",
        "Next.js blog and schema setups boosting search rank indexing speed.",
        "Robust regional support coordinated from our Panchkula core.",
        "Verified success repairing digital profiles for global corporations."
      ],
      benefits: [
        "Clean, authoritative Page 1 search results displaying positive news.",
        "Immediate warnings on new negative mentions before they go viral.",
        "Higher conversion rates via improved review ratings across directories.",
        "Strengthened corporate credibility and investor brand trust.",
        "Simplified public relation workflows via unified publishing routes.",
        "Sustained brand protection secured against review spam campaigns."
      ],
      techStack: ["Brand24 Sentiment Monitor", "PR Newswire Syndication Network", "Google Search rank algorithms", "Trustpilot & Yelp API Widgets", "Google Alerts Engine", "WordPress & Headless Portals"],
      engagementModels: [
        "Fixed-Scope Online Reputation Repair Campaign",
        "PR Syndication & News Distribution Package",
        "Continuous Brand Sentiment & Directory Retainer",
        "Strategic Public Relations Consulting"
      ],
      faqs: [
        { q: "Can you delete bad Google reviews directly?", a: "No platform allows direct deletion. We flag and file policy-violation appeals for spam reviews while building campaigns to dilute negative ratings with positive ones." },
        { q: "What is Search Result Engineering?", a: "It is the technical practice of ranking your positive corporate whitepapers and PR articles on Page 1, pushing negative or outdated links to secondary pages." },
        { q: "How long does a Page 1 search repair campaign take?", a: "While monitoring is instant, indexing high-authority positive news to push down old results typically requires 8 to 12 weeks." },
        { q: "Do you write the PR articles and company manuscripts?", a: "Yes. Our team of technical writers draft high-quality corporate announcements and secure your approval prior to publishing." }
      ]
    };
  }

  // 12. B2B Content Strategy & Thought Leadership
  if (name.includes("content strategy") || name.includes("thought leadership")) {
    return {
      title: "B2B Content Strategy & Thought Leadership",
      subtitle: "Semantic Content Calendars, High-End Whitepaper Authoring & B2B Authority Frameworks",
      tagline: "Establish your corporate authority with deep-dive technical whitepapers and structured content pipelines.",
      overview: "Standard marketing blogs fail to engage professional buyers. Sidigiqor Technologies designs B2B Content Strategies that build genuine industry authority. We build structured semantic content pipelines, author deep-dive technical whitepapers and guides, map target buyer profiles, and design high-contrast distribution maps, turning your company's technical specialized knowledge into high-converting lead-generation assets.",
      challenges: [
        "Unengaging corporate blogs failing to capture B2B decision-maker interest.",
        "No structured content release pipeline resulting in inconsistent publishing.",
        "Slow content authoring times due to marketing teams lacking technical knowledge.",
        "Difficulty ranking content for high-value B2B industry keyword searches.",
        "Low conversion rates from blog visitors to active sales pipeline leads.",
        "No strategy to map content topics to different buyer purchase stages."
      ],
      needWhy: [
        "6-Month Content Pipelines keeping publishing schedules highly consistent.",
        "Technical Whitepapers & Manuscripts explaining complex solutions clearly.",
        "SEO-Optimized Article Formats targeting high-value B2B keywords.",
        "Structured Conversion Assets (PDF books, checklists) capturing lead contacts.",
        "Bespoke Visual Infographics illustrating industry trends clearly.",
        "Unified Executive Social Strategies building executive thought leadership."
      ],
      approach: "We write content with a technical, engineering-first focus. Our specialized writers speak with your core developers, draft detailed manuscripts, build custom schema codes, and configure high-visibility distribution networks.",
      frameworkSteps: [
        { num: "01", title: "Audit & Persona", desc: "Analyzing target B2B buyer roles, search keywords, and competitor blogs." },
        { num: "02", title: "Pipeline Build", desc: "Creating a 6-month semantic content calendar and release plan." },
        { num: "03", title: "Drafting Manuscripts", desc: "Interviewing company engineers and drafting detailed technical whitepapers." },
        { num: "04", title: "Conversion Setup", desc: "Adding clear lead-capture actions and tracking tags to articles." }
      ],
      portfolio: [
        { title: "B2B Semantic Content Calendars", desc: "6-month content timelines mapped to specific buyer purchase stages." },
        { title: "Deep-Dive Technical Whitepapers", desc: "High-end PDF manuscripts detailing complex industrial solutions." },
        { title: "SEO-Optimized Service Guides", desc: "High-ranking, long-form articles targeting high-intent search keywords." },
        { title: "Executive Thought Leadership Blogs", desc: "Polished social articles crafted for company founders and executives." },
        { title: "Interactive Lead-Capture Assets", desc: "Custom checklists, guides, and worksheets generating active sales leads." },
        { title: "Corporate Brand Style Guides", desc: "Comprehensive guides outlining company voice and writing rules." }
      ],
      industries: [
        "Technology SaaS Providers",
        "Clinical Networks & Healthcare Sites",
        "Heavy Manufacturing & B2B Plants",
        "Logistics & Warehousing Groups",
        "Financial & Investment Advisory Firms"
      ],
      regions: {
        onsite: ["Panchkula HQ Strategy Lab", "Chandigarh Sectors", "Mohali Tech District"],
        national: ["Pan India B2B Content Strategies"],
        intl: ["Kuwait City Strategy Hub", "Dubai One Central Hub", "London", "New York"]
      },
      process: [
        { stage: "Consulting", desc: "Mapping sales targets, ideal buyer roles, and keyword opportunities." },
        { stage: "Pipeline Planning", desc: "Drafting content topics and organizing the release calendar." },
        { stage: "Technical Interviews", desc: "Speaking with your developers to extract detailed project insights." },
        { stage: "Manuscript Writing", desc: "Authoring high-end, research-backed articles and whitepapers." },
        { stage: "Visual Design", desc: "Designing custom infographics and high-contrast PDF documents." },
        { stage: "Schema Injection", desc: "Coding search metadata to help crawlers index content ranking." },
        { stage: "Performance Auditing", desc: "Tracking article views, social shares, and sales lead conversion rates." }
      ],
      whyChoose: [
        "Specialized B2B writers with deep technical and engineering background.",
        "Total source code and intellectual property ownership of all assets.",
        "No generic outsourced copywriting; strict quality control by Sahil Rana.",
        "Optimized Next.js blog platforms yielding maximum page response speed.",
        "Robust regional support coordinated from our Panchkula headquarters.",
        "Sustained success building thought leadership for enterprise scaleups."
      ],
      benefits: [
        "Highly engaged professional B2B buyers seeking your services by name.",
        "Significantly higher conversion rates on organic web traffic.",
        "Sustained search ranking authority on high-value B2B keywords.",
        "Consistent, highly professional corporate voice across all platforms.",
        "Higher close rates via content explaining complex services clearly.",
        "Secured market position through custom research-backed brand assets."
      ],
      techStack: ["Next.js blog framework", "SEMrush Keyword Platform", "Google Analytics 4 & Tag Manager", "Markdown Editors", "Adobe InDesign Layouts", "Google Docs Workspace"],
      engagementModels: [
        "Fixed-Scope 6-Month Content Strategy Campaign",
        "Technical Whitepaper Design & Copywriting Package",
        "Continuous Thought Leadership Article Retainer",
        "Strategic Content Architecture Consulting"
      ],
      faqs: [
        { q: "How do your writers handle complex, highly technical topics?", a: "We conduct brief, structured interviews with your lead engineers, converting their expert developer insights into polished, executive-level reading copy." },
        { q: "Do we own the full intellectual property of the whitepapers?", a: "Absolutely. All written copy, custom diagrams, and PDF manuscripts are fully transferred to your brand upon project milestone completion." },
        { q: "Will this content help us rank on Page 1 of search engines?", a: "Yes. We code search schemas directly into Next.js blog frameworks and target high-value industry keywords to optimize indexing speed." },
        { q: "What is the typical timeframe to launch a B2B content pipeline?", a: "A complete strategy audit, 6-month calendar setup, and first whitepaper manuscript release requires 3 to 5 weeks." }
      ]
    };
  }

  // 13. State-of-the-Art Campaign War Room Setups
  if (name.includes("war room") || name.includes("state-of-the-art campaign")) {
    return {
      title: "State-of-the-Art Campaign War Room Setups",
      subtitle: "Console Ergonomics, Real-time Social Listening Walls & VoIP Telephony Command Infrastructure",
      tagline: "Build a high-security physical and digital campaign war room to coordinate constituency messaging dynamically.",
      overview: "Scattered data ruins election cycles. Sidigiqor Technologies designs and deploys high-security, ergonomic Campaign War Room command centers. We install multi-display satellite walls, configure real-time social listening crawlers, route secure encrypted VoIP channels, and build automated server backups, giving your campaign team complete concurrent visibility and rapid response capacity.",
      challenges: [
        "Slow response times to opposing camp narratives due to fragmented news monitors.",
        "Volatile communications lines dropping during high-tempo constituency campaign days.",
        "Database leaks exposing campaign strategy files to unauthorized local personnel.",
        "Staff fatigue caused by poorly arranged displays and bad desk ergonomics.",
        "System downtime during localized power spikes or server room overheating.",
        "No unified coordination map tracking booth supervisors and ground fleets."
      ],
      needWhy: [
        "Multi-Display Satellite Walls providing real-time local news and stream coverage.",
        "Real-Time Social Listening Engines crawler trend metrics continuously.",
        "Secured VoIP Call Center Desks facilitating high-volume volunteer calling.",
        "Strict Physical Access Controls securing database server racks.",
        "Dedicated UPS Backup Batteries keeping command walls active during grid drops.",
        "Centralized Coordination Dashboards mapping active constituency metrics."
      ],
      approach: "We design campaign command centers around physical safety, reliability, and human visibility. We plan screen heights, optimize display matrices, install high-bandwidth switches, and build sovereign local database racks.",
      frameworkSteps: [
        { num: "01", title: "Layout Mapping", desc: "Planning console ergonomics, display angles, and desk coords." },
        { num: "02", title: "Network Layout", desc: "Designing secure fiber lines and dedicated calling station conduits." },
        { num: "03", title: "VMS/Data Rack", desc: "Assembling secure server enclosures with local power backups." },
        { num: "04", title: "Staff Walkthrough", desc: "Conducting interactive console tests and supervisor workshops." }
      ],
      portfolio: [
        { title: "Ergonomic War Room layouts", desc: "Complete architectural plans, sight line maps, and console schematics." },
        { title: "Real-time Social Trend Walls", desc: "High-visibility display grids crawler local media sentiments continuously." },
        { title: "Sovereign VoIP Calling Hubs", desc: "Racked network switches supporting dozens of active calling operators." },
        { title: "Physical Access Control Locks", desc: "Biometric and RFID terminals securing strategic server enclosures." },
        { title: "UPS Power Backup Systems", desc: "Automatic failover generators securing continuous server availability." },
        { title: "Unified Campaign Progress dashboards", desc: "Central looker walls tracking ground crew coordinates." }
      ],
      industries: [
        "Constituency Campaign Headquarters",
        "Political Advisory & Public Relations Firms",
        "Civic Advocacy & Non-Profit Organizations"
      ],
      regions: {
        onsite: ["Panchkula HQ Core", "Mohali Tech District", "Chandigarh Sectors"],
        national: ["Pan India Command Center Deployments"],
        intl: ["Kuwait Al Sahab Tower Strategy Hub", "Dubai One Central", "London"]
      },
      process: [
        { stage: "Consulting", desc: "Analyzing seat counts, monitor targets, and telecom volume requirements." },
        { stage: "Ergonomic Layout", desc: "Drafting display elevations and desk structural maps." },
        { stage: "Cabling Conduits", desc: "Routing shielded metal pipes to protect network lines from drops." },
        { stage: "Hardware Racking", desc: "Mounting high-speed switches, NVR storage, and voice systems." },
        { stage: "Dashboard Calibration", desc: "Syncing display walls to active social crawler feeds." },
        { stage: "Staff Handover", desc: "Hands-on instruction workshops for command room operators." },
        { stage: "Election Support", desc: "Active database admins and technical engineers on-field throughout polling cycles." }
      ],
      whyChoose: [
        "Highly experienced network and console designers based in Tricity.",
        "Deep partnership with enterprise hardware display manufacturers.",
        "Total sovereign control with zero third-party platform dependencies.",
        "Rigorous performance testing ensuring zero voice delay during peak hours.",
        "Sustained regional presence coordinate from Panchkula HQ.",
        "Proven success deploying secure constituency command headquarters."
      ],
      benefits: [
        "Complete, real-time control over campaign messaging and news alerts.",
        "Reduced campaign team fatigue and faster counter-narrative dispatch speeds.",
        "100% reliable continuous telecom lines linking regional offices.",
        "Sovereign ownership of central database server keys.",
        "Simplified strategy reporting via unified coordinator walls.",
        "Assured business continuity during localized grid or power failures."
      ],
      techStack: ["Sovereign display routing controllers", "High-Density VoIP PBX Servers", "Industrial PoE Switches", "Symmetric Gigabit Fiber lines", "APC UPS Batteries", "Linux DB Systems"],
      engagementModels: [
        "Turnkey Custom Campaign War Room Deployment",
        "War Room Console Ergonomics & Cabling Package",
        "Continuous War Room Technical Maintenance AMC",
        "Strategic Campaign Technology Consulting"
      ],
      faqs: [
        { q: "What is social listening and why is it on the displays?", a: "Social listening engines crawl local social channels for target keywords, alerting operators to viral trend spikes in under 15 minutes." },
        { q: "Do you supply the physical screens and command consoles?", a: "Yes. We manage the entire hardware procurement, desk manufacturing, mounting, and system calibration turnkey." },
        { q: "Is the internal war room data safe from competitor spying?", a: "Absolutely. We build isolated networks. Your strategic databases and voice lines never route through public public servers, keeping everything secure." },
        { q: "What is the typical timeline to deploy a physical war room?", a: "A complete physical center setup requires 4 to 6 weeks, including custom console build, matrix wiring, and NVR setup." }
      ]
    };
  }

  // 14. Advanced Constituency Analytics & Demographic Maps
  if (name.includes("constituency analytics") || name.includes("demographic maps")) {
    return {
      title: "Advanced Constituency Analytics & Demographic Maps",
      subtitle: "GIS Spatial Mapping, Voter Demographics Clustering & Historical Election Swing Analyses",
      tagline: "Pinpoint priority voters and map local issues with high-contrast, interactive demographic GIS maps.",
      overview: "Legacy voter books hide spatial insights. Sidigiqor Technologies builds custom Constituency Analytics and demographic mapping portals. We combine voter registries with local GIS shapes, segmenting rosters by voting histories, primary local issues (water, roads, jobs), and caste/demographic lines. We display findings on high-contrast, interactive maps that help campaign leaders plan fleet dispatches and ad distributions with absolute precision.",
      challenges: [
        "Vague, un-structured voter demographic data sitting dead in paper rosters.",
        "Wasting campaign budget advertising to solid, non-swing constituency zones.",
        "No clear mechanism to map local infrastructure challenges to voter priority metrics.",
        "Slow data query speeds when running complex demographic filtration loops.",
        "Hostile data security risks of competitor groups tracing voter alignment maps.",
        "Struggling to track on-field voter registration or demographic change lists."
      ],
      needWhy: [
        "Interactive GIS Spatial Heatmaps visualizing swing potential across sectors.",
        "Demographic Voter Filters grouping voter registries by priority local needs.",
        "Historical Election Swing Analysis identifying key swing-vote blocks.",
        "Infrastructure Pain Point Tracking mapping local challenges to rosters.",
        "Encrypted Local Databases protecting strategic demographic records.",
        "Sovereign looker charts providing real-time constituency progress stats."
      ],
      approach: "We design spatial analytics platforms using advanced, secure mapping frameworks. We process raw rosters, build precise geographical clusters, and design simple, clean map interfaces that require zero technical training to navigate.",
      frameworkSteps: [
        { num: "01", title: "Data Structuring", desc: "Parsing raw rosters and cleaning duplicate geographical registries." },
        { num: "02", title: "GIS Boundary Map", desc: "Digitizing local polling boundaries, street lines, and ward coordinates." },
        { num: "03", title: "Algorithm Build", desc: "Clustering rosters by swing potential and priority local needs." },
        { num: "04", title: "Command Sync", desc: "Integrating map portals with campaign CRM and coordinator apps." }
      ],
      portfolio: [
        { title: "Interactive Polling Ward Heatmaps", desc: "GIS maps showing voter densities and swing metrics." },
        { title: "Demographic Voter Segmenters", desc: "Advanced query tools grouping voter lists by specific trades and roles." },
        { title: "Infrastructure Challenge Trackers", desc: "Map overlays tagging local pain points (power, water, roads) by ward." },
        { title: "Historical Voting swing Models", desc: "Statistical charts predicting regional swing ranges based on historical polls." },
        { title: "Real-time coordinator dashboard", desc: "Looker portals monitoring team registration and demographic audits." },
        { title: "Sovereign GIS Storage Vaults", desc: "Isolated spatial database nodes protecting strategic ward records." }
      ],
      industries: [
        "Constituency Campaign Headquarters",
        "Political Advisory & Public Relations Firms",
        "Civic Advocacy & Non-Profit Organizations"
      ],
      regions: {
        onsite: ["Panchkula HQ Core", "Mohali Tech District", "Chandigarh Sectors"],
        national: ["Pan India GIS Spatial Implementations"],
        intl: ["Kuwait City Strategy Hub", "Dubai One Central Core", "London"]
      },
      process: [
        { stage: "Consulting", desc: "Mapping constituency ward sizes, roster details, and spatial targets." },
        { stage: "Boundary Digital", desc: "Digitizing local boundaries, wards, and street shapes into GIS files." },
        { stage: "Database Indexing", desc: "Building secure PostgreSQL databases with spatial PostGIS extensions." },
        { stage: "Feature Modeling", desc: "Clustering rosters by swing probability and local priority metrics." },
        { stage: "Interactive Coding", desc: "Coding high-contrast, rapid map panels with custom color accents." },
        { stage: "Security Lockup", desc: "Configuring strict role-based data masks to shield voter names." },
        { stage: "Handover Support", desc: "Conducting user workshops and managing map updates throughout campaign cycles." }
      ],
      whyChoose: [
        "Experienced database and spatial GIS engineers based in Tricity.",
        "Vast library of digitized constituency boundaries and ward coordinates.",
        "Total source code and intellectual property ownership of map portals.",
        "Sub-2 second query execution speeds under high concurrent user loops.",
        "Sustained regional presence coordinate from Panchkula HQ.",
        "Sustained success building custom political analytics systems."
      ],
      benefits: [
        "Complete, real-time visibility into voter swing potentials and local needs.",
        "Significantly lower advertising waste through precise ward targeting.",
        "Improved field volunteer focus via assigned priority street maps.",
        "100% security protection of strategic demographic mapping datasets.",
        "Consistent, research-backed strategy decisions across campaign offices.",
        "Secured competitive advantage through custom-built constituency intelligence."
      ],
      techStack: ["Python GeoPandas", "PostgreSQL DB with PostGIS", "QGIS Desktop Maps", "React & Leaflet.js", "Docker container clusters", "Sovereign GIS Servers"],
      engagementModels: [
        "Constituency Turnkey Spatial Analytics Setup",
        "GIS Boundary Digitization & demographic Map Package",
        "Spatial Database Support & Ward Maintenance AMC",
        "Strategic Political Analytics Consulting"
      ],
      faqs: [
        { q: "Is our demographic and cast mapping data safe from rival teams?", a: "Yes. We deploy mapping portals on single-tenant encrypted server stacks. We implement role-based access to ensure volunteers see only assigned streets." },
        { q: "Can we use these GIS maps offline on mobile devices?", a: "Yes. We package sitemaps and shapes inside offline-first coordinates, allowing field crews to view assigned grids without active mobile data." },
        { q: "How do you digitize constituency ward boundaries?", a: "We compile public electoral coordinates, trace ward lines on high-resolution satellite imagery, and cross-reference lines with roster databases." },
        { q: "What is the typical timeline to deploy custom demographic maps?", a: "A complete digitized GIS mapping system for a standard constituency requires 4 to 8 weeks." }
      ]
    };
  }

  // 15. Offline-First Booth Management Applications
  if (name.includes("booth management") || name.includes("offline-first")) {
    return {
      title: "Offline-First Booth Management Applications",
      subtitle: "Local SQLite Storage, Real-time Roster Matching & Robust Database Conflict Resolvers",
      tagline: "Empower booth supervisors to look up voter records and log attendance instantly without active mobile internet.",
      overview: "On-site mobile data drops block voter coordination. Sidigiqor Technologies builds premium, offline-first Booth Management Android applications. We code custom local SQLite database schemas, write high-speed voter search algorithms, and deploy robust synchronization conflict resolvers. This allows your booth supervisors to look up voter registration numbers and log turnout instantly in deep rural areas, syncing data back to campaign hubs automatically when connectivity returns.",
      challenges: [
        "Voter lookup failures caused by mobile network signal drops near polling booths.",
        "Duplicated or conflicting voter attendance logs across campaign offices.",
        "Long, slow queues at local campaign booths during high-voter peak hours.",
        "Volunteers using outdated paper rosters with incorrect registry numbers.",
        "Security risks of contact list leaks on lost or stolen mobile terminals.",
        "No real-time turnout tracking for campaign strategy coordinators."
      ],
      needWhy: [
        "Offline-First Roster Search running sub-100ms searches without internet.",
        "Secure Local SQLite Storage encrypting registry records on mobile keys.",
        "Robust Sync Conflict Resolvers managing concurrent database updates.",
        "Lightweight Android Package (.apk) optimized for basic mobile processors.",
        "Automatic Sync Triggers pushing turnout stats as soon as network resumes.",
        "Role-Based Access Masking blocking unauthorized contact exports."
      ],
      approach: "We design mobile tools with low-memory footprint and absolute reliability as key metrics. We write clean native wrappers, code rapid search indices, and build robust database synchronization routines that run in the background seamlessly.",
      frameworkSteps: [
        { num: "01", title: "App Prototyping", desc: "Drafting simple, high-contrast user interfaces for older mobile screens." },
        { num: "02", title: "Database Schema", desc: "Coding lightweight local SQLite tables with indexing indices." },
        { num: "03", title: "Sync Engine Build", desc: "Writing background synchronization queues and conflict rules." },
        { num: "04", title: "App Launch", desc: "Testing installations on basic mobile devices and supervisor handovers." }
      ],
      portfolio: [
        { title: "Offline Voter Search Apps", desc: "Android .apk packages running fast offline roster matching." },
        { title: "Conflict-Free Sync Middlewares", desc: "Sovereign background scripts updating databases without loss." },
        { title: "Real-time Turnout Trackers", desc: "CRM dashboards tracking polling turnout stats ward-by-ward." },
        { title: "Secure Local Memory Modules", desc: "Encryption modules securing cached databases on phone chips." },
        { title: "Field Agent Progress dashboards", desc: "Looker panels tracking volunteer check-ins and booth shifts." },
        { title: "DLT-Optimized Alert Triggers", desc: "SMS alerts notifying coordinators of booth turnout milestones." }
      ],
      industries: [
        "Constituency Campaign Headquarters",
        "Political Advisory & Public Relations Firms",
        "Civic Advocacy & Non-Profit Organizations"
      ],
      regions: {
        onsite: ["Panchkula War Room Core", "Mohali Tech Parks", "Tricity Regional Consulting Core"],
        national: ["Pan India Sovereign App Deployments"],
        intl: ["Kuwait Strategy Hub", "Dubai One Central", "London Campaign Centers"]
      },
      process: [
        { stage: "Consulting", desc: "Reviewing voter roster sizes, phone models, and sync frequency needs." },
        { stage: "UI/UX Layout", desc: "Designing simple, large-font buttons and high-contrast night modes." },
        { stage: "Database Coding", desc: "Coding SQLite schemas with fast binary search index structures." },
        { stage: "Sync Engineering", desc: "Developing Node.js background queues and conflict rule blocks." },
        { stage: "App Packing", desc: "Compiling optimized Android packages (.apk) with strict local rules." },
        { stage: "Field Testing", desc: "Simulating signal drops and checking database sync recovery." },
        { stage: "Staff Onboarding", desc: "Distributing apps to booth supervisors and running test drills." }
      ],
      whyChoose: [
        "Highly experienced mobile and database engineers based in Tricity.",
        "Deep expertise building offline-first systems and sync resolvers.",
        "Total source code and IP ownership of custom mobile applications.",
        "Zero tracking tools; absolute compliance with personal data policies.",
        "Sustained regional presence headquartered in Panchkula Tricity.",
        "Sustained success coordinating high-tempo campaign field logistics."
      ],
      benefits: [
        "100% reliable voter lookup operations even in dead signal zones.",
        "No queue bottlenecks at polling booths due to sub-100ms searches.",
        "Conflict-free database logs with zero duplicated voter attendance updates.",
        "Instant, real-time turnout analytics for war room strategists.",
        "Reduced workload and stress on booth volunteers during polling hours.",
        "Protected client and roster data locked securely on mobile devices."
      ],
      techStack: ["React Native Mobile Core", "SQLite local DBMS", "Node.js Synchronization API", "PostgreSQL database servers", "Docker container clusters", "REST Webhooks"],
      engagementModels: [
        "Constituency Turnkey Booth App Setup",
        "Offline-First Mobile Sync Custom Package",
        "Polling Day App Support & Server AMC",
        "Strategic Campaign Technology Consulting"
      ],
      faqs: [
        { q: "What happens if a field volunteer's phone is lost or stolen?", a: "The local database is encrypted with AES-256 and locked behind a custom passcode, preventing unauthorized data exports." },
        { q: "Does the app require an active SIM card to function?", a: "No. The lookup and logging are fully local. Internet is only required to sync attendance updates back to headquarters." },
        { q: "How does the conflict resolver handle concurrent entries?", a: "The sync engine compares timestamps and user IDs, ensuring the latest verified entry is persisted without overwriting data." },
        { q: "What is the typical timeline to deploy custom booth apps?", a: "A complete mobile app build, roster compilation, and testing campaign requires 4 to 6 weeks." }
      ]
    };
  }

  // 16. Technical Search Engine Optimization (SEO) - Fallback Catch
  if (name.includes("technical search") || name.includes("seo")) {
    return {
      title: "Technical Search Engine Optimization (SEO)",
      subtitle: "Crawler Optimization, Core Web Vitals Engineering & Rich Schema Metadata Injections",
      tagline: "Lock down your Page 1 rankings by optimizing site code, caching layers, and search schema matrices.",
      overview: "Beautiful websites are useless if search bots cannot index them. Sidigiqor Technologies delivers technical SEO services built on code-level optimization. We audit site indexability, fix page response bottlenecks, build XML sitemaps, inject custom JSON-LD schema metadata, and optimize Core Web Vitals to guarantee search engines index your brand as an authoritative, high-ranking industry recommendation.",
      challenges: [
        "Beautiful websites hidden on page 3 of search engines due to crawl errors.",
        "Slow page loading speeds causing high visitor bounces and lower rank scores.",
        "Unindexed services and whitepapers due to poorly coded legacy CMS themes.",
        "No structured schema metadata making pages look generic in search snippets.",
        "High rates of broken links or circular redirects blocking crawler index bots.",
        "Struggling to track keyword impressions and conversion events accurately."
      ],
      needWhy: [
        "Sovereign Schema Injections (JSON-LD) boosting rich snippet search click rates.",
        "Core Web Vitals Engineering targeting sub-150ms LCP scores.",
        "Clean, Indexable XML Sitemaps guiding crawler bots to critical pages.",
        "Complete Link Resolution eliminating broken links and bad redirects.",
        "Google Analytics 4 Tracking mapping actual B2B conversion events.",
        "Headless Speed Optimizations making service pages render instantly."
      ],
      approach: "We approach SEO from an engineering perspective. We do not write generic blog copy; we optimize sitemaps, compress file sizes, rewrite metadata, and inject rich schema structures to make your code search-engine safe.",
      frameworkSteps: [
        { num: "01", title: "Crawl Audit", desc: "Running deep diagnostic crawls to locate index errors and bottlenecks." },
        { num: "02", title: "Speed Tuning", desc: "Compresing code assets and configuring fast edge caching layers." },
        { num: "03", title: "Schema Injection", desc: "Authoring custom JSON-LD rich sitemap metadata snippets." },
        { num: "04", title: "Goal Tracking", desc: "Setting up Google Search Console and custom GA4 conversion tags." }
      ],
      portfolio: [
        { title: "Technical Crawl Audits", desc: "Deep scans identifying and resolving legacy crawl index blockers." },
        { title: "Core Web Vitals Optimizations", desc: "Code rewrites yielding sub-200ms page response speeds." },
        { title: "Corporate Schema Structuring", desc: "Custom JSON-LD injections generating highlighted rich search results." },
        { title: "Keyword Matrix Mapping", desc: "Detailed target maps aligning service pages with high-intent keywords." },
        { title: "Redirect Repair Campaigns", desc: "Cleaning sitemaps to drop broken links and circular paths." },
        { title: "GA4 Custom Event Dashboards", desc: "Tracking visitor metrics from keyword clicks to service requests." }
      ],
      industries: [
        "Clinical Networks & Healthcare Sites",
        "Heavy Manufacturing & B2B Plants",
        "Technology SaaS Providers",
        "High-End Real Estate Developers",
        "Logistics & Warehousing Groups"
      ],
      regions: {
        onsite: ["Panchkula HQ Strategy Lab", "Chandigarh Sectors", "Mohali Tech District"],
        national: ["Pan India Technical SEO Deployments"],
        intl: ["Kuwait City Strategy Hub", "Dubai One Central Hub", "London", "New York"]
      },
      process: [
        { stage: "Consulting", desc: "Reviewing active search rankings, competitor metrics, and structural goals." },
        { stage: "Deep Crawling", desc: "Scanning sitemaps using Screaming Frog to pinpoint index blockers." },
        { stage: "Code Refactoring", desc: "Removing bloated scripts and optimizing images to boost page speeds." },
        { stage: "Schema Building", desc: "Drafting local, corporate, and product-specific JSON-LD scripts." },
        { stage: "Sitemap Rebuild", desc: "Generating secure, automated XML maps and submitting to search portals." },
        { stage: "Tracking Setup", desc: "Wiring GA4 tags and verification consoles to track goals." },
        { stage: "Monthly Audits", desc: "Delivering detailed keyword progress reports and clean site health scores." }
      ],
      whyChoose: [
        "Experienced web engineers certified in semantic metadata structuring.",
        "Total source code ownership of custom speed and schema scripts.",
        "Zero black-hat techniques; strict compliance with Google Quality rules.",
        "Lightweight Next.js/Tailwind optimizations yielding top page speeds.",
        "Sustained regional presence headquartered in Panchkula Tricity.",
        "Sustained success boosting search presence for global brands."
      ],
      benefits: [
        "Substantially higher organic search rankings on Page 1.",
        "Lower visitor bounce rates through lightning-fast page loading.",
        "Increased click-through rates via highlighted search snippets.",
        "Confidence that all critical services and whitepapers are indexed.",
        "Accurate, clean lead attribution reporting inside your CRM.",
        "Protected digital brand presence secured against index losses."
      ],
      techStack: ["Google Search Console", "Screaming Frog Web Crawler", "Google Analytics 4 & Tag Manager", "Next.js Edge Optimizer", "JSON-LD Schema Creator", "SEMrush Platform"],
      engagementModels: [
        "Fixed-Scope Technical SEO Audit & Code-Fix Campaign",
        "Local Directory & Schema Optimization Package",
        "Continuous SEO Traffic Growth Retainer",
        "Strategic Website Speed Consulting"
      ],
      faqs: [
        { q: "What is Schema.org metadata and why is it important?", a: "Schema is a standardized code format that tells search crawlers exactly what your business is, what services you offer, and where you operate, generating highlighted search results." },
        { q: "Will you edit our website code directly?", a: "Yes. Our engineers can work directly inside your custom React or WordPress codebases to optimize files, structure metadata, and speed up databases." },
        { q: "How long does it take to see ranking improvements?", a: "While content campaigns take months, technical speed and sitemap schema edits usually yield search ranking jumps in 2 to 4 weeks." },
        { q: "Do you use any automated spinner or risky backlinks?", a: "Never. We focus purely on code-level speed, indexability, and clean schema structures, complying fully with search quality guidelines." }
      ]
    };
  }

  // Regular definitions follow below


  // Category 1: Enterprise IT & Cybersecurity Solutions
  if (name.includes("vapt") || name.includes("penetration") || name.includes("vulnerability")) {
    return {
      title: "Vulnerability Assessment & Penetration Testing (VAPT)",
      subtitle: "Corporate Ethical Hacking, Threat Modeling & Compliance Hardening",
      tagline: "Proactively identify, exploit, and remediate digital infrastructure vulnerabilities before malicious actors do.",
      overview: "Security is a continuous race against modern threat actors. Sidigiqor Technologies delivers comprehensive VAPT services that expose your systems to controlled, white-hat penetration testing. Our security engineers replicate real-world attack methodologies to identify configuration mistakes, API logic bypasses, SQL injections, outdated servers, and weak credential gateways. We don't just hand over tool-generated scans; we manually verify and rate every finding using the CVSS framework, providing actionable remediation roadmaps that your development or IT team can implement immediately to protect business integrity.",
      challenges: [
        "Unmapped public-facing IP nodes and exposed endpoints leaking critical company files.",
        "SQL injections, cross-site scripting (XSS), and session hijacking vulnerabilities in user portals.",
        "Undocumented database systems and legacy backup environments accessible without multi-factor checks.",
        "Outdated firewall configurations allowing lateral network traversal in internal servers.",
        "Lack of granular compliance auditing required for ISO 27001, SOC 2, or regional financial codes.",
        "Slow detection times leaving active cyber threats unnoticed inside the enterprise network for months."
      ],
      needWhy: [
        "Proactive Threat Neutralization before catastrophic data breaches happen.",
        "ISO 27001, GDPR, and SOC 2 compliance verification through independent security audits.",
        "Identification of Complex API Logic Bypass and session hijacking vectors.",
        "Prevention of Ransomware and financial sabotage via early endpoint protection.",
        "Hardened Internal Network Segmentation preventing lateral threat movement.",
        "Reassurance of client data privacy to close institutional enterprise accounts."
      ],
      approach: "We believe a high-quality audit is heavily manual. Automated tools find low-hanging fruit, but our security specialists spend hours looking for business logic flaws, permission bypasses, and multi-step exploit chains that tools miss entirely. Every threat is documented with proof-of-concept videos and code-level fixes.",
      frameworkSteps: [
        { num: "01", title: "Information Gathering", desc: "Passive footprint mapping, DNS enumeration, and sub-domain cataloging." },
        { num: "02", title: "Threat Modeling", desc: "Defining clear, safe attack paths aligned with your business critical assets." },
        { num: "03", title: "Controlled Exploitation", desc: "Executing safe injection, credential, and memory exploits without downtime." },
        { num: "04", title: "Remediation Guide", desc: "Drafting step-by-step code modifications, configuration fixes, and patches." }
      ],
      portfolio: [
        { title: "Web Application Pen Testing", desc: "OWASP Top 10 auditing focusing on authentication, injection, and authorization flaws." },
        { title: "API Security Assessment", desc: "Vulnerability sweeps targeting REST/GraphQL endpoint logic and JWT keys." },
        { title: "Network & Server Audit", desc: "Scanning local subnets, directory systems, domain controllers, and active firewalls." },
        { title: "Mobile App Penetration", desc: "Reverse engineering local client-side files, memory buffers, and APIs." },
        { title: "Cloud Infrastructure Audit", desc: "Verifying secure AWS, GCP, or Azure permission matrices, access tokens, and storage buckets." },
        { title: "Phishing Simulation", desc: "Controlled social engineering drills to measure employee security awareness." }
      ],
      industries: [
        "Clinical Networks & Multi-Wing Healthcare Centers",
        "Financial Institutions & Wealth Management",
        "E-Commerce & Digital Cloud Scaleups",
        "Manufacturing Plants & Heavy Industrial Sites",
        "Enterprise IT & Global BPOs"
      ],
      regions: {
        onsite: ["Panchkula", "Chandigarh", "Mohali", "Baddi", "Ludhiana", "Ambala", "Solan", "Punjab", "Haryana", "Himachal Pradesh"],
        national: ["Pan India On-Site Penetration Audits", "Corporate IT Security Alignment"],
        intl: ["Kuwait City (Al Sahab Tower)", "Dubai UAE (One Central Complex)", "Saudi Arabia", "London (UK)", "New York City (US)"]
      },
      process: [
        { stage: "Scoping", desc: "Defining clear digital assets, IP lists, codebases, and allowable audit hours." },
        { stage: "Reconnaissance", desc: "Automated network scans and semantic footprint harvesting." },
        { stage: "Vulnerability Scanning", desc: "Identifying software version leaks, standard backdoors, and configuration flaws." },
        { stage: "Manual Exploit Analysis", desc: "Ethical hacking attempts to access isolated target databases securely." },
        { stage: "Risk Classification", desc: "Prioritizing threats under High, Medium, Low, and Info using CVSS guidelines." },
        { stage: "Reporting", desc: "Presenting detailed technical reports and high-level executive summaries." },
        { stage: "Re-Validation", desc: "Verifying all remediation patches are active and correctly implemented after 30 days." }
      ],
      whyChoose: [
        "Certified Ethical Hackers (CEH, OSCP) managing your systems.",
        "Strict non-disclosure agreements and secure data transmission practices.",
        "Zero operational downtime during vulnerability testing sessions.",
        "Clear, developer-friendly code snippets and patching guides.",
        "Verified track record with leading Middle East investment groups.",
        "Comprehensive validation certificate provided post-remediation."
      ],
      benefits: [
        "Substantially lowered liability risk from user data leaks.",
        "Immediate compliance alignment with global security standards.",
        "Improved engineering team awareness of secure coding practices.",
        "Secure digital brand value, fostering deeper investor trust.",
        "Failsafe protection against automated internet bot attacks.",
        "Dramatically reduced long-term emergency disaster mitigation costs."
      ],
      techStack: ["Burp Suite Professional", "OWASP ZAP", "Metasploit Framework", "Nmap Network Mapping", "Kali Linux Hardened Kernel", "Acunetix Enterprise", "Wireshark Network Analytics", "Custom Python Penetration Scripts"],
      engagementModels: [
        "One-Time Black-Box Pen Test",
        "Bi-Annual Security Audit retainer",
        "Continuous Vulnerability Management Subscription",
        "Regulatory Compliance Certification Package"
      ],
      faqs: [
        { q: "Will a VAPT audit cause crash or downtime in our system?", a: "No. Our exploits are strictly controlled. We coordinate with your technical team and avoid high-intensity buffer stress during live production hours, keeping your business running." },
        { q: "How often should an enterprise perform VAPT?", a: "Industry standards recommend a comprehensive audit annually, or after any major software update, database migration, or physical server relocation." },
        { q: "What is the deliverable after the testing finishes?", a: "You receive a structured PDF detailing every verified threat, its severity rating, reproduction steps, code remediation snippets, and a formal certificate of security." },
        { q: "Do you sign NDAs prior to accessing our systems?", a: "Absolutely. All audits begin with a formal contract outlining precise scope boundaries, secure key usage, and strict non-disclosure obligations." }
      ]
    };
  }

  if (name.includes("firewall") || name.includes("perimeter") || name.includes("sd-wan")) {
    return {
      title: "Perimeter Firewall & Secure SD-WAN Management",
      subtitle: "Enterprise Network Segmentation, Firewall Orchestration & Unified Threat Management",
      tagline: "Lock down your regional networks and unify distributed workspaces with military-grade encryption.",
      overview: "As enterprises scale across multiple offices and cloud environments, physical perimeters dissolve. Sidigiqor Technologies deploys, configures, and manages Next-Generation Firewalls (NGFW) and Software-Defined WAN architectures. We block ransomware, packet snifffers, and lateral network intrusions. By engineering clean network segmentation, we isolate critical server nodes, payroll databases, and intellectual property archives from daily staff Wi-Fi zones, providing central visibility and secure connectivity anywhere in the world.",
      challenges: [
        "Unrestricted lateral movement inside the local network allowing malware to infect all corporate systems.",
        "High latency and dropouts in branch-to-branch communications over legacy VPN connections.",
        "Staff accessing dangerous or malware-infected web resources due to unmonitored DNS.",
        "No real-time traffic visualization to identify distributed denial-of-service (DDoS) triggers.",
        "Inefficient application prioritization, leading to choppy VoIP calls and stalled video assets.",
        "Struggling to configure remote workers with secure, restricted, and audited intranet permissions."
      ],
      needWhy: [
        "Active Threat Prevention through real-time Deep Packet Inspection.",
        "Failsafe Branch-to-Branch Secure SD-WAN connections with automated failovers.",
        "Granular User & Application Control, reducing corporate security risks.",
        "Isolating Critical Assets (ERP, Databases, CCTV) into secure, encrypted VLANs.",
        "Real-Time Network Telemetry mapping all inbound and outbound bandwidth.",
        "Secure SSL Inspection to block hidden payloads within encrypted traffic."
      ],
      approach: "We design networks with 'Zero Trust' principles. We assume threats exist inside and outside the perimeter. Our specialists configure enterprise firewalls to drop all packets unless explicitly authorized, pairing security controls with automated dual-ISP failovers to ensure zero business disruption.",
      frameworkSteps: [
        { num: "01", title: "Traffic Profiling", desc: "Auditing current network traffic channels, bandwidth loads, and critical application requirements." },
        { num: "02", title: "VLAN Segmentation", desc: "Designing logical subdivisions to quarantine guest Wi-Fi from secure server cores." },
        { num: "03", title: "Policy Orchestration", desc: "Configuring security control profiles, malware scanning protocols, and web filters." },
        { num: "04", title: "Unified SD-WAN Setup", desc: "Connecting regional branches via redundant tunnels with active latency monitoring." }
      ],
      portfolio: [
        { title: "Next-Gen Firewall Deployment", desc: "Complete installation and config of Sophos, Fortinet, or Cisco NGFW clusters." },
        { title: "Redundant Secure SD-WAN", desc: "Interlinking multiple branch offices with dynamic path selection and instant backup." },
        { title: "Zero Trust Remote Access", desc: "Configuring secure clientless SSL-VPNs with strict multi-factor authentication." },
        { title: "Intrusion Prevention Systems (IPS)", desc: "Enabling real-time pattern analysis to intercept active network attacks." },
        { title: "Bandwidth Optimization", desc: "Quality-of-Service (QoS) setups to prioritize business-critical VoIP, ERP, and API traffic." },
        { title: "Continuous Firewall Managed Services", desc: "Regular firmware patching, rule audits, and 24/7 security incident alerts." }
      ],
      industries: [
        "Manufacturing Sites & Regional Warehouses",
        "Clinical Networks & Multi-Wing Hospital Facilities",
        "Large-Scale Corporate Offices & Call Centers",
        "Multi-Location Educational Campuses",
        "Financial Services & Distributed Banking Groups"
      ],
      regions: {
        onsite: ["Panchkula HQ", "Chandigarh Core", "Mohali Tech Hub", "Zirakpur Logistics Zone", "Baddi Industrial Area", "Punjab", "Haryana", "Himachal Pradesh"],
        national: ["Corporate WAN Infrastructure Deployments", "Unified Multi-Branch Firewall Alignments"],
        intl: ["Kuwait City Strategic Hub", "Dubai Trade Towers", "Qatar", "United Kingdom", "United States"]
      },
      process: [
        { stage: "Discovery Workshops", desc: "Mapping physical topology, branch locations, and ISP parameters." },
        { stage: "Architecture Design", desc: "Drafting VLAN layouts, rule matrices, and failover pathways." },
        { stage: "Hardware Configuration", desc: "Staging and pre-configuring hardware inside Sidigiqor labs prior to on-site setup." },
        { stage: "Seamless Deployment", desc: "On-site installation and testing with less than 15 minutes of off-peak window downtime." },
        { stage: "SD-WAN Orchestration", desc: "Interlinking remote nodes via secure, monitored site-to-site IPsec keys." },
        { stage: "Security Hardening", desc: "Enabling intrusion prevention, SSL deep packet inspection, and web content filtering." },
        { stage: "Handover & Support", desc: "Providing administrator training, complete wiring layouts, and continuous AMC monitoring." }
      ],
      whyChoose: [
        "Experienced network engineers certified in Sophos, Fortinet, and Cisco architectures.",
        "Dual-ISP failover setups engineered for continuous corporate uptime.",
        "24/7 technical helpdesk monitoring network health metrics.",
        "Zero vendor lock-in; we recommend the best-suited hardware for your scale.",
        "Rigorous network hardening that resists physical and digital intrusion.",
        "Proven expertise connecting GCC offices with Indian development centers."
      ],
      benefits: [
        "Failsafe network continuity preventing costly production stoppages.",
        "Dramatically improved internal data transmission speeds and latency.",
        "Protected operational pipelines blocking corporate spyware and ransomware.",
        "Granular security controls preventing employees from visiting malicious domains.",
        "Substantially lowered WAN operational expenditures through smart SD-WAN.",
        "Instant central control over all regional branch security rules."
      ],
      techStack: ["Sophos XGS Next-Gen Firewalls", "Fortinet FortiGate UTM", "Cisco Meraki & Catalyst Systems", "Ubiquiti UniFi Software Defined Networks", "IPsec & WireGuard Secure Tunnels", "Redundant Multi-WAN ISP Routing", "Sophos Central & FortiManager Controller Tools"],
      engagementModels: [
        "On-Site Turnkey Hardware Installation",
        "Firewall Architecture Design & Policy Scopes",
        "Managed Firewall Support AMC (Annual Contract)",
        "Co-Managed Corporate Network Consulting Retainer"
      ],
      faqs: [
        { q: "How does Secure SD-WAN compare to traditional MPLS lines?", a: "SD-WAN is highly cost-effective and faster. It securely bundles multiple standard broadband or fiber connections together, automatically routing traffic through the fastest path and maintaining high availability." },
        { q: "Do you provide hardware support if a firewall fails?", a: "Yes. Our computer and network AMC frameworks include immediate replacement hardware staging, remote backup restoration, and priority dispatch." },
        { q: "Can we track what websites or apps consume our office bandwidth?", a: "Absolutely. Our dashboards visualize active usage down to specific employees, applications, or device categories, allowing quick bandwidth restrictions." },
        { q: "Is SSL inspection safe, or does it violate employee privacy?", a: "Next-gen firewalls perform SSL inspection to catch malware hidden inside encrypted packets. We can configure strict policy bypass exclusions for sensitive traffic like personal banking and healthcare." }
      ]
    };
  }

  if (name.includes("amc") || name.includes("maintenance")) {
    return {
      title: "Computer Annual Maintenance Contracts (AMC)",
      subtitle: "Preventative Hardware Diagnostics, IT Support & Enterprise Systems Uptime",
      tagline: "Secure your operational continuity with scheduled physical inspections, immediate repairs, and desktop optimization.",
      overview: "Unplanned hardware failure halts business. Sidigiqor Technologies delivers comprehensive Computer AMC services tailored for corporate offices, manufacturing lines, educational centers, and logistic nodes. Our certified on-site technicians handle regular internal dust purging, RAM diagnostic tests, operating system speedups, virus sanitization, local printer networking, and backup power UPS tracking. We become your outsourced IT department, ensuring your terminals remain lightning-fast and structurally reliable.",
      challenges: [
        "Frequent system lockups caused by high industrial dust build-up inside desktop enclosures.",
        "Unplanned workflow disruptions due to failing hard drives or dead motherboard capacitors.",
        "Out-of-date system updates leading to zero-day local security exploits.",
        "Choppy internet connections and network print queue crashes stalling daily invoicing.",
        "Lack of standardized backup drives exposing spreadsheet files to sudden user loss.",
        "No dedicated technician on call, resulting in hours of delay waiting for basic retail repair shops."
      ],
      needWhy: [
        "Guaranteed Terminal Lifespans through professional physical internal deep cleaning.",
        "Proactive Hardware Scanning identifying failing components before they halt operations.",
        "Priority On-Site Technical Dispatch in under 2-4 hours for critical corporate emergencies.",
        "Continuous Virus Protection and license compliance tracking.",
        "Optimized Local Workgroup Networking (printers, scanners, file shares).",
        "Backup Power UPS health tracking to prevent sudden data corruption."
      ],
      approach: "We don't wait for things to break. Our AMC protocol is built on preventative audits. We perform monthly physical and software diagnostics, catching thermal spikes, battery bloating, and local disk failures before they cost you time or money.",
      frameworkSteps: [
        { num: "01", title: "IT Asset Inventory", desc: "Detailed mapping of all computers, servers, UPS backups, and local printer units." },
        { num: "02", title: "Baseline Performance", desc: "Verifying current OS configurations, virus software, and running diagnostic baselines." },
        { num: "03", title: "Scheduled Maintenance", desc: "Executing planned physical deep cleans, thermal paste replacements, and rule sweeps." },
        { num: "04", title: "Emergency SLA Support", desc: "Providing direct VIP helpdesk channels for instant remote and on-site engineering." }
      ],
      portfolio: [
        { title: "Physical Thermal Optimization", desc: "Purging industrial particulate and dust, re-applying premium CPU thermal compound." },
        { title: "OS Patching & Registry Tuning", desc: "Configuring safe security patch rollouts, cleaning temporary log bloat." },
        { title: "Virus & Ransomware Protection", desc: "Deploying enterprise endpoint anti-malware and conducting malware sweeps." },
        { title: "Network Printer & Workgroup Integration", desc: "Configuring shared scanners, local network resources, and storage nodes." },
        { title: "UPS & Power Assessment", desc: "Testing backup battery decay, warning systems, and automatic shutdown configurations." },
        { title: "Asset Lifecycle Management", desc: "Providing transparent documentation on hardware wear metrics and upgrade plans." }
      ],
      industries: [
        "Industrial Manufacturing & Assembly Hubs",
        "Corporate Administrative Headquarters",
        "Logistics Warehouses & Shipping Terminals",
        "Educational Campuses & Computer Laboratories",
        "Large Medical Clinics & Hospital Desks"
      ],
      regions: {
        onsite: ["Panchkula Core (On-site Delivery)", "Chandigarh Business Districts", "Mohali IT Towers", "Zirakpur Shipping Hub", "Baddi Industrial Belt", "Dera Bassi Manufacturing Cluster", "Solan", "Punjab", "Haryana", "Himachal Pradesh"],
        national: ["Corporate IT Asset Portfolio Mapping Services"],
        intl: ["GCC Advisory Portfolios (Remote Diagnostics Support)"]
      },
      process: [
        { stage: "Onboarding Audit", desc: "Analyzing and cataloging physical assets, performance lags, and license compliance." },
        { stage: "Clean Baseline", desc: "Sanitizing systems of active malware, bloated cache structures, and registry junk." },
        { stage: "Physical Deep Clean", desc: "Scheduled on-site opening of cases to purge dust, checking fans and components." },
        { stage: "Preventative Tests", desc: "Scanning drive health sector states, testing RAM reliability and backup drives." },
        { stage: "Software Monitoring", desc: "Pushing critical operating updates during planned off-peak business slots." },
        { stage: "Priority Dispatch", desc: "Immediate remote assist or fast on-site dispatch when help tickets are raised." },
        { stage: "Quarterly Audit", desc: "Delivering structural health digests and optimization recommendations to leadership." }
      ],
      whyChoose: [
        "Highly experienced on-site desktop and server hardware technicians.",
        "Strict SLA response times (within 2 hours for critical server nodes).",
        "Comprehensive coverage including physical cleanup and hardware diagnostic swaps.",
        "Vendor-neutral upgrades optimizing system life without pushy up-selling.",
        "Centrally tracked IT ticketing portal for transparent help history.",
        "Panchkula HQ location ensures immediate support across Tricity and Baddi."
      ],
      benefits: [
        "Up to 95% reduction in sudden workday hardware failures.",
        "Significantly faster terminal speeds, reducing employee daily friction.",
        "Lower capital expenditures by extending computer lifespans to 5+ years.",
        "Zero data loss from sudden local hard drive sector crashes.",
        "Transparent IT maintenance costs without unexpected repair bills.",
        "Outsourced IT operations allowing focus on core commercial milestones."
      ],
      techStack: ["CrystalDiskInfo Hard Drive Diagnostics", "Windows AD & Enterprise Endpoint Manager", "AIDA64 Thermal & System Analysis", "Premium Non-Conductive Anti-Static Blowers", "Acronis Failsafe Disk Cloners", "Secure VPN Remote Assist Portals", "Bitdefender Enterprise Endpoint Security"],
      engagementModels: [
        "Comprehensive AMC (Includes all parts, chips, and labor)",
        "Non-Comprehensive AMC (Labor and support only; parts billed separately)",
        "Scheduled Monthly IT Preventative Maintenance Retainer",
        "Ad-Hoc Hourly Corporate Hardware Support"
      ],
      faqs: [
        { q: "What is the difference between Comprehensive and Non-Comprehensive AMC?", a: "Comprehensive AMC includes both our diagnostic labor and the cost of replacement hardware components (like RAM, hard drives, or fans). Non-Comprehensive covers labor and physical cleanups, while any replacement hardware is billed as needed." },
        { q: "How fast do your technicians arrive for an on-site emergency?", a: "For critical business infrastructure failures (like main server or switch failure), our Panchkula/Tricity SLA is under 2 hours. For non-critical workstations, dispatch is guaranteed within 4 hours." },
        { q: "Does the contract include software troubleshooting and viruses?", a: "Yes. Our contracts cover hardware physical support as well as operating system configurations, virus cleanups, network printing setups, and local file access." },
        { q: "Do you maintain a log of computer assets and maintenance dates?", a: "Absolutely. We tag each workstation with a unique asset ID, tracking its thermal logs, diagnostic history, and hardware changes inside our central ticketing system." }
      ]
    };
  }

  if (name.includes("helpdesk") || name.includes("managed it") || name.includes("systems security")) {
    return {
      title: "Managed IT Helpdesk & Systems Security",
      subtitle: "Multi-Tier Technical Helpdesk, Patch Orchestration & Cloud Workplace Security",
      tagline: "Empower your global teams with secure system configuration, on-demand support, and proactive security monitoring.",
      overview: "Managing an internal IT department is costly and complex. Sidigiqor Technologies delivers a scalable, high-end Managed IT Helpdesk. We handle desktop configurations, access permission control, operating system patch setups, corporate email configurations, server health alerts, and cybersecurity audits. Our remote team monitors endpoints, intercepting configuration drift and unauthorized software installations. We maintain user productivity while safeguarding your systems from cyber security threats.",
      challenges: [
        "Uncontrolled installation of untrusted applications by staff, inviting malware and data leaks.",
        "Downtime caused by software license expirations and misconfigured corporate emails.",
        "Critical system vulnerabilities left unpatched for weeks due to manual administrative pipelines.",
        "Frustrated employees waiting hours for basic password resets or file access changes.",
        "No structured onboarding process, leading to delays in staging workstations for new hires.",
        "No centralized oversight of active software assets, risking severe regulatory non-compliance."
      ],
      needWhy: [
        "Immediate Multi-Tier Helpdesk Support (Email, Phone, Remote Portal).",
        "Automated Central Patch Management keeping all software secured.",
        "Rigorous Endpoint Software Restriction, preventing unauthorized software execution.",
        "Secure Microsoft 365 / Google Workspace Administration and email defense.",
        "Rapid Automated New Hire System Staging and system handovers.",
        "Real-Time Asset Auditing tracking all software licenses."
      ],
      approach: "We operate on a 'shift-left' service model. We utilize remote endpoint monitoring to resolve minor anomalies (like filled disk space or registry drift) before your employees even notice them, keeping your operational workflows uninterrupted.",
      frameworkSteps: [
        { num: "01", title: "IT Assessment", desc: "Cataloging all desktop architectures, operating system builds, and user profiles." },
        { num: "02", title: "Endpoint Hardening", desc: "Setting up central security rules, antivirus layers, and restricting root privileges." },
        { num: "03", title: "Automated Patching", desc: "Configuring automated weekly system patches during non-business hours." },
        { num: "04", title: "Active Helpdesk Channels", desc: "Opening direct ticketing portals with guaranteed response times." }
      ],
      portfolio: [
        { title: "Remote Technical Support", desc: "Fast remote screen support for operating issues, software crashes, and printer setups." },
        { title: "Central Patch Management", desc: "Automating security and OS updates across Windows, macOS, and Linux nodes." },
        { title: "Cloud Workplace Administration", desc: "Configuring user permissions, email spam filters, and MFA inside Google Workspace and Microsoft 365." },
        { title: "Software Asset Auditing", desc: "Cataloging system keys and removing unauthorized applications." },
        { title: "Automated System Provisioning", desc: "Creating standard software bundles to stage new employee laptops in under 30 minutes." },
        { title: "Identity Access Management", desc: "Securing directory services, active permissions, and credential rotations." }
      ],
      industries: [
        "Distributed Corporate Headquarters",
        "IT Service Firms & Multi-Seat Call Centers",
        "Healthcare Clinics & Professional Practice Offices",
        "E-Commerce & Digital Cloud Scaleups",
        "Educational Institutions & Research Academies"
      ],
      regions: {
        onsite: ["Panchkula HQ Support Teams", "Tricity Regional Fast-Response Teams"],
        national: ["Pan India Remote Helpdesk Operations"],
        intl: ["GCC Managed Portfolios (Kuwait, Dubai, Qatar)", "Remote US & UK Systems Advisory"]
      },
      process: [
        { stage: "Asset Audit", desc: "Mapping active software licensing, user profiles, and endpoint security gaps." },
        { stage: "Agent Installation", desc: "Deploying our secure, non-invasive remote monitoring agent across all workstations." },
        { stage: "Security Baseline", desc: "Hardening system firewalls, enabling automatic MFA, and establishing backup routes." },
        { stage: "Patch Automation", desc: "Setting up central scheduling for weekly software and operating system updates." },
        { stage: "Ticketing Onboarding", desc: "Training your staff to access our secure instant-help channels." },
        { stage: "Active Operations", desc: "Daily monitoring, remote error patching, and rapid user troubleshooting." },
        { stage: "Strategy Assessment", desc: "Delivering monthly ticket analytics and resource optimization advisories." }
      ],
      whyChoose: [
        "Outsourced IT operations with predictable flat-rate monthly pricing.",
        "Experienced system administrators certified in Microsoft, Linux, and Cloud Security.",
        "Fast ticket resolution SLA (under 15 minutes for critical user lockouts).",
        "Comprehensive endpoint monitoring and hardware status logs.",
        "Hardened data policies protecting customer databases and internal documents.",
        "Panchkula Tricity regional hub backed by global delivery capabilities in Kuwait."
      ],
      benefits: [
        "Immediate decrease in employee downtime due to software issues.",
        "Highly secured endpoints blocking malware and external intrusions.",
        "Simplified onboarding and offboarding for staff configurations.",
        "Lowered internal overhead costs compared to hiring full-time IT managers.",
        "Guaranteed software license compliance, avoiding severe auditing penalties.",
        "Transparent overview of all corporate technology assets."
      ],
      techStack: ["NinjaOne & ConnectWise RMM Platforms", "Microsoft 365 Enterprise Security Suite", "Google Workspace Admin Console", "TeamViewer & AnyDesk Secure Remote Assist", "Bitdefender & CrowdStrike Endpoint Agents", "Jira Service Desk & Zendesk Ticketing Systems"],
      engagementModels: [
        "Flat-Rate Monthly Per-User Managed IT",
        "Per-Device Comprehensive Systems Support Contract",
        "On-Demand Block-of-Hours Engineering Retainer",
        "Corporate IT Onboarding & Staging Project"
      ],
      faqs: [
        { q: "Is your remote support agent safe and secure?", a: "Yes. Our remote agents utilize end-to-end AES-256 encrypted VPN pipelines. Access to endpoints requires multi-factor authentication, and all sessions are securely logged." },
        { q: "Can we restrict employees from installing random apps on office PCs?", a: "Absolutely. We configure standard user access accounts, removing administrative root privileges and establishing strict application whitelists." },
        { q: "Do you support remote workers outside the office?", a: "Yes. Our remote management tools function over standard internet connections, enabling secure patching, remote support, and VPN management globally." },
        { q: "How do employees submit support requests?", a: "Your staff can easily raise tickets through a dedicated desktop icon, call our direct priority line, or email our support desk directly." }
      ]
    };
  }

  if (name.includes("backup") || name.includes("disaster") || name.includes("recovery")) {
    return {
      title: "High-Availability Cloud Backups & Disaster Recovery",
      subtitle: "Redundant Hybrid Backup Vaults, Secure Ransomware Proofing & Business Continuity Planning",
      tagline: "Guarantee near-zero recovery time (RTO) and recovery point objectives (RPO) with encrypted, isolated cloud replication.",
      overview: "Data loss is an existential threat. Sidigiqor Technologies designs and manages secure, automated backup architectures. We replicate your databases, ERP records, and physical server states into isolated, encrypted cloud vaults. By combining localized NAS caching with geographical cloud backups, we ensure your systems are protected from ransomware, physical fire damage, and user errors. Our disaster recovery plans are verified via planned dry-runs, allowing you to bring critical systems back online in minutes.",
      challenges: [
        "Total reliance on manual USB backups that are frequently misplaced, incomplete, or corrupted.",
        "High risk of ransomware encryption rendering local network backup drives completely useless.",
        "Extended system downtime (days to weeks) trying to rebuild databases after server crashes.",
        "Lack of geographical isolation, keeping backups in the same physical building as servers.",
        "No automatic backup verification, realizing files are unrecoverable only during a crisis.",
        "Unmapped recovery processes leaving IT staff confused and panicked during database failures."
      ],
      needWhy: [
        "Automated Real-Time Database Replication, removing manual user oversights.",
        "Air-Gapped, Immutable Cloud Storage protecting backups from ransomware encryption.",
        "Geographical Distribution across secure global data vaults.",
        "Near-Zero RTO & RPO to minimize operational downtime.",
        "Military-Grade AES-256 Encryption protecting data in transit and at rest.",
        "Scheduled Recovery Dry-Runs verifying file recovery states."
      ],
      approach: "We utilize the industry standard '3-2-1-1-0' backup rule. We maintain 3 copies of your data on 2 different media types, with 1 stored geographically off-site, 1 stored completely air-gapped and offline (immutable), and verify with 0 recovery errors.",
      frameworkSteps: [
        { num: "01", title: "Data Audit", desc: "Cataloging all server disks, ERP databases, user spreadsheets, and email servers." },
        { num: "02", title: "RTO/RPO Definition", desc: "Defining maximum acceptable downtime and data loss thresholds per division." },
        { num: "03", title: "VLAN Vault Setup", desc: "Building isolated VLAN paths and immutable cloud storage buckets." },
        { num: "04", title: "Automated Schedule", desc: "Orchestrating real-time database logs and daily full-system snapshots." }
      ],
      portfolio: [
        { title: "Immutable Cloud Backups", desc: "Configuring write-once-read-many (WORM) storage vaults to block ransomware modifications." },
        { title: "Bare-Metal Server Replication", desc: "Capturing complete hardware disk states to enable instant virtualization." },
        { title: "Continuous Database Backup", desc: "Streaming database changes at 15-minute intervals to secure storage." },
        { title: "Geographical Redundancy", desc: "Distributing archives across global regions (India, EU, Americas) for failsafe disaster handling." },
        { title: "System Recovery Dry-Runs", desc: "Executing quarterly mock disaster recover drills to ensure fast system startups." },
        { title: "Encrypted Local NAS Storage", desc: "Deploying high-speed on-site backup appliances for quick local file recoveries." }
      ],
      industries: [
        "Manufacturing Plants & Supply Chain Facilities",
        "Clinical Networks & Multi-Wing Hospital Units",
        "E-Commerce & High-Volume Transaction Platforms",
        "Financial Firms & Accounting Corporations",
        "Government Administrative Databases"
      ],
      regions: {
        onsite: ["Panchkula HQ Deployment Teams", "Tricity Area Field Engineers"],
        national: ["Pan India Enterprise Cloud Migrations"],
        intl: ["GCC Cloud Deployments (Kuwait City, Dubai)", "Global AWS & Azure Architectures"]
      },
      process: [
        { stage: "Data Mapping", desc: "Identifying active directories, SQL records, file servers, and configuration states." },
        { stage: "Vault Provisioning", desc: "Setting up isolated, encrypted off-site cloud storage targets." },
        { stage: "Local Client Setup", desc: "Installing non-disruptive, secure backup services on physical and cloud servers." },
        { stage: "Initial Baseline Snapshot", desc: "Executing the initial full replication during off-peak weekend hours." },
        { stage: "Policy Enforcement", desc: "Enabling AES-256 encryption, air-gapping, and retention cycles." },
        { stage: "Verification Runs", desc: "Automating checksum checks to guarantee backup file integrity." },
        { stage: "Disaster Drills", desc: "Conducting mock restoration trials to train operators and verify recovery speeds." }
      ],
      whyChoose: [
        "Ransomware-proof immutable storage setups that resist manipulation.",
        "Flat-rate pricing based on storage volume rather than high device licensing.",
        "Continuous remote health checks on your automated backup schedules.",
        "Experienced certified cloud engineers (AWS, Azure, Google Cloud).",
        "Strict compliance with ISO 27001 and regional privacy regulations.",
        "Panchkula development core coordinates recovery operations rapidly."
      ],
      benefits: [
        "Complete protection against corporate data loss disasters.",
        "Dramatically reduced recovery time (RTO), keeping employees active.",
        "Protected operational compliance, avoiding severe regulatory data penalties.",
        "Protected from ransomware extortion attempts by using clean backups.",
        "Confident long-term scaling with elastic storage limits.",
        "Assured business continuity for your partners and enterprise clients."
      ],
      techStack: ["Veeam Backup & Replication Suite", "AWS S3 Glaciers & Immutable Object Locks", "Microsoft Azure Backup Server", "Acronis Cyber Backup Solutions", "Synology & QNAP Local NAS Appliances", "AES-256 End-to-End Encryption Keys", "Sentry Automated Alerts Portal"],
      engagementModels: [
        "End-to-End Managed Backup & Recovery",
        "Disaster Recovery Strategy Consulting",
        "Cloud Storage Vault Integration Project",
        "Audit and Verification Diagnostic Retainer"
      ],
      faqs: [
        { q: "What is 'Immutable' storage, and why is it important?", a: "Immutable storage uses Write-Once-Read-Many (WORM) policies. Once data is written, it cannot be modified, overwritten, or deleted by any user or script, making it completely immune to ransomware attacks." },
        { q: "What is RTO and RPO?", a: "Recovery Time Objective (RTO) is the maximum time your systems can be offline during an incident before causing business harm. Recovery Point Objective (RPO) is the maximum age of files that must be recovered from storage (e.g., a 15-min RPO means you lose at most 15 minutes of work)." },
        { q: "Do we need high-bandwidth internet for cloud backups?", a: "Only during the initial full snapshot. Subsequent backups are 'incremental,' meaning we only transmit modified file segments, optimizing bandwidth utilization." },
        { q: "How do you verify backup file integrity?", a: "Our system automatically runs validation checksum tests and boots daily snapshots inside isolated testing environments to confirm they start up without errors." }
      ]
    };
  }

  // Category 2: Digital Engineering & Custom Software
  if (name.includes("bespoke") || name.includes("custom software") || name.includes("enterprise software")) {
    return {
      title: "Bespoke Enterprise Software Systems",
      subtitle: "Tailor-Made ERPs, Core Operations Software & Custom Business Workflows",
      tagline: "Consolidate your manual spreadsheets and legacy applications into a single, high-performance web system.",
      overview: "Off-the-shelf software rarely fits unique business models perfectly, leading to disjointed processes and double data entry. Sidigiqor Technologies engineers premium, bespoke enterprise software systems from scratch. We analyze your workflows, data pipelines, inventory routes, and invoicing chains to build secure, multi-tenant web portals. Utilizing modern React, Node.js, and secure PostgreSQL databases, we deliver reliable systems that streamline your operations and scale alongside your business milestones.",
      challenges: [
        "Disjointed processes with staff copying data across multiple manual spreadsheets.",
        "High subscription fees for bloated SaaS products where only 10% of features are used.",
        "Inability to integrate legacy operational machinery or custom external APIs.",
        "Slow, un-optimized page loads delaying daily logistics and inventory updates.",
        "Lack of structured user access control, exposing sensitive margins to general staff.",
        "Struggling to scale systems as order or tracking volume increases tenfold."
      ],
      needWhy: [
        "Fully Tailored Business Workflows engineered to match your operations.",
        "Zero Recurring SaaS Seat Fees, lowering long-term software expenditures.",
        "100% Intellectual Property Ownership with secure source code handover.",
        "High-Performance Database Architectures resolving data processing bottlenecks.",
        "Granular Role-Based Access Control protecting sensitive business margins.",
        "Seamless Integration with legacy software and external hardware APIs."
      ],
      approach: "We design software following strict Agile methodologies. We don't hide for months. We hold bi-weekly sprint reviews, allowing you to see and test working modules iteratively. Our engineers write clean, document-validated TypeScript code to ensure structural reliability and longevity.",
      frameworkSteps: [
        { num: "01", title: "Workflow Mapping", desc: "Detailed workshops mapping every spreadsheet, user role, and process checkpoint." },
        { num: "02", title: "Schema Engineering", desc: "Designing optimized relational database schemas and scalable API paths." },
        { num: "03", title: "TypeScript Coding", desc: "Surgical, performance-focused full-stack engineering with clean TypeScript code." },
        { num: "04", title: "System Staging", desc: "Deploying working modules to isolated test environments for user feedback." }
      ],
      portfolio: [
        { title: "Tailored ERP Systems", desc: "Consolidating finance, purchase orders, inventory, and operations into one core system." },
        { title: "Custom Web Portals", desc: "Multi-tenant platforms for vendors, clients, and internal departments." },
        { title: "Inventory & Dispatch Software", desc: "Real-time stock tracking with automated barcode or RFID loggers." },
        { title: "Automated Invoicing Systems", desc: "Integrated billing engines with regional taxation configurations." },
        { title: "Enterprise Database Upgrades", desc: "Migrating outdated MS Access or Excel setups into PostgreSQL clusters." },
        { title: "Staff Collaboration Boards", desc: "Custom activity tracking dashboards and communication systems." }
      ],
      industries: [
        "Heavy Manufacturing & Assembly Plants",
        "Logistics & Multi-Acre Warehousing Complexes",
        "Clinical Networks & Multi-Wing Healthcare Centers",
        "E-Commerce & Digital Scaleups",
        "Distributed Corporate Headquarters"
      ],
      regions: {
        onsite: ["Panchkula Core (On-site Workshops)", "Tricity Tech Hubs (Mohali, Chandigarh)"],
        national: ["Pan India Corporate Software Deliveries"],
        intl: ["Kuwait City (Al Sahab Tower)", "Dubai UAE (One Central Complex)", "London (UK)", "New York City (US)"]
      },
      process: [
        { stage: "Discovery Workshops", desc: "Mapping current manual spreadsheets, staff roles, and bottleneck workflows." },
        { stage: "Database Design", desc: "Architecting relational database schemas and endpoint structures." },
        { stage: "UI/UX Blueprinting", desc: "Creating high-fidelity interactive mockups for rapid user reviews." },
        { stage: "Core Development", desc: "Sprinting full-stack TypeScript engineering following clean code standards." },
        { stage: "API Integration", desc: "Connecting system modules with external shipping, payment, or legacy gateways." },
        { stage: "Security Audit", desc: "Executing rigorous VAPT security reviews prior to public deployment." },
        { stage: "Deployment & Training", desc: "Corporate onboarding sessions, admin documentation handover, and source escrow." }
      ],
      whyChoose: [
        "100% bespoke source code transfer; zero vendor lock-in.",
        "TypeScript-led development ensuring structural reliability.",
        "Experienced designers building intuitive, high-performance interfaces.",
        "Seamless integration with regional hardware scanners and APIs.",
        "Direct communication with Sahil Rana and lead software architects.",
        "Proven delivery success with major GCC investment portfolios."
      ],
      benefits: [
        "Dramatically reduced operational cycle times.",
        "Complete elimination of double data entry mistakes.",
        "Substantial long-term savings on recurring software licensing fees.",
        "Granular visualization of business margins and efficiency metrics.",
        "Assured data privacy with locally managed cloud databases.",
        "confidently scale operations without IT capacity bottlenecks."
      ],
      techStack: ["React 18 & Vite", "Node.js Express & TypeScript", "PostgreSQL & Prisma ORM", "Redis Performance Cache", "Docker Containers", "Tailwind CSS Layouts", "Sentry Bug Tracking Systems"],
      engagementModels: [
        "Milestone-Based Fixed-Price Project",
        "Dedicated Development Team Retainer",
        "Systems Modernization Consulting",
        "Long-Term Maintenance SLA (Computer & Code AMC)"
      ],
      faqs: [
        { q: "Who owns the software source code and IP after completion?", a: "You do. Our contracts state that all custom code repositories, system configurations, and intellectual property are transferred 100% to your enterprise upon project completion." },
        { q: "Can the software scale to support thousands of active users?", a: "Yes. We architect our software using stateless API endpoints and PostgreSQL databases, allowing you to easily scale cloud servers as your operational volume increases." },
        { q: "How do you handle feature updates after the software goes live?", a: "We transition your system into our software support loop. We can configure a dedicated monthly service level agreement (SLA) to iteratively deploy new modules as your needs evolve." },
        { q: "Can you migrate our historical data from Excel spreadsheets?", a: "Absolutely. We write custom migration scripts to clean, structure, and safely import your historical databases with zero data loss." }
      ]
    };
  }

  if (name.includes("website") || name.includes("web portals") || name.includes("premium website")) {
    return {
      title: "Premium Website Design & Custom Web Portals",
      subtitle: "Enterprise Web Systems, Client-Facing Portals & Optimized Brand Hubs",
      tagline: "Build a stunning, ultra-fast web presence designed to capture institutional clients and project market authority.",
      overview: "Generic WordPress templates reduce corporate credibility. Sidigiqor Technologies engineers premium, custom web platforms and portals from scratch. We combine modern typography, ample white space, and subtle entrance animations with optimized technical SEO architecture. Whether you need a secure portal for vendor access, a high-converting platform for international clients, or a headless content management system, we build websites that load in under 1 second and position your brand at the top of your market.",
      challenges: [
        "Slow-loading, bloated template websites causing visitors to bounce in under 3 seconds.",
        "Broken mobile responsive layouts reducing client conversion rates on modern devices.",
        "Vulnerability to constant malware injections and page defacement on legacy CMS portals.",
        "Struggling to edit basic text or add case studies without relying on external developers.",
        "Poor technical SEO schema structure, making the company invisible on search listings.",
        "Inability to integrate custom databases, booking widgets, or customer dashboards."
      ],
      needWhy: [
        "Stunning Custom Visual Interfaces projecting deep market authority.",
        "Sub-Second Load Times maximizing visitor retention rates.",
        "Headless Content Management allowing effortless in-house editing.",
        "Next-Gen Technical SEO Schemas for top search indexing.",
        "Failsafe Security Configurations resisting standard hacking and malware.",
        "Custom Client Portals bridging internal database workloads safely."
      ],
      approach: "We approach web design as an art of precision. We prioritize beautiful typography, strict grid structures, and seamless micro-interactions. Every pixel is calculated to reinforce your brand value, backed by static site generation (SSG) to ensure instant loading speeds globally.",
      frameworkSteps: [
        { num: "01", title: "Visual Discovery", desc: "Defining brand values, color palettes, and typographic pairings." },
        { num: "02", title: "UI Layouts", desc: "Crafting beautiful high-fidelity mockups for desktop and mobile devices." },
        { num: "03", title: "Tailwind Engineering", desc: "Writing semantic HTML, responsive CSS, and fast React components." },
        { num: "04", title: "SEO Schema Mapping", desc: "Configuring metadata, structured JSON-LD schemas, and speed optimization." }
      ],
      portfolio: [
        { title: "Enterprise Brand Platforms", desc: "High-end corporate websites with rich media and optimized typography." },
        { title: "Multi-Tenant Web Portals", desc: "Secure custom-built hubs for vendor logins, invoice lookups, and files." },
        { title: "Headless CMS Solutions", desc: "Integrating decoupled editors like Sanity or Strapi for safe editing." },
        { title: "High-Converting Landings", desc: "Performance-focused, single-product pipelines with complete analytics." },
        { title: "Interactive Calculator Portals", desc: "Embedded custom quote estimators and configuration systems." },
        { title: "Corporate Blogs & Newsrooms", desc: "Fast-rendering news matrices optimized for social syndication." }
      ],
      industries: [
        "Global Investment & Finance Portfolios",
        "Enterprise IT & Technical Services Providers",
        "Premium Real Estate & Property Developers",
        "Clinical Medical Practices & Private Hospitals",
        "Consulting, Legal & Professional Advisory Firms"
      ],
      regions: {
        onsite: ["Panchkula HQ Core", "Mohali Tech District", "Chandigarh Corporate Sectors"],
        national: ["Pan India Enterprise Web Rollouts"],
        intl: ["Kuwait Office (Al Sahab Tower)", "Dubai UAE (One Central)", "London (UK)", "New York City (US)"]
      },
      process: [
        { stage: "Creative Brief", desc: "Analyzing your market positioning, reference platforms, and conversion goals." },
        { stage: "Wireframing", desc: "Drafting layout schematics to define user navigation pathways." },
        { stage: "High-Fidelity UI", desc: "Styling layout elements using deep charcoal, soft whites, and premium gold colors." },
        { stage: "React Development", desc: "Developing modular frontends utilizing Vite, TypeScript, and Tailwind CSS." },
        { stage: "CMS Integration", desc: "Connecting secure, intuitive backend editors for text and media updates." },
        { stage: "Speed Tuning", desc: "Optimizing image formats, code splitting, and enabling CDN distribution." },
        { stage: "Launch & SEO", desc: "Configuring domain DNS, Google Search Console, and rich metadata schemas." }
      ],
      whyChoose: [
        "Stunning custom-crafted layouts; no repetitive pre-made templates.",
        "Static Site Generation ensuring load speeds under 500ms.",
        "Clean, responsive mobile layouts optimized for touch devices.",
        "No complex plugins to maintain or update over time.",
        "Integrated custom SEO schema blueprints built-in.",
        "Experienced design directors managing your digital brand."
      ],
      benefits: [
        "Immediate increase in high-quality business leads.",
        "Strengthened market credibility and professional authority.",
        "Zero security vulnerabilities from generic website software.",
        "Substantially lower web hosting expenditures through modern static setups.",
        "Effortless internal management without coding knowledge.",
        "Failsafe global availability backed by world-class CDNs."
      ],
      techStack: ["React & Next.js", "Vite & TypeScript", "Tailwind CSS", "Framer Motion", "Sanity.io & Strapi Headless CMS", "Vercel & AWS CloudFront CDNs", "Google Lighthouse Audit Tools"],
      engagementModels: [
        "Fixed-Scope Custom Website Project",
        "Web Portal Design & API Integration Contract",
        "Continuous Brand Growth Retainer",
        "Technical Speed & SEO Optimization Audit"
      ],
      faqs: [
        { q: "How easily can our staff edit text and write blog posts?", a: "We integrate highly intuitive Headless CMS portals (like Sanity or Strapi). Your team can log in, edit text, and publish posts through a simple editor without touching code." },
        { q: "Do you configure website search rankings (SEO)?", a: "Yes. Our standard package includes technical SEO. We write optimized semantic code, structure metadata, create XML sitemaps, and configure JSON-LD schemas." },
        { q: "Can the custom website support database features later?", a: "Absolutely. By building with React and modular components, we can easily add custom database portals, booking engines, or calculators whenever you need them." },
        { q: "What is your typical website delivery timeline?", a: "Custom enterprise platforms require 4 to 8 weeks, including visual research, high-fidelity UI layout approval, responsive React coding, and speed tuning." }
      ]
    };
  }

  if (name.includes("mobile")) {
    return {
      title: "Native & Cross-Platform Mobile Applications",
      subtitle: "High-Performance iOS & Android Engineering, Core API Sync & App Store Deployment",
      tagline: "Engage your customers and mobilize your field staff with beautiful, offline-first mobile applications.",
      overview: "Mobile users expect instant responses and elegant interfaces. Sidigiqor Technologies engineers native and cross-platform mobile applications from scratch. Leveraging React Native and Flutter, we deliver apps with smooth 60 FPS transitions, secure payment integrations, real-time push alerts, offline storage systems, and custom biometric logins, ensuring a seamless user experience across iOS and Android.",
      challenges: [
        "Extended development timelines and high costs trying to maintain separate Swift and Kotlin codebases.",
        "Laggy transitions, slow rendering, and constant app crashes in un-optimized hybrid frameworks.",
        "Loss of critical data inputs due to poor offline-handling in remote locations.",
        "Complex and frustrating user setup pathways leading to high app abandonment.",
        "Struggling to secure local storage arrays containing sensitive biometric keys or API tokens.",
        "Difficulty passing rigorous security and policy audits on Apple App Store and Google Play."
      ],
      needWhy: [
        "Unified Multi-Platform Engineering (iOS and Android) from one codebase.",
        "Native Hardware Integrations (Camera, GPS, Biometrics, Bluetooth).",
        "Offline-First Database Sync, preventing data loss in low-signal zones.",
        "High-Speed 60 FPS Transitions and optimized visual animations.",
        "Secure Payment Gateways and identity verification systems.",
        "Seamless Publishing Support for App Store and Google Play."
      ],
      approach: "We build mobile apps following offline-first design rules. We utilize secure local SQLite databases to capture user actions instantly, and sync data in the background once internet signal is restored, keeping the app fast and reliable.",
      frameworkSteps: [
        { num: "01", title: "App Blueprinting", desc: "Mapping mobile navigation matrices, user journeys, and API schemas." },
        { num: "02", title: "Interactive UI", desc: "Designing responsive touch-friendly mobile layouts with 44px minimum targets." },
        { num: "03", title: "React Native Setup", desc: "Writing performant, modular TypeScript code with strict component patterns." },
        { num: "04", title: "Secure Sync Setup", desc: "Engineeringbackground data sync and secure local encryption lockers." }
      ],
      portfolio: [
        { title: "B2C Customer Apps", desc: "Elegant e-commerce, banking, and scheduling applications with integrated payment systems." },
        { title: "Field Operations Apps", desc: "Offline-capable tracking and compliance apps with automated GPS loggers." },
        { title: "Custom Mobile Portals", desc: "Client dashboard apps with secure biometric logins and document viewers." },
        { title: "IoT Device Controllers", desc: "Connecting mobile devices to hardware controllers via Bluetooth or MQTT." },
        { title: "Real-Time Chat Apps", desc: "High-speed encrypted messaging apps with secure multimedia uploads." },
        { title: "Store Submission Support", desc: "Managing complete App Store and Google Play policy audits and compliance." }
      ],
      industries: [
        "Retail, Logistics & On-Demand Delivery Hubs",
        "Industrial Field Auditing & Safety Inspectors",
        "Clinical Medical Consultations & Health Tracking",
        "Election Campaigns & Ground Volunteer Teams",
        "SaaS Platforms & Emerging Digital Startups"
      ],
      regions: {
        onsite: ["Panchkula HQ Engineering Core", "Tricity Area On-Site Testing Teams"],
        national: ["Pan India Corporate Mobile Rollouts"],
        intl: ["Kuwait City Strategy Hub", "Dubai Mobile Advisory (One Central)", "New York Office", "London"]
      },
      process: [
        { stage: "UX Mapping", desc: "Designing touch flows, wireframes, and menu navigation directories." },
        { stage: "UI Styling", desc: "Crafting modern layouts using high-contrast colors and balanced negative space." },
        { stage: "React Native Setup", desc: "Sprinting clean TypeScript development and component structures." },
        { stage: "API Core Sync", desc: "Connecting mobile inputs to remote Express backends and database tables." },
        { stage: "Hardware Access", desc: "Enabling native camera access, GPS, and secure biometric credentials." },
        { stage: "QA & Stress Testing", desc: "Simulating poor network dropouts, memory leaks, and battery usage." },
        { stage: "App Store Publishing", desc: "Managing final App Store and Google Play submissions, assets, and licensing." }
      ],
      whyChoose: [
        "Experienced mobile engineers certified in React Native and Flutter.",
        "Beautiful custom layouts with optimized visual animations.",
        "Offline-first structural designs preventing data loss.",
        "Clean backend API code, keeping systems safe and responsive.",
        "Direct support throughout App Store and Google Play approval.",
        "Rigorous cybersecurity sweeps on mobile database caches."
      ],
      benefits: [
        "Dramatically improved customer engagement and retention.",
        "Empowered field staff working offline without workflow stops.",
        "Lowered development overheads using unified cross-platform systems.",
        "Instant delivery of business-critical alerts through push notifications.",
        "Protected mobile credentials with encrypted local secure stores.",
        "Increased enterprise capability in a mobile-first commercial market."
      ],
      techStack: ["React Native & Expo", "Flutter & Dart", "TypeScript", "SQLite Local Databases", "Redux & Zustand State Engines", "Firebase Push Notifications", "Apple Developer & Google Console Tools"],
      engagementModels: [
        "Fixed-Scope Custom Mobile App Build",
        "Mobile Product Design & Prototyping",
        "App Maintenance & SDK Update Contract",
        "Enterprise Mobile Integration Consulting"
      ],
      faqs: [
        { q: "Why do you use React Native and Flutter instead of native Swift or Kotlin?", a: "React Native and Flutter allow us to write a single codebase that compiles into native iOS and Android apps. This halves your development costs, shortens your timeline, and ensures feature consistency across both platforms." },
        { q: "Does the mobile app function when there is no internet connection?", a: "Yes. We build apps with local SQLite databases. Users can input data, log tasks, and complete actions completely offline. The app auto-syncs securely once connection is restored." },
        { q: "How do you handle App Store and Google Play submissions?", a: "We manage the entire submission process, including metadata structures, custom graphics formatting, privacy disclosures, and resolving any App Store policy audits." },
        { q: "What is your typical app development timeline?", a: "Custom mobile systems require 8 to 16 weeks, depending on database sync complexies, hardware integrations, and user credential layers." }
      ]
    };
  }

  if (name.includes("crm") || name.includes("hrms")) {
    return {
      title: "Tailored Corporate CRM & Integrated HRMS",
      subtitle: "Custom Client Lifecycle Pipelines, Advanced Employee Databases & Automatic Payroll Engines",
      tagline: "Ditch rigid software packages. Build custom CRM and HRMS systems designed to match your operational rules.",
      overview: "Standard CRM and HRMS packages force businesses to change their workflows to fit rigid software constraints. Sidigiqor Technologies engineers tailored corporate CRM and integrated HRMS platforms from scratch. We map your specific sales funnels, lead scoring, employee directory hierarchies, payroll formulations, and attendance rules into a single web portal, providing complete operational transparency and eliminating administrative spreadsheets.",
      challenges: [
        "Paying high per-seat SaaS fees for bloated features that complicate daily workflows.",
        "Struggling to track sales lead conversions across fragmented communication tools.",
        "Manual payroll processing using error-prone spreadsheets that require hours to verify.",
        "Inability to integrate custom attendance rules, shifts, or biometric turnstiles.",
        "Staff wasting time navigating disjointed CRM platforms that don't match your sales funnel.",
        "Loss of historical employee and sales data during platform transition periods."
      ],
      needWhy: [
        "Fully Customized CRM Pipelines designed to match your lead funnels.",
        "Integrated HRMS Portals with custom payroll and shift schedules.",
        "Zero Per-Seat SaaS License Fees, lowering operational costs.",
        "Direct Biometric Turnstile Integration for secure attendance tracking.",
        "Automated PDF Invoice & Payslip Generation.",
        "Centralized Enterprise Dashboards showing active sales and HR metrics."
      ],
      approach: "We design CRM and HRMS systems by sitting down with your sales and HR department heads. We map every process, approval chain, and calculation first, then write clean, modular code to create a system that fits your operational needs perfectly.",
      frameworkSteps: [
        { num: "01", title: "Process Discovery", desc: "Detailed mapping of sales funnels, commission scales, shift rosters, and payroll structures." },
        { num: "02", title: "Security Blueprint", desc: "Designing database permissions to restrict access to sensitive salaries and customer leads." },
        { num: "03", title: "API Integrations", desc: "Connecting system endpoints with local SMS gateways, email clients, and hardware." },
        { num: "04", title: "Deployment", desc: "Staging modules iteratively for team training and smooth workflow transition." }
      ],
      portfolio: [
        { title: "Custom CRM Platforms", desc: "Real-time pipeline trackers, custom client databases, and lead converters." },
        { title: "Integrated HRMS", desc: "Employee directories, leave approval systems, and organizational charts." },
        { title: "Biometric Attendance Modules", desc: "Syncing physical face-scanners and RFID gates to employee timecards." },
        { title: "Automated Payroll Engines", desc: "Calculating salaries, taxes, provident funds, and bonuses in one click." },
        { title: "Unified Communication Hubs", desc: "Logging client interactions, emails, and follow-up alerts in client timelines." },
        { title: "Vendor & Partner Portals", desc: "Isolated login screens for external collaborators to review active projects." }
      ],
      industries: [
        "Multi-Branch Corporate Offices",
        "High-Tempo Sales & Call Center Terminals",
        "Manufacturing Plants & Heavy Staff Warehouses",
        "Clinical Practice & Professional Healthcare Networks",
        "Distributed Technology & Consulting Firms"
      ],
      regions: {
        onsite: ["Panchkula On-Site Support Teams", "Tricity Regional Delivery Hubs"],
        national: ["Pan India Corporate CRM/HRMS Rollouts"],
        intl: ["Kuwait City Corporate Teams", "Dubai Global Trade Complexes", "London"]
      },
      process: [
        { stage: "Consulting", desc: "Auditing current sales spreadsheets, payroll calculations, and leave rules." },
        { stage: "System Blueprint", desc: "Drafting layout schematics, database relationships, and permission scopes." },
        { stage: "Core Engineering", desc: "Sprinting responsive frontend modules using clean React and Node.js code." },
        { stage: "Payroll Setup", desc: "Writing custom mathematical formulas to automate salary and taxation structures." },
        { stage: "Hardware Integration", desc: "Connecting physical biometric devices and timecard registers securely." },
        { stage: "Staff Training", desc: "Conducting user onboarding sessions and providing reference guides." },
        { stage: "Ongoing AMC", desc: "Continuous security updates, regular database backups, and AMC optimization." }
      ],
      whyChoose: [
        "100% custom-crafted platform; no recurring seat licenses.",
        "TypeScript-led development ensuring structural calculation precision.",
        "Direct integration with regional hardware turnstiles and APIs.",
        "Robust user access security protecting confidential salary and lead files.",
        "Proven track record delivering custom software to GCC corporate offices.",
        "Outsourced code maintenance and support contracts."
      ],
      benefits: [
        "Dramatically reduced administrative overhead and payroll calculation errors.",
        "Increased sales conversions with clear, automated lead histories.",
        "Zero data security risks from external software configurations.",
        "Seamless compliance with local regional labor regulations.",
        "Improved team collaboration through a single shared system.",
        "Complete ownership of core operational and customer intelligence."
      ],
      techStack: ["React 18 & TypeScript", "Node.js & Express API Gateway", "PostgreSQL Relational DB", "Docker Containers", "Tailwind CSS Layouts", "Zustand State Engine", "PDFKit Automated Document Generator"],
      engagementModels: [
        "Turnkey CRM/HRMS Development Project",
        "System Modernization & API Integration Contract",
        "Continuous Technical Support Contract",
        "Strategic Process Consulting Retainer"
      ],
      faqs: [
        { q: "Why should we build a custom CRM/HRMS instead of using Salesforce or Zoho?", a: "Salesforce and Zoho charge high monthly fees per user, which scale quickly. They are also highly complex to configure. A custom system has zero per-seat license fees, is tailored exactly to your workflows, and is owned completely by you." },
        { q: "Can the HRMS integrate with on-site biometric scanners?", a: "Yes. We connect to on-site biometric scanners (fingerprint, facial recognition, or RFID turnstiles) via secure API layers, mapping attendance events in real-time." },
        { q: "How secure is employee salary and client database data?", a: "Extremely secure. We implement role-based access control, secure database encryption, and multi-factor authentication VPN pathways, ensuring only authorized administrators access sensitive details." },
        { q: "What is your typical CRM/HRMS implementation timeline?", a: "Custom enterprise platforms require 8 to 14 weeks, depending on workflow complexity, biometric scanner integrations, and migration requirements." }
      ]
    };
  }

  if (name.includes("api") || name.includes("integration")) {
    return {
      title: "Secure API Development & Core System Integrations",
      subtitle: "High-Performance RESTful & GraphQL APIs, Legacy Systems Bridging & Secure Encrypted Middleware",
      tagline: "Unify your disjointed databases, ERP software, and SaaS platforms into a secure, real-time data ecosystem.",
      overview: "Information siloed inside disconnected applications slows down operational output. Sidigiqor Technologies engineers secure, high-performance API backends and custom middleware to bridge modern cloud SaaS, legacy databases, physical hardware sensors, and global payment gateways, establishing secure real-time data flows across your enterprise.",
      challenges: [
        "Manual data transfers between disconnected platforms leading to errors and delays.",
        "Unsecured, public API endpoints exposing internal databases to hacking.",
        "Broken system connections stalling automated logistics or billing queues.",
        "High latency in data sync processes delaying critical business reports.",
        "Difficulty bridging outdated legacy databases with modern web frameworks.",
        "Struggling to compile real-time tracking metrics across multiple regional branch systems."
      ],
      needWhy: [
        "Seamless Real-Time Data Sync between disjointed corporate systems.",
        "Military-Grade Encryption (AES-256) and secure JWT/OAuth endpoints.",
        "High-Performance API Backends (RESTful & GraphQL).",
        "Robust Legacy System Modernization without structural rewrites.",
        "Failsafe Error Handling and automated data synchronization retries.",
        "Centralized Enterprise API Gateways simplifying downstream maintenance."
      ],
      approach: "We build APIs following modern microservice and secure coding standards. We isolate integration pipelines, implement token rotation schemes, and build automatic error retries, keeping your systems connected and secure.",
      frameworkSteps: [
        { num: "01", title: "Endpoint Audit", desc: "Analyzing current data architectures, payload formats, and integration gaps." },
        { num: "02", title: "Security Design", desc: "Configuring robust TLS encryption protocols, token scopes, and rate limits." },
        { num: "03", title: "API Development", desc: "Writing performant, document-validated TypeScript code with clean endpoint structures." },
        { num: "04", title: "Pipeline Staging", desc: "Simulating high payloads, connection dropouts, and verification tests." }
      ],
      portfolio: [
        { title: "Custom API Development", desc: "Engineering secure REST and GraphQL API gateways from scratch." },
        { title: "Legacy DB Modernization", desc: "Building modern secure API wrappers over older SQL or MS Access setups." },
        { title: "Payment Gateway Integration", desc: "Connecting global processors (Stripe, GCC Knet, PayPal) securely." },
        { title: "ERP & CRM Bridging", desc: "Real-time sync between QuickBooks, Salesforce, Zoho, and custom databases." },
        { title: "Hardware Sensor Integration", desc: "Connecting IoT sensors, physical turnstiles, and cameras with web dashboards." },
        { title: "Continuous API Management", desc: "Regular security audits, access key rotations, and response speed optimization." }
      ],
      industries: [
        "Distributed Enterprise Corporations",
        "E-Commerce & High-Volume Retail Platforms",
        "Warehousing Complexes & Supply Chain Logistics",
        "Multi-Wing Clinical Healthcare Networks",
        "Emerging Technology SaaS Startups"
      ],
      regions: {
        onsite: ["Panchkula HQ Engineering Core", "Tricity Tech Districts (Mohali, Chandigarh)"],
        national: ["Pan India Corporate API Integrations"],
        intl: ["Kuwait City Strategy Hub", "Dubai Trade Tower Terminals", "London", "New York"]
      },
      process: [
        { stage: "Consulting", desc: "Mapping active system components, database tables, and payload types." },
        { stage: "API Architecture", desc: "Drafting data relationship diagrams, endpoint routes, and security scopes." },
        { stage: "Core Development", desc: "Writing responsive full-stack Node.js Express routes using TypeScript." },
        { stage: "Security Controls", desc: "Enabling OAuth2.0, AES-256 encryption, rate-limiting, and validation filters." },
        { stage: "Integration Testing", desc: "Executing sandbox syncs and verifying data mapping accuracy." },
        { stage: "Load Testing", desc: "Stressing endpoints under high payloads to optimize query response speeds." },
        { stage: "Launch & Support", desc: "Providing interactive Swagger/Postman documentation and continuous AMC monitoring." }
      ],
      whyChoose: [
        "Experienced software engineers certified in backend and API architectures.",
        "TypeScript-led development ensuring structural code precision.",
        "Uncompromising focus on AES-256 data security by default.",
        "Clean, interactive Swagger/Postman endpoint documentation.",
        "Proven success delivering integrations to major GCC financial portfolios.",
        "Outsourced API maintenance and system support contracts."
      ],
      benefits: [
        "Complete elimination of manual data transfer bottlenecks.",
        "Highly secured endpoints blocking unauthorized database queries.",
        "Substantially faster data delivery and real-time reporting cycles.",
        "Optimized processing performance lowering cloud compute costs.",
        "Flexible operational structures enabling easy downstream additions.",
        "Protected from system downtime with automated integration fallbacks."
      ],
      techStack: ["Node.js Express & Fastify", "TypeScript & Prisma", "PostgreSQL & Redis Cache", "GraphQL & Apollo Server", "Docker Containers", "OAuth 2.0 & JSON Web Tokens", "Swagger & Postman API Documentation"],
      engagementModels: [
        "Fixed-Scope API Integration Project",
        "Enterprise System Bridging Contract",
        "Continuous API Management Retainer",
        "Security Audit & Performance Tuning"
      ],
      faqs: [
        { q: "What is Swagger/Postman documentation, and is it included?", a: "Yes. We compile interactive Swagger and Postman documentation, allowing your downstream developers to easily test, query, and understand the API endpoints securely." },
        { q: "How do you protect API endpoints from hackers?", a: "We implement OAuth 2.0 validation, strict rate-limiting to prevent brute force attacks, input sanitization to block injections, and SSL/TLS encryption for secure data transport." },
        { q: "Can we bridge our legacy on-premises databases with the cloud?", a: "Absolutely. We engineer secure API middleware agents that bridge older SQL databases over encrypted VPN tunnels, enabling real-time cloud data sync." },
        { q: "What is your typical API development timeline?", a: "Depending on system scope and database complexities, custom API integrations require 4 to 8 weeks with staged milestones." }
      ]
    };
  }

  // Category 3: Artificial Intelligence & Emerging Tech
  if (name.includes("geo") || name.includes("generative") || name.includes("search optimization")) {
    return {
      title: "AI Search Optimization & Generative Engine Optimization (GEO)",
      subtitle: "Semantic Metadata Structuring, LLM Context Placement & Advanced AI Visibility Strategies",
      tagline: "Ensure your brand, services, and whitepapers are recommended by name in ChatGPT, Gemini, and Perplexity searches.",
      overview: "Search habits are shifting from Google keyword queries to AI search aggregators like ChatGPT, Gemini, Perplexity, and Copilot. Sidigiqor Technologies delivers proprietary GEO (Generative Engine Optimization) and AIO solutions. We audit your online footprint and restructure your technical documents, whitepapers, and brand profiles into semantic schema structures that LLM crawlers index easily, ensuring your brand ranks as the top recommendation in AI search outputs.",
      challenges: [
        "Losing high-value client leads who bypass standard Google searches to ask LLMs for recommendations.",
        "Total invisibility in synthesized AI search results, with engines recommending competitors.",
        "Legacy content structures that AI crawlers fail to read or categorize.",
        "Negative or inaccurate brand attributes synthesized by AI models.",
        "No strategy to track brand mentions or sentiment across LLM databases.",
        "Struggling to index complex service pages or whitepapers in AI citation trees."
      ],
      needWhy: [
        "Top-Tier Visibility in major AI search engines (ChatGPT, Gemini, Perplexity).",
        "Semantic Schema Restructuring for easy LLM crawler indexing.",
        "Strategic Content Alignment targeting high-intent AI queries.",
        "High-Authority Backlink Citations referencing your brand.",
        "Active Reputation Control across LLM synthesis databases.",
        "Pioneering early market share in the modern post-SEO search era."
      ],
      approach: "We approach GEO by analyzing how LLMs process information. We test your brand name against multiple LLM models, identify prompt pathways, and restructure your digital footprint using semantic metadata and structured markdown arrays to guarantee high relevance rankings.",
      frameworkSteps: [
        { num: "01", title: "Semantic Audit", desc: "Testing your brand mentions across leading LLM search engines." },
        { num: "02", title: "Schema Engineering", desc: "Structuring your technical profiles and service data into clean markdown arrays." },
        { num: "03", title: "Citation Placement", desc: "Distributing your articles across authoritative, high-ranking indexes." },
        { num: "04", title: "Performance Analysis", desc: "Monitoring LLM output recommendations and optimizing prompts." }
      ],
      portfolio: [
        { title: "AI Search Audit", desc: "Detailed mapping of current brand mentions and competitor rankings in LLM databases." },
        { title: "Semantic Schema Structuring", desc: "Re-coding your website content using advanced metadata tags and markdown." },
        { title: "LLM Context Optimization", desc: "Authoring deep-dive technical articles optimized for semantic crawlers." },
        { title: "High-Authority PR Syndication", desc: "Securing placements in high-credibility news indexes indexed by LLM models." },
        { title: "Prompt Pathway Testing", desc: "Simulating user queries to optimize recommending triggers." },
        { title: "AI Visibility Tracking", desc: "Continuous monitoring of brand visibility and citation rankings across leading models." }
      ],
      industries: [
        "Enterprise Tech & Managed Service Providers",
        "Global Investment & Corporate Financial Firms",
        "High-End Real Estate Developers",
        "Private Healthcare & Specialized Clinical Networks",
        "Emerging SaaS Startups & Technology Scaleups"
      ],
      regions: {
        onsite: ["Panchkula HQ Strategy Lab", "Tricity Regional Consulting Core"],
        national: ["Pan India Corporate GEO Frameworks"],
        intl: ["Kuwait City Consulting Office", "Dubai Trade Tower Hubs", "London (UK)", "New York Office (US)"]
      },
      process: [
        { stage: "Consulting", desc: "Auditing current brand search visibility across ChatGPT, Perplexity, and Gemini." },
        { stage: "Gap Analysis", desc: "Identifying competitor search dominance and citation sources." },
        { stage: "Schema Re-coding", desc: "Restructuring website code with specialized semantic microdata tags." },
        { stage: "Content Creation", desc: "Authoring high-end whitepapers and service guides in clean markdown formatting." },
        { stage: "Authority Syndication", desc: "Distributing optimized articles to major search indexes." },
        { stage: "Testing & Tweaking", desc: "Prompt-testing LLM models to verify recommendation triggers." },
        { stage: "Monthly Reports", desc: "Delivering detailed brand visibility metrics and citation rankings." }
      ],
      whyChoose: [
        "Pioneering experts in early-stage GEO and AIO technologies.",
        "Experienced technical writers crafting high-quality whitepapers.",
        "Proven delivery success boosting search visibility for global brands.",
        "Deep understanding of LLM crawling and semantic indexing rules.",
        "Direct communication with Sahil Rana and lead SEO/GEO directors.",
        "Flat-rate campaign pricing with transparent keyword targets."
      ],
      benefits: [
        "Top-tier visibility in the modern post-SEO search market.",
        "Dramatically increased inbound inquiries from high-intent B2B clients.",
        "Strengthened brand credibility and authoritative search presence.",
        "Protected digital reputation across synthetic search databases.",
        "Substantially higher conversion rates from high-ticket enterprise leads.",
        "Early competitive advantage over lagging industry competitors."
      ],
      techStack: ["ChatGPT & OpenAI API", "Google Gemini & Anthropic Claude", "Perplexity & Copilot Search Audits", "Custom Semantic Scraping Scripts", "JSON-LD & Semantic Microdata Tags", "Google Search Console & GA4"],
      engagementModels: [
        "Fixed-Scope GEO Optimization Campaign",
        "Brand AI Reputation Management Contract",
        "Continuous AI Visibility Retainer",
        "Strategic Search Architecture Consulting"
      ],
      faqs: [
        { q: "What is Generative Engine Optimization (GEO)?", a: "GEO is the practice of optimizing your brand parameters, whitepapers, and service profiles so that AI search engines (like ChatGPT, Perplexity, and Gemini) recommend you by name and cite your website during user queries." },
        { q: "How is GEO different from traditional SEO?", a: "SEO focuses on search keywords to rank high in standard Google results. GEO focuses on semantic context, structured microdata, and authority citations so AI systems recommend your brand when users ask conversational questions." },
        { q: "How long does it take to see visibility improvements?", a: "AI engines retrain and crawl continuously. Technical schema code edits show ranking improvements in weeks, while authority citations show results in 2 to 3 months." },
        { q: "Is our proprietary data safe during the optimization process?", a: "Yes. We work entirely with public brand data and whitepapers, optimizing how public AI models index your brand without accessing confidential systems." }
      ]
    };
  }

  if (name.includes("vision") || name.includes("computer vision") || name.includes("video classification")) {
    return {
      title: "Computer Vision & Smart Video Classification",
      subtitle: "Custom Neural Networks, Edge AI Classifiers & Real-Time Object Recognition Systems",
      tagline: "Deploy highly accurate AI vision models to automate safety audits, inventory classification, and physical security.",
      overview: "Manual visual checking is slow and prone to human error. Sidigiqor Technologies trains and deploys custom Computer Vision models and Edge AI classifiers. We integrate custom neural networks with standard RTSP video feeds to automate safety compliance (PPE auditing), identify product defects on assembly lines, track vehicle movements (ANPR), and detect security breaches in under 500ms, providing actionable operational alerts.",
      challenges: [
        "Failing to track workplace safety compliance (PPE), resulting in severe penalties.",
        "Manual inspection of manufacturing defects slowing down production output.",
        "Security teams failing to monitor multiple CCTV feeds, missing critical events.",
        "Unsynchronized vehicle logging in logistics yards causing staging bottlenecks.",
        "High cost of specialized industrial cameras stalling vision project rollouts.",
        "Slow incident investigation times due to manual video scrubbing."
      ],
      needWhy: [
        "Automated Safety Compliance (PPE auditing, hard-hat, vest detection).",
        "Real-Time Assembly Defect Identification, minimizing wastage.",
        "Sub-Second Intrusion Detection in restricted facility zones.",
        "Automatic License Plate Recognition (ANPR) and vehicle classification.",
        "Heat-Mapping & Flow Analytics tracking physical site occupancy.",
        "Direct Integration with local VMS software and notification gateways."
      ],
      approach: "We train models using your actual facility images, ensuring maximum classification precision and near-zero false alarms. We deploy models on edge computers (like Nvidia Jetson) to process video locally, optimizing cloud bandwidth costs.",
      frameworkSteps: [
        { num: "01", title: "Dataset Capture", desc: "Recording real-world video segments and labeling target objects." },
        { num: "02", title: "Model Training", desc: "Training custom deep learning networks on isolated GPU clusters." },
        { num: "03", title: "Edge Deployment", desc: "Installing optimized model checkpoints on local Nvidia hardware." },
        { num: "04", title: "SLA Support", desc: "Monitoring model classification precision and updating datasets." }
      ],
      portfolio: [
        { title: "Custom Safety PPE Classifiers", desc: "Real-time auditing of hard-hats, high-visibility vests, and protective gear." },
        { title: "Defect Identification Systems", desc: "High-speed assembly line cameras scanning for physical product defects." },
        { title: "Intelligent ANPR Systems", desc: "Automatic license plate loggers integrated with access gates." },
        { title: "Facility Heat Mapping", desc: "Tracking visitor density, queue times, and layout bottlenecks." },
        { title: "Intrusion Detection Models", desc: "Sub-second boundary security alerts with object classification." },
        { title: "Model Checkpoint Tuning", desc: "Optimizing neural networks for local edge processors." }
      ],
      industries: [
        "Heavy Manufacturing & Steel Plants",
        "Logistics Hubs & Large Warehouses",
        "Hospital Complexes & Parking Lots",
        "Construction Sites & Multi-Acre Projects",
        "High-Traffic Public Transport Hubs"
      ],
      regions: {
        onsite: ["Panchkula HQ Development Lab", "Baddi Industrial Belt", "Tricity Testing Hubs"],
        national: ["Pan India Corporate Vision Deployments"],
        intl: ["Kuwait City Strategy Hub", "Dubai Edge Systems (One Central)", "London", "New York"]
      },
      process: [
        { stage: "Consulting", desc: "Analyzing operational goals, lighting challenges, and camera resolutions." },
        { stage: "Dataset Capture", desc: "Compiling actual video samples of target objects and labeling patterns." },
        { stage: "Model Engineering", desc: "Training custom CNN classifiers tuned for high-precision accuracy." },
        { stage: "Edge Integration", desc: "Deploying model checkpoints on local Nvidia Jetson processors." },
        { stage: "Software Sync", desc: "Connecting alert outputs to local SMS, Telegram, and VMS controllers." },
        { stage: "System Testing", desc: "Executing sandbox trails and validating edge classification speeds." },
        { stage: "Handover & Support", desc: "Providing administrator dashboards, model documentation, and AMC updates." }
      ],
      whyChoose: [
        "Experienced AI specialists certified in deep learning architectures.",
        "Custom datasets trained on your actual facility parameters.",
        "Highly optimized edge computing, eliminating high cloud bandwidth costs.",
        "Sub-500ms warning dispatches via secure messaging APIs.",
        "Proven success deploying vision systems in heavy industrial zones.",
        "Panchkula HQ coordinates fast regional support and upgrades."
      ],
      benefits: [
        "Complete safety compliance, avoiding regulatory liabilities.",
        "Improved product quality with automated defect scanners.",
        "Dramatically reduced manual video scrubbing and inspection times.",
        "Proactive, instant security threat warning dispatches.",
        "Optimized logistics flows through smart ANPR setups.",
        "Deeper visual metrics and business intelligence reporting."
      ],
      techStack: ["Python, OpenCV & CUDA", "TensorFlow, PyTorch & ONNX", "Nvidia Jetson & TensorRT Edge Engines", "YOLO & MobileNet Classifiers", "Milestone & Nx Witness VMS", "Telegram & SMS API Gateways"],
      engagementModels: [
        "Turnkey Custom Computer Vision Deployment",
        "AI Vision Algorithm Design & Training",
        "Edge AI Hardware & VMS Setup",
        "Long-Term Model Tuning & AMC SLA"
      ],
      faqs: [
        { q: "Can we use our existing security cameras for AI vision?", a: "Yes. Our edge processors can connect to standard RTSP video streams from your existing IP cameras, avoiding expensive sensor replacements." },
        { q: "How accurate are your custom AI vision models?", a: "We target a classification accuracy rating of 95% to 99% by training models on actual images of your facility, lighting, and target objects." },
        { q: "Does the system require high-speed cloud internet?", a: "No. All video processing is performed locally on local Nvidia hardware. Internet is only required to send text notifications or analytics digests." },
        { q: "What is the timeline for custom vision systems?", a: "Depending on dataset complexity and training requirements, custom vision projects require 8 to 16 weeks with staged milestones." }
      ]
    };
  }

  // Categories 3, 4, 5, 6 defaults to structured profiles
  // We'll build a smart resolver that covers all other services dynamically with beautiful unique copy.
  // We will map general services based on keywords or exact matches.
  
  // Custom fallback generator for any service name to make it completely unique, SEO-optimized, and big-company type content
  const capitalizedService = serviceName.charAt(0).toUpperCase() + serviceName.slice(1);
  const words = serviceName.split(" ");
  const keyword = words[words.length - 1] || "Technology";

  return {
    title: capitalizedService,
    subtitle: `${capitalizedService} Strategies, Systems Integration & Enterprise Execution`,
    tagline: `Powering Sidigiqor's Global Customers with Optimized, High-Performance ${capitalizedService} Frameworks.`,
    overview: `In the modern era of automated business operations, technology acts as the primary engine of corporate scaling, security, and administrative efficiency. The implementation of ${capitalizedService} requires deep technical specialized knowledge, secure data architectures, and disciplined methodologies. Sidigiqor Technologies acts as a trusted advisory partner, helping organizations design, deploy, and manage advanced ${capitalizedService} capabilities. We bridge the gap between complex engineering and practical operational outcomes, delivering systems that protect your margins, secure your pipelines, and scale your brand globally.`,
    challenges: [
      `Fragmented operational processes with staff wasting time manually tracking ${keyword} workflows.`,
      `Loss of critical tracking data due to poor system configurations or legacy databases.`,
      `High operational downtime caused by un-optimized legacy server nodes or weak networking.`,
      `Lack of standardized operating blueprints, resulting in inconsistent business execution.`,
      `Exposure to modern cyber security threats and data compliance vulnerabilities.`,
      `Struggling to scale systems as order or tracking volume increases tenfold.`
    ],
    needWhy: [
      `Tailored ${capitalizedService} Workflows engineered to match your operational rules.`,
      `Rigorous Compliance Alignment (GDPR, ISO, Regional Frameworks) by default.`,
      `High-Performance System Architecture resolving data processing bottlenecks.`,
      `Seamless Integration with modern cloud APIs and legacy databases.`,
      `Real-Time Enterprise Dashboards showing active operational metrics.`,
      `Modular Scalability to confidently support 10x business volumetric spikes.`
    ],
    approach: `We do not believe in cookie-cutter software or pushy product sales. Our methodology starts with a structured consulting assessment. Our regional senior consultants sit down with your department heads to review business objectives, evaluate existing software and hardware topologies, catalog data flow restrictions, and chart your commercial scaling milestones. This allows us to select and build exactly what your organization requires, optimizing capital expenditure and ensuring maximum operational return.`,
    frameworkSteps: [
      { num: "01", title: "Objective Alignment", desc: "Drafting concrete business outcomes, workflows, and performance metrics." },
      { num: "02", title: "Architecture Design", desc: "Designing isolated data structures, security firewalls, and node models." },
      { num: "03", title: "Hardened Engineering", desc: "Clean TypeScript-led coding, hardware installation, or configuration." },
      { num: "04", title: "Managed Support", desc: "Ongoing stress testing, proactive patch setups, and advisory checkups." }
    ],
    portfolio: [
      { title: `Bespoke ${capitalizedService} Consulting`, desc: "Interactive strategic planning sessions, gap audits, and technical compliance advisory." },
      { title: "Enterprise Systems Integration", desc: "Connecting disparate regional databases, third-party software, and legacy systems." },
      { title: "Custom Dashboard Engineering", desc: "Developing elegant real-time performance tracking walls for decision-makers." },
      { title: "Proactive Security Shielding", desc: "Embedding security controls, multi-factor barriers, and encrypted data tunnels." },
      { title: "Comprehensive SLA Support", desc: "Guaranteed responsive helpdesk loops, physical diagnostics, and uptime monitoring." },
      { title: "Emerging Tech Architecture", desc: "Injecting machine learning, cloud elasticity, or IoT sensory inputs into operations." }
    ],
    industries: [
      "Heavy Manufacturing & Assembly Plants",
      "Logistics Complexes & Large Warehousing Hubs",
      "Clinical Medical Networks & Private Hospitals",
      "Corporate Administrative Headquarters",
      "Emerging Technology SaaS Startups"
    ],
    regions: {
      onsite: ["Panchkula HQ Core", "Mohali Tech District", "Chandigarh Corporate Sectors", "Baddi Industrial Area", "Punjab", "Haryana", "Himachal Pradesh"],
      national: ["Pan India Corporate Service Delivery"],
      intl: ["Kuwait Office (Al Sahab Tower)", "Dubai UAE (One Central)", "London (UK)", "New York City (US)"]
    },
    process: [
      { stage: "Discovery Workshops", desc: "Mapping current manual spreadsheets, staff roles, and bottleneck workflows." },
      { stage: "Technical Audit", desc: "Reviewing active infrastructure assets, database schemas, and cyber defense postures." },
      { stage: "Detailed Blueprinting", desc: "Drafting clear software architecture, hardware specs, API maps, and SLA standards." },
      { stage: "Active Engineering", desc: "Sprint-based software development, hardware configurations, and system staging." },
      { stage: "Vulnerability Scanning", desc: "Exposing the solution to security stress testing, penetration audits, and load scans." },
      { stage: "Corporate Handover", desc: "Comprehensive operator training, administrative documentation, and credential escrow." },
      { stage: "Long-Term Advisory", desc: "Continuous AMC alignment, regular system patches, and quarterly strategy audits." }
    ],
    whyChoose: [
      `Led by practical business objectives rather than aesthetic or trendy buzzwords.`,
      `Uncompromising focus on multi-tier cybersecurity standards by default.`,
      `Fully custom, clean software architecture ensuring total intellectual property ownership.`,
      `Direct access to Sidigiqor co-founder and lead engineers throughout the project lifecycle.`,
      `Proven regional delivery capability with physical offices in Panchkula Tricity.`,
      `Sustained global footprint supporting international scaling through Kuwait and Dubai towers.`
    ],
    benefits: [
      `Immediate decrease in employee downtime and operational friction.`,
      `Highly secured endpoints blocking malware and external intrusions.`,
      `Substantially faster data delivery and real-time reporting cycles.`,
      `Clear technical roadmaps enabling confident expansion planning.`,
      `Lowered internal overhead costs compared to hiring full-time managers.`,
      `Assured business continuity for your partners and enterprise clients.`
    ],
    techStack: ["React, TypeScript & Node.js frameworks", "PostgreSQL & Secured NoSQL Databases", "AWS & Google Cloud Managed Architectures", "Next-Gen Enterprise Firewalls & SSL tunnels", "RESTful & GraphQL API Integrations", "Docker Container Systems", "Sentry & Prometheus Health Monitors"],
    engagementModels: [
      "Fixed-Scope Turnkey Project Execution",
      "Strategic Technology Advisory Retainer",
      "Annual Maintenance Contract (AMC) & Operations Support",
      "Dedicated Team & Resource Staffing Alignment"
    ],
    faqs: [
      { q: `What is the typical timeline for implementing a ${capitalizedService} project?`, a: "Depending on the scope and complexity, initial consulting blueprints require 1-2 weeks, while active turnkey deployments usually range from 4 to 12 weeks with staged milestones." },
      { q: "Will our existing databases or historical records be preserved?", a: "Absolutely. Data integrity is our priority. We write custom migration scripts and perform isolated dry-runs to ensure zero historical record loss during systems transitions." },
      { q: "Do we own the full source code and intellectual property?", a: "Yes. For all custom software development and digital engineering deliverables, the complete source code, server credentials, and intellectual property are fully transferred to your company upon project completion." },
      { q: "How do we handle ongoing support after the project goes live?", a: "We transition your project into our Managed Support loop. This can be structured via an Annual Maintenance Contract (AMC) or a dedicated monthly support SLA matching your team's operational hours." }
    ]
  };
}
