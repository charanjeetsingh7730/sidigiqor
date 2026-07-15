import React from "react";
import {
  Shield,
  Cpu,
  Network,
  Sparkles,
  Database,
  Globe,
  CheckCircle2,
  Handshake,
  Layers
} from "lucide-react";

export default function AlliancesSection() {
  const allianceCategories = [
    {
      id: "security",
      title: "Cyber Security & Network Security",
      description: "Next-generation firewalls, secure unified threat management, and deep identity-based perimeters.",
      icon: Shield,
      brands: [
        { name: "GajShield", tag: "Enterprise Firewall" },
        { name: "Cisco", tag: "Enterprise Switch & Security" },
        { name: "SonicWall", tag: "UTM & Gateways" },
        { name: "Cyberoam", tag: "Identity-Based Firewall" }
      ]
    },
    {
      id: "compute",
      title: "Enterprise Computing & Infrastructure",
      description: "High-performance compute clusters, secure business endpoints, and multi-threaded engineering servers.",
      icon: Cpu,
      brands: [
        { name: "HP", tag: "Commercial Compute" },
        { name: "Dell Technologies", tag: "PowerEdge Enterprise Servers" },
        { name: "Lenovo", tag: "ThinkStation Workstations" },
        { name: "Acer", tag: "Endpoint Hardware" },
        { name: "HCL", tag: "IT & System Hardware" }
      ]
    },
    {
      id: "networking",
      title: "Networking & Wireless Solutions",
      description: "Zero-handoff indoor/outdoor enterprise wireless, high-speed routing, and managed Layer-3 switches.",
      icon: Network,
      brands: [
        { name: "Ubiquiti (UBNT)", tag: "UniFi & AirMax Wireless" },
        { name: "MikroTik", tag: "RouterOS & Core Routing" }
      ]
    },
    {
      id: "ai",
      title: "Artificial Intelligence & Smart Tech",
      description: "Bespoke industrial intelligence tools, smart visual feeds, and predictive operation telemetry.",
      icon: Sparkles,
      brands: [
        { name: "Mikshi AI", tag: "Custom Intelligence Systems" },
        { name: "SeeqWorld", tag: "AI Video & Spatial Analytics" },
        { name: "Optier Technology", tag: "Algorithmic Efficiency" }
      ]
    },
    {
      id: "platforms",
      title: "Cloud, Database & Enterprise Platforms",
      description: "High-concurrency data storage systems, multi-instance architectures, and enterprise platforms.",
      icon: Database,
      brands: [
        { name: "Oracle", tag: "Relational Database & Cloud" }
      ]
    },
    {
      id: "hosting",
      title: "Domain, Hosting & Cloud Services",
      description: "Fully automated secure virtual private servers, cloud domains, and distributed cluster hosting.",
      icon: Globe,
      brands: [
        { name: "GoDaddy", tag: "Domain Portfolio Systems" },
        { name: "Hostinger", tag: "Cloud VPS Infrastructure" }
      ]
    }
  ];

  const advantages = [
    "Enterprise IT Infrastructure Solutions",
    "Cyber Security & Firewall Deployment",
    "AI Surveillance & Video Analytics",
    "Cloud Migration & Managed IT Services",
    "Data Centre & Network Solutions",
    "Software & Digital Transformation Projects",
    "Annual Maintenance & Enterprise Support Services"
  ];

  return (
    <section id="alliances" className="py-12 bg-black border-b border-white/5 relative overflow-hidden">
      {/* Grid Pattern Backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-100 pointer-events-none"></div>
      
      {/* Highlight Spot */}
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-radial from-brand-gold/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-[1px] w-8 bg-brand-gold"></span>
              <span className="text-xs text-brand-gold font-bold tracking-[0.2em] uppercase">01c. Global Ecosystem</span>
            </div>
            <h2 className="font-display font-light text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase leading-tight">
              Technology <span className="font-medium italic text-brand-gold">Alliances</span> & Authorized Partner Network
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-8">
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-medium">
              Sidigiqor Technologies collaborates with globally recognized technology manufacturers and solution providers to deliver secure, scalable, and enterprise-grade IT, cybersecurity, networking, cloud, and digital transformation solutions. Our strategic partnerships enable us to provide certified products, trusted technologies, and comprehensive implementation services tailored to diverse business environments.
            </p>
          </div>
        </div>

        {/* Alliances Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {allianceCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className="bg-[#0c0c0c] border border-white/5 hover:border-brand-gold/30 hover:bg-[#111111] rounded-sm p-6 flex flex-col justify-between transition-all duration-300 relative group shadow-2xl"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-brand-gold/0 via-brand-gold/25 to-brand-gold/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 border-b border-white/5 pb-3">
                    <div className="p-2.5 bg-brand-gold/10 border border-brand-gold/20 text-brand-gold rounded-sm group-hover:scale-105 transition-transform duration-300">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h3 className="font-display font-bold text-sm text-white uppercase tracking-wide group-hover:text-brand-gold transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  <p className="text-xs text-gray-400 leading-relaxed font-medium">
                    {category.description}
                  </p>

                  {/* Brands List */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[9px] font-mono text-gray-500 font-bold uppercase tracking-wider block">
                      AUTHORIZED PLATFORMS
                    </span>
                    <div className="flex flex-col gap-1.5">
                      {category.brands.map((brand, bIdx) => (
                        <div
                          key={bIdx}
                          className="flex items-center justify-between bg-black/50 border border-white/5 rounded-xs px-2.5 py-1.5 text-xs transition-all hover:bg-white/[0.02]"
                        >
                          <span className="font-display font-bold text-gray-200">
                            {brand.name}
                          </span>
                          <span className="text-[9px] font-mono text-brand-gold bg-brand-gold/5 px-2 py-0.5 rounded-xs border border-brand-gold/10 font-bold uppercase">
                            {brand.tag}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-5 mt-5 border-t border-white/5 text-[9px] font-mono text-gray-500 font-bold uppercase">
                  <Layers className="w-3 h-3 text-brand-gold/60" />
                  <span>SLA-Backed Deployments</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Partnership Advantage Block */}
        <div className="bg-[#0c0c0c] rounded-sm border border-white/5 p-8 relative overflow-hidden hover:border-brand-gold/20 transition-all duration-300 shadow-2xl">
          {/* Subtle logo bg icon */}
          <div className="absolute top-1/2 -right-10 -translate-y-1/2 opacity-5 pointer-events-none">
            <Handshake className="w-72 h-72 text-white" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-[10px] font-mono tracking-widest text-brand-gold font-bold uppercase block">
                OUR PARTNERSHIP ADVANTAGE
              </span>
              <h3 className="font-display font-light text-2xl sm:text-3xl text-white tracking-tight leading-snug uppercase">
                DELIVERING TRUSTED TECHNOLOGY THROUGH <span className="font-medium italic text-brand-gold">GLOBAL</span> PARTNERSHIPS
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-medium">
                By maintaining certifications, engineering competencies, and strategic hardware-software agreements with elite global manufacturers, Sidigiqor ensures your organization receives original license validation, priority enterprise SLAs, and state-of-the-art configuration support.
              </p>
            </div>

            <div className="lg:col-span-7 bg-black/40 border border-white/5 rounded-sm p-6">
              <span className="text-[9px] font-mono tracking-widest text-brand-gold font-bold uppercase block border-b border-white/5 pb-3 mb-4">
                What Sidigiqor Delivers via Partner Channels:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {advantages.map((adv, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-gray-300 font-medium leading-tight">
                      {adv}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
