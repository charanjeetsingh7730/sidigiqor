import React, { useState } from "react";
import {
  Users,
  Activity,
  CheckCircle,
  Sliders,
  Tv,
  MessageSquare,
  BarChart3
} from "lucide-react";

type ActionMode = "analytics" | "booth" | "outreach" | "warroom";

export default function WarRoomShowcase() {
  const [activeMode, setActiveMode] = useState<ActionMode>("analytics");
  const [swingSimPercentage, setSwingSimPercentage] = useState<number>(54.2);
  const [voterOutreachCount, setVoterOutreachCount] = useState<number>(312450);
  const [activeAlerts, setActiveAlerts] = useState<string[]>([
    "Booth #143: Critical voter list discrepancies resolved.",
    "War Room feed: Social outreach engagement increased 14.5% in rural segments.",
    "Survey report: Shift in swing voters towards infrastructural themes detected."
  ]);

  const handleActionTrigger = (mode: ActionMode) => {
    setActiveMode(mode);
    // Animate numbers and feeds mock data based on selection
    if (mode === "analytics") {
      setSwingSimPercentage(56.8);
      setVoterOutreachCount(425000);
      setActiveAlerts([
        "Demographics map: Polling profiles generated for 2,400 constituencies.",
        "Analytical sweep: Infrastructure theme tracking high in Segment A.",
        "Swing prediction: Shift of 3.2% recorded in core marginal cohorts."
      ]);
    } else if (mode === "booth") {
      setSwingSimPercentage(53.1);
      setVoterOutreachCount(289120);
      setActiveAlerts([
        "Booth App Sync: 1,420 field volunteers reported online in 10 minutes.",
        "Offline Database: Synchronized voter data for 48 rural booths.",
        "Door-to-door checklist: Coverage reached 89.4% in primary sectors."
      ]);
    } else if (mode === "outreach") {
      setSwingSimPercentage(58.4);
      setVoterOutreachCount(580140);
      setActiveAlerts([
        "GEO Campaign: AI search visibility optimization pushed content to top ranks.",
        "Voter Broadcaster: WhatsApp/SMS queuing dispatched 120,000 feedback surveys.",
        "Social Listening: Sentiment trend shifted positive (+4.8%) in urban sectors."
      ]);
    } else if (mode === "warroom") {
      setSwingSimPercentage(55.5);
      setVoterOutreachCount(356000);
      setActiveAlerts([
        "Video Monitor: 12 TV regional feeds analyzed for core topic tracking.",
        "Crisis Response: Media alert flagged and countered in real-time.",
        "Leadership Hub: Candidate's schedule optimized based on demographic gap reports."
      ]);
    }
  };

  const getModeTitle = () => {
    switch (activeMode) {
      case "analytics":
        return "Constituency Analytics & Demographic Sweeps";
      case "booth":
        return "Booth Management & Offline Field Support";
      case "outreach":
        return "Voter Engagement & AI GEO Outreach";
      case "warroom":
        return "Command War Room & Media Crisis Control";
    }
  };

  const getModeDescription = () => {
    switch (activeMode) {
      case "analytics":
        return "Using advanced data science models to synthesize voter rosters, historical turnouts, and economic indicators. We map micro-demographics to provide campaigns with strategic data clarity.";
      case "booth":
        return "Deploying offline-first mobile applications that empower local booth agents. Volunteers coordinate home visits, flag voter migration, and synchronize lists securely with headquarters.";
      case "outreach":
        return "Hyper-targeted digital campaigning utilizing AI Search Optimization (GEO) and custom communications CRM to manage volunteer tasks and direct voter interactions.";
      case "warroom":
        return "A state-of-the-art physical command center. Real-time media feeds, social sentiment scanners, and analytical maps compile key information for rapid candidate decisions.";
    }
  };

  return (
    <div className="w-full bg-[#0a0a0a] text-white rounded-sm p-6 sm:p-8 border border-white/5 shadow-xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/5 pb-5 mb-6 gap-4">
        <div>
          <span className="inline-flex items-center text-[10px] font-mono tracking-widest text-brand-gold font-bold uppercase">
            <Activity className="w-3.5 h-3.5 mr-1.5 animate-pulse text-brand-gold-light" />
            ELECTION OPERATIONS INTEL
          </span>
          <h3 className="font-display font-light text-2xl text-white mt-1 tracking-tight">
            Sidigiqor War Room Command Console
          </h3>
        </div>
        <div className="flex items-center space-x-2 bg-[#0f0f0f] border border-white/5 px-3 py-1.5 rounded-sm text-xs font-mono">
          <span className="w-2 h-2 bg-rose-500 rounded-full animate-ping"></span>
          <span className="text-gray-400">Campaign Status:</span>
          <span className="text-rose-400 font-bold uppercase">LIVE FEED</span>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Mode Selection Controls */}
        <div className="lg:col-span-4 space-y-2">
          <span className="block text-[9px] font-mono uppercase tracking-widest text-gray-500 font-bold mb-1">
            Toggle Capability Module
          </span>

          <button
            onClick={() => handleActionTrigger("analytics")}
            className={`w-full flex items-start p-3.5 rounded-sm border text-left transition-all cursor-pointer ${
              activeMode === "analytics"
                ? "bg-white/10 border-brand-gold text-brand-gold-light shadow-md"
                : "bg-black/30 border-white/5 hover:border-white/10 hover:bg-white/[0.02]"
            }`}
          >
            <BarChart3 className="w-5 h-5 mr-3 mt-0.5 shrink-0" />
            <div>
              <span className="font-display font-semibold text-xs block">Constituency Analytics</span>
              <span className="text-[10px] text-gray-400 mt-0.5 block line-clamp-2 font-sans">
                Predictive demographics, voter rosters, swing predictions
              </span>
            </div>
          </button>

          <button
            onClick={() => handleActionTrigger("booth")}
            className={`w-full flex items-start p-3.5 rounded-sm border text-left transition-all cursor-pointer ${
              activeMode === "booth"
                ? "bg-white/10 border-brand-gold text-brand-gold-light shadow-md"
                : "bg-black/30 border-white/5 hover:border-white/10 hover:bg-white/[0.02]"
            }`}
          >
            <Users className="w-5 h-5 mr-3 mt-0.5 shrink-0" />
            <div>
              <span className="font-display font-semibold text-xs block">Booth Management Apps</span>
              <span className="text-[10px] text-gray-400 mt-0.5 block line-clamp-2 font-sans">
                Offline-first roster synchronization, booth target mappings
              </span>
            </div>
          </button>

          <button
            onClick={() => handleActionTrigger("outreach")}
            className={`w-full flex items-start p-3.5 rounded-sm border text-left transition-all cursor-pointer ${
              activeMode === "outreach"
                ? "bg-white/10 border-brand-gold text-brand-gold-light shadow-md"
                : "bg-black/30 border-white/5 hover:border-white/10 hover:bg-white/[0.02]"
            }`}
          >
            <MessageSquare className="w-5 h-5 mr-3 mt-0.5 shrink-0" />
            <div>
              <span className="font-display font-semibold text-xs block">Voter outreach & AI SEO</span>
              <span className="text-[10px] text-gray-400 mt-0.5 block line-clamp-2 font-sans">
                GEO search dominance, feedback loops, custom CRM tasks
              </span>
            </div>
          </button>

          <button
            onClick={() => handleActionTrigger("warroom")}
            className={`w-full flex items-start p-3.5 rounded-sm border text-left transition-all cursor-pointer ${
              activeMode === "warroom"
                ? "bg-white/10 border-brand-gold text-brand-gold-light shadow-md"
                : "bg-black/30 border-white/5 hover:border-white/10 hover:bg-white/[0.02]"
            }`}
          >
            <Tv className="w-5 h-5 mr-3 mt-0.5 shrink-0" />
            <div>
              <span className="font-display font-semibold text-xs block">Command War Room</span>
              <span className="text-[10px] text-gray-400 mt-0.5 block line-clamp-2 font-sans">
                Multi-feed monitoring, real-time crisis dispatch, planning hubs
              </span>
            </div>
          </button>
        </div>

        {/* Right: Simulated Telemetry Console */}
        <div className="lg:col-span-8 bg-[#0f0f0f] rounded-sm border border-white/5 p-5 flex flex-col justify-between space-y-6">
          {/* Dashboard Header */}
          <div>
            <h4 className="font-display font-light text-base text-white flex items-center">
              <Sliders className="w-4 h-4 text-brand-gold-light mr-2" />
              {getModeTitle()}
            </h4>
            <p className="text-xs text-gray-400 mt-1.5 leading-relaxed font-sans">
              {getModeDescription()}
            </p>
          </div>

          {/* Interactive Live-Feel Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-b border-white/5 py-4">
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-gray-500 uppercase block">Outreach Coverage</span>
              <div className="flex items-baseline space-x-1.5">
                <span className="text-lg font-bold font-mono tracking-tight text-white" suppressHydrationWarning>
                  {voterOutreachCount.toLocaleString()}
                </span>
                <span className="text-[10px] text-emerald-400 font-mono font-bold">+12%</span>
              </div>
              <span className="text-[9px] text-gray-500 block">Verified voters reached</span>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-mono text-gray-500 uppercase block">Swing Voter Sentiment</span>
              <div className="flex items-baseline space-x-1.5">
                <span className="text-lg font-bold font-mono tracking-tight text-brand-gold-light">
                  {swingSimPercentage}%
                </span>
                <span className="text-[10px] text-gray-400 font-mono font-semibold">Positive</span>
              </div>
              <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden mt-1">
                <div
                  className="bg-brand-gold h-full rounded-full transition-all duration-500"
                  style={{ width: `${swingSimPercentage}%` }}
                ></div>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1 space-y-1">
              <span className="text-[10px] font-mono text-gray-500 uppercase block">Active Booths Mapped</span>
              <div className="flex items-baseline space-x-1.5">
                <span className="text-lg font-bold font-mono tracking-tight text-white">1,850</span>
                <span className="text-[10px] font-mono text-gray-400">/ 2,000</span>
              </div>
              <span className="text-[9px] text-gray-500 block">92.5% live coverage</span>
            </div>
          </div>

          {/* Simulated Live Terminal Logs */}
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-brand-gold font-bold uppercase tracking-wider block">
              War Room Feed (Live Sync)
            </span>
            <div className="bg-black/30 border border-white/5 rounded-sm p-3 font-mono text-[11px] text-gray-400 space-y-1.5 min-h-[90px]">
              {activeAlerts.map((alert, idx) => (
                <div key={idx} className="flex items-start">
                  <span className="text-brand-gold-light mr-2 select-none">&gt;</span>
                  <p className="flex-1 leading-normal font-mono">{alert}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Info Banner */}
          <div className="flex items-center gap-3 bg-brand-gold-soft border border-brand-gold/20 p-3 rounded-sm text-xs text-brand-gold-light">
            <CheckCircle className="w-5 h-5 text-brand-gold shrink-0" />
            <p className="leading-normal font-sans">
              <strong>Sidigiqor Difference:</strong> We merge demographic consulting, offline roster tracking, and high-tech war-rooms into a unified command model to eliminate vendor coordination delays.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
