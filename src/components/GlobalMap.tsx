import React, { useState, useEffect } from "react";
import { MapPin, Globe, Clock, Building2, Phone, Mail } from "lucide-react";
import { GLOBAL_OFFICES } from "../data";

export default function GlobalMap() {
  const [selectedOfficeId, setSelectedOfficeId] = useState<string>("hq");
  const [clocks, setClocks] = useState<{ [tz: string]: string }>({});

  const selectedOffice = GLOBAL_OFFICES.find((o) => o.id === selectedOfficeId) || GLOBAL_OFFICES[0];

  // Update clocks every second
  useEffect(() => {
    const updateTimes = () => {
      const times: { [tz: string]: string } = {};
      GLOBAL_OFFICES.forEach((office) => {
        try {
          times[office.timezone] = new Intl.DateTimeFormat("en-US", {
            timeZone: office.timezone,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true
          }).format(new Date());
        } catch (e) {
          times[office.timezone] = new Date().toLocaleTimeString();
        }
      });
      setClocks(times);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#0a0a0a] rounded-sm border border-white/5 p-6 sm:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Sidebar Selector */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div>
            <span className="inline-flex items-center px-2.5 py-1 rounded-sm text-[10px] font-mono font-bold bg-white/5 text-brand-gold border border-white/10 mb-4">
              <Globe className="w-3.5 h-3.5 mr-1.5 text-brand-gold animate-spin" />
              GLOBAL OPERATIONS FOOTPRINT
            </span>
            <h3 className="font-display font-light text-2xl text-white tracking-tight">
              Panchkula · Kuwait · Dubai · New York
            </h3>
            <p className="mt-2 text-gray-400 text-xs sm:text-sm leading-relaxed font-sans">
              With headquarters in India, Sidigiqor delivers localized physical IT infrastructure, managed AMC support, and AI surveillance, alongside global digital development terminals in the GCC and North America.
            </p>
          </div>

          {/* Quick list selectors */}
          <div className="space-y-2.5">
            {GLOBAL_OFFICES.map((office) => {
              const isSelected = office.id === selectedOfficeId;
              return (
                <button
                  key={office.id}
                  onClick={() => setSelectedOfficeId(office.id)}
                  className={`w-full flex items-center justify-between p-3.5 rounded-sm border text-left transition-all cursor-pointer ${
                    isSelected
                      ? "bg-white/10 border-brand-gold text-white shadow-md"
                      : "bg-white/5 border-white/5 text-gray-400 hover:border-white/10 hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-8 h-8 rounded-sm flex items-center justify-center ${
                        isSelected ? "bg-white/10 text-white" : "bg-white/5 border border-white/10 text-gray-400"
                      }`}
                    >
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold font-display block text-white">
                        {office.city} Office
                      </span>
                      <span className={`text-[10px] block ${isSelected ? "text-brand-gold-light" : "text-gray-500"}`}>
                        {office.country}
                      </span>
                    </div>
                  </div>

                  {/* Clock badge */}
                  <div className="flex items-center space-x-1.5 bg-black/40 px-2.5 py-1 rounded-sm text-[10px] font-mono">
                    <Clock className="w-3 h-3 text-brand-gold-light" />
                    <span className="font-bold text-white">
                      {clocks[office.timezone] ? clocks[office.timezone].split(" ")[0] : "--:--"}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="border-t border-white/5 pt-4 text-gray-500 text-[10px] font-mono">
            * Interactive world-clock tracks live operating hours.
          </div>
        </div>

        {/* Map Visual / Active details display */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          {/* Stylized Visual Map Vector Panel */}
          <div className="relative bg-black/60 border border-white/5 rounded-sm h-[260px] overflow-hidden flex items-center justify-center p-4">
            {/* Grid Coordinates BG */}
            <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
            
            {/* Subtle technical lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-25">
              <line x1="0" y1="130" x2="100%" y2="130" stroke="#475569" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="180" y1="0" x2="180" y2="100%" stroke="#475569" strokeWidth="1" strokeDasharray="4 4" />
              {/* Dynamic routing line from HQ to selected office */}
              {selectedOfficeId !== "hq" && (
                <path
                  d={`M ${67 * 4.5} ${55 * 2.6} Q ${(67 + selectedOffice.coordinates.x) * 2.25} 40 ${selectedOffice.coordinates.x * 4.5} ${selectedOffice.coordinates.y * 2.6}`}
                  fill="none"
                  stroke="#d4af37"
                  strokeWidth="2"
                  strokeDasharray="5 3"
                  className="animate-pulse"
                />
              )}
            </svg>

            {/* Plot office dots */}
            {GLOBAL_OFFICES.map((office) => {
              const isSelected = office.id === selectedOfficeId;
              const xPos = office.coordinates.x;
              const yPos = office.coordinates.y;
              return (
                <button
                  key={office.id}
                  onClick={() => setSelectedOfficeId(office.id)}
                  className="absolute group transition-transform hover:scale-110 focus:outline-none cursor-pointer"
                  style={{ left: `${xPos}%`, top: `${yPos}%` }}
                >
                  <span className="relative flex h-3 w-3">
                    {isSelected && (
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
                    )}
                    <span
                      className={`relative inline-flex rounded-full h-3 w-3 ${
                        isSelected ? "bg-brand-gold" : "bg-gray-600 group-hover:bg-white"
                      }`}
                    ></span>
                  </span>

                  {/* Tiny text label */}
                  <span className="absolute left-4 -top-2 bg-black/80 border border-white/10 text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-sm text-gray-300 pointer-events-none whitespace-nowrap">
                    {office.city}
                  </span>
                </button>
              );
            })}

            {/* Interactive World Map instructions */}
            <span className="absolute bottom-3 left-3 text-[9px] font-mono text-gray-500 uppercase tracking-widest bg-black border border-white/10 px-2 py-0.5 rounded-sm">
              Interactive Network Terminal
            </span>
          </div>

          {/* Active Detail Sheet */}
          <div className="bg-[#0f0f0f] p-5 rounded-sm border border-white/5 space-y-4">
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <div className="flex items-center space-x-2.5">
                <div className="p-2 bg-white/5 rounded-sm text-brand-gold border border-white/10">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display font-light text-base text-white">
                    {selectedOffice.building}
                  </h4>
                  <span className="text-[10px] font-mono text-gray-500 block">
                    {selectedOffice.city}, {selectedOffice.country}
                  </span>
                </div>
              </div>

              {/* Timezone Indicator */}
              <div className="text-right">
                <span className="text-[9px] font-mono text-gray-500 block animate-pulse">LOCAL TIME</span>
                <span className="text-xs font-bold font-mono text-white">
                  {clocks[selectedOffice.timezone] || "--:--:--"}
                </span>
              </div>
            </div>

            {/* Address detail and description */}
            <div className="space-y-2.5">
              <div className="text-xs text-gray-400 font-sans leading-relaxed">
                <strong className="text-white font-semibold block mb-0.5">Physical Address:</strong>
                {selectedOffice.address}
              </div>

              <div className="text-xs text-gray-400 font-sans leading-relaxed">
                <strong className="text-white font-semibold block mb-0.5">Primary Operations:</strong>
                {selectedOffice.details}
              </div>
            </div>

            {/* Action quick links */}
            <div className="pt-3 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px] font-mono text-gray-500">
              <div className="flex items-center">
                <Mail className="w-3.5 h-3.5 mr-2 text-brand-gold-light" />
                <span>Sahil@Sidigiqor.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-3.5 h-3.5 mr-2 text-brand-gold-light" />
                <span>+91 99115 39101</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
