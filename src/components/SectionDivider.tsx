import React from "react";
import { motion } from "motion/react";

export default function SectionDivider() {
  return (
    <div className="w-full flex items-center justify-center py-6 select-none pointer-events-none">
      {/* Left line: fades in from transparent to a gold/white tint */}
      <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-brand-gold/20" />
      
      {/* Central gold-tinted geometric icon */}
      <div className="relative flex items-center justify-center mx-6">
        {/* Core Diamond */}
        <motion.div
          initial={{ rotate: 45, scale: 0.95 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="w-3 h-3 rotate-45 border border-brand-gold bg-[#0a0a0a] flex items-center justify-center z-10 shadow-[0_0_8px_rgba(212,175,55,0.4)]"
        >
          {/* Inner dot */}
          <div className="w-1.5 h-1.5 bg-brand-gold" />
        </motion.div>
        
        {/* Outer Ring geometric brackets */}
        <div className="absolute -inset-1.5 border border-brand-gold/10 rounded-sm rotate-45" />
        
        {/* Decorative horizontal lines flanking the center closely */}
        <div className="absolute left-[-16px] w-1.5 h-[1px] bg-brand-gold" />
        <div className="absolute right-[-16px] w-1.5 h-[1px] bg-brand-gold" />
        
        {/* Subtle glow behind */}
        <div className="absolute inset-0 w-3 h-3 rotate-45 bg-brand-gold/20 blur-[4px]" />
      </div>

      {/* Right line: fades out from gold/white tint to transparent */}
      <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-white/5 to-brand-gold/20" />
    </div>
  );
}
