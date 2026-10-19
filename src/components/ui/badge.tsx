import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "blue" | "emerald" | "navy" | "outline" | "slate";
  size?: "sm" | "md";
  className?: string;
}

export function Badge({
  children,
  variant = "blue",
  size = "md",
  className = "",
}: BadgeProps) {
  const sizeClasses = size === "sm" ? "px-2 py-0.5 text-[11px]" : "px-2.5 py-1 text-xs";

  const variantClasses = {
    blue: "bg-blue-500/10 text-[#1877F2] border border-blue-500/20 dark:bg-blue-500/15 dark:text-blue-400 dark:border-blue-500/30",
    emerald: "bg-emerald-500/10 text-[#099A6E] border border-emerald-500/20 dark:bg-emerald-500/15 dark:text-[#0BCB91] dark:border-emerald-500/30",
    navy: "bg-[#000B49]/10 text-[#000B49] border border-[#000B49]/20 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700",
    outline: "bg-transparent border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300",
    slate: "bg-slate-100 text-slate-700 border border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700",
  };

  return (
    <span
      className={`inline-flex items-center font-semibold rounded-full tracking-wide transition-colors ${sizeClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
