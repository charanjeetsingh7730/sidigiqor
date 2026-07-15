import React from "react";
import GlobalMap from "../components/GlobalMap";

export default function GlobalOfficesSection() {
  return (
    <section id="global-presence" className="py-12 bg-[#0a0a0a] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-[10px] font-mono font-bold tracking-widest text-brand-gold uppercase block mb-3">
            07. GLOBAL ADVISORY
          </span>
          <h2 className="font-display font-light text-3xl sm:text-4xl text-white tracking-tight uppercase">
            International Delivery Locations
          </h2>
          <p className="mt-2 text-gray-500 text-sm max-w-lg mx-auto font-medium">
            Operating administrative engineering terminals and strategic advisory hubs globally.
          </p>
        </div>

        {/* Global Presence Map Component */}
        <GlobalMap />
      </div>
    </section>
  );
}
