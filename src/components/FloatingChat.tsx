"use client";

import React from "react";
import { motion } from "motion/react";
import { MessageSquare } from "lucide-react";

export default function FloatingChat() {
  return (
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
  );
}
