import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, AlertTriangle } from "lucide-react";
import SEO from "../components/SEO";

export default function NotFoundPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://sidigiqor.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Page Not Found",
        "item": "https://sidigiqor.com/404"
      }
    ]
  };

  return (
    <>
      <SEO
        title="404 - Page Not Found | Sidigiqor Technologies"
        description="The requested corporate engineering or IT consulting directory could not be located on this terminal. Return to safety."
        canonicalUrl="https://sidigiqor.com/404"
        breadcrumbSchema={breadcrumbSchema}
      />
      <div className="pt-32 pb-24 bg-black min-h-screen text-gray-300 flex flex-col items-center justify-center relative overflow-hidden">
        {/* Decorative background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-50"></div>
        
        <div className="max-w-md mx-auto px-4 text-center relative z-10 space-y-6">
          <div className="inline-flex p-4 bg-brand-gold/10 border border-brand-gold/20 text-brand-gold rounded-full animate-bounce">
            <AlertTriangle className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-[11px] font-mono text-brand-gold font-bold tracking-widest block uppercase">
              ERROR CODE // 404 TERMINAL DETECTED
            </span>
            <h1 className="font-display font-light text-4xl sm:text-5xl text-white uppercase tracking-tight leading-none">
              Directory Not Found.
            </h1>
            <p className="text-xs sm:text-sm text-gray-400 max-w-sm mx-auto leading-relaxed font-medium">
              The requested corporate engineering or IT consulting directory could not be located on this network node. It might have migrated or been renamed.
            </p>
          </div>

          <div className="pt-4">
            <Link
              to="/"
              className="bg-brand-gold hover:bg-brand-gold-dark text-black px-6 py-3 rounded-sm text-xs font-bold tracking-widest uppercase inline-flex items-center justify-center transition-all cursor-pointer shadow-md group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Return to Safety
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
