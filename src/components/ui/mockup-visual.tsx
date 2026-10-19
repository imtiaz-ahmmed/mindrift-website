import React from "react";
import {
  MapPin,
  CheckCircle2,
  Clock,
  Shield,
  Layers,
  Server,
  Activity,
  Cpu,
  UserCheck,
  Smartphone,
  Navigation,
} from "lucide-react";

interface MockupVisualProps {
  type: "mobile" | "dashboard" | "gis" | "cloud" | "security";
  title: string;
  className?: string;
}

export function MockupVisual({ type, title, className = "" }: MockupVisualProps) {
  if (type === "mobile") {
    return (
      <div
        className={`relative w-full max-w-sm mx-auto aspect-[9/16] max-h-[480px] bg-slate-900 rounded-[2.5rem] p-3.5 shadow-2xl border-4 border-slate-700/60 dark:border-slate-800 ${className}`}
      >
        {/* Notch */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-4 bg-slate-800 rounded-full z-20 flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-900 mr-2" />
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500/80" />
        </div>

        {/* Screen */}
        <div className="w-full h-full bg-[#050B20] rounded-[2rem] overflow-hidden flex flex-col p-4 text-white relative">
          <div className="pt-6 pb-3 border-b border-slate-800/80 flex items-center justify-between">
            <div>
              <span className="text-[10px] text-slate-400 font-mono">LYFE ATTEND MOBILE</span>
              <h5 className="text-sm font-bold text-white">Daily Field Check-in</h5>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-[#0BCB91] bg-[#0BCB91]/10 px-2 py-0.5 rounded-full border border-[#0BCB91]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0BCB91] animate-pulse" />
              GPS Active
            </div>
          </div>

          {/* Simulated Geofence Radar */}
          <div className="my-auto py-4 text-center relative flex flex-col items-center justify-center">
            <div className="w-36 h-36 rounded-full border border-blue-500/20 flex items-center justify-center relative animate-pulse">
              <div className="w-28 h-28 rounded-full border border-[#0BCB91]/30 flex items-center justify-center bg-blue-950/20">
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#1877F2] to-[#0BCB91] flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <UserCheck className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-blue-600 rounded text-[9px] font-mono">
                Inside Perimeter
              </div>
            </div>

            <div className="mt-3 space-y-0.5">
              <span className="text-xs font-semibold text-slate-200">Branch Metro Hub #04</span>
              <p className="text-[10px] text-slate-400 font-mono">Accuracy: ±3.8m · Spoof Check: Passed</p>
            </div>
          </div>

          {/* Action Log Card */}
          <div className="space-y-2 mt-auto">
            <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0BCB91]" />
                <div>
                  <div className="text-[11px] font-semibold">Morning Clock-In</div>
                  <div className="text-[9px] text-slate-400">08:58:14 AM · Verified</div>
                </div>
              </div>
              <span className="text-[10px] font-mono text-blue-400">SYNCED</span>
            </div>

            <div className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#1877F2] to-[#0BCB91] text-center text-xs font-bold text-white shadow-md">
              Tap to Register Departure
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "gis") {
    return (
      <div
        className={`w-full aspect-[16/10] bg-[#070F2B] rounded-2xl p-4 border border-slate-800 shadow-2xl text-white relative overflow-hidden flex flex-col justify-between ${className}`}
      >
        {/* Header HUD */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-2.5 z-10">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            <span className="ml-2 text-xs font-mono text-slate-300">GeoConnect Spatial Viewer</span>
          </div>
          <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
            <span>Query: 11.4ms</span>
            <span className="text-[#0BCB91]">PostGIS: Active</span>
          </div>
        </div>

        {/* Vector Map Grid Visualization */}
        <div className="absolute inset-x-0 inset-y-12 bg-grid-pattern opacity-40" />

        {/* Center Spatial Map Layer */}
        <div className="relative z-10 my-auto flex items-center justify-center">
          <div className="relative w-64 h-40 border border-blue-500/30 rounded-xl bg-blue-950/20 backdrop-blur-xs flex items-center justify-center">
            {/* Concentric Proximity Buffer Rings */}
            <div className="absolute w-48 h-48 rounded-full border border-dashed border-[#0BCB91]/30" />
            <div className="absolute w-32 h-32 rounded-full border border-[#1877F2]/40" />

            {/* Simulated Points of Interest */}
            <div className="absolute top-6 left-12 flex items-center gap-1 bg-[#1877F2] text-[10px] px-1.5 py-0.5 rounded font-bold shadow">
              <MapPin className="w-3 h-3" /> POI #821
            </div>
            <div className="absolute bottom-8 right-14 flex items-center gap-1 bg-[#0BCB91] text-[10px] text-slate-900 px-1.5 py-0.5 rounded font-bold shadow">
              <MapPin className="w-3 h-3" /> POI #943
            </div>
            <div className="absolute top-10 right-20 w-2.5 h-2.5 rounded-full bg-blue-400 animate-ping" />
            <div className="w-3.5 h-3.5 rounded-full bg-white shadow-lg shadow-white/50" />
          </div>
        </div>

        {/* Bottom HUD Bar */}
        <div className="relative z-10 flex items-center justify-between text-xs font-mono pt-2 border-t border-slate-800 text-slate-400">
          <div>EPSG:4326 · Bounding Box [-74.02, 40.71, -73.93, 40.78]</div>
          <div className="text-[#0BCB91]">1,280,412 Indexed Entities</div>
        </div>
      </div>
    );
  }

  if (type === "dashboard") {
    return (
      <div
        className={`w-full aspect-[16/10] bg-[#070F2B] rounded-2xl p-4 border border-slate-800 shadow-2xl text-white relative overflow-hidden flex flex-col justify-between ${className}`}
      >
        <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#1877F2]" />
            <span className="text-xs font-bold text-white">Leave Governance & Approval Portal</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-[#0BCB91] border border-emerald-500/30">
            Policy Engine: Enforced
          </span>
        </div>

        {/* Middle Stats & Approval Chain */}
        <div className="grid grid-cols-3 gap-3 my-auto py-2">
          <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
            <span className="text-[10px] text-slate-400 uppercase font-mono">Annual Accrual</span>
            <div className="text-lg font-bold text-white mt-1">18.5 Days</div>
            <span className="text-[10px] text-[#0BCB91]">+1.5 days accrued</span>
          </div>
          <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
            <span className="text-[10px] text-slate-400 uppercase font-mono">Pending Reviews</span>
            <div className="text-lg font-bold text-[#1877F2] mt-1">3 Requests</div>
            <span className="text-[10px] text-slate-400">Avg turn: 3.2 hrs</span>
          </div>
          <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
            <span className="text-[10px] text-slate-400 uppercase font-mono">Coverage Ratio</span>
            <div className="text-lg font-bold text-[#0BCB91] mt-1">94.2%</div>
            <span className="text-[10px] text-slate-400">Team minimum met</span>
          </div>
        </div>

        {/* Approval Flow Visualizer */}
        <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-slate-300">Approval State: Medical Leave #4910</span>
            <span className="text-[10px] font-mono text-yellow-400">Pending Dept Head</span>
          </div>
          <div className="flex items-center gap-2 pt-1">
            <div className="flex-1 h-1.5 rounded-full bg-[#0BCB91]" />
            <div className="flex-1 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
            <div className="flex-1 h-1.5 rounded-full bg-slate-700" />
          </div>
          <div className="flex justify-between text-[10px] text-slate-400 font-mono">
            <span>1. Lead: Approved</span>
            <span>2. Dept Head: Reviewing</span>
            <span>3. HR Admin: Queued</span>
          </div>
        </div>
      </div>
    );
  }

  // Cloud & Security fallback diagrams
  return (
    <div
      className={`w-full aspect-[16/10] bg-[#070F2B] rounded-2xl p-4 border border-slate-800 shadow-2xl text-white relative overflow-hidden flex flex-col justify-between ${className}`}
    >
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <div className="flex items-center gap-2">
          {type === "security" ? (
            <Shield className="w-4 h-4 text-[#0BCB91]" />
          ) : (
            <Server className="w-4 h-4 text-[#1877F2]" />
          )}
          <span className="text-xs font-bold text-white">{title}</span>
        </div>
        <span className="text-[10px] font-mono text-[#0BCB91] bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
          Zero-Trust Verified
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 my-auto py-2">
        <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 space-y-1">
          <div className="text-[10px] font-mono text-slate-400">AUTH & TOKEN ENCLAVE</div>
          <div className="text-sm font-bold text-white">OAuth 2.0 / OIDC</div>
          <div className="text-[10px] text-[#0BCB91] font-mono">Latency: 2.4ms (JWKS Cached)</div>
        </div>
        <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 space-y-1">
          <div className="text-[10px] font-mono text-slate-400">NETWORK POLICY GATEWAY</div>
          <div className="text-sm font-bold text-white">Default-Deny Ingress</div>
          <div className="text-[10px] text-blue-400 font-mono">Tls 1.3 Strict Mutual Auth</div>
        </div>
      </div>

      <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
        <div className="flex items-center gap-2">
          <Activity className="w-3.5 h-3.5 text-[#0BCB91]" />
          <span>Real-Time Audit Trail: Active Stream</span>
        </div>
        <span className="text-white">99.99% Uptime</span>
      </div>
    </div>
  );
}
