import { FileText, ShieldCheck, Truck, RefreshCw } from "lucide-react";
import React from "react";

export interface PolicyContent {
  id: string;
  title: string;
  shortDesc: string;
  lastUpdated: string;
  sections: {
    heading: string;
    content: string | string[];
  }[];
}

export const POLICIES_DATA: PolicyContent[] = [
  {
    id: "terms",
    title: "Terms and Conditions",
    shortDesc: "Rules, obligations, and service delivery frameworks governing Sidigiqor Technologies client contracts, consulting projects, and software intellectual property.",
    lastUpdated: "July 12, 2026",
    sections: [
      {
        heading: "1. Acceptance of Terms",
        content: "Welcome to Sidigiqor Technologies OPC Private Limited ('Sidigiqor', 'we', 'our', or 'us'). By accessing our website, purchasing our services, signing Annual Maintenance Contracts (AMC), or utilizing our consulting products, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services or platforms."
      },
      {
        heading: "2. Scope of Services",
        content: [
          "IT & Enterprise Infrastructure: We offer hardware provisioning, server installation, and computer Annual Maintenance Contracts (AMC) to optimize operational uptime.",
          "Cybersecurity & VAPT: Our team delivers rigorous Vulnerability Assessment and Penetration Testing (VAPT), firewall perimeter deployments, and active threat containment blueprints.",
          "Digital Engineering: We develop bespoke custom software systems, premium web portals, and native or cross-platform mobile apps (iOS & Android).",
          "Artificial Intelligence & Surveillance: We design and deploy smart edge video analytics, AI surveillance cameras, machine learning predictive models, and Generative Engine Optimization (GEO) strategies.",
          "Political Campaigns: We engineer secure constituency databases, offline-first mobile booth applications, and live campaign war room solutions."
        ]
      },
      {
        heading: "3. Service Delivery & Client Obligations",
        content: "For custom digital projects, execution schedules and delivery milestones are governed by individual Statement of Work (SOW) documents. The client must cooperate fully, providing necessary database access, system credentials, and operational feedback in a timely manner. Delays in providing credentials may result in proportional shifts in milestone delivery dates."
      },
      {
        heading: "4. Annual Maintenance Contracts (AMC) Terms",
        content: "AMC contracts for hardware, computers, and server nodes are signed for a minimum duration of twelve (12) months unless agreed otherwise. Scheduled diagnostic checks, preventative physical cleaning, and software patch monitoring will occur according to the agreed SLA. Routine AMC visits do not cover hardware replacements due to physical damage, lightning strikes, or unauthorized third-party tampering."
      },
      {
        heading: "5. Intellectual Property Rights",
        content: "Unless specifically stated in a separate written agreement or SOW, all custom software, bespoke source code repositories, databases, and assets developed specifically for the client shall be transferred 100% to the client upon full payment. Sidigiqor retains ownership of its pre-existing proprietary libraries, frameworks, methodologies, and general toolsets."
      },
      {
        heading: "6. Limitation of Liability",
        content: "Sidigiqor Technologies shall not be liable for any indirect, incidental, consequential, special, or exemplary damages, including but not limited to loss of revenue, profits, data, or operational downtime resulting from system breaches, network outages, or hardware wear, even if advised of the possibility of such damages. Our maximum liability is capped at the fees paid to us under the specific active contract or milestone."
      },
      {
        heading: "7. Governing Law & Dispute Resolution",
        content: "These terms and all contracts are governed by and construed in accordance with the laws of India. Any disputes arising out of these terms shall be subject to the exclusive jurisdiction of the competent courts located in Panchkula, Haryana, India."
      },
      {
        heading: "8. Contact & Legal Address",
        content: "Sidigiqor Technologies OPC Private Limited, Ramgarh, Panchkula, Haryana - 134118, India. Official Corporate Email: Sahil@Sidigiqor.com | Backup: sidigiqor@gmail.com."
      }
    ]
  },
  {
    id: "privacy",
    title: "Privacy Policy",
    shortDesc: "How we collect, secure, process, and protect your data, credentials, databases, and digital information across our systems.",
    lastUpdated: "July 12, 2026",
    sections: [
      {
        heading: "1. Commitment to Data Privacy",
        content: "At Sidigiqor Technologies, we take the confidentiality of your personal, financial, and proprietary business information very seriously. This Privacy Policy describes how we collect, store, process, and safeguard data when you interact with our consulting services, custom websites, CRM platforms, HRMS portals, or campaign applications."
      },
      {
        heading: "2. Information We Collect",
        content: [
          "Client Contact Data: Names, business email addresses, telephone numbers, and corporate physical locations.",
          "Technical Infrastructure Data: Network IP addresses, firewall log structures, server configuration files, and VAPT target listings provided for diagnostic audits.",
          "Operational Data: Employee attendance records (for custom HRMS integrations), customer lead information (for bespoke CRM deployments), and localized voter demographics (for campaign analytical portals).",
          "Payment Data: Billing addresses, GST numbers, and payment gateway transaction references. We do not store full credit card numbers; payment processing is handled securely by certified third-party gateways."
        ]
      },
      {
        heading: "3. How We Use Your Data",
        content: "We use the collected information solely to perform our contractual duties, optimize networking setups, deliver secure software solutions, respond to support tickets, process milestone payments, and provide cybersecurity alerts. We never sell, lease, rent, or trade your corporate or consumer data with third parties."
      },
      {
        heading: "4. Database Isolation & Cybersecurity",
        content: "All client databases, custom software workloads, and campaign analytics run inside physically isolated Virtual Private Clouds (VPC). We employ end-to-end encryption (AES-256 for data-at-rest and TLS 1.3 for data-in-transit), secure Multi-Factor Authentication (MFA), and automated routine security patching to prevent unauthorized access."
      },
      {
        heading: "5. Compliance with Global Standards",
        content: "We design and deploy digital architectures that support client compliance with GDPR, regional GCC digital protection frameworks, and Indian digital data protection (DPDP) acts. If you require specialized data residency constraints (e.g. hosting databases purely within Kuwait or the UAE), we configure cloud boundaries accordingly."
      },
      {
        heading: "6. User Rights & Data Deletion",
        content: "You have the right to inspect, correct, update, or request the permanent deletion of your personal data stored on our servers. Requests should be emailed directly to Sahil@Sidigiqor.com. We process compliant requests within 10 business days, subject to regulatory tax and record-keeping laws."
      }
    ]
  },
  {
    id: "shipping",
    title: "Shipping & Delivery Policy",
    shortDesc: "Timelines, transport logistics, on-site hardware deployment procedures, and service delivery schedules for physical servers, network firewalls, and AI surveillance kits.",
    lastUpdated: "July 12, 2026",
    sections: [
      {
        heading: "1. Scope of Physical Goods & Deployments",
        content: "Sidigiqor Technologies provides both physical hardware (such as next-generation firewall appliances, enterprise network switches, high-definition CCTV dome cameras, industrial edge computing clusters, NVR servers, and employee biometric gates) and digital delivery of software code bases."
      },
      {
        heading: "2. Hardware Shipping Timelines",
        content: [
          "Domestic Deliveries (India): Physical hardware components are shipped from our technical distribution hubs within 2-4 business days. Delivery to site locations (including Punjab, Haryana, Himachal Pradesh, Chandigarh, Mohali, Panchkula, and nationwide) generally takes 3-7 business days.",
          "International Deliveries (GCC & Global): Hardware shipped to our international client offices (Kuwait, UAE, etc.) takes 7-14 business days, depending on customs clearance procedures and global transit lanes."
        ]
      },
      {
        heading: "3. On-Site Installation and AMC Setup",
        content: "Physical hardware delivery is accompanied by scheduled on-site engineering deployments. For Annual Maintenance Contracts (AMC) and complex security setups, our technicians coordinate on-site arrivals within 48 hours of hardware delivery to begin physical wiring, structural mounting, and network configuration."
      },
      {
        heading: "4. Shipping Costs & Import Tariffs",
        content: "Shipping costs are detailed transparently on project invoices or individual quotation proposals. For international deliveries, the client is responsible for standard regional customs duties, tariffs, and taxes unless specified otherwise in the written corporate agreement."
      },
      {
        heading: "5. Digital Software Delivery",
        content: "All custom websites, bespoke enterprise software, mobile apps, CRM systems, and database configurations are delivered electronically. We hand over compressed source codes, active GitHub repository ownership, credentials, and deployment documentation within 24 hours of final milestone sign-off."
      }
    ]
  },
  {
    id: "refund",
    title: "Cancellation & Refund Policy",
    shortDesc: "Refund rules, deposit returns, contract terminations, and milestone cancellations for software, computing AMC, cybersecurity services, and consulting contracts.",
    lastUpdated: "July 12, 2026",
    sections: [
      {
        heading: "1. Digital Services & Custom Software Development",
        content: "Bespoke software development, custom web portals, and mobile application engineering are executed in structured stages or milestones. Refunds are structured as follows:"
      },
      {
        heading: "2. Milestone-Based Refund Terms",
        content: [
          "Discovery & Planning Stage: If a project is cancelled by the client before any active development or coding begins, a 100% refund of the initial deposit is processed, minus any consulting hours already logged.",
          "Active Development Milestones: Once active software development, custom UI design, or database engineering begins on a milestone, payments for that active milestone are non-refundable.",
          "Delivered Software: Completed milestones that have been reviewed, approved, and signed off by the client are strictly non-refundable."
        ]
      },
      {
        heading: "3. Cybersecurity Audits & VAPT Audits",
        content: "Cybersecurity audits, network VAPT, and ethical hacking exercises require dedicated pre-allocation of security specialists and virtual sandbox preparation. Once audit activities begin or targets are queued for scanning, fees are 100% non-refundable."
      },
      {
        heading: "4. Annual Maintenance Contracts (AMC) Cancellations",
        content: "Clients may cancel their Annual Maintenance Contracts (AMC) for computers and IT support by providing a written notice at least thirty (30) days in advance to Sahil@Sidigiqor.com. In the event of AMC cancellation, refunds for the remaining unused months will be calculated pro-rata, deducting a 10% administrative cancellation charge."
      },
      {
        heading: "5. Refund Processing Timelines",
        content: "Approved refunds are processed back to the original bank account, corporate card, or payment gateway account within seven to ten (7-10) business days. Sidigiqor Technologies is not responsible for secondary bank delays."
      }
    ]
  }
];
