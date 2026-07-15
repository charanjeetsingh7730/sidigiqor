import React from "react";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  lightMode?: boolean;
}

export default function Logo({ className = "", iconOnly = false, lightMode = false }: LogoProps) {
  return (
    <div className={`flex items-center space-x-3 select-none ${className}`}>
      {/* Premium SVG Gold Logo Icon */}
      <div className="relative w-10 h-10 flex-shrink-0">
        <svg
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
        >
          {/* Gold Gradient Definitions */}
          <defs>
            <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f3d078" />
              <stop offset="30%" stopColor="#d29f44" />
              <stop offset="70%" stopColor="#9a6e1a" />
              <stop offset="100%" stopColor="#fce7a2" />
            </linearGradient>
            <linearGradient id="gold-glow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f3d078" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#9a6e1a" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Subtle gold outer glow for premium aesthetic */}
          <circle cx="60" cy="60" r="48" fill="url(#gold-glow)" opacity="0.15" />

          {/* Left Circuit Tracks */}
          <g stroke="url(#gold-gradient)" strokeWidth="1.5" strokeLinecap="round" opacity="0.85">
            {/* Track 1 */}
            <path d="M38 42 H30" />
            <circle cx="28" cy="42" r="2" fill="url(#gold-gradient)" />
            {/* Track 2 */}
            <path d="M35 55 H26 M26 55 L22 51" />
            <circle cx="20" cy="51" r="2" fill="url(#gold-gradient)" />
            {/* Track 3 */}
            <path d="M38 68 H28 M28 68 L24 72" />
            <circle cx="22" cy="72" r="2" fill="url(#gold-gradient)" />
            {/* Track 4 */}
            <path d="M43 82 H35 L31 86" />
            <circle cx="29" cy="86" r="2" fill="url(#gold-gradient)" />
          </g>

          {/* Right Circuit Tracks */}
          <g stroke="url(#gold-gradient)" strokeWidth="1.5" strokeLinecap="round" opacity="0.85">
            {/* Track 1 */}
            <path d="M82 42 H90" />
            <circle cx="92" cy="42" r="2" fill="url(#gold-gradient)" />
            {/* Track 2 */}
            <path d="M85 55 H94 M94 55 L98 51" />
            <circle cx="100" cy="51" r="2" fill="url(#gold-gradient)" />
            {/* Track 3 */}
            <path d="M82 68 H92 M92 68 L96 72" />
            <circle cx="98" cy="72" r="2" fill="url(#gold-gradient)" />
            {/* Track 4 */}
            <path d="M77 82 H85 L89 86" />
            <circle cx="91" cy="86" r="2" fill="url(#gold-gradient)" />
          </g>

          {/* Shield Outer Segmented Path */}
          <path
            d="M60 22 
               C68 22, 75 24, 82 27 
               L82 44 
               C82 68, 70 85, 60 95 
               C50 85, 38 68, 38 44 
               L38 27 
               C45 24, 52 22, 60 22 Z"
            stroke="url(#gold-gradient)"
            strokeWidth="3.5"
            strokeLinejoin="round"
            strokeLinecap="round"
            fill="none"
          />

          {/* Shield Inner Path */}
          <path
            d="M60 29
               C66 29, 71 31, 76 33
               L76 46
               C76 65, 66 79, 60 87
               C54 79, 44 65, 44 46
               L44 33
               C49 31, 54 29, 60 29 Z"
            stroke="url(#gold-gradient)"
            strokeWidth="1.2"
            fill="none"
            opacity="0.7"
          />

          {/* Stylized Serif "S" inside the shield */}
          {/* Custom crafted bezier curves representing the elegant curves of S */}
          <path
            d="M68 39 
               C68 39, 68 43, 64 43 
               C59 43, 56 46, 56 49 
               C56 53, 66 53, 66 59 
               C66 65, 59 67, 53 66 
               C51 66, 49 64, 49 64
               C49 64, 51 61, 53 61 
               C56 61, 58 59, 58 57 
               C58 53, 50 53, 50 47 
               C50 41, 58 39, 68 39 Z"
            fill="url(#gold-gradient)"
            className="drop-shadow-md"
          />
          {/* Elegant serif crossbar detailing */}
          <path
            d="M63 43 C65 44, 66 46, 66 48 C66 47, 65 44, 63 43 Z"
            fill="url(#gold-gradient)"
          />
          <path
            d="M51 64 C50 62, 49 60, 49 58 C49 59, 50 62, 51 64 Z"
            fill="url(#gold-gradient)"
          />
        </svg>
      </div>

      {!iconOnly && (
        <div className="flex flex-col">
          <span className={`font-display font-bold text-xl tracking-tight leading-none ${lightMode ? "text-slate-900" : "text-white"}`}>
            SIDIGIQOR
          </span>
          <span className="text-[8px] font-mono tracking-[0.25em] text-amber-600 font-extrabold uppercase mt-1 leading-none">
            Technologies
          </span>
        </div>
      )}
    </div>
  );
}
