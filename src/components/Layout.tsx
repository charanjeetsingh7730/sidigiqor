import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MessageSquare } from "lucide-react";
import { motion } from "motion/react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("hero");

  // Scroll to top on path change or scroll to hash if present
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname, hash]);

  // Determine active nav item based on route pathname
  useEffect(() => {
    if (pathname === "/") {
      setActiveSection("hero");
    } else if (pathname.startsWith("/about")) {
      setActiveSection("overview");
    } else if (pathname.startsWith("/divisions")) {
      setActiveSection("divisions");
    } else if (pathname.startsWith("/services")) {
      setActiveSection("services");
    } else if (pathname.startsWith("/insights")) {
      setActiveSection("blogs");
    } else if (pathname.startsWith("/careers")) {
      setActiveSection("careers");
    } else if (pathname.startsWith("/global-offices")) {
      setActiveSection("global-presence");
    } else if (pathname.startsWith("/contact")) {
      setActiveSection("contact");
    } else {
      setActiveSection("");
    }
  }, [pathname]);

  const handleNavClick = (sectionId: string) => {
    // Map section IDs to routes
    if (sectionId === "hero") {
      navigate("/");
    } else if (sectionId === "overview") {
      navigate("/about");
    } else if (sectionId === "divisions") {
      navigate("/divisions");
    } else if (sectionId === "services") {
      navigate("/services");
    } else if (sectionId === "blogs") {
      navigate("/insights");
    } else if (sectionId === "careers") {
      navigate("/careers");
    } else if (sectionId === "global-presence") {
      navigate("/global-offices");
    } else if (sectionId === "contact") {
      navigate("/contact");
    } else {
      // General fallbacks
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-300 selection:bg-brand-gold/30 selection:text-white font-sans antialiased">
      {/* Navigation Header */}
      <Header activeSection={activeSection} onNavClick={handleNavClick} />

      {/* Main Content */}
      <main className="min-h-[calc(100vh-250px)]">
        {children}
      </main>

      {/* Footer component */}
      <Footer onNavClick={handleNavClick} />

      {/* Fixed Quick Help Chat Bubble */}
      <motion.a
        href="https://wa.me/919911539101?text=Hello!%20I%20am%20interested%20in%20your%20services%20and%20solutions."
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 bg-[#0a0a0a] border border-brand-gold/80 hover:border-brand-gold hover:bg-brand-gold rounded-full shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] transition-all duration-300 group cursor-pointer"
        aria-label="Quick Help Contact"
      >
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-gold"></span>
        </span>
        <MessageSquare className="w-5 h-5 text-brand-gold group-hover:text-black transition-colors duration-300" />
      </motion.a>
    </div>
  );
}
