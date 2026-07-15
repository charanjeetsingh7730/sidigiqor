import React, { useState, useEffect } from "react";
import { Mail, MessageSquare, Phone, MapPin, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

interface ContactSectionProps {
  initialMessage?: string;
  initialIndustry?: string;
  initialContextActive?: boolean;
}

export default function ContactSection({
  initialMessage = "",
  initialIndustry = "Manufacturing & Industrial",
  initialContextActive = false
}: ContactSectionProps) {
  // Contact form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: initialIndustry,
    message: initialMessage
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [advisorContextActive, setAdvisorContextActive] = useState(initialContextActive);

  useEffect(() => {
    if (initialMessage) {
      setFormData(prev => ({
        ...prev,
        message: initialMessage,
        industry: initialIndustry
      }));
      setAdvisorContextActive(true);
    }
  }, [initialMessage, initialIndustry]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API delivery
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        industry: "Manufacturing & Industrial",
        message: ""
      });
      setAdvisorContextActive(false);
    }, 1200);
  };

  return (
    <section id="contact" className="py-12 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct contact info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-[10px] font-mono font-bold tracking-widest text-brand-gold uppercase block mb-3">
                08. STRATEGIC CONVERSATION
              </span>
              <h2 className="font-display font-light text-3xl text-white tracking-tight leading-tight uppercase">
                Reach Our Advisory Team
              </h2>
              <p className="mt-3 text-gray-400 text-xs sm:text-sm leading-relaxed font-medium">
                Every successful transformation begins with an open conversation. Contact our regional engineers or submit a specific inquiry to schedule a gap-assessment.
              </p>
            </div>

            {/* Direct channels links card */}
            <div className="bg-[#0f0f0f] border border-white/5 rounded-sm p-6 space-y-4 shadow-xl">
              <span className="text-[9px] font-mono tracking-widest text-brand-gold font-bold uppercase block mb-1">
                Inbound Comms Matrix
              </span>

              <div className="flex items-start space-x-3 text-xs text-gray-300">
                <Mail className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Lead Consultants Direct:</strong>
                  <a href="mailto:Sahil@Sidigiqor.com" className="text-brand-gold hover:underline block font-semibold mt-1">
                    Sahil@Sidigiqor.com
                  </a>
                  <a href="mailto:sidigiqor@gmail.com" className="text-brand-gold hover:underline block">
                    sidigiqor@gmail.com
                  </a>
                </div>
              </div>

              <div id="whatsapp-comms" className="flex items-start space-x-3 text-xs border-t border-white/5 pt-4 transition-all duration-500 rounded p-2">
                <div className="p-1.5 rounded-sm bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-white block">WhatsApp Direct Chat:</strong>
                  <a
                    href="https://wa.me/919911539101?text=Hello!%20I%20am%20interested%20in%20your%20services%20and%20solutions."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:underline block font-semibold mt-1"
                  >
                    +91 99115 39101 (Click to Chat)
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-xs border-t border-white/5 pt-4 text-gray-300">
                <Phone className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Phone Coordinates:</strong>
                  <a href="tel:+919911539101" className="text-gray-300 block font-semibold hover:underline mt-1">
                    +91 99115 39101 (India HQ)
                  </a>
                  <a href="tel:+971562409703" className="text-gray-300 block hover:underline">
                    +971 56 240 9703 (Gulf Region)
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-xs border-t border-white/5 pt-4 text-gray-300">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Primary India HQ Address:</strong>
                  <span className="text-gray-400 block leading-relaxed mt-1">
                    Ramgarh, Panchkula, Haryana – 134118 (India)
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-[#0f0f0f] text-gray-300 rounded-sm p-5 text-xs space-y-2 border border-white/5 shadow-xl">
              <span className="text-[9px] font-mono tracking-widest text-brand-gold font-bold uppercase block">
                Our Uncompromising Promise
              </span>
              <p className="text-gray-400 leading-relaxed font-sans font-medium">
                &ldquo;We don&apos;t simply implement technology. We build secure, scalable, and future-ready technology ecosystems that empower businesses to grow with confidence.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: Inquiry Submission form */}
          <div className="lg:col-span-7 bg-[#0f0f0f] rounded-sm border border-white/5 p-6 sm:p-8 shadow-xl">
            <div className="border-b border-white/5 pb-4 mb-6">
              <span className="text-[9px] font-mono tracking-widest text-brand-gold font-bold uppercase">
                LEAD INTAKE SYSTEM
              </span>
              <h3 className="font-display font-light text-lg text-white mt-1 uppercase">
                Corporate Engagement Request
              </h3>
              <p className="text-xs text-gray-500 mt-1 leading-normal font-medium">
                Submit this brief dossier. A regional technical lead will follow up with schedule availability within 24 business hours.
              </p>
            </div>

            {submitSuccess ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-sm space-y-4 text-center animate-fadeIn">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-light text-slate-900 text-base">
                    Corporate Briefing Scheduled!
                  </h4>
                  <p className="text-xs text-slate-600 leading-normal max-w-md mx-auto">
                    Thank you for submitting your inquiry. An advisory partner representing Sidigiqor Technologies has successfully received your scenario parameters and will coordinate with you shortly.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSubmitSuccess(false)}
                  className="text-xs font-semibold text-amber-600 hover:text-amber-700 underline cursor-pointer"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4.5 text-slate-700">
                {advisorContextActive && (
                  <div className="bg-amber-500/10 border border-amber-500/20 text-amber-800 px-4 py-3 rounded-sm text-xs flex items-start gap-2.5 animate-fadeIn">
                    <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>Interactive Advisor Context Connected:</strong>
                      <p className="text-[11px] text-slate-500 mt-1">
                        The inquiry form is loaded with your tailored {formData.industry} roadmap. You may adjust the details below before submitting.
                      </p>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-400">
                      Contact Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sahil Rana"
                      className="w-full px-3.5 py-2.5 rounded-sm border border-white/10 text-xs focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all bg-black/40 text-white placeholder-gray-500 font-sans font-medium"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-400">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. Sahil@Sidigiqor.com"
                      className="w-full px-3.5 py-2.5 rounded-sm border border-white/10 text-xs focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all bg-black/40 text-white placeholder-gray-500 font-sans font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-400">
                      Phone Coordinates *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 99115 39101"
                      className="w-full px-3.5 py-2.5 rounded-sm border border-white/10 text-xs focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all bg-black/40 text-white placeholder-gray-500 font-sans font-medium"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-400">
                      Organization Name
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Sidigiqor Technologies Ltd"
                      className="w-full px-3.5 py-2.5 rounded-sm border border-white/10 text-xs focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all bg-black/40 text-white placeholder-gray-500 font-sans font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-400">
                    Primary Industry / Vertical
                  </label>
                  <select
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-sm border border-white/10 text-xs focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold bg-[#0a0a0a] text-white transition-all font-sans font-medium"
                  >
                    <option value="Manufacturing & Industrial">Manufacturing & Industrial</option>
                    <option value="Healthcare & Clinics">Healthcare & Clinics</option>
                    <option value="Political Campaigns & Groups">Political Campaigns & Groups</option>
                    <option value="Warehousing & Logistics">Warehousing & Logistics</option>
                    <option value="Education & Large Campuses">Education & Large Campuses</option>
                    <option value="Startups & Scaleups">Startups & Scaleups</option>
                    <option value="Other Corporate Sector">Other Corporate Sector</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-400">
                    Project Parameters & Objective Brief *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please details your network scope, cybersecurity challenges, firewall configurations, or political campaign timelines..."
                    className="w-full px-3.5 py-2.5 rounded-sm border border-white/10 text-xs focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all bg-black/40 text-white placeholder-gray-500 font-sans font-medium"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-gold hover:bg-brand-gold-dark text-black font-bold tracking-widest text-xs uppercase py-3 rounded-sm transition-all inline-flex justify-center items-center gap-2 cursor-pointer shadow-xl"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-black/40 border-t-black rounded-full animate-spin"></span>
                      Dispatching Brief...
                    </>
                  ) : (
                    <>
                      Request Gap-Assessment Briefing
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
