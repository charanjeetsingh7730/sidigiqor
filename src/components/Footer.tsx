"use client";

import React from "react";
import { Mail, Phone, MapPin, ArrowUp, Instagram, Linkedin, Facebook, Youtube } from "lucide-react";
import { useRouter } from "next/navigation";
import { COMPANY_FULL_NAME, SLOGAN, TAGLINE } from "../data";
import Logo from "./Logo";

interface FooterProps {
  onNavClick?: (sectionId: string) => void;
}

export default function Footer({ onNavClick }: FooterProps) {
  const router = useRouter();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleItemClick = (id: string) => {
    if (onNavClick) {
      onNavClick(id);
    } else {
      if (id === "hero") router.push("/");
      else if (id === "overview") router.push("/about");
      else if (id === "divisions") router.push("/divisions");
      else if (id === "services") router.push("/services");
      else if (id === "blogs") router.push("/insights");
      else if (id === "careers") router.push("/careers");
      else if (id === "global-presence") router.push("/global-offices");
      else if (id === "contact") router.push("/contact");
      else if (id === "legal-policies") router.push("/#legal-policies");
    }
  };

  return (
    <footer className="bg-[#0f0f0f] text-slate-300 border-t border-white/5 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/5">
          {/* Logo & Slogan Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="cursor-pointer" onClick={handleScrollTop}>
              <Logo lightMode={false} />
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-sans max-w-sm">
              Sidigiqor Technologies OPC Private Limited is a premier technology consulting and digital transformation company. We design, secure, and scale future-ready enterprise ecosystems.
            </p>
            <div className="text-[10px] font-mono text-brand-gold font-bold uppercase tracking-widest">
              {SLOGAN}
            </div>
            <p className="text-[10px] text-gray-500 font-mono tracking-wider">
              {TAGLINE}
            </p>
            
            {/* Social Media Links */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://www.instagram.com/sidigiqor/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 border border-white/10 hover:border-brand-gold/50 hover:bg-black text-slate-400 hover:text-brand-gold rounded-full transition-all duration-300 group"
                title="Follow on Instagram"
              >
                <Instagram className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.facebook.com/sidigiqor"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 border border-white/10 hover:border-brand-gold/50 hover:bg-black text-slate-400 hover:text-brand-gold rounded-full transition-all duration-300 group"
                title="Follow on Facebook"
              >
                <Facebook className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.linkedin.com/company/sidigiqor"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 border border-white/10 hover:border-brand-gold/50 hover:bg-black text-slate-400 hover:text-brand-gold rounded-full transition-all duration-300 group"
                title="Follow on LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.youtube.com/@ASGaming_official"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 border border-white/10 hover:border-brand-gold/50 hover:bg-black text-slate-400 hover:text-brand-gold rounded-full transition-all duration-300 group"
                title="Subscribe on YouTube"
              >
                <Youtube className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="font-display font-bold text-xs uppercase tracking-wider text-white">
              Navigation
            </h5>
            <ul className="space-y-2 text-xs text-gray-400 font-medium">
              <li>
                <button onClick={() => handleItemClick("hero")} className="hover:text-white transition-colors cursor-pointer">
                  Home Portal
                </button>
              </li>
              <li>
                <button onClick={() => handleItemClick("overview")} className="hover:text-white transition-colors cursor-pointer">
                  Corporate Profile
                </button>
              </li>
              <li>
                <button onClick={() => handleItemClick("divisions")} className="hover:text-white transition-colors cursor-pointer">
                  Business Divisions
                </button>
              </li>
              <li>
                <button onClick={() => handleItemClick("services")} className="hover:text-white transition-colors cursor-pointer">
                  Services List
                </button>
              </li>
              <li>
                <button onClick={() => handleItemClick("methodology")} className="hover:text-white transition-colors cursor-pointer">
                  Consulting Model
                </button>
              </li>
              <li>
                <button onClick={() => handleItemClick("contact")} className="hover:text-white transition-colors cursor-pointer">
                  Contact Matrix
                </button>
              </li>
              <li>
                <button onClick={() => handleItemClick("legal-policies")} className="hover:text-brand-gold text-brand-gold/95 font-bold transition-colors uppercase text-[10px] tracking-wider cursor-pointer">
                  Merchant Policies
                </button>
              </li>
            </ul>
          </div>

          {/* Offices List */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="font-display font-bold text-xs uppercase tracking-wider text-white">
              Primary Office Hubs
            </h5>
            <ul className="space-y-3 text-[11px] text-gray-400">
              <li className="flex items-start">
                <MapPin className="w-3.5 h-3.5 text-brand-gold mr-2 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gray-200 block">India (HQ)</strong>
                  <span>Ramgarh, Panchkula, Haryana – 134118</span>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="w-3.5 h-3.5 text-brand-gold mr-2 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gray-200 block">Kuwait</strong>
                  <span>Al Sahab Tower, Level 18, Al-Ghanim Street, Kuwait City</span>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="w-3.5 h-3.5 text-brand-gold mr-2 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gray-200 block">Dubai (UAE)</strong>
                  <span>One Central, 8th & 9th Floor, Trade Center Second</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact coordinates */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="font-display font-bold text-xs uppercase tracking-wider text-white">
              Inquiries & Channels
            </h5>
            <ul className="space-y-3 text-[11px] text-gray-400">
              <li className="flex items-center">
                <Mail className="w-4 h-4 text-gray-500 mr-2.5" />
                <a href="mailto:Sahil@Sidigiqor.com" className="hover:text-white transition-colors">
                  Sahil@Sidigiqor.com
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 text-gray-500 mr-2.5" />
                <a href="mailto:sidigiqor@gmail.com" className="hover:text-white transition-colors">
                  sidigiqor@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 text-gray-500 mr-2.5" />
                <a href="tel:+919911539101" className="hover:text-white transition-colors">
                  +91 99115 39101 (India)
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 text-gray-500 mr-2.5" />
                <a href="tel:+971562409703" className="hover:text-white transition-colors">
                  +971 56 240 9703 (UAE)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Compliance & Legal Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-gray-500 font-mono">
          <div>
            &copy; {new Date().getFullYear()} {COMPANY_FULL_NAME}. All Rights Reserved.
            <span className="block sm:inline sm:ml-4 text-gray-600">Built in India. Scaling Globally.</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-brand-gold/50 text-[10px] font-bold tracking-widest uppercase">System Status: Optimal</span>
              <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
            </div>
            <button onClick={handleScrollTop} className="flex items-center hover:text-white transition-colors cursor-pointer">
              Scroll to Top
              <ArrowUp className="w-3.5 h-3.5 ml-1.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
