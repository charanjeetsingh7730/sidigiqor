import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  User,
  Tag,
  Share2,
  Bookmark,
  Search,
  Sparkles,
  ChevronRight,
  BookOpen
} from "lucide-react";

interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  author: string;
  role: string;
  readTime: string;
  date: string;
  tags: string[];
}

const SAMPLE_BLOGS: BlogArticle[] = [
  {
    id: "video-analytics-evolution",
    title: "The Evolution of Video Analytics: Transforming Passive CCTV into Proactive Business Intelligence",
    excerpt: "Traditional surveillance records events for post-incident review. Explore how artificial intelligence on edge-networks transforms cameras into real-time operational scanners that flag boundary breaches and protocol issues.",
    category: "Artificial Intelligence",
    author: "Sahil Rana",
    role: "Co-Founder & Chief Architect",
    readTime: "7 Min Read",
    date: "July 10, 2026",
    tags: ["Computer Vision", "AI Surveillance", "Industrial Automation", "Smart City"],
    content: [
      "For decades, corporate security has operated on a simple premise: record everything, review if something goes wrong. Standard analog and IP security cameras have generated exabytes of video footage, yet over 99% of this data remains completely unanalyzed. It is reviewed only after a security breach, fire, or accident has already occurred. This reactive posture is no longer sufficient for high-speed industrial operations.",
      "The integration of Artificial Intelligence at the edge has completely transformed this model. Modern edge cameras and local video management software (VMS) are now capable of executing real-time object classification, vector pathing, and spatial calculations directly on video streams.",
      "At Sidigiqor Technologies, we design AI physical surveillance ecosystems that transform passive video into structured operational datasets. By deploying pre-trained convolutional neural networks (CNNs), our systems analyze video streams in millisecond loops, looking for predefined behaviors rather than just raw movement.",
      "Key applications in modern warehouses and manufacturing floors include line-crossing algorithms (ensuring zero unauthorized access to hazardous assembly zones), real-time PPE tracking (flagging lack of hard hats or high-visibility vests before an inspector arrives), and automatic vehicle logging (utilizing automatic license plate recognition to optimize shipping yard truck loading queues).",
      "By utilizing these proactive intelligence arrays, organizations can reduce security-incident response times from hours to seconds, automate perimeter safety audits, and unlock valuable insights into operational flow, worker movement, and equipment bottlenecks."
    ]
  },
  {
    id: "vapt-corporate-audits",
    title: "Corporate VAPT Audits: Finding the Invisible Vulnerabilities in Enterprise Networks",
    excerpt: "Ethical hacking and network stress testing are no longer optional. Understand how modern penetration testing locates deep configuration vulnerabilities in ERP backends, secure firewalls, and employee portals.",
    category: "Cyber Security",
    author: "Security Research Team",
    role: "Senior VAPT Consultants",
    readTime: "9 Min Read",
    date: "June 28, 2026",
    tags: ["VAPT", "Cybersecurity", "Firewall", "Network Defense", "Pen Testing"],
    content: [
      "In cybersecurity, what you do not know will hurt you. Many enterprises believe they are secure simply because they have installed a firewall and use strong passwords. However, modern cyberthreats do not knock on the front door; they scan your entire perimeter for tiny, invisible configuration discrepancies, unpatched software nodes, and API authentication loopholes.",
      "A Vulnerability Assessment and Penetration Testing (VAPT) audit is a simulated, controlled cyberattack executed by white-hat security experts. The goal is simple: locate and exploit security loopholes before malicious agents can discover them.",
      "At Sidigiqor, our VAPT methodology goes beyond basic automated scanning. We perform comprehensive black-box and white-box pentests targeting corporate ERP frameworks, public-facing cloud servers, isolated employee intranets, and remote-working VPN gateways.",
      "During recent assessments, the most common vulnerabilities we discovered were not complex zero-day exploits, but rather outdated systems patches, default database administrator credentials, and improperly authenticated backend REST APIs that leaked customer records.",
      "Upon completion of our VAPT simulations, we deliver a prioritized Remediation Roadmap. We classify vulnerabilities based on threat severity, mapping precise scripts and configurations to patch loopholes, harden perimeter firewalls, and establish active monitoring systems."
    ]
  },
  {
    id: "generative-engine-optimization",
    title: "Generative Engine Optimization (GEO): Preparing Your Corporate Footprint for AI Search",
    excerpt: "Traditional search engines are giving way to LLM-powered answer platforms. Learn how to structure and optimize your business documentation so AI engines recommend your services.",
    category: "Digital Growth",
    author: "Digital Engineering Team",
    role: "Lead SEO & Growth Engineers",
    readTime: "6 Min Read",
    date: "June 15, 2026",
    tags: ["GEO", "SEO", "Generative AI", "AI Search", "Market Strategy"],
    content: [
      "The search landscape is undergoing its most radical transformation since the invention of the web directory. High-intent buyers are increasingly bypassing traditional search results in favor of AI-guided tools like Gemini, ChatGPT, Perplexity, and Copilot.",
      "Instead of receiving a list of links, users now receive a single synthesized answer. If your services, whitepapers, and operational blueprints are not properly structured, these AI engines will fail to index or recommend your brand to enterprise buyers.",
      "This shift has birthed Generative Engine Optimization (GEO), also known as AI Search Optimization (AEO). GEO is the technical process of structuring digital assets to make them easily readable, highly authoritative, and structurally relevant to LLM crawlers.",
      "LLMs evaluate content based on different criteria than standard search engines. They look for detailed technical tables, transparent cost matrices, definitive co-founder quotes, and deep-dive case studies that exhibit direct expertise.",
      "Sidigiqor's proprietary GEO frameworks help businesses audit and re-engineer their digital footprints. We structure schemas, build clean markdown-friendly documentation rails, and secure authoritative contextual citations to ensure your company is consistently listed as the top recommended solution when AI engines synthesize industry roundups."
    ]
  },
  {
    id: "why-hardware-amc-matters",
    title: "Uptime Insurance: Why Comprehensive Hardware AMCs Shield Industrial Assembly Lines",
    excerpt: "Physical hardware wear-and-tear is the silent killer of factory throughput. Read why preventative maintenance and computer Annual Maintenance Contracts (AMC) save companies from sudden, costly outages.",
    category: "IT Infrastructure",
    author: "Sahil Rana",
    role: "Co-Founder",
    readTime: "5 Min Read",
    date: "May 20, 2026",
    tags: ["Computer AMC", "Infrastructure", "Industrial IT", "Tricity Support"],
    content: [
      "When a business-critical server or production computer fails, the costs multiply by the minute. In industrial zones like Panchkula, Baddi, or Solan, a sudden system freeze on an assembly line control unit can halt shipments, waste labor, and cost thousands of dollars in lost throughput.",
      "Yet, many industrial plants treat hardware maintenance as a reactive chore—only calling technicians when a machine is already offline and smoking.",
      "A comprehensive computer Annual Maintenance Contract (AMC) is essentially operational insurance. It guarantees that experienced systems engineers regularly inspect, optimize, and clean your physical IT infrastructure to eliminate issues before they manifest as downtime.",
      "Our physical diagnostic routines cover thorough internal component dust removal (essential in dusty industrial plants), power supply load verification, storage drive health checks (checking for sector degradation), cooling fan alignment, and backup power unit calibration.",
      "By establishing a dedicated AMC with Sidigiqor, regional businesses gain guaranteed response times, priority hardware parts replacement, and direct peace of mind, knowing that local IT experts are actively maintaining their operational technology."
    ]
  }
];

interface BlogsPageProps {
  onReadArticle: (serviceName: string, category: string) => void; // Dummy to direct back or similar
  onConsult: () => void;
}

export default function BlogsPage({ onReadArticle, onConsult }: BlogsPageProps) {
  const [selectedBlog, setSelectedBlog] = useState<BlogArticle | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Artificial Intelligence", "Cyber Security", "Digital Growth", "IT Infrastructure"];

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [selectedBlog]);

  const filteredBlogs = SAMPLE_BLOGS.filter((blog) => {
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          blog.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-slate-50 min-h-screen text-slate-700 font-sans antialiased pb-20 pt-28">
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-full h-[500px] opacity-10 pointer-events-none">
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Blog Article Full View */}
        {selectedBlog ? (
          <div className="space-y-8 max-w-4xl mx-auto animate-fadeIn">
            {/* Back button */}
            <button
              onClick={() => setSelectedBlog(null)}
              className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-slate-500 hover:text-amber-700 transition-colors cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>BACK TO INSIGHTS DIRECTORY</span>
            </button>

            {/* Header info */}
            <div className="space-y-4 border-b border-slate-200 pb-6">
              <span className="inline-flex items-center px-2 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200 text-[10px] font-mono font-bold uppercase tracking-widest">
                {selectedBlog.category}
              </span>
              <h1 className="font-display font-light text-slate-900 text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight uppercase">
                {selectedBlog.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-500 font-mono">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4 text-amber-600" />
                  <span>By <strong className="text-slate-800">{selectedBlog.author}</strong> ({selectedBlog.role})</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Clock className="w-4 h-4 text-amber-600" />
                  <span>{selectedBlog.readTime}</span>
                </div>
                <div>
                  <span>Published: {selectedBlog.date}</span>
                </div>
              </div>
            </div>

            {/* Excerpt panel */}
            <div className="border-l-2 border-amber-500 bg-white p-4 rounded-sm text-slate-600 italic text-sm font-medium shadow-sm">
              &ldquo;{selectedBlog.excerpt}&rdquo;
            </div>

            {/* Article Content */}
            <div className="bg-white p-6 sm:p-8 rounded-sm border border-slate-200 shadow-sm space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed max-w-3xl font-medium">
              {selectedBlog.content.map((p, idx) => (
                <p key={idx} className="font-sans">
                  {p}
                </p>
              ))}
            </div>

            {/* Tags footer */}
            <div className="border-t border-slate-200 pt-6 flex flex-wrap gap-2 items-center">
              <Tag className="w-4 h-4 text-amber-600 mr-1" />
              {selectedBlog.tags.map((tag, idx) => (
                <span key={idx} className="px-2 py-0.5 text-xs rounded-sm bg-white border border-slate-200 text-slate-600 font-mono shadow-xs">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Call to action inside blog */}
            <div className="bg-white rounded-sm p-6 sm:p-10 border border-slate-200 shadow-md flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mt-16">
              <div className="space-y-2 max-w-xl">
                <span className="text-[10px] font-mono text-amber-700 tracking-widest font-bold block uppercase">
                  Sidigiqor Consulting Vector
                </span>
                <h3 className="font-display font-light text-xl text-slate-900 uppercase">
                  Translate Operational Insights into Secure Business Growth
                </h3>
                <p className="text-xs text-slate-500 font-sans">
                  We deploy physical AI video networks, network infrastructure, next-generation firewalls, and custom software systems globally. Speak with Chief Architect Sahil Rana.
                </p>
              </div>
              <button
                onClick={onConsult}
                className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-2.5 rounded-sm text-xs font-bold tracking-widest uppercase shrink-0 transition-all cursor-pointer shadow-sm"
              >
                REQUEST AUDIT SESSION
              </button>
            </div>

          </div>
        ) : (
          <div className="space-y-12 animate-fadeIn">
            {/* Title block */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-slate-200 pb-8">
              <div>
                <span className="inline-flex items-center px-2.5 py-1 rounded-sm text-[10px] font-mono font-bold bg-amber-50 text-amber-700 border border-amber-200 tracking-widest uppercase mb-3">
                  <BookOpen className="w-3.5 h-3.5 mr-1 text-amber-600" />
                  KNOWLEDGE BASES & SYSTEMS RESEARCH
                </span>
                <h1 className="font-display font-light text-slate-900 text-3xl sm:text-4xl lg:text-5xl tracking-tight uppercase">
                  Sidigiqor <span className="font-medium italic text-amber-600">Insights</span> & Technical Papers
                </h1>
                <p className="text-slate-600 text-xs sm:text-sm mt-2 max-w-xl leading-relaxed font-medium">
                  Authoritative engineering perspectives on custom software integration, VAPT cybersecurity diagnostics, AI surveillance networks, and Generative AI index methodologies.
                </p>
              </div>

              {/* Direct Search Bar */}
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-2.5 w-4.5 h-4.5 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search technical papers..."
                  className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-sm text-xs focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 text-slate-800 placeholder-slate-400 transition-all shadow-xs"
                />
              </div>
            </div>

            {/* Category selection */}
            <div className="flex flex-wrap gap-1.5 border-b border-slate-200 pb-5">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 rounded-sm text-xs font-medium tracking-wide transition-all border cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-amber-600 border-amber-600 text-white font-bold shadow-sm"
                      : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-slate-900 shadow-xs"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Blogs list grid */}
            {filteredBlogs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredBlogs.map((blog) => (
                  <div
                    key={blog.id}
                    className="bg-white border border-slate-200 rounded-sm p-6 flex flex-col justify-between hover:border-amber-500/40 hover:bg-slate-50/50 transition-all group shadow-sm"
                  >
                    <div className="space-y-4">
                      <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
                        <span className="text-amber-600 font-bold uppercase tracking-wider">{blog.category}</span>
                        <span>{blog.date}</span>
                      </div>
                      
                      <h3 className="font-display font-semibold text-xl text-slate-900 group-hover:text-amber-600 transition-colors leading-snug">
                        {blog.title}
                      </h3>
                      
                      <p className="text-slate-600 text-xs leading-relaxed font-sans font-medium line-clamp-3">
                        {blog.excerpt}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-[10px] font-mono text-slate-400">
                        <div className="w-1.5 h-1.5 bg-amber-600 rounded-full animate-pulse" />
                        <span>{blog.readTime} &middot; {blog.author.split(" ")[0]}</span>
                      </div>
                      
                      <button
                        onClick={() => setSelectedBlog(blog)}
                        className="text-xs font-bold text-slate-800 group-hover:text-amber-600 transition-colors inline-flex items-center space-x-1 cursor-pointer"
                      >
                        <span>Read Paper</span>
                        <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 border border-slate-200 bg-white rounded-sm shadow-xs">
                <Bookmark className="w-8 h-8 text-slate-300 mx-auto mb-3" />
                <h3 className="text-sm font-bold text-slate-800">No Technical Papers Located</h3>
                <p className="text-xs text-slate-400 max-w-sm mx-auto mt-1 font-sans">
                  We found no papers matching your criteria. Try adjusting your category filters or search queries.
                </p>
              </div>
            )}

            {/* Bottom research statement */}
            <div className="bg-white p-6 rounded-sm border border-slate-200 shadow-sm text-center max-w-2xl mx-auto space-y-2">
              <strong className="text-slate-800 text-xs block font-mono tracking-wider">UNCOMPROMISING TRANSPARENCY</strong>
              <p className="text-[11px] text-slate-500 leading-normal font-sans">
                Our insights are authored directly by active network engineers, code architects, and security consultants at Sidigiqor. We share real structural findings to educate the wider enterprise technology community.
              </p>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
