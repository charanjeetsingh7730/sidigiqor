"use client";

import React from "react";
import Link from "next/link";
import { ShieldAlert, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#0a0a0a] flex items-center justify-center text-center">
      <div className="max-w-md mx-auto px-6 py-12 bg-[#0f0f0f] border border-white/5 rounded-sm shadow-2xl relative overflow-hidden">
        {/* Ambient indicator */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-gold"></div>

        <div className="space-y-6">
          <div className="w-16 h-16 bg-brand-gold/10 border border-brand-gold/20 text-brand-gold rounded-full flex items-center justify-center mx-auto shadow-md">
            <ShieldAlert className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-[10px] font-mono tracking-widest text-brand-gold font-bold uppercase">
              Security Notice // Area Restricted
            </span>
            <h1 className="font-display font-light text-4xl text-white uppercase tracking-tight">
              404
            </h1>
            <p className="text-sm text-gray-400 font-medium">
              The requested system node or directory could not be located on this server. It may have been relocated or your connection parameters are incorrect.
            </p>
          </div>

          <div className="pt-4 border-t border-white/5 flex justify-center">
            <Link
              href="/"
              className="bg-brand-gold hover:bg-brand-gold-dark text-black px-6 py-2.5 rounded-sm text-xs font-bold tracking-widest uppercase inline-flex items-center transition-all cursor-pointer shadow-md"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Return to Portal
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
