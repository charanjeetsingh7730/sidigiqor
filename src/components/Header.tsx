"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Phone } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { COMPANY_NAME, SLOGAN } from "../data";
import Logo from "./Logo";

interface HeaderProps {
  activeSection?: string;
  onNavClick?: (sectionId: string) => void;
}

export default function Header({ activeSection = "", onNavClick }: HeaderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "overview", label: "About" },
    { id: "divisions", label: "Divisions" },
    { id: "services", label: "Services" },
    { id: "blogs", label: "Insights" },
    { id: "careers", label: "Careers" },
    { id: "global-presence", label: "Global Offices" },
  ];

  // Dynamically determine active nav item in Next.js if not provided
  let currentActive = activeSection;
  if (!activeSection && pathname) {
    if (pathname === "/") currentActive = "hero";
    else if (pathname.startsWith("/about")) currentActive = "overview";
    else if (pathname.startsWith("/divisions")) currentActive = "divisions";
    else if (pathname.startsWith("/services")) currentActive = "services";
    else if (pathname.startsWith("/insights")) currentActive = "blogs";
    else if (pathname.startsWith("/careers")) currentActive = "careers";
    else if (pathname.startsWith("/global-offices")) currentActive = "global-presence";
    else if (pathname.startsWith("/contact")) currentActive = "contact";
  }

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
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-white/5 py-2.5"
          : "bg-[#0a0a0a]/40 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="cursor-pointer"
            onClick={() => handleItemClick("hero")}
          >
            <Logo lightMode={false} />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`px-3 py-1.5 rounded-sm text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  currentActive === item.id
                    ? "text-brand-gold bg-white/5 border border-white/10 font-bold"
                    : "text-gray-400 hover:text-white hover:bg-white/[0.02]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA & Contact info */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="mailto:Sahil@Sidigiqor.com"
              className="flex items-center text-xs font-mono text-gray-400 hover:text-white transition-colors font-medium"
            >
              <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 shadow-[0_0_8px_rgba(34,197,94,0.3)] animate-pulse"></span>
              Sahil@Sidigiqor.com
            </a>
            <button
              id="header-cta-btn"
              onClick={() => handleItemClick("contact")}
              className="bg-brand-gold hover:bg-brand-gold-dark text-black px-5 py-2 rounded-sm text-xs font-bold tracking-widest uppercase inline-flex items-center transition-all shadow-md active:scale-95 cursor-pointer"
            >
              Consult Expert
              <ArrowRight className="w-3.5 h-3.5 ml-2 stroke-[2.5]" />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => handleItemClick("contact")}
              className="bg-[#0f0f0f] border border-white/5 text-white p-2 rounded-sm hover:bg-black/80"
              aria-label="Contact"
            >
              <Phone className="w-4 h-4 text-brand-gold" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-400 hover:text-white p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a0a0a] border-b border-white/5 shadow-2xl px-4 py-5 space-y-1.5 animate-fadeIn">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              className={`block w-full text-left px-4 py-2.5 rounded-sm text-sm font-semibold transition-all cursor-pointer ${
                currentActive === item.id
                  ? "text-brand-gold bg-white/5 font-bold border-l-2 border-brand-gold"
                  : "text-gray-400 hover:text-white hover:bg-white/[0.02]"
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 border-t border-white/5 flex flex-col space-y-3 px-4">
            <span className="text-[10px] font-mono text-gray-500 tracking-wider">
              {SLOGAN}
            </span>
            <button
              onClick={() => handleItemClick("contact")}
              className="w-full bg-brand-gold hover:bg-brand-gold-dark text-black text-center py-2.5 rounded-sm text-xs font-bold tracking-widest uppercase inline-flex justify-center items-center transition-all cursor-pointer"
            >
              Get In Touch
              <ArrowRight className="w-3.5 h-3.5 ml-2 stroke-[2.5]" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
